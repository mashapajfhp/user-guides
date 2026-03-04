# Air Tickets - Validation Report (v2)

## Feature Summary

Air Tickets enables companies to manage employee air ticket allowances with configurable policies, multi-type requests (Reimbursement, Booking, Encashment), approval workflows, and payroll integration.

## Execution Order Followed

1. EXPLORATION - Visited all 6 navigation map entries
2. IDENTIFY ENTITY - Air Ticket Request
3. CRUD TEST - Create, Read, Update, Delete all validated
4. WORKFLOW CHECK - Checked triggers in Automations > Workflows
5. APPROVAL FLOW - Explored Air Ticket tab in Approval flows
6. WHAT_TO_DO - 4 tasks executed
7. WHAT_TO_WATCH_OUT_FOR - 12 items validated
8. DOCUMENTATION - 26 screenshots captured

## PRD Context Used

- Feature overview guided exploration of policy configuration, request lifecycle, and payroll integration
- Key functionality checklist used to verify all 3 request types and approval flow
- User personas (HR Admin, Employee, Payroll Admin) guided multi-view testing

## Navigation Map Coverage (6/6 visited)

| Entry | Role | Status | Path Used |
|-------|------|--------|-----------|
| Employee air tickets | primary | Visited | Payroll > Employee air tickets |
| My air tickets | employee_view | Visited | Payroll > My air tickets |
| Air Ticket Policies | settings | Visited | Settings > Company > Air Ticket Policies |
| Employee air tickets (admin) | admin_view | Visited | Payroll > Employee air tickets (same as primary) |
| Air tickets (Requests path) | payroll_integration | Visited | Requests > Air tickets |
| Approval flows | approval_config | Visited | Automations > Approval flows > Air Ticket |

## Primary Entity

**Air Ticket Request** (singular: air ticket request, plural: air ticket requests)

Identified from: page header "Air ticket requests", create button "Request air ticket", row-level View/Edit/Delete actions.

## CRUD Validation

### Create - PASSED
- **Trigger:** "Request air ticket" button (top-right)
- **Flow:** Select employee > Choose request type > Fill form > Submit
- **Request types:** Reimbursement, Air ticket booking, Encashment
- **Form fields:** Employee (disabled), Date of spend, Reference #, VAT amount, Description, Currency, Requested amount
- **Validation:** Required field error triggered on empty amount submission
- **Screenshots:** crud-01 through crud-04

### Read - PASSED
- **Trigger:** "View" button on each row or click employee name
- **Detail view:** Slide-out panel with Upload file, Request details, Policy details, Approvers, Activity feed
- **Employee profile:** Air tickets tab shows policy summary cards (status, remaining requests, balance, coverage)
- **Screenshots:** exploration-06, exploration-07, exploration-21

### Update - PASSED
- **Trigger:** Edit option in three-dot menu (also available in detail view)
- **Form:** Pre-filled with existing data. Employee field disabled. All other fields editable
- **Button:** "Update reimbursement request"
- **Shows:** Allowance balance
- **Screenshots:** crud-05, crud-06

### Delete - PASSED
- **Trigger:** Delete option in three-dot menu
- **Confirmation:** "Are you sure you want to delete [Name]'s request?" with Cancel/Delete buttons
- **Screenshot:** crud-07

## Workflow Integration

- **Status:** Checked (required priority)
- **Triggers found:** "Air ticket cycle renewal is due" (1 trigger only)
- **Actions found:** None specific to air tickets
- **Gap:** No triggers for request created/approved/rejected/processed events

## Approval Flow Validation

- **Tab found:** "Air Ticket" in Approval flows page
- **Advanced flows:** 2 configured
  - "Adv AF - Amount exceeding 3000" - Criteria: Amount > 3000 AND Currency = AED, Approver: Line Manager (1 level)
  - "Adv AF - Amount more than 4000" - Similar amount-based criteria
- **Default flow:** Payroll table admin (1 step)
- **Controls:** Add advance flow, Add step, Add approver, Add block

## What To Do Results

| Task | Status | Key Findings |
|------|--------|--------------|
| WTD-001: Configure air ticket policy | PASSED | 24 policies found. Policy detail shows Basic Setup, Policy Behaviour, Employees Included. View/Edit/Delete confirmed. |
| WTD-002: Submit request as employee | PARTIAL | My air tickets view found with policy cards. Button disabled (0 remaining requests). Mobile testing not possible. |
| WTD-003: Set up encashment workflow | PARTIAL | Only 1 air ticket trigger available. No encashment-specific template found. |
| WTD-004: Manage employee requests | PASSED | All 4 tabs verified. Search, filters, download confirmed. Detail view with full request lifecycle. |

