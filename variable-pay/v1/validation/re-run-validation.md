# Variable Pay User Guide — Re-Run Validation Report

**Date:** 2026-03-06
**Method:** Playwright browser automation against live Bayzat application
**Guide URL:** https://mashapajfhp.github.io/user-guides/variable-pay/v1/variable-pay-user-guide.html

---

## Summary

- **Total Issues Found:** 24
- **Critical (factually wrong / blocks user):** 11
- **Major (misleading or missing important info):** 11
- **Minor (cosmetic / terminology):** 2

---

## Critical Issues (11)

### C1 — Fabricated "Variable Pay Categories" Label
- **Location:** Feature Overview, Initial Setup, multiple references
- **Guide says:** "Settings → Payroll → Variable Pay Categories"
- **Actual:** The accordion section in Settings → Payroll is labeled **"Variable Pays"**, not "Variable Pay Categories"
- **Fix:** Replace all instances of "Variable Pay Categories" with "Variable Pays" in navigation paths

### C2 — Fabricated "+ Add Category" Button
- **Location:** Initial Setup, section "Create Variable Pay Categories"
- **Guide says:** Click "+ Add Category"
- **Actual:** The button is labeled **"Add new"**
- **Fix:** Replace "+ Add Category" with "Add new"

### C3 — Fabricated Form Fields (Calculation Type, Tax Treatment)
- **Location:** Initial Setup, steps 4-5 of category creation
- **Guide says:** "Select calculation type (Fixed Amount or Percentage)" and "Set tax treatment (Taxable or Non-Taxable)"
- **Actual:** The creation form only has a **Name** field. There are no "calculation type" or "tax treatment" fields.
- **Fix:** Remove steps 4-5 entirely. The form is: Enter name → Click Save

### C4 — Wrong Employee Detail Access Method
- **Location:** Core Tasks → "Add Variable Pay via Payroll Table"
- **Guide says:** "Click the More Options (three dots) menu → Select 'View Details'"
- **Actual:** There is **no per-row three-dot menu**. You click directly on the employee row or the employee name to open the detail slide-over panel.
- **Fix:** Replace three-dot menu instructions with "Click on the employee row to open the detail panel"

### C5 — Wrong Variable Pay Entry Field Names
- **Location:** Core Tasks → "Add Variable Pay via Payroll Table", steps 6-9
- **Guide says:** "Select the variable pay category from the dropdown → Enter the amount → Specify the effective date → Click Add or Save"
- **Actual:** The Variable Pay entry form has these fields:
  - **Pay Items*** (dropdown of configured pay items)
  - **Associated Period*** (Start Date + End Date range)
  - **Additional Remarks** (free text, optional)
  - **Amount*** (currency input)
  - Button: **"Save changes"**
- **Fix:** Rewrite steps to match the actual form fields

### C6 — Fabricated "Via Adjustments Tab" Subtask
- **Location:** Core Tasks → "Add Variable Pay via Adjustments Tab"
- **Guide says:** Navigate to Payroll → Adjustments tab → Click "+ Add Adjustment" → Select employee → Choose variable pay category → Enter amount
- **Actual:** The Adjustments page only handles **Additions** and **Deductions** — it does NOT handle Variable Pay items. Variable Pay has its own dedicated section in the employee detail panel.
- **Fix:** Remove the entire "Add Variable Pay via Adjustments Tab" subtask. It is fabricated.

### C7 — Wrong Mass Upload Navigation Path
- **Location:** Feature Discovery, Core Tasks → "Bulk Upload Variable Pay"
- **Guide says:** "Payroll → Payroll Table → More Options → Mass upload variable pay"
- **Actual:** The path is **Settings → Payroll → Mass Uploads → Start** (button). There is no "More Options" menu on the payroll table for mass uploads.
- **Fix:** Correct the navigation path

