<div class="hero-banner">

# Employee Tickets

Streamline employee requests with structured ticket workflows and automated approvals

</div>

<div class="nav-header">

<span class="nav-icon">📖</span> <span class="nav-title">Quick Navigation</span>

</div>

<div class="nav-grid">

<a href="#feature-overview" class="nav-card"><span class="card-icon">✨</span><span class="card-label">Feature Overview</span></a> <a href="#product-foundation" class="nav-card"><span class="card-icon">🏗️</span><span class="card-label">Product Foundation</span></a> <a href="#user-journey" class="nav-card"><span class="card-icon">🗺️</span><span class="card-label">User Journey</span></a> <a href="#feature-entry-points" class="nav-card"><span class="card-icon">🚪</span><span class="card-label">Entry Points</span></a> <a href="#initial-setup" class="nav-card"><span class="card-icon">⚙️</span><span class="card-label">Setup Process</span></a> <a href="#core-tasks" class="nav-card"><span class="card-icon">📋</span><span class="card-label">Feature Usage</span></a> <a href="#workflow-integration" class="nav-card"><span class="card-icon">🔄</span><span class="card-label">Workflow Integration</span></a> <a href="#business-rules-limitations" class="nav-card"><span class="card-icon">📜</span><span class="card-label">Business Rules</span></a> <a href="#troubleshooting-edge-cases" class="nav-card"><span class="card-icon">🔧</span><span class="card-label">Troubleshooting</span></a> <a href="#support-resources" class="nav-card"><span class="card-icon">💬</span><span class="card-label">Support Resources</span></a> <a href="#glossary" class="nav-card"><span class="card-icon">📚</span><span class="card-label">Glossary</span></a>

</div>

<figure>
<img src="validation/screenshots/03-employee-tickets-pending-tab.png" alt="Employee Tickets interface showing pending tickets queue" />
<figcaption>Employee Tickets management interface in Bayzat HR</figcaption>
</figure>

<div id="feature-overview" class="section section">

## What is Employee Tickets?

### Overview

Employee Tickets is a request management system that enables employees to submit formal requests to HR, managers, and administrators. Instead of emails or paper forms, employees raise structured tickets that follow defined approval workflows with complete audit trails.

### Key Benefits

- Centralize all employee requests in one organized system
- Configure custom ticket types with specific fields for different request categories
- Track request status from submission through approval and processing
- Maintain complete audit trail of all actions and communications

### Who Uses This Feature?

| User Role | What They Do | Value Proposition |
|----|----|----|
| **Employees** | Raise tickets for various requests (leave encashment, attendance correction, travel, etc.) | Submit any HR request through one unified system and track its progress in real-time—eliminating scattered emails, lost paperwork, and uncertainty about request status |
| **Line Managers** | Review and approve/reject tickets from their team members | Handle team requests with full context and history in one place—rather than piecing together information from emails, chats, and verbal requests |
| **HR Administrators** | Configure ticket types, manage workflows, process approved tickets, and create tickets on behalf of employees | Standardize HR processes with custom ticket types and approval flows—ensuring consistent handling while reducing manual coordination and follow-ups |
| **Payroll Team** | Process tickets that affect salary (leave encashment, adjustments) | Receive pre-approved, validated requests ready for payroll processing—eliminating back-and-forth verification and reducing payroll errors |

</div>

<div id="product-foundation" class="section section section-product-foundation">

<div class="section-header">

## Product Foundation Overview

</div>

<div class="section-body">

<div class="subsection">

### How Employee Tickets Fits

Employee Tickets is a **request management system** that enables employees to submit structured requests through defined categories and types. Each ticket follows configured approval workflows with complete audit trails.

<div class="info-box">

**Mental model:** Employee creates ticket → Selects category and type → Fills required fields → Submits for approval → Manager reviews → Approval/rejection processed → Ticket marked complete with full history.

</div>

Properly configured ticket types standardize HR processes and eliminate scattered email requests.

</div>

<div class="subsection">

### Key Decisions Before Setup

Answer these questions before configuring tickets:

- **What request categories do you need?** — Common categories include Payroll, Attendance, and Business Travel
- **What specific ticket types within each category?** — Create types with custom fields for each request type
- **Who can submit which ticket types?** — Assign employees to appropriate ticket types
- **What approval workflow applies to each type?** — Configure approver sequences (manager, HR, payroll)

</div>

<div class="subsection">

### Related Features

- **My Tickets** — Employee self-service portal for submitting and tracking requests
- **Payroll Module** — Processes approved tickets that affect compensation
- **Attendance Module** — Links with attendance regularization ticket types
- **Bayzat Workflows** — Automate actions when tickets are created or status changes

</div>

<div class="subsection">

### Prerequisites & Requirements

| Requirement | Description | Status |
|----|----|----|
| Ticket Categories | At least one category must be configured by HR | Required |
| Ticket Types | At least one ticket type must be created and assigned | Required |
| Employee Assignment | Employees must be assigned to ticket types to submit them | Required |
| Approver Roles | Approvers must have appropriate permissions configured | Required |

</div>

<figure>
<img src="validation/screenshots/ticket-type-selection-dialog.png" alt="Ticket category and type selection dialog" />
<figcaption>Ticket Categories (left panel) and Ticket Types (right panel) selection interface</figcaption>
</figure>

</div>

</div>

<div id="user-journey" class="section section">

## Complete User Journey Guide

<div class="journey-roadmap">

### End-to-End Journey: Employee Tickets

The Employee Tickets journey involves employees submitting requests, managers reviewing and approving them, and the system processing approved requests through payroll or other workflows.

<div class="journey-phases">

<div class="journey-phase">

<div class="phase-marker">

1

</div>

<div class="phase-content">

#### Access My Tickets

<div class="nav-path">

Requests → My Tickets

</div>

<a href="#feature-entry-points" class="phase-link">See entry points →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

2

</div>

<div class="phase-content">

#### Create Ticket

<div class="nav-path">

Create Ticket → Select category and type

</div>

<a href="#core-tasks" class="phase-link">See how to create →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

3

</div>

<div class="phase-content">

#### Fill Form

<div class="nav-path">

Complete required fields and submit

</div>

<a href="#core-tasks" class="phase-link">See form details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

4

</div>

<div class="phase-content">

#### Manager Review

<div class="nav-path">

Approver reviews and approves/rejects

</div>

<a href="#core-tasks" class="phase-link">See approval flow →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

5

</div>

<div class="phase-content">

#### Processing

<div class="nav-path">

Approved tickets added to payroll

</div>

<a href="#workflow-integration" class="phase-link">See workflow integration →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

6

</div>

<div class="phase-content">

#### Completion

<div class="nav-path">

Employee notified, ticket marked processed

</div>

<a href="#core-tasks" class="phase-link">See ticket statuses →</a>

</div>

</div>

</div>

</div>

</div>

<div id="feature-entry-points" class="section section">

## Feature Discovery

### How to Access

Employee Tickets features are accessed through different interfaces based on user role. Under Requests, employees use My Tickets for self-service, while managers and administrators use Employee Tickets to view all tickets.

### Navigation Paths

<figure>
<img src="validation/screenshots/02-requests-menu-opened.png" alt="Requests menu showing Employee Tickets option" />
<figcaption>Accessing Employee Tickets through the Requests menu in the main navigation</figcaption>
</figure>

<div class="step">

<div class="step-number">

E

</div>

<div class="step-content">

#### Employee Self-Service (My Tickets)

Requests (left sidebar) → My requests → My tickets → Create Ticket → Select category and type → Fill form → Submit

</div>

</div>

<div class="step">

<div class="step-number">

M

</div>

<div class="step-content">

#### Manager Ticket Queue

Requests → Employee Tickets → Use tabs to filter by status (Pending, Approved, Rejected) → Click ticket to review

</div>

</div>

<div class="step">

<div class="step-number">

A

</div>

<div class="step-content">

#### Admin Configuration

Settings → Tickets → Add category or Create new ticket type → Configure fields and assign employees

</div>

</div>

