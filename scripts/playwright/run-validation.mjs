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

async function saveScreenshot(page, screenshotsDir, label, options = {}) {
  try {
    const file = `${sanitizeFileName(label)}.png`;
    const fullPath = path.join(screenshotsDir, file);

    // Wait for animations/transitions to complete for cleaner screenshots
    await page.waitForTimeout(200);

    // Screenshot options for high quality
    const screenshotOptions = {
      path: fullPath,
      fullPage: options.fullPage || false,  // Viewport by default, full page if specified
      animations: 'disabled',                // Disable CSS animations for consistent captures
      // Note: deviceScaleFactor is set at context level (2x for retina quality)
    };

    await page.screenshot(screenshotOptions);
    return path.relative(ROOT, fullPath);
  } catch (err) {
    console.warn(`      ⚠️ Screenshot failed for ${label}: ${err.message}`);
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

// ------------------ CLAIM CATEGORIZATION FOR SMART SCREENSHOTS ------------------
/**
 * Categorizes claims to avoid duplicate screenshots.
 * Claims about similar topics (e.g., all "calculation" claims) should share one screenshot.
 *
 * Categories are determined by:
 * 1. claim_type if available
 * 2. Keywords in the claim text
 * 3. Default category
 */
function getClaimCategory(claim) {
  const claimText = (claim.text || "").toLowerCase();
  const claimType = (claim.claim_type || "").toLowerCase();

  // Known category mappings based on keywords
  const categoryMappings = [
    { keywords: ["calendar days", "calendar-based", "30 days", "365 days"], category: "calendar_days_calculation" },
    { keywords: ["working days", "actual working"], category: "working_days_calculation" },
    { keywords: ["leap year"], category: "leap_year_handling" },
    { keywords: ["leave deduction", "leave pay", "unpaid leave"], category: "leave_deduction" },
    { keywords: ["overtime", "ot calculation"], category: "overtime_calculation" },
    { keywords: ["end of service", "eos", "gratuity", "termination"], category: "end_of_service" },
    { keywords: ["calculation method", "method selection", "choose method"], category: "calculation_method_selection" },
    { keywords: ["configuration", "settings", "setup", "configure"], category: "feature_configuration" },
    { keywords: ["formula", "equation", "algorithm"], category: "calculation_formula" },
    { keywords: ["compliance", "labor law", "legal"], category: "compliance_rules" },
    { keywords: ["salary", "wage", "pay"], category: "salary_calculation" },
    { keywords: ["accrual", "accumulate"], category: "accrual_rules" },
    { keywords: ["pro-rata", "prorated", "proportional"], category: "prorated_calculation" },
    { keywords: ["attendance", "absent", "present"], category: "attendance_tracking" },
    { keywords: ["schedule", "shift", "roster"], category: "work_schedule" },
  ];

  // Check claim type first
  if (claimType && claimType !== "unknown") {
    // Normalize common claim types
    const typeMapping = {
      "calculation_rule": "calculation_rules",
      "business_rule": "business_rules",
      "configuration": "feature_configuration",
      "ui_element": "interface_elements",
      "navigation": "navigation_paths",
      "workflow": "workflow_steps",
    };
    if (typeMapping[claimType]) {
      return typeMapping[claimType];
    }
    return claimType.replace(/[^a-z0-9]/g, "_");
  }

  // Check against keyword mappings
  for (const mapping of categoryMappings) {
    if (mapping.keywords.some(kw => claimText.includes(kw))) {
      return mapping.category;
    }
  }

  // Fallback: Use claim ID prefix or generic category
  const idMatch = (claim.id || "").match(/^([a-z]+)/i);
  if (idMatch) {
    return `claim_group_${idMatch[1].toLowerCase()}`;
  }

  return "general_claims";
}

// ------------------ NAVIGATE TO FEATURE PAGE FOR CLAIM VALIDATION ------------------
/**
 * Navigates to the feature-relevant page before validating claims.
 * This ensures screenshots capture meaningful UI elements instead of a generic page state.
 *
 * Strategy:
 * 1. Check if claim has a validation_hint with navigation info
 * 2. Use feature context navigation hints
 * 3. Try to navigate using breadcrumb clicking
 * 4. Return the navigation result
 */
async function navigateToFeaturePageForClaims(page, featureContext) {
  const result = {
    status: "pending",
    navigation_method: null,
    navigation_path: null,
    steps_taken: [],
    final_url: null,
    error: null
  };

  try {
    // Define navigation paths for common feature domains
    const featureNavigationMap = {
      "daily wage": ["Settings", "Payroll", "Daily Wage Calculation"],
      "daily rate": ["Settings", "Payroll", "Daily Wage Calculation"],
      "payroll": ["Settings", "Payroll"],
      "leave": ["Settings", "Leaves"],
      "time off": ["Settings", "Time Off"],
      "end of service": ["Settings", "Payroll", "End of Service"],
      "eos": ["Settings", "Payroll", "End of Service"],
      "attendance": ["Settings", "Attendance"],
      "benefits": ["Benefits"],
      "insurance": ["Insurance"],
      "employees": ["Employees"],
    };

    // Determine navigation path from feature context
    const featureName = (featureContext?.feature_name || "").toLowerCase();
    let navPath = null;

    // Check feature name against known navigation paths
    for (const [keyword, path] of Object.entries(featureNavigationMap)) {
      if (featureName.includes(keyword)) {
        navPath = path;
        result.navigation_method = "feature_name_match";
        break;
      }
    }

    // Fallback: Use navigation hints from feature context
    if (!navPath && featureContext?.navigation_hints?.length > 0) {
      // Look for hints that look like menu items
      const menuHints = featureContext.navigation_hints.filter(h =>
        !h.includes(">") && !h.includes("→") && h.length < 50
      );
      if (menuHints.length > 0) {
        navPath = menuHints.slice(0, 3); // Take first 3 menu items
        result.navigation_method = "navigation_hints";
      }
    }

    if (!navPath || navPath.length === 0) {
      result.status = "skipped";
      result.error = "No navigation path determined from feature context";
      return result;
    }

    result.navigation_path = navPath;
    console.log(`📍 Navigating to feature page: ${navPath.join(" → ")}`);

    // Click through the navigation path
    for (let i = 0; i < navPath.length; i++) {
      const menuItem = navPath[i];
      const step = { item: menuItem, status: "pending", clicked: false };

      // Try multiple selector strategies
      const selectors = [
        // Exact text match in buttons/links
        `button:has-text("${menuItem}")`,
        `a:has-text("${menuItem}")`,
        `[role="menuitem"]:has-text("${menuItem}")`,
        `[role="button"]:has-text("${menuItem}")`,
        // Navigation items
        `nav a:has-text("${menuItem}")`,
        `nav button:has-text("${menuItem}")`,
        // Sidebar items
        `.sidebar :text("${menuItem}")`,
        `[class*="sidebar"] :text("${menuItem}")`,
        `[class*="menu"] :text("${menuItem}")`,
        `[class*="nav"] :text("${menuItem}")`,
        // Generic clickable with text
        `:text("${menuItem}")`,
      ];

      let clicked = false;
      for (const selector of selectors) {
        try {
          const element = page.locator(selector).first();
          const isVisible = await element.isVisible({ timeout: 2000 }).catch(() => false);

          if (isVisible) {
            await element.click({ timeout: 5000 });
            clicked = true;
            step.status = "clicked";
            step.clicked = true;
            step.selector_used = selector;

            // Wait for navigation/content change
            await page.waitForTimeout(1500);

            // Check if URL changed or new content appeared
            const newUrl = page.url();
            step.url_after = newUrl;

            break;
          }
        } catch (e) {
          // Try next selector
        }
      }

      if (!clicked) {
        step.status = "not_found";
        step.error = `Could not find clickable element for: ${menuItem}`;
      }

      result.steps_taken.push(step);

      // If we couldn't click this item, continue to next but log warning
      if (!clicked && i < navPath.length - 1) {
        console.log(`   ⚠️ Could not click "${menuItem}", continuing...`);
      }
    }

    // Take screenshot after navigation
    result.final_url = page.url();
    result.status = result.steps_taken.some(s => s.clicked) ? "navigated" : "failed";

    // Wait a bit more for any dynamic content to load
    await page.waitForTimeout(2000);

  } catch (error) {
    result.status = "error";
    result.error = safeString(error?.message || String(error));
  }

  return result;
}

/**
 * Attempts to expand a dialog/modal or detailed view for better screenshots.
 * Some claims refer to UI elements that require clicking to reveal.
 */
async function tryExpandRelevantUIElement(page, claim) {
  const result = { expanded: false, element_clicked: null };

  try {
    // Keywords that suggest we need to click to see more
    const expandTriggers = [
      "dialog", "modal", "popup", "dropdown", "select", "calculation method",
      "configuration", "settings", "options", "edit", "configure"
    ];

    const claimLower = (claim.text || "").toLowerCase();
    const needsExpand = expandTriggers.some(t => claimLower.includes(t));

    if (!needsExpand) return result;

    // Try to find and click relevant buttons/links
    const expandSelectors = [
      // Configuration/Settings buttons
      'button:has-text("Configure")',
      'button:has-text("Edit")',
      'button:has-text("Settings")',
      // Specific to Daily Wage Calculation
      'button:has-text("Daily Wage")',
      '[class*="edit"]',
      '[class*="configure"]',
      // Dropdowns
      '[role="combobox"]',
      'select',
      // Cards/expandable sections
      '[class*="card"]:has-text("calculation")',
      '[class*="expandable"]',
    ];

    for (const selector of expandSelectors) {
      try {
        const element = page.locator(selector).first();
        const isVisible = await element.isVisible({ timeout: 1000 }).catch(() => false);

        if (isVisible) {
          await element.click({ timeout: 3000 });
          result.expanded = true;
          result.element_clicked = selector;
          // Wait for content to appear
          await page.waitForTimeout(1500);
          break;
        }
      } catch {
        // Continue to next selector
      }
    }
  } catch {
    // Non-critical failure
  }

  return result;
}

// ------------------ COMPREHENSIVE FEATURE EXPLORATION ------------------
/**
 * Performs deep exploration of a feature by testing all UI components.
 * This is the level of depth needed for proper user guide documentation:
 *
 * KEY REQUIREMENTS:
 * - Expand accordions/cards
 * - Click edit icons to open modals
 * - Test all dropdowns (select each option, document changes)
 * - Test toggles and observe behavior
 * - Document all states and formula changes
 * - Take screenshots at each significant state
 *
 * CRITICAL - UI DESCRIPTION & LOGIC VALIDATION:
 * - Describe WHAT YOU SEE on the UI in human-readable terms
 * - Explain the PURPOSE of each UI element observed
 * - Document the LOGIC and BUSINESS RULES visible in the interface
 * - Validate that UI behavior matches expected business logic
 * - Note any calculations, formulas, or rules displayed
 * - Describe how different selections affect the output
 * - Explain relationships between UI elements (e.g., toggle enables/disables fields)
 */
async function performComprehensiveFeatureExploration(page, featureContext, screenshotsDir) {
  const exploration = {
    status: "pending",
    feature_name: featureContext?.feature_name || "unknown",
    navigation: { path: [], success: false },
    accordions_found: [],
    services_explored: [],
    modals_tested: [],
    dropdowns_tested: [],
    toggles_tested: [],
    formulas_documented: [],
    screenshots: [],
    discoveries: [],
    errors: [],
    // NEW: UI descriptions and logic validation
    ui_descriptions: [],      // Human-readable descriptions of what's visible
    logic_validated: [],      // Business logic observed and validated
    element_purposes: [],     // Purpose of each UI element
    relationships: [],        // How elements relate to each other
    business_rules: []        // Business rules derived from UI behavior
  };

  console.log(`\n🔬 COMPREHENSIVE FEATURE EXPLORATION`);
  console.log(`   Feature: ${exploration.feature_name}`);
  console.log(`   Goal: Test all UI components, describe what you see, validate logic\n`);

  try {
    // ========================================================================
    // STEP 1: NAVIGATE TO FEATURE LOCATION
    // ========================================================================
    console.log(`📍 Step 1: Navigate to feature location`);

    // Define feature-specific navigation configs
    const featureConfigs = {
      "daily wage": {
        navPath: ["Settings", "Payroll"],
        accordionText: "Daily Wage Calculation",
        services: [
          { name: "Salary proration", editIcon: true, hasDropdown: true, hasNumberInput: true },
          { name: "EOS leave encashment", editIcon: true, hasToggle: true, hasLeaveTable: true },
          { name: "Unpaid leave deduction", editIcon: true, hasToggle: true, hasLeaveTable: true }
        ]
      },
      "end of service": {
        navPath: ["Settings", "Payroll"],
        accordionText: "End of Service",
        services: []
      },
      "leave": {
        navPath: ["Settings", "Leaves"],
        services: []
      }
    };

    // Find matching config
    const featureLower = (exploration.feature_name || "").toLowerCase();
    let config = null;
    for (const [key, cfg] of Object.entries(featureConfigs)) {
      if (featureLower.includes(key)) {
        config = cfg;
        break;
      }
    }

    if (!config) {
      exploration.status = "no_config";
      exploration.errors.push(`No exploration config for feature: ${exploration.feature_name}`);
      return exploration;
    }

    // Navigate through menu items
    for (const menuItem of config.navPath) {
      const clicked = await clickMenuItem(page, menuItem);
      exploration.navigation.path.push({ item: menuItem, clicked });
      if (clicked) {
        await page.waitForTimeout(1000);
        const shot = await saveScreenshot(page, screenshotsDir, `nav_after_${sanitizeFileName(menuItem)}`);
        if (shot) exploration.screenshots.push({ stage: `nav_${menuItem}`, path: shot });
      }
    }
    exploration.navigation.success = exploration.navigation.path.every(p => p.clicked);

    // ========================================================================
    // STEP 2: FIND AND EXPAND ACCORDION/CARD
    // ========================================================================
    if (config.accordionText) {
      console.log(`📂 Step 2: Expand accordion: "${config.accordionText}"`);

      // Find accordion by text
      const accordionSelectors = [
        `button:has-text("${config.accordionText}")`,
        `[class*="accordion"]:has-text("${config.accordionText}")`,
        `[class*="card"]:has-text("${config.accordionText}")`,
        `h6:has-text("${config.accordionText}")`,
        `:text("${config.accordionText}")`
      ];

      let accordionClicked = false;
      for (const sel of accordionSelectors) {
        try {
          const elem = page.locator(sel).first();
          if (await elem.isVisible({ timeout: 2000 })) {
            await elem.click();
            accordionClicked = true;
            exploration.accordions_found.push({ text: config.accordionText, selector: sel });
            await page.waitForTimeout(1500);

            // Screenshot of expanded accordion
            const shot = await saveScreenshot(page, screenshotsDir, `accordion_expanded_${sanitizeFileName(config.accordionText)}`);
            if (shot) exploration.screenshots.push({ stage: "accordion_expanded", path: shot });
            break;
          }
        } catch { /* continue */ }
      }

      if (!accordionClicked) {
        // Try clicking on the card area instead
        try {
          const cardArea = page.locator(`text="${config.accordionText}"`).first();
          if (await cardArea.isVisible({ timeout: 1000 })) {
            await cardArea.click();
            accordionClicked = true;
            await page.waitForTimeout(1500);
          }
        } catch { /* non-critical */ }
      }
    }

    // ========================================================================
    // STEP 3: EXPLORE EACH SERVICE
    // ========================================================================
    if (config.services && config.services.length > 0) {
      console.log(`🔍 Step 3: Explore ${config.services.length} services`);

      // PRE-STEP: Dismiss any announcement popups/tours before exploring services
      console.log(`   📢 Dismissing any announcement popups before service exploration...`);
      try {
        // Multi-step announcement tour - click through all steps
        for (let step = 0; step < 10; step++) {
          const nextBtn = page.locator('button:has-text("Next"), button:has-text("Skip"), button:has-text("Got it"), button:has-text("Close")').first();
          if (await nextBtn.isVisible({ timeout: 500 })) {
            await nextBtn.click();
            await page.waitForTimeout(300);
          } else {
            break;
          }
        }
        // Try Escape as final dismissal
        await page.keyboard.press("Escape");
        await page.waitForTimeout(500);
      } catch { /* non-critical */ }

      for (const service of config.services) {
        console.log(`   → Testing service: ${service.name}`);
        const serviceExploration = await exploreService(page, service, screenshotsDir);
        exploration.services_explored.push(serviceExploration);

        // Aggregate discoveries
        if (serviceExploration.modal_content) {
          exploration.modals_tested.push(serviceExploration.modal_content);
        }
        if (serviceExploration.dropdown_options) {
          exploration.dropdowns_tested.push(...serviceExploration.dropdown_options);
        }
        if (serviceExploration.toggle_states) {
          exploration.toggles_tested.push(serviceExploration.toggle_states);
        }
        if (serviceExploration.formulas) {
          exploration.formulas_documented.push(...serviceExploration.formulas);
        }
        if (serviceExploration.screenshots) {
          exploration.screenshots.push(...serviceExploration.screenshots);
        }
      }
    }

    // ========================================================================
    // STEP 4: DOCUMENT DISCOVERIES
    // ========================================================================
    console.log(`📝 Step 4: Document discoveries`);

    // Look for any undocumented UI elements on the page
    const pageText = await page.locator("body").textContent().catch(() => "");
    const keywordMatches = [
      "Daily Wage", "calculation", "proration", "allowances", "salary",
      "working days", "calendar days", "custom days", "EOS", "encashment",
      "leave", "deduction", "formula"
    ];

    for (const keyword of keywordMatches) {
      if (pageText.toLowerCase().includes(keyword.toLowerCase())) {
        exploration.discoveries.push({ keyword, found: true });
      }
    }

    exploration.status = "completed";
    console.log(`\n✅ Comprehensive exploration completed`);
    console.log(`   Screenshots taken: ${exploration.screenshots.length}`);
    console.log(`   Services explored: ${exploration.services_explored.length}`);
    console.log(`   Dropdowns tested: ${exploration.dropdowns_tested.length}`);
    console.log(`   Formulas documented: ${exploration.formulas_documented.length}`);

  } catch (err) {
    exploration.status = "error";
    exploration.errors.push(err.message);
    console.log(`❌ Exploration error: ${err.message}`);
  }

  return exploration;
}

/**
 * Helper to click a menu item using multiple selector strategies
 */
async function clickMenuItem(page, menuItem) {
  const selectors = [
    `span:has-text("${menuItem}")`,
    `a:has-text("${menuItem}")`,
    `button:has-text("${menuItem}")`,
    `[role="menuitem"]:has-text("${menuItem}")`,
    `nav :text("${menuItem}")`,
    `:text("${menuItem}")`
  ];

  for (const sel of selectors) {
    try {
      const elem = page.locator(sel).first();
      if (await elem.isVisible({ timeout: 2000 })) {
        await elem.click();
        return true;
      }
    } catch { /* continue */ }
  }
  return false;
}

/**
 * Explores a single service: opens modal, tests all components, documents behavior
 * CRITICAL: Must describe what's visible on screen and validate business logic
 */
async function exploreService(page, service, screenshotsDir) {
  const result = {
    name: service.name,
    modal_opened: false,
    modal_content: null,
    dropdown_options: [],
    toggle_states: null,
    formulas: [],
    leave_types: [],
    screenshots: [],
    errors: [],
    // NEW: UI descriptions and logic validation
    ui_description: null,       // Human-readable description of what's visible
    business_logic: null,       // Business rules and logic observed
    what_i_see: "",             // Plain text explanation of the screen
    element_purposes: [],       // Purpose of each UI element
    logic_validated: []         // Business logic that was validated
  };

  try {
    // Step 0: Dismiss any announcement popups or overlays that might block clicks
    console.log(`      Dismissing any popups/announcements...`);
    try {
      // Try to close announcement popups (look for X button or skip/next buttons)
      const popupDismissSelectors = [
        '[class*="announcement"] button:has-text("Next")',
        '[class*="announcement"] [aria-label="Close"]',
        '[class*="announcement"] button svg',
        '[class*="onboarding"] button:has-text("Skip")',
        '[class*="tour"] button:has-text("Skip")',
        '[class*="modal"]:has-text("Step") button:has-text("Next")',
        'button[aria-label="close"]',
        '[class*="popup"] button:has-text("Close")',
        '[class*="overlay"] button:has-text("Close")'
      ];

      for (const sel of popupDismissSelectors) {
        try {
          const dismissBtn = page.locator(sel).first();
          if (await dismissBtn.isVisible({ timeout: 500 })) {
            // Keep clicking Next until popup closes (for multi-step announcements)
            for (let i = 0; i < 5; i++) {
              if (await dismissBtn.isVisible({ timeout: 300 })) {
                await dismissBtn.click();
                await page.waitForTimeout(300);
              } else {
                break;
              }
            }
          }
        } catch { /* continue */ }
      }

      // Also try pressing Escape to close any modal
      await page.keyboard.press("Escape");
      await page.waitForTimeout(300);
    } catch { /* non-critical */ }

    // Step 1: Find and click the edit icon for this service
    console.log(`      Finding edit icon for: ${service.name}`);

    // IMPROVED: More specific row selectors for table structures
    const rowSelectors = [
      // Table rows - most specific
      `tr:has(td:text-is("${service.name}"))`,
      `tr:has-text("${service.name}")`,
      // Grid/list items
      `[class*="table"] [class*="row"]:has-text("${service.name}")`,
      `[class*="list"] [class*="item"]:has-text("${service.name}")`,
      // Generic container with exact text match preferred
      `div:has(> span:text-is("${service.name}"))`,
      `div:has(> div:text-is("${service.name}"))`,
      // Fallback to any containing element
      `[class*="row"]:has-text("${service.name}")`
    ];

    // IMPROVED: More specific edit icon selectors - pencil icons are typically SVGs or icon elements
    const editIconSelectors = [
      // Specific edit/pencil classes
      '[class*="edit-icon"]',
      '[class*="pencil-icon"]',
      '[class*="EditIcon"]',
      '[class*="PencilIcon"]',
      'button[class*="edit"]',
      // Data attributes
      '[data-testid*="edit"]',
      '[data-icon="pencil"]',
      '[data-action="edit"]',
      // Aria labels
      '[aria-label*="edit" i]',
      '[aria-label*="Edit" i]',
      '[title*="edit" i]',
      '[title*="Edit" i]',
      // SVG icons (last resort - be more specific with path patterns)
      'svg[class*="edit"]',
      'svg[class*="pencil"]',
      // Any clickable element at the end of the row (edit icons are usually last)
      'button:last-child',
      'svg:last-child',
      '[class*="action"]:last-child'
    ];

    let editClicked = false;
    for (const rowSel of rowSelectors) {
      if (editClicked) break;
      try {
        const row = page.locator(rowSel).first();
        if (await row.isVisible({ timeout: 2000 })) {
          console.log(`      Found row with selector: ${rowSel}`);

          // Try each edit icon selector within this row
          for (const iconSel of editIconSelectors) {
            try {
              const editIcon = row.locator(iconSel).last();
              if (await editIcon.isVisible({ timeout: 500 })) {
                // Scroll into view and click
                await editIcon.scrollIntoViewIfNeeded();
                await editIcon.click({ force: true }); // Force click to bypass any overlays
                editClicked = true;
                result.modal_opened = true;
                console.log(`      ✓ Clicked edit icon with selector: ${iconSel}`);
                await page.waitForTimeout(1500);
                break;
              }
            } catch { /* continue to next selector */ }
          }

          // If no specific edit icon found, try the last clickable element in the row
          if (!editClicked) {
            try {
              const lastClickable = row.locator('button, [role="button"], svg').last();
              if (await lastClickable.isVisible({ timeout: 500 })) {
                await lastClickable.scrollIntoViewIfNeeded();
                await lastClickable.click({ force: true });
                editClicked = true;
                result.modal_opened = true;
                console.log(`      ✓ Clicked last clickable element in row`);
                await page.waitForTimeout(1500);
              }
            } catch { /* continue */ }
          }
        }
      } catch { /* continue */ }
    }

    // Fallback: try clicking any edit icon near the service text using proximity
    if (!editClicked) {
      console.log(`      Trying fallback: locate text and find nearby edit icon`);
      try {
        const serviceText = page.locator(`text="${service.name}"`).first();
        if (await serviceText.isVisible({ timeout: 1000 })) {
          // Get the row container (traverse up multiple levels)
          for (const xpath of ["xpath=..", "xpath=../..", "xpath=../../.."]) {
            if (editClicked) break;
            try {
              const parent = serviceText.locator(xpath);
              for (const iconSel of editIconSelectors) {
                try {
                  const editIcon = parent.locator(iconSel).last();
                  if (await editIcon.isVisible({ timeout: 300 })) {
                    await editIcon.scrollIntoViewIfNeeded();
                    await editIcon.click({ force: true });
                    editClicked = true;
                    result.modal_opened = true;
                    console.log(`      ✓ Fallback: clicked edit icon via parent ${xpath}`);
                    await page.waitForTimeout(1500);
                    break;
                  }
                } catch { /* continue */ }
              }
            } catch { /* continue */ }
          }
        }
      } catch { /* non-critical */ }
    }

    // Last resort: Use JavaScript to find and click the edit icon
    if (!editClicked) {
      console.log(`      Trying JavaScript-based click...`);
      try {
        editClicked = await page.evaluate((serviceName) => {
          // Find all elements containing the service name
          const elements = document.querySelectorAll('*');
          for (const el of elements) {
            if (el.textContent?.trim() === serviceName || el.innerText?.trim() === serviceName) {
              // Find the row container
              let row = el.closest('tr') || el.closest('[class*="row"]') || el.parentElement?.parentElement;
              if (row) {
                // Find edit icon in the row
                const editIcon = row.querySelector('[class*="edit"], [class*="pencil"], svg:last-child, button:last-child');
                if (editIcon) {
                  editIcon.click();
                  return true;
                }
              }
            }
          }
          return false;
        }, service.name);

        if (editClicked) {
          result.modal_opened = true;
          console.log(`      ✓ JavaScript click succeeded`);
          await page.waitForTimeout(1500);
        }
      } catch { /* non-critical */ }
    }

    if (!result.modal_opened) {
      result.errors.push(`Could not open modal for service: ${service.name}`);
      return result;
    }

    // Screenshot of modal initial state
    const modalShot = await saveScreenshot(page, screenshotsDir, `modal_${sanitizeFileName(service.name)}_initial`);
    if (modalShot) result.screenshots.push({ stage: `${service.name}_modal_open`, path: modalShot });

    // ========================================================================
    // STEP 2: DESCRIBE WHAT YOU SEE - Generic UI Analysis
    // This works for ANY feature, not just specific ones
    // ========================================================================
    console.log(`      📝 Analyzing screen and describing what's visible...`);
    result.ui_description = await describeCurrentScreen(page, { name: service.name });
    result.what_i_see = result.ui_description.what_i_see;
    console.log(`      UI Elements found: ${result.ui_description.visible_elements.length}`);

    // ========================================================================
    // STEP 3: ANALYZE BUSINESS LOGIC - Generic Pattern Detection
    // Detects formulas, conditions, rules - works for any feature
    // ========================================================================
    console.log(`      🔍 Analyzing business logic patterns...`);
    const logicAnalysis = await analyzeBusinessLogic(page, { name: service.name });
    result.business_logic = logicAnalysis;
    result.logic_validated = logicAnalysis.rules_detected;
    console.log(`      ${logicAnalysis.logic_summary}`);

    // Step 4: Document modal content (enhanced with UI description)
    const modalSelectors = ['[role="dialog"]', '[class*="modal"]', '[class*="dialog"]', '[class*="popup"]'];
    let modalElement = null;
    for (const sel of modalSelectors) {
      try {
        const elem = page.locator(sel).first();
        if (await elem.isVisible({ timeout: 1000 })) {
          modalElement = elem;
          break;
        }
      } catch { /* continue */ }
    }

    if (modalElement) {
      const modalText = await modalElement.textContent().catch(() => "");
      result.modal_content = {
        title: service.name,
        text_preview: modalText.substring(0, 500),
        has_formula: modalText.includes("=") && (modalText.includes("/") || modalText.includes("*")),
        ui_explanation: result.ui_description?.ui_explanation || "",
        elements_found: result.ui_description?.visible_elements || [],
        patterns_detected: result.ui_description?.patterns_detected || []
      };

      // Extract any formula patterns (generic - works for any calculation)
      const formulaPatterns = [
        /\w+\s*=\s*\([^)]+\)\s*[\/\*\+\-]\s*\(?[^)]+\)?/gi,
        /\w+\s*=\s*[^.;]{10,100}/gi
      ];
      for (const pattern of formulaPatterns) {
        const matches = modalText.match(pattern);
        if (matches) {
          for (const match of matches.slice(0, 3)) {
            result.formulas.push({
              context: service.name,
              formula: match.trim(),
              explanation: `Calculation formula found in ${service.name}`
            });
          }
          break;
        }
      }
    }

    // Step 5: Test dropdown if present
    if (service.hasDropdown) {
      console.log(`      Testing dropdown for: ${service.name}`);
      const dropdownResult = await testDropdown(page, service.name, screenshotsDir);
      result.dropdown_options = dropdownResult.options;
      result.formulas.push(...dropdownResult.formulas);
      result.screenshots.push(...dropdownResult.screenshots);
    }

    // Step 6: Test toggle if present
    if (service.hasToggle) {
      console.log(`      Testing toggle for: ${service.name}`);
      const toggleResult = await testToggle(page, service.name, screenshotsDir);
      result.toggle_states = toggleResult;
      result.screenshots.push(...(toggleResult.screenshots || []));
    }

    // Step 7: GENERIC: Extract any table data present in the modal
    console.log(`      📊 Extracting table data if present...`);
    const tableData = await extractTableData(page);
    if (tableData.rows.length > 0) {
      result.table_data = tableData;
      console.log(`      Found table: ${tableData.summary}`);
    }

    // Step 8: Close the modal
    console.log(`      Closing modal for: ${service.name}`);
    await closeModal(page);

  } catch (err) {
    result.errors.push(err.message);
  }

  return result;
}

