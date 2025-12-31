/**
 * UI Explorer - Exploration-first Playwright utility
 *
 * This module provides feature-agnostic UI exploration capabilities.
 * Navigation hints are treated as suggestions, not absolute truth.
 *
 * Key behaviors:
 * - Separates MENU_NAVIGATION from IN_PAGE_INTERACTION
 * - Explores UI elements in-depth after landing on a page
 * - Captures screenshots at every key step
 * - Implements SAFE_MODE to prevent destructive actions
 */

import fs from "fs";
import path from "path";

// ============================================================================
// DEBUG MODE
// ============================================================================

/**
 * Debug mode for detailed exploration logging
 * Enable with DEBUG_EXPLORER=1 environment variable
 */
const DEBUG_EXPLORER = process.env.DEBUG_EXPLORER === "1" || process.env.DEBUG_EXPLORER === "true";

function debugLog(log, ...args) {
  if (DEBUG_EXPLORER) {
    log("[DEBUG]", ...args);
  }
}

// ============================================================================
// TYPES & CONSTANTS
// ============================================================================

/**
 * @typedef {'MENU_NAVIGATION' | 'IN_PAGE_INTERACTION'} StepKind
 */

/**
 * @typedef {Object} ExplorationStep
 * @property {StepKind} kind - Type of navigation/interaction
 * @property {string} action - Description of the action taken
 * @property {string} [target] - Target element description
 * @property {string} [locatorStrategy] - How the element was found
 * @property {string} [beforeShot] - Screenshot path before action
 * @property {string} [afterShot] - Screenshot path after action
 * @property {string} [notes] - Additional observations
 * @property {boolean} [success] - Whether the action succeeded
 */

/**
 * @typedef {Object} DiscoveredControl
 * @property {string} type - Control type (dropdown, toggle, button, etc.)
 * @property {string} [label] - Visible label text
 * @property {string} locatorStrategy - How to find this element
 * @property {string} [currentValue] - Current value if applicable
 */

/**
 * @typedef {Object} ExploreResult
 * @property {ExplorationStep[]} steps - All steps taken
 * @property {DiscoveredControl[]} discoveries - Controls found on page
 * @property {string[]} observations - Key observations
 * @property {string[]} shots - All screenshot paths
 * @property {string} [pageUrl] - Final page URL
 * @property {string} [pageTitle] - Detected page title
 * @property {boolean} safeModeSaveSkipped - Whether save was skipped due to SAFE_MODE
 */

/**
 * @typedef {Object} ExplorationLimits
 * @property {number} maxAccordions
 * @property {number} maxTables
 * @property {number} maxRowsPerTable
 * @property {number} maxEditClicks
 * @property {number} maxDropdowns
 * @property {number} maxDropdownOptions
 * @property {number} maxToggles
 * @property {number} maxTabs
 * @property {number} maxLinks
 */

/**
 * @typedef {Object} ExploreOptions
 * @property {boolean} safeMode - If true, skip Save/Delete/Confirm buttons
 * @property {ExplorationLimits} limits - Throttling limits
 * @property {string} screenshotsDir - Directory for screenshots
 * @property {string} featureSlug - Feature identifier for screenshot naming
 * @property {string} checkId - Check identifier for screenshot naming
 * @property {(msg: string) => void} log - Logging function
 */

const DEFAULT_LIMITS = {
  maxAccordions: 8,
  maxTables: 3,
  maxRowsPerTable: 5,
  maxEditClicks: 6,
  maxDropdowns: 5,
  maxDropdownOptions: 3,
  maxToggles: 5,
  maxTabs: 6,
  maxLinks: 5
};

/**
 * Accordion candidate selectors - exported for debugging
 */
const ACCORDION_SELECTORS = [
  'button[aria-expanded]',
  '[role="button"][aria-expanded]',
  '[data-testid*="accordion"]',
  '[data-testid*="expand"]',
  '[class*="accordion"] button',
  '[class*="Accordion"] button',
  '[class*="collapsible"] button',
  '[class*="expandable"] button',
  'button:has([data-icon*="chevron" i])',
  'button:has([class*="chevron" i])',
  'button:has([class*="arrow" i])',
  '[class*="panel-header"]',
  '[class*="card-header"] button'
];

/**
 * Debug artifact writer for accordion analysis
 */
async function writeDebugArtifact(outputDir, data) {
  if (!DEBUG_EXPLORER) return null;

  try {
    const debugDir = path.join(outputDir, "debug");
    if (!fs.existsSync(debugDir)) {
      fs.mkdirSync(debugDir, { recursive: true });
    }

    const filepath = path.join(debugDir, "explorer_accordions.json");
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
    return filepath;
  } catch (e) {
    console.error("[DEBUG] Failed to write accordion debug artifact:", e.message);
    return null;
  }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function norm(s) {
  return (s || "").replace(/\s+/g, " ").trim();
}

function slugify(s) {
  return (s || "unknown")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "")
    .slice(0, 40);
}

function timestamp() {
  return Date.now().toString(36);
}

/**
 * Generate screenshot filename
 */
function screenshotName(featureSlug, checkId, stepLabel) {
  return `${slugify(featureSlug)}__${slugify(checkId)}__${slugify(stepLabel)}__${timestamp()}.png`;
}

/**
 * Extract keywords from text for fuzzy matching
 */
function extractKeywords(text) {
  if (!text) return [];
  const stopWords = new Set([
    'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
    'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
    'should', 'may', 'might', 'must', 'shall', 'can', 'need', 'dare',
    'ought', 'used', 'to', 'of', 'in', 'for', 'on', 'with', 'at', 'by',
    'from', 'as', 'into', 'through', 'during', 'before', 'after', 'above',
    'below', 'between', 'under', 'again', 'further', 'then', 'once', 'here',
    'there', 'when', 'where', 'why', 'how', 'all', 'each', 'few', 'more',
    'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own',
    'same', 'so', 'than', 'too', 'very', 'just', 'and', 'but', 'if', 'or',
    'because', 'until', 'while', 'this', 'that', 'these', 'those', 'what',
    'which', 'who', 'whom', 'whose', 'visible', 'displayed', 'shown', 'shows'
  ]);

  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !stopWords.has(w));
}

