#!/usr/bin/env node
/**
 * flattened-plans-to-validator-input.mjs
 *
 * Deterministic adapter that converts flattened Playwright plan payloads
 * into the Interface Reality Validator agent's Primary Input Format.
 *
 * v2.0 - Fixes:
 *   1. Skip navigation checks (avoid duplication with navigate step)
 *   2. Stable screenshot names using plan_id/claim_key slug
 *   3. Preserve breadcrumbs and check.type in output
 *   4. Prefer non-navigation check for reported_behavior
 *   5. Safe toArrowNotation (handles non-strings)
 *   6. Extended Jira key extraction (TSSD, OS, FIN, etc.)
 *
 * Usage:
 *   node flattened-plans-to-validator-input.mjs \
 *     --in <input.json> \
 *     --out <output.json> \
 *     --base-url <baseUrl> \
 *     --login-required true|false \
 *     --screenshots-dir "<path>" \
 *     --reports-dir "<path>" \
 *     --evidence-file "<path>" \
 *     --summary-file "<path>" \
 *     [--required-role "<role>"]  # optional
 */

import { readFileSync, writeFileSync } from 'node:fs';

// ============================================================================
// CLI ARGUMENT PARSING
// ============================================================================

function parseArgs(argv) {
  const args = {};
  const requiredArgs = [
    'in',
    'out',
    'base-url',
    'login-required',
    'screenshots-dir',
    'reports-dir',
    'evidence-file',
    'summary-file'
  ];

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const value = argv[i + 1];
      if (value === undefined || value.startsWith('--')) {
        console.error(`ERROR: Missing value for argument --${key}`);
        process.exit(1);
      }
      args[key] = value;
      i++;
    }
  }

  // Validate required arguments
  for (const req of requiredArgs) {
    if (!(req in args)) {
      console.error(`ERROR: Missing required argument --${req}`);
      process.exit(1);
    }
  }

  // Parse login-required as boolean
  const loginReq = args['login-required'].toLowerCase();
  if (loginReq !== 'true' && loginReq !== 'false') {
    console.error(`ERROR: --login-required must be 'true' or 'false'`);
    process.exit(1);
  }
  args['login-required'] = loginReq === 'true';

  return args;
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Convert string to snake_case
 */
function toSnakeCase(str) {
  if (typeof str !== 'string') return 'unknown';
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .replace(/_+/g, '_');
}

/**
 * Convert string to kebab-case slug (safe for filenames)
 * Max 40 chars for filename safety
 */
function toSlug(str) {
  if (typeof str !== 'string' || !str.trim()) return 'unknown';
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')
    .slice(0, 40);
}

/**
 * Replace " > " with " → " for navigation arrows
 * FIX #5: Safe handling of non-string values
 */
function toArrowNotation(path) {
  if (typeof path !== 'string') {
    return 'unknown navigation path';
  }
  return path.replace(/ > /g, ' → ');
}

/**
 * Extract JIRA key from claim_key
 * FIX #6: Extended to support multiple project prefixes
 * Examples:
 *   "jira_tssd_2648_02" → "TSSD-2648"
 *   "jira_os_123_01" → "OS-123"
 *   "jira_fin_456_02" → "FIN-456"
 */
function extractJiraKey(claimKey) {
  if (!claimKey || typeof claimKey !== 'string') return '';

  // Match pattern: {prefix}_{PROJECT}_{NUMBER} where PROJECT is letters, NUMBER is digits
  // Common projects: TSSD, OS, FIN, HR, PAY, etc.
  const match = claimKey.match(/(?:jira_)?([a-z]+)_(\d+)/i);
  if (match) {
    const project = match[1].toUpperCase();
    const number = match[2];
    return `${project}-${number}`;
  }
  return '';
}

/**
 * Zero-pad a number to specified digits
 */
function zeroPad(num, digits = 2) {
  return String(num).padStart(digits, '0');
}

/**
 * Generate VAL-NNN issue ID
 */
function generateIssueId(index) {
  return `VAL-${zeroPad(index + 1, 3)}`;
}

/**
 * Check if a check is a navigation-type check
 */
