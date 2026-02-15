<div class="hero-banner">

# Approval Flows

Configure intelligent approval routing for employee requests across 40+ request types

</div>

<div class="nav-header">

<span class="nav-icon">📖</span> <span class="nav-title">Quick Navigation</span>

</div>

<div class="nav-grid">

<a href="#feature-overview" class="nav-card"><span class="card-icon">✨</span><span class="card-label">Feature Overview</span></a> <a href="#product-foundation" class="nav-card"><span class="card-icon">🏗️</span><span class="card-label">Product Foundation</span></a> <a href="#user-journey" class="nav-card"><span class="card-icon">🗺️</span><span class="card-label">User Journey</span></a> <a href="#feature-discovery" class="nav-card"><span class="card-icon">🔍</span><span class="card-label">Feature Discovery</span></a> <a href="#setup-process" class="nav-card"><span class="card-icon">⚙️</span><span class="card-label">Setup Process</span></a> <a href="#feature-usage" class="nav-card"><span class="card-icon">📋</span><span class="card-label">Feature Usage</span></a> <a href="#troubleshooting" class="nav-card"><span class="card-icon">🔧</span><span class="card-label">Troubleshooting</span></a> <a href="#support-resources" class="nav-card"><span class="card-icon">💬</span><span class="card-label">Support Resources</span></a>

</div>

<figure>
<img src="validation/screenshots/03-approval-flows-page.png" alt="Approval Flows interface showing request type tabs" />
<figcaption>Approval Flows configuration interface in Bayzat HR</figcaption>
</figure>

<div id="feature-overview" class="section section">

## What are Approval Flows?

### Overview

Approval Flows is a routing configuration system that automatically directs employee requests to the appropriate approvers based on defined criteria. Instead of manually assigning approvers to each request, you configure intelligent approval paths that automatically route requests based on employee attributes, request amounts, departments, or custom conditions.

### Key Benefits

- Automate request routing to eliminate manual assignment and routing errors
- Configure conditional logic to route requests differently based on criteria
- Build multi-step approval hierarchies for proper governance
- Set up parallel approvers to reduce bottlenecks when key people are unavailable
- Manage all approval flows from a single centralized interface

### Who Uses This Feature?

| User Role | What They Do | Value Proposition |
|----|----|----|
| **Super Admin** | Configure approval flows for all request types, define conditional routing criteria, assign approver roles | Reduce approval configuration time from hours to minutes while ensuring consistent governance across all request types—eliminating manual routing and scattered email approvals |
| **HR Administrator** | Monitor approval flow effectiveness, identify bottlenecks, recommend flow optimizations | Make data-driven decisions about approval process improvements backed by actual routing patterns rather than relying on anecdotal feedback |
| **Line Managers** | Receive requests routed by approval flows, approve or reject within their assigned steps | Receive only relevant requests that require their approval—eliminating confusion about which requests need their attention |
| **Finance Team** | Act as approvers for expense, loan, and payroll requests, enforce budget compliance | Ensure all monetary requests pass through appropriate approval gates based on amount or category—reducing financial risk |

</div>

<div id="product-foundation" class="section section section-product-foundation">

<div class="section-header">

## Product Foundation Overview

</div>

<div class="section-body">

<div class="subsection">

### How Approval Flows Fits

Approval Flows is a **routing configuration module** that automatically directs employee requests to the appropriate approvers based on defined criteria. Over 40 request types are supported with dedicated configuration tabs for Leave, Expenses, Loans, Air Ticket, Attendance Regularization, and more.

<div class="info-box">

**Mental model:** Employee submits request → System evaluates advanced flow conditions in priority order → First matching flow routes request → If no match, default flow applies → Approvers receive notification at each step → Approval/rejection flows through all steps.

</div>

Properly configured approval flows eliminate manual routing, ensure consistent governance, and reduce approval bottlenecks across all request types.

</div>

<div class="subsection">

### Key Decisions Before Setup

Answer these questions before configuring approval flows:

- **Which request types need conditional routing?** — Use advanced flows for exception-based routing (high-value expenses, specific departments, senior employees)
- **What criteria should trigger different routing?** — Consider amount thresholds, department, employee grade, or custom fields
- **Who are the approvers at each step?** — Map out line managers, department heads, HR, and finance involvement
- **Should approvers be parallel or sequential?** — Parallel reduces bottlenecks when key approvers are unavailable

</div>

<div class="subsection">

### Related Features

- **Role Management** — Approver roles must be configured before use in approval flows
- **Employee Profiles** — Approval criteria pull data from employee profiles (department, grade, location)
- **Leave Management** — Leave requests are routed through configured approval flows
- **Expense Management** — Expense claims follow approval flows for financial controls
- **Employee Tickets** — Custom ticket types have dedicated approval flow configurations

</div>

<div class="subsection">

### Prerequisites & Requirements

| Requirement | Description | Status |
|----|----|----|
| Super Admin Access | Only Super Admins can configure approval flows | Required |
| Role Management | Approver roles must be defined and assigned before use | Required |
| Employee Data | Employee profiles must have accurate attributes for criteria matching | Required |
| Request Type Activation | Request types must be activated in your Bayzat instance | Required |

</div>

</div>

<figure>
<img src="validation/screenshots/10-air-ticket-tab.png" alt="Air Ticket tab showing advanced and default flows" />
<figcaption>Air Ticket tab displaying advanced flows with priority ordering and default flow</figcaption>
</figure>

### Key Differences: Advanced vs Default Approval Flows

Understanding when to use each flow type is essential for effective approval routing configuration.

| Aspect | Advanced Approval Flow | Default Approval Flow |
|----|----|----|
| **Label** | "If conditions" badge | "Else" badge |
| **Purpose** | Route approvals based on defined criteria | Used if no matching advanced flow found |
| **Criteria Required** | Yes - must define conditions (data points + operations) | No - applies automatically as fallback |
| **Flow Name/Description** | Required for identification | Not applicable - single default per request type |
| **Multiple Flows** | Yes - can create multiple with priority ordering | No - only one default flow per request type |
| **Evaluation Order** | Evaluated in priority order until first match | Evaluated last if no advanced flow matches |
| **Approval Steps** | Configurable steps with multiple approvers | Configurable steps with multiple approvers |
| **When to Use** | Complex routing based on amount, department, grade, location, or other employee attributes | Standard routing for requests that don't need conditional logic |

#### Available Criteria Data Points for Advanced Flows

When creating advanced flows, you can filter requests based on these data point categories:

- **Request-Specific:** Number of Days, Leave Type, Amount, Policy, Currency
- **Employee Demographics:** Department, Office, Nationality, Position, Age, Gender
- **Employee Identifiers:** Employee Name, Employee ID, Work Email
- **Management Structure:** Direct Reports To, Roles, Employee Grade
- **Employment Details:** Hire Date, Probation End Date, Status, Work Location
- **Custom Fields:** GL Code, Subsidiary, Cost Center, and organization-specific fields

#### Available Criteria Operations

For numeric data points (like Number of Days or Amount), the following operations are available:

- **is between** / **is not between** - Range comparisons
- **is equal to** / **is not equal to** - Exact match
- **is greater than** / **is greater than or equals** - Above threshold
- **is less than** / **is less than or equals to** - Below threshold

<div class="info-box">

**Best Practice:** Use advanced flows for exception-based routing (e.g., high-value expenses, specific departments, senior employees) and keep the default flow simple for standard cases.

</div>

</div>

<div id="user-journey" class="section section">

## Complete User Journey Guide

<div class="journey-roadmap">

### End-to-End Journey: Approval Flows

From configuration through automatic request routing.

<div class="journey-phases">

<div class="journey-phase">

<div class="phase-marker">

1

</div>

<div class="phase-content">

#### Access Approval Flows

<div class="nav-path">

Automations → Approval flows

</div>

<a href="#feature-discovery" class="phase-link">See navigation →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

2

</div>

<div class="phase-content">

#### Select Request Type

<div class="nav-path">

Choose tab: Leave, Expense, etc.

</div>

<a href="#setup-process" class="phase-link">See types →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

3

</div>

<div class="phase-content">

#### Create Advanced Flow

<div class="nav-path">

Add advance flow → Define criteria

</div>