### C8 — Wrong Mass Upload Interface Description
- **Location:** Core Tasks → "Prepare and Upload Variable Pay File"
- **Guide says:** "Select 'Variable Pay' from the upload type dropdown → Download the template file → Fill in employee identifiers..."
- **Actual:** Mass Upload opens **Bayzat Sheets** — an in-browser spreadsheet interface (not a file upload). The columns are:
  - Employee Identifier
  - Employee Name* (auto-populated)
  - Trade License
  - Base Currency
  - Pay Item Type*
  - Start Date*
  - End Date*
  - Additional Remarks
  - Amount*
  - Reference*
- **Fix:** Rewrite the mass upload workflow to describe the Bayzat Sheets interface with the correct columns

### C9 — Wrong Workflow Button Name
- **Location:** Workflow Integration → Navigation Path and Setup Steps
- **Guide says:** "Automations → Workflows → + Create workflow"
- **Actual:** The button is labeled **"Create new workflow"** (not "+ Create workflow")
- **Fix:** Replace button label

### C10 — Fabricated Workflow Triggers
- **Location:** Workflow Integration → Available Triggers
- **Guide says:** Triggers include "Variable pay items are added or modified", "Payroll transactions require approval"
- **Actual:** The Workflows page shows general event-based triggers (Employee events, Leave events, etc.). There are **no specific Variable Pay triggers**. The guide fabricates triggers that don't exist.
- **Fix:** Remove the fabricated trigger list. Describe only the actual triggers available in the Workflows section, or note that Variable Pay does not have dedicated workflow triggers.

### C11 — Wrong "+ Add Variable Pay Category" Button Label
- **Location:** Core Tasks → "Create Variable Pay Category"
- **Guide says:** Click **"+ Add Variable Pay Category"**
- **Actual:** The button is labeled **"Add new"**
- **Fix:** Replace with "Add new"

---

## Major Issues (11)

### M1 — Missing Delete Restrictions
- **Location:** Core Tasks → "Delete Variable Pay Category"
- **Guide says:** Simply click delete and confirm
- **Actual:** Categories that are **currently in use** (assigned to employees) may have delete restrictions. The guide does not mention this important constraint.
- **Fix:** Add a warning about delete restrictions for in-use categories

### M2 — Missing Multi-Currency Support
- **Location:** Entire guide
- **Guide says:** Nothing about multi-currency
- **Actual:** The payroll table has **currency tabs** (AED, USD, AUD observed). Variable pay items are entered in the employee's base currency. The Mass Upload spreadsheet includes a "Base Currency" column.
- **Fix:** Add documentation about multi-currency support

### M3 — Missing "Associated Period" Documentation
- **Location:** Core Tasks → Add Variable Pay
- **Guide says:** "Specify the effective date" (single date)
- **Actual:** Variable Pay entries require an **Associated Period** with both a **Start Date** and **End Date** — it's a date range, not a single date.
- **Fix:** Document the date range requirement

### M4 — Missing "Additional Remarks" Field
- **Location:** Core Tasks → Add Variable Pay
- **Guide says:** Nothing about remarks
- **Actual:** The Variable Pay entry form includes an **"Additional Remarks"** free-text field for notes/comments.
- **Fix:** Document this field

### M5 — Missing "Reference" Column in Mass Upload
- **Location:** Core Tasks → "Prepare and Upload Variable Pay File"
- **Guide says:** Columns include "employee identifiers, variable pay categories, amounts, and dates"
- **Actual:** The Bayzat Sheets columns also include **Reference*** (required), **Trade License**, and **Base Currency**.
- **Fix:** List all actual columns

### M6 — Out-of-Scope Daily Wage Calculation Task
- **Location:** Core Tasks → "Configure Daily Wage Calculation"
- **Guide says:** Full task for configuring daily wage calculation method
- **Actual:** Daily Wage Calculation is a **separate feature** with its own user guide. It is not part of Variable Pay configuration.
- **Fix:** Either remove this task entirely or replace it with a brief cross-reference link to the Daily Wage Calculator guide

