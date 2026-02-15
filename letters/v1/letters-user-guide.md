<div class="hero-banner">

# Letter Requests

Streamline official document requests with automated approval workflows and digital signatures

</div>

<figure>
<img src="validation/screenshots/04-letters-main-page.png" alt="Letters interface showing pending letter requests queue" />
<figcaption>Letters management interface in Bayzat HR</figcaption>
</figure>

<div class="nav-header">

<span class="nav-icon">🧭</span> <span class="nav-title">Quick Navigation</span>

</div>

<div class="nav-grid">

<a href="#overview" class="nav-card"><span class="card-icon">✨</span><span class="card-label">Overview</span></a> <a href="#product-foundation" class="nav-card"><span class="card-icon">🏗️</span><span class="card-label">Product Foundation</span></a> <a href="#setup-process" class="nav-card"><span class="card-icon">⚙️</span><span class="card-label">Setup Process</span></a> <a href="#employee-self-service" class="nav-card"><span class="card-icon">👤</span><span class="card-label">Employee Self-Service</span></a> <a href="#admin-tasks" class="nav-card"><span class="card-icon">👔</span><span class="card-label">Admin Tasks</span></a> <a href="#approval-process" class="nav-card"><span class="card-icon">✅</span><span class="card-label">Approval Process</span></a> <a href="#workflow-integration" class="nav-card"><span class="card-icon">🔗</span><span class="card-label">Workflow Integration</span></a> <a href="#business-rules" class="nav-card"><span class="card-icon">⚖️</span><span class="card-label">Business Rules</span></a> <a href="#troubleshooting" class="nav-card"><span class="card-icon">🔧</span><span class="card-label">Troubleshooting</span></a> <a href="#support" class="nav-card"><span class="card-icon">💬</span><span class="card-label">Support</span></a> <a href="#glossary" class="nav-card"><span class="card-icon">📖</span><span class="card-label">Glossary</span></a>

</div>

<div id="overview" class="section">

## What is Letter Requests?

### Overview

The Letter Requests module is a comprehensive document request and generation system that enables employees to request official company letters through self-service. The system supports customizable letter templates with 80+ dynamic variables, multi-stage approval workflows, and embedded digital signatures for seamless document generation.

### Key Benefits

- Self-service letter requests accessible from web and mobile apps
- Customizable templates with 80+ dynamic variables that auto-populate employee data
- Two-stage approval workflow with designated approvers and authorized signatories
- Digital signature embedding directly into generated PDFs without physical signing
- Real-time status tracking across Pending Review, Pending Signature, Approved, and Rejected statuses

### Who Uses This Feature?

| User Role | What They Do | Value Proposition |
|----|----|----|
| **Employees** | Request official company letters through self-service portal and track request status | Get official letters in days instead of weeks—submitting requests anytime without waiting for HR availability or chasing approvals manually |
| **HR Administrators** | Create letter templates, configure approval workflows, and manage letter requests | Generate professional letters automatically with accurate employee data—eliminating copy-paste errors and inconsistent formatting |
| **Approvers** | Review and approve letter requests from employees | Review requests with full employee context and approve in one click—rather than handling requests via email or paper forms |
| **Authorized Signatories** | Digitally sign approved letters to finalize them for distribution | Sign letters digitally from anywhere—eliminating physical signature bottlenecks and enabling faster document turnaround |

</div>

<div id="product-foundation" class="section section section-product-foundation">

<div class="section-header">

## Product Foundation Overview

</div>

<div class="section-body">

<div class="subsection">

### How Letters Fits

Letters is a **document request and generation system** that enables employees to request official company letters through self-service. HR creates customizable templates with dynamic variables, and the system routes requests through approval workflows with digital signature support.

<div class="info-box">

**Mental model:** Employee submits request → Selects template → Approver reviews → Authorized signatory signs digitally → PDF generated → Employee downloads letter.

</div>

Properly configured letter templates eliminate manual document creation and ensure consistent, professional output.

</div>

<div class="subsection">

### Key Decisions Before Setup

Answer these questions before configuring letters:

- **What letter types do employees need?** — Common types include Salary Certificate, Employment Verification, and Bank Letters
- **What dynamic variables should templates include?** — 80+ variables available for employee data, salary, dates, etc.
- **Who approves letter requests?** — Define approvers (Line Manager, HR) and signatories
- **How will signatures be handled?** — Upload digital signatures for authorized signatories

</div>

<div class="subsection">

### Related Features

- **Employee Profiles** — Source for dynamic variables in letter templates
- **Payroll Module** — Provides salary data for salary certificates
- **Approval Flows** — Routes letter requests through configured approvers
- **Notifications** — Alerts employees and approvers about request status

</div>

<div class="subsection">

### Prerequisites & Requirements

| Requirement | Description | Status |
|----|----|----|
| Letter Templates | At least one letter template must be created by HR | Required |
| Employee Profiles | Complete employee data for dynamic variable population | Required |
| Approver Roles | Approvers and signatories must be assigned | Required |
| Digital Signatures | Upload signature images for authorized signatories | Recommended |

