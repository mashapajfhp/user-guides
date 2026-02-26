# Employee Structures - Validation Report (v4)

**Feature:** Employee Structures
**Version:** v4
**Date:** 2026-02-26
**Overall Status:** PASS
**Validator:** Manual Playwright session (job+demoacct@bayzat.com)

---

## Executive Summary

Employee Structures allows HR admins and Super Admins to organize employees into named grouping structures with two methods: Manual (hand-pick employees) and Automatic (criteria-based rules using 50+ data points). These structures integrate with Role Management as restriction groups for granular access control, and with Leave Policies for automatic employee assignment.

All 4 what-to-do tasks passed validation. The single what-to-watch-out-for limitation (WOF-001) was confirmed. No workflow triggers or approval flows exist for this feature. CRUD operations (create, read, update, delete) all passed successfully.

---

## Navigation & Entry Points

### Primary Path
**Settings > Company > Employee Structures (accordion)**
- URL: `/enterprise/dashboard/settings/company`
- Status: PASS
- Screenshot: `exploration-01-primary-view.png`

### Cross-Referenced Integrations

| Integration | Path | Status | Screenshot |
|---|---|---|---|
| Role Management | Settings > Organization > Role management | PASS | `role-management-page.png` |
| Leave Policies | Settings > Leaves > Leave Policies | PASS | `leave-policies-page.png` |

---

## Primary Entity

**Entity:** Employee Structure
**List view columns:** Name, Type (Manual/Automatic), Groups, Employees, Created
**Row actions (three-dot menu):** Edit, View Groups, View Employees & Roles, Delete

---

## CRUD Operations

### Create (PASS)
The creation flow is a 3-step wizard accessed via the **Add New** button in the top-right corner of the structures list.

**Step 1 - Structure Details:** Enter Name, Description, and select Type (Manual or Automatic).
Screenshot: `crud-01-create-form-step1.png`

**Step 2 - Employee Grouping:** Click "Add Group" to create groups. Each group requires a name and description. Minimum 2 groups are required per structure. For Automatic type, define criteria using 50+ data points (Department, Office, Nationality, Employment Type, Job Title, Compensation, Custom Fields) with AND/OR logic and multiple criteria blocks. For Manual type, select employees individually from a searchable/filterable list.
Screenshots: `crud-02-create-step2-grouping.png`, `crud-03-auto-group-dialog.png`, `crud-04-auto-criteria-datapoints.png`, `crud-05-manual-group-dialog.png`

**Step 3 - Review:** Summary showing all groups with their employee counts and criteria. Click "Create" to finalize.
Screenshots: `create-automatic-step3-review.png`, `structure-created-success.png`

**Constraint discovered:** Attempting to proceed with only 1 group shows an error requiring minimum 2 groups.
Screenshot: `minimum-two-groups-error.png`

### Read (PASS)
Two read views available via the three-dot menu:
- **View Groups:** Shows group list with employee count per group. Screenshot: `view-groups-dialog.png`
- **View Employees & Roles:** Full employee table with Name, Department, Groups, Roles columns. Includes search, filter, and export. Screenshot: `view-employees-roles-dialog.png`

### Update (PASS)
Edit opens the same 3-step wizard pre-populated with existing data. All fields are editable including structure name, description, type, and group configuration.
Screenshot: `crud-06-edit-form-step1.png`

### Delete (PASS)
Delete shows a confirmation dialog: "Are you sure you want to delete [name]? This action cannot be undone." with Cancel and Delete buttons.
Screenshot: `crud-07-delete-confirmation-dialog.png`

---

## Workflow Check

**Has Workflows:** No
Navigated to Automations > Workflows. Employee Structures does not appear as a trigger source or action target in the workflow catalog.
Screenshot: `workflow-01-workflows-list.png`

**Has Approval Flows:** No
Structure creation and deletion are immediate actions with no approval routing.

---

## What To Do - Task Validation

### WTD-001: Create an Employee Group with Automatic Grouping (PASS)

**Actual steps:** Navigate to Settings > Company > Employee Structures > Add New > Step 1: enter name/description, select Automatic type > Step 2: Add Group, configure criteria using data points with AND/OR logic > Step 3: Review and Create.

**Key findings:** Automatic criteria supports 50+ data points across categories (Department, Office, Nationality, Employment Type, Job Title, Compensation, Custom Fields). Multiple criteria blocks can be combined with AND/OR operators. Each criteria block can have multiple conditions.

**Screenshots:** `create-automatic-step1.png`, `automatic-criteria-datapoints.png`, `automatic-criteria-config.png`, `create-automatic-step2-groups.png`, `create-automatic-step3-review.png`, `structure-created-success.png`

### WTD-002: Create an Employee Group with Manual Selection (PASS)

**Actual steps:** Navigate to Settings > Company > Employee Structures > Add New > Step 1: enter name/description, select Manual type > Step 2: Add Group, select employees from searchable/filterable list > Step 3: Review and Create.

**Screenshots:** `crud-01-create-form-step1.png`, `crud-05-manual-group-dialog.png`, `crud-02-create-step2-grouping.png`