/**
 * Tests a dropdown by selecting each option and documenting changes
 */
async function testDropdown(page, serviceName, screenshotsDir) {
  const result = {
    options: [],
    formulas: [],
    screenshots: []
  };

  try {
    // GENERIC: Find any dropdown/select element on the page
    const dropdownSelectors = [
      '[class*="select"]',
      'select',
      '[role="combobox"]',
      '[role="listbox"]',
      '[class*="dropdown"]',
      '[aria-haspopup="listbox"]',
      '[aria-haspopup="menu"]'
    ];

    let dropdown = null;
    for (const sel of dropdownSelectors) {
      try {
        const elem = page.locator(sel).first();
        if (await elem.isVisible({ timeout: 2000 })) {
          dropdown = elem;
          break;
        }
      } catch { /* continue */ }
    }

    if (!dropdown) return result;

    // Click to open dropdown
    await dropdown.click();
    await page.waitForTimeout(500);

    // Screenshot of open dropdown
    const dropdownOpenShot = await saveScreenshot(page, screenshotsDir, `dropdown_${sanitizeFileName(serviceName)}_open`);
    if (dropdownOpenShot) result.screenshots.push({ stage: `${serviceName}_dropdown_open`, path: dropdownOpenShot });

    // Find and collect all options
    const optionSelectors = [
      '[role="option"]',
      '[class*="option"]',
      'li[class*="menu"]',
      '[class*="listbox"] > div'
    ];

    const options = [];
    for (const optSel of optionSelectors) {
      try {
        const opts = await page.locator(optSel).all();
        for (const opt of opts) {
          const text = await opt.textContent().catch(() => "");
          if (text.trim()) options.push(text.trim());
        }
        if (options.length > 0) break;
      } catch { /* continue */ }
    }

    // Use discovered options - no hardcoded fallbacks
    const optionsToTest = options;

    // Test each discovered option
    for (const optionText of optionsToTest) {
      try {
        // Click dropdown to open if closed
        if (!await page.locator('[role="listbox"], [class*="menu"]:visible').isVisible().catch(() => false)) {
          await dropdown.click();
          await page.waitForTimeout(300);
        }

        // Select the option
        const optionElem = page.locator(`text="${optionText}"`).first();
        if (await optionElem.isVisible({ timeout: 1000 })) {
          await optionElem.click();
          await page.waitForTimeout(800);

          // GENERIC: Describe UI after selecting this option
          const uiAfterSelection = await describeCurrentScreen(page, { name: `${serviceName}_${optionText}` });

          // GENERIC: Look for any formula patterns (not feature-specific)
          const modalText = await page.locator('[role="dialog"], [class*="modal"]').first().textContent().catch(() => "");
          const formulaPatterns = [
            /\w+\s*=\s*\([^)]+\)\s*[\/\*\+\-]\s*\(?[^)]+\)?/gi,
            /\w+\s*=\s*[^.;]{10,100}/gi
          ];

          let foundFormula = null;
          for (const pattern of formulaPatterns) {
            const matches = modalText.match(pattern);
            if (matches && matches[0]) {
              foundFormula = matches[0].trim();
              break;
            }
          }

          result.options.push({
            option: optionText,
            selected: true,
            formula: foundFormula,
            what_changed: uiAfterSelection.what_i_see,
            ui_elements: uiAfterSelection.visible_elements,
            patterns_detected: uiAfterSelection.patterns_detected
          });

          if (foundFormula) {
            result.formulas.push({
              context: serviceName,
              option: optionText,
              formula: foundFormula,
              explanation: `Formula displayed when "${optionText}" is selected`
            });
          }

          // Screenshot of this option selected
          const optShot = await saveScreenshot(page, screenshotsDir, `dropdown_${sanitizeFileName(serviceName)}_${sanitizeFileName(optionText)}`);
          if (optShot) result.screenshots.push({ stage: `${serviceName}_option_${optionText}`, path: optShot });
        }
      } catch { /* continue to next option */ }
    }

  } catch (err) {
    console.log(`      Dropdown test error: ${err.message}`);
  }

  return result;
}

