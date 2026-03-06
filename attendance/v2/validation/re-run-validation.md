# Attendance v2 User Guide — Re-Run Validation Report

**Date:** 2026-03-06
**Method:** Playwright browser automation against live Bayzat application
**Guide URL:** https://mashapajfhp.github.io/user-guides/attendance/v2/attendance-user-guide.html

---

## Summary

- **Total Issues Found:** 15
- **Critical (factually wrong / blocks user):** 6
- **Major (misleading or missing important info):** 5
- **Minor (cosmetic / terminology):** 4

**Overall Assessment:** The Attendance v2 guide has comprehensive coverage of attendance features (shift scheduling, time & pay adjustments, regularization, kiosk mode, facial recognition, biometric devices). However, many navigation paths are fabricated — pointing to non-existent accordion sections. The guide creates phantom sections ("Offices", "Workweeks", "Image Capture", "Policies", "Facial Recognition") under Attendance settings that don't exist. Additionally, facial recognition settings are vastly over-described with fabricated configuration options (retry limits, fallback behavior, employee scope) that don't exist in the UI.

---

## Critical Issues (6)

### C1 — Fabricated Facial Recognition Configuration (Retry Limits, Fallback, Scope)
- **Location:** Key Tasks → Enable Facial Recognition (lines 2066-2111), Business Rules (lines 2332-2340)
- **Guide says:** Navigate to "Settings → Attendance → Facial Recognition", toggle on, set retry limit (1-5 attempts, default 3), choose fallback behavior (image capture or block check-in), select employee scope (all or custom list), save configuration. Also claims FR Confidence column (High/Low/N/A) visible in Daily Report.
- **Actual:** Facial recognition is a **simple toggle** inside **Settings → Attendance → General** (expand accordion). The UI has ONLY:
  - **Enable Image Capture** toggle (checked, DISABLED — cannot be changed)
  - **Enable facial recognition** toggle (checked) with description "Employees scan their face during check-in/out, system verifies identity against reference photo"
  - An **Update** button
  There are NO retry limits, NO fallback behavior settings, NO employee scope selection, and NO "Save Configuration" button.
- **Also wrong in Business Rules (line 2334):** "Retry attempts: configurable 1-5, default is 3" — does not exist
- **Also wrong in Business Rules (line 2339):** "Fallback options: Either fallback to image capture (default) OR block check-in and notify admin" — does not exist
- **Fix:** Replace the entire "Configure Facial Recognition Settings" subtask with the actual 2-toggle UI inside the General accordion. Remove retry/fallback/scope claims from Business Rules section.

### C2 — Wrong Navigation for Offices
- **Location:** Initial Setup Step 1 (line ~1474), Key Tasks → Define Office Locations, Feature Discovery
- **Guide says:** "Settings → Attendance → Offices"
- **Actual:** Offices are configured at **Settings → Company → Offices**. There is no "Offices" accordion section in Attendance settings. The 10 Attendance accordion sections are: General, Multiple Visits, Work Timings, Overtime Policies, Days In Lieu Policies, Deductions Policies for Payroll, Work Centers for Shift Scheduling, Biometric Data, Attendance API Settings, Biometric Devices.
- **Fix:** Replace all "Settings → Attendance → Offices" with "Settings → Company → Offices"

### C3 — Wrong Navigation for Workweeks
- **Location:** Initial Setup Step 3, Key Tasks → Define Workweeks (line 1503-1510)
- **Guide says:** "Settings → Attendance → Workweeks"
- **Actual:** Workweek configuration is at **Settings → Company → Workweek** (singular). Description: "Set workweeks for your employees. Non-working days are not counted as days of leave in the calculation of working days for leave policies."
- **Fix:** Replace all "Settings → Attendance → Workweeks" with "Settings → Company → Workweek"

### C4 — Fabricated "Settings → Attendance → Policies" Section
- **Location:** Key Tasks → Set Minimum Extra Hours Threshold (line 1815-1822), Configure Line Manager Compensation Impact (line 1824-1832)
- **Guide says:** "Settings → Attendance → Policies" for configuring minimum extra hours threshold and line manager compensation toggle
- **Actual:** These settings are inside **Settings → Attendance → General** (expand accordion):
  - **Minimum extra hours threshold:** Minutes: 30 (in General accordion)
  - **Line managers can decide compensation types for extra hours worked** toggle (in General accordion)
  There is no "Policies" accordion section in Attendance settings.
- **Fix:** Replace "Settings → Attendance → Policies" with "Settings → Attendance → General (expand accordion)"

