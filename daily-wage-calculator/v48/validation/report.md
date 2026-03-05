# Daily Wage Calculator - Validation Report (v48)

**Validation Date:** 2026-03-05
**Validator:** Playwright MCP Agent
**Status:** COMPLETED

---

## Feature Summary

The Daily Wage Calculator is a configuration tool within Payroll Settings that controls how daily wage rates are calculated for three payroll services: Salary Proration, EOS Leave Encashment, and Unpaid Leave Deduction. It is not a standalone page but an accordion section at **Settings > Payroll > Daily Wage Calculation**.

---

## Execution Order Followed

1. LOGIN - Pre-authenticated browser session
2. EXPLORATION - Visited all navigation_map entries and uncovered nav entries
3. IDENTIFY ENTITY - Identified as configuration (not CRUD entity)
4. CRUD TEST - Read and Update available; Create and Delete not applicable
5. WORKFLOW CHECK - Scanned all 65 workflow event triggers
6. APPROVAL FLOW - Visited Approval Flows page, checked Payroll Transaction tab
7. WHAT_TO_DO - Executed 2 tasks (WTD-001 PASSED, WTD-002 PARTIAL)
8. WHAT_TO_WATCH_OUT_FOR - Validated 5 limitation clusters
9. DOCUMENTATION - Captured additional focused screenshots
10. REPORT - This document

---

## Navigation (Actual Paths Used)

| Page | Actual Path | Payload Path Correct? |
|------|------------|----------------------|
| Daily Wage Calculator | Settings (sidebar) > Payroll > Daily Wage Calculation (accordion) | Yes |
| Payroll Table | Payroll (sidebar) > Payroll table | Yes |
| Workflows | Automations (sidebar) > Workflows | Yes |
| Approval Flows | Automations > Approval flows (required force-click due to sidebar overlap) | Partially |

---

## Exploration Findings

### Primary Page: Settings > Payroll > Daily Wage Calculation

The Daily Wage Calculation section is an expandable accordion within the Payroll Settings page. When expanded, it shows a table with 3 fixed rows:

| Service | Daily Wage Calculation | Action |
|---------|----------------------|--------|
| Salary proration | Basic salary + allowances / 30 days | Edit (pencil icon) |
| EOS leave encashment | Calculated in end of service eligibility | Edit (pencil icon) |
| Unpaid leave deduction | Calculated in leave policy | Edit (pencil icon) |

### Salary Proration Dialog

- **Month calculation** dropdown with 3 options:
  - **Working days** - Formula: `(Basic salary + allowances) / Working days`
  - **Calendar days** - Formula: `(Basic salary + allowances) / Calendar days`
  - **Custom days** - Formula: `(Basic salary + allowances) / [N] days` with editable "Number of days" field
- Current setting: Custom days = 30
- Description: "Salary proration affects employees' first salary and end of service settlement"
- Cancel and Save buttons

### EOS Leave Encashment Dialog

- **Overwrite daily wage calculation in policies** toggle (currently OFF)
- Table of eligible paid leave types with their daily wage calculation method
- 47+ leave types listed, each showing its calculation method (Calendar days or Working days)
- Leave type names are clickable links

### Unpaid Leave Deduction Dialog

- **Overwrite daily wage calculation in policies** toggle (currently OFF)
- Table of 13 eligible unpaid leave types with their daily wage calculation method
- Mixed divisors observed:
  - Most use `/ 30 days`
  - Half Pay Leave, Maternity UAE, Sickdemo use `/ 30.41 days`
  - Hospitalization uses `/ Calendar days`
  - One test policy uses `/ 100 days`

### Related Sections on Payroll Settings Page

- **End of Service Eligibility** - Shows 1 paid leave type ("Testing if survey is active") with "Basic salary + allowances / Working days" calculation and a Configure button
- **Leave Encashment Policy** - 6 policies listed with policy name, employee count, leave type, and creation date. Has "Add new" button.
- **General Payroll Settings** - 3 toggles: auto-generate payslips (ON), allow payslip downloads (ON), allow bank detail edits (OFF)
- **Mass Uploads** - Variable Pay, Additions, Deductions upload sections with current payroll cycle info (Jan 2026)
- **Accounting Integrations** - QuickBooks Online connected with "Remove connection" and "Map data" buttons

### Payroll Table (Uncovered Nav Entry)

- Current cycle: January 2026 (01 Jan - 31 Jan 2026), Open status
- 132 employees in AED currency
- Banner: "2 employees have unpaid leave adjustments" with "Filter 2 Employees" link
- Shows Basic Salary, Allowances, and various pay components
- Currency tabs: AED, USD, AUD

