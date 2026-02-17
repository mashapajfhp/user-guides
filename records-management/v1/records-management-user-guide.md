<div class="content-area" role="main" aria-label="User guide content">

<div id="feature-overview" class="section section section-feature-overview">

<div class="section-header">

## What is Records Management?

</div>

<div class="section-body">

<div class="subsection">

### Overview

Records Management is the centralized hub for managing all organizational records across Bayzat. It encompasses **employee records** (profiles, personal data, work information), **employee documents** (passports, visas, contracts), **company documents** (trade licenses, establishment cards, insurance policies), **company assets** (laptops, vehicles, equipment), and a **Knowledge Hub** with **Bayzat AI** for permission-controlled document sharing and instant self-service answers to company policy questions.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/06-employee-documents-page.png" class="screenshot" loading="lazy" alt="06-employee-documents-page.png" />
<figcaption>Documents page showing expiry tracking, document types, filters, and uploaded documents with expiry dates</figcaption>
</figure>

Access Records Management features from the **Company** sidebar menu. Employee records are managed via **All Employees**, company-level documents through **Company Documents**, physical and digital assets via **Company Assets**, and collaborative knowledge through the **Knowledge Hub**.

</div>

<div class="subsection">

### Key Benefits

- Eliminate manual spreadsheet updates with real-time employee profile completion tracking
- Automate document expiry reminders for both employee and company documents to prevent compliance gaps
- Centralize configurable document types with OCR-powered data extraction for employee and company records
- Manage the complete employee lifecycle from hire to offboarding in one system
- Enforce document privacy with role-based permissions — employees see only their own documents while sensitive records (payslips, contracts) have controlled admin access
- Manage company-wide documents (trade licenses, establishment cards, insurance policies) with expiry tracking
- Track and assign company assets (laptops, vehicles, equipment) with full audit trails
- Provide instant AI-powered answers to company policy questions via Knowledge Hub, reducing repetitive inquiries to HR and admins
- Give employees self-service access to organizational knowledge through permission-controlled Knowledge Hub spaces
- Enable access-controlled document sharing where the right people see the right documents based on space permissions
- Enable self-service employee access via platform invitations

</div>

<div class="strategic-context">

<div class="strategic-header">

### Strategic Context

</div>

<div class="strategic-grid">

<div class="strategic-card">

#### What Records Management Solves

Replaces fragmented organizational data across Excel files, email attachments, and paper documents with a single source of truth for employees, company documents, and assets.

- Eliminates manual tracking of document expiry dates for both employee and company documents
- Enforces document privacy with role-based permissions for sensitive records like payslips and contracts
- Centralizes company asset tracking and assignment workflows
- Enables audit-ready compliance documentation with controlled access across all record types

</div>

<div class="strategic-card">

#### Why It Matters

Organizational records are the foundation for payroll, benefits, compliance, and operational efficiency across the entire platform.

- Employee records drive payroll, insurance, attendance, and leave calculations
- Company documents ensure regulatory compliance (trade licenses, establishment cards)
- Asset tracking prevents loss and ensures accountability for company property
- Knowledge Hub with Bayzat AI provides instant answers to company policies, reducing admin workload

</div>

<div class="strategic-card">

#### How It Connects

Records Management is a master data repository that feeds transactional modules and operational workflows across the platform.

- Employee profiles link to payroll, leave, attendance, and insurance with role-based access controls
- Company documents reference insurance policies, visa tracking, and regulatory compliance
- Company assets connect to employee assignments and depreciation tracking
- Knowledge Hub provides permission-controlled access to company knowledge with AI-powered self-service

</div>

</div>

</div>

<div class="subsection">

### Who Uses This Feature?

| User Role | What They Do | Value Proposition |
|----|----|----|
| **HR Administrators** | Manage employee profiles, upload employee and company documents, configure document types, track assets, and administer Knowledge Hub spaces with access controls | Replace manual tracking with automated monitoring, reduce repetitive policy questions from employees via Knowledge Hub AI self-service |
| **People Managers** | View team member profiles, access documents, monitor reporting structures, and use Knowledge Hub AI to get quick answers on company policies | Access real-time employee and organizational data without requesting files from HR, get instant policy answers via Bayzat AI |
| **Finance Managers** | Access employee records for payroll, manage company documents for compliance, and track asset depreciation | Eliminate back-and-forth requests for employee data and company documentation during audits |
| **Employees** | View their own profile and documents (with privacy controls), upload documents, request company assets, ask Bayzat AI about company policies, and access permission-controlled Knowledge Hub content | Secure self-service access to personal records with document privacy, plus instant AI answers to policy questions eliminates need to contact HR |

</div>

</div>

</div>

<div id="product-foundation" class="section section section-product-foundation">

<div class="section-header">

## Product Foundation Overview

</div>

<div class="section-body">

<div class="subsection">

### How Records Management Fits

Records Management is the organizational data layer that manages all company and employee information across the platform. It covers five core areas:

- **Employee Register** — Complete employee profiles that serve the entire employment lifecycle from hire to offboarding, covering personal information, work details, payroll, documents, attendance, leave, and health insurance with role-based access controls
- **Employee Documents** — Passports, visas, contracts, payslips, and other employee-specific documents with expiry tracking, OCR extraction, and privacy controls where employees can only view their own documents
- **Company Documents** — Trade licenses, establishment cards, insurance policies, and other company-level documents with expiry reminders
- **Company Assets** — Laptops, vehicles, equipment, and other company property with assignment tracking and audit trails
- **Knowledge Hub** — Permission-controlled spaces for organizing company knowledge with Bayzat AI for instant answers to policy questions, reducing admin workload through employee self-service

<div class="info-box">

**Mental model:** Records Management = Employee Data (profiles + documents) + Company Data (documents + assets) + Knowledge Hub (collaborative content) → All referenced by payroll, attendance, leave, insurance, and compliance modules

</div>

Changes across any of these areas can impact downstream processes. Employee record updates affect payroll and leave calculations. Company document expiry affects compliance status. Asset assignments track accountability across the organization.

</div>

<div class="subsection">

### Key Decisions Before Setup

Answer these questions before configuring Records Management:

- **What employee document types are mandatory for compliance?** — Configure employee document types with expiry tracking before onboarding
- **What company document types do you need to track?** — Set up company document types (trade licenses, establishment cards, insurance policies) under Settings → Company → Company Document Types
- **What are your document privacy and access requirements?** — Define role-based permissions for sensitive documents (payslips, contracts, personal records). Employees see only their own documents; admins control who can view, edit, or manage company-sensitive records
- **Which fields require approval workflows?** — Decide if employees can edit personal/work info or if changes require admin approval
- **How will you structure reporting hierarchies?** — Define departments, offices, and reporting managers to enable org chart generation
- **What company assets need tracking?** — Identify asset categories (IT equipment, vehicles, office equipment) and assignment workflows
- **How will you organize Knowledge Hub spaces?** — Plan team-based or topic-based spaces and determine access permissions (Private, Editor)

</div>

<div class="subsection">

### Related Features

- **Payroll Module** — Pulls employee salary, bank details, and work information for monthly payroll processing and end of service calculations
- **Time Off** — Uses hire date, work profile, and leave cycle type to calculate leave balances and encashments
- **Attendance** — References work timings, office locations, and employee status for check-in/check-out tracking
- **Health Insurance** — Links employee records to insurance policies, tracks dependent documents, and manages endorsements
- **Document Management** — Stores and tracks both employee and company documents with automated expiry reminders
- **Bayzat AI** — Integrated into Knowledge Hub to provide instant answers to company policy questions, enabling employee self-service and reducing repetitive inquiries to HR and admins

</div>

<div class="subsection">

### Prerequisites & Requirements

