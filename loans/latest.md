<div class="content-area" role="main" aria-label="User guide content">

<div id="feature-overview" class="section section section-feature-overview">

<div class="section-header">

## What is Employee Loans?

</div>

<div class="section-body">

<div class="subsection">

### Overview

The Employee Loans feature digitizes employee loan requests, approvals, and repayment tracking. Access loan requests through Payroll → Employee Loans, and manage loan policies through Settings → Payroll → Employee Loan Policies.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/02-employee-loans-main-page.png" class="screenshot" loading="lazy" alt="Employee Loans management interface" />
<figcaption>Employee Loans management interface showing pending, approved, and disbursed loan requests</figcaption>
</figure>

Approve or reject loan requests, track disbursement status, and monitor repayment schedules. The system automatically creates payroll additions for disbursements and recurring deductions for repayments.

</div>

<div class="subsection">

### Key Benefits

- Eliminate manual loan tracking spreadsheets and paper-based approval workflows
- Automate loan disbursement additions and recurring repayment deductions in payroll
- Enforce consistent loan policies with configurable limits and eligibility rules
- Track loan status from request through full repayment in one system
- Reduce errors in loan calculations and repayment schedules

</div>

<div class="strategic-context">

<div class="strategic-header">

### Strategic Context

</div>

<div class="strategic-grid">

<div class="strategic-card">

#### 🎯 What Employee Loans Solves

Replaces manual loan tracking, approval emails, and spreadsheet-based repayment calculations.

- Eliminates paper-based loan request forms and approval chains
- Standardizes loan policies across the organization with configurable rules
- Enables self-service loan requests for employees with automatic status updates

</div>

<div class="strategic-card">

#### 💰 Why It Matters

Loan policies drive payroll additions and recurring deductions, directly impacting net pay calculations.

- Prerequisite for automated payroll processing of employee financial assistance
- Controls loan disbursement timing and repayment schedule calculations
- Determines employee eligibility based on tenure, probation status, and salary thresholds

</div>

<div class="strategic-card">

#### 🏗️ How It Connects

Configuration template assigned to employees that generates transactional payroll records.

- Loan policies are assigned to employee groups or individuals
- Approved loans automatically create payroll additions (disbursement) and deductions (repayment)
- One loan policy can affect multiple employees; changes to policy rules apply to new requests only

</div>

</div>

</div>

<div class="subsection">

### Who Uses This Feature?

| User Role | What They Do | Value Proposition |
|----|----|----|
| **HR Administrators** | Create loan policies, set eligibility rules, approve/reject loan requests, and monitor repayment status | Eliminate manual loan tracking and enforce consistent policies instead of ad-hoc approvals |
| **Payroll Administrators** | Verify loan disbursements and deductions are correctly reflected in payroll cycles | Automate loan-related payroll entries instead of manual additions and deductions each cycle |
| **Employees** | Submit loan requests, view approval status, and track repayment schedules | Self-service loan applications instead of paper forms and email follow-ups |
| **Super Admins** | Configure loan policies, activate/deactivate policies, and manage system-wide loan settings | Centralized control over loan program parameters and eligibility criteria |

</div>

</div>

</div>

<div id="product-foundation" class="section section section-product-foundation">

<div class="section-header">

## Product Foundation Overview

</div>

<div class="section-body">

<div class="subsection">

### How Employee Loans Fits

Employee Loans lets you create loan policies that define lending rules, eligibility criteria, and repayment terms. Once a policy is assigned to employees, they can submit loan requests through the platform. Approved loans automatically generate payroll additions for disbursement and recurring deductions for repayment.

<div class="info-box">

**Mental model:** Loan Policy (template) → Assigned to Employees → Loan Request Submitted → Approved → Disbursement Addition + Recurring Deduction Created in Payroll

</div>

One loan policy can affect multiple employees. Changes to policy eligibility affect future loan requests, not existing loans.

</div>

<div class="subsection">

### Key Decisions Before Setup

Answer these questions before creating loan policies:

- **What loan amounts will you offer?** — Fixed amounts or percentage of salary
- **How will repayment work?** — Static period (e.g., 12 months) or flexible monthly deduction amount
- **Who is eligible?** — All employees, specific groups, or exclude probation employees
- **What currency?** — Must match your payroll currency settings

</div>

<div class="subsection">

### Related Features

- **Payroll** — Automatically creates loan disbursement additions and recurring repayment deductions
- **Employee Records** — Determines which employees can see and request loans based on policy assignment
- **Roles & Permissions** — Controls who can approve loan requests (Super Admin required)
- **Finance Reporting** — Tracks loan balances and repayment status across payroll cycles

</div>

<div class="subsection">

### Prerequisites & Requirements

| Requirement | Description | Status |
|----|----|----|
| Payroll Module Enabled | Loan disbursement and repayment features require active payroll | Required |
| Employee Records | Employees must exist in system before policy assignment | Required |
| Super Admin Role | Only Super Admins can approve loan requests | Required |
| Currency Configuration | Loan policy currency must match payroll currency | Required |
| Salary Data | Required if using percentage-based loan amounts | Conditional |

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

### End-to-End Journey: Employee Loan Management

From policy creation to loan disbursement and repayment tracking.

</div>

<div class="journey-phases">

