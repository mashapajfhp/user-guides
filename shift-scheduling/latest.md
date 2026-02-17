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

- Prerequisite for accurate check-in/check-out validation
- Drives late arrival, early departure, and absence calculations
- Controls overtime eligibility and time-based deductions

</div>

<div class="strategic-card">

#### 🏗️ How It Connects

Shift schedules are transactional assignments that reference configuration templates (work timings, offices).

- Assigned to individual employees for specific dates
- Referenced by attendance records and timesheet entries
- Affects individual employees on scheduled days only

</div>

</div>

</div>

<div class="subsection">

### Who Uses This Feature?

| User Role | What They Do | Value Proposition |
|----|----|----|
| **Super Admin** | Create work centers, assign schedulers, and configure shift scheduling permissions | Centralize shift management structure and delegate scheduling responsibilities across the organization |
| **Shift Scheduler** | Create, publish, and manage employee shifts within assigned work centers | Replace manual scheduling with automated shift assignment and instant employee notification |
| **Line Manager** | View team schedules and coordinate coverage within their work center | Access real-time visibility into team availability without manual status checks |
| **Employee** | View assigned shifts and receive notifications for schedule changes | Know work schedule in advance without waiting for manual communication |

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

One shift affects one employee on one day. Changes to shifts only affect the specific assignments modified, not future schedules.

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

- **Work Timings** — Defines the schedule templates (start/end times, rules) that shifts reference
- **Work Centers** — Groups employees, locations, and schedulers for shift management
- **Attendance Records** — Captures check-in/check-out against published shifts
- **Day Off Management** — Blocks shift creation when employee has scheduled day off
- **Leave Requests** — Automatically removes attendance records when leave is approved

</div>

<div class="subsection">

### Prerequisites & Requirements

| Requirement | Description | Status |
|----|----|----|
| Work Timings configured | At least one work timing template must exist to assign to shifts | Required |
| Work Centers created | Employees must be assigned to work centers before scheduling | Required |
| Office locations defined | Shifts must be assigned to specific office/branch locations | Required |
| Shift Scheduler role assigned | Users need Shift Scheduler permissions to create and publish shifts | Required |
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

### End-to-End Journey: From Planning to Publishing Shifts

This journey covers the complete process of setting up work centers, creating shift schedules, and managing employee assignments.

</div>

<div class="journey-phases">

<div class="journey-phase">

<div class="phase-marker">

1

</div>

<div class="phase-content">

#### Plan

Identify shift types, work timings, and staffing requirements across different locations.

<a href="#product-foundation" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

2

</div>

<div class="phase-content">

#### Configure Work Centers

Set up work centers with schedulers, office locations, and work timings.

<a href="#initial-setup" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

3

</div>

<div class="phase-content">

#### Navigate

Access the Shift Scheduler interface to begin creating employee schedules.

<a href="#feature-entry-points" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

4

</div>

<div class="phase-content">

#### Create Shifts

Assign shifts to employees using individual scheduling, schedule planner, or copy functions.

<a href="#core-tasks" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

5

</div>

<div class="phase-content">

#### Review & Publish

Save shifts as drafts for review, then publish to notify employees via mobile app.

<a href="#core-tasks" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

6

</div>

<div class="phase-content">

#### Manage & Maintain

Edit, delete, reassign shifts, and handle split shifts or bulk operations as needed.

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

Access the Shift Scheduler from the Attendance module to view, create, and manage employee shift schedules.

<div class="info-box">

**Alternative Access:** Use Schedule Planner for bulk shift creation across multiple employees and date ranges.

</div>

#### Available Views

- **Time View** — Calendar-based view showing shifts by date and employee
- **Work Center View** — Organized by work center groups for targeted scheduling
- **Employee View** — Individual employee schedule management

#### Key Entry Points

- **Create Shift** — Click on employee cell or empty date cell to assign new shift
- **Schedule Planner** — Bulk shift creation tool for multiple employees
- **Copy Schedule** — Duplicate existing shift patterns to other periods
- **Delete Shifts** — Bulk deletion interface for removing multiple shifts

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

- **Work Timings:** Define shift start/end times, late arrival thresholds, and break allowances under Settings → Attendance → Work Timings
- **Office Locations:** Set up branch/office locations where shifts will be assigned under Settings → Company → Offices
- **Shift Scheduler Role:** Assign the Shift Scheduler role to managers who will create and publish shifts under Settings → Roles & Permissions
- **Employee Classification:** Ensure employees are classified as "Shift" type in their profiles to enable shift assignment

</div>

<div class="subsection">

### First-Time Configuration Steps

#### Step 1: Create Work Centers

Work centers group employees by scheduler, office, and shift timing.

<div class="nav-path">

Time → Shift Scheduler → Work Centers → + Create Work Center

</div>

