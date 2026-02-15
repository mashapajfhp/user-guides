<div class="hero-banner">

# Work Expenses

Streamline employee expense reimbursements with automated approvals and seamless payroll integration

</div>

<div class="nav-header">

<span class="nav-icon">📖</span> <span class="nav-title">Quick Navigation</span>

</div>

<div class="nav-grid">

<a href="#feature-overview" class="nav-card"><span class="card-icon">✨</span> <span class="card-label">Feature Overview</span></a> <a href="#product-foundation" class="nav-card"><span class="card-icon">🏗️</span> <span class="card-label">Product Foundation</span></a> <a href="#user-journey" class="nav-card"><span class="card-icon">🗺️</span> <span class="card-label">User Journey</span></a> <a href="#feature-discovery" class="nav-card"><span class="card-icon">🔍</span> <span class="card-label">Feature Discovery</span></a> <a href="#roles-permissions" class="nav-card"><span class="card-icon">👥</span> <span class="card-label">Roles &amp; Permissions</span></a> <a href="#setup-process" class="nav-card"><span class="card-icon">⚙️</span> <span class="card-label">Initial Setup</span></a> <a href="#feature-usage" class="nav-card"><span class="card-icon">📋</span> <span class="card-label">Admin View</span></a> <a href="#employee-self-service" class="nav-card"><span class="card-icon">👤</span> <span class="card-label">Employee Portal</span></a> <a href="#approving-expenses" class="nav-card"><span class="card-icon">✅</span> <span class="card-label">Approving Expenses</span></a> <a href="#workflow-integration" class="nav-card"><span class="card-icon">🔄</span> <span class="card-label">Workflow Integration</span></a> <a href="#reporting" class="nav-card"><span class="card-icon">📊</span> <span class="card-label">Reporting</span></a> <a href="#business-rules" class="nav-card"><span class="card-icon">📜</span> <span class="card-label">Business Rules</span></a> <a href="#troubleshooting" class="nav-card"><span class="card-icon">🔧</span> <span class="card-label">Troubleshooting</span></a> <a href="#support-resources" class="nav-card"><span class="card-icon">💬</span> <span class="card-label">Support Resources</span></a> <a href="#glossary" class="nav-card"><span class="card-icon">📚</span> <span class="card-label">Glossary</span></a>

</div>

<figure>
<img src="validation/screenshots/03-work-expenses-main-page.png" alt="Work Expenses main page showing expense list" />
<figcaption>Work Expenses Dashboard - Track and manage employee expense reimbursements with status filtering</figcaption>
</figure>

<div id="feature-overview" class="section section">

## What is Work Expenses?

### Overview

Work Expenses is a comprehensive expense management module within the Bayzat HR platform that enables employees to submit reimbursement requests for work-related expenditures. The feature automates the entire expense lifecycle—from initial submission with receipt uploads to final settlement through payroll processing.

### Key Benefits

- **Effortless Submission:** Employees submit expense requests with receipt uploads and OCR auto-extraction
- **Structured Approvals:** Multi-level approval workflows with line manager routing and status tracking
- **Payroll Integration:** Approved expenses automatically flow to payroll for timely reimbursement
- **Complete Visibility:** Track expenses through five distinct statuses from submission to settlement
- **Multi-Currency Support:** Submit expenses in various currencies (AED, USD, EUR, etc.)

### Who Uses This Feature?

| User Role | What They Do | Value Proposition |
|----|----|----|
| **Employees** | Submit expense requests for travel, office supplies, mileage, and other work-related costs | Submit expenses on-the-go and track reimbursement status in real-time—eliminating paper receipts, lost forms, and endless follow-ups with finance |
| **Line Managers** | Review and approve/reject expense requests from direct reports | Make faster, informed approval decisions with complete expense visibility—rather than chasing missing receipts or justifications via email |
| **Expense Managers** | Oversee all company expense requests and manage approval workflows | Maintain full control over company spending with automated policy enforcement—eliminating manual compliance checks and reducing fraudulent claims |
| **Payroll Table Managers** | Add approved expenses to payroll cycles for reimbursement processing | Seamlessly integrate expense reimbursements into payroll runs—without manual data entry, calculation errors, or delayed employee payments |
| **Super Admins** | Configure approval flows, manage categories, and oversee the entire expense system | Design expense workflows that match your organization's structure—ensuring the right people approve the right expenses at the right thresholds |

</div>

<div id="product-foundation" class="section section section-product-foundation">

<div class="section-header">

## Product Foundation Overview

</div>

<div class="section-body">

<div class="subsection">

### How Work Expenses Fits

Work Expenses is a **transaction processing system** that routes employee reimbursement requests through approval workflows to payroll. Each expense moves through defined stages from submission to settlement.

<div class="info-box">

**Mental model:** Expense Submission → Approval Workflow → Add to Payroll → Settlement