| Requirement | Description | Status |
|----|----|----|
| Work Email Address | Required for sending employee invitations and platform access. Personal email can be used if official email unavailable. | Required |
| Basic Employee Information | First Name, Last Name, and Nationality are mandatory fields. System validates on submission. | Required |
| Department & Office Configuration | Must be configured in Company settings before assigning to employees. Enables filtering and org chart generation. | Required |
| Role Management | Configure user roles and permission levels under Settings to control access to sensitive data. Determines who can view, edit, or manage employee records, documents, payslips, contracts, and company information. | Required |
| Employee Document Type Configuration | Configure mandatory employee document types and expiry reminders before bulk uploads. Supports custom types beyond defaults. | Recommended |
| Company Document Type Configuration | Set up company document types under Settings → Company → Company Document Types for trade licenses, establishment cards, and other organizational records. | Recommended |
| Asset Categories | Define company asset types and categories before creating asset records. Enables consistent tracking and reporting. | Recommended |
| Knowledge Hub Spaces | Plan and create Knowledge Hub spaces with appropriate access levels before inviting team members to collaborate. | Optional |
| Reporting Structure | Define reporting managers in employee work profiles. Required for org chart visualization and approval flow routing. | Recommended |
| Insurance Policy Setup | Configure health insurance policies before assigning to employees. Required for insurance module functionality. | Optional |

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

### End-to-End Journey: Records Management Lifecycle

From onboarding employees to managing documents across the organization, tracking compliance, and maintaining records throughout the lifecycle.

</div>

<div class="journey-phases">

<div class="journey-phase">

<div class="phase-marker">

1

</div>

<div class="phase-content">

#### Initial Setup

Configure roles, permissions, document types, departments, and organizational structure before adding records.

<a href="#initial-setup" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

2

</div>

<div class="phase-content">

#### Onboard Employees

Add new employees with personal, contact, and work details. Send platform invitations so employees can access their own profiles and documents.

<a href="#employee-register" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

3

</div>

<div class="phase-content">

#### Upload & Organize Documents

Add employee documents (passports, visas, contracts), company documents (trade licenses, establishment cards), and Knowledge Hub content (policies, procedures) with role-based access controls.

<a href="#employee-documents" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

4

</div>

<div class="phase-content">

#### Track Expiry & Compliance

Monitor document expiry dates for employee and company documents. Receive automated reminders and use Bayzat AI reports to stay ahead of compliance deadlines.

<a href="#company-documents" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

5

</div>

<div class="phase-content">

#### Update & Renew Records

Replace expired documents with updated versions, edit employee profiles as information changes, and keep company records current.

<a href="#employee-register" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

6

</div>

<div class="phase-content">

#### Manage Assets & Knowledge

Assign and track company assets (laptops, vehicles, equipment). Organize team knowledge in Knowledge Hub spaces with controlled access permissions.

<a href="#company-assets" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

7

</div>

<div class="phase-content">

#### Archive & Offboard

Offboard departing employees, reclaim company assets, archive records, and delete documents or profiles that are no longer needed.

<a href="#employee-register" class="phase-link">See details →</a>

</div>

</div>

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

### Before You Begin

Before adding employees and managing documents, configure your company settings to ensure Records Management works correctly. Follow these steps in order — each builds on the previous one.

<div class="nav-path">

Settings → Company

</div>

All configuration steps below are accessed from the Company Settings page unless stated otherwise.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/99-settings-company-overview.png" class="screenshot" loading="lazy" alt="Company Settings overview" />
<figcaption>Company Settings page showing all configurable sections under Settings → Company</figcaption>
</figure>

</div>

<div class="subsection">

### Step 1: Upload Company Logo

Your company logo appears across the platform interface, employee payslips, and official documents. Upload it first to brand your Bayzat experience.

<div class="nav-path">

Settings → Company → Company Logo

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/100-settings-company-logo.png" class="screenshot" loading="lazy" alt="Company Logo settings" />
<figcaption>Company Logo section where you upload your company logo and trade license logos</figcaption>
</figure>

- Click **Change logo** to upload your company logo
- The logo will appear on the platform interface, payslips, and end-of-service settlements
- You can also upload separate logos for each trade license if your company operates under multiple licenses

</div>

<div class="subsection">

### Step 2: Define Employee Structures

Employee Structures allow you to organise employees into logical groups for managing roles, permissions, and visibility. This is essential for controlling which employees can see each other's profiles when the **Restrict company-wide employee visibility** toggle is enabled under Employee Permissions.

<div class="nav-path">

Settings → Company → Employee Structures

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/101-settings-employee-structures.png" class="screenshot" loading="lazy" alt="Employee Structures settings" />
<figcaption>Employee Structures configuration with structure name, description, grouping type, and last updated columns</figcaption>
</figure>

To create a new structure, click **Add New** and follow the 3-step wizard:

**Step 1 — Define Structure:** Enter a name and description, then choose the grouping type:

| Grouping Type | Description |
|----|----|
| **Automatic grouping** | Group employees by defining criteria (e.g., department, office, nationality, position) and perform automatic matching. Available data points include: Department, Office, Nationality, Position, Status, Gender, Work Location, Company Name, Age, Hire Date, and any custom fields. |
| **Manual grouping** | Group employees by selecting them individually. Useful when groupings do not align with standard employee attributes. |

**Step 2 — Employee Grouping:** Create one or more groups within the structure. For automatic grouping, define criteria using data points and operators (e.g., "Department equals Engineering"). For manual grouping, select employees to add to each group.

**Step 3 — Review:** Review the structure configuration and group assignments before saving.

<div class="info-box">

**Important:** Employee Structures are a prerequisite for the **Restrict company-wide employee visibility** feature. When that toggle is enabled (Settings → Company → Employee Permissions), employees will only see people within their assigned group and will not have visibility into other groups. You must create at least one structure with groups and assign employees before enabling the visibility restriction.

</div>

</div>

<div class="subsection">

### Step 3: Set Up Offices and Departments

Offices and departments define your organisational structure. Employees are assigned to an office and department when their profiles are created, so these must be configured first.

#### Offices

<div class="nav-path">

Settings → Company → Offices

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/102-settings-offices.png" class="screenshot" loading="lazy" alt="Offices settings" />
<figcaption>Offices configuration showing office name, location, coordinates, and attendance check-in radius</figcaption>
</figure>

- Click **Add new** to create an office
- Enter the office name and physical location
- The system auto-populates GPS coordinates from the address
- Set an attendance check-in radius if you use location-based attendance tracking
- Each office can be edited or deleted as your organisation evolves

#### Departments

<div class="nav-path">

Settings → Company → Departments

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/103-settings-departments.png" class="screenshot" loading="lazy" alt="Departments settings" />
<figcaption>Departments list showing all defined departments with edit and delete options</figcaption>
</figure>

- Click **Add new** to create a department
- Enter the department name
- Departments are used for employee assignment, reporting, and filtering across the platform

<div class="info-box">

**Tip:** Set up all your offices and departments before adding employees. This ensures employees can be correctly assigned during onboarding and avoids having to update records later.

</div>

</div>

<div class="subsection">

### Step 4: Configure Role Management

Role Management determines who has access to what within the platform. Assign predefined or custom roles to employees to control their level of access and administrative capabilities.

<div class="nav-path">

Settings → Organization → Role management

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/107-settings-role-management.png" class="screenshot" loading="lazy" alt="Role Management page" />
<figcaption>Role Management page showing the Role Assignment tab with employees and their assigned roles</figcaption>
</figure>

The Role Management page has two tabs:

- **Role Assignment:** View and manage which roles are assigned to each employee. Click **Assign roles** to add roles to an employee, or click **Edit** next to an existing assignment to modify it.
- **Custom Roles:** Create custom roles with specific permissions tailored to your organisation’s needs. Each custom role has a name and description.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/108-settings-custom-roles.png" class="screenshot" loading="lazy" alt="Custom Roles tab" />
<figcaption>Custom Roles tab where you can create and manage roles with specific permissions</figcaption>
</figure>

