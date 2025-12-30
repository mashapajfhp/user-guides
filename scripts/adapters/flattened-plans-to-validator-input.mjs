#!/usr/bin/env node
/**
 * flattened-plans-to-validator-input.mjs
 *
 * Deterministic adapter that converts flattened Playwright plan payloads
 * into the Interface Reality Validator agent's Primary Input Format.
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
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .replace(/_+/g, '_');
}

/**
 * Replace " > " with " → " for navigation arrows
 */
function toArrowNotation(path) {
  return path.replace(/ > /g, ' → ');
}

/**
 * Extract JIRA key from claim_key (e.g., "jira_tssd_2648_02" → "TSSD-2648")
 */
function extractJiraKey(claimKey) {
  if (!claimKey) return '';
  const match = claimKey.match(/tssd_(\d+)/i);
  if (match) {
    return `TSSD-${match[1]}`;
  }
  return '';
}

/**
 * Zero-pad a number to 2 digits
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
    const valNum = zeroPad(index + 1);
    const jiraKey = extractJiraKey(plan.claim_key);
    const checks = plan.checks || [];

    // Issue summary
    const issueSummary = plan.plan_id || plan.claim_key || `plan-${index + 1}`;

    // Reported behavior: claim_key + first check description
    let reportedBehavior = plan.claim_key || '';
    if (checks.length > 0 && checks[0].description) {
      reportedBehavior += `: ${checks[0].description}`;
    }

    // Observable indicators: deduplicated assertions from checks
    const observableIndicators = [];
    const seenAssertions = new Set();
    for (const check of checks) {
      if (check.assertion && !seenAssertions.has(check.assertion)) {
        seenAssertions.add(check.assertion);
        observableIndicators.push(check.assertion);
      }
    }

    // Priority: high for jira, medium otherwise
    const priority = plan.source === 'jira' ? 'high' : 'medium';

    // Build validation steps
    const validationSteps = [];
    let stepNum = 1;

    // Step 1: Navigation
    const navTarget = plan.nav?.canonical
      ? toArrowNotation(plan.nav.canonical)
      : 'unknown navigation path';

    validationSteps.push({
      step: stepNum++,
      action: 'navigate',
      target: navTarget
    });

    // Steps for each check
    for (const check of checks) {
      const target = check.selector_hint || check.description || 'unknown element';
      const screenshotName = `claim-${valNum}-${check.check_id}.png`;

      validationSteps.push({
        step: stepNum++,
        action: 'observe',
        target: target,
        expected: check.assertion || '',
        screenshot: screenshotName
      });
    }

    // Final capture step
    validationSteps.push({
      step: stepNum++,
      action: 'capture',
      target: `final state for ${issueId}`,
      screenshot: `claim-${valNum}-final.png`
    });

    return {
      issue_id: issueId,
      jira_key: jiraKey,
      issue_summary: issueSummary,
      reported_behavior: reportedBehavior,
      validation_steps: validationSteps,
      observable_indicators: observableIndicators,
      priority: priority
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
}

main();
