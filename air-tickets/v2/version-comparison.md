# Air Tickets: v2 (new pipeline) vs v27 (old pipeline) — Key Differences

## Structure & Completeness

| Aspect | v2 (`air-tickets`) | v27 (`air-ticket`) |
|---|---|---|
| **Sections** | 13 (hero through glossary) | ~11 (similar but less structured) |
| **Screenshots** | 23 validated screenshots (crud-*, exploration-*, task-*, workflow-*) | 12 generic screenshots (numbered 03-14) |
| **Screenshot naming** | Semantic prefixes: `crud-01-request-select-employee.png` | Generic numbering: `05-create-policy-step1.png` |
| **Glossary terms** | 12 | 10 |
| **FAQs** | 12 | 6 |
| **Limitations documented** | 25+ (from WOF validation + Jira) | 5 generic rules + 2 known limitations |
| **Edge cases** | 14 detailed scenarios | 4 brief scenarios |
| **Troubleshooting issues** | 10 with causes + resolutions | 5 basic |

## Content Quality

| Area | v2 (new) | v27 (old) |
|---|---|---|
| **Hero blurb** | "Automate employee air ticket allowances with flexible redemption options" | "Manage employee air ticket allowances with flexible policies and multiple redemption options" |
| **Strategic Context** | Feature-specific: UAE/KSA mandatory benefits, 60% encashment stat from PRD | Missing entirely |
| **CRUD evidence** | All 4 ops PASSED with specific evidence (form fields, validation errors, confirmation dialogs) | Generic "submit/approve/process" flow |
| **WTD tasks** | 4 validated tasks with PASSED/PARTIAL status and specific screenshots | No task validation — derived from articles only |
| **WOF limitations** | 12 validated items with CONFIRMED/NOT_REPRODUCIBLE/DIFFERENT statuses, Jira refs | 2 generic known limitations |
| **Approval flow detail** | Specific: "2 advanced flows, default = Payroll table admin, criteria: amount > 3000 AED" | Generic: mentions criteria-based routing without specifics |
| **Workflow detail** | Specific trigger: "Air ticket cycle renewal is due" + 6 scenario comparison table | Same trigger but 4 scenarios, more generic |

## Navigation & Discovery

| | v2 | v27 |
|---|---|---|
| **Admin paths** | 4 validated paths (Payroll, Requests, Settings, Approval flows) | 3 paths (Employee, Manager, Admin roles) |
| **Employee path** | `Payroll → My air tickets` (validated) | `Requests → My requests → My air tickets` (different) |
| **Path confidence** | From Playwright `navigation_map_coverage` (6/6 visited) | From article content (not validated) |

## Core Tasks

| | v2 | v27 |
|---|---|---|
| **Entity types** | 3 request types documented separately (Reimbursement, Booking, Encashment) with unique fields per type | 3 types mentioned but not separately detailed |
| **Create flow** | Employee selection → Type selector → Type-specific form (reimbursement fields, booking fields, encashment fields) | Generic 5-step mobile app flow |
| **Edit** | Documented with evidence: "Employee field disabled, all others editable" + screenshot | "Contact HR if changes needed" |
| **Delete** | Confirmation dialog documented + restriction: "disabled post-approval" | Not documented |
| **Process approved** | Two paths: "Add to payroll" (reimbursement/encashment) vs "Upload ticket" (booking) | Single generic "process" step |

## Business Rules & Limitations

| | v2 | v27 |
|---|---|---|
| **Policy config** | "24 policies with Active/Inactive toggles, 88 unassigned employees" (from live UI) | Generic "configure allowance and redemption options" |
| **Auto-encashment** | 6 specific constraints (immovable status, "Created on" timestamp, no approvers, etc.) | Not documented |
| **Jira-backed issues** | 7 issues with ticket IDs (TSSD-1900, TSSD-506, etc.) | None |
| **By-design flags** | Items marked "By Design" vs actual bugs | No distinction |

## Bottom Line

**v27** reads like documentation derived from Zendesk articles and PRDs — accurate but generic, with no live UI validation.

**v2** reads like documentation grounded in actual product testing — specific counts, real form fields, validated limitations with evidence, and screenshots that match exact UI states. This is the direct result of the pipeline fix: CRUD, WTD, WOF, workflow, and approval flow data all flowing through correctly.
