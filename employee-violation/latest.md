<div class="hero-banner">

# Employee Violation <span class="badge badge-warning">Beta</span>

Track employee violations, manage disciplinary actions, and enforce progressive discipline policies

</div>

<div class="nav-header">

<span class="nav-icon">📖</span> <span class="nav-title">Quick Navigation</span>

</div>

<div class="nav-grid">

<a href="#feature-overview" class="nav-card"><span class="card-icon">✨</span><span class="card-label">Feature Overview</span></a> <a href="#product-foundation" class="nav-card"><span class="card-icon">🏗️</span><span class="card-label">Product Foundation</span></a> <a href="#user-journey" class="nav-card"><span class="card-icon">🗺️</span><span class="card-label">User Journey</span></a> <a href="#feature-entry-points" class="nav-card"><span class="card-icon">🚪</span><span class="card-label">Entry Points</span></a> <a href="#core-tasks" class="nav-card"><span class="card-icon">📋</span><span class="card-label">Managing Violations</span></a> <a href="#violation-types" class="nav-card"><span class="card-icon">📑</span><span class="card-label">Violation Types</span></a> <a href="#escalation-rules" class="nav-card"><span class="card-icon">⚡</span><span class="card-label">Escalation Rules</span></a> <a href="#business-rules-limitations" class="nav-card"><span class="card-icon">📜</span><span class="card-label">Business Rules</span></a> <a href="#troubleshooting-edge-cases" class="nav-card"><span class="card-icon">🔧</span><span class="card-label">Troubleshooting</span></a> <a href="#support-resources" class="nav-card"><span class="card-icon">💬</span><span class="card-label">Support Resources</span></a> <a href="#glossary" class="nav-card"><span class="card-icon">📚</span><span class="card-label">Glossary</span></a>

</div>

<figure>
<img src="validation/screenshots/03-employee-violation-main.png" alt="Employee Violation dashboard showing violations list" />
<figcaption>Employee Violation Dashboard - Track and manage employee violations with status filtering and ticket integration</figcaption>
</figure>

<div id="feature-overview" class="section section">

## What is Employee Violation?

### Overview

Employee Violation is a comprehensive disciplinary management system within the Bayzat HR platform that enables HR managers and supervisors to track, document, and manage employee violations. The feature is currently in <span class="badge badge-warning">Beta</span> and supports progressive discipline with configurable escalation rules, validity periods, and integration with the Employee Tickets system for approval workflows.

### Key Benefits

- Centralized tracking of all employee violations with complete audit trails
- Progressive discipline enforcement with automated escalation rules
- 26 pre-configured violation types with customizable validity periods
- Integration with Employee Tickets for approval workflows
- Comprehensive analytics and reporting on violation trends

### Who Uses This Feature?

| User Role | What They Do | Value Proposition |
|----|----|----|
| **HR Administrators** | Configure violation types, escalation rules, and manage overall compliance | Standardize disciplinary processes with consistent violation categories and escalation paths—ensuring fair treatment while maintaining complete audit trails |
| **Line Managers** | Log violations for their team members and track disciplinary history | Document performance issues with proper context and history—rather than relying on memory or scattered notes when addressing recurring problems |
| **Supervisors** | Review and approve violation records through the ticketing system | Review violations with full context and previous history before taking action—ensuring proportionate responses and reducing wrongful escalations |
| **Compliance Officers** | Monitor violation trends and ensure policy enforcement | Identify patterns across departments and time periods with comprehensive analytics—enabling proactive intervention before issues escalate |

</div>

<div id="product-foundation" class="section section section-product-foundation">

<div class="section-header">

## Product Foundation Overview

</div>

<div class="section-body">

<div class="subsection">

### How Employee Violation Fits

Employee Violation is a **disciplinary management system** that tracks, documents, and escalates workplace infractions. It supports progressive discipline with 26 pre-configured violation types and integrates with Employee Tickets for approval workflows.