// ============================================================================
// CORE EXPLORATION CLASS
// ============================================================================

export class UIExplorer {
  constructor(page, options) {
    this.page = page;
    this.opts = {
      safeMode: options.safeMode !== false, // Default true
      limits: { ...DEFAULT_LIMITS, ...(options.limits || {}) },
      screenshotsDir: options.screenshotsDir || "./screenshots",
      featureSlug: options.featureSlug || "unknown_feature",
      checkId: options.checkId || "unknown_check",
      log: options.log || console.log
    };

    this.result = {
      steps: [],
      discoveries: [],
      observations: [],
      shots: [],
      pageUrl: null,
      pageTitle: null,
      safeModeSaveSkipped: false
    };

    this.counters = {
      accordions: 0,
      tables: 0,
      rows: 0,
      edits: 0,
      dropdowns: 0,
      toggles: 0,
      tabs: 0,
      links: 0
    };
  }

  // --------------------------------------------------------------------------
  // Screenshot Helpers
  // --------------------------------------------------------------------------

  async screenshot(label) {
    try {
      const filename = screenshotName(this.opts.featureSlug, this.opts.checkId, label);
      const filepath = path.join(this.opts.screenshotsDir, filename);

      // Ensure directory exists
      if (!fs.existsSync(this.opts.screenshotsDir)) {
        fs.mkdirSync(this.opts.screenshotsDir, { recursive: true });
      }

      await this.page.screenshot({ path: filepath, fullPage: false });
      this.result.shots.push(filename);
      return filename;
    } catch (e) {
      this.opts.log(`[Screenshot Error] ${label}: ${e.message}`);
      return null;
    }
  }

  // --------------------------------------------------------------------------
  // Safe Click Helper
  // --------------------------------------------------------------------------

  async tryClick(locator, description = "element") {
    try {
      await locator.scrollIntoViewIfNeeded().catch(() => {});
      await locator.click({ timeout: 3000 });
      return true;
    } catch (e) {
      try {
        await locator.dispatchEvent("click");
        return true;
      } catch {
        this.opts.log(`[Click Failed] ${description}: ${e.message}`);
        return false;
      }
    }
  }

  // --------------------------------------------------------------------------
  // Dialog/Modal Detection
  // --------------------------------------------------------------------------

  async isDialogOpen() {
    const selectors = [
      '[role="dialog"]',
      '[aria-modal="true"]',
      '.modal',
      '.MuiDialog-root',
      '.ant-modal',
      '[class*="modal"]',
      '[class*="Modal"]',
      '[class*="dialog"]',
      '[class*="Dialog"]'
    ];

    for (const sel of selectors) {
      try {
        const el = this.page.locator(sel).first();
        if (await el.isVisible({ timeout: 500 }).catch(() => false)) {
          return true;
        }
      } catch {
        continue;
      }
    }
    return false;
  }

  async getDialog() {
    const selectors = [
      '[role="dialog"]',
      '[aria-modal="true"]',
      '.modal:visible',
      '.MuiDialog-root',
      '.ant-modal-content',
      '[class*="modal"]:visible',
      '[class*="Dialog"]:visible'
    ];

    for (const sel of selectors) {
      try {
        const el = this.page.locator(sel).first();
        if (await el.isVisible({ timeout: 500 }).catch(() => false)) {
          return el;
        }
      } catch {
        continue;
      }
    }
    return null;
  }

  async closeDialog() {
    const dlg = await this.getDialog();
    if (!dlg) return;

    const closePatterns = [
      dlg.getByRole("button", { name: /close|cancel|x|dismiss/i }).first(),
      dlg.locator('[aria-label*="close" i]').first(),
      dlg.locator('[aria-label*="cancel" i]').first(),
      dlg.locator('button:has-text("Cancel")').first(),
      dlg.locator('button:has-text("Close")').first(),
      dlg.locator('[class*="close"]').first()
    ];

    for (const btn of closePatterns) {
      try {
        if (await btn.isVisible({ timeout: 500 }).catch(() => false)) {
          await this.tryClick(btn, "close button");
          await this.page.waitForTimeout(300);
          return;
        }
      } catch {
        continue;
      }
    }

    // Fallback: Escape key
    await this.page.keyboard.press("Escape").catch(() => {});
    await this.page.waitForTimeout(300);
  }

  // --------------------------------------------------------------------------
  // Accordion Exploration
  // --------------------------------------------------------------------------

