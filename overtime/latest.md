<div class="hero-banner">

# Overtime Management

Automate overtime tracking, calculation, and compensation for accurate payroll processing

</div>

<figure>
<img src="validation/screenshots/overtime-policy-full-interface.png" alt="Overtime Management interface showing policy configuration" />
<figcaption>Overtime Policy configuration interface in Bayzat HR</figcaption>
</figure>

<div class="nav-header">

<span class="nav-icon">📖</span> <span class="nav-title">Quick Navigation</span>

</div>

<div class="nav-grid">

<a href="#feature-overview" class="nav-card"><span class="card-icon">✨</span> <span class="card-label">What is Overtime?</span></a> <a href="#product-foundation" class="nav-card"><span class="card-icon">🏗️</span> <span class="card-label">Product Foundation</span></a> <a href="#user-journey" class="nav-card"><span class="card-icon">🗺️</span> <span class="card-label">User Journey Guide</span></a> <a href="#feature-discovery" class="nav-card"><span class="card-icon">🚀</span> <span class="card-label">How to Access</span></a> <a href="#setup-process" class="nav-card"><span class="card-icon">⚙️</span> <span class="card-label">Setup Process</span></a> <a href="#feature-usage" class="nav-card"><span class="card-icon">📋</span> <span class="card-label">Feature Usage</span></a> <a href="#business-rules" class="nav-card"><span class="card-icon">📏</span> <span class="card-label">Business Rules</span></a>

</div>

<div id="feature-overview" class="section section">

## What is Overtime Management?

### Overview

The Overtime feature enables organizations to systematically track, approve, and compensate employees for hours worked beyond their regular schedule. It provides configurable policies that define how overtime is calculated, requested, and processed through payroll or converted to time off.

### Key Benefits

- Configure flexible overtime policies with custom rate multipliers for different day types
- Schedule overtime in advance with employee acceptance workflow
- Track extra hours automatically with real-time approval and payroll integration
- Support both monetary compensation and time-off-in-lieu options

### Who Uses This Feature?

| User Role | What They Do | Value Proposition |
|----|----|----|
| **HR Administrators** | Configure overtime policies and calculation rules | Define overtime rules that comply with labor law and have them applied automatically—ensuring consistent, compliant calculations without manual oversight |
| **Line Managers** | Schedule overtime, approve employee requests, and review time adjustments | Plan and approve overtime with full visibility into team capacity and costs—rather than discovering budget overruns at month-end |
| **Employees** | View scheduled overtime, request extra hours compensation, and track approval status | See exactly when you're scheduled for overtime and track compensation in real-time—eliminating uncertainty about extra hours worked and owed |
| **Payroll Administrators** | Process approved overtime for payment | Receive pre-approved overtime with accurate calculations ready for payroll—without manual verification or rate lookups |

</div>

<div id="product-foundation" class="section section section-product-foundation">

<div class="section-header">

## Product Foundation Overview

</div>

<div class="section-body">

<div class="subsection">

### How Overtime Fits

Overtime Policies are **configuration templates** that define how extra working hours are calculated and compensated. Policies are assigned to employees and process hours from work timings into payroll or time-off-in-lieu.

<div class="info-box">

**Mental model:** Overtime Policy (rules) → Extra Hours from Work Timing → Approval → Payroll or Time-Off-In-Lieu

</div>

One overtime policy can be assigned to many employees. Changes to a policy affect all future overtime calculations for assigned employees.

</div>

<div class="subsection">

### Key Decisions Before Setup

Answer these questions before configuring overtime:

- **Single or custom rates?** — One multiplier for all hours or different rates for weekdays/weekends/holidays?
- **Compensation type?** — Monetary payment, time-off-in-lieu, or employee choice?
- **Which salary components?** — Which components feed into overtime rate calculation?
- **Approval workflow?** — Who approves overtime requests?

</div>

<div class="subsection">

### Related Features

- **Attendance Module** — Work timings and check-in/out determine overtime eligibility
- **Payroll Module** — Processes approved overtime for monetary compensation
- **Time Off Module** — Enables time-off-in-lieu as alternative to payment
- **Work Timings** — Extra hours calculation feeds from work timing configuration
- **Mobile App** — Employees view, accept, and request overtime

</div>

<div class="subsection">

### Prerequisites & Requirements

