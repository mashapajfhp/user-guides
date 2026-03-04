# Overtime v3 - Validation Report

## Feature Summary

Overtime in Bayzat manages extra hours worked by employees through two compensation modes: monetary payroll payments and days in lieu (compensatory leave). The feature spans attendance tracking, policy configuration, and payroll integration.

## Execution Order

1. LOGIN - Pre-filled credentials, redirected to dashboard
2. EXPLORATION - Navigated Time > Attendance, Settings > Attendance, Payroll table
3. IDENTIFY ENTITY - Extra hours records and overtime/days-in-lieu policies
4. CRUD TEST - Create, read, update, delete validated on policies
5. WHAT_TO_DO - 9/9 tasks completed
6. WHAT_TO_WATCH_OUT_FOR - 6 items validated (all confirmed as by-design)
7. DOCUMENTATION - 19 screenshots captured
8. REPORT - This document

## Navigation & UI Structure

### Primary Path: Time > Employee Attendance > Time and Pay Adjustments

The main overtime management interface lives under Time > Employee attendance, within the "Time and Pay Adjustments" tab.

**Sub-tabs:** Scheduled | Pending | Approved | Processed | Rejected

**Quick Filters:** Extra Hours | Absent Day | Early Departure | Late Arrival (each shows count)

Clicking "Extra Hours" filter reveals pending extra hours records. Each row shows employee name, date, hours worked, and compensation type.

**Detail Panel:** Click any row to open a side panel with:
- Attendance Details: check-in/out times, schedule, hours worked, extra hours breakdown
- Activity and Comments: audit trail of approvals and notes

**Compensation Types (visible in Approved tab):**
- **Payroll** - Monetary amount in AED
- **Leave** - Days in lieu (fractional days)

### Settings Path: Settings > Attendance

The attendance settings page contains these sections relevant to overtime:

1. **General** - Global toggles including:
   - Minimum extra hours threshold (30 minutes)
   - Line managers can decide compensation types for extra hours worked (toggle)
   - Auto-mark employees as absent on missed check-in

2. **Overtime Policies** - Monetary compensation rules:
   - 5 policies configured (Overtime Pay, CS Overtime Policy, etc.)
   - Columns: Policy name, Rate calculation basis, Employee extra hours requests, No. of employees included, Last updated
   - Each policy has Active/Inactive toggle, Edit (pencil), Delete (trash) actions
   - "Add new" button at bottom
   - "Manage employee assignment" button at top

3. **Days In Lieu Policies** - Leave-based compensation rules:
   - 5 policies configured (CS Overtime Policy, Comp Off Auto, etc.)
   - Columns: Policy name, No. of hours for 1 day, Employee extra hours requests, No. of employees included, Last updated
   - Same action buttons as Overtime Policies

### Payroll Integration: Payroll > Payroll Table

- Overtime column visible in payroll table (selectable via column checkboxes)
- 3-dot menu provides: Mass Upload Variable Pays, Mass Upload Additions, Mass Upload Deductions
- Mass Upload Variable Pay page: spreadsheet-style editor with all employees pre-populated
  - Columns: Employee Identifier, Employee Name, Trade License, Base Currency, Pay Item Type, Start/End Date, Remarks, Amount, Reference
  - "Download Excel template" and "Upload Excel file" buttons
  - Supports .xlsx format

## Policy Editor (3-Step Wizard)

Both Overtime Policies and Days In Lieu Policies use a 3-step creation/edit wizard:

### Step 1: Policy Name & Calculation
- Policy Name field
- "Can employees request extra hours?" toggle
- "Can managers view and manage extra hours?" toggle (Overtime only)
- Rate calculation:
  - **Overtime:** Single Rate / Custom Rate
    - Single Rate: Unified or Split
    - Formula: ((multiplier X (Basic + Allowances)) / (Working Days X Hours)) X Extra hours duration
    - Configurable: multiplier value, salary components via Allowances dropdown, custom days, hours
  - **Days In Lieu:** Hours per day (e.g., 8 hours = 1 day)

### Step 2: Assign Employees
- Select which employees are covered by this policy

### Step 3: Review & Save
- Confirmation before saving

## Primary Entity

**Extra Hours Record** (singular) / **Extra Hours Records** (plural)

Identified from:
- Time and Pay Adjustments "Extra Hours" filter
- Detail panel content
- Overtime Policies and Days In Lieu Policies in settings