<a href="#setup-process" class="phase-link">See setup →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

4

</div>

<div class="phase-content">

#### Configure Default Flow

<div class="nav-path">

Set fallback approval path

</div>

<a href="#setup-process" class="phase-link">See defaults →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

5

</div>

<div class="phase-content">

#### Update and Activate

<div class="nav-path">

Update Approval Flows button

</div>

<a href="#setup-process" class="phase-link">See activation →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

6

</div>

<div class="phase-content">

#### Requests Auto-Route

<div class="nav-path">

Automatic routing applied

</div>

<a href="#feature-usage" class="phase-link">See routing →</a>

</div>

</div>

</div>

</div>

</div>

<div id="feature-discovery" class="section section">

## Feature Discovery

### How to Access

Approval Flows is accessed through the Automations menu in the left sidebar. Only users with Super Admin permissions can view and configure approval flows.

### Navigation Paths

<div class="step">

<div class="step-number">

S

</div>

<div class="step-content">

#### Super Admin Configuration

Automations (left sidebar) → Approval flows → Select request type tab → Configure flows → Update Approval Flows

</div>

</div>

<div class="nav-path">

Access: Automations → Approval flows

</div>

<figure>
<img src="validation/screenshots/03-approval-flows-page.png" alt="Approval Flows main page" />
<figcaption>Approval Flows configuration page with request type tabs</figcaption>
</figure>

</div>

<div id="setup-process" class="section section">

## Setup Process

### Creating an Advanced Approval Flow

Advanced flows route requests based on specific criteria. Follow these steps to create a new conditional approval path.

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Navigate to Approval Flows

Go to Automations → Approval flows. Select the request type tab you want to configure (e.g., Air Ticket, Expense, Leave).

</div>

</div>

<div class="step">

<div class="step-number">

2

</div>

<div class="step-content">

#### Click Add Advance Flow

In the "Advanced approval flow (If conditions)" section, click the "+ Add advance flow" button. A dialog opens for flow configuration.

</div>

</div>

<figure>
<img src="validation/screenshots/advanced-flow-01-add-dialog-initial.png" alt="Define advanced approval flow dialog" />
<figcaption>Advanced flow creation dialog with Flow name, Description, Criteria, and Approval flow sections</figcaption>
</figure>

<div class="step">

<div class="step-number">

3

</div>

<div class="step-content">

#### Enter Flow Details

Provide a clear Flow name (e.g., "High Value Expenses - Finance Approval") and Description to identify when this flow applies.

</div>

</div>

<div class="step">

<div class="step-number">

4

</div>

<div class="step-content">

#### Add Criteria

Click "Add criteria" to define conditions. Select a data point, choose an operator, and enter the value. Multiple criteria use AND logic by default.

</div>

</div>

<figure>
<img src="validation/screenshots/advanced-flow-03-data-points-dropdown.png" alt="Criteria data points dropdown" />
<figcaption>Available data points include Policy, Amount, Currency, and 50+ employee attributes</figcaption>
</figure>

<div class="step">

<div class="step-number">

5

</div>

<div class="step-content">

#### Configure Approval Steps

Click "Add step" to create approval stages. Within each step, click "Add approver" and select roles from the dropdown (Line Manager, People Manager, Super Admin, or custom roles).

</div>

</div>

<figure>
<img src="validation/screenshots/advanced-flow-06-approver-roles-dropdown.png" alt="Approver roles dropdown" />
<figcaption>Available approver roles including Line Manager, People Manager, Super Admin, and custom roles</figcaption>
</figure>

<div class="step">

<div class="step-number">

6

</div>

<div class="step-content">

#### Save the Flow

Click "Done" to save the flow in an unsaved state. The flow appears in your list but is not yet active.

</div>

</div>

<div class="step">

<div class="step-number">

7

</div>

<div class="step-content">

#### Activate Changes

Click "Update Approval Flows" at the bottom of the page to activate all changes. Only after this step will new requests use the updated flows.

</div>

</div>

<div class="warning-box">

**Important:** Changes are not active until you click "Update Approval Flows". This allows you to configure multiple flows before activating them all at once.

</div>

### Understanding Criteria Options

