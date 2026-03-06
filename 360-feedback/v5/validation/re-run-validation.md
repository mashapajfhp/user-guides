# 360° Feedback User Guide — Re-Run Validation Report

**Date:** 2026-03-06
**Method:** Playwright browser automation against live Bayzat application
**Guide URL:** https://mashapajfhp.github.io/user-guides/360-feedback/v5/360-feedback-user-guide.html

---

## Summary

- **Total Issues Found:** 16
- **Critical (factually wrong / blocks user):** 3
- **Major (misleading or missing important info):** 9
- **Minor (cosmetic / terminology):** 4

---

## Critical Issues (3)

### C1 — Wrong URL Patterns
- **Location:** Feature Discovery → URL Patterns (line 799-801)
- **Guide says:**
  - Main Dashboard: `/performance/360-reviews`
  - Review Detail: `/performance/360-reviews/[review-id]`
  - Settings: `/settings/performance/360-feedback`
- **Actual:**
  - Main Dashboard: `/enterprise/dashboard/performance/holistic-feedback/company/overview`
  - Review Detail: `/enterprise/dashboard/performance/holistic-feedback/company/cycle/[review-id]/overview`
  - Settings: `/enterprise/dashboard/settings/performance-management`
- **Fix:** Replace all three URL patterns with the actual paths

### C2 — Wrong Step 4 Name in Creation Wizard
- **Location:** Feature Usage → Creating a 360° Review Cycle (line 962), Step 4 heading (line 1007)
- **Guide says:** "Step 4: Review and Send"
- **Actual:** The step is labeled **"Send"** (not "Review and Send"). The stepper in the wizard shows: 1. Basic info, 2. Select participants, 3. Setup nominations, 4. **Send**
- **Fix:** Replace "Review and Send" with "Send" in all references

### C3 — Wrong Settings Navigation Path
- **Location:** Feature Discovery (line 783), Setup Process Step 1 (line 827), multiple other references
- **Guide says:** "Settings → Performance → 360° feedback"
- **Actual:** The navigation is **Settings → Performance** (which opens "Performance Management settings" page). The section is **"360° feedback configurations"** (an accordion panel on that page, not a separate page). There is no "360° feedback" sub-navigation item.
- **Fix:** Replace "Settings → Performance → 360° feedback" with "Settings → Performance → 360° feedback configurations" and note it's an expandable accordion section

---

## Major Issues (9)

### M1 — Missing "Save draft" Button Documentation
- **Location:** Feature Usage → Creating a 360° Review Cycle
- **Guide says:** Only mentions Cancel and Continue/Send buttons
- **Actual:** The creation wizard footer has three buttons: **Cancel**, **Save draft** (disabled until form is valid), and **Continue**. Save draft allows saving an incomplete review as Draft status.
- **Fix:** Document the "Save draft" button and explain it allows pausing the creation process

### M2 — Missing "Overall Cycle Duration" Field
- **Location:** Feature Usage → Step 1: Basic Information (line 974-978)
- **Guide says:** Lists only Review Name and 3 time periods
- **Actual:** The timeline table also includes an **"Overall Cycle Duration"** row described as "(automatically inferred from earliest start and latest end date)" — this is read-only and auto-computed.
- **Fix:** Add documentation about the auto-calculated Overall Cycle Duration field

### M3 — Missing Status-to-Action Mapping
- **Location:** Feature Usage, Feature Discovery
- **Guide says:** Generic mention of "Actions" column without detailing what action each status shows
- **Actual:** Each status has a specific contextual action link:
  - Draft → **"Continue"** (links to draft wizard)
  - Pending Peer Nominations → **"Assign peers"**
  - Pending Review and Report Finalisation → **"Generate reports"**
  - Completed → **"View report"**
  - Ongoing → context-dependent action
- **Fix:** Add a status-to-action mapping table

### M4 — Missing Peer Nominations Tab Details
- **Location:** Feature Usage → Viewing 360° Review Details (line 1046)
- **Guide says:** Brief mention of "Track peer nomination progress"
- **Actual:** The Peer nominations tab has rich content:
  - Title: "Review participants and peer nominations"
  - Description: "These employees are part of this 360° review. Line managers are added by default — peers can be suggested or finalised as needed."
  - Quick filters: All, No Peers, Pending Peers, Completed
  - Table columns: Employee, Line Manager, Peers, Actions (Manage, Send reminders)
  - Peer status indicators: Not completed, Completed with peer avatars
- **Fix:** Add detailed documentation of the Peer nominations tab

### M5 — Missing Overview Tab Detail Content
- **Location:** Feature Usage → Viewing 360° Review Details
- **Guide says:** "Summary of review timeline, participants, and current status" (brief)
- **Actual:** The Overview tab within a review cycle is very detailed:
  - **Alert banner:** Shows contextual messages (e.g., "Reports generated but not yet shared")
  - **4 Summary cards:** EMPLOYEE SELF-REVIEWS (%), LINE MANAGER FEEDBACK (%), PEER FEEDBACK (%), DEADLINES (days)
  - **Timeline / Milestones:** Shows Review setup (Created/Launched dates), Peer Nomination Period (Start/End), Feedback Submission Period (Start/End), Review and Report Finalization (Start/End)
  - **Actions & reminders** section
  - **Participation breakdown:** Employee self reviews, Direct report reviews, Line manager reviews, Peer reviews — each with completion %
  - **Activity history:** Audit log with user names, actions, timestamps