| Requirement | Description | Status |
|----|----|----|
| Attendance Module | Must be enabled and configured with work timings | Required |
| Work Timings | At least one work timing schedule configured | Required |
| Payroll Module | Required for monetary overtime compensation | Required |
| Salary Components | Basic Salary component must be defined | Required |
| Work Week Configuration | Defines weekends and working days | Required |
| Time Off Module | Required for time-off-in-lieu option | Optional |

</div>

</div>

</div>

<div id="user-journey" class="section section">

## Complete User Journey Guide

<div class="journey-roadmap">

### End-to-End Journey: Managing Overtime

From policy configuration through approval and payroll processing.

<div class="journey-phases">

<div class="journey-phase">

<div class="phase-marker">

1

</div>

<div class="phase-content">

#### Configure Policy

<div class="nav-path">

Settings → Attendance → Overtime Policy

</div>

<a href="#setup-process" class="phase-link">See setup steps →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

2

</div>

<div class="phase-content">

#### Schedule Overtime

Manager assigns overtime hours in advance to specific employees.

<a href="#feature-usage" class="phase-link">See scheduling steps →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

3

</div>

<div class="phase-content">

#### Approve Requests

Review pending requests and approve for payroll or leave compensation.

<a href="#feature-usage" class="phase-link">See approval steps →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

4

</div>

<div class="phase-content">

#### Process Payment

Approved overtime flows to payroll or time-off-in-lieu automatically.

<a href="#business-rules" class="phase-link">See rules →</a>

</div>

</div>

</div>

</div>

</div>

<div id="feature-discovery" class="section section">

## Feature Discovery

### How to Access

Overtime features are accessed through different interfaces based on user role. Administrators configure policies in Settings, while managers and employees use the Time module.

### Navigation Paths

<figure>
<img src="validation/screenshots/overtime-settings-attendance.png" alt="Overtime settings in Attendance module" />
<figcaption>Accessing Overtime settings through the Attendance module in Settings</figcaption>
</figure>

<div class="step">

<div class="step-number">

A

</div>

<div class="step-content">

#### Overtime Policy Configuration (Admin)

Settings → Attendance → Overtime Policy → Add New or click existing policy to edit

</div>

</div>

<div class="step">

<div class="step-number">

M

</div>

<div class="step-content">

#### Time & Pay Adjustments (Manager)

Time → Employee Attendance → Time and Pay Adjustments → Use tabs to filter by status (Scheduled, Pending, Approved, Processed, Rejected)

</div>

</div>

<div class="step">

<div class="step-number">

E

</div>

<div class="step-content">

#### Employee Self-Service (Mobile App)

Check out of attendance → System prompts for compensation request if extra hours detected → View status in Attendance section

</div>

</div>

</div>

<div id="setup-process" class="section section">

## Setup Process

### Creating an Overtime Policy

Before employees can have overtime tracked, HR administrators must create and configure overtime policies.

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Navigate to Policy Settings

Go to Settings → Attendance → Overtime Policy. Click 'Add New' to create a new policy.

</div>

</div>

<figure>
<img src="validation/screenshots/overtime-policy-create-form.png" alt="Overtime policy creation form" />
<figcaption>Overtime Policy creation form with policy name and behavior configuration options</figcaption>
</figure>

<div class="step">

<div class="step-number">

2

</div>

<div class="step-content">

#### Configure Policy Name and Behavior

Enter a descriptive policy name. Toggle 'Allow employees to request extra hours' to let employees submit overtime requests. Toggle 'Allow managers to see net amount' for manager visibility.

</div>

</div>

<div class="step">

<div class="step-number">

3

</div>

<div class="step-content">

#### Select Rate Calculation Type

Choose between:

- **Single Rate:** One multiplier applies to all overtime hours
- **Custom Rate:** Different multipliers for weekdays, weekends, public holidays, and days off

</div>

</div>

<figure>
<img src="validation/screenshots/05-overtime-rate-calculation-options.png" alt="Overtime rate calculation type options" />
<figcaption>Rate calculation type selection - Single Rate or Custom Rate options</figcaption>
</figure>

<div class="step">

<div class="step-number">

4

</div>

<div class="step-content">

#### Configure Rate Calculation Formula

Set the following parameters:

- **Multiplier:** Rate multiplier (default 1.5, minimum 0.1)
- **Salary Component:** Basic Salary or Basic Salary + Allowances
- **Working Days:** Custom Days (default 30), Actual Days, or Working Days
- **Hours:** Standard working hours per day (default 8)