<div class="journey-phase">

<div class="phase-marker">

1

</div>

<div class="phase-content">

#### Plan

Define loan policies, eligibility criteria, and repayment terms.

<a href="#product-foundation" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

2

</div>

<div class="phase-content">

#### Configure

Create loan policies with amounts, terms, and employee assignments.

<a href="#core-tasks" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

3

</div>

<div class="phase-content">

#### Request

Employees submit loan requests through the platform.

<a href="#core-tasks" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

4

</div>

<div class="phase-content">

#### Review

Approve or reject pending loan requests.

<a href="#core-tasks" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

5

</div>

<div class="phase-content">

#### Disburse

System creates payroll additions for approved loans.

<a href="#core-tasks" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

6

</div>

<div class="phase-content">

#### Track

Monitor loan status and automatic repayment deductions.

<a href="#troubleshooting-edge-cases" class="phase-link">See details →</a>

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

### How to Access Employee Loans

#### For Administrators: Loan Policy Setup

<div class="nav-path">

Settings → Payroll → Employee Loan Policies

</div>

Create and manage loan policies that define eligibility, amounts, and repayment terms.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/07-exploration-loan-policies.png" class="screenshot" loading="lazy" alt="Employee Loan Policies in Settings" />
<figcaption>Employee Loan Policies configuration under Settings → Payroll</figcaption>
</figure>

#### For Administrators: Loan Request Management

<div class="nav-path">

Payroll → Loans → Employee loans

</div>

View, approve, reject, and track employee loan requests across all statuses.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/02-employee-loans-main-page.png" class="screenshot" loading="lazy" alt="Employee Loans main page" />
<figcaption>Employee Loans management page showing loan requests across all status tabs</figcaption>
</figure>

#### Alternative Admin Access: Via Requests

<div class="nav-path">

Requests → Loans

</div>

Access the same Employee Loans management page through the Requests sidebar. This provides the same admin view for reviewing and processing loan requests.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/28-requests-loans-admin-view.png" class="screenshot" loading="lazy" alt="Employee Loans via Requests sidebar" />
<figcaption>Employee Loans admin view accessed via Requests → Loans</figcaption>
</figure>

#### For Employees: My Loans

<div class="nav-path">

Payroll → Loans → My loans

</div>

Submit loan requests and track your own loan status and repayment schedules.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/26-my-loans-page.png" class="screenshot" loading="lazy" alt="My Loans page via Payroll" />
<figcaption>My Loans self-service page accessed via Payroll → Loans → My loans</figcaption>
</figure>

#### Alternative Employee Access: Via Requests

<div class="nav-path">

Requests → My Requests → My loans

</div>

Access the same My Loans page through the Requests sidebar under the My Requests section.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/29-requests-my-loans-page.png" class="screenshot" loading="lazy" alt="My Loans via Requests sidebar" />
<figcaption>My Loans self-service page accessed via Requests → My Requests → My loans</figcaption>
</figure>

<div class="info-box">

**Note:** Employees must be assigned to an active loan policy before they can submit requests.

</div>

</div>

<div class="subsection">

### Navigation Paths by Task

| Task | Navigation Path | Required Permission |
|----|----|----|
| Create loan policy | Settings → Payroll → Employee Loan Policies → Create New Loan Policy | Super Admin |
| Review loan requests (admin) | Payroll → Loans → Employee loans | Super Admin / Custom Role |
| Review loan requests (alt) | Requests → Loans | Super Admin / Custom Role |
| Track disbursed loans | Payroll → Loans → Employee loans → Disbursed tab | Super Admin / Payroll Manager |
| Submit a loan request (employee) | Payroll → Loans → My loans | Employee |
| Submit a loan request (alt) | Requests → My Requests → My loans | Employee |
| View loan history | Payroll → Loans → Employee loans → \[Status tab\] | Super Admin / Payroll Manager |

</div>

</div>

</div>

<div id="initial-setup" class="section section section-initial-setup">

<div class="section-header">

## Initial Setup

</div>

<div class="section-body">

<div class="subsection">

### First-Time Configuration

Before employees can request Employee Loans, an administrator must create at least one loan policy. Loan policies define the lending rules including eligible amounts, repayment terms, and which employees can apply. Navigate to **Settings → Payroll** and expand the **Employee Loan Policies** accordion to view existing policies or create a new one.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/30-loan-policies-expanded.png" class="screenshot" loading="lazy" alt="Employee Loan Policies list expanded" />
<figcaption>Employee Loan Policies section under Settings → Payroll, showing existing policies with their status, employee count, and currency</figcaption>
</figure>

Each policy in the list displays its name, the number of assigned employees, creation date, currency, and an Active/Inactive toggle. Policies with existing loan requests cannot be deleted but can be deactivated. Click **Add new** at the bottom of the list to start creating a new loan policy.

#### Step 1: Setup Loan Policy

The policy creation wizard begins with the **Setup loan policy** step, which is divided into four sections:

**General:** Enter a recognizable **Policy Name** that employees will see when submitting loan requests, add a **Description** explaining the policy in simple terms, and select the **Currency** for all loan transactions under this policy (e.g., AED, BHD).