Common predefined roles relevant to Records Management include:

- **Super Admin:** Full platform access including all records and settings
- **People Manager:** Access to manage employee records and documents
- **Line Manager:** Access to view and manage direct reports
- **Role Manager:** Ability to assign and manage roles for other employees

<div class="info-box">

**Tip:** Configure roles before adding employees so that managers and HR staff have the correct access from the start. Use custom roles to create fine-grained permissions that match your organisation’s hierarchy.

</div>

</div>

<div class="subsection">

### Step 5: Set Employee Permissions

Employee Permissions control what employees can do on the platform regarding their own data. These are company-wide toggle settings that apply to all employees.

<div class="nav-path">

Settings → Company → Employee Permissions

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/104-settings-employee-permissions.png" class="screenshot" loading="lazy" alt="Employee Permissions settings" />
<figcaption>Employee Permissions with toggle switches controlling what employees can do on the platform</figcaption>
</figure>

The following permission toggles are available:

| Permission | What It Controls |
|----|----|
| **Restrict document management** | Prevents employees from adding, editing, or deleting their own documents |
| **Restrict personal info editing** | Prevents employees from editing their personal and work information |
| **Restrict dependents editing** | Prevents employees from editing their dependents’ documents and information |
| **Restrict profile picture** | Prevents employees from uploading or updating their profile picture |
| **Restrict company-wide employee visibility** | When enabled, employees will only see people within their assigned group (configured via Employee Structures) and will not have visibility into other groups or organisational structures. For example, if employees are grouped by department, a member of the "Engineering" group will not be able to see profiles of employees in the "Finance" group. This toggle works in conjunction with **Employee Structures** (Settings → Company → Employee Structures), where you define groups either manually or automatically using criteria such as department, office, nationality, or position. |

<div class="info-box">

**Note:** These permissions work together with Role Management and Employee Structures. Roles determine what managers and admins can access (e.g., manage attendance, edit employees), while Employee Permissions control what individual employees can do with their own data. The **Restrict company-wide employee visibility** toggle specifically relies on **Employee Structures** — you must first create a structure with groups and assign employees to those groups before enabling this restriction. Without configured groups, the restriction has no effect. For sensitive documents like payslips and contracts, restricting document management ensures that only authorised personnel can modify records.

</div>

</div>

<div class="subsection">

### Step 6: Configure Employee Document Types

Define the types of documents that can be stored against employee profiles. Each document type can be marked as mandatory or non-mandatory, and can have expiry tracking with automated email reminders.

<div class="nav-path">

Settings → Company → Employee Document Types

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/105-settings-employee-document-types.png" class="screenshot" loading="lazy" alt="Employee Document Types settings" />
<figcaption>Employee Document Types with document name, mandatory type, and expiry reminder configuration</figcaption>
</figure>

Each document type has the following properties:

| Property | Description |
|----|----|
| **Document Name** | The name of the document type (e.g., Passport, Emirates ID, Residency Visa). Supports 2–70 characters including Arabic. |
| **Mandatory Type** | Whether this document is required for all employees (Mandatory) or optional (Non-Mandatory) |
| **Expiry Reminders** | When enabled, sends automated monthly email reminders before the document expires (configurable: 1–12 months before expiry) |

- The system comes with default document types (Passport, Passport Photo, Emirates ID, Residency Visa, Others, etc.) that cannot be deleted
- Click **Add new** to create custom document types specific to your organisation
- Custom types are labelled with a *Custom* badge and can be edited or deleted
- Enable expiry reminders for time-sensitive documents to ensure compliance

<div class="warning-box">

**Important:** Plan your document types carefully before adding employees. Mandatory document types will appear as “missing” on employee profiles until uploaded, which helps track compliance but requires that you only mark documents as mandatory if they are truly required for all employees.

</div>

</div>

<div class="subsection">

### Step 7: Configure Company Document Types

Define the types of documents stored at the company level. These are separate from employee documents and typically include regulatory, legal, and operational documents.

<div class="nav-path">

Settings → Company → Company Document Types

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/106-settings-company-document-types.png" class="screenshot" loading="lazy" alt="Company Document Types settings" />
<figcaption>Company Document Types showing document name and mandatory type with edit and delete options</figcaption>
</figure>

Company document types include properties for:

- **Document Name:** The category name (e.g., Trade License, VAT Certificate, Commercial Registration)
- **Mandatory Type:** Whether the document is required (Mandatory) or optional (Non-Mandatory)

The system provides default company document types such as Trade License and VAT Certificate that cannot be deleted. Click **Add new** to create additional types as needed.

<div class="info-box">

**Tip:** Company documents are accessible to users with the appropriate role permissions. Ensure sensitive company documents like trade licenses and VAT certificates are uploaded promptly, as these are often required for compliance and employee visa processing.

</div>

</div>

<div class="subsection">

### Post-Setup Checklist

Before proceeding to add employees and upload documents, verify the following:

- **Company Logo:** Uploaded and visible across the platform
- **Employee Structures:** Created to group employees logically
- **Offices:** All physical locations created with correct addresses
- **Departments:** All organisational units defined
- **Roles:** Key roles (Super Admin, People Manager, Line Manager) assigned to relevant staff
- **Employee Permissions:** Toggled according to your organisation’s data governance policy
- **Employee Document Types:** Mandatory and custom types configured with expiry reminders
- **Company Document Types:** Categories defined for company-level documents

</div>

</div>

</div>

<div id="employee-register" class="section section section-employee-register">

<div class="section-header">

## Employee Register

</div>

<div class="section-body">

<div class="info-box">

**What is the Employee Register?** The Employee Register is the central list of all employees in your organisation. It is your starting point for managing employee records, profiles, documents, and the full employee lifecycle.

</div>

<div class="subsection">

### How to Access

Navigate to **Company** (sidebar) → **All Employees**.

**Direct URL:** `/enterprise/dashboard/company/people`

</div>

<div class="subsection">

### Employee List and View Modes

The employee list displays key details including name, employee ID, hire date, job title, department, and profile completion. Click any employee name to open their full profile. By default the list shows active employees with 24 per page. Three view modes are available using the toggle icons in the top-right corner of the list.

#### List View

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/14-employees-list-clean.png" class="screenshot" loading="lazy" alt="14-employees-list-clean.png" />
<figcaption>List view — the default table layout with sortable columns and pagination</figcaption>
</figure>

#### Grid View

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/69-employee-grid-view.png" class="screenshot" loading="lazy" alt="69-employee-grid-view.png" />
<figcaption>Grid view — employee cards with avatars, name, job title, and department</figcaption>
</figure>

#### Org Chart View

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/70-employee-org-chart-view.png" class="screenshot" loading="lazy" alt="70-employee-org-chart-view.png" />
<figcaption>Org Chart view — hierarchical tree showing reporting structure with expandable nodes</figcaption>
</figure>

</div>

<div class="subsection">

### Search and Filters

Type an employee name or ID in the search bar on the employee list page to filter results in real-time. You can also search for employees using the global search bar at the top of the platform next to Bayzat AI.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/15-search-results-bayzlander.png" class="screenshot" loading="lazy" alt="15-search-results-bayzlander.png" />
<figcaption>Real-time search results filtering employees as you type</figcaption>
</figure>

Click **Filters** to narrow results by profile completion, expired documents, invitation status, employee status, department, or office. Active filters appear as chips that can be cleared individually or all at once.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/16-filters-panel-open.png" class="screenshot" loading="lazy" alt="16-filters-panel-open.png" />
<figcaption>Filter panel with Profile Completion, Expired Documents, Invitation Status, and Department options</figcaption>
</figure>

