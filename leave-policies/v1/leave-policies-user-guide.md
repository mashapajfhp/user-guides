<div class="hero-banner">

# leave-policies

Replace manual leave tracking with automated policies that calculate balances, enforce rules, and sync deductions to payroll

</div>

<div class="nav-header">

<span class="nav-icon">📖</span> <span class="nav-title">Quick Navigation</span>

</div>

<div class="nav-grid">

<a href="#feature-overview" class="nav-card"><span class="card-icon">✨</span><span class="card-label">What is leave-policies?</span></a> <a href="#product-foundation" class="nav-card"><span class="card-icon">🏗️</span><span class="card-label">Product Foundation Overview</span></a> <a href="#user-journey" class="nav-card"><span class="card-icon">🗺️</span><span class="card-label">Complete User Journey Guide</span></a> <a href="#feature-entry-points" class="nav-card"><span class="card-icon">🚀</span><span class="card-label">Feature Discovery</span></a> <a href="#initial-setup" class="nav-card"><span class="card-icon">⚙️</span><span class="card-label">Initial Setup</span></a> <a href="#core-tasks" class="nav-card"><span class="card-icon">📋</span><span class="card-label">Key Tasks</span></a> <a href="#workflow-integration" class="nav-card"><span class="card-icon">🔄</span><span class="card-label">Workflow Integration</span></a> <a href="#business-rules-limitations" class="nav-card"><span class="card-icon">📏</span><span class="card-label">Business Rules & Limitations</span></a> <a href="#troubleshooting-edge-cases" class="nav-card"><span class="card-icon">🔧</span><span class="card-label">Troubleshooting & Edge Cases</span></a> <a href="#support-resources" class="nav-card"><span class="card-icon">💬</span><span class="card-label">FAQs & Support</span></a> <a href="#glossary" class="nav-card"><span class="card-icon">📚</span><span class="card-label">Glossary</span></a>

</div>

<div id="feature-overview" class="section section-feature-overview">

<div class="section-header">

## What is leave-policies?

</div>

<div class="section-body">

<div class="subsection">

### Overview

Leave Policies define how employees accrue, request, and use time off. Access them at Settings → Leaves → Leave Policies to create templates for annual leave, sick leave, unpaid leave, and custom leave types.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/leave-policies/v1/validation/screenshots/exploration-02-leave-policies-table.png" alt="Leave Policies table" class="screenshot" loading="lazy">
<figcaption>Leave Policies configuration screen showing policy list with accrual settings and employee assignments</figcaption>
</figure>

Create policies from scratch or templates, configure accrual rates and pay rules, then assign to employees individually or in bulk.

</div>

<div class="subsection">

### Key Benefits

- Automate monthly accrual calculations based on tenure, probation status, or custom conditions
- Enforce working day vs calendar day rules, carryover limits, and negative balance restrictions
- Link unpaid leave policies to payroll for automatic salary deductions
- Configure conditional pay rates (fully paid, partially paid, unpaid) based on leave days taken
- Track leave balances, usage history, and encashment eligibility in real time
- Pause accrual during extended unpaid leave to comply with labor law

</div>

<div class="strategic-context">

<div class="strategic-header">

### Strategic Context

</div>

<div class="strategic-grid">

<div class="strategic-card">

#### 🎯 What leave-policies Solves

Eliminates manual spreadsheet tracking of leave balances, accrual calculations, and payroll deduction reconciliation.

- Replaces error-prone manual calculations with automated accrual formulas
- Standardizes leave rules across departments and employee types
- Enables self-service leave requests with real-time balance visibility

</div>

<div class="strategic-card">

#### 💰 Why It Matters

Leave policies are foundational configuration templates that control time-off entitlements, payroll deductions, and compliance reporting.

- Required before employees can submit leave requests
- Drives automatic payroll deductions for unpaid leave
- Controls end-of-service leave encashment calculations

</div>

<div class="strategic-card">

#### 🏗️ How It Connects

Configuration template assigned to employees that triggers transactional leave requests and payroll adjustments.

- Assigned via employee profiles or bulk upload
- Referenced by leave requests, approval workflows, and payroll deductions
- One policy can affect hundreds of employees; changes apply to future requests only

</div>

</div>

</div>

<div class="subsection">

### Who Uses This Feature?

| User Role | What They Do | Value Proposition |
|----|----|----|
| **HR Administrators** | Create and configure leave policies, set accrual rules, assign policies to employees, and manage exceptions. | Automate leave calculations and eliminate monthly spreadsheet updates for hundreds of employees. |
| **Payroll Managers** | Configure unpaid leave deduction settings, review leave salary policies, and verify payroll integration. | Automatic payroll deductions replace manual data entry and reduce salary calculation errors. |
| **Line Managers** | View team leave balances, approve requests within policy limits, and track usage patterns. | Real-time balance visibility prevents over-allocation and scheduling conflicts. |
| **Employees** | View assigned policies, check available balances, and submit leave requests within policy rules. | Self-service access to leave balances and request status replaces email inquiries to HR. |

</div>

</div>

</div>

<div id="product-foundation" class="section section-product-foundation">

<div class="section-header">

## Product Foundation Overview

</div>

<div class="section-body">

<div class="subsection">

### How Leave Policies Fits

Leave policies are configuration templates that define how employees accrue, request, and consume time off. They sit in Settings and act as reusable rules applied to employee profiles.

<div class="info-box">

**Mental model:** Leave Policy (template) → Assigned to Employees → Governs leave requests → Impacts payroll and attendance tracking

</div>

One leave policy can affect hundreds of employees. Changes to accrual rates, carry-over rules, or pay conditions apply to all future leave cycles for assigned employees.

</div>

<div class="subsection">

### Key Decisions Before Setup

Answer these questions before creating leave policies:

- **What leave types does your organization need?** — Annual, sick, unpaid, maternity, work-from-home, or custom types
- **How will leave accrue?** — Monthly accrual, one-time allocation, or conditional based on tenure/probation
- **Calendar days or working days?** — Determines how weekends and public holidays are counted
- **Will unused leave carry forward?** — Define carry-over limits and expiry rules per policy
- **Who approves leave requests?** — Line managers, HR admins, or multi-level approval workflows
- **How are unpaid leaves handled?** — Automatic payroll deductions require salary configuration and payroll module

</div>

<div class="subsection">

### Related Features

