#!/usr/bin/env node
/**
 * scripts/playwright/run-validation.mjs
 *
 * ============================================================================
 * VALIDATION METHODOLOGY: COGNITIVE WALKTHROUGH + FEATURE INSPECTION
 * ============================================================================
 *
 * This script uses TWO complementary approaches for UI validation:
 *
 * 1. COGNITIVE WALKTHROUGH:
 *    - Explores the UI from a user's perspective
 *    - Follows logical navigation patterns (not literal breadcrumbs)
 *    - Asks: "Can a user accomplish this task?"
 *    - Documents the actual path discovered vs expected
 *
 * 2. FEATURE INSPECTION:
 *    - Searches for UI elements matching feature keywords
 *    - Looks for labels, headings, buttons, inputs related to the feature
 *    - Documents what elements exist vs what was expected
 *    - Captures evidence screenshots of discovered elements
 *
 * IMPORTANT: Navigation paths and procedures are CONTEXT SETTERS, not literal
 * instructions. They help understand:
 *   - What the feature does (from procedures)
 *   - Where it might be located (from navigation hints)
 *   - What terminology to search for (keywords extraction)
 *
 * The validator does NOT blindly follow paths - it EXPLORES intelligently.
 *
 * Input:
 * {
 *   feature_name: string,
 *   claims_to_validate: array,
 *   navigation_paths: (array OR object) - CONTEXT for expected location
 *   procedures: array - CONTEXT for feature behavior and terminology
 *   app: { base_url, username, password }
 * }
 *
 * Output:
 * {
 *   status: "pass"|"partial"|"fail",
 *   methodology: "cognitive_walkthrough_and_feature_inspection",
 *   feature_context: {...},      // Extracted understanding of the feature
 *   exploration_results: [...],  // What was discovered through exploration
 *   feature_inspection: {...},   // Elements found matching feature keywords
 *   claim_validations: [...],    // Claims checked against actual UI
 *   screenshots: [...],          // Evidence captured
 *   summary: {...}
 * }
 */

import fs from "fs";
import path from "path";
import process from "process";
import { chromium } from "@playwright/test";

// ------------------ CLI args ------------------
function getArg(name, def = null) {
  const i = process.argv.indexOf(name);
  if (i === -1) return def;
  const v = process.argv[i + 1];
  if (!v || v.startsWith("--")) return def;
  return v;
}

const ROOT = process.cwd();
const INPUT_PATH = getArg("--input", path.join(ROOT, ".validation/input/request.json"));
const OUT_PATH = getArg("--out", path.join(ROOT, ".validation/output/pw_result.json"));
const SCREENSHOTS_DIR = getArg("--screenshots", path.join(ROOT, ".validation/output/screenshots"));

// timeouts / limits
const GOTO_TIMEOUT = Number(process.env.PLAYWRIGHT_GOTO_TIMEOUT_MS || 45000);
const STEP_TIMEOUT = Number(process.env.PLAYWRIGHT_STEP_TIMEOUT_MS || 15000);
const HEADLESS = (process.env.PLAYWRIGHT_HEADLESS ?? "true") !== "false";

// Bound navigation checks so we don't explode CI time on huge trees.
// You can raise this later if needed.
const MAX_NAV_PAGES = Number(process.env.PLAYWRIGHT_MAX_NAV_PAGES || 30);

// ------------------ helpers ------------------
function nowISO() {
  return new Date().toISOString();
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function readJSON(filePath) {
  if (!fs.existsSync(filePath)) throw new Error(`Input JSON not found: ${filePath}`);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function safeString(x) {
  if (x === null || x === undefined) return "";
  return String(x);
}

function sanitizeFileName(name) {
  return safeString(name)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9._-]+/g, "")
    .slice(0, 80) || "unnamed";
}

function buildShotLabel(parts) {
  // parts: array of strings; remove empties; join with "__"
  const clean = (parts || [])
    .map(p => safeString(p).trim())
    .filter(Boolean)
    .join("__");
  return clean || "shot";
}

async function saveScreenshot(page, screenshotsDir, label) {
  try {
    const file = `${sanitizeFileName(label)}.png`;
    const fullPath = path.join(screenshotsDir, file);
    // Always capture viewport-only for contextually relevant screenshots
    await page.screenshot({ path: fullPath, fullPage: false });
    return path.relative(ROOT, fullPath);
  } catch {
    return null;
  }
}

function writeOutput(outPath, obj) {
  ensureDir(path.dirname(outPath));
  fs.writeFileSync(outPath, JSON.stringify(obj, null, 2));
}

