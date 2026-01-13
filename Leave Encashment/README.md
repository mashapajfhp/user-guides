# Leave Encashment Feature

## Overview

Leave Encashment is a payroll feature that allows employees to convert their unused leave days into monetary compensation. This feature is commonly used during end-of-service settlements or as part of annual leave policies where employees can opt to receive payment for accrued leave days instead of taking time off.

## Feature Details

- **Category**: Payroll
- **Feature Slug**: leave-encashment
- **Current Status**: Active

## Key Capabilities

### 1. Policy Configuration
- Create and manage leave encashment policies
- Configure salary components for calculation (Basic Only or Basic + Allowances)
- Define calculation methods (calendar days, working days, or custom days)
- Set eligibility criteria (minimum accrued leave, tenure requirements, probation restrictions)
- Assign policies to specific employees or all employees

### 2. Ticket Management
- Enable Leave Encashment ticket type for employee requests
- Configure admin roles for ticket management
- Control employee eligibility for submitting requests

## Version Structure

This feature uses a versioned folder structure to track validation artifacts and documentation over time:

### V1 (Current Version)
- **Location**: `/V1/`
- **Purpose**: Initial validation and documentation
- **Contents**:
  - Screenshots of all configuration steps
  - Validation results and reports
  - Known issues and limitations documentation

## Known Limitations

This feature has several documented limitations and workarounds. Please refer to the validation report in the current version folder for detailed information about:

- Custom role configuration complexity (TSSD-4337)
- Ticket visibility restrictions (TSSD-4764)
- Prorated calculation accuracy (OS-345, TSSD-2499)
- Incomplete policy setup workflow (OS-479, OS-478, OS-477)
- And 10 additional tracked issues

## Related Documentation

- Source Zendesk Articles: 14243768433425, 14242782894481, 35471862594833, 35570282274961
- JIRA Tickets: Multiple references available in validation reports

## Validation History

| Version | Date | Status | Validator |
|---------|------|--------|-----------|
| V1 | 2026-01-13 | In Progress | Automated Validation |

---

*This documentation is maintained as part of the automated user guide generation process.*