When building criteria, you can use various data points and operators:

| Data Point Category | Examples | Use Case |
|----|----|----|
| **Request-Specific** | Policy, Amount, Currency | Route based on request value or type |
| **Employee Demographics** | Department, Grade, Location, Position | Route based on who is making the request |
| **Management Structure** | Direct Reports To, Roles, Line Manager | Route based on organizational hierarchy |
| **Custom Fields** | Cost Center, GL Code, Subsidiary | Route based on organization-specific attributes |

<figure>
<img src="validation/screenshots/advanced-flow-04-operation-options.png" alt="Operation options for amount field" />
<figcaption>Numeric operators: is between, is equal to, is greater than, is less than, and more</figcaption>
</figure>

### Configuring Default Approval Flows

The default flow acts as a fallback when no advanced flow criteria match. Every request type should have a default flow configured.

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Locate Default Flow Section

Scroll to the "Default approval flow (Else)" section below the advanced flows.

</div>

</div>

<div class="step">

<div class="step-number">

2

</div>

<div class="step-content">

#### Add Approval Steps

Click "Add step" and configure approvers. A simple default flow might just route to Line Manager (1 level).

</div>

</div>

<div class="step">

<div class="step-number">

3

</div>

<div class="step-content">

#### Save Changes

Click "Update Approval Flows" to activate the default flow configuration.

</div>

</div>

<div class="info-box">

**Tip:** Keep default flows simple. Use advanced flows for complex routing and let the default handle standard cases.

</div>

</div>

<div id="feature-usage" class="section section">

## Feature Usage

### Common Workflows

<div class="feature-grid">

<div class="feature-card">

#### Create Advanced Flow

Define conditional routing based on employee attributes, request amounts, or custom criteria.

</div>

<div class="feature-card">

#### Edit Existing Flow

Modify criteria, add/remove approval steps, or change approver roles in existing flows.

</div>

<div class="feature-card">

#### Manage Flow Priority

Reorder advanced flows to control which conditions are evaluated first.

</div>

</div>

### Editing an Existing Approval Flow

Modify approval flows to adjust criteria or change approver assignments.

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Locate the Flow

Navigate to Automations → Approval flows and select the request type tab. Find the flow you want to edit.

</div>

</div>

<div class="step">

<div class="step-number">

2

</div>

<div class="step-content">

#### Click Edit

Click the edit icon (pencil) next to the flow name. The edit dialog opens with all current settings.

</div>

</div>

<figure>
<img src="validation/screenshots/advanced-flow-07-edit-dialog-with-existing-flow.png" alt="Edit dialog with existing flow" />
<figcaption>Edit dialog showing pre-populated flow with existing criteria and approval steps</figcaption>
</figure>

<div class="step">

<div class="step-number">

3

</div>

<div class="step-content">

#### Make Changes

Modify the flow name, description, criteria conditions, or approval steps as needed. You can add or remove criteria and approvers.

</div>

</div>

<div class="step">

<div class="step-number">

4

</div>

<div class="step-content">

#### Save and Activate

Click "Done" to save changes, then click "Update Approval Flows" to activate.

</div>

</div>

<div class="warning-box">

**Note:** Changes only affect future requests. Requests already in progress continue through their originally assigned approval flow.

</div>

### Deleting an Approval Flow

Remove flows that are no longer needed.

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Find the Flow

Locate the advanced flow you want to delete in the list.

</div>

</div>

<div class="step">

<div class="step-number">

2

</div>

<div class="step-content">

#### Click Delete

Click the trash icon next to the flow. A confirmation dialog appears.

</div>

</div>

<figure>
<img src="validation/screenshots/advanced-flow-09-delete-confirmation-dialog.png" alt="Delete confirmation dialog" />
<figcaption>Delete confirmation warning that the action is permanent and cannot be undone</figcaption>
</figure>

<div class="step">

<div class="step-number">

3

</div>

<div class="step-content">

#### Confirm Deletion

Click "Confirm" to permanently delete the flow, or "Cancel" to keep it.

</div>

</div>

<div class="step">

<div class="step-number">

4

</div>

<div class="step-content">

#### Update Flows

Click "Update Approval Flows" to apply the deletion.