### WTD-003: Assign Employee Group Viewership Permissions to Admin Roles (PASS)

**Actual steps:** Navigate to Settings > Organization > Role management > Role assignment tab > Click Edit on an employee > 2-step dialog opens (Select roles & restrictions > Review & save) > Roles marked "Restrictable" have a "Restriction groups" dropdown > Check a restrictable role (e.g., People Manager) > Dropdown becomes enabled showing all Employee Structure groups in format "Structure Name | Group Name" > Select groups to restrict that role's access scope.

**Key discovery:** There is no dedicated "Employee Structure" role. Instead, Employee Structures integrate with Role Management through **restriction groups** on restrictable roles. When restriction groups are assigned, the role holder can only manage employees belonging to those specific structure groups.

**Built-in restrictable roles:** Adjustment manager, Attendance Manager, Expense Manager, Leaves Manager, Payroll table admin, People Manager, Performance Manager, Transaction processing admin.

**Custom restrictable roles:** AKQA, CET Custom Role, Payroll Testing (SAF), People Manager 2, Tickets Custom Role, Work Expense Manager.

**Super Admin role:** Description reads "Covers all other roles except Transaction Processor role." It has no restriction groups option since it inherently has full access.

**Screenshots:** `role-management-page.png`, `role-edit-dialog-roles-list.png`, `super-admin-role-edit-dialog.png`, `role-restriction-groups-dropdown.png`

### WTD-004: Use Employee Structures for Automatic Leave Policy Assignment (PASS)

**Actual steps:** Navigate to Settings > Leaves > Leave Policies section shows all policies with "Manage Employee Assignment" buttons > Click "Manage Employee Assignment" > Employee assignment page shows Manual toggle (default) and "Enable automatic assignment using grouping structures" toggle > Toggle ON automatic assignment > Structure dropdown appears showing all Employee Structures > Select a structure > Mapping table appears with Leave Policy, Assign Group, and Employees columns > Each policy row has an "Assign group" multi-select dropdown showing groups from selected structure > Select groups per policy (shown as tags) > "View X employees" link shows preview dialog with employee count per group > Preview dialog has expandable accordions showing individual employees with profile links.

**Key findings:**
- "Days in Lieu (Attendance Policy)" cannot be automatically assigned and is excluded from the mapping table.
- The automatic assignment toggle is only available when at least one Employee Structure exists.
- Multiple groups can be assigned to a single leave policy (multi-select).
- Employee preview dialog shows per-group breakdown with expandable lists.
- Offboarded employees appear in preview marked as "Offboarded."

**Screenshots:** `leave-policies-page.png`, `leave-policy-employee-assignment.png`, `leave-policy-auto-assignment-enabled.png`, `leave-policy-structure-dropdown.png`, `leave-policy-group-mapping.png`, `leave-policy-group-dropdown.png`, `leave-policy-groups-selected.png`, `leave-policy-employee-preview-dialog.png`, `leave-policy-employee-list-expanded.png`

---

## What To Watch Out For - Limitation Validation

### WOF-001: Lack of Granular Employee Directory Access Controls (CONFIRMED)