</div>

<div class="subsection">

### Adding Employees

Employees can be added in two ways: individually through the Add Employee form, or in bulk via Excel import.

#### Adding an Employee Individually

Navigate to **Company → All Employees → Add Employee**. The form covers personal details (name, date of birth, nationality, gender), contact information (mobile, work email), and work details (job title, employee ID, hiring date, department, office, work week, and insurance). The required fields are First Name, Last Name, and Nationality. A work email is needed if you want to send a platform invitation. Click **Create** to save or **Create and add another** to continue adding employees.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/19-add-employee-form-top.png" class="screenshot" loading="lazy" alt="19-add-employee-form-top.png" />
<figcaption>Add Employee form with Personal, Contact, and Work sections</figcaption>
</figure>

#### Adding Employees via Excel Bulk Import

For adding multiple employees at once, use the Excel bulk import. From All Employees, click the **Add Employee** dropdown and select **Excel bulk import**. Download the template, fill it with employee data, and upload it back. Do not alter hidden system ID columns in the template.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/42-excel-bulk-import-page.png" class="screenshot" loading="lazy" alt="42-excel-bulk-import-page.png" />
<figcaption>Excel bulk import with download template and upload steps</figcaption>
</figure>

If validation fails, download the error report for details. Ensure UAE-specific fields (Residence Visa Location, Trade License, MOL No.) are only populated when the Legal Country of Residence is UAE.

</div>

<div class="subsection">

### Inviting Employees

Once employees have been added to the platform, they need to be invited so they can log in and start using Bayzat. Invitations can be triggered from the employee listing page or via the dedicated Invitations page.

From the **All Employees** list, click the **Send Invite** button next to any uninvited employee. The button is disabled for employees without a work email on file. You can also select multiple employees using the checkboxes and send bulk invitations in one go.

<div class="warning-box">

**Important:** The **Bulk actions → Invite** option does not check whether employees have valid email addresses. Using bulk invite on employees without emails triggers silent API errors (HTTP 422) while displaying a misleading success message. Always ensure employees have valid work emails before using the bulk invite feature.

</div>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/72-send-invite-dialog.png" class="screenshot" loading="lazy" alt="72-send-invite-dialog.png" />
<figcaption>Send Invite dialog confirming the employee work email before sending</figcaption>
</figure>

Alternatively, navigate to **Company → Invitations** to view all pending invitations, resend reminders, or invite new employees using the dedicated form. The system automatically sends up to 3 email reminders if an employee has not accepted their invitation.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/32-invitations-page.png" class="screenshot" loading="lazy" alt="32-invitations-page.png" />
<figcaption>Invitations page showing pending invites with Resend and Delete actions</figcaption>
</figure>

</div>

<div class="subsection">

### Viewing Employee Profile

From the employee list, click any employee name to open their full profile. Employees can also view their own profile via **My Profile**. Each profile is organised into tabs that cover the entire employee lifecycle: About Me (personal and contact details), Work (employment details, department, office), Documents (uploaded files with view, edit, and delete actions), Dependents, Leaves, Health Insurance, Payroll (salary, bank details, end of service), Attendance, Timesheet, Assets, Air Tickets, and Performance.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/21-employee-profile-about-me.png" class="screenshot" loading="lazy" alt="21-employee-profile-about-me.png" />
<figcaption>Employee profile showing the About Me tab with personal and contact details</figcaption>
</figure>

</div>

<div class="subsection">

### Updating Employee Information

Employee information can be updated from the employee profile by navigating to the relevant tab (About Me, Work, Documents, Dependents, etc.) and clicking **Edit**. Admins and HR managers can update all employee data directly, and changes take effect immediately upon saving.

Employees can also view and edit their own profile via **My Profile**. However, what employees are allowed to change depends on the permissions configured under **Settings → Company → Employee Permissions**. Administrators can restrict employees from editing their personal and work information, managing their documents, updating dependents information, or changing their profile picture. When these restrictions are not in place, employees may edit their own data, but certain changes may require approval from an admin or line manager before they take effect.

</div>

<div class="subsection">

### Exporting Employee Data

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/18-download-export-dialog.png" class="screenshot" loading="lazy" alt="18-download-export-dialog.png" />
<figcaption>Download/Export dialog for employee data</figcaption>
</figure>

To export employee data, click the **Download/Export** button from the All Employees list. The system generates an Excel file containing all visible employee data based on the currently applied filters.

</div>

<div class="subsection">

### Offboarding an Employee

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/83-offboard-filled-with-warning.png" class="screenshot" loading="lazy" alt="83-offboard-filled-with-warning.png" />
<figcaption>Offboard dialog with departure date, reason, and impact warnings</figcaption>
</figure>

To offboard an employee, navigate to their profile's **Work** tab and click the **Offboard** button in the status card. A dialog titled **"Offboarding [Employee Name]"** appears with two required fields:

1. **Departure date** — Enter in DD/MM/YYYY format or use the calendar date picker
2. **Reason for departure** — Select from the dropdown:
   - Resignation with notice
   - Termination with notice
   - Termination without notice
   - Resignation without notice
   - End of contract
   - Death
   - Absconding

After entering the departure date, the system displays a warning banner: *"[Employee Name] will not be able to use Bayzat after [departure date] and will be removed from the [next month] payroll onward. All future leave requests of this employee will be deleted. All unprocessed time and pay adjustments of this employee will be deleted."*

Click **Offboard** to confirm. The employee's status changes to **Inactive** with the departure date and reason recorded in the status card. Offboarded employees display an **INACTIVE** badge and can be found by filtering the employee list to show inactive employees.

<div class="warning-box">

**Offboarding vs. Deletion:** Offboarding preserves employee records while removing access. Deletion is permanent and removes all related data including documents, insurance, and payroll records. Prefer offboarding to maintain historical records. The platform allows editing the offboarding date for up to one month in the past only.

</div>

### Rehiring an Employee

If an employee was previously offboarded, you can rehire them directly from their profile — provided their End of Service (EOS) has **not** been processed.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/inactive-employee-work-tab.png" class="screenshot" loading="lazy" alt="inactive-employee-work-tab.png" />
<figcaption>Inactive employee Work tab showing status card with enabled Rehire button (no EOS processed)</figcaption>
</figure>

**Step 1: Find inactive employees.** Go to **Company > All Employees** and click the **Filters** button. Uncheck **Active** and check **Inactive**, then apply. The list displays only offboarded employees, each with an **INACTIVE** badge.

**Step 2: Open the employee's Work tab.** Click the employee's name to open their profile, then select the **Work** tab. The status card on the right displays the employee's current **Status** (Inactive), **Departure date**, and **Reason for departure**.

**Step 3: Check rehire eligibility.** The **Rehire** button appears in the status card. There are two possible states:

- **Rehire enabled (clickable)** — The employee's End of Service has **not** been processed. You can proceed with rehiring.
- **Rehire disabled (greyed out)** — A purple **Review Final Settlement** button appears above the Rehire button. Hovering over the disabled button shows: *"You can not rehire an employee if their end of service has been processed. Please contact support@bayzat.com for further assistance."*

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/kalinga-eos-blocked-rehire.png" class="screenshot" loading="lazy" alt="kalinga-eos-blocked-rehire.png" />
<figcaption>Inactive employee with processed EOS: Rehire button is disabled, "Review Final Settlement" button appears</figcaption>
</figure>

**Step 4: Confirm rehire.** If the Rehire button is enabled, click it. A confirmation dialog asks: *"Are you sure you want to rehire [Employee Name]?"* Click **Rehire** to confirm. The employee's status changes to **Active** and the Rehire button is replaced with an **Offboard** button.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/rehire-confirmation-dialog.png" class="screenshot" loading="lazy" alt="rehire-confirmation-dialog.png" />
<figcaption>Rehire confirmation dialog</figcaption>
</figure>

