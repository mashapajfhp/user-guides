# Daily Wage Calculator: v48 vs v47 — Exhaustive Comparison

**Date:** 2026-03-06

---

## Summary Table

| Aspect | v47 | v48 |
|--------|-----|-----|
| **Total sections** | 13 | 12 |
| **Sections removed** | — | Pre-Implementation, Leave Pay Rate, Feature Maintenance |
| **Sections added** | — | Workflow Integration, Approval Flow |
| **FAQ count** | 5 | 8 |
| **Glossary terms** | 16 | 9 |
| **User roles** | 4 | 2 |
| **Journey phases** | 6 | 5 |
| **Jira references** | 0 | 11 |
| **Zendesk citations** | ~20 inline | 0 inline (2 as hyperlinks) |
| **Cross-links to guides** | 0 | 5 guides + 2 Zendesk articles |
| **Screenshot paths** | Relative | Absolute GitHub raw URLs |
| **Lazy loading** | No | Yes |
| **Page max-width** | 900px | 1060px |
| **Text color** | #1a1a1a | #000000 |
| **Last updated** | 2026-01-16 | 2026-03-06 |
| **Page title** | lowercase, no brand | Proper case + "\| Bayzat" |

---

## 1. Overall Structure

### Sections Removed in v48
- **Pre-Implementation** — prerequisites table, required permissions, system requirements (content partially absorbed into Product Foundation)
- **Leave Pay Rate** — entire section on how leave types control daily wage calculations, paid/partially-paid/unpaid analysis, calculation examples, configuration hierarchy, conditional pay rate
- **Feature Maintenance** — ongoing maintenance tasks, review schedule table, best practices

### Sections Added in v48
- **Workflow Integration** (`#workflow-integration`) — real-world workflow examples, scenarios solved by workflows, additional workflow opportunities
- **Approval Flow** (`#approval-flow`) — states daily wage configuration does not require approval

### Sections Renamed
| v47 | v48 |
|-----|-----|
| Setup Process | Initial Setup & Configuration |
| Feature Usage | Key Tasks |
| Support Resources | FAQs & Support |
| Glossary of Terms | Glossary |

### HTML Structure
- **v47:** Flat body content, no wrapper
- **v48:** Wrapped in `<div class="page">` and `<main class="content-area" aria-label="User guide content">`

---

## 2. Hero/Header

- **v47 title:** `daily wage calculator - User Guide`
- **v48 title:** `Daily Wage Calculator - User Guide | Bayzat` (proper case + branding)

- **v47 subtitle:** "Configure flexible daily wage calculations for salary proration, leave encashment, and unpaid leave deductions"
- **v48 subtitle:** "Standardize daily wage calculations across salary proration, leave encashment, and unpaid leave deductions"

---

## 3. Quick Navigation Cards

- **v47:** 10 cards (includes "Leave Pay Rate")
- **v48:** 12 cards (adds "Workflow Integration", "Approval Flow", "FAQs & Support"; removes "Leave Pay Rate")
- **v48** uses HTML numeric entities for icons vs v47's emoji characters

---

## 4. Feature Overview

### Overview Description
- **v47:** "The Daily Wage Calculator is a flexible and customizable method..." (with Zendesk citation)
- **v48:** "Daily Wage Calculator defines how Bayzat calculates daily wages for three payroll services..." (no citation, more precise)

### Key Benefits
- **v47:** 6 bullet points (flexible methods, automatic calculations, customizable components, multiple bases, EOS accuracy, reduced errors)
- **v48:** 4 bullet points (labor law alignment, weekend/holiday control, per-service methods, real-time formula updates)

### Strategic Context (NEW in v48)
- 3 cards: "What Daily Wage Calculator Solves", "Why It Matters", "How It Connects"

### User Roles
- **v47:** 4 roles — Super Admins, Payroll Table Managers, Transaction Processors, HR Personnel
- **v48:** 2 roles — Payroll Admin, HR Admin

---

## 5. Product Foundation

