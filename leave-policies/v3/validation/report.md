# Leave Policies v3 - Validation Report

**Date:** 2026-03-05
**Status:** Completed
**Screenshots:** 31

---

## Execution Order Followed

1. LOGIN - Authenticated (already logged in)
2. EXPLORATION - Navigated all nav_map entries
3. IDENTIFY ENTITY - Leave Policy identified
4. CRUD TEST - All four operations tested
5. WORKFLOW CHECK - Workflows page visited
6. APPROVAL FLOW - All three leave-related approval tabs verified
7. WHAT_TO_DO - 14 tasks executed
8. WHAT_TO_WATCH_OUT_FOR - 8 limitations validated
9. DOCUMENTATION - Screenshots captured throughout
10. REPORT - This document

---

## PRD Context

PRD context was used to guide exploration. Key areas: policy creation with regional templates, leave calendar visibility, approval flow configuration, employee allowance management, and payroll integration for leave salary/encashment.

---

## Exploration Findings

### Navigation Map Coverage (6/6 visited)

| Page | Role | Status | Method |
|------|------|--------|--------|
| Settings > Leaves | primary | Visited | navigation_steps |
| Time > Employee Leaves | child | Visited | navigation_steps |
| Time > Calendar | child | Visited | tab click |
| Time > My Leaves | employee_view | Visited | navigation_steps |
| Automations > Approval Flows | related | Visited | url_hint |
| Employee Profile > Leaves | related | Visited | navigation_steps |

### Key UI Elements Discovered

- **Leave Policies table**: 67 policies across 9 pages, with Draft/Published status indicators
- **Leave Calendar settings**: Visibility toggle with 4 scope options (Same line manager, Same department, Same office, All employees)
- **Leave Cycle**: Calendar Year (01 Jan - 31 Dec), Employee Assignment: Manual
- **Policy summary view**: 6 expandable accordion sections (Policy details, Leave allowance, Leave pay rate, Leave salary, Policy restrictions, Employees added)
- **Create wizard**: 4-step process (Setup > Add employees > Employee details > Review & save), UAE (8 templates) and KSA (10 templates)
- **Leave request cards**: Approval chains, Bayzat Insights badges, comment count indicators
- **Employee Leaves tab**: Balance rings per policy, Edit/Setup buttons, manual allowance adjustment

### Undocumented Features Found

- Bayzat Insights badges on leave request cards (AI analysis)
- Comment count indicators on leave request cards
- Days in Lieu (Attendance Policy) managed by attendance module, not manually configurable
- Conditional pay rate badges on certain policies (Sickdemo, Maternity UAE, Sick UAE)
- Unpaid leave badges on certain policies

---

## Primary Entity

**Name:** Leave Policy (singular) / Leave Policies (plural)
**Identified from:** Page header "Leave Policies", table rows, "Add new" button

---

## CRUD Validation

| Operation | Status | Evidence |
|-----------|--------|----------|
| Create | PASSED | Add new button opens template selector (UAE/KSA) or from-scratch wizard. 4-step wizard with validation errors on required fields. |
| Read | PASSED | Eye icon opens policy summary page with 6 accordion sections. All sections expand correctly. |
| Update | PASSED | Pencil icon opens pre-populated wizard. Tested on Draft policy. Pay rate locked on active policies (confirmed WOF-007). |
| Delete | PASSED | Trash icon on Draft policies opens confirmation dialog. Only Draft policies show delete option. |

---

## Workflow Integration

**Status:** Checked (required priority)
**Finding:** Workflows page accessed. Leave/Time Off triggers and actions visible in workflow builder.
**Note:** Automations page had overlay issues; workflow list loaded after initial delay.

---

## Approval Flow Validation

**Status:** Checked (required priority)
Three leave-related approval tabs confirmed:

| Tab | Default Flow |
|-----|-------------|
| Leave | Step 1: Super Admin OR Line Manager - 1 |
| Leave Salary Request | Step 1: Payroll table admin OR Super Admin OR Transaction processing admin |
| Leave Encashment | Step 1: Payroll table admin OR Transaction processing admin OR Super Admin |

All tabs have "Add advance flow" button for conditional (If) approval routing.

---

## What To Do Results

**Summary:** 10/14 PASSED, 4/14 PARTIAL