function joinUrl(baseUrl, pth) {
  const b = safeString(baseUrl).replace(/\/+$/, "");
  const p = safeString(pth).trim();
  if (!p) return b;
  if (/^https?:\/\//i.test(p)) return p;
  return `${b}${p.startsWith("/") ? "" : "/"}${p}`;
}

function isPlainObject(x) {
  return !!x && typeof x === "object" && !Array.isArray(x);
}

/**
 * Detect if a string is a breadcrumb path (e.g., "Settings > Payroll > Daily Wage")
 * vs an actual URL
 */
function isBreadcrumbPath(str) {
  if (!str || typeof str !== "string") return false;
  // If it looks like a URL, it's not a breadcrumb
  if (/^https?:\/\//i.test(str.trim())) return false;
  if (str.trim().startsWith("/")) return false;
  // Check for breadcrumb separators
  return /[>→›]/.test(str);
}

/**
 * Parse a breadcrumb string into an array of navigation items
 * "Settings > Payroll > Daily Wage" → ["Settings", "Payroll", "Daily Wage"]
 */
function parseBreadcrumb(breadcrumb) {
  if (!breadcrumb || typeof breadcrumb !== "string") return [];
  // Split by common breadcrumb separators: >, →, ›
  return breadcrumb
    .split(/\s*[>→›]\s*/)
    .map(s => s.trim())
    .filter(Boolean);
}

// ============================================================================
// CONTEXT EXTRACTION - Understanding the feature from provided context
// ============================================================================

/**
 * Extract keywords and understanding from feature name, procedures, and navigation paths.
 * This builds the "mental model" of what we're looking for.
 */
function extractFeatureContext(featureName, procedures, navigationPaths) {
  const context = {
    feature_name: featureName || "unknown",
    keywords: new Set(),
    navigation_hints: [],
    expected_ui_elements: [],
    expected_actions: [],
    domain_area: null  // e.g., "payroll", "settings", "employees"
  };

  // Extract keywords from feature name
  const featureWords = (featureName || "")
    .toLowerCase()
    .replace(/[_-]/g, " ")
    .split(/\s+/)
    .filter(w => w.length > 2);
  featureWords.forEach(w => context.keywords.add(w));

  // Extract from procedures (these describe HOW the feature works)
  if (Array.isArray(procedures)) {
    for (const proc of procedures) {
      const title = proc.title || proc.name || "";
      const steps = Array.isArray(proc.steps) ? proc.steps : [];

      // Keywords from procedure title
      title.toLowerCase().split(/\s+/).filter(w => w.length > 3).forEach(w => context.keywords.add(w));

      // Extract from procedure steps
      for (const step of steps) {
        const stepText = typeof step === "string" ? step : (step.text || step.description || "");

        // Look for action verbs and nouns
        const words = stepText.toLowerCase().split(/\s+/).filter(w => w.length > 3);
        words.forEach(w => context.keywords.add(w));

        // Look for navigation hints like "Go to Settings" or "Navigate to Payroll"
        const navMatch = stepText.match(/(?:go to|navigate to|click on|open|select)\s+([^.,]+)/i);
        if (navMatch) {
          context.navigation_hints.push(navMatch[1].trim());
        }

        // Look for UI element references
        const uiMatch = stepText.match(/(?:click|toggle|check|select|enter|input|button|field|tab|menu)\s+([^.,]+)/i);
        if (uiMatch) {
          context.expected_ui_elements.push(uiMatch[1].trim());
        }
      }
    }
  }

  // Extract navigation hints from navigation paths (CONTEXT, not literal paths)
  if (navigationPaths) {
    const extractFromNav = (obj, prefix = "") => {
      if (!obj) return;
      if (typeof obj === "string") {
        // Could be a breadcrumb like "Settings > Payroll > Daily Wage"
        const parts = parseBreadcrumb(obj);
        parts.forEach(p => {
          context.navigation_hints.push(p);
          context.keywords.add(p.toLowerCase());
        });
        return;
      }
      if (Array.isArray(obj)) {
        obj.forEach((item, i) => extractFromNav(item, `${prefix}[${i}]`));
        return;
      }
      if (isPlainObject(obj)) {
        // Extract titles and meaningful keys
        if (obj.title) context.navigation_hints.push(obj.title);
        if (obj.name) context.navigation_hints.push(obj.name);

        for (const key of Object.keys(obj)) {
          if (["path", "url", "href"].includes(key)) continue;
          if (key === "ui_elements") continue;
          extractFromNav(obj[key], `${prefix}.${key}`);
        }
      }
    };
    extractFromNav(navigationPaths);
  }

  // Identify domain area from keywords
  const domainKeywords = {
    payroll: ["payroll", "salary", "wage", "payment", "deduction", "earnings"],
    settings: ["settings", "configuration", "config", "preferences", "setup"],
    employees: ["employee", "staff", "worker", "team", "member"],
    leave: ["leave", "vacation", "absence", "time off", "pto"],
    benefits: ["benefits", "insurance", "health", "medical"],
    reports: ["report", "analytics", "dashboard", "metrics"]
  };

  for (const [domain, keywords] of Object.entries(domainKeywords)) {
    if (keywords.some(k => context.keywords.has(k))) {
      context.domain_area = domain;
      break;
    }
  }

  // Convert Set to Array for JSON serialization
  context.keywords = [...context.keywords];
  context.navigation_hints = [...new Set(context.navigation_hints)];

  return context;
}

// ============================================================================
// COGNITIVE WALKTHROUGH - Explore UI like a user would
// ============================================================================

/**
 * Perform cognitive walkthrough: explore the UI to find the feature.
 * Uses navigation hints as GUIDANCE, not literal instructions.
 */
async function performCognitiveWalkthrough(page, featureContext, screenshotsDir) {
  const results = {
    methodology: "cognitive_walkthrough",
    goal: `Find and validate ${featureContext.feature_name} feature`,
    exploration_path: [],
    discovered_elements: [],
    screenshots: []
  };

  try {
    // Take initial screenshot
    const initialShot = await saveScreenshot(page, screenshotsDir, "walkthrough__initial_state");
    if (initialShot) results.screenshots.push({ stage: "initial", path: initialShot });

    // Strategy 1: Look for main navigation areas
    const mainNavAreas = [
      { name: "sidebar", selectors: ['nav', '[role="navigation"]', '.sidebar', '.nav-menu', '[class*="sidebar"]'] },
      { name: "header", selectors: ['header', '[role="banner"]', '.header', '.top-nav'] },
      { name: "menu", selectors: ['[role="menu"]', '[role="menubar"]', '.menu', '[class*="menu"]'] }
    ];

    for (const area of mainNavAreas) {
      for (const selector of area.selectors) {
        try {
          const element = page.locator(selector).first();
          if (await element.isVisible({ timeout: 2000 })) {
            // Get text content to understand what's available
            const text = await element.textContent().catch(() => "");
            results.exploration_path.push({
              action: "inspected_nav_area",
              area: area.name,
              selector: selector,
              content_preview: text.slice(0, 200).replace(/\s+/g, " ").trim()
            });
            break;
          }
        } catch {
          // Continue to next selector
        }
      }
    }

    // Strategy 2: Search for navigation hints from context
    for (const hint of featureContext.navigation_hints.slice(0, 10)) {
      // FIXED: Only skip actual workflow patterns, not menu items that happen to contain action words
      // "Daily Wage Calculation" is a menu item, not a workflow
      // "Leave Request > Approval" IS a workflow pattern
      const workflowPatterns = [
        /request\s*[>→›]\s*approval/i,
        /submit\s*[>→›]\s*review/i,
        /create\s*[>→›]\s*approve/i,
        /^\s*approval\s*$/i,  // Just "approval" alone suggests workflow step
        /^\s*request\s*$/i    // Just "request" alone suggests workflow step
      ];

      const isWorkflowTerm = workflowPatterns.some(pattern => pattern.test(hint));
      if (isWorkflowTerm) {
        results.exploration_path.push({
          action: "skipped_workflow_term",
          hint: hint,
          reason: "Appears to be a workflow step, not a navigation element"
        });
        continue;
      }

      // Try to find clickable element with this text
      const found = await findAndExploreElement(page, hint, screenshotsDir, featureContext.feature_name);
      if (found.success) {
        results.exploration_path.push({
          action: "found_and_clicked",
          hint: hint,
          method: found.method,
          result: "navigated"
        });
        results.discovered_elements.push(found);

        const navShot = await saveScreenshot(page, screenshotsDir, `walkthrough__after_${sanitizeFileName(hint)}`);
        if (navShot) results.screenshots.push({ stage: `after_${hint}`, path: navShot });

        // Wait for any navigation/animation
        await page.waitForTimeout(1000);
      } else {
        results.exploration_path.push({
          action: "not_found",
          hint: hint,
          attempted_selectors: found.attempted
        });
      }
    }

    // Strategy 3: Use domain area to find relevant section
    if (featureContext.domain_area) {
      const domainNavigation = {
        payroll: ["Payroll", "Pay", "Salary", "Compensation"],
        settings: ["Settings", "Configuration", "Setup", "Preferences"],
        employees: ["Employees", "People", "Staff", "Team"],
        leave: ["Leave", "Time Off", "Absence", "PTO"],
        benefits: ["Benefits", "Insurance", "Health"],
        reports: ["Reports", "Analytics", "Dashboard"]
      };

      const navTerms = domainNavigation[featureContext.domain_area] || [];
      for (const term of navTerms) {
        const found = await findAndExploreElement(page, term, screenshotsDir, featureContext.feature_name);
        if (found.success) {
          results.exploration_path.push({
            action: "domain_navigation",
            domain: featureContext.domain_area,
            term: term,
            result: "found_and_clicked"
          });
          const domainShot = await saveScreenshot(page, screenshotsDir, `walkthrough__domain_${sanitizeFileName(term)}`);
          if (domainShot) results.screenshots.push({ stage: `domain_${term}`, path: domainShot });
          break;
        }
      }
    }

    // Take final screenshot
    const finalShot = await saveScreenshot(page, screenshotsDir, "walkthrough__final_state");
    if (finalShot) results.screenshots.push({ stage: "final", path: finalShot });

    results.status = results.discovered_elements.length > 0 ? "success" : "partial";
  } catch (error) {
    results.status = "error";
    results.error = safeString(error.message);
  }

  return results;
}

/**
 * Try to find and optionally click an element by text
 */
async function findAndExploreElement(page, text, screenshotsDir, featureName) {
  const result = {
    text: text,
    success: false,
    method: null,
    attempted: []
  };

  // Strategy 1: Role-based search (most reliable)
  const roles = ["link", "button", "menuitem", "tab", "option"];
  for (const role of roles) {
    try {
      const element = page.getByRole(role, { name: text, exact: false }).first();
      if (await element.isVisible({ timeout: 1500 })) {
        await element.click({ timeout: 5000 });
        result.success = true;
        result.method = `getByRole(${role})`;
        return result;
      }
    } catch {
      result.attempted.push(`role:${role}`);
    }
  }

  // Strategy 2: Text-based search
  try {
    const element = page.getByText(text, { exact: false }).first();
    if (await element.isVisible({ timeout: 1500 })) {
      // Check if it's clickable
      const tagName = await element.evaluate(el => el.tagName.toLowerCase()).catch(() => "");
      if (["a", "button", "span", "div"].includes(tagName)) {
        await element.click({ timeout: 5000 });
        result.success = true;
        result.method = "getByText";
        return result;
      }
    }
  } catch {
    result.attempted.push("getByText");
  }

  // Strategy 3: CSS selector with text content
  const selectors = [
    `a:has-text("${text}")`,
    `button:has-text("${text}")`,
    `[role="menuitem"]:has-text("${text}")`,
    `li:has-text("${text}")`
  ];

  for (const selector of selectors) {
    try {
      const element = page.locator(selector).first();
      if (await element.isVisible({ timeout: 1500 })) {
        await element.click({ timeout: 5000 });
        result.success = true;
        result.method = selector;
        return result;
      }
    } catch {
      result.attempted.push(selector);
    }
  }

  return result;
}

// ============================================================================
// FEATURE INSPECTION - Search for feature-specific UI elements
// ============================================================================

/**
 * Inspect the current page for feature-related elements.
 * This answers: "Are the expected UI elements present?"
 */
async function performFeatureInspection(page, featureContext, screenshotsDir) {
  const results = {
    methodology: "feature_inspection",
    feature_name: featureContext.feature_name,
    keywords_searched: [],
    elements_found: [],
    elements_not_found: [],
    page_analysis: {},
    screenshots: []
  };

  try {
    // Get current page info
    results.page_analysis.url = page.url();
    results.page_analysis.title = await page.title();

    // Search for each keyword in the UI
    const keywordsToSearch = featureContext.keywords.slice(0, 15); // Limit for performance

    for (const keyword of keywordsToSearch) {
      if (keyword.length < 3) continue;

      const searchResult = {
        keyword: keyword,
        found: false,
        occurrences: 0,
        element_types: []
      };

      try {
        // Count occurrences of keyword in page
        const elements = page.getByText(keyword, { exact: false });
        const count = await elements.count();

        if (count > 0) {
          searchResult.found = true;
          searchResult.occurrences = count;

          // Get element types for first few matches
          for (let i = 0; i < Math.min(count, 3); i++) {
            try {
              const el = elements.nth(i);
              if (await el.isVisible({ timeout: 500 })) {
                const tagName = await el.evaluate(e => e.tagName.toLowerCase()).catch(() => "unknown");
                const role = await el.getAttribute("role").catch(() => null);
                searchResult.element_types.push({ tag: tagName, role: role });
              }
            } catch {
              // Skip this element
            }
          }

          results.elements_found.push(searchResult);
        } else {
          results.elements_not_found.push(keyword);
        }
      } catch {
        results.elements_not_found.push(keyword);
      }

      results.keywords_searched.push(keyword);
    }

    // Look for specific UI patterns related to the feature
    const uiPatterns = [
      { name: "forms", selector: "form" },
      { name: "tables", selector: "table" },
      { name: "cards", selector: '[class*="card"]' },
      { name: "modals", selector: '[role="dialog"]' },
      { name: "tabs", selector: '[role="tablist"]' },
      { name: "inputs", selector: "input, select, textarea" }
    ];

    results.page_analysis.ui_patterns = {};
    for (const pattern of uiPatterns) {
      try {
        const count = await page.locator(pattern.selector).count();
        if (count > 0) {
          results.page_analysis.ui_patterns[pattern.name] = count;
        }
      } catch {
        // Skip this pattern
      }
    }

    // Get all headings to understand page structure
    results.page_analysis.headings = [];
    try {
      const headings = page.locator("h1, h2, h3");
      const headingCount = await headings.count();
      for (let i = 0; i < Math.min(headingCount, 10); i++) {
        const text = await headings.nth(i).textContent().catch(() => "");
        if (text.trim()) {
          results.page_analysis.headings.push(text.trim().slice(0, 100));
        }
      }
    } catch {
      // Skip headings
    }

    // Take inspection screenshot
    const inspectionShot = await saveScreenshot(page, screenshotsDir, "inspection__feature_elements");
    if (inspectionShot) results.screenshots.push({ stage: "inspection", path: inspectionShot });

    results.status = results.elements_found.length > 0 ? "success" : "no_matches";
  } catch (error) {
    results.status = "error";
    results.error = safeString(error.message);
  }

  return results;
}

// ------------------ claims normalization ------------------
function normalizeClaimChecks(claims_to_validate) {
  if (!Array.isArray(claims_to_validate)) return [];
  return claims_to_validate.map((c, idx) => {
    const id = c?.id || c?.claim_id || `claim_${idx + 1}`;
    // FIXED: Also check for claim_text which is used in n8n workflow
    const text = c?.claim || c?.claim_text || c?.text || c?.statement || "";
    const url = c?.url || null;
    const claim_type = c?.claim_type || "unknown";
    const validation_hint = c?.validation_hint || "";
    const source = c?.source || "unknown";

    const selectors = []
      .concat(c?.selectors || [])
      .concat(c?.selector ? [c.selector] : [])
      .filter(Boolean);

    const expects_text = c?.expects_text || c?.expected_text || null;

    return { id, text, url, selectors, expects_text, claim_type, validation_hint, source, raw: c };
  });
}

// ------------------ SEMANTIC CLAIM VALIDATION ------------------
/**
 * Validates a claim without CSS selectors by searching for relevant keywords in page content.
 * This enables validation of claims from n8n workflow that don't have explicit selectors.
 *
 * Approach:
 * 1. Extract keywords from claim text
 * 2. Get page content via accessibility tree and text content
 * 3. Search for keywords and related terms
 * 4. Score the match and determine if claim can be validated
 * 5. Take screenshot for evidence
 */
async function performSemanticClaimValidation(page, claim, screenshotsDir) {
  const result = {
    action: "semantic_validation",
    name: `semantic_${claim.id}`,
    status: "pending",
    claim_text: claim.text,
    claim_type: claim.claim_type || "unknown",
    validation_hint: claim.validation_hint || "",
    source: claim.source || "unknown",
    keywords_searched: [],
    keywords_found: [],
    keywords_missing: [],
    match_score: 0,
    page_context: {},
    evidence: {},
    error: null
  };

  try {
    // Skip if no claim text to validate
    if (!claim.text || claim.text.trim().length < 5) {
      result.status = "skipped_no_claim_text";
      result.error = "Claim text is empty or too short to validate";
      return result;
    }

    // Extract meaningful keywords from claim text (words > 3 chars, excluding stop words)
    const stopWords = new Set([
      "the", "and", "for", "are", "but", "not", "you", "all", "can", "had", "her",
      "was", "one", "our", "out", "has", "have", "been", "will", "with", "this",
      "that", "from", "they", "were", "said", "each", "which", "their", "into",
      "than", "them", "being", "some", "could", "would", "there", "about"
    ]);

    const claimWords = claim.text
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter(w => w.length > 3 && !stopWords.has(w))
      .slice(0, 15); // Limit to 15 keywords

    result.keywords_searched = [...new Set(claimWords)];

    if (result.keywords_searched.length === 0) {
      result.status = "skipped_no_keywords";
      result.error = "No meaningful keywords extracted from claim";
      return result;
    }

    // Get page content via multiple methods for better coverage
    let pageText = "";

    // Method 1: Get text content from body
    try {
      pageText += await page.locator("body").textContent({ timeout: 5000 }).catch(() => "");
    } catch { /* continue */ }

    // Method 2: Get from specific UI elements (buttons, labels, headings, inputs)
    try {
      const uiElements = await page.locator("button, label, h1, h2, h3, h4, span, p, div[role='button'], a").allTextContents();
      pageText += " " + uiElements.join(" ");
    } catch { /* continue */ }

    // Method 3: Get aria-labels and placeholders
    try {
      const ariaElements = await page.locator("[aria-label], [placeholder], [title]").evaluateAll(
        elements => elements.map(el => `${el.getAttribute("aria-label") || ""} ${el.getAttribute("placeholder") || ""} ${el.getAttribute("title") || ""}`).join(" ")
      );
      pageText += " " + ariaElements;
    } catch { /* continue */ }

    // Normalize page text for searching
    const pageTextLower = pageText.toLowerCase();
    result.page_context.page_text_length = pageTextLower.length;

    // Search for each keyword
    for (const keyword of result.keywords_searched) {
      if (pageTextLower.includes(keyword)) {
        result.keywords_found.push(keyword);
      } else {
        result.keywords_missing.push(keyword);
      }
    }

    // Calculate match score
    const foundCount = result.keywords_found.length;
    const totalCount = result.keywords_searched.length;
    result.match_score = totalCount > 0 ? Math.round((foundCount / totalCount) * 100) : 0;

    // Determine validation status based on match score and claim type
    if (result.match_score >= 60) {
      result.status = "semantic_validated";
      result.evidence.validation_method = "keyword_match";
      result.evidence.confidence = result.match_score >= 80 ? "high" : "medium";
    } else if (result.match_score >= 30) {
      result.status = "semantic_partial";
      result.evidence.validation_method = "partial_keyword_match";
      result.evidence.confidence = "low";
    } else {
      result.status = "semantic_not_found";
      result.evidence.validation_method = "keyword_search";
      result.evidence.confidence = "none";
    }

    // Special handling for certain claim types
    if (claim.claim_type === "calculation_rule" || claim.claim_type === "business_rule") {
      // For calculation rules, lower the threshold as they describe backend behavior
      if (result.match_score >= 40 || result.keywords_found.length >= 2) {
        result.status = "semantic_validated";
        result.evidence.note = "Business rule claim - validated with relaxed threshold";
      }
    }

    // Take screenshot as evidence
    const shot = await saveScreenshot(page, screenshotsDir, `semantic_${claim.id}`);
    if (shot) {
      result.evidence.screenshot = shot;
    }

    // Add page URL to evidence
    result.evidence.page_url = page.url();

  } catch (error) {
    result.status = "error";
    result.error = safeString(error?.message || String(error));
  }

  return result;
}

// ------------------ NEW: navigation tree flattening ------------------
/**
 * Flattens a navigation object-tree into an ordered list of pages:
 * - Any object that has a string `.path` is considered a page.
 * - We traverse deterministically by sorted keys.
 * - We also pick up `.sections` and `.sub_sections` patterns naturally because we traverse all objects.
 *
 * Returns: [{ key, title, path }]
 */
function flattenNavigationTree(navObj) {
  const pages = [];

  function walk(node, prefix = "") {
    if (!node) return;

    // If node itself is a page
    if (isPlainObject(node) && typeof node.path === "string" && node.path.trim()) {
      pages.push({
        key: prefix || "page",
        title: typeof node.title === "string" ? node.title : null,
        path: node.path.trim(),
      });
    }

    // Traverse children deterministically
    if (Array.isArray(node)) {
      node.forEach((child, i) => walk(child, `${prefix}[${i}]`));
      return;
    }

    if (isPlainObject(node)) {
      const keys = Object.keys(node).sort();
      for (const k of keys) {
        if (k === "path" || k === "title") continue; // already handled / metadata
        const child = node[k];
        // Avoid walking huge ui_elements blobs too deeply if they don't contain paths
        // (But still safe to walk; this short-circuits some noise.)
        if (k === "ui_elements") continue;
        walk(child, prefix ? `${prefix}.${k}` : k);
      }
    }
  }

  walk(navObj, "");
  // Deduplicate by path (keep first appearance for stable key/title)
  const seen = new Set();
  const deduped = [];
  for (const p of pages) {
    const token = p.path;
    if (seen.has(token)) continue;
    seen.add(token);
    deduped.push(p);
  }
  return deduped;
}

/**
 * Supports:
 * - navigation_paths as an ARRAY (old format)
 * - navigation_paths as an OBJECT TREE (your sample)
 * - Breadcrumb paths like "Settings > Payroll > Daily Wage" (converted to click sequences)
 *
 * IMPORTANT: Navigation paths are provided for CONTEXT and GUIDANCE only.
 * Actual system behavior may differ since Zendesk documentation can become
 * outdated as navigation menus change frequently. These paths should NOT be
 * considered as absolute truth but rather as context setters and guidance
 * for exploration. The validator will attempt to follow these paths but
 * gracefully handle cases where the UI has changed.
 *
 * Returns list of paths to check:
 * [{ name, steps: [{action:"navigate", url:"..."}, {action:"verify"...} ...] }]
 */
function normalizeNavigationPaths(navigation_paths, appBaseUrl) {
  // If array: handle strings (URLs or breadcrumbs)
  if (Array.isArray(navigation_paths)) {
    // String array - could be URLs or breadcrumbs
    if (typeof navigation_paths[0] === "string") {
      const steps = [];

      for (const item of navigation_paths) {
        if (isBreadcrumbPath(item)) {
          // Convert breadcrumb to click sequence
          const menuItems = parseBreadcrumb(item);
          steps.push({
            action: "click_sequence",
            name: item,
            menu_items: menuItems,
            original_breadcrumb: item
          });
        } else {
          // Regular URL navigation
          steps.push({ action: "navigate", url: item });
        }
      }

      return [{
        name: "navigation_urls",
        steps: steps,
      }];
    }

    // Step objects array (implicit path)
    if (navigation_paths[0] && typeof navigation_paths[0] === "object" && navigation_paths[0].action) {
      return [{ name: "navigation_path_1", steps: navigation_paths }];
    }

    // Path objects
    return navigation_paths.map((p, idx) => {
      const name = p?.name || p?.path_name || p?.title || `navigation_path_${idx + 1}`;
      const steps = p?.steps || p?.actions || p?.navigation_steps || [];
      return { name, steps: Array.isArray(steps) ? steps : [] };
    });
  }

  // If object with explicit steps array containing actions (e.g., click_sequence)
  // Use those steps directly instead of flattening
  if (isPlainObject(navigation_paths) && Array.isArray(navigation_paths.steps)) {
    const stepsWithActions = navigation_paths.steps.filter(s => s && s.action);
    if (stepsWithActions.length > 0) {
      return [{
        name: "navigation_steps",
        steps: stepsWithActions.slice(0, Math.max(0, MAX_NAV_PAGES)),
      }];
    }
  }

  // If object-tree: flatten pages and create navigation checks
  if (isPlainObject(navigation_paths)) {
    const pages = flattenNavigationTree(navigation_paths);

    // Deterministic order:
    // 1) Sort by path, then key (stable)
    pages.sort((a, b) => (a.path.localeCompare(b.path) || a.key.localeCompare(b.key)));

    // Bound to MAX_NAV_PAGES (deterministic: take first N)
    const bounded = pages.slice(0, Math.max(0, MAX_NAV_PAGES));

    return [{
      name: "navigation_tree_pages",
      steps: bounded.map(p => ({
        action: "navigate",
        name: p.title ? `${p.title} (${p.path})` : p.path,
        url: joinUrl(appBaseUrl, p.path),
        meta: { key: p.key, title: p.title, path: p.path },
      })),
    }];
  }

  return [];
}

// ------------------ action executor ------------------
async function runStep(page, step, screenshotsDir, context, procedures = []) {
  const action = step?.action || step?.type || step?.op;
  const label = step?.name || step?.label || action || "step";

  const res = {
    action: action || "unknown",
    name: label,
    status: "fail",
    error: null,
    evidence: {},
  };

  try {
    if (!action) throw new Error("Missing step.action");

    if (action === "navigate") {
      const url = step.url || step.href;
      if (!url) throw new Error("navigate requires url");

      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: GOTO_TIMEOUT });
      const status = response ? response.status() : null;

      // Treat 4xx/5xx as failure (deterministic)
      if (typeof status === "number" && status >= 400) {
        throw new Error(`Navigation HTTP ${status} for ${url}`);
      }

      res.status = "pass";
      res.evidence.url = url;
      if (status !== null) res.evidence.http_status = status;
      if (step.meta) res.evidence.meta = step.meta;

      // Screenshot with structured label
      const navShotLabel = buildShotLabel([
        context?.featureName,
        context?.pathName,
        "navigate",
        step?.meta?.title,
        step?.meta?.path,
        label
      ]);
      res.evidence.screenshot = await saveScreenshot(page, screenshotsDir, navShotLabel);

      return res;
    }

    if (action === "click") {
      const selector = step.selector || step.target;
      if (!selector) throw new Error("click requires selector");
      await page.click(selector, { timeout: STEP_TIMEOUT });
      res.status = "pass";
      res.evidence.selector = selector;
      return res;
    }

    if (action === "type") {
      const selector = step.selector || step.target;
      const value = step.text ?? step.value ?? step.input;
      if (!selector) throw new Error("type requires selector");
      await page.fill(selector, safeString(value), { timeout: STEP_TIMEOUT });
      res.status = "pass";
      res.evidence.selector = selector;
      return res;
    }

    if (action === "press") {
      const selector = step.selector || step.target;
      const key = step.key;
      if (!selector) throw new Error("press requires selector");
      if (!key) throw new Error("press requires key");
      await page.press(selector, key, { timeout: STEP_TIMEOUT });
      res.status = "pass";
      res.evidence.selector = selector;
      res.evidence.key = key;
      return res;
    }

    if (action === "wait_for_selector") {
      const selector = step.selector || step.target;
      if (!selector) throw new Error("wait_for_selector requires selector");
      await page.waitForSelector(selector, { timeout: STEP_TIMEOUT });
      res.status = "pass";
      res.evidence.selector = selector;
      return res;
    }

    if (action === "verify") {
      const selector = step.selector || step.target;
      const text = step.text ?? step.expects_text ?? step.expected_text ?? null;
      if (!selector) throw new Error("verify requires selector");
      const el = await page.waitForSelector(selector, { timeout: STEP_TIMEOUT });
      if (text !== null) {
        const content = safeString(await el.textContent());
        if (!content.includes(safeString(text))) {
          throw new Error(`Text mismatch. Expected contains "${text}", got "${content}"`);
        }
      }
      res.status = "pass";
      res.evidence.selector = selector;
      if (text !== null) res.evidence.expected_text = text;
      return res;
    }

    if (action === "screenshot") {
      const shotLabel = buildShotLabel([
        context?.featureName,
        context?.pathName,
        "shot",
        step?.name || step?.label || label
      ]);
      const screenshot = await saveScreenshot(page, screenshotsDir, shotLabel);
      res.status = "pass";
      res.evidence.screenshot = screenshot;
      return res;
    }

    if (action === "click_sequence") {
      // Click through a breadcrumb navigation sequence
      // e.g., "Settings > Payroll > Daily Wage" → click Settings, click Payroll, click Daily Wage
      //
      // NOTE: These navigation paths are from Zendesk documentation and serve as
      // GUIDANCE only. The actual UI may have changed. We attempt best-effort navigation.
      const menuItems = step.menu_items || [];
      const originalBreadcrumb = step.original_breadcrumb || step.name || "unknown";

      // CRITICAL: Check if this is a conceptual process flow, NOT a clickable menu path
      // Using procedures context to distinguish between:
      // - "Settings > Payroll > Daily Wage" → clickable menu path
      // - "Unpaid Leave Request > Approval > Payroll Deduction Calculation" → conceptual workflow
      const conceptualCheck = isConceptualProcessFlow(originalBreadcrumb, procedures);

      if (conceptualCheck.isConceptual) {
        // This is a conceptual workflow, NOT a clickable path - skip with informational status
        res.status = "skipped_conceptual";
        res.evidence.breadcrumb = originalBreadcrumb;
        res.evidence.menu_items = menuItems;
        res.evidence.is_conceptual_flow = true;
        res.evidence.matched_procedure = conceptualCheck.matchedProcedure;
        res.evidence.reason = conceptualCheck.reason;
        res.evidence.note = "This describes a business process workflow, not a clickable navigation path. " +
                           "Conceptual flows are documented for understanding the feature, not for UI navigation.";
        return res;
      }

      if (!menuItems.length) {
        throw new Error(`click_sequence requires menu_items array, got: ${originalBreadcrumb}`);
      }

      res.evidence.breadcrumb = originalBreadcrumb;
      res.evidence.menu_items = menuItems;
      res.evidence.clicked = [];
      res.evidence.is_conceptual_flow = false;
      res.evidence.caveat = "Navigation paths are from Zendesk docs (guidance only). Actual UI may differ.";

      for (let i = 0; i < menuItems.length; i++) {
        const menuText = menuItems[i];

        // Try multiple strategies to find and click the menu item
        let clicked = false;

        // Strategy 1: Look for exact text match in clickable elements
        const clickableSelectors = [
          `a:has-text("${menuText}")`,
          `button:has-text("${menuText}")`,
          `[role="menuitem"]:has-text("${menuText}")`,
          `[role="tab"]:has-text("${menuText}")`,
          `[role="link"]:has-text("${menuText}")`,
          `li:has-text("${menuText}")`,
          `span:has-text("${menuText}")`,
          `div[class*="menu"]:has-text("${menuText}")`,
          `div[class*="nav"]:has-text("${menuText}")`,
        ];

        for (const selector of clickableSelectors) {
          try {
            const element = page.locator(selector).first();
            if (await element.isVisible({ timeout: 2000 })) {
              await element.click({ timeout: STEP_TIMEOUT });
              clicked = true;
              res.evidence.clicked.push({ item: menuText, selector, success: true });
              // Wait for navigation/animation after click
              await page.waitForTimeout(1000);
              break;
            }
          } catch {
            // Try next selector
          }
        }

        // Strategy 2: Use getByRole with name
        if (!clicked) {
          try {
            const roleElement = page.getByRole("link", { name: menuText }).or(
              page.getByRole("button", { name: menuText })
            ).or(
              page.getByRole("menuitem", { name: menuText })
            ).or(
              page.getByRole("tab", { name: menuText })
            ).first();

            if (await roleElement.isVisible({ timeout: 2000 })) {
              await roleElement.click({ timeout: STEP_TIMEOUT });
              clicked = true;
              res.evidence.clicked.push({ item: menuText, method: "getByRole", success: true });
              await page.waitForTimeout(1000);
            }
          } catch {
            // Continue to next strategy
          }
        }

        // Strategy 3: Use getByText with exact match
        if (!clicked) {
          try {
            const textElement = page.getByText(menuText, { exact: true }).first();
            if (await textElement.isVisible({ timeout: 2000 })) {
              await textElement.click({ timeout: STEP_TIMEOUT });
              clicked = true;
              res.evidence.clicked.push({ item: menuText, method: "getByText-exact", success: true });
              await page.waitForTimeout(1000);
            }
          } catch {
            // Continue to next strategy
          }
        }

        // Strategy 4: Use getByText with partial match
        if (!clicked) {
          try {
            const partialTextElement = page.getByText(menuText).first();
            if (await partialTextElement.isVisible({ timeout: 2000 })) {
              await partialTextElement.click({ timeout: STEP_TIMEOUT });
              clicked = true;
              res.evidence.clicked.push({ item: menuText, method: "getByText-partial", success: true });
              await page.waitForTimeout(1000);
            }
          } catch {
            // Continue to error
          }
        }

        if (!clicked) {
          res.evidence.clicked.push({ item: menuText, success: false, error: "Element not found" });
          throw new Error(`Could not find clickable element for menu item: "${menuText}" in breadcrumb: ${originalBreadcrumb}`);
        }
      }

      // All menu items clicked successfully
      res.status = "pass";
      return res;
    }

    throw new Error(`Unsupported action: ${action}`);
  } catch (e) {
    res.error = safeString(e?.message || e);
    const failShotLabel = buildShotLabel([
      context?.featureName,
      context?.pathName,
      "fail",
      action,
      label
    ]);
    res.evidence.screenshot = await saveScreenshot(
      page,
      screenshotsDir,
      failShotLabel
    );
    return res;
  }
}

