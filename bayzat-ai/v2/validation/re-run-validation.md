# Bayzat AI User Guide — Re-Run Validation Report

**Date:** 2026-03-06
**Method:** Playwright browser automation against live Bayzat application
**Guide URL:** https://mashapajfhp.github.io/user-guides/bayzat-ai/v2/bayzat-ai-user-guide.html

---

## Summary

- **Total Issues Found:** 14
- **Critical (factually wrong / blocks user):** 3
- **Major (misleading or missing important info):** 8
- **Minor (cosmetic / terminology):** 3

---

## Critical Issues (3)

### C1 — Missing "Schedules" Tab (Entire Feature Undocumented)
- **Location:** AI Reports section, Feature Discovery, entire guide
- **Guide says:** AI Reports has two tabs: "Dashboards" and "Reports"
- **Actual:** AI Reports has **three tabs**: Dashboards, Reports, and **Schedules (New badge)**. The Schedules tab allows creating recurring report delivery schedules with columns: Schedule name, Frequency, Date created, Last delivered, Actions. The HR Dashboard interior also has a "Schedule" button and a promotional banner: "Scheduled reports are here! Set it and forget it. Schedule recurring reports to land in your inbox daily, weekly, or monthly."
- **Fix:** Add documentation for the Schedules tab and the Schedule button on dashboards

### C2 — Missing "Company Documents" Data Category
- **Location:** Data Sources and Modules (line 1028-1035), Prerequisites, Business Rules
- **Guide says:** Bayzat AI queries data from 4 modules: Leave Management, Attendance Tracking, Employee Records, Payroll Systems
- **Actual:** The Reports tab "Browse by category" shows **5 categories**: Employee Records, **Company Documents**, Employee Leaves, Payroll, Attendance. Multiple pre-built report templates use Company Documents (e.g., "What company documents are stored on the platform?", "Which employee documents expire next month?")
- **Fix:** Add "Company Documents" as a fifth data category throughout the guide

### C3 — Missing Dashboard Action Buttons (Schedule, Edit Layout)
- **Location:** AI Dashboards section, Managing Dashboard Tiles
- **Guide says:** Dashboard has "Add Insight" button and "Refresh" button
- **Actual:** Dashboard header has **four buttons**: **Schedule** (new), **Edit layout** (new), **Add Insight**, plus metadata line with "Created on [date] | Last updated [date] | Refresh"
- **Fix:** Document the Schedule and Edit layout buttons

---

## Major Issues (8)

### M1 — Missing "Save Reports to Dashboard" Capability
- **Location:** AI Reports section
- **Guide says:** Nothing about saving reports to dashboards
- **Actual:** Reports tab shows a prominent banner: "Now you can save your reports to a dashboard — Keep your most important insights in one place - organised, visual, and easy to access anytime." with a "Create your own" button
- **Fix:** Document this new cross-feature capability

### M2 — Missing Report Category Filters UI
- **Location:** AI Reports → Creating Custom Reports (line 979-993)
- **Guide says:** Describes post-generation filters with "Date Range", "Employee Filters", "Departments" and an "Apply Filters" button
- **Actual:** The Reports tab has a left sidebar with: "All reports" checkbox, and "Browse by category" accordion with checkboxes for Employee Records, Company Documents, Employee Leaves, Payroll, Attendance. These are **pre-query category filters** for browsing templates, not post-generation report filters. The actual report input is a text bar: "Just ask a question or give instructions, and Bayzat AI will generate the report." with a "Generate" button
- **Fix:** Replace the fabricated filter panel description with the actual category filter sidebar and report input bar

### M3 — Missing "Help" Button on Report Input Bar
- **Location:** AI Reports section
- **Guide says:** Nothing about Help button
- **Actual:** The report generation bar includes a "Help" button next to the "Ask AI to build your report" label
- **Fix:** Document the Help button

### M4 — Missing Experimental Disclaimer
- **Location:** AI Reports section, Business Rules
- **Guide says:** Notes beta status but doesn't mention the explicit disclaimer
- **Actual:** The bottom of the Reports page shows an alert: "This AI-generated reporting tool is experimental. Please verify all critical information before making any decisions."
- **Fix:** Add this disclaimer to the guide

### M5 — Wrong Pre-Built Report Template Interaction
- **Location:** AI Reports → Using Pre-Built Reports (line 949-960)
- **Guide says:** "Browse the list of available pre-built reports → Click on a report template → The report generates automatically"
- **Actual:** Each pre-built report is a card with a title, category badge (e.g., "Payroll", "Employee Records"), and a **"Start" button**. Clicking Start initiates the report, not clicking the card itself
- **Fix:** Update to describe the card layout with category badges and "Start" buttons