- **Payroll Module** — Calculates automatic salary deductions for unpaid leave and processes leave salary payments
- **Approval Flows** — Routes leave requests through configured approval hierarchies
- **Holiday Calendars** — Excludes public holidays from leave calculations when enabled
- **Work Timings** — Defines working days used in working-day leave policies
- **End of Service** — Calculates leave encashment based on unused leave balances and policy rules
- **Employee Profiles** — Stores assigned policies, leave balances, and request history

</div>

<div class="subsection">

### Prerequisites & Requirements

| Requirement | Description | Status |
|----|----|----|
| Active Employees | At least one employee profile must exist to assign leave policies | Required |
| Holiday Calendar | Needed to exclude public holidays from leave calculations when using calendar-day policies | Recommended |
| Work Timings Configuration | Defines working days for working-day leave policies (excludes weekends from leave count) | Recommended |
| Payroll Module | Required only for unpaid leave deductions: enables automatic salary deductions when employees take unpaid leave | Conditional |
| Employee Salary Configuration | Required only for unpaid leave deductions: system needs salary data to calculate daily deduction amounts | Conditional |
| Daily Wage Calculation Settings | Required only for unpaid leave deductions: defines whether deductions use Basic Only or Basic + Allowances | Conditional |
| Leave Salary Policy | Required only for leave salary payments: enables employees to request advance salary during extended leave periods | Conditional |
| Leave Encashment Configuration | Required only for leave encashment: allows employees to convert unused leave days to cash payments | Conditional |
| Accrual Pausing Settings | Required only for automated accrual pausing: stops monthly leave accrual when employees take extended unpaid leave (e.g., KSA 21-day rule) | Conditional |
| Conditional Pay Rate Configuration | Required only for conditional sick leave: enables tiered pay rates (e.g., full pay first 15 days, half pay next 30 days, unpaid thereafter) | Conditional |

</div>

</div>

</div>

<div id="user-journey" class="section section-user-journey">

<div class="section-header">

## Complete User Journey Guide

</div>

<div class="section-body">

<div class="journey-roadmap">

<div class="subsection">

### End-to-End Journey: Setting Up Leave Policies

From planning leave types to assigning policies to employees and managing ongoing requests.

</div>

<div class="journey-phases">

<div class="journey-phase">

<div class="phase-marker">

1

</div>

<div class="phase-content">

#### Plan Leave Types

Identify required leave types (annual, sick, unpaid) and determine calculation methods (calendar vs working days).

<a href="#product-foundation" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

2

</div>

<div class="phase-content">

#### Access Configuration

Navigate to Settings → Leaves → Leave Policies to begin setup.

<a href="#feature-entry-points" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

3

</div>

<div class="phase-content">

#### Create Policies

Define policy details including allowances, accrual rules, and pay rates.

<a href="#core-tasks" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

4

</div>

<div class="phase-content">

#### Assign to Employees

Link policies to specific employees or groups based on eligibility criteria.

<a href="#core-tasks" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

5

</div>

<div class="phase-content">

#### Configure Approval Flow

Set up line managers and approval hierarchy for leave requests.

<a href="#approval-flow" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

6

</div>

<div class="phase-content">

#### Monitor & Maintain

Track leave balances, handle requests, and adjust policies as needed.

<a href="#troubleshooting-edge-cases" class="phase-link">See details →</a>

</div>

</div>

</div>

</div>

</div>

</div>

<div id="feature-entry-points" class="section section-feature-entry-points">

<div class="section-header">

## Feature Discovery

</div>

<div class="section-body">

<div class="subsection">

### How to Access Leave Policies

Leave Policies is the central configuration hub for all time-off rules in your organization.

#### Navigation Path

<div class="nav-path">

Settings → Leaves → Leave Policies

</div>

From this screen, you can:

- View all existing leave policies
- Create new policies from scratch or templates
- Edit existing policy rules and allowances
- Assign or unassign policies to employees
- Delete unused policies

#### Alternative Access Points

You can also access leave policy configuration through:

- **Employee Profile → Leaves Tab** — View and modify individual employee's assigned policies
- **Time → Employee Leaves** — Manage leave requests and view policy details
- **Settings → Payroll → End of Service** — Configure leave encashment calculations

<div class="info-box">

**Permission Required:** Super Admin or Time Off Manager role needed to create and edit leave policies. Line Managers can view policies assigned to their direct reports.

</div>

</div>

</div>

</div>

<div id="initial-setup" class="section section-initial-setup">

<div class="section-header">

## Initial Setup

</div>

<div class="section-body">

<div class="subsection">

### First-Time Configuration

Before creating your first leave policy, complete these foundational steps to ensure accurate tracking and calculations.

#### 1. Configure Company Work Week

Define your organization's working days to enable accurate working-day calculations for leave policies.

- Go to Settings → Company → Work Week
- Select which days are working days (e.g., Sunday to Thursday)
- Save configuration

<div class="info-box">

**Why this matters:** Leave policies can calculate days as calendar days or working days. Without a defined work week, working-day policies cannot function correctly.

</div>

#### 2. Set Up Public Holiday Calendar

Create a holiday calendar to exclude public holidays from leave calculations when needed.

- Navigate to Settings → Company → Holiday Calendars
- Add public holidays for your region
- Name the calendar (e.g., "UAE Public Holidays 2024")
- Assign calendar to relevant employees

<div class="info-box">

**Note:** You can enable automatic deduction of public holidays from leave requests at the policy level.

</div>

#### 3. Define Organizational Hierarchy

Set up reporting lines to enable leave approval workflows.

- Go to each employee's profile → Work tab
- Set the "Reports to" field to assign their line manager
- Alternatively, use bulk upload via Excel for multiple employees

<div class="warning-box">

**⚠️ Required for approvals:** Leave requests cannot be approved without defined reporting lines. Managers must have Line Manager permissions assigned in Role Management.

</div>

#### 4. Configure Leave Approval Flow

Define who approves leave requests and in what order.

- Navigate to Settings → Approval Flows → Leaves
- Add approval steps (e.g., Line Manager → Department Head → HR)
- Choose whether approvers act sequentially or in parallel
- Save the approval flow

<div class="info-box">

**Flexibility:** You can configure multiple approval levels. If any approver in a step rejects, the entire request is rejected.

</div>

#### 5. Review Leave Cycle Settings

Decide whether your organization uses calendar-year or individual (hire-date-based) leave cycles.

- Calendar year: All employees' leave resets on January 1st
- Individual cycle: Each employee's leave resets on their hire anniversary

<div class="warning-box">

**⚠️ Cannot change easily:** Switching leave cycle types after setup requires configuration team intervention and results in data loss. Choose carefully before creating policies.

</div>

</div>

<div class="subsection">