</div>

</div>

<figure>
<img src="validation/screenshots/overtime-policy-rate-calculation.png" alt="Overtime rate calculation configuration" />
<figcaption>Rate calculation formula configuration with multiplier, salary component, and working days options</figcaption>
</figure>

<div class="step">

<div class="step-number">

5

</div>

<div class="step-content">

#### Assign Employees

Search for employees and move them from 'Excluded' to 'Included' list. Note: Each employee can only be assigned to one overtime policy.

</div>

</div>

<figure>
<img src="validation/screenshots/07-overtime-employee-assignment.png" alt="Employee assignment for overtime policy" />
<figcaption>Employee assignment interface showing included and excluded employee lists</figcaption>
</figure>

<div class="step">

<div class="step-number">

6

</div>

<div class="step-content">

#### Review and Save

Review all policy settings including rate calculations and assigned employees. Click 'Save' to create the policy.

</div>

</div>

<figure>
<img src="validation/screenshots/08-overtime-policy-review-save.png" alt="Policy review and save screen" />
<figcaption>Review screen showing policy summary before saving</figcaption>
</figure>

<div class="info-box">

**Tip:** Test your policy configuration with known scenarios to verify overtime calculations match your expectations before rolling out to all employees.

</div>

</div>

<div id="feature-usage" class="section section">

## Feature Usage

### Common Workflows

<div class="feature-grid">

<div class="feature-card">

#### Schedule Overtime

Managers assign overtime hours in advance. Employees receive notifications and can accept or reject.

</div>

<div class="feature-card">

#### Employee Requests

Employees request compensation for extra hours worked after checking out of attendance.

</div>

<div class="feature-card">

#### Approve/Reject

Managers review pending requests and approve for payroll or leave compensation.

</div>

</div>

### Scheduling Overtime in Advance

1.  Navigate to Time → Employee Attendance → Time and Pay Adjustments
2.  Click 'Scheduled' tab, then 'Schedule Extra Hours' button
3.  Select employee from dropdown
4.  Set date, location, start time, and end time
5.  Choose compensation type: Approve for Payroll or Approve for Leave
6.  Add optional comments
7.  Click 'Schedule' to submit

<figure>
<img src="validation/screenshots/overtime-schedule-dialog.png" alt="Schedule Extra Hours dialog" />
<figcaption>Schedule Extra Hours dialog with employee selection, date, time, and compensation type options</figcaption>
</figure>

<figure>
<img src="validation/screenshots/overtime-scheduled-tab.png" alt="Scheduled overtime entries" />
<figcaption>Scheduled tab showing overtime entries assigned to employees</figcaption>
</figure>

### Approving Overtime Requests

1.  Navigate to Time → Employee Attendance → Time and Pay Adjustments
2.  Click 'Pending' tab to view requests awaiting approval
3.  Review request details (employee, date, duration, impact)
4.  Click 'Approve for Payroll' or 'Approve for Leaves'
5.  Or click 'Reject' with optional comment

<figure>
<img src="validation/screenshots/overtime-time-pay-adjustments.png" alt="Time and Pay Adjustments pending tab" />
<figcaption>Time and Pay Adjustments page showing pending overtime requests awaiting approval</figcaption>
</figure>

<div class="info-box">

**Bulk Actions:** Select multiple entries using checkboxes. A bulk action bar appears at the bottom for approving or rejecting multiple requests at once.

</div>

<figure>
<img src="validation/screenshots/16-bulk-selection-action-bar.png" alt="Bulk selection action bar" />
<figcaption>Bulk action bar with Approve for Payroll, Approve for Leaves, and Reject options</figcaption>
</figure>

### Best Practices

- Configure work timings and work week settings before creating overtime policies
- Assign overtime policies before publishing employee shifts
- Review pending requests regularly to avoid backlogs
- Use bulk approval for efficiency with large volumes
- Document expected calculations for different scenarios

</div>

<div id="business-rules" class="section section">

## Business Rules & Limitations

### Core Business Rules

| Rule | Description | Impact |
|----|----|----|
| One policy per employee | Employees can only be assigned to one overtime policy at a time | Remove from current policy before assigning to new one |
| Policy evaluated at check-in | System evaluates overtime eligibility when employee checks in | Policy assignment order vs shift publication doesn't matter |
| Weekend overtime | All hours on weekends count as overtime for Days in Lieu employees | No comparison to scheduled hours on weekends |
| Salary component options | Only Basic Salary or Basic Salary + All Allowances available | Cannot selectively choose specific allowances |