### M6 — Dashboard Tiles Show Only 2 Action Buttons (Not 3)
- **Location:** Managing Dashboard Tiles (line 880-899)
- **Guide says:** Each tile has three action buttons: "Download (arrow down icon)", "Explore (sparkle icon)", "More Options (three-dot menu)" with rename/delete/duplicate/move
- **Actual:** Each dashboard tile shows **2 action buttons**: a download icon and an "Explore" button. The three-dot menu with rename/delete/duplicate/move is on the **dashboard cards** in the list view, not on individual tiles inside a dashboard
- **Fix:** Correct the tile action button description

### M7 — Missing "People Snapshot" Section Pattern in Dashboard
- **Location:** AI Dashboards section
- **Guide says:** Nothing about tile grouping/sections
- **Actual:** Dashboard tiles are grouped under collapsible accordion sections (e.g., "People snapshot" with expand/collapse). The guide doesn't mention this organizational pattern
- **Fix:** Document the accordion section grouping within dashboards

### M8 — Bayzat AI Location Is Knowledge Hub Tab (Not Standalone)
- **Location:** Feature Discovery (line 480-506), multiple nav path references
- **Guide says:** "Click the Bayzat AI button located next to the search bar in the top header to access all AI features" and lists navigation as "Top Menu → Bayzat AI → Knowledge Hub"
- **Actual:** Bayzat AI is a **tab within the Knowledge Hub** page (Knowledge Hub → tabs: Overview, Spaces, **Bayzat AI**, Shared with me, Trash). The top bar "Bayzat AI" button navigates to `/enterprise/dashboard/knowledge-hub/bayzat-ai`. The page heading is "Knowledge Hub", not "Bayzat AI". The page also has "How it works" and "Create" (split button) in the header
- **Fix:** Clarify that Bayzat AI is a tab within Knowledge Hub, not a separate standalone page. Update the AI-Powered Knowledge Hub section to avoid duplication (lines 775-790 describe the same page as the main Bayzat AI page)

---

## Minor Issues (3)

### N1 — Hero Subtitle Slightly Misleading
- **Location:** Hero banner (line 274)
- **Guide says:** "Transform your company data into actionable insights using natural language queries"
- **Actual:** This only describes the AI Reports/Dashboards function. The actual Bayzat AI page heading is "Work faster and smarter with Bayzat AI" with subtitle "Choose how you would like Bayzat AI to assist you:" — reflecting the broader scope (Chat with Documents, Writing Assistant, Quick Prompts)
- **Fix:** Consider updating the hero subtitle to match the broader feature scope

### N2 — "Improve my content" Description Minor Discrepancy
- **Location:** Writing Assistant (line 712)
- **Guide says:** "Rewrite content from another language"
- **Actual:** UI says "Rewrite content from other language" (minor grammar difference in the actual UI)
- **Fix:** Match the actual UI text

### N3 — Footer Date Outdated
- **Location:** Footer (line 1254)
- **Guide says:** "Last updated: 2026-01-19T13:49:53.290Z"
- **Fix:** Update to 2026-03-06

---

## Missing Features / Behaviours Not Documented

1. **Schedules tab** — Entirely new tab in AI Reports for scheduling recurring report delivery (daily, weekly, monthly). Columns: Schedule name, Frequency, Date created, Last delivered, Actions
2. **Schedule button on dashboards** — Each dashboard interior has a "Schedule" button for setting up recurring delivery
3. **Edit layout button** — Dashboard interior has an "Edit layout" button for rearranging tiles
4. **Company Documents data category** — 5th data category for AI Reports not documented
5. **Save reports to dashboard** — New capability allowing reports to be saved as dashboard tiles
6. **Category-based report browsing** — Left sidebar with category checkboxes for filtering pre-built templates
7. **Help button** on report input bar
8. **Experimental disclaimer alert** at the bottom of Reports tab
9. **"Scheduled reports are here!" promotional banner** inside dashboards
10. **Dashboard tile accordion grouping** (e.g., "People snapshot" section)
11. **"Explore schedules" button** inside dashboard promotional banner

---

## Recommendations

1. **Add Schedules documentation** — This is a significant new feature (recurring report delivery) that is completely undocumented
2. **Add Company Documents category** — A fifth data category that expands the scope of AI reporting
3. **Update dashboard interior documentation** — Schedule, Edit layout buttons and tile grouping are important UX elements
4. **Clarify Bayzat AI as Knowledge Hub tab** — Avoid confusion between the top-bar shortcut and the actual page location
5. **Remove or update fabricated filter descriptions** — The post-generation filter panel described in the guide doesn't match the actual category browsing UI
6. **Add save-to-dashboard capability** — This cross-feature enhancement bridges Reports and Dashboards