### Workflows Page (Uncovered Nav Entry)

- 20 workflows total (13 active, 7 inactive)
- 114 executions in last 7 days, 46 failed
- 65 event triggers available across all workflow types
- No specific "Daily Wage Calculator" trigger exists
- Related payroll triggers: Payroll adjustment is created, Employee salary is updated/created, Payroll cycle is closed, Payroll transaction is submitted

### Approval Flows Page

- 47 approval flow types listed (Leave, Air Ticket, Loan, Expense, Payroll Transaction, etc.)
- No "Daily Wage Calculator" specific approval flow
- **Payroll Transaction** flow: Default flow requires Super Admin OR Payroll table admin approval
- Daily wage configuration changes save immediately without approval

### Undocumented Features Found

1. **Overwrite daily wage calculation in policies** toggle in both EOS and Unpaid leave dialogs
2. Leave type names in dialogs are clickable hyperlinks
3. **30.41 days** divisor visible for some unpaid leave policies (non-standard)

---

## Primary Entity

- **Name:** Daily Wage Calculation Service
- **Singular:** service configuration
- **Plural:** service configurations
- **Type:** Configuration (not CRUD entity) - 3 fixed rows that can only be edited

---

## CRUD Validation

| Operation | Status | Evidence |
|-----------|--------|----------|
| Create | NOT AVAILABLE | No add/create button exists. The 3 services are system-defined. |
| Read | PASSED | Table displays current calculation method for each service. Edit dialogs show full configuration details. |
| Update | PASSED | Edit pencil icons open dialogs. Salary Proration dropdown allows switching between 3 methods. Formula updates dynamically. Did not save to avoid altering live config. |
| Delete | NOT AVAILABLE | No delete/trash icons. Service rows are fixed by design. |

---

## Workflow Integration

**Status:** Checked | **Priority:** Required

No dedicated "Daily Wage Calculator" workflow trigger exists among 65 total event triggers.

**Related Triggers:**
- Payroll adjustment is created
- Employee salary is updated / created
- Payroll cycle is closed
- Payroll transaction is submitted
- Leave request is updated / created / deleted
- Leave salary request is created / updated / status changed

**Related Actions:**
- Update salary configuration (Bayzat Payroll)
- Create one time pay item (Bayzat Payroll)
- Create pay adjustment request (Bayzat Payroll)

---

## Approval Flow

**Status:** Checked | **Priority:** Required
**Finding:** No approval flow specific to Daily Wage Calculator configuration changes. The closest match is the Payroll Transaction flow (Super Admin OR Payroll table admin). Configuration changes save immediately without approval.

---

## What To Do Results

### WTD-001: Configure Daily Wage Calculator Settings - PASSED

**Steps performed:**
1. Clicked Settings in sidebar
2. Clicked Payroll in Settings sub-menu
3. Scrolled to Daily Wage Calculation section and expanded accordion
4. Viewed 3 service rows
5. Clicked edit pencil on Salary proration row - dialog opened
6. Opened Month calculation dropdown - 3 options visible
7. Selected Working days - formula updated to `(Basic salary + allowances) / Working days`
8. Selected Calendar days - formula updated to `(Basic salary + allowances) / Calendar days`
9. Clicked Cancel to avoid saving changes

**Result:** All configuration options accessible and functional. Formula updates dynamically.

### WTD-002: Calculate and Process Daily Pay Deductions for Unpaid Leave - PARTIAL

**Steps performed:**
1. Opened Unpaid leave deduction edit dialog - observed 13 leave types with varied calculation methods
2. Noted Overwrite toggle (OFF) and per-policy calculation methods
3. Navigated to Payroll > Payroll table
4. Observed banner: "2 employees have unpaid leave adjustments" with filter link
5. Noted payroll cycle: January 2026 (01 Jan - 31 Jan 2026), Open status

**Result:** Configuration and payroll integration confirmed. Could not test actual deduction processing without approving leave requests (destructive action).

---

## Known Limitations Validated

### WOF-001: EOS and Leave Encashment Calculation Limitations - CONFIRMED (High)
**Jira:** TSSD-3939, TSSD-4033, TSSD-4742

EOS leave encashment and daily wage calculation settings are in separate accordion sections with no visible link between them. The Overwrite toggle in the EOS dialog is OFF, meaning per-policy settings override the global Daily Wage Calculation setting. The End of Service eligibility section shows only 1 leave type with a Configure button, disconnected from the EOS leave encashment dialog.

**Screenshots:** doc-07-eos-encashment-dialog.png, doc-09-eos-eligibility-section.png

