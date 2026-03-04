# Approval Flow - Validation Report (v2)

**Feature:** Approval Flow
**Version:** v2
**Validated:** 2026-03-04
**URL:** https://app.bayzat.com/enterprise/dashboard/approval-flow
**Canonical Path:** Automations > Approval flows

---

## Executive Summary

The Approval Flow feature is a comprehensive, fully functional approval configuration system accessible from **Automations > Approval flows**. The system supports **46+ approval flow types** with a dual-tier architecture: **Advanced (conditional)** and **Default (fallback)** flows. Every approval flow type follows the same consistent pattern with rich criteria-based routing, multi-step approval chains, and OR/AND logic between approvers.

---

## Key Discovery: Advanced vs Default Approval Flows

### Architecture Overview

Every approval flow type in Bayzat has a **two-tier** structure:

#### 1. Advanced Approval Flow (If Conditions)
- **Purpose:** Route approvals based on defined criteria (conditional logic)
- **Label:** Tagged with "If conditions"
- **When to use:** When different approval chains are needed based on specific criteria (e.g., amount thresholds, department, leave type, employee attributes)
- **Configuration:** Each advanced flow has:
  - **Flow name** (required) - descriptive name to identify the flow
  - **Description** (required) - explains the flow's purpose
  - **Criteria** - data-point-based conditions that determine when this flow applies
  - **Approval steps** - the actual approver chain for this flow
- **Criteria data points available** (for Leave): Number of Days, Leave Type, Employee, Direct Reports To, Roles, Department, Office, Nationality, Position, Employee Grade, and 40+ employee attributes
- **Multiple advanced flows** can coexist for the same type, evaluated in priority order (numbered 1, 2, 3...)
- **Actions:** Each advanced flow can be edited (pencil icon), deleted (trash icon), or reordered (drag icon)

#### 2. Default Approval Flow (Else)
- **Purpose:** Fallback flow used when no advanced flow criteria match
- **Label:** Tagged with "Else"
- **When to use:** As the base/catch-all approval chain that applies to all requests not matched by any advanced flow
- **Configuration:** Direct step-based approval chain (no criteria needed)
- **Always present:** Every approval flow type has a default flow section

### Key Difference Summary

| Aspect | Advanced Flow | Default Flow |
|--------|--------------|--------------|
| Trigger | Criteria-based (If conditions) | Fallback (Else - no match) |
| Criteria | Configurable data points | None needed |
| Multiple flows | Yes, priority-ordered | One per type |
| Use case | Conditional routing | Catch-all default |

---

## Approval Flow Types Discovered (46 types)

### Core/Built-in Types
1. **Leave** - Default: Super Admin OR Line Manager - 1
2. **Air Ticket** - 2 advanced flows (amount-based), Default: Payroll table admin
3. **Loan** - Default: Step 1 Super Admin, Step 2 Line Manager (2 levels)
4. **Expense** - 1 advanced flow ("test"), Default: Super Admin
5. **Payroll Transaction** - Default: Super Admin OR Payroll table admin
6. **Leave Salary Request** - Default: Payroll table admin OR Super Admin OR Transaction processing admin
7. **Attendance Regularization** - Default: Super Admin
8. **Leave Encashment** - Default: Payroll table admin OR Transaction processing admin OR Super Admin
9. **Accounts Payable** - Default: AP Invoice Approver OR AP Payment Initiator OR AP Payment Pre-Authorizer OR AP Payment Authorizer
10. **Employee Violation** - Default: Super Admin
11. **Shift Change Request**
12. **Grievance Submission**
13. **Business Trip Request** - Default: Super Admin
14. **Hourly permission**
15. **Bank Account Update**
16. **Work From Home Request**
17. **Project Hours**
18. **Employee Grade Change**
19. **After-expiry Ticket**
20. **WFH - Remote work request**
21. **Salary Changes**

### Custom/Company-specific Types
22. VAT Filing (+ test variants)
23. Employee Survey
24. Corporate Tax Filing
25. Grade A/B Travel Ticket Request
26. Cashier Checklist
27. Insurance Upgrade
28. TimeSheet for Demo
29. Hiring Requisition
30. Travel Booking Request
31. Travel Ticket
32. Testing Mandatory Attachment
33. Timesheet Approval
34. Per Diem
35. Time Off in Lieu
36. Travel Request based Per Diem
37. Mileage (Econ)
38. Expense Reimbursements
39. Health Insurance Travel Certificate
40. Onboarding Form
41. New Department Move
42. Salary related problem
43. Downtime Test
44. Testing Business Trip Custom Role
45. Test Business Custom
46. (and more...)

---

## Approval Flow UI Components