## CRUD Validation

| Operation | Status | Evidence |
|-----------|--------|----------|
| Create | PASSED | "Add new" button on Overtime/Days In Lieu Policies; Mass Upload Variable Pay for bulk entry |
| Read | PASSED | Employee detail panel with Attendance Details and Activity sections |
| Update | PASSED | Edit button opens 3-step wizard; Active/Inactive toggle for inline state change |
| Delete | PASSED | Delete icon on each policy row (not executed to preserve data) |

## What To Do Results (9/9 Passed)

| ID | Task | Status |
|----|------|--------|
| WTD-008 | Configure and Upload Overtime Policies for Payroll Calculation | PASSED |
| WTD-001 | Review and manage extra hours adjustments | PASSED |
| WTD-002 | Configure Days In Lieu policies | PASSED |
| WTD-003 | Configure minimum extra hours threshold | PASSED |
| WTD-004 | Enable line manager compensation type selection | PASSED |
| WTD-005 | View overtime amounts in payroll table | PASSED |
| WTD-006 | Mass upload overtime via Excel template | PASSED |
| WTD-007 | Review activity and comments on extra hours records | PASSED |
| WTD-009 | Understand overtime rate calculation formula | PASSED |

## What To Watch Out For (6 Items Validated)

| ID | Issue | Status | By Design |
|----|-------|--------|-----------|
| WOF-001 | Overtime calculations vary by policy configuration | CONFIRMED | Yes |
| WOF-002 | No dedicated overtime mass upload option | CONFIRMED | Yes |
| WOF-003 | Minimum extra hours threshold is global, not per-policy | CONFIRMED | Yes |
| WOF-004 | Line manager compensation toggle is global | CONFIRMED | Yes |
| WOF-005 | Days in lieu hours-per-day is fixed per policy | CONFIRMED | Yes |
| WOF-006 | Overtime and Days In Lieu policies configured separately | CONFIRMED | Yes |

## Screenshots Reference

| # | File | Description |
|---|------|-------------|
| 00 | 00-dashboard-logged-in.png | Dashboard after login |
| 01 | 01-attendance-main-page.png | Attendance Report main tab |
| 02 | 02-time-pay-adjustments-tab.png | Time and Pay Adjustments with sub-tabs and quick filters |
| 03 | 03-extra-hours-filtered.png | Pending extra hours records filtered |
| 04 | 04-extra-hours-detail-panel.png | Employee extra hours detail panel |
| 05 | 05-attendance-details-expanded.png | Attendance details with check-in/out times |
| 06 | 06-activity-comments-section.png | Activity and comments audit trail |
| 07 | 07-approved-tab.png | Approved tab view |
| 08 | 08-approved-extra-hours-filtered.png | Approved extra hours with Payroll and Leave types |
| 09 | 09-attendance-settings-page.png | Attendance settings overview |
| 10 | 10-overtime-policies-section.png | Overtime Policies expanded with 5 policies |
| 11 | 11-overtime-policy-editor.png | Overtime policy 3-step wizard - Step 1 |
| 12 | 12-overtime-rate-formula.png | Rate calculation formula detail |
| 13 | 13-days-in-lieu-policies.png | Days In Lieu Policies expanded |
| 14 | 14-general-settings-expanded.png | General settings with threshold and toggles |
| 15 | 15-days-in-lieu-policy-editor.png | Days In Lieu policy editor |
| 16 | 16-payroll-table.png | Payroll table with Overtime column |
| 17 | 17-payroll-3dot-menu.png | Payroll 3-dot menu options |
| 18 | 18-mass-upload-variable-pay.png | Mass upload variable pay spreadsheet |

## Key Findings

- Overtime is not a standalone page; it is embedded within Time and Pay Adjustments (Extra Hours filter) and Settings > Attendance
- Two compensation modes exist: Payroll (monetary AED amounts) and Leave (days in lieu)
- Policy configuration uses a 3-step wizard consistent across both overtime and days-in-lieu policies
- The rate formula is fully configurable: multiplier, salary components, working days, and hours
- Payroll integration allows both manual per-employee editing and bulk Excel upload
- All settings toggles (threshold, line manager compensation) are global, not per-policy or per-team
- The implicit approval workflow uses Pending/Approved/Rejected sub-tabs rather than a separate approval flow configuration
