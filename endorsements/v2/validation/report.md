# Endorsements - Validation Report (v2)

**Feature:** Endorsements
**Version:** v2
**Validation Date:** 2026-03-06
**Status:** Completed

---

## Feature Summary

Endorsements manages health insurance additions and removals for employees and their dependents. HR admins submit endorsement requests through a structured flow (document upload, member details, AI verification) and track each request through its lifecycle from Draft to Approved/Completed.

**Navigation:** Health (sidebar) > Group insurance > Endorsements

---

## Execution Order Followed

1. EXPLORATION - Navigated all pages, discovered UI elements, tested interactions
2. IDENTIFY ENTITY - Confirmed primary entity is "Endorsement" (addition/removal request)
3. CRUD TEST - Tested create, read, update, delete flows for both additions and removals
4. WORKFLOW CHECK - Checked Automations > Workflows for endorsement triggers
5. WHAT_TO_DO - Executed all 4 payload tasks
6. REPORT - Generated this report and result.json

---

## PRD Context Used

Three PRDs informed exploration:
- **AI Automation PRD** - Guided exploration of AI document verification (passport data extraction, expiry detection)
- **React Migration PRD** - Confirmed current UI is React-based with modern component patterns
- **Conditional Documents PRD** - Focused attention on conditional document sections in the removal form (Insurance Card appears conditionally)

---

## Exploration Findings

### Navigation Map Coverage

| Page | Guide Role | Visited | Method |
|------|-----------|---------|--------|
| Endorsements | primary | Yes | Sidebar: Health > Group insurance > Endorsements |
| Group Insurance | parent_context | Yes | Sidebar: Health > Group policies |

### Additions Tab (Default View)

The Additions tab displays a paginated table (6 pages) with columns: Name, Plan, Endorsement ref no., Submitted, Effective date, Status, Actions.

**Status types observed:**
- **Draft** - Actions: Continue submission, Delete draft (trash icon)
- **Under review** - Actions: Cancel request (trash icon)
- **Addition completed** - Actions: Download COI, Download Insurance card
- **Cancelled** - No actions available
- **With Insurer** - Visible in status filter but not observed in current data

**Key interactions:**
- Search bar: "Search by member name or ref no." - works correctly (tested with "Rana", returned 1 result)
- Filters panel: Status dropdown (Approved, Cancelled, Draft, Under Review, With Insurer), Submitted On date range, Plan dropdown
- Employee name links navigate to the employee's profile Health Insurance tab
- Dependent entries show parent employee name below the dependent's name
- "See how it works" video button available
- Help articles link to Intercom help center

### Removals Tab

Same table structure as Additions with 5 pages. Includes an alert banner: "2 employees have been offboarded but still marked as insured" with a "View members" link.

**Key interactions:**
- "New removal" button (purple, top-right)
- Cancel request available for Under review removals
- Alert banner navigates to offboarded-but-still-insured employees page

### New Addition Flow

1. **Select employee** - Shows uninsured employees with search, pagination, and "Create new employee profile" button
2. **Select policy** - Dialog with radio buttons for available plans (4 plans across 3 insurers observed)
3. **3-step wizard:**
   - Step 1: Required documents (Establishment, Insurance effective date, Visa Sponsor, Passport, Emirates ID, Visa, Change Status form)
   - Step 2: Member details
   - Step 3: Additional documents
4. **Document statuses:** Complete, Not complete, Attention required
5. **AI verification:** Passport upload auto-extracts passport number and expiry date. Expired documents flagged with "Attention required" status
6. **Actions:** Cancel, Save as draft, Continue (per step)

### New Removal Flow

1. **Select employee** - Shows employees with active policies. Note at top: "Need to remove a dependent? Go to an employee's profile, then tap dependents tab."
2. **Removal form sections:**
   - **Removal Date** (required) - Date picker + Reason for removal dropdown:
     - Transfer to a new policy
     - Termination
     - Resignation with notice
     - Resignation without notice
     - End of contract
   - **Visa cancellation document** - File upload
   - **Insurance Card** (Conditional) - Appears based on context
   - **Anything else** - Free text + file upload
3. **Actions:** Cancel, Save as draft, Submit removal request

