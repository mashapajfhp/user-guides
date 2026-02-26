# Attendance v2 — Validation Report

**Feature:** Attendance
**Version:** v2
**Status:** Completed
**Date:** 2026-02-26

---

## Execution Order

1. LOGIN — Authenticated as admin (job+demoacct@bayzat.com)
2. EXPLORATION — Navigated all navigation map entries (7/8 visited)
3. IDENTIFY ENTITY — Attendance Record (per employee per day)
4. CRUD TEST — Create N/A, Read/Update/Delete via three-dot menu
5. WORKFLOW CHECK — Bounce Attendance app + Generate Attendance Report action
6. APPROVAL FLOW — Attendance Regularization with Advanced/Default chains
7. WHAT_TO_WATCH_OUT_FOR — 19 items assessed (10 confirmed, 6 not reproducible, 1 different, 2 by-design/low)
8. DOCUMENTATION — 27 screenshots captured

---

## Exploration Findings

### Navigation Structure

**Time > Attendance** has three main tabs:
- **Attendance Report** — Daily Report (default), Custom Report, Location Report
- **Time and Pay Adjustments** — Scheduled, Pending, Approved, Processed, Rejected
- **Attendance Raw Data** — API, Device, Legacy

**Employee Attendance (Admin View):** Daily Report shows 123 employees with columns for name, department, check-in/out, total hours, overtime, status. Each row has a three-dot menu with Edit, Clear, Delete, Create leave request.

**My Attendance (Employee View):** Monthly calendar showing daily check-in/out times and total hours.

**Settings > Attendance:** 10 accordion sections:
1. General
2. Multiple Visits
3. Work Timings (81 schedules configured)
4. Overtime Policies
5. Days In Lieu Policies
6. Deductions Policies for Payroll
7. Work Centers for Shift Scheduling
8. Biometric Data
9. Attendance API Settings
10. Biometric Devices

**Shift Scheduler (Time > Shifts):** Weekly calendar view. Requires Work Center selection for Copy Schedule and Publish shifts. Includes Schedule Planner, search, filters, views, sort.

### Navigation Map Coverage

| Entry | Role | Visited | Method |
|-------|------|---------|--------|
| Attendance | primary | Yes | fuzzy_match via Time > Attendance > Employee attendance |
| Overtime | child | Yes | Found in Settings > Attendance > Overtime Policies |
| Scheduling | child | Yes | Mapped to Time > Shifts > Shift scheduler |
| My attendance | employee_view | Yes | navigation_steps |
| Employee attendance | admin_view | Yes | fuzzy_match |
| Settings > Attendance | settings | Yes | navigation_steps |
| Shifts | related | Yes | fuzzy_match via Time > Shifts |
| Insights > Reports | reporting | No | Time constraint; attendance reports available in-feature |

### Undocumented Features Found
- Schedule Planner button in Shift Scheduler
- "Learn about split shifts" link with "New" badge
- Flexible timing badge on work timing schedules
- Overnight shift icon indicator on work timings

---

## Primary Entity

**Attendance Record** — Each row in the Daily Attendance Report represents one employee's attendance for a specific day. Records are auto-generated from check-in/out events (biometric devices, mobile app, API integration). No manual creation; admins edit existing records.

---

## CRUD Validation

| Operation | Status | Notes |
|-----------|--------|-------|
| Create | N/A | Auto-recorded via check-in/out. No manual create button. |
| Read | PASSED | Three-dot menu > Edit opens detail dialog with Full Breakdown |
| Update | PASSED | Edit dialog allows modifying timestamps, overtime, breaks |
| Delete | PASSED | Three-dot menu offers Delete and Clear options |

**Key finding:** Edit, Clear, and Delete are disabled for employees with no attendance data for the selected day. "Create leave request" is always available.

---

## Workflow Integration

**Status:** Validated (required priority)

**Bayzat Attendance triggers (5 events):**
1. Employee shift is deleted
2. Employee shift is updated
3. Employee shift is created
4. Mark as absent button is clicked on attendance daily report
5. Employees are marked as absent for past day

**Other applications:** Bounce Attendance, Bayzat Timesheet (2 events)
**Actions found:** Generate Attendance Report
**Existing workflows:** 18 total (16 active), 68 executions in 7 days

---

## Approval Flow

**Status:** Validated (required priority)

**Attendance Regularization** tab found in Automations > Approval flows:
- **Advanced flow:** Conditional routing with If conditions
- **Default flow:** Super Admin as Step 1 approver (Else fallback)

**Related approval types also found:**
- Shift Change Request
- Hourly Permission
- Timesheet Approval

**In-feature approval:** Time and Pay Adjustments > Pending tab has "Reject" and "Approve for Payroll" buttons for processing attendance adjustment requests.

---

## Known Limitations (What to Watch Out For)

### Summary

| Status | Count |
|--------|-------|
| CONFIRMED | 10 |
| NOT_REPRODUCIBLE | 6 |
| DIFFERENT | 1 |
| Total | 19* |

*2 of the confirmed items are low severity (WOF-009, WOF-018)

### High Impact (Must Know)

| ID | Theme | Status | Detail |
|----|-------|--------|--------|
| WOF-006 | Backend Technical Constraints | NOT_REPRODUCIBLE | API compatibility and caching issues — backend-only |
| WOF-010 | Self-Approval Workflow Blockage | NOT_REPRODUCIBLE | Ticket stuck in Pending when creator is final approver |
| WOF-011 | Timestamp & Concurrency Issues | NOT_REPRODUCIBLE | Race conditions on concurrent edits — needs multi-user test |
| WOF-015 | Biometric SDK Gap | CONFIRMED | No face liveness detection; Biometric settings limited to device config |
| WOF-017 | Payroll Compliance Gaps | CONFIRMED | No UAE labor law overtime rates; no bulk compensation assignment |