  async expandAccordions(scope) {
    const root = scope || this.page.locator("body");
    const selectorString = ACCORDION_SELECTORS.join(', ');

    const candidates = root.locator(selectorString);

    const count = await candidates.count().catch(() => 0);
    const toTry = Math.min(count, this.opts.limits.maxAccordions);

    if (count > 0) {
      this.opts.log(`[Accordions] Found ${count} candidates, will try ${toTry}`);
    }

    // ========== DEBUG INSTRUMENTATION ==========
    if (DEBUG_EXPLORER && count > 0) {
      this.opts.log(`[DEBUG] Accordion selector used:\n${selectorString}`);

      // Take BEFORE screenshot
      const beforeExploreShot = await this.screenshot("debug_accordion_before_discovery");
      this.opts.log(`[DEBUG] Before-discovery screenshot: ${beforeExploreShot}`);

      // Collect samples and histograms
      const samples = [];
      const roleHistogram = {};
      const tagHistogram = {};
      let ariaExpandedTrueCount = 0;
      let ariaExpandedFalseCount = 0;
      let ariaExpandedNullCount = 0;
      let hasTestIdCount = 0;
      let visibleCount = 0;
      let hiddenCount = 0;

      const sampleLimit = Math.min(count, 30);
      this.opts.log(`[DEBUG] Analyzing ${sampleLimit} of ${count} accordion candidates...`);

      for (let i = 0; i < sampleLimit; i++) {
        try {
          const el = candidates.nth(i);
          const isVisible = await el.isVisible().catch(() => false);

          // Get element details via evaluate
          const details = await el.evaluate(e => ({
            tag: e.tagName,
            role: e.getAttribute('role'),
            ariaExpanded: e.getAttribute('aria-expanded'),
            ariaControls: e.getAttribute('aria-controls'),
            id: e.id || null,
            className: (e.className || '').toString().slice(0, 120),
            testid: e.getAttribute('data-testid'),
            text: (e.innerText || e.textContent || '').trim().slice(0, 80)
          })).catch(() => ({}));

          // Get bounding box
          const bbox = await el.boundingBox().catch(() => null);

          // Update histograms
          const role = details.role || '(none)';
          const tag = details.tag || '(unknown)';
          roleHistogram[role] = (roleHistogram[role] || 0) + 1;
          tagHistogram[tag] = (tagHistogram[tag] || 0) + 1;

          if (details.ariaExpanded === 'true') ariaExpandedTrueCount++;
          else if (details.ariaExpanded === 'false') ariaExpandedFalseCount++;
          else ariaExpandedNullCount++;

          if (details.testid) hasTestIdCount++;
          if (isVisible) visibleCount++;
          else hiddenCount++;

          samples.push({
            index: i,
            tag: details.tag,
            role: details.role,
            ariaExpanded: details.ariaExpanded,
            ariaControls: details.ariaControls,
            id: details.id,
            className: details.className,
            testid: details.testid,
            text: details.text,
            visible: isVisible,
            bbox: bbox ? { x: Math.round(bbox.x), y: Math.round(bbox.y), w: Math.round(bbox.width), h: Math.round(bbox.height) } : null
          });
        } catch (e) {
          samples.push({ index: i, error: e.message });
        }
      }

      // Log histogram summaries
      this.opts.log(`[DEBUG] === ACCORDION CANDIDATE ANALYSIS ===`);
      this.opts.log(`[DEBUG] Total count: ${count}`);
      this.opts.log(`[DEBUG] Role histogram: ${JSON.stringify(roleHistogram)}`);
      this.opts.log(`[DEBUG] Tag histogram: ${JSON.stringify(tagHistogram)}`);
      this.opts.log(`[DEBUG] aria-expanded: true=${ariaExpandedTrueCount}, false=${ariaExpandedFalseCount}, null=${ariaExpandedNullCount}`);
      this.opts.log(`[DEBUG] Has data-testid: ${hasTestIdCount}`);
      this.opts.log(`[DEBUG] Visibility: visible=${visibleCount}, hidden=${hiddenCount}`);

      // Log first 10 samples
      this.opts.log(`[DEBUG] === FIRST 10 SAMPLES ===`);
      for (let i = 0; i < Math.min(10, samples.length); i++) {
        const s = samples[i];
        if (s.error) {
          this.opts.log(`[DEBUG] [${i}] ERROR: ${s.error}`);
        } else {
          this.opts.log(`[DEBUG] [${i}] ${s.tag} role=${s.role} aria-expanded=${s.ariaExpanded} visible=${s.visible} id=${s.id} class="${s.className?.slice(0, 60)}..." text="${s.text?.slice(0, 40)}..."`);
        }
      }

      // Take AFTER screenshot (after discovery, before any clicks)
      const afterDiscoveryShot = await this.screenshot("debug_accordion_after_discovery");
      this.opts.log(`[DEBUG] After-discovery screenshot: ${afterDiscoveryShot}`);

      // Write debug artifact JSON
      const debugArtifact = {
        url: this.page.url(),
        timestamp: new Date().toISOString(),
        selectorUsed: selectorString,
        totalCount: count,
        sampledCount: sampleLimit,
        roleHistogram,
        tagHistogram,
        ariaExpandedStats: {
          true: ariaExpandedTrueCount,
          false: ariaExpandedFalseCount,
          null: ariaExpandedNullCount
        },
        hasTestIdCount,
        visibleCount,
        hiddenCount,
        samples,
        screenshots: {
          beforeDiscovery: beforeExploreShot,
          afterDiscovery: afterDiscoveryShot
        }
      };

      const artifactPath = await writeDebugArtifact(this.opts.screenshotsDir, debugArtifact);
      if (artifactPath) {
        this.opts.log(`[DEBUG] Accordion debug artifact written to: ${artifactPath}`);
      }

      this.opts.log(`[DEBUG] === END ACCORDION ANALYSIS ===`);
    }
    // ========== END DEBUG INSTRUMENTATION ==========

    for (let i = 0; i < toTry; i++) {
      if (this.counters.accordions >= this.opts.limits.maxAccordions) {
        this.result.observations.push(`Accordion limit reached (${this.opts.limits.maxAccordions})`);
        break;
      }

      const btn = candidates.nth(i);
      const expanded = await btn.getAttribute("aria-expanded").catch(() => null);

      // Skip if already expanded
      if (expanded === "true") continue;

      const labelText = norm(await btn.innerText().catch(() => `accordion_${i}`));
      const beforeShot = await this.screenshot(`accordion_before_${i}`);

      const clicked = await this.tryClick(btn, `accordion ${labelText}`);
      await this.page.waitForTimeout(400);

      const afterShot = await this.screenshot(`accordion_after_${i}`);

      this.result.steps.push({
        kind: "IN_PAGE_INTERACTION",
        action: "Expand accordion",
        target: labelText || `accordion_${i}`,
        locatorStrategy: "aria-expanded button",
        beforeShot,
        afterShot,
        success: clicked,
        notes: clicked ? "Expanded" : "Click failed"
      });

      this.result.discoveries.push({
        type: "accordion",
        label: labelText,
        locatorStrategy: `button[aria-expanded] nth(${i})`
      });

      this.counters.accordions++;
    }
  }

  // --------------------------------------------------------------------------
  // Tab Exploration
  // --------------------------------------------------------------------------

