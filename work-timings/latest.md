<div class="content-area" role="main" aria-label="User guide content">

<div id="feature-overview" class="section section section-feature-overview">

<div class="section-header">

## What is Work Timings?

</div>

<div class="section-body">

<div class="subsection">

### Overview

Work Timings is the foundational configuration layer within Bayzat's Attendance module that defines when employees are expected to work. It establishes the time boundaries, flexibility parameters, and validation rules that govern daily check-ins, late arrivals, early departures, and overtime calculations across your organization.

The Work Timings configuration screen is accessed through the Attendance settings area. This interface displays all configured work timing schedules in a searchable, paginated table format, allowing administrators to view, create, edit, and delete timing configurations that will be assigned to employees.

<figure class="screenshot-container">
<img src="validation/screenshots/02-work-timings-list-view.png" class="screenshot" alt="01-work-timings-list.png" />
<figcaption>Work Timings configuration list showing all defined schedules with their key parameters including start/end times, late arrival rules, and flexible timing indicators</figcaption>
</figure>

Each row shows the schedule name, start/end times, and key rules (late arrival, early departure, overtime). Use the Edit and Delete icons to manage configurations, or click "Add new" to create one. Search and pagination help navigate large lists.

</div>

<div class="subsection">

### Key Benefits

- Reduce attendance tracking errors by establishing clear, validated time boundaries for employee check-ins and check-outs
- Eliminate manual schedule management by centralizing all timing configurations in a single, searchable interface
- Ensure payroll accuracy by defining precise rules for late arrivals, early departures, and overtime calculations
- Support diverse workforce needs with flexible timing options, overnight shift handling, and half-day configurations
- Maintain compliance by enforcing absent day thresholds and preventing unauthorized early check-ins
- Gain visibility into scheduling complexity with multi-level late arrival tracking and configuration overview

</div>

<div class="strategic-context">

<div class="strategic-header">

### Strategic Context

</div>

<div class="strategic-grid">

<div class="strategic-card">

#### 🎯 What Work Timings Solves

Defines the "when" of employee work - start times, end times, and the rules that determine late arrivals and early departures.

- Replaces manual shift definitions
- Standardizes timing rules across teams
- Enables automated attendance validation

</div>

<div class="strategic-card">

#### 💰 Why It Matters

Work Timings is the foundation that other attendance features depend on - without it, the system cannot determine if someone is late or absent.

- Required before assigning shifts
- Drives overtime calculations
- Controls payroll deduction triggers

</div>

<div class="strategic-card">

#### 🏗️ How It Connects

A configuration layer that defines rules - not a transactional feature. Changes affect future attendance, not historical records.

