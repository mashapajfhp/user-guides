# Workflows User Guide — Re-Run Validation Report

**Date:** 2026-03-06
**Method:** Playwright browser automation against live Bayzat application
**Guide URL:** https://mashapajfhp.github.io/user-guides/workflows/v1/workflows-user-guide.html

---

## Summary

- **Total Issues Found:** 32
- **Critical (factually wrong / blocks user):** 8
- **Major (misleading or missing important info):** 17
- **Minor (cosmetic / terminology):** 7

---

## Critical Issues (8)

### C1 — "Conditions" Terminology Is Wrong Throughout Guide
- **Location:** User Journey (Phase 4), Setup Process (Step 4), Glossary, multiple references
- **Guide says:** "Add Conditions", "Configure Trigger Conditions", "Condition — Optional criteria that filter..."
- **Actual:** The UI label is **"Criteria"** — the section heading says "Criteria", the button says **"Add criteria"**
- **Fix:** Replace all instances of "Conditions" / "conditions" (when referring to the workflow builder section) with "Criteria" / "criteria"

### C2 — "Start from template" Button Label Is Wrong
- **Location:** Feature Discovery, Step 2 (line 762)
- **Guide says:** '"Start from template" to use pre-built configurations'
- **Actual:** The dropdown option is labeled **"Create using template"**
- **Fix:** Replace "Start from template" with "Create using template"

### C3 — Fabricated Payroll Trigger Events
- **Location:** Use Case Identification Guide → "Bayzat Payroll Triggers (10 Events)" (lines 2027-2085)
- **Guide says:** 10 events including "Pay adjustment updated", "Payroll cycle runs", "EOS calculation"
- **Actual:** Bayzat Payroll has **14** events:
  1. Employee salary is updated
  2. Employee salary is created
  3. Leave salary request is created
  4. Leave salary request is updated
  5. Leave salary request is deleted
  6. Leave salary request status is changed
  7. Payroll adjustment is created
  8. Payroll cycle is closed
  9. Payroll transaction is submitted
  10. Loan request is created
  11. Loan request is updated
  12. Loan request is deleted
  13. Loan request status is changed
  14. Air ticket cycle renewal is due
- **Fix:** Replace entire Payroll triggers table with the actual 14 events. Remove "Pay adjustment updated", "Payroll cycle runs", and "EOS calculation" (fabricated)

### C4 — Fabricated Timeoff Trigger Event
- **Location:** Use Case Identification Guide → "Bayzat Timeoff Triggers (3 Events)" (lines 2098-2131)
- **Guide says:** "Leave balance changes — Available leave days modified"
- **Actual:** The 3 Bayzat Timeoff events are:
  1. Leave request is deleted
  2. Leave request is created
  3. Leave request is updated
- **Fix:** Replace "Leave balance changes" with "Leave request is deleted"

### C5 — Fabricated Attendance Trigger Events (4 of 6 are fake)
- **Location:** Use Case Identification Guide → "Bayzat Attendance Triggers (6 Events)" (lines 2144-2202)
- **Guide says:** 6 events including "Attendance recorded", "Late arrival detected", "Early departure detected", "Absence detected"
- **Actual:** Bayzat Attendance has **5** events:
  1. Employee shift is deleted
  2. Employee shift is updated
  3. Employee shift is created
  4. Mark as absent button is clicked on attendance daily report
  5. Employees are marked as absent for past day
- **Fix:** Replace entire Attendance triggers table with the actual 5 events. Remove all 4 fabricated events

### C6 — "Skipped" Execution Status Does Not Exist
- **Location:** Monitoring Executions → Execution Statuses (line 1071)
- **Guide says:** "Skipped — Conditions not met, workflow did not run"
- **Actual:** The 4 execution statuses are: **Success**, **In progress**, **Failed**, **Criteria not matched**
- **Fix:** Replace "Skipped" with "Criteria not matched" and update the description

### C7 — Template Names Are Fabricated/Simplified
- **Location:** Feature Usage → Available Templates (lines 792-798)
- **Guide says:** "Welcome Email", "Probation Reminder", "Leave Request Notification", "Air Tickets Auto Encashment", "Birthday Notification"
- **Actual:** The 9 templates are:
  1. "Send an email to the employee department after employee creation" (Recommended)
  2. "Send an email to the employee's line manager when offboarding is initiated"
  3. "Send a slack message after 10 days of employee's hire date if the employee is a Manager" (Recommended)
  4. "Send an email to the employee after probation date, congratulating him for completing probation" (Recommended)
  5. "Send an email after employee registration"
  6. "Send a slack message on employee's birth date"
  7. "Automate creating air ticket requests"
  8. "Create Employee on Whitecarrot"
  9. "Delete Employee on Whitecarrot"