  async exploreTabs(scope) {
    const root = scope || this.page.locator("body");

    const tabs = root.getByRole("tab");
    const count = await tabs.count().catch(() => 0);
    const toTry = Math.min(count, this.opts.limits.maxTabs);

    if (count > 0) {
      this.opts.log(`[Tabs] Found ${count} tabs, will try ${toTry}`);
    }

    for (let i = 0; i < toTry; i++) {
      if (this.counters.tabs >= this.opts.limits.maxTabs) {
        this.result.observations.push(`Tab limit reached (${this.opts.limits.maxTabs})`);
        break;
      }

      const tab = tabs.nth(i);
      const selected = await tab.getAttribute("aria-selected").catch(() => null);

      // Skip if already selected
      if (selected === "true") continue;

      const labelText = norm(await tab.innerText().catch(() => `tab_${i}`));
      const beforeShot = await this.screenshot(`tab_before_${i}`);

      const clicked = await this.tryClick(tab, `tab ${labelText}`);
      await this.page.waitForTimeout(500);

      const afterShot = await this.screenshot(`tab_after_${i}`);

      this.result.steps.push({
        kind: "IN_PAGE_INTERACTION",
        action: "Switch tab",
        target: labelText || `tab_${i}`,
        locatorStrategy: "role=tab",
        beforeShot,
        afterShot,
        success: clicked
      });

      this.result.discoveries.push({
        type: "tab",
        label: labelText,
        locatorStrategy: `getByRole('tab').nth(${i})`
      });

      this.counters.tabs++;
    }
  }

  // --------------------------------------------------------------------------
  // Dropdown Exploration
  // --------------------------------------------------------------------------

  async exploreDropdown(locator, labelHint) {
    const beforeShot = await this.screenshot(`dropdown_before_${labelHint}`);
    const clicked = await this.tryClick(locator, `dropdown ${labelHint}`);
    await this.page.waitForTimeout(500);

    // Look for opened listbox/menu
    const listboxSelectors = [
      '[role="listbox"]',
      '[role="menu"]',
      '[class*="dropdown-menu"]',
      '[class*="select-dropdown"]',
      '[class*="options"]',
      '[class*="menu-list"]',
      '.ant-select-dropdown',
      '.MuiMenu-paper',
      '[class*="Popover"]'
    ];

    let listbox = null;
    for (const sel of listboxSelectors) {
      const el = this.page.locator(sel).first();
      if (await el.isVisible({ timeout: 500 }).catch(() => false)) {
        listbox = el;
        break;
      }
    }

    const afterOpenShot = await this.screenshot(`dropdown_open_${labelHint}`);

    this.result.steps.push({
      kind: "IN_PAGE_INTERACTION",
      action: "Open dropdown",
      target: labelHint,
      locatorStrategy: "combobox/select",
      beforeShot,
      afterShot: afterOpenShot,
      success: clicked && listbox !== null
    });

    if (!listbox) {
      this.result.observations.push(`Dropdown "${labelHint}" clicked but no options panel detected`);
      return;
    }

    // Get options
    const optionSelectors = [
      '[role="option"]',
      '[role="menuitem"]',
      '[class*="option"]',
      '[class*="menu-item"]',
      'li'
    ];

    let options = null;
    for (const sel of optionSelectors) {
      const candidates = listbox.locator(sel).filter({ hasText: /.+/ });
      const count = await candidates.count().catch(() => 0);
      if (count > 0) {
        options = candidates;
        break;
      }
    }

    if (!options) {
      this.result.observations.push(`Dropdown "${labelHint}" opened but no options found`);
      await this.page.keyboard.press("Escape").catch(() => {});
      return;
    }

    const optCount = await options.count().catch(() => 0);
    const toTry = Math.min(optCount, this.opts.limits.maxDropdownOptions);

    // Collect option texts for discovery
    const optionTexts = [];
    for (let i = 0; i < Math.min(optCount, 10); i++) {
      const text = norm(await options.nth(i).innerText().catch(() => ""));
      if (text) optionTexts.push(text);
    }

    this.result.discoveries.push({
      type: "dropdown",
      label: labelHint,
      locatorStrategy: "combobox",
      currentValue: optionTexts.join(" | ")
    });

    this.result.observations.push(`Dropdown "${labelHint}" has ${optCount} options: ${optionTexts.slice(0, 5).join(", ")}${optCount > 5 ? "..." : ""}`);

    // Try selecting a few options
    for (let i = 0; i < toTry; i++) {
      const opt = options.nth(i);
      const optText = norm(await opt.innerText().catch(() => `option_${i}`));

      const beforeSelShot = await this.screenshot(`dropdown_select_before_${labelHint}_${i}`);
      await this.tryClick(opt, `option ${optText}`);
      await this.page.waitForTimeout(400);
      const afterSelShot = await this.screenshot(`dropdown_select_after_${labelHint}_${i}`);

      this.result.steps.push({
        kind: "IN_PAGE_INTERACTION",
        action: "Select dropdown option",
        target: `${labelHint} -> ${optText}`,
        locatorStrategy: "option click",
        beforeShot: beforeSelShot,
        afterShot: afterSelShot,
        success: true
      });

      // Re-open dropdown for next option (if more to try)
      if (i < toTry - 1) {
        await this.tryClick(locator, `dropdown ${labelHint}`);
        await this.page.waitForTimeout(300);
      }
    }

    // Close dropdown
    await this.page.keyboard.press("Escape").catch(() => {});
    this.counters.dropdowns++;
  }

  async exploreDropdowns(scope) {
    const root = scope || this.page.locator("body");

    const comboboxes = root.getByRole("combobox");
    const comboCount = await comboboxes.count().catch(() => 0);

    // Also look for custom dropdowns
    const customDropdowns = root.locator([
      '[class*="select"]:not(select)',
      '[class*="Select"]:not(select)',
      '[class*="dropdown-trigger"]',
      '[class*="dropdown-toggle"]',
      'button[aria-haspopup="listbox"]',
      'button[aria-haspopup="menu"]'
    ].join(', '));
    const customCount = await customDropdowns.count().catch(() => 0);

    const totalCount = comboCount + customCount;
    if (totalCount > 0) {
      this.opts.log(`[Dropdowns] Found ${comboCount} comboboxes, ${customCount} custom dropdowns`);
    }

    // Explore comboboxes
    for (let i = 0; i < Math.min(comboCount, this.opts.limits.maxDropdowns); i++) {
      if (this.counters.dropdowns >= this.opts.limits.maxDropdowns) {
        this.result.observations.push(`Dropdown limit reached (${this.opts.limits.maxDropdowns})`);
        break;
      }

      const combo = comboboxes.nth(i);
      const labelText = await this.getLabelForElement(combo, `combobox_${i}`);
      await this.exploreDropdown(combo, labelText);
    }

    // Explore custom dropdowns
    for (let i = 0; i < Math.min(customCount, this.opts.limits.maxDropdowns - this.counters.dropdowns); i++) {
      if (this.counters.dropdowns >= this.opts.limits.maxDropdowns) break;

      const dropdown = customDropdowns.nth(i);
      const labelText = await this.getLabelForElement(dropdown, `custom_dropdown_${i}`);
      await this.exploreDropdown(dropdown, labelText);
    }
  }