/**
 * Tests a toggle and documents behavior changes - GENERIC VERSION
 * Works with any feature, not specific to any particular toggle or fields.
 * Uses describeCurrentScreen() to capture state before/after toggle.
 */
async function testToggle(page, serviceName, screenshotsDir) {
  const result = {
    found: false,
    label: null,
    initial_state: null,
    toggled_state: null,
    behavior_change: null,
    ui_before: null,
    ui_after: null,
    what_changed: [],
    screenshots: []
  };

  try {
    // Generic toggle selectors - find ANY toggle on the page
    const toggleSelectors = [
      'input[type="checkbox"]',
      '[role="switch"]',
      '[class*="toggle"]',
      '[class*="switch"]'
    ];

    let toggle = null;
    for (const sel of toggleSelectors) {
      try {
        const elem = page.locator(sel).first();
        if (await elem.isVisible({ timeout: 2000 })) {
          toggle = elem;
          result.found = true;
          break;
        }
      } catch { /* continue */ }
    }

    if (!toggle) return result;

    // GENERIC LABEL DISCOVERY - Try multiple strategies to find the toggle's label
    let toggleLabel = null;
    const labelStrategies = [
      // Strategy 1: aria-label attribute
      async () => await toggle.getAttribute('aria-label'),
      // Strategy 2: Associated label element
      async () => {
        const id = await toggle.getAttribute('id');
        if (id) {
          return await page.locator(`label[for="${id}"]`).first().textContent().catch(() => null);
        }
        return null;
      },
      // Strategy 3: Parent label
      async () => await toggle.locator('xpath=ancestor::label').first().textContent().catch(() => null),
      // Strategy 4: Adjacent text (sibling or nearby element)
      async () => await toggle.locator('xpath=..//*[self::span or self::label or self::div][normalize-space()]').first().textContent().catch(() => null),
      // Strategy 5: Previous sibling text
      async () => await toggle.locator('xpath=preceding-sibling::*[1]').first().textContent().catch(() => null)
    ];

    for (const strategy of labelStrategies) {
      try {
        const label = await strategy();
        if (label && label.trim()) {
          toggleLabel = label.trim();
          break;
        }
      } catch { /* continue */ }
    }
    result.label = toggleLabel || "Toggle control";

    // Check initial state
    const initialChecked = await toggle.isChecked().catch(() => false);
    result.initial_state = initialChecked ? "ON" : "OFF";

    // GENERIC: Capture complete UI state BEFORE toggle using describeCurrentScreen
    result.ui_before = await describeCurrentScreen(page, { name: serviceName });

    // Screenshot before toggle
    const beforeShot = await saveScreenshot(page, screenshotsDir, `toggle_${sanitizeFileName(serviceName)}_before`);
    if (beforeShot) result.screenshots.push({ stage: `${serviceName}_toggle_before`, path: beforeShot });

    // GENERIC: Track all interactive elements' disabled state before toggle
    const elementsStateBefore = await captureInteractiveElementsState(page);

    // Toggle the switch
    await toggle.click();
    await page.waitForTimeout(800);

    result.toggled_state = initialChecked ? "OFF" : "ON";

    // GENERIC: Capture complete UI state AFTER toggle
    result.ui_after = await describeCurrentScreen(page, { name: serviceName });

    // Screenshot after toggle
    const afterShot = await saveScreenshot(page, screenshotsDir, `toggle_${sanitizeFileName(serviceName)}_after`);
    if (afterShot) result.screenshots.push({ stage: `${serviceName}_toggle_after`, path: afterShot });

    // GENERIC: Track all interactive elements' disabled state after toggle
    const elementsStateAfter = await captureInteractiveElementsState(page);

    // GENERIC: Compare before/after states to document what changed
    result.behavior_change = {
      before: elementsStateBefore,
      after: elementsStateAfter
    };

    // GENERIC: Identify specific changes
    result.what_changed = identifyChanges(elementsStateBefore, elementsStateAfter);

    // Toggle back to original state
    await toggle.click();
    await page.waitForTimeout(500);

  } catch (err) {
    console.log(`      Toggle test error: ${err.message}`);
  }

  return result;
}

