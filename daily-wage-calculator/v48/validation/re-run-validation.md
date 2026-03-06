# Daily Wage Calculator v48 User Guide — Re-Run Validation Report

**Date:** 2026-03-06
**Method:** Playwright browser automation against live Bayzat application
**Guide URL:** https://mashapajfhp.github.io/user-guides/daily-wage-calculator/v48/daily-wage-calculator-user-guide.html

---

## Summary

- **Total Issues Found:** 10
- **Critical (factually wrong / blocks user):** 2
- **Major (misleading or missing important info):** 5
- **Minor (cosmetic / terminology):** 3

**Overall Assessment:** v48 is substantially more accurate than v47. Most core claims about the Daily Wage Calculation feature are correct. The issues found are relatively minor compared to guides validated previously (e.g., biometric attendance had fabricated 9-step processes). The guide's Jira references, cross-links, and limitation documentation are genuine strengths.

**Note:** Some sections of the guide (Workflow Integration scenarios, additional workflow opportunities) are clearly presented as suggestions/recommendations, not descriptions of existing features. These are NOT flagged as issues since they are framed as possibilities, not current UI.

---

## Critical Issues (2)

### C1 — EOS and Unpaid Leave Table Rows Show Redirect Text, Not Formulas
- **Location:** Feature Overview, Initial Setup, Key Tasks — multiple references to "each service row displays the current formula"
- **Guide says:** Each of the three service rows shows its calculation formula (e.g., "(Basic salary + allowances) / Working days in month")
- **Actual:** Only the **Salary proration** row displays a formula ("Basic salary + allowances / 30 days"). The other two rows show redirect text:
  - **EOS leave encashment** → "Calculated in end of service eligibility"
  - **Unpaid leave deduction** → "Calculated in leave policy"
  These are NOT formulas — they indicate the calculation is configured elsewhere.
- **Fix:** Update the guide to explain that only Salary proration shows a formula in the main table. EOS and Unpaid leave show redirect messages pointing to their respective configuration locations.

### C2 — Salary Proration Dialog Has No "Overwrite" Toggle
- **Location:** Initial Setup → Service 1: Salary Proration
- **Guide says:** Implies the Overwrite toggle exists for Salary Proration by describing it only for EOS and Unpaid Leave services. However, the guide's description of the Salary Proration dialog omits any mention of a toggle, which is correct — but the broader framing ("each service has...") could mislead.
- **Actual:** The Salary Proration dialog contains ONLY:
  - "Month calculation" dropdown (Working days / Calendar days / Custom days)
  - "Number of days" field (only visible when Custom days selected)
  - "Daily wage =" formula display
  - Cancel and Save buttons
  There is NO "Overwrite daily wage calculation in policies" toggle. This toggle ONLY exists in the EOS and Unpaid Leave dialogs.
- **Severity note:** The guide doesn't explicitly claim Salary Proration has the toggle, but the Setup section could be clearer about which dialogs have which elements.
- **Fix:** Add explicit note that the Overwrite toggle is only available in the EOS and Unpaid Leave dialogs, not Salary Proration.

---

## Major Issues (5)

### M1 — Missing Subtitle/Description Text in Dialog Titles
- **Location:** Initial Setup — all three service dialogs
- **Guide says:** Describes dialog title as just "Salary Proration", "EOS Leave Encashment", "Unpaid Leave Deduction"
- **Actual:** Each dialog has both a title and a subtitle:
  - Salary Proration: "Salary proration affects employees' first salary and end of service settlement"
  - EOS leave Encashment: (no visible subtitle, just the Overwrite toggle and table)
  - Unpaid Leave Deduction: (no visible subtitle, just the Overwrite toggle and table)
- **Also:** The EOS dialog title is "EOS leave Encashment" (lowercase "leave") — not "EOS Leave Encashment" as guide states
- **Fix:** Add the dialog subtitle for Salary Proration; fix capitalization of EOS dialog title

### M2 — Formula Text Wording Doesn't Match Exactly
- **Location:** Initial Setup, Key Tasks — formula descriptions
- **Guide says:** "(Basic salary + allowances) / Working days in month" and "(Basic salary + allowances) / calendar days in month"
- **Actual:** The dialog shows:
  - Working days: "Daily wage = (Basic salary + allowances) / Working days"
  - Calendar days: "Daily wage = (Basic salary + allowances) / Calendar days"
  - Custom days: "Daily wage =" (formula shows dynamically with custom number)
  The UI does NOT say "in month" — it just says "Working days" or "Calendar days"
- **Fix:** Remove "in month" from formula text to match actual UI

### M3 — EOS Dialog Column Header Is "Eligible paid leave types" (Not "Leave Types")
- **Location:** Initial Setup → Service 2: EOS Leave Encashment
- **Guide says:** References "leave types" generically and "47+ leave types"
- **Actual:** The table column header is specifically **"Eligible paid leave types"** and the formula column is **"Daily wage calculation"**. The leave type names are clickable links (blue text) that navigate to the policy configuration.
- **Fix:** Use the exact column header "Eligible paid leave types" and note that types are clickable links