<div class="info-box">

**Mental model:** Manager logs violation → System creates ticket → Approver reviews → Violation recorded → System checks escalation rules → Progressive discipline applied based on frequency and validity periods.

</div>

Properly configured violation tracking ensures fair, consistent discipline with complete audit trails for compliance.

</div>

<div class="subsection">

### Key Decisions Before Setup

Answer these questions before configuring violations:

- **Which violation types apply to your organization?** — Review 26 pre-configured types and enable relevant ones
- **What validity periods suit your policies?** — Configure 30, 180, 365 days, or permanent tracking
- **How should escalation work?** — Define progressive discipline rules (verbal → written → suspension → termination)
- **Who can log and approve violations?** — Assign appropriate permissions to managers and HR

</div>

<div class="subsection">

### Related Features

- **Employee Tickets** — Violations create tickets for approval workflow and audit trails
- **Employee Directory** — View individual violation histories and patterns
- **Reports** — Analytics showing violation trends and employees requiring attention
- **Settings** — Configure violation types and escalation rules

</div>

<div class="subsection">

### Prerequisites & Requirements

| Requirement | Description | Status |
|----|----|----|
| Bayzat HR Platform | Active account with appropriate subscription plan | Required |
| User Roles | HR Admin or Manager role with violation management permissions | Required |
| Employee Records | Active employee profiles in the system | Required |
| Escalation Rules | Pre-configured in Settings for progressive discipline | Recommended |

</div>

</div>

</div>

<div id="user-journey" class="section section">

## Complete User Journey Guide

<div class="journey-roadmap">

### End-to-End Journey: Employee Violation

The Employee Violation journey involves managers logging violations, the system creating tickets for approval, and progressive discipline being applied based on configured escalation rules.

<div class="journey-phases">

<div class="journey-phase">

<div class="phase-marker">

1

</div>

<div class="phase-content">

#### Log Violation

<div class="nav-path">

Apps → Employee Violation → Log Violation

</div>

<a href="#core-tasks" class="phase-link">See how to log →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

2

</div>

<div class="phase-content">

#### Ticket Created

<div class="nav-path">

System creates Employee Ticket automatically

</div>

<a href="#core-tasks" class="phase-link">See ticket integration →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

3

</div>

<div class="phase-content">

#### Pending Review

<div class="nav-path">

Violations → Pending tab

</div>

<a href="#feature-entry-points" class="phase-link">See status tabs →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

4

</div>

<div class="phase-content">

#### Approval Decision

<div class="nav-path">

Approver reviews and approves/rejects

</div>

<a href="#core-tasks" class="phase-link">See approval workflow →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

5

</div>

<div class="phase-content">

#### Escalation Check

<div class="nav-path">

System checks progressive discipline rules

</div>

<a href="#escalation-rules" class="phase-link">See escalation rules →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

6

</div>

<div class="phase-content">

#### Action Applied

<div class="nav-path">

Disciplinary action recorded on employee file

</div>

<a href="#feature-entry-points" class="phase-link">See employee directory →</a>

</div>

</div>

</div>

</div>

</div>

<div id="feature-entry-points" class="section section">

## Feature Discovery

### How to Access

Employee Violation is accessed through the Apps menu in the main navigation. The feature is marked as <span class="badge badge-warning">Beta</span> indicating ongoing enhancements.

### Navigation Paths

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Access Employee Violation

Apps → Employee Violation → View Violations, Employee Directory, Reports, or Settings

</div>

</div>

<figure>
<img src="validation/screenshots/03-employee-violation-main.png" alt="Employee Violation main page showing violations list" />
<figcaption>Main violations page with status tabs (All, Pending, Approved, Rejected) and Log Violation button</figcaption>
</figure>

<div class="step">

<div class="step-number">

2

</div>

<div class="step-content">

#### View Employee Directory

Click Employee Directory tab to browse employees and view their violation histories