</div>

</div>

</div>

<div id="navigation" class="section">

## How to Access Letter Requests

Letter Requests can be accessed through three different paths depending on your role and device:

<div class="feature-grid">

<div class="feature-card">

#### 👤 Employee View

Submit and track your own letter requests

<div class="nav-path" style="margin-top: 12px; font-size: 0.85rem;">

Requests → My requests → My letters

</div>

</div>

<div class="feature-card">

#### 🔧 Admin View

Review, approve, and manage all employee requests

<div class="nav-path" style="margin-top: 12px; font-size: 0.85rem;">

Requests → Letters

</div>

</div>

<div class="feature-card">

#### 📱 Mobile App

Submit requests on-the-go from Bayzat app

<div class="nav-path" style="margin-top: 12px; font-size: 0.85rem;">

Work tab → Letter Requests

</div>

</div>

</div>

### Admin View: Managing All Letter Requests

HR administrators and approvers access the full letter requests queue to review, approve, or reject requests from all employees:

<div class="nav-path">

Requests → Letters

</div>

<figure>
<img src="validation/screenshots/04-letters-main-page.png" alt="Letters main page showing pending requests" />
<figcaption>Admin view: Letters main page displaying pending letter requests with filters and action options</figcaption>
</figure>

### Employee View: My Letter Requests

Employees access their personal letter requests through the self-service portal:

<div class="nav-path">

Requests → My requests → My letters

</div>

<figure>
<img src="screenshots/letters-step1-requests-menu.png" alt="Requests menu showing My letters navigation" />
<figcaption>Step 1: Click Requests in the sidebar, then select "My letters" under My requests</figcaption>
</figure>

<figure>
<img src="screenshots/letters-step2-my-letters-page.png" alt="Employee My letter requests page" />
<figcaption>Step 2: My letter requests page showing Pending, Approved, and Rejected tabs</figcaption>
</figure>

### Mobile View: Bayzat App

Employees can access letter requests from the Bayzat mobile app in three ways:

- **Side Menu:** Work tab → Letter Requests
- **Home Screen:** Tap "Request a letter" shortcut widget
- **Work Tab:** Tap "Request a letter" shortcut widget or select from options list

<div class="info-box">

**Note:** The mobile app provides the same functionality as the web version. Employees can submit requests, track status, download approved letters, and share via email directly from their phone. Approvers and authorized signatories can also review and sign letters from the mobile app.

</div>

</div>

<div id="user-journey" class="section">

## User Journey

The typical workflow for creating and processing a letter request:

<div class="journey-roadmap">

<div class="journey-phases">

<div class="journey-phase">

<div class="phase-marker">

1

</div>

<div class="phase-content">

#### Submit Request

Requests → Letters → Create Letter Request

Employee or HR creates a letter request by selecting a template and specifying the recipient

<a href="#create-letter" class="phase-link">Learn more →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

2

</div>

<div class="phase-content">

#### Approver Review

Requests → Letters → Pending tab

Designated approver reviews the request details and either approves or rejects

<a href="#approval-process" class="phase-link">Learn more →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

3

</div>

<div class="phase-content">

#### Signatory Signs

Requests → Letters → View Letter

Authorized signatory reviews and digitally signs the approved letter

<a href="#authorized-signatures" class="phase-link">Learn more →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

4

</div>

<div class="phase-content">

#### Download PDF

Requests → Letters → Approved tab

Signed letter is ready for download from the Approved tab

<a href="#status-tabs" class="phase-link">Learn more →</a>

</div>

</div>

</div>

</div>

</div>

<div id="setup-process" class="section">

## Setup Process

Before employees can request letters, HR administrators must configure letter templates and authorized signatories. Follow these steps to set up the Letters feature.

### Accessing Letter Templates Settings

<div class="nav-path">

Settings → Letter Templates

</div>

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Navigate to Settings

Click **Settings** in the left sidebar, then select **Letter Templates** from the settings menu.

</div>

</div>

<figure>
<img src="screenshots/setup-01-letter-templates-list.png" alt="Letter Templates settings page showing list of templates" />
<figcaption>Letter Templates settings page with template list showing Template name, Created By, Authorized Signatory, and Active/Inactive status</figcaption>
</figure>

### Managing Letter Templates

The Templates section displays all configured letter templates with the following information:

- **Template name:** The name of the letter template (e.g., Salary Certificate, Employment Verification)
- **Created By:** The administrator who created the template and the creation date
- **Authorized Signatory:** The designated signatory for this letter type
- **Status toggle:** Active/Inactive - controls whether the template is available for employees to request

#### Edit an Existing Template

Click the **Edit** (pencil icon) button on any template row to modify its settings:

<figure>
<img src="screenshots/setup-02-edit-template-modal.png" alt="Edit letter template modal with PDF preview" />
<figcaption>Edit template modal showing Template name, Authorized Signatory dropdown, employee notes field, and PDF preview</figcaption>
</figure>

In the edit modal, you can:

- **Template name:** Update the display name for the template
- **Authorized Signatory:** Select who will digitally sign letters of this type
- **Leave a note:** Add instructions for employees when requesting this letter type
- **Open In Editor:** Modify the letter content and dynamic variables

#### Add a New Template

Click the **Add new** button at the bottom of the Templates section to create a new letter template.

<figure>
<img src="screenshots/setup-04-add-new-template.png" alt="Create a new letter template modal" />
<figcaption>Create a new letter template: Enter template name, select authorized signatory, add employee instructions, and design the template content</figcaption>
</figure>

When creating a new template:

1.  **Template name:** Enter a descriptive name (e.g., "Salary Certificate", "Employment Verification")
2.  **Authorized Signatory:** Select who will digitally sign letters using this template
3.  **Leave a note for employees:** Add optional instructions shown when employees request this letter type
4.  **Open In Editor:** Design the letter content with dynamic variables using the WYSIWYG editor

#### Template Row Actions

Each template row includes four action controls:

| Action | Icon | Description |
|----|----|----|
| **Active/Inactive Toggle** | Toggle switch | Controls template availability. When **Active** (purple toggle), the template appears in employee letter request forms. When **Inactive** (grey toggle), the template is hidden from employees but retained in settings. |
| **Copy** | Document icon | Creates a duplicate of the template with all settings and content. Useful for creating variations of existing templates (e.g., "Salary Certificate - Arabic" from "Salary Certificate"). |
| **Edit** | Pencil icon | Opens the template editing modal to modify template name, authorized signatory, employee notes, and template content via the editor. |
| **Delete** | Trash icon | Permanently removes the template from the system. This action cannot be undone. Existing letter requests using this template are not affected. |

<div class="warning-box">

**Important:** Before deleting a template, ensure no active letter requests depend on it. Consider setting the template to **Inactive** instead of deleting if you may need it in the future.

</div>

#### Using Template Variables

Template variables are dynamic placeholders enclosed in curly braces (e.g., `{first-name}`) that automatically populate with employee data when a letter is generated. When designing templates in the Letter Editor, click **Insert Variable** to browse and insert from 80+ available variables across these categories:

- **Personal Details:** Name, nationality, date of birth, gender, marital status
- **Work Details:** Job title, department, employee ID, joining date, departure date
- **Payroll Details:** Basic salary, gross pay, net salary, allowances
- **Document Details:** Emirates ID, passport number, visa UID, labor card
- **Company Details:** Company name, trade license, address
- **Custom Fields:** Organization-specific employee data fields

<div class="info-box">

**How Variables Work:** When an employee requests a letter, the system automatically replaces each variable with their actual data from their profile. For example, `{first-name}` becomes "Ahmed" and `{job-title}` becomes "Senior Accountant".

</div>

<div class="warning-box">

**Notes on Variables:**

- Salary variables display as "XXX" in preview mode for privacy - actual values appear in the final signed letter
- Variables require corresponding data in the employee's profile - missing data will show as blank or trigger an error
- Arabic translations are available for most variables when using Arabic letter templates
- Custom fields can also be used as variables if enabled for your organization

</div>

### Managing Authorized Signatures

The Authorized Signatures section manages digital signatures for signatories. Each signatory must have their signature uploaded before they can sign letters.

<figure>
<img src="screenshots/setup-03-authorized-signatures.png" alt="Authorized Signatures list showing signatories and upload status" />
<figcaption>Authorized Signatures section showing signatories, their signature status (Uploaded or Waiting for upload), and action buttons</figcaption>
</figure>

The Authorized Signatures table displays:

- **Authorized Signatory:** Name of the person authorized to sign letters
- **Created By:** Who added this signatory to the system
- **Signature Status:** "Uploaded" (ready to sign) or "Waiting for upload" (signature image needed)
- **Actions:** Edit and Delete buttons for managing each signatory

#### Signatory Row Actions

| Action | Icon | Description |
|----|----|----|
| **Edit** | Pencil icon | Opens the signatory editing modal to update the signature image or change the assigned employee. |
| **Delete** | Trash icon | Removes the signatory from the system. This action cannot be undone. Templates using this signatory will need to be reassigned. |

#### Add a New Signatory

Click **Add new** to create a new authorized signatory.

<figure>
<img src="screenshots/setup-05-add-new-signatory.png" alt="Create a new Authorized Signatory modal" />
<figcaption>Create a new Authorized Signatory: Select employee, view signature requirements (120px x 80px), and upload signature image</figcaption>
</figure>

When adding a new signatory:

1.  **Authorized Signatory:** Select an employee from the dropdown to designate as signatory
2.  **Upload Signature Image:** Upload a digital signature image following the dimension guidelines:
    - Width: 120px
    - Height: 80px
    - Format: PNG with transparent background recommended
3.  **Notify Signatory (optional):** Toggle to send a notification to the signatory requesting them to upload their own signature

<div class="tip-box">

**Tip:** Ensure all signatories have uploaded their signatures before assigning them to templates. Letters cannot be signed if the signatory's signature is "Waiting for upload".

</div>

</div>

<div id="employee-self-service" class="section">

## Employee Self-Service