### Common Configuration Checklist

Verify these settings are in place before creating leave policies:

| Configuration | Location | Status |
|----|----|----|
| Work week defined | Settings → Company → Work Week | Required |
| Public holiday calendar created | Settings → Company → Holiday Calendars | Recommended |
| Reporting lines assigned | Employee profiles → Work tab | Required |
| Leave approval flow configured | Settings → Approval Flows → Leaves | Required |
| Leave cycle type selected | Settings → Leaves → Leave Policies | Required |

</div>

<div class="subsection">

### What Not to Configure Yet

The following configurations are conditional and only needed for specific sub-features:

- **Payroll Module:** Only required if you plan to use unpaid leave deductions. Not needed for basic paid leave tracking.
- **Employee Salary Configuration:** Only required for unpaid leave policies that automatically calculate payroll deductions. Paid leave policies do not need salary data.
- **Leave Encashment Settings:** Only required if employees can request to encash unused leave. Configure this later when setting up encashment policies.
- **Leave Salary Settings:** Only required if you pay employees in advance for leave periods. Not needed for standard leave policies.

<div class="info-box">

**Start simple:** You can create and use basic paid leave policies (e.g., annual leave, sick leave) with just the required configurations above. Add conditional features later as your needs grow.

</div>

</div>

<div class="subsection">

### Next Steps

Once initial setup is complete:

1.  Create your first leave policy using a template or from scratch
1.  Assign the policy to employees or employee groups
1.  Test the approval flow with a sample leave request
1.  Train managers on approving leave requests
1.  Communicate the new leave system to employees

</div>

</div>

</div>

<div id="core-tasks" class="section section-core-tasks">

<div class="section-header">

## Key Tasks

</div>

<div class="section-body">

<div class="subsection">

### Task: Create Leave Policy

Set up a new leave policy with accrual rules, payment settings, and eligibility criteria.

#### Subtask: Navigate to Leave Policies

<div class="nav-path">

Settings → Leaves → Leave Policies → Add New

</div>

Access the policy creation screen where you can build from scratch or use templates.

#### Subtask: Define Policy Basics

- Enter policy name and description
- Select leave type (Annual, Sick, Unpaid, Work from Home, etc.)
- Choose paid, partially paid, or unpaid status

#### Subtask: Configure Leave Allowance

- Set annual leave days (e.g., 30 calendar days or 22 working days)
- Choose calculation method: Calendar days or Working days
- Enable recurring annually or one-time allocation
- Set conditional allowances based on probation or tenure

#### Subtask: Set Accrual Rules

- Enable monthly accrual (total days ÷ 12)
- Configure carry-over allowance for unused days
- Set maximum carry-over limit
- Enable negative balance if needed
- Configure accrual pausing for specific leave types (e.g., pause during unpaid leave exceeding 21 days)

#### Subtask: Configure Payment Settings (for Unpaid/Conditional Policies)

- For unpaid leave: Select daily wage calculation (Basic Only or Basic + Allowances)
- Choose day calculation type (calendar days, working days, or custom days)
- For conditional pay: Add up to 5 pay rate conditions (e.g., fully paid first 15 days, half pay next 30 days, unpaid remaining)

#### Subtask: Set Restrictions and Rules

- Enable "Restrict during probation" to block leave requests for probationary employees
- Enable "Exclude public holidays" to not count holidays as leave days
- Set maximum encashable days
- Configure leave salary settings if applicable

#### Subtask: Assign Employees

- Select individual employees or use "Move All" for bulk assignment
- Update used leave days if employees have already taken leave
- Review employee details and confirm assignments

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/leave-policies/v1/validation/screenshots/crud-03-create-policy-form.png" alt="Policy creation form" class="screenshot" loading="lazy">
<figcaption>Leave policy creation screen showing policy details, accrual settings, and employee assignment</figcaption>
</figure>

</div>

<div class="subsection">

### Task: Edit Existing Leave Policy

Modify policy settings, update allowances, or change employee assignments.

#### Subtask: Access Policy for Editing

<div class="nav-path">

Settings → Leaves → Leave Policies → Click Edit icon

</div>

Locate the policy in the list and click the pencil icon to open editing mode.

#### Subtask: Update Policy Settings

- Modify policy name, description, or leave type
- Adjust annual allowance or accrual frequency
- Update carry-over rules or maximum limits
- Change payment settings (if no employees are assigned)

<div class="warning-box">

**⚠️ Critical Limitations:**

- Cannot change paid/unpaid status after employees are assigned (TSSD-1847)
- Cannot modify accrual frequency after policy creation (TSSD-2625)
- Cannot enable conditional pay rate on existing policies with active assignments (TSSD-392)
- Changes to carry-over allowance not supported for individual leave cycles (TSSD-1889)

</div>

#### Subtask: Bulk Update Leave Allowances

- From policy edit screen, access Employee Details
- Click "Open Bayzat Sheets"
- Update columns: Annual Allowance, Pro-rated Days, Days Used Before Setup
- Save changes to apply bulk updates

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/leave-policies/v1/validation/screenshots/crud-03-create-policy-form-setup.png" alt="Policy form setup" class="screenshot" loading="lazy">
<figcaption>Policy edit screen with Bayzat Sheets option for bulk allowance updates</figcaption>
</figure>

</div>

<div class="subsection">

### Task: Configure Unpaid Leave with Payroll Deductions

Set up unpaid leave policies that automatically create payroll deductions when approved.

#### Prerequisites

<div class="info-box">

**Required:**

- Payroll module must be enabled
- Employee salaries must be configured

</div>

#### Subtask: Create Unpaid Leave Policy

- Navigate to Settings → Leaves → Leave Policies → Add New
- Name the policy (e.g., "Unpaid Leave")
- Select "Unpaid" as leave pay rate

#### Subtask: Configure Deduction Calculation

- Select daily wage calculation method:
  - **Basic Only:** Deduction = (Basic Salary ÷ Days) × Leave Days
  - **Basic + Allowances:** Deduction = ((Basic + Allowances) ÷ Days) × Leave Days
- Choose day calculation type:
  - **Calendar days:** Uses 30 days per month
  - **Working days:** Excludes weekends and holidays
  - **Custom days:** Uses 30.42 days (TSSD-4368)

<div class="info-box">

**Note:** System uses 30.42 days divisor for daily wage calculation, which may result in deduction amounts that don't precisely match monthly salary (TSSD-4368).

</div>

#### Subtask: Assign to Employees

- Select employees who need unpaid leave tracking
- Confirm salary configurations are complete
- Save and activate policy

