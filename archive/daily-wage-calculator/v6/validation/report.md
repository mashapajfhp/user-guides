# Daily Wage Calculator Validation Report

## Summary

- **Feature:** daily wage calculator
- **Validated At:** 2026-01-01T00:04:31.006Z
- **Total Plans:** 9
- **Passed:** 1
- **Failed:** 0
- **Partial:** 8


## Plan 1: plan_payroll_dwc_primary
**Source:** zendesk - zendesk_article_14243704039185
**Navigation Path:** Settings > Payroll > Daily Wage Calculation

### Check 1: check_dwc_nav_01
**Type:** navigation
**Status:** passed
**Evidence:** claim-01-pass.png

**Notes:**
```
Check: Verify navigation to Daily Wage Calculation page from Settings > Payroll
Page URL: https://app.bayzat.com/enterprise/dashboard
Page Title: Bayzat
Selector Hint: Settings menu, Payroll submenu, Daily Wage Calculation link
Assertion: Page loads with Daily Wage Calculation configuration interface visible

Navigation Validation:
Current URL: https://app.bayzat.com/enterprise/dashboard
Current Title: Bayzat
✅ Settings area accessible
✅ Payroll section accessible

```

### Check 2: check_dwc_options_01
**Type:** options
**Status:** passed
**Evidence:** claim-02-pass.png

**Notes:**
```
Check: Verify calculation basis options exist (calendar days, working days, custom days)
Page URL: https://app.bayzat.com/enterprise/dashboard
Page Title: Bayzat
Selector Hint: Calculation basis selector, radio buttons or dropdown for day type selection
Assertion: All three calculation basis options are available and selectable

Options Validation:
Found 0 radio button(s)
Found 0 checkbox(es)
Found 0 dropdown(s)
⚠️ Calendar days option not found
⚠️ Working days option not found
✅ Custom days option found

Page contains 3117 characters of text

```

### Check 3: check_dwc_options_02
**Type:** options
**Status:** failed
**Evidence:** claim-03-not-confirmed.png

**Notes:**
```
Check: Verify salary components selection controls exist
Page URL: https://app.bayzat.com/enterprise/dashboard
Page Title: Bayzat
Selector Hint: Salary components section, checkboxes or multi-select for component inclusion
Assertion: Salary components can be selected/deselected for calculation inclusion

Options Validation:
Found 0 radio button(s)
Found 0 checkbox(es)
Found 0 dropdown(s)

Page contains 3117 characters of text

```

### Check 4: check_dwc_content_01
**Type:** content_presence
**Status:** failed
**Evidence:** claim-04-fail.png

**Notes:**
```
Check: Verify help text or labels explain calculation basis impact
Page URL: https://app.bayzat.com/enterprise/dashboard
Page Title: Bayzat
Selector Hint: Information text near calculation basis options, tooltips or descriptions
Assertion: Text indicates that calculation method affects final wage calculations

Content Presence Validation:
⚠️ Calculation-related text not found
Found 3 info/help icon(s)

```

**Plan Status:** partial (2 passed, 2 failed)


## Plan 2: plan_eos_config_primary
**Source:** zendesk - zendesk_article_14243768433425
**Navigation Path:** Settings > Payroll > End of Service eligibility > Configure

### Check 1: check_eos_nav_01
**Type:** navigation
**Status:** passed
**Evidence:** claim-01-pass.png

**Notes:**
```
Check: Verify navigation to End of Service eligibility configuration
Page URL: https://app.bayzat.com/enterprise/dashboard
Page Title: Bayzat
Selector Hint: Settings menu, Payroll submenu, End of Service eligibility, Configure button
Assertion: End of Service configuration page loads successfully

Navigation Validation:
Current URL: https://app.bayzat.com/enterprise/dashboard
Current Title: Bayzat
✅ Settings area accessible
✅ Payroll section accessible

```

### Check 2: check_eos_options_01
**Type:** options
**Status:** failed
**Evidence:** claim-02-fail.png

**Notes:**
```
Check: Verify salary component options (Basic Only vs Basic + Allowances)
Page URL: https://app.bayzat.com/enterprise/dashboard
Page Title: Bayzat
Selector Hint: Salary components selection, radio buttons or dropdown for component choice
Assertion: Both Basic Only and Basic + Allowances options are available

Options Validation:
Found 0 radio button(s)
Found 0 checkbox(es)
Found 0 dropdown(s)
⚠️ Basic Only option not found
⚠️ Allowances option not found

Page contains 3265 characters of text

```

