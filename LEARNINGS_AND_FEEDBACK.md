# Workflow Learnings & Feedback

*Last updated: 2026-01-21*

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

*This document reflects learnings from Performance Management v1 guide creation - apply these standards to ALL future user guides*