</div>

Expenses are individual transactions. Approval flow configuration affects all future submissions but not pending requests.

</div>

<div class="subsection">

### Key Decisions Before Setup

Answer these questions before configuring work expenses:

- **Expense types?** — Standard reimbursement, mileage, or both?
- **Categories?** — What expense categories does your organization need?
- **Approval levels?** — Line manager only or multi-level approval?
- **Currency support?** — Which currencies will employees submit in?

</div>

<div class="subsection">

### Related Features

- **Payroll Module** — Processes approved expenses for reimbursement
- **Approval Workflows** — Routes requests through configured approvers
- **Employee Profiles** — Links expenses to employee records
- **Mobile App** — Submit expenses with receipt photos on-the-go
- **OCR Technology** — Auto-extracts expense details from receipts

</div>

<div class="subsection">

### Prerequisites & Requirements

| Requirement | Description | Status |
|----|----|----|
| Bayzat HR Platform | Active account with Payroll module enabled | Required |
| User Roles | Expense Manager or appropriate permissions | Required |
| Employee Records | Active employee profiles with email addresses | Required |
| Approval Flows | At least one approval flow configured | Required |
| Expense Categories | Categories created in Settings | Recommended |
| Line Manager Assignment | Employee reporting structure defined | Recommended |

</div>

</div>

</div>

<div id="user-journey" class="section section">

## Complete User Journey Guide

### Employee Journey

The typical workflow for employees submitting their own expense requests.

<div class="journey-phases">

<div class="journey-phase">

<div class="phase-marker">

1

</div>

<div class="phase-content">

#### Create Expense

<div class="nav-path">

Finance Ops → My work expenses → Add expense

</div>

<a href="#employee-self-service" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

2

</div>

<div class="phase-content">

#### Save as Draft (Optional)

<div class="nav-path">

Click "Save as Draft" → Incomplete tab

</div>

<a href="#employee-self-service" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

3

</div>

<div class="phase-content">

#### Submit Expense

<div class="nav-path">

Click "Submit Request" → Pending Requests

</div>

<a href="#employee-self-service" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

4

</div>

<div class="phase-content">

#### Track Status

<div class="nav-path">

Monitor through Pending → Approved → Settled

</div>

<a href="#employee-self-service" class="phase-link">See details →</a>

</div>

</div>

</div>

### Manager/Admin Journey

The workflow for managers and administrators managing employee expenses.

<div class="journey-phases">

<div class="journey-phase">

<div class="phase-marker">

1

</div>

<div class="phase-content">

#### Create on Behalf (Optional)

<div class="nav-path">

Finance Ops → Employee Work Expenses → Add expense → Select employee

</div>

<a href="#feature-usage" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

2

</div>

<div class="phase-content">

#### Review Pending

<div class="nav-path">

Pending Requests tab → View details

</div>

<a href="#approving-expenses" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

3

</div>

<div class="phase-content">

#### Approve or Reject

<div class="nav-path">

Accept / Reject with reason

</div>

<a href="#approving-expenses" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

4

</div>

<div class="phase-content">

#### Add to Payroll

<div class="nav-path">

Approved tab → Add to payroll

</div>

<a href="#approving-expenses" class="phase-link">See details →</a>

</div>

</div>

</div>

### Expense Status Definitions

Understanding what each status means in the expense lifecycle:

| Status | Description | Who Can See |
|----|----|----|
| **Incomplete** | Draft expense saved but not yet submitted. Employee can edit freely before submitting. | Employee only |
| **Pending Requests** | Expense submitted and awaiting approval from designated approvers in the workflow. | Employee, Approvers, Admins |
| **Approved** | All required approvers have approved. Waiting to be added to a payroll cycle. | Employee, Approvers, Admins |
| **Rejected** | An approver has rejected the expense. Rejection reason visible in Activity Feed. | Employee, Approvers, Admins |
| **Added to Payroll** | Expense has been included in a payroll table for processing. | Employee, Approvers, Admins |
| **Settled** | Reimbursement has been paid to the employee through payroll. | Employee, Approvers, Admins |

### Status Flow Diagram

<div class="status-flow">

<span class="status-level status-pending">Incomplete</span> <span class="status-arrow">→</span> <span class="status-level status-pending">Pending Requests</span> <span class="status-arrow">→</span> <span class="status-level status-approved">Approved</span> <span class="status-arrow">→</span> <span class="status-level status-payroll">Added to Payroll</span> <span class="status-arrow">→</span> <span class="status-level status-settled">Settled</span>

</div>

<div class="status-flow">

<span class="status-level status-pending">Pending Requests</span> <span class="status-arrow">→</span> <span class="status-level status-rejected">Rejected</span>

</div>

### Edit & Delete Permissions

Who can modify or delete expenses at each stage:

