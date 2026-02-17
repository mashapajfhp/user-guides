<div class="hero-banner">

# Leave Encashment

Convert unused leave into monetary compensation with flexible policy management

</div>

<figure>
<img src="screenshots/03-leave-encashment-policy-form-step1.png" alt="Leave Encashment Policy Configuration" />
<figcaption>Leave Encashment Policy Configuration - Define calculation methods and eligibility criteria</figcaption>
</figure>

<div class="nav-header">

<span class="nav-icon">🧭</span> <span class="nav-title">Quick Navigation</span>

</div>

<div class="nav-grid">

<a href="#overview" class="nav-card"><span class="card-icon">📋</span><span class="card-label">Overview</span></a> <a href="#users" class="nav-card"><span class="card-icon">👥</span><span class="card-label">Who Uses This</span></a> <a href="#navigation" class="nav-card"><span class="card-icon">🧭</span><span class="card-label">How to Access</span></a> <a href="#user-journey" class="nav-card"><span class="card-icon">🗺️</span><span class="card-label">User Journey</span></a> <a href="#policy-setup" class="nav-card"><span class="card-icon">⚙️</span><span class="card-label">Policy Setup</span></a> <a href="#employee-request" class="nav-card"><span class="card-icon">📝</span><span class="card-label">Employee Request</span></a> <a href="#approval-workflow" class="nav-card"><span class="card-icon">✅</span><span class="card-label">Approval Workflow</span></a> <a href="#payroll-integration" class="nav-card"><span class="card-icon">💰</span><span class="card-label">Payroll Integration</span></a> <a href="#business-rules" class="nav-card"><span class="card-icon">⚖️</span><span class="card-label">Business Rules</span></a> <a href="#troubleshooting" class="nav-card"><span class="card-icon">🔧</span><span class="card-label">Troubleshooting</span></a>

</div>

<div id="overview" class="section section">

## What is Leave Encashment?

### Overview

Leave Encashment is a comprehensive leave management feature that allows organizations to convert employees' unused leave balances into monetary compensation. The feature supports two primary use cases: voluntary leave encashment during employment (where employees can request to cash out accrued leave days) and mandatory leave encashment during end-of-service settlements.

### Key Benefits

- Enable employees to encash unused leave balances through a structured ticket system
- Configure customizable policies with salary components, calculation methods, and eligibility criteria
- Streamline approval workflows and integrate approved encashments directly into payroll processing
- Support both mid-year leave encashment requests and end-of-service leave settlements

</div>

<div class="section section">

## Who Uses This Feature?

The Leave Encashment feature serves multiple user personas across the organization:

| User Role | What They Do | Value Proposition |
|----|----|----|
| **Employees** | Submit leave encashment requests through the mobile ticket system to convert unused vacation days into financial compensation | Convert unused leave into cash with a simple request and transparent tracking—eliminating uncertainty about eligibility and payment timelines |
| **HR Administrators & Payroll Managers** | Configure leave encashment policies, define eligibility criteria, set calculation rules, and manage the overall encashment framework | Design encashment policies that match your organization's rules and have them enforced automatically—without manual eligibility checks or calculation errors |
| **Super Admins** | Configure end-of-service leave encashment settings, including salary components and calculation methods for final settlements | Ensure consistent, compliant leave encashment across all employee departures—eliminating ad-hoc calculations and potential legal disputes |
| **Approvers** | Review, approve, or reject leave encashment requests through configured approval workflows (Line Managers, Payroll Admins, Transaction Processing Admins) | Make informed approval decisions with full visibility into leave balances and policy compliance—rather than manually verifying eligibility |
| **System Administrators** | Set up leave encashment employee ticket types and configure which employees can access the feature | Control feature access and request workflows with granular permissions—ensuring only eligible employees can submit encashment requests |

</div>

<div id="product-foundation" class="section section section-product-foundation">

<div class="section-header">

## Product Foundation Overview

</div>

<div class="section-body">

<div class="subsection">

### How Leave Encashment Fits

Leave Encashment is a **leave-to-cash conversion system** that allows employees to convert unused leave balances into monetary compensation. It supports both voluntary mid-year requests and mandatory end-of-service settlements with configurable policies and payroll integration.

<div class="info-box">

**Mental model:** HR creates policy → Defines eligibility and calculation rules → Employee submits ticket → System validates balance → Approver reviews → Approved amount added to payroll.

</div>

Properly configured leave encashment policies automate calculations and ensure compliance with labor regulations.

