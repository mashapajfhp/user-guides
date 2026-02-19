# Work Timings - Gap Findings Report

**Date:** 2026-02-20
**Feature:** Work Timings (Settings > Attendance > Work Timings)
**Validated by:** Claude Opus 4.6 via Playwright browser automation

---

## GAP 1: Half-Day Timing Configuration

### Location
Settings > Attendance > Work Timings > [Edit any work timing] > "This is a half-day timing" toggle

### Findings
- **Toggle label (exact text):** "This is a half-day timing"
- **Toggle type:** Simple on/off switch (no additional sub-fields appear when enabled)
- **Position in form:** Located between the "Starts at / Ends at" time fields and the "Late arrival" section
- **Behavior when enabled:**
  - The toggle switches to the checked/enabled (purple) state
  - **No additional fields or sub-sections appear** -- there are no separate start/end times, no percentage field, no special hour fields
  - A **warning alert** appears at the bottom of the form: "Any edits to the work timings would affect the attendance data of all employees assigned to this work timing."
- **Key insight:** The half-day designation is purely a boolean flag. It marks the entire work timing as a half-day schedule. The start/end times already defined in the form represent the half-day work window. There is no need for separate half-day timing inputs because the work timing itself IS the half-day timing.

### Screenshots
- `gap1-halfday-enabled.png` - Form with half-day toggle enabled (top view)
- `gap1-halfday-enabled-bottom.png` - Form with half-day toggle enabled (bottom view showing warning alert)

---

## GAP 2: Flexible Timing - Full Behavior

### Location
Settings > Attendance > Work Timings > [Edit any work timing] > "Flexible work timing" toggle

### Findings
- **Toggle label (exact text):** "Flexible work timing"
- **Position in form:** Located directly below the Name field, before the time fields

**When Flexible work timing is ENABLED:**

1. **New section appears: "Office hours limit"**
   - Has an info (i) icon next to the heading
   - The existing "Starts at" and "Ends at" time fields remain active but are now relabeled conceptually as the office hours limit window

2. **New section appears: "Hours employee need to work"**
   - Contains two input fields:
     - **Hours** (text input, e.g., "0")
     - **Minutes** (text input, e.g., "0")
   - This defines the total hours the employee is required to work within the office hours limit window

3. **Late arrival section becomes DISABLED**
   - The toggle and button are greyed out
   - **Tooltip on hover (exact text):** "Not applicable for the flexible work timing"

4. **Early departure section becomes DISABLED**
   - The toggle and button are greyed out
   - **Tooltip on hover (exact text):** "Not applicable for the flexible work timing"

5. **Extra Hours radio buttons become DISABLED**
   - All three options are greyed out and non-clickable:
     - "Total hours - Total hours worked more than scheduled hours" (remains selected but disabled)
     - "After work end time - Total hours worked after the work end time"
     - "All hours worked - Total hours worked by the employee"

6. **Sections that REMAIN active when flexible is enabled:**
   - "This is a half-day timing" toggle
   - "Absent day" section (with threshold configuration)
   - "Allow breaks" toggle
   - "Allow out of office check-ins" toggle
   - "Disallow check-in before work start time" toggle

**In the work timings table:**
- Flexible work timings display a **"Flexible" badge** next to their name
- The "Working hours" column shows the required hours (e.g., "09 hr 30 mins") AND the office hours limit range (e.g., "02:00 AM - 01:55 AM") with an "Overnight" icon if applicable
- Late arrival and Early departure columns show **"N/A"** instead of "Disabled"

### Screenshots
- `gap2-flexible-enabled-top.png` - Form with flexible enabled showing new fields and greyed out sections
- `gap2-flexible-enabled-bottom.png` - Bottom of form showing greyed out Extra Hours radio buttons
- `gap2-flexible-not-applicable-tooltip.png` - Tooltip "Not applicable for the flexible work timing"

---

## GAP 3: Deductions Policies Section

### Location
Settings > Attendance > "Deductions Policies for Payroll" section

### Findings

**Section description (exact text):** "Your company's policies and rules for creating payroll deductions for absent days, late arrivals and early departures."

**Employee assignment bar at top:**
- **Label:** "EMPLOYEE ASSIGNMENT"
- **Assignment type badge:** "Manual" (displayed as a bordered tag)
- **Separator:** "|"
- **Unassigned count:** "UNASSIGNED 98 employees" (clickable, shown in purple text)
- **Button:** "Manage employee assignment" (disabled with tooltip: "Automatic assignment is not available for this policy")