#### Expected Outcome

When an employee takes unpaid leave:

- Leave request goes through approval hierarchy
- Upon full approval, system automatically creates payroll deduction
- Deduction appears in Finance → Adjustments with calculated amount
- Payroll processor receives email notification
- For multi-month leave, deductions split across relevant payroll months

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/leave-policies/v1/validation/screenshots/crud-01-create-policy-dialog.png" alt="Create policy dialog" class="screenshot" loading="lazy">
<figcaption>Unpaid leave policy configuration showing daily wage calculation options</figcaption>
</figure>

</div>

<div class="subsection">

### Task: Set Up Conditional Pay Rate (Sick Leave Example)

Configure policies where payment varies based on number of days taken (e.g., fully paid first 15 days, half pay next 30 days, unpaid remaining).

#### Subtask: Enable Conditional Pay

- Create or edit leave policy
- Enable "Conditional pay rate" toggle
- Add pay rate conditions (up to 5 levels)

#### Subtask: Define Pay Rate Tiers

Example for UAE-compliant sick leave:

- **Condition 1:** First 15 days → Fully paid (100%)
- **Condition 2:** Next 30 days → Half pay (50%)
- **Condition 3:** Remaining 45 days → Unpaid (0%)

#### Subtask: Configure Daily Wage Calculation

- Select salary components for unpaid/partial pay tiers
- Choose day calculation type
- Set default pay rate for conditions not met

<div class="warning-box">

**⚠️ Limitation:** Cannot enable conditional pay rate on existing policies with active employee assignments. Employees must be removed first (TSSD-392).

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/leave-policies/v1/validation/screenshots/crud-02-create-policy-ksa-templates.png" alt="KSA policy templates" class="screenshot" loading="lazy">
<figcaption>Conditional pay rate configuration showing multiple pay tiers</figcaption>
</figure>

</div>

<div class="subsection">

### Task: Configure Accrual Pausing

Automatically pause monthly leave accrual when employees take extended unpaid leave.

#### Subtask: Enable Accrual Pausing

- Edit leave policy with monthly accrual enabled
- Enable "Pause monthly accrual" toggle
- Select leave types that trigger pausing (e.g., Unpaid Leave)
- Set minimum days requirement (e.g., 21 days for KSA compliance)

#### How It Works

- System tracks total days of specified leave types taken in a month
- If total exceeds minimum threshold, monthly accrual is paused
- Leave allowance is prorated: (Days worked ÷ Total days) × Monthly accrual
- Adjusted days use original request start date

<div class="warning-box">

**⚠️ Important:** Configuration cannot be edited once set. Only applies to new leave requests, not retroactively.

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/leave-policies/v1/validation/screenshots/task-01-policy-restrictions.png" alt="Policy restrictions" class="screenshot" loading="lazy">
<figcaption>Accrual pausing configuration showing leave type selection and minimum days threshold</figcaption>
</figure>

</div>

<div class="subsection">

### Task: Configure Leave Encashment

Set up policies allowing employees to convert unused leave to cash payment.

#### Subtask: Configure End-of-Service Encashment

<div class="nav-path">

Settings → Payroll → End of Service eligibility → Configure

</div>

- Select leave types eligible for encashment
- Choose salary basis: Basic Only or Basic + Allowances
- Select calculation method: Calendar days, Working days, or Custom days
- Save configuration

#### Subtask: Configure Leave Encashment Policy (During Service)

<div class="nav-path">

Settings → Payroll → Leave encashment policy → Add New

</div>

- Enter policy name and description
- Select applicable leave type
- Configure calculation formula (salary component + working day type)
- Set eligibility criteria:
  - Minimum accrued leave days
  - Minimum job tenure
  - Maximum encashment limit per request
  - Probation period restrictions
- Select eligible employees
- Save policy

#### Expected Outcome

Employees can submit encashment requests via Employee Tickets. Requests route through approval flow, then appear in payroll as additions.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/leave-policies/v1/validation/screenshots/exploration-04-policy-allowance-details.png" alt="Policy allowance details" class="screenshot" loading="lazy">
<figcaption>Leave encashment policy configuration screen</figcaption>
</figure>

</div>

<div class="subsection">

### Task: Configure Leave Salary

Set up advance salary payments for employees going on extended leave.

#### Subtask: Enable Leave Salary Settings

- Edit leave policy
- Toggle "Leave Salary Settings" ON
- Save policy

#### Subtask: Create Leave Salary Policy

<div class="nav-path">

Settings → Payroll → Leave Salary Policy → Add New

</div>

- Define policy name and description
- Select applicable leave types
- Configure salary calculation method:
  - Select allowance components to include
  - Choose working day type for proration
- Set probation restrictions if needed
- Add eligible employees
- Save policy

<div class="info-box">

**Note:** Same employees cannot be added to multiple leave salary policies. Policy becomes active from activation date and does not affect past leave requests.

</div>

#### Subtask: Process Leave Salary Transactions

- Navigate to Payroll Table
- Filter employees by "leave salary"
- Review prorated salary calculations
- Create Variable Pay File (VPF) for advance payment
- Add transaction remarks for tracking

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/leave-policies/v1/validation/screenshots/exploration-01-leave-settings-main.png" alt="Leave settings main" class="screenshot" loading="lazy">
<figcaption>Leave salary policy configuration and payroll transaction screen</figcaption>
</figure>

</div>

<div class="subsection">

### Task: Assign and Unassign Employees

Add or remove employees from leave policies.

#### Subtask: Assign Employees to Policy

- Edit leave policy
- Go to Employee Details section
- Select individual employees or click "Move All"
- Update used leave days if employees have prior leave
- Confirm assignments

#### Subtask: Unassign Employees

- Edit leave policy
- Go to Employee Details
- Remove employees from assignment list
- Confirm changes

<div class="warning-box">

**⚠️ Data Loss Risk:** Unassigning and reassigning employees can reset leave balances and erase historical data (TSSD-4319). Always download backup before making bulk changes.

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/leave-policies/v1/validation/screenshots/exploration-03-policy-view-summary.png" alt="Policy view summary" class="screenshot" loading="lazy">
<figcaption>Employee assignment screen showing individual and bulk assignment options</figcaption>
</figure>

</div>

<div class="subsection">

### Task: Delete Leave Policy

Remove a leave policy that is no longer needed.

#### Subtask: Verify No Active Assignments

- Check if any employees are assigned to the policy
- Unassign all employees before deletion
- Review if any active leave requests reference this policy

#### Subtask: Delete Policy

