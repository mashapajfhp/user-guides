# Daily Wage Calculator - Interface Validation Report

## Status: REQUIRES MCP SERVER RESTART

**Generated:** 2026-01-01T03:52:00Z
**Feature:** Daily Wage Calculator
**Version:** v6
**Validator:** UI Validation Agent

---

## Executive Summary

This validation was initiated to verify 9 validation plans covering the Daily Wage Calculator feature across multiple areas of the Bayzat platform. However, the validation **cannot proceed** because the Playwright MCP server is not currently available in this session.

### Required Action

The MCP configuration has been updated from:
```json
"@anthropic-ai/playwright-mcp" (non-existent package)
```

To:
```json
"@executeautomation/playwright-mcp-server" (installed package)
```

**To proceed with validation, the Claude Code session must be restarted** to load the updated MCP configuration and make Playwright browser automation tools available.

---

## Validation Plan Overview

The validation request includes **9 comprehensive validation plans** covering:

### 1. Primary Daily Wage Calculation Configuration (plan_payroll_dwc_primary)
- **Navigation:** Settings > Payroll > Daily Wage Calculation
- **Checks:** 4 validation points
  - Navigation verification
  - Calculation basis options (calendar/working/custom days)
  - Salary component selection controls
  - Help text presence

### 2. End of Service Eligibility Configuration (plan_eos_config_primary)
- **Navigation:** Settings > Payroll > End of Service eligibility > Configure
- **Checks:** 4 validation points
  - Navigation verification
  - Salary component options (Basic Only vs Basic + Allowances)
  - Calculation method options
  - Override indicators for leave policies

### 3. Salary Proration Configuration (plan_salary_proration_secondary)
- **Navigation:** Settings > Payroll > Daily wage calculation
- **Checks:** 3 validation points
  - Navigation verification
  - Proration calculation basis options
  - Payroll month impact warnings

### 4. Unpaid Leave Policy Override (plan_leave_policy_unpaid_secondary)
- **Navigation:** Settings > Leaves > Leave Policies > Add new policy > Unpaid Leave
- **Checks:** 3 validation points
  - Navigation verification
  - Override indicator for payroll precedence
  - UI state showing formula override

### 5. Leave Deduction Configuration Override (plan_leave_policy_deduction_secondary)
- **Navigation:** Settings > Leaves > Leave Policies > Add new policy > Unpaid Leave
- **Checks:** 3 validation points
  - Navigation verification
  - Global configuration override indicator
  - Configuration hierarchy UI state

### 6. EOS Proration UI State (plan_eos_proration_ui_state)
- **Navigation:** Settings > Payroll > End of Service eligibility > Configure
- **Checks:** 3 validation points
  - Navigation verification
  - Daily wage formula display (basic + allowances / 30)
  - Stored daily rate visibility

### 7. Leave Salary Calculation Override (plan_leave_salary_calc_override)
- **Navigation:** Settings > Leaves > Leave Policies > Add new policy > Unpaid Leave
- **Checks:** 3 validation points
  - Navigation verification
  - Daily rate configuration precedence indicator
  - Configured daily rate divisor display (30/31/calendar)

### 8. Unpaid Leave Remarks Display (plan_unpaid_leave_remarks_display)
- **Navigation:** Settings > Leaves > Leave Policies > Add new policy > Unpaid Leave
- **Checks:** 3 validation points
  - Navigation verification
  - Remarks field showing daily rate and days
  - Calendar days detection (e.g., 29 for February leap year)

### 9. Unpaid Leave Daily Rate Display (plan_unpaid_leave_daily_rate_display)
- **Navigation:** Settings > Leaves > Leave Policies > Add new policy > Unpaid Leave
- **Checks:** 3 validation points
  - Navigation verification
  - Stored daily rate from leave occurrence month
  - Preserved daily rate consistency in remarks

---

## Validation Methodology

Once Playwright MCP tools are available, the validation will follow this systematic approach:

### Phase 1: Authentication & Baseline
1. Navigate to https://app.bayzat.com/
2. Clear any cached credentials
3. Login with credentials:
   - Username: bayzlander@bayzat.com
   - Password: landofbayzat123
4. Capture baseline screenshots:
   - `step-00-start.png` - Login page
   - `step-01-login.png` - After login
   - `final-state.png` - Dashboard loaded

### Phase 2: Sequential Plan Validation
For each of the 9 validation plans:

1. **Navigation Phase**
   - Follow breadcrumb hints to locate feature
   - Document actual navigation path taken
   - Capture navigation screenshots: `path-01.png`, `path-02.png`, etc.

2. **Check Execution Phase**
   - Execute each check in the plan sequentially
   - For each check:
     - Locate elements using selector hints
     - Verify assertions
     - Document actual behavior vs expected
     - Capture evidence: `claim-XX-pass.png` or `claim-XX-fail.png`
     - Add detailed notes explaining findings