  async getLabelForElement(locator, fallback) {
    // Try to find associated label
    try {
      const id = await locator.getAttribute("id").catch(() => null);
      if (id) {
        const label = this.page.locator(`label[for="${id}"]`);
        if (await label.count() > 0) {
          return norm(await label.innerText().catch(() => fallback));
        }
      }

      // Try aria-label
      const ariaLabel = await locator.getAttribute("aria-label").catch(() => null);
      if (ariaLabel) return ariaLabel;

      // Try text content
      const text = await locator.innerText().catch(() => null);
      if (text && text.length < 50) return norm(text);

      // Try nearby label
      const parent = locator.locator("xpath=..");
      const nearbyLabel = parent.locator("label").first();
      if (await nearbyLabel.count() > 0) {
        return norm(await nearbyLabel.innerText().catch(() => fallback));
      }
    } catch {
      // Ignore
    }
    return fallback;
  }

  // --------------------------------------------------------------------------
  // Toggle/Switch Exploration
  // --------------------------------------------------------------------------

  async exploreToggles(scope) {
    const root = scope || this.page.locator("body");

    const switches = root.getByRole("switch");
    const switchCount = await switches.count().catch(() => 0);

    // Also look for checkbox-style toggles
    const checkboxes = root.locator('input[type="checkbox"]:visible');
    const checkboxCount = await checkboxes.count().catch(() => 0);

    if (switchCount + checkboxCount > 0) {
      this.opts.log(`[Toggles] Found ${switchCount} switches, ${checkboxCount} checkboxes`);
    }

    // Explore switches
    for (let i = 0; i < Math.min(switchCount, this.opts.limits.maxToggles); i++) {
      if (this.counters.toggles >= this.opts.limits.maxToggles) {
        this.result.observations.push(`Toggle limit reached (${this.opts.limits.maxToggles})`);
        break;
      }

      const sw = switches.nth(i);
      const labelText = await this.getLabelForElement(sw, `switch_${i}`);
      const checked = await sw.getAttribute("aria-checked").catch(() => null);

      const beforeShot = await this.screenshot(`toggle_before_${i}`);
      const clicked = await this.tryClick(sw, `switch ${labelText}`);
      await this.page.waitForTimeout(300);
      const afterShot = await this.screenshot(`toggle_after_${i}`);

      const newChecked = await sw.getAttribute("aria-checked").catch(() => null);

      this.result.steps.push({
        kind: "IN_PAGE_INTERACTION",
        action: "Toggle switch",
        target: labelText,
        locatorStrategy: "role=switch",
        beforeShot,
        afterShot,
        success: clicked,
        notes: `${checked} -> ${newChecked}`
      });

      this.result.discoveries.push({
        type: "switch",
        label: labelText,
        locatorStrategy: `getByRole('switch').nth(${i})`,
        currentValue: newChecked
      });

      this.counters.toggles++;
    }
  }

  // --------------------------------------------------------------------------
  // Table & Row Editing Exploration
  // --------------------------------------------------------------------------

  async exploreTables(scope) {
    const root = scope || this.page.locator("body");

    const tables = root.locator("table");
    const tableCount = await tables.count().catch(() => 0);
    const toTryTables = Math.min(tableCount, this.opts.limits.maxTables);

    if (tableCount > 0) {
      this.opts.log(`[Tables] Found ${tableCount} tables, will explore ${toTryTables}`);
    }

    for (let t = 0; t < toTryTables; t++) {
      if (this.counters.tables >= this.opts.limits.maxTables) break;

      const table = tables.nth(t);
      const rows = table.locator("tbody tr");
      const rowCount = await rows.count().catch(() => 0);
      const toTryRows = Math.min(rowCount, this.opts.limits.maxRowsPerTable);

      this.result.observations.push(`Table ${t} has ${rowCount} rows`);
      this.counters.tables++;

      for (let r = 0; r < toTryRows; r++) {
        if (this.counters.edits >= this.opts.limits.maxEditClicks) {
          this.result.observations.push(`Edit click limit reached (${this.opts.limits.maxEditClicks})`);
          break;
        }

        const row = rows.nth(r);

        // Look for edit/action buttons in row
        const editPatterns = [
          row.getByRole("button", { name: /edit|configure|manage|settings|modify/i }).first(),
          row.locator('[aria-label*="edit" i]').first(),
          row.locator('[aria-label*="configure" i]').first(),
          row.locator('[data-testid*="edit"]').first(),
          row.locator('button:has(svg[class*="edit" i])').first(),
          row.locator('button:has(svg[class*="pencil" i])').first(),
          row.locator('a:has(svg)').first(),
          row.locator('button:has(svg)').first()
        ];

        let editBtn = null;
        for (const pattern of editPatterns) {
          if (await pattern.count().catch(() => 0) > 0 && await pattern.isVisible({ timeout: 300 }).catch(() => false)) {
            editBtn = pattern;
            break;
          }
        }

        if (!editBtn) continue;

        const rowText = norm(await row.innerText().catch(() => "")).slice(0, 50);
        const beforeShot = await this.screenshot(`row_edit_before_t${t}_r${r}`);

        const clicked = await this.tryClick(editBtn, `edit button row ${r}`);
        await this.page.waitForTimeout(600);

        const afterShot = await this.screenshot(`row_edit_after_t${t}_r${r}`);

        this.result.steps.push({
          kind: "IN_PAGE_INTERACTION",
          action: "Click row edit button",
          target: `table_${t} row_${r}: ${rowText}`,
          locatorStrategy: "row button with edit icon",
          beforeShot,
          afterShot,
          success: clicked
        });

        this.counters.edits++;

        // Check if dialog opened
        if (await this.isDialogOpen()) {
          await this.exploreDialog();
        }
      }
    }
  }

