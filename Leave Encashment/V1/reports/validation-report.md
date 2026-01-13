# Leave Encashment Feature - Validation Report V1

## Validation Session Information

- **Session ID**: val_2026-01-13_leave-encashment
- **Feature Name**: Leave Encashment
- **Feature Slug**: leave-encashment
- **Validation Date**: 2026-01-13
- **Status**: BLOCKED - Requires Authentication Credentials

---

## Executive Summary

| Metric | Value |
|--------|-------|
| Total User Journeys | 2 |
| Journeys Validated | 0 |
| Journeys Blocked | 2 |
| Total Steps to Validate | 14 |
| Steps Validated | 1 (Login page access) |
| Screenshots Captured | 1 |
| Known Issues Documented | 15 |
| Blocking Issue | Missing authentication credentials |

---

## Validation Status: INCOMPLETE

### Reason for Incomplete Validation
The validation payload **did not include authentication credentials** required to access the Bayzat HR application. The validation process successfully accessed the login page but cannot proceed with the following tasks without valid credentials:

1. Configure Leave Encashment Policy and Calculation (9 steps)
2. Set up Leave Encashment Employee Ticket (5 steps)

### What Was Validated
- ✅ Login page accessibility (https://app.bayzat.com/auth/login)
- ✅ Login page UI structure and elements
- ✅ Screenshot captured: `00-login-page.png`

---

## User Journey 1: Configure Leave Encashment Policy and Calculation

**Status**: ⏸️ BLOCKED - Requires Authentication

**Journey Details**:
- **Actor**: Payroll Administrator / HR Manager
- **Total Steps**: 9
- **Expected Outcome**: Leave encashment policies configured correctly with appropriate salary components, calculation methods, eligibility criteria, and employee assignments

### Steps to Validate (Pending Authentication)

| Step | Action | Description | Status |
|------|--------|-------------|--------|
| 1 | Navigate | Navigate to Settings > Payroll > Leave encashment policy or End of Service eligibility section | ⏸️ Blocked |
| 2 | Navigate | Access Payroll Settings and select the Payroll tab | ⏸️ Blocked |
| 3 | Click | Click 'Add New' to create a new leave encashment policy or configure existing settings | ⏸️ Blocked |
| 4 | Configure | Set policy details including policy name, description, and applicable leave types | ⏸️ Blocked |
| 5 | Select | Select salary components for leave encashment calculation (Basic Only or Basic + Allowances) | ⏸️ Blocked |
| 6 | Select | Choose the calculation method: calendar days, working days, or custom days based on Time Off policy | ⏸️ Blocked |
| 7 | Configure | Define eligibility criteria such as minimum accrued leave days, minimum job tenure, and probation period restrictions | ⏸️ Blocked |
| 8 | Select | Select eligible employees for the policy, either all employees or a custom selection | ⏸️ Blocked |
| 9 | Save | Review and save the leave encashment policy configuration | ⏸️ Blocked |

### Source Articles
- Zendesk Article: 14243768433425
- Zendesk Article: 14242782894481
- Zendesk Article: 35471862594833

---

## User Journey 2: Set up Leave Encashment Employee Ticket

**Status**: ⏸️ BLOCKED - Requires Authentication

**Journey Details**:
- **Actor**: System Administrator / HR Admin
- **Total Steps**: 5
- **Expected Outcome**: Leave Encashment ticket type enabled and configured with appropriate admin roles and employee eligibility

### Steps to Validate (Pending Authentication)

| Step | Action | Description | Status |
|------|--------|-------------|--------|
| 1 | Navigate | Navigate to Settings > Tickets | ⏸️ Blocked |
| 2 | Enable | Enable the Leave Encashment ticket type | ⏸️ Blocked |
| 3 | Configure | Configure admin roles allowed to manage leave encashment tickets | ⏸️ Blocked |
| 4 | Select | Select employees who can request leave encashment tickets, choosing between all employees or a custom selection | ⏸️ Blocked |
| 5 | Save | Review and save the ticket type configuration | ⏸️ Blocked |

### Source Articles
- Zendesk Article: 35570282274961

---

## Known Issues and Limitations

The following 15 issues have been documented based on JIRA tickets and should be considered during validation:

### Critical/High Severity Issues (1)

| # | Issue | Limitation | Workaround | JIRA |
|---|-------|------------|------------|------|
| 1 | Inaccurate prorated leave encashment calculations for partial year exits | System lacks precise day-level prorated leave calculation for employees leaving mid-month or partial year | Manual calculation and adjustment needed for accurate leave encashment in such cases | OS-345, TSSD-2499 |

### Medium Severity Issues (13)

| # | Issue | Limitation | Workaround | JIRA |
|---|-------|------------|------------|------|
| 2 | Custom role configuration complexity for leave encashment approvals | No intuitive UI for mapping custom roles to leave encashment policies; custom roles do not automatically appear in approval workflows without backend admin intervention | Manual backend configuration is required to map custom roles to policies to enable visibility in approval flows | TSSD-4337 |
| 3 | Leave Encashment ticket visibility cannot be restricted by employee selection | The system cannot filter Leave Encashment tickets based on specific employee assignments in payroll policies, defaulting to all employees view | No workaround available; selective ticket visibility is not supported | TSSD-4764 |
| 4 | Unclear handling of overused leave days in end of service leave encashment | No explicit system behavior or documentation on how overused leave days are deducted in MOHRE-specific leave encashment calculations | Manual verification and adjustment may be required to comply with MOHRE regulations | TSSD-1404 |
| 5 | User interface does not clearly confirm leave encashment configuration changes | No immediate or clear indication that leave encashment settings have been successfully saved, causing user uncertainty | Users should verify changes by revisiting configuration screens or checking payroll results | TSSD-3939 |
| 6 | Incomplete Leave Encashment Policy setup workflow | Frontend implementation of leave encashment policy setup is partial, missing final configuration steps | Users must complete available steps and await further platform updates for full workflow | OS-479, OS-478, OS-477 |
| 7 | No backend endpoint for creating leave encashment requests | Platform lacks API support for creating leave encashment requests programmatically | Requests must be created manually through the UI; no automation possible | OS-657 |
| 8 | Lack of detailed employee eligibility view for leave encashment | No dedicated admin interface to screen or filter employees eligible for leave encashment | Admins must manually review employee records or reports to determine eligibility | OS-2136 |
| 9 | Leave encashment reporting is fragmented across multiple reports | Users must access separate reports to view leave encashment data, reducing efficiency | Manually consolidate data from multiple reports for comprehensive view | OS-2691 |
| 10 | No workflow for handling leave encashment transaction statuses | System lacks comprehensive status management for leave encashment submissions and rejections | Manual tracking of transaction statuses is required outside the system | OS-664 |
| 11 | No manual entry for approved leave encashment requests in payroll | Payroll system does not support manual addition of approved leave encashment requests | All leave encashment must be processed through automated workflows | OS-2366 |
| 12 | No configurable leave encashment toggle in time off policy settings | Time Off Managers cannot enable or disable leave encashment within leave policy configurations | Leave encashment must be managed separately from time off policies | OS-53 |
| 13 | No specific role policy for leave encashment administration | Role-based access control lacks a dedicated leave encashment admin role for fine-grained permissions | Use existing roles with broader permissions; no dedicated leave encashment admin role available | OS-1841 |
| 14 | Leave encashment ticket status filters are not fully configurable | Status filters for leave encashment tickets in QA state cannot be customized to user needs | Users must work within existing filter constraints | OS-2597 |

### Low Severity Issues (1)

| # | Issue | Limitation | Workaround | JIRA |
|---|-------|------------|------------|------|
| 15 | No ability to delete leave encashment policies | System does not support deletion of leave encashment policies once created | Policies must be disabled or replaced; deletion is not possible | OS-655 |

---

## Validation Evidence

### Screenshots Captured

| Screenshot | Description | Location | Status |
|------------|-------------|----------|--------|
| 00-login-page.png | Bayzat HR login page showing authentication form with email/password fields, SSO options (Google/Microsoft), and branding | V1/screenshots/ | ✅ Captured |

### Expected Screenshots (Pending Authentication)

The following screenshots should be captured once authentication is provided:

**Journey 1: Configure Leave Encashment Policy (10 screenshots expected)**
- 01-settings-menu-navigation.png
- 02-payroll-submenu-access.png
- 03-leave-encashment-policy-section.png
- 04-add-new-policy-button.png
- 05-policy-details-form.png
- 06-salary-components-selection.png
- 07-calculation-method-options.png
- 08-eligibility-criteria-configuration.png
- 09-employee-selection-interface.png
- 10-save-confirmation.png

**Journey 2: Set up Leave Encashment Ticket (6 screenshots expected)**
- 11-settings-tickets-navigation.png
- 12-ticket-types-list.png
- 13-leave-encashment-toggle-enable.png
- 14-admin-roles-configuration.png
- 15-employee-eligibility-selection.png
- 16-ticket-configuration-saved.png

---

## Recommendations

### Immediate Actions Required

1. **Provide Authentication Credentials**
   - Supply valid Bayzat HR credentials (email and password)
   - Ensure the account has appropriate permissions to:
     - Access Settings menu
     - Navigate to Payroll Settings
     - Configure Leave Encashment Policies
     - Manage Ticket Types
     - View and assign employees

2. **Permission Verification**
   - Verify the test account has Payroll Administrator or HR Manager role
   - Confirm access to Settings > Payroll section
   - Confirm access to Settings > Tickets section
   - Ensure ability to create/edit policies
   - Ensure ability to enable/configure ticket types

### For Complete Validation

Once credentials are provided, the validation process should:

1. **Authenticate and verify dashboard access**
   - Login successfully
   - Confirm main dashboard loads
   - Verify user permissions and role

2. **Navigate through Journey 1 (Policy Configuration) - 9 steps**
   - Document each UI screen and element
   - Capture screenshots at each step
   - Test all configuration options
   - Verify dropdowns, selections, and inputs
   - Test save functionality
   - Confirm success/error messages

3. **Navigate through Journey 2 (Ticket Setup) - 5 steps**
   - Document ticket type enablement UI
   - Test admin role configuration
   - Verify employee selection options
   - Confirm configuration persistence
   - Test ticket creation workflow

4. **Cross-reference known issues**
   - Validate which documented issues are still present in current version
   - Document any new issues discovered
   - Test documented workarounds where applicable
   - Note any issues that have been resolved

5. **Generate comprehensive user guide content**
   - Create step-by-step screenshots with annotations
   - Document actual UI text, labels, and field names
   - Note any differences from Zendesk documentation
   - Provide clear navigation paths with exact menu names
   - Document all configuration options and their implications

---

## User Guide Preparation Status

### Ready for Documentation: ❌ NO

**Blocking Factors**:
- ❌ No authenticated access to the feature
- ❌ No UI screenshots captured beyond login page
- ❌ No navigation paths verified in actual application
- ❌ No configuration screens accessed or documented
- ❌ No field labels or dropdown options captured

### What's Ready:
- ✅ Known limitations and issues documented (15 JIRA references)
- ✅ Expected user journeys outlined from payload
- ✅ Source Zendesk article references compiled
- ✅ Folder structure created and organized
- ✅ Validation framework established
- ✅ Login page captured as baseline

### What's Missing:
- ❌ Actual UI screenshots of the Leave Encashment feature
- ❌ Verified navigation paths with menu structure
- ❌ Configuration screen captures showing all fields
- ❌ Field labels, placeholders, and help text
- ❌ Dropdown options and selection values
- ❌ Success/error message texts
- ❌ Current state validation vs documented known issues
- ❌ Comparison between expected behavior and actual behavior

---

## Next Steps

### To Complete This Validation

1. **Obtain valid authentication credentials** for a Bayzat HR account with the following:
   - Payroll Administrator or HR Manager role
   - Access to Settings > Payroll section
   - Access to Settings > Tickets section
   - Permissions to create/edit policies
   - Permissions to configure ticket types

2. **Update validation payload** to include credentials in this format:
   ```json
   {
     "config": {
       "base_url": "https://app.bayzat.com",
       "credentials": {
         "email": "test-user@example.com",
         "password": "secure-password"
       }
     }
   }
   ```

3. **Re-run this validation** with credentials provided

4. **Complete both user journeys** with full screenshot documentation

5. **Validate UI against 15 known issues** to determine current state

6. **Generate comprehensive user guide** based on validated interface and actual UI behavior

---

## Technical Details

### Validation Payload Summary
- **Feature Category**: Payroll
- **JIRA Tickets Referenced**: 15 unique issues
- **Zendesk Articles Referenced**: 6 articles
- **Total Tasks to Validate**: 2 user journeys
- **Total Steps**: 14 (9 + 5)
- **Consolidation**: 20 JIRA tickets consolidated to 15 unique issues

### Environment Details
- **Base URL**: https://app.bayzat.com
- **Login URL**: https://app.bayzat.com/auth/login
- **Browser**: Playwright (Chromium)
- **Validation Tool**: Automated Playwright MCP
- **Validation Date**: 2026-01-13
- **Session ID**: val_2026-01-13_leave-encashment
- **Output Directory**: /Users/mashapa/actions-runner/_work/user-guides/user-guides/Leave Encashment/V1

### Files Generated
- ✅ README.md (feature overview in root folder)
- ✅ validation-evidence.json (structured validation data)
- ✅ validation-report.md (this comprehensive report)
- ✅ 00-login-page.png (login page screenshot)
- ⏸️ validation-results.json (pending - requires complete validation)
- ⏸️ user-guide-data.json (pending - requires complete validation)

---

## Appendix: Expected UI Elements to Verify

Based on the validation payload, the following UI elements should be verified during authenticated validation:

### Settings Navigation
- [ ] Settings menu item in main navigation
- [ ] Payroll submenu under Settings
- [ ] Tickets submenu under Settings
- [ ] Leave encashment policy section visibility
- [ ] End of Service eligibility section visibility

### Policy Configuration Screen
- [ ] "Add New" button for creating policies
- [ ] Policy name input field
- [ ] Policy description text area
- [ ] Leave types selection interface (dropdown or checkboxes)
- [ ] Salary components selection:
  - [ ] Basic Only radio button/option
  - [ ] Basic + Allowances radio button/option
- [ ] Calculation method selection:
  - [ ] Calendar days option
  - [ ] Working days option
  - [ ] Custom days based on Time Off policy option
- [ ] Eligibility criteria section:
  - [ ] Minimum accrued leave days input field
  - [ ] Minimum job tenure input field
  - [ ] Probation period restriction toggle/checkbox
- [ ] Employee selection interface:
  - [ ] All employees option
  - [ ] Custom selection option
- [ ] Save/Submit button
- [ ] Cancel button
- [ ] Success confirmation message or indicator
- [ ] Error validation messages

### Ticket Configuration Screen
- [ ] Leave Encashment ticket type in ticket types list
- [ ] Enable/disable toggle for Leave Encashment ticket type
- [ ] Admin roles multi-select dropdown or checkbox list
- [ ] Employee eligibility selection:
  - [ ] All employees option
  - [ ] Custom selection option
- [ ] Save configuration button
- [ ] Configuration saved confirmation message
- [ ] Changes revert/cancel option

### Validation Checkpoints
- [ ] Verify incomplete workflow issue (OS-479, OS-478, OS-477)
- [ ] Check for save confirmation clarity (TSSD-3939)
- [ ] Test custom role visibility in dropdowns (TSSD-4337)
- [ ] Verify employee selection filtering (TSSD-4764)
- [ ] Check for policy deletion option (OS-655)

---

**Report Generated**: 2026-01-13  
**Report Version**: V1  
**Validation Status**: INCOMPLETE - BLOCKED BY AUTHENTICATION  
**Next Action**: Provide credentials and re-run validation

---

*This validation report is part of the automated user guide generation process for Bayzat HR features.*