- **Fix:** Document these sections in detail

### M6 — Missing "Pending" Substatus Detail
- **Location:** Business Rules, Glossary
- **Guide says:** Pending status is "awaiting action"
- **Actual:** "Pending" is not a single status — the UI shows specific pending substatus labels:
  - **"Pending Peer Nominations"** — awaiting peer nominations
  - **"Pending Review and Report Finalisation"** — awaiting report generation
- **Fix:** Document the actual pending substatus labels

### M7 — Missing "Ongoing" Status Action Detail
- **Location:** Feature Discovery → Quick Filters
- **Guide says:** Quick filter shows "Ongoing (1)" but no detail about what this status looks like
- **Actual:** There is an Ongoing (1) filter visible, but the guide doesn't describe what differentiates Ongoing from Pending or what actions are available for Ongoing reviews
- **Fix:** Clarify the Ongoing status in the lifecycle and actions available

### M8 — Missing Responses Tab Table Columns
- **Location:** Feature Usage → Tracking Responses (line 1298-1306)
- **Guide says:** Lists the elements but doesn't clearly describe the table structure
- **Actual:** The Responses tab has a clear table with columns: **Employee**, **Responses Received** (e.g., "0/2", "0/4"), **Status**, **Actions** (View, Send reminders)
- **Fix:** Add the actual table column names

### M9 — Missing "My 360° reviews" Overview Card Difference
- **Location:** Feature Usage → Employee View (line 1342-1348)
- **Guide says:** Nothing about the Overview differences between admin and employee views
- **Actual:** The "My 360° reviews" landing page has only **3 overview cards** (Active reviews, Pending peer nominations, Upcoming deadlines) vs the admin's **4 cards** (which adds Employees involved). The employee view also lacks the "Start 360° review" button.
- **Fix:** Document the difference between admin and employee overview cards

---

## Minor Issues (4)

### N1 — "Feedback categories" in Glossary Missing Settings Accordion Detail
- **Location:** Glossary → Feedback Categories (line 1706)
- **Guide says:** "Configured in Settings > 360° feedback configurations"
- **Actual:** The section name in the UI is "360° feedback configurations" with a "New" badge, and it's an accordion panel within the "Performance Management settings" page — not a separate page
- **Fix:** Update glossary to reflect accordion-within-page pattern

### N2 — "Rating Scale" vs "Rating scales"
- **Location:** Multiple references (line 1447, 1634, 1734)
- **Guide says:** "Rating Scale" (singular) and "Settings > Performance > Rating Scale"
- **Actual:** The UI label is **"Rating scales"** (plural) — "Setup performance review rating scales"
- **Fix:** Update to "Rating scales" (plural)

### N3 — Footer Date Outdated
- **Location:** Footer (line 1751)
- **Guide says:** "Last updated: 2026-01-30"
- **Fix:** Update to 2026-03-06

### N4 — "Peer Reviewers" vs "Peer Review" Label Inconsistency
- **Location:** Surveys section (line 1156, 1161)
- **Guide says:** Refers to participant group as "Peer Reviewers" in some places
- **Actual:** The survey card title is **"Peer Review"** while the participants label is **"Peer Reviewers"**. The guide is mostly correct but inconsistent in its usage.
- **Fix:** Standardize: survey name is "Peer Review", participant group label is "Peer Reviewers"

---

## Missing Features / Behaviours Not Documented

1. **"Save draft" functionality** — The creation wizard allows saving drafts at any point, creating a review in Draft status with a "Continue" action
2. **Overall Cycle Duration** — Auto-calculated field in Step 1 showing inferred start-to-end duration
3. **Status-specific action links** — Each status in the reviews list shows a different contextual action (Continue, Assign peers, Generate reports, View report)
4. **Peer nominations tab detail** — Rich table with Employee/Line Manager/Peers columns, Manage button, Send reminders, and quick filters (All/No Peers/Pending Peers/Completed)
5. **Overview tab summary cards within cycle** — EMPLOYEE SELF-REVIEWS %, LINE MANAGER FEEDBACK %, PEER FEEDBACK %, DEADLINES
6. **Participation breakdown** — 4-type breakdown: Employee self reviews, Direct report reviews, Line manager reviews, Peer reviews
7. **Activity history** — Audit log showing who did what and when (e.g., "Participants updated by X", "Review cycle draft created by X", "Review cycle published by X", "Review cycle launched by System (Auto)")
8. **Timeline / Milestones** — Detailed milestone display with Created/Launched dates and period Start/End dates
9. **"Add New" button for feedback categories** — The Feedback categories tab has an "Add New" button at the bottom
10. **Category type indicators** — Categories show "Default" or "Custom" type badges, and Default categories cannot be deleted
11. **Question bank table structure** — Shows question counts broken down by 4 reviewer types: Employee, Manager, Direct reports, Peer

---

## Recommendations

1. **Add status-to-action mapping table** — Critical for users to understand what they can do at each stage
2. **Document the Peer nominations tab in detail** — This is a key workflow step that's only briefly mentioned
3. **Expand the Overview tab documentation** — The cycle overview has rich content (cards, timeline, participation breakdown, activity history) that would help users
4. **Fix all URL patterns** — The current URLs are completely wrong and would confuse developers or power users
5. **Document Draft/Continue workflow** — The ability to save drafts and continue later is an important feature
6. **Clarify Pending substatus labels** — "Pending Peer Nominations" and "Pending Review and Report Finalisation" are distinct and meaningful