| Status | Employee Can Edit | Employee Can Delete | Admin Can Edit | Admin Can Delete |
|----|----|----|----|----|
| **Incomplete** | Yes | Yes | Yes | Yes |
| **Pending Requests** | No | No | Yes | Yes |
| **Approved** | No | No | Limited | Yes |
| **Rejected** | No | No | No | Yes |
| **Added to Payroll** | No | No | No | No\* |
| **Settled** | No | No | No | No |

<div class="info-box">

**\*Note:** Once an expense is added to payroll, it cannot be deleted through the UI. Contact your system administrator for backend intervention if absolutely necessary.

</div>

### Comments & Activity Feed

Every expense has an Activity Feed that tracks all actions and allows communication between employees and approvers.

#### Adding Comments

- Click on any expense to open the detail modal
- Navigate to the **Activity Feed** tab
- Type your comment in the text field
- Use **@** followed by a person's name to tag and notify them (e.g., @John Smith)
- Tagged users receive a notification about the comment

<div class="info-box">

**Tagging Tip:** Use @mentions to notify specific people about questions or clarifications needed on an expense. This is useful for approvers requesting additional information from employees.

</div>

<figure>
<img src="validation/screenshots/04-approved-expenses-tab.png" alt="Approved expenses tab showing list of approved expense requests" />
<figcaption>Approved Tab - View all approved expense requests ready for payroll processing</figcaption>
</figure>

</div>

<div id="feature-discovery" class="section section">

## Feature Discovery

### How to Access

Work Expenses is accessed through the Finance Ops menu in the main navigation sidebar.

### Navigation Paths

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Access Work Expenses

Finance Ops → Work Expenses → View expense requests by status tabs

</div>

</div>

<figure>
<img src="validation/screenshots/02-finance-ops-menu-expanded.png" alt="Finance Ops menu expanded showing Work Expenses option" />
<figcaption>Finance Ops menu with Work Expenses highlighted in the navigation sidebar</figcaption>
</figure>

<div class="step">

<div class="step-number">

2

</div>

<div class="step-content">

#### View Expense Dashboard

The main page shows status tabs: Pending Requests, Approved, Rejected, Added to Payroll, Settled

</div>

</div>

<figure>
<img src="validation/screenshots/03-work-expenses-main-page.png" alt="Work Expenses main dashboard" />
<figcaption>Main Work Expenses page with status tabs and expense list</figcaption>
</figure>

<div class="step">

<div class="step-number">

3

</div>

<div class="step-content">

#### Filter and Search

Use search bar and filter options to find specific expenses by employee, date, or amount

</div>

</div>

</div>

<div id="roles-permissions" class="section section">

## User Roles & Permissions

Before configuring Work Expenses, understand the roles involved and their permissions. This helps you plan approval flows and assign appropriate access levels.

### Role Definitions

| Role | Permissions | Assignment |
|----|----|----|
| **Super Admin** | Full access: create, view, edit, approve, reject, delete expenses; configure approval flows and categories | Settings → Role Management |
| **Expense Manager** | View and manage all expenses; approve/reject requests; add expenses to payroll | Settings → Role Management |
| **Payroll Table Manager** | Add approved expenses to payroll table; view expense details; manage payroll processing | Settings → Role Management |
| **Transaction Processor** | Process expense settlements; manage payment workflows; view expense details | Settings → Role Management |
| **Line Manager** | Approve/reject expenses for direct reports; view team member expenses | Employee reporting structure |
| **Employee** | Submit own expense requests; view own expense history; track request status | Automatic for all employees |

<div class="warning-box">

**Important:** Line Manager permissions are automatically granted based on the organizational reporting structure. Ensure employee profiles have correct Line Manager assignments before configuring approval flows.

</div>

</div>

<div id="setup-process" class="section section">

## Initial Setup

Before employees can submit expenses, administrators must configure expense categories, mileage settings, and approval flows to determine how expense requests are categorized, calculated, and routed through your organization.

### Configuring Work Expense Settings

Navigate to **Settings → Work Expenses** to configure expense categories and mileage settings for your organization.

<figure>
<img src="validation/screenshots/settings-work-expenses-main.png" alt="Work Expenses settings page with Expense Categories and Mileage Expenses sections" />
<figcaption>Work Expenses Settings - Configure expense categories and mileage options</figcaption>
</figure>

#### Managing Expense Categories

Expense categories help organize and classify employee expenses for reporting and approval purposes. Expand the **Expense Categories** section to view, add, edit, or delete categories.

<figure>
<img src="validation/screenshots/settings-expense-categories-list.png" alt="Expense Categories list showing Name and Policy columns" />
<figcaption>Expense Categories List - View all configured expense categories with their policies</figcaption>
</figure>