function isNavigationCheck(check) {
  return check && check.type === 'navigation';
}

/**
 * Get the first non-navigation check from checks array
 */
function getFirstNonNavigationCheck(checks) {
  if (!Array.isArray(checks)) return null;
  return checks.find(check => !isNavigationCheck(check)) || null;
}

// ============================================================================
// MAIN TRANSFORMATION LOGIC
// ============================================================================

function transformPlansToValidatorInput(plans, config) {
  // Extract feature metadata from first plan
  const firstPlan = plans[0];
  const featureName = firstPlan.feature_name || 'unknown-feature';
  const cleanFeatureName = firstPlan.feature_slug || toSnakeCase(featureName);

  // Build navigation_paths_from_zendesk (only zendesk sources)
  const navigationPathsFromZendesk = {};
  const seenPaths = new Set();
  let pathCounter = 1;

  for (const plan of plans) {
    if (plan.source === 'zendesk' && plan.nav?.canonical) {
      const canonicalPath = toArrowNotation(plan.nav.canonical);
      if (!seenPaths.has(canonicalPath)) {
        seenPaths.add(canonicalPath);
        navigationPathsFromZendesk[`path_${zeroPad(pathCounter)}`] = canonicalPath;
        pathCounter++;
      }
    }
  }

  // Build issues_to_validate
  const issuesToValidate = plans.map((plan, index) => {
    const issueId = generateIssueId(index);
    const jiraKey = extractJiraKey(plan.claim_key);
    const checks = plan.checks || [];

    // FIX #2: Use plan_id or claim_key for stable screenshot naming
    const planSlug = toSlug(plan.plan_id || plan.claim_key || `plan-${index + 1}`);

    // Issue summary
    const issueSummary = plan.plan_id || plan.claim_key || `plan-${index + 1}`;

    // FIX #4: Prefer first non-navigation check for reported_behavior
    let reportedBehavior = plan.claim_key || '';
    const primaryCheck = getFirstNonNavigationCheck(checks);
    if (primaryCheck && primaryCheck.description) {
      reportedBehavior += `: ${primaryCheck.description}`;
    } else if (checks.length > 0 && checks[0].description) {
      // Fallback to first check if no non-navigation check exists
      reportedBehavior += `: ${checks[0].description}`;
    }

    // Observable indicators: deduplicated assertions from NON-navigation checks
    const observableIndicators = [];
    const seenAssertions = new Set();
    for (const check of checks) {
      // Skip navigation checks for observable indicators
      if (isNavigationCheck(check)) continue;
      if (check.assertion && !seenAssertions.has(check.assertion)) {
        seenAssertions.add(check.assertion);
        observableIndicators.push(check.assertion);
      }
    }

    // Priority: high for jira, medium otherwise
    const priority = plan.source === 'jira' ? 'high' : 'medium';

    // FIX #3: Preserve navigation breadcrumbs
    const navigationBreadcrumbs = Array.isArray(plan.nav?.breadcrumb_array)
      ? plan.nav.breadcrumb_array
      : [];

    // Build validation steps
    const validationSteps = [];
    let stepNum = 1;

    // Step 1: Navigation (with breadcrumbs metadata)
    const navTarget = toArrowNotation(plan.nav?.canonical);

    validationSteps.push({
      step: stepNum++,
      action: 'navigate',
      target: navTarget,
      // FIX #3: Include breadcrumbs in navigate step metadata
      metadata: {
        breadcrumbs: navigationBreadcrumbs
      }
    });

    // FIX #1: Steps for each NON-navigation check only
    for (const check of checks) {
      // Skip navigation checks - we already have the navigate step above
      if (isNavigationCheck(check)) continue;

      const target = check.selector_hint || check.description || 'unknown element';
      // FIX #2: Stable screenshot name using plan slug
      const screenshotName = `plan-${planSlug}-${check.check_id}.png`;

      validationSteps.push({
        step: stepNum++,
        action: 'observe',
        target: target,
        expected: check.assertion || '',
        screenshot: screenshotName,
        // FIX #3: Include check_type in step metadata
        metadata: {
          check_type: check.type || 'unknown',
          check_id: check.check_id
        }
      });
    }

    // Final capture step with stable screenshot name
    validationSteps.push({
      step: stepNum++,
      action: 'capture',
      target: `final state for ${issueId}`,
      screenshot: `plan-${planSlug}-final.png`
    });

    return {
      issue_id: issueId,
      jira_key: jiraKey,
      issue_summary: issueSummary,
      reported_behavior: reportedBehavior,
      validation_steps: validationSteps,
      observable_indicators: observableIndicators,
      priority: priority,
      // FIX #3: Preserve source metadata at issue level
      metadata: {
        source: plan.source || 'unknown',
        plan_id: plan.plan_id || null,
        claim_key: plan.claim_key || null,
        navigation_breadcrumbs: navigationBreadcrumbs
      }
    };
  });

  // Build final output object
  const output = {
    feature_name: featureName,
    clean_feature_name: cleanFeatureName,
    validation_purpose: 'UI validation from Jira/Zendesk plans',
    validation_timestamp: new Date().toISOString(),
    navigation_paths_from_zendesk: navigationPathsFromZendesk,
    issues_to_validate: issuesToValidate,
    configuration_areas_to_document: [],
    validation_config: {
      base_url: config.baseUrl,
      login_required: config.loginRequired,
      required_role: config.requiredRole,
      max_attempts_per_validation: 2,
      screenshot_on_each_step: true,
      timeout_ms: 30000,
      wait_after_navigation_ms: 2000
    },
    output_configuration: {
      screenshots_dir: config.screenshotsDir,
      reports_dir: config.reportsDir,
      evidence_file: config.evidenceFile,
      summary_file: config.summaryFile
    }
  };

  return output;
}