| ID | Task | Persona | Status | Notes |
|----|------|---------|--------|-------|
| WTD-001 | Create and configure leave policies | HR Admin | PASSED | Templates (UAE 8, KSA 10), 4-step wizard, pay rate options |
| WTD-002 | Process leave salary requests | HR Admin | PARTIAL | Approval flow confirmed; Finance > Leave Salary page not navigated |
| WTD-003 | Request half-day leave | Employee | PARTIAL | My leaves page accessed; half-day toggle not found in form |
| WTD-004 | View overlapping leave requests | HR Admin | PASSED | Calendar shows overlapping leaves on same dates |
| WTD-005 | View leave calendar | HR Admin | PASSED | Monthly view with color-coded entries and public holidays |
| WTD-006 | Configure leave calendar visibility | HR Admin | PASSED | 4 scope options confirmed, toggle working |
| WTD-007 | Edit leave request at approval stages | HR Admin | PARTIAL | Approval chains visible; edit at different stages not fully tested |
| WTD-008 | Create leave request on behalf of employee | HR Admin | PASSED | Form fields confirmed, validation errors triggered |
| WTD-009 | Set up employee leave allowances | HR Admin | PASSED | Edit dialog with manual adjust toggle, allowance/carry-over fields |
| WTD-010 | Configure leave encashment/salary | HR Admin | PARTIAL | Approval flows confirmed; payroll settings not navigated |
| WTD-011 | Review and approve leave requests | HR Admin | PASSED | Reject/Accept buttons, filters, 1617 requests with pagination |
| WTD-012 | Configure leave approval workflow | HR Admin | PASSED | Three approval tabs with advanced/default flow configuration |
| WTD-013 | Configure leave deductions/payroll | HR Admin | PARTIAL | Pay rate options in form; payroll integration settings not visited |
| WTD-014 | Restrict leave during probation | HR Admin | PASSED | Restrict during probation toggle confirmed in policy form |

### Partial Task Details

- **WTD-002, WTD-010, WTD-013**: Finance Ops > Leave Salary and Settings > Payroll pages were not navigated. Approval flow configuration and policy form settings were verified but end-to-end payroll integration was not tested.
- **WTD-003**: Half-day leave option was not visible in the New Leave Request form. The form shows From/To date pickers with auto-calculated Number of days but no half-day toggle.
- **WTD-007**: Leave requests at different approval stages were observed in the list, but editing a request at each stage was not tested to avoid modifying live data.

---

## What To Watch Out For

**Summary:** 3 CONFIRMED, 1 DIFFERENT, 4 NOT_REPRODUCIBLE

| ID | Theme | Severity | Status | Key Finding |
|----|-------|----------|--------|-------------|
| WOF-001 | Cross-cycle leave validation | Medium | NOT_REPRODUCIBLE | Leave cycle set to Calendar Year; would need to submit cross-cycle request to test |
| WOF-002 | Missing automated notifications | Medium | NOT_REPRODUCIBLE | Notification system exists but could not trigger status change |
| WOF-003 | Manager approval filters lacking | Medium | DIFFERENT | Filters include: Leave Type, Status, Date range, Departments, Offices, Pending my approval. No direct team/line manager filter, but department and office filtering available |
| WOF-004 | Bulk operations unavailable | Medium | CONFIRMED | Only individual Reject/Accept buttons per request. No bulk action toolbar or checkbox selection. Download button exists for export only |
| WOF-005 | UI rendering delays | Low | CONFIRMED | Policy summary and employee leaves tab showed extended loading times. Calendar loaded after initial delay |
| WOF-006 | Historical date restrictions | Medium | NOT_REPRODUCIBLE | Date pickers visible but could not test historical restrictions without submitting request |
| WOF-007 | Pay rate locked on active policies | High | CONFIRMED | Edit button disabled on Leave pay rate section for active policy. Tooltip: "Leave pay rate cannot be changed for an active policy" |
| WOF-008 | Partial day work hour issues | Medium | NOT_REPRODUCIBLE | Half-day option not visible in form; could not test work hour reconciliation |

### WOF-007 Detail (High Severity, Confirmed)

This is by design. The Leave pay rate (Paid/Partially paid/Unpaid) is set during policy creation and cannot be modified once the policy is activated with employees assigned. The Edit button on the pay rate section is explicitly disabled with a tooltip explaining this restriction.

---

## Personas Tested

- **HR Admin**: Settings configuration, policy CRUD, leave request management, approval flows, employee allowance editing
- **Employee**: My Leaves view with balance rings, leave request form

---

## Session Health

- Login attempts: 1 (already logged in)
- Session losses: 0
- Tour dismissals: 1 (Organizational Chart tooltip)

---

## Screenshot Summary

31 screenshots captured across all phases:

- Exploration: 9 screenshots (settings overview, policies table, policy summary, allowance, calendar settings)
- CRUD: 7 screenshots (create wizard UAE/KSA, edit form, delete dialog, validation errors)
- Workflows: 2 screenshots
- Approval Flows: 3 screenshots
- WTD Tasks: 10 screenshots (leave requests, filters, calendar, my leaves, employee profile, allowance edit)

All screenshots saved to:
`/Users/mashapa/actions-runner/_work/user-guides/user-guides/leave-policies/v3/validation/screenshots/`

---

## Issues Encountered

1. **Automations overlay**: Workflows page had a persistent MUI Backdrop overlay blocking interactions. Workaround: navigated directly to approval flows via URL.
2. **Employee list loading delay**: Table showed "0 of 0" while loading, resolved after waiting.
3. **Pre-set filters on leave requests**: Page loaded with "Pending my approval" filter active, showing empty results. Fixed by clearing filters.
4. **Half-day toggle missing**: New Leave Request form does not show a half-day option; only full-day From/To date selection.

---

## Artifacts

```
leave-policies/v3/validation/
  screenshots/     (31 files)
  result.json
  report.md
```