| Column | Description |
|----|----|
| **Name** | Display name for the category (e.g., Travel, Office Supplies, Petty Cash) |
| **Policy** | Optional policy text describing rules or guidelines for this category |
| **Actions** | Edit (pencil icon) or Delete (trash icon) existing categories |

#### Adding a New Expense Category

Click **Add new** to create a new expense category. Enter the category name and optional policy description.

<figure>
<img src="validation/screenshots/settings-add-expense-category-dialog.png" alt="Add new expense category dialog with Name and Policy fields" />
<figcaption>Add Expense Category - Enter name and optional policy for the new category</figcaption>
</figure>

<div class="info-box">

**Policy Field:** Use the Policy field to provide guidance to employees about when to use this category or any spending limits that apply. This text will be visible to employees when selecting the category.

</div>

#### Configuring Mileage Expenses

Expand the **Mileage Expenses** section to enable mileage-based reimbursements and set the per-kilometer rate.

<figure>
<img src="validation/screenshots/settings-mileage-expenses-expanded.png" alt="Mileage Expenses settings showing enable toggle and rate per KM" />
<figcaption>Mileage Settings - Enable mileage expenses and configure the reimbursement rate</figcaption>
</figure>

| Setting | Description |
|----|----|
| **Enable Mileage Expenses** | Toggle to enable/disable mileage reimbursement requests for employees |
| **Mileage Rate per KM** | The reimbursement amount per kilometer traveled (e.g., 0.5 AED/km) |

<div class="warning-box">

**Important:** Only ONE expense category can be configured with mileage rate. Changing the mileage rate affects all future mileage expense submissions but does not retroactively update existing requests.

</div>

### Configuring Approval Flows

Navigate to **Automations → Approval flows → Expense** to configure expense approval routing.

<figure>
<img src="validation/screenshots/approval-flow-expense-overview.png" alt="Expense approval flow configuration page" />
<figcaption>Approval Flow Configuration - Manage default and advanced approval flows</figcaption>
</figure>

#### Flow Structure

Expense approval flows follow an **If/Else** logic:

- **Advanced Approval Flow (If conditions):** Conditional routing based on criteria like amount thresholds, categories, or employee attributes
- **Default Approval Flow (Else):** Used when no advanced criteria match - this is the fallback flow

<div class="info-box">

**How it works:** When an expense is submitted, the system checks each advanced flow's criteria in order. If a match is found, that flow's approvers are used. If no criteria match, the default flow applies.

</div>

#### Creating Advanced Approval Flows

Click **Add advance flow** to create conditional approval routing based on expense attributes.

<figure>
<img src="validation/screenshots/approval-flow-advanced-edit.png" alt="Advanced flow editor with criteria configuration" />
<figcaption>Advanced Flow Editor - Configure criteria-based approval routing</figcaption>
</figure>

#### Available Criteria Data Points

Advanced flows can be configured using these criteria:

<figure>
<img src="validation/screenshots/approval-flow-criteria-options.png" alt="Available criteria data points for approval flow" />
<figcaption>Criteria Options - Category, Amount, Currency, and Employee attributes</figcaption>
</figure>

| Data Point | Description | Example Use Case |
|----|----|----|
| **Category** | Expense category type | Route "Travel" expenses to Travel Manager |
| **Requested Amount → Currency** | Currency of the expense | Route USD expenses to Finance Director |
| **Requested Amount → Amount** | Numeric value of expense | Expenses over 5000 AED require VP approval |
| **Employee attributes** | Department, location, etc. | Route by department or employee level |

#### Amount Operations

When using amount-based criteria, the following operations are available:

<figure>
<img src="validation/screenshots/approval-flow-amount-operations.png" alt="Operations available for amount criteria" />
<figcaption>Amount Operations - Comparison operators for amount-based routing</figcaption>
</figure>

| Operation                     | Use Case                                  |
|-------------------------------|-------------------------------------------|
| `is between`                  | Amount within a range (e.g., 100-500 AED) |
| `is not between`              | Amount outside a range                    |
| `is equal to`                 | Exact amount match                        |
| `is not equal to`             | Exclude specific amount                   |
| `is greater than`             | Above threshold (e.g., \> 5000 AED)       |
| `is greater than or equal to` | At or above threshold                     |
| `is less than`                | Below threshold                           |
| `is less than or equal to`    | At or below threshold                     |

<figure>
<img src="validation/screenshots/approval-flow-criteria-value-input.png" alt="Value input with variables option" />
<figcaption>Value Input - Enter amounts directly or use dynamic variables</figcaption>
</figure>

#### Configuring Approvers

Each approval flow step requires one or more approvers. Available approver roles include:

<figure>
<img src="validation/screenshots/approval-flow-approver-roles.png" alt="Available approver roles dropdown" />
<figcaption>Approver Roles - Select from available roles for each approval step</figcaption>
</figure>