  // --------------------------------------------------------------------------
  // Dialog/Modal Exploration
  // --------------------------------------------------------------------------

  async exploreDialog() {
    const dlg = await this.getDialog();
    if (!dlg) return;

    const titleEl = dlg.locator("h1, h2, h3, [data-testid*='title'], [class*='title'], [class*='header']").first();
    const title = norm(await titleEl.innerText().catch(() => "Dialog"));

    this.result.observations.push(`Dialog opened: "${title}"`);

    const dialogShot = await this.screenshot("dialog_opened");

    this.result.steps.push({
      kind: "IN_PAGE_INTERACTION",
      action: "Dialog opened",
      target: title,
      afterShot: dialogShot,
      success: true
    });

    // Explore dropdowns in dialog
    const dialogCombos = dlg.getByRole("combobox");
    const comboCount = await dialogCombos.count().catch(() => 0);
    for (let i = 0; i < Math.min(comboCount, 3); i++) {
      const combo = dialogCombos.nth(i);
      const labelText = await this.getLabelForElement(combo, `dialog_combobox_${i}`);
      await this.exploreDropdown(combo, labelText);
    }

    // Explore toggles in dialog
    const dialogSwitches = dlg.getByRole("switch");
    const switchCount = await dialogSwitches.count().catch(() => 0);
    for (let i = 0; i < Math.min(switchCount, 3); i++) {
      const sw = dialogSwitches.nth(i);
      const labelText = await this.getLabelForElement(sw, `dialog_switch_${i}`);

      const beforeShot = await this.screenshot(`dialog_toggle_before_${i}`);
      await this.tryClick(sw, `dialog switch ${labelText}`);
      await this.page.waitForTimeout(300);
      const afterShot = await this.screenshot(`dialog_toggle_after_${i}`);

      this.result.steps.push({
        kind: "IN_PAGE_INTERACTION",
        action: "Toggle dialog switch",
        target: labelText,
        beforeShot,
        afterShot,
        success: true
      });
    }

    // Explore links in dialog
    const dialogLinks = dlg.getByRole("link");
    const linkCount = await dialogLinks.count().catch(() => 0);
    for (let i = 0; i < Math.min(linkCount, 3); i++) {
      const link = dialogLinks.nth(i);
      const text = norm(await link.innerText().catch(() => `link_${i}`));

      const beforeShot = await this.screenshot(`dialog_link_before_${i}`);
      await this.tryClick(link, `dialog link ${text}`);
      await this.page.waitForTimeout(500);
      const afterShot = await this.screenshot(`dialog_link_after_${i}`);

      this.result.steps.push({
        kind: "IN_PAGE_INTERACTION",
        action: "Click dialog link",
        target: text,
        beforeShot,
        afterShot,
        success: true
      });
    }

    // Check for Save button
    const savePatterns = [
      dlg.getByRole("button", { name: /save|apply|confirm|submit|update/i }).first(),
      dlg.locator('button[type="submit"]').first()
    ];

    let saveBtn = null;
    for (const pattern of savePatterns) {
      if (await pattern.count().catch(() => 0) > 0 && await pattern.isVisible({ timeout: 300 }).catch(() => false)) {
        saveBtn = pattern;
        break;
      }
    }

    if (saveBtn) {
      if (this.opts.safeMode) {
        this.result.safeModeSaveSkipped = true;
        this.result.observations.push("SAFE_MODE: Save button detected but skipped");

        this.result.steps.push({
          kind: "IN_PAGE_INTERACTION",
          action: "Save button detected (SKIPPED - SAFE_MODE)",
          target: "Save/Apply/Confirm",
          notes: "SAFE_MODE is enabled, destructive action skipped",
          success: false
        });
      } else {
        const beforeShot = await this.screenshot("dialog_save_before");
        await this.tryClick(saveBtn, "save button");
        await this.page.waitForTimeout(800);
        const afterShot = await this.screenshot("dialog_save_after");

        this.result.steps.push({
          kind: "IN_PAGE_INTERACTION",
          action: "Click Save",
          beforeShot,
          afterShot,
          success: true,
          notes: "SAFE_MODE=false, save clicked"
        });

        // Refresh and verify
        await this.page.reload({ waitUntil: "networkidle" }).catch(() => {});
        const verifyShot = await this.screenshot("dialog_save_verified");
        this.result.observations.push("Page reloaded after save to verify changes");
      }
    }

    // Close dialog
    await this.closeDialog();
  }

  // --------------------------------------------------------------------------
  // Links Exploration
  // --------------------------------------------------------------------------

  async exploreLinks(scope) {
    const root = scope || this.page.locator("body");

    // Look for action links (not navigation links)
    const links = root.locator('a:not([href^="http"]):not([href^="/"])').filter({ hasText: /.+/ });
    const count = await links.count().catch(() => 0);
    const toTry = Math.min(count, this.opts.limits.maxLinks);

    if (count > 0) {
      this.opts.log(`[Links] Found ${count} in-page links, will try ${toTry}`);
    }

    for (let i = 0; i < toTry; i++) {
      if (this.counters.links >= this.opts.limits.maxLinks) break;

      const link = links.nth(i);
      const text = norm(await link.innerText().catch(() => `link_${i}`));

      // Skip if it looks like external navigation
      const href = await link.getAttribute("href").catch(() => "");
      if (href && (href.startsWith("http") || href.startsWith("/"))) continue;

      const beforeShot = await this.screenshot(`link_before_${i}`);
      const clicked = await this.tryClick(link, `link ${text}`);
      await this.page.waitForTimeout(500);
      const afterShot = await this.screenshot(`link_after_${i}`);

      this.result.steps.push({
        kind: "IN_PAGE_INTERACTION",
        action: "Click link",
        target: text,
        beforeShot,
        afterShot,
        success: clicked
      });

      // Check if dialog opened
      if (await this.isDialogOpen()) {
        await this.exploreDialog();
      }

      this.counters.links++;
    }
  }