- Assigned to employees via [Shift Scheduler](https://mashapajfhp.github.io/user-guides/shift-scheduling/v1/shift-scheduling-user-guide.html)
- Referenced by daily attendance reports
- Does not trigger workflows directly

</div>

</div>

</div>

<div class="subsection">

### Who Uses This Feature?

| User Role | What They Do | Value Proposition |
|----|----|----|
| **HR Administrators** | Create and configure work timing schedules, assign them to employees, and update timing rules as organizational policies evolve | Reduce manual schedule coordination and eliminate payroll disputes through centralized, validated timing configurations rather than maintaining separate spreadsheets for each department |
| **Payroll Administrators** | Review work timing configurations to ensure accurate overtime calculations, late arrival deductions, and compliance with labor regulations | Ensure payroll accuracy by validating that timing rules match employment contracts and labor laws, eliminating costly payroll corrections instead of discovering discrepancies during payroll runs |
| **Operations Managers** | Define shift schedules for their teams including overnight shifts, flexible timing, and half-day options to match operational requirements | Align workforce scheduling with business needs by creating timing configurations that support 24/7 operations, flexible work arrangements, and seasonal variations without manual intervention |

</div>

</div>

</div>

<div id="product-foundation" class="section section section-product-foundation">

<div class="section-header">

## Product Foundation Overview

</div>

<div class="section-body">

<div class="subsection">

### Core Concepts

<div class="feature-grid">

<div class="feature-card">

#### Work Timing Schedule

A named configuration that defines the expected start time, end time, and associated rules for a work period. Each schedule can be assigned to multiple employees and serves as the reference point for attendance validation and overtime calculations.

</div>

<div class="feature-card">

#### Flexible Timing

A toggle that allows employees to check in and out within a variable time range rather than fixed start/end times. When enabled, the system displays a "Flexible timing" badge and adjusts validation rules to accommodate schedule variations.

</div>

<div class="feature-card">

#### Late Arrival Threshold

The number of minutes after the scheduled start time that an employee can check in before being marked as late. Supports multi-level configurations (e.g., "1 level") to distinguish between minor delays and significant tardiness.

</div>

<div class="feature-card">

#### Early Departure Rule

The number of minutes before the scheduled end time that an employee can check out without penalty. This setting balances operational needs with employee flexibility.

</div>

<div class="feature-card">

#### Absent Day Trigger

The threshold (in minutes) that determines when a late check-in or missed check-in results in marking the employee as absent for the day. The default value is 300 minutes. Administrators can adjust this threshold based on organizational policy. For example, setting it to 300 minutes means an employee who checks in more than 5 hours after their scheduled start time is marked absent for the day.

</div>

<div class="feature-card">

#### Extra Hours Calculation

The method used to calculate overtime or additional work hours. Three calculation methods are available: (1) "Total hours" — total hours worked more than the scheduled hours, (2) "After work end time" — total hours worked after the scheduled work end time, and (3) "All hours worked" — total hours worked by the employee regardless of schedule. The appropriate method depends on organizational overtime policy.

</div>

<div class="feature-card">

#### Overnight Shift

A schedule that spans midnight, indicated by a special icon in the interface. The system automatically detects when end time is earlier than start time and applies overnight shift logic.

</div>

<div class="feature-card">

#### Half-Day Timing

A configuration option that defines reduced work hours for half-day schedules, commonly used for Fridays, religious observances, or flexible work arrangements.

</div>

</div>

</div>

<div class="subsection">

### Related Features

Work Timings integrates with and supports several other Attendance and HR features:

- **[Shift Scheduling](https://mashapajfhp.github.io/user-guides/shift-scheduling/v1/shift-scheduling-user-guide.html):** Work timings are selected when creating shifts in the Shift Scheduler. Each shift references a work timing template for its start/end times and attendance rules.
- **[Split Shifts](https://mashapajfhp.github.io/user-guides/split-shifts/v1/split-shifts-user-guide.html):** To create split shifts (two shifts per employee per day), you need at least two work timing templates with non-overlapping time ranges configured in the same work center.
- **Employee Profiles:** Work timing schedules are assigned to individual employees or employee groups within their profile settings
- **Attendance Daily Reports:** Daily check-in/check-out records are validated against assigned work timing schedules to determine late arrivals, early departures, and absences
- **Overtime Policies:** Extra hours calculated based on work timing schedules feed into overtime policy calculations for payroll
- **Days In Lieu Policies:** Work timing configurations determine when compensatory time off is earned for working beyond scheduled hours
- **Deductions Policies for Payroll:** Late arrival and early departure thresholds from work timings trigger payroll deductions when policies are configured
- **Work Centers for Shift Scheduling:** Work timings can be associated with specific work centers to support location-based shift management
- **Biometric Data Integration:** Biometric device check-ins are validated against work timing schedules to automate attendance tracking

</div>

<div class="subsection">

### Prerequisites & Requirements

| Requirement | Description | Status |
|----|----|----|
| Attendance Module Access | User must have administrative permissions to access Settings → Attendance configuration area | Required |
| Schedule Definition | Clear understanding of organizational work hours, shift patterns, and timing policies before creating configurations | Required |
| Time Zone Configuration | System time zone must be correctly configured to ensure accurate start/end time calculations, especially for overnight shifts | Required |
| Employee Assignment Plan | Documented mapping of which employees or employee groups will be assigned to each work timing schedule | Recommended |
| Payroll Policy Alignment | Work timing rules (late arrival, early departure, overtime) must align with existing payroll deduction and overtime policies | Recommended |
| Biometric Device Integration | If using biometric check-ins, devices must be configured and connected before work timings can validate automated attendance | Optional |

<div class="info-box">

**Known Gap:** The current interface lacks a consolidated accordion view for quickly reviewing all work timing configurations. Administrators must navigate the paginated table to understand the full scope of timing schedules. (Reference: AV-7713)

</div>

</div>

</div>

</div>

<div id="user-journey" class="section section section-user-journey">

<div class="section-header">

## Complete User Journey Guide

</div>

<div class="section-body">

<div class="journey-roadmap">

Configure attendance schedules from access through ongoing management.

<div class="journey-grid">

<div class="journey-step">

<div class="step-number">

1

</div>

#### Access Work Timings

<div class="nav-path">

Settings → Attendance → Work Timings

</div>

<a href="#feature-entry-points" class="phase-link">See navigation →</a>

</div>

<div class="journey-step">

<div class="step-number">

2

</div>

#### Create Work Timing

<div class="nav-path">

Add new → Configure rules

</div>

<a href="#core-tasks" class="phase-link">See create steps →</a>

</div>

<div class="journey-step">

<div class="step-number">

3

</div>

#### View & Verify

<div class="nav-path">

Click Edit icon → Review details

</div>

<a href="#core-tasks" class="phase-link">See view steps →</a>

</div>

<div class="journey-step">

<div class="step-number">

4

</div>

#### Edit or Delete

<div class="nav-path">

Update settings → Save changes

</div>

<a href="#core-tasks" class="phase-link">See manage steps →</a>

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

### How to Access Work Timings

Work Timings is accessed through the Attendance settings area, which consolidates all attendance-related configurations in a single location. This centralized approach ensures administrators can manage work schedules alongside related features like overtime policies, deductions, and biometric integrations.

#### Primary Navigation Path

<div class="nav-path">

Settings → Attendance → Work Timings section

</div>

The Work Timings section appears within a multi-section settings page dedicated to attendance management. It is positioned as the third section in a vertical accordion layout, following General and Multiple Visits sections, and preceding Overtime Policies and other attendance configurations.

</div>

<div class="subsection">

### Navigation Structure & Context

Understanding the broader navigation context helps administrators locate Work Timings efficiently and recognize its relationship to other attendance features. The Attendance settings page organizes related configurations into distinct sections, each expandable to reveal detailed controls.

Before accessing Work Timings, administrators navigate through the main settings menu. The Settings option typically appears in the primary navigation bar or side menu, depending on the Bayzat platform interface configuration. Clicking Settings reveals various organizational settings categories, with Attendance as one of the primary options.

<figure class="screenshot-container">
<img src="validation/screenshots/01-attendance-settings-page.png" class="screenshot" alt="02-attendance-settings-navigation.png" />
<figcaption>Attendance settings page showing expandable Work Timings section within the broader attendance configuration hierarchy</figcaption>
</figure>

The Attendance settings page displays a vertical list of configuration sections. Each section header is clickable, expanding to reveal the relevant configuration interface. The Work Timings section, when expanded, displays the full table of work timing configurations along with the Add new button and search functionality.

This accordion structure allows administrators to work on multiple attendance configurations during a single session without losing context. For example, an administrator might configure work timings, then immediately expand the Overtime Policies section to define how extra hours are compensated, all within the same settings page.

</div>

</div>

</div>

<div id="initial-setup" class="section section section-initial-setup">

<div class="section-header">

## Setup Process

</div>

<div class="section-body">

<div class="subsection">

### First-Time Configuration Overview

Setting up Work Timings for the first time involves defining the organizational work schedules that will govern employee attendance tracking. This setup process establishes the foundation for accurate time tracking, policy enforcement, and payroll integration. Administrators should complete this configuration before assigning employees to shifts or enabling attendance tracking features.

The initial setup typically progresses through three phases: planning organizational schedules, creating core work timing configurations, and verifying settings before employee assignment. Each phase builds on the previous one, ensuring comprehensive coverage of organizational scheduling needs.

</div>

</div>

</div>

<div id="core-tasks" class="section section section-core-tasks">

<div class="section-header">

## Key Tasks

</div>

<div class="section-body">

<div class="subsection">

### Task: Configure Work Timing Schedules

Administrators need to define and manage work timing configurations that control employee attendance tracking, including start times, end times, flexible timing options, and attendance calculation rules. This task is fundamental to establishing accurate attendance monitoring and payroll integration.

#### Subtask: Create a New Work Timing Configuration

Creating a work timing configuration establishes the foundational schedule parameters that will be assigned to employees. This includes defining core working hours, flexibility options, and attendance calculation rules.

To create a new work timing, navigate to the Work Timings section within Attendance settings. The interface displays a table listing all existing configurations with columns showing Name, Start Time, End Time, Extra Hours calculation method, Late Arrival tolerance, Early Departure threshold, Absent After duration, and Half-Day timing. At the bottom of this table, you'll find the primary action button to initiate configuration creation.

<figure class="screenshot-container">
<img src="validation/screenshots/02-work-timings-list-view.png" class="screenshot" alt="01-work-timings-list.png" />
<figcaption>Work Timings list view showing existing configurations with search, pagination, and Add new button</figcaption>
</figure>

When you click the "Add new" button, a modal dialog opens presenting the work timing creation form. The form contains all configuration fields required to define a complete work schedule. Key sections include the timing name field at the top, a Flexible timing toggle switch, Start time and End time selectors (defaulting to 09:00 AM and 06:00 PM), and a Half-day toggle. Below these core fields, you'll find attendance calculation parameters: Late arrival tolerance, Early departure threshold, and Absent day threshold (enabled by default). Additional options control break allowances, out-of-office check-ins, and check-in restrictions before work start time. At the bottom, the Extra Hours calculation method dropdown allows selection between calculation approaches.

<figure class="screenshot-container">
<img src="validation/screenshots/04-work-timing-create-form.png" class="screenshot" alt="04-work-timing-create-form.png" />
<figcaption>Work timing creation form with default values and all configuration options</figcaption>
</figure>

After entering the configuration details, clicking the "Save" button creates the work timing record. The system validates all required fields and time logic (ensuring end time is after start time). Once saved, the new configuration appears in the work timings table and becomes available for assignment to employees. The configuration immediately affects how attendance is tracked for any employees assigned to this timing, including check-in/check-out validation, late arrival detection, and extra hours calculation.

#### Subtask: View Work Timing Configuration Details

Viewing existing work timing details allows administrators to review all parameters of a configuration without making changes. This is essential for verification, auditing, and understanding how attendance is being calculated for employees assigned to specific timings.

From the work timings table, locate the configuration you want to review. Each row in the table displays summary information including the timing name, start and end times, and key thresholds. Special indicators appear for configurations with flexible timing (shown as a badge) or overnight shifts (indicated by an icon). The table supports searching by name using the search textbox at the top, and pagination controls allow navigation through multiple pages of configurations.

To view full details, click the Edit button (pencil icon) in the actions column for the desired configuration. This opens the same modal dialog used for editing, but serves as a detailed view of all settings. The form displays the complete configuration including the timing name, flexible timing status, precise start and end times, half-day settings, late arrival tolerance, early departure threshold, absent day threshold (default: 300 minutes), break allowances, check-in restrictions, and the selected extra hours calculation method (e.g., "Total hours").

<figure class="screenshot-container">
<img src="validation/screenshots/03-work-timing-edit-form.png" class="screenshot" alt="03-work-timing-edit-form.png" />
<figcaption>Work timing detail view showing all configuration parameters for a timing named "1 hour shift"</figcaption>
</figure>

The detail view provides complete visibility into how attendance will be calculated for employees on this timing. Administrators can verify that thresholds align with company policy, confirm that flexible timing is enabled or disabled as intended, and understand the extra hours calculation approach. This view does not require any changes to be made; you can simply review the information and close the dialog. The configuration remains unchanged and continues to govern attendance tracking for assigned employees.

#### Subtask: Update an Existing Work Timing Configuration

Updating work timing configurations is necessary when business requirements change, such as adjusting working hours, modifying attendance thresholds, or enabling flexible timing options. Updates affect how attendance is calculated going forward for all employees assigned to the timing.

To update a configuration, locate it in the work timings table and click the Edit button (pencil icon) in the actions column. The edit form opens as a modal dialog, pre-populated with all current values. All fields are editable, allowing you to modify the timing name, toggle flexible timing on or off, adjust start and end times using the time selectors, enable or disable half-day timing, and change attendance calculation parameters including late arrival tolerance, early departure threshold, and absent day threshold. You can also modify break allowances, out-of-office check-in permissions, check-in time restrictions, and the extra hours calculation method.

After making the necessary changes, click the "Update" button at the bottom of the form. The system validates the modified configuration, ensuring time logic is sound and required fields are completed. Once updated, the changes take effect immediately for future attendance tracking. Employees assigned to this timing will have their attendance calculated using the new parameters starting from the next check-in event. Historical attendance records remain unchanged; only future attendance events use the updated configuration. If the timing is assigned to employees for future dates, those assignments will use the updated parameters when those dates arrive.

#### Subtask: Delete a Work Timing Configuration

Deleting work timing configurations is necessary when a schedule is no longer used or was created in error. This action requires careful consideration as it affects employees assigned to the timing for future dates.

To delete a configuration, locate it in the work timings table and click the Delete button (trash icon) in the actions column. The system immediately displays a confirmation dialog to prevent accidental deletion. This dialog contains a warning message explaining the impact of deletion: "Are you sure you want to delete this work timing? Employees assigned to this work timing for the future will not be able to check-in." The dialog provides two options: "Cancel" to abort the deletion, or "Delete" to proceed with removing the configuration.

<figure class="screenshot-container">
<img src="validation/screenshots/05-crud-delete-confirmation.png" class="screenshot" alt="05-crud-delete-confirmation.png" />
<figcaption>Delete confirmation dialog warning about impact on future employee assignments</figcaption>
</figure>

If you click "Delete", the system permanently removes the work timing configuration from the platform. The configuration immediately disappears from the work timings table and is no longer available for assignment to employees. Critically, any employees who were assigned to this timing for future dates will lose their work timing assignment, preventing them from checking in until a new timing is assigned. Historical attendance records for employees who previously used this timing remain intact and unchanged. The deletion cannot be undone; if the configuration is needed again, it must be recreated manually with all parameters re-entered. Before deleting, administrators should verify that no active employees are currently assigned to the timing or reassign them to alternative configurations.

#### Subtask: Configure Work Timings for Split Shifts

To schedule [split shifts](https://mashapajfhp.github.io/user-guides/split-shifts/v1/split-shifts-user-guide.html) (two work periods in one day for the same employee), you need at least two work timing templates with **non-overlapping time ranges**. The [Shift Scheduler](https://mashapajfhp.github.io/user-guides/shift-scheduling/v1/shift-scheduling-user-guide.html) validates that shift times do not overlap when creating a second shift on the same day.

**Example configuration for split shifts:**

| Work Timing Name | Start Time | End Time | Purpose |
|----|----|----|----|
| Office | 07:00 AM | 01:00 PM | Morning shift for split shift employees |
| 2PM - 6PM | 02:00 PM | 06:00 PM | Afternoon shift for split shift employees |

**Steps to configure:**

1. Navigate to Settings → Attendance → Work Timings
2. Click **Add new** to create the first work timing (e.g., morning period)
3. Set the start time and end time for the first period
4. Configure attendance rules (late arrival, early departure, absent day threshold) as needed
5. Click **Save**
6. Repeat steps 2-5 to create the second work timing (e.g., afternoon period)
7. Ensure time ranges do not overlap — the gap between the end of the first timing and the start of the second timing becomes the employee's break
8. Both work timings must be available in the same work center for schedulers to create split shifts

<div class="info-box">

**Split Shift Deduction Halving:** When an employee has 2 shifts on the same day, fixed deduction amounts (e.g., late arrival percentage) are automatically divided by 2 to prevent duplicate penalties. This is handled by the [Shift Scheduler](https://mashapajfhp.github.io/user-guides/shift-scheduling/v1/shift-scheduling-user-guide.html), not by the work timing configuration itself.

</div>

</div>

</div>

</div>

<div id="workflow-integration" class="section section section-workflow-integration">

<div class="section-header">

## Workflow Integration

</div>

<div class="section-body">

<div class="info-box">

**No Workflow Integration Available:** Work Timings does not currently integrate with Bayzat Workflows. Work timing configurations are foundational settings that define attendance tracking parameters rather than events that trigger automated workflows.

</div>

While work timing configuration changes (create, update, delete) do not trigger workflows, the Bayzat Attendance module does support workflow triggers for attendance events that occur within the context of configured work timings. Available attendance-related workflow triggers include:

<figure class="screenshot-container">
<img src="validation/screenshots/06-workflows-list.png" class="screenshot" alt="Workflows list" />
<figcaption>Bayzat Workflows interface showing available automation options</figcaption>
</figure>

- **Mark as absent button is clicked on attendance daily report:** Triggers when an administrator manually marks an employee absent
- **Employee shift is deleted:** Triggers when a scheduled shift assignment is removed
- **Employee shift is updated:** Triggers when shift details are modified
- **Employee shift is created:** Triggers when a new shift is assigned to an employee
- **Employees are marked as absent for past day:** Triggers when bulk absence marking occurs for historical dates

These triggers operate on shift assignments and attendance events, which are downstream from work timing configurations. Work timings define the rules and parameters, while shifts and attendance events are the actual instances where those rules are applied.

<figure class="screenshot-container">
<img src="validation/screenshots/07-workflow-attendance-triggers.png" class="screenshot" alt="07-workflow-attendance-triggers.png" />
<figcaption>Bayzat Workflows showing available Attendance app triggers for shift and absence events</figcaption>
</figure>

The workflow system was searched for work timing-specific triggers using the event search functionality, with no results found for "work timing" as a triggerable event. This confirms that work timing configuration management is a setup activity rather than an operational event suitable for workflow automation.

<figure class="screenshot-container">
<img src="validation/screenshots/08-workflow-search-work-timing-no-results.png" class="screenshot" alt="08-workflow-search-work-timing-no-results.png" />
<figcaption>Workflow event search showing no results for work timing triggers</figcaption>
</figure>

</div>

</div>

<div id="business-rules-limitations" class="section section section-business-rules-limitations">

<div class="section-header">

## Business Rules & Limitations

</div>

<div class="section-body">

<div class="subsection">

### Configuration Rules

Work Timings operate under specific configuration rules that govern how attendance is calculated and enforced across your organization. Understanding these rules ensures accurate setup and prevents configuration conflicts.

#### Time Configuration Rules

- **Default Time Range:** New work timings default to 09:00 AM - 06:00 PM, representing a standard 9-hour workday including breaks
- **Overnight Shifts:** The system supports overnight shift configurations that span across midnight, indicated by a special icon in the table view
- **Half-Day Timing:** Optional half-day configuration allows organizations to define reduced working hours for specific scenarios
- **Flexible Timing:** When enabled, flexible timing completely disables Late Arrival and Early Departure violations (shown as "N/A" in the work timings table). Only the Absent Day threshold remains active. Employees see a "Flexible timing" badge on their schedule

#### Attendance Calculation Rules

- **Absent Day Threshold:** Default threshold is 300 minutes - employees who check in more than 300 minutes after start time are marked absent for the day
- **Extra Hours Calculation:** Three methods available: Total hours (hours exceeding scheduled work time), After work end time (hours worked past scheduled end), and All hours worked (all hours the employee worked)
- **Late Arrival Levels:** Multi-level late arrival system (e.g., '1 level') allows graduated consequences for tardiness
- **Early Departure Tracking:** System tracks when employees leave before designated end time

#### Check-In Rules

- **Pre-Work Check-In Control:** Optional setting to disallow check-ins before work start time prevents time manipulation
- **Out of Office Check-Ins:** Can be allowed or restricted based on organizational security and location policies
- **Break Allowance:** Configurable setting determines whether breaks are tracked separately from total work hours
- **Multiple Visits:** Related to Multiple Visits section in Attendance settings, affects how multiple check-ins per day are handled

</div>

#### Assignment Rules

- **Future Date Assignments:** Work timings can be assigned to employees for future effective dates through the [Shift Scheduler](https://mashapajfhp.github.io/user-guides/shift-scheduling/v1/shift-scheduling-user-guide.html). Navigate to Time → Shift Scheduler to schedule shifts using different work timings for specific dates
- **Assignment Validation:** System validates that assigned work timing exists and is active before allowing check-in
- **Bulk Assignment:** Multiple employees can be assigned the same work timing configuration

</div>

#### Table View Constraints

- **Pagination:** Work timings are displayed in paginated table format (5 items per page by default), requiring navigation across multiple pages for organizations with many configurations
- **Column Information:** Table view shows summary information only - full configuration details require opening edit form
- **Search Functionality:** Search is limited to work timing name only, not configuration parameters
- **Tooltip Information:** Info icons provide tooltips for Extra Hours and Absent After columns, but not all configuration fields have inline help

</div>

<div id="troubleshooting-edge-cases" class="section section section-troubleshooting-edge-cases">

<div class="section-header">

## Troubleshooting & Edge Cases

</div>

<div class="section-body">

<div class="subsection">

### Common Issues

This section addresses frequently encountered issues when configuring and managing work timings, along with their causes and resolutions.

| Issue | Cause | Resolution |
|----|----|----|
| Employees cannot check in after work timing deletion | Work timing was deleted while still assigned to employees for future dates | Before deleting, verify no future assignments exist. If deletion already occurred, create a new work timing with similar configuration and reassign affected employees immediately |
| Flexible timing badge not appearing | Flexible timing toggle was not saved, or page requires refresh | Open edit form and verify Flexible timing toggle is enabled. Click Update to save. Refresh the Work Timings table view to see badge |
| Overnight shift not calculating correctly | End time is before start time but overnight shift indicator is not recognized | Verify end time is set to a time that would occur the next day (e.g., Start: 11:00 PM, End: 07:00 AM). System should automatically detect and display overnight shift icon |
| Late arrival not being tracked | Late arrival configuration is not set, or absent day threshold is too lenient | Open work timing edit form. Configure late arrival levels and set appropriate absent day threshold (default 300 minutes). Ensure 'Absent day' toggle is enabled |
| Extra hours not calculating as expected | Extra hours calculation method is set incorrectly | Review Extra Hours calculation method in edit form. Choose between 'Total hours' (hours exceeding schedule), 'After work end time' (hours past scheduled end), or 'All hours worked' (total hours the employee worked). Verify method aligns with organizational overtime policy |
| Cannot find specific work timing in table | Work timing exists but is on different page, or search is case-sensitive | Use search by name textbox at top of table. Try different case variations. Check pagination - there may be 16+ pages depending on total configurations |
| Half-day timing not available for selection | Half-day toggle was not enabled during work timing creation/update | Edit the work timing configuration and enable the Half-day toggle. Update and save changes |
| Employees checking in before work start time | 'Disallow check-in before work start time' is not enabled | Edit work timing and enable 'Disallow check-in before work start time' option. This prevents early check-ins that could affect attendance calculations |

</div>

</div>

</div>

<div id="support-resources" class="section section section-support-resources">

<div class="section-header">

## Support Resources

</div>

<div class="section-body">

<div class="subsection">

### Frequently Asked Questions

<div class="faq-accordion">

How many work timing configurations can I create?

<div class="faq-answer">

The system supports multiple work timing configurations (current production environment shows 78 total items across 16 pages). There is no documented hard limit. Create as many configurations as needed to support your organizational structure, shifts, and policies. Use clear naming conventions to maintain organization as your configuration library grows.

</div>

Can I assign different work timings to the same employee for different time periods?

<div class="faq-answer">

Yes, but this is done through the [Shift Scheduler](https://mashapajfhp.github.io/user-guides/shift-scheduling/v1/shift-scheduling-user-guide.html), not through the Work Timings configuration screen itself. Work timings are templates that define the rules — assigning them to employees for specific dates is handled by creating shifts in the Shift Scheduler. To assign a different work timing for a future period: navigate to Time → Shift Scheduler, select the employee, and schedule a shift using the desired work timing for the target dates. The system will use the appropriate work timing based on the scheduled shift for each attendance date. This enables seasonal schedules, temporary assignments, and planned shift rotations.

</div>

What happens to attendance data if I modify a work timing?

<div class="faq-answer">

Modifying a work timing affects how future attendance is calculated but does not retroactively change historical attendance records. Past attendance remains calculated according to the work timing rules that were active at the time. This preserves audit trail integrity. If you need to recalculate past attendance, you must do so manually or contact support.

</div>

How does flexible timing affect attendance violations?

<div class="faq-answer">

When flexible timing is enabled, Late Arrival and Early Departure violations are completely disabled — they do not apply. The system greys out these options in the configuration form with the message "Not applicable for the flexible work timing." The only attendance violation that remains active is the **Absent Day** threshold. This means an employee on flexible timing can check in and out at any time within the office hours limit without triggering late arrival or early departure penalties. However, if they check in later than the configured absent day threshold (e.g., more than 300 minutes after the start of their office hours window), they will still be marked as absent for the day. In the work timings table, flexible timing entries show "N/A" for both Late Arrival and Early Departure columns, and employees see a "Flexible timing" badge on their schedule.

</div>

Can I recover a deleted work timing?

<div class="faq-answer">

No. Work timing deletion is permanent and cannot be undone. This is why the system displays a confirmation dialog with explicit warning about impact on future employee check-ins. Before deleting, document the configuration details or take a screenshot. If you accidentally delete a work timing, you must recreate it manually with the same settings and reassign affected employees.

</div>

Why don't work timing changes trigger workflows?

<div class="faq-answer">

Work timings are configuration settings, not operational events. Bayzat Workflows are designed to automate responses to employee actions and shift events (shift created, updated, deleted, absence marked). Configuration changes are administrative actions that require human decision-making. However, the attendance events that result from work timing rules (such as marking employees absent) can trigger workflows.

</div>

How do I configure work timings for split shifts?

<div class="faq-answer">

To schedule [split shifts](https://mashapajfhp.github.io/user-guides/split-shifts/v1/split-shifts-user-guide.html) (two separate work periods in one day), you need at least **two work timing templates with non-overlapping time ranges**. For example:

- **Morning work timing:** "Office" with Start 07:00 AM, End 01:00 PM
- **Afternoon work timing:** "2PM - 6PM" with Start 02:00 PM, End 06:00 PM

Create each work timing using the standard creation process (Settings → Attendance → Work Timings → Add new). Ensure the time ranges do not overlap — the [Shift Scheduler](https://mashapajfhp.github.io/user-guides/shift-scheduling/v1/shift-scheduling-user-guide.html) will reject overlapping shifts. Both work timings must be available in the same work center. Once configured, schedulers can assign two shifts to the same employee on the same day in the Shift Scheduler.

</div>

What's the difference between 'Absent day' threshold and late arrival levels?

<div class="faq-answer">

'Absent day' threshold (default 300 minutes) determines when an employee is marked entirely absent for the day — they checked in too late to receive any attendance credit. For example, with a 300-minute threshold, an employee who checks in more than 5 hours after their scheduled start time is marked absent. Administrators can adjust this value based on company policy (some organizations set it lower, such as 10-15 minutes, for stricter enforcement). Late arrival levels track tardiness that doesn't result in full absence — the employee is present but late. You can configure multiple late arrival levels (e.g., '1 level') to create graduated consequences. Both settings work together to enforce punctuality policies.

</div>

Why is the system showing extra hours for employees who worked their normal shift?

<div class="faq-answer">

This is typically caused by a workweek mismatch. Extra hours are calculated when an employee works beyond their assigned shift, **including on weekends and public holidays**. If an employee's workweek is set to "Default" (Sunday to Friday with Friday/Saturday as weekends), any shifts assigned on those weekend days will count as extra hours — even if it's their normal working day. To fix this: go to Settings → Company → Workweek and verify that each employee's workweek correctly reflects their actual working days. Note that workweek changes only apply from the point of change onwards, not retroactively.

</div>

Why can't an employee submit a break request?

<div class="faq-answer">

The ability to submit a break depends on the work timing settings. If breaks are not enabled in the employee's assigned work timing, the break option will not appear. To enable: go to Settings → Attendance → Work Timings → select the work timing → click Edit (pencil icon) → toggle on "Allow breaks" and set the duration → Save. **Important:** Attendance records created when "Allow Breaks" was disabled cannot be updated with breaks retroactively. Only future attendance records will include the break option.

</div>

An employee was marked absent even though they checked in. Why?

<div class="faq-answer">

This is likely caused by the Absent Day threshold in the work timing configuration. If the threshold is set to a low value (e.g., 0 minutes), the system will mark an employee as absent if they check in even one minute after the scheduled start time. Check the employee's assigned work timing: go to Settings → Attendance → Work Timings → find the relevant timing → look at the "Absent after" column. Consider adjusting the threshold to a more appropriate value (e.g., 15-30 minutes) to allow a reasonable tolerance for check-in delays.

</div>

How do overnight shifts work?

<div class="faq-answer">

When you create a work timing where the end time is earlier than the start time (e.g., 11:00 PM to 7:00 AM), the system automatically detects this as an overnight shift and displays a moon icon indicator. The system treats this as a single continuous shift spanning midnight. Employees should check in at the scheduled start time (before midnight). If the shift crosses midnight and the employee checks out after midnight, the attendance is recorded under the day the shift started. In the work timings table, overnight shifts are marked with a special "Overnight" icon next to the working hours.

</div>

What does the 'Out of office check-in' setting do?

<div class="faq-answer">

When "Allow out of office check-ins" is enabled in a work timing, employees assigned to that timing can check in from any location — not just the designated office location. When disabled, the employee must be at the exact office location (validated by geo-fencing) to check in. If you notice employees checking in from incorrect locations, verify that this setting is disabled in their assigned work timing. Navigate to Settings → Attendance → Work Timings → Edit the relevant timing → check the "Allow out of office check-ins" toggle.

</div>

What is the difference between the three Extra Hours calculation methods?

<div class="faq-answer">

The Extra Hours section in work timing configuration offers three methods:

- **Total hours:** Calculates the total hours worked beyond the scheduled working hours. For example, if an employee is scheduled for 8 hours and works 9.5 hours, extra hours = 1.5 hours.
- **After work end time:** Counts only the hours worked after the scheduled work end time. For example, if work ends at 6:00 PM and the employee checks out at 7:30 PM, extra hours = 1.5 hours. Time before the scheduled start is not counted.
- **All hours worked:** Records the total hours the employee worked, regardless of the schedule. This is typically used for employees without a fixed schedule where all work time needs tracking.

The selected method affects how overtime and extra hours appear in attendance reports and feed into overtime policies for payroll.

</div>

</div>

</div>

</div>

</div>

<div id="glossary" class="section section section-glossary">

<div class="section-header">

## Glossary of Terms

</div>

<div class="section-body">

| Term | Definition |
|----|----|
| **Absent Day Threshold** | The maximum number of minutes an employee can check in late before being marked absent for the entire day. Default is 300 minutes. Administrators can adjust this based on company policy. If an employee checks in more than this threshold after the work start time, they receive no attendance credit for that day. |
| **Approval Flow** | A sequential process requiring one or more designated approvers to review and authorize a request before it takes effect. Work Timings do not use approval flows - configuration changes are immediate. |
| **Bayzat Workflows** | Automation feature that triggers actions based on specific events in the Bayzat platform. Work timing configuration changes do not trigger workflows, but attendance events resulting from work timing rules can trigger workflows. |
| **Check-In** | The act of an employee recording their arrival at work, typically through biometric device, mobile app, or web portal. Check-in time is compared against work timing start time to determine punctuality and attendance status. |
| **Check-Out** | The act of an employee recording their departure from work. Check-out time is compared against work timing end time to calculate total hours worked and detect early departures. |
| **CRUD Operations** | Create, Read, Update, Delete - the four basic operations for managing data. Work Timings support all CRUD operations through the Settings → Attendance interface. |
| **Early Departure** | When an employee checks out before the designated work end time. Work timing configuration can track early departures and apply policy rules or deductions. |
| **Extra Hours** | Time worked beyond the standard work timing schedule. Three calculation methods are available: "Total hours" (hours exceeding scheduled work time), "After work end time" (hours worked past the scheduled end time), and "All hours worked" (all hours the employee worked). The method is selected per work timing configuration. Extra hours may qualify for overtime pay depending on policy configuration. |
| **Flexible Timing** | A work timing configuration that allows employees variable start and end times within defined boundaries. When enabled, creates a special badge display and completely disables Late Arrival and Early Departure violations (shown as "N/A" in the table). Only the Absent Day threshold remains active for flexible timing schedules. |
| **Half-Day Timing** | A reduced work schedule option within a work timing configuration, typically representing approximately half the standard daily hours. Used for partial work days, religious observances, or special schedules. |
| **Late Arrival** | When an employee checks in after the designated work start time but within the absent day threshold. Can be tracked in multiple levels (e.g., '1 level') to create graduated consequences for tardiness. |
| **Overnight Shift** | A work timing where the end time occurs on the calendar day following the start time (e.g., 11:00 PM to 7:00 AM). System automatically detects overnight shifts when end time is before start time and displays a special indicator icon. |
| **Out of Office Check-In** | The ability for employees to record attendance from locations outside the designated workplace. Can be allowed or restricted in work timing configuration based on organizational security and remote work policies. |
| **Primary Entity** | The main data object being managed by a feature. For Work Timings, the primary entity is 'item' (each work timing configuration is an item in the system). |
| **Shift** | A specific assignment of a work timing to an employee for a particular date or date range. Shifts connect the work timing configuration (the rules) to actual employee schedules (the assignments). |
| **Work Center** | A physical location or department where employees work. Related to shift scheduling and can be configured in the Attendance settings alongside work timings. |
| **Work Timing** | A configuration that defines the expected working hours, attendance rules, and calculation methods for a group of employees. Includes start time, end time, break allowances, late arrival rules, and extra hours calculation. |

</div>

</div>

</div>