| Role | Description |
|----|----|
| **Work Expense Manager** | Dedicated role for expense approval |
| **Expense Manager** | General expense management role |
| **Line Manager** | Employee's direct manager (with hierarchy level options) |
| **Super Admin** | System administrator with full access |

#### Line Manager Hierarchy Levels

When using Line Manager as an approver, you can specify the hierarchy level:

<figure>
<img src="validation/screenshots/approval-flow-line-manager-level.png" alt="Line Manager with level selector" />
<figcaption>Line Manager Level - Select specific management level</figcaption>
</figure>

<figure>
<img src="validation/screenshots/approval-flow-line-manager-levels.png" alt="All hierarchy level options (1-5 and All)" />
<figcaption>Hierarchy Levels - Choose from Level 1 (direct manager) through Level 5, or All levels</figcaption>
</figure>

| Level       | Meaning                               |
|-------------|---------------------------------------|
| **Level 1** | Direct manager (immediate supervisor) |
| **Level 2** | Manager's manager                     |
| **Level 3** | Third level up in hierarchy           |
| **Level 4** | Fourth level up in hierarchy          |
| **Level 5** | Fifth level up in hierarchy           |
| **All**     | All managers in the reporting chain   |

#### Alternative Approvers (OR Logic)

Within a single block, use **Add approver** to add alternative approvers. Any ONE of the approvers in the block can approve the expense.

<figure>
<img src="validation/screenshots/approval-flow-or-logic.png" alt="OR logic showing multiple approvers with OR between them" />
<figcaption>Alternative Approvers - Use OR logic when any one approver can approve</figcaption>
</figure>

<div class="info-box">

**Example:** If either the Line Manager OR the Department Head can approve an expense, add both roles within the same block using "Add approver".

</div>

#### Parallel Approval (AND Logic)

For expenses requiring approval from multiple parties simultaneously, use **Add block** to create parallel approval paths. All blocks must approve for the expense to proceed.

<figure>
<img src="validation/screenshots/approval-flow-add-block-parallel.png" alt="Parallel AND approval blocks" />
<figcaption>Parallel Approval - Multiple blocks use AND logic (all must approve)</figcaption>
</figure>

<div class="info-box">

**Example:** A high-value expense might require BOTH the Line Manager AND the Finance Director to approve before proceeding. Configure two parallel blocks with different approver roles.

</div>

#### Combining OR and AND Logic

| Action | Logic Type | Behavior |
|----|----|----|
| **Add approver** | OR | Any ONE of the approvers in the block can approve |
| **Add block** | AND | ALL blocks must approve for the expense to proceed |
| **Add step** | Sequential | Steps execute in order (Step 1 must complete before Step 2) |

### Setup Best Practices

<div class="feature-card">

#### Start Simple

Begin with a basic default flow and add advanced conditions as needed based on actual business requirements.

</div>

<div class="feature-card">

#### Use Amount Thresholds

Configure different approval levels based on expense amounts. Small expenses may need only line manager approval, while larger amounts require additional oversight.

</div>

<div class="feature-card">

#### Test Before Deploying

Submit test expenses to verify the approval flow routes correctly before rolling out to the organization.

</div>

<div class="feature-card">

#### Document Your Flows

Maintain documentation of your approval flow logic so team members understand the routing rules.

</div>

</div>

<div id="feature-usage" class="section section">

## Managing Expenses (Admin View)

Managers and administrators can view all employee expenses and submit expense requests on behalf of employees through the admin portal at **Finance Ops → Employee Work Expenses**.

### Submitting Expenses on Behalf of Employees

Admins can create expense requests for any employee by selecting them from the Employee dropdown when creating a new expense.

<div class="warning-box">

**Auto-Approval:** Expenses submitted by administrators on behalf of employees are **automatically approved** and bypass the normal approval workflow. Use this feature responsibly for legitimate reimbursements.

</div>

### Creating a New Expense Request

Click the "Add expense reimbursement" or "Add mileage reimbursement" button to create a new expense request.

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Open Add Expense Dialog

Click the purple "Add expense reimbursement" button in the top-right corner

</div>

</div>

<figure>
<img src="validation/screenshots/06-crud-create-form.png" alt="Add Expense form initial view" />
<figcaption>Add Expense Reimbursement dialog - Initial form with receipt upload option</figcaption>
</figure>

<div class="step">

<div class="step-number">

2

</div>

<div class="step-content">

#### Upload Receipt (Optional)

Upload a receipt image for OCR processing to auto-fill expense details

</div>

</div>

<div class="step">

<div class="step-number">

3

</div>

<div class="step-content">

#### Fill Expense Details