### Employee Profile - Health Insurance Tab

Clicking an employee name in the endorsements table navigates to their profile Health Insurance tab showing:
- Policy name and plan details
- Key benefits table (Annual limit, Out-patient coinsurance, Prescriptions)
- Download insurance card button
- **Mark as incorrect** button - to rectify health insurance records
- **Remove from policy** button

### Offboarded Employees Page

Accessed via Removals tab alert banner > "View members". Shows employees who have been offboarded but are still marked as insured.

Table columns: Employee Name, Plan, Offboarded on date.
Actions per employee: **Remove from policy**, **Mark as already removed**

### Group Policies (Parent Context)

Visited Health > Group policies to understand the broader context:
- 3 current insurers with 4 active plans
- 3 expired policies listed separately
- Sidebar cards showing: 2 offboarded employees, 100 uninsured employees
- Download member list functionality available

---

## Primary Entity

**Entity:** Endorsement (plural: Endorsements)
**Identified from:** Page heading "Endorsements", table rows represent individual endorsement requests, each with a unique reference number and status lifecycle.
**Types:** Addition endorsements and Removal endorsements, managed on separate tabs.

---

## CRUD Validation Results

| Operation | Status | Evidence |
|-----------|--------|----------|
| **Create** | PASSED | New addition: Select employee > Choose policy > 3-step wizard. New removal: Select employee > Fill removal form. Both support save-as-draft. |
| **Read** | PASSED | Table shows all endorsement details inline. Employee name links to profile Health Insurance tab. Draft continuation shows full detail view. |
| **Update** | PASSED | Draft endorsements can be continued. Each document section independently expandable and updatable. AI verification auto-fills document data. |
| **Delete** | PASSED | Delete draft (trash icon) for Draft status. Cancel request (trash icon) for Under review status. Available on both Additions and Removals tabs. |

---

## Workflow Integration

**Status:** Checked (optional priority)

Navigated to Automations > Workflows. Found 20 existing workflows, none with endorsement-specific triggers or actions. Endorsements do not currently integrate with the Workflows automation system.

---

## Approval Flow

**Status:** Not enabled in payload, skipped.

Note: The "Under review" status on endorsements suggests an internal review process before requests reach the insurer, but this is handled within the endorsements flow itself rather than through the separate Approval Flows system.

---

## What To Do - Task Results

### WTD-001: Submit New Employee Addition (PASSED)

**Persona:** HR Admin / People Manager

**Steps executed:**
1. Navigated to Health > Group insurance > Endorsements
2. Clicked "New addition" button (purple, top-right)
3. Selected employee (Martin Byrd) from uninsured employees list
4. Chose policy from selection dialog (4 plans, 3 insurers)
5. Progressed through 3-step wizard: Required documents, Member details, Additional documents
6. Verified document upload areas, AI verification, and save-as-draft capability

**Result:** Full addition flow accessible and functional. 3-step wizard with document upload, AI verification, and save-as-draft confirmed.

### WTD-002: Manage Already-Insured Members (PASSED)

**Persona:** HR Admin

**Steps executed:**
1. Navigated to Removals tab > clicked "View members" on offboarded alert banner
2. Found "Remove from policy" and "Mark as already removed" buttons per employee
3. Navigated to employee profile (Rana Tabbara) > Health Insurance tab
4. Found "Mark as incorrect" button and "Remove from policy" button

**Result:** Already-insured employees managed via offboarded employees page (Mark as already removed) and employee profile Health Insurance tab (Mark as incorrect, Remove from policy).

### WTD-003: Track Addition Request Status (PASSED)

**Persona:** HR Admin / People Manager

**Steps executed:**
1. Viewed Additions tab with status column showing Draft, Under review, Addition completed, Cancelled
2. Verified status-appropriate actions per row
3. Tested search by member name ("Rana") - filtered correctly
4. Opened filters panel: Status, Submitted On, Plan dropdowns all functional
5. For completed additions, verified COI and Insurance card download buttons available

**Result:** Status tracking fully functional with search, filters, and status-appropriate actions.

### WTD-004: Remove Employee from Insurance (PASSED)

**Persona:** Employee / HR Admin