  // --------------------------------------------------------------------------
  // Main Exploration Entry Point
  // --------------------------------------------------------------------------

  async explorePage(scope) {
    this.opts.log("[Explorer] Starting page exploration...");

    // Capture page info
    this.result.pageUrl = this.page.url();
    this.result.pageTitle = await this.page.title().catch(() => "Unknown");

    // Landing screenshot
    const landingShot = await this.screenshot("landing");
    this.result.steps.push({
      kind: "IN_PAGE_INTERACTION",
      action: "Page landing",
      target: this.result.pageTitle,
      afterShot: landingShot,
      success: true
    });

    const root = scope || this.page.locator("body");

    // Run all exploration phases
    await this.exploreTabs(root);
    await this.expandAccordions(root);
    await this.exploreTables(root);
    await this.exploreDropdowns(root);
    await this.exploreToggles(root);
    await this.exploreLinks(root);

    // Final screenshot
    const finalShot = await this.screenshot("exploration_complete");
    this.result.observations.push("Exploration complete");

    this.opts.log(`[Explorer] Complete: ${this.result.steps.length} steps, ${this.result.discoveries.length} discoveries, ${this.result.shots.length} screenshots`);

    return this.result;
  }

  // --------------------------------------------------------------------------
  // Context-Targeted Exploration (for specific check)
  // --------------------------------------------------------------------------

  async exploreForCheck(check) {
    const keywords = extractKeywords(
      `${check.description || ""} ${check.selector_hint || ""} ${check.assertion || ""}`
    );

    this.opts.log(`[Explorer] Exploring for check: ${check.check_id}`);
    this.opts.log(`[Explorer] Keywords: ${keywords.join(", ")}`);

    // Try to find a scoped region containing keywords
    let scope = null;

    // Look for sections/cards/panels containing keywords
    const sectionSelectors = [
      '[class*="section"]',
      '[class*="card"]',
      '[class*="panel"]',
      '[class*="container"]',
      '[class*="block"]',
      '[class*="form"]',
      'section',
      'article'
    ];

    for (const sel of sectionSelectors) {
      const sections = this.page.locator(sel);
      const count = await sections.count().catch(() => 0);

      for (let i = 0; i < count; i++) {
        const section = sections.nth(i);
        const text = (await section.innerText().catch(() => "")).toLowerCase();

        const matchCount = keywords.filter(kw => text.includes(kw)).length;
        if (matchCount >= 2 || (keywords.length === 1 && matchCount === 1)) {
          scope = section;
          this.result.observations.push(`Found relevant section containing: ${keywords.filter(kw => text.includes(kw)).join(", ")}`);
          break;
        }
      }
      if (scope) break;
    }

    if (scope) {
      this.opts.log("[Explorer] Found scoped region, exploring within it");
    } else {
      this.opts.log("[Explorer] No scoped region found, exploring full page");
    }

    return await this.explorePage(scope);
  }
}

// ============================================================================
// NAVIGATION UTILITIES
// ============================================================================

/**
 * Fallback navigation strategies when breadcrumb hints fail
 */
export class NavigationExplorer {
  constructor(page, options) {
    this.page = page;
    this.opts = {
      screenshotsDir: options.screenshotsDir || "./screenshots",
      featureSlug: options.featureSlug || "unknown_feature",
      log: options.log || console.log
    };

    this.menuSteps = [];
  }

  async screenshot(label) {
    try {
      const filename = screenshotName(this.opts.featureSlug, "nav", label);
      const filepath = path.join(this.opts.screenshotsDir, filename);

      if (!fs.existsSync(this.opts.screenshotsDir)) {
        fs.mkdirSync(this.opts.screenshotsDir, { recursive: true });
      }

      await this.page.screenshot({ path: filepath, fullPage: false });
      return filename;
    } catch (e) {
      return null;
    }
  }

  /**
   * Try breadcrumb-based navigation (best-effort)
   */
  async tryBreadcrumbNavigation(breadcrumbs) {
    this.opts.log(`[Navigation] Attempting breadcrumb path: ${breadcrumbs.join(" > ")}`);

    for (const crumb of breadcrumbs) {
      const beforeShot = await this.screenshot(`nav_before_${slugify(crumb)}`);

      // Try multiple strategies to click menu item
      const strategies = [
        () => this.page.getByRole("link", { name: new RegExp(crumb, "i") }).first(),
        () => this.page.getByRole("button", { name: new RegExp(crumb, "i") }).first(),
        () => this.page.getByRole("menuitem", { name: new RegExp(crumb, "i") }).first(),
        () => this.page.locator(`nav a:has-text("${crumb}")`).first(),
        () => this.page.locator(`[class*="nav"] a:has-text("${crumb}")`).first(),
        () => this.page.locator(`[class*="menu"] a:has-text("${crumb}")`).first(),
        () => this.page.locator(`[class*="sidebar"] a:has-text("${crumb}")`).first(),
        () => this.page.getByText(crumb, { exact: false }).first()
      ];

      let clicked = false;
      let usedStrategy = "";

      for (const getLocator of strategies) {
        try {
          const locator = getLocator();
          if (await locator.isVisible({ timeout: 2000 }).catch(() => false)) {
            await locator.scrollIntoViewIfNeeded().catch(() => {});
            await locator.click({ timeout: 3000 });
            clicked = true;
            usedStrategy = getLocator.toString().slice(6, 50);
            break;
          }
        } catch {
          continue;
        }
      }

      await this.page.waitForTimeout(500);
      const afterShot = await this.screenshot(`nav_after_${slugify(crumb)}`);

      this.menuSteps.push({
        kind: "MENU_NAVIGATION",
        action: clicked ? "Navigate" : "Navigation failed",
        target: crumb,
        locatorStrategy: usedStrategy || "none found",
        beforeShot,
        afterShot,
        success: clicked
      });

      if (!clicked) {
        this.opts.log(`[Navigation] Failed to click: ${crumb}`);
        return false;
      }

      this.opts.log(`[Navigation] Clicked: ${crumb}`);
    }

    return true;
  }

