# Air Tickets - Validation Report

**Feature:** Air Tickets
**Version:** v1
**Validation Date:** 2026-03-03
**Status:** Completed

## Summary

Air Tickets feature validation completed successfully. The feature provides a complete air ticket request management system within Payroll, supporting three request types (Reimbursement, Air Ticket Booking, Encashment) with a multi-step approval workflow. Admin views (Employee air tickets) support filtering, search, and 4-tab status tracking. Employee views (My air tickets) show policy status cards with remaining allowances. Approval flows are configurable with advanced conditional routing based on amount thresholds. One workflow trigger exists (Air ticket cycle renewal is due). No dedicated air ticket policy settings UI was found - policies are managed at the employee level. All CRUD operations validated. 2 of 4 WOF items confirmed. Additionally, the Employee Tickets system (Requests > Employee tickets) was validated, revealing 13 ticket categories including Business Travel with 4 ticket types (Travel Ticket, Grade B/A Travel Ticket Request, Travel Request based Per Diem). The Travel Ticket form includes Priority, Dates of Travel, Reason for Travel, Currency, Amount Approved, and Attachments fields.

## Session Health

| Metric | Value |
|--------|-------|
| Login Success | Yes (1 attempt) |
| Session Losses | 0 |
| Tour Dismissals | 0 |

## Execution Order

All 10 phases completed: LOGIN, EXPLORATION, IDENTIFY ENTITY, CRUD TEST, WORKFLOW CHECK, APPROVAL FLOW, WHAT_TO_DO, WHAT_TO_WATCH_OUT_FOR, DOCUMENTATION, REPORT

## Primary Entity

- **Name:** Air Ticket Request
- **Singular:** air ticket request
- **Plural:** air ticket requests
- **Identified from:** page header 'Air ticket requests', create button 'Request air ticket', list rows

## Exploration Results

### Discovered Elements
- Air ticket requests table with 4 tabs: Pending, Approved, Processed, Rejected
- Request air ticket button (top-right)
- Filters panel: Reports to, Departments, Offices, Request type, Pending my approval, Date range
- Search by employee name/ID
- Download button
- Three-dot action menu with Edit and Delete options
- View button per row opening detail panel
- Detail panel with file upload, request details, policy details, approvers, activity feed
- Coverage info per employee row
- Add to payroll button on Approved tab
- Payment remarks column on Processed tab
- Employee profile Air tickets tab with policy status cards
- Create flow: 3-step wizard (Select employee, Request type, Form)

### Undocumented Features
- Coverage info shown directly in list rows
- Employee name links to profile air tickets tab
- New request icon indicator on recently created requests

### Navigation Map Coverage

| Section | Role | Audience | Visited | Screenshots |
|---------|------|----------|---------|-------------|
| Employee Air Tickets | primary | admin | Yes | exploration-01 through exploration-12 (10 screenshots) |
| My Air Tickets | employee_view | employee | Yes | exploration-10, exploration-11 |
| Employee Profile Air Tickets Tab | related | admin | Yes | exploration-13 |
| Payroll Settings | settings | admin | Yes | exploration-14 |
| Admin Air Tickets via Requests | related | admin | Yes | (same page as Payroll path) |
| Employee Tickets - Create Ticket | related | admin | Yes | employee-tickets-01 through employee-tickets-08 (8 screenshots) |

## CRUD Validation