</div>

<div class="subsection">

### Key Decisions Before Setup

Answer these questions before configuring leave encashment:

- **Which leave types are encashable?** — Typically Vacation/Annual Leave; exclude sick or unpaid leave
- **What are the eligibility criteria?** — Minimum tenure, minimum accrued days, probation restrictions
- **How should amounts be calculated?** — Basic Salary only vs. Basic + Allowances; calendar vs. working days
- **What approval workflow applies?** — Define approvers (Line Manager, Payroll Admin, etc.)

</div>

<div class="subsection">

### Related Features

- **Leave Management** — Source for leave balances and accrual tracking
- **Payroll Module** — Processes approved encashment amounts in payroll cycles
- **Employee Tickets** — Request submission and tracking system
- **End of Service** — Integrates leave encashment into final settlements
- **Daily Wage Calculator** — Provides calculation basis for encashment amounts

</div>

<div class="subsection">

### Prerequisites & Requirements

| Requirement | Description | Status |
|----|----|----|
| Leave Management Module | Active with at least one encashable leave type configured | Required |
| Payroll Module | Configured with employee salary information | Required |
| Daily Wage Settings | Calculation basis configured in Settings \> Payroll | Required |
| Employee Ticket Type | Leave encashment ticket type created and assigned | Required |

</div>

</div>

</div>

<div class="section section">

## Key Capabilities

The Leave Encashment feature provides the following core capabilities:

<div class="feature-grid">

<div class="feature-card">

#### Policy Configuration

Create and manage leave encashment policies with customizable rules including minimum accrued leave days, minimum job tenure requirements, maximum encashment limits per request, and probation period restrictions.

</div>

<div class="feature-card">

#### Flexible Calculation Methods

Configure encashment calculations based on Basic Salary or Basic Salary + Allowances, with options for calendar days, working days, or custom day calculations.

</div>

<div class="feature-card">

#### Employee Eligibility Management

Define which employees are eligible for leave encashment by selecting specific employees or applying policies to all staff members.

</div>

<div class="feature-card">

#### Ticket-Based Request System

Employees submit leave encashment requests through a structured ticket system with fields for leave type, number of days, and automatic amount calculation.

</div>

</div>

<figure>
<img src="screenshots/04-leave-encashment-calculation-and-criteria.png" alt="Leave Encashment Calculation Settings" />
<figcaption>Configure calculation formula and eligibility criteria for leave encashment</figcaption>
</figure>

- **Approval Workflows:** Configure multi-level approval flows with parallel or sequential approvers, routing requests based on assigned roles
- **Payroll Integration:** Automatically include approved leave encashment amounts in the current payroll cycle for seamless compensation processing
- **End-of-Service Integration:** Calculate leave encashment as part of end-of-service settlements based on configured eligibility and calculation rules
- **Request Tracking & Reporting:** Monitor leave encashment requests through Pending, Approved, and Rejected tabs with downloadable reports

</div>

<div class="section section">

## Business Value

Leave Encashment delivers significant value to organizations by:

- **Enhancing Employee Flexibility:** Provides employees with financial flexibility by allowing them to convert unused leave into immediate compensation, improving employee satisfaction and work-life balance
- **Ensuring Compliance:** Supports labor law requirements for leave encashment during end-of-service, particularly in jurisdictions like the UAE where MOHRE regulations govern leave settlements
- **Reducing Administrative Burden:** Automates leave encashment calculations, approval routing, and payroll integration, reducing manual processing time and potential errors
- **Improving Financial Planning:** Enables organizations to manage leave liabilities more effectively by providing employees with encashment options during employment rather than accumulating large leave balances
- **Supporting Policy Customization:** Allows organizations to tailor leave encashment rules to their specific business needs, culture, and regulatory requirements
- **Providing Audit Trails:** Maintains complete records of leave encashment requests, approvals, and payments for compliance and audit purposes

<div class="info-box">

**Note:** The Leave Encashment feature is currently under active development. Some capabilities described in this guide may have known limitations or require workarounds. Refer to the Business Rules & Limitations section for detailed information about current constraints.

</div>

</div>

<div class="section section">

## Technical Prerequisites

Before implementing Leave Encashment, ensure the following technical prerequisites are in place:

### Required System Configuration