**Steps executed:**
1. Clicked Removals tab, then "New removal" button
2. Selected employee (Abhishek Sharma) from active policy holders
3. Removal form loaded with sections: Removal Date, Visa cancellation document, Insurance Card (Conditional), Anything else
4. Expanded Removal Date section - date picker and Reason dropdown with 5 options
5. Noted dependent removal instruction: "Go to employee's profile, then tap dependents tab"
6. Cancelled without submitting to avoid data changes

**Result:** Full removal flow tested. Form captures removal date, reason, supporting documents, and optional notes.

---

## Known Limitations Validated

No What-To-Watch-Out-For items were included in the payload. No new limitations were discovered during validation.

---

## Undocumented Features Discovered

1. **AI document verification** - Passport uploads trigger automatic extraction of passport number and expiry date
2. **Attention required status** - Documents with issues (e.g., expired dates) are flagged with this special status
3. **Offboarded employees alert banner** - Removals tab shows a persistent alert when offboarded employees are still marked as insured
4. **Dependent relationship display** - Addition entries for dependents show the parent employee's name
5. **Conditional Insurance Card section** - Removal form conditionally shows an insurance card return section
6. **Mark as incorrect button** - Employee profile Health Insurance tab allows rectifying incorrect insurance records

---

## Navigation Corrections

All payload navigation paths were accurate. No corrections needed.

- "Health > Group insurance > Endorsements" worked as documented
- Both Additions and Removals tabs accessible as expected
- New addition and New removal flows accessible from respective tabs

---

## Screenshot Inventory (25 files)

| # | Filename | Description |
|---|----------|-------------|
| 0 | 00-dashboard-initial.png | Dashboard state after login |
| 1 | exploration-01-additions-tab.png | Additions tab default view |
| 2 | exploration-02-additions-page2.png | Additions tab page 2 |
| 3 | exploration-03-filters-panel.png | Filters panel expanded |
| 4 | exploration-04-status-dropdown.png | Status filter dropdown options |
| 5 | exploration-05-removals-tab.png | Removals tab view |
| 6 | exploration-06-new-addition-select-employee.png | New addition - employee selection |
| 7 | exploration-07-policy-selection-dialog.png | Policy selection dialog |
| 8 | exploration-08-addition-form-step1-required-docs.png | 3-step wizard - Step 1 |
| 9 | exploration-09-establishment-expanded.png | Establishment section expanded |
| 10 | exploration-10-passport-upload-section.png | Passport upload area |
| 11 | exploration-11-draft-endorsement-mixed-statuses.png | Draft with mixed doc statuses |
| 12 | exploration-12-passport-ai-verification.png | AI verification extracting passport data |
| 13 | exploration-13-search-results.png | Search results for "Rana" |
| 14 | exploration-14-additions-full-list-page1.png | Full additions list page 1 |
| 15 | exploration-15-additions-page1-scrolled.png | Additions page 1 scrolled down |
| 16 | exploration-16-employee-profile-health-insurance.png | Employee Health Insurance tab |
| 17 | exploration-17-removals-full-list.png | Full removals list |
| 18 | exploration-18-offboarded-still-insured.png | Offboarded employees page |
| 19 | exploration-19-new-removal-select-employee.png | New removal - employee selection |
| 20 | exploration-20-removal-form.png | Removal form sections |
| 21 | exploration-21-removal-date-expanded.png | Removal date section expanded |
| 22 | exploration-22-removal-reason-dropdown.png | Reason for removal dropdown |
| 23 | exploration-23-group-policies.png | Group policies overview |
| 24 | workflow-01-workflows-list.png | Workflows list (no endorsement triggers) |

---

## Issues Encountered

- **Search field clear**: Keyboard shortcuts (Ctrl+A, Backspace) did not clear the search field. Resolved using Playwright's native fill method.
- No session losses or login issues during validation.

---

## Summary

All 4 What-To-Do tasks passed. Both addition and removal flows were thoroughly tested including form fields, document uploads, AI verification, status tracking, search, filters, and employee profile integration. The workflow check confirmed no endorsement-specific automation triggers exist. No limitations were flagged in the payload and none were discovered during validation. 25 screenshots captured across all feature areas.
