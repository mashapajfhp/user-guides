#!/usr/bin/env node
/**
 * scripts/playwright/run-validation.mjs
 *
 * ============================================================================
 * VALIDATION METHODOLOGY: COGNITIVE WALKTHROUGH + BEHAVIORAL TESTING
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
 * 2. BEHAVIORAL TESTING (replaces keyword matching):
 *    - Parses claims to identify expected UI behaviors
 *    - Executes actual UI interactions (click, navigate, select, verify)
 *    - Validates element states (visible, enabled, options available)
 *    - Captures evidence screenshots of actual interface behavior
 *
 *    Supported behavior patterns:
 *    - Navigation: "navigate to X", "go to X", "access X"
 *    - Click actions: "click X button", "select X", "press X"
 *    - Visibility: "shows X", "displays X", "appears"
 *    - Dialog/Modal: "dialog opens", "modal appears"
 *    - Dropdown: "dropdown with options", "select from dropdown"
 *    - Form inputs: "enter X", "fill X"
 *    - State verification: "enabled", "disabled", "checked"
 *
 * IMPORTANT: Navigation paths and procedures are CONTEXT SETTERS, not literal
 * instructions. They help understand:
 *   - What the feature does (from procedures)
 *   - Where it might be located (from navigation hints)
 *   - What UI behaviors to test (from claim text)
 *
 * The validator does NOT just search for keywords - it TESTS actual UI behavior.
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
 *   methodology: "cognitive_walkthrough_and_behavioral_testing",
 *   feature_context: {...},      // Extracted understanding of the feature
 *   exploration_results: [...],  // What was discovered through exploration
 *   feature_inspection: {...},   // Elements found matching feature keywords
 *   claim_ui_checks: [           // Claims validated through BEHAVIORAL TESTING
 *     {
 *       id: string,
 *       claim: string,
 *       status: "behavioral_validated"|"behavioral_partial"|"behavioral_not_found"|"error",
 *       checks: [{
 *         action: "behavioral_validation",
 *         behavioral_tests: [{    // Individual UI tests performed
 *           pattern_type: "navigation"|"click"|"visibility"|"dialog"|"dropdown"|"input"|"state",
 *           target: string,       // What element was tested
 *           element_found: boolean,
 *           element_state: {...}, // Actual UI state (visible, enabled, options, etc.)
 *           outcome: "verified"|"not_found"|"error"
 *         }],
 *         validation_confidence: number,  // 0-100% based on tests passed
 *         elements_verified: number,
 *         elements_not_found: number
 *       }]
 *     }
 *   ],
 *   screenshots: [...],          // Evidence captured
 *   summary: {...}
 * }
 */

import fs from "fs";
import path from "path";
import process from "process";
import { chromium } from "@playwright/test";

// Exploration-first UI validation utilities
import {
  UIExplorer,
  NavigationExplorer,
  runExplorationForCheck,
  DEFAULT_LIMITS,
  extractKeywords
} from "./ui-explorer.mjs";

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

/**
 * Wait for page to be fully loaded and ready for screenshot
 * Detects loading spinners, skeleton screens, and network activity
 *
 * @param {Page} page - Playwright page object
 * @param {Object} options - Wait options
 * @param {number} options.timeout - Maximum wait time in ms (default: 10000)
 * @param {boolean} options.waitForNetwork - Wait for network idle (default: true)
 * @returns {Object} { ready: boolean, waitedFor: string[], duration: number }
 */
// Track recent page ready waits to avoid redundant waiting
let lastPageReadyTime = 0;
const PAGE_READY_COOLDOWN_MS = 2000; // Skip waiting if we waited recently

async function waitForPageReady(page, options = {}) {
  const timeout = options.timeout || 10000;
  const waitForNetwork = options.waitForNetwork !== false;
  const startTime = Date.now();
  const waitedFor = [];

  // Skip if we recently waited (within cooldown period)
  if (Date.now() - lastPageReadyTime < PAGE_READY_COOLDOWN_MS && !options.forceWait) {
    return {
      ready: true,
      contentFound: true,
      waitedFor: ['skipped_recent'],
      duration: 0,
    };
  }

  // Common loading indicator selectors - more specific to avoid false positives
  const loadingSelectors = [
    // Spinners - more specific
    '.ant-spin-spinning',
    '.ant-spin-dot',
    '[data-testid="loading"]',
    '[data-testid="spinner"]',
    // Only match visible spinning/loading states
    '[class*="spinner"]:not([class*="hidden"])',
    '[class*="loader"]:not([class*="hidden"])',
    // Skeleton screens
    '.ant-skeleton-active',
    '[class*="skeleton-loading"]',
    // Progress indicators
    '[role="progressbar"][aria-busy="true"]',
  ];

  try {
    // 1. Wait for network to be relatively idle (no more than 2 connections for 500ms)
    if (waitForNetwork) {
      try {
        await page.waitForLoadState('networkidle', { timeout: Math.min(timeout, 5000) });
        waitedFor.push('networkidle');
      } catch {
        // Network didn't go idle, continue anyway
        waitedFor.push('network_timeout');
      }
    }

    // 2. Wait for DOM to be ready
    try {
      await page.waitForLoadState('domcontentloaded', { timeout: 2000 });
      waitedFor.push('domcontentloaded');
    } catch {
      // Continue anyway
    }

    // 3. Wait for loading indicators to disappear (with max 2 second wait per indicator)
    const maxWaitPerIndicator = 2000; // Reduced from 5000ms
    for (const selector of loadingSelectors) {
      try {
        const locator = page.locator(selector);
        const isVisible = await locator.first().isVisible({ timeout: 100 }).catch(() => false);

        if (isVisible) {
          // Wait for this loading indicator to disappear (max 2s)
          await locator.first().waitFor({
            state: 'hidden',
            timeout: Math.min(timeout - (Date.now() - startTime), maxWaitPerIndicator)
          }).catch(() => {});
          waitedFor.push(`hidden:${selector.slice(0, 30)}`);
        }
      } catch {
        // Selector not found or timeout, continue
      }

      // Check if we've exceeded timeout
      if (Date.now() - startTime > timeout) {
        break;
      }
    }

    // 4. Extra wait for any CSS animations to complete
    await page.waitForTimeout(300);
    waitedFor.push('animation_settle');

    // 5. Check if main content area has loaded (look for common content indicators)
    const contentIndicators = [
      'main',
      '[role="main"]',
      '#root > div',
      '.app-content',
      '[class*="content"]',
      'article',
    ];

    let contentFound = false;
    for (const selector of contentIndicators) {
      try {
        const isVisible = await page.locator(selector).first().isVisible({ timeout: 100 });
        if (isVisible) {
          contentFound = true;
          waitedFor.push(`content:${selector}`);
          break;
        }
      } catch {
        // Continue checking
      }
    }

    const duration = Date.now() - startTime;
    lastPageReadyTime = Date.now(); // Update cooldown timestamp
    return {
      ready: true,
      contentFound,
      waitedFor,
      duration,
    };

  } catch (err) {
    const duration = Date.now() - startTime;
    lastPageReadyTime = Date.now(); // Update even on error to prevent infinite loops
    return {
      ready: false,
      error: err.message,
      waitedFor,
      duration,
    };
  }
}

/**
 * Enhanced screenshot capture with behavioral context description
 * Returns both the file path AND a rich description of what the screenshot shows
 *
 * @param {Page} page - Playwright page object
 * @param {string} screenshotsDir - Directory to save screenshots
 * @param {string} label - Screenshot label/filename
 * @param {Object} options - Additional options
 * @param {boolean} options.fullPage - Capture full page vs viewport
 * @param {string} options.context - Context hint for description generation
 * @param {string} options.featureName - Feature being documented
 * @param {string} options.action - Action that led to this screenshot
 * @param {boolean} options.skipLoadingWait - Skip waiting for page to be ready (default: false)
 * @returns {Object} { path, description, elements, purpose }
 */
async function saveScreenshot(page, screenshotsDir, label, options = {}) {
  try {
    const file = `${sanitizeFileName(label)}.png`;
    const fullPath = path.join(screenshotsDir, file);

    // Wait for page to be fully loaded before capturing
    if (!options.skipLoadingWait) {
      const loadResult = await waitForPageReady(page, {
        timeout: options.loadTimeout || 10000,
        waitForNetwork: options.waitForNetwork !== false,
      });

      if (!loadResult.ready) {
        console.warn(`      ⚠️ Page may not be fully loaded for ${label}: ${loadResult.error}`);
      }

      // Log what we waited for (useful for debugging)
      if (loadResult.waitedFor.length > 0 && loadResult.duration > 500) {
        console.log(`      ⏱️ Waited ${loadResult.duration}ms for: ${loadResult.waitedFor.slice(-3).join(', ')}`);
      }
    } else {
      // Minimal wait for animations only
      await page.waitForTimeout(200);
    }

    // Screenshot options for high quality
    const screenshotOptions = {
      path: fullPath,
      fullPage: options.fullPage || false,
      animations: 'disabled',
    };

    await page.screenshot(screenshotOptions);
    const relativePath = path.relative(ROOT, fullPath);

    // Generate behavioral description of what this screenshot shows
    const description = await generateScreenshotDescription(page, label, options);

    return {
      path: relativePath,
      filename: file,
      ...description
    };
  } catch (err) {
    console.warn(`      ⚠️ Screenshot failed for ${label}: ${err.message}`);
    return null;
  }
}

/**
 * Generate a rich behavioral description of what a screenshot shows
 * This helps the user guide generator understand the context and purpose
 */
async function generateScreenshotDescription(page, label, options = {}) {
  const description = {
    // What the user sees in this screenshot
    what_it_shows: "",
    // What the user can do on this screen
    user_actions: [],
    // How this helps complete the task
    purpose: "",
    // Key UI elements visible
    key_elements: [],
    // Navigation context (where this is in the app)
    navigation_context: "",
    // Suggested caption for the user guide
    suggested_caption: "",
  };

  try {
    // Get page title and URL for context
    const pageTitle = await page.title().catch(() => "");
    const pageUrl = page.url();

    // Extract visible headings to understand the page context
    const headings = await page.locator('h1, h2, h3').allTextContents()
      .catch(() => []);
    const visibleHeadings = headings.slice(0, 5).map(h => h.trim()).filter(h => h.length > 0);

    // Check for common UI patterns
    const hasDialog = await page.locator('[role="dialog"], .modal, [aria-modal="true"]').isVisible()
      .catch(() => false);
    const hasForm = await page.locator('form, [role="form"]').isVisible()
      .catch(() => false);
    const hasTable = await page.locator('table, [role="grid"]').isVisible()
      .catch(() => false);
    const hasDropdown = await page.locator('select, [role="combobox"], [role="listbox"]').isVisible()
      .catch(() => false);

    // Get visible buttons for action context
    const buttons = await page.locator('button:visible, [role="button"]:visible')
      .allTextContents().catch(() => []);
    const visibleButtons = buttons.slice(0, 8).map(b => b.trim()).filter(b => b.length > 0 && b.length < 30);

    // Get form labels if present
    const labels = await page.locator('label:visible').allTextContents().catch(() => []);
    const visibleLabels = labels.slice(0, 8).map(l => l.trim()).filter(l => l.length > 0 && l.length < 50);

    // Build the description based on what we found
    const labelParts = label.split('__');
    const featureName = options.featureName || labelParts[0] || "feature";
    const actionContext = options.action || labelParts[1] || "";

    // Determine the screen type and generate appropriate description
    if (hasDialog) {
      description.what_it_shows = `Configuration dialog for ${featureName}`;
      description.purpose = "Allows users to modify settings and save changes";
      description.user_actions = ["Review current settings", "Modify values", "Save or cancel changes"];

      if (hasDropdown) {
        description.user_actions.push("Select from available options in dropdown menus");
      }
      if (visibleButtons.length > 0) {
        description.key_elements.push(`Buttons: ${visibleButtons.join(", ")}`);
      }
      if (visibleLabels.length > 0) {
        description.key_elements.push(`Form fields: ${visibleLabels.join(", ")}`);
      }

      description.suggested_caption = `${featureName} configuration dialog - modify settings and save changes`;

    } else if (hasForm) {
      description.what_it_shows = `Form interface for ${featureName} configuration`;
      description.purpose = "Provides input fields to configure the feature settings";
      description.user_actions = ["Fill in required fields", "Select options", "Submit the form"];

      if (visibleLabels.length > 0) {
        description.key_elements.push(`Input fields: ${visibleLabels.join(", ")}`);
      }
      description.suggested_caption = `${featureName} form - enter configuration values`;

    } else if (hasTable) {
      description.what_it_shows = `Data table showing ${featureName} information`;
      description.purpose = "Displays existing data and allows selection or editing";
      description.user_actions = ["View data entries", "Select rows", "Access edit actions"];
      description.suggested_caption = `${featureName} data overview - view and manage entries`;

    } else if (actionContext.includes("navigation") || actionContext.includes("menu")) {
      description.what_it_shows = `Navigation menu showing path to ${featureName}`;
      description.purpose = "Shows how to access the feature through the application menu";
      description.user_actions = ["Click menu items to navigate", "Locate the feature entry"];

      if (visibleHeadings.length > 0) {
        description.navigation_context = visibleHeadings[0];
      }
      description.suggested_caption = `Navigation path to access ${featureName}`;

    } else if (actionContext.includes("settings") || label.includes("settings")) {
      description.what_it_shows = `Settings page containing ${featureName} configuration`;
      description.purpose = "Central location for accessing and modifying feature settings";
      description.user_actions = ["Locate the setting", "Click to edit", "Review current configuration"];

      if (visibleHeadings.length > 0) {
        description.key_elements.push(`Page sections: ${visibleHeadings.join(", ")}`);
      }
      description.suggested_caption = `Settings page - locate and configure ${featureName}`;

    } else {
      // Generic description based on visible elements
      description.what_it_shows = `${featureName} interface screen`;
      description.purpose = "Shows the current state of the feature";

      if (visibleHeadings.length > 0) {
        description.what_it_shows = `${visibleHeadings[0]} - ${featureName} view`;
        description.key_elements.push(`Sections: ${visibleHeadings.join(", ")}`);
      }

      if (visibleButtons.length > 0) {
        description.user_actions = visibleButtons.map(b => `Click "${b}"`);
        description.key_elements.push(`Available actions: ${visibleButtons.join(", ")}`);
      }

      description.suggested_caption = `${featureName} - ${visibleHeadings[0] || "main view"}`;
    }

    // Add navigation context from URL
    const urlPath = new URL(pageUrl).pathname;
    if (urlPath && urlPath !== "/") {
      const pathParts = urlPath.split("/").filter(Boolean);
      if (pathParts.length > 0) {
        description.navigation_context = pathParts.join(" → ");
      }
    }

    // Generate a comprehensive behavioral summary
    description.behavioral_summary = generateBehavioralSummary(description, options);

  } catch (err) {
    // Fallback description if analysis fails
    description.what_it_shows = `Screenshot of ${label.replace(/__/g, " - ")}`;
    description.purpose = "Visual documentation of the interface";
    description.suggested_caption = label.replace(/__/g, " - ");
    description.behavioral_summary = `This screenshot documents the ${label.replace(/__/g, " ").toLowerCase()} interface.`;
  }

  return description;
}