</div>

</div>

<figure>
<img src="validation/screenshots/10-employee-profile-violation-history.png" alt="Employee violation history showing individual records" />
<figcaption>Employee profile displaying violation history with dates, types, and statuses</figcaption>
</figure>

<div class="step">

<div class="step-number">

3

</div>

<div class="step-content">

#### Access Reports

Click Reports tab to view analytics dashboard with violation statistics and trends

</div>

</div>

<figure>
<img src="validation/screenshots/11-reports-analytics-page.png" alt="Reports analytics dashboard" />
<figcaption>Analytics dashboard showing total violations, employee metrics, and trend charts</figcaption>
</figure>

</div>

<div id="core-tasks" class="section section">

## Managing Violations

### Logging a New Violation

Click the "Log Violation" button to record a new violation against an employee.

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Open Log Violation Dialog

Click the purple "Log Violation" button in the top-right corner of the Violations page

</div>

</div>

<figure>
<img src="validation/screenshots/16-log-violation-dialog-empty.png" alt="Log Violation dialog form" />
<figcaption>Log Violation dialog with fields for Employee, Violation Type, Date, and Notes</figcaption>
</figure>

<div class="step">

<div class="step-number">

2

</div>

<div class="step-content">

#### Select Employee

Choose the employee from the dropdown list of active employees

</div>

</div>

<div class="step">

<div class="step-number">

3

</div>

<div class="step-content">

#### Choose Violation Type

Select from 26 pre-configured violation types based on the infraction

</div>

</div>

<figure>
<img src="validation/screenshots/07-violation-types-dropdown.png" alt="Violation types dropdown showing available options" />
<figcaption>Violation Types dropdown with comprehensive list of infraction categories</figcaption>
</figure>

<div class="step">

<div class="step-number">

4

</div>

<div class="step-content">

#### Set Date and Submit

Enter the violation date, add any notes, and click "Log Violation" to submit

</div>

</div>

### Viewing Violation Details

Click on any violation row to view the associated Employee Ticket with full details and activity history.

<figure>
<img src="validation/screenshots/08-violation-ticket-details.png" alt="Violation ticket details" />
<figcaption>Violation ticket showing complete details, status, and approval information</figcaption>
</figure>

<div class="info-box">

**Ticket Integration:** Every violation automatically creates an Employee Ticket. Click the Ticket ID to view full details, add comments, and track the approval workflow.

</div>

</div>

<div id="violation-types" class="section section">

## Violation Types

### Understanding Validity Periods

Each violation type has a validity period that determines how long it counts toward escalation calculations:

<div class="feature-grid">

<div class="feature-card">

#### <span class="validity-badge validity-30">30 Days</span>

Minor infractions like lateness or dress code violations that reset quickly.

</div>

<div class="feature-card">

#### <span class="validity-badge validity-180">180 Days</span>

Moderate violations like unauthorized absence or poor performance.

</div>

<div class="feature-card">

#### <span class="validity-badge validity-365">365 Days</span>

Serious violations like negligence, insubordination, or safety breaches.

</div>

<div class="feature-card">

#### <span class="validity-badge validity-none">No Validity</span>

Permanent records for severe violations like harassment, theft, or fraud.

</div>

</div>

<figure>
<img src="validation/screenshots/12-settings-violation-types.png" alt="Violation Types settings page" />
<figcaption>Settings page showing all 26 violation types with their configured validity periods</figcaption>
</figure>

### Available Violation Types