// ------------------ UPDATED: deterministic login using your sample ------------------
async function attemptLoginFromNavigationSpec(page, app, navigation_paths, screenshotsDir) {
  const res = { status: "fail", error: null, evidence: {} };

  try {
    if (!app?.base_url || !app?.username || !app?.password) {
      throw new Error("Missing app.base_url / app.username / app.password");
    }

    // If spec contains authentication.login.path, use it; else base_url
    let loginPath = null;
    let loginTitle = null;

    if (isPlainObject(navigation_paths)) {
      loginPath = navigation_paths?.authentication?.login?.path || null;
      loginTitle = navigation_paths?.authentication?.login?.title || null;
    }

    const loginUrl = joinUrl(app.base_url, loginPath || "");
    await page.goto(loginUrl, { waitUntil: "domcontentloaded", timeout: GOTO_TIMEOUT });

    // If sample header exists, verify it (non-fatal if not found; but we record)
    // Sample:
    // title: "Welcome back"
    // subtitle: "Log in to Bayzat"
    const expectedTitle = navigation_paths?.authentication?.login?.ui_elements?.header?.title?.text || "Welcome back";
    const expectedSubtitle = navigation_paths?.authentication?.login?.ui_elements?.header?.subtitle?.text || "Log in to Bayzat";

    let headerChecks = { title_found: null, subtitle_found: null };
    try {
      headerChecks.title_found = await page.getByText(expectedTitle, { exact: false }).first().isVisible({ timeout: 2000 });
    } catch { headerChecks.title_found = false; }
    try {
      headerChecks.subtitle_found = await page.getByText(expectedSubtitle, { exact: false }).first().isVisible({ timeout: 2000 });
    } catch { headerChecks.subtitle_found = false; }

    // Use LABELS from your sample (deterministic)
    const emailLabel = navigation_paths?.authentication?.login?.ui_elements?.form?.email_field?.label || "Email address";
    const passwordLabel = navigation_paths?.authentication?.login?.ui_elements?.form?.password_field?.label || "Password";
    const loginButtonText = navigation_paths?.authentication?.login?.ui_elements?.actions?.primary?.text || "Log in";

    // Fill inputs - use specific selectors for reliability
    await page.getByLabel(emailLabel, { exact: false }).fill(app.username, { timeout: STEP_TIMEOUT });
    // Use input[type="password"] selector to avoid matching toggle buttons or switches
    await page.locator('input[type="password"]').fill(app.password, { timeout: STEP_TIMEOUT });

    // Click primary login button - use type="submit" to avoid matching social login buttons
    await page.locator('button[type="submit"]').click({ timeout: STEP_TIMEOUT });

    await page.waitForTimeout(1500);

    res.status = "pass";
    res.evidence = {
      login_url: loginUrl,
      login_title: loginTitle,
      header_checks: headerChecks,
      screenshot: await saveScreenshot(page, screenshotsDir, "auth__login__post_login"),
    };
    return res;
  } catch (e) {
    res.error = safeString(e?.message || e);
    res.evidence.screenshot = await saveScreenshot(page, screenshotsDir, "auth__login__fail");
    return res;
  }
}