</div>

<div id="initial-setup" class="section section">

## Setup Process

### Configuring Ticket Categories (Admin)

Before employees can submit tickets, HR administrators must configure ticket categories and types. This is done through the Settings menu.

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Navigate to Ticket Settings

Go to Settings → Tickets. This opens the ticket configuration page where you can manage categories and ticket types.

</div>

</div>

<div class="step">

<div class="step-number">

2

</div>

<div class="step-content">

#### Create a Category

Click '+ New Category' to create a new category (e.g., Payroll, Attendance, Business Travel). Categories help organize related ticket types.

</div>

</div>

<div class="step">

<div class="step-number">

3

</div>

<div class="step-content">

#### Create a Ticket Type

Within a category, click 'Create new ticket type'. Enter a name and description that employees will see when selecting this type.

</div>

</div>

<div class="step">

<div class="step-number">

4

</div>

<div class="step-content">

#### Configure Custom Fields

Add fields specific to this ticket type (text, date, time, number, dropdown, money). Check the 'Mandatory' checkbox to make a field required. These fields appear on the employee submission form.

</div>

</div>

<div class="step">

<div class="step-number">

5

</div>

<div class="step-content">

#### Configure Approval Flow

Set up the approval workflow for this ticket type. You can configure sequential approval with multiple levels (approvers act one after another) or multiple approvers at the same level (any one can approve). Define who needs to approve tickets before they are processed.

</div>

</div>

<div class="step">

<div class="step-number">

6

</div>

<div class="step-content">

#### Assign Employees

Select which employees can submit this ticket type. You can assign by department, location, or individual employees. Only assigned employees will see the ticket type.

</div>

</div>

<div class="step">

<div class="step-number">

7

</div>

<div class="step-content">

#### Save and Publish

Review all settings and click 'Save'. The ticket type is now available to assigned employees in their My Tickets interface.

</div>

</div>

<div class="info-box">

**Tip:** Test your ticket configuration by submitting a test ticket as an employee to verify fields and workflow work as expected.

</div>

### Using the List Library

The List Library allows you to create reusable dropdown options that can be used across multiple ticket types, ensuring consistency and saving setup time.

<div class="info-box">

**What is List Library?** It's a reusable set of list fields or options that standardizes and speeds up ticket type creation. Create once, reuse anytime.

</div>

#### Accessing the List Library

1.  Go to **Settings → Tickets**
2.  Click the **List library** tab (next to Ticket types)

#### Default Lists Provided

The system provides several default lists to help you get started:

| List Name      | List Type | Notes                        |
|----------------|-----------|------------------------------|
| Gender         | System    | Cannot be modified           |
| Marital Status | System    | Cannot be modified           |
| Employee Grade | Custom    | Can be edited and customized |
| Department     | System    | Cannot be modified           |
| Nationality    | System    | Cannot be modified           |
| Leave Type     | System    | Cannot be modified           |

#### Understanding the List Library Table

The List Library displays all available lists in a table with four columns:

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th>Column</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>List name</strong></td>
<td>The name of the list as it appears when configuring ticket type fields</td>
</tr>
<tr>
<td><strong>List type</strong></td>
<td><ul>
<li><strong>System:</strong> Pre-defined lists provided by Bayzat (e.g., Gender, Marital Status, Nationality). These cannot be edited or deleted.</li>
<li><strong>Custom:</strong> Lists you create. These can be edited, activated/deactivated, or deleted.</li>
</ul></td>
</tr>
<tr>
<td><strong>Used in (Ticket type)</strong></td>
<td>Shows how many ticket types currently use this list. Hover over the badge (e.g., "+11") to see the full list of ticket types, such as "Salary Discrepancy Request", "New Hardware Request", "Software Access Request", etc.</td>
</tr>
<tr>
<td><strong>Actions</strong></td>
<td><ul>
<li><strong>Active toggle:</strong> Green toggle to enable/disable the list without deleting it</li>
<li><strong>Edit (pencil icon):</strong> Opens dialog to modify list name and items</li>
<li><strong>Delete (trash icon):</strong> Permanently removes a custom list</li>
</ul></td>
</tr>
</tbody>
</table>