### M7 — Missing Payment Tracking Section
- **Location:** Entire guide
- **Guide says:** Nothing about payment status tracking
- **Actual:** The payroll table columns include payment status indicators. The guide should document how variable pay items flow through payroll processing and payment tracking.
- **Fix:** Add section on how variable pay items appear in payroll runs

### M8 — Undocumented "Add/Edit Variable Pay Item" Button
- **Location:** Core Tasks
- **Guide says:** Vague instructions about locating variable pay in employee detail
- **Actual:** In the employee detail panel, there is a dedicated **"Add/Edit Variable Pay Item"** button/link in the Variable Pay section that opens the entry form.
- **Fix:** Document the exact button name and location

### M9 — Wrong "View Details" Navigation
- **Location:** Core Tasks → "View Pay Item History"
- **Guide says:** "Click More Options (three dots) on the employee row → Select 'View Details'"
- **Actual:** Same as C4 — click directly on the employee row. No three-dot menu exists per row.
- **Fix:** Correct the navigation method

### M10 — Missing Payroll Table Direct Edit Behaviour
- **Location:** Entire guide
- **Guide says:** Nothing about inline editing
- **Actual:** Some cells in the payroll table are **directly editable** (click to edit amount). The guide doesn't mention this inline editing capability for variable pay columns.
- **Fix:** Document the inline editing behaviour

### M11 — Missing "Variable Pays" Accordion Expand Behaviour
- **Location:** Initial Setup, Feature Discovery
- **Guide says:** Simply navigate to the section
- **Actual:** The "Variable Pays" section in Settings → Payroll is an **accordion panel** that must be expanded/clicked to reveal the category list and "Add new" button. This UX detail is not documented.
- **Fix:** Mention that the section is collapsible and needs to be expanded

---

## Minor Issues (2)

### N1 — Hero Title Shows "variable-pay" (Kebab Case)
- **Location:** Hero banner
- **Guide shows:** "variable-pay" as the title
- **Expected:** "Variable Pay" (proper case, human-readable)
- **Fix:** Update hero title to "Variable Pay"

### N2 — Glossary Term "Variable Pay Category"
- **Location:** Glossary
- **Guide says:** "Variable Pay Category" — Classification template for organizing types of variable compensation
- **Actual:** The UI uses "Variable Pays" for the section and "Pay Items" for the dropdown in the entry form. The term "Variable Pay Category" is not used anywhere in the UI.
- **Fix:** Update glossary term to match UI terminology

---

## Missing Features / Behaviours Not Documented

1. **Multi-currency payroll tabs** — The payroll table has tabs for different currencies (AED, USD, AUD). Variable pay is entered per currency.
2. **Direct cell editing** — Some payroll table cells can be edited inline by clicking on them.
3. **Bayzat Sheets** — The mass upload uses an in-browser spreadsheet called "Bayzat Sheets", not a file upload workflow.
4. **Associated Period date range** — Variable pay entries require both start and end dates, not a single effective date.
5. **Reference field** — Mass upload requires a "Reference" field which is mandatory.
6. **Trade License and Base Currency** — Mass upload columns that are not documented.
7. **Employee detail panel slide-over** — The actual UX pattern (click row → slide-over panel) is not accurately described.
8. **Variable Pay section in employee detail** — Has a dedicated "Add/Edit Variable Pay Item" button.
9. **Accordion behaviour** — The Variable Pays section in Settings is collapsible.

---

## Recommendations

1. **Re-validate all screenshots** — Several screenshots may show incorrect or outdated UI states given the number of navigation and form field errors found.
2. **Remove Daily Wage Calculation task** — This belongs in a separate guide and confuses the scope.
3. **Remove Adjustments Tab subtask** — This is fabricated; Adjustments handles Additions/Deductions only.
4. **Add a "How Variable Pay Flows Through Payroll" section** — Explaining the lifecycle from entry → payroll run → payslip.
5. **Test the mass upload flow end-to-end** — The current description is completely wrong (file upload vs. Bayzat Sheets).