- **Leave Management Module:** The Time Off/Leave Management module must be active and configured with at least one leave type (e.g., Vacation, Annual Leave)
- **Payroll Module:** The Payroll module must be enabled and configured with employee salary information, including basic salary and allowances
- **Employee Profiles:** Complete employee profiles with accurate hire dates, salary components, and leave type assignments
- **Daily Wage Calculation:** Daily wage calculation settings must be configured in Settings \> Payroll \> Daily Wage Calculation, specifying the calculation basis (calendar days, working days, or custom days)
- **Leave Policies:** Active leave policies with accrual rules and balance tracking must be assigned to employees

### Required User Roles & Permissions

The following roles are required for different aspects of Leave Encashment functionality:

- **Super Admin:** Required for configuring end-of-service leave encashment settings and global payroll configurations
- **Payroll Table Admin:** Required for managing leave encashment policies and accessing payroll-related configurations
- **Transaction Processing Admin:** Required for processing approved leave encashment requests and adding them to payroll
- **Adjustment Manager:** Required for creating and managing salary adjustments related to leave encashment
- **System Administrator:** Required for setting up leave encashment employee ticket types and configuring ticket visibility

<div class="warning-box">

**Known Limitation:** Custom roles for leave encashment approval flows must be mapped to the correct policy by backend administrators. Custom roles do not automatically appear in approval flow dropdowns without proper policy mapping (Jira: TSSD-4337).

</div>

</div>

<div class="section section">

## Dependencies on Other Modules

Leave Encashment integrates with and depends on the following Bayzat platform modules:

### Leave Management Module

- **Leave Types:** Leave encashment policies are tied to specific leave types configured in the Time Off module
- **Leave Balances:** The system validates employee leave balances to ensure sufficient accrued days exist before processing encashment requests
- **Leave Accrual:** Leave encashment calculations depend on accurate leave accrual tracking based on configured accrual rules

### Payroll Module

- **Salary Components:** Leave encashment calculations use employee salary data (basic salary and/or allowances) from the Payroll module
- **Daily Wage Calculator:** The Daily Wage Calculation settings determine how daily rates are computed for leave encashment amounts
- **Payroll Table:** Approved leave encashment requests are automatically added to the payroll table as salary adjustments
- **End of Service:** Leave encashment is calculated as part of end-of-service settlements based on configured eligibility rules

<figure>
<img src="screenshots/01-payroll-settings-leave-encashment-section.png" alt="Payroll Settings - Leave Encashment Section" />
<figcaption>Leave Encashment settings in the Payroll configuration area</figcaption>
</figure>

### Employee Tickets Module

- **Ticket System:** Leave encashment requests are submitted and tracked through the Employee Tickets system
- **Ticket Types:** A dedicated Leave Encashment ticket type must be configured and enabled in Settings \> Tickets
- **Ticket Visibility:** Employee eligibility for submitting leave encashment tickets is controlled through ticket type configuration

### Approval Flows Module

- **Approval Routing:** Leave encashment requests route through configured approval workflows based on assigned roles
- **Multi-Level Approvals:** The system supports sequential and parallel approval steps for leave encashment requests
- **Approval Notifications:** Email and in-app notifications are triggered based on approval flow configurations

</div>

<div class="section section">

## Setting Up Leave Encashment Tickets

To enable employees to submit leave encashment requests, you need to configure the Leave Encashment ticket type:

<div class="nav-path">

Settings \> Tickets \> Payroll Category \> Leave Encashment

</div>

<figure>
<img src="screenshots/06-tickets-payroll-category-leave-encashment.png" alt="Leave Encashment Ticket Configuration" />
<figcaption>Configure Leave Encashment ticket type in Settings</figcaption>
</figure>

### Configuration Steps

1.  Navigate to **Settings \> Tickets**
2.  Locate the **Leave Encashment** ticket under the Payroll category
3.  Enable the ticket type by toggling it to Active
4.  Configure admin roles allowed to manage leave encashment tickets
5.  Select employees who can request leave encashment tickets (all employees or custom selection)
6.  Review and save the ticket type configuration

<figure>
<img src="screenshots/07-leave-encashment-ticket-config-step1.png" alt="Leave Encashment Ticket Configuration Step 1" />
<figcaption>Step 1: Basic ticket configuration settings</figcaption>
</figure>

<figure>
<img src="screenshots/08-leave-encashment-ticket-admin-roles-fields.png" alt="Leave Encashment Ticket Admin Roles and Fields" />
<figcaption>Configure admin roles and employee fields for leave encashment tickets</figcaption>
</figure>

</div>

<div class="section section">

## Known Limitations & Workarounds