**Impact:** High
**By Design:** No
**Jira:** TSSD-4272 (Status: Won't Do)

**Validation:** Confirmed that while Employee Structures provide restriction groups for restrictable roles (People Manager, Payroll table admin, etc.), the core HR employee directory itself does not have granular visibility controls. The restriction groups limit what data a restricted role can manage, but the employee directory listing remains accessible to roles with base access. This is a known limitation that has been decided as "Won't Do."

**Screenshot:** `limitation-01-wof001-employee-directory.png`

---

## Payroll Policy Integration Discovery

During validation, we checked all Payroll settings sections to determine which policies support Employee Structure-based automatic assignment.

**Policies WITH "Manage Employee Assignment" + automatic structure-based assignment:**

| Policy Type | Location | Status |
|---|---|---|
| Leave Policies | Settings > Leaves | Validated (WTD-004) |
| Employee Loan Policies | Settings > Payroll | Discovered - has same toggle and structure dropdown |
| Leave Salary Policy | Settings > Payroll | Discovered - has same toggle and structure dropdown |

**Policies WITHOUT employee grouping (simple item lists only):**
Allowances, Variable Pays, Additions, Deductions, Leave Encashment Policy, Daily Wage Calculation, Payroll Templates, Bank Accounts, End of Service Eligibility, Social Security Contributions.

All three supported policy types share the same UI pattern: a "Manage employee assignment" button that opens a page with "Enable automatic assignment using grouping structures" toggle, a Structure dropdown listing all Employee Structures, and a mapping table to assign groups to policies.

Screenshot: `loan-policy-structure-dropdown.png`

---

## Additional UX Discoveries

These limitations were discovered during validation but were not in the original WOF list:

1. **Minimum 2 groups required per structure:** The creation wizard enforces a minimum of 2 groups. Attempting to proceed with only 1 group shows a validation error. Screenshot: `minimum-two-groups-error.png`

2. **No dedicated Employee Structure permission role:** Role Management does not have a specific "Employee Structure" role or permission policy. Access to manage Employee Structures is controlled implicitly through Super Admin or People Manager roles. Confirmed by searching custom role policies (0 results for "structure" or "group") and reviewing the full roles list in the edit dialog.

3. **Days in Lieu excluded from automatic assignment:** The "Days in Lieu (Attendance Policy)" leave policy type cannot be automatically assigned using Employee Structures and does not appear in the mapping table.

4. **Restriction groups format uses "Structure | Group":** The restriction groups dropdown in Role Management displays groups in the format "Structure Name | Group Name" making it clear which structure each group belongs to.

---

## Screenshots Inventory (53 total)

### Exploration & Navigation
- `exploration-01-primary-view.png` - Main Employee Structures list view
- `exploration-02-view-groups-dialog.png` - View Groups dialog
- `exploration-03-employees-roles-assignments.png` - View Employees & Roles dialog
- `employee-structures-list.png` - Structures list table
- `company-settings-page.png` - Company settings page

### CRUD Operations
- `crud-01-create-form-step1.png` - Create wizard Step 1
- `crud-02-create-step2-grouping.png` - Create wizard Step 2
- `crud-03-auto-group-dialog.png` - Automatic group creation dialog
- `crud-04-auto-criteria-datapoints.png` - Automatic criteria data points
- `crud-05-manual-group-dialog.png` - Manual group employee selection
- `crud-06-edit-form-step1.png` - Edit wizard Step 1
- `crud-07-delete-confirmation-dialog.png` - Delete confirmation dialog
- `structure-created-success.png` - Success state after creation
- `structures-list-with-new.png` - List with newly created structure
- `minimum-two-groups-error.png` - Minimum 2 groups validation error

### Automatic Grouping
- `create-automatic-step1.png` - Automatic structure Step 1
- `automatic-criteria-datapoints.png` - Full data points list
- `automatic-criteria-config.png` - Criteria configuration with conditions
- `create-automatic-step2-groups.png` - Automatic structure Step 2
- `create-automatic-step3-review.png` - Automatic structure Step 3 review

### Manual Grouping
- `create-structure-step1.png` - Manual structure Step 1
- `create-structure-step2-empty.png` - Step 2 empty state
- `create-structure-step2-group-added.png` - Step 2 with group added
- `create-structure-step3-review.png` - Manual structure Step 3 review
- `create-group-dialog.png` - Group creation dialog

### Read Operations
- `view-groups-dialog.png` - View Groups dialog
- `view-employees-roles-dialog.png` - View Employees & Roles dialog
- `delete-confirmation-dialog.png` - Delete confirmation

### Workflow Check
- `workflow-01-workflows-list.png` - Workflows list page
- `workflows-page.png` - Workflows page overview

### Role Management Integration (WTD-003)
- `role-management-page.png` - Role management page
- `custom-roles-tab.png` - Custom roles tab
- `custom-role-edit-dialog.png` - Custom role edit dialog
- `role-edit-dialog-roles-list.png` - Full role list in edit dialog
- `super-admin-role-edit-dialog.png` - Super Admin edit dialog
- `role-restriction-groups-dropdown.png` - Restriction groups showing structure groups
- `task-03-custom-role-no-structure-policies.png` - Custom role with no structure policies
- `task-03-role-management-assignment.png` - Role assignment table

### Leave Policy Integration (WTD-004)
- `leave-policies-page.png` - Leave policies overview
- `leave-policy-employee-assignment.png` - Employee assignment page
- `leave-policy-auto-assignment-enabled.png` - Auto assignment toggle enabled
- `leave-policy-structure-dropdown.png` - Structure selection dropdown
- `leave-policy-group-mapping.png` - Group-to-policy mapping table
- `leave-policy-group-dropdown.png` - Group selection dropdown
- `leave-policy-groups-selected.png` - Selected groups as tags
- `leave-policy-employee-preview-dialog.png` - Employee preview dialog
- `leave-policy-employee-list-expanded.png` - Expanded employee list
- `task-04-assign-group-dropdown.png` - Assign group dropdown
- `task-04-automatic-assignment-enabled.png` - Automatic assignment on
- `task-04-group-policy-mapping-table.png` - Mapping table
- `task-04-leave-policies-overview.png` - Leave policies overview
- `task-04-manage-assignment-manual.png` - Manual assignment view
- `task-04-structure-dropdown-options.png` - Structure dropdown options

### Payroll Policy Integration
- `loan-policy-structure-dropdown.png` - Loan policy automatic assignment with structure dropdown

### Limitations
- `limitation-01-wof001-employee-directory.png` - Employee directory access control limitation

---

## Validation Summary

| Category | Count | Pass | Fail |
|---|---|---|---|
| CRUD Operations | 4 | 4 | 0 |
| WTD Tasks | 4 | 4 | 0 |
| WOF Issues | 1 | 1 confirmed | 0 |
| Navigation Paths | 6 | 6 | 0 |
| Screenshots | 54 | - | - |

**Overall Result: PASS** - All validation criteria met. Feature is fully functional with documented limitations.