Employees can request official company letters through the self-service portal without needing to contact HR directly. This streamlines the request process and provides transparency on request status.

### How Employees Request Letters

Employees access the letter request feature through their personal requests menu:

<div class="nav-path">

Requests (left sidebar) → My Requests → Letters

</div>

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Access My Requests

Click **Requests** in the left sidebar, then navigate to **My Requests** section

</div>

</div>

<div class="step">

<div class="step-number">

2

</div>

<div class="step-content">

#### Select Letters

Click on **Letters** to view your submitted letter requests and create new ones

</div>

</div>

<div class="step">

<div class="step-number">

3

</div>

<div class="step-content">

#### Create New Request

Click **+ Create** button to submit a new letter request. Select the letter type you need (Salary Certificate, Employment Verification, etc.)

</div>

</div>

<div class="step">

<div class="step-number">

4

</div>

<div class="step-content">

#### Track Status

Monitor your request status from the My Requests page. You'll receive notifications when your letter is approved and ready for download.

</div>

</div>

### What Employees Can Do

<div class="feature-grid">

<div class="feature-card">

#### Submit Requests

Request salary certificates, employment verification, bank letters, and other available templates

</div>

<div class="feature-card">

#### Track Progress

View real-time status of all submitted requests (Pending, Approved, Rejected)

</div>

<div class="feature-card">

#### Download Letters

Download signed PDF letters directly once approved and signed

</div>

<div class="feature-card">

#### View History

Access complete history of all letter requests and their outcomes

</div>

</div>

<div class="info-box">

**Note:** Employees can only request letter types that have been configured and made available by HR administrators. If a specific letter type is not available, contact your HR department.

</div>

<div class="info-box">

**How Your Data Appears in Letters:** Letter templates use dynamic variables that automatically pull information from your employee profile (name, job title, salary, etc.). When you request a letter, the system fills in your actual data. If required data is missing from your profile, you'll see an alert asking you to contact HR to update your information before the letter can be generated.

</div>

### Step-by-Step: Requesting a Letter

Follow these steps to submit a letter request through the employee self-service portal:

#### Step 1: Navigate to Requests Menu

Click on **Requests** in the left sidebar to expand the menu. Under "My requests", click on **My letters**.

<figure>
<img src="screenshots/letters-step1-requests-menu.png" alt="Requests menu showing My letters option" />
<figcaption>Requests menu expanded showing "My letters" under My requests section</figcaption>
</figure>

#### Step 2: View My Letter Requests

The "My letter requests" page displays all your submitted requests organized by status: Pending, Approved, and Rejected.

<figure>
<img src="screenshots/letters-step2-my-letters-page.png" alt="My letter requests page with status tabs" />
<figcaption>My letter requests page showing Pending, Approved, and Rejected tabs</figcaption>
</figure>

#### Step 3: Click Request New Letter

Click the **Request New Letter** button in the top-right corner to start a new request.

<figure>
<img src="screenshots/letters-step3-select-template-dialog.png" alt="Request New Letter dialog" />
<figcaption>Request New Letter dialog with template selection dropdown</figcaption>
</figure>

#### Step 4: Select a Letter Template

Click on the dropdown to view all available letter templates configured by your HR team.

<figure>
<img src="screenshots/letters-step4-template-options.png" alt="Letter template dropdown options" />
<figcaption>Dropdown showing available letter templates (Salary Certificate, Employment Verification, etc.)</figcaption>
</figure>

#### Step 5: Confirm Template Selection

After selecting a template, click **Continue** to proceed to the request form.

<figure>
<img src="screenshots/letters-step5-template-selected.png" alt="Template selected with Continue button" />
<figcaption>Template selected - click Continue to proceed</figcaption>
</figure>

<div class="warning-box">

**Important: Missing Information Alert**

Some letter templates require specific employee data (such as job title, passport number, etc.). If your profile is missing required information, you'll see an alert like this:

</div>

<figure>
<img src="screenshots/letters-step6-missing-info-alert.png" alt="Missing information alert" />
<figcaption>Alert showing required data is missing from employee profile (job-title, passport-number)</figcaption>
</figure>

<figure>
<img src="screenshots/letters-step7-missing-requisites.png" alt="Another template with missing requisites" />
<figcaption>Different templates may require different data fields (passport-number, passport-full-name)</figcaption>
</figure>

<div class="tip-box">

**Tip:** If you see a missing information alert, contact your HR administrator to update your employee profile with the required data before requesting this letter type.

</div>

#### Step 6: Complete the Request Form

Fill in the request details:

- **Letter Addressed To:** Enter the recipient (e.g., "To Whom It May Concern", bank name, embassy)
- **Note for approvers (optional):** Add context about why you need this letter
- **Attachments (optional):** Upload any supporting documents

The form also shows:

- **PDF Preview:** Live preview of your letter with your data populated
- **Approvers:** Who will review and approve your request
- **Authorized Signatory:** Who will digitally sign the letter

<figure>
<img src="screenshots/letters-step8-full-request-form.png" alt="Full letter request form with PDF preview" />
<figcaption>Complete request form showing PDF preview, request details, and approval chain</figcaption>
</figure>