**Loan amounts:** Choose how loan limits are defined. Select **Fixed amount** to set absolute minimum and maximum loan values in the chosen currency, or select **Percentage of employee's salary** to define limits as a percentage of each employee's gross salary. The system recommends using salary percentages for compliance with local labor law standards. Enter the **Minimum loan amount** (must be greater than 0) and **Maximum loan amount**.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/33-create-policy-step1-filled.png" class="screenshot" loading="lazy" alt="Step 1 - Setup loan policy with filled fields" />
<figcaption>Step 1: Setup loan policy — General settings and loan amount configuration</figcaption>
</figure>

**Repayments:** Configure the repayment structure. Choose **Static** to define a fixed maximum number of monthly installments (the system recommends 12 months), or choose **Flexible** to define the maximum deductible percentage from the employee's gross salary each month. You can also toggle **Differ 1st loan repayment installment from the initial pay cycle** to delay the first deduction. Note that if an employee leaves the organization before the loan is settled, the remaining balance is automatically deducted from their end-of-service settlement.

**Loan Agreement (optional):** Upload a loan agreement document that employees will receive when their loan is approved. Drag and drop a file into the upload zone or browse your computer to select one.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/32-create-policy-step1-bottom.png" class="screenshot" loading="lazy" alt="Step 1 - Repayments and Loan Agreement sections" />
<figcaption>Step 1 continued: Repayment configuration and optional loan agreement upload</figcaption>
</figure>

Click **Next** to proceed to the employee assignment step.

#### Step 2: Add Employees

The second step determines which employees are eligible to request loans under this policy. The screen displays two columns: **Employees excluded** on the left and **Employees included** on the right. Each employee is listed with their name, job title, and avatar.

To assign employees to the policy, click the arrow icon next to an employee's name to move them from the excluded list to the included list. You can also use **Move all** to include every employee at once, or **Remove all** to clear the included list. Use the search bar at the top to find specific employees by name.

Check the **Employees on probation are not eligible for this policy** checkbox if you want to automatically exclude probationary employees from requesting loans under this policy.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/35-create-policy-step2-employees-added.png" class="screenshot" loading="lazy" alt="Step 2 - Add employees with included list" />
<figcaption>Step 2: Add employees — Moving employees from the excluded list (left) to the included list (right)</figcaption>
</figure>

Click **Next** to proceed to the review step.

#### Step 3: Review and Save Policy

The final step presents a summary of all your policy configurations for review before saving. The summary includes the policy name, description, effective date, currency, loan limit type, minimum and maximum amounts, installment type, maximum installment period, and the number of assigned employees.

At the top of the summary, an **Active** toggle lets you choose whether the policy becomes active immediately upon saving. You can also click the **Edit** button next to either the Policy configurations or Employee List sections to go back and make changes.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/36-create-policy-step3-review.png" class="screenshot" loading="lazy" alt="Step 3 - Review and save policy" />
<figcaption>Step 3: Review and save policy — Complete summary of all policy settings before activation</figcaption>
</figure>

Click **Save** to create the policy. A success dialog confirms the policy has been created and is active. From here you can return to configurations or create another policy.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/37-create-policy-success.png" class="screenshot" loading="lazy" alt="Policy creation success" />
<figcaption>Success confirmation after saving the loan policy</figcaption>
</figure>

</div>

<div class="subsection">

### Required Configuration Settings

| Setting | Description | Status |
|----|----|----|
| Policy Name | Must be entered in system's primary language | Required |
| Currency | Defines currency for all loan transactions under this policy | Required |
| Loan Amount Method | Choose fixed amount or percentage of employee salary | Required |
| Minimum Loan Amount | Must be greater than 0 | Required |
| Repayment Type | Static (fixed period) or flexible (monthly deduction amount) | Required |
| Employee Eligibility | Define which employees can access this policy | Required |
| Probation Exclusion | Option to exclude employees on probation from requesting loans | Optional |

</div>

<div class="subsection">

### Configuration Constraints

<div class="info-box">

**Note:** No maximum limit is enforced for loan amounts or percentages. Set appropriate limits based on company policy.

</div>

| Field | Constraint | Impact |
|----|----|----|
| Minimum Loan Amount | Must be \> 0 | System validation prevents saving policy with zero or negative minimum |
| Policy Activation | Only Super Admins can activate/deactivate | Inactive policies are not visible to employees |
| Employee Assignment | Employees without assigned policy cannot request loans | Loan request creation is blocked until policy is assigned |

</div>

<div class="subsection">

### Post-Setup Verification

After creating your first loan policy, verify the following:

- Policy appears in **Settings → Payroll → Employee Loan Policies** list
- Policy status shows as **Active**
- Eligible employees can see the policy when submitting loan requests
- Loan limits and repayment terms match company requirements

</div>

<div class="subsection">

### Configuring the Loan Approval Flow

Before loan requests can be processed, you should review and configure the approval flow that determines who must approve each loan request. Navigate to **Automations → Approval flows** and select **Loan** from the left-hand category list.

<div class="nav-path">

Automations → Approval flows → Loan

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/42-loan-approval-flow-full.png" class="screenshot" loading="lazy" alt="Loan approval flow configuration" />
<figcaption>Loan approval flow configuration showing Advanced and Default flow sections</figcaption>
</figure>

The Loan approval flow page is divided into two sections:

#### Advanced Approval Flow (If Conditions)

The advanced approval flow allows you to create conditional routing rules that direct loan requests to different approvers based on defined criteria. For example, you could route loans above a certain amount to a finance director while smaller loans go through a standard approval chain. Click **+ Add advance flow** to create a new conditional rule. Each advanced flow acts as an "if" condition — if the loan request matches the criteria, it follows that specific approval chain instead of the default flow.

#### Default Approval Flow (Else)

The default approval flow is used when no matching advanced flow condition is found. This is the fallback approval chain that applies to all loan requests that do not match any advanced flow criteria. By default, the Loan approval flow includes two steps:

- **Step 1 — Super Admin:** The loan request must first be approved by a user with the Super Admin role. You can click **Add approver** to include additional approvers at this step, or use the dropdown to change the approver role.
- **Step 2 — Line Manager (2 levels):** After Super Admin approval, the request is routed to the employee's Line Manager. The "2 levels" setting means it escalates up to two levels in the management hierarchy if the direct line manager is unavailable or does not act.

You can customize this flow by clicking **Add step** to insert additional approval stages, **Add approver** to add parallel approvers within a step, or **Add block** to group approval conditions. After making changes, click **Update approval flows** at the bottom of the page to save your configuration.

<div class="info-box">

**Note:** Changes to the approval flow apply to all new loan requests going forward. Existing pending requests continue through the approval chain that was active when they were submitted.

</div>

</div>

<div class="subsection">

### Workflows (Automations)

The Workflows module under **Automations → Workflows** allows you to create automated processes triggered by events across the platform. However, Employee Loans does not currently have dedicated loan-specific workflow triggers or actions available. You cannot create workflows that automatically trigger when a loan request is submitted, approved, rejected, or disbursed.

<div class="nav-path">

Automations → Workflows

</div>

If you need automated actions related to loans (such as sending notifications or updating external systems when a loan status changes), you will need to rely on the built-in approval flow described above or use general-purpose workflow triggers like employee updates combined with manual checks.

<div class="warning-box">

**Limitation:** No loan-specific triggers or actions are available in the Workflows module. Loan request automation is limited to the approval flow configuration described above.

</div>

</div>

<div class="subsection">

### Known Setup Limitations

<div class="warning-box">

**⚠️ Non-Assigned Loan Policy Restriction**

Employees cannot create loan requests without an assigned loan policy. Ensure all eligible employees are included in at least one active policy before enabling the feature.

</div>

<div class="info-box">

**Custom Role Limitation:** The platform does not support creating multiple custom roles with distinct loan approval permissions for sequential workflow management. This prevents implementing complex, multi-level approval processes.

</div>

</div>

</div>

</div>

<div id="core-tasks" class="section section section-core-tasks">

<div class="section-header">

## Key Tasks

</div>

<div class="section-body">

<div class="subsection">

### Employee Tasks

This section covers what employees can do with loans: submitting requests, editing or deleting pending requests, and tracking their loan status through each stage. Employees interact with the loan system through the **My Loans** page, accessible via **Payroll → Loans → My loans** or **Requests → My Requests → My loans**.

</div>

<div class="subsection">

### Task: Submit a Loan Request

To submit a new loan request, navigate to **Payroll → Loans → My loans** and click the **Submit a new loan request** button in the top-right corner.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/51-my-loans-employee-view.png" class="screenshot" loading="lazy" alt="My Loans employee view" />
<figcaption>My Loans page showing the employee's loan requests and the Submit a new loan request button</figcaption>
</figure>

The loan request form has three sections:

**1. Loan Policy:** Select from your assigned loan policies. Each policy card shows the policy name along with the minimum and maximum loan amounts available.

**2. Loan Details:** Enter the **Loan amount** (within the policy limits), a **Reason** for the loan, the **Tenure** in months (repayment period), a **Loan guarantor** name, and optionally upload supporting documents.

**3. Repayment Plan:** The system automatically calculates your repayment schedule based on the loan amount and tenure. Review the installment breakdown showing each month's payment amount before submitting.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/53-employee-loan-request-form.png" class="screenshot" loading="lazy" alt="Employee loan request form" />
<figcaption>Loan request form showing policy selection, loan details fields, and auto-calculated repayment plan</figcaption>
</figure>

Click **Submit** to send the request for approval. The loan will appear in your **Pending** tab until it is approved or rejected.

<div class="info-box">

**Note:** You must be assigned to at least one active loan policy to submit a request. If no policies appear on the form, contact your HR administrator.

</div>

</div>

<div class="subsection">

### Task: Manage Your Loan Requests

After submitting a loan request, track its progress through the **My Loans** page. Your loans are organized into five status tabs: **Pending**, **Approved**, **Rejected**, **Disbursed**, and **Completed**.

#### Editing or Deleting a Pending Request

While your loan is still in **Pending** status (awaiting approval), you can modify or cancel it. Click the three-dot menu on your pending loan to access these options:

- **Edit:** Modify the loan amount, reason, tenure, or other details before approval
- **Delete:** Cancel and remove the loan request entirely

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/52-my-loans-three-dot-menu.png" class="screenshot" loading="lazy" alt="My Loans three-dot menu on pending loan" />
<figcaption>Three-dot menu on a pending loan showing Edit and Delete options available to employees</figcaption>
</figure>