</div>

</div>

### Managing Flow Priority

When multiple advanced flows exist, they are evaluated in priority order. The first matching flow is applied.

<figure>
<img src="validation/screenshots/advanced-flow-08-ellipsis-menu-move-down-priority.png" alt="Ellipsis menu with priority option" />
<figcaption>Ellipsis menu showing "Move down in priority" option for reordering flows</figcaption>
</figure>

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Click Ellipsis Menu

Click the three-dot menu icon next to a flow to see priority options.

</div>

</div>

<div class="step">

<div class="step-number">

2

</div>

<div class="step-content">

#### Move Priority

Select "Move down in priority" or "Move up in priority" to change the evaluation order.

</div>

</div>

<div class="info-box">

**Best Practice:** Order flows from most specific to most general. Put narrow criteria (e.g., "Amount \> 10000 AND Department = Sales") before broad criteria (e.g., "Amount \> 5000").

</div>

### Using Parallel Approvers (OR Logic)

Configure multiple approvers within a single step where approval from any one approver is sufficient to proceed.

1.  When editing a flow, add a step
2.  Click "Add approver" multiple times within the same step
3.  Select different roles for each approver
4.  The system routes to all approvers simultaneously
5.  Approval from any one approver advances the request

<div class="info-box">

**Note:** If any approver in a step rejects the request, the entire approval process stops immediately, regardless of whether other approvers have approved.

</div>

</div>

<div id="workflow-integration" class="section section">

## Workflow Integration

### How Approval Flows Work

Approval flows are internal routing mechanisms that apply automatically when requests are submitted. They operate independently of Bayzat Workflows.

<div class="info-box">

**Note:** Approval Flows do not currently integrate with Bayzat Workflows as triggers or actions. The routing happens automatically within the request submission process.

</div>

### Automatic Routing Process

When an employee submits a request, the system automatically:

1.  **Evaluates advanced flows** in priority order for that request type
2.  **Applies the first matching flow** based on employee attributes and request data
3.  **Falls back to default flow** if no advanced flow criteria match
4.  **Routes to configured approvers** in sequence
5.  **Sends notifications** to approvers at each step
6.  **Advances through steps** as approvals are granted
7.  **Stops immediately** if any approver rejects

### Request Types with Approval Flows

Approval flows can be configured for these request categories:

<div class="feature-grid">

<div class="feature-card">

#### Leave Requests

Annual leave, sick leave, unpaid leave, and custom leave types

</div>

<div class="feature-card">

#### Financial Requests

Expenses, loans, leave salary requests, leave encashment

</div>

<div class="feature-card">

#### Time & Attendance

Attendance regularization, shift changes, overtime requests

</div>

<div class="feature-card">

#### Travel & Benefits

Air tickets, business trips, work from home requests

</div>

</div>

<figure>
<img src="validation/screenshots/07-expense-tab.png" alt="Expense tab configuration" />
<figcaption>Expense tab showing advanced flow configuration for expense requests</figcaption>
</figure>

</div>

<div id="business-rules" class="section section">

## Business Rules & Limitations

### Core Business Rules

| Rule | Description | Impact |
|----|----|----|
| Super Admin only | Only Super Admins can configure approval flows | Contact Super Admin for flow changes |
| Immediate rejection | Any rejection stops the entire approval process | Rejected requests don't continue to next approvers |
| Priority ordering | Advanced flows evaluated in order until match found | First matching flow is applied |
| Default fallback | Default flow applies when no advanced flow matches | Always configure a default flow |
| Role assignment required | Approver roles must be assigned in Role Management first | Missing roles won't appear in approver dropdown |

### System Constraints

- Changes only affect future requests—in-progress requests continue with original flow
- Employee attributes must be accurate in profiles for criteria matching
- All approvers in a step receive the request simultaneously (for parallel approval)
- Unsaved flows must be activated by clicking "Update Approval Flows"

### Known Limitations

<div class="info-box">

**No copy function:** Approval flows cannot be copied between request types. Each type must be configured individually.

</div>

</div>

<div id="troubleshooting" class="section section">

## Troubleshooting & Edge Cases

### Common Issues

