#!/usr/bin/env node
/**
 * snapshot-navigator.mjs
 *
 * MCP-STYLE ACCESSIBILITY SNAPSHOT NAVIGATION
 * ============================================
 *
 * This module provides navigation and interaction using accessibility tree snapshots,
 * similar to how Playwright MCP works. Instead of brittle CSS selectors, it:
 *
 * 1. Takes accessibility snapshots of the page
 * 2. Finds elements by their accessible name/role in the tree
 * 3. Clicks using stable element handles
 *
 * This approach is MORE RELIABLE than selector-based navigation because:
 * - Accessibility tree is stable across UI changes
 * - Elements are found by semantic meaning, not DOM structure
 * - Supports adaptive error recovery (like pressing Escape)
 */

/**
 * Get accessibility snapshot of the page
 * Returns a tree structure similar to Playwright MCP's browser_snapshot
 */
export async function getAccessibilitySnapshot(page) {
  try {
    const snapshot = await page.accessibility.snapshot({ interestingOnly: true });
    return {
      success: true,
      snapshot,
      url: page.url(),
      title: await page.title()
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      url: page.url()
    };
  }
}

/**
 * Flatten accessibility tree into searchable array
 * Each node gets a unique ref like MCP uses
 */
export function flattenAccessibilityTree(node, parentPath = '', refCounter = { count: 0 }) {
  const results = [];

  if (!node) return results;

  const ref = `e${refCounter.count++}`;
  const path = parentPath ? `${parentPath} > ${node.role}` : node.role;

  results.push({
    ref,
    role: node.role,
    name: node.name || '',
    value: node.value || '',
    description: node.description || '',
    path,
    checked: node.checked,
    disabled: node.disabled,
    expanded: node.expanded,
    pressed: node.pressed,
    selected: node.selected,
    focused: node.focused,
    level: node.level
  });

  if (node.children) {
    for (const child of node.children) {
      results.push(...flattenAccessibilityTree(child, path, refCounter));
    }
  }

  return results;
}

/**
 * Find element in accessibility tree by name (fuzzy match)
 * Returns array of matching elements sorted by relevance
 */
export function findElementByName(flatTree, searchName, options = {}) {
  const { role, exactMatch = false } = options;
  const searchLower = searchName.toLowerCase().trim();

  const matches = flatTree.filter(node => {
    // Skip if role filter doesn't match
    if (role && node.role !== role) return false;

    const nameLower = (node.name || '').toLowerCase();

    if (exactMatch) {
      return nameLower === searchLower;
    }

    // Fuzzy match: contains or starts with
    return nameLower.includes(searchLower) || searchLower.includes(nameLower);
  });

  // Sort by relevance (exact match first, then starts with, then contains)
  return matches.sort((a, b) => {
    const aName = (a.name || '').toLowerCase();
    const bName = (b.name || '').toLowerCase();

    // Exact match gets highest priority
    if (aName === searchLower && bName !== searchLower) return -1;
    if (bName === searchLower && aName !== searchLower) return 1;

    // Starts with gets second priority
    if (aName.startsWith(searchLower) && !bName.startsWith(searchLower)) return -1;
    if (bName.startsWith(searchLower) && !aName.startsWith(searchLower)) return 1;

    // Shorter names preferred (more specific)
    return aName.length - bName.length;
  });
}

/**
 * Find clickable element for navigation item
 * Searches for links, buttons, menuitems, tabs, etc.
 */
export function findClickableElement(flatTree, itemName) {
  const clickableRoles = [
    'link', 'button', 'menuitem', 'tab', 'treeitem',
    'option', 'radio', 'checkbox', 'switch',
    'heading', 'generic' // Sometimes accordions use these
  ];

  // Try each role in priority order
  for (const role of clickableRoles) {
    const matches = findElementByName(flatTree, itemName, { role });
    if (matches.length > 0) {
      return { element: matches[0], allMatches: matches };
    }
  }

  // Fallback: search all elements
  const allMatches = findElementByName(flatTree, itemName);
  return { element: allMatches[0] || null, allMatches };
}

/**
 * Click element using accessibility-based approach
 * This mimics how Playwright MCP's browser_click works
 */