### C5 — Wrong Navigation for Image Capture
- **Location:** Initial Setup Step 4 (line ~1512-1518), Key Tasks → Enable Image Capturing (line 1512-1518), Kiosk Mode (line 1951-1957)
- **Guide says:** "Settings → Attendance → Image Capture"
- **Actual:** Image capture toggle is inside **Settings → Attendance → General** (expand accordion). The toggle is labeled "Enable Image Capture" and is currently checked but DISABLED (greyed out, cannot be changed). There is no separate "Image Capture" section.
- **Fix:** Replace "Settings → Attendance → Image Capture" with "Settings → Attendance → General (expand accordion)". Note that the toggle appears to be always-on and cannot be disabled.

### C6 — Wrong Navigation for Overtime / Days in Lieu / Deduction Policies
- **Location:** Key Tasks → Configure Attendance Policies (lines 1771-1813)
- **Guide says:**
  - "Settings → Payroll → Overtime Policy" (line 1774)
  - "Settings → Payroll → Days in Lieu Policy" (line 1791)
  - "Settings → Payroll → Deduction Policy" (line 1801)
- **Actual:** These policies are configured under **Attendance** settings, NOT Payroll:
  - **Settings → Attendance → Overtime Policies** (accordion section)
  - **Settings → Attendance → Days In Lieu Policies** (accordion section)
  - **Settings → Attendance → Deductions Policies for Payroll** (accordion section)
  Payroll settings has Daily Wage Calculation, Mass Uploads, Payroll Templates, Loan Policies, Leave salary/encashment, Bank Accounts, EOS eligibility, Allowances, Variable Pays, Additions, Deductions, Social Security — but NO Overtime/DIL/Deduction policies.
- **Fix:** Replace all three navigation paths with the correct Attendance settings paths.

---

## Major Issues (5)

### M1 — "Time → Time & Pay Adjustments" Is Not a Sidebar Item
- **Location:** Key Tasks → Process Time and Pay Adjustments (line 1850), Feature Discovery
- **Guide says:** "Time → Time and Pay Adjustments" as a standalone navigation path, implying it's a separate sidebar item
- **Actual:** Time and Pay Adjustments is a **TAB** on the Attendance page. Navigation: Time → Employee Attendance → then click the "Time and Pay Adjustments" tab (one of 3 tabs: Attendance Report, Time and Pay Adjustments, Attendance Raw Data). It is NOT a separate sidebar menu item.
- **Fix:** Clarify that Time and Pay Adjustments is a tab within the Attendance page, not a separate navigation destination.

### M2 — Custom Report Tab IS Available (Guide Claims It's Not)
- **Location:** Business Rules → Reporting Limitations (line 2417), Workarounds table (line 2571)
- **Guide says:** "Custom report tab not available for admins and line managers" and lists "No custom report tab" as a known gap with workaround
- **Actual:** The Custom Report tab **IS visible and accessible** under Attendance Report. The 3 sub-tabs are: Daily Report, Custom Report, Location Report. All are clickable.
- **Fix:** Remove the false limitation claim. Remove the "No custom report tab" workaround row.

### M3 — Create Leave Request Availability Contradicts Itself
- **Location:** Key Tasks → Create Leave Request from Attendance Report (line 1580-1588) vs Business Rules (line 2419) and Workarounds (line 2574)
- **Guide says (Key Tasks):** Describes "Create Leave Request from Attendance Report" as a valid subtask with steps
- **Guide also says (Limitations):** "Line managers cannot create leave requests directly from Daily Attendance Report"
- **Guide also says (Workarounds):** "Cannot create leave request from Daily Attendance Report — Navigate separately to Time Off module"
- **Actual:** The guide's own screenshot (exploration-02-row-action-menu.png) shows a three-dot action menu with "Create leave request" option. The feature exists but may have role-based restrictions.
- **Fix:** Resolve the contradiction. If the feature exists (as shown in screenshots and Key Tasks), remove the false limitation. If it's role-restricted, clarify which roles can use it.

### M4 — FAQ Navigation Paths Incorrect
- **Location:** FAQs (lines 2629-2687)
- **Guide FAQ says:**
  - "Settings → Offices" for geo-fencing (line 2635) — should be "Settings → Company → Offices"
  - "Settings → Attendance → Deduction Policy" (line 2655) — should be "Settings → Attendance → Deductions Policies for Payroll"
  - "Settings → Attendance → Policies" for line manager visibility (line 2675) — should be "Settings → Attendance → General"
- **Fix:** Update all FAQ navigation paths to match actual UI.