/**
 * GENERIC: Captures the state of all interactive elements on the page.
 * Used to detect what changes when a toggle is flipped.
 */
async function captureInteractiveElementsState(page) {
  const state = {
    fields: [],
    buttons: [],
    selects: []
  };

  try {
    // Find all input fields and their disabled state
    const inputs = await page.locator('input:not([type="checkbox"]):not([type="hidden"])').all();
    for (let i = 0; i < Math.min(inputs.length, 20); i++) {
      const input = inputs[i];
      try {
        const isDisabled = await input.isDisabled().catch(() => false);
        const isVisible = await input.isVisible().catch(() => false);
        if (isVisible) {
          // Try to get label for this field
          const placeholder = await input.getAttribute('placeholder').catch(() => null);
          const name = await input.getAttribute('name').catch(() => null);
          const id = await input.getAttribute('id').catch(() => null);
          let label = placeholder || name || id || `field_${i}`;

          // Try to find associated label
          if (id) {
            const labelText = await page.locator(`label[for="${id}"]`).first().textContent().catch(() => null);
            if (labelText) label = labelText.trim();
          }

          state.fields.push({ label, disabled: isDisabled });
        }
      } catch { /* continue */ }
    }

    // Find all select/combobox elements and their disabled state
    const selects = await page.locator('select, [role="combobox"], [role="listbox"]').all();
    for (let i = 0; i < Math.min(selects.length, 20); i++) {
      const select = selects[i];
      try {
        const isDisabled = await select.isDisabled().catch(() => false);
        const isVisible = await select.isVisible().catch(() => false);
        if (isVisible) {
          const name = await select.getAttribute('name').catch(() => null);
          const ariaLabel = await select.getAttribute('aria-label').catch(() => null);
          const label = ariaLabel || name || `select_${i}`;
          state.selects.push({ label, disabled: isDisabled });
        }
      } catch { /* continue */ }
    }

    // Find all buttons and their disabled state
    const buttons = await page.locator('button').all();
    for (let i = 0; i < Math.min(buttons.length, 10); i++) {
      const button = buttons[i];
      try {
        const isDisabled = await button.isDisabled().catch(() => false);
        const isVisible = await button.isVisible().catch(() => false);
        if (isVisible) {
          const text = await button.textContent().catch(() => `button_${i}`);
          state.buttons.push({ label: text.trim(), disabled: isDisabled });
        }
      } catch { /* continue */ }
    }

  } catch (err) {
    console.log(`      Error capturing element states: ${err.message}`);
  }

  return state;
}