<div class="warning-box">

**Important:** Once your loan moves beyond Pending status, you can no longer edit or delete it. Make sure all details are correct before the approval process completes.

</div>

#### After Approval

Once your loan is approved, it moves to the **Approved** tab. From this point, you can only view loan details — no editing or deletion is possible. The loan then progresses through **Disbursed** (when funds are released and repayment deductions begin) and finally **Completed** (when all installments have been paid).

#### Employee Actions by Loan Status

| Status Tab | Available Actions | Notes |
|----|----|----|
| **Pending** | View details, Edit, Delete | Full control while awaiting approval |
| **Approved** | View details | Loan approved, awaiting payroll processing |
| **Rejected** | View details | Can submit a new request if needed |
| **Disbursed** | View details | Funds released, repayment deductions active |
| **Completed** | View details | All installments paid in full |

<div class="info-box">

**Note:** The employee view does not include an "At Payroll" tab. This status is only visible to administrators managing the payroll integration process.

</div>

</div>

------------------------------------------------------------------------

<div class="subsection">

### Administrator Tasks

This section covers administrator actions for managing the full loan lifecycle: submitting requests on behalf of employees, reviewing and approving loans, processing payroll integration, and monitoring disbursement and completion. Administrators manage all loan requests through the **Employee Loans** page at **Payroll → Loans → Employee loans**.

</div>

<div class="subsection">

### Task: Submit a Loan Request on Behalf of an Employee

Administrators can submit loan requests for employees directly. Navigate to **Payroll → Loans → Employee loans** and click the **Submit a new loan request** button.

The admin form begins with an employee selection step: **"Select an employee to create a loan request on behalf of them"**. Search for and select the employee, then complete the same loan request form (policy, amount, tenure, etc.) that employees use.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/54-admin-loan-request-form.png" class="screenshot" loading="lazy" alt="Admin loan request form with employee selector" />
<figcaption>Administrator loan request form showing the employee selection step</figcaption>
</figure>

<div class="info-box">

**Note:** Loans submitted by administrators on behalf of employees follow the same approval flow as employee-submitted requests.

</div>

</div>

<div class="subsection">

### Task: Review and Process Pending Loan Requests

All pending loan requests appear in the **Pending** tab of the Employee Loans page. The table shows the employee name, loan policy, currency, loan amount, tenure, submission date, and current approver status.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/43-pending-tab-admin-view.png" class="screenshot" loading="lazy" alt="Admin view of pending loan requests" />
<figcaption>Pending tab showing loan requests with approver status indicators and action buttons</figcaption>
</figure>

#### Available Actions on Pending Loans

Each pending loan row has a **Reject** button and a three-dot menu with additional options:

- **Reject:** Red button to reject the loan request directly from the row
- **Delete:** Remove the loan request from the system (via three-dot menu)
- **Edit:** Modify the loan request details (via three-dot menu)
- **Remove Approve:** Revoke a previous approval step if the loan has partial approvals (via three-dot menu)
- **View details:** Open the full loan detail page (via three-dot menu)

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/44-pending-three-dot-menu.png" class="screenshot" loading="lazy" alt="Three-dot menu on pending loan" />
<figcaption>Three-dot menu on a pending loan showing Delete, Edit, Remove Approve, and View details options</figcaption>
</figure>

#### Viewing Loan Details

Click **View details** to open the full loan detail page, which shows:

- **Loan information:** Employee name, policy name, currency, loan amount, reason, loan guarantor, attachments, tenure, and agreement document
- **Approval progress:** Each approver in the chain with their approval or pending status
- **Repayment schedule:** Installment-by-installment breakdown showing amounts to pay and outstanding balance
- **Other loans:** History of the employee's other loan requests

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/45-pending-loan-detail-view.png" class="screenshot" loading="lazy" alt="Loan detail view" />
<figcaption>Loan detail page showing loan information, repayment schedule, and approval progress</figcaption>
</figure>

#### How the Approval Process Works