### M5 — "FR Confidence" Column Not Visible in Standard Daily Report
- **Location:** Key Tasks → View Facial Recognition Confidence in Reports (lines 2103-2110)
- **Guide says:** "View FR Confidence column (High/Low/N/A)" in Daily Report, hover to see reference and captured photos
- **Actual:** The Daily Report columns are: ID, Name, Reports to, Schedule, Date, Status, Check In, Check Out, Hours Worked, Extra Hours, Locations Visited. No "FR Confidence" column is visible.
- **Fix:** Verify if this column exists elsewhere or remove the claim. It may be a configurable column not shown by default.

---

## Minor Issues (4)

### N1 — Page Heading Capitalization: "Attendance settings"
- **Location:** Multiple references throughout guide
- **Guide says:** "Attendance Settings" (capital S)
- **Actual:** Page heading is **"Attendance settings"** (lowercase 's')
- **Fix:** Standardize to "Attendance settings" to match UI

### N2 — Shift Scheduler Heading Capitalization
- **Location:** Key Tasks → Manage Shift Schedules
- **Guide says:** "Shift Scheduler" (capital S)
- **Actual:** Page heading shows **"Shift scheduler"** (lowercase 's')
- **Fix:** Minor — capitalize consistently with UI

### N3 — Footer Date Outdated
- **Location:** Footer (line 2820)
- **Guide says:** "Last updated: 2026-02-26"
- **Fix:** Update to 2026-03-06

### N4 — "Workweeks" vs "Workweek" (Plural vs Singular)
- **Location:** Multiple references
- **Guide says:** "Workweeks" (plural)
- **Actual:** Company settings accordion title is **"Workweek"** (singular)
- **Fix:** Use "Workweek" to match UI label

---

## Verified Claims (Accurate)

1. **10 accordion sections in Attendance settings** — General, Multiple Visits, Work Timings, Overtime Policies, Days In Lieu Policies, Deductions Policies for Payroll, Work Centers for Shift Scheduling, Biometric Data, Attendance API Settings, Biometric Devices ✓
2. **3 main tabs on Attendance page** — Attendance Report, Time and Pay Adjustments, Attendance Raw Data ✓
3. **3 sub-tabs in Attendance Report** — Daily Report, Custom Report, Location Report ✓
4. **3 sub-tabs in Attendance Raw Data** — API Data, Device Data, Legacy Raw Data ✓
5. **Daily Report table columns** — ID, Name, Reports to, Schedule, Date, Status, Check In, Check Out, Hours Worked, Extra Hours, Locations Visited ✓
6. **Time and Pay Adjustments sub-tabs** — Scheduled, Pending, Approved, Processed, Rejected ✓
7. **Quick Filters** — Extra Hours, Absent Day, Early Departure, Late Arrival ✓
8. **General accordion settings** — Enable Image Capture, Enable facial recognition, Allow check-in from multiple offices, Line managers compensation types, Auto-mark absent, Minimum extra hours threshold (30 min) ✓
9. **Work Timings table columns** — Name, Working hours, Late arrival, Early departure, Absent after, Breaks, Outside office, Extra hours + Edit/Delete ✓
10. **Biometric Devices table columns** — Brand name, Model, Serial number, Office, Data structure, Created at ✓
11. **Biometric Data** — Has "Start" button linking to Bayzat Sheets ✓
12. **Shift Scheduler features** — Week/Month toggle, Work Center filter, Sort by, Search, Filters, Views, Copy Schedule, Publish shifts, Schedule Planner ✓
13. **Split shifts documentation** — "Learn about split shifts" button with "New" badge visible ✓
14. **AI Reports banner** — "Curious how attendance trends?" + "Try AI Reports" button ✓
15. **Pending tickets** — "11 pending employee tickets for attendance regularization" + "View tickets" ✓
16. **Sidebar Time menu structure** — Leaves (Employee leaves, Calendar, My leaves), Attendance (Employee attendance, My attendance), Shifts (Shift scheduler), Timesheets (Employee timesheets, My timesheet) ✓
17. **Attendance Raw Data columns** — Name, Employee ID, Email, Status, Punch Date Time, Punch Type, Attendance Date, Evaluated As ✓

---

## Recommendations

1. **Fix all fabricated navigation paths** — This is the most critical fix. Replace phantom sections ("Offices", "Workweeks", "Image Capture", "Policies", "Facial Recognition") with actual locations.
2. **Strip facial recognition over-documentation** — Replace retry limits/fallback/scope with the actual 2-toggle UI in the General accordion.
3. **Fix Overtime/DIL/Deduction policy paths** — Move from "Settings → Payroll" to "Settings → Attendance" for all three.
4. **Resolve Create Leave Request contradiction** — Either the feature works (Key Tasks + screenshot show it) or it doesn't (Limitations say it doesn't). Pick one.
5. **Remove false Custom Report limitation** — The tab is visible and accessible.
6. **Update all FAQ paths** — Ensure they match the actual navigation structure verified above.