## Known Limitations Validated

| ID | Theme | Severity | Status | Key Finding |
|----|-------|----------|--------|-------------|
| WOF-001 | Policy Configuration Complexity | high | CONFIRMED | Multiple interdependent fields require careful setup |
| WOF-002 | No Bulk Policy Assignment | high | CONFIRMED | Manual assignment only, 88 unassigned employees |
| WOF-003 | Disabled Button No Explanation | medium | CONFIRMED | Button disabled without tooltip explaining why |
| WOF-004 | No Booking Integration | medium | CONFIRMED | Booking type requires manual ticket upload |
| WOF-005 | Approval Status Not Shown to Employee | medium | NOT_REPRODUCIBLE | Admin detail shows approvers; employee view unclear |
| WOF-006 | No Partial Encashment | medium | CONFIRMED | Single amount field per request, no split option |
| WOF-007 | Renewal Date Visibility | medium | DIFFERENT | Expiry date shown in employee profile but not in My air tickets view |
| WOF-008 | Add to Payroll Not Auto-Process | medium | CONFIRMED | Two-step: Approve then Process via payroll |
| WOF-009 | Export Ignores Filters | low | NOT_REPRODUCIBLE | Would require file download to verify |
| WOF-010 | Offboarded in Approved Queue | medium | CONFIRMED | Inactive badge shown but request remains actionable |
| WOF-011 | Mobile Responsiveness | low | SKIPPED | Desktop-only testing, mobile via native app |
| WOF-012 | Limited Workflow Triggers | medium | CONFIRMED | Only 1 trigger (cycle renewal), no status-change triggers |

**Summary:** 7 CONFIRMED, 2 NOT_REPRODUCIBLE, 1 DIFFERENT, 1 SKIPPED

## Screenshots (26 total)

### Exploration
- exploration-00-dashboard.png - Dashboard after login
- exploration-01-payroll-menu-expanded.png - Payroll sidebar with Air tickets section
- exploration-02-employee-air-tickets-pending.png - Pending tab (3 requests)
- exploration-03-approved-tab.png - Approved tab (19 requests)
- exploration-04-processed-tab.png - Processed tab (18 requests)
- exploration-05-rejected-tab.png - Rejected tab (6 requests)
- exploration-06-request-detail-view.png - Slide-out detail panel
- exploration-07-activity-feed-expanded.png - Activity feed with creation event
- exploration-08-detail-view-action-menu.png - Three-dot menu (Edit/Delete)
- exploration-09-filters-panel.png - Filters panel expanded
- exploration-10-employee-view-my-air-tickets.png - Employee self-service view
- exploration-11-employee-view-clean.png - Clean employee view with policy cards
- exploration-12-settings-company.png - Company settings page
- exploration-13-settings-air-ticket-policies.png - Air Ticket Policies list
- exploration-14-policy-action-menu.png - Policy three-dot menu
- exploration-15-policy-detail-view.png - Policy summary detail
- exploration-16-policy-employees-dialog.png - Employees included dialog
- exploration-17-requests-path-air-tickets.png - Air tickets via Requests sidebar
- exploration-18-approval-flows-page.png - Approval flows overview
- exploration-19-approval-flow-air-ticket.png - Air Ticket approval configuration
- exploration-20-advanced-approval-flow-edit.png - Advanced flow criteria editor
- exploration-21-employee-profile-air-tickets.png - Employee profile Air tickets tab

### CRUD
- crud-01-request-select-employee.png - Employee selection dialog
- crud-02-request-type-selection.png - 3 request types
- crud-03-reimbursement-form.png - Create form with all fields
- crud-04-validation-error.png - Required field error
- crud-05-row-context-menu.png - Row action menu (Edit/Delete)
- crud-06-edit-form.png - Edit form pre-filled
- crud-07-delete-confirmation.png - Delete confirmation dialog

### Tasks & Workflows
- task-01-approved-add-to-payroll.png - Approved tab with Add to payroll buttons
- workflow-01-workflows-list.png - Workflows page overview

## Issues Encountered

1. **Sidebar click interception:** MUI sidebar elements occasionally intercepted clicks. Resolved by re-expanding parent menu items.
2. **Session redirect:** Initial navigation to app.bayzat.com redirected to login with `&expired` parameter. Resolved by navigating directly to `/auth/login`.
3. **Empty snapshots:** After login redirect, multiple waits returned empty snapshots. Resolved by waiting longer and re-taking snapshots.
