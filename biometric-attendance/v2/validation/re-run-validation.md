# Biometric Attendance User Guide — Re-Run Validation Report

**Date:** 2026-03-06
**Method:** Playwright browser automation against live Bayzat application
**Guide URL:** https://mashapajfhp.github.io/user-guides/biometric-attendance/v2/biometric-attendance-user-guide.html

---

## Summary

- **Total Issues Found:** 14
- **Critical (factually wrong / blocks user):** 4
- **Major (misleading or missing important info):** 7
- **Minor (cosmetic / terminology):** 3

---

## Critical Issues (4)

### C1 — Wrong URL Pattern
- **Location:** Feature Discovery → Quick Access Methods (line 964)
- **Guide says:** Direct URL pattern is `/time/attendance`
- **Actual:** The URL is `/enterprise/dashboard/attendance/attendance-report/daily-report`
- **Fix:** Replace the URL pattern with the correct path

### C2 — Fabricated Facial Recognition Configuration Steps
- **Location:** Feature Usage → Configure Facial Recognition (line 1419-1424), Step 4: Enable Facial Recognition (line 1184-1197)
- **Guide says:** Detailed 9-step configuration including: set image comparison sensitivity threshold, enable liveliness detection, configure confidence score requirements, configure retry limits, set retry cooldown period, set fallback behavior (allow manual/require supervisor/block entirely), select eligible employees (departments/individuals/all), manage reference photos, click "Save Configuration"
- **Actual:** The facial recognition settings are inside the **General** accordion in Settings → Attendance. The UI has only:
  - **Enable Image Capture** toggle (checked, disabled — cannot be changed)
  - **Enable facial recognition** toggle (checked) with description "Employees scan their face during check-in/out, system verifies identity against reference photo"
  - An **Update** button
  There are NO retry limits, NO fallback behavior settings, NO sensitivity thresholds, NO eligible employee selection, NO reference photo management UI, and NO "Save Configuration" button.
- **Fix:** Replace the fabricated 9-step configuration with the actual 2-toggle UI in the General accordion

### C3 — Wrong Navigation Path for Facial Recognition
- **Location:** Feature Discovery (line 931-936), Step 4 (line 1187), Feature Usage (line 1424)
- **Guide says:** "Settings → Attendance Settings → Facial Recognition Configuration" and "Settings → Attendance → Facial Recognition"
- **Actual:** The facial recognition toggle is inside **Settings → Attendance → General** (expand the General accordion). There is no separate "Facial Recognition" or "Facial Recognition Configuration" section.
- **Fix:** Replace all facial recognition navigation paths with "Settings → Attendance → General (expand accordion)"

### C4 — Fabricated "Enable Biometric Attendance" Master Toggle
- **Location:** Initial Setup → Step 1 (line 1023-1031)
- **Guide says:** "Navigate to Settings → Attendance Settings → Locate the Biometric Attendance section → Toggle the Enable Biometric Attendance switch to ON → Review and accept any terms or compliance notices → Click Save"
- **Actual:** There is **no "Enable Biometric Attendance" master toggle**. The Attendance settings page has accordion sections for General, Multiple Visits, Work Timings, Overtime Policies, Days In Lieu Policies, Deductions Policies for Payroll, Work Centers for Shift Scheduling, Biometric Data, Attendance API Settings, and Biometric Devices. None of these contain a master biometric attendance enable/disable toggle.
- **Fix:** Remove Step 1 entirely or replace with instructions to configure biometric devices and enable facial recognition as needed

---

## Major Issues (7)

### M1 — Wrong Bulk Upload Navigation Path
- **Location:** Initial Setup → Step 3 Method B (line 1156-1170), Feature Usage → Bulk Biometric ID Upload
- **Guide says:** "Employees → Bulk Actions → Upload Biometric IDs"
- **Actual:** The bulk upload is accessed via **Settings → Attendance → Biometric Data → Start** button, which opens Bayzat Sheets at `/sheets/attendance/mass-upload/biometric-data`. This is an in-browser spreadsheet interface, not a file upload via Employees → Bulk Actions.
- **Fix:** Update the navigation path and describe the Bayzat Sheets interface

### M2 — Missing General Settings Toggles
- **Location:** Initial Setup, Feature Usage
- **Guide says:** Nothing about additional attendance settings toggles
- **Actual:** The General accordion in Attendance Settings contains important toggles not documented:
  - **Allow check-in/out from multiple offices** — "Applicable to non-shift employees only: they can check-in/out from offices mapped to their work profiles."
  - **Line managers can decide compensation types for extra hours worked** — "Allow Line managers to decide overtime payments or days in lieu for extra hours worked by employees."
  - **Auto-mark employees as absent on missed check-in** — "System auto-marks employees as absent for the past day if they don't check-in during scheduled hours."
  - **Minimum extra hours threshold** — Configurable in minutes (default: 30)
- **Fix:** Document these toggles in the Setup Process or Feature Usage sections