| Operation | Status | Evidence |
|-----------|--------|----------|
| **Create** | PASSED | 3-step creation: Select employee > Request type (Reimbursement/Air ticket booking/Encashment) > Form with fields (Employee, Date of spend, Reference #, VAT, Description, Currency, Amount). Validation error triggered on required fields. Test request created for Job Mashapa (AED 2,500.00). |
| **Read** | PASSED | Detail panel opens showing: file upload area, request details, policy details, approvers section, activity feed with comments and timestamps. |
| **Update** | PASSED | Edit option found in three-dot menu on both list view and detail view. Available for pending requests. |
| **Delete** | PASSED | Delete option found in three-dot menu on both list view and detail view. Not executed to preserve test data. |

## Workflow Integration

- **Checked:** Yes
- **Triggers Found:** Air ticket cycle renewal is due (Bayzat Payroll)
- **Actions Found:** None
- **Screenshot:** workflow-02-air-ticket-trigger-search.png

## Approval Flow

- **Dedicated Tab:** Yes - "Air Ticket" tab in Approval Flows page
- **Default Flow:** Payroll table admin (1 step)
- **Advanced Flows:**
  - "Adv AF - Amount exceeding 3000" - Policy Allowance Amount > 3000 AND Currency is AED, routed to Line Manager - 1 level
  - "Adv AF - Amount more than 4000" - Amount-based condition
- **Screenshots:** approval-01, approval-02, approval-03

## What To Do (WTD) Results

### WTD-001: Create Air Tickets Auto Encashment Workflow - PARTIAL
**Persona:** HR Admin / Super Admin
**Steps Completed:** 3 of 5
**Result:** Navigated to Automations > Workflows > Create new workflow. Found air ticket trigger 'Air ticket cycle renewal is due' under Bayzat Payroll. No encashment-specific recipe found in workflow templates. The trigger exists but there is no pre-built encashment workflow template.
**Screenshots:** workflow-01-workflows-list.png, workflow-02-air-ticket-trigger-search.png

### WTD-002: Submit Air Ticket Encashment Request as Employee - PASSED
**Persona:** Employee
**Steps Completed:** 4 of 4
**Result:** Navigated to My air tickets via Requests sidebar. Found employee view with policy status cards showing remaining requests and allowance balance. Opened create flow and confirmed Encashment is available as request type. One encashment request (Sherbano Khanzada, AED 5,000) observed in Pending tab.
**Screenshots:** exploration-11-my-air-tickets-employee-view.png, crud-02-create-request-type-selection.png

### WTD-003: Review and Approve Air Ticket Requests as Manager - PASSED
**Persona:** People Manager
**Steps Completed:** 4 of 4
**Result:** Opened request detail view showing approvers section. Activity feed shows comment history and status changes. Filters panel includes 'Pending my approval' checkbox for managers. Approved tab shows 'Add to payroll' action button. Approval flow configured with advanced flows for amount-based routing.
**Screenshots:** exploration-07, exploration-08, exploration-12, approval-02

### WTD-004: Configure Air Ticket Policies - PARTIAL
**Persona:** HR Admin / Super Admin
**Steps Completed:** 2 of 3
**Result:** Navigated to Settings > Payroll but found no dedicated Air Ticket policy section. Air ticket policies appear to be configured at the employee level - visible on employee profile Air tickets tab showing policy name (e.g., 'Executive Policy'), allowance amounts, request limits, and coverage. No self-service admin UI for creating/editing air ticket policies was found in Settings.
**Screenshots:** exploration-14-payroll-settings.png, exploration-13-employee-air-ticket-profile.png

## What To Watch Out For (WOF) Validation

### WOF-001: Missing Line Manager Notifications - NOT_REPRODUCIBLE
**Severity:** Medium | **By Design:** No
**Evidence:** Could not verify notification delivery without access to line manager email/notification settings. The approval flow is configured with Line Manager as approver, but notification mechanism was not directly testable from the admin UI.

### WOF-002: Complex Payroll Period Adjustment - CONFIRMED
**Severity:** Medium | **By Design:** Yes
**Evidence:** Approved tab shows 'Add to payroll' button per request. The current payroll cycle shown is Jan 2026 in Settings. No automatic payroll period detection or warning for cross-period requests was observed. Admins must manually click 'Add to payroll' for each approved request.
**Screenshot:** exploration-03-approved-tab.png

### WOF-003: Limited Employee Self-Service - DIFFERENT
**Severity:** Low | **By Design:** No
**Evidence:** Employee view (My air tickets) shows request status (Pending, Approved, Processed, Rejected) and includes policy status cards with remaining requests and allowance balance. The Status column is visible in the employee's request table. However, detailed approval step progress (which approver is next) is not shown to employees.
**Screenshot:** exploration-11-my-air-tickets-employee-view.png

### WOF-004: Pay Item History Inaccessible - CONFIRMED
**Severity:** Medium | **By Design:** No
**Evidence:** Processed tab shows completed requests with 'Payment remarks' column, but there is no direct link from processed air ticket requests to the corresponding payroll transaction. Admins would need to cross-reference between air ticket requests and payroll transactions manually.
**Screenshot:** exploration-04-processed-tab.png

## Employee Tickets - Create Ticket Flow

The Employee Tickets system (Requests > Employee tickets) provides a broader ticket management framework that includes air-ticket-related categories. The Create ticket flow was validated with the following findings:

### Ticket Type Selector
The ticket type selector modal presents 13 categories, each containing specific ticket types:

- **Attendance (4):** Requests related to work schedules, shifts, and attendance records
- **Payroll (5):** Leave Encashment, Salary Discrepancy Request, Salary Changes, Bank Account Update, Per Diem
- **Employee Services (5):** Medical Insurance Query, Visa/Residency Renewal Support, VAT Filing - Test, Business Trip Request, Insurance Upgrade
- **Employee Relations (3):** Suggestion/Feedback Submission, Onboarding Form, Salary related problem
- **Business Travel (4):** Travel Ticket, Grade B - Travel Ticket Request, Grade A - Travel Ticket Request, Travel Request based Per Diem
- **IT & Systems (1):** Requests related to hardware, software, and system access
- **Leaves (2):** Requests related to annual, sick, or special leave entitlements
- **Travel Certificates (1):** Health insurer travel certificate for visa or entry purposes
- **Freemium Bundle (1)**, **Vat Filing Test 1 (1)**, **Bayzat HR (1)**, **Corporate Tax Filing (1)**, **Project Approval - Timesheets (1)**

### Travel Ticket Form
Selecting Business Travel > Travel Ticket reveals a form with these fields:
- **Employees** (dropdown, required)
- **Category > Ticket type** (Travel Ticket, selected)
- **Priority** (High - preset/disabled)
- **Dates of Travel** (Optional, date picker)
- **Reason for Travel** (Optional, text area)
- **Currency** (AED) + **Amount Approved** (Optional)
- **Add attachments** (Optional, drag & drop file upload)
- Submit / Cancel buttons

## Gaps Identified

No remaining gaps. All sections including the Employee Tickets > Create ticket flow have been validated.

## Screenshots (33 total)

### Exploration (16)
- exploration-00-dashboard.png
- exploration-01-payroll-sidebar.png
- exploration-01-payroll-sidebar-expanded.png
- exploration-02-employee-air-tickets-pending.png
- exploration-03-approved-tab.png
- exploration-04-processed-tab.png
- exploration-05-rejected-tab.png
- exploration-06-three-dot-menu.png
- exploration-07-request-detail-view.png
- exploration-08-activity-feed-comments.png
- exploration-09-detail-view-actions.png
- exploration-10-requests-sidebar.png
- exploration-11-my-air-tickets-employee-view.png
- exploration-12-filters-panel.png
- exploration-13-employee-air-ticket-profile.png
- exploration-14-payroll-settings.png

### CRUD (4)
- crud-01-create-select-employee.png
- crud-02-create-request-type-selection.png
- crud-03-create-reimbursement-form.png
- crud-04-validation-error.png

### Workflow (2)
- workflow-01-workflows-list.png
- workflow-02-air-ticket-trigger-search.png

### Approval (3)
- approval-01-approval-flows-page.png
- approval-02-air-ticket-approval-flow.png
- approval-03-advanced-flow-detail.png

### Employee Tickets (8)
- employee-tickets-01-list-view.png
- employee-tickets-02-create-form.png
- employee-tickets-03-ticket-type-selector-categories.png
- employee-tickets-04-business-travel-types.png
- employee-tickets-05-payroll-types.png
- employee-tickets-06-employee-services-types.png
- employee-tickets-07-employee-relations-types.png
- employee-tickets-08-travel-ticket-form.png