// ------------------ PROCEDURES CONTEXT HELPERS ------------------
/**
 * Procedures from Zendesk documentation describe HOW features work (business logic).
 * They contain step-by-step workflows like:
 *   "Unpaid Leave Request > Approval > Payroll Deduction Calculation"
 *
 * These are CONCEPTUAL process flows, NOT clickable menu paths.
 * This helper detects if a breadcrumb matches a procedure's conceptual workflow
 * so we can skip trying to click it and instead document it as informational.
 *
 * IMPORTANT: Paths starting with known application menu items (Settings, Payroll, etc.)
 * are ALWAYS navigation paths and should NEVER be marked as conceptual.
 */
function isConceptualProcessFlow(breadcrumb, procedures) {
  if (!breadcrumb || typeof breadcrumb !== "string") {
    return { isConceptual: false, matchedProcedure: null };
  }

  const breadcrumbLower = breadcrumb.toLowerCase().trim();
  const breadcrumbParts = parseBreadcrumb(breadcrumb).map(p => p.toLowerCase());

  // CRITICAL FIX: Known application menu items indicate NAVIGATION paths, not conceptual flows
  // These are the actual clickable menu items in the Bayzat application
  const knownMenuStarters = [
    "settings", "payroll", "employees", "dashboard", "finance", "reports",
    "time off", "leaves", "benefits", "insurance", "attendance", "hiring",
    "documents", "company", "admin", "setup", "configuration", "home",
    "manage", "team", "organization", "hr", "compensation"
  ];

  // If the breadcrumb starts with a known menu item, it's a NAVIGATION path, not conceptual
  const firstPart = breadcrumbParts[0];
  if (firstPart && knownMenuStarters.includes(firstPart)) {
    return {
      isConceptual: false,
      matchedProcedure: null,
      reason: `Breadcrumb starts with known menu item: ${firstPart}`
    };
  }

  // Also check if any part contains typical navigation terms
  const navigationTerms = ["settings", "payroll settings", "configuration", "setup"];
  if (breadcrumbParts.some(part => navigationTerms.some(nav => part.includes(nav)))) {
    return {
      isConceptual: false,
      matchedProcedure: null,
      reason: `Breadcrumb contains navigation terminology`
    };
  }

  // Now check for actual conceptual process flows (business processes)
  // Only mark as conceptual if it clearly describes a business WORKFLOW, not navigation

  // Pattern 1: Multi-step business workflows with action verbs
  const workflowPatterns = [
    /request\s*[>→›]\s*approval/i,
    /approval\s*[>→›]\s*.*deduction/i,
    /submit\s*[>→›]\s*review/i,
    /create\s*[>→›]\s*approve/i,
    /initiate\s*[>→›]\s*process/i,
    /apply\s*[>→›]\s*calculate/i,
    /leave\s*request\s*[>→›]/i
  ];

  for (const pattern of workflowPatterns) {
    if (pattern.test(breadcrumb)) {
      return {
        isConceptual: true,
        matchedProcedure: null,
        reason: `Breadcrumb matches business workflow pattern (not a menu path)`
      };
    }
  }

  // Pattern 2: Purely conceptual terms that can't be clickable menus
  const conceptualOnlyTerms = [
    "unpaid leave request", "approval workflow", "payroll deduction calculation",
    "auto-calculated", "system triggered", "automatically applies"
  ];

  if (conceptualOnlyTerms.some(term => breadcrumbLower.includes(term))) {
    return {
      isConceptual: true,
      matchedProcedure: null,
      reason: `Breadcrumb contains conceptual-only terminology`
    };
  }

  // If procedures provided, only check for EXACT matches to procedure titles
  // (not partial matches which caused false positives)
  if (Array.isArray(procedures) && procedures.length > 0) {
    for (const proc of procedures) {
      const procTitle = (proc.title || proc.name || "").toLowerCase().trim();

      // Only mark as conceptual if the breadcrumb IS the procedure title
      // (not if it just contains parts of it)
      if (procTitle && breadcrumbLower === procTitle) {
        return {
          isConceptual: true,
          matchedProcedure: proc.title || proc.name,
          reason: `Breadcrumb exactly matches procedure title`
        };
      }
    }
  }

  return { isConceptual: false, matchedProcedure: null };
}