The following limitations are currently known for the Leave Encashment feature:

| Issue | Severity | Workaround | Reference |
|----|----|----|----|
| Inaccurate prorated leave encashment calculations for partial year exits | High | Manual calculation and adjustment needed for accurate leave encashment | OS-345, TSSD-2499 |
| Custom role configuration complexity for leave encashment approvals | Medium | Manual backend configuration required to map custom roles to policies | TSSD-4337 |
| Leave Encashment ticket visibility cannot be restricted by employee selection | Medium | No workaround available; selective ticket visibility is not supported | TSSD-4764 |
| Unclear handling of overused leave days in end of service leave encashment | Medium | Manual verification and adjustment may be required for MOHRE compliance | TSSD-1404 |
| User interface does not clearly confirm leave encashment configuration changes | Medium | Users should verify changes by revisiting configuration screens | TSSD-3939 |
| No ability to delete leave encashment policies | Low | Policies must be disabled or replaced; deletion is not possible | OS-655 |

<div class="warning-box">

**Important:** The platform currently lacks specific backend endpoints for creating, editing, and deleting leave encashment requests programmatically (Jira: OS-657, OS-662). All leave encashment operations must be performed through the Bayzat user interface.

</div>

</div>

<div id="user-journey" class="section section">

## Data Flow

The leave encashment process follows this workflow:

<div class="journey-roadmap">

<div class="journey-phases">

<div class="journey-phase">

<div class="phase-marker">

1

</div>

<div class="phase-content">

#### Policy Configuration

Settings → Leave → Encashment Policies

Administrators configure leave encashment policies with eligibility rules and calculation methods

<a href="#policy-setup" class="phase-link">Learn more →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

2

</div>

<div class="phase-content">

#### Employee Request

Requests → Leave Encashment → New Request

Employees submit leave encashment tickets through the mobile or web interface

<a href="#employee-request" class="phase-link">Learn more →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

3

</div>

<div class="phase-content">

#### Validation

Automatic System Check

The system validates the request against policy rules, leave balances, and employee eligibility

<a href="#business-rules" class="phase-link">Learn more →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

4

</div>

<div class="phase-content">

#### Approval Routing

Requests → Leave Encashment → Pending

The request routes through configured approval workflows

<a href="#approval-workflow" class="phase-link">Learn more →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

5

</div>

<div class="phase-content">

#### Calculation

Automatic Calculation Engine

Upon approval, the system calculates the encashment amount using configured salary components

<a href="#policy-setup" class="phase-link">Learn more →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

6

</div>

<div class="phase-content">

#### Payroll Integration

Payroll → Payroll Table

The approved amount is added to the payroll table for the current pay period

<a href="#payroll-integration" class="phase-link">Learn more →</a>

</div>

</div>

</div>

</div>

</div>

<div id="support-resources" class="section section">

## Support Resources

### Frequently Asked Questions

<div class="faq-accordion">

Who is eligible to request leave encashment?

<div class="faq-answer">

Eligibility is defined in your organization's Leave Encashment Policy. Common criteria include minimum tenure (e.g., 1 year), minimum accrued leave days, completion of probation period, and assignment to an active leave encashment policy.

</div>

How do I submit a leave encashment request?

<div class="faq-answer">

From the mobile app, navigate to Tickets → Create New Ticket → Select "Leave Encashment" ticket type. Enter the number of days you want to encash and submit. The request routes through the configured approval workflow.

</div>

How is the encashment amount calculated?

<div class="faq-answer">

The amount is calculated by multiplying your daily wage by the number of days requested. Your daily wage is determined by the policy settings: either Basic Salary only or Basic + Allowances, divided by the configured days (calendar or working days).

</div>

When will I receive my encashment payment?

<div class="faq-answer">

After your request is approved, the amount is added to the payroll table for the current pay period. Payment is processed with your regular salary on the next payroll run date.

</div>

What's the difference between leave encashment and leave salary?

<div class="faq-answer">

Leave encashment converts unused leave days into cash without taking time off. Leave salary pays you when you actually take approved leave. Both use daily wage calculations but serve different purposes.

</div>

</div>

### Getting Help

- **In-App Support:** Use the help icon within the Bayzat platform for contextual guidance
- **HR Administrator:** Contact your HR team for policy questions and eligibility verification
- **Bayzat Support:** Email support@bayzat.com for technical issues or calculation discrepancies

</div>

Generated by Bayzat Documentation System

Last updated: 2026-01-13