**Table columns:**
1. **Policy name** - Name of the deduction policy (clickable link)
2. **No. of employees included** - e.g., "1 Employee", "2 Employees", "4 Employees", "No Employees" (clickable in purple)
3. **Time to action window** - e.g., "3 Days", "1 Days", "15 Days", "30 Days", or "Disabled"
4. **Work disruptions** - either "Enabled" (with info icon) or "Disabled"
5. **Attendance violation tracking** - either "Advanced" (with info icon) or "Standard" (with info icon)
6. **Last updated** - Date and "By: [person name]" format, e.g., "27 Mar 2025 By: Sherbano Khanzada"
7. **Status controls:**
   - Active/Inactive toggle switch
   - Edit button (pencil icon)
   - Delete button (trash icon)

**Existing policies observed:**
| Policy Name | Employees | Action Window | Disruptions | Tracking | Status |
|---|---|---|---|---|---|
| Bhatia Brothers HO Anwar | 1 Employee | 3 Days | Disabled | Advanced | Active |
| Noida testing | 1 Employee | 1 Days | Disabled | Advanced | Active |
| Deduction for Safwan | 2 Employees | 15 Days | Enabled | Advanced | Active |
| Bhatia Brother WFH | No Employees | Disabled | Disabled | Standard | Inactive |
| Advance Tracking Policy - 1 | 4 Employees | 30 Days | Enabled | Advanced | Active |

- **"Add new" button** at bottom left
- **Pagination:** Page 1 of 2

### Key insight for work timings guide
Deduction policies connect to work timings through the late arrival/early departure/absent thresholds defined in work timings. The work timing thresholds define WHEN a violation occurs; the deduction policy defines WHAT happens as a consequence (payroll deduction). The "Attendance violation tracking" type (Advanced vs Standard) determines the granularity of violation tracking.

### Screenshots
- `gap3-deduction-policies.png` - Overview of the Deductions Policies section
- `gap3-deduction-policies-table.png` - Full table view with all policies

---

## GAP 4: Workweek Configuration

### Location
Settings > Company > "Workweek" section

### Findings

**Section description (exact text):** "Set workweeks for your employees. Non-working days are not counted as days of leave in the calculation of working days for leave policies."

**Workweek configuration format:**
- Each workweek has a **name** (e.g., "Turkey Office", "Standard Week", "Dubai Office")
- Days are displayed as 7 day-boxes: **SUN, MON, TUE, WED, THU, FRI, SAT**
- **Working days** are highlighted (purple border with a dot/check icon inside)
- **Non-working days** are greyed out (no icon, faded text)
- Each workweek has **Edit** (pencil) and **Delete** (trash) icons
- One workweek labeled "Default cannot delete" only has Edit (no Delete)

**Observed workweek configurations:**
| Workweek Name | Working Days | Non-Working Days |
|---|---|---|
| Turkey Office | SUN, MON, TUE, WED, THU | FRI, SAT |
| WFH Employees | SUN, MON, TUE, WED, SAT | THU, FRI |
| Test Workweek - Ahraz | SUN, MON, TUE, WED, THU, FRI, SAT (7 days) | None |
| Standard Week | MON, TUE, WED, THU, FRI | SUN, SAT |
| Dubai Office | MON, TUE, WED, THU, FRI | SUN, SAT |
| Warehouse Staff (6 days) | SUN, MON, TUE, WED, THU, FRI | SAT |

- **"Add new" button** at bottom to create new workweeks

### Key insight for work timings guide
Workweeks define which days are working days vs weekends/off-days. This is relevant to work timings because:
- Extra hours are only calculated on working days (non-working days would follow different rules)
- The "Auto-mark employees as absent on missed check-in" feature in General settings only applies on scheduled working days
- Workweek is assigned at the employee/profile level, separate from work timings

### Screenshots
- `gap4-workweek-settings.png` - Workweek section overview
- `gap4-workweek-examples.png` - Multiple workweek configurations showing different patterns

---

## GAP 5: Extra Hours Display in Attendance

### Location
Time > Attendance > Attendance Report > Daily Report

### Findings

**Attendance Report page structure:**
- Main heading: "Attendance"
- Three top-level tabs: **Attendance Report**, **Time and Pay Adjustments**, **Attendance Raw Data**
- Under Attendance Report, three sub-tabs: **Daily Report**, **Custom Report**, **Location Report**

**Daily Report table columns:**
1. **ID** (sortable)
2. **Name** (sortable, clickable link to employee profile)
3. **Reports to** (sortable)
4. **Schedule** - Shows assigned work timing, e.g., "07:00 AM - 01:00 PM" with office location if applicable
5. **Date**
6. **Status** - e.g., "Absent", "--"
7. **Check In** (sortable)
8. **Check Out** (sortable)
9. **Hours Worked** (sortable) - Shows hours or "--", with a "View Task" link
10. **Extra Hours** (sortable) - Shows calculated extra hours or "--"
11. **Locations Visited** (sortable)
12. **Actions** column (kebab menu/buttons for each row)