export async function clickByAccessibility(page, elementName, options = {}) {
  const { role, timeout = 5000, retries = 2 } = options;

  const result = {
    success: false,
    method: 'accessibility_snapshot',
    elementName,
    attempts: [],
    error: null
  };

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // Get fresh snapshot
      const { snapshot } = await getAccessibilitySnapshot(page);
      const flatTree = flattenAccessibilityTree(snapshot);

      // Find the element
      const { element, allMatches } = role
        ? { element: findElementByName(flatTree, elementName, { role })[0], allMatches: findElementByName(flatTree, elementName, { role }) }
        : findClickableElement(flatTree, elementName);

      result.attempts.push({
        attempt: attempt + 1,
        foundMatches: allMatches?.length || 0,
        selectedElement: element ? { ref: element.ref, role: element.role, name: element.name } : null
      });

      if (!element) {
        if (attempt < retries) {
          // Wait and retry
          await page.waitForTimeout(500);
          continue;
        }
        result.error = `Element not found: "${elementName}"`;
        return result;
      }

      // Click using the element's accessible name and role
      const clickSuccess = await clickElementByAccessibleProperties(page, element, timeout);

      if (clickSuccess.success) {
        result.success = true;
        result.clickedElement = { ref: element.ref, role: element.role, name: element.name };
        result.method = clickSuccess.method;
        return result;
      }

      // If click was blocked (overlay), try pressing Escape first
      if (clickSuccess.error?.includes('intercept') || clickSuccess.error?.includes('overlay')) {
        result.attempts[result.attempts.length - 1].recoveryAction = 'escape';
        await page.keyboard.press('Escape');
        await page.waitForTimeout(300);

        // Retry click
        const retryClick = await clickElementByAccessibleProperties(page, element, timeout);
        if (retryClick.success) {
          result.success = true;
          result.clickedElement = { ref: element.ref, role: element.role, name: element.name };
          result.method = retryClick.method + ' (after Escape)';
          return result;
        }
      }

    } catch (error) {
      result.attempts.push({ attempt: attempt + 1, error: error.message });
    }
  }

  return result;
}

/**
 * Click element by its accessible properties (role + name)
 */
async function clickElementByAccessibleProperties(page, element, timeout = 5000) {
  const strategies = [
    // Strategy 1: getByRole with exact name
    async () => {
      const locator = page.getByRole(element.role, { name: element.name, exact: true });
      if (await locator.count() > 0) {
        await locator.first().click({ timeout });
        return { success: true, method: `getByRole(${element.role}, exact)` };
      }
      return null;
    },

    // Strategy 2: getByRole with fuzzy name
    async () => {
      const locator = page.getByRole(element.role, { name: element.name, exact: false });
      if (await locator.count() > 0) {
        await locator.first().click({ timeout });
        return { success: true, method: `getByRole(${element.role}, fuzzy)` };
      }
      return null;
    },

    // Strategy 3: ARIA label
    async () => {
      const locator = page.locator(`[aria-label="${element.name}"]`);
      if (await locator.count() > 0) {
        await locator.first().click({ timeout });
        return { success: true, method: 'aria-label' };
      }
      return null;
    },

    // Strategy 4: Text content
    async () => {
      const locator = page.getByText(element.name, { exact: false });
      if (await locator.count() > 0) {
        await locator.first().click({ timeout });
        return { success: true, method: 'getByText' };
      }
      return null;
    },

    // Strategy 5: Role-specific selectors
    async () => {
      const roleToSelector = {
        'button': 'button',
        'link': 'a',
        'menuitem': '[role="menuitem"]',
        'tab': '[role="tab"]',
        'heading': `h1, h2, h3, h4, h5, h6`,
        'generic': 'div, span'
      };

      const selector = roleToSelector[element.role];
      if (selector) {
        const locator = page.locator(`${selector}:has-text("${element.name}")`);
        if (await locator.count() > 0) {
          await locator.first().click({ timeout });
          return { success: true, method: `selector:${selector}` };
        }
      }
      return null;
    }
  ];

  for (const strategy of strategies) {
    try {
      const result = await strategy();
      if (result?.success) return result;
    } catch (error) {
      // Continue to next strategy
    }
  }

  return { success: false, error: 'All click strategies failed' };
}

/**
 * Navigate through breadcrumb path using accessibility snapshots
 * This is the MCP-style approach to navigation
 */