/**
 * Extract navigation-related items from procedures that ARE clickable
 * (e.g., "Navigate to Settings > Payroll")
 */
function extractNavigablePathsFromProcedures(procedures) {
  const navigablePaths = [];

  if (!Array.isArray(procedures)) return navigablePaths;

  for (const proc of procedures) {
    const steps = Array.isArray(proc.steps) ? proc.steps : [];

    for (const step of steps) {
      const stepText = typeof step === "string" ? step : step.text || step.description || "";

      // Look for explicit navigation instructions
      const navPatterns = [
        /navigate\s+to\s+([^.]+)/i,
        /go\s+to\s+([^.]+)/i,
        /click\s+on\s+([^.]+)/i,
        /select\s+([^.]+)\s+from\s+(?:the\s+)?menu/i,
        /open\s+([^.]+)\s+(?:page|section|menu)/i
      ];

      for (const pattern of navPatterns) {
        const match = stepText.match(pattern);
        if (match && match[1]) {
          const extracted = match[1].trim();
          // Only add if it looks like a breadcrumb path
          if (isBreadcrumbPath(extracted)) {
            navigablePaths.push({
              path: extracted,
              source_procedure: proc.title || proc.name,
              source_step: stepText.slice(0, 100)
            });
          }
        }
      }
    }
  }

  return navigablePaths;
}