1.  Navigate to Time → Shift Scheduler → Work Centers
2.  Click "+ Create Work Center"
3.  Enter work center name (e.g., "Retail Floor Staff", "Night Shift Security")
4.  Select the Shift Scheduler (manager responsible for this group)
5.  Add applicable office locations where these employees work
6.  Select work timings (shift schedules) available for this group
7.  Add employees to the work center
8.  Click "Save"

<div class="info-box">

**Note:** Each employee can only belong to one work center. If all employees share the same scheduler and locations, create a single work center with all shift employees.

</div>

#### Step 2: Configure Split Shift Settings (Optional)

If employees work multiple shifts per day (e.g., morning and evening with break in between):

- Maximum 2 shifts per employee per day
- Shifts cannot overlap with same day, previous day, or next day shifts
- Cannot schedule shifts on days marked as Day Off or during half-day leave
- Each shift tracks attendance independently (separate check-in/check-out)

<div class="warning-box">

**⚠️ Split Shift Limitation:** Cannot add extra hours (T&P adjustments) if employee has multiple published shifts on the same day. Schedule overtime as a separate shift instead.

</div>

#### Step 3: Set Scheduling Permissions

Define who can create, edit, and publish shifts:

- **Super Admin:** Full access to all work centers and shift management
- **Shift Scheduler:** Can create and publish shifts only for assigned work centers
- **Line Manager:** Can view shifts for reporting employees but cannot edit (by default)

<div class="info-box">

**Audit Logging:** Shift creation, editing, and publishing actions are logged with user details and timestamps for shifts created after October 9, 2023.

</div>

</div>

<div class="subsection">

### Initial Shift Creation Methods

Choose the method that fits your scheduling workflow:

| Method | Best For | Access Path |
|----|----|----|
| **Individual Shift Creation** | One-off shifts, specific employee assignments | Time → Shift Scheduler → Click employee cell → Create shift |
| **Schedule Planner** | Bulk shift creation for multiple employees at once | Time → Shift Scheduler → Schedule Planner |
| **Copy Schedule** | Repeating weekly patterns, copying previous week | Time → Shift Scheduler → Copy icon → Select date range |

</div>

<div class="subsection">

### Draft vs. Published Shifts

Shifts can be saved as drafts for review before publishing:

- **Draft:** Visible only to schedulers, not sent to employees, can be edited freely
- **Published:** Sent to employees via push notification on Bayzat mobile app, visible in employee schedule

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
| Shift Scheduler role missing | Role not assigned to manager | Settings → Roles & Permissions → Assign Shift Scheduler role |
| Cannot create split shifts | Day off or leave exists on that day | Remove day off or reschedule shift to different date |
| Work center owner leaving company | No replacement scheduler assigned | Assign new work center owner before offboarding current scheduler |

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

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/02-work-center-dropdown.png" class="screenshot" loading="lazy" alt="Work center configuration" />
<figcaption>Work center configuration screen showing scheduler assignment, office locations, and employee selection</figcaption>
</figure>

- Navigate to Time → Shift Scheduler → Work Centers
- Click "Create Work Center"
- Assign a shift scheduler (must have shift scheduler role)
- Select office locations where shifts will occur
- Add work timings that will be used for scheduling
- Select employees who belong to this work center
- Save the work center

**Expected Outcome:** Work center created with employees grouped by common scheduler and locations, ready for shift assignment.

</div>

<div class="subsection">

### Task: Create and Assign Individual Shifts

Schedule specific work shifts for employees on designated dates with defined work timings and locations.

#### Subtask: Create Single Shift

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/02-work-center-selected.png" class="screenshot" loading="lazy" alt="Shift scheduler calendar view" />
<figcaption>Shift scheduler calendar view showing employee rows and date columns for shift creation</figcaption>
</figure>

- Navigate to Time → Shift Scheduler
- Select work center from dropdown
- Choose date range to display
- Click on empty cell for specific employee and date
- Select work timing from dropdown
- Select office location
- Save as draft or publish immediately

**Expected Outcome:** Shift created for employee on specified date with assigned work timing and location.

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

### Task: Copy and Repeat Shifts Across Multiple Employees

Duplicate existing shift patterns to multiple employees over specified date ranges to standardize schedules.

#### Subtask: Copy Shifts to Multiple Employees

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/12-wtd003-copy-dialog.png" class="screenshot" loading="lazy" alt="Copy shift dialog" />
<figcaption>Copy shift dialog showing source employee, date range selector, and target employee list</figcaption>
</figure>

- Hover over copy icon next to employee name with existing shifts
- Click copy icon to select source shifts
- Select date range for pasting (1 to 90 days)
- Select target employees from list
- Choose whether to overwrite existing draft shifts
- Click "Apply" to paste shifts
- Use undo option within 60 seconds if needed