| Issue | Cause | Resolution |
|----|----|----|
| Cannot access Approval Flows | User lacks Super Admin permissions | Contact Super Admin for access or changes |
| Line Manager not in dropdown | Role not assigned in Role Management | Assign Line Manager role in Settings → Role Management |
| Request not routing correctly | Criteria not matching employee data | Verify employee profile data matches criteria conditions |
| Changes not taking effect | Forgot to click Update Approval Flows | Click "Update Approval Flows" button to activate changes |
| Request stuck in approval | Approver hasn't taken action | Contact approver directly or check approval status |
| Wrong flow applied | Priority order issue or overlapping criteria | Review flow priorities and make specific criteria higher priority |

### Edge Cases

- **Approver role removed:** If an approver's role is removed after request submission, the request may become stuck. Super Admin intervention required.
- **Employee attribute changes:** If employee data changes after submission (e.g., department transfer), the request continues through the originally assigned flow.
- **No default flow:** If no default flow is configured and no advanced flows match, requests may fail to route. Always configure a default.
- **Multiple matching flows:** Only the first matching flow (by priority) is applied. Review priority ordering for overlapping criteria.

</div>

<div id="support-resources" class="section section">

## Support Resources

### Frequently Asked Questions

<div class="faq-accordion">

Can employees see which approval flow is applied to their request?

<div class="faq-answer">

No, employees see the approvers assigned to their request but not the flow name. The routing is applied automatically based on their profile attributes.

</div>

What happens if an approver is on leave?

<div class="faq-answer">

The request remains pending until the approver returns. Consider using parallel approvers (OR logic) to prevent bottlenecks when key people are unavailable.

</div>

Can I set up automatic approval for certain requests?

<div class="faq-answer">

Not directly through Approval Flows. You would need to configure a single-step flow and potentially use Bayzat Workflows to trigger automatic approvals based on conditions.

</div>

How many advanced flows can I create per request type?

<div class="faq-answer">

There is no documented limit. For maintainability, keep the number manageable (typically under 10) with clear naming conventions.

</div>

What's the difference between parallel approvers and sequential steps?

<div class="faq-answer">

Parallel approvers (within one step) = any one can approve. Sequential steps = all must approve in order. Use parallel for flexibility, sequential for governance.

</div>

Can I require ALL approvers in a step to approve?

<div class="faq-answer">

Add each approver as a separate sequential step rather than multiple approvers in one step. This ensures all must approve before the request proceeds.

</div>

</div>

### Getting Help

- Contact your HR Administrator for policy questions and configuration support
- Bayzat Support Team - Available for technical issues and feature questions
- Knowledge Base - Access additional articles and guides at [bayzathelp.zendesk.com](https://bayzathelp.zendesk.com)
- In-app Help - Click the help icon (?) for contextual assistance

</div>

<div id="glossary" class="section section">

## Glossary of Terms

| Term | Definition |
|----|----|
| **Advanced Flow** | A conditional approval routing configuration using "If" criteria to match employee attributes and route requests to specific approvers. |
| **Approval Flow** | The sequence of approvers that a request must pass through before being fully approved. |
| **Approver** | A user with authority to approve or reject a request, typically assigned by role (e.g., Line Manager). |
| **Criteria** | Conditions used in advanced flows to match employee attributes (e.g., department, grade, location). |
| **Data Point** | An employee attribute or profile field that can be used as criteria in advanced flows. |
| **Default Flow** | The "Else" fallback approval routing that applies when no advanced flow criteria match. |
| **Line Manager** | The direct supervisor of an employee, commonly used as the first approver in approval flows. |
| **OR Logic** | Parallel approval configuration where approval by any one of multiple approvers in a step is sufficient. |
| **Priority Order** | The sequence in which advanced flows are evaluated. First matching flow is applied. |
| **Request Type** | A category of employee request (Leave, Expense, Loan, etc.) with its own approval flow configuration. |
| **Step** | A single stage in an approval flow containing one or more approvers. Requests proceed sequentially through steps. |
| **Super Admin** | The highest permission level in Bayzat with full access to configure approval flows. |

</div>

Generated by Bayzat Documentation System

Last updated: 2026-01-23