- **Fix:** Replace shortened names with actual template names. Remove "Leave Request Notification" (no such template exists). Add missing templates (Offboarding, Registration, Whitecarrot integration, Slack hire date)

### C8 — Trigger Applications Table Missing 9 of 14 Apps
- **Location:** Product Foundation → Available Trigger Applications (lines 586-616)
- **Guide lists only 5:** Bayzat HR, Bayzat Payroll, Bayzat Timeoff, Bayzat Employee Ticket, Incoming Integration
- **Actual 14 trigger applications:**
  1. Bayzat Timesheet (2 events)
  2. Bayzat Employee Ticket (4 events)
  3. Accounts Payable (2 events)
  4. Bayzat Knowledge Hub (5 events)
  5. Bayzat HR (20 events)
  6. Custom Recurring Events (1 event)
  7. Bayzat Timeoff (3 events)
  8. Bayzat Newsfeed (2 events)
  9. Bayzat Payroll (14 events)
  10. Bayzat Work Expense (1 event)
  11. Bayzat Custom Fields (2 events)
  12. Bayzat Insurance (3 events)
  13. Incoming Integration (1 event)
  14. Bayzat Attendance (5 events)
- **Fix:** Add the 9 missing trigger applications to the table

---

## Major Issues (17)

### M1 — Missing "Deprecated" Workflow Status
- **Location:** Feature Discovery (line 754), entire guide
- **Guide says:** Workflows have "Active" or "Inactive" status
- **Actual:** Status filter shows 3 options: **Active**, **Inactive**, **Deprecated**
- **Fix:** Add "Deprecated" to status documentation and explain what it means

### M2 — Action Applications Severely Understated
- **Location:** Product Foundation → Available Action Applications (lines 623-663)
- **Guide lists only 6:** Email, Slack, Google Calendar, Bayzat Task, Bayzat Payroll, Mobile Notification
- **Actual 18 core action applications:**
  1. Bounce Attendance (1 action)
  2. Bayzat Employee Ticket (1 action)
  3. Bayzat HR (8 actions)
  4. Bayzat Timeoff (3 actions)
  5. Bayzat Newsfeed (2 actions)
  6. Bayzat Payroll (12 actions)
  7. Bayzat Work Expense (4 actions)
  8. Google Sheets (2 actions)
  9. Bayzat Custom Fields (2 actions)
  10. Bayzat Task Management (3 actions)
  11. Email (2 actions)
  12. Outgoing Integration (1 action)
  13. Bayzat Attendance (3 actions)
  14. Slack (4 actions)
  15. Google Calendar (3 actions)
  16. Mobile Notification (2 actions)
  17. Applied AI App (1 action)
  18. N8N (1 action)
  (Plus custom company apps)
- **Fix:** Add the 12 missing core action applications

### M3 — Dashboard Statistics Panel Undocumented
- **Location:** Entire guide — not mentioned anywhere
- **Actual:** The main Workflows page has a statistics panel showing:
  - **Active workflows** — "13 of 20 total"
  - **Total executions in last (7) days** — with "View" link
  - **Failed executions in last (7) days** — with "View" link
- **Fix:** Add a section describing the dashboard statistics

### M4 — Executions Tab Table Structure Undocumented
- **Location:** Monitoring Executions section
- **Guide says:** General description of executions
- **Actual:** Executions tab has a table with columns: **Workflow Name**, **Workflow Status**, **Triggered At**, **Status**, **Action Performed On** (employee ID). Plus filters for Status and Date range, search by workflow name, and pagination (533 pages of history).
- **Fix:** Document the table columns and filter options

### M5 — Bayzat HR Triggers Severely Understated
- **Location:** Product Foundation → Trigger Applications table (line 597)
- **Guide says:** "Employee created, updated, hire date, probation end, work week changes" (~5 events)
- **Actual:** Bayzat HR has **20** events:
  - Work week is updated
  - Employee is updated/created/deleted/offboarded
  - Employee offboarding process is initiated
  - Employee is registered
  - Company holiday is updated/created/deleted
  - Company holiday calendar is created
  - Company office is updated/deleted/created
  - Employee office assignment is updated
  - Employee probation end date is updated
  - Employee hire date is triggered
  - Employee work anniversary is triggered
  - Employee probation end date is triggered
  - Employee birth date is triggered