Loan approval follows the configured approval flow (see [Initial Setup](#initial-setup)). By default, each request must pass through:

1.  **Step 1 — Super Admin:** A user with Super Admin role must approve first
2.  **Step 2 — Line Manager:** The employee's line manager (up to 2 levels) must then approve

The **Approvers** column in the Pending tab shows avatar indicators with green checkmarks for completed approval steps. Once all approval steps are complete, the loan automatically moves to the **Approved** tab.

<div class="warning-box">

**Important:** There is no explicit "Approve" button on the Pending tab. Approval happens through the approval flow chain — each designated approver receives the request in their approval queue and must take action from there.

</div>

</div>

<div class="subsection">

### Task: Add Approved Loans to Payroll

Once a loan is fully approved, it appears in the **Approved** tab. To process the loan for disbursement, click the **Add to payroll table** button on the loan row. The loan then moves to the **At Payroll** tab.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/46-approved-tab.png" class="screenshot" loading="lazy" alt="Approved loans tab" />
<figcaption>Approved tab showing the "Add to payroll table" action button for each approved loan</figcaption>
</figure>

The only other action available on approved loans is **View details** via the three-dot menu.

<div class="warning-box">

**Important:** Once a loan is added to payroll and disbursed, the system automatically creates a one-time disbursement addition and recurring repayment deductions. These payroll entries cannot be edited or deleted through the UI.

</div>

</div>

<div class="subsection">

### Task: Manage Loans at Payroll Stage

The **At Payroll** tab shows loans that have been added to the payroll table but not yet disbursed. Each row has two action buttons:

- **Remove from payroll table:** Move the loan back to the Approved tab if it was added in error
- **View details:** Open the full loan detail page

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/48-at-payroll-tab.png" class="screenshot" loading="lazy" alt="At Payroll tab" />
<figcaption>At Payroll tab showing "Remove from payroll table" and "View details" buttons per loan</figcaption>
</figure>

<div class="info-box">

**Note:** The "At Payroll" tab is visible only to administrators. Employees do not see this intermediate status in their My Loans view.

</div>

</div>

<div class="subsection">

### Task: Manage Rejected Loans

Rejected loan requests appear in the **Rejected** tab. Administrators can permanently delete rejected loans via the three-dot menu, or click **View details** to review the rejection details.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/47-rejected-tab.png" class="screenshot" loading="lazy" alt="Rejected loans tab" />
<figcaption>Rejected tab showing loans with Delete and View details options in the three-dot menu</figcaption>
</figure>

<div class="info-box">

**Note:** Rejected loans are the only loan status where deletion is available through the standard UI. All other statuses require support team intervention for deletion.

</div>

</div>

<div class="subsection">

### Task: Monitor Disbursed and Completed Loans

The **Disbursed** tab shows loans where funds have been released and repayment deductions are active. This tab includes an additional **Outstanding** column showing the remaining balance for each loan. The only available action is **View details**.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/49-disbursed-tab.png" class="screenshot" loading="lazy" alt="Disbursed loans tab" />
<figcaption>Disbursed tab showing active loans with the Outstanding balance column</figcaption>
</figure>

The **Completed** tab shows loans where all installments have been fully repaid. These records are retained for audit and reference purposes. The only available action is **View details**.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/loans/v1/validation/screenshots/50-completed-tab.png" class="screenshot" loading="lazy" alt="Completed loans tab" />
<figcaption>Completed tab showing fully repaid loans retained for record-keeping</figcaption>
</figure>

<div class="warning-box">

**Important:** Inactive employees with outstanding loan balances remain visible in the Disbursed tab. There is currently no filter to hide inactive employees from this view.

</div>

</div>

<div class="subsection">

### Administrator Actions by Loan Status

The following table summarizes all actions available to administrators at each stage of the loan lifecycle:

| Status Tab | Primary Action | Three-Dot Menu | Notes |
|----|----|----|----|
| **Pending** | Reject button | Delete, Edit, Remove Approve, View details | Full administrative control before approval completes |
| **Approved** | Add to payroll table | View details | Loan ready for payroll processing |
| **Rejected** | — | Delete, View details | Only status where UI deletion is possible |
| **At Payroll** | Remove from payroll table | View details | Can reverse payroll addition before disbursement |
| **Disbursed** | — | View details | Includes Outstanding balance column |
| **Completed** | — | View details | Retained for audit purposes |

</div>

</div>

</div>

<div id="workflow-integration" class="section section section-workflow-integration">

<div class="section-header">

## Workflow Integration

</div>

<div class="section-body">

<div class="subsection">

### Approval Flows

<div class="nav-path">

Automations → Approval flows → Loan

</div>

Employee Loans has a dedicated approval flow that controls how loan requests are reviewed and authorized. The approval flow is configured under **Automations → Approval flows → Loan** and consists of two sections:

- **Advanced approval flow:** Conditional routing that directs loan requests to specific approvers based on defined criteria (e.g., loan amount thresholds, department). Create rules using **+ Add advance flow**.
- **Default approval flow:** The fallback chain used when no advanced flow conditions match. By default, this includes Step 1 (Super Admin) and Step 2 (Line Manager, 2 levels).

See the [Initial Setup](#initial-setup) section for detailed configuration instructions and screenshots.

</div>

<div class="subsection">

### Workflows

<div class="nav-path">

Automations → Workflows

</div>

<div class="warning-box">

**Not Available:** Employee Loans does not currently have dedicated loan-specific triggers or actions in the Workflows module. You cannot create automated workflows that trigger on loan submission, approval, rejection, or disbursement events.

</div>

The Workflows module supports automation for other modules such as HR (employee create/update/delete), Payroll (salary updates, pay adjustments), Time Off (leave requests), and third-party integrations. However, loan-related events are not available as workflow triggers or actions.

For loan request automation, use the built-in approval flow described above. For advanced automation needs involving loans, consider using general-purpose triggers (e.g., incoming webhooks) combined with external tools.

</div>

</div>

</div>

<div id="business-rules-limitations" class="section section section-business-rules-limitations">

<div class="section-header">

## Business Rules & Limitations

</div>

<div class="section-body">

<div class="subsection">

### Loan Lifecycle Rules

A loan request progresses through a defined lifecycle. Each status transition restricts the actions available to both employees and administrators.

| Status | Transition | Modification Allowed | Deletion Allowed |
|----|----|----|----|
| **Pending** | Submitted → awaiting approval chain | Yes — employees and admins can edit | Yes — employees and admins can delete |
| **Approved** | All approval steps completed | No | No — requires support intervention |
| **At Payroll** | Admin clicked "Add to payroll table" | No | No — but admin can "Remove from payroll table" to revert to Approved |
| **Rejected** | Rejected by approver | No | Yes — admin can delete via three-dot menu |
| **Disbursed** | Funds released via payroll | No | No — requires support intervention |
| **Completed** | All installments fully repaid | No | No — retained for audit |

<div class="warning-box">

**Important:** Once a loan moves past Pending status, the window for self-service changes closes. Only rejected loans can be deleted through the UI. All other post-approval changes require Bayzat support intervention.

</div>

</div>

<div class="subsection">

### Loan Policy Requirements

<div class="info-box">

**Policy Assignment Required:** Employees cannot submit loan requests without an assigned loan policy. Ensure all eligible employees are included in at least one active policy before enabling loan requests.

</div>

- **Automatic Payroll Integration:** Approved loans automatically create disbursement additions and recurring repayment deductions in payroll
- **Non-Editable Transactions:** Loan disbursement and repayment entries cannot be modified or deleted once created through the UI
- **Rejection Window:** Loans can only be rejected while in Pending status; approved loans require backend intervention to reverse
- **Employee Self-Service:** Employees can edit or delete their own loan requests only while in Pending status via the My Loans page

</div>

<div class="subsection">

### Known Limitations

| Issue | Impact | Severity |
|----|----|----|
| **No Loan Policy Assignment** | Users without assigned loan policies cannot create loan requests, creating workflow interruption | Medium |
| **Rigid Approval Roles** | Default loan approval flow requires Super Admin at Step 1 and Line Manager at Step 2; while advanced conditional flows can be added, the core role options are limited to predefined roles | Medium |
| **Missing Cash Payment Indicator** | No "Paid as Cash" label or indicator available on any loan tab for tracking cash-based loan transactions | Medium |
| **Inactive Employee Visibility** | Inactive employees with outstanding loan balances remain visible in the Disbursed tab; the Filters panel does not include an active/inactive employee status filter | Medium |
| **Bulk Operations Not Available** | No checkboxes or bulk selection controls on any tab; each loan must be approved, rejected, or deleted individually | Medium |

</div>

<div class="subsection">

### Data Management Constraints

- **Historical Data Retention:** Loan disbursement and repayment records are immutable once processed through payroll. No edit or delete options are available on the Disbursed or Completed tabs — only "View details" is accessible.
- **Deferred First Installment:** Loan policies include a toggle to "Differ 1st loan repayment installment from the initial pay cycle," allowing the first repayment to start from the following pay cycle rather than the current one.

</div>

<div class="subsection">

### Employee Eligibility Rules

| Rule | Configuration | Impact |
|----|----|----|
| Minimum Loan Amount | Must be greater than 0 | Cannot create policies with zero or negative loan amounts |
| Loan Amount Method | Fixed amount or salary percentage | Policy must specify one method; cannot mix both in single policy |
| Repayment Configuration | Static period or flexible monthly deduction | Defines how loan repayments are calculated and deducted from salary |

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
| Employee cannot submit loan request | No loan policy assigned to employee | Assign employee to an active loan policy in Settings → Payroll → Employee Loan Policies |
| Cannot delete approved loan | Loan has been processed and integrated with payroll | Contact support team for backend intervention; approved loans cannot be deleted through UI |
| Loan remains in disbursed status after due date | Employee not added to payroll or repayment cycle incomplete | Verify employee is active in payroll; contact support to manually adjust loan status |
| Cannot modify loan repayment amount | Loan disbursement and repayment deductions are immutable | Create new loan request with correct terms; contact support to adjust existing loan |
| Inactive employees visible in loans section | System displays all employees with loan balances regardless of employment status | No active/inactive filter available in the Filters panel; manually track inactive employee loans separately |

</div>

<div class="subsection">

### Edge Cases

- **Employee Termination with Active Loan:** If an employee leaves the organization before a loan is settled, the remaining balance is automatically deducted from their end-of-service settlement (confirmed in loan policy configuration)
- **Multiple Loan Policies:** Employees can be assigned to multiple loan policies and can have multiple active loan requests simultaneously across different policies
- **Rejected Loan Deletion:** Only rejected loans can be deleted through the UI via the three-dot menu on the Rejected tab; approved, disbursed, and completed loans require support intervention for removal
- **Loan Policy Deactivation:** Deactivating a policy does not affect existing loan requests or active loans under that policy; the policy can still be edited for employee assignment but cannot be deleted if loans exist
- **Bulk Operations:** No bulk approval, rejection, or deletion available; each loan must be processed individually through its respective tab actions

</div>

<div class="subsection">

### Data Integrity Scenarios

- **Policy Deletion Restrictions:** Loan policies that have any associated loan requests (at any status) cannot be deleted. The system displays: "You can not delete this policy because there are loans requested under the policy." Only the employee assignment list can be edited for such policies.
- **Policy Edit Restrictions:** Policies with existing loan requests show: "You can only edit this policy's employee list because there are loans requested under the policy." Core policy settings (amount, currency, repayment terms) become locked once loans are created under the policy.

</div>

<div class="subsection">

### Getting Additional Help

<div class="info-box">

**Support Escalation:** For issues requiring backend intervention (loan deletion, payroll cycle changes, bulk operations), contact Bayzat support with specific loan IDs and employee details.

</div>

- Document loan request details before escalating (employee name, loan amount, approval date, current status)
- Provide screenshots of error messages or unexpected behavior
- Specify desired outcome (deletion, status change, data correction)

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

Can employees request Employee Loans without an assigned loan policy?

No. Employees must be assigned to an active loan policy before they can submit loan requests.

Can I delete a loan after it has been approved?

Approved loans cannot be deleted through the UI. Contact support for backend assistance if deletion is required before disbursement.

What happens to loan records when an employee becomes inactive?

Inactive employees with outstanding loan balances remain visible in the Disbursed loans section. The system does not currently filter or hide these records automatically.

Can I modify loan repayment deductions after approval?

No. Once a loan is approved, the system automatically creates disbursement additions and recurring repayment deductions that cannot be edited or deleted.

How do I track which Employee Loans have been paid as cash versus through payroll?

The system currently does not include a "Paid as Cash" indicator. Track cash-based loan transactions manually outside the platform.

Can I create custom roles for loan approval workflows?

Loan approval workflows are currently limited to Super Admin roles. Custom role-based approval routing is not supported.

What happens if I need to delete all loan requests at once?

The platform does not support bulk deletion of loan requests through the UI. Contact support for backend assistance with comprehensive loan request management.

Can Expense Managers view loan data?

The Expense Manager role may have access to loan data due to lack of granular permission controls. Configure role permissions carefully to limit cross-module visibility.

What happens to Employee Loans when I reset the payroll cycle?

Payroll cycle resets are limited to 6 months and require backend support intervention. Loan records in closed cycles cannot be deleted to maintain audit trail integrity.

Can I change loan status manually if an employee is not added to payroll?

No. The system does not support manual status transitions for disbursed loans. Loans remain in disbursed status even after the due date if the employee is not in payroll.

Can employees edit or delete their own loan requests?

Yes, but only while the request is still in **Pending** status. Employees can click the three-dot menu on a pending loan in **My Loans** to access **Edit** and **Delete** options. Once the loan is approved, these options are no longer available.

Can administrators submit loan requests on behalf of employees?

Yes. Navigate to **Payroll → Loans → Employee loans** and click **Submit a new loan request**. The admin form includes an employee selection step before the standard loan request form. The submitted request follows the same approval flow as employee-submitted requests.

Why don't I see the "At Payroll" tab in My Loans?

The "At Payroll" tab is only visible to administrators on the **Employee Loans** page. The employee **My Loans** view has five tabs: Pending, Approved, Rejected, Disbursed, and Completed. The "At Payroll" stage is an internal admin step between approval and disbursement.

What does "Remove Approve" do on a pending loan request?

The **Remove Approve** option in the three-dot menu on a pending loan revokes a previous approval step. This is useful if a loan received partial approvals (e.g., Step 1 approved but Step 2 pending) and you need to reset the approval progress.

</div>

</div>

<div class="subsection">

### Getting Help

- **Bayzat Support:** Contact support@bayzat.com or use the in-app help widget for technical assistance
- **Knowledge Base:** Visit [bayzathelp.zendesk.com](https://bayzathelp.zendesk.com) for additional guides and articles
- **Backend Requests:** For loan deletion, bulk operations, or payroll cycle changes, submit a support ticket with detailed requirements

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
| **Approval Flow** | The workflow process that routes loan requests to designated approvers for review and authorization. |
| **At Payroll** | An intermediate loan status indicating the loan has been added to the payroll table by an administrator but has not yet been disbursed. This status is only visible to administrators, not employees. |
| **Disbursed Loan** | A loan that has been approved and the funds have been released to the employee, triggering automatic repayment deductions. |
| **Loan Disbursement Addition** | A payroll addition automatically created when a loan is approved, representing the loan amount paid to the employee. |
| **Loan Guarantor** | A person named in the loan request form who guarantees the loan on behalf of the employee. This is a text field entered during loan submission. |
| **Loan Policy** | A configuration template that defines loan eligibility criteria, amount limits, repayment terms, and employee assignment rules. |
| **Loan Repayment Deduction** | A recurring payroll deduction automatically created to recover loan amounts from employee salaries over the defined repayment period. |
| **Outstanding Balance** | The remaining loan amount yet to be repaid, displayed in the Outstanding column on the Disbursed tab of the Employee Loans page. |
| **Payroll Cycle** | The recurring time period (typically monthly) during which payroll is processed, including loan disbursements and repayment deductions. |
| **Pending Loan Request** | A loan application submitted by an employee that is awaiting approval or rejection by an authorized administrator. |
| **Rejected Loan** | A loan request that has been declined by an approver and can optionally be deleted from the system. |
| **Repayment Period** | The number of months over which a loan will be repaid through automatic salary deductions. |
| **Super Admin** | The highest-level user role with full system access, including the ability to approve Employee Loans, manage policies, and configure payroll settings. |
| **Tenure** | The loan repayment period measured in months, entered by the employee when submitting a loan request. Determines how many monthly installments the repayment is spread across. |

</div>

</div>

</div>