// ============================================================================
// MAIN ENTRY POINT
// ============================================================================

function main() {
  const args = parseArgs(process.argv);

  // Read input file
  let inputData;
  try {
    const rawInput = readFileSync(args['in'], 'utf-8');
    inputData = JSON.parse(rawInput);
  } catch (err) {
    console.error(`ERROR: Failed to read or parse input file: ${err.message}`);
    process.exit(1);
  }

  // Detect input shape and extract plans array
  let plans;
  if (Array.isArray(inputData)) {
    // Shape A: array of flattened plan objects
    plans = inputData;
  } else if (inputData && typeof inputData === 'object' && Array.isArray(inputData.plans)) {
    // Shape B: object with { feature_name, feature_slug, generated_at, plans: [...] }
    plans = inputData.plans;
    // Inject top-level feature_name/feature_slug into plans if not present
    for (const plan of plans) {
      if (!plan.feature_name && inputData.feature_name) {
        plan.feature_name = inputData.feature_name;
      }
      if (!plan.feature_slug && inputData.feature_slug) {
        plan.feature_slug = inputData.feature_slug;
      }
    }
  } else {
    console.error('ERROR: Input must be an array of plans or an object with a "plans" array');
    process.exit(1);
  }

  // Validate plans array
  if (plans.length === 0) {
    console.error('ERROR: Plans array is empty');
    process.exit(1);
  }

  // Build config from CLI args
  const config = {
    baseUrl: args['base-url'],
    loginRequired: args['login-required'],
    requiredRole: args['required-role'] || '',
    screenshotsDir: args['screenshots-dir'],
    reportsDir: args['reports-dir'],
    evidenceFile: args['evidence-file'],
    summaryFile: args['summary-file']
  };

  // Transform
  const output = transformPlansToValidatorInput(plans, config);

  // Write output file
  try {
    writeFileSync(args['out'], JSON.stringify(output, null, 2), 'utf-8');
  } catch (err) {
    console.error(`ERROR: Failed to write output file: ${err.message}`);
    process.exit(1);
  }

  console.log(`SUCCESS: Validator input written to ${args['out']}`);
  console.log(`  - Issues: ${output.issues_to_validate.length}`);
  console.log(`  - Navigation paths: ${Object.keys(output.navigation_paths_from_zendesk).length}`);
}

main();
