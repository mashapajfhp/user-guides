<div class="content-area" role="main" aria-label="User guide content">

<div id="feature-overview" class="section section section-feature-overview">

<div class="section-header">

## What is Payroll Management & Processing?

</div>

<div class="section-body">

<div class="subsection">

### Overview

Bayzat's Payroll module covers two complementary areas: **Payroll Management** (the full module for salary configuration, payroll table, adjustments, approvals, and multi-currency support) and **Payroll Processing** (the payment execution layer — submitting transactions, generating SIF files, and disbursing salaries via Lulu Exchange, wire transfers, Transfermate, Mudad, or SAB). This guide covers both end-to-end.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/01-payroll-table-main.png" class="screenshot" loading="lazy" alt="01-payroll-table-main.png" />
<figcaption>The payroll table displays all employees with their salary components, organized by currency tabs for multi-currency payrolls</figcaption>
</figure>

The payroll table shows employee compensation data with options to add adjustments, submit transactions, and close monthly pay runs. Use the currency tabs to manage employees paid in different currencies.

</div>

<div class="subsection">

### Key Benefits

- Process payroll for multiple currencies in a single system without parallel Excel files
- Submit partial or full salary payments multiple times per month with flexible transaction control
- Automate salary calculations with allowances, deductions, and expense reimbursements
- Generate WPS-compliant SIF files and payslips for closed pay runs
- Track transaction approval status with audit trails for all payroll changes
- Carry forward unpaid amounts automatically to the next month's payroll
- Process payments through multiple channels: Lulu Exchange (WPS/SIF), wire transfers, cash deposits, check deposits, Transfermate (global), and Mudad (KSA)
- Generate custom payroll files using configurable templates for bank submissions, DEWS, and government reporting

</div>

<div class="strategic-context">

<div class="strategic-header">

### Strategic Context

</div>

<div class="strategic-grid">

<div class="strategic-card">

#### 🎯 What Payroll Management Solves

Eliminates manual Excel-based payroll processing for companies with employees earning in multiple currencies.

- Replaces parallel spreadsheets for non-AED salary calculations
- Standardizes payroll workflows across all currencies and payment cycles
- Enables accurate record-keeping with system-managed audit trails

</div>

<div class="strategic-card">

#### 💰 Why It Matters

Payroll is the foundation for employee compensation, compliance reporting, and financial planning.

- Drives WPS submissions and government compliance requirements
- Calculates gratuity, end-of-service benefits, and statutory deductions
- Controls cash flow with flexible transaction timing and approval workflows

</div>

<div class="strategic-card">

#### 🏗️ How It Connects

Payroll Management is a transactional system that processes monthly compensation cycles.

- Pulls salary configurations from employee profiles and attendance data
- Feeds transaction data to banking integrations (Lulu Exchange, WPS)
- Impacts expense management, time-off balances, and financial reporting

</div>

</div>

</div>

<div class="subsection">

### Who Uses This Feature?

| User Role | What They Do | Value Proposition |
|----|----|----|
| **Payroll Manager** | Process monthly payroll, submit transactions, close pay runs, generate SIF files | Complete payroll cycles in one system instead of managing multiple Excel files and manual bank submissions |
| **Finance Manager** | Review and approve payroll transactions, manage multi-currency payments, download reports | Control cash flow with flexible transaction approval and currency-specific payment batches |
| **HR Administrator** | Add salary adjustments, process expense reimbursements, generate payslips | Handle one-time payments and corrections without disrupting the main payroll cycle |
| **Transaction Processor** | Upload payroll files to banks, track payment status, reject failed transactions | Manage bank submissions and payment confirmations with clear status tracking |
| **Employee** | View pay history, download payslips, edit payment details, submit loan requests, request air tickets | Self-service access to compensation data and payroll-related requests without waiting for HR |

</div>

</div>

</div>

<div id="product-foundation" class="section section section-product-foundation">

<div class="section-header">

## Product Foundation Overview

</div>

<div class="section-body">

<div class="subsection">

### How Payroll Management Fits

Payroll Management is a transactional system that processes monthly employee compensation, expenses, and salary payments. It operates as the execution layer where salary configurations are applied to generate actual payment transactions.

<div class="info-box">

**Mental model:** Salary Configuration (template) → Applied to Employees → Monthly Payroll Processing → Transactions Generated → Payments Executed

</div>

Each payroll month affects all active employees with configured salaries. Changes to salary components during a month only affect that month's payroll table and future months.

</div>

<div class="subsection">

### Key Decisions Before Setup

Answer these questions before processing payroll:

- **Which currencies do employees earn in?** — Companies with overseas employees need multi-currency support to eliminate parallel Excel processes
- **What salary components need tracking?** — Allowances, deductions, variable pay categories, and additions should be defined before the first payroll run
- **How are payments processed?** — Options include wire transfer, cash deposit, or check deposit via Lulu Exchange
- **Are approval workflows needed?** — Determines if transactions require multi-level approval before payment processing

</div>

<div class="subsection">

### Related Features

- **Salary Configuration** — Defines base pay, allowances, and deductions that populate the payroll table each month
- **Expense Management** — Submits reimbursement requests that can be added to payroll or processed offline
- **Attendance Tracking** — Automatically adjusts payroll based on time off, late arrivals, and violations
- **Payslip Generation** — Creates employee payslips in base currency after payroll transactions are processed
- **WPS File Generation** — Produces SIF files for government reporting and bank submission

</div>

<div class="subsection">

### Prerequisites & Requirements

| Requirement | Description | Status |
|----|----|----|
| Employee Salary Configuration | Each employee must have base currency and salary components configured before appearing in payroll table | Required |
| Trade License Upload | Upload company trade license and register with Lulu Exchange for payroll processing | Required |
| Payment Method Setup | Configure wire transfer beneficiary details, or prepare for cash/check deposit at Lulu Exchange | Required |
| Approval Workflow Configuration | Define approvers and approval stages if using payroll approval flow | Optional |
| Custom Salary Categories | Create allowance, deduction, and addition categories beyond system defaults | Optional |
| Payroll File Templates | Set up custom SIF templates for bank submission and government reporting | Optional |

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

### End-to-End Journey: Monthly Payroll Processing

Complete payroll cycle from salary configuration through payment processing and month closure.

</div>

<div class="journey-phases">

<div class="journey-phase">

<div class="phase-marker">

1

</div>

<div class="phase-content">

#### Payroll Setup and Configuration

Configure salary components, allowances, deductions, payment policies, and employee salary records.

<a href="#initial-setup" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

2

</div>

<div class="phase-content">

#### Access Payroll Table

The payroll interface is accessed and the relevant currency tab is selected for multi-currency payroll.

<a href="#feature-entry-points" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

3

</div>

<div class="phase-content">

#### Manage Monthly Payroll

Review employee pay data, add adjustments, process expenses, and edit salary components.

<a href="#core-tasks" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

4

</div>

<div class="phase-content">

#### Submit Transactions

Submit payroll transactions for approval and payment processing.

<a href="#core-tasks" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

5

</div>

<div class="phase-content">

#### Process Payments

Transfer funds via wire transfer, cash deposit, or check, then confirm payment completion.

<a href="#payroll-processing" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

6

</div>

<div class="phase-content">

#### Close Payroll Month

Finalize the payroll cycle, carry forward unpaid items, and generate payslips.

<a href="#close-payroll-month" class="phase-link">See details →</a>

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

### How to Access Payroll Management

Access the payroll table to view and manage monthly employee compensation data.

#### Primary Navigation Path

<div class="nav-path">

Payroll → Payroll Table

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/01-payroll-table-main.png" class="screenshot" loading="lazy" alt="01-payroll-table-main.png" />
<figcaption>Payroll table showing employee salary data organized by currency tabs</figcaption>
</figure>

Key actions available: View employee pay data, submit transactions, edit salary components, filter by employee or status, download payroll data.

#### Additional Entry Points

- **Transactions Page:**
  <div class="nav-path">

  Payroll → Transactions

  </div>

  — Track submitted payroll transactions, view approval status, and manage payment processing
- **Adjustments:**
  <div class="nav-path">

  Payroll → Adjustments

  </div>

  — Review and approve time and pay adjustments before they appear in the payroll table
- **Employee Profile:**
  <div class="nav-path">

  Company → All Employees → \[Employee Name\] → Payroll Tab

  </div>

  — View individual employee salary history and download payslips
- **Payroll Settings:**
  <div class="nav-path">

  Settings → Payroll

  </div>

  — Configure allowances, deductions, additions, and payroll file templates

#### Multi-Currency Navigation

For organizations managing payroll in multiple currencies, the payroll table displays currency tabs at the top.

- Each currency has a separate tab (e.g., AED, USD, EUR)
- Clicking a currency tab filters to employees paid in that currency
- Transactions are submitted separately for each currency

<div class="info-box">

**Note:** Currency is set at the employee level when creating a salary configuration via **Company → All Employees → \[Employee Name\] → Payroll → Salary Configuration → + Add Salary Configuration**. Once a salary configuration is saved, the base currency becomes read-only and cannot be changed by editing the existing record.

</div>

</div>

</div>

</div>

<div id="initial-setup" class="section section section-initial-setup">

<div class="section-header">

## Initial Setup

</div>

<div class="section-body">

<div class="subsection">

### Payroll Settings Overview

All payroll configuration is managed from a single page at **Settings → Payroll**, which contains 13 configuration sections that control how salaries are calculated, paid, and reported.

<div class="nav-path">

Settings (sidebar) → Payroll

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-23-payroll-settings-full.png" class="screenshot" loading="lazy" alt="Payroll settings page showing all configuration sections" />
<figcaption>The Payroll Settings page — all initial payroll configuration is done from this single page</figcaption>
</figure>

</div>

<div class="subsection">

### 1. General Settings

Three toggle switches control payslip behavior and employee self-service access:

| Setting | Default | What It Controls |
|----|----|----|
| **Automatically generate payslips at the end of the month** | ON | When enabled, payslips are auto-generated when a payroll cycle closes. Disabling requires manual payslip generation. |
| **Allow employees to download their payslips** | ON | Controls whether employees see the download icon in My pay → Monthly Pay. Disable to restrict payslip access to admins only. |
| **Allow employees to edit payment details of their Bank/Exchange House** | OFF | When enabled, employees can change their own Paid Via method (Cash, Cheque, Bank, Exchange house, TransferMate) from My pay → Edit Payment Details. Keep off if payment methods should only be changed by payroll admins. |

</div>

<div class="subsection">

### 2. Configure Salaries and Bank Details

Bulk-configure employee salary structures and bank account details via Excel upload.

<div class="nav-path">

Settings → Payroll → Configure salaries and bank details → Manage

</div>

1.  The **Manage** button opens the Salary Configuration sheet
2.  An Excel template with all employee data can be downloaded
3.  Salary components are filled in: basic salary, allowances, bank details, and payment method per employee
4.  The completed Excel is uploaded to apply configurations in bulk

<div class="info-box">

**Tip:** This is the fastest way to onboard a new company. Instead of configuring each employee individually, use the bulk Excel upload to set salaries, bank accounts, and payment methods for all employees at once.

</div>

</div>

<div class="subsection">

### 3. Daily Wage Calculation

Controls how daily rates are computed for salary proration, leave encashment, and unpaid leave deductions. Three calculation services can be individually configured:

| Service | Default Formula | Editable |
|----|----|----|
| **Salary proration** | Basic salary + allowances / 30 days | Yes — the edit icon opens the formula editor |
| **EOS leave encashment** | Calculated in end of service eligibility | Yes — configured via the End of Service section |
| **Unpaid leave deduction** | Calculated in leave policy | Yes — configured via leave policy settings |

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-28-daily-wage-salary-proration.png" class="screenshot" loading="lazy" alt="Daily Wage Calculation edit dialog for Salary proration" />
<figcaption>Edit dialog for Salary proration — configure the Salary Component, Month Calculation method, and select applicable Allowances</figcaption>
</figure>

The daily wage formula editor (pencil icon) exposes the following settings:

- **Salary Component** — "Basic salary" or "Basic salary + allowances"
- **Month Calculation** — "Working days", "Calendar days", or "Custom days" (with manual input field)
- **Allowances** — Multi-select (enabled when "Basic salary + allowances" is selected)

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-29-daily-wage-options.png" class="screenshot" loading="lazy" alt="Daily wage month calculation dropdown showing Working days, Calendar days, Custom days options" />
<figcaption>Month calculation options: Working days, Calendar days, or Custom days (with manual day count input)</figcaption>
</figure>

<div class="warning-box">

**Important:** The daily wage formula directly affects salary proration for mid-month joiners/leavers, unpaid leave deductions, and end-of-service calculations. This must be configured correctly before the first payroll run.

</div>

</div>

<div class="subsection">

### 4. Mass Uploads

Bulk-add variable pay, additions, or deductions to the current active payroll cycle before closing it. The current cycle is displayed at the top (e.g., "Nov 2025 — 01 Nov 2025 - 30 Nov 2025").

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-45-mass-uploads-section.png" class="screenshot" loading="lazy" alt="Mass Uploads section in Payroll Settings showing three upload types with Start buttons" />
<figcaption>The Mass Uploads section — displays the current payroll cycle banner and three Start buttons for Variable Pay, Additions, and Deductions</figcaption>
</figure>

| Upload Type | Purpose | When to Use |
|----|----|----|
| **Mass Upload Variable Pay** | Add bonuses, commissions, overtime, and other variable pay components | Before closing the payroll cycle, after all variable pay amounts are finalized |
| **Mass Upload Additions** | Add one-time positive adjustments (reimbursements, allowances, backpay) | Before closing the payroll cycle, for bulk addition entries |
| **Mass Upload Deductions** | Add deductions (penalties, loan repayments, insurance upgrades) | Before closing the payroll cycle, for bulk deduction entries |

#### Start Flow: Bayzat Sheets Interface

Clicking **Start** on any upload type opens the **Bayzat Sheets** interface — a spreadsheet-style editor pre-populated with all employees from the current payroll cycle.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-46-mass-upload-variable-pay-welcome.png" class="screenshot" loading="lazy" alt="Welcome dialog for Bayzat Sheets showing Download Template and Upload Excel options" />
<figcaption>The Welcome dialog appears on first entry — offering two paths: download the Excel template or upload a pre-filled file</figcaption>
</figure>

The welcome dialog offers two options:

- **Download Excel template** — Downloads a .xlsx file pre-formatted with the correct columns. Amounts are filled in offline and re-uploaded.
- **Upload Excel file** — A previously filled template can be uploaded directly.

Closing the dialog reveals the full spreadsheet editor:

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-47-mass-upload-variable-pay-spreadsheet.png" class="screenshot" loading="lazy" alt="Bayzat Sheets spreadsheet view with 120 employee rows and column headers" />
<figcaption>The spreadsheet view — all 120 employees from the active cycle are pre-loaded with their identifiers, names, trade licenses, and currencies</figcaption>
</figure>

#### Variable Pay Spreadsheet Columns

| Column | Required | Description |
|----|----|----|
| Employee Identifier | Auto-filled | Employee ID (read-only, pre-populated) |
| Employee Name | Mandatory | Full name (read-only, pre-populated) |
| Trade License | Auto-filled | Employee's trade license entity |
| Base Currency | Auto-filled | Employee's salary currency (AED, USD, AUD, etc.) |
| Pay Item Type | Mandatory | Dropdown selection from configured variable pay types |
| Start Date | Mandatory | Pay item effective start date |
| End Date | Mandatory | Pay item effective end date |
| Additional Remarks | Optional | Optional notes for the pay item |
| Amount | Mandatory | Monetary amount for the pay item |
| Reference | Mandatory | Reference code or identifier for the entry |

#### Filling In Variable Pay Data

To enter a variable pay item, double-clicking the **Pay Item Type** cell in an employee's row opens a dropdown listing all configured variable pay types for the organization. After selecting the type, the Start Date, End Date, Amount, and Reference fields are completed.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-48-mass-upload-pay-item-dropdown.png" class="screenshot" loading="lazy" alt="Pay Item Type dropdown showing available variable pay types including Bonus for performance, COLA, Commission, Concur expenses, Coupon for Coffee, Overtime, Petty Cash, and Q1 Performance Bonus" />
<figcaption>Double-clicking the Pay Item Type cell opens a dropdown with all configured variable pay types — select the relevant type for each employee's pay item</figcaption>
</figure>

#### Toolbar Actions

- **+ Add row** — Adds a blank row at the bottom for additional entries beyond the pre-loaded employees
- **Restart** — Clears all entered data and resets to the default pre-populated state
- **Save** — Validates and saves all entered data to the payroll cycle. Entries appear in the payroll table after saving.

</div>

<div class="subsection">

### 5. Payroll Templates

Create, view, and customize file templates for bank submissions and government reporting. Templates define how payroll data is formatted when exported.

<div class="nav-path">

Settings → Payroll → Payroll Templates (expand)

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-33-payroll-templates-table.png" class="screenshot" loading="lazy" alt="Payroll Templates table showing template list with active toggles" />
<figcaption>The Payroll Templates table — each template has an Active/Inactive toggle, Edit (pencil), and Delete (trash) actions</figcaption>
</figure>

| Template Type | Available Formats | Purpose |
|----|----|----|
| **Payroll processing** | XLS, CSV, SIF | Bank submission files (SIF files for WPS/non-WPS transfers) |
| **Reporting template** | XLS, CSV | Government reports, internal reports (e.g., DIFC DEWS, monthly payroll reports) |

#### Creating / Editing a Template (3-Step Wizard)

The template editor uses a 3-step wizard:

1.  **Step 1: Basic Setup** — Define the SIF template name, payment method (Bank/Exchange House/Cash), bank name, and trade license
2.  **Step 2: Map Data** — Match each column in the uploaded template file with a Bayzat system data point (e.g., Full Name, IBAN, Net Pay, Total Deductions). Columns can be marked as "empty" if no data is required.
3.  **Step 3: Preview & Save Template** — Review the mapped data and save

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-34-template-edit-basic-setup.png" class="screenshot" loading="lazy" alt="Template editor Step 1 - Basic Setup with SIF template name, payment method, bank name, trade license" />
<figcaption>Step 1: Basic Setup — define the template name, payment method, bank, and trade license</figcaption>
</figure>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-35-template-edit-map-data.png" class="screenshot" loading="lazy" alt="Template editor Step 2 - Map Data showing column mapping interface" />
<figcaption>Step 2: Map Data — match each file column to a system data point. Use "Add SCR row", "Add new column", or "Preview" to customize</figcaption>
</figure>

#### Template Actions

- **Active/Inactive toggle** — Enable or disable a template without deleting it
- **Edit (pencil icon)** — Opens the 3-step wizard pre-filled with current settings
- **Delete (trash icon)** — Permanently remove a template
- **Add new** — Create a new template from scratch (button at the bottom of the table)

<div class="warning-box">

**Important:** Data field mappings must be carefully verified during template setup. Incorrect mappings cause transaction processing failures when submitting to banks. The "Can't see the bank name?" and "Can't see the trade license?" links provide quick navigation to set up missing prerequisites.

</div>

</div>

<div class="subsection">

### 6. Accounting Integrations

Connects payroll data to accounting software. QuickBooks Online is currently supported as a direct integration.

1.  The **Map data** button opens configuration for mapping payroll data to the QuickBooks chart of accounts
2.  Payroll categories (basic salary, allowances, deductions) are mapped to corresponding QuickBooks accounts
3.  Once configured, payroll transactions sync automatically to QuickBooks

The **Remove connection** button disconnects the QuickBooks integration if needed.

</div>

<div class="subsection">