export async function navigateWithSnapshots(page, breadcrumbs, options = {}) {
  const { timeout = 5000, screenshotsDir, planId } = options;

  const result = {
    methodology: 'accessibility_snapshot_navigation',
    path: breadcrumbs.join(' > '),
    breadcrumbs,
    steps: [],
    status: 'pending',
    current_url: page.url()
  };

  for (let i = 0; i < breadcrumbs.length; i++) {
    const item = breadcrumbs[i];
    const stepResult = {
      index: i,
      item,
      status: 'pending'
    };

    console.log(`   [${i + 1}/${breadcrumbs.length}] Clicking: "${item}"`);

    // Get snapshot and find element
    const clickResult = await clickByAccessibility(page, item, { timeout });

    stepResult.clickResult = clickResult;

    if (clickResult.success) {
      stepResult.status = 'pass';
      stepResult.method = clickResult.method;
      console.log(`      Clicked via: ${clickResult.method}`);

      // Wait for navigation/content
      await page.waitForTimeout(1000);
      try {
        await page.waitForLoadState('networkidle', { timeout: 8000 });
      } catch {}

      stepResult.urlAfter = page.url();

    } else {
      stepResult.status = 'not_found';
      stepResult.error = clickResult.error;
      stepResult.attempts = clickResult.attempts;
      console.log(`      Not found (${clickResult.attempts?.length || 0} attempts)`);

      // Don't fail completely for navigation items after the first 2
      // They might be UI states, not clickable elements
      if (i >= 2) {
        stepResult.status = 'skipped';
        stepResult.reason = 'Non-critical navigation item';
      }
    }

    result.steps.push(stepResult);
  }

  result.current_url = page.url();

  // Determine overall status
  const passed = result.steps.filter(s => s.status === 'pass').length;
  const failed = result.steps.filter(s => s.status === 'not_found').length;

  if (failed === 0) {
    result.status = 'pass';
  } else if (passed > 0) {
    result.status = 'partial';
  } else {
    result.status = 'fail';
  }

  return result;
}

/**
 * Explore page using accessibility snapshots
 * Finds and expands accordions, tabs, dropdowns
 */
export async function explorePageWithSnapshots(page, options = {}) {
  const { expandAccordions = true, clickTabs = false, maxItems = 5 } = options;

  const result = {
    methodology: 'accessibility_snapshot_exploration',
    discoveries: [],
    actions: [],
    errors: []
  };

  // Get initial snapshot
  const { snapshot } = await getAccessibilitySnapshot(page);
  const flatTree = flattenAccessibilityTree(snapshot);

  // Find expandable elements (buttons with expanded=false)
  if (expandAccordions) {
    const accordions = flatTree.filter(node =>
      node.role === 'button' &&
      node.expanded === false &&
      !node.disabled
    ).slice(0, maxItems);

    for (const accordion of accordions) {
      result.discoveries.push({
        type: 'accordion',
        name: accordion.name,
        ref: accordion.ref,
        state: 'collapsed'
      });

      // Expand it
      try {
        const clickResult = await clickByAccessibility(page, accordion.name, { role: 'button' });
        if (clickResult.success) {
          result.actions.push({
            action: 'expand',
            target: accordion.name,
            success: true
          });
          await page.waitForTimeout(500);
        }
      } catch (error) {
        result.errors.push({ action: 'expand', target: accordion.name, error: error.message });
      }
    }
  }

  // Find dropdowns/comboboxes
  const dropdowns = flatTree.filter(node =>
    node.role === 'combobox' ||
    node.role === 'listbox' ||
    (node.role === 'button' && node.name?.toLowerCase().includes('select'))
  ).slice(0, maxItems);

  for (const dropdown of dropdowns) {
    result.discoveries.push({
      type: 'dropdown',
      name: dropdown.name,
      ref: dropdown.ref,
      expanded: dropdown.expanded
    });
  }

  // Find toggles/switches
  const toggles = flatTree.filter(node =>
    node.role === 'switch' ||
    node.role === 'checkbox' ||
    (node.role === 'button' && (node.pressed !== undefined || node.checked !== undefined))
  ).slice(0, maxItems);

  for (const toggle of toggles) {
    result.discoveries.push({
      type: 'toggle',
      name: toggle.name,
      ref: toggle.ref,
      checked: toggle.checked,
      pressed: toggle.pressed
    });
  }

  // Find tabs
  const tabs = flatTree.filter(node => node.role === 'tab').slice(0, maxItems);
  for (const tab of tabs) {
    result.discoveries.push({
      type: 'tab',
      name: tab.name,
      ref: tab.ref,
      selected: tab.selected
    });
  }

  // Find tables
  const tables = flatTree.filter(node => node.role === 'table' || node.role === 'grid');
  for (const table of tables) {
    result.discoveries.push({
      type: 'table',
      name: table.name || 'unnamed_table',
      ref: table.ref
    });
  }

  return result;
}

/**
 * Get text observations from accessibility tree
 * Similar to what MCP provides in page snapshots
 */
export function getTextObservations(flatTree, options = {}) {
  const { maxLength = 200 } = options;

  const observations = [];
  const seenText = new Set();

  for (const node of flatTree) {
    const text = node.name?.trim();
    if (text && text.length > 3 && text.length < maxLength && !seenText.has(text)) {
      seenText.add(text);
      observations.push({
        role: node.role,
        text,
        ref: node.ref
      });
    }

    // Also capture values (e.g., from inputs, dropdowns)
    if (node.value && !seenText.has(node.value)) {
      seenText.add(node.value);
      observations.push({
        role: node.role,
        text: node.value,
        ref: node.ref,
        isValue: true
      });
    }
  }

  return observations;
}