// ------------------ main ------------------
(async () => {
  const startedAt = nowISO();
  let browser = null;

  const output = {
    status: "fail",
    methodology: "cognitive_walkthrough_and_feature_inspection",
    executed_at: nowISO(),
    started_at: startedAt,
    feature_name: null,
    feature_context: null,           // Understanding of the feature from context
    login: { status: "fail" },
    cognitive_walkthrough: null,      // Results from intelligent exploration
    feature_inspection: null,         // Results from feature element search
    navigation_results: [],           // Legacy navigation results (for reference)
    claim_ui_checks: [],
    procedures_context: [],
    summary: { total_steps: 0, passed_steps: 0, failed_steps: 0, screenshots: 0 },
    fatal_error: null,
    input_path: path.relative(ROOT, INPUT_PATH),
    output_path: path.relative(ROOT, OUT_PATH),
  };

  try {
    ensureDir(SCREENSHOTS_DIR);

    const input = readJSON(INPUT_PATH);
    output.feature_name = input?.feature_name || null;

    const appBaseUrl = input?.app?.base_url || "";
    const navigation_paths = input?.navigation_paths; // CONTEXT SETTER - not literal instructions
    const procedures = Array.isArray(input?.procedures) ? input.procedures : [];
    const claims = normalizeClaimChecks(input?.claims_to_validate);

    // ========================================================================
    // STEP 1: EXTRACT FEATURE CONTEXT
    // Build understanding of the feature from name, procedures, and nav hints
    // ========================================================================
    const featureContext = extractFeatureContext(
      output.feature_name,
      procedures,
      navigation_paths
    );
    output.feature_context = featureContext;

    console.log(`📋 Feature Context Extracted:`);
    console.log(`   Name: ${featureContext.feature_name}`);
    console.log(`   Domain: ${featureContext.domain_area || "unknown"}`);
    console.log(`   Keywords: ${featureContext.keywords.slice(0, 10).join(", ")}`);
    console.log(`   Navigation Hints: ${featureContext.navigation_hints.slice(0, 5).join(", ")}`);

    // Store procedures context in output for reference
    output.procedures_context = procedures.map(p => ({
      title: p.title || p.name || "unnamed",
      step_count: Array.isArray(p.steps) ? p.steps.length : 0,
      source: p.source || "zendesk"
    }));

    // Extract navigable paths from procedures (for additional context)
    const procedureNavPaths = extractNavigablePathsFromProcedures(procedures);
    if (procedureNavPaths.length > 0) {
      output.procedures_extracted_navigation = procedureNavPaths;
    }

    browser = await chromium.launch({ headless: HEADLESS });
    const context = await browser.newContext();
    const page = await context.newPage();

    // ========================================================================
    // STEP 2: LOGIN
    // ========================================================================
    output.login = await attemptLoginFromNavigationSpec(page, input?.app, navigation_paths, SCREENSHOTS_DIR);

    // ========================================================================
    // STEP 3: COGNITIVE WALKTHROUGH (if login succeeded)
    // Explore the UI intelligently using context as guidance
    // ========================================================================
    if (output.login?.status === "pass") {
      console.log(`\n🧠 Starting Cognitive Walkthrough...`);
      console.log(`   Goal: Find ${featureContext.feature_name} feature through exploration`);

      output.cognitive_walkthrough = await performCognitiveWalkthrough(
        page,
        featureContext,
        SCREENSHOTS_DIR
      );

      console.log(`   Result: ${output.cognitive_walkthrough.status}`);
      console.log(`   Elements discovered: ${output.cognitive_walkthrough.discovered_elements?.length || 0}`);
      console.log(`   Screenshots: ${output.cognitive_walkthrough.screenshots?.length || 0}`);

      // ========================================================================
      // STEP 4: FEATURE INSPECTION
      // Search for feature-specific UI elements on the current page
      // ========================================================================
      console.log(`\n🔍 Starting Feature Inspection...`);
      console.log(`   Searching for: ${featureContext.keywords.slice(0, 5).join(", ")}`);

      output.feature_inspection = await performFeatureInspection(
        page,
        featureContext,
        SCREENSHOTS_DIR
      );

      console.log(`   Result: ${output.feature_inspection.status}`);
      console.log(`   Elements found: ${output.feature_inspection.elements_found?.length || 0}`);
      console.log(`   Elements not found: ${output.feature_inspection.elements_not_found?.length || 0}`);
    } else {
      console.log(`\n⚠️ Skipping exploration - login failed`);
      output.cognitive_walkthrough = { status: "skipped", reason: "login_failed" };
      output.feature_inspection = { status: "skipped", reason: "login_failed" };
    }

    // ========================================================================
    // STEP 5: LEGACY NAVIGATION CHECKS (Optional - for reference only)
    // These are kept for backward compatibility but are NOT required
    // ========================================================================
    const normalizedNav = normalizeNavigationPaths(navigation_paths, appBaseUrl);

    // Only attempt legacy navigation if we have explicit paths and login succeeded
    if (output.login?.status === "pass" && normalizedNav.length > 0) {
      console.log(`\n📍 Legacy Navigation Checks (for reference)...`);

      for (const navPath of normalizedNav) {
        const pathName = navPath.name || "navigation";
        const steps = Array.isArray(navPath.steps) ? navPath.steps : [];

        const pathResult = {
          name: pathName,
          status: "pass",
          steps: [],
        };

        for (const step of steps) {
          const stepRes = await runStep(
            page,
            step,
            SCREENSHOTS_DIR,
            {
              pathName,
              featureName: output.feature_name
            },
            procedures // Pass procedures for conceptual flow detection
          );
          pathResult.steps.push(stepRes);
          // Conceptual flows are OK - they're informational, not failures
          if (stepRes.status !== "pass" && stepRes.status !== "skipped_conceptual") {
            pathResult.status = "fail";
          }
        }

        const endShot = await saveScreenshot(page, SCREENSHOTS_DIR, `${pathName}_end`);
        if (endShot) {
          pathResult.steps.push({
            action: "screenshot",
            name: `${pathName}_end`,
            status: "pass",
            evidence: { screenshot: endShot },
            error: null,
          });
        }

        output.navigation_results.push(pathResult);
      }
    }

    // ========================================================================
    // STEP 6: CLAIM UI CHECKS (best-effort)
    // ========================================================================
    for (const c of claims) {
      const claimRes = {
        id: c.id,
        claim: c.text,
        status: "pass",
        checks: [],
      };

      try {
        if (c.url) {
          const nav = await runStep(
            page,
            { action: "navigate", url: c.url, name: `claim_${c.id}_navigate` },
            SCREENSHOTS_DIR,
            { pathName: `claim_${c.id}` },
            procedures
          );
          claimRes.checks.push(nav);
          if (nav.status !== "pass") claimRes.status = "fail";
        }

        if (!c.selectors.length) {
          // SEMANTIC VALIDATION: No CSS selectors provided, try to validate claim by searching page content
          const semanticResult = await performSemanticClaimValidation(page, c, SCREENSHOTS_DIR);
          claimRes.checks.push(semanticResult);
          claimRes.status = semanticResult.status;
          claimRes.semantic_validation = true;
        } else {
          for (const sel of c.selectors) {
            const verify = await runStep(
              page,
              { action: "verify", selector: sel, text: c.expects_text, name: `claim_${c.id}_verify` },
              SCREENSHOTS_DIR,
              { pathName: `claim_${c.id}` },
              procedures
            );
            claimRes.checks.push(verify);
            if (verify.status !== "pass") claimRes.status = "fail";
          }
        }

        const shot = await saveScreenshot(page, SCREENSHOTS_DIR, `claim_${c.id}`);
        if (shot) {
          claimRes.checks.push({
            action: "screenshot",
            name: `claim_${c.id}`,
            status: "pass",
            evidence: { screenshot: shot },
            error: null,
          });
        }
      } catch (e) {
        claimRes.status = "fail";
        claimRes.error = safeString(e?.message || e);
      }

      output.claim_ui_checks.push(claimRes);
    }

    // ========================================================================
    // STEP 7: SUMMARY + FINAL STATUS
    // ========================================================================
    let total = 0,
      passed = 0,
      failed = 0,
      skippedConceptual = 0;

    for (const p of output.navigation_results) {
      for (const s of p.steps) {
        total += 1;
        if (s.status === "pass") passed += 1;
        else if (s.status === "skipped_conceptual") skippedConceptual += 1;
        else failed += 1;
      }
    }

    // Count login as a step
    total += 1;
    if (output.login?.status === "pass") passed += 1;
    else failed += 1;

    const screenshotCount = (() => {
      try {
        return fs.readdirSync(SCREENSHOTS_DIR).filter((f) => f.toLowerCase().endsWith(".png")).length;
      } catch {
        return 0;
      }
    })();

    // Calculate semantic validation statistics
    const semanticStats = {
      total: 0,
      validated: 0,
      partial: 0,
      not_found: 0,
      skipped: 0,
      error: 0,
      average_match_score: 0
    };

    let totalMatchScore = 0;
    for (const claim of output.claim_ui_checks) {
      if (claim.semantic_validation) {
        semanticStats.total++;
        const check = claim.checks.find(c => c.action === "semantic_validation");
        if (check) {
          totalMatchScore += check.match_score || 0;
          if (check.status === "semantic_validated") semanticStats.validated++;
          else if (check.status === "semantic_partial") semanticStats.partial++;
          else if (check.status === "semantic_not_found") semanticStats.not_found++;
          else if (check.status?.startsWith("skipped")) semanticStats.skipped++;
          else if (check.status === "error") semanticStats.error++;
        }
      }
    }
    if (semanticStats.total > 0) {
      semanticStats.average_match_score = Math.round(totalMatchScore / semanticStats.total);
    }

    // Build comprehensive summary including new methodology
    output.summary = {
      methodology: "cognitive_walkthrough_and_feature_inspection_with_semantic_validation",
      total_steps: total,
      passed_steps: passed,
      failed_steps: failed,
      skipped_conceptual: skippedConceptual,
      screenshots: screenshotCount,
      cognitive_walkthrough: {
        status: output.cognitive_walkthrough?.status || "not_run",
        elements_discovered: output.cognitive_walkthrough?.discovered_elements?.length || 0,
        exploration_steps: output.cognitive_walkthrough?.exploration_path?.length || 0
      },
      feature_inspection: {
        status: output.feature_inspection?.status || "not_run",
        keywords_searched: output.feature_inspection?.keywords_searched?.length || 0,
        elements_found: output.feature_inspection?.elements_found?.length || 0,
        elements_not_found: output.feature_inspection?.elements_not_found?.length || 0
      },
      semantic_claim_validation: {
        total_claims_validated: semanticStats.total,
        validated: semanticStats.validated,
        partial_match: semanticStats.partial,
        not_found: semanticStats.not_found,
        skipped: semanticStats.skipped,
        errors: semanticStats.error,
        average_match_score: semanticStats.average_match_score
      }
    };

    // IMPORTANT: Navigation paths are GUIDANCE ONLY from Zendesk docs.
    // They provide context but are NOT treated as ground truth.
    // Navigation failures are informational - they do NOT cause workflow failure.
    const loginFail = output.login?.status !== "pass";
    const anyClaimFail = output.claim_ui_checks.some((c) => c.status === "fail");

    // Build detailed Navigation Validation Report (similar to claims report)
    const navigationReport = {
      report_type: "navigation_guidance_validation",
      disclaimer: "Navigation paths are sourced from Zendesk documentation and serve as GUIDANCE ONLY. " +
                  "The actual UI may differ as menus change over time. Failed paths indicate potential " +
                  "documentation updates needed, NOT system errors. Conceptual process flows (business workflows) " +
                  "are identified using procedures context and are NOT treated as clickable menu paths.",
      validation_date: nowISO(),
      procedures_provided: procedures.length > 0,
      procedures_count: procedures.length,
      summary: {
        total_paths_tested: 0,
        paths_verified: 0,
        paths_not_found: 0,
        paths_partial: 0,
        conceptual_flows_skipped: 0
      },
      paths: [],
      conceptual_flows: []
    };

    // Process each navigation result into the report
    for (const navResult of output.navigation_results) {
      for (const step of navResult.steps || []) {
        if (step.action === "click_sequence") {
          // Check if this was a conceptual flow (skipped)
          if (step.status === "skipped_conceptual") {
            const conceptualEntry = {
              flow_id: `conceptual_${navigationReport.conceptual_flows.length + 1}`,
              breadcrumb: step.evidence?.breadcrumb || step.name || "unknown",
              menu_items: step.evidence?.menu_items || [],
              status: "skipped",
              is_conceptual_flow: true,
              matched_procedure: step.evidence?.matched_procedure || null,
              reason: step.evidence?.reason || "Detected as conceptual process flow",
              note: step.evidence?.note || "This describes a business workflow, not navigation.",
              recommendation: "Document as a process flow description in user guide, not as navigation steps"
            };
            navigationReport.conceptual_flows.push(conceptualEntry);
            navigationReport.summary.conceptual_flows_skipped++;
            continue;
          }

          const pathEntry = {
            path_id: `nav_${navigationReport.paths.length + 1}`,
            breadcrumb: step.evidence?.breadcrumb || step.name || "unknown",
            menu_items: step.evidence?.menu_items || [],
            status: step.status === "pass" ? "verified" : "not_found",
            source: "zendesk_documentation",
            is_blocking: false,
            is_conceptual_flow: false,
            validation_details: {
              attempted: true,
              clicks_succeeded: (step.evidence?.clicked || []).filter(c => c.success).length,
              clicks_failed: (step.evidence?.clicked || []).filter(c => !c.success).length,
              click_log: step.evidence?.clicked || [],
              error_message: step.error || null
            },
            evidence: {
              screenshot: step.evidence?.screenshot || null,
              caveat: step.evidence?.caveat || "Navigation paths are guidance only."
            },
            recommendation: step.status === "pass"
              ? "Path verified - can be used in user guide"
              : "Path not found - verify if UI has changed or documentation needs update"
          };
          navigationReport.paths.push(pathEntry);
          navigationReport.summary.total_paths_tested++;
          if (step.status === "pass") {
            navigationReport.summary.paths_verified++;
          } else {
            navigationReport.summary.paths_not_found++;
          }
        } else if (step.action === "navigate" && step.evidence?.url) {
          // URL-based navigation
          const pathEntry = {
            path_id: `nav_${navigationReport.paths.length + 1}`,
            url: step.evidence.url,
            status: step.status === "pass" ? "verified" : "not_found",
            source: "zendesk_documentation",
            is_blocking: false,
            validation_details: {
              attempted: true,
              http_status: step.evidence?.http_status || null,
              error_message: step.error || null
            },
            evidence: {
              screenshot: step.evidence?.screenshot || null
            },
            recommendation: step.status === "pass"
              ? "URL accessible - can be used in user guide"
              : "URL not accessible - verify if path has changed"
          };
          navigationReport.paths.push(pathEntry);
          navigationReport.summary.total_paths_tested++;
          if (step.status === "pass") {
            navigationReport.summary.paths_verified++;
          } else {
            navigationReport.summary.paths_not_found++;
          }
        }
      }
    }

    // Add the navigation report to output
    output.navigation_validation_report = navigationReport;

    // Status only fails on CRITICAL issues: login failure or claim validation failure
    // Navigation failures are recorded but do NOT cause overall failure
    output.status = loginFail ? "fail" : (anyClaimFail ? "partial" : "pass");
  } catch (e) {
    output.fatal_error = safeString(e?.message || e);
    output.status = "fail";
  } finally {
    if (browser) await browser.close().catch(() => {});
    writeOutput(OUT_PATH, output);
    console.log(`✅ Playwright results written to ${OUT_PATH}`);

    // EXIT CODE LOGIC:
    // 0 = Login passed (navigation failures are OK - they're guidance only)
    // 1 = Fatal error OR login failure (critical issues only)
    const hasFatalError = !!output.fatal_error;
    const loginFailed = output.login?.status !== "pass";

    if (hasFatalError) {
      console.log(`❌ Fatal error: ${output.fatal_error}`);
      process.exit(1);
    }

    if (loginFailed) {
      console.log(`❌ Login failed - cannot proceed with validation`);
      process.exit(1);
    }

    // Navigation failures are informational only
    if (output.navigation_summary?.failed_paths > 0) {
      console.log(`ℹ️ Navigation: ${output.navigation_summary.successful_paths}/${output.navigation_summary.total_paths} paths succeeded`);
      console.log(`   Note: Failed paths may indicate outdated Zendesk docs - not a critical error`);
    }

    console.log(`✅ Validation completed successfully`);
    process.exit(0);
  }
})();