#### Step 7: Fill Required Fields and Submit

Enter the required information and click **Submit Request**.

<figure>
<img src="screenshots/letters-step9-form-filled.png" alt="Form filled and ready to submit" />
<figcaption>Form completed with "Letter Addressed To" and note for approvers</figcaption>
</figure>

#### Step 8: Request Submitted Successfully

After submission, you'll see a success message and your request will appear in the Pending tab with status "Pending Review".

<figure>
<img src="screenshots/letters-step10-request-submitted-success.png" alt="Request submitted successfully" />
<figcaption>Letter request submitted and showing in Pending tab with "Pending Review" status</figcaption>
</figure>

<div class="info-box">

**What happens next?**

- Your designated approver will be notified to review your request
- Once approved, the authorized signatory will digitally sign the letter
- You'll be notified when your letter is ready for download in the Approved tab

</div>

### Requesting Letters on the Bayzat Mobile App

Employees can also request letters directly from the Bayzat mobile app. There are three ways to access letter requests:

<div class="feature-grid">

<div class="feature-card">

#### Via Side Menu

Open the side menu → Under the **Work** tab → Tap **Letter Requests**

</div>

<div class="feature-card">

#### Via Home Screen

On the **Home** screen → Tap the **Request a letter** shortcut widget at the top

</div>

<div class="feature-card">

#### Via Work Tab

Go to the **Work** tab → Tap the **Request a letter** shortcut widget or select from the list of options

</div>

</div>

#### Tracking Letter Requests on Mobile

Within the Letter Requests page on the mobile app, employees can track their submitted requests:

- **Pending:** Letter requests awaiting approval/signature from approvers
- **Approved:** Approved letters that can be viewed, downloaded, and shared via email
- **Rejected:** Letter requests that have been rejected by HR/Admin

<div class="tip-box">

**Mobile App Features:** From the mobile app, you can submit new letter requests, track status, download approved letters, and share them via email—all from your phone. Managers and authorized signatories can also approve and sign letter requests directly from the mobile app.

</div>

</div>

<div id="admin-tasks" class="section">

## Admin Tasks

### Creating a Letter Request

HR administrators can create letter requests on behalf of employees. To create a new letter request:

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Click Create Button

Navigate to Requests → Letters and click the **+ Create** button in the top-right corner

</div>

</div>

<figure>
<img src="validation/screenshots/07-create-letter-modal.png" alt="Create letter request modal" />
<figcaption>Create letter request modal with template selection and recipient fields</figcaption>
</figure>

<div class="step">

<div class="step-number">

2

</div>

<div class="step-content">

#### Fill Request Details

Complete the following fields:

- **Letter Template:** Select from available templates (e.g., Salary Certificate, Employment Verification)
- **On Behalf Of:** Select the employee for whom the letter is being requested
- **Letter Addressed To:** Enter the recipient (e.g., "Emirates NBD Bank", "UAE Embassy")
- **Notes:** Optional notes for the approver
- **Attachments:** Upload any supporting documents if needed

</div>

</div>

<div class="step">

<div class="step-number">

3

</div>

<div class="step-content">

#### Submit Request

Click **Create** to submit the letter request. It will appear in the Pending tab awaiting approval.

</div>

</div>

### Viewing Letter Details

Click on any letter request to view its details, including the PDF preview and approval history.

<figure>
<img src="validation/screenshots/08-letter-detail-view.png" alt="Letter detail view with PDF preview" />
<figcaption>Letter detail view showing request information and embedded PDF preview</figcaption>
</figure>

The detail view displays:

- **Request Information:** Template used, employee name, addressed to, creation date
- **PDF Preview:** Embedded preview of the generated letter with actual employee data
- **Approval Status:** Current status and approver/signatory information
- **Activity Timeline:** History of actions taken on the request

### Managing Letter Requests by Status

Letter requests are organized into three main tabs based on their status:

#### Pending Tab

Contains letters awaiting approval or signature. Two sub-statuses exist:

- <span class="status-badge status-pending">Pending Review</span> - Awaiting approver's decision
- <span class="status-badge status-pending">Pending Signature</span> - Approved, awaiting signatory's signature

#### Approved Tab

Contains signed letters ready for download.

<figure>
<img src="validation/screenshots/05-letters-approved-tab.png" alt="Letters approved tab" />
<figcaption>Approved tab showing signed letters available for download</figcaption>
</figure>

#### Rejected Tab

Contains letters that were rejected by either the approver or signatory.

<figure>
<img src="validation/screenshots/06-letters-rejected-tab.png" alt="Letters rejected tab" />
<figcaption>Rejected tab showing declined letter requests</figcaption>
</figure>

<div class="warning-box">

**Important:** The Delete function is only available for letters in Rejected status. Deleted letters cannot be recovered.

</div>

### Search and Filter Options

#### Search

Use the search bar to find letter requests by:

- Employee name
- Employee ID

#### Available Filters