### M3 — Missing AI Reports Promotional Banner
- **Location:** Feature Usage → View and Edit Attendance Reports
- **Guide says:** Nothing about AI Reports integration
- **Actual:** The Attendance Report page displays a prominent banner: "Curious how attendance trends? Get an instant report using Bayzat AI" with a **"Try AI Reports"** button
- **Fix:** Document this cross-feature discovery element

### M4 — Missing Pending Tickets Banner
- **Location:** Feature Usage → View and Edit Attendance Reports
- **Guide says:** Nothing about pending attendance tickets
- **Actual:** The attendance page shows a count of pending employee tickets for attendance regularization (e.g., "11 pending employee tickets for attendance regularization") with a **"View tickets"** button
- **Fix:** Document the attendance regularization tickets notification

### M5 — Wrong Save Button Name for Facial Recognition
- **Location:** Step 4: Enable Facial Recognition (line 1194)
- **Guide says:** "Click **Update** to save the changes" (this is correct in Step 4) but elsewhere says "Click **Save Configuration**" (line 1424 area)
- **Actual:** The button is **"Update"**, not "Save Configuration"
- **Fix:** Replace all "Save Configuration" references with "Update"

### M6 — Biometric Devices Table Missing "Created at" Column Documentation
- **Location:** Initial Setup → Step 2, Feature Usage → Configure Biometric Devices
- **Guide says:** Lists device fields as Brand Name, Model, Serial Number, Office, Device data structure, Threshold for check in
- **Actual:** The Biometric Devices table also has a **"Created at"** column and **Edit/Delete** action buttons in the table rows. The "Data structure" column shows the punch type option with threshold (e.g., "Excludes Punch type (Threshold: 60 mins)")
- **Fix:** Add the Created at column and Edit/Delete actions to the documentation

### M7 — Fabricated Facial Recognition Settings Table
- **Location:** Required Settings to Configure table (line 1226-1267)
- **Guide says:** Lists "Facial Recognition Retry Limit" and "Facial Recognition Fallback" as required settings
- **Actual:** These settings do not exist in the UI. The only facial recognition setting is a simple enable/disable toggle.
- **Fix:** Remove "Facial Recognition Retry Limit" and "Facial Recognition Fallback" from the settings table, and update "Recommended Default Values" section which mentions retry limits of 3 and fallback behavior

---

## Minor Issues (3)

### N1 — Navigation Label vs Page Heading
- **Location:** Multiple references throughout the guide
- **Guide says:** "Settings → Attendance Settings" and "Attendance Settings"
- **Actual:** The sidebar navigation link is **"Attendance"** and the page heading is **"Attendance settings"** (lowercase 's'). There is no "Attendance Settings" label with capital S.
- **Fix:** Standardize to "Settings → Attendance" for navigation paths

### N2 — Table Column Names Slightly Different
- **Location:** Feature Usage → View and Edit Attendance Reports (line 1345)
- **Guide says:** "Employee ID and Name" as a combined mention
- **Actual:** These are separate columns: **"ID"** and **"Name"** (not "Employee ID" and "Employee Name")
- **Fix:** Use the actual column names "ID" and "Name"

### N3 — Footer Date Outdated
- **Location:** Footer (line 1939)
- **Guide says:** "Last updated: 2026-01-22"
- **Fix:** Update to 2026-03-06

---

## Missing Features / Behaviours Not Documented

1. **General settings toggles** — Allow check-in/out from multiple offices, Line managers compensation types, Auto-mark absent, Minimum extra hours threshold
2. **AI Reports promotional banner** — Cross-feature discovery element on attendance page
3. **Pending attendance regularization tickets** — Count and "View tickets" button on attendance page
4. **Biometric Data mass upload via Bayzat Sheets** — Settings → Attendance → Biometric Data → Start (opens in-browser spreadsheet)
5. **Created at column** in Biometric Devices table
6. **Edit/Delete buttons** in Biometric Devices table rows
7. **Enable Image Capture toggle** (disabled state) — Prerequisite for facial recognition
8. **Attendance settings accordion layout** — The settings page uses expandable accordion panels, not flat sections

---

## Recommendations

1. **Remove fabricated facial recognition configuration** — The 9-step config with retry limits, sensitivity thresholds, and fallback behavior doesn't exist. Replace with the actual 2-toggle UI.
2. **Remove fabricated master toggle** — There is no "Enable Biometric Attendance" switch. Remove Step 1 or restructure.
3. **Fix bulk upload path** — "Employees → Bulk Actions" does not lead to biometric upload. The actual path is through Attendance Settings → Biometric Data → Start.
4. **Document the accordion layout** — The settings page uses expandable accordion panels. Users need to know to expand sections to find settings.
5. **Add General settings documentation** — The auto-absent marking, multi-office check-in, and extra hours threshold settings are important operational controls.
6. **Fix all URL patterns** — The `/time/attendance` URL is wrong.