3. **Exploration Phase**
   - Interact with ALL UI elements in the area
   - Click dropdowns and document all options
   - Toggle switches/checkboxes and observe changes
   - Expand accordions and collapsible sections
   - Test all tabs and links
   - Capture extra screenshots: `extra-01-<descriptive-name>.png`

### Phase 3: Evidence Compilation
1. Generate screenshot manifest (manifest.json)
2. Compile detailed report (report.md)
3. Generate structured results (result.json)

---

## Expected Deliverables

### 1. Screenshots Directory
**Location:** `/Users/mashapa/validation-runner/_work/user-guides/user-guides/daily-wage-calculator/v6/validation/screenshots/`

**Expected Files:**
- Baseline: `step-00-start.png`, `step-01-login.png`, `final-state.png`
- Navigation: `path-01.png` through `path-NN.png` (zero-padded)
- Claims: `claim-01-pass.png`, `claim-02-fail.png`, etc.
- Evidence: `claim-01-evidence-01.png`, etc.
- Extra: `extra-01-<slug>.png` (descriptive discoveries)

### 2. Screenshot Manifest
**Location:** `screenshots/manifest.json`

```json
{
  "generated_at": "ISO8601 timestamp",
  "total_screenshots": "number",
  "screenshots": [
    {
      "filename": "string",
      "type": "baseline|navigation|claim|evidence|extra",
      "plan_id": "string or null",
      "check_id": "string or null",
      "description": "string",
      "timestamp": "ISO8601"
    }
  ]
}
```

### 3. Detailed Validation Report
**Location:** `validation/report.md`

Must include:
- Executive summary with overall pass/fail rates
- Detailed findings for each of 9 plans
- Navigation paths actually taken
- All UI elements discovered
- What worked vs what didn't
- Discrepancies between expected and actual behavior
- Screenshots cross-referenced throughout

### 4. Structured Results
**Location:** `validation/result.json`

```json
{
  "feature_name": "daily wage calculator",
  "feature_slug": "daily_wage_calculator",
  "validated_at": "ISO8601 timestamp",
  "summary": {
    "total_plans": 9,
    "passed": 0,
    "failed": 0,
    "partial": 0
  },
  "plans": [
    {
      "plan_id": "plan_payroll_dwc_primary",
      "status": "passed|failed|partial",
      "checks": [
        {
          "check_id": "check_dwc_nav_01",
          "status": "passed|failed|skipped",
          "evidence": "screenshot filename or null",
          "notes": "detailed explanation"
        }
      ]
    }
  ]
}
```

---

## Critical Validation Points

### Navigation Path Discovery
Many plans use the same navigation paths but may have different assertions. The validator must:
- Document the ACTUAL path taken, not just the breadcrumb hints
- Note if navigation differs from expected
- Identify if certain sections are restricted or inaccessible

### Override Indicators
Multiple plans check for override indicators showing configuration precedence:
- Plan 2: EOS configuration overriding leave policies
- Plan 4: Payroll calculator overriding leave policy formulas
- Plan 5: Global configuration superseding policy-level settings
- Plan 7: Daily rate configuration taking precedence

The validator must carefully document:
- Visual indicators of overrides (greyed out, disabled, warning text)
- Exact wording of override messages
- UI state differences between overridden and active controls

### Calculation Method Configurations
Several plans verify calculation method options:
- Calendar days
- Working days
- Custom days
- Divisor values (30, 31, or calendar-based)

The validator must:
- Verify all options are present and selectable
- Document default selections
- Test switching between options
- Capture visual feedback for each selection

### Salary Component Selections
Plans 1 and 2 check salary component configurations:
- Basic Only vs Basic + Allowances
- Component selection checkboxes/multi-select
- Impact on calculations

The validator must:
- List all available components
- Test selection/deselection behavior
- Document how selections affect displayed formulas

### Daily Rate Display & Preservation
Plans 8 and 9 focus on how daily rates are displayed and preserved:
- Remarks showing calculation details
- Daily rate from leave occurrence month (not processing month)
- Preservation across payroll cycles
- Calendar-aware calculations (e.g., 29 days for leap year February)

The validator must:
- Capture exact wording of remarks fields
- Verify date-specific calculations
- Document any month-to-month consistency checks

---

## Next Steps

1. **Restart Claude Code session** to load updated MCP configuration
2. **Verify Playwright tools are available** by checking for `mcp__playwright__*` functions
3. **Re-run validation request** with Playwright browser automation
4. **Execute all 9 validation plans systematically**
5. **Generate comprehensive evidence package** with 100+ screenshots
6. **Produce final validation report** with detailed findings

---