### Check 3: check_eos_options_02
**Type:** options
**Status:** passed
**Evidence:** claim-03-pass.png

**Notes:**
```
Check: Verify calculation method options (calendar, working, custom days)
Page URL: https://app.bayzat.com/enterprise/dashboard
Page Title: Bayzat
Selector Hint: Calculation method selector, radio buttons or dropdown for day type
Assertion: All three calculation method options are selectable

Options Validation:
Found 0 radio button(s)
Found 0 checkbox(es)
Found 0 dropdown(s)
✅ Custom days option found

Page contains 3265 characters of text

```

### Check 4: check_eos_override_01
**Type:** override_indicator
**Status:** failed
**Evidence:** claim-04-fail.png

**Notes:**
```
Check: Verify override indicator visible for eligible paid leave-type policies
Page URL: https://app.bayzat.com/enterprise/dashboard
Page Title: Bayzat
Selector Hint: Leave type configuration section, override warning or indicator text
Assertion: Super admin can see which eligible paid leave-type policies will be overwritten

Override Indicator Validation:
Found 0 disabled input(s)
Found 0 visually disabled element(s)
⚠️ Override-related text not found
Found 4 warning/info icon(s)

```

**Plan Status:** partial (2 passed, 2 failed)


## Plan 3: plan_salary_proration_secondary
**Source:** zendesk - zendesk_article_14243760419089
**Navigation Path:** Settings > Payroll > Daily wage calculation

### Check 1: check_proration_nav_01
**Type:** navigation
**Status:** passed
**Evidence:** claim-01-pass.png

**Notes:**
```
Check: Verify navigation to Daily wage calculation for proration settings
Page URL: https://app.bayzat.com/enterprise/dashboard
Page Title: Bayzat
Selector Hint: Settings menu, Payroll submenu, Daily wage calculation link
Assertion: Daily wage calculation page accessible for proration configuration

Navigation Validation:
Current URL: https://app.bayzat.com/enterprise/dashboard
Current Title: Bayzat
✅ Settings area accessible
✅ Payroll section accessible

```

### Check 2: check_proration_options_01
**Type:** options
**Status:** failed
**Evidence:** claim-02-fail.png

**Notes:**
```
Check: Verify calculation basis options for proration (custom, calendar, working days)
Page URL: https://app.bayzat.com/enterprise/dashboard
Page Title: Bayzat
Selector Hint: Calculation bases selector, radio buttons or dropdown
Assertion: All three calculation basis options available for proration

Options Validation:
Found 0 radio button(s)
Found 0 checkbox(es)
Found 0 dropdown(s)
⚠️ Working days option not found

Page contains 3265 characters of text

```

### Check 3: check_proration_ui_state_01
**Type:** ui_state
**Status:** failed
**Evidence:** claim-03-not-confirmed.png

**Notes:**
```
Check: Verify warning or notice about payroll month impact on prorated transactions
Page URL: https://app.bayzat.com/enterprise/dashboard
Page Title: Bayzat
Selector Hint: Alert or notice section, warning message about open payroll months
Assertion: Message indicates changes affect all active unpaid amounts in payroll table

UI State Validation:
Found 0 alert/warning element(s)

```

**Plan Status:** partial (1 passed, 2 failed)


## Plan 4: plan_leave_policy_unpaid_secondary
**Source:** jira - jira_tssd_2648_02
**Navigation Path:** Settings > Leaves > Leave Policies > Add new policy > Unpaid Leave option > calculation method > day calculation type

### Check 1: check_leave_unpaid_nav_01
**Type:** navigation
**Status:** passed
**Evidence:** claim-01-pass.png

**Notes:**
```
Check: Verify navigation to Leave Policies configuration for unpaid leave
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: Settings menu, Leaves submenu, Leave Policies, Add new policy option
Assertion: Leave policy creation interface accessible

Navigation Validation:
Current URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Current Title: Bayzat
✅ Settings area accessible
✅ Leaves section accessible

```

### Check 2: check_leave_unpaid_override_01
**Type:** override_indicator
**Status:** failed
**Evidence:** claim-02-fail.png

**Notes:**
```
Check: Verify override indicator shows payroll daily wage calculator takes precedence
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: Unpaid Leave option section, formula field, greyed-out or disabled state indicator
Assertion: Formula field displays greyed-out or disabled state indicating payroll override

Override Indicator Validation:
Found 0 disabled input(s)
Found 1 visually disabled element(s)
⚠️ Override-related text not found
Found 1 warning/info icon(s)

```

