import { chromium } from 'playwright';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const VALIDATION_DIR = '/Users/mashapa/validation-runner/_work/user-guides/user-guides/daily-wage-calculator/v6/validation';
const SCREENSHOTS_DIR = join(VALIDATION_DIR, 'screenshots');
const REQUEST_FILE = join(VALIDATION_DIR, 'request.json');
const RESULT_FILE = join(VALIDATION_DIR, 'result.json');
const REPORT_FILE = join(VALIDATION_DIR, 'report.md');

const AUTH = {
  url: 'https://app.bayzat.com/',
  username: 'bayzlander@bayzat.com',
  password: 'landofbayzat123'
};

class ValidationRunner {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
    this.screenshots = [];
    this.results = {
      feature_name: 'daily wage calculator',
      feature_slug: 'daily_wage_calculator',
      validated_at: new Date().toISOString(),
      summary: {
        total_plans: 0,
        passed: 0,
        failed: 0,
        partial: 0
      },
      plans: []
    };
    this.reportContent = [];
  }

  async initialize() {
    console.log('🚀 Initializing browser...');
    this.browser = await chromium.launch({
      headless: false,
      slowMo: 1000
    });
    this.context = await this.browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });
    this.page = await this.context.newPage();

    // Ensure screenshots directory exists
    try {
      await mkdir(SCREENSHOTS_DIR, { recursive: true });
    } catch (err) {
      // Directory already exists
    }
  }

  async captureScreenshot(filename, description) {
    const path = join(SCREENSHOTS_DIR, filename);
    await this.page.screenshot({ path, fullPage: false });
    this.screenshots.push({
      filename,
      category: this.getCategoryFromFilename(filename),
      description,
      timestamp: new Date().toISOString()
    });
    console.log(`📸 Captured: ${filename}`);
    return filename;
  }

  getCategoryFromFilename(filename) {
    if (filename.startsWith('step-00') || filename.startsWith('step-01') || filename === 'final-state.png') {
      return 'baseline';
    } else if (filename.startsWith('path-')) {
      return 'navigation';
    } else if (filename.startsWith('claim-')) {
      return 'validation';
    } else if (filename.includes('evidence')) {
      return 'evidence';
    } else {
      return 'extra';
    }
  }

  async authenticate() {
    console.log('🔐 Authenticating...');
    await this.captureScreenshot('step-00-start.png', 'Initial state before authentication');

    await this.page.goto(AUTH.url);
    await this.page.waitForLoadState('networkidle');

    // Look for username/email input
    const emailInput = await this.page.locator('input[type="email"], input[name="email"], input[name="username"]').first();
    await emailInput.waitFor({ state: 'visible', timeout: 10000 });
    await emailInput.fill(AUTH.username);

    // Look for password input
    const passwordInput = await this.page.locator('input[type="password"]').first();
    await passwordInput.fill(AUTH.password);

    // Click sign in button
    const signInButton = await this.page.locator('button:has-text("Sign in"), button:has-text("Login"), button[type="submit"]').first();
    await signInButton.click();

    // Wait for navigation to complete
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(3000);

    await this.captureScreenshot('step-01-login.png', 'After successful authentication');
    console.log('✅ Authentication successful');
  }

  async navigateToPath(breadcrumbs) {
    console.log(`🧭 Navigating: ${breadcrumbs.join(' > ')}`);
    let pathNum = 1;

    for (const crumb of breadcrumbs) {
      try {
        // Try multiple strategies to find the navigation element
        let navElement = null;

        // Strategy 1: Direct text match
        navElement = await this.page.locator(`text="${crumb}"`).first();

        // Check if visible
        const isVisible = await navElement.isVisible().catch(() => false);
        if (isVisible) {
          await navElement.click();
          await this.page.waitForLoadState('networkidle');
          await this.page.waitForTimeout(1000);

          const filename = `path-${String(pathNum).padStart(2, '0')}.png`;
          await this.captureScreenshot(filename, `Navigation step: ${crumb}`);
          pathNum++;
          continue;
        }

        // Strategy 2: Try as link or button
        navElement = await this.page.locator(`a:has-text("${crumb}"), button:has-text("${crumb}")`).first();
        const isVisibleLink = await navElement.isVisible().catch(() => false);
        if (isVisibleLink) {
          await navElement.click();
          await this.page.waitForLoadState('networkidle');
          await this.page.waitForTimeout(1000);

          const filename = `path-${String(pathNum).padStart(2, '0')}.png`;
          await this.captureScreenshot(filename, `Navigation step: ${crumb}`);
          pathNum++;
          continue;
        }

        console.log(`⚠️ Navigation element "${crumb}" not found or not visible - will note in report`);
      } catch (error) {
        console.log(`⚠️ Error navigating to "${crumb}": ${error.message}`);
      }
    }
  }

  async validateCheck(planId, check, checkIndex) {
    console.log(`\n🔍 Validating: ${check.check_id}`);
    console.log(`   Type: ${check.type}`);
    console.log(`   Description: ${check.description}`);

    const result = {
      check_id: check.check_id,
      status: 'failed',
      evidence: null,
      notes: ''
    };

    try {
      const claimNum = String(checkIndex + 1).padStart(2, '0');

      // Wait for page to be ready
      await this.page.waitForLoadState('networkidle');
      await this.page.waitForTimeout(1000);

      // Capture page state
      const pageTitle = await this.page.title();
      const pageUrl = this.page.url();

      result.notes = `Check: ${check.description}\n`;
      result.notes += `Page URL: ${pageUrl}\n`;
      result.notes += `Page Title: ${pageTitle}\n`;
      result.notes += `Selector Hint: ${check.selector_hint}\n`;
      result.notes += `Assertion: ${check.assertion}\n\n`;

      // Type-specific validation logic
      switch (check.type) {
        case 'navigation':
          result.notes += await this.validateNavigation(check);
          break;
        case 'options':
          result.notes += await this.validateOptions(check);
          break;
        case 'content_presence':
          result.notes += await this.validateContentPresence(check);
          break;
        case 'ui_state':
          result.notes += await this.validateUIState(check);
          break;
        case 'override_indicator':
          result.notes += await this.validateOverrideIndicator(check);
          break;
        default:
          result.notes += `Unknown check type: ${check.type}\n`;
      }

      // Capture evidence screenshot
      const screenshotFile = `claim-${claimNum}-not-confirmed.png`;
      await this.captureScreenshot(screenshotFile, `Validation for ${check.check_id}`);
      result.evidence = screenshotFile;

      // Determine status based on findings
      if (result.notes.includes('✅') || result.notes.includes('FOUND') || result.notes.includes('Verified')) {
        result.status = 'passed';
        const passFile = `claim-${claimNum}-pass.png`;
        await this.page.screenshot({ path: join(SCREENSHOTS_DIR, passFile) });
        result.evidence = passFile;
      } else if (result.notes.includes('⚠️') || result.notes.includes('NOT FOUND')) {
        result.status = 'failed';
        const failFile = `claim-${claimNum}-fail.png`;
        await this.page.screenshot({ path: join(SCREENSHOTS_DIR, failFile) });
        result.evidence = failFile;
      }

    } catch (error) {
      result.notes += `\n❌ Error during validation: ${error.message}\n`;
      result.status = 'failed';
      console.log(`❌ Check failed: ${error.message}`);
    }

    console.log(`   Result: ${result.status}`);
    return result;
  }

  async validateNavigation(check) {
    let notes = 'Navigation Validation:\n';

    // Check if we successfully loaded a relevant page
    const url = this.page.url();
    const title = await this.page.title();

    notes += `Current URL: ${url}\n`;
    notes += `Current Title: ${title}\n`;

    // Look for key elements mentioned in selector_hint
    const hint = check.selector_hint.toLowerCase();

    if (hint.includes('settings')) {
      const settingsFound = await this.findElement(['Settings', 'settings', 'SETTINGS']);
      notes += settingsFound ? '✅ Settings area accessible\n' : '⚠️ Settings area not found\n';
    }

    if (hint.includes('payroll')) {
      const payrollFound = await this.findElement(['Payroll', 'payroll', 'PAYROLL']);
      notes += payrollFound ? '✅ Payroll section accessible\n' : '⚠️ Payroll section not found\n';
    }

    if (hint.includes('leaves') || hint.includes('leave')) {
      const leavesFound = await this.findElement(['Leaves', 'Leave', 'leaves', 'leave']);
      notes += leavesFound ? '✅ Leaves section accessible\n' : '⚠️ Leaves section not found\n';
    }

    return notes;
  }

  async validateOptions(check) {
    let notes = 'Options Validation:\n';

    // Look for radio buttons, dropdowns, checkboxes
    const radioButtons = await this.page.locator('input[type="radio"]').count();
    const checkboxes = await this.page.locator('input[type="checkbox"]').count();
    const selects = await this.page.locator('select').count();

    notes += `Found ${radioButtons} radio button(s)\n`;
    notes += `Found ${checkboxes} checkbox(es)\n`;
    notes += `Found ${selects} dropdown(s)\n`;

    // Look for specific options mentioned in the check
    const description = check.description.toLowerCase();

    if (description.includes('calendar days')) {
      const found = await this.findElement(['calendar days', 'Calendar Days', 'calendar']);
      notes += found ? '✅ Calendar days option found\n' : '⚠️ Calendar days option not found\n';
    }

    if (description.includes('working days')) {
      const found = await this.findElement(['working days', 'Working Days', 'working']);
      notes += found ? '✅ Working days option found\n' : '⚠️ Working days option not found\n';
    }

    if (description.includes('custom days')) {
      const found = await this.findElement(['custom days', 'Custom Days', 'custom']);
      notes += found ? '✅ Custom days option found\n' : '⚠️ Custom days option not found\n';
    }

    if (description.includes('basic only')) {
      const found = await this.findElement(['Basic Only', 'basic only', 'Basic']);
      notes += found ? '✅ Basic Only option found\n' : '⚠️ Basic Only option not found\n';
    }

    if (description.includes('allowances')) {
      const found = await this.findElement(['Allowances', 'allowances', 'Basic + Allowances']);
      notes += found ? '✅ Allowances option found\n' : '⚠️ Allowances option not found\n';
    }

    // Capture all visible text for analysis
    const bodyText = await this.page.locator('body').textContent();
    notes += `\nPage contains ${bodyText.length} characters of text\n`;

    return notes;
  }

  async validateContentPresence(check) {
    let notes = 'Content Presence Validation:\n';

    // Get all text content
    const bodyText = await this.page.locator('body').textContent();

    // Look for key phrases from the assertion
    const assertion = check.assertion.toLowerCase();

    if (assertion.includes('calculation method') || assertion.includes('calculation basis')) {
      const found = bodyText.toLowerCase().includes('calculation') ||
                    bodyText.toLowerCase().includes('method') ||
                    bodyText.toLowerCase().includes('basis');
      notes += found ? '✅ Calculation-related text found\n' : '⚠️ Calculation-related text not found\n';
    }

    if (assertion.includes('help text') || assertion.includes('labels')) {
      // Look for common help text indicators
      const helpElements = await this.page.locator('[title], [aria-label], .help-text, .hint, .description').count();
      notes += `Found ${helpElements} help text element(s)\n`;
    }

    // Look for tooltips or info icons
    const infoIcons = await this.page.locator('[class*="info"], [class*="help"], [class*="tooltip"]').count();
    notes += `Found ${infoIcons} info/help icon(s)\n`;

    return notes;
  }

  async validateUIState(check) {
    let notes = 'UI State Validation:\n';

    const description = check.description.toLowerCase();

    if (description.includes('warning') || description.includes('notice')) {
      const alerts = await this.page.locator('[role="alert"], .alert, .warning, .notice').count();
      notes += `Found ${alerts} alert/warning element(s)\n`;

      if (alerts > 0) {
        const alertText = await this.page.locator('[role="alert"], .alert, .warning, .notice').first().textContent();
        notes += `Alert text: ${alertText.substring(0, 200)}...\n`;
      }
    }

    if (description.includes('formula') || description.includes('calculation')) {
      // Look for formula-related text
      const bodyText = await this.page.locator('body').textContent();
      const hasFormula = bodyText.includes('/') || bodyText.includes('÷') ||
                         bodyText.includes('formula') || bodyText.includes('Formula');
      notes += hasFormula ? '✅ Formula-related content found\n' : '⚠️ Formula-related content not found\n';
    }

    if (description.includes('daily rate') || description.includes('daily wage')) {
      const found = await this.findElement(['daily rate', 'Daily Rate', 'daily wage', 'Daily Wage']);
      notes += found ? '✅ Daily rate/wage content found\n' : '⚠️ Daily rate/wage content not found\n';
    }

    if (description.includes('remarks')) {
      const found = await this.findElement(['remarks', 'Remarks', 'comment', 'note']);
      notes += found ? '✅ Remarks field found\n' : '⚠️ Remarks field not found\n';
    }

    return notes;
  }

  async validateOverrideIndicator(check) {
    let notes = 'Override Indicator Validation:\n';

    // Look for disabled fields
    const disabledInputs = await this.page.locator('input:disabled, select:disabled, textarea:disabled').count();
    notes += `Found ${disabledInputs} disabled input(s)\n`;

    // Look for greyed-out elements
    const greyedElements = await this.page.locator('[class*="disabled"], [class*="greyed"], [class*="inactive"]').count();
    notes += `Found ${greyedElements} visually disabled element(s)\n`;

    // Look for override-related text
    const bodyText = await this.page.locator('body').textContent();
    const hasOverrideText = bodyText.toLowerCase().includes('override') ||
                            bodyText.toLowerCase().includes('overwrite') ||
                            bodyText.toLowerCase().includes('takes precedence') ||
                            bodyText.toLowerCase().includes('supersede');
    notes += hasOverrideText ? '✅ Override-related text found\n' : '⚠️ Override-related text not found\n';

    // Look for warning icons or indicators
    const warningIcons = await this.page.locator('[class*="warning"], [class*="alert"], [class*="info"]').count();
    notes += `Found ${warningIcons} warning/info icon(s)\n`;

    return notes;
  }

  async findElement(textOptions) {
    for (const text of textOptions) {
      try {
        const element = await this.page.locator(`text="${text}"`).first();
        const isVisible = await element.isVisible().catch(() => false);
        if (isVisible) {
          return true;
        }

        // Also check if text exists in page content
        const bodyText = await this.page.locator('body').textContent();
        if (bodyText.includes(text)) {
          return true;
        }
      } catch (error) {
        // Continue to next option
      }
    }
    return false;
  }

  async runValidation() {
    try {
      await this.initialize();

      // Read request
      const requestData = JSON.parse(await readFile(REQUEST_FILE, 'utf-8'));
      const plans = requestData.plans;

      this.results.summary.total_plans = plans.length;

      // Authenticate
      await this.authenticate();

      // Process each plan
      for (let planIndex = 0; planIndex < plans.length; planIndex++) {
        const plan = plans[planIndex];
        console.log(`\n${'='.repeat(80)}`);
        console.log(`📋 Plan ${planIndex + 1}/${plans.length}: ${plan.plan_id}`);
        console.log(`   Feature: ${plan.feature_name}`);
        console.log(`   Source: ${plan.source} - ${plan.claim_key}`);
        console.log(`   Navigation: ${plan.nav.canonical}`);
        console.log(`${'='.repeat(80)}`);

        this.reportContent.push(`\n## Plan ${planIndex + 1}: ${plan.plan_id}\n`);
        this.reportContent.push(`**Source:** ${plan.source} - ${plan.claim_key}\n`);
        this.reportContent.push(`**Navigation Path:** ${plan.nav.canonical}\n\n`);

        const planResult = {
          plan_id: plan.plan_id,
          status: 'passed',
          checks: []
        };

        // Navigate to the feature
        await this.navigateToPath(plan.nav.breadcrumb_array);

        // Run checks
        let passedChecks = 0;
        let failedChecks = 0;

        for (let checkIndex = 0; checkIndex < plan.checks.length; checkIndex++) {
          const check = plan.checks[checkIndex];
          const checkResult = await this.validateCheck(plan.plan_id, check, checkIndex);
          planResult.checks.push(checkResult);

          if (checkResult.status === 'passed') passedChecks++;
          if (checkResult.status === 'failed') failedChecks++;

          this.reportContent.push(`### Check ${checkIndex + 1}: ${check.check_id}\n`);
          this.reportContent.push(`**Type:** ${check.type}\n`);
          this.reportContent.push(`**Status:** ${checkResult.status}\n`);
          this.reportContent.push(`**Evidence:** ${checkResult.evidence}\n\n`);
          this.reportContent.push('**Notes:**\n```\n' + checkResult.notes + '\n```\n\n');
        }

        // Determine plan status
        if (failedChecks === 0) {
          planResult.status = 'passed';
          this.results.summary.passed++;
        } else if (passedChecks === 0) {
          planResult.status = 'failed';
          this.results.summary.failed++;
        } else {
          planResult.status = 'partial';
          this.results.summary.partial++;
        }

        this.results.plans.push(planResult);

        this.reportContent.push(`**Plan Status:** ${planResult.status} (${passedChecks} passed, ${failedChecks} failed)\n\n`);
      }

      // Capture final state
      await this.captureScreenshot('final-state.png', 'Final state after all validations');

      // Save results
      await this.saveResults();

      console.log('\n✅ Validation complete!');
      console.log(`📊 Results: ${this.results.summary.passed} passed, ${this.results.summary.failed} failed, ${this.results.summary.partial} partial`);

    } catch (error) {
      console.error('❌ Fatal error:', error);
      throw error;
    } finally {
      if (this.browser) {
        await this.browser.close();
      }
    }
  }

  async saveResults() {
    // Save results JSON
    await writeFile(RESULT_FILE, JSON.stringify(this.results, null, 2));
    console.log(`💾 Results saved to ${RESULT_FILE}`);

    // Save report
    const reportHeader = `# Daily Wage Calculator Validation Report\n\n`;
    const reportSummary = `## Summary\n\n`;
    const reportSummaryContent = `- **Feature:** ${this.results.feature_name}\n`;
    const reportSummaryContent2 = `- **Validated At:** ${this.results.validated_at}\n`;
    const reportSummaryContent3 = `- **Total Plans:** ${this.results.summary.total_plans}\n`;
    const reportSummaryContent4 = `- **Passed:** ${this.results.summary.passed}\n`;
    const reportSummaryContent5 = `- **Failed:** ${this.results.summary.failed}\n`;
    const reportSummaryContent6 = `- **Partial:** ${this.results.summary.partial}\n\n`;

    const fullReport = reportHeader + reportSummary + reportSummaryContent +
                       reportSummaryContent2 + reportSummaryContent3 +
                       reportSummaryContent4 + reportSummaryContent5 +
                       reportSummaryContent6 + this.reportContent.join('');

    await writeFile(REPORT_FILE, fullReport);
    console.log(`📝 Report saved to ${REPORT_FILE}`);

    // Save screenshot manifest
    const manifest = {
      generated_at: new Date().toISOString(),
      total_screenshots: this.screenshots.length,
      screenshots: this.screenshots
    };

    await writeFile(join(SCREENSHOTS_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
    console.log(`📸 Screenshot manifest saved (${this.screenshots.length} screenshots)`);
  }
}

// Run validation
const runner = new ValidationRunner();
runner.runValidation().catch(error => {
  console.error('💥 Validation failed:', error);
  process.exit(1);
});