/**
 * GENERIC: Compares before/after states and identifies what changed.
 */
function identifyChanges(before, after) {
  const changes = [];

  // Compare fields
  for (let i = 0; i < Math.min(before.fields.length, after.fields.length); i++) {
    const b = before.fields[i];
    const a = after.fields[i];
    if (b.disabled !== a.disabled) {
      changes.push({
        element: b.label,
        type: 'field',
        change: a.disabled ? 'became disabled' : 'became enabled'
      });
    }
  }

  // Compare selects
  for (let i = 0; i < Math.min(before.selects.length, after.selects.length); i++) {
    const b = before.selects[i];
    const a = after.selects[i];
    if (b.disabled !== a.disabled) {
      changes.push({
        element: b.label,
        type: 'select',
        change: a.disabled ? 'became disabled' : 'became enabled'
      });
    }
  }

  // Compare buttons
  for (let i = 0; i < Math.min(before.buttons.length, after.buttons.length); i++) {
    const b = before.buttons[i];
    const a = after.buttons[i];
    if (b.disabled !== a.disabled) {
      changes.push({
        element: b.label,
        type: 'button',
        change: a.disabled ? 'became disabled' : 'became enabled'
      });
    }
  }

  return changes;
}

/**
 * GENERIC: Extracts data from any table in a modal/page.
 * Works with any feature - not specific to leave types.
 * Returns an array of row objects with dynamically detected columns.
 */