### 7. Employee Loan Policies

Define loan policies that employees can apply for through My Loans. Each policy specifies the loan type, currency, amount limits, repayment structure, and eligible employees.

<div class="nav-path">

Settings → Payroll → Employee Loan Policies (expand) → Add new

</div>

#### Creating a Loan Policy (3-Step Wizard)

The loan policy creation uses a 3-step wizard: **1) Setup loan policy**, **2) Add employees**, **3) Review and save policy**.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-42-loan-policy-create-top.png" class="screenshot" loading="lazy" alt="Loan policy creation form showing General and Loan Amounts sections" />
<figcaption>Loan Policy Step 1 — General details and loan amount configuration</figcaption>
</figure>

**General Section:**

- **Policy Name** — Descriptive name (e.g., "Car Loan", "Emergency Loans", "Advance Salary")
- **Description** — Explain the policy in simple words for employees
- **Currency** — Dropdown to select loan currency (default: AED)

**Loan Amounts Section:**

- **Define loan limits by:**
  - **Fixed amount** — Set a specific min/max loan amount in the selected currency
  - **Percentage of employee's salary** — Set a max percentage of gross salary (recommended for labor law compliance)
- **Minimum loan amount** — Lowest amount an employee can request
- **Maximum loan amount** — Highest amount an employee can request

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-43-loan-policy-create-bottom.png" class="screenshot" loading="lazy" alt="Loan policy Repayments section with Static/Flexible options" />
<figcaption>Repayments section — configure static or flexible installment structure</figcaption>
</figure>

**Repayments Section:**

- **Repayment installments are:**
  - **Static** — Define a fixed maximum number of monthly installments
  - **Flexible** — Define the maximum deductible percentage from employee's gross salary
- **Maximum installments (in months)** — Recommended: 12 months
- **Differ 1st loan repayment installment** — Toggle (default ON) to start deductions from the next pay cycle instead of immediately

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-44-loan-policy-agreement.png" class="screenshot" loading="lazy" alt="Loan Agreement upload section with drag-and-drop file upload" />
<figcaption>Loan Agreement (optional) — upload a loan agreement document via drag-and-drop</figcaption>
</figure>

**Loan Agreement (optional):** A loan agreement document can be uploaded (drag-and-drop or browse). This agreement is presented to employees when they apply for a loan.

<div class="info-box">

**Note:** If an employee leaves the organisation before a loan is settled, the remaining balance is automatically deducted from the end-of-service settlement. Policies with active loan requests cannot be deleted — only the employee list can be edited. Deactivating a policy stops new requests while existing loans continue.

</div>

</div>

<div class="subsection">

### 8. Leave Salary Policy

Define the criteria for employees to apply for leave salary (payment in lieu of leave). Each policy is linked to specific leave types and uses a configurable formula.

<div class="nav-path">

Settings → Payroll → Leave salary policy (expand)

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-37-leave-salary-policy.png" class="screenshot" loading="lazy" alt="Leave salary policy table showing policies with Active/Inactive toggles" />
<figcaption>Leave Salary Policy table — columns: Policy name, No. of employees, Leave type, Creation date, Active/Inactive toggle with Edit and Delete actions</figcaption>
</figure>

#### Creating / Editing a Leave Salary Policy (3-Step Wizard)

The **Add new** button creates a new policy, and the edit (pencil) icon modifies an existing one. The editor has 3 steps: **1) Setup policy**, **2) Add employees**, **3) Review & save**.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-38-leave-salary-policy-edit.png" class="screenshot" loading="lazy" alt="Leave salary policy editor Step 1 with policy details" />
<figcaption>Step 1: Setup policy — configure the policy name, description, leave types, formula, and restrictions</figcaption>
</figure>

**Policy details (collapsible section):**

- **Policy Name** — Descriptive name for the policy
- **Add a description** — Explain conditions to help employees understand the policy
- **Applicable leave types** — Multi-select dropdown to choose which leave types qualify (e.g., Parental, Annual Leave, Vacation, Open Leave)

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-39-leave-salary-policy-formula.png" class="screenshot" loading="lazy" alt="Leave salary formula showing salary component, working days, and allowances" />
<figcaption>Leave salary formula: (Salary component / Working days) × number of leaves, with optional allowances and minimum days toggle</figcaption>
</figure>

**Leave salary (collapsible section):**

- **Formula:** ( Salary component / Working days ) × number of leaves
- **Salary component** — Dropdown: "Basic salary" or "Basic salary + allowances"
- **Working days** — Dropdown: "Calendar days" or "Working days"
- **Allowances** — Multi-select (enabled when "Basic salary + allowances" is selected)
- **Define minimum number of leave days** — Toggle to require a minimum number of leave days before leave salary applies

**Policy restrictions (collapsible section):**

- **Restrict during probation** — Toggle: when enabled, employees cannot apply for leave salary during their probation period

<div class="info-box">

**Note:** Active policies show a warning tooltip "Ongoing requests will not be affected by these changes" on the Edit and Delete buttons. Draft/Inactive policies can be freely edited and deleted.

</div>

</div>

<div class="subsection">

### 9. Leave Encashment Policy

Configure leave encashment policies that allow employees to cash out unused leave balances. Each policy is linked to a specific leave type.

When creating a leave encashment policy, define:

- **Policy Name** — Descriptive name for the encashment policy
- **Leave Type** — Which leave type can be encashed (e.g., Vacation, UAE Leave, Hajj Leave)
- **Employee Assignment** — Number of employees covered by this policy
- **Encashment Criteria** — Rules for when encashment is allowed

The **Learn more** link provides detailed documentation on encashment policy configuration.

</div>

<div class="subsection">

### 10. Bank Accounts

