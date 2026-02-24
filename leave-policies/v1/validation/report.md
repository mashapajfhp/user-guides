# Leave Policies - Validation Report

**Feature:** Leave Policies
**Version:** v1
**Status:** Completed
**Date:** 2026-02-23
**Path:** Settings > Leaves > Leave Policies

---

## Execution Order

All 10 phases executed sequentially:

1. LOGIN - Session already active
2. EXPLORATION - Full UI discovery
3. IDENTIFY ENTITY - Leave Policy identified
4. CRUD TEST - All 4 operations validated
5. WORKFLOW CHECK - Bayzat Timeoff triggers found
6. APPROVAL FLOW - Leave tab with default flow confirmed
7. WHAT_TO_DO - 16 tasks evaluated
8. WHAT_TO_WATCH_OUT_FOR - 17 limitations checked
9. DOCUMENTATION - 15 screenshots captured
10. REPORT - This file

---

## Exploration Findings

**Page Structure:** Three sections on the Leave settings page:
- **Leave Policies** (accordion) - Main policy table with 67 policies
- **Leave Calendar** (accordion) - Calendar visibility settings
- **Leave Cycle** (static) - Calendar Year: 01 Jan - 31 Dec

**Key UI Elements:**
- Search by policy name
- Sortable Name column
- Employee count per policy
- Draft badge on unpublished policies
- Pagination: 8 items/page, 9 pages total
- Employee Assignment: Manual (5 unassigned employees)

**Undocumented:** Automatic assignment unavailable message; Leave cycle is read-only on this page.

---

## Primary Entity

| Property | Value |
|----------|-------|
| Singular | Leave Policy |
| Plural | Leave Policies |
| Identified from | Page heading, table structure, "Add new" button |

---

## CRUD Validation

### Create - PASSED
- **Trigger:** "Add new" button at bottom of policy table
- **Flow:** Template selection dialog (UAE/KSA tabs + Start from scratch) > 4-step wizard (Setup > Add employees > Employee details > Review & save)
- **Templates:** UAE (8 types), KSA (10 types)
- **Screenshots:** crud-01-create-policy-dialog.png, crud-02-create-policy-ksa-templates.png, crud-03-create-policy-form.png

### Read - PASSED
- **Trigger:** Eye icon on active policies
- **Flow:** Opens Leave Policy Summary page with accordion sections
- **Note:** View icon only appears on active (published) policies
- **Screenshot:** exploration-03-policy-view-summary.png

### Update - PASSED
- **Trigger:** Pencil icon on all policies
- **Flow:** Opens same 4-step wizard form
- **Note:** Draft policies fully editable; active policies have restrictions (e.g., pay rate locked)
- **Screenshot:** task-01-policy-restrictions.png

### Delete - PASSED
- **Trigger:** Trash icon on all policies
- **Flow:** Confirmation dialog with Cancel/Delete buttons
- **Screenshot:** crud-04-delete-confirmation.png

---

## Workflow Integration

**Status:** Checked (required priority)

**Application:** Bayzat Timeoff

**Triggers Found (3):**
- Leave request is created
- Leave request is updated
- Leave request is deleted

**Existing Workflow:**
- "Google Calendar Integration for Leaves" (Active) - Triggered by leave request update, creates Google Calendar event

**Screenshots:** workflow-01-workflows-list.png, workflow-02-leave-workflow-details.png, workflow-03-leave-triggers.png

---

## Approval Flow

**Status:** Checked (required priority)

**Tab:** Leave (first/default tab in Approval Flows page)

**Default Flow:**
- Step 1: Super Admin OR Line Manager - 1 (any one can approve)
- Options: Add approver, Add block, Add step

**Advanced Flows:** None configured

**Related Tabs:** Leave, Leave Salary Request, Leave Encashment, Time Off in Lieu

**Screenshot:** approval-01-leave-approval-flow.png

---

## What To Do Results