  /**
   * Try global search navigation
   */
  async trySearchNavigation(searchTerm) {
    this.opts.log(`[Navigation] Trying global search for: ${searchTerm}`);

    // Look for search input
    const searchPatterns = [
      this.page.getByRole("searchbox").first(),
      this.page.locator('[type="search"]').first(),
      this.page.locator('[placeholder*="search" i]').first(),
      this.page.locator('[aria-label*="search" i]').first(),
      this.page.locator('[class*="search"] input').first()
    ];

    let searchInput = null;
    for (const pattern of searchPatterns) {
      if (await pattern.isVisible({ timeout: 1000 }).catch(() => false)) {
        searchInput = pattern;
        break;
      }
    }

    if (!searchInput) {
      this.opts.log("[Navigation] No search input found");
      return false;
    }

    const beforeShot = await this.screenshot("search_before");

    await searchInput.fill(searchTerm);
    await this.page.waitForTimeout(500);
    await searchInput.press("Enter");
    await this.page.waitForTimeout(1000);

    const afterShot = await this.screenshot("search_after");

    // Look for search results
    const resultPatterns = [
      this.page.locator('[class*="search-result"]').first(),
      this.page.locator('[class*="result"]').first(),
      this.page.locator('[class*="suggestion"]').first()
    ];

    let clicked = false;
    for (const pattern of resultPatterns) {
      if (await pattern.isVisible({ timeout: 1000 }).catch(() => false)) {
        await pattern.click().catch(() => {});
        clicked = true;
        break;
      }
    }

    this.menuSteps.push({
      kind: "MENU_NAVIGATION",
      action: "Search navigation",
      target: searchTerm,
      beforeShot,
      afterShot,
      success: clicked
    });

    return clicked;
  }

  /**
   * Crawl from Settings to find matching page
   */
  async tryCrawlFromSettings(featureName, keywords) {
    this.opts.log(`[Navigation] Crawling from Settings for: ${featureName}`);

    // First navigate to Settings
    const settingsPatterns = [
      this.page.getByRole("link", { name: /settings/i }).first(),
      this.page.getByRole("button", { name: /settings/i }).first(),
      this.page.locator('[href*="settings"]').first(),
      this.page.locator('[class*="settings"]').first()
    ];

    let settingsClicked = false;
    for (const pattern of settingsPatterns) {
      if (await pattern.isVisible({ timeout: 2000 }).catch(() => false)) {
        await pattern.click().catch(() => {});
        settingsClicked = true;
        break;
      }
    }

    if (!settingsClicked) {
      this.opts.log("[Navigation] Could not find Settings");
      return false;
    }

    await this.page.waitForTimeout(1000);
    const settingsShot = await this.screenshot("settings_landing");

    // Now look for links containing keywords
    const links = this.page.locator('a, button, [role="link"], [role="button"]');
    const count = await links.count().catch(() => 0);

    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      const text = (await link.innerText().catch(() => "")).toLowerCase();

      const matchCount = keywords.filter(kw => text.includes(kw)).length;
      if (matchCount >= 1) {
        const beforeShot = await this.screenshot(`crawl_before_${i}`);
        await link.click().catch(() => {});
        await this.page.waitForTimeout(500);
        const afterShot = await this.screenshot(`crawl_after_${i}`);

        this.menuSteps.push({
          kind: "MENU_NAVIGATION",
          action: "Crawl navigation",
          target: norm(text).slice(0, 50),
          beforeShot,
          afterShot,
          success: true
        });

        this.opts.log(`[Navigation] Crawled to: ${text}`);
        return true;
      }
    }

    return false;
  }

  /**
   * Main navigation method with fallbacks
   */
  async navigateWithFallbacks(breadcrumbs, featureName, keywords) {
    // Strategy 1: Try breadcrumb navigation
    if (breadcrumbs && breadcrumbs.length > 0) {
      const success = await this.tryBreadcrumbNavigation(breadcrumbs);
      if (success) {
        return { success: true, method: "breadcrumb", steps: this.menuSteps };
      }
    }

    // Strategy 2: Try global search
    if (featureName) {
      const success = await this.trySearchNavigation(featureName);
      if (success) {
        return { success: true, method: "search", steps: this.menuSteps };
      }
    }

    // Strategy 3: Crawl from Settings
    if (keywords && keywords.length > 0) {
      const success = await this.tryCrawlFromSettings(featureName, keywords);
      if (success) {
        return { success: true, method: "crawl", steps: this.menuSteps };
      }
    }

    return { success: false, method: "none", steps: this.menuSteps };
  }

  getSteps() {
    return this.menuSteps;
  }
}

// ============================================================================
// MAIN EXPLORATION RUNNER
// ============================================================================

/**
 * Run full exploration for a check
 * This is the main entry point called from the validation runner
 */
export async function runExplorationForCheck(page, check, options) {
  const {
    safeMode = true,
    limits = DEFAULT_LIMITS,
    screenshotsDir,
    featureSlug,
    log = console.log
  } = options;

  const explorer = new UIExplorer(page, {
    safeMode,
    limits,
    screenshotsDir,
    featureSlug,
    checkId: check.check_id || "unknown",
    log
  });

  return await explorer.exploreForCheck(check);
}

/**
 * Run navigation with fallbacks
 */
export async function runNavigationWithFallbacks(page, navConfig, options) {
  const navigator = new NavigationExplorer(page, options);

  const keywords = extractKeywords(
    `${navConfig.featureName || ""} ${navConfig.description || ""}`
  );

  return await navigator.navigateWithFallbacks(
    navConfig.breadcrumbs,
    navConfig.featureName,
    keywords
  );
}

export { DEFAULT_LIMITS, extractKeywords, slugify, ACCORDION_SELECTORS, DEBUG_EXPLORER };
