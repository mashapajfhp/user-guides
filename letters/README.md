# Letters

Employee letter request and generation feature in Bayzat HR.

## Overview

The Letters feature allows employees to request official company letters (salary certificates, employment verification, etc.) and enables HR administrators to manage letter templates, approvals, and digital signatures.

## Key Capabilities

- **Letter Request Submission**: Employees can request letters using predefined templates
- **Multi-Level Approval**: Two-stage workflow (Approver → Authorized Signatory)
- **Template Management**: WYSIWYG editor with 80+ dynamic variables
- **Digital Signatures**: Upload and embed authorized signatory signatures
- **PDF Generation**: Automatic letter generation with variable substitution

## Navigation

Access via: **Requests → Letters**

## Primary Entity

Letter Requests (with statuses: Pending Review, Pending Signature, Signed, Rejected)

## Version History

| Version | Status | Date | Notes |
|---------|--------|------|-------|
| v1 | Validated | 2026-01-14 | Initial validation complete |

## Known Limitations

- No workflow automation integration (triggers/actions not available)
- Letter template cannot be changed after request creation
- Delete only available on rejected letters
- Deleted letters cannot be recovered

## Folder Structure

```
letters/
├── README.md                 (this file)
├── v1/
│   ├── screenshots/          (user guide screenshots)
│   ├── validation/
│   │   ├── screenshots/      (30 validation screenshots)
│   │   ├── result.json       (validation results)
│   │   └── report.md         (validation report)
│   └── letters-user-guide.html (generated guide)
├── v2/
│   └── ...
└── v3/
    └── ...
```