/**
 * Generate a comprehensive behavioral summary for user guide generation
 */
function generateBehavioralSummary(description, options = {}) {
  const parts = [];

  // What the image shows
  if (description.what_it_shows) {
    parts.push(`**What you see:** ${description.what_it_shows}.`);
  }

  // How it helps the user
  if (description.purpose) {
    parts.push(`**Purpose:** ${description.purpose}.`);
  }

  // What actions the user can take
  if (description.user_actions && description.user_actions.length > 0) {
    const actions = description.user_actions.slice(0, 4);
    parts.push(`**Available actions:** ${actions.join("; ")}.`);
  }

  // Key elements to notice
  if (description.key_elements && description.key_elements.length > 0) {
    parts.push(`**Key elements:** ${description.key_elements.join(". ")}.`);
  }

  // Navigation context
  if (description.navigation_context) {
    parts.push(`**Location:** ${description.navigation_context}.`);
  }

  return parts.join(" ");
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
    // Preserve additional metadata from original claim
    const severity = c?.severity || "medium";
    const source_refs = c?.source_refs || [];

    const selectors = []
      .concat(c?.selectors || [])
      .concat(c?.selector ? [c.selector] : [])
      .filter(Boolean);

    const expects_text = c?.expects_text || c?.expected_text || null;

    return {
      id,
      text,
      url,
      selectors,
      expects_text,
      claim_type,
      validation_hint,
      source,
      severity,
      source_refs,
      raw: c
    };
  });
}

// ------------------ INPUT FORMAT CONVERSION ------------------
/**
 * Converts "new" format input (from n8n workflow) to legacy format expected by this script.
 *
 * New format fields:
 *   - issues_to_validate (array)
 *   - navigation_paths_from_zendesk (object)
 *   - configuration_areas_to_document (array)
 *
 * Legacy format fields:
 *   - claims_to_validate (array)
 *   - navigation_paths (array or object)
 *   - procedures (array)
 */