## Technical Notes

### MCP Configuration Updated
**File:** `/Users/mashapa/validation-runner/_work/user-guides/user-guides/.mcp.json`

**Change:**
```diff
- "args": ["-y", "@anthropic-ai/playwright-mcp", "--headless=false"]
+ "args": ["-y", "@executeautomation/playwright-mcp-server", "--headless=false"]
```

### Playwright Package Installed
Global installation detected:
```
@executeautomation/playwright-mcp-server@1.0.6
```

### Authentication Credentials
- URL: https://app.bayzat.com/
- Username: bayzlander@bayzat.com
- Password: landofbayzat123

### Screenshot Requirements
- All screenshots to: `/Users/mashapa/validation-runner/_work/user-guides/user-guides/daily-wage-calculator/v6/validation/screenshots/`
- Strict naming convention enforced
- Focused captures, NOT full page screenshots
- Evidence for every claim
- Manifest tracking all files

---

## Validation Plan Details

### Plan 1: plan_payroll_dwc_primary
**Source:** Zendesk Article 14243704039185
**Focus:** Primary daily wage calculation configuration

**Navigation:** Settings > Payroll > Daily Wage Calculation

**Checks:**
1. `check_dwc_nav_01` (navigation): Verify navigation path works
2. `check_dwc_options_01` (options): Verify calculation basis options (calendar/working/custom)
3. `check_dwc_options_02` (options): Verify salary component selection controls
4. `check_dwc_content_01` (content_presence): Verify help text explaining calculation impact

**Expected Interactions:**
- Click through Settings menu
- Navigate to Payroll section
- Locate Daily Wage Calculation page
- Identify calculation basis selector (radio buttons or dropdown)
- Identify salary components section
- Read and capture help text/tooltips

---

### Plan 2: plan_eos_config_primary
**Source:** Zendesk Article 14243768433425
**Focus:** End of Service eligibility configuration

**Navigation:** Settings > Payroll > End of Service eligibility > Configure

**Checks:**
1. `check_eos_nav_01` (navigation): Verify navigation to EOS config
2. `check_eos_options_01` (options): Verify Basic Only vs Basic + Allowances options
3. `check_eos_options_02` (options): Verify calculation method options
4. `check_eos_override_01` (override_indicator): Verify override indicator for leave policies

**Expected Interactions:**
- Navigate to Settings > Payroll
- Find End of Service eligibility section
- Click Configure button
- Identify salary component options
- Identify calculation method selector
- Look for override warnings or indicators
- Document which leave policies are affected

---

### Plan 3: plan_salary_proration_secondary
**Source:** Zendesk Article 14243760419089
**Focus:** Salary proration configuration

**Navigation:** Settings > Payroll > Daily wage calculation

**Checks:**
1. `check_proration_nav_01` (navigation): Verify navigation to proration settings
2. `check_proration_options_01` (options): Verify calculation basis options for proration
3. `check_proration_ui_state_01` (ui_state): Verify warning about payroll month impact

**Expected Interactions:**
- Navigate to Settings > Payroll > Daily wage calculation
- Identify proration-specific settings
- Check for calculation basis options (custom/calendar/working)
- Look for warning messages about open payroll months
- Document exact wording of warnings

---

### Plan 4: plan_leave_policy_unpaid_secondary
**Source:** Jira TSSD-2648
**Focus:** Unpaid leave policy override behavior

**Navigation:** Settings > Leaves > Leave Policies > Add new policy > Unpaid Leave

**Checks:**
1. `check_leave_unpaid_nav_01` (navigation): Verify navigation to leave policy creation
2. `check_leave_unpaid_override_01` (override_indicator): Verify payroll override indicator
3. `check_leave_unpaid_ui_state_01` (ui_state): Verify UI shows formula is overridden

**Expected Interactions:**
- Navigate to Settings > Leaves > Leave Policies
- Click "Add new policy"
- Select Unpaid Leave option
- Look for calculation method section
- Identify formula field state (greyed out/disabled)
- Document override indicators

---

### Plan 5: plan_leave_policy_deduction_secondary
**Source:** Jira TSSD-1753
**Focus:** Leave deduction configuration hierarchy

**Navigation:** Settings > Leaves > Leave Policies > Add new policy > Unpaid Leave

**Checks:**
1. `check_leave_deduct_nav_01` (navigation): Verify navigation to unpaid leave deduction
2. `check_leave_deduct_override_01` (override_indicator): Verify global config override
3. `check_leave_deduct_ui_state_01` (ui_state): Verify configuration hierarchy in UI

**Expected Interactions:**
- Navigate to leave policy creation (same as Plan 4)
- Focus on deduction configuration section
- Identify global vs policy-level settings
- Document which settings are disabled/overridden
- Capture visual indicators of hierarchy