**Column visibility customization:**
- A **"Columns"** button (with gear icon) opens a panel titled **"Select columns you want to see"**
- All columns can be toggled on/off via checkboxes EXCEPT:
  - **ID** - always visible (checkbox checked and disabled)
  - **Name** - always visible (checkbox checked and disabled)
  - **Actions** - always visible (checkbox checked and disabled)
- **Extra Hours** CAN be hidden by unchecking it in the Columns panel

**Additional features:**
- Date picker allows selecting any past date
- Search by employee name or employee ID
- Filters button for additional filtering
- Download button for exporting data
- "7 pending employee tickets for attendance regularization" notification bar with "View tickets" button
- "Curious how attendance trends? Get an instant report using Bayzat AI" banner with "Try AI Reports" button

### Key insight for work timings guide
Extra hours are displayed as a dedicated column in the Daily Report. They can be hidden via the Columns customization. The extra hours calculation method (Total hours / After work end time / All hours worked) configured in the work timing determines how this value is computed.

### Screenshots
- `gap5-attendance-report-columns.png` - Attendance report showing all columns including Extra Hours
- `gap5-attendance-daily-report.png` - Daily report with date picker and data
- `gap5-columns-panel.png` - Column visibility customization panel

---

## GAP 6: Work Timing Edit Form - Full Field Inventory

### Location
Settings > Attendance > Work Timings > [Edit button on any work timing]

### Findings

**Dialog title format:** "Edit [Work Timing Name] work timing"

**Complete field inventory (top to bottom):**

1. **Name** * (required text field)
   - Label: "Name *"

2. **Flexible work timing** (toggle switch)
   - Label: "Flexible work timing"
   - When enabled: reveals "Office hours limit" header and "Hours employee need to work" fields

3. **Office hours limit** (only visible when Flexible is enabled)
   - Has info (i) icon
   - Contains the Starts at / Ends at time fields

4. **Starts at** * (time picker)
   - Label: "Starts at *"
   - Placeholder: "09:00 AM"
   - Format: HH:MM AM/PM
   - Has clock icon button ("Choose time, selected time is...")

5. **Ends at** * (time picker)
   - Label: "Ends at *"
   - Placeholder: "06:00 PM"
   - Format: HH:MM AM/PM
   - Has clock icon button ("Choose time, selected time is...")

6. **Hours employee need to work** (only visible when Flexible is enabled)
   - Two sub-fields:
     - **Hours** (text input)
     - **Minutes** (text input)

7. **This is a half-day timing** (toggle switch)
   - Label: "This is a half-day timing"
   - Simple on/off, no sub-fields

8. **Late arrival** (collapsible section with toggle)
   - Toggle label: "Late arrival"
   - Expand/collapse chevron arrow
   - When expanded and enabled:
     - Text: "Define violation delay time levels (mins)"
     - **Level 1 - Consider as late if**
       - "Delayed more than" [spinbutton] "Minutes" (with up/down arrows)
     - **"+ Add more levels"** button to add Level 2, Level 3, etc.
   - When Flexible is enabled: entire section disabled with tooltip "Not applicable for the flexible work timing"

9. **Early departure** (collapsible section with toggle)
   - Toggle label: "Early departure"
   - Expand/collapse chevron arrow
   - When Flexible is enabled: entire section disabled with tooltip "Not applicable for the flexible work timing"

10. **Absent day** (collapsible section with toggle)
    - Toggle label: "Absent day"
    - Expand/collapse chevron arrow
    - When expanded and enabled:
      - Text: "Define violation absent day time (mins)"
      - **Consider as absent day if**
        - "Delayed more than" [spinbutton] "Minutes" (with up/down arrows)

11. **Allow breaks** (toggle switch)
    - Label: "Allow breaks"

12. **Allow out of office check-ins** (toggle switch)
    - Label: "Allow out of office check-ins" (note: uses non-breaking hyphen character)

13. **Disallow check-in before work start time** (toggle switch)
    - Label: "Disallow check-in before work start time"

14. **Extra Hours** (radio button group with info icon)
    - Heading: "Extra Hours" with info (i) icon
    - Radio group name: "extraHoursType"
    - Three options:
      - **"Total hours - Total hours worked more than scheduled hours"**
      - **"After work end time - Total hours worked after the work end time"**
      - **"All hours worked - Total hours worked by the employee"**
    - When Flexible is enabled: all options disabled

**Form actions (bottom bar):**
- **Cancel** button
- **Update** button (purple, primary)

**Warning alert (appears when changes are made):**
- Yellow/amber warning icon
- Text: "Any edits to the work timings would affect the attendance data of all employees assigned to this work timing."