#### Creating a New List (Detailed Flow)

<div class="steps-container">

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Click Create New

In the List library tab, click the **Create new** button in the top right corner.

</div>

</div>

<div class="step">

<div class="step-number">

2

</div>

<div class="step-content">

#### Enter List Name

Enter the list name in **English (EN)**. The Arabic (AR) field is optional but recommended for bilingual support.

</div>

</div>

<div class="step">

<div class="step-number">

3

</div>

<div class="step-content">

#### Add List Items

Click **Add item** to add options to your list. For each item:

- Enter the value in English (EN) - required
- Enter the Arabic translation (AR) - optional
- Click the **+ Add item** button again to add more options

</div>

</div>

<div class="step">

<div class="step-number">

4

</div>

<div class="step-content">

#### Save the List

Click **Save** to create your list. It will appear in the List Library and be available when creating ticket type fields.

</div>

</div>

</div>

#### Managing Lists

Each custom list in the library can be managed with the following actions:

| Action | How to Use | Notes |
|----|----|----|
| **Activate/Deactivate** | Click the green toggle in the Actions column | Inactive lists won't appear when configuring ticket types |
| **Edit** | Click the pencil icon to open the edit dialog | You can modify the list name (EN/AR) and add, edit, or remove items |
| **Delete** | Click the trash icon to permanently remove | Only available for Custom lists not in use by any ticket type |

<div class="info-box">

**Note:** System lists cannot be modified or deleted. Only custom lists you create can be edited. Lists that are currently in use by ticket types should be deactivated rather than deleted.

</div>

#### How List Library Works

List Library lets you create reusable lists (like cost centers, departments, or ticket reasons) that can be applied across multiple ticket types—saving time, ensuring consistency, and reducing manual errors.

1.  **Create Field:** Add commonly used options such as cost centers, departments, or leave types
2.  **Add Field in a Ticket Type:** When setting up a ticket type, simply select an existing list instead of creating options from scratch

</div>

<div id="core-tasks" class="section section">

## Feature Usage

### Common Workflows

<div class="feature-grid">

<div class="feature-card">

#### Raise a Ticket

Employees submit requests through the My Tickets interface by selecting a category and ticket type.

</div>

<div class="feature-card">

#### Track Ticket Status

Employees monitor their ticket's progress from Pending through Approved/Rejected to Processed.

</div>

<div class="feature-card">

#### Process Tickets

Managers review pending tickets and approve or reject them, with optional bulk processing.

</div>

</div>

### Raising a Ticket (Employee Flow)

Employees submit tickets through the My Tickets interface. Follow these steps to create a new request.

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Navigate to My Tickets

Click 'Requests' in the left sidebar, then select 'My tickets' from the 'My requests' section.

</div>

</div>

<figure>
<img src="validation/screenshots/my-tickets-employee-view.png" alt="My Tickets page showing employee&#39;s submitted tickets" />
<figcaption>My Tickets page displaying all tickets submitted by the employee</figcaption>
</figure>

<div class="step">

<div class="step-number">

2

</div>

<div class="step-content">

#### Create New Ticket

Click the purple 'Create ticket' button in the top-right corner. A selection dialog appears with categories on the left and ticket types on the right.

</div>

</div>

<div class="step">

<div class="step-number">

3

</div>

<div class="step-content">

#### Select Category and Ticket Type

Choose a category (e.g., Payroll, Attendance, Business Travel) from the left panel. Then select the specific ticket type from the right panel.

</div>

</div>

<figure>
<img src="validation/screenshots/ticket-type-selection-dialog.png" alt="Category and ticket type selection dialog" />
<figcaption>Selection dialog showing categories (left) and ticket types (right)</figcaption>
</figure>

<div class="step">

<div class="step-number">

4

</div>

<div class="step-content">

#### Complete the Form

Fill in all required fields. Mandatory fields appear as standard fields, while optional fields are marked with "(optional)". Field types vary by ticket type and may include text, dates, times, numbers, and dropdown selections.

