<div class="content-area" role="main" aria-label="User guide content">

<div id="feature-overview" class="section section section-feature-overview">

<div class="section-header">

## What is Shift Scheduling?

</div>

<div class="section-body">

<div class="subsection">

### Overview

Shift Scheduling enables admins and schedulers to create, assign, and publish work shifts for employees across different work timings and office locations. Access it from the Attendance module in the Bayzat platform.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/01-shift-scheduler-main-view.png" class="screenshot" loading="lazy" alt="Shift Scheduler main view" />
<figcaption>Shift Scheduler interface showing weekly employee schedules across work centers</figcaption>
</figure>

Create shifts individually or in bulk, save as drafts for review, publish to notify employees, and manage schedules up to 6 months in advance.

</div>

<div class="subsection">

### Key Benefits

- Assign different work timings to employees based on operational needs
- Organize employees into work centers by location, team, or scheduler
- Copy and repeat shift patterns across weeks to reduce manual entry
- Schedule split shifts for employees working multiple segments per day
- Track attendance automatically based on published shift timings
- Notify employees instantly via mobile app when shifts are published

</div>

<div class="strategic-context">

<div class="strategic-header">

### Strategic Context

</div>

<div class="strategic-grid">

<div class="strategic-card">

#### 🎯 What Shift Scheduling Solves

Eliminates manual spreadsheet-based shift planning for businesses with variable work hours across locations.

- Replaces Excel rosters and email-based schedule distribution
- Standardizes shift assignment across multiple offices and work centers
- Enables real-time schedule visibility for both managers and employees

</div>

<div class="strategic-card">

#### 💰 Why It Matters

Shift schedules are the foundation for attendance tracking and payroll calculations in shift-based organizations.