async function extractTableData(page) {
  const tableData = {
    headers: [],
    rows: [],
    summary: null
  };

  try {
    // Find table element
    const table = page.locator('table, [class*="table"], [role="grid"]').first();
    if (!await table.isVisible({ timeout: 2000 }).catch(() => false)) {
      return tableData;
    }

    // GENERIC: Extract headers dynamically
    const headerCells = await table.locator('thead th, thead td, [class*="header"] [class*="cell"], tr:first-child th').all();
    for (const cell of headerCells) {
      const text = await cell.textContent().catch(() => "");
      if (text.trim()) {
        tableData.headers.push(text.trim());
      }
    }

    // If no headers found, try first row
    if (tableData.headers.length === 0) {
      const firstRow = await table.locator('tr:first-child td').all();
      // Check if first row looks like a header (short text in each cell)
      let looksLikeHeader = true;
      for (const cell of firstRow) {
        const text = await cell.textContent().catch(() => "");
        if (text.length > 50) looksLikeHeader = false;
      }
      if (looksLikeHeader && firstRow.length > 0) {
        for (const cell of firstRow) {
          const text = await cell.textContent().catch(() => "");
          tableData.headers.push(text.trim());
        }
      }
    }

    // GENERIC: Extract all data rows
    const rows = await table.locator('tbody tr, [class*="table-body"] [class*="row"]').all();

    // If no tbody, get all rows and skip first (header)
    let dataRows = rows;
    if (rows.length === 0) {
      const allRows = await table.locator('tr').all();
      dataRows = allRows.slice(tableData.headers.length > 0 ? 1 : 0);
    }

    for (const row of dataRows) {
      const cells = await row.locator('td, [class*="cell"]').all();
      if (cells.length === 0) continue;

      const rowData = {};
      for (let i = 0; i < cells.length; i++) {
        const text = await cells[i].textContent().catch(() => "");
        const header = tableData.headers[i] || `column_${i}`;
        rowData[header] = text.trim();
      }

      // Only add row if it has content
      const hasContent = Object.values(rowData).some(v => v && v.trim());
      if (hasContent) {
        tableData.rows.push(rowData);
      }
    }

    // Generate summary
    tableData.summary = `Table with ${tableData.headers.length} columns and ${tableData.rows.length} data rows`;

  } catch (err) {
    console.log(`      Table extraction note: ${err.message}`);
  }

  return tableData;
}


/**
 * Closes a modal dialog
 */
async function closeModal(page) {
  try {
    // Try close button first
    const closeSelectors = [
      'button:has-text("Cancel")',
      'button:has-text("Close")',
      '[aria-label="Close"]',
      '[class*="close"]',
      'button svg' // X icon
    ];

    for (const sel of closeSelectors) {
      try {
        const btn = page.locator(sel).first();
        if (await btn.isVisible({ timeout: 1000 })) {
          await btn.click();
          await page.waitForTimeout(500);
          return;
        }
      } catch { /* continue */ }
    }

    // Fallback: press Escape
    await page.keyboard.press("Escape");
    await page.waitForTimeout(500);
  } catch { /* non-critical */ }
}

// ------------------ UI DESCRIPTION & LOGIC VALIDATION ------------------
/**
 * GENERIC UI ANALYZER - Works for ANY feature
 * Analyzes the current screen and generates human-readable descriptions of:
 * - What's visible on the UI (all element types)
 * - The purpose of each element (inferred from context)
 * - Business logic and rules observed (patterns detected)
 * - Relationships between elements (dependencies)
 *
 * This is FEATURE-AGNOSTIC and works for any Bayzat screen.
 */