- **Fix:** List all 20 events or note "20 events including..." with the most common ones

### M6 — Bayzat Payroll Triggers Wrong in Foundation Table
- **Location:** Product Foundation → Trigger Applications table (line 601)
- **Guide says:** "Salary created, salary updated" (2 events)
- **Actual:** 14 events (see C3 for full list)
- **Fix:** Update to show key events from the full list of 14

### M7 — Bayzat Timeoff Triggers Wrong in Foundation Table
- **Location:** Product Foundation → Trigger Applications table (line 605)
- **Guide says:** "Leave request updated" (1 event)
- **Actual:** 3 events: Leave request deleted, created, updated
- **Fix:** List all 3 events

### M8 — Missing "View activity" Button on Workflow Cards
- **Location:** Managing Workflows section
- **Guide says:** Nothing about a View activity button
- **Actual:** Each workflow card has a **"View activity"** button (binoculars icon) next to the Active/Inactive toggle
- **Fix:** Document this button

### M9 — Missing Workflow Card Run Statistics
- **Location:** Managing Workflows section
- **Guide says:** Cards show "status (Active/Inactive), trigger type, and last execution time"
- **Actual:** Workflow cards also show: **run stats** (e.g., "29/29 runs"), **"Last executed on [date]"**, **"Created by [name]"**, and the complete trigger→action flow (Application → Event → Action)
- **Fix:** Document all workflow card elements

### M10 — Missing Automations Submenu Documentation
- **Location:** Feature Discovery → How to Access (lines 739-743)
- **Guide says:** "Automations (left sidebar) → Workflows"
- **Actual:** The Automations section has a submenu with 4 tabs: **Workflows**, **Approval flows**, **Integrations**, **API Token**
- **Fix:** Document the full submenu structure

### M11 — Applications Tab Barely Documented
- **Location:** Feature Discovery (lines 769-777)
- **Guide says:** "Access the Applications tab to view and configure..."
- **Actual:** The Applications tab shows all 31 applications with: name, description, connections count, workflows count. Has filters: **Event type applications**, **Action type applications**, **Disabled applications**, **Requires connection**. Has **"Add connection"** button. Each app card shows connection and workflow usage counts.
- **Fix:** Add detailed Applications tab documentation

### M12 — Tags Management Incomplete
- **Location:** Managing Tags section (lines 1080-1113)
- **Guide says:** 'Click "Manage tags" to create new tags. Enter a tag name and optional color.'
- **Actual:** Navigate to "Manage tags" tab → click **"Create a new tag"** button. Tags table has columns: **Tag**, **Usage in workflows**, **Actions** (edit/delete buttons). No color picker observed — just a name field.
- **Fix:** Correct the tag creation workflow and document the table structure

### M13 — Template Page Features Undocumented
- **Location:** Using Workflow Templates section (lines 780-803)
- **Actual:** Template page has:
  - Search box: "Search for a template"
  - Filter checkboxes: **All recipes**, **Top trending**, **Frequently used**
  - Application filter: Bayzat HR, Bayzat Payroll
  - Tags filter: Welcome, Onboarding, Email, Offboarding, Slack, Probation, Registration, Birthdate, Air Ticket, Integration, Whitecarrot ATS
  - Each template shows: WHEN/IF/THEN flow, tags, "Activate" button, "Recommended" badge on some
  - Video banner: "Unlock the Power of Workflows!" with YouTube link
  - Bottom: "Start from scratch" button
- **Fix:** Document template page filtering and discovery features

### M14 — "Manage custom variables" Button Has "New" Badge
- **Location:** Variables section
- **Guide says:** "Manage custom variables" button
- **Actual:** Button shows **"Manage custom variables"** with a **"New"** badge indicator
- **Fix:** Mention the "New" badge (indicates recent feature addition)

### M15 — Guide Claims "13 applications" for Triggers — Actual Is 14
- **Location:** Use Case section (line 2020), Feature Overview (line 470)
- **Guide says:** "13 applications" and "13+" in multiple places
- **Actual:** **14** trigger applications with **65** total events
- **Fix:** Update counts to "14 applications" and "65+ event triggers"

### M16 — Guide Claims "20+ integrations" for Actions — Actual Is 25+
- **Location:** Feature Overview (line 471)
- **Guide says:** "20+ integrations"
- **Actual:** **25+ action applications** (18 core + custom company apps)
- **Fix:** Update to "25+ action applications"