### System Constraints

- Employees must be assigned to an overtime policy to have extra hours tracked
- Shift employees must have a shift scheduled on the target day for overtime scheduling
- Break time inclusion affects when overtime begins (8.5 hours vs 8 hours)
- Managers without payroll access cannot see overtime amounts unless explicitly enabled

</div>

<div class="section section">

## Troubleshooting & Edge Cases

### Common Issues

| Issue | Cause | Resolution |
|----|----|----|
| Overtime starting at wrong hour | Break time inclusion flag affecting calculations | Check work timing configuration for break inclusion settings |
| Cannot assign employee to policy | Employee already assigned to another policy | Remove from current policy first |
| Missing Employee IDs in reports | Report configuration limitation | Use Looker or external tools to supplement data |
| Formula appears confusing | Visual representation lacks clear grouping | Test calculations to verify accuracy; formula logic is correct |
| Cannot find bulk approve | Feature only visible after selecting items | Select multiple entries using checkboxes first |

### Known Limitations

<div class="warning-box">

**Allowance Selection:** Users cannot selectively include specific allowance components in overtime calculations. The system only allows Basic Salary or Basic Salary + All Allowances.

</div>

<div class="warning-box">

**UAE Labor Law Compliance:** The platform may lack comprehensive flexibility for specific UAE labor law requirements. Manual adjustments outside the system may be required for compliance.

</div>

### Edge Cases

- **Policy assigned after shift publication:** System evaluates at check-in time, so order doesn't affect functionality
- **Work week changes:** May retroactively impact historical overtime calculations
- **Days in Lieu conversion:** Time-off-in-lieu requires active leave policies to be configured

</div>

<div class="section section">

## Support Resources

### Frequently Asked Questions

<div class="faq-accordion">

How is overtime calculated?

<div class="faq-answer">

Overtime is calculated using the formula: (Salary Component / Working Days / Hours) × Multiplier × Extra Hours. The specific values depend on your policy configuration.

</div>

Can employees request overtime compensation?

<div class="faq-answer">

Yes, if the policy has 'Allow employees to request extra hours' enabled. After checking out with extra hours, employees can submit a compensation request through the mobile app.

</div>

What's the difference between Single Rate and Custom Rate?

<div class="faq-answer">

Single Rate applies one multiplier to all overtime hours. Custom Rate allows different multipliers for weekdays, weekends, public holidays, and days off.

</div>

Can I choose specific allowances for overtime calculation?

<div class="faq-answer">

Currently, you can only choose Basic Salary or Basic Salary + All Allowances. Selective allowance inclusion is not supported.

</div>

How do I bulk approve overtime requests?

<div class="faq-answer">

In the Pending tab, select multiple entries using checkboxes. A bulk action bar will appear at the bottom of the screen with Approve and Reject buttons.

</div>

</div>

### Getting Help

- Contact your HR Administrator for policy questions and configuration support
- Bayzat Support Team - Available for technical issues and feature questions
- Knowledge Base - Access additional articles and guides
- In-app Help - Contextual help available within the Bayzat platform

</div>

<div class="section section">

## Glossary of Terms

| Term | Definition |
|----|----|
| **Overtime Policy** | Configuration defining how overtime is calculated and compensated for assigned employees. |
| **Single Rate** | Rate calculation type where one multiplier applies to all overtime hours regardless of day type. |
| **Custom Rate** | Rate calculation type with different multipliers for weekdays, weekends, public holidays, and days off. |
| **Time & Pay Adjustments** | Central interface for viewing and managing overtime entries across different statuses. |
| **Extra Hours** | Hours worked beyond the scheduled work timing, eligible for overtime compensation. |
| **Days in Lieu** | Policy that converts overtime hours to time off credits instead of monetary compensation. |
| **Rate Multiplier** | Factor applied to hourly rate for overtime calculation (e.g., 1.5x for time-and-a-half). |
| **Scheduled Overtime** | Overtime hours assigned by a manager in advance, before the employee works them. |
| **Work Timing** | Configuration defining standard working hours, start/end times, and break duration. |
| **Compensation Type** | How overtime is paid: either through Payroll (monetary) or Leave (time off in lieu). |

</div>

Generated by Bayzat Documentation System

Last updated: 2026-01-13
