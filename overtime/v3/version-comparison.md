# Overtime v3 vs v2 — Guide Differences

**Compared:** 2026-03-05
**v3:** https://mashapajfhp.github.io/user-guides/overtime/v3/overtime-user-guide.html
**v2:** https://mashapajfhp.github.io/user-guides/overtime/v2/overtime-user-guide.html

---

## Gaps Closed by Supplemental Validation

v3 was regenerated after adding WTD-010 (Schedule Extra Hours) and WTD-011 (Bulk Approve/Reject) to the validation payload. These were the two highest-impact gaps from v2.

| Gap | v3 Before | v3 After Regeneration |
|-----|-----------|----------------------|
| Schedule Extra Hours in Advance | MISSING | Task 6 with 3 subtasks: Access Scheduled tab, Fill Scheduling Form (progressive: Employee > Date + Duration > Compensation Type + Description), Review Scheduled Entries. 3 screenshots (19, 24, 21) |
| Bulk Approve/Reject | MISSING | Subtask 1d: Checkboxes on every row, select-all header, bulk action bar with smart counts per compensation type ("Reject All (3)", "Approve all for payroll (1)", "Approve all for leaves (2)"). Screenshot 27 |

---

## Remaining Gaps (v2 has, v3 does not)

| Gap | v2 Content | Impact |
|-----|-----------|--------|
| Best Practices section | 5 guidelines: configure work timings before policies, assign policies before publishing shifts, review pending requests regularly, use bulk approval for large volumes, document expected calculations | LOW |
| UAE labor law compliance note | "The platform may lack comprehensive flexibility for specific UAE labor law requirements. Manual adjustments outside the system may be required for compliance." | LOW |
| Custom Rate day-type specificity | v2 explicitly names "weekdays, weekends, public holidays, and days off" as separate multiplier targets; v3 says "different hour ranges" — less specific | LOW |
| Employee mobile app request flow | "Check out of attendance > System prompts for compensation request if extra hours detected > View status in Attendance section" | MEDIUM |
| Missing glossary terms | v3 has 7 terms, v2 has 10. v3 missing: Scheduled Overtime, Compensation Type, Rate Multiplier, Work Timing, Time & Pay Adjustments. v3 has terms v2 lacks: Minimum Extra Hours Threshold, Variable Pays | LOW |

---

## Where v3 Is Stronger

| Area | v3 | v2 |
|------|----|----|
| Screenshots | 18 referenced in guide (29 in validation) | 12 referenced |
| Schedule form detail | Progressive disclosure documented, disabled employees shown ("Not assigned to addition policy"), duration-based input (Hours + Minutes) | 7 generic steps, assumes start/end time fields |
| Bulk action detail | Smart counts per compensation type, select-all checkbox, individual row actions alongside bulk | Just mentions "bulk action bar appears" |
| Troubleshooting | 7 common issues + 8 edge cases + 6-item validation checklist | 4 common issues + 3 edge cases |
| Rate formula | Full formula with component breakdown and worked explanation | Basic explanation |
| Known gaps | 2 with Jira backlog refs (AV-2370, AV-1998) | 2 without Jira refs |
| Multi-currency | 4 currency constraint rules (change blocked with unpaid overtime, base currency flow, etc.) | Not covered |
| Prerequisites | 7 items with Required/Conditional/Recommended status | Fewer items, less granular |
| User journey | 6 phases: Plan > Configure > Assign > Manage > Process > Monitor | 4 phases: Configure > Schedule > Approve > Process |
| Navigation paths | 5 detailed paths with exact click sequences | 3 role-based paths (Admin/Manager/Employee) |
| Business rules | Global settings impact table, payroll integration constraints, policy separation rationale | 3-row core rules table, 4 system constraints |
| Approval flow | 3 routing examples with compensation type decision logic | Basic approval step description |
| CRUD operations | Documented in Key Tasks (create policy, read detail panel, edit via wizard, delete icon) | Implicit in setup steps |
| Related features | 8 linked modules with descriptions | 4 connected modules |

---

## Where v2 Is Still Stronger

| Area | Why v2 is better |
|------|-----------------|
| Best practices | 5 practical guidelines — absent from v3 |
| Employee perspective | Mobile app request flow documented |
| Day-type multipliers | Explicitly names weekday/weekend/holiday/day-off as separate Custom Rate targets |
| Glossary completeness | 10 terms vs 7 — includes Scheduled Overtime, Compensation Type, Rate Multiplier |
| UAE regulatory note | Legal compliance disclaimer present |

---

## Payload Correction Noted

WTD-010 expected start/end time fields based on v2's description. The actual UI uses **duration (Hours + Minutes)** instead. v2's documentation of "start time and end time" was inaccurate — v3 now correctly reflects the real interface.

---

## Summary

**v3 is now comprehensively stronger** across all operational workflows. The two critical gaps (Schedule in Advance + Bulk Actions) are closed with richer detail than v2 provided. v3 also corrects v2's inaccurate description of the scheduling form fields.

**Remaining v2-only content** (best practices, UAE law note, mobile app flow, glossary terms) is lower-impact informational content that does not require live UI validation to add.