async function describeCurrentScreen(page, context = {}) {
  const description = {
    screen_title: null,
    screen_context: context.name || context.service || "Unknown screen",
    visible_elements: [],
    ui_explanation: "",
    what_i_see: "",              // Plain text narrative of the screen
    business_logic: [],
    element_relationships: [],
    user_actions_available: [],
    data_displayed: [],
    warnings_or_notes: [],
    patterns_detected: []         // Generic patterns found (formulas, rules, etc.)
  };

  try {
    // Get screen title from various sources
    const titleSelectors = ['h1', 'h2', '[class*="title"]', '[class*="header"] h3', '[role="heading"]', '[class*="modal-title"]'];
    for (const sel of titleSelectors) {
      try {
        const title = await page.locator(sel).first().textContent({ timeout: 1000 });
        if (title && title.trim().length > 2 && title.trim().length < 100) {
          description.screen_title = title.trim();
          break;
        }
      } catch { /* continue */ }
    }

    // Identify ALL visible UI elements and their purposes
    const elementAnalysis = [];

    // Check for dropdowns/selects (generic)
    const dropdowns = await page.locator('select, [role="combobox"], [role="listbox"], [class*="select"]:not([class*="unselect"])').all();
    for (const dropdown of dropdowns.slice(0, 10)) {
      try {
        // Try multiple ways to find the label
        let label = await dropdown.getAttribute("aria-label").catch(() => null);
        if (!label) {
          label = await dropdown.locator('xpath=ancestor::*[1]/label | xpath=preceding-sibling::label | xpath=../label').first().textContent().catch(() => null);
        }
        if (!label) {
          label = await dropdown.locator('xpath=ancestor::*[2]//label').first().textContent().catch(() => null);
        }
        const currentValue = await dropdown.textContent().catch(() => "");
        elementAnalysis.push({
          type: "dropdown",
          label: label?.trim() || "Selection field",
          current_value: currentValue.substring(0, 100).trim(),
          purpose: `Selection control${label ? ` for choosing ${label.trim()}` : ""}`
        });
      } catch { /* continue */ }
    }

    // Check for toggles/switches (generic)
    const toggles = await page.locator('[role="switch"], input[type="checkbox"], [class*="toggle"], [class*="switch"]').all();
    for (const toggle of toggles.slice(0, 10)) {
      try {
        const isChecked = await toggle.isChecked().catch(() => false);
        // Try multiple ways to find the label
        let labelEl = await toggle.getAttribute("aria-label").catch(() => null);
        if (!labelEl) {
          labelEl = await toggle.locator('xpath=ancestor::label | xpath=following-sibling::span | xpath=../span | xpath=ancestor::*[2]//span').first().textContent().catch(() => null);
        }
        elementAnalysis.push({
          type: "toggle",
          label: labelEl?.trim() || "Toggle switch",
          state: isChecked ? "ON" : "OFF",
          purpose: `Toggle control${labelEl ? ` for ${labelEl.trim()}` : ""} - enables or disables a setting`
        });
      } catch { /* continue */ }
    }

    // Check for input fields (generic)
    const inputs = await page.locator('input[type="text"], input[type="number"], input[type="email"], input[type="date"], textarea').all();
    for (const input of inputs.slice(0, 10)) {
      try {
        const placeholder = await input.getAttribute("placeholder").catch(() => null);
        const inputType = await input.getAttribute("type").catch(() => "text");
        let label = await input.getAttribute("aria-label").catch(() => null);
        if (!label) {
          label = await input.locator('xpath=preceding-sibling::label | xpath=../label | xpath=ancestor::*[2]//label').first().textContent().catch(() => null);
        }
        const value = await input.inputValue().catch(() => "");
        const isDisabled = await input.isDisabled().catch(() => false);
        elementAnalysis.push({
          type: "input",
          input_type: inputType,
          label: label?.trim() || placeholder || "Input field",
          current_value: value,
          is_disabled: isDisabled,
          purpose: `${inputType} input field${label ? ` for ${label.trim()}` : ""}${isDisabled ? " (disabled)" : ""}`
        });
      } catch { /* continue */ }
    }

    // Check for buttons (generic)
    const buttons = await page.locator('button:visible, [role="button"]:visible').all();
    for (const button of buttons.slice(0, 15)) {
      try {
        const text = await button.textContent().catch(() => "");
        const ariaLabel = await button.getAttribute("aria-label").catch(() => null);
        const isDisabled = await button.isDisabled().catch(() => false);
        const buttonText = text.trim() || ariaLabel || "";
        if (buttonText && buttonText.length < 50) {
          description.user_actions_available.push({
            action: buttonText,
            type: "button",
            is_disabled: isDisabled
          });
        }
      } catch { /* continue */ }
    }

    // Check for tables with data (generic)
    const tables = await page.locator('table, [role="table"], [class*="table"]').all();
    for (const table of tables.slice(0, 5)) {
      try {
        const headers = await table.locator('th, [role="columnheader"]').allTextContents();
        const rowCount = await table.locator('tbody tr, [role="row"]').count();
        if (headers.length > 0 || rowCount > 0) {
          description.data_displayed.push({
            type: "table",
            columns: headers.slice(0, 10).map(h => h.trim()).filter(h => h),
            row_count: rowCount,
            purpose: headers.length > 0
              ? `Data table with columns: ${headers.slice(0, 5).map(h => h.trim()).filter(h => h).join(", ")}`
              : `Data table with ${rowCount} rows`
          });
        }
      } catch { /* continue */ }
    }

    // Check for links (generic)
    const links = await page.locator('a:visible').all();
    for (const link of links.slice(0, 10)) {
      try {
        const text = await link.textContent().catch(() => "");
        if (text.trim() && text.length < 50) {
          description.user_actions_available.push({
            action: text.trim(),
            type: "link"
          });
        }
      } catch { /* continue */ }
    }

    // GENERIC PATTERN DETECTION - Look for formulas, calculations, rules
    const pageText = await page.locator('[role="dialog"], [class*="modal"], main, [class*="content"], body').first().textContent().catch(() => "");

    // Generic formula patterns (not feature-specific)
    const formulaPatterns = [
      { pattern: /(\w+)\s*=\s*\([^)]+\)\s*[\/\*\+\-]\s*\(?[^)]+\)?/gi, type: "calculation" },
      { pattern: /calculated?\s+(?:as|by|using)\s+[^.]+/gi, type: "calculation_method" },
      { pattern: /formula[:\s]+[^.]+/gi, type: "formula_description" },
      { pattern: /(\d+(?:\.\d+)?)\s*(?:days?|hours?|%|percent)/gi, type: "numeric_value" },
      { pattern: /(?:total|sum|average|rate|ratio)[:\s]+[^.]+/gi, type: "aggregate" }
    ];

    for (const { pattern, type } of formulaPatterns) {
      const matches = pageText.match(pattern);
      if (matches) {
        for (const match of matches.slice(0, 3)) {
          description.patterns_detected.push({
            type: type,
            text: match.trim().substring(0, 200),
            explanation: `${type.replace(/_/g, " ")} detected: ${match.trim().substring(0, 100)}`
          });
          description.business_logic.push({
            type: type,
            text: match.trim().substring(0, 200),
            explanation: `${type.replace(/_/g, " ")} detected: ${match.trim().substring(0, 100)}`
          });
        }
      }
    }

    // Look for informational text, notes, warnings (generic)
    const noteSelectors = ['[class*="info"]', '[class*="note"]', '[class*="help"]', '[class*="description"]', '[class*="hint"]', '[class*="warning"]', '[class*="alert"]'];
    for (const sel of noteSelectors) {
      try {
        const notes = await page.locator(sel).allTextContents();
        for (const note of notes.slice(0, 5)) {
          if (note.trim().length > 20 && note.trim().length < 500) {
            description.warnings_or_notes.push(note.trim());
          }
        }
      } catch { /* continue */ }
    }

    // Detect element relationships (what controls what)
    for (const toggle of elementAnalysis.filter(e => e.type === "toggle")) {
      // Check if any inputs become disabled/enabled based on toggle state
      description.element_relationships.push({
        controller: toggle.label,
        controller_type: "toggle",
        controller_state: toggle.state,
        effect: `May control visibility or enabled state of related fields`
      });
    }

    description.visible_elements = elementAnalysis;

    // Generate human-readable explanation
    description.ui_explanation = generateUIExplanation(description);

    // Generate "what I see" narrative
    description.what_i_see = generateWhatISee(description);

  } catch (err) {
    description.error = err.message;
  }

  return description;
}

/**
 * Generates a human-readable explanation of the UI based on analyzed elements
 * GENERIC - works for any screen
 */
function generateUIExplanation(description) {
  const parts = [];

  if (description.screen_title) {
    parts.push(`This screen shows "${description.screen_title}".`);
  }

  // Describe dropdowns
  const dropdowns = description.visible_elements.filter(e => e.type === "dropdown");
  if (dropdowns.length > 0) {
    parts.push(`There ${dropdowns.length === 1 ? "is" : "are"} ${dropdowns.length} dropdown${dropdowns.length > 1 ? "s" : ""} available:`);
    for (const d of dropdowns) {
      parts.push(`  - ${d.label}: currently showing "${d.current_value}"`);
    }
  }

  // Describe toggles
  const toggles = description.visible_elements.filter(e => e.type === "toggle");
  if (toggles.length > 0) {
    parts.push(`Toggle settings found:`);
    for (const t of toggles) {
      parts.push(`  - ${t.label}: currently ${t.state}`);
    }
  }

  // Describe inputs
  const inputs = description.visible_elements.filter(e => e.type === "input");
  if (inputs.length > 0) {
    parts.push(`Input fields present:`);
    for (const i of inputs) {
      const status = i.is_disabled ? " (disabled)" : "";
      parts.push(`  - ${i.label}${i.current_value ? `: value is "${i.current_value}"` : ""}${status}`);
    }
  }

  // Describe tables
  if (description.data_displayed.length > 0) {
    parts.push(`Data tables present:`);
    for (const t of description.data_displayed) {
      parts.push(`  - ${t.purpose} (${t.row_count} rows)`);
    }
  }

  // Describe business logic/formulas
  if (description.business_logic.length > 0) {
    parts.push(`Business logic observed:`);
    for (const bl of description.business_logic) {
      parts.push(`  - ${bl.explanation}`);
    }
  }

  // Available actions
  const enabledActions = description.user_actions_available.filter(a => !a.is_disabled);
  if (enabledActions.length > 0) {
    const actions = enabledActions.map(a => a.action).join(", ");
    parts.push(`Available actions: ${actions}`);
  }

  return parts.join("\n");
}

/**
 * Generates a plain-text narrative of "what I see on screen"
 * GENERIC - works for any screen
 */
function generateWhatISee(description) {
  const parts = [];

  // Opening statement
  if (description.screen_title) {
    parts.push(`I'm looking at a screen titled "${description.screen_title}".`);
  } else {
    parts.push(`I'm looking at a configuration screen.`);
  }

  // Describe main elements
  const dropdowns = description.visible_elements.filter(e => e.type === "dropdown");
  const toggles = description.visible_elements.filter(e => e.type === "toggle");
  const inputs = description.visible_elements.filter(e => e.type === "input");

  if (dropdowns.length > 0) {
    parts.push(`I can see ${dropdowns.length} dropdown selection${dropdowns.length > 1 ? "s" : ""} that let${dropdowns.length === 1 ? "s" : ""} users choose from predefined options.`);
    for (const d of dropdowns) {
      if (d.current_value) {
        parts.push(`The "${d.label}" dropdown is currently set to "${d.current_value}".`);
      }
    }
  }

  if (toggles.length > 0) {
    parts.push(`There ${toggles.length === 1 ? "is" : "are"} ${toggles.length} toggle switch${toggles.length > 1 ? "es" : ""} for enabling/disabling settings.`);
    for (const t of toggles) {
      parts.push(`The "${t.label}" toggle is ${t.state}.`);
    }
  }

  if (inputs.length > 0) {
    const enabledInputs = inputs.filter(i => !i.is_disabled);
    const disabledInputs = inputs.filter(i => i.is_disabled);
    if (enabledInputs.length > 0) {
      parts.push(`There ${enabledInputs.length === 1 ? "is" : "are"} ${enabledInputs.length} editable input field${enabledInputs.length > 1 ? "s" : ""}.`);
    }
    if (disabledInputs.length > 0) {
      parts.push(`${disabledInputs.length} input field${disabledInputs.length > 1 ? "s are" : " is"} currently disabled.`);
    }
  }

  // Describe tables
  if (description.data_displayed.length > 0) {
    for (const t of description.data_displayed) {
      parts.push(`I can see a data table with ${t.row_count} rows${t.columns.length > 0 ? ` and columns: ${t.columns.join(", ")}` : ""}.`);
    }
  }

  // Describe any formulas or calculations
  if (description.patterns_detected.length > 0) {
    parts.push(`I notice some business logic displayed:`);
    for (const p of description.patterns_detected) {
      parts.push(`- ${p.text}`);
    }
  }

  // Available actions
  const buttons = description.user_actions_available.filter(a => a.type === "button" && !a.is_disabled);
  if (buttons.length > 0) {
    parts.push(`The available action buttons are: ${buttons.map(b => b.action).join(", ")}.`);
  }

  // Notes or warnings
  if (description.warnings_or_notes.length > 0) {
    parts.push(`I also see some informational notes on the screen.`);
  }

  return parts.join(" ");
}