### Work Timings Table columns:
| Column | Description |
|---|---|
| Name | Work timing name (+ "Flexible" badge if applicable) |
| Working hours | Start - End times (+ "Overnight" icon if cross-midnight, + required hours for flexible) |
| Late arrival | "Disabled", "N/A" (for flexible), or "X level(s)" with info icon |
| Early departure | "Disabled", "N/A" (for flexible), or level info |
| Absent after | "X Minutes" |
| Breaks | "Disabled" or "X Minutes" |
| Outside office | "Disabled" or "Enabled" |
| Extra hours | "Total hours", "After work end time", or "All hours worked" with info icon |
| Actions | Edit (pencil) and Delete (trash) buttons |

- Table has search by name
- Pagination with configurable rows per page (5/page default)
- "Add new" button
- Total count: "Showing 1 - 5 of 81"

### Screenshots
- `gap6-work-timings-list.png` - Work timings table overview
- `gap6-edit-form-top.png` - Edit form top section (Name, Flexible, times, half-day, Late arrival, Early departure)
- `gap6-edit-form-bottom.png` - Edit form bottom section (Extra Hours radio buttons, Cancel/Update)
- `gap6-late-arrival-expanded.png` - Late arrival section expanded showing level configuration
- `gap6-absent-day-expanded.png` - Absent day section expanded showing threshold configuration

---

## GAP 7: General Settings Section

### Location
Settings > Attendance > "General" section (first accordion on the Attendance settings page)

### Findings

**Section description (exact text):** "Define how you want your employees to check-in and out on the mobile app."

**Settings (top to bottom):**

1. **Enable Image Capture** (toggle switch - CHECKED, DISABLED/greyed out)
   - Description: "Employees are asked to take a picture when they check-in and check-out."
   - Note: This toggle appears to be permanently enabled and non-editable (disabled state)
   - Separated from other settings by a horizontal line

2. **Enable facial recognition** (toggle switch - CHECKED)
   - Description: "Employees scan their face during check-in/out, system verifies identity against reference photo"
   - Has an **"Update"** button next to it (separate from other toggles)

3. **Allow check-in/out from multiple offices** (toggle switch - CHECKED)
   - Description: "Applicable to non-shift employees only: they can check-in/out from offices mapped to their work profiles."

4. **Line managers can decide compensation types for extra hours worked** (toggle switch - CHECKED)
   - Description: "Allow Line managers to decide overtime payments or days in lieu for extra hours worked by employees."

5. **Auto-mark employees as absent on missed check-in** (toggle switch - CHECKED)
   - Description: "System auto-marks employees as absent for the past day if they don't check-in during scheduled hours."

6. **Minimum extra hours threshold** (numeric input field)
   - Label: "Minimum extra hours threshold"
   - Sub-label: "Minutes"
   - Current value: **30**
   - This defines the minimum number of extra minutes an employee must work beyond their scheduled hours before it counts as "extra hours"

### Key insight for work timings guide
The "Minimum extra hours threshold" in General settings works in conjunction with the Extra Hours calculation method in each work timing. Even if a work timing calculates extra hours using "Total hours" or "After work end time", the extra hours will only be recorded if they exceed this minimum threshold (default: 30 minutes).

The "Line managers can decide compensation types for extra hours worked" toggle is relevant because it determines whether managers can choose between overtime pay and days in lieu for the extra hours tracked by work timings.

The "Auto-mark employees as absent on missed check-in" toggle interacts with the "Absent day" threshold in work timings.

### Screenshots
- `gap7-general-settings.png` - Full General settings section expanded

---

## Summary of Key Findings for Guide Enhancement

### New content areas to add to the user guide:

1. **Half-day timing** is a simple toggle that marks the entire work timing as half-day. No additional configuration needed -- the start/end times define the half-day window.

2. **Flexible timing** has significant behavioral impacts:
   - Introduces "Office hours limit" and "Hours employee need to work" fields
   - Automatically disables Late arrival, Early departure, and Extra Hours configuration
   - Shows "N/A" in the work timings table for Late arrival and Early departure

3. **Deduction Policies** are a separate section that consumes work timing violation data. They have their own configuration for tracking type (Standard/Advanced), action windows, and work disruptions. Employee assignment is manual.

4. **Workweek** is configured under Settings > Company (not Attendance). It defines working vs non-working days. Multiple workweeks can be created for different employee groups. One default workweek cannot be deleted.

5. **Extra Hours in Attendance** are displayed in the Daily Report as a dedicated column that can be shown/hidden via the Columns customization panel. The calculation depends on the method selected in the work timing (Total hours / After work end time / All hours worked).

6. **General settings** include the critical "Minimum extra hours threshold" (default 30 minutes) that acts as a global filter for extra hours tracking across all work timings.

7. **The edit form** contains 14 configurable elements with complex interdependencies (flexible mode disabling several sections, late arrival supporting multiple levels, etc.).