**Expected Outcome:** Source employee's shift pattern replicated to selected employees across specified date range, excluding dates with day offs, public holidays, published shifts, or approved leave.

<div class="info-box">

**Copy Limitations:** Cannot paste shifts into past dates. Cannot overwrite published shifts, day offs, public holidays, or approved leave. Undo option available for 60 seconds only.

</div>

</div>

<div class="subsection">

### Task: Publish Draft Shifts to Employees

Finalize and communicate shift schedules to employees, making them visible in mobile app and enabling check-in.

#### Subtask: Publish Shifts

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/11-wtd002-draft-saved.png" class="screenshot" loading="lazy" alt="Draft shifts with publish button" />
<figcaption>Shift scheduler showing draft shift created with publish button indicating 1 unpublished shift</figcaption>
</figure>

- Review draft shifts in shift scheduler view
- Select shifts to publish (by date range or individual selection)
- Click "Publish" button
- Confirm publication
- System sends push notification to employees via Bayzat mobile app

**Expected Outcome:** Shifts published and visible to employees in mobile app under "My Schedule." Employees can now check in and out for published shifts.

<div class="warning-box">

**⚠️ Publishing Constraint:** Shifts must be published before employees can check in. Check-ins received before shift publication are automatically rejected.

</div>

</div>

<div class="subsection">

### Task: Edit Existing Shifts

Modify shift details including work timing, office location, or date for draft or published shifts.

#### Subtask: Edit Shift Details

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/10-wtd002-shift-creation-dialog.png" class="screenshot" loading="lazy" alt="Shift creation dialog" />
<figcaption>Shift creation/edit dialog showing work timing, office location, and date fields</figcaption>
</figure>

- Click on existing shift cell in shift scheduler
- Select "Edit" from options menu
- Modify work timing, office location, or date as needed
- Save changes
- If shift is published, employees receive notification of change

**Expected Outcome:** Shift updated with new details. If published, employees notified of schedule change.

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

### Task: View and Track Employee Shifts (Employee Perspective)

Employees view their assigned shifts and check in/out for scheduled work periods.

#### Subtask: View Shift Schedule in Mobile App

- Open Bayzat mobile app
- Navigate to "My Schedule" section
- View weekly schedule with shift details (date, time, office location)
- See current shift highlighted as "Happening now"
- For split shifts, see next shift details displayed

**Expected Outcome:** Employee sees complete shift schedule with all assigned work periods, locations, and timings.

#### Subtask: Check In and Out for Shifts

- At shift start time, click attendance widget on mobile app home page
- Select "Check in" to record shift start
- At shift end time, click attendance widget
- Select "Check out" to record shift end
- For split shifts, repeat check-in/out for each shift segment

**Expected Outcome:** Attendance recorded for shift. System calculates late/early/absent status independently per shift for split shift scenarios.

</div>

<div class="subsection">

### Task: Override Attendance Records for Published Shifts

Manually adjust check-in/out times or attendance status when employees cannot use standard check-in process.

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

### Task: Use Schedule Planner for Bulk Shift Creation

Create shifts for multiple employees across multiple dates using grid-based planning interface.

#### Subtask: Plan Shifts in Grid View

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/30-wtd005-schedule-planner.png" class="screenshot" loading="lazy" alt="Schedule planner" />
<figcaption>Schedule planner grid showing employees in rows and dates in columns with work timing dropdowns</figcaption>
</figure>

- Navigate to Time → Shift Scheduler → Schedule Planner
- Select work center and date range
- Use grid to assign work timings to employees across dates
- Select work timing from dropdown for each employee-date cell
- Apply patterns across multiple cells using drag or copy functions
- Save as draft or publish all shifts at once

**Expected Outcome:** Multiple shifts created efficiently using grid interface, reducing time compared to individual shift creation.

<div class="info-box">

**Schedule Planner Note:** "All" option not available when creating split shifts. Copy functionality disabled when "all" work center is selected.

</div>

</div>

<div class="subsection">

### Task: Move Employees Between Work Centers

Reassign employees to different work centers when reporting structure or scheduling ownership changes.

#### Subtask: Transfer Employee to New Work Center

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/shift-scheduling/v1/validation/screenshots/03-specific-work-center-selected.png" class="screenshot" loading="lazy" alt="Work center with employees" />
<figcaption>Work center view showing employee list within a selected work center</figcaption>
</figure>

- Navigate to Time → Shift Scheduler → Work Centers
- Open source work center and remove employee from list
- Open target work center and add employee to list
- Save changes to both work centers
- Employee's future shifts now managed by new work center's scheduler

**Expected Outcome:** Employee moved to new work center. New scheduler can create and manage future shifts. Historical shifts remain unchanged.

<div class="info-box">

**Work Center Constraint:** Each employee can belong to only one work center at a time. Moving employees does not affect historical shift assignments or attendance records.

</div>

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