<div class="nav-path">

Settings → Leaves → Leave Policies → Click Delete icon

</div>

- Locate policy in list
- Click delete icon
- Confirm deletion

<div class="warning-box">

**⚠️ No Recovery:** Platform lacks self-service undelete mechanism. Deleted policies require backend intervention to restore (TSSD-3325).

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/leave-policies/v1/validation/screenshots/crud-04-delete-confirmation.png" alt="Delete confirmation" class="screenshot" loading="lazy">
<figcaption>Leave policies list with delete option</figcaption>
</figure>

</div>

<div class="subsection">

### Task: View and Track Leave Balances

Monitor employee leave allocations, usage, and remaining balances.

#### Subtask: View Individual Employee Balance

- Go to employee profile
- Navigate to Leaves tab
- View allocated, used, and remaining days per policy

#### Subtask: Download Leave Reports

<div class="nav-path">

Time → Employee Leaves → Download

</div>

- Apply filters if needed (employee, department, leave type)
- Select leave cycle year
- Click Download to export Excel report

#### Subtask: View Leave Calendar

<div class="nav-path">

Time → Calendar

</div>

- View color-coded leave requests (green = accepted, yellow = pending)
- Identify overlapping requests
- Click individual requests for details

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/leave-policies/v1/validation/screenshots/approval-01-leave-approval-flow.png" alt="Leave approval flow" class="screenshot" loading="lazy">
<figcaption>Leave calendar showing color-coded requests and overlapping leave periods</figcaption>
</figure>

</div>

<div class="subsection">

### Task: Configure Public Holiday Handling

Set whether public holidays count as leave days.

#### Subtask: Enable Public Holiday Exclusion

- Edit leave policy
- Enable "Exclude public holidays" toggle
- Save policy

#### Subtask: Update Public Holidays

<div class="nav-path">

Settings → Company → Holiday Calendars

</div>

- Select Holiday Calendar
- Edit specific public holiday
- Change date range if needed
- System recalculates affected leave requests
- Optionally send email to affected employees

<div class="info-box">

**Note:** Recalculation only works for current or future leave cycles. System will not recalculate days from previous cycles.

</div>

<div class="warning-box">

**⚠️ Synchronization Issue:** Adding public holidays after leave requests are approved can cause inconsistent daily wage calculations. System lacks real-time synchronization between Time Off and Payroll modules (TSSD-4464).

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/leave-policies/v1/validation/screenshots/workflow-01-workflows-list.png" alt="Workflows list" class="screenshot" loading="lazy">
<figcaption>Holiday calendar configuration screen</figcaption>
</figure>

</div>

<div class="subsection">

### Task: Troubleshoot Leave Balance Discrepancies

Investigate and resolve issues with leave calculations or balances.

#### Subtask: Check Accrual Calculation

- Verify policy accrual settings (monthly vs. one-time)
- Check employee hire date and policy assignment date
- For conditional policies: Verify daily pro-rata calculation (TSSD-4203)
- For leap year hires (Feb 29): System starts cycle from Feb 28, causing 1-day discrepancy (TSSD-3822)

#### Subtask: Review Action Logs

<div class="nav-path">

Settings → Action Logs

</div>

- Search for entity ID of leave policy or employee
- Review historical changes to policy or balance
- Check for automatic recalculations triggered by admin changes

<div class="info-box">

**Note:** Platform lacks user-accessible interface for viewing audit logs directly from employee profile. Must manually navigate to Action Logs and lookup entity ID (TSSD-3801).

</div>

#### Subtask: Verify Unpaid Leave Deductions

- Check Finance → Adjustments for deduction records
- Verify leave request was fully approved
- Confirm payroll cycle is open (closed cycles require manual intervention)
- Check for synchronization delays (may take time to appear)

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/leave-policies/v1/validation/screenshots/workflow-02-leave-triggers.png" alt="Leave workflow triggers" class="screenshot" loading="lazy">
<figcaption>Action logs screen showing leave policy modification history</figcaption>
</figure>

</div>

</div>

</div>

<div id="workflow-integration" class="section section-workflow-integration">

<div class="section-header">

## Workflow Integration

</div>

<div class="section-body">

<div class="subsection">

### Automation Status

<div class="info-box">

**Not Available:** Leave Policies does not currently support workflow automation triggers or actions.

</div>

Leave policy configuration and assignment are manual processes. Automated leave request approvals are handled through the dedicated <a href="#approval-flow">Approval Flow</a> system, not general workflow automation.

</div>

<div class="subsection">

### Alternative Automation

While leave policies themselves cannot trigger workflows, related leave processes support automation:

- **Leave Requests** — Approval flows route requests through configured hierarchies automatically
- **Unpaid Leave Deductions** — Payroll deductions are created automatically when unpaid leave is fully approved
- **Leave Accrual** — Monthly accrual calculations run automatically based on policy configuration
- **Leave Encashment** — Approval flows manage encashment request routing

</div>

<div class="subsection">

### Integration Points

Leave policies integrate with other modules through direct system connections:

- **Payroll Module** — Unpaid leave policies trigger automatic salary deductions when leave is approved
- **Time-Off Module** — Leave requests validate against policy rules (allowances, restrictions, calculation methods)
- **Employee Profiles** — Policy assignments determine available leave types and balances per employee
- **End of Service** — Leave encashment configuration controls which policies are included in EOS calculations

</div>

<div class="subsection">

### Manual Process Triggers

These actions require manual initiation but follow automated rules once started:

- Creating or editing a leave policy
- Assigning employees to a policy
- Adjusting individual employee leave balances
- Configuring conditional pay rates or accrual pausing rules

</div>

</div>

</div>

<div id="business-rules-limitations" class="section section-business-rules-limitations">

<div class="section-header">

## Business Rules & Limitations

</div>

<div class="section-body">

<div class="subsection">

### Policy Configuration Constraints

<div class="warning-box">

**⚠️ Payment Type Cannot Be Changed After Assignment**

Once employees are assigned to a leave policy, you cannot change its payment type (paid/unpaid). This restriction prevents complex impacts on payroll calculations and End of Service duration tracking. To change payment type, remove all employees from the policy first.

</div>

<div class="warning-box">

**⚠️ Accrual Frequency Cannot Be Modified**

After creating a leave policy, you cannot change its accrual frequency. To implement a different accrual schedule, create a new policy and migrate employees.

</div>

<div class="warning-box">

**⚠️ Conditional Pay Rate Requires Employee Removal**

Enabling conditional pay rate features on existing policies requires removing all assigned employees first. Plan the migration carefully to avoid disrupting leave balances.