### Mental Model
- **v47:** 3-step: "Daily Wage Settings (formula) -> Applied to Transactions -> Amounts"
- **v48:** 4-step: "Calculation Method (template) -> Applied to Payroll Process -> Determines Daily Rate -> Affects Employee Pay"

### Key Decisions Before Setup
- **v47:** 4 generic questions
- **v48:** 4 detailed questions with contextual guidance (labor law alignment, per-service needs, holiday exclusion, policy overrides)

### Related Features
- **v47:** 5 plain-text bullets, no links
- **v48:** 5 bullets with hyperlinks to published guides (Payroll Management, Leave Encashment, Leave Policies, Leave Management, Public Holiday Calendar)

### Prerequisites Table
- **v47:** 5 rows, all "Required"
- **v48:** 5 rows with "Conditional" and "Recommended" status levels (not all "Required")

---

## 6. User Journey

- **v47:** 6 phases in CSS grid (Access Settings → Select Base → Configure Components → Apply to Policies → Process Payroll → Review & Finalize) + 6 success indicators
- **v48:** 5 phases in vertical timeline (Understand Impact → Navigate → Configure → Review Integration → Monitor Impact), no success indicators

---

## 7. Feature Discovery

- **v47:** Single access path with 4 steps
- **v48:** 4 access paths — Primary Configuration Path, Parent Settings Context, Payroll Table (Impact Monitoring), Workflow Automation Path

---

## 8. Setup Process / Initial Setup

### Structure
- **v47:** 6 generic numbered steps
- **v48:** Per-service walkthrough (Service 1: Salary Proration, Service 2: EOS Leave Encashment, Service 3: Unpaid Leave Deduction)

### Salary Components
- **v47:** Step 3 offers "Basic salary" or "Basic salary + allowances"
- **v48:** States formula automatically includes "Basic salary + allowances" — cannot be customized (contradicts v47)

### New in v48
- Overwrite toggle documentation for EOS and Unpaid Leave services
- Calculation Method Selection Guide comparison table (Working days / Calendar days / Custom days with AED examples)
- Activation & Impact subsection ("changes take effect immediately")
- Related Configuration links to EOS eligibility, leave encashment, leave policies

---

## 9. Leave Pay Rate (REMOVED in v48)

**v47 had comprehensive coverage:**
- When Daily Wage Calculator applies (Paid/Partially paid/Unpaid leave)
- 3 options with screenshots, business logic, calculation examples (AED 10,000 salary)
- Why formula fields are disabled at policy level (3-level hierarchy table)
- Conditional Pay Rate toggle
- Summary table
- 3 dedicated screenshots

**v48:** Entire section removed. This is the most significant content loss.

---

## 10. Feature Usage / Key Tasks

- **v47:** 3 feature cards (Unpaid Leave, Salary Proration, Leave Encashment) with 3 usage examples
- **v48:** Task/subtask structure — Configure methods, View settings, Understand behavior, Troubleshoot issues

### New in v48
- Calculation Method Comparison Table (Method, Formula, Stability, Best For)
- Public Holiday Impact subtask with separate Working Days vs Calendar/Custom behavior
- Work Week Configuration Impact with Employee A vs B example
- Leave Salary Accrual Fluctuations documentation

---

## 11. Feature Maintenance (REMOVED in v48)

**v47 had:**
- 5 ongoing maintenance tasks
- 5-row review schedule table (Frequency + Responsibility)
- 6 best practices

**v48:** Entire section removed.

---

## 12. Workflow Integration (NEW in v48)

- 3 real-world workflow examples (Salary Update Triggers, Leave Salary Request Automation, Unpaid Leave Processing)
- 6-row comparison table (Without Workflow vs With Workflow)
- 3 additional workflow opportunities
- Link to Workflows guide

---

## 13. Approval Flow (NEW in v48)

- States daily wage config does not require approval
- Screenshot showing payroll transactions require approval but settings do not

---

## 14. Business Rules & Limitations