Select the appropriate expense category, enter amount, currency, date, and description. Categories are configured by your organization in [Settings → Work Expenses](#setup-process).

</div>

</div>

<figure>
<img src="validation/screenshots/07-crud-create-full-form.png" alt="Complete expense form with all fields" />
<figcaption>Complete expense form showing all required and optional fields</figcaption>
</figure>

<div class="step">

<div class="step-number">

4

</div>

<div class="step-content">

#### Submit Request

Click "Submit" to create the expense request and route it through the approval workflow

</div>

</div>

### Viewing Expense Details

Click on any expense row to view the complete details including payment information, approvers, and activity feed.

<figure>
<img src="validation/screenshots/05-expense-detail-modal-read.png" alt="Expense detail modal showing complete information" />
<figcaption>Expense Detail Modal - View payment details, approvers, and activity history</figcaption>
</figure>

<div class="info-box">

**Activity Feed:** Every expense has a complete audit trail showing submission, approvals, status changes, and comments from approvers.

</div>

### Editing and Deleting Expenses

Use the three-dot action menu on each expense row to access edit and delete options.

<figure>
<img src="validation/screenshots/08-crud-update-delete-menu.png" alt="Action menu showing Edit and Delete options" />
<figcaption>Action menu with Edit and Delete options for expense management</figcaption>
</figure>

</div>

<div id="employee-self-service" class="section section">

## Employee Self-Service Portal

Employees can create, submit, and track the status of their work expenses through the Bayzat employee self-service portal without needing admin assistance. This functionality is available on both:

- **Bayzat Web App** - Access via browser at app.bayzat.com
- **Bayzat Mobile App** - Available on iOS and Android for on-the-go expense submission

<div class="info-box">

**Mobile App Tip:** Use the Bayzat mobile app to snap photos of receipts immediately after a purchase. The app's OCR technology will auto-extract expense details, making submission quick and easy.

</div>

### Accessing My Work Expenses (Web)

Navigate to **Finance Ops → My work expenses** to access your personal expense dashboard.

<figure>
<img src="validation/screenshots/employee-my-work-expenses-main.png" alt="My Work Expenses employee self-service portal" />
<figcaption>My Work Expenses - Employee self-service portal for managing personal expense requests</figcaption>
</figure>

#### Status Tabs

Track your expenses through five status tabs:

| Tab | Description |
|----|----|
| **Incomplete** | Draft expenses saved but not yet submitted for approval |
| **Pending Requests** | Submitted expenses awaiting approval from your manager |
| **Approved** | Expenses approved and waiting to be added to payroll |
| **Rejected** | Expenses that were rejected by an approver |
| **Settled** | Expenses that have been reimbursed through payroll |

### Submitting an Expense Request

Click **Add expense reimbursement** or **Add mileage reimbursement** to create a new request.

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Upload Receipt (Optional)

Drag and drop a receipt image or click to browse your computer. OCR will auto-extract expense details.

</div>

</div>

<figure>
<img src="validation/screenshots/employee-add-expense-dialog.png" alt="Add expense dialog with receipt upload option" />
<figcaption>Add Expense Dialog - Upload a receipt or start without one</figcaption>
</figure>

<div class="step">

<div class="step-number">

2

</div>

<div class="step-content">

#### Fill Expense Details

Complete the expense form with category, date, amount, and description.

</div>

</div>

<figure>
<img src="validation/screenshots/employee-expense-form-full.png" alt="Full expense submission form" />
<figcaption>Expense Form - Enter expense details, payment information, and optional client reference</figcaption>
</figure>

#### Form Fields

| Field | Required | Description |
|----|----|----|
| **Category** | Yes | Select the expense type (e.g., Travel, Meals, Office Supplies) |
| **Date of Spend** | Yes | The date the expense was incurred |
| **Reference \#** | No | Optional reference number for tracking |
| **Client** | No | Associate expense with a specific client (if applicable) |
| **Description** | No | Add context about the expense purpose |
| **Currency** | Yes | Select the currency (AED, USD, EUR, etc.) |
| **Amount** | Yes | Total amount spent (inclusive of VAT) |

<div class="step">

<div class="step-number">

3

</div>

<div class="step-content">

#### Submit or Save as Draft

Click **Submit Request** to send for approval, or **Save as Draft** to complete later.

</div>

</div>

<div class="info-box">

**Tip:** Saved drafts appear in the "Incomplete" tab where you can edit and submit them later.

</div>

### Tracking Your Expenses

Monitor the status of your submitted expenses in the **Pending Requests** tab.

<figure>
<img src="validation/screenshots/employee-pending-requests-tab.png" alt="Pending Requests tab showing submitted expenses" />
<figcaption>Pending Requests - Track expenses awaiting approval</figcaption>
</figure>

<div class="info-box">

**Notifications:** You will receive notifications when your expense is approved, rejected, or settled through payroll.

</div>

</div>

<div id="approving-expenses" class="section section">

## Approving Expenses

As an expense approver (Line Manager, Expense Manager, or designated approver), you can review and take action on pending expense requests from your team.

#### Accessing Pending Expenses

Navigate to **Finance Ops → Employee Work Expenses** to view expenses pending your approval.

<figure>
<img src="validation/screenshots/approval-flow-pending-list.png" alt="Pending expenses list with Reject and Accept action buttons" />
<figcaption>Pending Expenses - View expenses awaiting approval with Reject and Accept action buttons</figcaption>
</figure>

#### Reviewing Expense Details

Click on any expense to open the detail modal showing the receipt image, expense information, and approver chain.

<figure>
<img src="validation/screenshots/approval-detail-modal.png" alt="Expense detail modal showing receipt and approvers section" />
<figcaption>Expense Detail Modal - View receipt, payment details, and approval chain</figcaption>
</figure>

#### Activity Feed & Audit Trail

The Activity Feed tab provides a complete audit trail of all actions taken on the expense, including comments and status changes.

<figure>
<img src="validation/screenshots/approval-activity-feed.png" alt="Activity feed showing comments and audit trail" />
<figcaption>Activity Feed - Complete history of actions, comments, and approvals</figcaption>
</figure>

#### Approving an Expense

Click the **Accept** button to approve the expense. A success message confirms the approval.

<figure>
<img src="validation/screenshots/approval-success-message.png" alt="Success message after approving expense" />
<figcaption>Approval Success - Confirmation message after approving an expense</figcaption>
</figure>

#### Rejecting an Expense

Click the **Reject** button to reject an expense. You must provide a rejection reason which will be visible to the employee in the Activity Feed.

<figure>
<img src="validation/screenshots/approval-reject-dialog.png" alt="Rejection confirmation dialog with reason field" />
<figcaption>Reject Dialog - Enter a mandatory reason for rejection</figcaption>
</figure>

#### Viewing Approved Expenses

Approved expenses appear in the Approved tab with an **Add to payroll** action button for payroll processing.

<figure>
<img src="validation/screenshots/approval-approved-list.png" alt="Approved expenses list with Add to payroll button" />
<figcaption>Approved Expenses - Ready for payroll processing</figcaption>
</figure>

#### Viewing Rejected Expenses

Rejected expenses are listed in the Rejected tab. The rejection reason is visible in the expense detail's Activity Feed.

<figure>
<img src="validation/screenshots/approval-rejected-list.png" alt="Rejected expenses list" />
<figcaption>Rejected Expenses - View all rejected expense requests</figcaption>
</figure>

<figure>
<img src="validation/screenshots/approval-rejected-detail-with-reason.png" alt="Rejected expense showing rejection reason in activity feed" />
<figcaption>Rejection Reason - Visible in the Activity Feed for transparency</figcaption>
</figure>

</div>

<div id="workflow-integration" class="section section">

## Workflow Integration

### Automation Capabilities

Work Expenses integrates with Bayzat Workflows for automation. While expenses cannot trigger workflows, three workflow actions are available for expense automation.

<figure>
<img src="validation/screenshots/workflow-03-available-actions.png" alt="Workflow actions available for Work Expenses" />
<figcaption>Available Workflow Actions: Create, Update, and Delete expense requests</figcaption>
</figure>

### Available Workflow Actions

| Action | Description | Use Case |
|----|----|----|
| Create expense request | Automatically create a new expense request | Auto-generate recurring expenses or travel allowances |
| Update expense request | Modify existing expense request details | Auto-update status or add notes based on triggers |
| Delete expense request | Remove an expense request from the system | Clean up duplicate or invalid requests |

<div class="info-box">

**No Triggers Available:** Work Expenses does not currently support workflow triggers. Expenses cannot trigger events like "expense submitted" or "expense approved." Actions can only be triggered by other system events.

</div>

<figure>
<img src="validation/screenshots/workflow-02-no-triggers-found.png" alt="No workflow triggers found for Work Expenses" />
<figcaption>Workflow trigger search showing no available triggers for Work Expenses</figcaption>
</figure>

</div>

<div id="reporting" class="section section">

## Reporting & Downloads

### Export Options

Work Expenses provides comprehensive reporting and export capabilities for tracking and compliance.

- **Excel Export:** Download expense list as an Excel file with all details
- **Attachment Downloads:** Download all receipts and attachments as a ZIP file
- **Filtered Reports:** Apply filters before export to get specific data sets

### Available Filters

| Filter | Description |
|----|----|
| Status | Filter by Pending, Approved, Rejected, Added to Payroll, or Settled |
| Date Range | Filter expenses by submission date range |
| Employee | Search for expenses by specific employee |
| Amount Range | Filter by expense amount |
| Category | Filter by expense category type |
| Pending By | Show expenses pending your approval |

</div>

<div id="business-rules" class="section section">

## Business Rules & Limitations

### Core Business Rules

| Rule | Description | Impact |
|----|----|----|
| Admin Auto-Approval | Expenses submitted by admins on behalf of employees are automatically approved | No approval workflow required for admin-submitted expenses |
| Payroll Dependency | Work Expenses module cannot be disabled without disabling Payroll | Modules are tightly integrated |
| Single Mileage Category | Only ONE expense category can be configured with mileage rate | Mileage reimbursement limited to one rate |
| Approval Chain | If any approver rejects, the expense is immediately rejected | Sequential approval stops on first rejection |

### Known Limitations

- **No Bulk Deletion:** Users cannot perform bulk deletions of work expenses via UI
- **No Custom Triggers:** Work expenses cannot trigger workflow events
- **Limited Role Control:** Cannot selectively disable Work Expenses by role
- **No Dynamic Columns:** Report views cannot be customized with custom fields
- **Currency Mismatch:** Deletion may fail if expense currency differs from payroll currency
- **No Client-Based Routing:** Approval workflows cannot use client or project fields as criteria

<div class="warning-box">

**Data Export Warning:** Admin users can download all company expense data via Excel export. Ensure proper data governance policies are in place.

</div>

</div>

<div id="troubleshooting" class="section section">

## Troubleshooting & Edge Cases

### Common Issues

| Issue | Cause | Resolution |
|----|----|----|
| Cannot submit expense | Missing required fields or permissions | Ensure all required fields are filled and you have appropriate role |
| Employee not in dropdown | Employee not active in system | Verify employee status in HR system |
| Expense stuck in pending | No approvers assigned or approval flow misconfigured | Check approval flow configuration in Settings |
| OCR not extracting data | Poor image quality or unsupported format | Upload clear, high-resolution receipt images |
| Cannot delete expense | Currency mismatch with payroll | Contact admin for backend intervention |
| Expense not in payroll | Not yet added to payroll table | Authorized user must add approved expense to payroll |

### Best Practices

<div class="feature-card">

#### Upload Clear Receipts

For best OCR results, upload clear, well-lit photos of receipts with all text visible.

</div>

<div class="feature-card">

#### Submit Promptly

Submit expense requests as soon as possible after incurring the expense to maintain accurate records.

</div>

<div class="feature-card">

#### Add Detailed Descriptions

Include business purpose and relevant details to expedite approval process.

</div>

<div class="feature-card">

#### Configure Before Launch

Set up approval flows, categories, and roles before enabling expense submissions for employees.

</div>

</div>

<div id="support-resources" class="section section">

## Support Resources

### Frequently Asked Questions

<div class="faq-accordion">

How do I submit an expense request?

<div class="faq-answer">

Navigate to Finance Ops → Work Expenses → Click "Add expense reimbursement" → Upload receipt (optional) → Fill in expense details → Click Submit.

</div>

Why is my expense stuck in Pending?

<div class="faq-answer">

Expenses require approval from designated approvers. Check if your Line Manager or Expense Manager needs to take action. Contact HR if the approval flow seems stuck.

</div>

Can I edit an expense after submission?

<div class="faq-answer">

Yes, if the expense is still in Pending status. Use the three-dot action menu to access the Edit option. Once approved, expenses cannot be edited.

</div>

How do I submit a mileage expense?

<div class="faq-answer">

Click "Add mileage reimbursement" instead of regular expense. Enter starting point, destination, and distance traveled. The system calculates reimbursement based on configured mileage rate.

</div>

When will I receive reimbursement?

<div class="faq-answer">

After approval, your expense must be added to the payroll table and processed with the next payroll cycle. Check the "Added to Payroll" and "Settled" tabs to track progress.

</div>

</div>

### Getting Help

- Contact your HR Administrator for policy questions and approval flow issues
- Submit support tickets through the Bayzat platform for technical issues
- Bayzat Support Team - Available for platform-wide technical assistance

</div>

<div id="glossary" class="section section">

## Glossary of Terms

| Term | Definition |
|----|----|
| **Expense Reimbursement** | A request for repayment of work-related costs incurred by an employee. |
| **Mileage Reimbursement** | A specific type of expense calculated based on distance traveled using personal vehicle. |
| **OCR (Optical Character Recognition)** | Technology that extracts text data from receipt images automatically. |
| **Approval Flow** | The configured sequence of approvers that expense requests must pass through. |
| **Line Manager** | An employee's direct supervisor, often the first approver in expense workflows. |
| **Expense Manager** | A role with permissions to view and manage all company expense requests. |
| **Payroll Table Manager** | A role responsible for adding approved expenses to payroll for processing. |
| **Pending Requests** | Expenses awaiting approval from designated approvers. |
| **Added to Payroll** | Status indicating the expense has been included in a payroll cycle for payment. |
| **Settled** | Final status indicating the expense has been fully reimbursed to the employee. |
| **Activity Feed** | A chronological log of all actions taken on an expense request. |

</div>

Generated by Bayzat Documentation System

Last updated: 2026-01-28