</div>

</div>

<figure>
<img src="validation/screenshots/attendance-regularization-form.png" alt="Ticket form with custom fields" />
<figcaption>Ticket form showing custom fields for the selected ticket type</figcaption>
</figure>

<div class="step">

<div class="step-number">

5

</div>

<div class="step-content">

#### Review and Submit

Review all entered information for accuracy. Click 'Submit' to create the ticket. You'll receive a ticket ID and the status will show as 'Pending'.

</div>

</div>

### Tracking Your Tickets

Open any ticket from your My Tickets list to view its full details and activity history.

<figure>
<img src="validation/screenshots/ticket-detail-panel.png" alt="Ticket detail panel with activities" />
<figcaption>Ticket detail panel showing status, submitted information, and activity timeline</figcaption>
</figure>

### Understanding Ticket Statuses

| Status | Meaning | Next Action |
|----|----|----|
| Pending | Awaiting approval | Wait for approver review |
| Approved | Request approved | Ticket is complete (Leave Encashment tickets may require additional payroll processing) |
| Rejected | Request declined | Review rejection reason |
| Processed | Completed (e.g., in payroll) | No action needed |

### Activities and Comments

The Activities and Comments section shows a complete timeline of all actions on the ticket:

- **Created:** When the ticket was submitted
- **Edited:** When details were modified
- **Accepted:** When an approver approved the ticket
- **Rejected:** When an approver rejected the ticket
- **Comments:** Messages between employee and approvers

### Processing Tickets (Manager Flow)

1.  Navigate to Requests → Employee Tickets
2.  Click 'Pending' tab to view tickets awaiting approval
3.  Click on a ticket row to open the detail panel
4.  Review all submitted information
5.  Click 'Approve' or 'Reject' (add reason if rejecting)

<figure>
<img src="validation/screenshots/03-employee-tickets-pending-tab.png" alt="Pending tickets tab" />
<figcaption>Pending tab showing tickets awaiting manager approval</figcaption>
</figure>

<figure>
<img src="validation/screenshots/04-employee-tickets-approved-tab.png" alt="Approved tickets tab" />
<figcaption>Approved tab showing processed tickets</figcaption>
</figure>

<div class="info-box">

**Bulk Actions:** Select multiple tickets using checkboxes. A bulk action bar appears above the tickets table for approving or rejecting multiple requests at once.

</div>

### Creating Tickets on Behalf of Employees (Admin)

HR administrators can create tickets on behalf of employees when needed. This is useful when an employee cannot access the system or when HR needs to submit a request for an employee.

1.  Navigate to Requests → Employee Tickets
2.  Click the 'Create ticket' button in the top-right corner
3.  Select the employee from the employee selector dropdown
4.  Choose the ticket category and type
5.  Fill in the required fields on behalf of the employee
6.  Submit the ticket - it will appear in the employee's My Tickets and follow the normal approval workflow

<div class="info-box">

**Note:** Tickets created on behalf of employees are tracked in the activity timeline, showing that an admin submitted the request. The employee will receive notifications about their ticket's status.

</div>

### Generating Reports

Click 'Download' to generate reports. Generated reports will be visible under 'View reports', where they can be downloaded locally in Excel format for auditing and analysis.

<figure>
<img src="validation/screenshots/06-view-reports-modal.png" alt="View reports modal" />
<figcaption>Generate and download ticket reports in Excel format</figcaption>
</figure>

</div>

<div id="workflow-integration" class="section section">

## Workflow Integration

### How Workflows Connect to Employee Tickets

The **Bayzat Employee Ticket** application is available as a workflow trigger source. This means any ticket event can initiate an automated sequence of actions across the Bayzat platform.

<div class="nav-path">

Access: Automations (left sidebar) → Workflows

</div>