### Structure Change
- **v47:** 8-row consolidated table + 6 system constraints + 5 compliance requirements + 5 validated interface features
- **v48:** Categorized by severity — 3 High-Impact warnings, 1 Medium-Impact limitation, Configuration Constraints tables

### Jira References (NEW in v48)
11 unique Jira tickets referenced:
- TSSD-3939, TSSD-4033, TSSD-4742 (EOS/Leave Encashment limitations)
- TSSD-4303, TSSD-4882, TSSD-4905 (Salary Proration limitations)
- TSSD-2056, TSSD-4464 (Time Off/Payroll sync gap)
- TSSD-4368, TSSD-3648 (Divisor precision)
- TSSD-4292 (Working days "By Design")

### Removed in v48
- Compliance Requirements section
- Validated Interface Features table

---

## 15. Troubleshooting

- **v47:** 6 generic issues + 6 edge cases + 6 ordered resolution steps
- **v48:** 6 specific issues (all with Jira refs) + 4 edge cases + inline resolutions + Known Workarounds section

---

## 16. FAQs & Support

### FAQs
- **v47:** 5 generic questions
- **v48:** 8 specific scenario-based questions (e.g., "Why don't my EOS leave encashment settings appear in the End of Service eligibility section?")

### Getting Help
- **v47:** 3 generic resources + email/chat contacts + UAE Labor Law note
- **v48:** 3 resources with actual Zendesk hyperlinks, no contact info, no labor law note

---

## 17. Glossary

- **v47:** 16 terms with verbose definitions
- **v48:** 9 terms with concise definitions
- **Removed:** Allowances, Basic Salary, Daily Wage Calculator, Daily Wage Rate, EOS, Gratuity, Leave Policy, Overwrite calculation, Payroll Table, Public Holiday, Unpaid Leave
- **Added:** Daily Wage Divisor, EOS Leave Encashment

---

## 18. Screenshots

- **v47:** 14 unique screenshots, relative paths, no lazy loading
- **v48:** 12 unique screenshots, absolute GitHub raw URLs, lazy loading enabled, screenshots reused more frequently

---

## 19. Cross-Links

- **v47:** Zero cross-links
- **v48:** Links to 5 published guides (Payroll Management, Leave Encashment, Leave Policies, Leave Management, Workflows) + 2 Zendesk articles

---

## 20. Zendesk Citations

- **v47:** ~20 inline `<span class="citation">` tags referencing 5 Zendesk articles
- **v48:** Zero inline citations (all removed)

---

## 21. Tone & Language

- **v47:** Formal, passive constructions ("This feature enables HR teams..."), reference-manual feel with citations, uses "Value Proposition"
- **v48:** Direct, action-oriented ("Define how monthly salaries are divided..."), task-oriented headings, transparent about known issues with Jira refs, conversational in places

---

## 22. CSS/Styling

| Aspect | v47 | v48 |
|--------|-----|-----|
| Body max-width | 900px | 1060px |
| Text color | #1a1a1a | #000000 |
| FAQ open state | Light blue gradient | Purple gradient with white text |
| Nav card hover | No effect | Purple gradient background |
| New CSS components | — | strategic-context, glossary-table, vertical timeline, screenshot-container |
| Print styles | Basic | Enhanced (nav hidden, faq break-inside: avoid) |

---

## Assessment

**v48 is substantially better** due to:
1. Honest about limitations (11 Jira references vs 0)
2. Better cross-linked (5 guide links + 2 Zendesk links vs 0)
3. Task-oriented structure vs reference-manual style
4. Corrected salary component info (not customizable)
5. New Workflow Integration and Approval Flow sections
6. More specific FAQs and troubleshooting

**v47 content worth considering for v48:**
- Leave Pay Rate section had valuable calculation examples and hierarchy explanation — this content may belong in the Leave Policies guide instead
- Feature Maintenance review schedule could be useful operational guidance
- Compliance Requirements had important UAE labor law notes