</div>

| Configuration Item | Limitation | Workaround |
|----|----|----|
| **Carry Over Allowance** | Cannot modify for companies with individual leave cycles | Contact support for backend adjustment |
| **Leave Cycle Type** | Changing cycle type results in loss of historical leave data | Requires configuration team intervention and data export before change |
| **Maximum Encashable Days** | System fails to correctly display when set to zero | Use minimum value of 1 if encashment is not allowed |

</div>

<div class="subsection">

### Unpaid Leave Deduction Rules

<div class="info-box">

**Payroll Module Required:** Unpaid leave deductions only work when the Payroll module is enabled and employee salaries are configured.

</div>

<div class="warning-box">

**⚠️ Daily Wage Calculation Uses Fixed Divisor**

The system uses 30.42 days as the divisor for daily wage calculations instead of actual calendar days. This can result in deduction amounts that don't precisely match monthly salary expectations.

</div>

<div class="warning-box">

**⚠️ Public Holiday Changes Don't Trigger Recalculation**

When public holidays are added after unpaid leave requests are approved, the system does not automatically recalculate deductions. Daily wage calculations remain based on the original working day count at approval time.

</div>

| Scenario | System Behavior | Impact |
|----|----|----|
| **Multi-Month Leave** | Creates separate deductions for each calendar month | Deductions appear across multiple payroll cycles |
| **Closed Payroll Month** | Cannot create automatic deductions | Payroll Manager receives email notification for manual processing |
| **Retroactive Leave Requests** | Cannot create leave requests before policy assignment date | Must assign policy retroactively before creating historical requests |
| **Processed Payroll** | Cannot edit unpaid leave deductions after payroll processing | Must adjust leave request to trigger recalculation in next open cycle |

<div class="info-box">

**Deduction Calculation Formula:** Daily pay = (Basic Salary + Allowances) ÷ Total days (calendar or working based on policy). Unpaid leave days × Daily pay = Deduction amount.

</div>

</div>

<div class="subsection">

### Leave Balance & Accrual Limitations

<div class="warning-box">

**⚠️ Data Loss Risk When Unassigning Policies**

Removing employees from a policy and reassigning them can erase historical leave balances. The system lacks safeguards against this data loss. Always export leave balance reports before making policy changes.

</div>

<div class="warning-box">

**⚠️ No Mid-Month Prorated Accrual**

Leave accrues only for complete months worked. Employees leaving mid-month do not receive prorated accrual for partial months, even if they work most of the month.

</div>

| Issue | Description | Status |
|----|----|----|
| **February 29 Hire Date** | System starts leave cycle from February 28 for leap year hires, causing 1-day discrepancy in conditional leave calculations | Known calculation bug |
| **Shift Days-Off Not Excluded** | Working days leave policies cannot automatically account for scheduled shift days-off, affecting employees with complex shift schedules | Feature gap |
| **Carry-Over Behavior Unclear** | System lacks clear documentation on how one-time vs. accrual policies handle balance carry-over between cycles | Documentation gap |

<div class="info-box">

**Conditional Leave Calculation:** For policies with conditional allowances based on tenure, the system calculates daily pro-rata accruals. This method is not always intuitive to users expecting straightforward monthly accruals.

</div>

</div>

<div class="subsection">

### Leave Encashment Constraints

<div class="warning-box">

**⚠️ No Automatic Pro-Rated Encashment**

The platform cannot automatically calculate pro-rated leave encashment for employees leaving before month-end. Manual intervention is required to process partial-month encashment.

</div>

| Limitation | Impact |
|----|----|
| **Probation Period Restriction** | Employees in probation cannot submit leave encashment requests |
| **Single Policy Assignment** | Employees can only be assigned to one leave encashment policy at a time |
| **No Retroactive Application** | Leave encashment policies only apply to requests submitted after policy activation date |

</div>

<div class="subsection">

### Leave Salary Processing Rules

<div class="warning-box">

**⚠️ Static Salary Reference Point**

The system uses a static salary reference for unpaid leave deductions instead of a dynamic, time-sensitive approach. This prevents accurate prorated deductions when salary changes occur during the leave period.

</div>

| Scenario | Limitation |
|----|----|
| **Multi-Month Leave Salary** | Leave salary requests spanning multiple cycles must be approved separately for each cycle |
| **Advance Salary Tracking** | Requires manual tracking and adjustment when leave salary is paid in advance |
| **Allowance Inclusion** | Some allowances may not be included in leave salary calculations depending on configuration |

</div>

<div class="subsection">

### Audit Trail & Transparency

<div class="warning-box">

**⚠️ Limited Audit Log Visibility**

Administrators cannot easily view audit logs for leave balance modifications through the user interface. Tracking manual adjustments requires navigating to a separate audit log section with entity ID lookup.

</div>

| Audit Need | Current Limitation |
|----|----|
| **Leave Balance Changes** | No direct link from employee profile to view historical leave balance modifications |
| **Policy Modifications** | Requires backend database investigation to view complete history of policy changes |
| **Automatic Recalculations** | System does not transparently communicate when background processes modify leave requests |

</div>

<div class="subsection">

### Regional Compliance Gaps

<div class="warning-box">

**⚠️ KSA Sick Leave Regulations Not Supported**

The platform lacks native support for KSA-specific sick leave regulations requiring individual, anniversary-based leave accrual cycles. The system defaults to calendar year or hire date-based accrual.

</div>

<div class="info-box">

**Note:** For KSA compliance, manual workarounds may be required. Contact support for configuration guidance specific to your regulatory requirements.

</div>

</div>

<div class="subsection">

### Feature Gaps

| Missing Feature | Current Status |
|----|----|
| **Hourly Leave Requests** | System only supports full-day or half-day leave applications |
| **Automated Leave Expiry Notifications** | Cannot customize advance notice period or enable automatic notifications for line managers |
| **Time Range Policy Validation** | No automated validation for leave request timing relative to employee absences |
| **Bulk Carry-Over Updates** | No user-friendly interface for bulk updating carry-over allowances across multiple policies |
| **Policy Recovery** | No self-service undelete mechanism for accidentally deleted policies |

</div>

<div class="subsection">

### Payroll Integration Constraints

<div class="info-box">

**Unpaid Leave Report Visibility:** The payroll template lacks complete visibility into unpaid leave tracking. Users cannot view total unpaid days and corresponding salary implications in a single template view.

</div>