### Medium Impact (Should Know)

| ID | Theme | Status | Key Finding |
|----|-------|--------|-------------|
| WOF-001 | UI/UX Display Issues | CONFIRMED | Table doesn't auto-refresh after tab changes |
| WOF-002 | Reporting Limitations | CONFIRMED | No custom report tabs, limited filters, no email summaries |
| WOF-003 | Leave-Attendance Integration | DIFFERENT | "Create leave request" now exists in row action menu |
| WOF-004 | Violation Management | CONFIRMED | No automated tracking, escalation, or action timeframes |
| WOF-005 | Data Integrity | NOT_REPRODUCIBLE | Duplicate check-in and inactive employee issues — backend/mobile |
| WOF-007 | System Architecture | CONFIRMED | Tight coupling between Attendance, Shifts, Work Center modules |
| WOF-008 | Bulk Operations | CONFIRMED | No shift bulk import; weekly view only, no monthly |
| WOF-012 | Leave Prevents Check-In | NOT_REPRODUCIBLE | Requires mobile app test during half-day leave |
| WOF-013 | Reporting Gaps | CONFIRMED | No per-employee exclusion, no analytics dashboard |
| WOF-014 | Error Handling UX | NOT_REPRODUCIBLE | Raw errors and double-click issues not triggered |
| WOF-016 | Status Editing | CONFIRMED | No status dropdown; status auto-calculated from timestamps |
| WOF-019 | Setup Incompleteness | NOT_REPRODUCIBLE | Initialization issues are backend-only |

### Low Impact

| ID | Theme | Status | Detail |
|----|-------|--------|--------|
| WOF-009 | Policy Visibility | CONFIRMED | Employee view has no policy tabs or notifications |
| WOF-018 | Shift Display | CONFIRMED (by design) | Active shifts not consolidated — intentional design |

---

## Detected Integrations

| Integration | Validated | Evidence |
|-------------|-----------|----------|
| Leave Management | Yes | "Create leave request" in row action menu |
| Payroll | Yes | Time and Pay Adjustments, Deductions Policies |
| Shift Scheduler | Yes | Time > Shifts, Work Centers in Settings |
| Approval Workflow | Yes | Attendance Regularization in Approval Flows |
| Biometric Systems | Yes | Raw Data tab (API/Device/Legacy), Biometric Settings |
| Workflow Automation | Yes | Bounce Attendance app, Generate Report action |

---

## Screenshots

| File | Description |
|------|-------------|
| exploration-01-employee-attendance-main.png | Main attendance page overview |
| exploration-01-employee-attendance-daily-report.png | Daily Report table with 123 employees |
| exploration-02-row-action-menu.png | Three-dot menu: Edit, Clear, Delete, Create leave request |
| exploration-03-custom-report.png | Custom Report tab |
| exploration-03-edit-attendance-dialog.png | Edit Attendance dialog |
| exploration-04-location-report.png | Location Report tab |
| exploration-04-edit-full-breakdown.png | Full Breakdown with check-in/out fields |
| exploration-05-custom-report.png | Custom Report with date range |
| exploration-05-time-pay-adjustments.png | Time and Pay Adjustments overview |
| exploration-06-location-report.png | Location Report details |
| exploration-06-raw-data.png | Attendance Raw Data tab |
| exploration-07-my-attendance.png | Employee self-service view |
| exploration-07-time-pay-adjustments-pending.png | Pending tab with Approve/Reject |
| exploration-08-raw-data.png | Raw Data details |
| exploration-08-settings-attendance.png | Settings > Attendance accordion |
| exploration-09-my-attendance.png | My Attendance calendar |
| exploration-09-work-timings-expanded.png | Work Timings table (81 entries) |
| exploration-10-settings-attendance.png | Settings overview |
| exploration-10-shift-scheduler.png | Shift Scheduler weekly calendar |
| workflow-01-workflows-list.png | Workflows with Bounce Attendance filter |
| approval-01-attendance-regularization.png | Approval flow configuration |
| approval-01-attendance-regularization-flow.png | Attendance Regularization flow detail |
| workflow-02-event-applications.png | Workflow event application list |
| workflow-03-attendance-triggers.png | Bayzat Attendance 5 trigger events |
| exploration-11-settings-general.png | Settings > Attendance General section |
| exploration-12-settings-work-timings.png | Settings work timings detail |
| exploration-13-shift-scheduler.png | Shift Scheduler additional view |

**Total:** 27 screenshots

---

## Issues Encountered

1. **Overtime not a separate page** — Navigation map lists Overtime as a child at Time > Attendance > Overtime, but no such sidebar item exists. Overtime configuration is in Settings > Attendance > Overtime Policies accordion.
2. **Scheduling maps to Shifts** — Navigation map lists Scheduling at Time > Attendance > Scheduling, but the actual path is Time > Shifts > Shift scheduler.
3. **Stale element refs** — Several Playwright element references became stale after navigation, requiring re-snapshot to get fresh refs.
4. **Insights > Reports not visited** — Time constraints prevented navigating to the separate Insights > Reports section, though attendance-specific reports are available within the feature.