### M4 — Unpaid Leave Dialog Column Header Is "Eligible unpaid leave types"
- **Location:** Initial Setup → Service 3: Unpaid Leave Deduction
- **Guide says:** References "leave types" generically and "13 leave types"
- **Actual:** The table column header is specifically **"Eligible unpaid leave types"** and the formula column is **"Daily wage calculation"**. The leave type names are also clickable links (blue text).
- **Fix:** Use the exact column header "Eligible unpaid leave types" and note clickable links

### M5 — EOS Eligibility Section Column Header Differs
- **Location:** Business Rules → Disconnected Configuration Sections
- **Guide says:** References the EOS eligibility section showing leave types with daily wage calculations
- **Actual:** The EOS eligibility accordion section has columns **"Paid Leave Types"** and **"Daily rate is calculated based on"** — NOT "Daily wage calculation". It also has a **"Configure"** button (purple). Currently shows only 1 leave type, confirming the guide's disconnect observation.
- **Fix:** Use actual column headers from EOS eligibility section

---

## Minor Issues (3)

### N1 — Settings Navigation Tab Label
- **Location:** Feature Discovery, Initial Setup — navigation path references
- **Guide says:** "Settings → Payroll → Daily Wage Calculation"
- **Actual:** The Settings page has horizontal tabs: Company, **Payroll**, Leaves, Attendance, Work Expenses, Letter Templates, Performance, Tickets (New). Within Payroll settings, "Daily Wage Calculation" is an expandable accordion section, not a sub-tab.
- **Impact:** Low — users can still find it, but the accordion pattern should be noted
- **Fix:** Clarify that Daily Wage Calculation is an accordion section within Payroll settings, not a sub-navigation item

### N2 — Payroll Table URL Pattern
- **Location:** Feature Discovery → Payroll Table (Impact Monitoring)
- **Guide says:** Navigation path "Payroll → Payroll table"
- **Actual:** The sidebar shows "Payroll" → submenu with "Payroll table" link. URL is `/enterprise/payroll/list`. The guide's navigation path is correct conceptually.
- **Fix:** No action needed — the navigation description is accurate

### N3 — Workflows URL
- **Location:** Feature Discovery → Workflow Automation Path
- **Guide says:** "Automations → Workflows"
- **Actual:** Sidebar shows "Automations" → "Workflows" button. URL is `/enterprise/dashboard/workflows`. Guide's navigation path is correct.
- **Fix:** No action needed

---

## Verified Claims (Accurate)

1. **Three fixed service rows** — Salary proration, EOS leave encashment, Unpaid leave deduction ✓
2. **Three calculation methods** — Working days, Calendar days, Custom days ✓
3. **Number of days field disappears** when Working days or Calendar days selected ✓
4. **Formula updates dynamically** when calculation method changes ✓
5. **Salary components are "Basic salary + allowances"** — not customizable ✓
6. **"Overwrite daily wage calculation in policies" toggle** exists in EOS and Unpaid Leave dialogs ✓
7. **47+ leave types in EOS dialog** ✓ (confirmed extensive list)
8. **13 leave types in Unpaid Leave dialog** ✓
9. **Mixed divisors in Unpaid Leave** — /30 days, /30.41 days, /Calendar days, /100 days ✓
10. **Cancel and Save buttons** in all dialogs ✓
11. **"Calculated in end of service eligibility" and "Calculated in leave policy"** redirect text ✓ (but guide claims these are formulas)
12. **EOS eligibility section shows only 1 leave type** vs 47+ in EOS dialog — disconnection confirmed ✓
13. **Payroll Table** exists at Payroll → Payroll table with cycle selector, employee data, column toggles ✓
14. **Workflows page** exists at Automations → Workflows with create/filter/manage capabilities ✓
15. **Accordion section pattern** on Payroll settings page ✓
16. **All Jira ticket references** — these reference known limitations/behaviors, not fabricated content ✓
17. **Workflow Integration section** — correctly framed as suggestions/recommendations ✓

---

## Missing Features / Behaviours Not Documented

1. **Payroll settings General section** — 3 toggles above Daily Wage Calculation (auto-generate payslips, allow payslip downloads, allow bank detail editing)
2. **"Configure salaries and bank details" card** with "Manage" button (links to Bayzat Sheets)
3. **Payroll Table summary cards** — Total net pay, Processed till date, Unpaid amount pending approval, Total unpaid
4. **"Selected columns on the payroll table"** — configurable column checkboxes showing component amounts
5. **Missing information alert** — "38 employees are missing information, where 3 of them are critical" with filter buttons
6. **Unpaid leave adjustment warning** — "2 employees have unpaid leave adjustments" banner on Payroll Table
7. **Multi-currency tabs** on Payroll Table (AED, USD, AUD)

---

## Recommendations

1. **Fix the formula display claim** — This is the most important correction. Only Salary proration shows a formula; the other two show redirect text.
2. **Match exact UI text** — Remove "in month" from formula text, use exact column headers.
3. **Clarify Overwrite toggle availability** — Only in EOS and Unpaid Leave dialogs, not Salary Proration.
4. **Fix EOS dialog title capitalization** — "EOS leave Encashment" (lowercase l).
5. **Add dialog subtitle** — Salary Proration has a helpful description that aids user understanding.
6. **Consider documenting Payroll Table** in more detail — The column selection, multi-currency tabs, and warning banners are relevant to understanding daily wage impact.