---

### Plan 6: plan_eos_proration_ui_state
**Source:** Jira TSSD-2605
**Focus:** End of Service proration UI display

**Navigation:** Settings > Payroll > End of Service eligibility > Configure

**Checks:**
1. `check_eos_proration_nav_01` (navigation): Verify navigation to EOS config
2. `check_eos_proration_ui_state_01` (ui_state): Verify daily wage formula display
3. `check_eos_proration_ui_state_02` (ui_state): Verify stored daily rate visibility

**Expected Interactions:**
- Navigate to EOS configuration (same as Plan 2)
- Look for formula display: (basic + allowances) / 30
- Look for stored daily rate field
- Document calculation basis display
- Capture exact formula representation

---

### Plan 7: plan_leave_salary_calc_override
**Source:** Jira TSSD-4731
**Focus:** Leave salary calculation override

**Navigation:** Settings > Leaves > Leave Policies > Add new policy > Unpaid Leave

**Checks:**
1. `check_leave_salary_nav_01` (navigation): Verify navigation to leave salary calc
2. `check_leave_salary_override_01` (override_indicator): Verify daily rate config precedence
3. `check_leave_salary_ui_state_01` (ui_state): Verify daily rate divisor display

**Expected Interactions:**
- Navigate to unpaid leave configuration
- Look for day calculation type field
- Identify override indicators
- Look for divisor value (30, 31, or calendar-based)
- Document calculation basis indicator

---

### Plan 8: plan_unpaid_leave_remarks_display
**Source:** Jira TSSD-1301
**Focus:** Unpaid leave remarks field display

**Navigation:** Settings > Leaves > Leave Policies > Add new policy > Unpaid Leave

**Checks:**
1. `check_remarks_nav_01` (navigation): Verify navigation to unpaid leave config
2. `check_remarks_ui_state_01` (ui_state): Verify remarks show daily rate calculation
3. `check_remarks_ui_state_02` (ui_state): Verify calendar days detection in remarks

**Expected Interactions:**
- Navigate to unpaid leave configuration
- Locate remarks field
- Document exact text showing daily rate calculation
- Look for day count reference
- Verify calendar-aware calculations (e.g., 29 for leap Feb)

---

### Plan 9: plan_unpaid_leave_daily_rate_display
**Source:** Jira TSSD-1807
**Focus:** Daily rate preservation across payroll cycles

**Navigation:** Settings > Leaves > Leave Policies > Add new policy > Unpaid Leave

**Checks:**
1. `check_daily_rate_nav_01` (navigation): Verify navigation to daily rate config
2. `check_daily_rate_ui_state_01` (ui_state): Verify daily rate from occurrence month
3. `check_daily_rate_ui_state_02` (ui_state): Verify rate preservation in remarks

**Expected Interactions:**
- Navigate to unpaid leave configuration
- Look for daily rate display field
- Verify which month's rate is shown (occurrence vs processing)
- Check remarks for consistency
- Document preservation across cycles

---

## Validation Success Criteria

### Per-Check Success
Each check passes if:
- Navigation reaches expected destination
- Expected UI elements are present and accessible
- Options/selections work as described
- Override indicators are clear and accurate
- UI state reflects configuration correctly
- Help text/warnings are present and informative

### Per-Plan Success
A plan is:
- **PASSED:** All checks pass
- **PARTIAL:** Some checks pass, some fail
- **FAILED:** All checks fail or navigation impossible

### Overall Success
The validation is successful if:
- At least 70% of checks pass across all plans
- All navigation paths are accessible
- Critical configuration options are present
- Override behavior is clearly indicated
- No blocking issues prevent feature usage

---

## Known Challenges

### Navigation Path Ambiguity
Breadcrumb hints may not exactly match actual navigation structure. The validator must:
- Explore alternative paths
- Document actual navigation taken
- Note any discrepancies

### Permission-Based Access
Some features may require specific permissions. The validator must:
- Document access restrictions encountered
- Note if features are hidden or disabled
- Capture any permission error messages

### Dynamic UI Elements
Some elements may load asynchronously or change state. The validator must:
- Wait for elements to load completely
- Handle loading states
- Document any timing issues

### Configuration Dependencies
Some configurations may depend on prior setup. The validator must:
- Document any prerequisites encountered
- Note if certain options are unavailable
- Explain why checks couldn't be completed

---

## Conclusion

This validation cannot proceed without Playwright MCP tools being available. The session must be restarted after the MCP configuration update to enable browser automation.

Once restarted, the validation will systematically verify all 9 plans, capturing comprehensive evidence of the Daily Wage Calculator feature's interface, behavior, and configuration options across multiple areas of the Bayzat platform.

**Next Action Required:** Restart Claude Code session and re-run validation request.