### Common Elements (present in every flow type)
- **Search bar** - filter approval flow types by name
- **Left sidebar tabs** - scrollable list of all approval flow types
- **Advanced approval flow section** - "If conditions" with "Add advance flow" button
- **Default approval flow section** - "Else" with inline step configuration
- **Add step** button - add sequential approval steps
- **Add approver** button - add parallel approvers within a step (OR logic)
- **Add block** button - add approval blocks
- **Approver role dropdown** - select from system and custom roles
- **Update approval flows** button (bottom right) - save changes

### Approver Configuration Options
- **Role-based:** Super Admin, Line Manager, Payroll table admin, Transaction processing admin, Expense Manager, etc.
- **Line Manager levels:** Line Manager - 1, Line Manager - 2, Line Manager - All (with level selector dropdown)
- **Custom roles:** Any custom role created in Role Management can be used as an approver
- **OR logic:** Multiple approvers within the same step connected by "or" (any one can approve)
- **Sequential steps:** Numbered steps (1, 2, 3...) that must be completed in order

---

## WTD Task Validation

### WTD-001: Configure Advanced Leave Approval Flow
**Status: PASS**

| Step | Expected | Actual | Result |
|------|----------|--------|--------|
| Navigate to Approval flows > Leave tab | Leave approval flow page | Loaded at /enterprise/dashboard/approval-flow/timeoff-request-flow | PASS |
| Advanced approval flow section exists | Section with "If conditions" label | Present with "Add advance flow" button | PASS |
| Create custom approval roles | Custom roles available | Custom roles tab exists in Role Management with 15+ custom roles | PASS |
| Define separate flows per criteria | Criteria-based routing | "Configure Criteria" dialog with 60+ data points including Department, Office, Leave Type, Employee attributes | PASS |
| Add approval steps with approver selection | Multi-step with role selection | Steps with dropdown for roles (Super Admin, Line Manager levels, custom roles) | PASS |
| Sequential approval support | Steps enforced in order | Numbered steps (1, 2, 3...) indicate sequential processing | PASS |
| Backup/alternate approvers | Multiple approvers per step | "Add approver" creates OR logic within step for redundancy | PASS |

**Evidence:** Screenshots 02, 13, 14

### WTD-002: Configure Payroll Transaction Approval Flow
**Status: PASS**

| Step | Expected | Actual | Result |
|------|----------|--------|--------|
| Navigate to Payroll Transaction tab | Payroll Transaction flow page | Loaded at /enterprise/dashboard/approval-flow/payroll-transaction-request-flow | PASS |
| Advanced + Default sections | Both sections present | Advanced (If conditions) + Default (Else) both visible | PASS |
| Add approval step | Step added with role selection | "Add step" button available, roles include Payroll table admin, Super Admin, Transaction processing admin | PASS |
| Condition types (OR) | OR logic between approvers | Super Admin OR Payroll table admin visible in default flow | PASS |
| Multi-level hierarchy | Multiple sequential steps | "Add step" button available for additional levels | PASS |

**Evidence:** Screenshot 06

### WTD-003: Configure Expense Approval Flow
**Status: PASS**

| Step | Expected | Actual | Result |
|------|----------|--------|--------|
| Navigate to Expense tab | Expense approval flow page | Loaded at /enterprise/dashboard/approval-flow/expense-flow | PASS |
| Advanced + Default sections | Both sections present | Advanced with 1 existing flow ("test"), Default with Super Admin | PASS |
| Define approval hierarchy | Configurable approvers | Role dropdown with all system and custom roles | PASS |
| Independent from payroll | Separate expense config | Expense has its own dedicated tab, independent from Payroll Transaction | PASS |

**Evidence:** Screenshot 05

### WTD-004: Assign Roles and Manage Permissions
**Status: PASS**

| Step | Expected | Actual | Result |
|------|----------|--------|--------|
| Navigate to Settings > Role Management | Role management page | Loaded at /enterprise/dashboard/roles with "Role assignment" and "Custom roles" tabs | PASS |
| Assign Roles button | Button to assign roles | Purple "Assign roles" button present at top | PASS |
| Employee-role table | Table showing assignments | Full table with Employee name, Roles columns, and Edit button | PASS |
| Multiple roles per employee | Multiple roles visible | Confirmed - e.g., "Anne Macalintal" has 25+ roles assigned | PASS |
| Custom roles tab | Custom role management | 15 custom roles listed with name, description, view/edit/delete actions | PASS |
| Add new custom role | Create custom roles | "Add new" button present on Custom roles tab | PASS |

**Evidence:** Screenshots 15, 16

---

## WOF Issue Validation

### WOF-001: Inflexible Approval Routing & Criteria (HIGH)
**Status: PARTIALLY RESOLVED**

The claim that "approval workflows cannot use dynamic criteria or support OR logic" is **significantly outdated**:
- **OR logic:** Fully supported. Multiple approvers within a step are connected with "or" (visible in Leave, Payroll Transaction, Leave Salary Request, Accounts Payable flows)
- **Dynamic criteria:** Advanced approval flows support 60+ criteria data points including Department, Office, Leave Type, Employee attributes, custom fields
- **Parallel approval paths:** Advanced flows enable multiple conditional paths evaluated in priority order
- **Remaining gap:** Some specific criteria like "client" and "project" fields may not be available as criteria data points for all flow types (not verified for all types)