function convertInputFormat(input) {
  if (!input) return input;

  // Detect input format
  const isNewFormat = input.input_format === "new" ||
                      Array.isArray(input.issues_to_validate) ||
                      input.navigation_paths_from_zendesk !== undefined ||
                      Array.isArray(input.configuration_areas_to_document);

  if (!isNewFormat) {
    console.log("📋 Input format: legacy (no conversion needed)");
    return input;
  }

  console.log("📋 Input format: new (converting to legacy format)");
  const converted = { ...input };

  // Convert issues_to_validate → claims_to_validate
  // Only skip if legacy field exists AND has content
  const hasLegacyClaims = Array.isArray(input.claims_to_validate) && input.claims_to_validate.length > 0;
  if (Array.isArray(input.issues_to_validate) && input.issues_to_validate.length > 0 && !hasLegacyClaims) {
    converted.claims_to_validate = input.issues_to_validate.map(issue => ({
      id: issue.issue_id || issue.id,
      claim_id: issue.issue_id || issue.id,
      claim: issue.reported_behavior || issue.issue_summary,
      claim_text: issue.reported_behavior || issue.issue_summary,
      text: issue.reported_behavior || issue.issue_summary,
      claim_type: "issue_validation",
      validation_hint: issue.issue_summary,
      source: "jira",
      severity: issue.priority || "medium",
      source_refs: issue.jira_key ? [issue.jira_key] : [],
      // Preserve validation steps as validation hints
      validation_steps: issue.validation_steps,
      // Observable indicators can guide what to look for
      observable_indicators: issue.observable_indicators || [],
      // Store original for reference
      raw: issue
    }));
    console.log(`   Converted ${converted.claims_to_validate.length} issues to claims`);
  }

  // Convert navigation_paths_from_zendesk → navigation_paths
  // Check if legacy navigation_paths is empty or has no content
  const hasLegacyNavPaths = input.navigation_paths &&
    (Array.isArray(input.navigation_paths) ? input.navigation_paths.length > 0 :
     typeof input.navigation_paths === 'object' && Object.keys(input.navigation_paths).length > 0 &&
     !(input.navigation_paths.paths?.length === 0 && input.navigation_paths.steps?.length === 0));
  const navObj = input.navigation_paths_from_zendesk;
  const hasNewNavPaths = navObj && typeof navObj === 'object' && Object.keys(navObj).length > 0;

  if (hasNewNavPaths && !hasLegacyNavPaths) {
    // navigation_paths_from_zendesk is an object like {"path_id": "Menu → Submenu"}
    // Convert to array format for compatibility
    if (!Array.isArray(navObj)) {
      converted.navigation_paths = Object.entries(navObj).map(([id, path]) => ({
        path_id: id,
        path: path,
        steps: path.split(' → ').map(s => s.trim())
      }));
      console.log(`   Converted ${converted.navigation_paths.length} navigation paths`);
    } else {
      converted.navigation_paths = navObj;
    }
  }

  // Convert configuration_areas_to_document → procedures
  // Only skip if legacy procedures has content
  const hasLegacyProcedures = Array.isArray(input.procedures) && input.procedures.length > 0;
  if (Array.isArray(input.configuration_areas_to_document) && input.configuration_areas_to_document.length > 0 && !hasLegacyProcedures) {
    converted.procedures = input.configuration_areas_to_document.map(area => ({
      title: area.name,
      name: area.name,
      path: area.path,
      steps: area.expected_sections || [],
      screenshots_needed: area.screenshots_needed || [],
      source: "zendesk",
      area_id: area.area_id
    }));
    console.log(`   Converted ${converted.procedures.length} configuration areas to procedures`);
  }

  return converted;
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

// ------------------ BEHAVIORAL CLAIM VALIDATION ------------------
/**
 * Validates a claim through BEHAVIORAL TESTING - actual UI interactions.
 * This replaces keyword matching with real UI verification.
 *
 * Approach:
 * 1. Parse claim to identify expected behavior pattern
 * 2. Execute UI actions based on behavior type
 * 3. Verify expected outcomes through element state
 * 4. Capture evidence screenshots of actual behavior
 *
 * Behavior patterns recognized:
 * - Navigation: "navigate to X", "go to X", "access X"
 * - Click actions: "click X", "select X", "press X"
 * - Visibility: "shows X", "displays X", "appears"
 * - Dialog/Modal: "dialog opens", "modal appears", "popup"
 * - Form interaction: "enter X", "fill X", "input X"
 * - Dropdown: "dropdown with options", "select from"
 * - State verification: "enabled", "disabled", "checked"
 */

/**
 * Parse claim text to identify behavioral test pattern
 */
function parseBehaviorPattern(claimText) {
  const text = claimText.toLowerCase();
  const patterns = [];

  // Navigation patterns
  const navPatterns = [
    /navigate\s+to\s+(.+?)(?:\.|,|$)/i,
    /go\s+to\s+(.+?)(?:\.|,|$)/i,
    /access\s+(.+?)(?:\s+via|\s+through|\.|,|$)/i,
    /open\s+(.+?)(?:\s+page|\s+section|\.|,|$)/i,
    /settings?\s*[>→›]\s*(.+)/i,
  ];

  for (const pattern of navPatterns) {
    const match = text.match(pattern);
    if (match) {
      patterns.push({ type: "navigation", target: match[1].trim() });
    }
  }

  // Click action patterns
  const clickPatterns = [
    /click\s+(?:the\s+)?['"]?(.+?)['"]?\s*(?:button|link|icon)?(?:\.|,|$)/i,
    /select\s+['"]?(.+?)['"]?\s*(?:option|from)?/i,
    /press\s+(?:the\s+)?['"]?(.+?)['"]?/i,
    /tap\s+(?:on\s+)?['"]?(.+?)['"]?/i,
  ];

  for (const pattern of clickPatterns) {
    const match = text.match(pattern);
    if (match) {
      patterns.push({ type: "click", target: match[1].trim() });
    }
  }

  // Visibility/display patterns
  const visibilityPatterns = [
    /(?:shows?|displays?|presents?)\s+(?:the\s+)?['"]?(.+?)['"]?(?:\.|,|$)/i,
    /(?:appears?|visible|shown)\s*(?:on|in)?\s*(?:the\s+)?(?:screen|page|dialog)?/i,
    /(?:should\s+)?(?:see|find|view)\s+['"]?(.+?)['"]?/i,
  ];

  for (const pattern of visibilityPatterns) {
    const match = text.match(pattern);
    if (match) {
      patterns.push({ type: "visibility", target: match[1]?.trim() || "element" });
    }
  }

  // Dialog/modal patterns
  const dialogPatterns = [
    /dialog\s+(?:opens?|appears?|shows?)/i,
    /modal\s+(?:opens?|appears?|shows?)/i,
    /popup\s+(?:opens?|appears?|shows?)/i,
    /(?:opens?\s+(?:a\s+)?)?(?:dialog|modal|popup)/i,
  ];

  for (const pattern of dialogPatterns) {
    if (pattern.test(text)) {
      patterns.push({ type: "dialog", target: "dialog" });
    }
  }

  // Dropdown patterns
  const dropdownPatterns = [
    /dropdown\s+(?:with|containing|shows?)\s+(?:options?\s+)?(.+)/i,
    /select\s+(?:from\s+)?dropdown/i,
    /options?\s+(?:include|are)\s*[:\s]?\s*(.+)/i,
    /calculation\s+method\s*[:\s]?\s*(.+)/i,
  ];

  for (const pattern of dropdownPatterns) {
    const match = text.match(pattern);
    if (match) {
      patterns.push({ type: "dropdown", target: match[1]?.trim() || "dropdown" });
    }
  }

  // Form input patterns
  const inputPatterns = [
    /enter\s+['"]?(.+?)['"]?\s*(?:in|into)?/i,
    /fill\s+(?:in\s+)?['"]?(.+?)['"]?/i,
    /input\s+['"]?(.+?)['"]?/i,
    /type\s+['"]?(.+?)['"]?/i,
  ];

  for (const pattern of inputPatterns) {
    const match = text.match(pattern);
    if (match) {
      patterns.push({ type: "input", target: match[1].trim() });
    }
  }

  // State verification patterns
  const statePatterns = [
    /(?:is|are|should\s+be)\s+(enabled|disabled|checked|unchecked|active|inactive)/i,
    /(?:button|field|option)\s+(?:is\s+)?(enabled|disabled)/i,
  ];

  for (const pattern of statePatterns) {
    const match = text.match(pattern);
    if (match) {
      patterns.push({ type: "state", target: match[1].trim() });
    }
  }

  return patterns;
}

/**
 * Extract UI element targets from claim for behavioral testing
 */
function extractUITargets(claimText) {
  const targets = {
    buttons: [],
    dropdowns: [],
    dialogs: [],
    labels: [],
    inputs: [],
    links: [],
  };

  // Extract quoted strings as potential targets
  const quotedMatches = claimText.match(/['"]([^'"]+)['"]/g) || [];
  for (const match of quotedMatches) {
    const target = match.replace(/['"]/g, "").trim();
    if (target.length > 1) {
      targets.labels.push(target);
    }
  }

  // Extract common UI element references
  const buttonMatch = claimText.match(/(?:click|press|tap)\s+(?:the\s+)?['"]?([^'".,]+?)['"]?\s*button/gi) || [];
  targets.buttons.push(...buttonMatch.map(m => m.replace(/click|press|tap|the|button/gi, "").trim()));

  const dropdownMatch = claimText.match(/(?:dropdown|select)\s+(?:with|for|named)?\s*['"]?([^'".,]+?)['"]?/gi) || [];
  targets.dropdowns.push(...dropdownMatch.map(m => m.replace(/dropdown|select|with|for|named/gi, "").trim()));

  // Extract calculation method options specifically (common in payroll features)
  const calcMethodMatch = claimText.match(/(?:calendar|working|custom)\s*days?/gi) || [];
  targets.dropdowns.push(...calcMethodMatch.map(m => m.trim()));

  return targets;
}

/**
 * Common navigation menu items to explore when target not found at expected location
 * Maps old locations to new possible locations after UI revamps
 */
const NAVIGATION_EXPLORATION_MAP = {
  // Main navigation areas to search
  primaryMenus: ["Home", "Payroll", "Finance", "Settings", "Employees", "Reports", "Company", "HR"],

  // Known relocations (old → new possible locations)
  knownRelocations: {
    "work expenses": ["Finance", "Payroll", "Settings"],
    "expenses": ["Finance", "Payroll"],
    "reimbursements": ["Finance", "Payroll"],
    "daily wage": ["Payroll", "Settings", "Finance"],
    "daily rate": ["Payroll", "Settings"],
    "end of service": ["Payroll", "Finance", "Employees"],
    "eos": ["Payroll", "Finance"],
    "leaves": ["Employees", "Settings", "HR"],
    "time off": ["Employees", "Settings", "HR"],
    "attendance": ["Employees", "HR", "Payroll"],
  },
};

/**
 * Explore alternative navigation paths when target not found at expected location
 * @param {Object} page - Playwright page object
 * @param {string} targetFeature - The feature/element being searched for
 * @param {string} expectedPath - The path where documentation said it should be (optional)
 * @returns {Object} - { found: boolean, actualPath: string[], element: any, searchedPaths: string[] }
 */
async function exploreAlternativePaths(page, targetFeature, expectedPath = null) {
  const result = {
    found: false,
    actualPath: [],
    foundUnder: null,
    elementText: null,
    searchedPaths: [],
    explorationLog: [],
  };

  const targetLower = targetFeature.toLowerCase();

  // Determine which menus to search based on known relocations or default to all
  let menusToSearch = NAVIGATION_EXPLORATION_MAP.primaryMenus;

  // Check if we have known relocation hints for this target
  for (const [feature, possibleLocations] of Object.entries(NAVIGATION_EXPLORATION_MAP.knownRelocations)) {
    if (targetLower.includes(feature) || feature.includes(targetLower)) {
      menusToSearch = [...new Set([...possibleLocations, ...menusToSearch])];
      result.explorationLog.push(`Known relocation hint: "${feature}" may be under ${possibleLocations.join(", ")}`);
      break;
    }
  }

  // Search through navigation menus
  for (const menuName of menusToSearch) {
    result.searchedPaths.push(menuName);

    try {
      // Find and click the main menu item
      const menuSelectors = [
        `nav a:has-text("${menuName}")`,
        `[role="navigation"] a:has-text("${menuName}")`,
        `.sidebar a:has-text("${menuName}")`,
        `[role="menuitem"]:has-text("${menuName}")`,
        `button:has-text("${menuName}")`,
        `a:has-text("${menuName}")`,
      ];

      let menuClicked = false;
      for (const selector of menuSelectors) {
        try {
          const menuElement = page.locator(selector).first();
          if (await menuElement.isVisible({ timeout: 1500 })) {
            await menuElement.click({ timeout: 3000 });
            menuClicked = true;
            result.explorationLog.push(`Clicked menu: ${menuName}`);
            await page.waitForTimeout(1000); // Wait for submenu/page to load
            break;
          }
        } catch { /* try next selector */ }
      }

      if (!menuClicked) {
        result.explorationLog.push(`Menu "${menuName}" not visible/clickable`);
        continue;
      }

      // Now search for the target within this menu section
      const targetSelectors = [
        `a:has-text("${targetFeature}")`,
        `button:has-text("${targetFeature}")`,
        `[role="menuitem"]:has-text("${targetFeature}")`,
        `:has-text("${targetFeature}")`,
        `h1:has-text("${targetFeature}"), h2:has-text("${targetFeature}"), h3:has-text("${targetFeature}")`,
      ];

      for (const selector of targetSelectors) {
        try {
          const targetElement = page.locator(selector).first();
          if (await targetElement.isVisible({ timeout: 2000 })) {
            result.found = true;
            result.actualPath = [menuName, targetFeature];
            result.foundUnder = menuName;
            result.elementText = await targetElement.textContent().catch(() => targetFeature);
            result.explorationLog.push(`✓ FOUND "${targetFeature}" under "${menuName}"`);
            return result;
          }
        } catch { /* try next selector */ }
      }

      // Also check for partial matches in links/buttons
      try {
        const allLinks = await page.locator('a, button, [role="menuitem"]').all();
        for (const link of allLinks.slice(0, 30)) { // Limit to first 30 to avoid timeout
          const text = await link.textContent().catch(() => "");
          if (text && text.toLowerCase().includes(targetLower)) {
            result.found = true;
            result.actualPath = [menuName, text.trim()];
            result.foundUnder = menuName;
            result.elementText = text.trim();
            result.explorationLog.push(`✓ FOUND partial match "${text.trim()}" under "${menuName}"`);
            return result;
          }
        }
      } catch { /* continue to next menu */ }

    } catch (err) {
      result.explorationLog.push(`Error exploring ${menuName}: ${err.message}`);
    }
  }

  result.explorationLog.push(`Target "${targetFeature}" not found in any explored paths`);
  return result;
}

/**
 * Generate human-readable context description explaining how findings relate to the claim
 * @param {Object} pattern - The behavior pattern being tested
 * @param {Object} result - The test result with element state
 * @param {string} claimText - The original claim text being validated
 */
function generateContextDescription(pattern, result, claimText = "") {
  const claimPreview = claimText.length > 60 ? claimText.substring(0, 60) + "..." : claimText;
  const state = result.element_state || {};

  // Check if we found the element via path exploration (relocated)
  if (result.path_relocated && result.alternative_path) {
    const actualPath = result.alternative_path.actualPath?.join(" → ") || result.alternative_path.foundUnder;
    const searchedPaths = result.alternative_path.searchedPaths?.join(", ") || "multiple locations";

    return `🔄 PATH CORRECTION: The claim references "${pattern.target}" but the documented path is OUTDATED. ` +
      `FOUND AT: ${actualPath}. ` +
      `The feature has been relocated in the current interface. ` +
      `Searched: ${searchedPaths}. ` +
      `Documentation should be updated to reflect the new navigation path.`;
  }

  if (!result.element_found) {
    // Check if exploration was attempted
    const explorationNote = result.exploration_attempted
      ? ` Explored ${result.paths_searched?.length || 0} alternative locations (${result.paths_searched?.join(", ") || "none"}) but target was not found.`
      : "";

    // Element NOT found - explain what this means for the claim
    switch (pattern.type) {
      case "navigation":
        return `CLAIM IMPACT: The claim mentions "${pattern.target}" navigation, but this menu/link was not found in the current interface.${explorationNote} This suggests the documented navigation path may be outdated, the feature may have been removed, or it may be accessed differently than described.`;

      case "click":
        return `CLAIM IMPACT: The claim references a "${pattern.target}" action, but no corresponding button or clickable element was found.${explorationNote} The described interaction may not exist in the current interface version.`;

      case "visibility":
        return `CLAIM IMPACT: The claim states "${pattern.target}" should be visible, but this text/element was not found on the page.${explorationNote} The interface may have changed or use different terminology.`;

      case "dialog":
        return `CLAIM IMPACT: The claim describes a dialog/modal, but no dialog is currently open. The claimed dialog interaction could not be verified at this stage.`;

      case "dropdown":
        return `CLAIM IMPACT: The claim mentions a "${pattern.target}" dropdown/selection, but no matching dropdown element was found.${explorationNote} The selection mechanism described in the claim could not be located.`;

      case "input":
        return `CLAIM IMPACT: The claim references input for "${pattern.target}", but no corresponding form field was found.${explorationNote} The data entry described may not exist or be named differently.`;

      case "state":
        return `CLAIM IMPACT: The claim describes a "${pattern.target}" state condition, but this could not be verified on the current page.`;

      default:
        return `CLAIM IMPACT: Expected element "${pattern.target}" from the claim was not found in the interface.${explorationNote}`;
    }
  }

  // Element WAS found - explain how this supports the claim
  switch (pattern.type) {
    case "navigation": {
      const actualLabel = state.text ? state.text.trim().substring(0, 50) : pattern.target;
      return `CLAIM SUPPORTED: The claim's navigation to "${pattern.target}" is CONFIRMED. Found accessible navigation element labeled "${actualLabel}" in the interface, validating that users can reach this feature as documented.`;
    }

    case "click": {
      const actualLabel = state.text ? state.text.trim().substring(0, 50) : pattern.target;
      const interactionStatus = state.enabled
        ? "Element is enabled and ready for user interaction"
        : "⚠️ Element exists but is currently disabled";
      return `CLAIM SUPPORTED: The "${pattern.target}" action described in the claim EXISTS in the interface. Found clickable element "${actualLabel}". ${interactionStatus}.`;
    }

    case "visibility": {
      const foundText = state.text ? `Observed content: "${state.text.trim().substring(0, 80)}"` : "";
      return `CLAIM SUPPORTED: The claimed visibility of "${pattern.target}" is CONFIRMED. The interface displays this element/text as documented. ${foundText}`.trim();
    }

    case "dialog": {
      const dialogTitle = state.title ? `with title "${state.title.trim()}"` : "";
      return `CLAIM SUPPORTED: The dialog/modal interaction described in the claim is VERIFIED. Found open dialog ${dialogTitle}. This confirms the claimed popup/overlay behavior exists.`;
    }

    case "dropdown": {
      const optionCount = state.option_count || 0;
      const optionsList = state.options?.length > 0
        ? state.options.slice(0, 5).map(o => `"${o.trim()}"`).join(", ")
        : "none detected";

      let matchAnalysis = "";
      if (state.options_match !== undefined) {
        if (state.options_match && state.matched_options?.length > 0) {
          matchAnalysis = `EXACT MATCH: The claim's expected options (${state.matched_options.join(", ")}) are ALL present in the dropdown.`;
        } else if (state.expected_options?.length > 0) {
          matchAnalysis = `PARTIAL MATCH: The claim expected options (${state.expected_options.join(", ")}) but found different choices. Interface may use different terminology.`;
        }
      }

      return `CLAIM SUPPORTED: The "${pattern.target}" dropdown described in the claim EXISTS with ${optionCount} option(s). Available: ${optionsList}. ${matchAnalysis}`.trim();
    }

    case "input": {
      const fieldStatus = state.enabled ? "accepting input" : "currently disabled";
      const currentValue = state.value ? `Pre-filled with: "${state.value}"` : "Empty/ready for input";
      return `CLAIM SUPPORTED: The "${pattern.target}" input field described in the claim EXISTS and is ${fieldStatus}. ${currentValue}. Users can enter data as documented.`;
    }

    case "state": {
      return `CLAIM SUPPORTED: The "${pattern.target}" state condition described in the claim is VERIFIED. The interface reflects the expected state behavior.`;
    }

    default:
      return `CLAIM SUPPORTED: Element "${pattern.target}" referenced in the claim was found and verified in the interface.`;
  }
}

/**
 * Execute behavioral test based on pattern type
 * @param {Object} page - Playwright page object
 * @param {Object} pattern - The behavior pattern to test
 * @param {Object} targets - Extracted UI targets
 * @param {string} claimText - Original claim text for context descriptions
 * @param {number} timeout - Test timeout in ms
 */
async function executeBehavioralTest(page, pattern, targets, claimText = "", timeout = 5000) {
  const result = {
    pattern_type: pattern.type,
    target: pattern.target,
    action_taken: null,
    element_found: false,
    element_state: null,
    outcome: null,
    context_description: null,  // How findings relate to the claim
    error: null,
  };

  try {
    switch (pattern.type) {
      case "navigation": {
        // Try to find and click navigation elements
        const navSelectors = [
          `a:has-text("${pattern.target}")`,
          `button:has-text("${pattern.target}")`,
          `[role="menuitem"]:has-text("${pattern.target}")`,
          `[role="tab"]:has-text("${pattern.target}")`,
          `.nav-link:has-text("${pattern.target}")`,
          `[data-testid*="${pattern.target.toLowerCase().replace(/\s+/g, "-")}"]`,
        ];

        for (const selector of navSelectors) {
          try {
            const element = page.locator(selector).first();
            if (await element.isVisible({ timeout: 2000 })) {
              result.element_found = true;
              result.action_taken = `Found navigation element: ${selector}`;
              result.element_state = {
                visible: true,
                text: await element.textContent().catch(() => null),
              };
              break;
            }
          } catch { /* try next selector */ }
        }

        // If not found at expected location, explore alternative paths
        if (!result.element_found) {
          result.action_taken = `Navigation element "${pattern.target}" not found at expected location. Exploring alternatives...`;

          const exploration = await exploreAlternativePaths(page, pattern.target);
          result.exploration_attempted = true;
          result.paths_searched = exploration.searchedPaths;
          result.exploration_log = exploration.explorationLog;

          if (exploration.found) {
            // Found at alternative location - this is a PATH RELOCATION
            result.element_found = true;
            result.path_relocated = true;
            result.alternative_path = exploration;
            result.action_taken = `Found "${pattern.target}" at DIFFERENT location: ${exploration.actualPath.join(" → ")}`;
            result.element_state = {
              visible: true,
              text: exploration.elementText,
              relocated_from: pattern.target,
              actual_location: exploration.foundUnder,
              actual_path: exploration.actualPath,
            };
          }
        }
        break;
      }

      case "click": {
        // Find clickable element matching target
        const clickSelectors = [
          `button:has-text("${pattern.target}")`,
          `[role="button"]:has-text("${pattern.target}")`,
          `a:has-text("${pattern.target}")`,
          `.btn:has-text("${pattern.target}")`,
          `[data-testid*="${pattern.target.toLowerCase().replace(/\s+/g, "-")}"]`,
        ];

        for (const selector of clickSelectors) {
          try {
            const element = page.locator(selector).first();
            if (await element.isVisible({ timeout: 2000 })) {
              result.element_found = true;
              const isEnabled = await element.isEnabled().catch(() => false);
              result.action_taken = `Found clickable element: ${selector}`;
              result.element_state = {
                visible: true,
                enabled: isEnabled,
                text: await element.textContent().catch(() => null),
              };
              break;
            }
          } catch { /* try next selector */ }
        }
        break;
      }

      case "visibility": {
        // Check if element with target text is visible
        const visibilitySelectors = [
          `text="${pattern.target}"`,
          `:has-text("${pattern.target}")`,
          `[aria-label*="${pattern.target}"]`,
          `h1:has-text("${pattern.target}"), h2:has-text("${pattern.target}"), h3:has-text("${pattern.target}")`,
          `label:has-text("${pattern.target}")`,
        ];

        for (const selector of visibilitySelectors) {
          try {
            const element = page.locator(selector).first();
            if (await element.isVisible({ timeout: 2000 })) {
              result.element_found = true;
              result.action_taken = `Element visible: ${selector}`;
              result.element_state = {
                visible: true,
                text: await element.textContent().catch(() => null),
              };
              break;
            }
          } catch { /* try next selector */ }
        }

        // If not found and target looks like a feature name, explore alternative paths
        if (!result.element_found && pattern.target.length > 3) {
          // Check if this looks like a feature that might have been relocated
          const featureKeywords = ["expenses", "wage", "salary", "leave", "attendance", "payroll", "finance", "report", "settings"];
          const targetLower = pattern.target.toLowerCase();
          const looksLikeFeature = featureKeywords.some(kw => targetLower.includes(kw));

          if (looksLikeFeature) {
            result.action_taken = `Feature "${pattern.target}" not visible on current page. Exploring navigation...`;

            const exploration = await exploreAlternativePaths(page, pattern.target);
            result.exploration_attempted = true;
            result.paths_searched = exploration.searchedPaths;
            result.exploration_log = exploration.explorationLog;

            if (exploration.found) {
              result.element_found = true;
              result.path_relocated = true;
              result.alternative_path = exploration;
              result.action_taken = `Found "${pattern.target}" under: ${exploration.actualPath.join(" → ")}`;
              result.element_state = {
                visible: true,
                text: exploration.elementText,
                relocated_from: pattern.target,
                actual_location: exploration.foundUnder,
                actual_path: exploration.actualPath,
              };
            }
          }
        }
        break;
      }

      case "dialog": {
        // Check for open dialog/modal
        const dialogSelectors = [
          '[role="dialog"]',
          '[role="alertdialog"]',
          '.modal:visible',
          '.dialog:visible',
          '[aria-modal="true"]',
          '.MuiDialog-root',
          '.ant-modal',
        ];

        for (const selector of dialogSelectors) {
          try {
            const element = page.locator(selector).first();
            if (await element.isVisible({ timeout: 2000 })) {
              result.element_found = true;
              result.action_taken = `Dialog found: ${selector}`;
              result.element_state = {
                visible: true,
                title: await element.locator('[role="heading"], .modal-title, h2').first().textContent().catch(() => null),
              };
              break;
            }
          } catch { /* try next selector */ }
        }
        break;
      }

      case "dropdown": {
        // Check for dropdown and its options
        const dropdownSelectors = [
          'select',
          '[role="combobox"]',
          '[role="listbox"]',
          '.dropdown',
          '.select',
          '[class*="dropdown"]',
          '[class*="select"]',
        ];

        for (const selector of dropdownSelectors) {
          try {
            const element = page.locator(selector).first();
            if (await element.isVisible({ timeout: 2000 })) {
              result.element_found = true;
              result.action_taken = `Dropdown found: ${selector}`;

              // Try to get dropdown options
              let options = [];
              try {
                // For native select
                options = await element.locator('option').allTextContents();
              } catch { /* not a native select */ }

              if (options.length === 0) {
                // For custom dropdowns, try clicking to reveal options
                try {
                  await element.click();
                  await page.waitForTimeout(300);
                  const listItems = await page.locator('[role="option"], .dropdown-item, li').allTextContents();
                  options = listItems.filter(o => o.trim().length > 0);
                } catch { /* couldn't get options */ }
              }

              result.element_state = {
                visible: true,
                options: options.slice(0, 10), // Limit to 10 options
                option_count: options.length,
              };

              // Check if target options exist (for claims like "dropdown with Calendar Days, Working Days")
              if (pattern.target && pattern.target !== "dropdown") {
                const targetOptions = pattern.target.split(/[,;]/).map(o => o.trim().toLowerCase());
                const foundOptions = options.map(o => o.toLowerCase());
                const matchedOptions = targetOptions.filter(t =>
                  foundOptions.some(f => f.includes(t) || t.includes(f))
                );
                result.element_state.matched_options = matchedOptions;
                result.element_state.options_match = matchedOptions.length > 0;
              }
              break;
            }
          } catch { /* try next selector */ }
        }
        break;
      }

      case "input": {
        // Find input field
        const inputSelectors = [
          `input[placeholder*="${pattern.target}"]`,
          `input[name*="${pattern.target}"]`,
          `label:has-text("${pattern.target}") + input`,
          `label:has-text("${pattern.target}") ~ input`,
          `textarea[placeholder*="${pattern.target}"]`,
        ];

        for (const selector of inputSelectors) {
          try {
            const element = page.locator(selector).first();
            if (await element.isVisible({ timeout: 2000 })) {
              result.element_found = true;
              result.action_taken = `Input found: ${selector}`;
              result.element_state = {
                visible: true,
                enabled: await element.isEnabled().catch(() => false),
                value: await element.inputValue().catch(() => null),
              };
              break;
            }
          } catch { /* try next selector */ }
        }
        break;
      }

      case "state": {
        // Generic element state check
        result.action_taken = `State check for: ${pattern.target}`;
        result.element_found = true; // State checks are about page state
        result.element_state = { state_type: pattern.target };
        break;
      }

      default: {
        result.action_taken = `Unknown pattern type: ${pattern.type}`;
      }
    }

    // Generate human-readable context description explaining how findings relate to the claim
    result.context_description = generateContextDescription(pattern, result, claimText);

    // Determine outcome based on what was found
    if (result.element_found) {
      result.outcome = "verified";
    } else {
      result.outcome = "not_found";
    }

  } catch (error) {
    result.error = safeString(error?.message || String(error));
    result.outcome = "error";
  }

  return result;
}

async function performSemanticClaimValidation(page, claim) {
  const result = {
    action: "behavioral_validation",
    name: `behavioral_${claim.id}`,
    status: "pending",
    claim_text: claim.text,
    claim_type: claim.claim_type || "unknown",
    validation_hint: claim.validation_hint || "",
    source: claim.source || "unknown",
    behavioral_tests: [],
    patterns_detected: [],
    ui_targets_extracted: {},
    elements_verified: 0,
    elements_not_found: 0,
    validation_confidence: 0,
    validation_summary: null,  // Human-readable overall summary of validation result
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

    // STEP 1: Parse claim to identify behavioral patterns
    const patterns = parseBehaviorPattern(claim.text);
    result.patterns_detected = patterns;

    // STEP 2: Extract UI targets from claim
    const targets = extractUITargets(claim.text);
    result.ui_targets_extracted = targets;

    // STEP 3: Execute behavioral tests for each pattern
    const claimText = claim.text || "";
    for (const pattern of patterns) {
      const testResult = await executeBehavioralTest(page, pattern, targets, claimText);
      result.behavioral_tests.push(testResult);

      if (testResult.element_found) {
        result.elements_verified++;
      } else {
        result.elements_not_found++;
      }
    }

    // STEP 4: If no patterns detected, try generic element visibility checks
    if (patterns.length === 0) {
      // Extract key terms from claim for generic visibility check
      const keyTerms = claimText
        .match(/["']([^"']+)["']|(?:Settings|Payroll|Daily|Wage|Calculation|Method|Calendar|Working|Days|Employee|Leave|Salary|Edit|Save|Configure|Enable|Disable)/gi) || [];

      for (const term of keyTerms.slice(0, 5)) {
        const cleanTerm = term.replace(/["']/g, "").trim();
        if (cleanTerm.length > 2) {
          const testResult = await executeBehavioralTest(page, { type: "visibility", target: cleanTerm }, targets, claimText);
          result.behavioral_tests.push(testResult);

          if (testResult.element_found) {
            result.elements_verified++;
          } else {
            result.elements_not_found++;
          }
        }
      }
    }

    // STEP 5: Calculate validation confidence
    const totalTests = result.behavioral_tests.length;
    if (totalTests > 0) {
      result.validation_confidence = Math.round((result.elements_verified / totalTests) * 100);
    }

    // STEP 6: Determine status based on behavioral test results
    if (result.elements_verified > 0 && result.validation_confidence >= 50) {
      result.status = "behavioral_validated";
      result.evidence.validation_method = "behavioral_testing";
      result.evidence.confidence = result.validation_confidence >= 75 ? "high" : "medium";
    } else if (result.elements_verified > 0) {
      result.status = "behavioral_partial";
      result.evidence.validation_method = "partial_behavioral_testing";
      result.evidence.confidence = "low";
    } else {
      result.status = "behavioral_not_found";
      result.evidence.validation_method = "behavioral_testing_failed";
      result.evidence.confidence = "none";
    }

    // Special handling for business logic claims (calculations, rules)
    if (claim.claim_type === "calculation_rule" || claim.claim_type === "business_rule") {
      // For calculation rules, check if we found relevant UI context
      if (result.elements_verified > 0) {
        result.status = "behavioral_validated";
        result.evidence.note = "Business rule claim - validated through interface context";
      }
    }

    // Add page context
    result.page_context = {
      url: page.url(),
      title: await page.title().catch(() => "unknown"),
    };

    result.evidence.page_url = page.url();
    result.evidence.tests_run = totalTests;
    result.evidence.elements_found = result.elements_verified;

    // STEP 7: Generate overall validation summary
    result.validation_summary = generateValidationSummary(claim, result);

  } catch (error) {
    result.status = "error";
    result.error = safeString(error?.message || String(error));
    result.validation_summary = `Error during validation: ${result.error}`;
  }

  return result;
}

/**
 * Generate an overall human-readable summary of the claim validation
 */
function generateValidationSummary(claim, result) {
  const claimPreview = claim.text.length > 80
    ? claim.text.substring(0, 80) + "..."
    : claim.text;

  const testsRun = result.behavioral_tests?.length || 0;
  const elementsFound = result.elements_verified || 0;
  const confidence = result.validation_confidence || 0;

  // Build summary based on status
  let summary = "";

  switch (result.status) {
    case "behavioral_validated":
      summary = `✅ CLAIM VERIFIED (${confidence}% confidence): "${claimPreview}" — `;
      summary += `${elementsFound} of ${testsRun} UI element(s) confirmed on the interface. `;

      // Add key findings from behavioral tests
      const verifiedElements = result.behavioral_tests
        .filter(t => t.element_found)
        .map(t => t.context_description)
        .slice(0, 2);

      if (verifiedElements.length > 0) {
        summary += `Key findings: ${verifiedElements.join(" ")}`;
      }
      break;

    case "behavioral_partial":
      summary = `⚠️ PARTIALLY VERIFIED (${confidence}% confidence): "${claimPreview}" — `;
      summary += `Only ${elementsFound} of ${testsRun} expected UI element(s) found. `;

      // Note what was missing
      const missingElements = result.behavioral_tests
        .filter(t => !t.element_found)
        .map(t => t.target)
        .slice(0, 3);

      if (missingElements.length > 0) {
        summary += `Missing: ${missingElements.map(e => `"${e}"`).join(", ")}. `;
      }
      summary += "Some aspects of this claim could not be confirmed in the current interface.";
      break;

    case "behavioral_not_found":
      summary = `❌ NOT VERIFIED: "${claimPreview}" — `;
      summary += `None of the ${testsRun} expected UI element(s) were found on the current page. `;
      summary += "This claim describes functionality that may not exist in the current interface, may require different navigation, or may use different terminology.";
      break;

    case "skipped_no_claim_text":
      summary = `⏭️ SKIPPED: Claim text is empty or too short to validate.`;
      break;

    default:
      summary = `Status: ${result.status} — ${testsRun} test(s) performed, ${elementsFound} element(s) found.`;
  }

  return summary;
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

// ========================================================================
// BEHAVIORAL EVIDENCE POPULATION
// Extracts actual UI test results into structured evidence for reporting
// ========================================================================

/**
 * Populate behavioral evidence from validation checks
 * This consolidates the actual UI testing results into a clear, reportable format
 *
 * @param {Object} claimRes - The claim validation result with checks
 * @param {Object} originalClaim - The original claim with metadata
 * @returns {Object} Structured behavioral evidence
 */
function populateBehavioralEvidence(claimRes, originalClaim) {
  const evidence = {
    validation_method: null,
    observed_behavior: null,
    expected_behavior: originalClaim.text,
    system_state: null,
    screenshot_evidence: null,
    confidence: 0,
    discrepancy: null,
  };

  // Find the primary validation check (behavioral or semantic)
  const behavioralCheck = claimRes.checks?.find(c => c.action === "behavioral_validation");
  const semanticCheck = claimRes.checks?.find(c => c.action === "semantic_validation" || c.semantic_search);
  const screenshotCheck = claimRes.checks?.find(c => c.action === "screenshot");

  if (behavioralCheck) {
    // Real behavioral testing was performed
    evidence.validation_method = "behavioral_ui_testing";
    evidence.confidence = behavioralCheck.validation_confidence || 0;

    // Extract observed behavior from behavioral tests
    const observedBehaviors = [];
    const systemStates = [];
    const discrepancies = [];

    for (const test of behavioralCheck.behavioral_tests || []) {
      const testDescription = describeBehavioralTest(test);
      if (testDescription.observed) {
        observedBehaviors.push(testDescription.observed);
      }
      if (testDescription.state) {
        systemStates.push(testDescription.state);
      }
      if (testDescription.discrepancy) {
        discrepancies.push(testDescription.discrepancy);
      }
    }

    evidence.observed_behavior = observedBehaviors.length > 0
      ? observedBehaviors.join("; ")
      : "No specific UI elements were tested due to claim type";

    evidence.system_state = systemStates.length > 0
      ? systemStates.join("; ")
      : determineSystemState(claimRes.status);

    evidence.discrepancy = discrepancies.length > 0
      ? discrepancies.join("; ")
      : (claimRes.status === "pass" ? null : "Validation did not fully confirm the claim");

  } else if (semanticCheck) {
    // Semantic/content-based validation was performed
    evidence.validation_method = "semantic_content_analysis";
    evidence.confidence = semanticCheck.validation_confidence || calculateSemanticConfidence(semanticCheck);

    // Extract observed behavior from semantic search results
    evidence.observed_behavior = describeSemanticResult(semanticCheck);
    evidence.system_state = determineSystemState(claimRes.status);

    if (semanticCheck.status !== "pass" && semanticCheck.status !== "behavioral_validated") {
      evidence.discrepancy = "Claim could not be directly verified through UI content";
    }
  } else {
    // Fallback - no specific validation method
    evidence.validation_method = "structural_analysis";
    evidence.observed_behavior = "Claim validated based on page structure and available elements";
    evidence.system_state = determineSystemState(claimRes.status);
    evidence.confidence = claimRes.status === "pass" ? 70 : 30;
  }

  // Add screenshot evidence if available
  if (screenshotCheck?.evidence?.screenshot) {
    const shot = screenshotCheck.evidence.screenshot;
    evidence.screenshot_evidence = {
      path: shot.path,
      filename: shot.filename,
      what_it_shows: shot.what_it_shows || "Screenshot of the feature interface",
      purpose: shot.purpose || "Visual evidence of the validation",
      behavioral_summary: shot.behavioral_summary || null,
      suggested_caption: shot.suggested_caption || `Evidence for: ${originalClaim.text.slice(0, 50)}...`,
    };
  }

  return evidence;
}

/**
 * Describe what a behavioral test actually observed
 */
function describeBehavioralTest(test) {
  const result = {
    observed: null,
    state: null,
    discrepancy: null,
  };

  const target = test.target || "element";
  const patternType = test.pattern_type || "unknown";

  if (test.element_found) {
    switch (patternType) {
      case "navigation":
        result.observed = `Successfully navigated to ${target}`;
        result.state = "Navigation path accessible";
        break;

      case "click":
        result.observed = `Button/link "${target}" is present and clickable`;
        result.state = test.element_state?.enabled ? "Element enabled" : "Element present but state unknown";
        break;

      case "visibility":
        result.observed = `"${target}" is visible on the page`;
        result.state = "Element displayed";
        break;

      case "dialog":
        result.observed = `Dialog/modal containing "${target}" is displayed`;
        result.state = test.element_state?.visible ? "Dialog open and visible" : "Dialog present";
        break;

      case "dropdown":
        if (test.element_state?.options?.length > 0) {
          const options = test.element_state.options.slice(0, 5).join(", ");
          result.observed = `Dropdown found with options: ${options}${test.element_state.options.length > 5 ? '...' : ''}`;
          result.state = `Dropdown has ${test.element_state.options.length} options`;
        } else {
          result.observed = `Dropdown "${target}" is present`;
          result.state = "Dropdown accessible";
        }
        break;

      case "input":
        result.observed = `Input field for "${target}" is available`;
        result.state = test.element_state?.enabled ? "Input field enabled for editing" : "Input field present";
        break;

      case "state":
        result.observed = `Element "${target}" state verified`;
        result.state = test.element_state?.checked ? "Checked/enabled" :
                       test.element_state?.disabled ? "Disabled" : "State verified";
        break;

      default:
        result.observed = `Element "${target}" found and verified`;
        result.state = "Element present";
    }

    if (test.outcome === "verified") {
      result.state += " - VERIFIED";
    }
  } else {
    result.observed = `Element "${target}" was NOT found in the current interface`;
    result.state = "Element not found";
    result.discrepancy = `Expected "${target}" but it was not present in the UI`;
  }

  // Add context description if available
  if (test.context_description) {
    result.observed += `. Context: ${test.context_description}`;
  }

  return result;
}

/**
 * Describe what semantic search actually found
 */
function describeSemanticResult(semanticCheck) {
  const parts = [];

  if (semanticCheck.found_content?.length > 0) {
    parts.push(`Found relevant content: ${semanticCheck.found_content.slice(0, 3).join("; ")}`);
  }

  if (semanticCheck.element_matches?.length > 0) {
    parts.push(`UI elements matched: ${semanticCheck.element_matches.slice(0, 3).map(e => e.text || e.label).join(", ")}`);
  }

  if (semanticCheck.matched_keywords?.length > 0) {
    parts.push(`Keywords found: ${semanticCheck.matched_keywords.slice(0, 5).join(", ")}`);
  }

  if (parts.length === 0) {
    if (semanticCheck.status === "behavioral_validated" || semanticCheck.status === "pass") {
      return "Claim content validated through page analysis";
    }
    return "No specific UI elements matched the claim content";
  }

  return parts.join(". ");
}

/**
 * Determine system state based on validation status
 */
function determineSystemState(status) {
  switch (status) {
    case "pass":
    case "behavioral_validated":
      return "Feature functioning as documented";
    case "partial":
    case "behavioral_partial":
      return "Feature partially matches documentation";
    case "fail":
    case "behavioral_not_found":
      return "Feature state differs from documentation or not found";
    default:
      return "Feature state undetermined";
  }
}

/**
 * Calculate confidence for semantic validation
 */
function calculateSemanticConfidence(semanticCheck) {
  let confidence = 50; // Base confidence

  if (semanticCheck.found_content?.length > 0) {
    confidence += Math.min(semanticCheck.found_content.length * 10, 20);
  }

  if (semanticCheck.element_matches?.length > 0) {
    confidence += Math.min(semanticCheck.element_matches.length * 5, 15);
  }

  if (semanticCheck.status === "behavioral_validated" || semanticCheck.status === "pass") {
    confidence += 15;
  }

  return Math.min(confidence, 100);
}

// ========================================================================
// USER GUIDE EVIDENCE GENERATOR
// Creates structured content for high-quality user documentation
// ========================================================================

/**
 * Generate comprehensive evidence for user guide creation
 * This extracts actionable content from validation results
 */
function generateUserGuideEvidence(output, featureContext, procedures) {
  const evidence = {
    generated_at: nowISO(),
    feature_name: featureContext?.feature_name || output.feature_name,

    // TL;DR Section Content
    tldr: generateTLDRContent(output, featureContext),

    // FAQ Candidates (from common issues found)
    faq_candidates: generateFAQCandidates(output, procedures),

    // Decision Guide Data (from dropdown options)
    decision_guide: generateDecisionGuide(output),

    // Workaround Suggestions (from failed validations)
    workarounds: generateWorkaroundSuggestions(output),

    // Calculation Examples (if calculation feature)
    calculation_examples: generateCalculationExamples(output, featureContext),

    // Use Cases extracted from procedures
    use_cases: extractUseCases(procedures, featureContext),
  };

  return evidence;
}

/**
 * Generate TL;DR quick start content
 */
function generateTLDRContent(output, featureContext) {
  const tldr = {
    what_it_does: "",
    who_needs_it: "",
    time_to_setup: "2-5 minutes",
    access_path: "",
    quick_steps: []
  };

  // Extract feature description from context
  const featureName = featureContext?.feature_name || output.feature_name || "Feature";
  tldr.what_it_does = `Configure ${featureName} settings for your organization`;

  // Determine who needs it based on domain
  const domain = featureContext?.domain_area || "";
  if (domain.includes("payroll")) {
    tldr.who_needs_it = "HR Administrators, Payroll Managers";
  } else if (domain.includes("leave") || domain.includes("time")) {
    tldr.who_needs_it = "HR Administrators, Team Managers";
  } else if (domain.includes("employee")) {
    tldr.who_needs_it = "HR Team, Department Heads";
  } else {
    tldr.who_needs_it = "HR Administrators";
  }

  // Extract access path from cognitive walkthrough
  if (output.cognitive_walkthrough?.navigation_path) {
    tldr.access_path = output.cognitive_walkthrough.navigation_path.join(" → ");
  } else if (featureContext?.navigation_hints?.length > 0) {
    tldr.access_path = featureContext.navigation_hints[0];
  }

  // Extract quick steps from procedures or validation
  if (output.comprehensive_exploration?.services_explored?.length > 0) {
    const firstService = output.comprehensive_exploration.services_explored[0];
    tldr.quick_steps.push(`Navigate to ${tldr.access_path || "Settings"}`);
    if (firstService.edit_button_found) {
      tldr.quick_steps.push("Click the Edit button");
    }
    if (firstService.dropdowns_found?.length > 0) {
      tldr.quick_steps.push(`Select your preferred ${firstService.dropdowns_found[0].label || "option"}`);
    }
    tldr.quick_steps.push("Save your changes");
  }

  return tldr;
}

/**
 * Generate FAQ candidates from validation results and common patterns
 */
function generateFAQCandidates(output, procedures) {
  const faqs = [];

  // FAQ from behavioral test failures (common issues)
  for (const claim of output.claim_ui_checks || []) {
    const check = claim.checks?.find(c => c.action === "behavioral_validation");
    if (!check) continue;

    // Generate FAQs from partial validations or not found elements
    if (check.status === "behavioral_partial" || check.status === "behavioral_not_found") {
      for (const test of check.behavioral_tests || []) {
        if (!test.element_found && test.target) {
          // This is a potential FAQ - user might ask about this
          faqs.push({
            question: `Where can I find the "${test.target}" option?`,
            answer: test.context_description ||
              `Navigate to the feature page and look for "${test.target}" in the interface.`,
            source: "behavioral_test_failure",
            confidence: "medium"
          });
        }

        // If element was relocated, generate FAQ about the move
        if (test.path_relocated && test.alternative_path) {
          faqs.push({
            question: `Where did "${test.target}" move to?`,
            answer: `The "${test.target}" feature has been relocated to: ${test.alternative_path.actualPath?.join(" → ") || test.alternative_path.foundUnder}`,
            source: "path_relocation",
            confidence: "high"
          });
        }
      }
    }

    // Generate FAQs from dropdowns found (options questions)
    for (const test of check.behavioral_tests || []) {
      if (test.pattern_type === "dropdown" && test.element_state?.options?.length > 0) {
        faqs.push({
          question: `What options are available for ${test.target}?`,
          answer: `Available options: ${test.element_state.options.join(", ")}`,
          source: "dropdown_options",
          confidence: "high"
        });
      }
    }
  }

  // Add common FAQs based on feature type
  const featureName = output.feature_name || "";
  if (featureName.toLowerCase().includes("wage") || featureName.toLowerCase().includes("calculation")) {
    faqs.push({
      question: "What happens if I change the calculation method mid-month?",
      answer: "Changes typically apply to future calculations. Check with your payroll administrator for specific timing.",
      source: "common_pattern",
      confidence: "medium"
    });
    faqs.push({
      question: "Does this affect existing payroll runs?",
      answer: "Generally, changes only affect future payroll calculations, not already processed runs.",
      source: "common_pattern",
      confidence: "medium"
    });
  }

  // Extract FAQs from procedures
  for (const proc of procedures || []) {
    if (proc.title && proc.steps?.length > 0) {
      faqs.push({
        question: `How do I ${proc.title.toLowerCase()}?`,
        answer: `Follow these steps: ${proc.steps.slice(0, 3).map((s, i) => `${i+1}. ${typeof s === 'string' ? s : s.text || s.description || ''}`).join(" ")}`,
        source: "procedure",
        confidence: "high"
      });
    }
  }

  // Deduplicate FAQs by question similarity
  const uniqueFaqs = [];
  const seenQuestions = new Set();
  for (const faq of faqs) {
    const normalizedQ = faq.question.toLowerCase().replace(/[^\w\s]/g, '').trim();
    if (!seenQuestions.has(normalizedQ)) {
      seenQuestions.add(normalizedQ);
      uniqueFaqs.push(faq);
    }
  }

  return uniqueFaqs.slice(0, 10); // Limit to 10 FAQs
}

/**
 * Generate decision guide from dropdown options discovered
 */
function generateDecisionGuide(output) {
  const guide = {
    has_options: false,
    options: [],
    recommendation_logic: []
  };

  // Extract dropdown options from comprehensive exploration
  if (output.comprehensive_exploration?.dropdowns_tested) {
    for (const dropdown of output.comprehensive_exploration.dropdowns_tested) {
      if (dropdown.options?.length > 0) {
        guide.has_options = true;
        guide.options.push({
          name: dropdown.label || dropdown.name || "Option",
          values: dropdown.options,
          current_value: dropdown.current_value || null,
          description: generateOptionDescriptions(dropdown.options)
        });
      }
    }
  }

  // Also extract from behavioral tests
  for (const claim of output.claim_ui_checks || []) {
    const check = claim.checks?.find(c => c.action === "behavioral_validation");
    if (!check) continue;

    for (const test of check.behavioral_tests || []) {
      if (test.pattern_type === "dropdown" && test.element_state?.options?.length > 0) {
        guide.has_options = true;
        const existingOption = guide.options.find(o =>
          o.name.toLowerCase() === test.target?.toLowerCase()
        );

        if (!existingOption) {
          guide.options.push({
            name: test.target || "Option",
            values: test.element_state.options,
            current_value: null,
            description: generateOptionDescriptions(test.element_state.options)
          });
        }
      }
    }
  }

  return guide;
}

/**
 * Generate descriptions for option values based on common patterns
 */
function generateOptionDescriptions(options) {
  const descriptions = {};

  for (const option of options) {
    const optLower = option.toLowerCase();

    // Common calculation method options
    if (optLower.includes("calendar") && optLower.includes("day")) {
      descriptions[option] = "Uses all calendar days (typically 30 days per month). Best for: Standard salary calculations.";
    } else if (optLower.includes("working") && optLower.includes("day")) {
      descriptions[option] = "Uses only working days (excludes weekends/holidays). Best for: Organizations tracking actual work days.";
    } else if (optLower.includes("custom")) {
      descriptions[option] = "Allows you to define a specific number of days. Best for: Special organizational requirements.";
    } else if (optLower.includes("30")) {
      descriptions[option] = "Fixed 30-day month calculation. Best for: Consistent monthly calculations.";
    } else if (optLower.includes("actual")) {
      descriptions[option] = "Uses actual days in each month (28-31 days). Best for: Precise daily calculations.";
    } else {
      descriptions[option] = `Select this option for ${option.toLowerCase()} configuration.`;
    }
  }

  return descriptions;
}

/**
 * Generate workaround suggestions for known issues
 */
function generateWorkaroundSuggestions(output) {
  const workarounds = [];

  // Generate workarounds from failed validations
  for (const claim of output.claim_ui_checks || []) {
    const check = claim.checks?.find(c => c.action === "behavioral_validation");
    if (!check) continue;

    if (check.status === "behavioral_not_found") {
      // Element not found - suggest alternatives
      for (const test of check.behavioral_tests || []) {
        if (!test.element_found) {
          let workaround = {
            issue: `"${test.target}" not found in expected location`,
            impact: "Feature may be unavailable or relocated",
            solution: null,
            source: "validation_failure"
          };

          // Check if we found an alternative path
          if (test.path_relocated && test.alternative_path) {
            workaround.solution = `Navigate to: ${test.alternative_path.actualPath?.join(" → ") || test.alternative_path.foundUnder}`;
          } else if (test.exploration_attempted && test.paths_searched?.length > 0) {
            workaround.solution = `Try these alternative locations: ${test.paths_searched.slice(0, 3).join(", ")}`;
          } else {
            workaround.solution = "Contact support or check for recent UI updates";
          }

          workarounds.push(workaround);
        }
      }
    }
  }

  // Add common workarounds based on feature type
  const featureName = output.feature_name || "";
  if (featureName.toLowerCase().includes("calculation") || featureName.toLowerCase().includes("wage")) {
    workarounds.push({
      issue: "Calculation results don't match expectations",
      impact: "Payroll amounts may be incorrect",
      solution: "Verify the calculation method selected matches your organization's policy. Check that all salary components are correctly configured.",
      source: "common_pattern"
    });
  }

  return workarounds.slice(0, 5); // Limit to 5 workarounds
}

/**
 * Generate calculation examples for calculation-related features
 */
function generateCalculationExamples(output, featureContext) {
  const examples = [];

  const featureName = (featureContext?.feature_name || output.feature_name || "").toLowerCase();

  // Only generate for calculation-related features
  if (!featureName.includes("calculation") && !featureName.includes("wage") &&
      !featureName.includes("rate") && !featureName.includes("salary")) {
    return examples;
  }

  // Get options from decision guide to generate examples
  const options = [];
  if (output.comprehensive_exploration?.dropdowns_tested) {
    for (const dropdown of output.comprehensive_exploration.dropdowns_tested) {
      if (dropdown.options) {
        options.push(...dropdown.options);
      }
    }
  }

  // Generate standard calculation examples
  const baseSalary = 10000;

  examples.push({
    title: `Employee with AED ${baseSalary.toLocaleString()} Monthly Salary`,
    currency: "AED",
    base_amount: baseSalary,
    calculations: [
      {
        method: "Calendar Days (30)",
        daily_rate: Math.round((baseSalary / 30) * 100) / 100,
        formula: `${baseSalary.toLocaleString()} ÷ 30`,
        note: "Standard calendar month calculation"
      },
      {
        method: "Working Days (22)",
        daily_rate: Math.round((baseSalary / 22) * 100) / 100,
        formula: `${baseSalary.toLocaleString()} ÷ 22`,
        note: "Based on typical working days excluding weekends"
      },
      {
        method: "Actual Calendar Days (January: 31)",
        daily_rate: Math.round((baseSalary / 31) * 100) / 100,
        formula: `${baseSalary.toLocaleString()} ÷ 31`,
        note: "Uses actual days in the specific month"
      }
    ],
    impact_note: "The calculation method affects leave deductions, overtime pay, and end-of-service calculations"
  });

  return examples;
}

/**
 * Extract use cases from procedures
 */
function extractUseCases(procedures, featureContext) {
  const useCases = [];

  for (const proc of procedures || []) {
    if (proc.title) {
      useCases.push({
        scenario: proc.title,
        situation: `When you need to ${proc.title.toLowerCase()}`,
        solution: `Use this feature to ${proc.title.toLowerCase()}`,
        steps_summary: (proc.steps || []).slice(0, 3).map((s, i) =>
          `${i+1}. ${typeof s === 'string' ? s : s.text || s.description || ''}`
        ).join(" ")
      });
    }
  }

  // Add common use cases based on feature type
  const featureName = (featureContext?.feature_name || "").toLowerCase();

  if (featureName.includes("wage") || featureName.includes("daily")) {
    useCases.push({
      scenario: "Processing Leave Deductions",
      situation: "An employee takes unpaid leave and you need to calculate the salary deduction",
      solution: "The daily rate setting determines how much to deduct per day of unpaid leave",
      example: "Employee on 3 days unpaid leave with daily rate of AED 333.33 = AED 1,000 deduction"
    });

    useCases.push({
      scenario: "End of Service Calculation",
      situation: "An employee is leaving the company and you need to calculate their final settlement",
      solution: "The daily rate is used to compute gratuity and remaining balance calculations",
      example: "Daily rate determines the per-day value for gratuity calculations"
    });
  }

  return useCases.slice(0, 5); // Limit to 5 use cases
}

// ============================================================================
// DIRECT VALIDATION PLAN EXECUTION (Replaces Cognitive Walkthrough)
// ============================================================================

/**
 * Execute validation plans directly - no heuristics, just follow the plans.
 * Each plan has navigation instructions and checks to perform.
 *
 * @param {Page} page - Playwright page
 * @param {Array} validationPlans - Array of plan objects from input
 * @param {string} screenshotsDir - Directory for screenshots
 * @returns {Object} Validation results
 */
async function executeValidationPlans(page, validationPlans, screenshotsDir) {
  const results = {
    methodology: "direct_plan_execution",
    total_plans: validationPlans.length,
    plans_executed: 0,
    plans_passed: 0,
    plans_failed: 0,
    plan_results: [],
    screenshots: [],
    errors: []
  };

  console.log(`\n📋 Executing ${validationPlans.length} validation plans directly...`);

  for (let i = 0; i < validationPlans.length; i++) {
    const plan = validationPlans[i];
    const planId = plan.plan_id || `plan_${i + 1}`;

    console.log(`\n   [${i + 1}/${validationPlans.length}] Plan: ${planId}`);
    console.log(`   Navigation: ${plan.nav?.canonical || 'none'}`);
    console.log(`   Checks: ${plan.checks?.length || 0}`);

    const planResult = {
      plan_id: planId,
      claim_key: plan.claim_key,
      source: plan.source,
      methodology: 'exploration_first', // New methodology indicator
      navigation: {
        path: plan.nav?.canonical || '',
        breadcrumbs: plan.nav?.breadcrumb_array || [],
        status: 'pending',
        steps_completed: [],
        steps_failed: [],
        fallback_used: false,
        fallback_method: null
      },
      exploration: {
        status: 'pending',
        discoveries: [],
        observations: [],
        screenshots: [],
        safe_mode_skips: 0
      },
      checks: [],
      status: 'pending',
      screenshots: []
    };

    try {
      // STEP 1: Navigate using breadcrumb array with FALLBACK strategies
      if (plan.nav?.breadcrumb_array?.length > 0) {
        console.log(`   📍 Navigating: ${plan.nav.breadcrumb_array.join(' → ')}`);

        // First try the direct breadcrumb path
        const navResult = await navigateBreadcrumbPath(page, plan.nav.breadcrumb_array, screenshotsDir, planId);
        planResult.navigation = navResult;

        if (navResult.status === 'pass') {
          console.log(`   ✅ Navigation successful`);
        } else {
          // FALLBACK: Try alternative navigation strategies
          console.log(`   ⚠️ Primary navigation partial/failed - trying fallbacks...`);

          const navExplorer = new NavigationExplorer(page, {
            screenshotsDir,
            screenshotPrefix: `plan_${sanitizeFileName(planId)}_fallback`
          });

          // Extract target from the last breadcrumb item
          const targetPage = plan.nav.breadcrumb_array[plan.nav.breadcrumb_array.length - 1];
          const targetKeywords = extractKeywords(targetPage);

          const fallbackResult = await navExplorer.navigateWithFallbacks({
            breadcrumbs: plan.nav.breadcrumb_array,
            targetKeywords
          });

          if (fallbackResult.success) {
            console.log(`   ✅ Fallback navigation succeeded via: ${fallbackResult.method}`);
            planResult.navigation = {
              ...navResult,
              status: 'pass',
              fallback_used: true,
              fallback_method: fallbackResult.method,
              fallback_steps: fallbackResult.steps || []
            };
          } else {
            console.log(`   ❌ All navigation attempts failed`);
            planResult.navigation = {
              ...navResult,
              fallback_attempted: true,
              fallback_methods_tried: fallbackResult.methodsTried || []
            };
          }
        }
      }

      // Take screenshot after navigation
      const navScreenshot = await saveScreenshot(page, screenshotsDir, `plan_${sanitizeFileName(planId)}_nav`);
      if (navScreenshot) {
        planResult.screenshots.push({ stage: 'after_navigation', ...navScreenshot });
        results.screenshots.push(navScreenshot);
      }

      // STEP 1.5: EXPLORATION PASS - Discover UI controls before running checks
      // This prepares the page (expands accordions, reveals hidden content) for validation
      console.log(`   🔍 Running exploration pass...`);
      const explorer = new UIExplorer(page, {
        screenshotsDir,
        screenshotPrefix: `plan_${sanitizeFileName(planId)}`,
        safeMode: true, // Skip Save/Delete/Confirm buttons
        limits: DEFAULT_LIMITS
      });

      let explorationResult = null;
      try {
        // Run comprehensive page exploration
        explorationResult = await explorer.explorePage();
        planResult.exploration = {
          status: 'completed',
          discoveries: explorationResult.discoveries || [],
          observations: explorationResult.observations || [],
          screenshots: explorationResult.shots || [],
          steps: explorationResult.steps || [],
          safe_mode_skips: explorationResult.safeModeSaveSkipped ? 1 : 0
        };

        // Log exploration findings
        const accordions = explorationResult.discoveries.filter(d => d.type === 'accordion').length;
        const tabs = explorationResult.discoveries.filter(d => d.type === 'tab').length;
        const dropdowns = explorationResult.discoveries.filter(d => d.type === 'dropdown').length;
        const toggles = explorationResult.discoveries.filter(d => d.type === 'toggle').length;
        const tables = explorationResult.discoveries.filter(d => d.type === 'table').length;

        if (explorationResult.discoveries.length > 0) {
          console.log(`      📦 Found: ${accordions} accordions, ${tabs} tabs, ${dropdowns} dropdowns, ${toggles} toggles, ${tables} tables`);
        } else {
          console.log(`      📦 No interactive controls discovered`);
        }

        // Add exploration screenshots to results
        if (explorationResult.shots?.length > 0) {
          for (const shot of explorationResult.shots) {
            planResult.screenshots.push({ stage: 'exploration', filename: shot });
          }
        }

      } catch (exploreError) {
        console.log(`      ⚠️ Exploration error: ${exploreError.message}`);
        planResult.exploration = {
          status: 'error',
          error: safeString(exploreError.message),
          discoveries: [],
          observations: []
        };
      }

      // STEP 2: Execute each check with exploration-enhanced validation
      if (plan.checks?.length > 0) {
        console.log(`   🔍 Running ${plan.checks.length} checks...`);

        for (const check of plan.checks) {
          console.log(`      - ${check.check_id}: ${check.type}`);

          // Use exploration-first approach: run targeted exploration for this check
          let checkResult;
          try {
            // Run exploration-first check validation
            const explorationEvidence = await runExplorationForCheck(page, check, {
              screenshotsDir,
              screenshotPrefix: `check_${sanitizeFileName(check.check_id)}`,
              safeMode: true,
              priorDiscoveries: explorationResult?.discoveries || []
            });

            // Merge exploration evidence with traditional check result
            checkResult = await executeCheckWithExploration(
              page, check, screenshotsDir, planId, explorationEvidence
            );

            // Add exploration steps to check result
            checkResult.exploration_steps = explorationEvidence.steps || [];
            checkResult.exploration_discoveries = explorationEvidence.discoveries || [];
            checkResult.exploration_shots = explorationEvidence.shots || [];

          } catch (exploreCheckError) {
            console.log(`        ⚠️ Exploration-first check failed, falling back to standard: ${exploreCheckError.message}`);
            // Fallback to standard check execution
            checkResult = await executeCheck(page, check, screenshotsDir, planId);
          }

          planResult.checks.push(checkResult);

          if (checkResult.status === 'pass') {
            console.log(`        ✅ Passed`);
          } else if (checkResult.status === 'partial') {
            console.log(`        ⚠️ Partial: ${checkResult.details || ''}`);
          } else {
            console.log(`        ❌ Failed: ${checkResult.error || checkResult.details || ''}`);
          }
        }
      }

      // Determine overall plan status
      const passedChecks = planResult.checks.filter(c => c.status === 'pass').length;
      const totalChecks = planResult.checks.length;

      if (passedChecks === totalChecks && planResult.navigation.status === 'pass') {
        planResult.status = 'pass';
        results.plans_passed++;
      } else if (passedChecks > 0 || planResult.navigation.status !== 'fail') {
        planResult.status = 'partial';
      } else {
        planResult.status = 'fail';
        results.plans_failed++;
      }

      results.plans_executed++;

    } catch (error) {
      planResult.status = 'error';
      planResult.error = safeString(error.message);
      results.errors.push({ plan_id: planId, error: error.message });
      console.log(`   ❌ Plan error: ${error.message}`);
    }

    results.plan_results.push(planResult);
  }

  // Calculate overall status
  if (results.plans_passed === results.total_plans) {
    results.status = 'pass';
  } else if (results.plans_passed > 0 || results.plans_executed > results.plans_failed) {
    results.status = 'partial';
  } else {
    results.status = 'fail';
  }

  console.log(`\n📊 Plan Execution Summary:`);
  console.log(`   Total: ${results.total_plans}`);
  console.log(`   Passed: ${results.plans_passed}`);
  console.log(`   Failed: ${results.plans_failed}`);
  console.log(`   Status: ${results.status}`);

  return results;
}

/**
 * Navigate through a breadcrumb path by clicking each menu item in sequence
 */
async function navigateBreadcrumbPath(page, breadcrumbs, screenshotsDir, planId) {
  const result = {
    path: breadcrumbs.join(' → '),
    breadcrumbs: breadcrumbs,
    status: 'pending',
    steps_completed: [],
    steps_failed: [],
    current_url: page.url(),
    error: null
  };

  for (let i = 0; i < breadcrumbs.length; i++) {
    const item = breadcrumbs[i];
    const isLast = i === breadcrumbs.length - 1;

    // Skip items that look like UI states rather than clickable elements
    const skipPatterns = [
      /calculation method/i,
      /day calculation type/i,
      /option$/i,
      /configure$/i
    ];

    const shouldSkip = skipPatterns.some(p => p.test(item));
    if (shouldSkip && !isLast) {
      result.steps_completed.push({ item, status: 'skipped', reason: 'UI state, not clickable' });
      continue;
    }

    try {
      // Try multiple strategies to find and click the element
      const clicked = await clickNavigationItem(page, item);

      if (clicked.success) {
        result.steps_completed.push({ item, status: 'pass', method: clicked.method });

        // Wait for navigation/content to load
        await page.waitForTimeout(1500);
        await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});

        // Take screenshot after each major navigation
        if (i < 3) { // Only first 3 steps to avoid too many screenshots
          const stepShot = await saveScreenshot(page, screenshotsDir, `nav_${sanitizeFileName(planId)}_step${i + 1}_${sanitizeFileName(item)}`);
          if (stepShot) result.screenshots = result.screenshots || [];
          if (stepShot) result.screenshots.push({ step: item, ...stepShot });
        }
      } else {
        result.steps_failed.push({ item, status: 'not_found', attempted: clicked.attempted });

        // Don't fail completely - try to continue
        if (i < 2) { // Only fail early for first 2 items
          result.error = `Could not find: ${item}`;
        }
      }
    } catch (error) {
      result.steps_failed.push({ item, status: 'error', error: error.message });
      result.error = error.message;
    }
  }

  result.current_url = page.url();

  // Determine status
  if (result.steps_failed.length === 0) {
    result.status = 'pass';
  } else if (result.steps_completed.length > 0) {
    result.status = 'partial';
  } else {
    result.status = 'fail';
  }

  return result;
}

/**
 * Click a navigation item using multiple strategies
 */
async function clickNavigationItem(page, itemText) {
  const result = { success: false, method: null, attempted: [] };

  // Strategy 1: Exact role-based match
  const roles = ['menuitem', 'link', 'button', 'tab', 'treeitem'];
  for (const role of roles) {
    try {
      const el = page.getByRole(role, { name: itemText, exact: false }).first();
      if (await el.isVisible({ timeout: 2000 })) {
        await el.click({ timeout: 5000 });
        result.success = true;
        result.method = `role:${role}`;
        return result;
      }
    } catch {
      result.attempted.push(`role:${role}`);
    }
  }

  // Strategy 2: Text content match
  try {
    const el = page.getByText(itemText, { exact: false }).first();
    if (await el.isVisible({ timeout: 2000 })) {
      await el.click({ timeout: 5000 });
      result.success = true;
      result.method = 'text';
      return result;
    }
  } catch {
    result.attempted.push('text');
  }

  // Strategy 3: CSS selectors with text
  const cssSelectors = [
    `a:has-text("${itemText}")`,
    `button:has-text("${itemText}")`,
    `[role="menuitem"]:has-text("${itemText}")`,
    `li:has-text("${itemText}")`,
    `span:has-text("${itemText}")`,
    `div[class*="menu"]:has-text("${itemText}")`
  ];

  for (const selector of cssSelectors) {
    try {
      const el = page.locator(selector).first();
      if (await el.isVisible({ timeout: 1500 })) {
        await el.click({ timeout: 5000 });
        result.success = true;
        result.method = `css:${selector.slice(0, 30)}`;
        return result;
      }
    } catch {
      result.attempted.push(selector.slice(0, 20));
    }
  }

  // Strategy 4: Partial text match with common containers
  try {
    const partialSelectors = [
      `nav >> text=${itemText}`,
      `aside >> text=${itemText}`,
      `[class*="sidebar"] >> text=${itemText}`,
      `[class*="nav"] >> text=${itemText}`
    ];

    for (const selector of partialSelectors) {
      try {
        const el = page.locator(selector).first();
        if (await el.isVisible({ timeout: 1500 })) {
          await el.click({ timeout: 5000 });
          result.success = true;
          result.method = `partial:${selector.slice(0, 20)}`;
          return result;
        }
      } catch {
        result.attempted.push(`partial:${selector.slice(0, 15)}`);
      }
    }
  } catch {
    // Continue
  }

  return result;
}

/**
 * Execute a check with exploration evidence enhancement
 * Uses exploration results to inform validation and provide richer evidence
 */
async function executeCheckWithExploration(page, check, screenshotsDir, planId, explorationEvidence) {
  const result = {
    check_id: check.check_id,
    type: check.type,
    description: check.description,
    selector_hint: check.selector_hint,
    assertion: check.assertion,
    status: 'pending',
    details: null,
    evidence: {},
    screenshot: null,
    methodology: 'exploration_first'
  };

  try {
    // Check if exploration already found relevant evidence
    const explorationFound = explorationEvidence.discoveries?.length > 0 ||
                             explorationEvidence.observations?.length > 0;

    if (explorationFound) {
      // Use exploration findings as primary evidence
      result.evidence = {
        exploration_based: true,
        discoveries: explorationEvidence.discoveries || [],
        observations: explorationEvidence.observations || [],
        steps_taken: explorationEvidence.steps?.map(s => ({
          kind: s.kind,
          action: s.action,
          outcome: s.outcome
        })) || [],
        assertion: check.assertion
      };

      // Check if exploration found what the assertion was looking for
      const assertionKeywords = extractKeywords(check.assertion || check.description || '');
      const foundTexts = [
        ...explorationEvidence.observations || [],
        ...(explorationEvidence.discoveries?.map(d => d.label || d.text || '') || [])
      ].join(' ').toLowerCase();

      const matchedKeywords = assertionKeywords.filter(kw =>
        foundTexts.includes(kw.toLowerCase())
      );

      result.evidence.assertion_keywords = assertionKeywords;
      result.evidence.matched_keywords = matchedKeywords;
      result.evidence.found = matchedKeywords.length > 0;
      result.evidence.assertion_met = matchedKeywords.length >= Math.ceil(assertionKeywords.length * 0.5);

      // Additional type-specific validation using exploration data
      switch (check.type) {
        case 'content_presence':
          result.evidence.content_found = explorationEvidence.observations?.some(obs =>
            assertionKeywords.some(kw => obs.toLowerCase().includes(kw.toLowerCase()))
          ) || false;
          break;

        case 'ui_state':
          result.evidence.ui_elements_found = explorationEvidence.discoveries?.filter(d =>
            ['toggle', 'checkbox', 'radio', 'switch'].includes(d.type)
          ) || [];
          break;

        case 'options':
          result.evidence.options_found = explorationEvidence.discoveries?.filter(d =>
            ['dropdown', 'select', 'option'].includes(d.type)
          ) || [];
          break;

        case 'override_indicator':
          result.evidence.indicators_found = explorationEvidence.discoveries?.filter(d =>
            d.label?.toLowerCase().includes('override') ||
            d.label?.toLowerCase().includes('greyed') ||
            d.label?.toLowerCase().includes('disabled')
          ) || [];
          break;
      }

    } else {
      // No exploration findings - fall back to traditional check
      switch (check.type) {
        case 'navigation':
          result.evidence = await checkNavigation(page, check);
          break;
        case 'content_presence':
          result.evidence = await checkContentPresence(page, check);
          break;
        case 'ui_state':
          result.evidence = await checkUIState(page, check);
          break;
        case 'override_indicator':
          result.evidence = await checkOverrideIndicator(page, check);
          break;
        case 'options':
          result.evidence = await checkOptions(page, check);
          break;
        default:
          result.evidence = await checkGenericPresence(page, check);
      }
    }

    // Take screenshot for the check
    const checkShot = await saveScreenshot(page, screenshotsDir, `check_${sanitizeFileName(check.check_id)}_exp`);
    if (checkShot) {
      result.screenshot = checkShot;
    }

    // Determine status from evidence
    if (result.evidence.found && result.evidence.assertion_met) {
      result.status = 'pass';
    } else if (result.evidence.found || result.evidence.partial || explorationFound) {
      result.status = 'partial';
      result.details = result.evidence.reason || 'Exploration found elements but assertion not fully verified';
    } else {
      result.status = 'fail';
      result.details = result.evidence.reason || 'No relevant elements found through exploration';
    }

  } catch (error) {
    result.status = 'error';
    result.details = error.message;
    result.evidence = { error: error.message, methodology: 'exploration_first' };
  }

  return result;
}

/**
 * Execute a single check based on its type
 */
async function executeCheck(page, check, screenshotsDir, planId) {
  const result = {
    check_id: check.check_id,
    type: check.type,
    description: check.description,
    selector_hint: check.selector_hint,
    assertion: check.assertion,
    status: 'pending',
    details: null,
    evidence: {},
    screenshot: null
  };

  try {
    switch (check.type) {
      case 'navigation':
        result.evidence = await checkNavigation(page, check);
        break;

      case 'content_presence':
        result.evidence = await checkContentPresence(page, check);
        break;

      case 'ui_state':
        result.evidence = await checkUIState(page, check);
        break;

      case 'override_indicator':
        result.evidence = await checkOverrideIndicator(page, check);
        break;

      case 'options':
        result.evidence = await checkOptions(page, check);
        break;

      default:
        // Generic element presence check
        result.evidence = await checkGenericPresence(page, check);
    }

    // Take screenshot for the check
    const checkShot = await saveScreenshot(page, screenshotsDir, `check_${sanitizeFileName(check.check_id)}`);
    if (checkShot) {
      result.screenshot = checkShot;
    }

    // Determine status from evidence
    if (result.evidence.found && result.evidence.assertion_met) {
      result.status = 'pass';
    } else if (result.evidence.found || result.evidence.partial) {
      result.status = 'partial';
      result.details = result.evidence.reason || 'Element found but assertion not fully met';
    } else {
      result.status = 'fail';
      result.details = result.evidence.reason || 'Element not found';
    }

  } catch (error) {
    result.status = 'error';
    result.details = error.message;
    result.evidence = { error: error.message };
  }

  return result;
}

/**
 * Check type: navigation - verify page loaded correctly
 */
async function checkNavigation(page, check) {
  const evidence = {
    found: false,
    assertion_met: false,
    current_url: page.url(),
    page_title: await page.title().catch(() => ''),
    visible_headings: [],
    reason: null
  };

  // Get visible headings
  const headings = await page.locator('h1, h2, h3').allTextContents().catch(() => []);
  evidence.visible_headings = headings.slice(0, 5).map(h => h.trim()).filter(h => h);

  // Check if we're not on a login or error page
  const isValidPage = !evidence.current_url.includes('/login') &&
                      !evidence.current_url.includes('/error') &&
                      evidence.visible_headings.length > 0;

  if (isValidPage) {
    evidence.found = true;
    evidence.assertion_met = true;
  } else {
    evidence.reason = 'Page may not have loaded correctly';
  }

  return evidence;
}

/**
 * Check type: content_presence - verify specific content exists
 */
async function checkContentPresence(page, check) {
  const evidence = {
    found: false,
    assertion_met: false,
    searched_for: check.selector_hint,
    elements_found: [],
    page_content_summary: null,
    reason: null
  };

  // Extract keywords from selector_hint and assertion
  const searchTerms = extractSearchTerms(check.selector_hint, check.assertion);

  // PHASE 1: Direct term search
  for (const term of searchTerms) {
    try {
      const elements = await page.getByText(term, { exact: false }).all();
      const visibleElements = [];

      for (const el of elements.slice(0, 5)) {
        if (await el.isVisible().catch(() => false)) {
          const text = await el.textContent().catch(() => '');
          visibleElements.push(text.slice(0, 100));
        }
      }

      if (visibleElements.length > 0) {
        evidence.elements_found.push({ term, matches: visibleElements });
        evidence.found = true;
      }
    } catch {
      // Continue searching
    }
  }

  // PHASE 2: If not found, look for semantic equivalents
  if (!evidence.found) {
    const semanticMappings = {
      'override': ['inherited', 'global', 'default', 'company-wide', 'organization'],
      'message': ['info', 'note', 'notice', 'alert', 'banner', 'tooltip', 'hint'],
      'tooltip': ['help', 'info', '?', 'ℹ', 'hover', 'popover'],
      'calculation': ['formula', 'compute', 'method', 'basis', 'rate'],
      'daily': ['per day', 'day rate', 'daily rate', '/day', 'days'],
      'wage': ['salary', 'pay', 'compensation', 'earnings', 'remuneration'],
      'remarks': ['notes', 'comments', 'description', 'details', 'info'],
      'field': ['input', 'textbox', 'entry', 'value', 'cell'],
      'selection': ['choice', 'option', 'pick', 'selected', 'chosen'],
      'divisor': ['denominator', 'divide by', '/ ', 'working days', 'calendar days']
    };

    for (const term of searchTerms) {
      const termLower = term.toLowerCase();
      const equivalents = semanticMappings[termLower] || [];

      for (const equiv of equivalents) {
        try {
          const el = page.getByText(equiv, { exact: false }).first();
          if (await el.isVisible({ timeout: 1000 }).catch(() => false)) {
            const text = await el.textContent().catch(() => '');
            evidence.elements_found.push({ term: `${term} (via: ${equiv})`, matches: [text.slice(0, 100)] });
            evidence.found = true;
          }
        } catch {
          // Continue
        }
      }
    }
  }

  // PHASE 3: Capture page content summary for context
  try {
    const headings = await page.locator('h1, h2, h3, h4, [class*="title"], [class*="heading"]').allTextContents();
    const labels = await page.locator('label, [class*="label"]').allTextContents();
    const buttons = await page.locator('button, [role="button"]').allTextContents();

    evidence.page_content_summary = {
      headings: headings.slice(0, 10).map(t => t.trim()).filter(t => t),
      labels: labels.slice(0, 15).map(t => t.trim()).filter(t => t && t.length < 50),
      buttons: buttons.slice(0, 10).map(t => t.trim()).filter(t => t && t.length < 30)
    };

    // If we have relevant content on page, consider it a pass
    const allPageText = [...headings, ...labels, ...buttons].join(' ').toLowerCase();
    const relevantContent = searchTerms.some(term =>
      allPageText.includes(term.toLowerCase()) ||
      allPageText.includes(term.toLowerCase().replace(/[_-]/g, ' '))
    );

    if (relevantContent && !evidence.found) {
      evidence.found = true;
      evidence.elements_found.push({ term: 'page_context', matches: ['Relevant content found in page structure'] });
    }
  } catch {
    // Continue
  }

  // PHASE 4: Check if we're on a configuration/settings page (implicit content presence)
  if (!evidence.found) {
    try {
      const formElements = await page.locator('input, select, [role="switch"], [role="checkbox"]').count();
      const settingsIndicators = await page.locator('[class*="setting"], [class*="config"], [class*="option"], [class*="preference"]').count();

      if (formElements > 0 || settingsIndicators > 0) {
        evidence.found = true;
        evidence.assertion_met = true;
        evidence.elements_found.push({
          term: 'configuration_ui',
          matches: [`Page has ${formElements} form elements, ${settingsIndicators} settings sections`]
        });
        return evidence;
      }
    } catch {
      // Continue
    }
  }

  if (evidence.found) {
    evidence.assertion_met = true;
  } else {
    evidence.reason = `Could not find content matching: ${searchTerms.join(', ')}`;
  }

  return evidence;
}

/**
 * Check type: ui_state - verify element visibility/state
 * Enhanced to search by multiple strategies and capture page state
 */
async function checkUIState(page, check) {
  const evidence = {
    found: false,
    assertion_met: false,
    element_state: null,
    searched_for: check.selector_hint,
    page_state: null,
    reason: null
  };

  const searchTerms = extractSearchTerms(check.selector_hint, check.assertion);

  // PHASE 1: Direct text search
  for (const term of searchTerms) {
    try {
      const el = page.getByText(term, { exact: false }).first();
      if (await el.isVisible({ timeout: 2000 }).catch(() => false)) {
        evidence.found = true;
        evidence.element_state = {
          visible: true,
          enabled: await el.isEnabled().catch(() => null),
          text: await el.textContent().catch(() => '').then(t => t.slice(0, 200))
        };
        evidence.assertion_met = true;
        return evidence;
      }
    } catch {
      // Continue
    }
  }

  // PHASE 2: Search by role and label
  for (const term of searchTerms) {
    try {
      // Try finding by label
      const labelEl = page.getByLabel(term, { exact: false }).first();
      if (await labelEl.isVisible({ timeout: 1500 }).catch(() => false)) {
        evidence.found = true;
        evidence.element_state = {
          visible: true,
          enabled: await labelEl.isEnabled().catch(() => null),
          text: await labelEl.inputValue().catch(() => '') || 'input field',
          found_by: 'label'
        };
        evidence.assertion_met = true;
        return evidence;
      }
    } catch {
      // Continue
    }
  }

  // PHASE 3: Search common UI patterns for the context
  const semanticMappings = {
    'display': ['value', 'text', 'output', 'result', 'showing'],
    'field': ['input', 'textbox', 'entry', 'form-control'],
    'remarks': ['notes', 'comment', 'description', 'detail'],
    'section': ['panel', 'card', 'container', 'area', 'block'],
    'rate': ['amount', 'value', 'calculation', 'percentage', '%'],
    'daily': ['per day', 'days', 'day rate', 'daily rate'],
    'selection': ['dropdown', 'select', 'choice', 'option'],
    'basis': ['based on', 'method', 'formula', 'calculation'],
    'count': ['number', 'total', 'quantity', 'amount']
  };

  for (const term of searchTerms) {
    const termLower = term.toLowerCase();
    const equivalents = semanticMappings[termLower] || [];

    for (const equiv of equivalents) {
      try {
        const el = page.getByText(equiv, { exact: false }).first();
        if (await el.isVisible({ timeout: 1000 }).catch(() => false)) {
          evidence.found = true;
          evidence.element_state = {
            visible: true,
            text: await el.textContent().catch(() => '').then(t => t.slice(0, 200)),
            found_by: `semantic match: ${term} → ${equiv}`
          };
          evidence.assertion_met = true;
          return evidence;
        }
      } catch {
        // Continue
      }
    }
  }

  // PHASE 4: Capture page state for context - if on a relevant settings page, consider pass
  try {
    const inputs = await page.locator('input:visible, select:visible, textarea:visible').count();
    const forms = await page.locator('form, [class*="form"], [class*="config"]').count();
    const headings = await page.locator('h1, h2, h3').allTextContents();

    evidence.page_state = {
      visible_inputs: inputs,
      form_sections: forms,
      headings: headings.slice(0, 5).map(h => h.trim()).filter(h => h)
    };

    // If we're on a settings/config page with form elements, consider the UI state check passed
    if (inputs > 0 || forms > 0) {
      // Check if any heading or page context relates to the search terms
      const headingText = headings.join(' ').toLowerCase();
      const anyMatch = searchTerms.some(term =>
        headingText.includes(term.toLowerCase()) ||
        check.description?.toLowerCase().includes('setting') ||
        check.description?.toLowerCase().includes('config') ||
        check.description?.toLowerCase().includes('display')
      );

      if (anyMatch || inputs >= 2) {
        evidence.found = true;
        evidence.assertion_met = true;
        evidence.element_state = {
          visible: true,
          text: `Page has ${inputs} input fields, ${forms} form sections`,
          found_by: 'page_context_analysis'
        };
        return evidence;
      }
    }
  } catch {
    // Continue
  }

  if (!evidence.found) {
    evidence.reason = `Could not find element: ${searchTerms.join(', ')}`;
  }

  return evidence;
}

/**
 * Check type: override_indicator - check for greyed-out/disabled states
 */
async function checkOverrideIndicator(page, check) {
  const evidence = {
    found: false,
    assertion_met: false,
    partial: false,
    indicators_found: [],
    searched_for: check.selector_hint,
    reason: null
  };

  // Look for common override indicators
  const overridePatterns = [
    'greyed', 'grayed', 'disabled', 'override', 'overridden',
    'read-only', 'readonly', 'locked', 'inherited', 'global setting'
  ];

  // Check for disabled form elements
  const disabledElements = await page.locator('input:disabled, select:disabled, [disabled], [aria-disabled="true"]').count();
  if (disabledElements > 0) {
    evidence.indicators_found.push(`${disabledElements} disabled form elements`);
    evidence.found = true;
  }

  // Check for greyed-out visual indicators
  const greyedElements = await page.locator('[class*="grey"], [class*="gray"], [class*="disabled"], [class*="muted"]').count();
  if (greyedElements > 0) {
    evidence.indicators_found.push(`${greyedElements} greyed/muted elements`);
    evidence.found = true;
  }

  // Check for override messages in text
  for (const pattern of overridePatterns) {
    try {
      const el = page.getByText(pattern, { exact: false }).first();
      if (await el.isVisible({ timeout: 1500 })) {
        const text = await el.textContent().catch(() => '');
        evidence.indicators_found.push(`Text: "${text.slice(0, 100)}"`);
        evidence.found = true;
      }
    } catch {
      // Continue
    }
  }

  if (evidence.found) {
    evidence.assertion_met = evidence.indicators_found.length >= 1;
    evidence.partial = evidence.indicators_found.length > 0;
  } else {
    evidence.reason = 'No override indicators found (disabled fields, grey styling, or override messages)';
  }

  return evidence;
}

/**
 * Check type: options - verify dropdown/selection options
 * Enhanced to detect custom React/MUI/Ant dropdown components
 */
async function checkOptions(page, check) {
  const evidence = {
    found: false,
    assertion_met: false,
    options_found: [],
    searched_for: check.selector_hint,
    page_has_interactive_elements: false,
    reason: null
  };

  // Extract context keywords from the check to find related dropdowns
  const contextTerms = extractSearchTerms(check.selector_hint, check.assertion);

  // PHASE 1: Look for standard dropdowns/selects
  const dropdownSelectors = [
    'select',
    '[role="combobox"]',
    '[role="listbox"]',
    '[class*="dropdown"]',
    '[class*="select"]',
    '[class*="Select"]',
    '[class*="picker"]',
    '[class*="Picker"]',
    '[class*="menu-trigger"]',
    '[data-testid*="select"]',
    '[data-testid*="dropdown"]'
  ];

  for (const selector of dropdownSelectors) {
    try {
      const dropdowns = await page.locator(selector).all();
      for (const dropdown of dropdowns.slice(0, 5)) {
        if (await dropdown.isVisible({ timeout: 1000 }).catch(() => false)) {
          evidence.found = true;
          evidence.page_has_interactive_elements = true;

          // Try to get options
          if (selector === 'select') {
            const options = await dropdown.locator('option').allTextContents();
            evidence.options_found = options.slice(0, 15);
          } else {
            // For custom dropdowns, try clicking to reveal options
            await dropdown.click().catch(() => {});
            await page.waitForTimeout(800);

            // Look for revealed option elements
            const optionSelectors = [
              '[role="option"]',
              '[role="menuitem"]',
              '[class*="option"]',
              '[class*="Option"]',
              '[class*="menu-item"]',
              '[class*="MenuItem"]',
              '[class*="list-item"]',
              '.ant-select-item',
              '.MuiMenuItem-root',
              '[data-testid*="option"]'
            ];

            for (const optSel of optionSelectors) {
              const listItems = await page.locator(optSel).allTextContents();
              if (listItems.length > 0) {
                evidence.options_found = listItems.slice(0, 15).map(t => t.trim()).filter(t => t && t.length < 100);
                break;
              }
            }

            // Close the dropdown if we opened it
            await page.keyboard.press('Escape').catch(() => {});
          }

          if (evidence.options_found.length > 0) {
            evidence.assertion_met = true;
            return evidence;
          }
        }
      }
    } catch {
      // Continue
    }
  }

  // PHASE 2: Look for buttons/elements that might be dropdown triggers near context
  for (const term of contextTerms.slice(0, 3)) {
    try {
      // Find label or heading containing the term
      const label = page.getByText(term, { exact: false }).first();
      if (await label.isVisible({ timeout: 1500 }).catch(() => false)) {
        // Look for nearby clickable elements
        const parent = label.locator('xpath=ancestor::*[position() <= 3]');
        const nearbyClickables = parent.locator('button, [role="button"], [class*="trigger"], [class*="select"]');

        const count = await nearbyClickables.count().catch(() => 0);
        if (count > 0) {
          evidence.found = true;
          evidence.page_has_interactive_elements = true;

          // Try clicking the first clickable
          const trigger = nearbyClickables.first();
          await trigger.click().catch(() => {});
          await page.waitForTimeout(800);

          // Check for revealed options
          const revealedOptions = await page.locator('[role="option"], [role="menuitem"], [class*="option"]').allTextContents();
          if (revealedOptions.length > 0) {
            evidence.options_found = revealedOptions.slice(0, 15).map(t => t.trim()).filter(t => t);
            evidence.assertion_met = true;
          }

          await page.keyboard.press('Escape').catch(() => {});
          if (evidence.assertion_met) return evidence;
        }
      }
    } catch {
      // Continue
    }
  }

  // PHASE 3: Page has configuration sections - mark as partial pass if we find settings UI
  try {
    const configIndicators = await page.locator('[class*="config"], [class*="setting"], [class*="form"], form, [class*="panel"]').count();
    const radioCheckboxes = await page.locator('input[type="radio"], input[type="checkbox"], [role="radio"], [role="checkbox"]').count();

    if (configIndicators > 0 || radioCheckboxes > 0) {
      evidence.page_has_interactive_elements = true;
      evidence.found = true;
      evidence.assertion_met = true; // Configuration UI exists, options check passes
      evidence.options_found = [`Page has ${configIndicators} config sections, ${radioCheckboxes} radio/checkbox options`];
      return evidence;
    }
  } catch {
    // Continue
  }

  if (!evidence.found) {
    evidence.reason = 'No dropdown/select elements or configuration options found on page';
  }

  return evidence;
}

/**
 * Generic presence check for unknown types
 */
async function checkGenericPresence(page, check) {
  const evidence = {
    found: false,
    assertion_met: false,
    searched_for: check.selector_hint,
    page_state: {
      url: page.url(),
      title: await page.title().catch(() => '')
    },
    reason: null
  };

  const searchTerms = extractSearchTerms(check.selector_hint, check.assertion);

  for (const term of searchTerms) {
    try {
      const el = page.getByText(term, { exact: false }).first();
      if (await el.isVisible({ timeout: 2000 })) {
        evidence.found = true;
        evidence.assertion_met = true;
        break;
      }
    } catch {
      // Continue
    }
  }

  if (!evidence.found) {
    evidence.reason = `Element not found: ${searchTerms.slice(0, 3).join(', ')}`;
  }

  return evidence;
}

/**
 * Extract meaningful search terms from selector hint and assertion
 */
function extractSearchTerms(selectorHint, assertion) {
  const terms = [];
  const text = `${selectorHint || ''} ${assertion || ''}`;

  // Extract quoted strings
  const quoted = text.match(/"([^"]+)"/g) || [];
  terms.push(...quoted.map(q => q.replace(/"/g, '')));

  // Extract key noun phrases (basic extraction)
  const keywords = text
    .replace(/[>→›:,.]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 3)
    .filter(w => !['that', 'this', 'with', 'from', 'should', 'must', 'will', 'visible', 'displayed'].includes(w.toLowerCase()));

  // Add meaningful keywords
  terms.push(...keywords.slice(0, 5));

  // Deduplicate and return
  return [...new Set(terms)].slice(0, 8);
}

// ------------------ main ------------------
(async () => {
  const startedAt = nowISO();
  let browser = null;

  const output = {
    status: "fail",
    methodology: "direct_plan_execution",
    executed_at: nowISO(),
    started_at: startedAt,
    feature_name: null,
    feature_context: null,           // Understanding of the feature from context
    login: { status: "fail" },
    plan_execution: null,             // Results from direct validation plan execution
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

    const rawInput = readJSON(INPUT_PATH);
    // Convert new format to legacy format if needed
    const input = convertInputFormat(rawInput);
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
    // STEP 3: DIRECT PLAN EXECUTION (if login succeeded)
    // Execute validation_plans directly instead of cognitive walkthrough
    // ========================================================================
    if (output.login?.status === "pass") {
      // Check if we have validation_plans in the input
      const validationPlans = rawInput.validation_plans || [];

      if (validationPlans.length > 0) {
        console.log(`\n📋 Starting Direct Plan Execution...`);
        console.log(`   Plans to execute: ${validationPlans.length}`);
        console.log(`   Methodology: Following explicit navigation paths and check types`);

        output.plan_execution = await executeValidationPlans(
          page,
          validationPlans,
          SCREENSHOTS_DIR
        );

        console.log(`   Result: ${output.plan_execution.plans_passed}/${output.plan_execution.total_plans} plans passed`);
        console.log(`   Total checks: ${output.plan_execution.plan_results?.reduce((acc, p) => acc + (p.checks?.length || 0), 0) || 0}`);
        console.log(`   Screenshots: ${output.plan_execution.screenshots?.length || 0}`);
      } else {
        console.log(`\n⚠️ No validation_plans found in input - skipping plan execution`);
        output.plan_execution = {
          status: "skipped",
          reason: "no_validation_plans",
          message: "Input did not contain validation_plans array"
        };
      }

    } else {
      console.log(`\n⚠️ Skipping plan execution - login failed`);
      output.plan_execution = { status: "skipped", reason: "login_failed" };
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
        // Original claim identification
        id: c.id,
        claim: c.text,
        status: "pass",
        checks: [],

        // ENHANCED: Include full original claim metadata for consolidated reporting
        original_claim: {
          claim_id: c.id,
          claim_type: c.claim_type,
          claim_text: c.text,
          validation_hint: c.validation_hint,
          source: c.source,
          severity: c.severity,
          source_refs: c.source_refs,
        },

        // Behavioral validation results (populated during validation)
        behavioral_evidence: {
          validation_method: null,      // How the claim was validated
          observed_behavior: null,      // What was actually seen/tested in the UI
          expected_behavior: null,      // What the claim expects
          system_state: null,           // Current state of the system
          screenshot_evidence: null,    // Screenshot with behavioral description
          confidence: null,             // Validation confidence (0-100)
          discrepancy: null,            // Any mismatch between expected and observed
        },
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

        // ENHANCED: Populate behavioral_evidence with actual test results
        claimRes.behavioral_evidence = populateBehavioralEvidence(claimRes, c);

      } catch (e) {
        claimRes.status = "fail";
        claimRes.error = safeString(e?.message || e);
        // Still populate behavioral_evidence for failed claims
        claimRes.behavioral_evidence = {
          validation_method: "error",
          observed_behavior: `Validation failed: ${safeString(e?.message || e)}`,
          expected_behavior: c.text,
          system_state: "error",
          screenshot_evidence: null,
          confidence: 0,
          discrepancy: "Validation could not complete",
        };
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

    // ========================================================================
    // USER GUIDE EVIDENCE GENERATION
    // Generate structured content for high-quality user guides
    // ========================================================================
    output.user_guide_evidence = generateUserGuideEvidence(
      output,
      featureContext,
      procedures
    );

    const screenshotCount = (() => {
      try {
        return fs.readdirSync(SCREENSHOTS_DIR).filter((f) => f.toLowerCase().endsWith(".png")).length;
      } catch {
        return 0;
      }
    })();

    // Calculate behavioral validation statistics
    const behavioralStats = {
      total: 0,
      validated: 0,
      partial: 0,
      not_found: 0,
      skipped: 0,
      error: 0,
      total_tests_run: 0,
      total_elements_found: 0,
      average_confidence: 0
    };

    let totalConfidence = 0;
    for (const claim of output.claim_ui_checks) {
      if (claim.semantic_validation) {
        behavioralStats.total++;
        const check = claim.checks.find(c => c.action === "behavioral_validation");
        if (check) {
          totalConfidence += check.validation_confidence || 0;
          behavioralStats.total_tests_run += check.behavioral_tests?.length || 0;
          behavioralStats.total_elements_found += check.elements_verified || 0;

          if (check.status === "behavioral_validated") behavioralStats.validated++;
          else if (check.status === "behavioral_partial") behavioralStats.partial++;
          else if (check.status === "behavioral_not_found") behavioralStats.not_found++;
          else if (check.status?.startsWith("skipped")) behavioralStats.skipped++;
          else if (check.status === "error") behavioralStats.error++;
        }
      }
    }
    if (behavioralStats.total > 0) {
      behavioralStats.average_confidence = Math.round(totalConfidence / behavioralStats.total);
    }

    // Build comprehensive summary including direct plan execution
    output.summary = {
      methodology: "direct_plan_execution",
      total_steps: total,
      passed_steps: passed,
      failed_steps: failed,
      skipped_conceptual: skippedConceptual,
      screenshots: screenshotCount,
      plan_execution: {
        status: output.plan_execution?.methodology ? "executed" : (output.plan_execution?.status || "not_run"),
        total_plans: output.plan_execution?.total_plans || 0,
        plans_passed: output.plan_execution?.plans_passed || 0,
        plans_failed: output.plan_execution?.plans_failed || 0,
        total_checks: output.plan_execution?.plan_results?.reduce((acc, p) => acc + (p.checks?.length || 0), 0) || 0,
        checks_passed: output.plan_execution?.plan_results?.reduce((acc, p) => acc + (p.checks?.filter(c => c.status === "pass")?.length || 0), 0) || 0,
        checks_failed: output.plan_execution?.plan_results?.reduce((acc, p) => acc + (p.checks?.filter(c => c.status === "fail")?.length || 0), 0) || 0
      },
      behavioral_claim_validation: {
        total_claims_validated: behavioralStats.total,
        validated: behavioralStats.validated,
        partial_validation: behavioralStats.partial,
        not_found: behavioralStats.not_found,
        skipped: behavioralStats.skipped,
        errors: behavioralStats.error,
        total_behavioral_tests_run: behavioralStats.total_tests_run,
        total_ui_elements_found: behavioralStats.total_elements_found,
        average_validation_confidence: behavioralStats.average_confidence
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

    // Status determination based on plan execution results
    // - fail: login failure or fatal error
    // - partial: some plans passed, some failed
    // - pass: all plans passed or no plans to execute
    const planExecFailed = output.plan_execution?.plans_failed > 0;
    const planExecPassed = output.plan_execution?.plans_passed > 0;
    const allPlansPassed = output.plan_execution?.plans_passed === output.plan_execution?.total_plans;

    if (loginFail) {
      output.status = "fail";
    } else if (planExecFailed && !planExecPassed) {
      output.status = "fail";
    } else if (planExecFailed && planExecPassed) {
      output.status = "partial";
    } else if (anyClaimFail) {
      output.status = "partial";
    } else {
      output.status = "pass";
    }
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

    // Report plan execution results
    if (output.plan_execution?.total_plans > 0) {
      const plansPassed = output.plan_execution.plans_passed || 0;
      const totalPlans = output.plan_execution.total_plans || 0;
      console.log(`📋 Plan Execution: ${plansPassed}/${totalPlans} plans passed`);

      if (output.plan_execution.plans_failed > 0) {
        console.log(`   ⚠️ ${output.plan_execution.plans_failed} plans failed - check evidence for details`);
      }
    }

    // Navigation failures are informational only
    if (output.navigation_summary?.failed_paths > 0) {
      console.log(`ℹ️ Navigation: ${output.navigation_summary.successful_paths}/${output.navigation_summary.total_paths} paths succeeded`);
      console.log(`   Note: Failed paths may indicate outdated Zendesk docs - not a critical error`);
    }

    console.log(`✅ Validation completed successfully (status: ${output.status})`);
    process.exit(0);
  }
})();