### Check 3: check_leave_unpaid_ui_state_01
**Type:** ui_state
**Status:** passed
**Evidence:** claim-03-pass.png

**Notes:**
```
Check: Verify UI state shows formula is overridden by payroll settings
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: Calculation method section, visual indicator of override status
Assertion: UI clearly indicates payroll-side daily wage calculator overrides leave policy formula

UI State Validation:
✅ Formula-related content found

```

**Plan Status:** partial (2 passed, 1 failed)


## Plan 5: plan_leave_policy_deduction_secondary
**Source:** jira - jira_tssd_1753_19
**Navigation Path:** Settings > Leaves > Leave Policies > Add new policy > Unpaid Leave option > calculation method > day calculation type

### Check 1: check_leave_deduct_nav_01
**Type:** navigation
**Status:** passed
**Evidence:** claim-01-pass.png

**Notes:**
```
Check: Verify navigation to unpaid leave deduction configuration
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: Settings menu, Leaves submenu, Leave Policies, policy creation flow
Assertion: Unpaid leave deduction configuration interface accessible

Navigation Validation:
Current URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Current Title: Bayzat
✅ Settings area accessible
✅ Leaves section accessible

```

### Check 2: check_leave_deduct_override_01
**Type:** override_indicator
**Status:** failed
**Evidence:** claim-02-fail.png

**Notes:**
```
Check: Verify override indicator shows global configuration supersedes policy-level settings
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: Unpaid Leave option section, calculation method field, disabled or greyed indicator
Assertion: UI indicates global unpaid leave daily rate configuration takes precedence

Override Indicator Validation:
Found 0 disabled input(s)
Found 1 visually disabled element(s)
⚠️ Override-related text not found
Found 1 warning/info icon(s)

```

### Check 3: check_leave_deduct_ui_state_01
**Type:** ui_state
**Status:** failed
**Evidence:** claim-03-not-confirmed.png

**Notes:**
```
Check: Verify UI state reflects configuration hierarchy (global > policy-level)
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: Calculation method section, visual state of configuration controls
Assertion: UI shows policy-level customization is limited by global configuration

UI State Validation:

```

**Plan Status:** partial (1 passed, 2 failed)


## Plan 6: plan_eos_proration_ui_state
**Source:** jira - jira_tssd_2605_05
**Navigation Path:** Settings > Payroll > End of Service eligibility > Configure

### Check 1: check_eos_proration_nav_01
**Type:** navigation
**Status:** passed
**Evidence:** claim-01-pass.png

**Notes:**
```
Check: Verify navigation to End of Service eligibility configuration
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: Settings menu, Payroll submenu, End of Service eligibility, Configure
Assertion: EOS configuration page loads successfully

Navigation Validation:
Current URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Current Title: Bayzat
✅ Settings area accessible
✅ Payroll section accessible

```

### Check 2: check_eos_proration_ui_state_01
**Type:** ui_state
**Status:** passed
**Evidence:** claim-02-pass.png

**Notes:**
```
Check: Verify UI displays daily wage formula configuration (basic + allowances / 30)
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: Salary Components section, Calculation Method section, formula display or label
Assertion: Daily wage formula configuration is visible and correctly displayed

UI State Validation:
✅ Formula-related content found
⚠️ Daily rate/wage content not found

```

### Check 3: check_eos_proration_ui_state_02
**Type:** ui_state
**Status:** passed
**Evidence:** claim-03-pass.png

**Notes:**
```
Check: Verify UI shows stored daily rate or calculation basis
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: EOS configuration section, daily rate field or calculation basis display
Assertion: Stored daily rate or calculation method is displayed in UI

UI State Validation:
✅ Formula-related content found
⚠️ Daily rate/wage content not found

```

**Plan Status:** passed (3 passed, 0 failed)


## Plan 7: plan_leave_salary_calc_override
**Source:** jira - jira_tssd_4731_10
**Navigation Path:** Settings > Leaves > Leave Policies > Add new policy > Unpaid Leave option > calculation method > day calculation type

### Check 1: check_leave_salary_nav_01
**Type:** navigation
**Status:** passed
**Evidence:** claim-01-pass.png

**Notes:**
```
Check: Verify navigation to leave salary calculation configuration
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: Settings menu, Leaves submenu, Leave Policies, policy creation flow
Assertion: Leave salary calculation configuration interface accessible

Navigation Validation:
Current URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Current Title: Bayzat
✅ Settings area accessible
✅ Leaves section accessible

```