| Violation Type | Validity | Description |
|----|----|----|
| Lateness | <span class="validity-badge validity-30">30 Days</span> | Arriving after scheduled work time |
| Leaving Work Early | <span class="validity-badge validity-30">30 Days</span> | Departing before end of shift without approval |
| Dress Code Violation | <span class="validity-badge validity-30">30 Days</span> | Non-compliance with dress standards |
| Unauthorized Absence | <span class="validity-badge validity-180">180 Days</span> | Missing work without proper notification |
| Poor Performance | <span class="validity-badge validity-180">180 Days</span> | Failure to meet job standards |
| Misuse of Company Property | <span class="validity-badge validity-180">180 Days</span> | Improper use of company resources |
| Negligence/Carelessness | <span class="validity-badge validity-365">365 Days</span> | Failure to exercise proper care in duties |
| Insubordination | <span class="validity-badge validity-365">365 Days</span> | Refusal to follow legitimate instructions |
| Safety Violation | <span class="validity-badge validity-365">365 Days</span> | Breach of workplace safety protocols |
| Harassment | <span class="validity-badge validity-none">No Validity</span> | Unwanted behavior toward colleagues |
| Theft/Fraud | <span class="validity-badge validity-none">No Validity</span> | Stealing or deceptive practices |
| Confidentiality Breach | <span class="validity-badge validity-none">No Validity</span> | Unauthorized disclosure of sensitive information |

<div class="info-box">

**Validity Impact:** When a violation's validity period expires, it no longer counts toward escalation thresholds. For example, a lateness violation (30-day validity) logged on January 1st would not trigger escalation after January 31st.

</div>

</div>

<div id="escalation-rules" class="section section">

## Escalation Rules

### Progressive Discipline

Escalation rules define automatic disciplinary actions based on accumulated violations within validity periods. A typical progression follows:

<div class="escalation-flow">

<span class="escalation-level level-verbal">1st - Verbal Warning</span> <span class="escalation-arrow">→</span> <span class="escalation-level level-written">2nd - Written Warning</span> <span class="escalation-arrow">→</span> <span class="escalation-level level-final">3rd - Final Warning</span> <span class="escalation-arrow">→</span> <span class="escalation-level level-termination">4th - Termination</span>

</div>

<figure>
<img src="validation/screenshots/13-settings-escalation-rules.png" alt="Escalation Rules settings" />
<figcaption>Escalation Rules configuration showing progressive discipline levels for violation types</figcaption>
</figure>

### Configuring Escalation Rules

<div class="step">

<div class="step-number">

1

</div>

<div class="step-content">

#### Navigate to Settings

Go to Settings tab and select Escalation Rules section

</div>

</div>

<div class="step">

<div class="step-number">

2

</div>

<div class="step-content">

#### Add Escalation Rule

Click "Add Escalation Rule" to configure a new progressive discipline rule

</div>

</div>

<figure>
<img src="validation/screenshots/14-add-escalation-rule-dialog.png" alt="Add Escalation Rule dialog" />
<figcaption>Add Escalation Rule dialog with violation type, occurrence count, and action configuration</figcaption>
</figure>

### Deduction Types

When configuring escalation rules, you can specify financial penalties:

<figure>
<img src="validation/screenshots/15-deduction-type-options.png" alt="Deduction Type dropdown options" />
<figcaption>Deduction Type options: No Deduction, Percentage of Monthly Salary, Custom Amount</figcaption>
</figure>

| Deduction Type | Description | Use Case |
|----|----|----|
| No Deduction | No financial penalty applied | Verbal and written warnings |
| Percentage of Monthly Salary | Deduct a percentage from pay | Moderate penalties (5%, 10%) |
| Custom Amount | Fixed monetary deduction | Specific fines per company policy |

<div class="warning-box">

**Legal Compliance:** Ensure all escalation rules and deductions comply with UAE labor law and employment contracts. Consult with your legal team before implementing financial penalties.

</div>

</div>

<div id="business-rules-limitations" class="section section">

## Business Rules & Limitations

### Core Business Rules

| Rule | Description | Impact |
|----|----|----|
| Ticket Integration | Every violation creates an Employee Ticket | Approval workflow required for all violations |
| Validity-Based Escalation | Only active violations count toward escalation | Expired violations don't trigger progressive discipline |
| Immutable Records | Violations cannot be deleted once logged | Only rejection through approval workflow |
| Status Workflow | Violations progress through Pending → Approved/Rejected | Complete audit trail maintained |