| Filter     | Description                          |
|------------|--------------------------------------|
| Date Range | Filter by submission date (From/To)  |
| Department | Filter by employee's department      |
| Office     | Filter by employee's office location |

</div>

<div id="approval-process" class="section">

## Approval Process

Letter requests follow a two-stage approval workflow that ensures proper authorization before any official company letter is issued.

### Understanding the Approval Flow

<div class="journey-roadmap">

<div class="journey-phases">

<div class="journey-phase">

<div class="phase-marker">

1

</div>

<div class="phase-content">

#### Pending Review

Request submitted and awaiting approver's decision

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

2

</div>

<div class="phase-content">

#### Approver Reviews

Designated approver(s) review and approve or reject

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

3

</div>

<div class="phase-content">

#### Pending Signature

Approved request awaiting authorized signatory

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

4

</div>

<div class="phase-content">

#### Signed & Complete

Letter signed digitally and ready for download

</div>

</div>

</div>

</div>

### Stage 1: Approver Review

When a letter request is submitted, it appears in the **Pending** tab with "Pending Review" status. The designated approver(s) can review the request and take action.

#### Reviewing a Pending Request

To review a letter request:

1.  Navigate to **Requests → Letters → Pending** tab
2.  Click **Review Request** on any pending request
3.  The review panel opens showing request details, PDF preview, and action buttons

<figure>
<img src="screenshots/approval-step1-review-panel.png" alt="Review Request panel showing letter details and approval options" />
<figcaption>Review Request panel: Shows request details, PDF preview, approvers list, authorized signatory, and action buttons (Reject / Send for Signature)</figcaption>
</figure>

The review panel displays:

- **Request Details:** Employee name, template used, letter addressed to, submission date
- **PDF Preview:** Live preview of the generated letter
- **Approvers:** List of all designated approvers and their approval status
- **Authorized Signatory:** The person who will digitally sign the letter
- **Comments:** Section to view or add comments

#### Viewing All Approvers

Click **Show all approvers** to see the complete list of approvers for the request:

<figure>
<img src="screenshots/approval-step2-all-approvers.png" alt="Expanded approvers list showing all designated approvers" />
<figcaption>Expanded view showing all approvers with their pending/approved status</figcaption>
</figure>

#### Approver Actions

The approver can:

- **Send for Signature:** Approve the request and move it to the authorized signatory
- **Reject:** Decline the request with an optional comment
- **Edit:** Modify request details if needed before approving

### Stage 2: Authorized Signatory

Once approved by the designated approver(s), the request moves to "Pending Signature" status and awaits the authorized signatory.

<figure>
<img src="screenshots/approval-step3-pending-signature.png" alt="Letter request in Pending Signature status" />
<figcaption>Pending Signature: Request approved by approver (Sherbano Khanzada), awaiting signature from Jasmeen Kirmani</figcaption>
</figure>

In this stage:

- The **Approvers** section shows "Approved this request"
- The **Authorized Signatory** shows "Pending approval"
- The signatory can sign or reject the letter

#### Signatory Actions

The authorized signatory can:

- **Sign:** Embed their digital signature and finalize the letter
- **Reject:** Decline to sign with an optional comment

<div class="info-box">

**Bulk Actions:** Multiple pending letters can be selected and approved or rejected in bulk using the checkboxes and action buttons.

</div>

<div class="tip-box">

**Tip:** If you see "Actioned - You already approved this request", it means you've already taken action on this request and it's now awaiting the next step in the approval chain.

</div>

</div>

<div id="letter-templates" class="section">

## Letter Templates