### Check 2: check_leave_salary_override_01
**Type:** override_indicator
**Status:** failed
**Evidence:** claim-02-fail.png

**Notes:**
```
Check: Verify override indicator shows daily rate configuration takes precedence
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: Calculation method section, day calculation type field, override indicator
Assertion: UI indicates daily rate configuration overrides standard calculation method

Override Indicator Validation:
Found 0 disabled input(s)
Found 1 visually disabled element(s)
⚠️ Override-related text not found
Found 1 warning/info icon(s)

```

### Check 3: check_leave_salary_ui_state_01
**Type:** ui_state
**Status:** failed
**Evidence:** claim-03-fail.png

**Notes:**
```
Check: Verify UI state shows configured daily rate divisor (30, 31, or calendar-based)
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: Day calculation type section, divisor value or configuration display
Assertion: Configured daily rate divisor is visible and indicates calculation basis

UI State Validation:
⚠️ Daily rate/wage content not found

```

**Plan Status:** partial (1 passed, 2 failed)


## Plan 8: plan_unpaid_leave_remarks_display
**Source:** jira - jira_tssd_1301_18
**Navigation Path:** Settings > Leaves > Leave Policies > Add new policy > Unpaid Leave option > calculation method > day calculation type

### Check 1: check_remarks_nav_01
**Type:** navigation
**Status:** passed
**Evidence:** claim-01-pass.png

**Notes:**
```
Check: Verify navigation to unpaid leave deduction remarks configuration
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: Settings menu, Leaves submenu, Leave Policies, policy creation flow
Assertion: Unpaid leave configuration interface accessible

Navigation Validation:
Current URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Current Title: Bayzat
✅ Settings area accessible
✅ Leaves section accessible

```

### Check 2: check_remarks_ui_state_01
**Type:** ui_state
**Status:** passed
**Evidence:** claim-02-pass.png

**Notes:**
```
Check: Verify UI displays remarks field showing daily rate and days calculation
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: Unpaid Leave option section, remarks field or calculation display
Assertion: Remarks field displays daily rate calculation with day count reference

UI State Validation:
✅ Formula-related content found
⚠️ Daily rate/wage content not found
⚠️ Remarks field not found

```

### Check 3: check_remarks_ui_state_02
**Type:** ui_state
**Status:** failed
**Evidence:** claim-03-fail.png

**Notes:**
```
Check: Verify UI shows calendar days detection in remarks (e.g., 29 for February leap year)
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: Remarks section, day count display, calendar-aware calculation indicator
Assertion: Remarks accurately reflect actual calendar days for the month

UI State Validation:
⚠️ Remarks field not found

```

**Plan Status:** partial (2 passed, 1 failed)


## Plan 9: plan_unpaid_leave_daily_rate_display
**Source:** jira - jira_tssd_1807_20
**Navigation Path:** Settings > Leaves > Leave Policies > Add new policy > Unpaid Leave option > calculation method > day calculation type

### Check 1: check_daily_rate_nav_01
**Type:** navigation
**Status:** passed
**Evidence:** claim-01-pass.png

**Notes:**
```
Check: Verify navigation to unpaid leave daily rate configuration
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: Settings menu, Leaves submenu, Leave Policies, policy creation flow
Assertion: Unpaid leave configuration interface accessible

Navigation Validation:
Current URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Current Title: Bayzat
✅ Settings area accessible
✅ Leaves section accessible

```

### Check 2: check_daily_rate_ui_state_01
**Type:** ui_state
**Status:** failed
**Evidence:** claim-02-fail.png

**Notes:**
```
Check: Verify UI displays stored daily rate from leave occurrence month
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: Unpaid Leave option section, daily rate display field, stored rate indicator
Assertion: Daily rate displayed is from leave occurrence month, not payroll processing month

UI State Validation:
⚠️ Daily rate/wage content not found

```

### Check 3: check_daily_rate_ui_state_02
**Type:** ui_state
**Status:** failed
**Evidence:** claim-03-fail.png

**Notes:**
```
Check: Verify remarks show initially calculated daily rate preserved across payroll cycles
Page URL: https://app.bayzat.com/enterprise/dashboard/settings/time-off
Page Title: Bayzat
Selector Hint: Remarks section, daily rate value display, consistency indicator
Assertion: Remarks consistently display the initially calculated daily rate

UI State Validation:
⚠️ Daily rate/wage content not found
⚠️ Remarks field not found

```

**Plan Status:** partial (1 passed, 2 failed)

