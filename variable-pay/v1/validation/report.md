# Variable Pay - Validation Report

**Feature:** Variable Pay
**Version:** v1
**Status:** COMPLETED
**Date:** 2026-02-25
**Category:** Payroll

---

## Execution Order Followed

1. LOGIN - Authenticated as admin user (job+demoacct@bayzat.com)
2. EXPLORATION - Navigated to Payroll > Payroll table, Settings > Payroll, and Mass Upload pages
3. IDENTIFY ENTITY - Primary entity: Variable Pay Item (categories + individual employee items)
4. CRUD TEST - Tested create, read, update, delete for variable pay categories
5. WORKFLOW CHECK - Verified Bayzat Payroll workflow triggers (14 events)
6. APPROVAL FLOW - Confirmed no Variable Pay approval tab; Payroll Transaction flow exists
7. WHAT_TO_DO - Executed 11 tasks (10 passed, 1 not available)
8. WHAT_TO_WATCH_OUT_FOR - Validated 11 known limitations (6 confirmed, 4 not reproducible, 1 different)
9. DOCUMENTATION - Captured 31 screenshots
10. REPORT - Generated this report

---

## Feature Overview

Variable Pay in Bayzat manages recurring and one-time compensation items (commissions, bonuses, overtime, etc.) within the monthly payroll cycle. It operates across two main areas: the Payroll Table for employee-level management and Settings > Payroll for category configuration and bulk operations.

### Navigation Paths

- **Primary:** Payroll > Payroll table (employee-level variable pay)
- **Configuration:** Settings > Payroll > Variable Pays section
- **Mass Upload:** Settings > Payroll > Mass Upload Variable Pay > Start
- **Alternative Mass Upload:** Payroll > More options (...) > Mass Upload Variable Pays

---

## Exploration Findings

### Payroll Table
- Payroll Cycle: December 2025 (Open), 01 Dec 2025 - 31 Dec 2025
- Currency tabs: AED (128 employees), USD (2), AUD (1)
- Summary cards: Total net pay, Processed till date, Unpaid amount pending approval, Total unpaid
- Column checkboxes for toggling variable pay visibility (Commission, Bonus for performance, COLA, Overtime, etc.)
- Three-dot menu: Download Gratuity File, Close Payroll Cycle, Mass Upload Variable Pays, Mass Upload Additions, Mass Upload Deductions

### Employee Detail Panel
- Opens on row click showing: Basic Salary and Allowances, Variable Pay, Adjustments, Work Expenses
- Variable Pay section shows items with amount, date range remarks, and View/Edit + Add/Edit Variable Pay Item links
- Navigation: Previous/Next buttons to browse through employees

### Settings > Payroll
- General settings: Auto-generate payslips, allow downloads, allow bank detail edits
- Configure salaries and bank details (Manage button)
- Daily Wage Calculation: Salary proration (Basic salary + allowances / 30 days), EOS leave encashment, Unpaid leave deduction
- Mass Uploads: Variable Pay, Additions, Deductions (each with Start button)
- Category sections: Allowances, Variable Pays (10 categories), Additions, Deductions, Social Security Contributions

### Undocumented Features Found
- Payroll table column selection with aggregate totals per variable pay type
- Filter for employees with missing/critical information
- Unpaid leave adjustments warning banner
- QuickBooks Online integration in payroll settings

---

## Primary Entity

**Name:** Variable Pay Item
**Singular:** variable pay item | **Plural:** variable pay items
**Identified from:** Employee detail panel "Variable Pay" section and Settings > Payroll > Variable Pays category list

---

## CRUD Validation

| Operation | Status | Evidence |
|-----------|--------|----------|
| Create | PASSED | Created "Validation Test VP" category via Settings > Payroll > Variable Pays > Add new |
| Read | PASSED | Employee detail panel shows variable pay items with amounts and remarks |
| Update | PASSED | Edit (pencil) icons on all categories; View/Edit link in employee panel |
| Delete | PASSED | Deleted "Validation Test VP" with confirmation dialog |

---

## Workflow Integration

**Status:** Checked (required priority)

Bayzat Payroll app provides 14 workflow triggers:
- Employee salary is updated/created
- Leave salary request is created/updated/deleted/status changed
- **Payroll adjustment is created** (most relevant to Variable Pay)
- Payroll cycle is closed
- Payroll transaction is submitted
- Loan request is created/updated/deleted/status changed
- Air ticket cycle renewal is due

**Key finding:** No specific "Variable pay is created/updated" trigger exists. "Payroll adjustment is created" is the closest available trigger.

---

## Approval Flow

**Status:** Checked (required priority)

**No dedicated Variable Pay approval flow tab exists.** The Approval flows page includes tabs for: Leave, Air Ticket, Loan, Expense, Payroll Transaction, Leave Salary Request, Attendance Regularization, Leave Encashment, Accounts Payable, Employee Violation, Shift Change Request, Grievance Submission, Business Trip Request, Hourly permission, Bank Account Update, Work From Home Request.

The **Payroll Transaction** approval flow (closest to Variable Pay) requires: Super Admin OR Payroll table admin.

This confirms WOF-009: Variable pay items can be added and processed without any approval workflow.

---

## What To Do Results

