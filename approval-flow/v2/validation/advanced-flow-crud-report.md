# Advanced Approval Flow - CRUD Operations Report

**Feature:** Approval Flow > Advanced Approval Flows
**Validated:** 2026-03-05
**Status:** All CRUD operations PASSED

---

## Overview

Advanced approval flows allow conditional routing of approvals based on defined criteria. They sit above the Default flow and are evaluated in priority order. This report documents CRUD operations tested on the Leave and Air Ticket tabs.

---

## CREATE

**Trigger:** "+ Add advance flow" button (top-right of Advanced approval flow section)

**Dialog fields:**
1. **Flow name** (required) - text input
2. **Description** (required) - text input
3. **Criteria** - added via "Add criteria" button
4. **Approval steps** - added via "Add approval step" section

### Criteria Configuration
- **Data Point dropdown:** 60+ options organized by category
  - Direct: Number of Days, Leave Type
  - Employee properties: Department, Office, Position, Employee Grade, Nationality, Direct Reports To, Roles, Status, Hire Date, Age, Work Email, Personal Email, Phone Number, Employee Id, Name, Gender, Employee Type, Project Name, Sub department
  - Policy fields: Policy Allowance Amount -> Amount, Policy Allowance Amount -> Currency
- **Operations dropdown:** 8 options
  - is between, is not between
  - is equal to, is not equal to
  - is greater than, is greater than or equals
  - is less than, is less than or equals to
- **Value field:** text/number input (context-dependent)
- **Criteria logic:** "Execute when ALL criteria(s) match" (AND logic between criteria)
- **Multiple criteria:** "Add criteria" button allows stacking conditions

### Approval Step Configuration
- **Role dropdown:** System roles + Custom roles
  - Observed: Line Manager - 1, Line Manager - 2 (Not for use), Tickets Custom Role, AKQA, Leaves Manager, Line Manager, Super Admin
- **Line Manager level selector:** Dropdown to set level depth (1, 2, 3... levels)
- **Add approver:** Creates OR logic between approvers within same step
- **Add step:** Creates sequential steps (numbered 1, 2, 3...)

**Screenshots:** 15-crud-create-dialog.png, 16-crud-create-criteria-dialog.png, 17-crud-create-data-points-dropdown.png, 18-crud-create-operations-dropdown.png, 19-crud-create-roles-dropdown.png

---

## READ

**Method:** Advanced flows appear inline under the "Advanced approval flow" section of each tab.

**Inline display per flow:**
- Priority number (1, 2, 3...)
- Flow name (bold heading)
- Flow description (subtitle text)
- Edit icon (pencil) and Delete icon (trash) on right side

**Example (Air Ticket tab):**
1. "Adv AF - Amount exceeding 3000" - priority 1
2. "Adv AF - Amount more than 4000" - priority 2

Default flow appears below with its step configuration visible inline.

**Screenshots:** 02-air-ticket-tab.png

---

## UPDATE

**Trigger:** Edit (pencil) icon on any advanced flow row.

**Edit dialog contents (example - Air Ticket flow "Adv AF - Amount exceeding 3000"):**
- **Flow name:** "Adv AF - Amount exceeding 3000" (editable)
- **Description:** (editable)
- **Criteria:**
  - Criteria 1: Policy Allowance Amount -> Amount **is greater than** 3000
  - Criteria 2: Policy Allowance Amount -> Currency **is equal to** AED - United Arab Emirates Dirham
  - Logic: "Execute when ALL criteria(s) match"
- **Approval Flow:**
  - Step 1: Line Manager (1 level)

All fields are editable. Changes are saved via the "Update approval flows" button at the bottom-right of the page (shared save for the entire tab).

**Screenshots:** 20-crud-edit-dialog.png

---

## DELETE

**Trigger:** Delete (trash) icon on any advanced flow row.

**Confirmation dialog:**
- Title: "Delete approval flow?"
- Message: "This action is permanent and cannot be undone."
- Buttons: Cancel (left), Delete (right, destructive)

Delete removes the advanced flow permanently. The default flow remains unaffected.

**Screenshots:** 21-crud-delete-confirmation.png

---

## PRIORITY REORDER

**Trigger:** Ellipsis (three-dot) menu icon on any advanced flow row.

**Options:**
- "Move up in priority" (when not at position 1)
- "Move down in priority" (when not at last position)

Priority determines evaluation order: flow at position 1 is checked first. If its criteria match, that flow's approval chain is used. If not, flow 2 is checked, and so on. If no advanced flow matches, the Default flow is used.

**Screenshots:** 22-crud-priority-menu.png

---

## Summary Table

| Operation | Trigger | Dialog/Confirmation | Status |
|-----------|---------|-------------------|--------|
| Create | "+ Add advance flow" button | Full dialog with name, description, criteria, steps | PASSED |
| Read | Inline display on tab | Shows priority, name, description | PASSED |
| Update | Edit (pencil) icon | Full dialog with all fields editable | PASSED |
| Delete | Delete (trash) icon | Confirmation: "permanent and cannot be undone" | PASSED |
| Reorder | Ellipsis menu | Move up/down in priority | PASSED |