### System Constraints

- Custom violation types cannot be added (26 pre-configured types only)
- Violations cannot be deleted, only rejected through workflow
- Bulk operations on violations are not yet available
- Export functionality may have limited format options
- Mobile app access may have reduced functionality

<div class="warning-box">

**Beta Limitations:** As a Beta feature, some functionality is still being developed. Report any issues through Bayzat support for prioritization.

</div>

</div>

<div id="troubleshooting-edge-cases" class="section section">

## Troubleshooting & Edge Cases

### Common Issues

| Issue | Cause | Resolution |
|----|----|----|
| Cannot log violation | Missing required fields or permissions | Ensure all fields are filled and you have appropriate role |
| Employee not in dropdown | Employee not active in system | Verify employee status in HR system |
| Violation not appearing | Filter settings or loading delay | Check filter is set to "All" and refresh page |
| Escalation not triggering | Previous violations expired | Check if violations are within validity period |
| Ticket link not working | Pop-up blocked or session expired | Allow pop-ups for Bayzat and re-authenticate |

### Best Practices

<div class="feature-card">

#### Document Thoroughly

Always include detailed notes when logging violations for future reference and legal compliance.

</div>

<div class="feature-card">

#### Act Promptly

Log violations as soon as they occur to maintain accurate records and timestamps.

</div>

<div class="feature-card">

#### Configure First

Set up escalation rules before actively logging violations to ensure consistent discipline.

</div>

<div class="feature-card">

#### Review Regularly

Check pending violations daily to avoid approval backlogs and ensure timely processing.

</div>

</div>

<div id="support-resources" class="section section">

## Support Resources

### Frequently Asked Questions

<div class="faq-accordion">

How do I log a violation for an employee?

<div class="faq-answer">

Navigate to Apps → Employee Violation → Click "Log Violation" → Select the employee, violation type, date, and add notes → Click "Log Violation" to submit.

</div>

Why isn't escalation being applied?

<div class="faq-answer">

Escalation only applies to violations within their validity period. Check if previous violations have expired based on their configured validity (30, 180, or 365 days).

</div>

Can I delete a violation?

<div class="faq-answer">

No, violations cannot be deleted once logged. If a violation was logged in error, it must be rejected through the approval workflow.

</div>

How do I view an employee's violation history?

<div class="faq-answer">

Go to the Employee Directory tab, find the employee, and click "View Profile" to see their complete violation history.

</div>

</div>

### Getting Help

- Contact your HR Administrator for policy questions and escalation rule configuration
- Submit support tickets through the platform for technical issues
- Bayzat Support Team - Available for platform-wide technical issues

</div>

<div id="glossary" class="section section">

## Glossary of Terms

| Term | Definition |
|----|----|
| **Violation** | A documented instance of employee misconduct or policy breach recorded in the system. |
| **Violation Type** | Category classification of the misconduct (e.g., Lateness, Insubordination, Harassment). |
| **Validity Period** | Duration for which a violation remains active for escalation calculations (30, 180, 365 days, or permanent). |
| **Escalation Rule** | Configuration that triggers automatic disciplinary actions based on violation count within validity period. |
| **Progressive Discipline** | System of increasingly severe penalties (verbal → written → final warning → termination). |
| **Verbal Warning** | Initial documented warning given verbally to an employee for first offense. |
| **Written Warning** | Formal written notice documenting misconduct and expectations for improvement. |
| **Final Warning** | Last warning before termination, indicating serious consequences for further violations. |
| **Deduction** | Financial penalty applied to employee salary as part of disciplinary action. |
| **Employee Ticket** | Associated record in the ticketing system created for each violation for approval workflow. |

</div>

Generated by Bayzat Documentation System

Last updated: 2026-01-13