For complete information on managing letter templates, including creating, editing, copying, and deleting templates, see the [Setup Process](#setup-process) section.

<div class="info-box">

**Quick Links:**

- [Managing Letter Templates](#setup-process) - Create, edit, copy, delete, and activate templates
- [Template Row Actions](#setup-process) - Active toggle, Copy, Edit, Delete functions
- [Available Template Variables](#setup-process) - 80+ dynamic variables for templates

</div>

</div>

<div id="authorized-signatures" class="section">

## Authorized Signatures

For complete information on managing authorized signatories, including adding new signatories and uploading signatures, see the [Setup Process](#setup-process) section.

<div class="info-box">

**Quick Links:**

- [Managing Authorized Signatures](#setup-process) - View and manage signatories
- [Add a New Signatory](#setup-process) - Create new authorized signatories
- [Signatory Row Actions](#setup-process) - Edit and Delete functions

</div>

</div>

<div id="workflow-integration" class="section">

## Workflow Integration

<div class="warning-box">

**No Workflow Automation:** The Letters feature does not currently integrate with Bayzat's workflow automation system. Letter request events (created, approved, rejected, signed) cannot trigger automated workflows.

</div>

All approval routing is handled through the built-in approval chain configuration in letter templates. For automated processes related to letters, consider using alternative approaches such as:

- Setting up email notifications through the notification settings
- Using "Employee is updated" triggers for related workflow automation
- Configuring approval reminders through the approval workflow settings

</div>

<div id="business-rules" class="section">

## Business Rules and Limitations

### Critical Limitations

<div class="warning-box">

**Deleted Letter Requests Cannot Be Recovered:** Once a letter request is deleted, it cannot be recovered by users. The platform lacks deletion tracking and self-service recovery. If accidental deletion occurs, contact Bayzat support for potential backend recovery (not guaranteed).

</div>

<div class="warning-box">

**No Post-Approval Document Uploads:** If letters require external stamping and re-uploading after approval, the platform does not support post-approval document modifications. Manual handling outside the platform is required for stamped documents.

</div>

### Template and Formatting Limitations

| Limitation | Description | Workaround |
|----|----|----|
| Template Change | Cannot change template after request creation | Delete request and create new one |
| Text Formatting in Variables | Bold, italic, and other rich text formatting is not preserved in variable fields | Avoid relying on formatting for variable fields |
| Allowance Table Format | Allowance variables cannot be displayed in tabular or multi-column formats; only generic allowance-list variable available | Use simple variable display formats |
| Font Selection | Custom fonts (e.g., Lato, Aptos) are not preserved in downloaded signed letters and revert to Times New Roman | Accept default font; limited font options available |
| Arabic Text Formatting | Copy-pasting formatted Arabic text from external sources may not preserve font size or formatting | Paste as plain text, then apply formatting using built-in editor tools |
| External Content Issues | Copy-pasting content from external sources (Word, web) may cause formatting issues or prevent template saving | Create content directly in the editor; paste as plain text if needed |
| Header/Footer Rendering | Logos, headers, and footers may not render consistently across different template designs | Test templates thoroughly; contact support for complex designs |
| PDF Pagination | Complex templates may produce documents spanning multiple pages with unexpected page breaks | Simplify template content; test templates after making changes |
| Page Margins | Hardcoded margin settings may prevent full page width utilization for letterhead | Contact support for margin adjustments |
| Letterhead Customization | No self-service letterhead configuration; requires implementation team support | Contact Bayzat implementation team for letterhead updates |

### Approval and Workflow Limitations

| Limitation | Description | Workaround |
|----|----|----|
| Auto-Approval Risk | Auto-sign feature can bypass manual signatory review without clear warnings; may behave inconsistently across letter types | Verify auto-sign settings in employee profile; disable for letters requiring manual review |
| Payroll Cycle Required | Salary certificate requests require an active payroll cycle, even for clients not using Bayzat Payroll | Ensure employee has active salary configuration before requesting salary letters |
| No Employee Input Fields | NOC letters and similar templates lack employee-facing fields for travel details or custom information | Admin must manually update letter content with employee-provided details |
| No Reference Numbers | No automatic reference number generation for letter tracking | Manually add reference numbers to letter content |
| HR Permission Inconsistencies | Non-super-admin HR managers may experience intermittent visibility issues with letter requests | Assign super admin role for consistent letter review access |
| Workflow Automation | Letter request events cannot trigger automated workflows | Use manual notifications or related triggers |
| No Dedicated Reports | No out-of-the-box reporting for letter requests (request dates, approval dates, approver details) | Custom Looker report development required |
| Multi-Company Support | No multi-company template management; templates not filtered by company in multi-company environments | Manual management per company required |
| Template Ownership | Reassigning Bayzat user accounts across companies can cause template ownership and visibility issues | Do not reassign initial user accounts after template creation |

### Variable and Preview Limitations

| Limitation | Description | Workaround |
|----|----|----|
| Masked Preview Variables | Sensitive salary variables display as 'XXX' in preview (privacy feature) | Understand 'XXX' indicates masked data, not errors |
| Arabic Translation | Arabic letter variable translation scope may be unclear without support confirmation | Contact support for language variable clarification |
| Hidden Custom Fields | Custom fields marked as "hidden from employees" are now available in templates (fixed) | Previously unavailable, now accessible following platform fix |

### Editable vs Read-Only Fields

After a letter request is created:

- **Editable:** Letter Addressed To, Notes, Attachments
- **Read-Only:** Letter Template, Employee (On Behalf Of), Approvers, Authorized Signatory

### Delete and Recovery Rules

- **Delete Availability:** Delete function is only available for letters in "Rejected" status
- **Pending/Approved Letters:** Must be rejected first before deletion is possible
- **No Self-Service Recovery:** Deleted letters require backend intervention by support team
- **Recovery Not Guaranteed:** Even with support intervention, recovery may not be possible

</div>

<div id="troubleshooting" class="section">

## Troubleshooting

### Common Issues

| Issue | Cause | Resolution |
|----|----|----|
| Template not appearing in dropdown | Template is inactive, no signatory assigned, or permission issue | Check template status in Settings; verify signatory assignment; confirm role permissions |
| Variables not populating | Missing employee data, incorrect variable syntax, or deleted custom field | Update employee profile; verify variable syntax in template; check custom field exists |
| Signature not appearing in PDF | No signature uploaded, wrong dimensions, or missing {signature} variable | Upload signature image (120px x 80px); verify template includes signature variable |
| Letter stuck in Pending Signature | Signatory not notified, lacks permission, or is inactive | Manually notify signatory; verify permissions; check signatory's employee status |
| Salary showing as "XXX" in preview | Privacy feature masks salary variables in preview mode | This is expected behavior; actual values appear in the final signed letter |
| Missing information alert when requesting | Employee profile lacks data required by the template variables | Contact HR to update your employee profile with the required information |
| Cannot delete letter request | Delete function only available for Rejected status letters | Request must be rejected first before it can be deleted |
| Error 404 when requesting salary certificate | No active salary configuration for current payroll cycle | Ensure employee has active salary configuration matching the open payroll cycle |
| Template not saving | Content copy-pasted from external source (Word, web) corrupted the template | Create content directly in the editor; avoid copy-paste from external sources |
| Signatory confused about signing process | "Waiting for upload" status means signatory must log in to sign | Signatory must log in to their own account to sign; enable auto-sign from their profile if desired |
| Letter automatically signed without review | Auto-sign is enabled in signatory's employee profile | Disable auto-sign in signatory's profile for letters requiring manual review |

</div>

<div id="support" class="section">

## Support and Resources

### Frequently Asked Questions

<div class="faq-accordion">

How do I create a letter template?

<div class="faq-answer">

Navigate to Settings → Letters → Create Template. Enter a template name, design the letter content using the rich text editor, and insert dynamic variables for employee-specific data. Save and assign approvers to activate the template.

</div>

What dynamic variables are available for templates?

<div class="faq-answer">

Over 80 variables are available including employee name, employee ID, department, job title, salary details, hire date, and more. Click the "Insert Variable" button in the template editor to see all available options.

</div>

How do employees request letters?

<div class="faq-answer">

Employees access the Letters section from their self-service portal, select the letter type they need, and submit a request. The request routes through the configured approval workflow before the letter is generated.

</div>

How do digital signatures work?

<div class="faq-answer">

Upload signature images for authorized signatories in the template settings. When a letter is approved, the signatory digitally signs by clicking the Sign button. The signature image is then embedded in the final PDF document.

</div>

Can I edit a letter after it's generated?

<div class="faq-answer">

Generated letters cannot be edited. If changes are needed, the request must be rejected and a new request submitted. For template-level changes, edit the template—but this only affects future letters, not existing ones.

</div>

</div>

### Getting Help

- **Email:** support@bayzat.com
- **In-App Support:** Click the Help icon in the bottom-right corner
- **Help Center:** <a href="https://bayzathelp.zendesk.com" target="_blank">bayzathelp.zendesk.com</a>

</div>

<div id="glossary" class="section">

## Glossary

| Term | Definition |
|----|----|
| Approver | First-level reviewer who approves or rejects letter requests before they reach the authorized signatory |
| Authorized Signatory | An employee designated to digitally sign official company letters. Their signature image is embedded in the final PDF. |
| Basic Salary | The base salary amount excluding allowances. Available as a template variable {basic-salary}. |
| Date of Departure | An employee's last working date, used in experience letters and offboarding documentation. Available as template variable {date-of-departure}. |
| Digital Signature | An uploaded signature image (120px x 80px) that is automatically embedded into approved letters when the signatory clicks "Sign". |
| Emirates ID | UAE national identification number. Available as template variable {emirates-id-number}. |
| Experience Letter | A letter documenting an employee's employment history, job title, and tenure with the company. Often requested during offboarding. |
| Gross Pay | Total salary including basic pay and all allowances before deductions. Available as template variable {gross-pay}. |
| Letter Editor | The WYSIWYG (What You See Is What You Get) tool for designing letter template content and inserting dynamic variables. |
| Letter Request | A formal request to generate an official company letter for an employee. Requests follow an approval workflow before the letter is signed and generated. |
| Letter Template | A pre-configured document format defining the structure, content, layout, and dynamic variables for a specific letter type. |
| MOL ID / MOL Code | Ministry of Labor identification number. Available as template variable in KSA/UAE regions. |
| Net Allowances | Total sum of all employee allowances. Available as template variable {net-allowances}. |
| Net Monthly Salary | Take-home salary after all deductions. Available as template variable {net-monthly-salary}. |
| NOC (No Objection Certificate) | A common letter type stating the company has no objection to an employee's request (e.g., visa transfer, outside employment). |
| Pending Review | Status indicating a letter request is awaiting the approver's decision to approve or reject. |
| Pending Signature | Status indicating an approved request is awaiting the authorized signatory to digitally sign the letter. |
| Salary Certificate | A letter confirming an employee's salary details, commonly requested for bank loans, visa applications, or tenancy agreements. |
| Salary Transfer Letter | A letter addressed to a bank authorizing salary payments to be deposited into a specific account. |
| Signature Stamp | A combined image containing both the signatory's signature and company stamp, uploaded as a single image for embedding in letters. |
| Template Variable | A dynamic placeholder (e.g., {first-name}, {job-title}) that auto-populates with employee data when a letter is generated. |
| Visa UID Number | Unique identifier for employee visa. Available as template variable {visa-uid-number}. |

</div>

Bayzat HR - Letter Requests User Guide

Last updated: February 2026
