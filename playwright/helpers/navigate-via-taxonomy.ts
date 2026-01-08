import type { Page } from '@playwright/test';
import type { SupabaseClient } from '@supabase/supabase-js';

/**
 * Navigation step returned from resolve_navigation_path RPC
 */
interface NavStep {
  level: number;
  label: string;
}

/**
 * Response from resolve_navigation_path RPC
 */
interface NavigationPathResult {
  canonical_path: string;
  breadcrumb_array: string[];
  menu_depth: number;
  leaf: boolean;
  url: string | null;
  nav_steps: NavStep[];
}

/**
 * Navigates through the Bayzat UI using the navigation taxonomy stored in Supabase.
 *
 * This helper resolves a canonical navigation path (e.g., "Company > Documents > Knowledge hub")
 * to a series of menu clicks, then executes each click in sequence.
 *
 * @param page - Playwright Page object
 * @param supabaseClient - Initialized Supabase client
 * @param canonicalPath - The canonical path to navigate to (e.g., "Company > Documents > Knowledge hub")
 * @param env - Environment to use for taxonomy lookup (default: 'prod')
 * @throws Error if the path cannot be resolved or any navigation step fails
 */
export async function navigateViaTaxonomy(
  page: Page,
  supabaseClient: SupabaseClient,
  canonicalPath: string,
  env: string = 'prod'
): Promise<NavigationPathResult> {
  console.debug(`[navigateViaTaxonomy] Starting navigation to: "${canonicalPath}" (env: ${env})`);

  // Step 1: Call the Supabase RPC to resolve the navigation path
  console.debug(`[navigateViaTaxonomy] Calling resolve_navigation_path RPC...`);

  const { data, error } = await supabaseClient.rpc('resolve_navigation_path', {
    p_canonical_path: canonicalPath,
    p_env: env,
  });

  if (error) {
    throw new Error(
      `[navigateViaTaxonomy] Failed to resolve navigation path "${canonicalPath}": ${error.message}`
    );
  }

  if (!data || data.length === 0) {
    throw new Error(
      `[navigateViaTaxonomy] No navigation data returned for path "${canonicalPath}"`
    );
  }

  const result: NavigationPathResult = data[0];

  console.debug(`[navigateViaTaxonomy] Resolved path:`, {
    canonical_path: result.canonical_path,
    menu_depth: result.menu_depth,
    leaf: result.leaf,
    url: result.url,
    steps: result.nav_steps.length,
  });

  // Step 2: Read nav_steps from the response
  const navSteps = result.nav_steps;

  if (!navSteps || navSteps.length === 0) {
    throw new Error(
      `[navigateViaTaxonomy] No navigation steps found for path "${canonicalPath}"`
    );
  }

  // Sort steps by level to ensure correct order
  const sortedSteps = [...navSteps].sort((a, b) => a.level - b.level);

  // Step 3: For each step, click the visible menu item with exact text match
  for (const step of sortedSteps) {
    console.debug(
      `[navigateViaTaxonomy] Step ${step.level}: Clicking menu item "${step.label}"...`
    );

    // Find the menu item by exact text match
    // Using getByRole for better accessibility and reliability
    const menuItem = page.getByRole('link', { name: step.label, exact: true })
      .or(page.getByRole('button', { name: step.label, exact: true }))
      .or(page.getByRole('menuitem', { name: step.label, exact: true }))
      .or(page.getByText(step.label, { exact: true }));

    // Wait for the menu item to be visible
    const visibleMenuItem = menuItem.first();

    try {
      await visibleMenuItem.waitFor({ state: 'visible', timeout: 10000 });
    } catch (e) {
      throw new Error(
        `[navigateViaTaxonomy] Menu item "${step.label}" not found or not visible at level ${step.level}. ` +
        `Path so far: ${sortedSteps.slice(0, step.level).map(s => s.label).join(' > ')}`
      );
    }

    // Click the menu item
    await visibleMenuItem.click();

    console.debug(
      `[navigateViaTaxonomy] Step ${step.level}: Clicked "${step.label}" successfully`
    );

    // Wait for submenu to appear before continuing (if not the last step)
    if (step.level < sortedSteps.length - 1) {
      const nextStep = sortedSteps[step.level + 1];
      console.debug(
        `[navigateViaTaxonomy] Waiting for next menu item "${nextStep.label}" to appear...`
      );

      const nextMenuItem = page.getByRole('link', { name: nextStep.label, exact: true })
        .or(page.getByRole('button', { name: nextStep.label, exact: true }))
        .or(page.getByRole('menuitem', { name: nextStep.label, exact: true }))
        .or(page.getByText(nextStep.label, { exact: true }));

      try {
        await nextMenuItem.first().waitFor({ state: 'visible', timeout: 10000 });
        console.debug(
          `[navigateViaTaxonomy] Next menu item "${nextStep.label}" is now visible`
        );
      } catch (e) {
        throw new Error(
          `[navigateViaTaxonomy] Submenu did not appear after clicking "${step.label}". ` +
          `Expected to find "${nextStep.label}" but it was not visible.`
        );
      }
    }
  }

  // Step 4: If leaf === true, assert page URL contains the resolved url
  if (result.leaf && result.url) {
    console.debug(
      `[navigateViaTaxonomy] Leaf node reached. Verifying URL contains "${result.url}"...`
    );

    // Wait for navigation to complete
    await page.waitForLoadState('networkidle');

    const currentUrl = page.url();

    if (!currentUrl.includes(result.url)) {
      throw new Error(
        `[navigateViaTaxonomy] URL verification failed. ` +
        `Expected URL to contain "${result.url}" but got "${currentUrl}"`
      );
    }

    console.debug(
      `[navigateViaTaxonomy] URL verification passed. Current URL: ${currentUrl}`
    );
  }

  console.debug(
    `[navigateViaTaxonomy] Navigation complete: "${canonicalPath}"`
  );

  return result;
}

/**
 * Type export for external use
 */
export type { NavigationPathResult, NavStep };


// =============================================================================
// USAGE EXAMPLE (commented out)
// =============================================================================
/*
import { test, expect } from '@playwright/test';
import { createClient } from '@supabase/supabase-js';
import { navigateViaTaxonomy } from './helpers/navigate-via-taxonomy';

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

test('Navigate to Knowledge Hub via taxonomy', async ({ page }) => {
  // First, navigate to the app and login
  await page.goto('https://app.bayzat.com');
  // ... perform login ...

  // Use the taxonomy helper to navigate
  const result = await navigateViaTaxonomy(
    page,
    supabase,
    'Company > Documents > Knowledge hub',
    'prod'
  );

  // The helper automatically verifies the URL for leaf nodes
  // You can also do additional assertions
  expect(result.leaf).toBe(true);
  expect(result.url).toContain('knowledge-hub');

  // Access the nav_steps if needed
  console.log('Navigation steps taken:', result.nav_steps);
});

test('Navigate to Payroll Settings', async ({ page }) => {
  await page.goto('https://app.bayzat.com');
  // ... perform login ...

  const result = await navigateViaTaxonomy(
    page,
    supabase,
    'Settings > Payroll',
    'prod'
  );

  // Verify we're on the payroll settings page
  await expect(page.getByRole('heading', { name: 'Payroll settings' })).toBeVisible();
});
*/