<div class="warning-box">

**EOS Restriction:** You **cannot** rehire an employee if their End of Service has been processed. When EOS has been processed, the status card shows a purple **Review Final Settlement** button linking to the EOS Entitlement page with the full settlement breakdown. To rehire an employee with a processed EOS, contact **support@bayzat.com** for assistance.

</div>

<div class="info-box">

**After Rehiring:** Review and reassign the employee's roles in **Settings > Role Management**. Previous role assignments may no longer be active and should be reconfigured based on the employee's new responsibilities.

</div>

</div>

<div class="subsection">

### Deleting an Employee

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/36-delete-confirmation-dialog.png" class="screenshot" loading="lazy" alt="36-delete-confirmation-dialog.png" />
<figcaption>Delete confirmation dialog warning about permanent data removal</figcaption>
</figure>

To permanently delete an employee, select the checkbox next to their name in the All Employees list and click **Delete Selected**. The system displays a confirmation dialog titled "Are you sure you want to delete \[N\] employee" with the message "All related information and documents will be lost!" and a note about contacting support to cancel insurance plans. Click **Delete** to confirm or **Cancel** to abort.

<div class="warning-box">

**Caution:** The deletion dialog does not list the specific data that will be removed (documents, insurance plans, payroll records, dependants). Manually review the employee's profile tabs before confirming deletion. There is no archive or soft-delete option — deletion is permanent and irreversible. The system also does not prevent admins from deleting their own account.

</div>

</div>

<div class="subsection">

### End of Service Settlement

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/29-end-of-service-calculator.png" class="screenshot" loading="lazy" alt="29-end-of-service-calculator.png" />
<figcaption>End of Service settlement calculator with gratuity breakdown and deductions</figcaption>
</figure>

To process an end of service settlement, navigate to **Employee Profile > Payroll > EOS Entitlement**. The EOS page contains two sections:

**Section 1: Service Information**
- **Hire Date** and **Departure Date** — Used to calculate total service duration
- **Basic Salary for departure month** — The base salary used for gratuity calculation
- **Total Service Duration** — Automatically calculated (e.g., "11 years 1 months 25 days")
- **Reason for departure** — Dropdown matching the offboarding reason (Resignation with notice, Termination, End of contract, etc.)
- **Contract Type** — Select Unlimited or Limited, which affects the gratuity formula

**Section 2: Final Settlement Amount**
The system auto-calculates the settlement based on UAE labour law (MOHRE):

- **Additions:** Gratuity (calculated per MOHRE formula excluding unpaid leave days), pro-rated monthly pay for the departure month, and any outstanding salary arrears
- **Deductions:** EOS deductions and any outstanding amounts owed
- **Total Amount:** The net final settlement in AED

Click **Submit** to process the settlement. Once processed, the EOS Entitlement tab displays a **"Processed"** badge, and a banner shows the off-boarding date and the date/administrator who processed the settlement. A **Print Final Settlement** button is available for generating a printable record.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/eos-final-settlement-top.png" class="screenshot" loading="lazy" alt="eos-final-settlement-top.png" />
<figcaption>Processed EOS showing service information and final settlement breakdown</figcaption>
</figure>

<div class="warning-box">

**Important:** EOS can only be submitted when the departure date is in the past or current month. Once EOS is processed, the employee **cannot be rehired** through the standard Rehire button — contact support@bayzat.com for assistance. The employee's Work tab will show a purple **Review Final Settlement** button instead of an active Rehire button.

</div>

</div>

</div>

</div>

<div id="employee-documents" class="section section section-employee-documents">

<div class="section-header">

## Employee Documents

</div>

<div class="section-body">

<div class="subsection">

### Overview

Employee Documents is a centralized system for managing identity and work documents tied to individual employee profiles. It handles document uploads, expiry tracking, and automated compliance reminders for documents like Passports, Emirates IDs, Residency Visas, and Work Permits. The system also stores dependants' documents, which employees can manage from their own profile under **My Profile → Documents**. Employees can also view their insurance cards from the same section. Access the admin view via **Company → Employee documents** in the sidebar, or through a specific employee's **Profile → Documents** tab.

</div>

<div class="subsection">

### Document Dashboard and Actions

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/26-employee-documents-page.png" class="screenshot" loading="lazy" alt="26-employee-documents-page.png" />
<figcaption>Employee Documents dashboard showing expiry tracking, uploaded/missing tabs, and documents table</figcaption>
</figure>

The dashboard provides an overview of document status across all employees, showing documents expiring in the coming months, recently expired documents, drafts awaiting processing, and employees missing mandatory document types. The main table lists all documents with their owner, type, expiry date, and last updated date, and can be filtered between Uploaded and Missing views.

Each document in the list has a **View** button to open the document viewer and an **Actions** menu with options to **Replace file**, **Edit** document details (such as type, title, expiry date, and type-specific fields like passport or Emirates ID number), or **Delete** the document. Insurance-linked documents such as Insurance Card Front/Back are view-only and cannot be edited or deleted.

</div>

<div class="subsection">

### Dependants' Documents

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/106-dependants-documents-tab.png" class="screenshot" loading="lazy" alt="106-dependants-documents-tab.png" />
<figcaption>Dependents tab showing each dependant's documents with upload, view, edit, and delete actions</figcaption>
</figure>

Each employee's **Dependents** tab displays their dependants along with a documents section for each one. Admins and employees can upload, view, edit, replace, and delete dependant documents such as Passports, Emirates IDs, and Residency Visas directly from this tab.

</div>

<div class="subsection">

### Uploading and Processing Documents

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/28-upload-documents-page.png" class="screenshot" loading="lazy" alt="28-upload-documents-page.png" />
<figcaption>Drag-and-drop upload interface for employee documents</figcaption>
</figure>