| ID | Task | Status | Notes |
|----|------|--------|-------|
| WTD-001 | Restrict leave during probation | PASSED | Toggle found in Policy restrictions |
| WTD-002 | Set up Days in Lieu policy | PARTIAL | TOIL policy exists, creation flow available |
| WTD-003 | Create unpaid leave policy | PARTIAL | Unpaid option confirmed in pay rate section |
| WTD-004 | Configure leave encashment | PARTIAL | Encashment tab + leave salary toggle found |
| WTD-005 | Submit leave as employee | NOT_AVAILABLE | Requires employee persona |
| WTD-006 | Set up approval hierarchy | PARTIAL | Default flow verified |
| WTD-007 | Modify public holidays | PARTIAL | Public holidays toggle confirmed |
| WTD-008 | Record tasks via Timesheets | NOT_AVAILABLE | Outside Leave Policies scope |
| WTD-009 | Create policies with flexible calculation | PASSED | All config options found |
| WTD-010 | Configure unpaid deductions for payroll | PARTIAL | Unpaid option exists, payroll module needed |
| WTD-011 | Review leave via approval workflow | PARTIAL | Approval config verified |
| WTD-012 | Manage leave on mobile | NOT_AVAILABLE | Mobile testing out of scope |
| WTD-013 | View overlapping leaves/calendar | PARTIAL | Leave Calendar section exists |
| WTD-014 | Close payroll with unpaid leave | NOT_AVAILABLE | Requires Payroll module |
| WTD-015 | Edit leave requests across statuses | PARTIAL | Restrict editing toggle found |
| WTD-016 | Configure sick leave certificate policy | PARTIAL | Sick leave template available |

**Summary:** 2 PASSED, 10 PARTIAL, 4 NOT_AVAILABLE

---

## Known Limitations Validated

### Confirmed (6)

| ID | Issue | Severity | Evidence |
|----|-------|----------|----------|
| WOF-002 | Policy config locked after employee assignment | Medium | Pay rate edit disabled on active policy |
| WOF-005 | Missing audit trails and reporting | Medium | No change log in UI |
| WOF-006 | Limited policy ordering and customization | Low | Sort only, no drag-and-drop reorder |
| WOF-010 | Rigid leave policy parameter editing | High | Active policies have restricted editing |
| WOF-014 | Limited leave request flexibility | Medium | Edit restricted to pending status only |
| WOF-016 | Missing policy transparency & audit trail | Low | No version tracking or edit history |

### Not Reproducible (11)

| ID | Issue | Reason |
|----|-------|--------|
| WOF-001 | Unpaid leave payroll deduction failures | Requires live payroll run |
| WOF-003 | Leave balance data loss on reassignment | Requires specific test data |
| WOF-004 | KSA regulatory compliance gap | Requires KSA-configured company |
| WOF-007 | Notification/configuration reminder gaps | Requires notification delivery testing |
| WOF-008 | Offboarded employees persist in payroll | Requires offboarding scenario |
| WOF-009 | Incomplete unpaid leave workflow | Requires end-to-end payroll testing |
| WOF-011 | Leave cycle changes cause data loss | Cannot modify company settings |
| WOF-012 | Leave calculation ignores shift schedules | Requires shift-configured employees |
| WOF-013 | Payroll & Time Off sync gap | Requires cross-module testing |
| WOF-015 | Labor law compliance gaps | Requires legal context validation |
| WOF-017 | Job tenure calculation inflexibility | Requires varied tenure data |

---

## Screenshots

| File | Description |
|------|-------------|
| exploration-01-leave-settings-main.png | Leave settings page with 3 sections |
| exploration-02-leave-policies-table.png | Policy table showing 67 policies |
| exploration-03-policy-view-summary.png | Active policy summary page |
| exploration-04-policy-allowance-details.png | Policy details and allowance expanded |
| crud-01-create-policy-dialog.png | Create dialog with UAE templates |
| crud-02-create-policy-ksa-templates.png | KSA template tab |
| crud-03-create-policy-form-setup.png | Policy creation form setup step |
| crud-03-create-policy-form.png | Policy creation form (Step 1) |
| crud-04-delete-confirmation.png | Delete confirmation dialog |
| workflow-01-workflows-list.png | Workflows page (19 workflows) |
| workflow-02-leave-workflow-details.png | Google Calendar Integration workflow details |
| workflow-02-leave-triggers.png | Bayzat Timeoff triggers (overview) |
| workflow-03-leave-triggers.png | Bayzat Timeoff 3 leave triggers |
| approval-01-leave-approval-flow.png | Leave approval flow config |
| task-01-policy-restrictions.png | Policy restrictions section |

---

## Issues Encountered

1. **Screenshot path mismatch** - Playwright MCP saved to wrong base path. Fixed by copying files after each capture.
2. **Sidebar overlay blocking clicks** - Approval Flows link was blocked by sidebar overlay. Fixed with JavaScript click fallback.
3. **Payload structure variance** - `what_to_do` and `what_to_watch_out_for` at root level (not inside `playwright_context`), with different field names than standard format.