### Triggers and Actions

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th>Available Triggers</th>
<th>Available Actions</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Employee ticket is created</strong><br />
Fires when an employee submits a new ticket</td>
<td><strong>Create Pay Adjustment</strong><br />
Add deductions or additions to payroll</td>
</tr>
<tr>
<td><strong>Employee ticket status is updated</strong><br />
Fires when status changes (Pending → Approved/Rejected)</td>
<td><strong>Send Email</strong><br />
Notify employees, managers, or teams</td>
</tr>
<tr>
<td rowspan="2"><strong>Conditions available:</strong><br />
• Ticket Status (Approved, Rejected, Pending)<br />
• Dynamic Fields (custom fields from ticket type)<br />
• Timestamps (approval/rejection dates)<br />
• Employee Data</td>
<td><strong>Send Mobile Notification</strong><br />
Push alerts to Bayzat mobile app</td>
</tr>
<tr>
<td><strong>Create Task</strong><br />
Assign follow-up tasks to team members</td>
</tr>
</tbody>
</table>

### Real-World Workflow Examples

The following workflows demonstrate how Employee Tickets can be automated in your organization:

<div class="feature-card">

#### Example 1: Insurance Upgrade Deduction Workflow

**Scenario:** When an employee's insurance upgrade request is approved, automatically create a payroll deduction for the upgrade cost.

|  |  |
|----|----|
| **Trigger** | Employee ticket status is updated |
| **Condition** | IF Ticket Status = "Approved" |
| **Action** | Create pay adjustment request with amount from "Cost of upgrade" field |
| **Else Condition** | IF Status = "Pending" → Send email reminder to approver |

*Result: Finance no longer manually tracks approved upgrade tickets—payroll deductions are created automatically.*

</div>

<div class="feature-card">

#### Example 2: New Ticket Notification Workflow

**Scenario:** Notify the manager via mobile push notification whenever an employee submits a new ticket.

|  |  |
|----|----|
| **Trigger** | Employee ticket is created |
| **Condition** | Select the specific ticket type(s) in the trigger configuration |
| **Action** | Send mobile notification to line manager |

*Note: You must select at least one ticket type in the trigger event. The workflow will fire only for the selected ticket type(s).*

*Result: Managers receive instant alerts and can approve tickets faster, reducing employee wait times.*

</div>

<div class="feature-card">

#### Example 3: Business Trip Expense Workflow

**Scenario:** When a business trip ticket is approved, automatically add the approved expense amount as a payroll addition.

|               |                                                             |
|---------------|-------------------------------------------------------------|
| **Trigger**   | Employee ticket status is updated                           |
| **Condition** | IF Ticket Status = "Approved"                               |
| **Action**    | Create pay adjustment (addition) with "Ticket Value" amount |

*Result: Approved travel reimbursements flow directly to payroll without manual data entry.*

</div>

### Scenarios Solved by Workflows

Consider implementing workflows for these common automation opportunities:

| Scenario | Without Workflow | With Workflow |
|----|----|----|
| **Expense reimbursement approved** | HR manually enters amount into payroll system | Payroll adjustment created automatically with exact amount |
| **New urgent ticket submitted** | Manager checks queue periodically, may miss time-sensitive requests | Instant mobile notification alerts manager immediately |
| **Insurance deduction request** | Finance tracks approved tickets manually, creates deductions before payroll | Deduction auto-created upon approval, no manual tracking needed |
| **Ticket pending for too long** | Employee follows up manually, creates friction | Automated reminder email sent to approver after X days |
| **Approved leave encashment** | Payroll team reviews approved tickets, manually calculates and adds to payroll | Pay addition auto-created with encashment value from ticket |

</div>

<div id="business-rules-limitations" class="section section">

## Business Rules & Limitations

### Core Business Rules

| Rule | Description | Impact |
|----|----|----|
| Ticket assignment required | Employees can only submit ticket types assigned to them | Contact HR if needed ticket type is missing |
| Edit window limited | Employees can edit tickets only while pending before any approver action | Once approved/rejected, request rejection to resubmit with corrections |
| Approval chain | Some tickets require multiple approvals in sequence | Ticket moves through approvers until fully approved |
| Payroll integration | Approved monetary tickets go to payroll queue | Processed in next payroll cycle |

### System Constraints