To upload documents, navigate to **Documents → Upload new** and drag files to the dropzone or click to browse. The system accepts image and PDF formats only, with a maximum of 20 documents per batch and 5 MB per file. For Excel or Word files, use [Company Documents](#company-documents) instead.

After upload, documents appear as drafts. Click **Complete drafts** to process them by verifying the auto-detected document type, entering the expiry date if applicable, assigning the document to an employee, and saving. The OCR system may occasionally misclassify document types, so always verify before saving.

</div>

<div class="subsection">

### Configuring Document Types and Expiry Reminders

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/105-settings-employee-document-types.png" class="screenshot" loading="lazy" alt="105-settings-employee-document-types.png" />
<figcaption>Employee Document Types configuration with Mandatory Type and Expiry Reminders columns</figcaption>
</figure>

This section is accessible to admin roles only and is not available to employees. Navigate to **Settings → Company → Employee Document Types** to manage document types. The system includes default types such as Passport, Emirates ID, Residency Visa, Work Permit, and others. You can add custom document types, mark them as mandatory (so they appear in Missing Documents filters), and enable expiry date tracking.

For documents with expiry tracking enabled, you can configure automated email reminders that are sent to the Super Admin, People Manager, and the employee a specified number of months before the document expires. Default document types like Passport, Residency Visa, and Emirates ID are preconfigured with reminders set to 7 months before expiry. Custom types can be configured with reminders from 1 to 12 months in advance. Default document types cannot be deleted, but custom types can.

</div>

</div>

</div>

<div id="company-documents" class="section section section-company-documents">

<div class="section-header">

## Company Documents

</div>

<div class="section-body">

<div class="subsection">

### Overview

Company Documents is a centralized repository for managing your organization's legal, regulatory, and operational documents such as Trade Licenses, Establishment Cards, VAT Certificates, and Ministry of Labor Lists. Unlike Employee Documents which are tied to individual profiles, Company Documents stores company-level records. This section is accessible to admin roles only and is not available to employees. Access it via **Company → Company documents** in the sidebar.

</div>

<div class="subsection">

### Managing Company Documents

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/87-company-documents-general.png" class="screenshot" loading="lazy" alt="Company Documents General tab" />
<figcaption>Company Documents General tab showing Missing Documents section and Uploaded Documents table</figcaption>
</figure>

The Company Documents page has two tabs. The **General** tab lists the default documents required for regulatory compliance, such as **Trade License**, **Establishment Card**, **Commercial Registration**, **Ministry of Labor List**, and **VAT Certificate**. These are marked as **Mandatory**, and only mandatory documents can appear in the **Missing Documents** section at the top of the page, which provides a quick upload option for any that have not yet been uploaded. Companies can also upload additional non-mandatory documents such as NOC Letters or other custom documents. The table lists all uploaded documents with their type, title, description, added date, expiry date, and available actions.

The **Additional Data** tab allows you to manage custom company-level data fields beyond the standard documents. These are additional data points that a company may want to track, such as Establishment ID, Trade License numbers, or any other custom fields specific to the organisation.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/90-company-document-detail-view.png" class="screenshot" loading="lazy" alt="Company Document detail side panel" />
<figcaption>Establishment Card detail panel showing document preview, metadata fields, and action buttons</figcaption>
</figure>

Each document can be viewed by clicking the eye icon, which opens a detail panel showing a file preview, metadata, and a download link. From there you can **Edit** the document details (title, description, expiry date, and type-specific fields) or use the actions menu to **Replace file** or **Delete** the document. The document type cannot be changed after upload.

To upload new documents, click **Upload document** and drag files to the dropzone or browse your computer. Company Documents accepts images, PDFs, as well as Excel and Word files, with a maximum file size of 5 MB.

</div>

<div class="subsection">

### Configuring Company Document Types

Navigate to **Settings → Company → Company Document Types** to manage document types. The system includes default mandatory types such as VAT Certificate, Trade License, Establishment Card, and Ministry of Labor List, which cannot be deleted or renamed. You can create custom document types by clicking **Add new** and setting the name and mandatory status. Custom types can be edited or deleted, though deletion is blocked if documents of that type already exist.

</div>

</div>

</div>

<div id="knowledge-hub" class="section section section-knowledge-hub">

<div class="section-header">

## Knowledge Hub

</div>

<div class="section-body">

<div class="subsection">

### Overview

Knowledge Hub is a collaborative document management and knowledge sharing platform within Bayzat. It allows teams to create organized **Spaces** for storing, sharing, and collaborating on documents, pages, and files with **permission-controlled access**. With **Bayzat AI** built in, employees can get instant answers to company policy questions without contacting HR — reducing admin workload and empowering self-service across the organization.

Access Knowledge Hub from the sidebar: **Company → Knowledge Hub**.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/97-knowledge-hub-overview.png" class="screenshot" loading="lazy" alt="97-knowledge-hub-overview.png" />
<figcaption>Knowledge Hub overview showing favourite spaces, recent files, and activity feed</figcaption>
</figure>

</div>

<div class="subsection">

### Key Features and Usage

Content in Knowledge Hub is organised into **Spaces**, which are permission-controlled containers for folders, pages, and files. Each space can be set to Private or Editor access to ensure the right people see the right documents. Admins can create spaces and allow other colleagues to do the same. The **Overview Dashboard** displays your favourite spaces and folders, recent files, and an activity feed that can be filtered by All, Your favourites, Edited, Uploaded, or Created.

**Bayzat AI** is an AI-powered assistant built into Knowledge Hub that provides instant answers to company policy questions. Employees can ask about leave policies, benefits, procedures, and more without contacting HR, reducing repetitive admin inquiries through self-service. The **Shared with Me** tab provides quick access to all content shared by other team members, and the **Search** bar lets you find folders, pages, or files by name across all accessible spaces. Deleted items can be recovered from the **Trash** tab before permanent removal.

To create new content, click the **Create** button to add spaces, folders, pages, or upload files. You can mark frequently used spaces and folders as favourites for quick access from the Overview dashboard.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/116-knowledge-hub-create-dropdown.png" class="screenshot" loading="lazy" alt="Knowledge Hub Create dropdown" />
<figcaption>Knowledge Hub Overview with Create dropdown showing options to add new spaces and pages</figcaption>
</figure>

</div>

</div>

</div>

<div id="company-assets" class="section section section-company-assets">

<div class="section-header">

## Company Assets

</div>

<div class="section-body">

<div class="subsection">

### Overview

Company Assets is a centralized inventory management system for tracking physical assets owned by your organization such as laptops, phones, vehicles, and other equipment. Access it via **Company → Company assets** in the sidebar. The dashboard displays summary metrics for total assets, assigned assets, available assets, and assets in repair.

</div>

<div class="subsection">

### Dashboard and Views

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/92-company-assets-card-view.png" class="screenshot" loading="lazy" alt="Company Assets card view with dashboard metrics" />
<figcaption>Company Assets dashboard showing summary metrics and asset type cards in card view</figcaption>
</figure>

The default **Card View** groups assets by type, showing total, assigned, and available counts for each category. The **List View** displays all assets in a detailed table with columns for serial number, type, make, model, availability, status, assigned employee, creation date, purchase date, and office. You can search by asset type, make, model, serial number, or employee name, and use filters to narrow down results.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/93-company-assets-list-view.png" class="screenshot" loading="lazy" alt="Company Assets list view" />
<figcaption>List view showing all assets in a detailed table with serial numbers, types, makes, models, and assignment status</figcaption>
</figure>

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/96-company-assets-requests.png" class="screenshot" loading="lazy" alt="Company Assets requests tab" />
<figcaption>Requests tab showing employee asset requests with Pending, Approved, Rejected, and Assigned sub-tabs</figcaption>
</figure>

The **Requests** tab manages employee asset requests, organised by status: Pending, Approved, Rejected, and Assigned.

</div>

<div class="subsection">

### Adding and Managing Assets

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/95-company-assets-add-new.png" class="screenshot" loading="lazy" alt="Add New Asset dialog" />
<figcaption>Add New Asset form with Asset Overview and Asset Insurance sections</figcaption>
</figure>

Click **Add New Asset** to register a new asset. The required fields are Type, Make, Model, and Status (Working, Damaged, or In Repair). You can also enter optional details such as serial number, supplier, purchase price, purchase date, office, location, and insurance information (provider, policy number, expiry date). The Add New Asset button also has a dropdown for bulk import options.

To edit an existing asset, open its detail panel by clicking the serial number in list view or **View Details** in card view, then click **Edit Asset**. To export all assets, click the **Export Assets** button at the top right.

</div>

<div class="subsection">

### Asset Details and Assignment

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/94-company-asset-detail-view.png" class="screenshot" loading="lazy" alt="Asset detail panel" />
<figcaption>Asset detail panel showing overview, insurance, assignment status, and history tabs</figcaption>
</figure>

The asset detail panel shows the full asset overview, insurance details, current assignment status, any custom additional data fields, and history tabs for both activity history and assignment history. You can navigate between assets using the Previous/Next buttons without returning to the list.

To assign an asset, click the **Assign** button in the detail panel and select the employee. Only assets with **Working** status can be assigned; assets marked as Damaged or In Repair cannot be assigned until their status is updated. When an assigned employee is deleted from the system, the asset is automatically unassigned.

</div>

<div class="subsection">

### Employee Assets and Requesting

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/108-employee-assets-request.png" class="screenshot" loading="lazy" alt="108-employee-assets-request.png" />
<figcaption>Employee profile Assets tab showing current assets, Request asset and Assign asset buttons, and assignment history</figcaption>
</figure>

Assigned assets appear on the employee's profile under the **Assets** tab. This tab shows all currently assigned assets with their serial number, type, and assignment date, along with a full assignment history table. Employees can request new assets by clicking **Request asset**, which submits a request for admin review. Admins can also assign assets directly from this tab using the **Assign asset** button. Asset requests can be tracked from the **Request history** sub-tab, and admins manage all incoming requests from the **Requests** tab on the main Company Assets page.

</div>

</div>

</div>

<div id="automations-workflows" class="section section section-automations-workflows">

<div class="section-header">

## Automations & Workflows

</div>

<div class="section-body">

<div class="subsection">

### Overview

Bayzat includes a built-in workflow automation engine that allows you to automate repetitive tasks related to employee records management. Access it via **Automations → Workflows** in the sidebar. The workflows dashboard shows summary metrics for active workflows, total executions, and failed executions over the last 7 days. You can filter workflows by status, event type, application, and tags.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/115-workflows-listing-page.png" class="screenshot" loading="lazy" alt="115-workflows-listing-page.png" />
<figcaption>Workflows dashboard showing active workflows with their triggers, actions, and execution history</figcaption>
</figure>

</div>

<div class="subsection">

### Creating a Workflow

Click **Create new workflow** and select **Create from scratch** to build a custom workflow, or **Create using template** to start from a pre-built template. Each workflow follows a three-part structure: an **Event** that triggers the workflow, optional **Criteria** to filter when the workflow should run, and one or more **Actions** to perform when the conditions are met. You can also manage tags and custom variables for your workflows.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/114-workflow-builder-with-event.png" class="screenshot" loading="lazy" alt="114-workflow-builder-with-event.png" />
<figcaption>Workflow builder showing the Event, Criteria, and Actions structure</figcaption>
</figure>

</div>

<div class="subsection">

### Records Management Events

The **Bayzat HR** application provides 20 event triggers relevant to employee and company records. Employee lifecycle events include **Employee is created**, **Employee is updated**, **Employee is deleted**, **Employee is offboarded**, **Employee offboarding process is initiated**, and **Employee is registered**. Date-based triggers fire automatically on key milestones such as **Employee hire date**, **Employee work anniversary**, **Employee probation end date**, and **Employee birth date**. Additional triggers cover changes to company offices, holiday calendars, work weeks, and employee office assignments.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/110-workflow-bayzat-hr-events.png" class="screenshot" loading="lazy" alt="110-workflow-bayzat-hr-events.png" />
<figcaption>Bayzat HR event triggers available for workflow automation</figcaption>
</figure>

Beyond Bayzat HR, you can also trigger workflows from other applications including **Bayzat Employee Ticket** (ticket status changes), **Bayzat Knowledge Hub** (folder and content updates), **Bayzat Custom Fields** (custom field changes), and **Incoming Integration** (external webhooks).

</div>

<div class="subsection">

### Available Actions

When a workflow is triggered, you can configure one or more actions from a range of applications. The **Bayzat HR** actions directly related to records management include **Create employee**, **Update employee**, **Invite employee**, **Offboard employee**, **Create emergency contact**, **Set first emergency contact**, **Unassign an asset from employee**, and **Unassign all assets from employee**.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/records-management/v1/validation/screenshots/113-workflow-bayzat-hr-actions.png" class="screenshot" loading="lazy" alt="113-workflow-bayzat-hr-actions.png" />
<figcaption>Bayzat HR actions available for workflow automation</figcaption>
</figure>

You can also combine HR triggers with actions from other apps such as **Email** (send notifications), **Bayzat Task Management** (create confirmation tasks), **Mobile Notification** (push alerts), **Google Sheets** (add data rows), **Google Calendar** (create events), **Slack** (send messages), and **Outgoing Integration** (call external webhooks). This allows you to build end-to-end automations such as sending a welcome email when an employee is created, creating onboarding tasks when a new hire registers, or notifying managers when an employee is offboarded.

</div>

</div>

</div>

<div id="business-rules-limitations" class="section section section-business-rules-limitations">

<div class="section-header">

## Business Rules & Limitations

</div>

<div class="section-body">

<div class="subsection">

### Business Rules

#### Employee Records

- **Legal Names Required:** Use legal names as they appear in official documents.
- **Work Email Mandatory:** Valid work email required for platform access. Personal email can be used if official email is unavailable.
- **Prefer Offboarding Over Deletion:** Mark employees as inactive with a departure date and reason rather than deleting, to preserve history.
- **Hire Date Changes:** Changing an employee's hire date affects leave balances, time-off requests, and payroll calculations. Double-check these after any change.
- **Work Email Locked After Registration:** Once an employee has registered on Bayzat, their work email cannot be edited. Contact Customer Support to change it.
- **Contract Type Location:** The contract type (limited or unlimited) can only be found in the Gratuity calculator tab, not on the main Work profile page.

#### Documents

- **File Size:** Maximum 5MB per upload. Larger files show a "Document is invalid" error.
- **Accepted Formats:** gif, bmp, heic, jpeg, jpg, jp2, svg, tiff, tif, webp, png, pdf.
- **Bulk Upload:** Maximum 20 documents per batch.
- **Document Type Names:** Must be 2–70 characters. Supports Arabic.
- **Expiry Reminders:** Can be set 1–12 months before expiry. Default is 7 months for Passport, Residency Visa, and Emirates ID.
- **"Others" Document Type:** Expiry date toggle is locked on, but entering an expiry date is optional. Cannot be made mandatory.

#### End of Service

- **Gratuity:** Calculated per UAE labor law. Employees paid in non-AED currencies show 0 gratuity.
- **Contract Types:** Limited and unlimited contracts are handled differently for gratuity eligibility.
- **Departure Date:** EOS can only be submitted when the departure date is in the current or a past month.
- **Salary Locked:** Salary is not editable once a departure date is set.
- **Rehire:** The Rehire button is only available if EOS has not been submitted. Once processed, the employee cannot be rehired through the standard flow.

#### Excel Import/Export

- **Hidden Columns:** Excel imports fail when rows contain hidden ID columns. Always unhide all columns before copying data between sheets.
- **Type Column:** Cannot change "employee or dependant" column for existing records during import.
- **Country Validation:** System validates residency visa location against country of residence. UAE-specific fields only appear when Legal Country of Residence is UAE.
- **Excel Export:** Downloading the employee list as Excel may occasionally fail. Try again later or contact support.

</div>

<div class="subsection">

### Known Limitations (Validated)

The following issues have been confirmed through live testing of the Bayzat platform.

| Issue | What Happens | What To Do |
|----|----|----|
| Bulk Invite Shows False Success | Individual "Send Invite" buttons are correctly disabled for employees without email. However, **Bulk actions → Invite** sends requests for all employees regardless and shows a false "invites sent successfully" message even though all requests fail. | Always check that employees have email addresses before using bulk invite. Verify on the Invitations page that invitations were actually sent. |
| Generic Deletion Warning | The deletion confirmation always shows "All related information and documents will be lost!" regardless of how much data exists. It does not list affected documents, insurance plans, or payroll records. There is no archive option and no protection against admins deleting themselves. | Review the employee's profile tabs before confirming deletion. Prefer offboarding to preserve records. Refresh the page after deletion as the row may still show until you do. |
| Hire Date Hidden Warning | The Hiring Date field on the Work edit form has a hidden warning ("Hire date can not be changed due to selected individual leave cycle type") that does not appear on screen. The field is fully editable and saves successfully despite the warning. | Ignore the hidden warning. The field works normally. Be aware that changing hire date affects leave balances and payroll. |
| OCR Document Processing | The OCR system may misclassify document types (e.g., labelling a passport as "Back of Emirates ID") and fail to extract data. | Always verify the document type after uploading. Manually enter document details if OCR does not fill them in. |
| No "Missing Documents" Filter | The employee list filter only has "Profile Completion: Complete/Incomplete". There is no filter for employees missing specific documents. | Use the Employee Documents page to check for missing documents across all employees. |
| Settings Hidden on Smaller Screens | At 1280x800 resolution, the "Settings" item at the bottom of the sidebar is not visible without scrolling. | Scroll down in the sidebar, or use a larger screen. |
| Deleting Linked Employees | Deleting an employee may fail if they are set as someone else's reporting manager. Deleting an employee and their manager at the same time may also cause errors. | Remove the reporting relationship first, then delete. Always delete one at a time. |
| Offboarded Employees in Mentions | You can still tag offboarded employees in leave request and attendance comments. The system does not filter them out. | Verify employee status before mentioning them in comments. |

</div>

</div>

</div>

<div id="troubleshooting-edge-cases" class="section section section-troubleshooting-edge-cases">

<div class="section-header">

## Troubleshooting & Edge Cases

</div>

<div class="section-body">

<div class="subsection">

### Common Issues & Solutions

| Problem | Solution |
|----|----|
| Excel import fails with "Invalid residency visa location" error | Correct residency visa location values in your spreadsheet. Remove UAE-specific data for employees whose country of residence is not UAE. |
| Document upload shows "Document is invalid" error | The file is likely over 5MB. Compress it or split into smaller files. |
| Insurance Card documents have no Edit button | Insurance-linked documents are view-only. Contact your insurance administrator to make changes. Regular documents can be edited directly. |
| Work email field is greyed out | Email is locked after an employee registers on Bayzat. Contact Customer Support via chat to change it. |
| Employee still shows in the list after deletion | Refresh the page. The list does not update automatically after a deletion. |
| Offboarding dialog mentions insurance cancellation | This note appears for all employees, even those without active insurance. Check their insurance status manually before offboarding. |
| Admins can delete their own account | There is no warning preventing this. Be careful not to select yourself when bulk-deleting employees. |

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

Can I bulk import employee records via Excel?

Yes, use Add Employee \> Excel bulk import. Download the template, fill employee data, and upload. The system validates data on import and reports errors (e.g., invalid residency visa location when country is not UAE). Pre-existing data inconsistencies may block re-import.

Why can't I change an employee's work email after they've registered?

Once an employee registers on Bayzat, the work email field is locked to prevent account conflicts. Contact Customer Support via the chat feature to request email changes for registered users.

What happens when I delete an employee profile?

Deletion is permanent and removes all related information including documents, insurance plans, and payroll records. The system shows a generic confirmation dialog regardless of how much data exists. Consider using offboarding instead to preserve records while removing access.

Why doesn't OCR extract data from my uploaded documents?

OCR may misclassify document types (e.g., passport detected as Emirates ID) and fail to extract data. Manually select the correct document type from the dropdown and enter data in the Fill details form. OCR works best with clear, high-resolution images of supported document types.

Can I edit insurance-linked documents?

No. Documents linked to insurance policies (Insurance Card Front/Back) are view-only with no Edit or Actions buttons. Regular employee documents (Passport, Other) have full Edit and Actions options.

Why does the bulk invite show success but invitations are not sent?

The Bulk actions → Invite feature does not verify whether employees have valid email addresses before sending. The API rejects each request with an HTTP 422 error, but the UI displays a false success toast. Individual Send Invite buttons are correctly disabled for employees without email. Always verify email addresses are on file before using bulk invite, and check the Invitations page to confirm delivery.

Can I change an employee's hire date after it's set?

Yes. The Hiring Date field in the Work edit form is fully editable. Note: the form contains an invisible accessibility warning (`aria-label`) stating "Hire date can not be changed due to selected individual leave cycle type" — but no visual tooltip appears and the field is not restricted in any way. Changes save successfully. Be aware that modifying hire date may affect leave balances, time-off requests, and payroll calculations across modules.

How do I handle document expiry reminders?

Configure expiry reminders (1-12 months before expiry) in Settings \> Company \> Employee Document Types. The system sends automated email reminders to Super Admins, People Managers, and document owners. Default reminder is 7 months for Passport, Residency Visa, and Emirates ID.

What if I need to delete an employee and their manager at the same time?

The system cannot process concurrent deletions of employees with reporting relationships due to transaction conflicts. Delete the reporting employee first, then delete the manager, or remove the reporting relationship before deletion.

Why can't I see all employees with missing documents when I filter?

The "Missing information" filter only shows employees with incomplete profiles (isCompleted=false), not all employees missing specific document types. Use the Employee Documents page to view missing documents across all employees.

Can employees with inactive status be mentioned in comments?

Currently yes, but this creates confusion. The system does not restrict mentions of offboarded or inactive employees in leave requests or attendance comments. Verify employee status before mentioning them.

Why does the employee list export show incorrect date formats?

Regional settings (e.g., Turkish locale) may cause date formatting issues in Excel exports. The platform has localization constraints that affect date rendering in some regional configurations.

</div>

</div>

<div class="subsection">

### Getting Help

- **Customer Support:** Use the chat feature in the platform to contact support for email changes, data import issues, or technical assistance
- **Document Management:** Access Settings \> Company \> Employee Document Types to configure document types and expiry reminders
- **Invitations:** Navigate to Company \> Invitations to resend, delete, or search pending employee invites
- **Offboarding:** Use the Offboard button on the Work tab instead of deletion to preserve employee records while removing access

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
| **Active Employee** | An employee with current employment status who has access to the platform and appears in default filtered views. |
| **Approval Flow** | A configurable workflow that routes employee requests (leave, expenses, documents) through designated approvers before final processing. |
| **Bulk Import** | The process of uploading multiple employee records simultaneously via Excel template to populate or update the employee database. |
| **Custom Document Type** | User-defined document categories beyond default types (Passport, Emirates ID, Visa) that can be configured with mandatory status and expiry tracking. |
| **Document Expiry Reminder** | Automated email notifications sent to stakeholders (1-12 months before document expiration) to prompt renewal actions. |
| **Draft Document** | An uploaded document that has not yet been assigned to an employee or completed with required metadata (owner, type, expiry date). |
| **Employee Profile Completion** | A percentage indicator showing how much of an employee's required information (personal, work, documents, dependents) has been filled in. |
| **End of Service (EOS)** | The final settlement calculation for departing employees including gratuity, leave encashment, prorated salary, and deductions. |
| **Inactive Employee** | An offboarded employee with a departure date and reason who no longer has platform access but whose records are retained for historical purposes. |
| **Invitation Status** | The state of an employee's platform registration invite (pending, accepted, expired) tracked in the Invitations page. |
| **Mandatory Document** | A document type marked as required during configuration that must be uploaded for employee profile completion. |
| **OCR (Optical Character Recognition)** | Technology that automatically extracts text data from uploaded document images to populate form fields (passport numbers, names, dates). |
| **Offboarding** | The process of marking an employee as inactive with a departure date and reason while preserving their records, as opposed to permanent deletion. |
| **Organization Chart** | A hierarchical visual representation of company structure showing reporting relationships, departments, and employee positions. |
| **Primary Document** | The main version of a document when multiple copies exist, used for tracking expiry and compliance in reports. |
| **Profile Completion Filter** | A search filter that identifies employees with incomplete profiles based on missing information categories (email, personal info, documents, dependents). |
| **Rehire** | The action of reactivating an inactive employee's profile to restore their active status and platform access. |
| **Reporting Manager** | The employee designated as another employee's direct supervisor, used for approval flows and organizational hierarchy. |
| **Trade License** | A company's legal business registration document required for payroll processing and stored in Company Documents. |
| **Work Email** | The official company email address assigned to an employee, required for platform invitations and locked after registration. |
| **Workflow** | An automated business process triggered by specific events (document upload, status change) that executes predefined actions. |

</div>

</div>

</div>