- Prerequisite for accurate [attendance](https://mashapajfhp.github.io/user-guides/attendance/v1/attendance-user-guide.html) check-in/check-out validation
- Drives late arrival, early departure, and absence calculations
- Controls [overtime](https://mashapajfhp.github.io/user-guides/overtime/v2/overtime-user-guide.html) eligibility and time-based deductions

</div>

<div class="strategic-card">

#### 🏗️ How It Connects

Shift schedules are transactional assignments that reference configuration templates (work timings, offices).

- Assigned to individual employees for specific dates
- Referenced by attendance records and [timesheet](https://mashapajfhp.github.io/user-guides/timesheets/v1/timesheets-user-guide.html) entries
- Affects individual employees on scheduled days only

</div>

</div>

</div>

<div class="subsection">

### Who Uses This Feature?

| User Role | What They Do | Value Proposition |
|----|----|----|
| **Super Admin** | Create and manage work centers, assign schedulers, create/publish/edit shifts across all work centers, and configure shift scheduling permissions | Centralize shift management structure and delegate scheduling responsibilities across the organization |
| **Shift Scheduler** | Create, publish, edit, reassign, and delete employee shifts within assigned work centers | Replace manual scheduling with automated shift assignment and instant employee notification |
| **Attendance Manager** | Manage attendance records (edit check-in/check-out times, clear/delete records) for shift employees. Cannot create or manage shifts directly | Ensure accurate attendance tracking and corrections for shift-based employees |
| **Line Manager** | View team schedules and manage attendance records for reporting employees. Cannot create or edit shifts | Access real-time visibility into team availability and correct attendance discrepancies |
| **Employee** | View assigned shifts in mobile app and check in/out for published shifts | Know work schedule in advance without waiting for manual communication |

</div>

<div class="subsection">

### What Can Employees Do?

Employees interact with Shift Scheduling through the **Bayzat mobile app only** — they do not have access to the web-based Shift Scheduler interface. Here is what employees can and cannot do:

**Employees CAN:**
- View their published shift schedule in the **"My Schedule"** section of the mobile app
- See shift details including date, start/end time, and office location
- See the current shift highlighted as **"Happening now"**
- View next shift details when working split shifts (2 shifts in one day)
- **Check in** at shift start time using the attendance widget on the mobile app home page
- **Check out** at shift end time using the same attendance widget
- Receive **push notifications** when new shifts are published or existing shifts are changed

**Employees CANNOT:**
- Create, edit, or delete shifts — scheduling is managed exclusively by admins and Shift Schedulers
- Swap shifts directly with other employees — there is no self-service shift swap feature
- View other employees' shift schedules
- Access the Shift Scheduler web interface
- Check in before a shift is published — check-ins are rejected for unpublished shifts

<div class="info-box">

**Shift change requests via Employee Tickets:** Organizations can configure a **Shift Change Request** ticket type to allow employees to formally request schedule changes. See the [Request a Shift Change](#request-shift-change) task below for the complete end-to-end flow and prerequisites.

</div>

</div>

</div>

</div>

<div id="product-foundation" class="section section section-product-foundation">

<div class="section-header">

## Product Foundation Overview

</div>

<div class="section-body">

<div class="subsection">

### How Shift Scheduling Fits

Shift Scheduling is a transactional feature that creates time-bound work assignments for employees. Unlike configuration templates (like Work Timings), each shift is a discrete record tied to a specific employee, date, location, and timing.

<div class="info-box">

**Mental model:** Work Center (grouping) → Scheduler creates Shift → Assigned to Employee for specific Date → Employee checks in/out → Attendance recorded

</div>

One shift affects one employee on one day. Changes to shifts only affect the specific assignments modified, not future schedules. Shift Scheduling assigns work timings and office locations to employees but does not configure pay rates — salary structures and per-shift pay rates are managed through [payroll](https://mashapajfhp.github.io/user-guides/payroll-management/v1/payroll-management-user-guide.html) configuration.

</div>

<div class="subsection">

### Key Decisions Before Setup

Answer these questions before creating shifts:

- **How will you group employees for scheduling?** — Work Centers organize employees by location, department, or manager responsibility
- **What shift patterns do you need?** — Standard hours, rotating shifts, split shifts (2 per day max), or flexible schedules
- **Who will manage schedules?** — Assign Shift Scheduler role to managers who will create and publish shifts
- **How far in advance will you schedule?** — System supports up to 6 months advance scheduling

</div>

<div class="subsection">

### Related Features

- **[Work Timings](https://mashapajfhp.github.io/user-guides/work-timings/v1/work-timings-user-guide.html)** — Defines the schedule templates (start/end times, rules) that shifts reference
- **Work Centers** — Groups employees, locations, and schedulers for shift management
- **[Attendance](https://mashapajfhp.github.io/user-guides/attendance/v1/attendance-user-guide.html)** — Captures check-in/check-out against published shifts
- **[Leave Management](https://mashapajfhp.github.io/user-guides/leave-management/v1/leave-management-user-guide.html)** — Automatically removes attendance records when leave is approved; blocks shift creation on leave days
- **[Split Shifts](https://mashapajfhp.github.io/user-guides/split-shifts/v1/split-shifts-user-guide.html)** — Detailed rules for scheduling 2 shifts per employee per day with deduction halving
- **[Timesheets](https://mashapajfhp.github.io/user-guides/timesheets/v1/timesheets-user-guide.html)** — Shift hours feed into time tracking records for payroll processing
- **[Role Management](https://mashapajfhp.github.io/user-guides/role-management/v1/role-management-user-guide.html)** — Assign Shift Scheduler, Super Admin, and other roles that control access to shift features

</div>

<div class="subsection">

### Prerequisites & Requirements

| Requirement | Description | Status |
|----|----|----|
| [Work Timings](https://mashapajfhp.github.io/user-guides/work-timings/v1/work-timings-user-guide.html) configured | At least one work timing template must exist to assign to shifts | Required |
| Work Centers created | Employees must be assigned to work centers before scheduling | Required |
| Office locations defined | Shifts must be assigned to specific office/branch locations | Required |
| [Shift Scheduler role](https://mashapajfhp.github.io/user-guides/role-management/v1/role-management-user-guide.html) assigned | Users need Shift Scheduler permissions to create and publish shifts | Required |
| Employee shift type | Employees must be configured as shift employees (not fixed hours) | Required |

</div>

</div>

</div>

<div id="user-journey" class="section section section-user-journey">

<div class="section-header">

## Complete User Journey Guide

</div>

<div class="section-body">

<div class="journey-roadmap">

<div class="subsection">

### End-to-End Journey: From Configuration to Attendance Tracking

This journey covers the complete shift scheduling lifecycle — from setting up the foundational configuration through daily attendance management.

</div>

<div class="journey-phases">

<div class="journey-phase">

<div class="phase-marker">

1

</div>

<div class="phase-content">

#### Configure Prerequisites

Set up work timings, office locations with GPS/geofencing, assign Shift Scheduler roles, and classify employees as shift workers.

<a href="#initial-setup" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

2

</div>

<div class="phase-content">

#### Organize Work Centers

Group employees by scheduler, office location, and available work timings to define your scheduling structure.

<a href="#initial-setup" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

3

</div>

<div class="phase-content">

#### Build Shift Schedules

Create shifts individually per cell, use Schedule Planner for bulk assignment, or Copy Schedule to repeat weekly patterns.

<a href="#core-tasks" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

4

</div>

<div class="phase-content">

#### Review & Publish Shifts

Preview draft shifts in the schedule grid, verify coverage across employees and dates, then publish to notify employees via mobile app.

<a href="#core-tasks" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

5

</div>

<div class="phase-content">

#### Adjust & Reassign

Edit shift details, reassign published shifts to different employees, delete shifts in bulk, or schedule split shifts for multi-segment days.

<a href="#core-tasks" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

6

</div>

<div class="phase-content">

#### Track Attendance

Monitor employee check-ins against published shifts, review the Daily Report for schedule vs. actual times, and override attendance records when needed.

<a href="#core-tasks" class="phase-link">See details →</a>

</div>

</div>

</div>

</div>

</div>

</div>

<div id="feature-entry-points" class="section section section-feature-entry-points">

<div class="section-header">

## Feature Discovery

</div>

<div class="section-body">

<div class="subsection">

### Navigation Path

<div class="nav-path">

Attendance → Shift Scheduler

</div>

Access the Shift Scheduler from the Attendance module in the left sidebar to view, create, and manage employee shift schedules.

<div class="info-box">

**Configuration Access:** Work Centers and Work Timings are configured separately under Settings → Attendance (not from the Shift Scheduler interface).

</div>

#### Available Views

The Shift Scheduler offers two main view modes, accessible via a toggle in the toolbar:

- **Week View** — Default view showing a 7-day grid with employee rows and date columns. Each cell displays assigned shifts with work timing name, time range, and office. Supports all scheduling actions including shift creation, copy schedule, and bulk operations.
- **Month View** — Horizontal timeline showing an entire calendar month (e.g., all 28/30/31 days as columns). Displays total scheduled hours and shift count per employee. Copy Schedule and per-employee copy buttons are disabled in this view.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/42-month-view.png" class="screenshot" loading="lazy" alt="Month view showing full calendar month" />
<figcaption>Month view displaying employee shifts across the entire month with total hours and shift counts</figcaption>
</figure>

#### Views Panel (Filtering Overlays)

Click the **Views** button in the toolbar to open a side panel with four accordion sections that control visual overlays on the schedule grid:

- **Shift status** — Filter by Draft or Published shifts
- **Shifts / work timings** — Filter by specific work timing names (e.g., Default, Chauffeurs, Half Day)
- **Schedule cell types** — Toggle visibility of Day off, Day off with check-in allowed, and Leave overlays
- **Offices** — Filter by office location

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/25-views-panel-expanded.png" class="screenshot" loading="lazy" alt="Views panel with filter accordions" />
<figcaption>Views panel showing shift status, work timings, schedule cell types, and office filter sections</figcaption>
</figure>

#### Schedule Grid Visual Indicators

The schedule grid uses consistent visual cues to distinguish different cell types:

| Visual Indicator | Meaning |
|----|----|
| **Dashed purple border** | Draft shift (not yet published) |
| **Solid purple fill** | Published shift |
| **Moon icon** | Overnight shift (spans past midnight) |
| **"On Leave" overlay** | Employee has approved leave on that date (e.g., "On Leave - Vacation") |
| **"Weekend" overlay** | Day falls on a weekend per the employee's work week profile |
| **"Day Off" label** | Scheduled day off for the employee |

#### Key Entry Points

- **Create Shift** — Click on an empty cell in the employee's row for a specific date to open the schedule shift dialog
- **Schedule Planner** — Bulk shift creation tool accessed from the toolbar for assigning shifts to multiple employees across dates
- **Copy Schedule** — Duplicate an entire work center's shift pattern from one week to another (Week view only)
- **Copy (per employee)** — Hover over an employee's row to reveal a copy icon that duplicates that individual's shifts to other employees and date ranges
- **Delete Shifts** — Bulk deletion interface for removing multiple shifts across employees and dates

</div>

</div>

</div>

<div id="initial-setup" class="section section section-initial-setup">

<div class="section-header">

## Initial Setup

</div>

<div class="section-body">

<div class="subsection">

### Prerequisites

Before creating shifts, ensure these configurations are in place:

- **[Work Timings](https://mashapajfhp.github.io/user-guides/work-timings/v1/work-timings-user-guide.html):** Define shift start/end times, late arrival thresholds, and break allowances under Settings → Attendance → Work Timings. Each work timing includes configurable fields for: flexible timing, half-day timing, late arrival threshold, early departure threshold, absent-after threshold, break allowances, out-of-office check-ins, pre-start check-in restriction, and extra hours calculation method (Total hours, After work end time, or All hours worked). 
<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/38-edit-work-timing-dialog.png" class="screenshot" loading="lazy" alt="Edit Work Timing dialog" />
<figcaption>Edit Work Timing dialog showing all configurable fields including timing rules, thresholds, and extra hours calculation method</figcaption>
</figure>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/37-work-timings-table.png" class="screenshot" loading="lazy" alt="Work Timings table" />
<figcaption>Work Timings table showing configured timings with working hours, thresholds, and rule columns</figcaption>
</figure>

- **Office Locations:** Set up branch/office locations where shifts will be assigned under Settings → Company → Offices. Each office can be configured with a physical address, GPS coordinates (latitude/longitude), and a geofencing radius in meters to validate employee check-in locations.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/46-office-edit-geofencing.png" class="screenshot" loading="lazy" alt="Edit Office dialog with geofencing" />
<figcaption>Edit Office dialog showing name, location search, GPS coordinates, geofencing radius, and interactive map</figcaption>
</figure>
- **Shift Scheduler Role:** Assign the Shift Scheduler role to managers who will create and publish shifts under Settings → [Role management](https://mashapajfhp.github.io/user-guides/role-management/v1/role-management-user-guide.html)
- **Employee Classification:** Ensure employees are classified as "Shift" type in their profiles to enable shift assignment

</div>

<div class="subsection">

### First-Time Configuration Steps

#### Step 1: Create Work Centers

Work centers group employees by scheduler, office, and shift timing. They are configured in the Attendance settings, not from the Shift Scheduler interface.

<div class="nav-path">

Settings → Attendance → Work Centers for Shift Scheduling → + Create Work Center

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/36-work-centers-table-full.png" class="screenshot" loading="lazy" alt="Work Centers table in Attendance settings" />
<figcaption>Work Centers table showing configured centers with schedulers, work timings, offices, and employee counts</figcaption>
</figure>

1.  Navigate to Settings → Attendance → scroll to "Work Centers for Shift Scheduling" section
2.  Click "+ Create Work Center"
3.  Enter work center name (e.g., "Retail Floor Staff", "Night Shift Security")
4.  Select the Shift Scheduler (manager responsible for this group)
5.  Add applicable office locations where these employees work
6.  Select work timings (shift schedules) available for this group
7.  Add employees to the work center
8.  Click "Save"

The Work Centers table displays the following columns: **Work center** (name), **Schedulers** (assigned managers), **Work timings** (available shift templates), **Offices** (assigned locations), and **Employees** (count of assigned employees).

<div class="info-box">

**Note:** Each employee can only belong to one work center. If all employees share the same scheduler and locations, create a single work center with all shift employees.

</div>

<div class="warning-box">

**⚠️ Scheduler Access:** Schedulers must be added as employees within the work center to manage it. A user with the Shift Scheduler role cannot see or manage a work center unless they are explicitly assigned as the scheduler for that work center.

</div>

#### Step 2: Verify Work Timings Configuration

Before creating shifts, ensure work timings are configured with the correct rules. Navigate to Settings → Attendance → Work Timings to review existing timings.

The Work Timings table displays the following columns: **Name**, **Working hours**, **Late arrival** threshold, **Early departure** threshold, **Absent after** threshold, **Breaks** allowance, **Outside office** (out-of-office check-ins), and **Extra hours** calculation method.

To edit a work timing, click the edit icon on its row. The edit form includes:
- **Name** — Display name for the work timing
- **Flexible work timing** — Toggle to allow variable start/end times
- **Starts at / Ends at** — Shift start and end times
- **Half-day timing** — Toggle to enable half-day configuration
- **Late arrival** — Toggle and configure the threshold before an employee is marked late
- **Early departure** — Toggle and configure the threshold before an employee is marked as departing early
- **Absent day** — Toggle and configure when an employee is marked absent
- **Allow breaks** — Toggle to permit break periods during the shift
- **Allow out of office check-ins** — Toggle to allow check-ins from outside the office location
- **Disallow check-in before work start time** — Toggle to prevent early check-ins
- **Extra Hours** — Radio group with three options: **Total hours** (default), **After work end time**, or **All hours worked**

<div class="info-box">

**Note:** The "Default" work timing cannot be deleted. You can create additional work timings and assign them to specific work centers.

</div>

#### Step 3: Configure Split Shift Settings (Optional)

If employees work multiple shifts per day (e.g., morning and evening with break in between):

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/39-split-shifts-learn-more.png" class="screenshot" loading="lazy" alt="Split shifts Learn More dialog" />
<figcaption>Split shifts information dialog explaining rules and deduction behavior for multi-shift days</figcaption>
</figure>

- Maximum 2 shifts per employee per day
- Shifts cannot overlap with same day, previous day, or next day shifts
- Cannot schedule shifts on days marked as Day Off or Day Off with check-in allowed
- Each shift tracks attendance independently with regular attendance actions (late arrival, early departure, absence)
- **Deduction halving:** When an employee has 2 shifts on the same day, deduction amounts are automatically divided by 2. For example, if a late arrival deduction is 5% of salary, each shift's late deduction becomes 2.5%

<div class="warning-box">

**⚠️ Split Shift Limitation:** Cannot add extra hours (T&P adjustments) if employee has multiple published shifts on the same day. Schedule overtime as a separate shift instead.

</div>

#### Step 4: Set Scheduling Permissions

Roles are assigned under Settings → [Role management](https://mashapajfhp.github.io/user-guides/role-management/v1/role-management-user-guide.html). The following roles are relevant to shift scheduling:

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/45-shift-scheduler-role-policies.png" class="screenshot" loading="lazy" alt="Shift Scheduler role with sub-policies" />
<figcaption>Role management dialog showing the Shift Scheduler role and its three sub-policies</figcaption>
</figure>

| Role | Shift-Related Policy | What They Can Do |
|----|----|----|
| **Super Admin** | Shift manager policy | Can manage shift schedules of all employees **and manage work centers** (create, edit, delete work centers). Covers all other roles except Transaction Processor. |
| **Shift Scheduler** | Shift scheduler policy | Can manage shift schedules of all employees within their assigned work centers. Cannot create or edit work centers — must be assigned as the scheduler for a work center by a Super Admin. This role is **non-restrictable** (cannot be limited by restriction groups). |
| **Attendance Manager** | Attendance manager policy | Can manage attendance records of all employees (edit check-in/check-out times, clear/delete records). **Cannot** create, edit, or publish shifts. This role is **restrictable** (can be limited by restriction groups). |
| **Line Manager** | Attendance line manager policy | Can manage attendance records of reporting employees only. **Cannot** create, edit, or publish shifts. Can view shift schedules for their reporting employees. |
| **Employee** | None | Can view own published shift schedule in mobile app and check in/out for assigned shifts. Cannot create, edit, or view other employees' shifts. |

<div class="info-box">

**Key distinction:** The Super Admin has the "Shift manager policy" which includes **both** shift scheduling and work center management. The Shift Scheduler role has the "Shift scheduler policy" which only covers shift scheduling — work center access is granted by being assigned as the scheduler for a specific work center.

</div>

<div class="info-box">

**Audit Logging:** Shift creation, editing, and publishing actions are logged with user details and timestamps for shifts created after October 9, 2023.

</div>

</div>

<div class="subsection">

### Initial Shift Creation Methods

Choose the method that fits your scheduling workflow:

| Method | Best For | Access Path |
|----|----|----|
| **Individual Shift Creation** | One-off shifts, specific employee assignments | Attendance → Shift Scheduler → Click empty cell for employee and date |
| **Schedule Planner** | Bulk shift creation for multiple employees at once | Attendance → Shift Scheduler → Schedule Planner button in toolbar |
| **Copy Schedule** | Repeating weekly patterns for entire work center | Attendance → Shift Scheduler → Copy Schedule button in toolbar (Week view only) |
| **Copy (Per Employee)** | Duplicating one employee's pattern to others | Attendance → Shift Scheduler → Hover over employee row → Copy icon |

</div>

<div class="subsection">

### Draft vs. Published Shifts

Shifts can be saved as drafts for review before publishing:

- **Draft:** Visible only to schedulers, not sent to employees, can be edited freely. Displayed with a **dashed purple border** in the schedule grid. Context menu options: Publish shift, Edit shift, Delete shift.
- **Published:** Sent to employees via push notification on Bayzat mobile app, visible in employee schedule. Displayed with a **solid purple fill** in the schedule grid. Context menu options: Edit shift, Reassign shift, Delete shift.

<div class="warning-box">

**⚠️ Publishing Constraint:** Cannot publish shifts for past dates or current day if employee has already checked in.

</div>

</div>

<div class="subsection">

### Key Configuration Decisions

Answer these questions before creating your first shifts:

- **How many work centers do you need?** — One per manager/scheduler or group employees by location/department
- **Do employees work split shifts?** — Configure maximum 2 shifts per day with no overlap rules
- **How far in advance will you schedule?** — Shifts can be created up to 6 months ahead
- **Will you use repeating patterns?** — Set up copy schedule workflow for weekly recurring shifts
- **Who needs to approve shifts?** — No built-in approval workflow; shifts are published directly by schedulers

</div>

<div class="subsection">

### Common Setup Issues

| Issue | Cause | Resolution |
|----|----|----|
| Cannot assign employee to work center | Employee not classified as "Shift" type | Update employee profile → Employment Type → Shift |
| Shift Scheduler role missing | Role not assigned to manager | Settings → [Role management](https://mashapajfhp.github.io/user-guides/role-management/v1/role-management-user-guide.html) → Assign Shift Scheduler role |
| Cannot create split shifts | Day off or leave exists on that day | Remove day off or reschedule shift to different date |
| Work center owner leaving company | No replacement scheduler assigned | Assign new work center owner before offboarding current scheduler |
| Scheduler has role but cannot access work center | Scheduler not assigned to specific work center | Edit the work center in Settings → Attendance → Work Centers and assign the user as the scheduler |

</div>

</div>

</div>

<div id="core-tasks" class="section section section-core-tasks">

<div class="section-header">

## Key Tasks

</div>

<div class="section-body">

<div class="subsection">

### Task: Create Work Centers for Shift Organization

Group employees by scheduler, location, and work timings to enable efficient shift assignment.

#### Subtask: Set Up Work Center Configuration

- Navigate to Settings → Attendance → Work Centers for Shift Scheduling
- Click "+ Create Work Center"
- Assign a shift scheduler (must have shift scheduler role)
- Select office locations where shifts will occur
- Add work timings that will be used for scheduling
- Select employees who belong to this work center
- Save the work center

**Expected Outcome:** Work center created with employees grouped by common scheduler and locations, ready for shift assignment. Once created, work centers appear in the Shift Scheduler dropdown for selection.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/02-work-center-dropdown.png" class="screenshot" loading="lazy" alt="Work Center dropdown in the Shift Scheduler" />
<figcaption>Work Center dropdown in the Shift Scheduler — select a work center to view and manage shifts for its assigned employees</figcaption>
</figure>

</div>

<div class="subsection">

### Task: Create and Assign Individual Shifts

Schedule specific work shifts for employees on designated dates with defined work timings and locations.

#### Subtask: Create Single Shift

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/26-schedule-shift-dialog.png" class="screenshot" loading="lazy" alt="Schedule shift dialog" />
<figcaption>Schedule shift dialog showing all fields: work center, date, employee, day-off toggle, work timing, office, and notes</figcaption>
</figure>

1. Navigate to Attendance → Shift Scheduler
2. Select a work center from the dropdown (or select "All" to see all employees)
3. Click on an empty cell in the employee's row for the desired date
4. The **Schedule shift** dialog opens with these fields:
   - **Work center** — Pre-filled and read-only based on the selected employee's work center
   - **Date** — Pre-filled based on the cell clicked (not editable)
   - **Employee** — Pre-filled based on the row clicked (not editable)
   - **Mark as day-off** — Toggle to mark this date as a day off instead of assigning a shift
   - **Work timing** — Dropdown to select from available work timings configured for this work center (with a Clear button to reset selection)
   - **Office** — Dropdown to select the office location for this shift
   - **Notes** — Optional free-text field for additional information
5. Click **Save as draft** to save for later review, or **Save & Publish** to publish immediately and notify the employee

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/28-draft-shift-created.png" class="screenshot" loading="lazy" alt="Draft shift in schedule grid" />
<figcaption>Draft shift displayed with dashed purple border in the schedule grid, indicating it has not been published yet</figcaption>
</figure>

**Expected Outcome:** Shift created for employee on specified date with assigned work timing and location. Draft shifts appear with a dashed purple border; published shifts appear with a solid purple fill.

#### Subtask: Create Split Shifts (Multiple Shifts Per Day)

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/41-wtd006-split-info.png" class="screenshot" loading="lazy" alt="Split shift information" />
<figcaption>Split shift information modal explaining rules for assigning multiple shifts per day</figcaption>
</figure>

- Create first shift following standard process
- Click on same employee's cell for same date
- Select different work timing for second shift
- System validates no overlap with existing shift
- System validates no day off exists on that date
- Save second shift (maximum 2 shifts per day)

**Expected Outcome:** Two non-overlapping shifts created for same employee on same day, each tracked independently for attendance.

<div class="warning-box">

**⚠️ Split Shift Constraints:** Maximum 2 shifts per employee per day. Cannot schedule on days with existing day off. Cannot schedule during half-day leave. No overlapping shift times allowed.

</div>

</div>

<div class="subsection">

### Task: Copy and Repeat Shifts

Duplicate existing shift patterns to reduce manual scheduling effort. Two copy methods are available: per-employee copy and bulk Copy Schedule.

#### Subtask: Copy Individual Employee Shifts

- Hover over an employee's row in the schedule grid to reveal the copy icon next to their name (only visible when employee has existing shifts in the displayed week)
- Click the copy icon to open the copy dialog
- Select date range for pasting (1 to 90 days)
- Select target employees from list
- Choose whether to overwrite existing draft shifts
- Click "Apply" to paste shifts
- Use undo option within 60 seconds if needed

**Expected Outcome:** Source employee's shift pattern replicated to selected employees across specified date range, excluding dates with day offs, public holidays, published shifts, or approved leave.

<div class="info-box">

**Copy Limitations:** Cannot paste shifts into past dates. Cannot overwrite published shifts, day offs, public holidays, or approved leave. Undo option available for 60 seconds only. Per-employee copy is disabled in Month view.

</div>

#### Subtask: Copy Schedule (Bulk Copy Across Work Center)

Use the **Copy Schedule** button in the toolbar to duplicate an entire work center's shift pattern from one week to another.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/41-copy-schedule-dialog.png" class="screenshot" loading="lazy" alt="Copy Schedule dialog with advanced options" />
<figcaption>Copy Schedule dialog showing source and target date ranges with advanced pasting options</figcaption>
</figure>

1. Navigate to the Shift Scheduler in **Week view** (Copy Schedule is disabled in Month view)
2. Select a specific work center (Copy Schedule is disabled when "All" is selected)
3. Click **Copy Schedule** in the toolbar
4. The dialog shows:
   - **Within Work Center** — Displays the selected work center name and employee count
   - **Copy Schedule from** — Source date range (defaults to the currently displayed week)
   - **Paste to** — Target date range (auto-suggested as the following week)
5. The system matches each day to its corresponding day in the target range. It automatically **skips published shifts, published day(s) off, and approved leaves**
6. Configure **Advanced pasting options**:
   - **Overwrite options:** Choose whether to overwrite existing draft shifts, draft day(s) off, or draft day(s) off with check-in allowed in the target range
   - **Selective paste options:** Choose whether to paste on weekends or paste on public holidays
7. Add optional **Notes** for the pasted shifts
8. Click **Paste shifts as draft** — all copied shifts are created as drafts in the target range

**Expected Outcome:** Entire work center's weekly shift pattern duplicated to the target date range as draft shifts, ready for review and publishing.

</div>

<div class="subsection">

### Task: Publish Draft Shifts to Employees

Finalize and communicate shift schedules to employees, making them visible in mobile app and enabling check-in.

#### Subtask: Publish Individual Shift

Right-click (or click) on a draft shift cell to open the context menu, then select **Publish shift**. The shift is immediately published and the employee is notified.

#### Subtask: Bulk Publish Shifts

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/31-publish-shifts-dialog.png" class="screenshot" loading="lazy" alt="Bulk publish shifts dialog" />
<figcaption>Publish shifts dialog showing date range, work center, office selection, and notification options</figcaption>
</figure>

1. Click the **Publish shifts** button in the toolbar (the badge shows the number of unpublished drafts, e.g., "Publish shifts (3)")
2. The publish dialog allows you to configure:
   - **Date range** — Select the start and end dates for shifts to publish
   - **Work center** — Choose which work center's shifts to publish
   - **Office** — Optionally filter by office location
   - **Include days off** — Toggle to also publish day-off assignments
3. A warning note reminds you: publishing shifts will notify employees via the Bayzat app
4. Click **Publish** to finalize

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/32-all-shifts-published.png" class="screenshot" loading="lazy" alt="Published shifts in schedule grid" />
<figcaption>Published shifts displayed with solid purple fill in the schedule grid</figcaption>
</figure>

**Expected Outcome:** Shifts published and visible to employees in mobile app under "My Schedule." Published shifts appear with a solid purple fill (replacing the dashed border of drafts). Employees can now check in and out for published shifts.

<div class="warning-box">

**⚠️ Publishing Constraint:** Shifts must be published before employees can check in. Check-ins received before shift publication are automatically rejected.

</div>

</div>

<div class="subsection">

### Task: Edit, Reassign, or Delete Individual Shifts

Manage existing shifts through the context menu that appears when clicking on a shift cell. The available actions differ depending on the shift's status.

#### Context Menu Options

Click on any shift cell in the schedule grid to see the context menu:

- **Draft shift context menu:** Publish shift, Edit shift, Delete shift
- **Published shift context menu:** Edit shift, Reassign shift, Delete shift

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/29-shift-context-menu.png" class="screenshot" loading="lazy" alt="Draft shift context menu" />
<figcaption>Draft shift context menu showing Publish shift, Edit shift, and Delete shift options</figcaption>
</figure>

#### Subtask: Edit Shift Details

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/40-edit-shift-dialog.png" class="screenshot" loading="lazy" alt="Edit published shift dialog" />
<figcaption>Edit scheduled shift dialog for a published shift, showing editable fields and the "Edit & Publish" button</figcaption>
</figure>

1. Click on the shift cell and select **Edit shift** from the context menu
2. The **Edit scheduled shift** dialog opens with:
   - **Work center** — Read-only (cannot be changed)
   - **Date** — Disabled (cannot be changed)
   - **Employee** — Disabled (cannot be changed)
   - **Mark as day-off** — Toggle to convert shift to a day off
   - **Work timing** — Dropdown with Clear button to change the assigned work timing
   - **Office** — Dropdown to change the office location
   - **Notes** — Optional field to add or modify notes
3. For draft shifts: Click **Save** to update the draft
4. For published shifts: Click **Edit & Publish** to save changes and immediately re-publish (employees are notified of the change)

**Expected Outcome:** Shift updated with new details. For published shifts, the "Edit & Publish" button ensures the updated shift is immediately re-published and employees are notified.

#### Subtask: Reassign Shift to Another Employee

The **Reassign shift** option is available only for published shifts:

1. Click on a published shift cell and select **Reassign shift** from the context menu
2. Select the new employee to assign this shift to
3. Confirm the reassignment

**Expected Outcome:** Shift reassigned to the new employee while maintaining the same date, work timing, and office location.

<div class="info-box">

**Edit Restrictions:** Cannot edit shifts for past dates. Cannot edit current day shift if employee has already checked in (must use attendance record override instead).

</div>

</div>

<div class="subsection">

### Task: Delete Shifts in Bulk

Remove multiple shifts simultaneously across employees and date ranges to correct scheduling errors or accommodate changes.

#### Subtask: Bulk Delete Shifts

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/01-shift-scheduler-main-view.png" class="screenshot" loading="lazy" alt="Shift scheduler toolbar" />
<figcaption>Shift scheduler toolbar with access to delete, copy, and schedule planner functions</figcaption>
</figure>

- Navigate to Shift Scheduler
- Click "Delete" icon in toolbar
- Select work center
- Choose date range (up to 6 months in advance)
- Select employees whose shifts should be deleted
- Select shift status (draft, published, or both)
- Click "Delete" to confirm
- Use undo option within 30 seconds if needed

**Expected Outcome:** Selected shifts deleted for specified employees and date range. Employees marked as absent for deleted published shifts unless new shifts are created.

<div class="warning-box">

**⚠️ Deletion Constraints:** Cannot delete shifts for past dates. Cannot delete current day shifts if employee has already checked in. Undo available for 30 seconds only.

</div>

</div>

<div class="subsection">

### Task: Use Schedule Planner for Bulk Shift Creation

Create shifts for multiple employees across multiple dates using grid-based planning interface.

#### Subtask: Plan Shifts in Grid View

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/33-schedule-planner.png" class="screenshot" loading="lazy" alt="Schedule planner grid" />
<figcaption>Schedule planner grid showing employees in rows and dates in columns with work timing dropdowns and "All" buttons for bulk assignment</figcaption>
</figure>

1. Click the **Schedule Planner** button in the Shift Scheduler toolbar
2. Select work center and date range
3. The grid displays employees in rows and dates in columns, with a dropdown in each cell to select a work timing
4. Use the **"All" button** next to each employee name to apply the same work timing across all dates in the selected range for that employee
5. Select individual work timing from the dropdown for each employee-date cell to customize specific days
6. Click **Save as draft** to review before publishing, or **Save & Publish** to publish immediately

**Expected Outcome:** Multiple shifts created efficiently using grid interface, reducing time compared to individual shift creation.

<div class="info-box">

**Schedule Planner Note:** "All" option is not available when creating split shifts. Copy functionality is disabled when "All" work center is selected. The Schedule Planner is particularly useful for initial schedule setup when many employees need the same shift pattern.

</div>

</div>

<div class="subsection">

### Task: Override [Attendance](https://mashapajfhp.github.io/user-guides/attendance/v1/attendance-user-guide.html) Records for Published Shifts

Manually adjust check-in/out times or attendance status when employees cannot use standard check-in process.

Attendance records for shift employees are visible in the **Daily Report** under Time → Attendance → Employee Attendance. The Daily Report shows columns for ID, Name, Reports to, **Schedule** (shift times), Date, Status, Check In, Check Out, Confidence, Hours Worked, Extra Hours, and **Locations Visited**. For employees with split shifts, each shift generates a **separate row** in the Daily Report — so a split-shift employee will have two attendance records for the same date, one per shift.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/47-attendance-daily-report-columns.png" class="screenshot" loading="lazy" alt="Attendance Daily Report with schedule and location columns" />
<figcaption>Attendance Daily Report showing Schedule column with shift times, Locations Visited, and other attendance tracking columns</figcaption>
</figure>

#### Subtask: Edit Attendance Times

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/05-attendance-daily-report.png" class="screenshot" loading="lazy" alt="Attendance daily report" />
<figcaption>Attendance daily report showing employee check-in and check-out records</figcaption>
</figure>

- Navigate to Time → Attendance → Employee Attendance → Daily Report
- Locate employee attendance record for specific date
- Click on attendance record to open edit options
- Select "Edit check-in time" or "Edit check-out time"
- Enter corrected time
- Save changes (creates time and pay adjustment entry)

**Expected Outcome:** Attendance record updated with manual override. Time and pay adjustment entry created for payroll processing.

#### Subtask: Clear or Delete Attendance Record

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/05-attendance-daily-report.png" class="screenshot" loading="lazy" alt="Attendance record options" />
<figcaption>Attendance daily report with options to edit, clear, or delete attendance records</figcaption>
</figure>

- Navigate to employee attendance record in Daily Report
- Click on attendance record
- Select "Clear attendance" to remove check-in/out times (keeps shift)
- Or select "Delete attendance record" to mark employee as absent
- Confirm action

**Expected Outcome:** Attendance cleared or deleted. Employee marked as absent if record deleted. Cannot check in again after deletion.

</div>

<div class="subsection">

### Task: Move Employees Between Work Centers

Reassign employees to different work centers when reporting structure or scheduling ownership changes.

#### Subtask: Transfer Employee to New Work Center

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/03-specific-work-center-selected.png" class="screenshot" loading="lazy" alt="Work center with employees" />
<figcaption>Work center view showing employee list within a selected work center</figcaption>
</figure>

- Navigate to Settings → Attendance → Work Centers for Shift Scheduling
- Open source work center and remove employee from list
- Open target work center and add employee to list
- Save changes to both work centers
- Employee's future shifts now managed by new work center's scheduler

**Expected Outcome:** Employee moved to new work center. New scheduler can create and manage future shifts. Historical shifts remain unchanged.

<div class="info-box">

**Work Center Constraint:** Each employee can belong to only one work center at a time. Moving employees does not affect historical shift assignments or attendance records.

</div>

</div>

<div class="subsection employee-tasks-header">

### Employee Tasks

The following tasks cover what employees can do within the Shift Scheduling system. Shift scheduling on Bayzat follows a **top-down model** — all shift creation, editing, and deletion is managed exclusively by admins and Shift Schedulers. Employees interact with the system through the **Bayzat mobile app only**.

<div class="warning-box">

**Web App Limitation:** Employees **cannot** view their shift schedule from the Bayzat web app. The employee web portal does not include a Shifts section under the Time menu, and direct navigation to the Shift Scheduler page returns an "unauthorized" error. All shift-related employee tasks require the **Bayzat mobile app**.

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/51-employee-time-menu.png" class="screenshot" loading="lazy" alt="Employee Time menu showing no Shifts section" />
<figcaption>Employee web portal Time menu — shows Leaves, Attendance, and Timesheets only. No Shifts section is available for employees on the web app.</figcaption>
</figure>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/53-employee-shift-scheduler-blocked.png" class="screenshot" loading="lazy" alt="Employee blocked from accessing Shift Scheduler" />
<figcaption>Employees who navigate directly to the Shift Scheduler URL see "You are not authorized to view this content"</figcaption>
</figure>

</div>

<div class="subsection">

### Task: View Published Shift Schedule

View your assigned shift schedule to know when and where you are expected to work.

#### Subtask: Access My Schedule in the Mobile App

- Open the **Bayzat mobile app** on your smartphone
- Tap the **"Work"** tab at the bottom of the screen, then select **"My Schedule"**
  - Alternatively, go to the **menu tab** and select **"My Schedule"**
- View your weekly schedule showing all published shifts

**Expected Outcome:** You see a weekly calendar view displaying all your assigned shifts.

#### Subtask: Read Shift Details

Each shift entry in My Schedule displays the following information:

| Detail | Description |
|--------|-------------|
| **Day and date** | The calendar day the shift falls on |
| **Shift timing** | Start and end time of the shift (e.g., 09:00 AM – 06:00 PM) |
| **Branch/office location** | The office or branch where the shift is assigned |
| **Current shift indicator** | Active shift highlighted as "Happening now" |
| **Split shift details** | If you have two shifts in one day, both are shown with their respective timings |

The schedule also clearly marks:
- **Days off** — scheduled rest days
- **Leave days** — approved leave overlays
- **Public holidays** — national/company holidays
- **Weekends** — based on your work week profile

<div class="info-box">

**Only Published Shifts Are Visible:** You can only see shifts that your scheduler has published. Draft shifts (still being planned) are not visible to employees. If you do not see upcoming shifts, your scheduler may not have published them yet.

</div>

</div>

<div class="subsection">

### Task: Check In and Check Out for Shifts

Record your attendance at the start and end of each shift using the mobile app attendance widget.

#### Subtask: Check In for a Shift

- Open the **Bayzat mobile app** on your smartphone
- On the **home screen**, tap the **Attendance check-in widget**
- Tap **"Check in"** when you arrive at your work location at the start of your shift
  - If your company requires it, you may need to **take a live photo** for verification
  - If **geofencing** is enabled, you must be within the allowed location radius to check in successfully

#### Subtask: Check Out from a Shift

- At the end of your shift, open the **Attendance widget** again on the home screen
- Tap **"Check out"** as you leave your work location

**Expected Outcome:** Your attendance is recorded for the shift. The system tracks your check-in and check-out times against the scheduled shift timing to calculate your attendance status.

<div class="info-box">

**Add Comments to Check-In/Out:** You can leave comments with your check-in or check-out (for example, explaining a late arrival). These comments are visible to your admin or line manager and can help provide context for any attendance discrepancies.

</div>

#### Subtask: Handle Late Arrival or Missed Check-In

The system applies attendance rules automatically based on the thresholds configured by your admin in the [Work Timings](https://mashapajfhp.github.io/user-guides/work-timings/v1/work-timings-user-guide.html) settings:

| Scenario | What Happens |
|----------|-------------|
| **Late check-in** | You receive a warning that you have exceeded the allowed late check-in time. You can still check in, but your status may be marked as **Late Arrival** or **Absent** depending on company policy thresholds |
| **Missed check-out** | Your working hours for that day will not be counted in full, but you will still be marked as **Present**. Contact your admin to manually correct your check-out time |
| **No check-in at all** | You will be marked as **Absent** for the shift. If the shift was not published, you will not receive attendance reminders |
| **On leave or day off** | You are **not required** to check in or out and will not receive check-in reminders |

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/38-edit-work-timing-dialog.png" class="screenshot" loading="lazy" alt="Work Timing thresholds" />
<figcaption>Work Timing configuration showing late arrival threshold, early departure threshold, and absent-after threshold — these settings determine when an employee is marked Late, Early Departure, or Absent</figcaption>
</figure>

</div>

<div class="subsection">

### Task: Handle Split Shifts (Two Shifts Per Day)

When your scheduler assigns you two separate shifts in a single day (a split shift), you need to check in and out for each shift independently.

#### Subtask: View Split Shift Schedule

- Open **My Schedule** in the Bayzat mobile app
- On a split-shift day, you will see **two separate shift entries** for the same date — each with its own timing and location
- The app shows the next shift details after you complete the first shift

#### Subtask: Check In/Out for Each Shift Segment

- **First shift:** Check in at the start time → Check out at the end time
- **Break between shifts:** You are off-duty during the gap between shifts
- **Second shift:** Check in again at the second shift start time → Check out at the second shift end time

**Expected Outcome:** Two separate attendance records are created for the day — one per shift. Each shift is tracked independently for lateness, absence, and hours worked.

<div class="info-box">

**Split Shift Deduction Rules:** If you are absent for one shift of a split-shift day, the absence deduction is calculated based on **half a day**, not a full day. Each shift segment is treated as an independent attendance event with its own status calculation. This means you could be marked "Present" for the morning shift and "Late" for the evening shift on the same day.

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/39-split-shifts-learn-more.png" class="screenshot" loading="lazy" alt="Split shifts information" />
<figcaption>Split shift configuration — when enabled, employees can be assigned two shifts in a single day with independent attendance tracking per shift</figcaption>
</figure>

</div>

<div class="subsection">

### Task: Understand Attendance Status and Deductions

Learn how the system calculates your attendance status for each shift and what triggers deductions.

#### Subtask: Attendance Status Reference

After you check in and out, the system compares your actual times against the configured shift thresholds to assign one of these statuses:

| Status | Meaning | Trigger |
|--------|---------|---------|
| **Present** | You checked in and out within the acceptable timeframes | Check-in before late threshold; check-out after early departure threshold |
| **Late Arrival** | You checked in after the grace period | Check-in time exceeds the late arrival threshold configured for the work timing |
| **Early Departure** | You checked out before the shift end minus the grace period | Check-out time is earlier than shift end minus the early departure threshold |
| **Absent** | You did not check in at all, or checked in extremely late | No check-in recorded, or check-in time exceeds the absent-after threshold |
| **On Leave** | You have an approved leave for this date | Leave request approved covering this shift date |
| **Day Off** | This is a scheduled rest day | Scheduler assigned a day off or the date falls on your weekend |

#### Subtask: View Your Attendance Records on the Web

While you cannot view shifts on the web app, you **can** view your attendance history:

- Log in to the **Bayzat web app** at app.bayzat.com
- Navigate to **Time → Attendance → My Attendance**
- View your attendance report showing: Date, Schedule (shift times), Status, Check In, Breaks, Check Out, Hours Worked, Extra Hours, Number of Visits, and Total Visits Time

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/52-employee-my-attendance.png" class="screenshot" loading="lazy" alt="Employee My Attendance report" />
<figcaption>Employee's My Attendance report on the web app — shows attendance records with schedule times, status, check-in/out times, and hours worked</figcaption>
</figure>

<div class="info-box">

**Attendance Corrections:** If you believe your attendance status is incorrect (for example, you were marked absent but did check in), contact your admin or line manager. They can manually override attendance records through Time → Attendance → Employee Attendance → Daily Report.

</div>

</div>

<div class="subsection">

### Task: Receive Shift Notifications

Stay informed about your schedule through automatic push notifications.

#### Subtask: Notification Triggers

You receive **push notifications** on your mobile device in the following situations:

| Event | Notification |
|-------|-------------|
| **New shifts published** | When your scheduler publishes new shifts that include you, you are notified of your upcoming schedule |
| **Shift changes** | When a published shift is modified (time, location, or work timing changed), you receive an update notification |
| **Shift deleted** | When a published shift assigned to you is removed from the schedule |

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/31-publish-shifts-dialog.png" class="screenshot" loading="lazy" alt="Publish shifts dialog with notification warning" />
<figcaption>When schedulers publish shifts, the system displays a notification warning — employees included in the published shifts receive push notifications on their mobile devices</figcaption>
</figure>

<div class="info-box">

**Ensure Notifications Are Enabled:** To receive shift notifications, make sure push notifications are enabled for the Bayzat app in your phone's notification settings. If you are not receiving notifications, check that you have not disabled them at the device level.

</div>

</div>

<div class="subsection">

### Task: Handle Overnight Shifts

Overnight shifts span across two calendar days (for example, 10:00 PM to 6:00 AM the next day). These shifts require attention to the check-in/out timing.

#### Subtask: Check In/Out for Overnight Shifts

- **Check in** on **Day 1** at the shift start time (e.g., 10:00 PM)
- Continue working through midnight
- **Check out** on **Day 2** at the shift end time (e.g., 6:00 AM)

**Expected Outcome:** The system records the entire shift as a single attendance entry linked to Day 1 (the shift start date). Your hours worked span across midnight but are counted as one continuous shift.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/01-shift-scheduler-main-view.png" class="screenshot" loading="lazy" alt="Shift scheduler showing overnight shifts with moon icon" />
<figcaption>Overnight shifts are indicated with a moon icon in the scheduler grid (admin view). Employees see these as regular shifts in their mobile schedule with start time on Day 1 and end time on Day 2.</figcaption>
</figure>

<div class="info-box">

**Overnight Shift Identification:** In the admin's scheduler grid, overnight shifts display a **moon icon** to indicate they span past midnight. As an employee, you will see the full shift timing in your My Schedule view (e.g., "10:00 PM – 6:00 AM") so you know the shift crosses into the next day.

</div>

</div>

<div class="subsection">

### Task: Request Leave When Shifts Are Assigned

Understand how leave requests interact with your shift schedule.

#### Subtask: Submit a Leave Request

- Open the **Bayzat mobile app** or **web app**
- Navigate to **Time → Leaves → My Leaves**
- Click **"New Leave Request"**
- Select the leave type, dates, and provide a reason
- Submit the request for approval

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/54-employee-my-leaves.png" class="screenshot" loading="lazy" alt="Employee leave request page" />
<figcaption>Employee leave request page showing leave balances and the "New Leave Request" button</figcaption>
</figure>

#### Subtask: Understand Leave and Shift Interaction

When you have approved leave on a day where shifts are assigned:

- Your scheduler will see an **"On Leave"** overlay on your shift cell in the scheduler grid, showing the leave type (e.g., "On Leave - Vacation")
- You are **not required** to check in or out on leave days
- You will **not** receive attendance reminders for leave days
- The shift remains on the schedule but your attendance status shows as **On Leave** instead of Absent

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/22-specific-work-center-with-leave.png" class="screenshot" loading="lazy" alt="Scheduler grid showing leave overlay on shift" />
<figcaption>Admin view of the scheduler grid showing "On Leave" overlay on a shift cell — this is how your scheduler sees your leave days</figcaption>
</figure>

<div class="warning-box">

**Leave Does Not Auto-Delete Shifts:** Submitting a leave request does not automatically remove or modify your assigned shifts. Your scheduler must manually manage the schedule if shifts need to be reassigned. If you are unsure whether your shift has been adjusted after a leave approval, check your My Schedule in the mobile app or contact your scheduler.

</div>

</div>

<div class="subsection">

### Task: Request a Shift Change (via Employee Tickets)

Submit a formal request to change your assigned shift through the Employee Tickets system. This requires your organization to have the **Shift Change Request** ticket type configured and your account assigned to it.

#### Subtask: Navigate to My Tickets

- Log in to the **Bayzat web app** at app.bayzat.com
- Click **Requests** in the left sidebar
- Under **My requests**, click **"My tickets"**

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/65-employee-my-tickets-page.png" class="screenshot" loading="lazy" alt="My Tickets page showing pending and approved tickets" />
<figcaption>My Tickets page — employees can view pending, approved, and rejected tickets, and create new requests</figcaption>
</figure>

#### Subtask: Create a Shift Change Request Ticket

- Click **"Create ticket"** in the top-right corner
- In the **Select ticket type** dialog, choose the **Attendance** category on the left
- Select **"Shift Change Request"** from the ticket types on the right — described as "Request to change assigned work shift or schedule"
- Click **"Select"**

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/68-shift-change-request-selected.png" class="screenshot" loading="lazy" alt="Select ticket type dialog with Shift Change Request highlighted" />
<figcaption>Select ticket type dialog — choose Attendance category, then select "Shift Change Request"</figcaption>
</figure>

#### Subtask: Fill In Shift Change Details

The form presents the following fields:

| Field | Required | Description |
|-------|----------|-------------|
| **Employees** | Auto-filled | Your name (cannot be changed) |
| **Category > Ticket type** | Auto-filled | "Shift Change Request" |
| **Priority** | Yes | Default is Medium; change to High or Low based on urgency |
| **Shift/duty date** | Yes | The date of the shift you want to change (DD/MM/YYYY format) |
| **Current shift** | Yes | Your currently assigned shift timing (e.g., "Morning shift 09:00 AM – 06:00 PM") |
| **Requested shift** | Yes | The shift timing you want to change to (e.g., "Evening shift 02:00 PM – 11:00 PM") |
| **Remarks** | Optional | Reason for the shift change request |
| **Attachments** | Optional | Upload supporting documents if needed |

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/69-shift-change-request-form.png" class="screenshot" loading="lazy" alt="Shift Change Request form with fields for date, current shift, requested shift, and remarks" />
<figcaption>Shift Change Request form showing all required fields — priority, shift date, current shift, requested shift, and optional remarks</figcaption>
</figure>

- Fill in all required fields
- Click **"Submit"**

**Expected Outcome:** The ticket is created and appears in your My Tickets list under the **Pending** tab. The configured approver receives the request for review.

#### Subtask: Track Your Request

After submission, track the ticket status from **Requests → My tickets**:

- **Pending** — Awaiting approver review
- **Approved** — Request approved (scheduler must still manually update the shift)
- **Rejected** — Request denied; check comments for reason

Click on the ticket ID to view full details including the shift information you submitted, approver, and activity log.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/73-ticket-detail-shift-info.png" class="screenshot" loading="lazy" alt="Shift Change Request ticket detail page showing ticket info and approval status" />
<figcaption>Ticket detail page — shows Ticket info (shift date, current shift, requested shift, remarks) alongside Details (status, approver, line manager)</figcaption>
</figure>

<div class="warning-box">

**Approval does not auto-update the schedule.** Even after your ticket is approved, the shift is not automatically changed. Your admin or Shift Scheduler must manually update the shift in the Shift Scheduler. If your shift has not changed after approval, follow up with your scheduler.

</div>

<div class="info-box">

**Don't see the Shift Change Request ticket type?** If "Shift Change Request" does not appear when creating a ticket, your organization has not configured this ticket type, or you have not been assigned to it. Contact your HR admin to set it up under Settings → Employee Tickets.

</div>

</div>

<div class="subsection">

### Employee Troubleshooting

| Issue | Likely Cause | Resolution |
|-------|-------------|------------|
| "I don't see any shifts in My Schedule" | Shifts have not been published yet, or you are not assigned to a work center | Contact your scheduler to confirm your shifts have been published |
| "I was marked Absent but I checked in" | Your check-in may have been after the absent-after threshold, or the shift was changed after you checked in | Contact your admin to review and override the attendance record |
| "I can't check in — the widget doesn't work" | The shift may not be published yet, or you are outside the geofencing radius | Verify the shift is published in My Schedule; ensure you are at the correct work location |
| "My shift shows the wrong office location" | The scheduler assigned the shift to a different office | Contact your scheduler to update the shift with the correct office location |
| "I'm not receiving shift notifications" | Push notifications may be disabled for the Bayzat app | Check your device notification settings and ensure Bayzat notifications are enabled |
| "I see two shifts on the same day" | You are assigned a split shift (two separate work periods in one day) | This is expected — check in and out separately for each shift segment |
| "Overtime is showing unexpectedly" | Weekend or holiday shifts may trigger extra hours calculation | This depends on your company's overtime and Days in Lieu policy; contact HR for clarification |
| "I want to change my shift but can't" | Employees cannot modify shifts directly | Ask your admin if a Shift Change Request ticket type is configured; if so, submit a request through Employee Tickets. Otherwise, contact your scheduler directly |

</div>

</div>

</div>

<div id="workflow-integration" class="section section section-workflow-integration">

<div class="section-header">

## Workflow Integration

</div>

<div class="section-body">

<div class="subsection">

### Automation Status

<div class="info-box">

**Not Available:** Shift Scheduling does not currently support workflow automation through the Automations → Workflows interface.

</div>

</div>

<div class="subsection">

### Alternative Notification Methods

While automated workflows are not available, shift notifications are handled through:

- **Push Notifications** — Employees receive automatic alerts when shifts are published via the Bayzat mobile app
- **Manual Publishing** — Admins must manually publish draft shifts to trigger employee notifications

</div>

<div class="subsection">

### Integration Points

Shift Scheduling connects with other Bayzat modules but does not trigger automated workflows:

- **[Attendance](https://mashapajfhp.github.io/user-guides/attendance/v1/attendance-user-guide.html)** — Published shifts determine valid check-in/check-out windows. Attendance is validated using GPS coordinates and geofencing radius configured per office location (Settings → Company → Offices). Each office can have a location address, latitude/longitude coordinates, and a radius in meters for geofencing validation.
- **[Leave Management](https://mashapajfhp.github.io/user-guides/leave-management/v1/leave-management-user-guide.html)** — Shift schedules are blocked when leave requests are approved. Leave overlays (e.g., "On Leave - Vacation") appear directly in the schedule grid.
- **[Timesheets](https://mashapajfhp.github.io/user-guides/timesheets/v1/timesheets-user-guide.html)** — Shift hours feed into time tracking records
- **[Payroll](https://mashapajfhp.github.io/user-guides/payroll-management/v1/payroll-management-user-guide.html)** — Shift data influences attendance-based deductions and overtime calculations. Pay rates per shift type are not configured within Shift Scheduling — salary structures and pay rates are managed through [payroll](https://mashapajfhp.github.io/user-guides/payroll-management/v1/payroll-management-user-guide.html) configuration.

<div class="info-box">

**No External Integrations:** Shift Scheduling is an internal Bayzat workforce management feature. It does not integrate with external systems such as EMR (electronic medical records), third-party scheduling tools, or external APIs. All shift data is managed within the Bayzat platform.

</div>

</div>

<div class="subsection">

### Known Limitations

| Limitation | Impact | Workaround |
|----|----|----|
| No bulk shift publishing workflow | Admins must manually publish draft schedules | Use Schedule Planner to create multiple shifts at once before publishing |
| No automated shift reminders | Employees only notified once at publication time | Communicate shift schedules through external channels if needed |
| No approval workflow for shift changes | Shift edits take effect immediately without manager review | Use draft mode to review changes before publishing |

</div>

</div>

</div>

<div id="business-rules-limitations" class="section section section-business-rules-limitations">

<div class="section-header">

## Business Rules & Limitations

</div>

<div class="section-body">

<div class="subsection">

### Split Shift Rules

- **Maximum 2 shifts per day:** Employees can be scheduled for up to two shifts in a single day (expandable based on customer feedback).
- **No overlap allowed:** Shifts cannot overlap with other shifts on the same day, day before, or day after.
- **Day off restrictions:** Cannot schedule a second shift if a day off already exists on that day, including day off with check-in allowed.
- **No minimum gap required:** System does not enforce a minimum break period between multiple shifts.
- **Independent tracking:** Each shift is treated independently for late/early/absent calculations and occurrence tracking.
- **Deduction halving for dual-shift days:** When an employee has 2 shifts on the same day, attendance deduction amounts are automatically divided by 2. For example, if a late arrival deduction is configured as 5% of salary, each shift's late arrival deduction is calculated as 2.5% (5% ÷ 2).

</div>

<div class="subsection">

### Scheduling Constraints

| Constraint | Impact | Status |
|----|----|----|
| Cannot schedule shifts for past dates | Shifts can only be created for current and future dates | System Enforced |
| Cannot delete current day shift if employee checked in | Prevents deletion of active attendance records | System Enforced |
| Shifts can be scheduled up to 6 months in advance | Maximum forward planning window | System Enforced |
| 30-second undo window for bulk deletion | Limited time to reverse accidental deletions | System Enforced |

</div>

<div class="subsection">

### Known Limitations from Jira Tickets

<div class="warning-box">

**⚠️ Audit Logs Not Displaying**

Admin panel cannot display complete audit logs for shift scheduler and hrcore entities, limiting ability to track historical shift modifications within the 90-day retention period. (TSSD-4634)

</div>

<div class="warning-box">

**⚠️ Scheduled Overtime Not Supported with Multiple Shifts**

Cannot schedule [overtime](https://mashapajfhp.github.io/user-guides/overtime/v2/overtime-user-guide.html) (T&P adjustments) when an employee has multiple published shifts in a day. This restriction was implemented during [split shifts](https://mashapajfhp.github.io/user-guides/split-shifts/v1/split-shifts-user-guide.html) launch. (TSSD-4078)

</div>

<div class="warning-box">

**⚠️ Leave Calculation Does Not Consider Shift Days-Off**

Working days [leave](https://mashapajfhp.github.io/user-guides/leave-management/v1/leave-management-user-guide.html) policy cannot automatically account for scheduled shift days-off, preventing accurate leave tracking for employees with complex shift schedules. (TSSD-2858)

</div>

<div class="warning-box">

**⚠️ Timesheets Cannot Handle Midnight-Spanning Shifts**

Time entries that span across midnight must be manually split into separate entries, creating administrative overhead. (TSSD-4285)

</div>

<div class="warning-box">

**⚠️ Single Check-in/Check-out Per Shift**

System only supports one check-in and check-out per shift, preventing accurate tracking in dynamic environments requiring multiple attendance points. (TSSD-2957)

</div>

| Limitation | Impact | Severity |
|----|----|----|
| No bulk shift copying functionality | Must manually create individual employee schedules | Medium (AV-8632) |
| Manager override issues with consecutive shifts | Cannot adjust times that appear to overlap with previous shift end times | Medium (OS-739) |
| Check-out restricted outside time windows | Prevents accurate logging for non-standard shift scenarios | Medium (AV-8693) |
| No native shift publication mechanism | Manual communication required to distribute draft schedules to employees | Medium (AV-9243) |
| No bulk import from Excel | Restricted to manual individual shift entry | Medium (TSSD-1085) |
| Filters not working for shift visualizations | Cannot get accurate filtered views of employee shift data | Medium (AV-1994) |
| No overlapping shift validation | System permits overlapping work timings without warnings | Medium (OS-641) |
| View filter uses OR logic instead of AND | Cannot precisely filter out day-off shifts with office parameters | Medium (OS-716) |
| Wrong shift details after first shift checkout | Cannot dynamically display shift information based on current attendance status | Medium (OS-800) |
| Historical shift assignments persist | Past assignments override current work week configurations in attendance records | Medium (TSSD-4831) |
| No center-wide shift view for employees | Employees cannot see colleague shifts within same location | Medium (TSSD-3918) |
| Line manager permissions not configurable | Cannot restrict edit access for attendance records | Medium (TSSD-3317) |
| Shifts require publication before check-in | Check-ins rejected if received before shift publication or after status changes | Medium (TSSD-3555) |
| No work timing export functionality | Must rely on manual workarounds or support team intervention | Medium (TSSD-3642) |
| No flexible filtering within work center | Line managers cannot view only their reporting employees while referencing other shifts | Medium (TSSD-3848) |
| 24-hour shift configuration complexity | Day boundary reset at midnight complicates 24-hour shift setup | Medium (TSSD-2623) |

<div class="info-box">

**Attendance Record Auto-Removal:** System automatically removes attendance records when employee is on leave, which may not be transparent for complex shift schedules. (OS-721)

</div>

<div class="info-box">

**Browser Compatibility:** Safari 10.1 has inconsistent URLSearchParams behavior, limiting reliable query parameter parsing. (AV-2173)

</div>

<div class="info-box">

**Date Display in Edit Dialog:** Edit dialog has intermittent rendering issue where date information fails to display consistently. (AV-1915)

</div>

<div class="info-box">

**Split Shift Creation from Cell:** Cannot create split shifts directly from Shift cell interface. (OS-299)

</div>

<div class="info-box">

**Active Shifts Display Inconsistency:** Active shifts (today/yesterday) not displayed as consolidated blocks, creating visual inconsistency. (OS-605)

</div>

<div class="info-box">

**Shift Copying Constraint:** Modified shifts are intentionally not transferred during copy operations to maintain schedule integrity. (OS-597)

</div>

<div class="info-box">

**Excel Export Visual Consistency:** Excel export lacks visual consistency with platform's native table view. (AV-2657)

</div>

<div class="info-box">

**Mobile Shift Editing:** Mobile shift scheduler has functional constraint preventing successful shift editing. (OS-98)

</div>

</div>

<div class="subsection">

### Back-to-Back Shift Handling (Phase 2)

Configurable window between shift end and next start determines checkout behavior:

| Scenario | System Behavior |
|----|----|
| Within configured window | Checkout allowed normally |
| At next shift start time | Check-in triggers automatic checkout for previous shift |
| Beyond configured window | Normal checkout process applies |

</div>


</div>

</div>

<div id="troubleshooting-edge-cases" class="section section section-troubleshooting-edge-cases">

<div class="section-header">

## Troubleshooting & Edge Cases

</div>

<div class="section-body">

<div class="subsection">

### Common Issues

| Issue | Cause | Resolution |
|----|----|----|
| Cannot create second shift on same day | Day off exists on that day or shift overlap detected | Remove day off assignment or adjust shift times to eliminate overlap with adjacent days |
| Employee marked absent despite checking in | Shift not published as working day before check-in received | Ensure shifts are published before employees attempt check-in; check-ins before publication are rejected |
| Cannot edit time for consecutive shifts | System validation prevents times that appear to overlap with previous shift | Ensure clear time separation between shifts; contact support if legitimate consecutive shifts are blocked |
| Bulk deletion cannot be undone | 30-second undo window expired | Recreate shifts using Schedule Planner or copy from previous week; no recovery after undo window |
| Overtime not available for multiple shifts | System restriction when multiple shifts exist in same day | Schedule overtime as separate shift or use Time & Pay adjustments after attendance recorded |
| Leave calculation incorrect for shift workers | Working days policy does not integrate with shift schedule | Manually adjust leave calculations or use calendar days policy instead of working days |
| Cannot check out after midnight | Shift spans day boundary and system resets at midnight | Configure shift to end at 11:59 PM and create second shift starting at 12:00 AM for overnight coverage |
| Historical attendance shows wrong shift | Past shift assignments persist after work week configuration change | Historical records are not automatically recalculated; manually adjust attendance records if needed |
| Shift scheduler filters not updating | Statistical visualizations do not refresh when filters applied | Refresh page or clear filters and reapply; known limitation with filter functionality |
| Audit logs missing for shift changes | Admin panel bug prevents display of shift scheduler logs | Contact support for database-level audit trail; UI logs unavailable for affected entities |
| Scheduler cannot see work center | Scheduler not assigned to the work center | Go to Settings → Attendance → Work Centers for Shift Scheduling → Edit the work center → Add the scheduler as the assigned scheduler |
| Scheduler can see employees but cannot manage shifts | Scheduler role assigned but not linked to work center | Ensure the scheduler is explicitly set as the work center's scheduler, not just given the Shift Scheduler role |

</div>

<div class="subsection">

### Edge Cases

- **Shift publication timing:** Overtime policy eligibility evaluated at check-in time, not shift publication time; order of operations does not matter.
- **Modified shift copying:** System intentionally prevents copying of modified shifts to maintain schedule integrity; only original published shifts can be duplicated.
- **Multiple check-ins per shift:** System supports only one check-in and one check-out per shift; employees requiring multiple attendance points must use workarounds.
- **[Timesheet](https://mashapajfhp.github.io/user-guides/timesheets/v1/timesheets-user-guide.html) midnight boundary:** Time entries spanning midnight must be manually split into separate entries for each day.
- **Day off with check-in allowed:** Blocks second shift creation even though check-in is permitted; system treats as day off for scheduling purposes.
- **[Biometric](https://mashapajfhp.github.io/user-guides/biometric-attendance/v2/biometric-attendance-user-guide.html) integration:** Works with existing threshold logic; no special handling required for multiple shifts per day.
- **Occurrence tracking:** Late/absent/early departure occurrences calculated independently per shift, not aggregated across day.
- **Schedule planner limitations:** 'All' option not available when scheduling split shifts; must select specific work centers.
- **Copy functionality restrictions:** Disabled when 'all' work center selected; shifts may be skipped due to conflicts or restrictions.
- **[Leave](https://mashapajfhp.github.io/user-guides/leave-management/v1/leave-management-user-guide.html) request impact:** Creating leave request automatically removes attendance records for that day, affecting shift-based tracking.

</div>

<div class="subsection">

### Workarounds for Known Gaps

- **No bulk import:** Use Schedule Planner to create shifts for multiple employees simultaneously, or use Copy Schedule feature to duplicate weekly patterns.
- **No shift publication notification:** Manually communicate schedule changes via email or team messaging until native notification feature available.
- **Cannot export work timings:** Request Excel export from support team or document configurations in external spreadsheet.
- **Line manager permission control:** Use role-based access at company level; granular attendance permissions not configurable per manager.
- **No center-wide view:** Share shift schedules via exported reports or external calendar system for team visibility.
- **Midnight-spanning shifts:** Configure as two consecutive shifts (11:59 PM end, 12:00 AM start) or use 24-hour work timing with manual [timesheet](https://mashapajfhp.github.io/user-guides/timesheets/v1/timesheets-user-guide.html) adjustments.

</div>

</div>

</div>

<div id="support-resources" class="section section section-support-resources">

<div class="section-header">

## FAQs & Support

</div>

<div class="section-body">

<div class="subsection">

### Frequently Asked Questions

<div class="faq-accordion">

Can I schedule more than 2 shifts per employee per day?

No. The system currently limits employees to a maximum of 2 shifts per day. This restriction was implemented during the split shifts feature launch.

Can I bulk upload shifts from Excel?

No. The platform does not support direct Excel import for shift scheduling. Use the Schedule Planner or copy functionality to manage multiple shifts efficiently.

Why can't I schedule overtime (T&P adjustments) when an employee has multiple shifts?

The system does not support scheduling [overtime](https://mashapajfhp.github.io/user-guides/overtime/v2/overtime-user-guide.html) when multiple published shifts exist for the same day. This is a known limitation from the [split shifts](https://mashapajfhp.github.io/user-guides/split-shifts/v1/split-shifts-user-guide.html) implementation.

Can I schedule shifts on an employee's day off?

No. The system prevents scheduling shifts on days marked as day off, including days with check-in allowed status.

How do I handle 24-hour shifts that cross midnight?

The system resets at midnight, so you cannot use a simple 12am-11:59pm timeframe. Configure the shift to end at 11:59pm and create a second shift starting at 12:00am for the next day.

Why can't I edit shifts for back-to-back schedules?

The system has strict validation that prevents time entries appearing to overlap with previous shift end times, even for consecutive shifts. This affects manager override capabilities.

Can employees check in before their shift is published?

No. Shifts must be published as working days before check-ins are accepted. Check-ins received before publication are automatically rejected.

Does the system track audit logs for shift changes?

Audit logging for shift scheduler was limited before October 9, 2023. Current logs may not show user-level details for who published or modified shifts during earlier periods.

Can I copy shifts to multiple employees at once?

Yes, but the 'All' option is not available when scheduling split shifts. You must select specific employees when copying shifts with multiple segments per day.

Why don't leave calculations consider my scheduled days off?

The [leave](https://mashapajfhp.github.io/user-guides/leave-management/v1/leave-management-user-guide.html) calculation system does not integrate with shift scheduling data. It calculates deductions based on the work week profile configuration, not actual scheduled shifts or days off.

Can line managers edit attendance records?

Yes. Line managers have default edit access for attendance records that cannot be restricted by super admins. This is the current system behavior.

How long can I undo a bulk shift deletion?

You have 30 seconds to undo a bulk deletion after confirming the action. After this window, the deletion is permanent.

Can I schedule shifts for an entire year in advance?

Shifts can be scheduled up to 6 months in advance. To cover a full year, you would need to plan in two 6-month cycles. Use the Copy Schedule feature to duplicate weekly patterns and reduce manual effort when extending schedules.

How do shifts that span past midnight work?

The system resets at midnight, so shifts cannot natively span across the day boundary. Configure the shift to end at 11:59 PM and create a second shift starting at 12:00 AM the next day. Overnight shifts are indicated with a moon icon in the schedule grid.

Can I set up different pay rates for different shift types?

Shift scheduling assigns work timings and tracks attendance, but does not directly configure pay rates per shift type. Pay rates are managed through [payroll](https://mashapajfhp.github.io/user-guides/payroll-management/v1/payroll-management-user-guide.html) configuration. Attendance-based deductions (late arrival, early departure, absence) are calculated based on the work timing's configured rules and the employee's salary structure.

Does the shift scheduler integrate with EMR (electronic medical records) systems?

No. Shift scheduling is an internal workforce management feature within Bayzat. It does not integrate with external EMR or third-party systems.

Can employees use the shift scheduler for self-scheduling?

No. Shift scheduling is a top-down process managed by admins and shift schedulers. Employees cannot create or modify shifts directly. However, organizations can configure a **Shift Change Request** ticket type under Settings → Employee Tickets to allow employees to formally request shift changes. The request goes through an approval workflow, and a scheduler must manually update the schedule after approval. See [Employee Tickets](https://mashapajfhp.github.io/user-guides/employee-tickets/v1/employee-tickets-user-guide.html) for setup details.

Is there a report specifically for split shift attendance?

Split shift attendance is tracked within the standard [attendance](https://mashapajfhp.github.io/user-guides/attendance/v1/attendance-user-guide.html) reports. Each shift generates its own attendance record, so split shift employees will have two separate entries per day visible in the Daily Report under Attendance.

Can I track attendance with GPS location for shift workers?

[Attendance](https://mashapajfhp.github.io/user-guides/attendance/v1/attendance-user-guide.html) tracking supports geofencing and GPS-based check-in for office locations. When creating a shift, you assign an office location, and the check-in validation is based on the location settings configured for that office. For [biometric attendance](https://mashapajfhp.github.io/user-guides/biometric-attendance/v2/biometric-attendance-user-guide.html) device configuration, refer to the biometric attendance guide.

Can I use the shift scheduler for employees who don't have fixed work hours?

Yes. Configure a "Flexible work timing" by enabling the flexible toggle in the Work Timing settings. Flexible work timings allow variable start and end times while still tracking total hours worked.

How do I set up a shift scheduler who can only manage specific employees?

Assign the Shift Scheduler role to the user, then add them as the scheduler for a specific work center under Settings → Attendance → Work Centers for Shift Scheduling. The scheduler can only see and manage employees within their assigned work center(s). The scheduler must be added to the work center to have access.

</div>

</div>

<div class="subsection">

### Getting Help

- **Bayzat Support:** Contact your Customer Success Manager or submit a ticket through the Help Center for shift scheduling assistance
- **Knowledge Base:** Access detailed guides at [bayzathelp.zendesk.com](https://bayzathelp.zendesk.com) for step-by-step instructions
- **Training Resources:** Request training sessions for shift scheduler setup and best practices from your account team

</div>

</div>

</div>

<div id="glossary" class="section section section-glossary">

<div class="section-header">

## Glossary

</div>

<div class="section-body">

| Term | Definition |
|----|----|
| **Absent After** | The time threshold after which an employee who has not checked in is automatically marked absent for their shift. |
| **Attendance Record** | A system entry that captures an employee's check-in and check-out times, along with calculated attendance status for a specific shift. |
| **Back-to-Back Shifts** | Consecutive work shifts where the end time of one shift immediately precedes the start time of the next shift with minimal or no gap. |
| **[Biometric](https://mashapajfhp.github.io/user-guides/biometric-attendance/v2/biometric-attendance-user-guide.html) Integration** | System connection that enables employees to check in and out using fingerprint or facial recognition devices linked to their shift schedule. |
| **Check-in** | The action of recording an employee's arrival at the start of their scheduled shift, either manually or through automated systems. |
| **Check-out** | The action of recording an employee's departure at the end of their scheduled shift, used to calculate total work hours. |
| **Day Off** | A scheduled non-working day for an employee where no shift can be assigned, distinct from leave or public holidays. |
| **Deduction Policy** | Rules that define how salary deductions are calculated and applied based on attendance violations such as late arrivals or absences. |
| **Draft Shift** | A shift that has been created but not yet published, allowing schedulers to review and modify before making it visible to employees. |
| **Early Departure** | When an employee checks out before their scheduled shift end time, potentially triggering attendance policy violations. |
| **Late Arrival** | When an employee checks in after their scheduled shift start time, tracked against configured threshold levels for policy enforcement. |
| **Manager Override** | The ability for managers to manually edit or correct attendance records, including check-in and check-out times, after they have been recorded. |
| **Occurrence Tracking** | System that counts and monitors attendance violations (late, absent, early departure) for each shift independently to enforce policies. |
| **Office Location** | The physical workplace or branch where an employee is scheduled to work during their shift, used for attendance validation. |
| **Overnight Shift** | A shift where the end time is earlier than the start time (e.g., 10:00 PM to 6:00 AM), spanning across midnight. Displayed with a moon icon in the schedule grid. |
| **[Overtime](https://mashapajfhp.github.io/user-guides/overtime/v2/overtime-user-guide.html) (T&P Adjustment)** | Additional work hours beyond standard shift times that require special scheduling and compensation through Time and Pay adjustments. |
| **Published Shift** | A finalized shift schedule that has been made visible to employees and is active for check-in tracking and attendance recording. |
| **Schedule Planner** | Tool that enables schedulers to create and assign shifts for multiple employees across date ranges without individual entry. |
| **Shift** | A defined work period with specific start and end times, assigned to an employee for a particular date and office location. |
| **Shift Scheduler** | The user role and interface responsible for creating, publishing, and managing employee work shifts within assigned work centers. |
| **Split Shift** | A work schedule where an employee has two separate shifts on the same day with a break period between them. |
| **Threshold** | The configured time allowance (in minutes) before an employee is marked late or absent after their scheduled shift start time. |
| **[Timesheet](https://mashapajfhp.github.io/user-guides/timesheets/v1/timesheets-user-guide.html)** | A record of all work hours logged by an employee across their shifts, used for [payroll](https://mashapajfhp.github.io/user-guides/payroll-management/v1/payroll-management-user-guide.html) calculation and attendance reporting. |
| **Work Center** | A grouping of employees managed by the same scheduler, sharing common office locations and work timing configurations for shift assignment. |
| **Work Timing** | A predefined schedule template that specifies shift start time, end time, and attendance rules applied when creating employee shifts. |
| **Reassign Shift** | The action of transferring a published shift from one employee to another while keeping the same date, work timing, and office location. Only available for published shifts. |
| **Work Week Profile** | Configuration that defines an employee's standard working days and rest days, used for leave calculations independent of shift schedules. |

</div>

</div>

</div>