/**
 * GENERIC Business Logic Analyzer
 * Validates and documents business logic observed in the UI
 * Works for ANY feature by detecting patterns, not hardcoded rules
 */
async function analyzeBusinessLogic(page, context = {}) {
  const analysis = {
    context: context.name || context.service || "screen",
    rules_detected: [],
    formulas_found: [],
    conditions_found: [],
    dependencies_found: [],
    logic_summary: ""
  };

  try {
    const pageText = await page.locator('[role="dialog"], [class*="modal"], main, [class*="content"], body').first().textContent().catch(() => "");

    // Detect formulas (any pattern like: X = Y / Z)
    const formulaMatches = pageText.match(/\w+\s*=\s*[^.;]+/gi) || [];
    for (const formula of formulaMatches.slice(0, 5)) {
      if (formula.length > 10 && formula.length < 200) {
        analysis.formulas_found.push({
          formula: formula.trim(),
          explanation: `Formula detected: ${formula.trim()}`
        });
      }
    }

    // Detect conditional text (when X, if Y, based on Z)
    const conditionalPatterns = [
      /when\s+[^.]+/gi,
      /if\s+[^.]+\s+then\s+[^.]+/gi,
      /based\s+on\s+[^.]+/gi,
      /depending\s+on\s+[^.]+/gi,
      /applies\s+to\s+[^.]+/gi
    ];

    for (const pattern of conditionalPatterns) {
      const matches = pageText.match(pattern) || [];
      for (const match of matches.slice(0, 3)) {
        analysis.conditions_found.push({
          condition: match.trim(),
          explanation: `Conditional logic: ${match.trim()}`
        });
      }
    }

    // Detect method/option descriptions
    const methodPatterns = [
      /(\w+(?:\s+\w+)?)\s*[-–:]\s*([^.]+)/gi  // "Option: description" pattern
    ];

    for (const pattern of methodPatterns) {
      let match;
      while ((match = pattern.exec(pageText)) !== null && analysis.rules_detected.length < 5) {
        if (match[1].length > 3 && match[2].length > 10) {
          analysis.rules_detected.push({
            rule: match[1].trim(),
            explanation: match[2].trim().substring(0, 200)
          });
        }
      }
    }

    // Generate summary
    const summaryParts = [];
    if (analysis.formulas_found.length > 0) {
      summaryParts.push(`Found ${analysis.formulas_found.length} formula(s) on the screen.`);
    }
    if (analysis.conditions_found.length > 0) {
      summaryParts.push(`Detected ${analysis.conditions_found.length} conditional logic statement(s).`);
    }
    if (analysis.rules_detected.length > 0) {
      summaryParts.push(`Identified ${analysis.rules_detected.length} business rule(s).`);
    }
    analysis.logic_summary = summaryParts.join(" ") || "No explicit business logic detected on this screen.";

  } catch (err) {
    analysis.error = err.message;
  }

  return analysis;
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
 * Note: Screenshots are handled in the main claim validation loop with category-based deduplication
 */
async function performSemanticClaimValidation(page, claim) {
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

    // Note: Screenshots are now handled in the main claim validation loop with category-based deduplication
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
    // Create context with high-quality screenshot settings
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },  // Full HD viewport
      deviceScaleFactor: 2,                      // 2x resolution for retina-quality screenshots
      colorScheme: 'light',                      // Consistent light theme
    });
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

      // ========================================================================
      // STEP 4.5: COMPREHENSIVE FEATURE EXPLORATION
      // Deep exploration of feature - test all UI components, document behavior
      // ========================================================================
      console.log(`\n🔬 Starting Comprehensive Feature Exploration...`);
      output.comprehensive_exploration = await performComprehensiveFeatureExploration(
        page,
        featureContext,
        SCREENSHOTS_DIR
      );

      console.log(`   Status: ${output.comprehensive_exploration.status}`);
      console.log(`   Services explored: ${output.comprehensive_exploration.services_explored?.length || 0}`);
      console.log(`   Dropdowns tested: ${output.comprehensive_exploration.dropdowns_tested?.length || 0}`);
      console.log(`   Toggles tested: ${output.comprehensive_exploration.toggles_tested?.length || 0}`);
      console.log(`   Formulas documented: ${output.comprehensive_exploration.formulas_documented?.length || 0}`);
      console.log(`   Screenshots: ${output.comprehensive_exploration.screenshots?.length || 0}`);

    } else {
      console.log(`\n⚠️ Skipping exploration - login failed`);
      output.cognitive_walkthrough = { status: "skipped", reason: "login_failed" };
      output.feature_inspection = { status: "skipped", reason: "login_failed" };
      output.comprehensive_exploration = { status: "skipped", reason: "login_failed" };
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
    // Navigate to feature page ONCE, then validate all claims
    // ========================================================================

    // First, navigate to the feature-relevant page for better screenshots
    let featureNavigation = null;
    if (output.login?.status === "pass" && claims.length > 0) {
      console.log(`\n📸 Navigating to feature page for claim screenshots...`);
      featureNavigation = await navigateToFeaturePageForClaims(page, featureContext);
      output.claim_navigation = featureNavigation;

      if (featureNavigation.status === "navigated") {
        console.log(`   ✅ Navigated successfully: ${featureNavigation.navigation_path?.join(" → ")}`);

        // Take screenshot after navigation to show the feature page
        const featureShot = await saveScreenshot(page, SCREENSHOTS_DIR, "feature_page__after_navigation");
        if (featureShot) {
          console.log(`   📷 Captured feature page screenshot`);
        }
      } else {
        console.log(`   ⚠️ Navigation result: ${featureNavigation.status}`);
      }
    }

    // Track which claim categories we've captured screenshots for (to avoid duplicates)
    const capturedCategories = new Set();

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
          // Try to expand relevant UI elements for this specific claim
          const expandResult = await tryExpandRelevantUIElement(page, c);
          if (expandResult.expanded) {
            claimRes.expanded_ui = expandResult.element_clicked;
          }

          // SEMANTIC VALIDATION: No CSS selectors provided, try to validate claim by searching page content
          const semanticResult = await performSemanticClaimValidation(page, c);
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

        // Smart screenshot deduplication: Categorize claims to avoid duplicate screenshots
        // Claims about similar topics should share screenshots
        const claimCategory = getClaimCategory(c);

        if (!capturedCategories.has(claimCategory)) {
          // First time seeing this category - take a unique screenshot
          capturedCategories.add(claimCategory);

          const shot = await saveScreenshot(page, SCREENSHOTS_DIR, `claim_${sanitizeFileName(claimCategory)}`);
          if (shot) {
            claimRes.checks.push({
              action: "screenshot",
              name: `claim_${claimCategory}`,
              status: "pass",
              evidence: { screenshot: shot },
              category: claimCategory,
              error: null,
            });
            claimRes.screenshot_category = claimCategory;
          }
        } else {
          // Already captured this category - reference existing screenshot
          claimRes.screenshot_category = claimCategory;
          claimRes.screenshot_reused = true;
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