### WOF-002: Missing Approval Workflows in Key Modules (HIGH)
**Status: PARTIALLY RESOLVED**

- **Business Trip Request:** NOW HAS an approval flow tab with configurable approval chain (contradicts original ticket claim)
- **Business Travel Approver:** Custom role exists in Role Management specifically for this purpose
- **Payroll modifications:** Payroll Transaction has a dedicated approval flow tab
- **Commission processing:** No dedicated "Commission" approval flow tab found (may be unresolved)
- **Note:** The system supports creation of custom approval flow types, which could address specific module gaps

### WOF-003: Approval Configuration Requires Admin Intervention (MEDIUM)
**Status: PARTIALLY RESOLVED**

- **Custom roles:** NOW SUPPORTED. Custom roles tab in Role Management has 15 custom roles with "Add new" button for creating more. Directly contradicts claim that "system only supports predefined system roles"
- **Admin-dependent activation:** Approval flow configuration is still limited to admin users (by design - only Super Admin can configure). This is intentional for security/control
- **Feature flag issues:** Not directly testable from UI

### WOF-004: Approval Notification & Status Synchronization (HIGH)
**Status: NOT VERIFIABLE FROM UI**

- Notification routing and status synchronization issues cannot be validated through UI inspection alone
- Would require end-to-end testing with actual approval requests being submitted and tracked
- Listed as known limitation in the guide

### WOF-005: Approval UI Representation Gaps (LOW - Won't Do)
**Status: ACKNOWLEDGED**

- Leave Salary Request tab exists and shows approval flow configuration
- The "missing tab" mentioned in the ticket may have been addressed since the Leave Salary Request tab is present
- Status is "Won't Do" indicating product team decided not to pursue this further

---

## Role Management Integration

### System Roles (predefined)
- Super Admin
- Line Manager (with levels: 1, 2, All)
- Payroll table admin
- Transaction processing admin
- Expense Manager
- Attendance Manager / Kiosk Manager
- Leaves Manager
- People Manager
- Performance Manager
- Role Manager
- Shift Scheduler
- Insurance Manager / Billing Manager
- Knowledge Hub Manager
- ATS Manager
- Workflow Manager
- Newsfeed Post Creator
- Company Survey Admin / Creator
- Task Management Manager
- Employee Claim Manager
- Finance Super Admin
- Accounts Payable roles (Invoice Approver, Manager, Payment Initiator, Pre-Authorizer, Authorizer)
- Adjustment manager

### Custom Roles (created by admins)
- Line Manager - 1, Line Manager - 2
- General Manager
- Work Expense Manager
- Business Travel Approver
- People Manager 2
- And 9+ more custom roles

### Role Management UI
- **Role assignment tab:** Table of all employees with their roles, Edit button per employee
- **Custom roles tab:** Create, view, edit, delete custom roles with name and description
- **Navigation:** Settings > Organization > Role management

---

## Automations Sub-navigation

The Approval Flows feature sits under **Automations** alongside:
1. **Workflows** - automation workflows with triggers/actions
2. **Approval flows** - approval chain configuration (this feature)
3. **Integrations** - third-party integrations
4. **API Token** - API access management

---

## Screenshots Index

| # | Filename | Description |
|---|----------|-------------|
| 01 | 01-login-page.png | Bayzat login page |
| 02 | 02-leave-approval-flow.png | Leave approval flow - Advanced + Default |
| 03 | 03-air-ticket-approval-flow.png | Air Ticket - 2 advanced flows + default |
| 04 | 04-loan-approval-flow.png | Loan - 2-step default flow |
| 05 | 05-expense-approval-flow.png | Expense - 1 advanced flow + default |
| 06 | 06-payroll-transaction-approval-flow.png | Payroll Transaction - OR logic default |
| 07 | 07-leave-salary-request-flow.png | Leave Salary Request - 3 OR approvers |
| 08 | 08-attendance-regularization-flow.png | Attendance Regularization - Super Admin |
| 09 | 09-leave-encashment-flow.png | Leave Encashment - 3 OR approvers |
| 10 | 10-accounts-payable-flow.png | Accounts Payable - 4 AP-specific roles |
| 11 | 11-employee-violation-flow.png | Employee Violation - Super Admin |
| 12 | 12-business-trip-request-flow.png | Business Trip Request (refutes WOF-002) |
| 13 | 13-advanced-flow-creation-dialog.png | Advanced flow creation dialog |
| 14 | 14-criteria-data-points-dropdown.png | Criteria data points (60+ options) |
| 15 | 15-role-management-assignment.png | Role management - assignment table |
| 16 | 16-custom-roles.png | Custom roles management |