Shift Scheduling connects with other modules but does not trigger automated workflows:

- **Attendance Tracking** — Published shifts determine valid check-in/check-out windows
- **Leave Management** — Shift schedules are blocked when leave requests are approved
- **Timesheets** — Shift hours feed into time tracking records
- **Payroll** — Shift data influences attendance-based deductions and overtime calculations

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

Cannot schedule overtime (T&P adjustments) when an employee has multiple published shifts in a day. This restriction was implemented during split shifts launch. (TSSD-4078)

</div>

<div class="warning-box">

**⚠️ Leave Calculation Does Not Consider Shift Days-Off**

Working days leave policy cannot automatically account for scheduled shift days-off, preventing accurate leave tracking for employees with complex shift schedules. (TSSD-2858)

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

<div class="subsection">

### Deduction Policy Considerations

Absenteeism calculations across multiple shifts require consideration of hourly rate versus daily wage structures.

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

</div>

<div class="subsection">

### Edge Cases

- **Shift publication timing:** Overtime policy eligibility evaluated at check-in time, not shift publication time; order of operations does not matter.
- **Modified shift copying:** System intentionally prevents copying of modified shifts to maintain schedule integrity; only original published shifts can be duplicated.
- **Multiple check-ins per shift:** System supports only one check-in and one check-out per shift; employees requiring multiple attendance points must use workarounds.
- **Timesheet midnight boundary:** Time entries spanning midnight must be manually split into separate entries for each day.
- **Day off with check-in allowed:** Blocks second shift creation even though check-in is permitted; system treats as day off for scheduling purposes.
- **Biometric integration:** Works with existing threshold logic; no special handling required for multiple shifts per day.
- **Occurrence tracking:** Late/absent/early departure occurrences calculated independently per shift, not aggregated across day.
- **Schedule planner limitations:** 'All' option not available when scheduling split shifts; must select specific work centers.
- **Copy functionality restrictions:** Disabled when 'all' work center selected; shifts may be skipped due to conflicts or restrictions.
- **Leave request impact:** Creating leave request automatically removes attendance records for that day, affecting shift-based tracking.

</div>

<div class="subsection">

### Workarounds for Known Gaps

- **No bulk import:** Use Schedule Planner to create shifts for multiple employees simultaneously, or use Copy Schedule feature to duplicate weekly patterns.
- **No shift publication notification:** Manually communicate schedule changes via email or team messaging until native notification feature available.
- **Cannot export work timings:** Request Excel export from support team or document configurations in external spreadsheet.
- **Line manager permission control:** Use role-based access at company level; granular attendance permissions not configurable per manager.
- **No center-wide view:** Share shift schedules via exported reports or external calendar system for team visibility.
- **Midnight-spanning shifts:** Configure as two consecutive shifts (11:59 PM end, 12:00 AM start) or use 24-hour work timing with manual timesheet adjustments.

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

The system does not support scheduling overtime when multiple published shifts exist for the same day. This is a known limitation from the split shifts implementation.

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

The leave calculation system does not integrate with shift scheduling data. It calculates deductions based on the work week profile configuration, not actual scheduled shifts or days off.

Can line managers edit attendance records?

Yes. Line managers have default edit access for attendance records that cannot be restricted by super admins. This is the current system behavior.

How long can I undo a bulk shift deletion?

You have 30 seconds to undo a bulk deletion after confirming the action. After this window, the deletion is permanent.

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
| **Biometric Integration** | System connection that enables employees to check in and out using fingerprint or facial recognition devices linked to their shift schedule. |
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
| **Overtime (T&P Adjustment)** | Additional work hours beyond standard shift times that require special scheduling and compensation through Time and Pay adjustments. |
| **Published Shift** | A finalized shift schedule that has been made visible to employees and is active for check-in tracking and attendance recording. |
| **Schedule Planner** | Tool that enables schedulers to create and assign shifts for multiple employees across date ranges without individual entry. |
| **Shift** | A defined work period with specific start and end times, assigned to an employee for a particular date and office location. |
| **Shift Scheduler** | The user role and interface responsible for creating, publishing, and managing employee work shifts within assigned work centers. |
| **Split Shift** | A work schedule where an employee has two separate shifts on the same day with a break period between them. |
| **Threshold** | The configured time allowance (in minutes) before an employee is marked late or absent after their scheduled shift start time. |
| **Timesheet** | A record of all work hours logged by an employee across their shifts, used for payroll calculation and attendance reporting. |
| **Work Center** | A grouping of employees managed by the same scheduler, sharing common office locations and work timing configurations for shift assignment. |
| **Work Timing** | A predefined schedule template that specifies shift start time, end time, and attendance rules applied when creating employee shifts. |
| **Work Week Profile** | Configuration that defines an employee's standard working days and rest days, used for leave calculations independent of shift schedules. |

</div>

</div>

</div>