### M17 — Missing Bayzat Employee Ticket Triggers in Foundation Table
- **Location:** Product Foundation → Trigger Applications table (line 608-609)
- **Guide says:** "Ticket created, ticket status updated" (2 events)
- **Actual:** 4 events: Employee ticket is created, Employee ticket is updated, Employee ticket is deleted, Employee ticket status is updated
- **Fix:** List all 4 events

---

## Minor Issues (7)

### N1 — "Create workflow" vs "Create new workflow"
- **Location:** Multiple references throughout (lines 762, 815, etc.)
- **Guide says:** "Create workflow" button
- **Actual:** Button is labeled **"Create new workflow"** (with dropdown arrow)
- **Fix:** Update button label throughout

### N2 — Glossary Uses "Condition" Instead of "Criteria"
- **Location:** Glossary (line 2573)
- **Guide says:** "Condition — Optional criteria that filter when a workflow executes"
- **Actual:** UI uses "Criteria" not "Condition"
- **Fix:** Update glossary term to "Criteria"

### N3 — Inconsistent Function Count
- **Location:** Variables section (line 1223 vs 1479)
- **Guide says:** "over 100 functions" (line 1223) and "111 built-in functions" (line 1479)
- **Fix:** Use consistent "111 built-in functions" throughout

### N4 — Footer Date Outdated
- **Location:** Footer (line 2646)
- **Guide says:** "Last updated: 2026-01-15"
- **Fix:** Update to current date when corrections are applied

### N5 — "60+ event triggers" Undercount
- **Location:** Feature Overview (line 470), Product Foundation (line 516)
- **Guide says:** "60+ event triggers"
- **Actual:** **65** event triggers across 14 applications
- **Fix:** Update to "65+ event triggers"

### N6 — Bayzat Payroll Only Shows 2 Events in Foundation Table
- **Location:** Product Foundation → Trigger Applications (line 601)
- **Guide says:** "Salary created, salary updated"
- **Actual:** 14 events (overlaps with M6 but noting the discrepancy in the foundation table specifically)
- **Fix:** Show representative sample of actual events

### N7 — "Bayzat Task" Action App Name
- **Location:** Product Foundation → Action Applications table (line 652)
- **Guide says:** "Bayzat Task"
- **Actual:** The application is named **"Bayzat Task Management"**
- **Fix:** Use correct name "Bayzat Task Management"

---

## Missing Features / Behaviours Not Documented

1. **Dashboard statistics panel** — Active workflows count, total/failed executions in last 7 days
2. **"Deprecated" workflow status** — Third status beyond Active/Inactive
3. **9 trigger applications** — Accounts Payable, Knowledge Hub, Custom Recurring Events, Newsfeed, Work Expense, Custom Fields, Insurance, Timesheet, Bounce Attendance
4. **12+ action applications** — Bayzat HR (8 actions!), Google Sheets, N8N, Applied AI, Outgoing Integration, Bayzat Attendance, Bayzat Work Expense, etc.
5. **Executions tab table structure** — Columns, filters (Status, Date), search, pagination
6. **Applications tab details** — App cards, connection counts, workflow counts, 4 filter types, Add connection button
7. **Template page features** — Search, filters (All recipes/Top trending/Frequently used), Application filter, Tags filter, video banner, Activate button, Recommended badges
8. **Workflow card anatomy** — Run stats (X/Y runs), last executed date, created by, View activity button, three-dot menu
9. **Automations submenu** — Workflows, Approval flows, Integrations, API Token tabs
10. **Custom Recurring Events** — Scheduled/recurring trigger application
11. **Outgoing Integration** — Webhook-based action for external systems
12. **Bayzat HR as action application** — 8 actions including Create employee, Update employee, etc.

---

## Recommendations

1. **Rewrite trigger applications table** — List all 14 applications with event counts and representative events
2. **Rewrite action applications table** — List all 18 core applications with action counts
3. **Fix "Conditions" → "Criteria"** — Global find-and-replace throughout the guide
4. **Rewrite template list** — Use actual template names and describe the template discovery page
5. **Fix all fabricated events** — Payroll (remove 3 fake, add 8 real), Timeoff (fix 1), Attendance (remove 4 fake, add 2 real)
6. **Add dashboard overview section** — Statistics panel and workflow card anatomy
7. **Add Applications tab section** — Filtering, connections, and app management
8. **Update execution statuses** — Replace "Skipped" with "Criteria not matched"
9. **Document Automations submenu** — Including Approval flows, Integrations, API Token