- Employees must be assigned to ticket types by HR before they can submit
- All required fields must be completed before submission
- Approvers must have appropriate role permissions
- Rejected tickets cannot be reactivated by employees. However, admins can reactivate them by moving to pending status or can directly approve from the rejected state

</div>

<div id="troubleshooting-edge-cases" class="section section">

## Troubleshooting & Edge Cases

### Common Issues

| Issue | Cause | Resolution |
|----|----|----|
| Create ticket button missing | No ticket types assigned to employee | Contact HR to verify permissions |
| Category shows no ticket types | No types configured or permission issue | Try different category or contact HR |
| Form validation error | Required field not completed | Fill all fields marked with asterisk (\*) |
| Submission failed | Network connectivity issue | Check connection and retry |
| Ticket stuck in pending | Awaiting next approver in chain | Check ticket details for current approver |

### Known Limitations

<div class="info-box">

**Editing Tickets:** Employees can edit their tickets while in pending state, before any approver takes action. Once an approver approves or rejects the ticket, it can no longer be edited by the employee.

</div>

<div class="info-box">

**Approval Configurations:** Admins can configure approval flows with sequential approvals (multiple levels where approvers act one after another) or parallel approvals (multiple approvers at the same level where any one can approve). The configuration depends on how the admin sets up the ticket type.

</div>

### Edge Cases

- **Approver unavailable:** Contact HR to update the approval flow configuration. Note that approval flow changes will apply to all new tickets and current tickets with pending approval status
- **Duplicate submissions:** Check My Tickets before creating to avoid duplicates
- **Retroactive requests:** Some ticket types may have date restrictions

</div>

<div id="support-resources" class="section section">

## Support Resources

### Frequently Asked Questions

<div class="faq-accordion">

How do I submit a leave encashment request?

<div class="faq-answer">

Go to Requests (left sidebar) → My tickets → Click 'Create ticket' → Select 'Payroll' category → Choose 'Leave Encashment' → Fill in the details and submit.

</div>

Why is my ticket still pending?

<div class="faq-answer">

Tickets may require multiple approvals. Open your ticket details and check the approver section to see where it is in the approval chain. You can also add a comment to ask about the status.

</div>

Can I edit a submitted ticket?

<div class="faq-answer">

Yes, you can edit your ticket while it is in pending state, before any approver takes action. Once an approver approves or rejects the ticket, it can no longer be edited. If your ticket has already been actioned, ask your manager or HR to reject it so you can submit a new one with correct information.

</div>

How do I know when my ticket is processed?

<div class="faq-answer">

You'll receive a notification when the status changes. Approved tickets show a 'Processed' badge once they've been included in payroll or completed.

</div>

How do I bulk approve tickets?

<div class="faq-answer">

In the Pending tab, select multiple tickets using checkboxes. A bulk action bar will appear above the tickets table with Approve and Reject buttons.

</div>

</div>

### Getting Help

- Contact your HR Administrator for policy questions and configuration support
- Bayzat Support Team - Available for technical issues and feature questions
- Knowledge Base - Access additional articles and guides
- In-app Help - Contextual help available within the Bayzat platform

</div>

<div id="glossary" class="section section">

## Glossary of Terms

| Term | Definition |
|----|----|
| **Employee Ticket** | A formal request submitted through the system for HR-related matters. |
| **Ticket Category** | Grouping of ticket types (e.g., Payroll, Attendance, Business Travel). |
| **Ticket Type** | Specific request template with custom fields within a category. |
| **Approval Workflow** | The sequence of approvers a ticket must pass through before processing. |
| **Pending Status** | Ticket is waiting for approval from one or more approvers. |
| **Processed Status** | Approved ticket has been fully processed (e.g., added to payroll). |
| **Activity Timeline** | Chronological record of all actions taken on a ticket. |
| **My Tickets** | Employee self-service portal showing all their submitted tickets. |
| **Bulk Actions** | Processing multiple tickets at once using checkboxes and action bar. |
| **Custom Fields** | Ticket-type specific input fields configured by HR administrators. |

</div>

Generated by Bayzat Documentation System

Last updated: 2026-01-14