This section manages **company bank accounts** — the accounts salaries are paid **from** when processing payroll. These are not employee bank accounts (those are configured on each employee's profile).

When bank transfer files are generated (e.g., SIF files for WPS), the system uses these accounts as the source. Each account is tied to a specific **Trade License** entity — the selected trade license determines which employees are paid from that account. For example, if a bank account is assigned to "Trade License Sample", all employees under that trade license will have their salaries disbursed from this account. Companies with multiple trade licenses can maintain separate disbursement accounts per entity. The accounts added here appear as options in the **"Company Bank Account"** dropdown when configuring an employee's Paid Via payment method.

<div class="nav-path">

Settings → Payroll → Bank Accounts (expand) → Add new

</div>

#### Adding a Bank Account

The "Add new" dialog adapts its form fields based on the selected bank location:

**UAE Bank:** The UAE form collects the Account Holder Name, IBAN (starts with AE, 23 characters), Bank Name (searchable dropdown of UAE banks such as HSBC, Mashreq, ADCB, and RAK Bank), Routing Code (dropdown), and Trade License (dropdown of configured trade licenses — determines which employees are paid from this account).

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-25-bank-add-new-uae.png" class="screenshot" loading="lazy" alt="Add bank account form for UAE banks showing Account Holder Name, IBAN, Bank Name, Routing Code, and Trade License fields" />
<figcaption>UAE bank account form — includes Account Holder Name, IBAN, Bank Name, Routing Code, and Trade License fields</figcaption>
</figure>

**Outside UAE Bank:** When "Outside UAE" is selected, the form changes to show a Country of Bank dropdown instead of the UAE-specific fields. Additional fields for international wire transfers (SWIFT/BIC code, bank address, intermediary bank details) appear after selecting the country.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-26-bank-add-outside-uae.png" class="screenshot" loading="lazy" alt="Add bank account form for Outside UAE banks showing additional fields" />
<figcaption>Outside UAE bank account form — includes additional fields for SWIFT code, bank address, and intermediary bank</figcaption>
</figure>

#### Editing a Bank Account

The Edit form includes all fields from creation plus an additional **ABC ID** field (auto-generated system identifier not shown during creation).

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-27-bank-edit-hsbc.png" class="screenshot" loading="lazy" alt="Edit bank account dialog showing ABC ID field" />
<figcaption>Edit bank account dialog — note the ABC ID field which only appears in edit mode</figcaption>
</figure>

<div class="info-box">

**Tip:** All company bank accounts should be added before employee payment methods are configured or payroll transfer files are generated. Without a bank account linked to the relevant trade license, transactions cannot be submitted for that entity.

</div>

</div>

<div class="subsection">

### 11. End of Service Eligibility

Defines which paid leave types are eligible for encashment during end of service, and how the daily rate is calculated for each leave type.

<div class="nav-path">

Settings → Payroll → End of service eligibility (expand) → Configure

</div>

The configuration table shows:

- **Paid Leave Types** — Which leave types are eligible for EOS encashment
- **Daily rate calculation** — Formula used (e.g., "Basic salary + allowances / Working days")

#### Configure Dialog

The **Configure** button opens the "End of Service Eligibility" dialog, which lists **all company leave policies** as individual accordion items with checkboxes.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-32-eos-configure.png" class="screenshot" loading="lazy" alt="End of Service Eligibility Configure dialog showing leave policies with daily rate calculation settings" />
<figcaption>End of Service Eligibility Configure dialog — check each leave policy to include in EOS calculation, then expand to set the daily rate formula</figcaption>
</figure>

For each checked (included) leave policy, expand the accordion to configure:

- **Salary Component** — Dropdown: "Basic salary" or "Basic salary + allowances"
- **Month calculation** — Dropdown: "Working days" or "Calendar days"
- **Allowances** — Multi-select tags (only visible when "Basic salary + allowances" is selected). Shows an info alert: "Only the selected X allowances will be included in the calculation."

<div class="info-box">

**Note:** Each leave policy can have its own independent daily rate formula. This allows different calculation methods for annual leave encashment vs. parental leave encashment.

</div>

</div>

<div class="subsection">

### 12. Salary Component Categories

Define the categories that appear as columns in the payroll table. Each category type is managed in its own expandable section. All four sections (Allowances, Variable Pays, Additions, Deductions) follow the same CRUD pattern.

<div class="nav-path">

Settings → Payroll → Allowances / Variable Pays / Additions / Deductions (expand)

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-64-salary-component-categories.png" class="screenshot" loading="lazy" alt="Allowances section expanded showing category list with edit/delete icons in different states" />
<figcaption>Allowances section expanded — Housing has both icons greyed (built-in), in-use items like Food have edit enabled but delete greyed, and custom unused items like "Car Allowances" have both icons active</figcaption>
</figure>

#### CRUD Behavior Patterns (applies to all four category types)

| Category State | Edit | Delete | Tooltip / Behavior |
|----|----|----|----|
| **Built-in (system)** | Disabled | Disabled | "It is not allowed to edit/delete built-in adjustment types" |
| **In-use (non-zero values)** | Enabled (rename) | Blocked | "This category is currently in use. Please make sure that category values are set to 0 from the payroll table before removing." |
| **Custom (unused)** | Enabled | Enabled | Full edit and delete available |

#### Allowances

Fixed recurring pay components added to basic salary. Common examples:

- **Housing** (built-in — cannot be edited or deleted)
- Airline Ticket, Car Allowance, Food, House, Incentive, Phone Allowance, Transportation

**Add New dialog:** Single "Name" textbox with Cancel and **Save** buttons.

**Edit dialog:** Same "Name" textbox pre-filled with current name, with Cancel and **Update** buttons (note: button label changes from "Save" to "Update" in edit mode).

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-30-allowance-add-new.png" class="screenshot" loading="lazy" alt="New Allowance dialog with Name textbox" />
<figcaption>New Allowance dialog — single Name field with Cancel and Save buttons</figcaption>
</figure>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-31-allowance-edit.png" class="screenshot" loading="lazy" alt="Edit Allowance dialog with pre-filled Name field" />
<figcaption>Edit Allowance dialog — Name field pre-filled with current value; note the button says "Update" instead of "Save"</figcaption>
</figure>

#### Variable Pays

Non-fixed salary components that change month to month. Common examples:

- Bonus for performance, COLA, Commission, Concur expenses, Overtime, Petty Cash, Q1 Performance Bonus

Create/Edit dialogs follow the same pattern as Allowances (single "Name" field). These can also be uploaded in bulk via Mass Upload Variable Pay.

#### Additions

One-time positive adjustments applied to specific payroll cycles. Create categories here, then apply amounts in the Adjustments page or via Mass Upload.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-36-additions-section.png" class="screenshot" loading="lazy" alt="Additions section showing built-in and custom types with pagination" />
<figcaption>Additions section — built-in types (Leave Encashment, Leave Salary, Loan disbursement) have greyed-out icons; custom types have active Edit/Delete. Pagination supports multiple pages.</figcaption>
</figure>

**Built-in additions (protected):** Leave Encashment, Leave Salary, Loan disbursement — system-generated, cannot be edited or deleted.

**Custom additions:** Business Trip, Petty Cash, Other Additions, Additional Pay, Advance — full edit and delete available.

#### Deductions

Amounts subtracted from employee salaries. Common examples:

- **EOS deduction for upcoming payments** (built-in — cannot be edited or deleted)
- Other Deduction, Insurance Upgrade, Social sec. 25%, Petty Cash, Penalty, Traffic Fine, Extended Maternity Leave (Unpaid)

Create/Edit dialogs follow the same pattern as Allowances (single "Name" field).

<div class="info-box">

**Note:** Built-in categories (Housing allowance, EOS deduction, Leave Encashment addition, Leave Salary addition, Loan disbursement) are system-managed and cannot be edited or deleted. All other categories can be renamed, and unused categories can be deleted. Categories currently in use must have their values set to 0 in the payroll table before they can be removed.

</div>

</div>

<div class="subsection">

### 13. Social Security Contributions

Defines which salary components are included in social security contribution calculations. This is required for employees subject to pension or social security schemes (e.g., UAE nationals under GPSSA).

<div class="nav-path">

Settings → Payroll → Social Security Contributions (expand) → Add new

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-40-social-security-section.png" class="screenshot" loading="lazy" alt="Social Security Contributions table showing SSC Program with applicable earnings" />
<figcaption>Social Security Contributions table — columns: Program Name, Applicable Earnings (as tags), Created Date, Edit/Delete actions</figcaption>
</figure>

#### Creating / Editing a Social Security Program

The dialog has two sections:

- **Social Security Program Name** — Text field for the program name
- **Applicable Fixed Pay Items** — Checkbox list of all company allowances. **Basic Salary is always checked and disabled** (mandatory inclusion). Additional allowances can be selected for inclusion in the social security calculation.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-41-social-security-edit.png" class="screenshot" loading="lazy" alt="Edit SSC Program dialog with checkbox list of applicable fixed pay items" />
<figcaption>Edit SSC Program dialog — Basic Salary is always included (checked + disabled). Additional allowances like Car Allowance, Overtime Allowance, Phone Allowance can be added.</figcaption>
</figure>

<div class="info-box">

**Note:** Basic Salary is always mandatory for social security calculations and cannot be unchecked. All other applicable earnings (allowances) are optional and can be toggled on/off based on the social security scheme requirements.

</div>

</div>

<div class="subsection">

### Upload Trade License (for Payroll Processing)

Required for salary disbursement through Lulu Exchange.

1.  The trade license is uploaded via Company Documents
2.  The **Register with Lulu Exchange for Payroll Processing** checkbox is ticked
3.  If using WPS, the Freezone Authority Account number is entered

</div>

<div class="subsection">

### Set Employee Base Currency

For employees earning in non-AED currencies, the base currency must be set before the first payroll run.

1.  The employee's salary configuration is accessed (via Payroll table → employee name, or via Configure salaries → Manage)
2.  The currency is selected from the searchable dropdown (default: AED)
3.  No paid or unpaid items should exist before changing currency
4.  The currency setting is saved

<div class="info-box">

**Currency Change Restrictions:** Changing an employee's base currency has strict prerequisites — all outstanding pay items, variable pay, adjustments, and recurring deductions must be cleared first. See the full list of conditions in [Business Rules & Limitations](#business-rules-limitations).

</div>

</div>

<div class="subsection">

### Initial Setup Checklist

| Step | Setting | Location | Priority |
|----|----|----|----|
| 1 | Review General toggles (payslips, employee access) | Settings → Payroll → General | Required |
| 2 | Configure salaries and bank details via Excel | Settings → Payroll → Manage | Required |
| 3 | Set daily wage calculation formula | Settings → Payroll → Daily Wage Calculation | Required |
| 4 | Create Allowance categories | Settings → Payroll → Allowances | Required |
| 5 | Create Variable Pay categories | Settings → Payroll → Variable Pays | Required |
| 6 | Create Deduction categories | Settings → Payroll → Deductions | Required |
| 7 | Add company bank accounts | Settings → Payroll → Bank Accounts | Required |
| 8 | Upload trade license and register with Lulu Exchange | Company Documents | Required (for Lulu) |
| 9 | Create payroll file templates | Settings → Payroll → Payroll Templates | Required |
| 10 | Set employee base currencies | Salary Configuration per employee | Required (if multi-currency) |
| 11 | Configure employee loan policies | Settings → Payroll → Employee Loan Policies | Optional |
| 12 | Set up leave salary and encashment policies | Settings → Payroll → Leave salary / Leave encashment | Optional |
| 13 | Configure end of service eligibility | Settings → Payroll → End of service eligibility | Optional |
| 14 | Set up social security contribution programs | Settings → Payroll → Social Security Contributions | Optional (if applicable) |
| 15 | Connect QuickBooks Online (if using) | Settings → Payroll → Accounting Integrations | Optional |

</div>

<div class="subsection">

### Post-Setup Validation

Before the first payroll is processed, the following must be verified:

- All employees appear in the payroll table under the correct currency tab
- Salary components (basic salary, allowances) display correctly per employee
- At least one payroll file template is configured and generates the correct output format
- Company bank accounts are registered and employees have payment methods assigned
- Daily wage calculation formula matches the company policy
- Test a payroll cycle with a small group before full-company processing

</div>

<div class="info-box">

**Next step: Configure individual employees.** Company-wide settings are now in place. Before running your first payroll, each employee needs a salary configuration, payment method, and bank account. See [Employee Payroll Configuration](#employee-payroll-config) for per-employee setup — this is also where you manage ongoing salary revisions and variable pay throughout the year.

</div>

</div>

</div>

<div id="employee-payroll-config" class="section section section-employee-payroll">

<div class="section-header">

## Employee Payroll Configuration

</div>

<div class="section-body">

<div class="subsection">

Each employee has a dedicated **Payroll tab** on their profile that provides a comprehensive view of their compensation, adjustments, pay history, and end-of-service calculation. Access it via **Company \> All employees \> \[Employee Name\] \> Payroll tab**.

### Active Payroll Cycle

Displays the employee's complete pay breakdown for the current open payroll cycle, organized into clearly labeled sections.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-49-employee-payroll-active-cycle.png" loading="lazy" alt="Employee Active Payroll Cycle view" />
<figcaption>Active Payroll Cycle showing all pay components for November 2025</figcaption>
</figure>

#### Pay Breakdown Structure

| Section | Description | Actions |
|----|----|----|
| **Basic Salary and Allowances** | Fixed monthly compensation: Basic Salary, Housing, Transportation, and any custom allowances | View/Edit button opens detailed breakdown with Unpaid, Pending Approval, and Processed tables |
| **Variable Pay** | Performance-based items: Bonus for performance, Commission, etc. Each with associated period and remarks | View/Edit opens editable form; Add/Edit Variable Pay Item button for inline editing |
| **Gross Pay** | Auto-calculated total of Basic Salary + Allowances + Variable Pay | Read-only |
| **Adjustments** | Additions (Additional Pay, Bonus, Salary Advance) and Deductions (Traffic Fine, Advance, Early Pay, Petty Cash) | View Details button; Add an adjustment button opens menu with 3 options |
| **Arrears** | Salary differences from prior periods (e.g., retroactive salary increases) | Read-only, auto-calculated |
| **Work Expenses** | Approved expense claims: Client Meal, Food and Beverage, Office Tools, etc. | View Details; Add work expense button |
| **Paid Via** | Payment method for the employee (Cash, Bank Transfer, etc.) | Edit button to change payment method |
| **Total Net Pay** | Final amount after all additions and deductions, split into Processed, Pending Approval, and Unpaid | Read-only summary |

#### Basic Salary and Allowances Dialog

The **View/Edit** button opens a detailed dialog showing three status-based tables:

- **Unpaid Items on Payroll Table** — items ready for processing
- **Unpaid Items Pending Approval** — items awaiting transaction approval
- **Processed** — items already paid, showing paid date, payment method, and amount

The dialog includes a **Go to Salary Configuration** link for quick navigation to the full salary setup.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-50-basic-salary-dialog.png" loading="lazy" alt="Basic Salary and Allowances dialog" />
<figcaption>Basic Salary dialog showing Unpaid (25,000 AED), Pending Approval (0), and Processed (0) breakdowns</figcaption>
</figure>

#### Variable Pay Edit Form

The **View/Edit** button on Variable Pay, followed by **Add/Edit Variable Pay Item**, opens an inline editing form. Each variable pay item has:

- **Pay Items** (required) — dropdown of configured variable pay types (e.g., Bonus for performance, Commission)
- **Associated Period** (required) — start and end date pickers defining the period for this pay item
- **Additional Remarks** — free-text note (e.g., "October's bonus", "Performance Bonus")
- **Amount** (required) — monetary value in the employee's base currency

Each item has a delete button (X icon). The **Add/Edit Variable Pay Item** button adds additional rows. Save or Cancel confirms changes.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-52-variable-pay-edit-form.png" loading="lazy" alt="Variable Pay edit form" />
<figcaption>Variable Pay edit form with 3 existing items and an empty row for new entries</figcaption>
</figure>

#### Adding Adjustments

The **Add an adjustment** button at the bottom of the Adjustments section opens a menu with three options:

- **New addition** — one-time pay addition (bonus, advance, etc.)
- **New deduction** — one-time deduction (fine, recovery, etc.)
- **New recurring deduction** — installment-based deduction spread across multiple cycles

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-53-add-adjustment-menu.png" loading="lazy" alt="Add adjustment dropdown menu" />
<figcaption>Adjustment menu showing New addition, New deduction, and New recurring deduction options</figcaption>
</figure>

#### New Addition Form

The New addition dialog contains the following fields:

| Field | Type | Required | Description |
|----|----|----|----|
| Reference \# | Text | No | Optional reference number (e.g., "12GD556") |
| Type | Dropdown | Yes | 12 addition types available (see list below) |
| Date Incurred | Date picker | No | Date the addition was incurred |
| Amount | Currency (AED) | Yes | Monetary amount of the addition |
| VAT | Currency (AED) | No | VAT amount if applicable |
| Note | Textarea | No | Free-text note for context |
| Attachment | File upload | No | Drag-and-drop or browse for supporting documents |

**Available Addition Types:** Business Trip, Petty Cash, Suha addition, Other Additions, Additional Pay, Advance, Uber Addition, Bonus, Salary Advance, Air Ticket, Commission Advance, Leave Encashment

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-55-addition-type-dropdown.png" loading="lazy" alt="Addition type dropdown showing 12 options" />
<figcaption>New addition form with Type dropdown expanded showing all 12 configured addition types</figcaption>
</figure>

### Salary Configuration

The **Salary Configuration** sub-tab manages an employee's fixed pay structure and maintains a full salary revision history.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-56-salary-configuration.png" loading="lazy" alt="Salary Configuration tab" />
<figcaption>Salary Configuration showing current fixed pay (AED 25,000) and salary history with 4 previous revisions</figcaption>
</figure>

#### Current Fixed Pay

The top section displays the active salary configuration as an expandable accordion showing:

- **Period** — effective start date (e.g., "01 Aug 2025 -" meaning currently active)
- **Amount** — total fixed pay (e.g., AED 25,000.00)
- **Pay Items breakdown** — Basic Salary, Housing, Transportation, and any custom allowances with monthly amounts
- **Edit button** — modify the current salary configuration

#### Salary History

Below the current configuration, all previous salary revisions are listed as expandable accordions, each showing the period and total amount. Clicking any history item expands it to show the pay item breakdown for that period.

#### Configure Fixed Pay Form

The **Add Salary Configuration** button or **Edit** on an existing configuration opens the Configure Fixed Pay dialog:

- **Base currency** — dropdown with 150+ currencies (e.g., AED - United Arab Emirates dirham). Only enabled when adding a new configuration; disabled (read-only) when editing an existing one.
- **Salary comes into effect from** — dropdown showing upcoming payroll months (e.g., Dec 2025, Jan 2026, Feb 2026). Determines when the new salary takes effect. Cannot be set to an already-closed cycle.
- **Pay Item / Monthly Pay** — editable list of salary components (Basic Salary is fixed; allowances like Transportation and Housing can be added/removed)
- **Add New Allowance** button — add custom allowance components
- **Gross Pay** — auto-calculated total of all pay items
- **Social Security Contribution** — Employee nationality (auto-filled, non-editable), Employee Contribution %, Employer Contribution %

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-57-configure-fixed-pay-form.png" loading="lazy" alt="Configure Fixed Pay form" />
<figcaption>Configure Fixed Pay dialog with pay items, gross pay calculation, and social security contribution fields</figcaption>
</figure>

### Pay History

The **Pay History** sub-tab provides a comprehensive month-by-month payroll record in a paginated table.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-58-pay-history.png" loading="lazy" alt="Pay History table" />
<figcaption>Pay History showing monthly payroll records with all compensation components</figcaption>
</figure>

#### Pay History Columns

| Column | Description |
|----|----|
| Month | Pay period (e.g., "Oct 2025") |
| Currency | Base currency (e.g., AED) |
| Basic Salary | Monthly basic salary amount |
| Allowances | Total allowances (Housing, Transportation, etc.) |
| Variable Pay | Total variable pay items for the period |
| Gross Pay | Total before deductions |
| Work Expenses | Approved expense reimbursements (clickable for details) |
| Net Additions | Total one-time additions (clickable for details) |
| Net Deductions | Total deductions applied (clickable for details) |
| Social Security Contribution | Employee social security deduction |
| Arrears | Retroactive salary adjustments (clickable for details) |
| Net Pay | Final amount paid to employee |
| Download | Download payslip for the month |

Clickable amounts (highlighted in purple) open a detail breakdown dialog showing the type, pay period, amount, and salary component for each line item. The table is paginated for employees with long employment histories.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-63-pay-history-arrears-breakdown.png" class="screenshot" loading="lazy" alt="Pay History arrears breakdown dialog showing salary components for Khalid Higazy" />
<figcaption>Clicking a purple Arrears amount opens a detail dialog — here showing Khalid Higazy's arrear adjustments for Sep 2025 with salary component breakdown per pay period</figcaption>
</figure>

### End of Service Calculator

The **End of Service** sub-tab provides an EOS gratuity calculator per UAE labour law. This tool is **admin-only** — employees do not have access to it from their own profile.

The calculator auto-populates the Hire Date and Basic Salary from the employee's profile. The admin enters a Departure Date (which auto-calculates Total Service Duration), selects a Reason for departure, and chooses the Contract Type (Unlimited or Limited). The 8 departure reasons are: Resignation with notice, Termination with notice, Termination without notice, Resignation without notice, End of contract, Death, Absconding, and Termination (disabled parent option requiring a sub-type). The **Calculate** button then generates the EOS gratuity amount based on UAE labour law formulas configured in Payroll Settings.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-60-eos-departure-reasons.png" loading="lazy" alt="End of Service Calculator with departure reason dropdown open" />
<figcaption>End of Service Calculator showing the departure reason dropdown with all 8 available options</figcaption>
</figure>

### Additional Sub-Tabs

The employee Payroll tab also includes these sub-tabs for specific management areas:

- **Adjustments** — view and manage all additions and deductions for the employee across payroll cycles
- **Leave Salary** — manage leave salary requests specific to this employee
- **Work Expenses** — view approved expense claims linked to payroll processing

</div>

</div>

</div>

<div id="core-tasks" class="section section section-core-tasks">

<div class="section-header">

## Key Tasks

</div>

<div class="section-body">

<div class="subsection">

### Task: Process Monthly Payroll

Review employee pay breakdowns, apply any adjustments, and submit transactions for payment processing.

#### Subtask: View Payroll Table

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/01-payroll-table-main.png" class="screenshot" loading="lazy" alt="01-payroll-table-main.png" />
<figcaption>Main payroll table showing employee salary data organized by currency</figcaption>
</figure>

Access **Payroll → Payroll Table** from the left sidebar. The Payroll Table is the central hub for reviewing and managing employee pay each month. It shows every employee's salary breakdown for the selected payroll cycle, grouped by currency.

##### Payroll Cycle

The dropdown in the top-left shows the currently selected month and its date range (e.g., "November 2025 — 01 Nov 2025 - 30 Nov 2025"). Each cycle has a status badge:

- **Open** (green badge) — The active cycle. You can modify salary data, add adjustments, and submit transactions. Only one cycle is open at a time.
- **Closed** (grey badge) — A finalized cycle. You can view historical data but cannot make changes. Closed cycles list in reverse chronological order.

Click the dropdown to switch between cycles. When viewing a closed cycle, all editing controls are disabled and the table becomes read-only.

<div class="info-box">

**Tip:** The tooltip "You can modify current payroll table before closing the pay-run" confirms the cycle is still open for changes.

</div>

<div class="warning-box">

**Cycle dates:** Default payroll cycles run from the 1st to the last day of the month. Custom cycle dates (e.g., 27th to 26th) require additional configuration — reach out to your Bayzat Customer Success Manager to set these up.

</div>

##### Summary Stats

Below the currency tabs, a row shows four key totals for the selected cycle and currency:

| Metric | What It Shows |
|----|----|
| **Total net pay** | The sum of all employees' net salary for the month (e.g., AED 2,897,554.16) |
| **Processed till date** | Amount already submitted and approved via transactions (shown in green). Click *"View paid amount"* to navigate directly to the **Transactions → Approved** tab showing all approved transaction records with submission dates, employee counts, net pay, approver details, and status. |
| **Unpaid amount pending approval** | Transactions submitted but still waiting for approver action (shown in red when non-zero). Click *"View unpaid amount"* to navigate to the **Transactions → Pending** tab. If no transactions are pending, you will see "No data to show". |
| **Total unpaid** | Remaining amount not yet submitted for payment (shown in red), with employee count (e.g., "124 employees"). When you select/deselect employee checkboxes, this value updates dynamically to show only the selected employees' totals (e.g., "3/124 employees"). |

##### Currency Tabs

Employees are grouped by payment currency. Each tab shows the code and employee count:

- **AED** — Employees paid in UAE Dirhams (e.g., 124 Employees)
- **USD** — Employees paid in US Dollars (e.g., 2 Employees)
- **AUD** — Employees paid in Australian Dollars (e.g., 1 Employee)

Transactions must be submitted separately per currency. Switch tabs to view and manage each currency's payroll independently.

##### Warning Banners

Two types of banner appear above the payroll table when action is needed:

- **Yellow warning** — "X employees have unpaid leave adjustments, because leave requests were approved on leaves." Click *"Filter X Employees"* to view only affected employees. This means approved leave requests have generated automatic salary deductions that should be reviewed before submitting transactions. This warning is informational — it does not block any payroll actions.
- **Red critical alert** — "X employees are missing information, where Y of them are critical." Two filter buttons appear: *"Filter X employees"* (all missing info) and *"Filter Y critical employees"* (only critical gaps). Critical missing information (such as bank account details or Emirates ID) **disables the Submit Transaction button** for affected employees until resolved.

<div class="info-box">

**Impact on payroll actions:**

- **Submit Transaction** — Disabled when employees with critical missing information are selected. Resolve the flagged issues first, or deselect affected employees to submit for the remaining staff.
- **Close Payroll Cycle** — Remains available even when warnings are present. You can close the cycle from **More Options (⋮) → Close payroll cycle** regardless of warning banners. However, closing without resolving warnings means affected employees' payroll may be incomplete.

</div>

##### Filters

Click the button to open the filter dialog with the following options:

| Filter Category | Options |
|----|----|
| **Missing Information** | Any Missing Information, Critical Information, Completed Profile, Country of Residence, Trade License, Ministry of Labour ID, Emirates ID/Passport, Basic Salary and Allowances, Transfermate Details, Freezone Employee ID Number, Bank Account Detail, Payroll Card Detail, IBAN/CRN |
| **Employee Status** | Active, Inactive |
| **Unpaid Netpay Total** | Negative, Positive, Zero |
| **Trade Licenses** | Dropdown — select specific trade license |
| **Payment Methods** | Dropdown — filter by WPS, bank transfer, etc. |
| **Offices** | Dropdown — filter by office location |
| **Departments** | Dropdown — filter by department |
| **Request Types** | Dropdown — filter by request type |
| **Collar** | Dropdown — filter by employee classification |
| **Updated Visa Status** | Dropdown — filter by visa status |
| **Trade License Map** | Dropdown — filter by trade license mapping |
| **EOS Calculate** | Dropdown — filter by EOS calculation status |

Use the **Unpaid Netpay Total → Negative** filter to find employees with negative net pay, which blocks transaction submission. Click **"Apply filters"** to apply or **"Cancel"** to close without changes.

<div class="warning-box">

**Known limitation:** When downloading the payroll table with filters applied, the export may not always respect the active filter. Verify the exported file matches your filtered view. *(Ref: TSSD-121)*

</div>

##### Search

Use the **"Search by employee name, ID"** field to find a specific employee in real-time.

##### Download

Exports the payroll table data. For detailed download steps including file templates and multi-currency handling, see the **Download Payroll Data** task below.

##### More Options Menu (⋮)

Located next to the Download button in the top-right corner. Click the three-dot icon to open the dropdown. Available options:

- **Download Gratuity File** — Export a gratuity report for all employees
- **Close Payroll Cycle** — Finalize the current month and carry unpaid items forward as arrears (see [Close Payroll Month](#close-payroll-month))
- **Mass Upload Variable Pays** — Bulk-upload variable pay items via spreadsheet
- **Mass Upload Additions** — Bulk-upload addition items via spreadsheet
- **Mass Upload Deductions** — Bulk-upload deduction items via spreadsheet

#### Subtask: Review Salary Components

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/02-payroll-table-columns.png" class="screenshot" loading="lazy" alt="02-payroll-table-columns.png" />
<figcaption>Payroll table columns showing salary breakdown and pay items</figcaption>
</figure>

##### Selected Columns on the Payroll Table (Pay Component Selection)

The **"Selected columns on the payroll table"** checkboxes serve a **dual purpose**: they control both which columns are visible in the table *and* which pay components are included when you submit a transaction. Each checkbox displays the component name and its aggregate total across all employees (e.g., "Basic Salary (AED 1,019,092.00)").

<div class="warning-box">

**These checkboxes are not just a display setting — they directly affect payment amounts.**

- **Checking** a component includes it in the **Total unpaid** summary and in any transaction you submit
- **Unchecking** a component removes it from the **Total unpaid** calculation and excludes it from the next transaction submission. The component's amounts drop to 0.00 for every employee in the table
- Clicking **"Unselect all"** sets Total unpaid to AED 0.00 — no components are queued for payment
- The **"Total net pay"** figure (top-left) always shows the full calculated pay regardless of checkbox state — only **"Total unpaid"** changes

</div>

**Use case:** An admin can pay salaries in stages — for example, submit Basic Salary and Allowances first, then submit Commissions and Bonuses in a separate transaction later in the month. Each submission only includes the checked components.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-column-checkboxes-all-selected.png" class="screenshot" loading="lazy" alt="Selected columns on the payroll table with all components checked, showing aggregate totals per component and Total unpaid AED 3,934,705.78" />
<figcaption>All pay components selected — Total unpaid reflects the full amount across all employees</figcaption>
</figure>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-column-unselect-all.png" class="screenshot" loading="lazy" alt="All columns unselected — Total unpaid shows AED 0.00 and all employee rows show 0.00" />
<figcaption>After clicking "Unselect all" — Total unpaid drops to AED 0.00; the table shows only summary columns (Total Net Pay, Processed Net Pay, Unpaid Pending Approval, Unpaid Net Pay, Paid Via)</figcaption>
</figure>

**Mandatory components:** **Social Security Contribution** is a legally mandated deduction — its checkbox is **disabled and always checked**. You cannot exclude it from any transaction. It appears greyed out in the checkbox list to indicate this locked state.

Common pay components include:

- **Basic Salary** — Fixed monthly base salary
- **Allowances** — Housing, transport, and other configured allowances
- **Bonus for performance** — Performance-based bonuses
- **COLA** — Cost of Living Adjustment
- **Commission** — Sales or performance commissions
- **Work Expenses** — Approved expense reimbursements
- **Net Additions** — Sum of all addition items
- **Net Deductions** — Sum of all deduction items
- **Social Security Contribution** — GOSI/SSC deductions (shows as negative value; **always locked on**)
- **Arrears from Previous Month** — Unpaid amounts carried forward from closed months
- **Unpaid Net Pay** — Amount remaining to be paid for this employee

##### Employee Row Details

Each row shows one employee with their ID, name, job title, and salary figures. Look for these status indicators:

- <span style="color:#e53e3e;font-weight:600;">Red "Missing Basic Salary and Allowances"</span> — Employee's salary configuration is incomplete. Set up their pay components before submitting transactions.
- <span style="color:#e53e3e;font-weight:600;">Red "Inactive"</span> — Employee status is inactive (e.g., offboarded). May still appear if arrears or unpaid amounts exist.
- <span style="color:#e53e3e;font-weight:600;">Red "notice"</span> — A system notice requiring attention (e.g., pending leave adjustment or data discrepancy).
- **N/A in ID column** — Employee ID not yet assigned in the system.

Click any employee row to open their detailed payroll breakdown, where you can view individual pay item calculations.

##### Sorting and Pagination

Click any column header to sort. The table displays 20 employees per page with pagination controls at the bottom.

#### Subtask: Submit Payroll Transaction

Creates a payment transaction for selected employees. This is how you initiate salary payment — it is **not** the same as closing the payroll month.

##### When Disabled

The button appears greyed out and shows the tooltip *"You can not run payroll if any critical information for selected employees is missing"* when:

- **Critical employee information is missing** — If any selected employee has critical missing data (most commonly **Missing Bank Account Detail**), the button is disabled. You cannot process a bank payment without bank account details. Click *"Filter 3 critical employees"* (the count varies) in the red banner to identify who is affected, then either fix their data or deselect them.
- **No employees are selected** — Use the row checkboxes to select employees to pay. The summary shows "0/124 employees" when none are selected.
- **Negative net pay detected** — One or more selected employees has a negative net pay (total deductions exceed total pay). Use Filters → Unpaid Netpay Total → Negative to identify these employees and resolve the discrepancy before submitting. *(Ref: TSSD-1964)*
- **Closed payroll cycle** — Viewing a historical (closed) cycle disables all actions

The screenshot below shows the disabled state in practice. All 124 employees are selected via the header checkbox, but the Submit Transaction button remains greyed out because 3 employees have critical missing information (shown in the red banner: "31 employees missing info, 3 critical"). To proceed, either click "Filter 3 critical employees" to identify and fix their data, or deselect them using individual checkboxes.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-99-submit-transaction-disabled.png" class="screenshot" loading="lazy" alt="Payroll table with Submit Transaction button disabled due to 3 critical employees missing information" />
</figure>

<div class="info-box">

**Submitting partial payments:** You do not have to submit all pay components for all employees at once. Use the **pay component checkboxes** ("Selected columns on the payroll table") to choose which salary components to include, and the **row checkboxes** to select specific employees. For example, submit Basic Salary and Allowances for all employees first, then submit Commissions and Bonuses in a separate transaction later. The Total unpaid and summary row update dynamically to reflect your selections.

</div>

##### Steps

1.  Select the correct **currency tab** — transactions are submitted per currency
2.  Verify the **pay component checkboxes** are set correctly — only checked components will be included in this transaction (check all for a full salary run)
3.  Use **row checkboxes** to select the employees you want to pay (or use the header checkbox to select all visible employees)
4.  If the button is disabled, deselect employees with critical missing information (red banner shows who they are)
5.  Click **"Submit Transaction"**
6.  The **"Review and Submit Transaction"** dialog appears showing:
    - **Employee count** — how many employees are included (e.g. "3 / 124")
    - **Total Net Pay** — the total amount to be submitted
    - **Approvers** — avatars of the configured approvers who will review
    - **Payment breakdown table** — grouped by Trade License and Payment Method (e.g. Bank or Cash), showing the number of employees and net payout per group
    - **Remarks field** — optional text to include a note for approvers
7.  Review the breakdown, optionally add remarks, then click **"Submit Transaction"**

The screenshot below shows the Review and Submit Transaction dialog after selecting 2 employees. The header displays the employee count (2 / 124), Total Net Pay (AED 25,200.00), and the configured approvers with pending status. The payment breakdown table groups employees by Trade License and Payment Method — here, one employee is paid via Bank (HSBC) under "Trade License Sample" and another via Cash under "Not Applicable". At the bottom, the remarks field allows you to add a note for approvers before clicking Submit Transaction.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-100-review-submit-transaction-dialog.png" class="screenshot" loading="lazy" alt="Review and Submit Transaction dialog showing employee count, net pay, approvers, trade license breakdown, and remarks field" />
</figure>

**Expected Outcome:** The transaction is submitted for approval. The "Processed till date" amount in the summary row increases by the submitted amount. Configured approvers receive a notification to review. On the Transactions page, the submission appears under the **Pending** tab until approved.

<div class="info-box">

**Submit Transaction vs Close Payroll Month:** Submitting a transaction sends salary payments for processing. Closing the payroll month finalizes the entire cycle and carries unpaid amounts to next month as arrears. You can submit multiple transactions before closing the month — for example, paying different employee groups or trade licenses separately.

</div>

<div class="warning-box">

**Verify before submitting:** Check that the "Processed till date" and "Total unpaid" amounts match your expectations. Discrepancies between the payroll table totals and transaction amounts can occur if adjustments were added after a previous submission. *(Ref: TSSD-1549, TSSD-2155)*

</div>

</div>

<div class="subsection">

### Task: Manage Payroll Adjustments

Adjustments are one-time or recurring salary additions and deductions that modify an employee's net pay for a given payroll cycle. They are managed from two places: the **Adjustments page** (bulk view across all employees) and the **employee's Active Payroll Cycle** (individual view).

#### Subtask: View Adjustments Page

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-02-adjustments.png" class="screenshot" loading="lazy" alt="Adjustments page" />
<figcaption>Adjustments page showing additions and deductions across all employees</figcaption>
</figure>

Navigate to **Payroll → Adjustments**. The page displays all adjustments for the selected payroll cycle with the following columns:

| Column | Description |
|----|----|
| **Name** | Employee name (clickable link to their profile) |
| **Type** | Addition or Deduction, with the specific category below (e.g., "Addition — Air Ticket (Reimbursement)", "Deduction — Loan repayment"). A <span style="background:#f0e6ff;padding:2px 6px;border-radius:4px;font-size:0.85em;">Recurring</span> badge appears for multi-month adjustments. |
| **Amount** | Currency and value (e.g., AED 2,000.00) |
| **Incurred at** | Date the adjustment was created or incurred |
| **Actions** | Edit (pencil icon) and Delete (trash icon) buttons per row |

Use the **Search** field to find adjustments by employee name or ID. Click **Filters** to narrow results. Click **Download** to export the adjustments list.

<div class="info-box">

**Leave adjustment banner:** A yellow banner appears when unpaid leave requests have generated automatic deductions — e.g., "2 adjustments created because unpaid leave requests were approved on leaves." Click *"Review these adjustments"* to filter and review them.

</div>

#### Subtask: Create Adjustment

There are two ways to create adjustments:

##### Method 1: From the Adjustments Page

Click the **"New Adjustment"** button (top right). The dropdown arrow next to it provides quick access to specific adjustment types.

##### Method 2: From Employee's Active Payroll Cycle

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-53-add-adjustment-menu.png" class="screenshot" loading="lazy" alt="Add adjustment menu" />
<figcaption>The "Add an adjustment" menu on an employee's payroll breakdown</figcaption>
</figure>

On an employee's Active Payroll Cycle page, click **"+ Add an adjustment"** to see the menu:

- **New addition** — One-time positive pay item (bonus, reimbursement, etc.)
- **New deduction** — One-time negative pay item (fine, advance recovery, etc.)
- **New recurring deduction** — Multi-month deduction (loan repayment, installment, etc.)

##### New Addition / Deduction Form

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-54-new-addition-form.png" class="screenshot" loading="lazy" alt="New addition form" />
<figcaption>New addition form with type selection, amount, and file upload</figcaption>
</figure>

| Field | Description |
|----|----|
| **Reference \#** | Auto-generated reference number (editable) |
| **Type** | Dropdown of configured addition/deduction categories |
| **Date Incurred** | Date picker (DD/MM/YYYY) for when the adjustment occurred |
| **Amount** | Currency amount (uses the employee's base currency) |
| **VAT** | Optional VAT amount |
| **Note** | Free-text field for comments or justification |
| **File Upload** | Drag-and-drop area for supporting documents (receipts, approvals) |

##### Available Addition Types

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-55-addition-type-dropdown.png" class="screenshot" loading="lazy" alt="Addition type dropdown" />
<figcaption>Type dropdown showing configured addition categories</figcaption>
</figure>

The Type dropdown shows categories configured in **Settings → Payroll → Salary Component Categories → Additions**. Common types include: Business Trip, Petty Cash, Other Additions, Additional Pay, Advance, Bonus, Salary Advance, Air Ticket, Commission Advance, Leave Encashment.

1.  Select the adjustment type from the **Type** dropdown
2.  Enter the **Date Incurred**
3.  Enter the **Amount** (and VAT if applicable)
4.  Add a **Note** explaining the adjustment
5.  Optionally upload a supporting document
6.  Click **"Save"**

**Expected Outcome:** The adjustment appears in both the Adjustments page and the employee's Active Payroll Cycle. The amount immediately affects the employee's net pay calculation in the Payroll Table.

##### Recurring Deductions

When selecting **"New recurring deduction"**, an additional field appears to specify the **number of months**. The system automatically distributes the deduction across future payroll cycles. Progress shows as a badge (e.g., *"2 OUT OF 15 DEDUCTIONS."*) on each installment row in the employee's payroll breakdown.

<div class="warning-box">

**Editing recurring adjustments:** Editing or deleting a recurring adjustment only affects future installments. Past installments that were already included in closed payroll cycles cannot be modified.

</div>

</div>

<div class="subsection">

### Task: Review and Approve Transactions

After submitting a transaction from the Payroll Table, it moves to the **Transactions** page for review and approval. Only users with the appropriate approval role can approve or reject transactions.

#### Subtask: Access the Transactions Page

Navigate to **Payroll → Transactions**. Select the payroll cycle from the dropdown — for a closed month the badge shows **"Closed"** (grey), while an open month shows **"Open"** (green). The page has three main areas:

##### Summary Cards

The Summary cards at the top change depending on the cycle status:

- **Open month (3 cards):**
  - **Total Amount** (purple money bag icon) — Combined value of all submitted transactions
  - **Approved** (green checkmark icon) — Total value of approved transactions
  - **Rejected** (red X icon) — Total value of rejected transactions
- **Closed month (2 cards):**
  - **Total Amount** (purple money bag icon) — Final total for the cycle (e.g. AED 238,083.33)
  - **Number of employees** (purple group icon) — Total employees paid, broken down by trade license (e.g. "Trade License Sample – 3 Employees", "Missing Assignment – 2 Employees")

The top-right action buttons also change: open months show **"Close payroll cycle"**, while closed months show **"Download Payslips"** and **"Sync data to QuickBooks Online"**.

##### Status Tabs

Three tabs filter transactions by status, each showing a count badge:

- **Pending** — Transactions awaiting approver action
- **Approved** — Transactions that have been approved and processed
- **Rejected** — Transactions that were rejected by an approver

The screenshot below shows the Transactions page for a closed month (November 2025) with 3 approved transactions. Notice the Summary cards at the top, the status tabs, and the transaction table with submission dates, employee counts, net pay amounts, approval status, and approver avatars.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-95-transactions-list-nov2025.png" class="screenshot" loading="lazy" alt="Transactions page for November 2025 showing Summary, status tabs, and 3 approved transactions" />
</figure>

##### Transaction Table

| Column | Description |
|----|----|
| **Submission Date** | Date the transaction was submitted (e.g., 12 Feb 2026) |
| **No. of Employees** | Number of employees included in the transaction (e.g., "1 Employee", "2 Employees") |
| **Net Pay** | Total payment amount with currency (e.g., AED 36,483.33) |
| **Status** | Status badge: <span style="color:#38a169;font-weight:600;">Approved</span>, <span style="color:#d69e2e;font-weight:600;">Pending</span>, or <span style="color:#e53e3e;font-weight:600;">Rejected</span> |
| **Approvers** | Avatar of the approver who acted, with a green checkmark for approved. Hover to see the approver's name and action. |
| **Remarks** | Purple speech bubble icon with a count badge (e.g. "2") indicating how many remarks or comments have been added to the transaction |
| **View details** | Button to open the Transaction Details page with full breakdown |
| **Actions** | Three-dot menu (⋮) for additional actions like Undo |

The Approved tab also shows a **Quick filter**: *"Payroll processing in progress (0)"* to filter transactions currently being processed by the bank.

#### Subtask: View Transaction Details

Click **"View details"** on any transaction row to open the Transaction Details page. This page provides a detailed breakdown of the transaction including:

- **Quick Filters** — Filter by trade license, payment method, or search for a specific employee
- **Summary header** — Shows the Submission Date (e.g. 12 Feb), Net Pay Amount (e.g. AED 36,483.33), and No. of Employees (e.g. 2 Employees)
- **View Remarks** — Opens the Remarks and activity panel (see below)
- **Download Excel File** — Exports the transaction data as an Excel file for record-keeping
- **Trade license breakdown table** — Shows each trade license group with employee count, payment method (e.g. Cash, Bank), amount, status, and an eye icon to view the full Transaction Report

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-96-transaction-details.png" class="screenshot" loading="lazy" alt="Transaction Details page showing summary, filters, and trade license breakdown" />
</figure>

#### Subtask: View Transaction Report

From the Transaction Details page, click the **eye icon** in the Actions column of any trade license row. This opens the **Transaction Report** dialog — a detailed per-employee pay breakdown for that group.

The report shows:

- **Header** — Trade License name, Paid via method, Total Amount, and Status (Approved/Pending/Rejected)
- **Employee list** (left panel) — Searchable list of employees in this group. Click any name to see their individual breakdown.
- **Pay breakdown** (right panel) — For the selected employee, shows their Joined Date and a detailed table with columns: Pay Items, Remarks, In this Transaction, and Net Pay Amount. Sections include:
  - **Basic Salary and Allowance** — Base salary components (e.g. Basic Salary: 200.00)
  - **Variable Pay** — Commission, bonuses, etc.
  - **Gross Pay** — Subtotal of salary + variable pay (highlighted row)
  - **Gratuity**, **Social Security Contribution** — Statutory deductions
  - **Adjustment Addition / Deduction** — Manual adjustments applied to this cycle
  - **Arrears Additions / Deductions** — Carried forward from previous months, with the originating pay period noted (e.g. "Pay Period – October, 2025")
  - **Work Expense** — Reimbursements included in payroll
- **Footer** — Total (AED) with Pay via method, In this Transaction amount, and Total Net Pay

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-98-transaction-report.png" class="screenshot" loading="lazy" alt="Transaction Report showing per-employee pay breakdown with salary components, arrears, and totals" />
</figure>

#### Subtask: View Remarks and Activity

Click **"View Remarks"** on the Transaction Details page to open a side panel showing the full audit trail for the transaction. This panel displays:

- **Activity log** — A chronological list of actions taken on the transaction, with the user's avatar, name, action (e.g. "created transaction", "approved transaction"), and timestamp
- **Comment field** — A "Write a comment..." input at the bottom where approvers or admins can add notes or questions about the transaction

This provides a complete audit trail showing who created, reviewed, and approved or rejected the transaction, and when each action occurred.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-97-transaction-remarks.png" class="screenshot" loading="lazy" alt="Remarks and activity panel showing transaction audit trail with creator and approver actions" />
</figure>

#### Subtask: Approve a Transaction

1.  Navigate to **Payroll → Transactions**
2.  Click the **Pending** tab to see transactions awaiting approval
3.  Click **"View details"** on a transaction to review the employee list and amounts
4.  Verify the total amount, employee count, and payment method
5.  Optionally add remarks or comments via **"View Remarks"**
6.  Click **"Approve"** to approve or **"Reject"** to reject

Once approved, the transaction moves to the Approved tab. The screenshot below shows the Transactions page for a closed month (November 2025) with 3 approved transactions. Each row displays the submission date, employee count, net pay amount, approval status badge, the approver's avatar with confirmation, and a remarks indicator. Click "View details" on any row to see the full trade license and payment method breakdown.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-95-transactions-list-nov2025.png" class="screenshot" loading="lazy" alt="Transactions page showing Approved tab with 3 approved transactions for November 2025" />
</figure>

**Expected Outcome:** Approved transactions move to the Approved tab and the bank file becomes available for download. Rejected transactions move to the Rejected tab and the amounts return to the Payroll Table as unpaid.

<div class="info-box">

**Close payroll cycle button:** The **"Close payroll cycle"** button appears in the top-right of the Transactions page (for open months). This is an alternative path to close the month — it performs the same action as closing from the Payroll Table. For closed months, this button is replaced by **"Download Payslips"** and **"Sync data to QuickBooks Online"**.

</div>

<div class="warning-box">

**Rejection is final:** Rejected transactions cannot be moved back to pending. The amounts return to the Payroll Table and must be resubmitted as a new transaction. Ensure you review carefully before rejecting.

</div>

</div>

<div class="subsection">

### Task: Process Leave Salary

Leave salary is paid to employees before their annual leave. It is calculated based on the **Leave Salary Policy** configured in Settings and follows a separate approval flow from regular payroll transactions.

#### Subtask: Access Leave Salary Page

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/05-leave-salary.png" class="screenshot" loading="lazy" alt="Leave Salary page" />
<figcaption>Leave Salary page showing requests, status tabs, and summary card</figcaption>
</figure>

Navigate to **Payroll → Leave Salary**. The page displays:

##### Summary Card

A card in the top-right shows the **"Amount requested as leave salary — For this month"** with the total amount (e.g., AED 6,003.78). Below the header, a banner highlights any employees whose leave salary processing is pending.

##### Status Tabs

Leave salary requests progress through these statuses:

- **Approved** — Requests approved by the configured approvers (count badge shows total)
- **Rejected** — Requests that were declined
- **At Payroll** — Approved requests waiting to be included in a payroll transaction
- **Processed** — Requests that have been paid

##### Request Table Columns

| Column | Description |
|----|----|
| **Name** | Employee name (clickable link) |
| **Requested on** | Date the request was created |
| **Request type** | "Leave salary" — the type of payment |
| **Amount** | Calculated leave salary amount in employee's currency |
| **Leave date** | Start date of the leave, with a countdown (e.g., "Due in 11 days" in orange) |
| **No. of leaves** | Number of leave days requested |
| **Approvers** | Avatar icons of assigned approvers (with "?" icons for pending approval) |
| **Actions** | Comment icon and three-dot menu for additional actions |

#### Subtask: Create a Leave Salary Request

1.  Click the **"Create leave salary request"** button (top-right, purple)
2.  Select the employee from the dropdown
3.  Enter leave details (start date, number of days)
4.  The system auto-calculates the leave salary amount based on the configured **Leave Salary Policy** formula
5.  Review the calculated amount
6.  Submit the request

The screenshot below shows the Create leave salary request dialog when it first opens. The form starts with a single field — the Employee dropdown — where you search for and select the employee. Once selected, additional fields appear based on that employee's leave data.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-102-create-leave-salary-request.png" class="screenshot" loading="lazy" alt="Create leave salary request dialog with Employee dropdown field" />
</figure>

If the selected employee has no approved paid leave that qualifies, the system displays a warning: *"No approved paid leave that is eligible for the leave salary request"*. This means the employee either has no upcoming approved leave, or their leave type does not qualify for salary advance. You will need to ensure the employee has an approved paid leave request before creating a leave salary request for them.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-103-create-leave-salary-no-leave.png" class="screenshot" loading="lazy" alt="Create leave salary request showing warning that no approved paid leave is eligible" />
</figure>

**Expected Outcome:** The request appears in the Approved tab (if auto-approved) or awaits approver action. Once approved, it moves to "At Payroll" status, then "Processed" after payment.

##### Download Leave Salary Data

Click the **"Download"** button (with dropdown arrow) to export leave salary requests for the current cycle. Use this for reconciliation and audit purposes.

<div class="info-box">

**Leave salary formula:** The calculation depends on the formula configured in Settings → Payroll → Leave Salary Policy. Components typically include basic salary and allowances, divided by days in the month, multiplied by leave days. See the [Leave Salary Policy](#leave-salary-policy) section for configuration details.

</div>

</div>

<div class="subsection">

### Task: Close Payroll Month

Closing the payroll month finalizes all salary data for the current cycle and opens a new cycle for the next month. Any unpaid amounts are carried forward as **arrears**. This action is **permanent and cannot be undone**.

#### Subtask: Review Before Closing

Before closing, verify the following:

1.  **Check the Payroll Table** — Review the summary row to ensure "Total unpaid" is at the expected level. If employees still have unpaid amounts, they will carry forward as arrears.
2.  **Check Transactions** — Navigate to **Payroll → Transactions** and confirm all submitted transactions are approved. Pending transactions should be resolved first.
3.  **Check Adjustments** — Verify any pending adjustments have been applied. Unapplied adjustments may not carry forward correctly.
4.  **Check Leave Salary** — Ensure all approved leave salary requests have been processed.
5.  **Review per currency** — If you have multi-currency payroll, check each currency tab independently.

The screenshot below shows the Payroll Table for an open cycle (December 2025). Use the summary statistics at the top — Total net pay, Processed till date, Unpaid pending approval, and Total unpaid — to verify the payroll status before closing. The red banner at the bottom warns about employees with missing information (here, 31 employees missing info with 3 critical) which should be resolved first.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-99-submit-transaction-disabled.png" class="screenshot" loading="lazy" alt="Payroll Table showing summary statistics and missing information warnings to review before closing" />
</figure>

#### Subtask: Close the Month

There are two ways to initiate closure:

- **From Payroll Table:** Click the **More Options (⋮)** menu → **"Close payroll cycle"**
- **From Transactions:** Click the **"Close payroll cycle"** button in the top-right corner

After selecting **"Close payroll cycle"** from the More Options menu, the system walks you through a four-step confirmation process.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-86-more-options-dropdown.png" class="screenshot" loading="lazy" alt="More Options dropdown showing Close Payroll Cycle option" />
</figure>

**Step 1 — Summary dialog.** A warning dialog titled *"Warning! You are about to close the month"* appears with:

- A magenta warning: *"Closing \[Month Year\] (\[start\] – \[end\]) with unpaid items will create arrears and carry these items forward to \[Next Month Year\] (\[start\] – \[end\])"*
- A **currency summary table** listing each currency (e.g. AED, USD, AUD) with three columns:
  - **Total net pay** — the full payroll amount for the cycle
  - **Amount Processed** — what has already been paid via approved transactions
  - **Amount Unpaid** — the remaining balance (shown in red) that will become arrears
- A yellow tip: *"Submit Transaction from Payroll Table to avoid carrying forward these items"*

Two buttons appear at the bottom:

- **"Cancel carry forward"** — closes the dialog without making any changes
- **"Review breakdown"** — shows the detailed per-employee breakdown (Step 2)

The screenshot below shows this summary dialog with the currency breakdown. Review these figures carefully — the Amount Unpaid column (in red) represents the total that will become arrears in the next cycle.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-87-close-cycle-step1-summary.png" class="screenshot" loading="lazy" alt="Close Payroll Cycle Step 1 — Summary dialog with currency breakdown" />
</figure>

**Step 2 — Review breakdown.** Click **"Review breakdown"** to see exactly which employees and salary components will carry forward. The dialog expands to show a scrollable table with columns:

- **Employee Name** — the employee with unpaid items
- **Type** — the salary component (e.g. Basic Salary, House, Arrear 10/2025, Work Expense Addition, Deduction)
- **Unpaid** — the amount that will carry forward (negative values for deductions)

A highlighted row at the top shows the **Total Unpaid Amount** for the cycle. This table can be very long — scroll through it to review all affected employees and items.

Below is an example of this breakdown. Each row represents a specific salary component for an employee that remains unpaid.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-88-close-cycle-step2-breakdown.png" class="screenshot" loading="lazy" alt="Close Payroll Cycle Step 2 — Per-employee breakdown table" />
</figure>

**Step 3 — Acknowledge carry forward.** Once you have reviewed the breakdown, scroll to the bottom where you will find a confirmation checkbox. You must:

1.  Tick the checkbox: *"I confirm and understand carry forwards and arrears will be created when I close the month"*
2.  Click **"Close month and carry forward"** (this button remains greyed out until the checkbox is ticked)

If you are not ready to proceed, click **"Back"** to return to the summary dialog (Step 1).

The screenshot below shows the checkbox ticked and the **"Close month and carry forward"** button now active.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-89-close-cycle-step3-checkbox-ticked.png" class="screenshot" loading="lazy" alt="Close Payroll Cycle Step 3 — Confirmation checkbox ticked" />
</figure>

**Step 4 — Final confirmation.** After clicking "Close month and carry forward," the system presents one final safeguard. A second confirmation dialog appears titled *"Confirm closing \[Month Year\] (\[start\] – \[end\])"* with a yellow warning:

> *"Closing \[Month Year\] is an irreversible action. This will lock \[Month Year\] for changes and open \[Next Month Year\]."*

You must tick **all 6 mandatory checkboxes** before the "Close Month" button activates. Each checkbox acknowledges a specific consequence of closing:

1.  Closing is **permanent and cannot be undone**
2.  **Arrear deductions** will be created for unpaid salary and allowances in the closing month
3.  **Arrear additions** will be created for unpaid salary and allowances in the next month
4.  Unpaid **variable pay, additions and deductions** will be carried forward to the next month
5.  **Payslips will be automatically generated** for all employees
6.  All transactions with **pending approval will be automatically rejected**

Once all 6 checkboxes are ticked, the **"Close Month"** button becomes active as shown below. Click it to finalize the closure.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-91-close-cycle-step4-all-ticked.png" class="screenshot" loading="lazy" alt="Close Payroll Cycle Step 4 — All 6 checkboxes ticked, Close Month button active" />
</figure>

**Expected Outcome:** After clicking "Close Month," a success screen with a celebration animation confirms that the month has been closed and the next cycle is now open.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-92-november-closed-december-open.png" class="screenshot" loading="lazy" alt="Success screen — payroll month closed successfully" />
</figure>

Click **"Close Window"** to return to the Payroll Table. You will now see the new cycle loaded with the following changes:

- The new month displayed in the Payroll Cycle dropdown with an **"Open"** (green) badge
- **Processed till date** reset to AED 0.00 (fresh cycle)
- **Arrears from Previous Months** column populated with unpaid amounts carried forward from the closed cycle
- **Total net pay** higher than usual because it includes arrears on top of regular salary

The screenshot below shows the Payroll Table after closure. Notice the Arrears from Previous Months column now contains the carried-forward amounts, and the Total net pay reflects the combined regular salary plus arrears.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-93-december-2025-open.png" class="screenshot" loading="lazy" alt="New payroll cycle open with arrears carried forward from previous months" />
</figure>

<div class="warning-box">

**This action is permanent.** Once a payroll month is closed, you cannot reopen it, modify its data, or undo transactions within it. All payroll data becomes read-only. Any pending transactions are automatically rejected. Double-check all amounts before confirming.

</div>

<div class="info-box">

**Arrears behavior:** Unpaid amounts carried forward include the full salary breakdown (basic salary, allowances, deductions, arrears from earlier months, etc.). Each item retains its type label (e.g. "Arrear 09/2025") so you can trace which period and component generated the arrear. You can view the arrears breakdown by clicking the arrears amount in the employee's Pay History — this opens a dialog showing each arrear item, its pay period, amount, salary components, and payment status.

</div>

<div class="info-box">

**Best practice before closing:** If the Amount Unpaid shown in the summary is higher than expected, click **"Cancel carry forward"**, return to the Payroll Table, submit any outstanding transactions, and wait for approvals before re-attempting the close. This reduces the volume of arrears carried to the next cycle.

</div>

</div>

<div class="subsection">

### Task: Download Payroll Data

Bayzat provides download options across multiple payroll pages for record-keeping, audit, and external processing.

#### Subtask: Download Payroll Table

1.  Navigate to **Payroll → Payroll Table**
2.  Select the payroll cycle (current or historical) from the dropdown
3.  Select the currency tab for the data you need
4.  Optionally apply filters to narrow the data
5.  Click the **"Download"** button

Clicking Download opens an **"Available files & reports to download"** dialog with up to two sections:

- **Reports** (when available) — Pre-built accrual reports such as Leave Salary Accrual report, Gratuity Accrual report, and Air Ticket Allowance Accrual report. Each report is downloadable in XLS format. This section appears when accrual data exists for the selected cycle.
- **File templates** — Custom payroll file templates configured by your organisation. The default template exports all currently visible columns (employee details, salary components, deductions, arrears, net pay). Additional templates may be available for specific formats such as DIFC DEWS or custom reporting layouts. Templates can be downloaded in **XLS** or **CSV** format by clicking the corresponding icon.

The screenshot below shows this dialog with the available file templates. Click the XLS or CSV icon next to any template to start the download.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-94-download-dialog.png" class="screenshot" loading="lazy" alt="Available files to download dialog showing file templates with XLS and CSV format options" />
</figure>

<div class="warning-box">

**Filter limitation:** When downloading with filters applied, the export may not always respect the active filter. Verify the exported file matches your filtered view before sharing. *(Ref: TSSD-121)*

</div>

#### Subtask: Download Adjustments

1.  Navigate to **Payroll → Adjustments**
2.  Click the **"Download"** button

The export includes all adjustments for the selected cycle with employee name, type (addition/deduction), amount, and incurred date.

The screenshot below shows the Adjustments page for November 2025 (Open). The **Download** button sits in the toolbar alongside Filters and New Adjustment. Notice the yellow banner alerting you to 2 auto-created adjustments from approved unpaid leave requests — clicking "Review these adjustments" filters the list to those entries. The table columns (Name, Type, Amount, Incurred at) are exactly what the downloaded file will contain, along with edit and delete icons on each row.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-02-adjustments.png" class="screenshot" loading="lazy" alt="Adjustments page showing Download button in toolbar, adjustment records with Name, Type, Amount, and Incurred at columns" />
</figure>

#### Subtask: Download Leave Salary Data

1.  Navigate to **Payroll → Leave Salary**
2.  Click the **"Download"** button (with dropdown arrow for format options)

The export includes all leave salary requests with employee details, amounts, dates, approval status, and processing status.

The screenshot below shows the Leave Salary page with the **Download** button (with a dropdown chevron for format options) in the top-right corner. The page displays request status tabs (Approved 3, Rejected 0, At Payroll 0, Processed 2) and the summary card showing the total amount requested as leave salary for the current month. The table lists each request with employee name, requested date, request type, amount, leave date, number of leaves, approvers, and actions.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/05-leave-salary.png" class="screenshot" loading="lazy" alt="Leave Salary page showing Download button with dropdown, status tabs, and leave salary request table" />
</figure>

#### Subtask: Download Transaction Files

1.  Navigate to **Payroll → Transactions**
2.  Switch to the **Approved** tab
3.  Click **"View details"** on a transaction
4.  Download the SIF file or payroll file template from the transaction detail view

The transaction detail view varies depending on the payment method. For Cash transactions, the view shows a "Download Excel File" button in the top-right and a message in the Actions column: "Please download the Excel file to view details of payments." The screenshot below shows a Cash-based transaction for 2 employees under "Missing Assignment" trade license.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-105-transaction-detail-cash.png" class="screenshot" loading="lazy" alt="Transaction detail view for Cash payment showing Download Excel File button and trade license breakdown" />
</figure>

**Expected Outcome:** Downloaded files are ready for bank submission, audit documentation, or integration with external accounting systems.

#### Subtask: Sync Payroll to Accounting System

After a payroll cycle is closed, you can push transaction data to your connected accounting software directly from the Transactions page.

1.  Navigate to **Payroll → Transactions**
2.  Select a **closed** payroll cycle from the dropdown (must show the "Closed" badge)
3.  Click the **"Sync data to QuickBooks Online"** button in the top-right corner (next to "Download Payslips")

This button only appears for closed months. For open months, the same position shows the **"Close payroll cycle"** button instead. The sync pushes approved transaction data — including salary breakdowns, trade license groupings, and payment amounts — to the QuickBooks chart of accounts based on the mappings configured in **Settings → Payroll → Accounting Integrations**.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-summary-card-expanded.png" class="screenshot" loading="lazy" alt="Transactions page for closed month showing Download Payslips and Sync data to QuickBooks Online buttons in the top-right" />
</figure>

<div class="warning-box">

**Two requirements must be met before syncing:**

- **Closed payroll cycle:** The "Sync data to QuickBooks Online" button only appears after a payroll cycle has been closed. You will not see this option on an open month — close the cycle first from the Payroll Table or Transactions page.
- **Connected accounting system:** QuickBooks Online must already be connected and data mappings configured via **Settings → Payroll → Accounting Integrations**. Map your payroll categories (basic salary, allowances, deductions) to the corresponding QuickBooks chart of accounts. Without this connection, the button will not function.

</div>

**Expected Outcome:** Payroll journal entries are created in QuickBooks Online for the selected closed month. This eliminates manual data entry between Bayzat and your accounting system.

</div>

<div class="subsection">

### Task: Manage Multi-Currency Payroll

Bayzat supports payroll in multiple currencies simultaneously. Each employee has a base currency that determines which currency tab they appear in on the Payroll Table and what currency their salary is paid in.

#### Subtask: Configure Employee Currency

The base currency is set when you **first create** a salary configuration for an employee. Once a salary configuration exists, the base currency becomes read-only and cannot be changed by editing the existing configuration.

1.  Navigate to **Company → All Employees → \[Employee Name\] → Payroll tab → Salary Configuration**
2.  Click the **"+ Add Salary Configuration"** button
3.  In the **Configure Fixed Pay** dialog, select the currency from the **Base currency** dropdown (supports 150+ currencies)
4.  Set the **"Salary comes into effect from"** cycle — this dropdown shows upcoming payroll months (e.g., Dec 2025, Jan 2026, Feb 2026, Mar 2026). The salary configuration will apply starting from the selected cycle. You cannot back-date a new configuration to an already-closed payroll cycle.
5.  Configure pay items (Basic Salary, allowances) and Social Security Contribution
6.  Click **"Save"**

<div class="info-box">

**Effective date determines when changes apply:** If you select "Feb 2026" as the effective cycle, the employee's salary will remain at the old rate for January and switch to the new configuration starting February. Any salary difference between the old and new configuration generates arrears automatically for the affected months.

</div>

<div class="warning-box">

**Currency is locked after creation:** When you edit an existing salary configuration, the Base currency dropdown is disabled (greyed out). To change an employee's currency, you must clear all outstanding items first. See the full list of prerequisites in [Business Rules & Limitations](#business-rules-limitations).

</div>

The screenshot below shows the **Configure Fixed Pay** dialog opened via the **"+ Add Salary Configuration"** button. The **Base currency** dropdown is active and expanded, showing the full list of available currencies (AED, USD, AFN, ALL, etc.). This is the only point where the currency can be freely selected — once saved, editing this configuration will show the Base currency field as disabled. The **"Salary comes into effect from"** dropdown (visible below the currency field) lets you choose the payroll cycle when this configuration takes effect.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-107-add-salary-config-currency-dropdown.png" class="screenshot" loading="lazy" alt="Configure Fixed Pay dialog with Base currency dropdown expanded showing 150+ currency options including AED, USD, AFN, ALL" />
</figure>

#### Subtask: Process Multi-Currency Transactions

The Payroll Table organizes employees by currency in separate tabs (e.g., AED 124 Employees, USD 2 Employees, AUD 1 Employee). Each currency must be processed independently:

1.  Navigate to **Payroll → Payroll Table**
2.  Click the currency tab you want to process (e.g., **USD**)
3.  The summary row shows totals for that currency only
4.  Select employees and click **"Submit Transaction"**
5.  The transaction is created in that currency
6.  Repeat for each currency tab

The screenshot below shows the USD tab selected with 2 employees. Notice how the summary statistics (Total net pay USD 14,400.00, Processed till date USD 0.00, Total unpaid USD 25,200.00) display in USD rather than AED. The employee table shows different payment methods — Abhishek Sharma is paid via Bank (HSBC) while Monica Geller is paid via TransferMate, which is used for international transfers in non-AED currencies.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-101-usd-currency-tab.png" class="screenshot" loading="lazy" alt="USD currency tab showing 2 employees with USD summary statistics and different payment methods" />
</figure>

**Expected Outcome:** Separate transactions are created per currency. Each transaction appears on the Transactions page with its respective currency amount. Payslips are generated in the employee's base currency.

<div class="info-box">

**Summary stats are per-currency:** The Total net pay, Processed till date, Unpaid pending approval, and Total unpaid figures change when you switch currency tabs. Each tab shows an independent payroll picture for that currency.

</div>

<div class="warning-box">

**SIF files are currency-specific:** SIF files for bank submission (WPS) are only applicable for AED transactions. Non-AED currencies use different payment methods (e.g., Transfermate for international payments). See the [Payroll Processing](#payroll-processing) section for details.

</div>

</div>

<div class="subsection">

### Task: Reject/Undo Transactions

If a transaction was submitted in error or needs correction, approvers can reject it during the approval stage. For already-approved transactions, the undo feature reverses the transaction.

#### Subtask: Reject a Pending Transaction

1.  Navigate to **Payroll → Transactions → Pending** tab
2.  Click **"View details"** on the transaction
3.  Review the employee list and amounts
4.  Add a rejection reason in the remarks field (recommended)
5.  Click **"Reject"**

**Expected Outcome:** The transaction moves to the Rejected tab. All employee amounts return to the Payroll Table as unpaid. The submitter receives a notification about the rejection.

The screenshot below shows the Transactions page for November 2025 (Open) with the **Pending** tab selected. The Summary cards at the top display Total Amount (AED 201,600.00), Approved (AED 201,600.00), and Rejected (AED 0.00). With 0 pending transactions, the empty state reads "No data to show — Your activity data will display here when any transaction will be submitted for review." When a transaction is pending, this tab shows "View details" links and the Reject button becomes available in the detail view.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-03-transactions-pending.png" class="screenshot" loading="lazy" alt="Transactions page showing Pending tab with 0 pending items, Summary cards for Total Amount, Approved, and Rejected" />
</figure>

#### Subtask: Undo an Approved Transaction

1.  Navigate to **Payroll → Transactions → Approved** tab
2.  Find the transaction you want to reverse
3.  Click the three-dot menu (**⋮**) on the transaction row
4.  Select **"Undo"**
5.  Review the confirmation dialog showing transaction details and impact
6.  Optionally enter a reason for the undo
7.  Confirm the action

**Expected Outcome:** The transaction is reversed. Amounts return to the Payroll Table as unpaid. The system sends a rejection email notification to relevant parties (submitter and approvers).

<div class="warning-box">

**Undo limitations:**

- Only transactions in the **current open month** can be undone
- Transactions in **closed months** cannot be reversed
- Transactions that are already **"Payroll processing in progress"** (sent to the bank) cannot be undone
- If the undo fails or you need to reverse a closed-month transaction, contact **payrollsupport@bayzat.com**

</div>

The screenshot below demonstrates this limitation in practice. On the Approved tab for November 2025 (a closed month), clicking the three-dot menu on a transaction row reveals only a "Download file" option — the "Undo" action is not available. Compare this with an open month where the Undo option would appear alongside Download file in the same menu.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-104-approved-transactions-menu.png" class="screenshot" loading="lazy" alt="Approved transactions tab showing three-dot menu with only Download file option — no Undo available for closed month" />
</figure>

</div>

<div class="subsection">

### Task: Generate Payroll Files

Payroll files are generated from approved transactions for bank submission. Bayzat supports SIF files (for UAE WPS), custom templates for other banks, and integration-specific formats for partners like Lulu Exchange, Transfermate, and Mudad.

#### Subtask: Download SIF File (WPS)

SIF (Salary Information File) is the standard format for UAE's Wage Protection System (WPS). It is generated from approved AED transactions.

1.  Navigate to **Payroll → Transactions → Approved** tab
2.  Click **"View details"** on an approved transaction
3.  Click the **"Download SIF"** button
4.  The file downloads in the format required by your bank
5.  Upload the SIF file to your bank's portal to initiate salary payments

The screenshot below shows the transaction detail view for an approved Bank transaction (AED 176,000.00, 2 employees via MASHREQ BANK). The breakdown table lists each trade license group with payment method, amount, and status. The Actions column provides a download icon (for SIF/payroll file) and a view icon (to see employee details) per row. At the top, "View Remarks" and "Download Excel File" buttons provide the full transaction summary. Use the Quick Filters to narrow by trade license, payment method, or employee name.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-106-transaction-detail-bank.png" class="screenshot" loading="lazy" alt="Transaction detail view showing Bank (MASHREQ BANK) payments grouped by trade license with download and view action icons" />
</figure>

<div class="info-box">

**Trade license grouping:** SIF files are generated per trade license. If a transaction includes employees from multiple trade licenses, separate SIF files are created for each. Ensure all employees have their trade license correctly assigned in their profile.

</div>

#### Subtask: Use Custom Payroll File Templates

For banks that don't accept standard SIF files, or for custom reporting needs, use Payroll File Templates.

1.  First, create a template in **Settings → Payroll → Payroll File Templates** (see the [Payroll Templates](#payroll-templates) section)
2.  Navigate to an approved transaction's detail view
3.  Select **"Download"** and choose the template from the list
4.  The file generates with your mapped data columns

Templates are configured in **Settings → Payroll → Payroll File Templates**. The screenshot below shows the Payroll Templates table with 7 active templates. Each template has a File Name, Template Type (Reporting template or Payroll processing), Available Format (XLS, CSV, and optionally SIF), and Actions (active toggle, edit, delete). Templates like "RAK Bank", "HSBC SIF st", and "EmiratesNBD Non-WPS SIF" are Payroll processing templates that generate bank-specific files, while "DIFC DEWS st" and "Payroll Monthly Report" are Reporting templates for compliance and analytics exports.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-33-payroll-templates-table.png" class="screenshot" loading="lazy" alt="Payroll Templates table showing 7 templates with File Name, Template Type, Available Format, and Actions columns" />
</figure>

#### Subtask: Generate DEWS File

For DIFC employees enrolled in the Dubai International Financial Centre Employee Workplace Savings (DEWS) scheme:

1.  Navigate to the approved transaction
2.  Select the DEWS-specific download option
3.  Upload the generated file to the DEWS portal

Alternatively, you can download DEWS files directly from the Payroll Table. Click the **Download** button to open the "Available files to download" dialog. The screenshot below shows this dialog with all configured file templates. Look for the "DIFC DEWS st" or "DIFC DEWS test test" templates — click the XLS or CSV icon to download the DEWS-formatted file. The Default template at the top exports all currently visible payroll columns, while the named templates below generate bank-specific or compliance-specific formats.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-94-download-dialog.png" class="screenshot" loading="lazy" alt="Available files to download dialog showing DIFC DEWS templates alongside other payroll file templates with XLS and CSV download icons" />
</figure>

**Expected Outcome:** Payroll files generated in the correct format for bank submission, WPS compliance, or government reporting. Each file maps employee data to the required fields as configured in your templates.

<div class="warning-box">

**Missing employee data:** If employees have incomplete profiles (missing bank account, IBAN, trade license, etc.), the SIF file generation may fail or produce files that banks reject. Use the **Filters → Missing Information → Critical Information** filter on the Payroll Table to identify and fix these gaps before submitting transactions.

</div>

</div>

<div class="subsection">

### Task: View Employee Payroll History

The Pay History tab provides a month-by-month breakdown of an employee's complete salary record, including all components, deductions, arrears, and net pay.

#### Subtask: Access Pay History

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-58-pay-history.png" class="screenshot" loading="lazy" alt="Pay History tab" />
<figcaption>Employee Pay History showing monthly salary breakdown with download icons</figcaption>
</figure>

1.  Navigate to the employee profile (via **Company → Employees** or by clicking their name anywhere in Payroll)
2.  Click the **Payroll** tab in the employee profile
3.  Click the **Pay History** sub-tab

##### Pay History Table Columns

| Column | Description |
|----|----|
| **Month** | Payroll month (e.g., Oct 2025, Sep 2025) |
| **Currency** | Employee's payment currency (e.g., AED) |
| **Basic Salary** | Monthly base salary amount |
| **Allowances** | Sum of all configured allowances (housing, transport, etc.) |
| **Variable Pay** | One-time or recurring variable pay items |
| **Gross Pay** | Total before deductions (Basic + Allowances + Variable Pay) |
| **Work Expenses** | Approved expense reimbursements (shown in <span style="color:#38a169;">green</span> when non-zero) |
| **Net Additions** | Sum of all addition adjustments (shown in <span style="color:#38a169;">green</span>) |
| **Net Deductions** | Sum of all deduction adjustments (shown as negative) |
| **Social Security Contribution** | GOSI/SSC deductions if applicable |
| **Arrears** | Amounts carried forward from previous months. Negative values (<span style="color:#e53e3e;">red</span>) indicate unpaid arrears; positive values (<span style="color:#38a169;">green</span>) indicate arrears that were paid. Click the amount to view breakdown. |
| **Net Pay** | Final amount paid to the employee. Shows 0.00 for months where salary was not processed. |
| **Download** | Download icon to get the payslip PDF for that month (available for closed months only) |

#### Subtask: View Arrears Breakdown

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-63-pay-history-arrears-breakdown.png" class="screenshot" loading="lazy" alt="Arrears breakdown dialog" />
<figcaption>Arrears Adjustments dialog showing detailed breakdown by pay period and salary component</figcaption>
</figure>

Click any **Arrears** value in the Pay History table to open the **"\[Employee\]'s Arrear Adjustments in \[Month\]"** dialog. This shows:

| Column | Description |
|----|----|
| **Type** | Arrear type (e.g., "Salary in arrear – Addition") |
| **Pay Period** | The original month the amount was unpaid (e.g., Jun 2025) |
| **Amount** | Arrear amount with currency |
| **Salary Component** | Which salary components make up the arrear (e.g., "Basic Salary AED 20,000" or "Basic Salary AED 20,000, Housing AED 2,500, Transportation AED 2,500") |
| **Status** | <span style="background:#c6f6d5;color:#276749;padding:2px 8px;border-radius:12px;font-size:0.85em;">Paid</span> or <span style="background:#fed7d7;color:#9b2c2c;padding:2px 8px;border-radius:12px;font-size:0.85em;">Unpaid</span> |

**Expected Outcome:** Complete visibility into historical salary data. Payslips are downloadable for closed payroll months. Arrears provide full traceability to the original unpaid period and salary components.

<div class="info-box">

**Reading the history:** Months with Net Pay of 0.00 and negative Arrears indicate the employee was on payroll but their salary was not processed that month (common for newly added employees or months with processing delays). The unpaid amount accumulates and is paid when the arrears are settled in a later month.

</div>

<div class="info-box">

**Note:** Payslips must first be generated for a closed payrun on the Payroll Transactions tab before they can be viewed or downloaded.

</div>

</div>

<div class="subsection">

### Task: Manage Employee Salary

Salary management covers salary revisions (raises, restructuring), modifying pay items (adding or removing allowances), and understanding how effective dates control when changes apply. All salary changes are made through the **Salary Configuration** sub-tab on the employee's Payroll tab.

<div class="nav-path">

Company → All Employees → \[Employee Name\] → Payroll tab → Salary Configuration

</div>

#### Subtask: Give an Employee a Salary Raise

A salary raise is created by adding a **new salary configuration** with a future effective date. The system preserves the old configuration in the salary history and automatically transitions to the new one on the effective date.

1.  Navigate to **Company → All Employees → \[Employee Name\] → Payroll → Salary Configuration**
2.  Click **"+ Add Salary Configuration"**
3.  The **Base currency** will default to the employee's current currency (this field is editable only if creating the first configuration)
4.  In the **"Salary comes into effect from"** dropdown, select the payroll cycle when the new salary should start (e.g., Jan 2026). The dropdown only shows open and future cycles — you cannot back-date to an already-closed month.
5.  Update the **Basic Salary** amount to the new figure
6.  Adjust any allowances (Housing, Transportation, custom allowances) as needed
7.  The **Gross Pay** total updates automatically as you modify amounts
8.  Click **"Save"**

**Expected Outcome:** The new configuration appears as "Current Fixed Pay" with the effective start date. The previous configuration moves to the "History" section with its period end-date automatically set. On the Payroll Table, the employee's salary components will reflect the new amounts starting from the effective cycle.

The screenshot below shows the Salary Configuration tab for an employee with a current salary of AED 25,000.00 effective from 01 Aug 2025, plus 4 previous salary revisions visible in the History section. Each historical entry is expandable to show its pay item breakdown. The **"+ Add Salary Configuration"** button at the top creates a new revision.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-56-salary-configuration.png" class="screenshot" loading="lazy" alt="Salary Configuration tab showing Current Fixed Pay of AED 25,000 and 4 historical salary revisions as expandable accordions" />
</figure>

<div class="info-box">

**Arrears are generated automatically:** If the effective date is set to a past open cycle (e.g., you add a configuration in February effective from January), the system calculates the salary difference for the affected months and adds arrears to the current payroll cycle. These arrears appear as "Salary Arrears (Addition)" or "Salary Arrears (Deduction)" line items on the employee's Active Payroll Cycle tab.

</div>

#### Subtask: Edit Pay Items on an Existing Configuration

To modify allowances or the basic salary amount **without creating a new salary revision**, edit the current configuration directly. This is useful for correcting data entry errors or updating allowance amounts within the same effective period.

1.  Navigate to **Company → All Employees → \[Employee Name\] → Payroll → Salary Configuration**
2.  On the current configuration row, click the **Edit** (pencil icon) button
3.  The **Configure Fixed Pay** dialog opens with the current values pre-filled
4.  Modify the amounts for **Basic Salary**, **Housing**, **Transportation**, or any custom allowances
5.  To add a new allowance, click **"+ Add New Allowance"** and select from the list
6.  To remove an allowance, click the **X** button next to it (Basic Salary cannot be removed)
7.  Click **"Save"**

The screenshot below shows the **Configure Fixed Pay** dialog in Edit mode. Notice that the **Base currency** field is greyed out (disabled) — it cannot be changed when editing an existing configuration. The **"Salary comes into effect from"** shows the existing effective cycle (Aug 2025). The pay items (Basic Salary AED 20,000, Transportation AED 2,500, Housing AED 2,500) can be modified, and the Gross Pay recalculates automatically.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-57-configure-fixed-pay-form.png" class="screenshot" loading="lazy" alt="Configure Fixed Pay dialog in Edit mode showing disabled Base currency dropdown, editable pay items, and Social Security Contribution" />
</figure>

<div class="warning-box">

**Edit vs. Add — know the difference:**

- **Edit** modifies the current configuration in place. The effective date stays the same, and the change applies retroactively to the entire period. Use this to correct errors.
- **"+ Add Salary Configuration"** creates a new revision with a new effective date. The old configuration is preserved in history. Use this for salary raises, restructuring, or any change that should take effect from a specific future date.

</div>

#### Subtask: Add or Remove Allowances

Allowances (Housing, Transportation, custom allowances) can be added or removed from either the Edit or Add Salary Configuration dialog.

1.  Open the **Configure Fixed Pay** dialog (via Edit or + Add Salary Configuration)
2.  To **add** an allowance: click **"+ Add New Allowance"** at the bottom of the pay items list. Select the allowance type from the dropdown and enter the monthly amount.
3.  To **remove** an allowance: click the purple **X** button to the right of the allowance row. Note: Basic Salary cannot be removed.
4.  The **Gross Pay** total recalculates immediately
5.  Click **"Save"**

**Expected Outcome:** The employee's payroll table row updates to reflect the new allowance structure. If the change was made via "+ Add Salary Configuration" with a future effective date, the new allowances only appear starting from that cycle.

#### Subtask: Understanding Effective Dates and Arrears

Effective dates control when salary changes take effect and how the system handles the transition between old and new configurations.

| Scenario | What Happens |
|----|----|
| **Future effective date** (e.g., add in Feb, effective Mar) | Employee keeps old salary through February. New salary applies from March onwards. No arrears generated. |
| **Current month effective date** (e.g., add in Feb, effective Feb) | New salary applies to the current open cycle immediately. If any transactions were already processed at the old rate, arrears are calculated for the difference. |
| **Past open month effective date** (e.g., add in Feb, effective Jan — if Jan is still open) | Salary difference for January is calculated as arrears and added to the current cycle. The employee receives the back-pay difference. |
| **Editing existing configuration** | Changes apply retroactively to the entire period of that configuration. Arrears are recalculated for any months where the old amount was already processed. |

<div class="info-box">

**Verify arrears on the Active Payroll Cycle tab:** After making a salary change, navigate to the employee's **Active Payroll Cycle** tab to verify the arrears. Look for "Salary Arrears (Addition)" or "Salary Arrears (Deduction)" line items under the Arrears section. Each arrear entry shows the pay period it relates to (e.g., "PAY PERIOD - OCTOBER, 2025") so you can trace exactly which months were affected.

</div>

<div class="warning-box">

**Closed months cannot be retroactively changed:** If a payroll cycle has been closed and transactions processed, salary changes cannot be back-dated to that month. The effective date dropdown only shows open and future cycles. If a correction is needed for a closed month, use **Payroll Adjustments** instead (see [Manage Payroll Adjustments](#manage-adjustments)).

</div>

#### Subtask: Salary Change Approval Flow

Bayzat includes a dedicated **Salary Changes** approval flow that routes salary modifications through designated approvers before they take effect. This ensures that salary adjustments are reviewed and authorized by the appropriate stakeholders.

<div class="nav-path">

Automations → Approval flows → Salary Changes

</div>

1.  Navigate to **Automations → Approval flows** in the sidebar
2.  In the left panel, scroll down and click **"Salary Changes"**
3.  The **Default approval flow** shows the current approver configuration — by default, salary changes require approval from a **Super Admin**
4.  To add conditional routing, click **"+ Add advance flow"** to create rules that route approvals based on criteria (e.g., department, salary band, or change amount)
5.  To add additional approval steps, click **"+ Add step"** to create a multi-step approval chain
6.  To add alternative approvers within a step, click **"+ Add approver"** (approvers within a step use "OR" logic — any one can approve)
7.  Click **"Update approval flows"** to save changes

The screenshot below shows the Salary Changes approval flow configuration. The default flow has a single step requiring approval from a **Super Admin**. No advanced conditional flows are configured — all salary change requests follow this default path.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-108-salary-changes-approval-flow.png" class="screenshot" loading="lazy" alt="Salary Changes approval flow configuration showing default flow with Super Admin as the single approver" />
</figure>

#### Subtask: Request a Salary Change via Employee Tickets

Employees can formally request a salary change by raising a **Salary Changes** ticket under the Payroll category. This provides a structured, trackable process for salary revision requests that feeds into the approval workflow.

**For employees:**

1.  Navigate to **Requests** in the sidebar
2.  Click **"Raise a ticket"**
3.  Select the **Payroll** category, then choose **"Salary Changes"**
4.  Fill in the **Basic Salary** field with the requested amount
5.  Add any supporting documents if needed (attachments are optional)
6.  Submit the ticket

**For admins:**

Admins with the appropriate role (e.g., Accounts Payable Invoice Manager) can also create salary change tickets on behalf of employees. The ticket configuration is managed under **Settings → Tickets → Payroll** category.

The screenshot below shows the Payroll ticket category in Settings, listing all 8 payroll-related ticket types including **Salary Changes** ("Salary change request"), **Salary Discrepancy Request**, **Bank Account Update**, and others — all active and available for employees to raise.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-109-payroll-ticket-types.png" class="screenshot" loading="lazy" alt="Settings Tickets page showing Payroll category with 8 ticket types including Salary Changes, Salary Discrepancy Request, and Bank Account Update" />
</figure>

<div class="info-box">

**Related payroll ticket types:** In addition to Salary Changes, the Payroll category includes **Salary Discrepancy Request** (for resolving salary mismatches or missing payments) and **Bank Account Update** (for changing registered bank details). These ticket types work alongside the salary change workflow to cover the full range of payroll-related employee requests.

</div>

#### Subtask: Automate Salary Change Notifications

Use **Automations → Workflows** to trigger automatic actions when salary changes occur. Two payroll-specific triggers are available for salary events:

| Trigger | When It Fires | Example Use Case |
|----|----|----|
| **Employee salary is created** | A new salary configuration is added for an employee | Send a welcome email to new hires confirming their compensation package |
| **Employee salary is updated** | An existing salary configuration is modified or a new revision is created | Send a notification email to the employee confirming their salary raise |

These triggers can be paired with actions such as **Send email**, **Create one time pay item**, **Create pay adjustment request**, or **Call webhook** to integrate with external systems.

<div class="info-box">

**Example workflow already configured:** The "Salary Increase (AED)" workflow uses the "Employee salary is updated" trigger to automatically send an email notification when a salary change is made. You can create similar workflows under **Automations → Workflows → Create new workflow**.

</div>

</div>

</div>

</div>

<div id="payroll-processing" class="section section section-payroll-processing">

<div class="section-header">

## Payroll Processing

</div>

<div class="section-body">

<div class="subsection">

### Overview

Payroll Processing is the payment execution layer within the Payroll module. After payroll data is finalized and transactions are approved, processing handles the actual disbursement of salaries to employees through various payment channels.

<div class="info-box">

**Mental Model:** Payroll Table (data) → Submit Transaction → Approval → **Processing** (generate files, send to bank/exchange) → Salary Released → Close Month

</div>

</div>

<div class="subsection">

### Payment Methods

Bayzat supports multiple payment channels depending on the company's banking relationships and employee locations.

| Payment Method | Provider | Currencies | Use Case |
|----|----|----|----|
| **WPS / SIF File** | Lulu Exchange | AED (onshore/mainland) | UAE Wage Protection System compliance — mandatory for mainland employees |
| **Wire Transfer** | Lulu Exchange / Direct bank | AED + other currencies | Standard bank-to-bank transfer for any currency |
| **Cash Deposit** | Lulu Exchange branches | AED | Walk-in cash deposit for employees without bank accounts |
| **Check Deposit** | Lulu Exchange | AED | Company check payable to Lulu Exchange for batch processing |
| **Global Transfers** | Transfermate | Non-AED (GBP, USD, INR, etc.) | International salary disbursement for employees outside UAE |
| **KSA Processing** | Mudad | SAR | Saudi Arabia payroll processing via Mudad integration |
| **SAB Processing** | SAB (Saudi British Bank) | SAR | Direct bank submission for SAB account holders in KSA |

The screenshot below shows an approved transaction detail page for a Bank (MASHREQ BANK) payment. The summary header shows Submission Date (28 Jan), Net Pay Amount (AED 176,000.00), and number of employees (2). The table below breaks down each payment by Trade License, number of employees, Paid Via method, Amount, Status, and Actions (download SIF file and view icons).

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-106-transaction-detail-bank.png" class="screenshot" loading="lazy" alt="Approved transaction details showing Bank (MASHREQ BANK) payments grouped by trade license with download and view actions" />
</figure>

<div class="warning-box">

**WPS Compliance:** Onshore (mainland) employees in UAE must be paid in AED via WPS-compliant SIF files. The system does not allow paying an onshore employee in a non-AED currency. Free zone employees may use alternative payment methods.

</div>

</div>

<div class="subsection">

### Processing via Lulu Exchange

Lulu Exchange is Bayzat's primary payroll processing partner for UAE-based payments.

#### Setup Requirements

1.  The company **trade license** is uploaded in Company Documents
2.  The **Register with Lulu Exchange for Payroll Processing** checkbox is ticked
3.  If using WPS, the **Freezone Authority Account** number is entered
4.  Employee bank account details (IBAN, account numbers) must be complete

#### Processing Workflow

1.  Submit a payroll transaction from the Payroll Table
2.  Transaction goes through approval flow (if configured)
3.  Once approved, download the **SIF file** from the Transactions page
4.  Funds are transferred to Lulu Exchange via the chosen method (wire, cash, or check)
5.  Lulu Exchange processes individual employee payments
6.  Transaction status updates to reflect payment completion

The screenshot below shows an approved Cash transaction detail. The summary header displays Submission Date (12 Feb), Net Pay Amount (AED 36,483.33), and 2 Employees. The table shows the trade license ("Missing Assignment"), payment method (Cash), amount, and a note to "Please download the Excel file to view details of payments." The View Remarks and Download Excel File links appear in the top-right.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-105-transaction-detail-cash.png" class="screenshot" loading="lazy" alt="Approved Cash transaction details showing trade license grouping, net pay amount, and Download Excel File link" />
</figure>

#### Funding Options

| Method | Timing | Notes |
|----|----|----|
| **Wire Transfer** | Verify by end of day before intended payment date | Most common method. Bank-to-bank transfer to Lulu Exchange holding account |
| **Cash Deposit** | Same-day if deposited before 12:00 PM | Deposit at any Lulu Exchange branch. Subject to Central Bank of UAE delays |
| **Check Deposit** | 1-2 working days for clearance | Do NOT hand over check at Lulu branch directly — this extends turnaround by up to 4 days. Use designated drop-off process |

</div>

<div class="subsection">

### Global Payroll Processing via Transfermate

For employees earning in non-AED currencies (GBP, USD, INR, EUR, etc.), Bayzat integrates with Transfermate for international salary disbursement.

#### How It Works

1.  Employee base currency is set to a non-AED currency in salary configuration
2.  Employee appears under the corresponding currency tab in the Payroll Table
3.  Submit transaction for that currency
4.  After approval, Transfermate processes international transfers

The screenshot below shows the Payroll Table filtered to the **USD** currency tab with 2 employees. The summary row shows Total net pay (USD 14,400.00), Processed till date (USD 0.00 in green), Unpaid amount pending approval (USD 0.00 in red), and Total unpaid (USD 25,200.00 in red). The column visibility checkboxes show salary components specific to these USD employees, and the Submit Transaction button is available in the top-right.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-101-usd-currency-tab.png" class="screenshot" loading="lazy" alt="Payroll Table USD currency tab showing 2 employees with salary components, column checkboxes, and Submit Transaction button" />
</figure>

#### Supported Employee Bank Details by Region

| Region | Currency | Required Bank Fields |
|----|----|----|
| UK | GBP | Account holder name, Account number, Sort Code, IBAN, SWIFT/BIC Code |
| USA | All currencies | Account holder name, Account number, ABA number, Bank name, Bank address, SWIFT/BIC Code |
| India | INR | Account holder name, IFSC Code, Bank name, Bank address, SWIFT/BIC Code |
| All other | Various | Account holder name + Account number (mandatory). SWIFT/BIC, Sort code, IBAN, Routing code, IFSC Code (optional) |

</div>

<div class="subsection">

### KSA Payroll Processing via Mudad

Companies operating in Saudi Arabia can process payroll through the Mudad platform for SAR-denominated payments and government compliance.

#### Key Points

- Submit payroll transactions in SAR currency
- Mudad handles compliance with Saudi labor regulations
- Separate integration from UAE Lulu Exchange processing

</div>

<div class="subsection">

### Payroll File Templates

Custom file templates generate bank submission files, SIF files, and government reports directly from Bayzat payroll data — eliminating manual Excel formatting.

<div class="info-box">

**Setup:** For step-by-step template creation instructions (3-step wizard, field mapping, and template management), see [Initial Setup → 5. Payroll Templates](#initial-setup).

</div>

#### Multi-Currency File Downloads

When downloading payroll data for multi-currency companies:

- A single Excel file is generated with **multiple sheets** — one sheet per currency
- Each sheet contains: Employee Name, Hire Date, Country of Residence, Trade License, Mol ID, Basic Salary, Allowances, Variable Pay, Payment Method, Bank Details
- Region-specific bank fields are included based on employee currency (see Transfermate section above)

</div>

<div class="subsection">

### Processing Checklist

Before executing payroll processing each month:

- All salary adjustments entered and verified
- Expense reimbursements approved or processed offline
- Transaction submitted from Payroll Table for each currency
- Approval flow completed (all approvers have signed off)
- SIF/payroll file downloaded from approved transaction
- Funds transferred to Lulu Exchange or processing partner
- Transaction status confirmed as processed
- Payslips generated (optional — available after pay run closed)
- Payroll month closed after all transactions complete

</div>

</div>

</div>

<div id="employee-loans-admin" class="section section">

<div class="section-header">

## Employee Loans (Admin)

</div>

<div class="section-body">

<div class="subsection">

### Overview

Payroll administrators and approvers can manage all employee loan requests from the Employee Loans page. This is an admin-facing view — employees use [My Loans](#employee-self-service) to submit and track their own requests.

<div class="nav-path">

Payroll → Employee loans

</div>

The admin view provides a comprehensive table with:

- **Employee** — Requestor's name
- **Loan policy** — Which loan policy was selected
- **Currency** — Loan currency
- **Loan amount** — Requested amount
- **Tenure** — Repayment period in months
- **Submission date** — When the request was submitted
- **Approvers** — Approval chain with status indicators (green check = approved, clock = pending)
- **Actions** — Context menu for approve, reject, or view details

The admin view includes additional tabs beyond the employee view: **At Payroll** (loans approved and pending disbursement) shows loans ready to be included in the next payroll run.

Use the **Search by employee name, ID** field and **Filters** to narrow results. The **Download** button exports the loan data.

The screenshot below shows the Employee Loans admin view with 166 Pending requests across six status tabs (Pending, Approved, Rejected, At Payroll, Disbursed, Completed). The table displays Employee name, Loan policy, Currency, Loan amount, Tenure, Submission date, and Approvers (with green check marks indicating approved and clock icons showing pending). Each row has an Actions menu for approve/reject/view operations.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-22-employee-loans.png" class="screenshot" loading="lazy" alt="Employee Loans admin view showing 166 pending requests with employee details, loan amounts, tenure, and approver status indicators" />
</figure>

</div>

</div>

</div>

<div id="employee-self-service" class="section section section-employee-self-service">

<div class="section-header">

## Employee Self-Service

</div>

<div class="section-body">

<div class="subsection">

### Overview

Employees can access their own payroll information, manage payment preferences, submit loan requests, and request air tickets directly from the Payroll module. These self-service features reduce HR workload by allowing employees to view pay history, download payslips, and track request statuses independently.

<div class="nav-path">

Payroll (sidebar) → My pay / My loans / My air tickets

</div>

</div>

<div class="subsection">

### My Pay

The My Pay section gives employees visibility into their monthly compensation breakdown and adjustment history.

<div class="nav-path">

Payroll → My pay

</div>

#### Monthly Pay Tab

Displays a month-by-month table of the employee's payroll records with the following columns:

| Column | Description |
|----|----|
| **Month** | Pay period (e.g., 01 Oct 2025 - 31 Oct 2025) |
| **Currency** | Payment currency (AED, USD, AUD, etc.) |
| **Basic Salary** | Base salary amount for the period |
| **Allowances** | Housing, transport, and other allowances |
| **Variable Pay** | Commissions, bonuses, or performance-based pay |
| **Gross Pay** | Total before deductions (Basic + Allowances + Variable) |
| **Work Expenses** | Reimbursable work expenses included in payroll |
| **Net Additions** | Additional amounts added after gross calculation |
| **Net Deductions** | Amounts deducted (loan repayments, penalties, etc.) |
| **Social Security Contribution** | Pension/social security deductions where applicable |
| **Arrears** | Carried-forward amounts from previous months |
| **Net Pay** | Final take-home amount |
| **Download** | Download payslip for each closed pay period |

The screenshot below shows the My Pay Monthly Pay tab with a month-by-month table of payroll records. Each row displays the pay period, currency (AED), salary breakdown columns, and a download icon on the right for downloading payslips. The **Edit Payment Details** button in the top-right allows employees to change their payment method.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-15-my-pay-monthly.png" class="screenshot" loading="lazy" alt="My Pay Monthly Pay tab showing month-by-month payroll records table with salary breakdown columns and download icons" />
</figure>

<div class="info-box">

**Note:** Clickable amounts (shown in bold purple) in Work Expenses, Net Additions, Net Deductions, and Arrears columns expand to show the detailed breakdown of each component.

</div>

#### My Adjustments Tab

Displays adjustments applied to the employee's payroll for the selected pay cycle. The table shows:

- **Type** — The adjustment category (e.g., overtime, bonus, deduction)
- **Amount** — The monetary value of the adjustment
- **Incurred at** — The date the adjustment was recorded

The **Payroll Cycle** dropdown switches between months and the **Select Request Type** filter narrows down by adjustment type. The **Download** button exports the current view.

The screenshot below shows the My Adjustments tab with the Payroll Cycle set to November 2025 (Open). The table displays Type, Amount, and Incurred at columns, with a Select Request Type filter and Download button above. In this example, no adjustments are recorded for the current cycle.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-16-my-adjustments.png" class="screenshot" loading="lazy" alt="My Pay My Adjustments tab showing November 2025 payroll cycle with adjustment table columns and filter controls" />
</figure>

</div>

<div class="subsection">

### Edit Payment Details

Employees can update how their salary is paid via the **Edit Payment Details** button on the Monthly Pay tab.

<div class="nav-path">

My pay → Monthly Pay → Edit Payment Details

</div>

The Edit Paid Via page displays the employee's name, paid-in currency, and the following payment method options:

| Payment Method | Description | Additional Fields |
|----|----|----|
| **Cash** | Salary paid in cash | None |
| **Cheque** | Salary paid via check | None |
| **Exchange house** | Paid through Lulu Exchange or similar | Exchange house details |
| **Bank** | Direct bank transfer (WPS/SIF) | Company Bank Account (dropdown) |
| **TransferMate** | International wire transfer for global employees | Bank account details per region |

The screenshot below shows the Edit Paid Via page. The employee's name and paid-in currency (AED - United Arab Emirates dirham) are displayed at the top. The Payment method section presents five radio button options: Cash (currently selected), Cheque, Exchange house, Bank, and TransferMate. A Save button at the bottom-right confirms the selection.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-17-edit-payment-details.png" class="screenshot" loading="lazy" alt="Edit Paid Via page showing five payment method radio buttons - Cash selected, Cheque, Exchange house, Bank, and TransferMate" />
</figure>

<div class="warning-box">

**Important:** Changing the payment method may affect how salary is processed for the current open pay cycle. The system displays a confirmation prompt before saving.

</div>

</div>

<div class="subsection">

### My Loans

Employees can submit, track, and manage loan requests from the My Loans page.

<div class="nav-path">

Payroll → My loans

</div>

#### Loan Request Lifecycle

Loan requests progress through the following statuses, visible as tabs on the My Loans page:

1.  **Pending** — Request submitted, awaiting approval
2.  **Approved** — All required approvers have signed off
3.  **Rejected** — Request denied by an approver
4.  **Disbursed** — Loan amount paid out to the employee
5.  **Completed** — All installments repaid

#### Submit a New Loan Request

The **Submit a new loan request** button opens the loan form with the following fields:

1.  **Loan Policy** — Selection from available policies. Each policy displays the loan type (e.g., Car Loan, Emergency Loan), minimum amount, and maximum amount.
2.  **Loan Details:**
    - **Loan amount** — Must be within the policy's min/max range
    - **Reason** — Text field for justification
    - **Tenure (in months)** — Repayment period selection (up to the policy's maximum installments)
    - **Loan guarantor** — Optional guarantor name
3.  **Upload Documents** — Supporting documents can be attached
4.  **Repayment Plan** — The system auto-calculates installment amounts and outstanding balances
5.  **Save** submits the request for approval

The screenshot below shows the My Loans page with the "Submit a new loan request" button in the top-right and a "How the loan process works" link below it. Five status tabs (Pending, Approved, Rejected, Disbursed, Completed) organize loan requests. The welcome message reads "Submit, view and track all loan requests with ease."

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-19-my-loans.png" class="screenshot" loading="lazy" alt="My Loans page showing five status tabs (Pending, Approved, Rejected, Disbursed, Completed) with Submit a new loan request button" />
</figure>

The screenshot below shows the New loan request form. The Loan policy section lists available policies (e.g., "Div Test Car Loan" with AED 5,000-20,000 range, "Loan New" with AED 500-50,000 range). Below, the Loan details section includes fields for Loan amount, Reason, Tenure, and Loan guarantor. A document upload area and auto-calculated Repayment plan table complete the form.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-20-new-loan-request.png" class="screenshot" loading="lazy" alt="New loan request form showing loan policy selection, loan details fields, document upload area, and repayment plan table" />
</figure>

<div class="info-box">

**Tip:** Click **How the loan process works** on the My Loans page for a visual guide to the loan lifecycle.

</div>

</div>

<div class="subsection">

### My Air Tickets

Employees eligible for air ticket benefits can submit and track requests from the My Air Tickets page.

<div class="nav-path">

Payroll → My air tickets

</div>

#### Air Ticket Dashboard

The page displays four summary cards at the top:

- **Policy status** — Active or Inactive (shows if the employee is assigned to an air ticket policy)
- **Remaining air ticket requests** — How many requests the employee can still submit
- **Remaining allowance balance** — Monetary balance available for air ticket claims
- **Coverage includes** — Who is covered (employee only, family, etc.)

#### Request Tracking

Requests are organized into status tabs:

- **Pending** — Submitted, awaiting approval
- **Approved** — Approved by all required approvers
- **Processed** — Payment processed by finance
- **Rejected** — Denied by an approver

Each request shows: Request type, Requested amount, Submitted on, Approvers, and available Actions.

The screenshot below shows the My air tickets page with four summary cards at the top: Policy status (Inactive), Remaining air ticket requests (–), Remaining allowance balance (–), and Coverage includes (–). The "Request air ticket" button is disabled with a tooltip explaining "You have not been added to a policy." Below, four status tabs (Pending, Approved, Processed, Rejected) show the request tracking table.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-21-my-air-tickets.png" class="screenshot" loading="lazy" alt="My air tickets page showing Inactive policy status, disabled Request air ticket button, and four request tracking tabs" />
</figure>

<div class="warning-box">

**Important:** If the policy status shows "Inactive" and the Request air ticket button is disabled, the employee has not been assigned to an air ticket policy. The HR administrator must add the employee to a policy.

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

### Navigation

<div class="nav-path">

Automations → Workflows → + Create workflow → Select an event → Bayzat Payroll

</div>

</div>

<div class="info-box">

**Available:** Payroll Management supports 14 workflow triggers and 2 workflow actions under the **Bayzat Payroll** app in Automations.

</div>

<div class="subsection">

### Available Triggers (14)

When creating a new workflow, select **Bayzat Payroll** as the event source to access these triggers. The screenshot below shows the Bayzat Payroll (14) event panel listing all available triggers including salary events, leave salary requests, payroll adjustments, loan requests, and more.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-06-payroll-14-triggers.png" class="screenshot" loading="lazy" alt="Bayzat Payroll event panel showing 14 workflow triggers including salary, leave salary, payroll adjustment, loan, and air ticket events" />
</figure>

| \#  | Trigger                                | Category      |
|-----|----------------------------------------|---------------|
| 1   | Employee salary is created             | Salary        |
| 2   | Employee salary is updated             | Salary        |
| 3   | Payroll adjustment is created          | Adjustment    |
| 4   | Payroll cycle is closed                | Payroll Cycle |
| 5   | Payroll transaction is submitted       | Transaction   |
| 6   | Leave salary request is created        | Leave Salary  |
| 7   | Leave salary request is updated        | Leave Salary  |
| 8   | Leave salary request is deleted        | Leave Salary  |
| 9   | Leave salary request status is changed | Leave Salary  |
| 10  | Loan request is created                | Loan          |
| 11  | Loan request is updated                | Loan          |
| 12  | Loan request is deleted                | Loan          |
| 13  | Loan request status is changed         | Loan          |
| 14  | Air ticket cycle renewal is due        | Air Ticket    |

</div>

<div class="subsection">

### Available Actions (2)

These actions can be used as workflow steps to automate payroll operations:

- **Create pay adjustment request** — Automatically create a payroll adjustment for an employee
- **Create one time pay item** — Add a one-time pay item to an employee's payroll

</div>

<div class="subsection">

### How to Create a Payroll Workflow

1.  Navigate to **Automations → Workflows**
2.  Click **+ Create new workflow**
3.  Select **Create from scratch**
4.  Under **Select an event**, choose **Bayzat Payroll**
5.  Pick a trigger from the 14 available options
6.  Configure conditions and actions as needed
7.  Activate the workflow

The screenshot below shows the Workflows dashboard with summary statistics (17 of 18 total active, 300 total executions, 143 failed in the last 7 days). Each workflow card displays the application, trigger event, action, execution count, and last executed date. The left sidebar provides filters for Status, Event, Application, and Tags.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-05-workflows-list.png" class="screenshot" loading="lazy" alt="Workflows dashboard showing active workflows with application, trigger, action chains, execution statistics, and filter sidebar" />
</figure>

</div>

<div class="subsection">

### Example Use Cases

- **Salary change notification:** Trigger on "Employee salary is updated" to notify HR managers via email
- **Payroll cycle completion:** Trigger on "Payroll cycle is closed" to send summary reports
- **Loan request tracking:** Trigger on "Loan request status is changed" to update external systems
- **Leave salary processing:** Trigger on "Leave salary request is created" to auto-assign approvers

</div>

</div>

</div>

<div id="approval-flow" class="section section section-approval-flow">

<div class="section-header">

## Approval Flow

</div>

<div class="section-body">

<div class="subsection">

### Navigation

<div class="nav-path">

Automations → Approval flows

</div>

</div>

<div class="info-box">

**Available:** Payroll Management has 2 dedicated approval flow tabs: **Payroll Transaction** and **Leave Salary Request**.

</div>

<div class="subsection">

### Approval Flow Structure

Each approval flow tab has two sections:

- **Advanced approval flow (If conditions)** — Route approvals based on defined criteria such as department, amount, or employee grade. Click **+ Add advance flow** to create conditional routing rules.
- **Default approval flow (Else)** — Used when no matching advanced flow conditions are met. This is the fallback flow that processes all requests not caught by advanced rules.

</div>

<div class="subsection">

### Payroll Transaction Approval

Controls who can approve submitted payroll transactions before they are processed for payment.

<table class="limitations-table">
<thead>
<tr>
<th>Flow Type</th>
<th>Step</th>
<th>Approvers</th>
<th>Logic</th>
</tr>
</thead>
<tbody>
<tr>
<td>Advanced (If)</td>
<td colspan="3"><em>No advanced flows configured — click "+ Add advance flow" to create conditional rules</em></td>
</tr>
<tr>
<td>Default (Else)</td>
<td>Step 1</td>
<td>Super Admin (5) OR Payroll table admin (3)</td>
<td>Any one approver can approve</td>
</tr>
</tbody>
</table>

The screenshot below shows the Payroll Transaction approval flow configuration. The left panel lists all approval flow types (Leave, Air Ticket, Loan, Expense, Payroll Transaction, Leave Salary Request, etc.). The right panel shows the default flow with Step 1 requiring approval from either Super Admin OR Payroll table admin, with options to add more approvers, blocks, or steps.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-10-approval-payroll-transaction.png" class="screenshot" loading="lazy" alt="Payroll Transaction approval flow showing default Step 1 with Super Admin OR Payroll table admin as approvers" />
</figure>

</div>

<div class="subsection">

### Leave Salary Request Approval

Controls who can approve leave salary requests submitted by employees or on their behalf.

<table class="limitations-table">
<thead>
<tr>
<th>Flow Type</th>
<th>Step</th>
<th>Approvers</th>
<th>Logic</th>
</tr>
</thead>
<tbody>
<tr>
<td>Advanced (If)</td>
<td colspan="3"><em>No advanced flows configured — click "+ Add advance flow" to create conditional rules</em></td>
</tr>
<tr>
<td>Default (Else)</td>
<td>Step 1</td>
<td>Payroll table admin (3) OR Super Admin (5) OR Transaction processing admin (4)</td>
<td>Any one approver can approve</td>
</tr>
</tbody>
</table>

The screenshot below shows the Leave Salary Request approval flow. The default flow Step 1 has three approvers connected by OR logic: Payroll table admin, Super Admin, and Transaction processing admin. Any one of these three can approve a leave salary request.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/payroll-management/v1/validation/screenshots/val-11-approval-leave-salary.png" class="screenshot" loading="lazy" alt="Leave Salary Request approval flow showing three approvers connected by OR logic - Payroll table admin, Super Admin, and Transaction processing admin" />
</figure>

</div>

<div class="subsection">

### Configuring Approval Flows

1.  Navigate to **Automations → Approval flows**
2.  Select the **Payroll Transaction** or **Leave Salary Request** tab
3.  To add conditional routing, click **+ Add advance flow** in the Advanced section
4.  To modify the default flow, use **+ Add step** for multi-step approvals or **+ Add approver** within a step for parallel approvers
5.  Click **Update approval flows** to save changes

</div>

<div class="subsection">

### Approval Flow Concepts

- **Steps:** Sequential approval stages. Step 1 must be approved before Step 2 begins.
- **Approvers within a step:** Connected by OR logic — any one approver in the step can approve to move forward.
- **Blocks:** Groups of approvers within a step, used for complex approval logic.
- **Advanced flows:** Conditional rules (If) that route specific requests to different approval chains based on criteria.
- **Default flow:** The fallback (Else) flow used when no advanced conditions match.

</div>

</div>

</div>

<div id="business-rules-limitations" class="section section section-business-rules-limitations">

<div class="section-header">

## Business Rules & Limitations

</div>

<div class="section-body">

<div class="subsection">

### Currency Management Rules

Currency changes are restricted during active payroll processing to maintain data integrity.

<div class="warning-box">

**⚠️ Currency Change Restrictions**

Cannot update employee currency in active payroll month if any pay-items have been paid, any pay-items are unpaid (net-pay must be 0), unpaid variable pay exists, unpaid adjustments exist, unpaid recurring deductions exist for active/future months, or approved expense requests are unpaid.

</div>

| Restriction | Impact | Workaround |
|----|----|----|
| Approved expenses block currency change | Must move approved expenses back to pending before currency update | Process expenses or return to pending state |
| Future recurring deductions | Recurring items in future months prevent currency changes | Remove or process recurring deductions first |
| Default currency migration | Existing employees need currency field populated (default AED) | System auto-populates AED for existing records |

</div>

<div class="subsection">

### Transaction Processing Constraints

<div class="warning-box">

**⚠️ Transaction Undo Limitations**

Only custom cycle transactions for the current open month can be undone. Transactions in closed months cannot be undone. Close payroll month operation cannot be undone from platform.

</div>

| Rule | Description | Status |
|----|----|----|
| Undo permissions | Only transaction processor role can undo transactions | Role-based restriction |
| Rejection reason | Optional field when undoing transactions | Not required |
| Generic error handling | If undo fails: "Undo operation failed. please contact payrollsupport@bayzat.com for help" | System limitation |

</div>

<div class="subsection">

### Payroll Table Interface Limitations

| Issue | Impact | Status |
|----|----|----|
| Paid/unpaid aggregation (GS-1681) | Cannot view paid and unpaid items in unified view, requires manual tracking | Won't Fix - Medium severity |
| Column customization (GS-14) | Column checkboxes control both visibility and payment inclusion. Advanced reordering, saving custom column presets, or persisting selections across sessions is not supported — selections reset on page reload | Partially Resolved |
| Unpaid column sorting (GS-2198) | Cannot sort by unpaid amounts in payroll table | Won't Fix - Medium severity |

</div>

<div class="subsection">

### Export & Reporting Gaps

<div class="info-box">

**Office Column Missing (GS-15):** Payroll export does not include office-level details, limiting location-specific reporting.

</div>

<div class="info-box">

**Mass Uploads:** Variable pay, additions, and deductions can be bulk-uploaded via two paths: **Payroll Table → More Options → Mass Upload Variable Pays/Additions/Deductions**, or **Settings → Payroll → Mass Uploads**. Both open the Bayzat Sheets spreadsheet editor for bulk data entry.

</div>

</div>

<div class="subsection">

### Payroll Closure Rules

<div class="warning-box">

**⚠️ Permanent Action**

Closing payroll month is permanent and cannot be reversed. Unpaid items automatically carry forward to next month's Arrears column.

</div>

| Item Type | Carry Forward Behavior |
|----|----|
| Fixed pay items | Appear under 'Arrears' in next month |
| Variable pay, additions, expenses, deductions | Pushed to following month as new items |

</div>

<div class="subsection">

### Multi-Currency Processing

<div class="info-box">

**Currency Format:** Displayed as "Currency Code - Currency Name" in searchable dropdown. Each currency requires separate transaction submission.

</div>

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
| Cannot change employee currency | Active pay items exist (paid, unpaid, or pending) | Process or remove all pay items, move approved expenses to pending, clear recurring deductions for future months |
| Transaction undo fails | Transaction in closed month or insufficient permissions | Verify month is open and user has transaction processor role. Contact payrollsupport@bayzat.com if error persists |
| Cannot close payroll month | Pending approvals or unresolved transactions | Review all transactions, approve or reject pending items, verify all currencies processed |
| Payslips not available for download | Payrun not closed or payslips not generated | Close payrun first, then generate payslips from Transactions tab |
| Salary not released same day | Funds deposited after 12:00 PM cutoff | Deposit cash/check before 12:00 PM. Check for Central Bank of UAE delays |
| Variable pay upload not working | Template format mismatch or incorrect payroll cycle selected | Use **Payroll Table → More Options → Mass Upload Variable Pays** or **Settings → Payroll → Mass Uploads**. Ensure the correct payroll cycle is active before uploading |
| Cannot find employee in payroll table | Future hire date or employee not active | Verify hire date is current or past. Check employee status is active |
| Payroll table requires excessive horizontal scrolling | All salary component columns enabled (up to 27 columns) | Click **Unselect all** in the column selection section, then re-enable only the columns you need. **Note:** unchecking columns also excludes those pay components from the Total unpaid amount, so re-check all components before submitting a transaction if you intend to pay the full salary. The employee Name column stays frozen (sticky) when scrolling horizontally |

</div>

<div class="subsection">

### Edge Cases

#### Multi-Currency Scenarios

- **Partial currency processing:** Each currency tab requires separate transaction submission. Cannot submit mixed-currency batch
- **Currency validation errors:** Multiple specific error messages guide resolution. Address each blocker sequentially
- **Migration edge case:** Existing employees default to AED. Verify currency assignment before first payroll in new system

#### Transaction Timing

- **Same-day processing:** Cash/check deposits before 12:00 PM enable same-day release, subject to Central Bank delays
- **Check settlement:** Banks typically take 1-2 working days. Plan submission timing accordingly
- **Wire transfer verification:** Verify fund transfer by end of day before intended payment date
- **Lulu branch deposit:** Do not hand over check at Lulu branch (extends turnaround by up to 4 days)

#### Payroll Closure Scenarios

- **Partial month closure:** Can close for all employees, individuals/groups, or specific salary components at different times
- **Unpaid items handling:** Fixed pay appears as Arrears. Variable pay, additions, expenses, deductions push to next month as new items
- **Zero net pay employees:** Employees with zero unpaid net pay are considered fully paid automatically

#### Approval Flow Edge Cases

- **Rejection after approval:** Transactions can be rejected even after initial approval
- **Rejected transaction handling:** Cannot move rejected transactions back to pending. Amounts return to payroll table
- **Approver cannot modify:** Approvers review only. Cannot edit submitted transaction details

#### Data Entry Constraints

- **Allowance categories:** Must be created manually. Cannot create in bulk
- **Deduction categories:** Must be added manually through Settings. No bulk creation
- **Addition categories:** Manual creation only. No batch import available

#### Export & Reporting Limitations

- **Paid/unpaid aggregation:** The payroll detail panel shows Processed, Unpaid pending approval, and Unpaid as separate columns. There is no combined paid + unpaid total view

#### UI Interaction Quirks

- **Horizontal scrolling on Payroll Table:** With all salary components enabled, the payroll table displays up to 27 columns (3,951px wide), requiring significant horizontal scrolling on standard screens (1,440px viewport). The **Name** column is frozen (sticky) so you can always identify the employee, but the checkbox and ID columns scroll out of view. **Tip:** Use the pay component checkboxes at the top to deselect unneeded components and reduce horizontal scrolling. Click **Unselect all** then re-enable only the columns you need. **Caution:** Remember that unchecking columns also excludes those components from the Total unpaid amount — re-check all components before submitting if you intend to pay the full salary
- **Pay component checkboxes affect payment totals:** Unchecking columns excludes those pay components from the Total unpaid figure and from transaction submission — see the [Selected Columns on the Payroll Table](#core-tasks) section for full details. Social Security Contribution is locked (always checked, cannot be excluded)
- **Sorting restriction:** Cannot sort by the Unpaid Net Pay column. Other columns support sorting via column header buttons
- **Payroll cycle not shared across sub-pages:** Selecting a specific payroll cycle (e.g. November 2025) on the Payroll Table does not carry over when you navigate to Transactions, Adjustments, or other sub-pages. Each sub-page defaults to the current open cycle. To view transactions or adjustments for a specific closed month, you must re-select the cycle on that page separately
- **Transaction detail rows can exceed employee count:** On the Transaction Details page, the summary header may show "2 Employees" while the breakdown table displays 4 rows. This occurs because the table groups payments by trade license *and* payment method — a single employee can appear in multiple rows if they have split payments or multiple pay components routed differently. The summary count reflects unique employees, not table rows
- **Cash transactions have no in-line Transaction Report:** The **eye icon** (Transaction Report dialog) is only available for bank-based transactions. Cash transactions show a text prompt: "Please download the Excel file to view details of payments." To see per-employee pay breakdowns for cash payments, you must download the Excel file — there is no on-screen viewer
- **Status column shows "-" on transaction detail rows:** In the Transaction Details breakdown table, the **Status** column consistently displays a dash ("-") for all rows. The actual approval status is shown only at the transaction header level (e.g. the green "Approved" badge). This is expected behaviour — individual trade license rows do not have separate approval statuses
- **Transaction Summary cards change between open and closed months:** Open months show 3 cards (Total, Approved, Rejected); closed months show 2 cards (Total Amount, Number of employees). The dashes ("-") below card amounts are pending/processed subtotals that may not yet be populated

</div>

<div class="subsection">

### When to Contact Support

<div class="warning-box">

**Contact payrollsupport@bayzat.com if:**

- Transaction undo operation fails with generic error
- Currency change blocked despite no visible pay items
- Payroll month closure fails unexpectedly
- Lulu transaction status not updating after 2 business days
- Payslip generation fails for closed payrun

</div>

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

How do I submit payroll transactions for employees in different currencies?

Go to the Payroll Table and select the relevant currency tab. Choose the employees or pay items to include, then click **Submit Transaction**. Each currency requires a separate transaction submission.

Can I change an employee's currency mid-month?

No. You cannot change an employee's currency if any paid or unpaid items exist, including approved expenses, variable pay, adjustments, or recurring deductions for active or future months.

What happens to unpaid amounts when the payroll month is closed?

Unpaid fixed pay items carry forward as Arrears in the next month. Unpaid variable pay, additions, work expenses, and deductions move to the following month's payroll table as new items.

Can I undo a submitted payroll transaction?

Yes, but only for custom cycle transactions in the current open month. Click the **Undo** button on the transaction, optionally enter a rejection reason, and confirm. Note that rejected transactions cannot be moved back to pending — you must resubmit them as a new transaction.

How do I download payroll data for a specific month?

Go to the Payroll Table and click the **Download** button, then select the desired month. For closed pay runs, use the Transactions tab to access historical data in Excel format.

Why can't I see all columns in the payroll table?

The "Selected columns on the payroll table" checkboxes control which pay components appear as columns. If a component is unchecked, its column is hidden *and* its amounts are excluded from the Total unpaid calculation. Click **"Select all"** (top-right of the checkbox area) to restore all columns and include all components in the payment total.

Can I filter or search transactions by specific criteria?

Yes. On the Transactions page, filter by status (Pending, Approved, Rejected), currency, or date range. On the Payroll Table, use the search field to find employees by name or ID, and apply filters to narrow by department or payment status.

How do I track the status of submitted transactions?

Go to **Payroll → Transactions**. View transactions by status tab (Pending, Approved, Rejected) and track approver actions, comments, and payment processing stages for each transaction.

What payment methods are supported for payroll processing?

For UAE (AED): Wire transfers, cash deposits, and check deposits through Lulu Exchange, plus WPS-compliant SIF files for mainland employees. For international employees: Transfermate handles non-AED currencies (GBP, USD, INR, etc.). For KSA (SAR): Mudad and SAB processing are available.

Can partial salary payments be processed?

Yes, in two ways. **(1) By pay component:** Use the "Selected columns on the payroll table" checkboxes to uncheck components you don't want to pay yet — for example, uncheck Commission and Bonuses to submit only Basic Salary and Allowances first. The Total unpaid recalculates to reflect only checked components. **(2) By employee:** Use the row checkboxes to select specific employees. You can combine both methods — select certain components and certain employees — then click Submit Transaction. Submit additional transactions later for the remaining components or employees. Note: Social Security Contribution cannot be unchecked (mandatory deduction).

How do I process payroll for employees outside UAE?

Set the employee's base currency to their local currency (e.g., GBP, USD, INR) in their salary configuration. They will appear under the corresponding currency tab in the Payroll Table. Submit a transaction for that currency — Transfermate handles the international transfer. Ensure bank details include region-specific fields (SWIFT/BIC, Sort Code for UK, IFSC for India, ABA for USA).

What is the difference between Payroll Management and Payroll Processing?

Payroll Management is the full module — salary configuration, payroll table, adjustments, approvals, and multi-currency support. Payroll Processing is the payment execution step within that module — submitting approved transactions to Lulu Exchange, Transfermate, or other partners to actually disburse salaries to employee bank accounts.

How do I get same-day salary processing?

For cash deposits: deposit at a Lulu Exchange branch before 12:00 PM. For wire transfers: verify the fund transfer by end of day before the intended payment date. For check deposits: allow 1-2 working days for clearance. Do not hand over checks at Lulu branches directly — use the designated drop-off process to avoid 4-day delays.

Can I pay onshore UAE employees in a non-AED currency?

No. Due to WPS (Wage Protection System) compliance, onshore/mainland employees in UAE must be paid in AED. Free zone employees may be paid in other currencies. Attempting to change an onshore employee's currency to non-AED is blocked by the system with an error message.

How do I create custom payroll file templates?

Go to **Settings → Payroll → Payroll File Templates → Add New**. Choose Payroll Processing or Reporting type, select a pre-defined template or upload the bank's format, map Bayzat data fields to the required columns, and save. For multi-currency companies, the downloaded file generates one sheet per currency automatically.

How do employees view their payslips?

Go to **Payroll → My pay → Monthly Pay** tab. Click the download icon on the far right of any row to download that month's payslip. Payslips are only available for months where the payroll cycle has been closed and a transaction was processed.

How do I change my payment method (paid via)?

Go to **Payroll → My pay → Monthly Pay** tab and click **Edit Payment Details**. Select a payment method (Cash, Cheque, Exchange house, Bank, or TransferMate). If you select Bank, choose a Company Bank Account from the dropdown. Click **Save** to confirm the change.

Can I submit my own loan request?

Yes. Go to **Payroll → My loans** and click **Submit a new loan request**. Select a loan policy, enter the amount (within policy limits), provide a reason, choose the tenure, and optionally name a guarantor. Review the auto-calculated repayment plan, then click **Save** to submit. The request then goes through the configured approval chain.

Why is the air ticket request button disabled?

The **Request air ticket** button is disabled when you have not been assigned to an air ticket policy. The Policy status shows "Inactive" and a tooltip confirms "You have not been added to a policy." Contact your HR administrator to be added to an active air ticket policy.

</div>

</div>

<div class="subsection">

### Getting Help

- **Payroll Support:** Contact payrollsupport@bayzat.com for transaction processing issues or technical errors
- **Help Center:** Access step-by-step guides at bayzathelp.zendesk.com
- **In-Platform Support:** Use the help icon in the top navigation for context-specific guidance

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
| **Adjustments** | One-time or recurring additions and deductions applied to employee salaries outside of standard pay components. |
| **Allowances** | Fixed salary components added to basic pay, such as housing, transportation, or other benefits. |
| **Approval Flow** | Multi-stage review process where designated approvers review, comment on, and approve or reject payroll transactions. |
| **Arrears** | Unpaid fixed pay items from previous months that appear in the current month's payroll table. |
| **Base Currency** | The primary currency assigned to an employee for salary calculations and payments. |
| **Custom Cycle** | Payroll transactions processed outside the standard monthly payroll schedule. |
| **Deductions** | Amounts subtracted from employee salaries, including loans, advances, or penalty deductions. |
| **DEWS** | DIFC Employee Workplace Savings — a savings scheme for DIFC-based employees, with payroll file templates available for reporting contributions. |
| **Loan Policy** | Company-defined loan configuration specifying loan type (car, emergency, etc.), minimum/maximum amounts, maximum tenure, and eligibility criteria. Employees select a policy when submitting a loan request. |
| **Loan Tenure** | The repayment period in months for an employee loan. Installment amounts are calculated by dividing the loan amount by the tenure, with deductions applied to monthly payroll. |
| **Lulu Exchange** | Bayzat's primary payroll processing partner in UAE. Handles salary disbursement via WPS/SIF files, wire transfers, cash deposits, and check deposits. |
| **MPN Number** | Multi-Purpose Number generated by Bayzat for tracking cash or check deposits with Lulu Exchange. |
| **Mudad** | Saudi Arabia payroll processing platform integrated with Bayzat for SAR-denominated salary disbursement and government compliance. |
| **Payroll File Template** | Configurable file format for generating bank submission files, SIF files, and government reports from Bayzat payroll data. |
| **Payroll Processing** | The payment execution step within the Payroll module — generating SIF files, submitting to banks/exchange houses, and disbursing salaries to employee accounts. |
| **Payroll Table** | The main interface displaying monthly employee pay data, organized by currency with columns for salary components and totals. |
| **Paid Via** | The employee's configured payment method — Cash, Cheque, Exchange house, Bank (WPS/SIF), or TransferMate. Editable by employees through My pay → Edit Payment Details. |
| **Payrun** | The complete monthly payroll cycle from opening to closing, including all transactions and adjustments. |
| **Payslip** | Document generated for employees showing salary breakdown, additions, deductions, and net pay for a specific month. |
| **SAB** | Saudi British Bank — a direct bank integration option for KSA payroll processing for SAB account holders. |
| **SIF File** | Salary Information File — standardized file format for UAE WPS compliance, generated from payroll data for bank submission via Lulu Exchange. |
| **Transaction** | A submitted batch of payroll payments for one or more employees, requiring approval before processing. |
| **Variable Pay** | Non-fixed salary components such as bonuses, commissions, or overtime that vary by month. |
| **Transfermate** | International payment processing partner used for non-AED salary disbursement to employees outside UAE (GBP, USD, INR, EUR, etc.). |
| **Wire Transfer** | Electronic bank-to-bank transfer method for funding payroll processing through Lulu Exchange or direct bank submission. |
| **WPS** | Wage Protection System — UAE government system mandating electronic salary payments for mainland employees. Requires SIF file submission through authorized exchange houses. |

</div>

</div>

</div>