| Task ID | Task | Status | Notes |
|---------|------|--------|-------|
| WTD-001 | Upload variable pay in bulk | PASSED | Mass Upload VP interface accessible with 124 employees, dual entry methods |
| WTD-002 | Add individual employee variable pay | PASSED | Detail panel with Add/Edit Variable Pay Item link confirmed |
| WTD-003 | Create custom VP categories | PASSED | Settings > Payroll > Variable Pays > Add new. Created and deleted test category |
| WTD-004 | Mass upload salary/bank details | PASSED | Manage button accessible in Settings > Payroll |
| WTD-005 | Create allowance categories | PASSED | Settings > Payroll > Allowances > Add new available |
| WTD-006 | Mass upload additions | PASSED | Mass Upload Additions with Start button confirmed |
| WTD-007 | Request individual salary addition | PASSED | Adjustments section with Add an adjustment link confirmed |
| WTD-008 | Create deduction categories | PASSED | Settings > Payroll > Deductions > Add new available |
| WTD-009 | Create addition categories | PASSED | Settings > Payroll > Additions > Add new available |
| WTD-010 | Configure salary proration | PASSED | Daily Wage Calculation expanded: 3 configurable services |
| WTD-011 | Track insurance addition request | NOT_AVAILABLE | Endorsements section not accessible in test account |

---

## Known Limitations Validated

| Issue ID | Theme | Status | Severity |
|----------|-------|--------|----------|
| WOF-001 | Bulk Upload Inefficiencies | CONFIRMED | Medium |
| WOF-002 | Payslip Reporting Constraints | CONFIRMED | High |
| WOF-003 | Configuration Rigidity | CONFIRMED | Medium |
| WOF-004 | No Self-Service Deletion | CONFIRMED | Medium |
| WOF-005 | Data Integrity Issues | NOT REPRODUCIBLE | Medium |
| WOF-006 | UI/UX Interruptions | CONFIRMED | Medium |
| WOF-007 | No Notification Suppression | NOT REPRODUCIBLE | Medium |
| WOF-008 | Template Customization Limits | NOT REPRODUCIBLE | Medium |
| WOF-009 | Missing VP Approval Workflow | CONFIRMED | Medium |
| WOF-010 | Inefficient Bulk Deductions | CONFIRMED | Medium |
| WOF-011 | Inconsistent Employee ID in Exports | NOT REPRODUCIBLE | Medium |

### Confirmed Issues Detail

**WOF-001:** Mass Upload VP page requires manual data entry for all employees. No pre-population, no inline upload from payroll table.

**WOF-002:** Variable pay remarks only visible in employee detail panel hover. Not visible in exports or payslips.

**WOF-003:** Delete confirmation shows permanent deletion with no recovery option. No payroll cycle date change in UI.

**WOF-004:** No bulk delete or reset options in Settings or Payroll Table.

**WOF-006:** Column checkboxes hide variable pay data and associated history when unchecked.

**WOF-009:** No Variable Pay tab in Approval flows. Items processed without approval step.

**WOF-010:** Mass upload table uses one row per employee per pay item type, requiring multiple rows for multiple items.

---

## Screenshots Reference

### Exploration
- `exploration-01-payroll-table-loading.png` - Payroll table main view
- `exploration-02-more-options-menu.png` - Three-dot menu with Mass Upload options
- `exploration-03-employee-row-view-details.png` - Employee detail panel (Abel Bee)
- `exploration-05-adjustments-tab.png` - Adjustments page
- `exploration-07-settings-payroll.png` - Payroll settings overview
- `exploration-09-settings-payroll-categories.png` - Category sections (Allowances, Variable Pays, etc.)
- `exploration-10-variable-pays-categories.png` - Variable Pays list (10 categories)

### CRUD
- `crud-01-create-variable-pay-category.png` - New Variable Pay modal
- `crud-02-variable-pay-category-created.png` - Category created
- `crud-03-variable-pay-category-page2.png` - Validation Test VP on page 2
- `crud-04-delete-confirmation.png` - Delete confirmation dialog

### Tasks
- `task-01-mass-upload-variable-pay.png` - Mass Upload VP welcome dialog
- `task-01-mass-upload-interface.png` - Mass Upload VP data table
- `task-02-payroll-table.png` - Payroll table with employee data
- `task-02-employee-detail-panel.png` - Employee variable pay detail
- `task-10-daily-wage-calc.png` - Daily Wage Calculation settings
- `task-10-settings-payroll.png` - Settings > Payroll overview

### Workflows
- `workflow-01-workflows-list.png` - Workflows page (15 active)
- `workflow-04-event-selection.png` - Application selection for events
- `workflow-05-payroll-triggers.png` - Bayzat Payroll triggers (top)
- `workflow-06-payroll-triggers-scrolled.png` - Bayzat Payroll triggers (bottom)

### Approval Flows
- `approval-01-approval-flows-page.png` - Approval flows main page
- `approval-02-tabs-list.png` - All approval flow tabs
- `approval-03-payroll-transaction-flow.png` - Payroll Transaction flow config

---

## Session Health

- Login attempts: 1 (successful)
- Session losses: 0
- Tour dismissals: 0 (no tours found)
- Total screenshots: 31