| Integration Issue | Impact |
|----|----|
| **Synchronization Delay** | Temporary lag between leave approval and payroll deduction reflection |
| **Offboarded Employees** | System cannot automatically remove employees with complex unpaid leave statuses from payroll table |
| **Salary Configuration Notifications** | No automatic alerts for employees taking unpaid leave without configured salaries |

</div>

<div class="subsection">

### Approval Flow Limitations

<div class="info-box">

**Generic Disclaimer Messages:** Conditional leave policies display generic disclaimer messages that do not adapt to nuanced pay structures, potentially causing user confusion.

</div>

<div class="info-box">

**Notification Granularity:** Role-based permissions automatically include notifications that may not be relevant to the role's core responsibilities. Cannot selectively disable specific notification types per role.

</div>

</div>

</div>

</div>

<div id="troubleshooting-edge-cases" class="section section-troubleshooting-edge-cases">

<div class="section-header">

## Troubleshooting & Edge Cases

</div>

<div class="section-body">

<div class="subsection">

### Common Issues

| Issue | Cause | Resolution |
|----|----|----|
| **Leave balance shows incorrect value** | Automatic recalculation triggered by past cycle approval or policy change | Check audit logs for system-generated adjustments. Verify leave cycle dates and accrual settings match expectations. |
| **Cannot change policy payment type** | Employees are currently assigned to the policy | Remove all employees from the policy, change payment type, then reassign employees. Export leave balances before making changes. |
| **Unpaid leave deduction not appearing** | Payroll cycle was modified instead of opened normally, or public holidays added after approval | Check if payroll month is open. Verify public holiday calendar matches leave request dates. Contact support if deduction is missing after verification. |
| **Leave request blocked for historical dates** | Leave policy was not assigned to employee on the requested leave dates | Assign policy with retroactive start date, then create leave request for historical period. |
| **Encashment calculation shows unexpected amount** | Daily rate calculation based on calendar vs. working days setting, or allowances not included | Review leave policy configuration for day calculation type and salary components. Verify which allowances are included in encashment formula. |
| **Leave balance disappeared after policy edit** | Employees were unassigned and reassigned during policy modification | Contact support immediately for potential data recovery. Restore from backup if available. Always export leave balances before policy changes. |
| **Conditional pay rate cannot be enabled** | Employees are assigned to the policy | Remove all employees, enable conditional pay rate feature, then reassign employees with updated balances. |
| **Multi-month leave creates multiple deductions** | System design splits deductions by calendar month | This is expected behavior. Each month's deduction appears in its respective payroll cycle. Review Finance → Adjustments for complete deduction breakdown. |
| **Leave accrual paused unexpectedly** | Employee took leave type configured to pause monthly accrual, exceeding minimum days threshold | Review leave policy settings for accrual pausing configuration. Verify which leave types trigger pausing and minimum days requirement. |
| **Cannot edit unpaid leave deduction** | Payroll has been processed for the period | Deductions are locked after processing to maintain data consistency. Adjust the original leave request to trigger recalculation in next open cycle. |

</div>

<div class="subsection">

### Edge Cases

#### Leap Year Hire Dates

Employees hired on February 29 have their leave cycle start date set to February 28 in non-leap years, causing a 1-day discrepancy in conditional leave allowance calculations.

**Workaround:** Manually adjust leave balances at cycle start to account for the missing day, or configure policy with 1 additional day allowance for affected employees.

#### Shift-Based Working Days

Working days leave policies cannot automatically exclude scheduled shift days-off. Employees with rotating shifts may see incorrect leave day counts.

**Workaround:** Use calendar days policy instead, or manually adjust leave balances to account for shift patterns. Document shift schedules for reference during leave approval.

#### Mid-Cycle Policy Changes

Changing leave policy configuration mid-cycle triggers recalculation of existing leave requests, moving them to Pending status.

**Workaround:** Communicate policy changes to all affected employees before implementation. Schedule policy updates at cycle boundaries when possible. Export leave request reports before making changes.

#### Retroactive Salary Changes

Unpaid leave deductions use salary at approval time. Salary increases after approval do not trigger deduction recalculation.

**Workaround:** Process salary adjustments before approving unpaid leave requests. For retroactive salary changes, manually adjust deductions in payroll.

#### Deleted Policy Recovery

No self-service mechanism exists to recover accidentally deleted leave policies.

**Workaround:** Contact support immediately for backend recovery. Maintain documentation of all policy configurations as backup. Use policy naming conventions that prevent accidental deletion.

#### Overlapping Leave Types

Employees with multiple leave policies may have overlapping leave requests that affect balance calculations.

**Workaround:** Use Bayzat Insights to view overlapping requests before approval. Check Leaves Calendar for visual representation of concurrent leaves. Configure policies with clear priority rules.

#### Public Holiday Timing

Public holidays declared after leave approval do not trigger automatic recalculation of working days or deductions.

**Workaround:** Update public holiday calendar before processing leave requests when possible. For late additions, manually adjust affected leave requests or deductions.

#### Probation Period Transitions

Employees transitioning out of probation mid-cycle may have leave restrictions that don't automatically lift.

**Workaround:** Review and update leave policy assignments when probation ends. Communicate new leave allowances to employees. Process any pending leave requests that were blocked by probation restrictions.

#### Cross-Month Leave Salary

Leave salary requests spanning multiple leave cycles require separate approval for each cycle.

**Workaround:** Submit separate leave salary requests for each cycle period. Track related requests using comments or reference numbers. Coordinate with payroll team for advance salary payments.

#### Carry-Over with Individual Cycles

Cannot modify carry-over allowance for companies using individual leave cycles without backend intervention.

**Workaround:** Contact support for carry-over configuration changes. Plan carry-over policy updates well in advance of cycle boundaries. Document carry-over rules in policy descriptions.

#### Attachment Recovery

Deleted leave request attachments (sick leave certificates, etc.) cannot be recovered if not uploaded or permanently deleted.

**Workaround:** Verify attachments are uploaded before submission. Download and archive important certificates locally. Use email confirmation for critical documentation.

#### Bulk Policy Updates

No user interface for bulk updating carry-over allowances or other policy settings across multiple policies.

**Workaround:** Contact support for bulk updates requiring SQL execution. Download policy configuration backup before changes. Update policies individually if bulk update is not available.

</div>

<div class="subsection">

### Data Integrity Checks

Perform these checks regularly to prevent data issues:

- **Monthly Balance Audit:** Export leave balance reports at month-end and compare with previous month to identify unexpected changes
- **Deduction Reconciliation:** Verify unpaid leave deductions in Finance → Adjustments match approved leave requests
- **Policy Assignment Review:** Check that all active employees have appropriate leave policies assigned
- **Approval Flow Validation:** Test approval flows after organizational changes to ensure requests route correctly
- **Accrual Verification:** Spot-check accrual calculations for employees with conditional allowances or complex tenure rules
- **Encashment Eligibility:** Review encashment policy assignments before cycle end to ensure eligible employees can submit requests

</div>

<div class="subsection">

### Prevention Best Practices

- **Export Before Changes:** Always download leave balance and policy configuration reports before making modifications
- **Test in Staging:** If available, test policy changes in a non-production environment first
- **Communicate Early:** Notify employees of policy changes well before implementation
- **Document Configurations:** Maintain external documentation of all policy rules, especially complex conditional settings
- **Schedule Updates Strategically:** Make policy changes at cycle boundaries to minimize recalculation impacts
- **Verify Integrations:** Check that payroll module and salary configurations are current before enabling unpaid leave deductions
- **Monitor Audit Logs:** Regularly review system audit logs for unexpected automatic adjustments
- **Backup Critical Data:** Download and archive leave request reports, especially before major system changes

</div>

</div>

</div>

<div id="support-resources" class="section section-support-resources">

<div class="section-header">

## FAQs & Support

</div>

<div class="section-body">

<div class="subsection">

### Frequently Asked Questions

<div class="faq-accordion">

<details class="faq-item">
<summary>Can I change a leave policy from paid to unpaid after employees are assigned?</summary>

No. Once employees are assigned to a policy, you cannot change the payment type. This restriction prevents complex impacts on payroll calculations and End of Service duration tracking. You must create a new policy and reassign employees.

</details>

<details class="faq-item">
<summary>How do I modify the accrual frequency of an existing leave policy?</summary>

You cannot edit the accrual frequency after policy creation. Create a new policy with the desired frequency and assign employees to it.

</details>

<details class="faq-item">
<summary>Why doesn't my leave policy account for scheduled shift days-off?</summary>

The platform cannot automatically account for scheduled shift days-off in leave calculations. Employees with complex shift schedules cannot accurately track leave usage using the current working days leave policy.

</details>

<details class="faq-item">
<summary>Can I enable conditional pay rates on an existing policy with active employees?</summary>

No. Employees must be removed from the policy before the conditional pay rate feature can be toggled, creating a complex migration process.

</details>

<details class="faq-item">
<summary>How does unpaid leave deduction calculation work?</summary>

The system uses a daily wage divisor of 30.42 days instead of calendar days. This can result in deduction amounts that don't precisely match the monthly salary.

</details>

<details class="faq-item">
<summary>What happens if I add public holidays after leave requests are approved?</summary>

The platform lacks real-time synchronization between Time Off and Payroll modules. Adding public holidays after leave requests prevents automatic recalculation, creating inconsistent daily wage calculations that cannot be retroactively corrected.

</details>

<details class="faq-item">
<summary>Can I modify carry-over allowance for companies with individual leave cycles?</summary>

No. The platform currently cannot modify carry-over allowance for companies with individual leave cycles. This system constraint prevents customization of leave balance rollover for specific organizational leave policies.

</details>

<details class="faq-item">
<summary>How do I track who made changes to leave balances?</summary>

The platform lacks a user-accessible interface for viewing detailed audit logs of leave balance modifications. You must contact support to access backend database records showing historical updates.

</details>

<details class="faq-item">
<summary>Can employees request leave for periods before their policy was assigned?</summary>

No. The platform does not allow creating leave requests for periods before a leave policy is assigned to an employee, even when the payroll cycle remains open.

</details>

<details class="faq-item">
<summary>Does the platform support hourly leave requests?</summary>

No. The platform currently lacks support for hourly leave requests, restricting employees to full-day or half-day leave applications.

</details>

<details class="faq-item">
<summary>How does leave encashment work for employees leaving mid-month?</summary>

The platform cannot automatically calculate pro-rated leave encashment for employees leaving before month-end. This requires manual intervention to ensure employees receive accurate compensation for accrued leave days.

</details>

<details class="faq-item">
<summary>What happens to leave balances if I unassign and reassign employees to a policy?</summary>

The platform lacks robust safeguards against data loss. Unassigning and reassigning employees can reset leave balances, potentially erasing historical data.

</details>

</div>

</div>

<div class="subsection">

### Getting Help

- **Customer Success Team:** Contact your Bayzat Customer Success Manager for policy configuration assistance and complex scenarios
- **Support Portal:** Submit tickets through the Bayzat Help Center for technical issues and data recovery requests
- **Knowledge Base:** Access detailed how-to guides at <a href="https://bayzathelp.zendesk.com">bayzathelp.zendesk.com</a>

</div>

</div>

</div>

<div id="glossary" class="section section-glossary">

<div class="section-header">

## Glossary

</div>

<div class="section-body">

| Term | Definition |
|----|----|
| **Accrual** | The automatic accumulation of leave days over time based on predefined policy rules, typically calculated monthly. |
| **Approval Flow** | A configurable workflow that defines who must approve leave requests and in what order. |
| **Calendar Days** | Leave calculation method that counts all days including weekends and public holidays. |
| **Carry-Over Allowance** | The number of unused leave days that can be transferred from one leave cycle to the next. |
| **Conditional Pay Rate** | A policy feature that automatically adjusts pay rates (fully paid, partially paid, or unpaid) based on the number of leave days taken. |
| **Daily Wage Divisor** | The number used to calculate daily pay for unpaid leave deductions, typically 30.42 days in Bayzat's system. |
| **EOS (End of Service)** | The final settlement calculation when an employee leaves the organization, including leave encashment. |
| **Leave Cycle** | The time period over which leave balances are tracked and reset, typically calendar year or hire date-based. |
| **Leave Encashment** | The financial compensation for unused leave days, typically calculated at end of service or during employment. |
| **Leave Policy** | A configuration template that defines leave types, allowances, accrual rules, and payment terms for employees. |
| **Leave Salary** | Salary paid to employees during leave periods, with calculation based on configured policy rules. |
| **Line Manager** | The direct supervisor who approves employee leave requests as part of the approval hierarchy. |
| **Probation Period** | The initial employment period during which leave restrictions may apply based on policy configuration. |
| **Proration** | The calculation of partial leave allowances based on actual employment duration within a leave cycle. |
| **Unpaid Leave** | Leave without salary compensation, which triggers automatic payroll deductions when approved. |
| **Working Days** | Leave calculation method that counts only business days, excluding weekends and public holidays. |

</div>

</div>
