# Approval Flow v2 vs v1 — Guide Differences

**Compared:** 2026-03-05
**v2:** https://mashapajfhp.github.io/user-guides/approval-flow/v2/approval-flow-user-guide.html
**v1:** https://mashapajfhp.github.io/user-guides/approval-flow/v1/approval-flow-user-guide.html

---

## Sections Only in v2 (New)

| Section | What it covers |
|---------|---------------|
| Strategic Context | Why the feature exists — replaces email-based approvals, standardizes hierarchies, enforces DOA compliance |
| Known limitation: Line Manager visibility | Line managers see all downstream leave requests regardless of approval authority |
| Known limitation: Work Expenses criteria | Cannot use client/project fields as routing criteria |
| Known limitation: Backend activation | Manual backend activation required, not self-enabled |
| Known limitation: Custom roles need support | Custom roles require support intervention to enable |
| Known limitation: Simultaneous notifications | Notifications sent to all levels simultaneously regardless of sequence |
| 8 FAQs (vs 6 in v1) | 2 extra questions on feature visibility and role requirements |

---

## Sections Only in v1 (Missing from v2)

| Section | What v1 covers | Impact |
|---------|----------------|--------|
| Dedicated "Advanced vs Default" section | Full comparison table, categorized criteria data points, operations list | HIGH |
| Editing an Existing Flow (step-by-step) | 4-step walkthrough: locate, click edit, make changes, save and activate | HIGH |
| Deleting an Approval Flow (step-by-step) | 4-step walkthrough: find, click trash, confirm, update flows | HIGH |
| Managing Flow Priority (step-by-step) | Click ellipsis, move up/down, best practice on ordering specific to general | HIGH |
| Using Parallel Approvers / OR Logic (dedicated section) | 5-step process + note about rejection stopping entire process | MEDIUM |
| Workflow Integration clarity | "Approval Flows do not currently integrate with Bayzat Workflows" + 7-step automatic routing process | MEDIUM |
| "Changes only affect future requests" callout | Explicit note that in-progress requests continue with original flow | MEDIUM |
| "Changes not active until Update button" callout | Critical warning about unsaved state | MEDIUM |
| "No copy function" limitation | Cannot copy flows between request types | LOW |
| Criteria Data Points (categorized) | 6 categories: Request-Specific, Demographics, Identifiers, Management, Employment, Custom Fields | MEDIUM |
| Criteria Operations | 8 operations: is between, is not between, is equal to, is not equal to, is greater than, is greater than or equals, is less than, is less than or equals to | MEDIUM |
| Glossary: 12 terms (vs 9 in v2) | Missing from v2: Data Point, Default Flow, Priority Order, Request Type | LOW |

---

## Content Differences (Same Section, Different Quality)

| Topic | v1 | v2 |
|-------|----|----|
| Mental model | "Employee submits → evaluate advanced flows in priority → first match routes → no match = default → notify at each step" | "One approval flow configuration can control routing for multiple request types" — less precise |
| User journey | 6 stages: Access, Select Type, Create Advanced, Configure Default, Update, Auto-Route | 5 phases: Plan, Navigate, Configure, Test, Maintain — more abstract |
| User roles table | Super Admin, HR Administrator, Line Managers, Finance Team — with specific value per role | Super Admin, HR Manager, Approvers, Employee — less specific |
| Navigation path | "Automations → Approval flows" (correct from start) | "Automations → Approval flows" (fixed after manual correction) |
| Setup steps | 7 detailed numbered steps with bold headings per step | Configuration walkthrough but less structured |
| Troubleshooting table | 6-row table: Cannot access, Line Manager missing, Wrong routing, Changes not working, Request stuck, Wrong flow applied | Mentions edge cases but less structured |
| FAQ quality | More practical: "Can employees see which flow?", "What if approver on leave?", "Require ALL approvers?" | More basic: "Who can configure?", "What roles can approve?" |

---

## What v2 Does Better

| Area | Why v2 is better |
|------|-----------------|
| More limitations documented | 5 specific known issues vs v1's 1 ("no copy function") |
| More screenshots | 22+ screenshots referenced vs v1's ~10 |
| Business trip coverage | Confirms Business Trip Request tab now exists (was missing when v1 was written) |
| Custom roles detail | Lists all 15 custom role names found in Role Management |
| More FAQs | 8 vs 6 questions |

---

## Summary

**v1 is stronger on:** Step-by-step workflows (edit/delete/priority/OR logic), Advanced vs Default comparison, criteria detail, troubleshooting structure, and the "how to use" aspects.

**v2 is stronger on:** Known limitations, screenshot coverage, and newer feature state (Business Trip tab exists).

**Critical gaps in v2:** The dedicated Advanced vs Default section, CRUD workflow steps (edit/delete/priority), and the practical callouts about unsaved state and future-only changes are all missing. These were the most useful parts of v1 for an admin actually configuring the feature.