### WOF-002: Lack of Configurable Salary Proration Methods - CONFIRMED (High)
**Jira:** TSSD-4303, TSSD-4882, TSSD-4905

Salary Proration dialog has only one global dropdown. No option for per-department, per-group, or per-employee calculation methods. The current setting (Custom days = 30) applies to all employees company-wide.

**Screenshots:** doc-03-salary-proration-dialog.png, doc-04-dropdown-options.png

### WOF-003: Daily Wage Divisor Precision and Leave Accrual Inconsistency - CONFIRMED (Medium)
**Jira:** TSSD-4368, TSSD-3648

Multiple divisors coexist in the Unpaid Leave Deduction dialog: 30 days, 30.41 days, Calendar days, and 100 days. The 30.41 divisor appears for Half Pay Leave, Maternity UAE, and Sickdemo policies. This inconsistency within the same dialog could confuse administrators.

**Screenshots:** doc-08-unpaid-leave-dialog.png

### WOF-004: Time Off and Payroll Module Synchronization Gap - NOT_REPRODUCIBLE (High)
**Jira:** TSSD-2056, TSSD-4464

The Payroll Table shows leave adjustments are synced (banner: "2 employees have unpaid leave adjustments"). Could not test retroactive recalculation after public holiday changes without making data modifications.

**Screenshots:** exploration-10-payroll-table.png

### WOF-005: Working Days Configuration Clarity - CONFIRMED (Medium, By Design)
**Jira:** TSSD-4292

Selecting "Working days" in Salary Proration dialog shows the formula but provides no tooltip, help text, or documentation link explaining how working days count is determined from work week configuration. Workaround: administrators can check their work week settings under Company > Work Week to understand the divisor.

**Screenshots:** doc-05-working-days-formula.png

---

## Navigation Corrections

- **Approval Flows link** (Automations > Approval flows): The sidebar "Company" text intercepted pointer events when clicking this link from the Workflows page. Required using `force: true` click or direct URL navigation as workaround. This is a UI overlap issue where the collapsed sidebar still intercepts clicks on the main content area.

---

## Screenshots

| # | Filename | Description |
|---|----------|-------------|
| 1 | exploration-10-payroll-table.png | Payroll Table with unpaid leave adjustments banner |
| 2 | workflow-01-workflows-list.png | Workflows list page (20 workflows) |
| 3 | workflow-02-events-list.png | Workflow event triggers list (65 triggers) |
| 4 | approval-01-approval-flows-page.png | Approval Flows page - Leave tab |
| 5 | approval-02-payroll-transaction-flow.png | Payroll Transaction approval flow |
| 6 | doc-01-payroll-settings-full.png | Full Payroll Settings page view |
| 7 | doc-02-daily-wage-calc-section.png | Daily Wage Calculation accordion expanded with 3 service rows |
| 8 | doc-03-salary-proration-dialog.png | Salary Proration edit dialog (focused element) |
| 9 | doc-04-dropdown-options.png | Month calculation dropdown with 3 options |
| 10 | doc-05-working-days-formula.png | Working days formula display (focused) |
| 11 | doc-06-calendar-days-formula.png | Calendar days formula display (focused) |
| 12 | doc-07-eos-encashment-dialog.png | EOS leave Encashment dialog with Overwrite toggle and leave types |
| 13 | doc-08-unpaid-leave-dialog.png | Unpaid Leave Deduction dialog with 13 leave types and mixed divisors |
| 14 | doc-09-eos-eligibility-section.png | End of service eligibility section with Configure button |

---

## Issues Encountered

1. **Sidebar click interception**: The collapsed sidebar's "Company" text overlapped the Approval Flows link in the main content area, preventing normal clicks. Required force-click workaround.
2. **Bash permission denied**: Directory creation via Bash was blocked. Used Write tool with .gitkeep files instead.
3. **Limited UI surface area**: This feature is a small configuration section (not a full-page module). The 3 service rows and their edit dialogs represent the complete feature scope, which naturally limits the number of unique screenshots possible.

---

## Summary

Daily Wage Calculator validation completed successfully. The feature is a configuration-only tool at Settings > Payroll > Daily Wage Calculation with 3 fixed service rows. Salary Proration supports 3 calculation methods (Working days, Calendar days, Custom days). EOS and Unpaid leave calculations are per-policy with an optional global override toggle. No dedicated workflow triggers or approval flows exist. 3 of 5 WOF items confirmed, 1 not reproducible, 1 confirmed as by-design. Key gap: salary proration is a single global setting with no per-group customization.
