# Workflow Learnings & Feedback

*Last updated: 2026-01-30*

## User Guide Documentation Standards

### Screenshot Requirements (CRITICAL)

Every user guide MUST include extensive screenshots for:

1. **Setup/Configuration Sections**
   - Every configuration screen with all fields visible
   - Each step of multi-step wizards (capture ALL steps, not just first/last)
   - Filter/search options showing all available choices
   - Toggle states (enabled vs disabled)

2. **Multi-Step Wizards**
   - Capture EVERY step of the wizard
   - Show validation errors and how they look
   - Include the summary/review step before final submission
   - Example: Performance Cycle has 5 steps - capture all 5

3. **Employee/Entity Management**
   - List views showing data columns
   - "Manage List" or selection dialogs
   - Filter options (especially important ones like probation status)
   - Search functionality

4. **Error States**
   - Validation errors (e.g., date overlap errors)
   - Required field indicators
   - Warning messages

### Screenshot Naming Convention

```
{sequence}-{feature}-{context}.png

Examples:
94-cycle-wizard-step1-complete.png
95-cycle-wizard-step2-goal-setting.png
96-manage-employees-list.png
97-manage-employees-filters-probation.png
```

### HTML Integration Pattern

```html
<figure class="screenshot-container">
    <img src="validation/screenshots/{filename}.png" alt="{descriptive alt text}" class="screenshot">
    <figcaption>{Caption explaining what the screenshot shows}</figcaption>
</figure>
```

### Content Structure Standards

1. **Step-by-Step Instructions**
   - Use numbered step divs with step-number circles
   - Each step should have a screenshot showing that exact state
   - Include sub-steps where configuration has multiple parts

2. **Feature Cards**
   - Use feature-grid for listing multiple related items
   - Each card should describe one distinct capability

3. **Warning/Info Boxes**
   - Use warning-box for important cautions
   - Use info-box for helpful tips

---

## Feature-Specific Insights

### Performance Management (v1) - January 2026

**What Made This Guide Extensive:**
- 101+ screenshots captured
- Every wizard step documented visually
- Employee list management with probation filters highlighted
- Setup process for Rating Scales and Goal Types fully documented
- Cycle creation wizard (all 5 steps) with screenshots

**Key Learnings:**
1. User emphasized "employee list and probation setup is very important" - always capture management dialogs
2. Multi-step wizards need ALL steps captured, not summaries
3. Filter options are critical for HR users to understand
4. Date validation and overlap errors should be shown

**Screenshots Per Section:**
| Section | Screenshot Count |
|---------|------------------|
| Setup Process (Rating Scales) | 6 |
| Setup Process (Goal Types) | 7 |
| Creating a Performance Cycle | 9 |
| Total | 22+ (in cycle section alone) |

---

## Process Optimizations

### Playwright Validation Workflow
1. Navigate to feature in live Bayzat environment
2. Take accessibility snapshot first (for element refs)
3. Capture screenshot with descriptive filename
4. Copy screenshots to user guide validation folder
5. Update HTML with figure/figcaption blocks

### Quality Checklist Before Commit
- [ ] All multi-step processes have screenshots for EACH step
- [ ] Management/list dialogs are captured
- [ ] Filter options are visible and documented
- [ ] Error states are shown where applicable
- [ ] Screenshots have sequential numbering
- [ ] Alt text is descriptive
- [ ] Figcaptions explain the screenshot context

---

## Common Issues & Solutions

### Issue: Missing Wizard Steps
**Problem:** Guide only shows first and last step of a wizard
**Solution:** Capture EVERY step - users need to see the complete flow

### Issue: No Management Dialog Screenshots
**Problem:** "Manage List" or selection dialogs not captured
**Solution:** Click through to capture these dialogs - they show critical functionality

### Issue: Filters Not Documented
**Problem:** Filter/search options not shown
**Solution:** Expand filter dropdowns and capture all available options

---

## Session Feedback - January 30, 2026

### Timesheets User Guide

**Feedback 1: Keep Use Cases Relevant and Focused**
- When listing workflow use cases, keep only 3 that are directly related to the feature
- User said: "choose only 3 scenarios that are very close to timesheets not just general"
- **Action:** Reduced from 8 generic use cases to 3 timesheet-specific ones:
  1. Notify manager of overtime (uses Duration criteria)
  2. Billable hours tracking (uses Project + Billable criteria)
  3. Timesheet modification audit (uses Timesheet is updated event)

**Feedback 2: Remove Irrelevant Sections**
- If a screenshot or section shows content for a different feature (e.g., Leave approval flows instead of Timesheet), remove it
- User showed screenshot of "Leave" approval flows and said "remove this"
- **Lesson:** Always ensure screenshots and content are specifically relevant to the feature being documented

**Feedback 3: Add Screenshots to Workflow Sections**
- User said: "you did not put any screenshot to workflow"
- **Action:** Added workflow event and action screenshots to support documentation
- **Rule:** Every documented feature capability should have a supporting screenshot

**Feedback 4: FAQ Styling Consistency**
- FAQs must match the established styling pattern from other guides
- User referenced work-timings guide as the standard
- **Required CSS Structure:**
```html
<div class="faq-accordion">
  <details class="faq-item">
    <summary class="faq-question">Question text?</summary>
    <div class="faq-answer">
      <p>Answer text</p>
    </div>
  </details>
</div>
```
- **Not:** `<details class="faq-item"><summary>Question</summary><p>Answer</p></details>`

### Air Ticket User Guide

**Feedback 5: Document Approval Flows Comprehensively**
- User said: "look at both advanced and basic approval flow"
- User said: "explore the existing approval flows"
- **Action:** Explored and documented:
  - Advanced approval flows with criteria (amount thresholds, currency)
  - Default approval flow (fallback)
  - Available criteria options (Policy, Redeem Option, Amount, Currency, Employee fields)
  - Available approver types (Line Manager, Super Admin, Payroll Admin)

### General Process

**Feedback 6: Use Existing Folders**
- User said: "folder already exists please add images to the existing folder"
- **Rule:** Before creating new folders, check if they already exist
- Use `find` or `ls` to verify folder structure before `mkdir`

---

## Updated Quality Checklist

- [ ] All multi-step processes have screenshots for EACH step
- [ ] Management/list dialogs are captured
- [ ] Filter options are visible and documented
- [ ] Error states are shown where applicable
- [ ] Screenshots have sequential numbering
- [ ] Alt text is descriptive
- [ ] Figcaptions explain the screenshot context
- [ ] **Workflow sections have screenshots** (events, criteria, actions)
- [ ] **Use cases are feature-specific** (not generic examples)
- [ ] **FAQs use correct CSS classes** (faq-accordion, faq-question, faq-answer)
- [ ] **Approval flows documented** if applicable (advanced + default)
- [ ] **Check existing folders** before creating new ones

---

*This document reflects learnings from Performance Management v1, Timesheets v1, and Air Ticket v27 guide creation - apply these standards to ALL future user guides*
