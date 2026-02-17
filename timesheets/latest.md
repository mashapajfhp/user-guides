# Timesheet Approval Flow - Prerequisites & Configuration Guide

## IMPORTANT: Approval Options Location

### Approval/Reject Options are NOT Available Under the Timesheets Menu

**Where approval options ARE NOT located:**
- Time → My timesheet (only has Edit/Delete options)
- Time → Employee timesheets (view only)

**Where approval options ARE located:**
- **Requests → Employee tickets** (for managers to approve/reject)
- **Requests → My tickets** (for employees to submit approval requests)

### Key Understanding: Two Completely Separate Systems

| Feature | Timesheets (Time Menu) | Tickets (Requests Menu) |
|---------|------------------------|-------------------------|
| **Purpose** | Log work hours | Request/manage approvals |
| **Actions Available** | Add, Edit, Delete entries | Submit, Approve, Reject tickets |
| **Approval Options** | NONE | Full approve/reject workflow |
| **Connection** | None - completely independent | None - completely independent |

---

## CRITICAL: After Creating a Timesheet, User Must Separately Create a Ticket

**YES - These are two separate manual steps:**

1. **Step 1 (Optional):** Employee logs hours in Time → My timesheet
   - Entry saves immediately
   - NO approval triggered
   - Only Edit/Delete options available

2. **Step 2 (Required for Approval):** Employee creates a Timesheet Approval ticket
   - Navigate to Requests → My tickets
   - Create new ticket of type "Timesheet Approval"
   - Manually enter project name, hours, dates
   - Submit for approval

**There is NO automatic link between timesheet entries and approval tickets.**

---

## Prerequisites

### CRITICAL: Line Manager Assignment Required

**Before setting up Timesheet Approval flows, ensure all employees have a Line Manager assigned.**

Without a Line Manager assigned:
- Approval tickets will be **auto-approved** immediately
- The approval workflow will NOT route to the intended approver
- No human review will occur for timesheet submissions

### How to Assign a Line Manager

1. Navigate to **Company → Employees**
2. Click on the employee's profile
3. Go to **Job Details** section
4. Assign a **Line Manager** from the dropdown
5. Save changes

---

## Configuration Steps

### Step 1: Enable Timesheet Approval Ticket Type

1. Navigate to **Settings → Tickets**
2. Find or create category: **Project Approval - Timesheets**
3. Enable the **Timesheet Approval** ticket type
4. Configure required fields:
   - Name of the Project (String, Mandatory)
   - Number of Hours Worked (Number, Mandatory)
   - Start Date (Date, Mandatory)
   - End Date (Date, Mandatory)

### Step 2: Create Approval Flow

1. Navigate to **Automations → Approval flows**
2. Click **+ Create approval flow**
3. Select **Timesheet Approval** ticket type
4. Configure conditions and approvers:

**Example Flow:**
```
IF Number of Hours Worked > 40
  THEN → Line Manager (1 level) approves
ELSE
  → Super Admin approves (default)
```

### Step 3: Assign Line Managers to Employees

Ensure all employees who will submit timesheets have Line Managers assigned.

---

## Validation Results

### Test 1: Without Line Manager
| Ticket | Hours | Result |
|--------|-------|--------|
| T-77 | 45 | **Auto-approved** (No Line Manager assigned) |

### Test 2: With Line Manager Assigned
| Ticket | Hours | Approver | Result |
|--------|-------|----------|--------|
| T-78 | 45 | Payal Sharma (Line Manager) | **Pending approval** |

### Test 3: Timesheet Entry Without Ticket
| Action | Location | Result |
|--------|----------|--------|
| Added timesheet entry | Time → My timesheet | Saved immediately, NO approval ticket created |

---

## Employee Workflow

### How Employees Submit Timesheet for Approval

**Important: Creating a timesheet entry does NOT automatically request approval. Employees must manually create a Timesheet Approval ticket.**

1. **(Optional)** Log hours in **Time → My timesheet**
2. Go to **Requests → My tickets**
3. Click **Create ticket**
4. Select **Project Approval - Timesheets → Timesheet Approval**
5. Fill in required fields:
   - Name of the Project
   - Number of Hours Worked
   - Start Date
   - End Date
6. Click **Submit**
7. Ticket goes to assigned approver based on approval flow rules

### How Managers Approve Timesheets

**Important: Managers cannot approve timesheets from the Timesheets menu. All approvals happen in the Tickets section.**

1. Go to **Requests → Employee tickets**
2. Filter by **Timesheet Approval** ticket type
3. Review pending tickets
4. Click **Approve** or **Reject**

---

## What's NOT Available

| Expected Feature | Actual Status |
|------------------|---------------|
| "Submit for Approval" button on timesheet | NOT AVAILABLE |
| Auto-create approval ticket from timesheet | NOT AVAILABLE |
| Approve/Reject options in Timesheets menu | NOT AVAILABLE |
| Link between timesheet entry and approval ticket | NOT AVAILABLE |

---

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Ticket auto-approved immediately | No Line Manager assigned | Assign Line Manager to employee |
| No approver shown in ticket | Approval flow not configured | Create approval flow for Timesheet Approval |
| Employee can't find ticket type | Ticket type not enabled | Enable in Settings → Tickets |
| Can't find approve/reject buttons | Looking in wrong location | Go to Requests → Employee tickets (not Time menu) |
| Timesheet saved without approval | Normal behavior | Employee must separately create approval ticket |

---

## Screenshots

- `timesheet-approval-with-line-manager.png` - Shows pending ticket with Line Manager as approver
- `timesheet-no-approval-option.png` - Shows timesheet entry menu with only Edit/Delete (no approval option)

---

*Document created: 29 Jan 2026*
*Validated by: Playwright automation testing*
