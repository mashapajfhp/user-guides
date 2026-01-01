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
 *
 * NOTE: Playwright's built-in accessibility.snapshot() returns minimal data.
 * We enhance it by querying the DOM directly for richer element information.
 */
export async function getAccessibilitySnapshot(page) {
  try {
    // Try accessibility snapshot first
    const accessibilitySnapshot = await page.accessibility.snapshot({ interestingOnly: false });

    // Also get a richer DOM-based snapshot for better element discovery
    const domElements = await page.evaluate(() => {
      const elements = [];
      const interactiveSelectors = [
        'a[href]',
        'button',
        '[role="button"]',
        '[role="link"]',
        '[role="menuitem"]',
        '[role="tab"]',
        '[role="checkbox"]',
        '[role="switch"]',
        '[role="combobox"]',
        '[role="listbox"]',
        '[role="option"]',
        'input',
        'select',
        'textarea',
        '[onclick]',
        '[tabindex]',
        'h1, h2, h3, h4, h5, h6',
        '[aria-label]',
        '[aria-expanded]',
        '[data-testid]'
      ];

      // Helper function to get visible text from an element
      const getVisibleText = (el) => {
        // Priority 1: aria-label (most reliable for interactive elements)
        const ariaLabel = el.getAttribute('aria-label');
        if (ariaLabel && ariaLabel.trim()) return ariaLabel.trim();

        // Priority 2: title attribute
        const title = el.getAttribute('title');
        if (title && title.trim()) return title.trim();

        // Priority 3: innerText (respects visibility, excludes scripts/styles)
        try {
          const innerText = el.innerText?.trim();
          if (innerText && innerText.length > 0 && innerText.length < 200) {
            // Clean up excess whitespace
            return innerText.replace(/\s+/g, ' ').trim();
          }
        } catch (e) {}

        // Priority 4: textContent with cleanup (for elements with no innerText)
        const textContent = el.textContent?.trim();
        if (textContent && textContent.length > 0 && textContent.length < 200) {
          return textContent.replace(/\s+/g, ' ').trim();
        }

        // Priority 5: value attribute (for inputs)
        if (el.value && el.tagName === 'INPUT') return el.value;

        // Priority 6: placeholder
        const placeholder = el.getAttribute('placeholder');
        if (placeholder) return placeholder;

        // Priority 7: data-testid (sometimes contains readable names)
        const testId = el.getAttribute('data-testid');
        if (testId) return testId.replace(/[-_]/g, ' ');

        return '';
      };

      const allElements = document.querySelectorAll(interactiveSelectors.join(', '));

      allElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return; // Skip hidden elements

        const name = getVisibleText(el);
        const role = el.getAttribute('role') || el.tagName.toLowerCase();

        // Only include elements with actual names
        if (!name) return;

        elements.push({
          ref: `dom${index}`,
          role: role,
          name: name,
          tagName: el.tagName.toLowerCase(),
          href: el.getAttribute('href'),
          disabled: el.disabled || el.getAttribute('aria-disabled') === 'true',
          expanded: el.getAttribute('aria-expanded'),
          checked: el.checked || el.getAttribute('aria-checked') === 'true',
          selected: el.getAttribute('aria-selected') === 'true',
          visible: rect.width > 0 && rect.height > 0,
          rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height }
        });
      });

      return elements;
    });

    // Merge accessibility and DOM data
    return {
      success: true,
      snapshot: accessibilitySnapshot,
      domElements: domElements,
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
 * Uses BOTH accessibility tree AND DOM elements for better coverage
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
      // Get fresh snapshot with both accessibility tree and DOM elements
      const { snapshot, domElements } = await getAccessibilitySnapshot(page);
      const flatTree = flattenAccessibilityTree(snapshot);

      // Find the element in accessibility tree first
      let element = null;
      let allMatches = [];

      if (role) {
        allMatches = findElementByName(flatTree, elementName, { role });
        element = allMatches[0];
      } else {
        const searchResult = findClickableElement(flatTree, elementName);
        element = searchResult.element;
        allMatches = searchResult.allMatches;
      }

      // If accessibility tree failed, search DOM elements
      if (!element && domElements && domElements.length > 0) {
        const searchLower = elementName.toLowerCase();
        const domMatches = domElements.filter(el => {
          const nameLower = (el.name || '').toLowerCase();
          if (role && el.role !== role && el.tagName !== role) return false;
          return nameLower === searchLower ||
                 nameLower.includes(searchLower) ||
                 searchLower.includes(nameLower);
        });

        if (domMatches.length > 0) {
          // Sort by relevance
          domMatches.sort((a, b) => {
            const aName = (a.name || '').toLowerCase();
            const bName = (b.name || '').toLowerCase();
            if (aName === searchLower && bName !== searchLower) return -1;
            if (bName === searchLower && aName !== searchLower) return 1;
            return aName.length - bName.length;
          });

          element = domMatches[0];
          allMatches = domMatches;
        }
      }

      result.attempts.push({
        attempt: attempt + 1,
        foundMatches: allMatches?.length || 0,
        selectedElement: element ? { ref: element.ref, role: element.role, name: element.name, tagName: element.tagName } : null,
        source: element ? (element.tagName ? 'dom' : 'accessibility') : 'none'
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
 * Handles both accessibility tree elements and DOM elements
 */
async function clickElementByAccessibleProperties(page, element, timeout = 5000) {
  const elementRole = element.role || element.tagName;
  const elementName = element.name;

  // Escape special characters in element name for selectors
  const escapedName = elementName.replace(/"/g, '\\"');

  const strategies = [
    // Strategy 1: getByRole with exact name
    async () => {
      // Map tagName to Playwright role if needed
      const roleMap = { 'a': 'link', 'button': 'button', 'h1': 'heading', 'h2': 'heading', 'h3': 'heading', 'h4': 'heading' };
      const role = roleMap[elementRole] || elementRole;

      if (role && ['link', 'button', 'heading', 'menuitem', 'tab', 'checkbox', 'switch'].includes(role)) {
        const locator = page.getByRole(role, { name: elementName, exact: true });
        if (await locator.count() > 0) {
          await locator.first().click({ timeout });
          return { success: true, method: `getByRole(${role}, exact)` };
        }
      }
      return null;
    },

    // Strategy 2: getByRole with fuzzy name
    async () => {
      const roleMap = { 'a': 'link', 'button': 'button', 'h1': 'heading', 'h2': 'heading', 'h3': 'heading', 'h4': 'heading' };
      const role = roleMap[elementRole] || elementRole;

      if (role && ['link', 'button', 'heading', 'menuitem', 'tab', 'checkbox', 'switch'].includes(role)) {
        const locator = page.getByRole(role, { name: elementName, exact: false });
        if (await locator.count() > 0) {
          await locator.first().click({ timeout });
          return { success: true, method: `getByRole(${role}, fuzzy)` };
        }
      }
      return null;
    },

    // Strategy 3: ARIA label
    async () => {
      const locator = page.locator(`[aria-label="${escapedName}"]`);
      if (await locator.count() > 0) {
        await locator.first().click({ timeout });
        return { success: true, method: 'aria-label' };
      }
      return null;
    },

    // Strategy 4: Direct tag with text (for DOM elements)
    async () => {
      if (element.tagName) {
        const locator = page.locator(`${element.tagName}:has-text("${escapedName}")`);
        if (await locator.count() > 0) {
          await locator.first().click({ timeout });
          return { success: true, method: `${element.tagName}:has-text` };
        }
      }
      return null;
    },

    // Strategy 5: Text content
    async () => {
      const locator = page.getByText(elementName, { exact: false });
      if (await locator.count() > 0) {
        await locator.first().click({ timeout });
        return { success: true, method: 'getByText' };
      }
      return null;
    },

    // Strategy 6: Role-specific selectors
    async () => {
      const roleToSelector = {
        'button': 'button',
        'link': 'a',
        'a': 'a',
        'menuitem': '[role="menuitem"]',
        'tab': '[role="tab"]',
        'heading': 'h1, h2, h3, h4, h5, h6',
        'generic': 'div, span'
      };

      const selector = roleToSelector[elementRole];
      if (selector) {
        const locator = page.locator(`${selector}:has-text("${escapedName}")`);
        if (await locator.count() > 0) {
          await locator.first().click({ timeout });
          return { success: true, method: `selector:${selector}` };
        }
      }
      return null;
    },

    // Strategy 7: Href-based click (for links with href)
    async () => {
      if (element.href) {
        const locator = page.locator(`a[href="${element.href}"]`);
        if (await locator.count() > 0) {
          await locator.first().click({ timeout });
          return { success: true, method: 'href_selector' };
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
 *
 * SMART NAVIGATION FEATURES:
 * - Treats breadcrumb paths as GUIDANCE, not strict paths
 * - Automatically handles sidebar menus that open submenus
 * - Searches both sidebar and submenu areas for target items
 * - Falls back to link/URL-based navigation when direct click fails
 * - Skips items that are already visible (e.g., already on target page)
 */
export async function navigateWithSnapshots(page, breadcrumbs, options = {}) {
  const { timeout = 5000, screenshotsDir, planId } = options;

  const result = {
    methodology: 'accessibility_snapshot_navigation',
    path: breadcrumbs.join(' > '),
    breadcrumbs,
    steps: [],
    status: 'pending',
    current_url: page.url(),
    adaptations: [] // Track smart navigation decisions
  };

  for (let i = 0; i < breadcrumbs.length; i++) {
    const item = breadcrumbs[i];
    const stepResult = {
      index: i,
      item,
      status: 'pending',
      strategy: 'direct',
      urlBefore: page.url()  // Capture URL before navigation attempt
    };

    console.log(`   [${i + 1}/${breadcrumbs.length}] Navigating: "${item}"`);

    // RETRY WRAPPER: Allow multiple attempts to find element after DOM changes
    // This handles cases where clicking a menu item opens a submenu that needs time to render
    const MAX_RETRIES = 3;
    let foundElement = false;
    let lastClickResult = null;

    for (let attempt = 0; attempt < MAX_RETRIES && !foundElement; attempt++) {
      if (attempt > 0) {
        console.log(`      ⟳ Retry ${attempt + 1}/${MAX_RETRIES} after DOM rescan...`);
        await page.waitForTimeout(1000); // Wait for submenu to animate
      }

      // STRATEGY 1: Direct click by accessibility name
      let clickResult = await clickByAccessibility(page, item, { timeout });
      lastClickResult = clickResult;
      stepResult.clickResult = clickResult;

      if (clickResult.success) {
        stepResult.status = 'pass';
        stepResult.method = clickResult.method;
        stepResult.strategy = 'direct_accessibility';
        console.log(`      ✓ Clicked via: ${clickResult.method}`);

        // Smart wait: check if URL changed (page navigation) vs submenu toggle
        const urlBeforeWait = stepResult.urlBefore;
        await page.waitForTimeout(200); // Brief wait for submenu animation
        const urlAfterClick = page.url();

        if (urlAfterClick !== urlBeforeWait) {
          // URL changed = real navigation, wait for page load
          console.log(`      📄 Page navigation detected, waiting for load...`);
          await page.waitForTimeout(1000);
          try {
            await page.waitForLoadState('networkidle', { timeout: 8000 });
          } catch {}
        } else {
          // URL same = likely submenu toggle, proceed quickly
          console.log(`      📂 Submenu detected, proceeding immediately...`);

          // CRITICAL: Hover over the next item to keep submenu alive
          // Submenus often auto-close unless mouse is hovering over them
          if (i + 1 < breadcrumbs.length) {
            const nextItem = breadcrumbs[i + 1];
            console.log(`      🖱️ Hovering on next target "${nextItem}" to keep submenu alive...`);
            try {
              // Try to hover on the next menu item to keep submenu open
              const hoverTargets = [
                page.getByRole('link', { name: nextItem, exact: true }),
                page.getByRole('link', { name: nextItem, exact: false }).first(),
                page.getByRole('menuitem', { name: nextItem, exact: false }).first(),
                page.locator(`a:has-text("${nextItem}")`).first(),
                page.getByText(nextItem, { exact: false }).first()
              ];

              for (const target of hoverTargets) {
                try {
                  await target.hover({ timeout: 1500 });
                  console.log(`      ✓ Hovering on "${nextItem}" - submenu kept alive`);
                  break;
                } catch (e) {
                  // Try next hover target
                }
              }
            } catch (e) {
              // Hover failed, but continue anyway
              console.log(`      ⚠️ Could not hover on next target, continuing...`);
            }
          }
        }

        stepResult.urlAfter = page.url();
        result.steps.push(stepResult);
        foundElement = true;
        break;
      }

      // STRATEGY 2: Look for link with exact name in sidebar/submenu
      // Pass navigation context (previously clicked items) for context-aware link selection
      console.log(`      → Trying link strategy...`);
      const navContext = breadcrumbs.slice(0, i);  // Items already navigated
      const linkResult = await tryLinkNavigation(page, item, timeout, navContext);
      if (linkResult.success) {
        stepResult.status = 'pass';
        stepResult.method = linkResult.method;
        stepResult.strategy = 'link_navigation';
        stepResult.url = linkResult.url;
        console.log(`      ✓ Navigated via link: ${linkResult.url}`);

        // Smart wait: links usually cause navigation, but check to be sure
        await page.waitForTimeout(200);
        const urlAfterLink = page.url();
        if (urlAfterLink !== stepResult.urlBefore) {
          await page.waitForTimeout(800);
          try { await page.waitForLoadState('networkidle', { timeout: 5000 }); } catch {}
        }

        stepResult.urlAfter = page.url();
        result.adaptations.push({ step: i, from: 'direct_click', to: 'link_navigation', item });
        result.steps.push(stepResult);
        foundElement = true;
        break;
      }

      // STRATEGY 3: Search for partial match (e.g., "Payroll settings" for "Payroll")
      console.log(`      → Trying fuzzy match strategy...`);
      const fuzzyResult = await tryFuzzyNavigation(page, item, timeout);
      if (fuzzyResult.success) {
        stepResult.status = 'pass';
        stepResult.method = fuzzyResult.method;
        stepResult.strategy = 'fuzzy_match';
        stepResult.actualTarget = fuzzyResult.actualTarget;
        console.log(`      ✓ Fuzzy matched: "${fuzzyResult.actualTarget}"`);

        // Smart wait for fuzzy match
        await page.waitForTimeout(200);
        const urlAfterFuzzy = page.url();
        if (urlAfterFuzzy !== stepResult.urlBefore) {
          await page.waitForTimeout(800);
          try { await page.waitForLoadState('networkidle', { timeout: 5000 }); } catch {}
        }

        stepResult.urlAfter = page.url();
        result.adaptations.push({ step: i, from: 'direct_click', to: 'fuzzy_match', item, matched: fuzzyResult.actualTarget });
        result.steps.push(stepResult);
        foundElement = true;
        break;
      }

      // STRATEGY 4: Check if we're already on the target page (skip navigation)
      console.log(`      → Checking if already on target...`);
      const alreadyOnTarget = await checkIfAlreadyOnTarget(page, item);
      if (alreadyOnTarget.isOnTarget) {
        stepResult.status = 'pass';
        stepResult.strategy = 'already_on_target';
        stepResult.reason = `Page already shows "${item}" content`;
        console.log(`      ✓ Already on target: ${alreadyOnTarget.evidence}`);
        result.adaptations.push({ step: i, strategy: 'skip_already_present', item });
        result.steps.push(stepResult);
        foundElement = true;
        break;
      }

      // STRATEGY 5: Direct text-based fallback (last resort)
      console.log(`      → Trying direct text click...`);
      try {
        // Try clicking any element containing the text
        const textLocator = page.getByText(item, { exact: false });
        if (await textLocator.count() > 0) {
          await textLocator.first().click({ timeout });
          stepResult.status = 'pass';
          stepResult.strategy = 'direct_text';
          stepResult.method = 'getByText_fallback';
          console.log(`      ✓ Clicked via direct text search`);

          // Smart wait for direct text click
          await page.waitForTimeout(200);
          const urlAfterText = page.url();
          if (urlAfterText !== stepResult.urlBefore) {
            await page.waitForTimeout(800);
            try { await page.waitForLoadState('networkidle', { timeout: 5000 }); } catch {}
          }

          stepResult.urlAfter = page.url();
          result.adaptations.push({ step: i, from: 'all_failed', to: 'direct_text', item });
          result.steps.push(stepResult);
          foundElement = true;
          break;
        }
      } catch (e) {
        // Continue to next retry
      }
    } // End retry loop

    // If all retries failed, mark as not found
    if (!foundElement) {
      stepResult.status = 'not_found';
      stepResult.error = lastClickResult?.error;
      stepResult.attempts = lastClickResult?.attempts;
      console.log(`      ✗ Not found after all strategies and retries`);

      // For items beyond the first 2, treat as optional
      if (i >= 2) {
        stepResult.status = 'skipped';
        stepResult.reason = 'Non-critical navigation item, may be page title or section name';
      }

      result.steps.push(stepResult);
    }
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
 * Try to navigate via link element (for sidebar/submenu items)
 * PRIORITY: Use Playwright's native getByRole FIRST, then fall back to snapshot parsing
 * This is more reliable because Playwright's accessibility engine handles dynamic content better
 *
 * CONTEXT-AWARE SELECTION:
 * When multiple matching links exist, prefer ones whose href contains the navigation context.
 * For example, when navigating "Settings > Payroll", prefer "/settings/payroll" over main sidebar "/payroll"
 */
async function tryLinkNavigation(page, itemName, timeout = 5000, navigationContext = []) {
  try {
    // Build context hints from prior navigation (e.g., ["settings"] from clicking "Settings")
    const contextHints = navigationContext.map(c => c.toLowerCase().replace(/\s+/g, '-'));

    // ============================================
    // STRATEGY 0: Context-aware href selection (MOST RELIABLE for submenus)
    // When we have navigation context (e.g., after clicking Settings),
    // find ALL matching links and prefer ones with context-relevant hrefs
    // ============================================
    if (contextHints.length > 0) {
      try {
        const allLinks = await page.locator(`a:has-text("${itemName}")`).all();
        if (allLinks.length > 1) {
          console.log(`        📋 Found ${allLinks.length} matching links, checking context...`);

          // Score each link by how many context hints match its href
          const scoredLinks = [];
          for (const link of allLinks) {
            try {
              const href = await link.getAttribute('href') || '';
              const hrefLower = href.toLowerCase();
              let score = 0;

              // Score based on context hints in href
              for (const hint of contextHints) {
                if (hrefLower.includes(hint)) score += 10;
                if (hrefLower.includes(`/${hint}/`)) score += 5; // Bonus for path segment match
              }

              // Bonus if href contains the item name itself (suggests dedicated page)
              const itemSlug = itemName.toLowerCase().replace(/\s+/g, '-');
              if (hrefLower.includes(itemSlug)) score += 3;

              scoredLinks.push({ link, href, score });
            } catch (e) {
              scoredLinks.push({ link, href: '', score: 0 });
            }
          }

          // Sort by score (highest first) and pick best match
          scoredLinks.sort((a, b) => b.score - a.score);

          if (scoredLinks[0].score > 0) {
            console.log(`        ✓ Selected context-aware link: "${scoredLinks[0].href}" (score: ${scoredLinks[0].score})`);
            await scoredLinks[0].link.click({ timeout });
            return { success: true, method: 'context_aware_href', url: scoredLinks[0].href };
          }
        }
      } catch (e) {
        // Context-aware selection failed, continue to other strategies
      }
    }

    // ============================================
    // STRATEGY 1: Direct Playwright getByRole (MOST RELIABLE)
    // FAST PATH: Try to click directly without count check (faster for ephemeral menus)
    // ============================================

    // Try exact link match - click directly, no count check
    try {
      await page.getByRole('link', { name: itemName, exact: true }).click({ timeout: 2000 });
      console.log(`        ✓ Found link via getByRole exact: "${itemName}"`);
      return { success: true, method: 'getByRole(link, exact)', url: itemName };
    } catch (e) {
      // Not found with exact match, try fuzzy
    }

    // Try fuzzy link match
    try {
      await page.getByRole('link', { name: itemName, exact: false }).first().click({ timeout: 2000 });
      console.log(`        ✓ Found link via getByRole fuzzy: "${itemName}"`);
      return { success: true, method: 'getByRole(link, fuzzy)', url: itemName };
    } catch (e) {
      // Not found with fuzzy match
    }

    // Try menuitem role (some menus use this)
    try {
      await page.getByRole('menuitem', { name: itemName, exact: false }).first().click({ timeout: 2000 });
      console.log(`        ✓ Found menuitem via getByRole: "${itemName}"`);
      return { success: true, method: 'getByRole(menuitem)', url: itemName };
    } catch (e) {
      // Not found as menuitem
    }

    // Try a:has-text selector (catches links where text is in child elements)
    try {
      await page.locator(`a:has-text("${itemName}")`).first().click({ timeout: 2000 });
      console.log(`        ✓ Found link via a:has-text: "${itemName}"`);
      return { success: true, method: 'a:has-text(direct)', url: itemName };
    } catch (e) {
      // Not found via a:has-text
    }

    // ============================================
    // STRATEGY 2: Fall back to custom snapshot parsing (for edge cases)
    // ============================================
    const { snapshot, domElements } = await getAccessibilitySnapshot(page);
    const flatTree = flattenAccessibilityTree(snapshot);
    const searchLower = itemName.toLowerCase();

    // Search accessibility tree first - filter out empty names
    let links = flatTree.filter(node => {
      const name = node.name || '';
      if (!name.trim()) return false;
      return node.role === 'link' && name.toLowerCase().includes(searchLower);
    });

    // Also search DOM elements for links (often has better text content)
    const domLinks = (domElements || []).filter(el => {
      const name = el.name || '';
      if (!name.trim()) return false;
      return (el.tagName === 'a' || el.role === 'link') && name.toLowerCase().includes(searchLower);
    });

    // Merge results, prioritizing DOM links (they have actual text)
    const allLinks = [...domLinks, ...links];

    if (allLinks.length === 0) {
      return { success: false, error: 'No matching links found via snapshot' };
    }

    // Prefer exact matches
    const exactMatch = allLinks.find(l =>
      (l.name || '').toLowerCase().trim() === searchLower.trim()
    );
    const targetLink = exactMatch || allLinks[0];

    console.log(`        Found ${allLinks.length} link(s) in snapshot, target: "${targetLink.name}"`);

    // Try CSS selector with href (for DOM elements with href)
    if (targetLink.href) {
      const hrefLocator = page.locator(`a[href="${targetLink.href}"]`);
      if (await hrefLocator.count() > 0) {
        await hrefLocator.first().click({ timeout });
        return { success: true, method: 'href_selector', url: targetLink.href };
      }
    }

    // Text-based locator as final fallback
    const textLocator = page.locator(`a:has-text("${targetLink.name}")`);
    if (await textLocator.count() > 0) {
      await textLocator.first().click({ timeout });
      return { success: true, method: 'a:has-text(snapshot)', url: targetLink.name };
    }

    return { success: false, error: 'Link found in snapshot but could not click' };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

/**
 * Try fuzzy navigation - look for elements containing the target name
 * PRIORITY: Use Playwright's native locators FIRST, then fall back to snapshot parsing
 */
async function tryFuzzyNavigation(page, itemName, timeout = 5000) {
  try {
    const searchLower = itemName.toLowerCase();

    // ============================================
    // STRATEGY 1: Direct Playwright locators (MOST RELIABLE)
    // Try common variations of the name in links/buttons
    // ============================================

    // Common variations to try
    const variations = [
      itemName,                                    // Exact
      `${itemName} settings`,                      // "Payroll settings"
      `${itemName} configuration`,                 // "Payroll configuration"
      `${itemName} config`,                        // "Payroll config"
    ];

    for (const variation of variations) {
      // Try link first
      const linkLoc = page.getByRole('link', { name: variation, exact: false });
      if (await linkLoc.count() > 0) {
        console.log(`        ✓ Found fuzzy link: "${variation}"`);
        await linkLoc.first().click({ timeout });
        return { success: true, method: 'fuzzy_link_native', actualTarget: variation };
      }

      // Try button
      const btnLoc = page.getByRole('button', { name: variation, exact: false });
      if (await btnLoc.count() > 0) {
        console.log(`        ✓ Found fuzzy button: "${variation}"`);
        await btnLoc.first().click({ timeout });
        return { success: true, method: 'fuzzy_button_native', actualTarget: variation };
      }

      // Try menuitem
      const menuLoc = page.getByRole('menuitem', { name: variation, exact: false });
      if (await menuLoc.count() > 0) {
        console.log(`        ✓ Found fuzzy menuitem: "${variation}"`);
        await menuLoc.first().click({ timeout });
        return { success: true, method: 'fuzzy_menuitem_native', actualTarget: variation };
      }
    }

    // ============================================
    // STRATEGY 2: Fall back to custom snapshot parsing
    // ============================================
    const { snapshot, domElements } = await getAccessibilitySnapshot(page);
    const flatTree = flattenAccessibilityTree(snapshot);

    // Find any clickable elements containing our target from accessibility tree
    // Filter out elements with empty names
    const accCandidates = flatTree.filter(node => {
      const name = node.name || '';
      if (!name.trim()) return false; // Skip empty names
      const nameLower = name.toLowerCase();
      const clickableRoles = ['link', 'button', 'menuitem', 'tab', 'generic'];
      return clickableRoles.includes(node.role) &&
             (nameLower.includes(searchLower) || searchLower.includes(nameLower));
    });

    // Also search DOM elements (often has better text content)
    const domCandidates = (domElements || []).filter(el => {
      const name = el.name || '';
      if (!name.trim()) return false;
      const nameLower = name.toLowerCase();
      const clickableTags = ['a', 'button'];
      const clickableRoles = ['link', 'button', 'menuitem', 'tab'];
      return (clickableTags.includes(el.tagName) || clickableRoles.includes(el.role)) &&
             (nameLower.includes(searchLower) || searchLower.includes(nameLower));
    });

    // Merge and deduplicate, prioritizing DOM candidates
    const candidates = [...domCandidates, ...accCandidates];

    if (candidates.length === 0) {
      return { success: false, error: 'No fuzzy matches found' };
    }

    // Sort by relevance: exact match > starts with > shorter names
    candidates.sort((a, b) => {
      const aName = (a.name || '').toLowerCase();
      const bName = (b.name || '').toLowerCase();

      if (aName === searchLower && bName !== searchLower) return -1;
      if (bName === searchLower && aName !== searchLower) return 1;
      if (aName.startsWith(searchLower) && !bName.startsWith(searchLower)) return -1;
      if (bName.startsWith(searchLower) && !aName.startsWith(searchLower)) return 1;
      return aName.length - bName.length;
    });

    console.log(`        Found ${candidates.length} fuzzy candidate(s) in snapshot`);

    for (const candidate of candidates.slice(0, 5)) {
      try {
        const candidateName = candidate.name;
        const candidateTag = candidate.tagName || '';
        const candidateRole = candidate.role || '';

        console.log(`          Trying: "${candidateName}" (${candidateTag || candidateRole})`);

        if (candidateTag === 'a' || candidateRole === 'link') {
          const loc = page.getByRole('link', { name: candidateName, exact: false });
          if (await loc.count() > 0) {
            await loc.first().click({ timeout });
            return { success: true, method: 'fuzzy_link_snapshot', actualTarget: candidateName };
          }
          const textLoc = page.locator(`a:has-text("${candidateName}")`);
          if (await textLoc.count() > 0) {
            await textLoc.first().click({ timeout });
            return { success: true, method: 'fuzzy_a_text_snapshot', actualTarget: candidateName };
          }
        }

        if (candidateTag === 'button' || candidateRole === 'button') {
          const loc = page.getByRole('button', { name: candidateName, exact: false });
          if (await loc.count() > 0) {
            await loc.first().click({ timeout });
            return { success: true, method: 'fuzzy_button_snapshot', actualTarget: candidateName };
          }
        }

        const textLoc = page.getByText(candidateName, { exact: false });
        if (await textLoc.count() > 0) {
          await textLoc.first().click({ timeout });
          return { success: true, method: 'fuzzy_text_snapshot', actualTarget: candidateName };
        }
      } catch (e) {
        // Continue to next candidate
      }
    }

    return { success: false, error: 'All fuzzy candidates failed' };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

/**
 * Check if we're already on the target page/section
 * Uses BOTH accessibility tree AND DOM elements
 */
async function checkIfAlreadyOnTarget(page, targetName) {
  try {
    const { snapshot, domElements, url } = await getAccessibilitySnapshot(page);
    const flatTree = flattenAccessibilityTree(snapshot);
    const searchLower = targetName.toLowerCase();

    // Check if URL contains target (try both original and hyphenated)
    const urlLower = url.toLowerCase();
    if (urlLower.includes(searchLower.replace(/\s+/g, '-')) ||
        urlLower.includes(searchLower.replace(/\s+/g, '_')) ||
        urlLower.includes(searchLower.replace(/\s+/g, ''))) {
      return { isOnTarget: true, evidence: `URL contains "${targetName}"` };
    }

    // Check accessibility tree for headings
    const accHeadings = flatTree.filter(n =>
      n.role === 'heading' &&
      (n.name || '').toLowerCase().includes(searchLower)
    );

    if (accHeadings.length > 0) {
      return { isOnTarget: true, evidence: `Heading found: "${accHeadings[0].name}"` };
    }

    // Check DOM elements for headings (often has better text content)
    const domHeadings = (domElements || []).filter(el =>
      ['h1', 'h2', 'h3', 'h4'].includes(el.tagName) &&
      (el.name || '').toLowerCase().includes(searchLower)
    );

    if (domHeadings.length > 0) {
      return { isOnTarget: true, evidence: `DOM heading found: "${domHeadings[0].name}"` };
    }

    // Check for strong text indicators from accessibility tree
    const accIndicators = flatTree.filter(n =>
      (n.name || '').toLowerCase() === searchLower ||
      (n.name || '').toLowerCase() === `${searchLower} settings` ||
      (n.name || '').toLowerCase().startsWith(searchLower)
    );

    if (accIndicators.length > 0) {
      return { isOnTarget: true, evidence: `Text indicator: "${accIndicators[0].name}"` };
    }

    // Check DOM elements for text indicators
    const domIndicators = (domElements || []).filter(el =>
      (el.name || '').toLowerCase() === searchLower ||
      (el.name || '').toLowerCase() === `${searchLower} settings` ||
      (el.name || '').toLowerCase().startsWith(`${searchLower} `)
    );

    if (domIndicators.length > 0) {
      return { isOnTarget: true, evidence: `DOM indicator: "${domIndicators[0].name}"` };
    }

    return { isOnTarget: false };
  } catch (error) {
    return { isOnTarget: false, error: error.message };
  }
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