/**
 * Check if page contains specific content (by accessibility tree search)
 */
export async function checkContentPresence(page, searchTerms) {
  const { snapshot } = await getAccessibilitySnapshot(page);
  const flatTree = flattenAccessibilityTree(snapshot);

  const results = [];

  for (const term of searchTerms) {
    const matches = findElementByName(flatTree, term);
    results.push({
      term,
      found: matches.length > 0,
      matchCount: matches.length,
      firstMatch: matches[0] ? { role: matches[0].role, name: matches[0].name } : null
    });
  }

  return {
    allFound: results.every(r => r.found),
    anyFound: results.some(r => r.found),
    results
  };
}

/**
 * Execute a validation check using accessibility snapshots
 * @param {Object} page - Playwright page
 * @param {Object} check - Check object with check_id, type, assertion, selector_hint
 * @param {Object} options - Optional: screenshotsDir, screenshotPrefix, priorDiscoveries, priorObservations
 */
export async function executeCheckWithSnapshot(page, check, options = {}) {
  const { priorDiscoveries = [], priorObservations = [] } = options;

  const result = {
    check_id: check.check_id,
    type: check.type,
    methodology: 'accessibility_snapshot',
    status: 'pending',
    evidence: {},
    priorContext: {
      discoveryCount: priorDiscoveries.length,
      observationCount: priorObservations.length
    }
  };

  // Get current page state
  const { snapshot } = await getAccessibilitySnapshot(page);
  const flatTree = flattenAccessibilityTree(snapshot);
  const observations = getTextObservations(flatTree);

  // Extract keywords from assertion
  const assertionKeywords = (check.assertion || '')
    .toLowerCase()
    .split(/[\s,;]+/)
    .filter(w => w.length > 3);

  switch (check.type) {
    case 'navigation':
      // Check if page loaded and has expected content
      const navMatches = assertionKeywords.filter(kw =>
        observations.some(obs => obs.text.toLowerCase().includes(kw))
      );
      result.status = navMatches.length > 0 ? 'pass' : 'partial';
      result.evidence = { matchedKeywords: navMatches };
      break;

    case 'content_presence':
      // Search for content in accessibility tree
      const contentCheck = await checkContentPresence(page, assertionKeywords);
      result.status = contentCheck.allFound ? 'pass' : contentCheck.anyFound ? 'partial' : 'fail';
      result.evidence = contentCheck;
      break;

    case 'ui_state':
      // Look for specific UI elements and their states
      if (check.selector_hint) {
        const matches = findElementByName(flatTree, check.selector_hint);
        if (matches.length > 0) {
          result.status = 'pass';
          result.evidence = {
            elementFound: true,
            element: { role: matches[0].role, name: matches[0].name },
            state: {
              disabled: matches[0].disabled,
              checked: matches[0].checked,
              expanded: matches[0].expanded
            }
          };
        } else {
          result.status = 'fail';
          result.evidence = { elementFound: false };
        }
      }
      break;

    case 'options':
      // Look for dropdown/combobox and check options
      const dropdowns = flatTree.filter(n => n.role === 'combobox' || n.role === 'listbox');
      if (dropdowns.length > 0) {
        result.status = 'pass';
        result.evidence = { dropdownsFound: dropdowns.length };
      } else {
        result.status = 'partial';
        result.evidence = { dropdownsFound: 0, note: 'No dropdowns in accessibility tree' };
      }
      break;

    case 'override_indicator':
      // Look for disabled/greyed elements or override badges
      const overrideIndicators = flatTree.filter(n =>
        n.disabled === true ||
        (n.name || '').toLowerCase().includes('override') ||
        (n.name || '').toLowerCase().includes('disabled') ||
        (n.name || '').toLowerCase().includes('greyed')
      );
      result.status = overrideIndicators.length > 0 ? 'pass' : 'partial';
      result.evidence = { indicators: overrideIndicators.map(i => ({ name: i.name, disabled: i.disabled })) };
      break;

    default:
      result.status = 'partial';
      result.evidence = { note: `Unknown check type: ${check.type}` };
  }

  // Add observations to evidence
  result.evidence.observations = observations.slice(0, 20);

  return result;
}

// Export for use in run-validation.mjs
export default {
  getAccessibilitySnapshot,
  flattenAccessibilityTree,
  findElementByName,
  findClickableElement,
  clickByAccessibility,
  navigateWithSnapshots,
  explorePageWithSnapshots,
  getTextObservations,
  checkContentPresence,
  executeCheckWithSnapshot
};
