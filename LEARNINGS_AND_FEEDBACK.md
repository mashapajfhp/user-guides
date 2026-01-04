# Workflow Learnings & Feedback

*Last updated: 2026-01-04*

## Screenshot Quality Rules

### CRITICAL: Feature Relevance Verification
Before capturing ANY screenshot, verify:
1. **The screenshot MUST contain visible reference to the feature being documented**
2. If documenting "daily wage calculation" - the words "daily wage", "daily rate", or the calculation formula MUST be visible
3. **EXCLUDE screenshots that don't show feature-relevant content**
4. Generic settings pages without feature context are IRRELEVANT

### Screenshot Focus & Framing Rules

#### WRONG - Cut Off Content (Avoid These)
- Screenshot cuts off section headers at the top
- Important form fields partially visible
- Key labels like "Unpaid leave deductions" cut off at bottom
- Modal content not fully visible

#### CORRECT - Proper Framing (Do These)
- **Scroll to show the FULL section** including header AND content
- If showing "Leave pay rate" section, ensure the header AND all fields are visible
- For modals: capture the ENTIRE modal including title, form fields, and buttons
- For tables: ensure all rows relevant to the feature are visible

### Scroll Position Guidelines
1. **Before taking screenshot**: Scroll so the TARGET SECTION header is near the TOP of viewport
2. **Include context**: Show 1-2 sections above if they provide context
3. **Don't cut off**: Ensure the BOTTOM of the section content is fully visible
4. **If content is tall**: Take MULTIPLE viewport screenshots, not one cut-off image

### Good Screenshot Examples (Reference These)
| What Makes It Good | Description |
|-------------------|-------------|
| Full section visibility | Shows "Daily Wage Calculation" header + all 3 service rows (Salary proration, EOS leave encashment, Unpaid leave deduction) |
| Modal completeness | Shows entire "Salary Proration" modal with title, description, form fields, AND buttons |
| Dropdown exploration | Captures expanded dropdown showing all options (Working days, Calendar days, Custom days) |
| Cross-reference visibility | Shows "Configured in daily wage calculation setting" link clearly |

### Bad Screenshot Examples (Avoid These)
| Problem | Impact |
|---------|--------|
| "Leave pay rate" section with top cut off | User can't see what section they're looking at |
| "Unpaid leave deductions" label cut off | Incomplete documentation |
| "Leave settings" page without daily wage reference | IRRELEVANT to daily wage calculator guide |
| "Edit Leave Policy" wizard without feature reference | IRRELEVANT - does not show daily wage calculation |

---

## Feature-Specific Insights

### Daily Wage Calculator
**Key screens that MUST be captured:**
1. Settings > Payroll > Daily Wage Calculation section (expanded)
2. Each service type's edit modal (Salary proration, EOS leave encashment, Unpaid leave deduction)
3. Month calculation dropdown options
4. End of Service eligibility section showing "Daily rate is calculated based on"
5. Leave policy settings ONLY if "daily wage calculation" link/reference is visible

**Screens to EXCLUDE:**
- Generic "Leave settings" page without daily wage reference
- "Edit Leave Policy" wizard (unless showing daily rate configuration)
- Any Payroll settings that don't mention daily rate/wage

---

## Validation Agent Instructions

### Pre-Screenshot Checklist
Before calling `browser_take_screenshot`:
1. [ ] Is the feature name visible on screen?
2. [ ] Is the section header fully visible (not cut off at top)?
3. [ ] Is the section content fully visible (not cut off at bottom)?
4. [ ] If it's a modal, is the ENTIRE modal visible including buttons?
5. [ ] Does this screenshot add value to the user guide?

### Scroll Adjustment Logic
```
IF target_section is partially visible:
  1. Scroll UP until section header is 100px from top of viewport
  2. Wait 500ms for content to settle
  3. THEN take screenshot

IF modal is open:
  1. Ensure modal is centered in viewport
  2. If modal has scrollable content, capture each scroll position separately
  3. Always show modal title + action buttons
```

### Viewport/Zoom Recommendations
- **Viewport**: 1400x900 (standard)
- **Zoom**: 100% (never zoom out to fit more - take multiple screenshots instead)
- **Full-page screenshots**: NEVER use - always viewport-only captures

---

## Common Issues & Fixes

| Issue | Root Cause | Fix |
|-------|-----------|-----|
| Content cut off at top | Scrolled too far down | Scroll section header to top of viewport before capture |
| Content cut off at bottom | Viewport too small for section | Take multiple viewport screenshots OR scroll to show bottom content |
| Irrelevant screenshots | No feature verification | Check for feature keywords before capturing |
| Blurry/zoomed out images | Trying to fit too much | Use standard zoom, take multiple screenshots |

---

## Process Optimizations

### Screenshot Naming Convention
- Use descriptive names: `daily-wage-salary-proration-modal.png`
- Include section context: `payroll-settings-daily-wage-section.png`
- Number for sequence: `01-navigation.png`, `02-settings-expanded.png`

### Validation Completeness
- Visit ALL navigation paths in the validation plan
- Don't skip sections citing "efficiency" - complete 100%
- Each screenshot must have a clear purpose for the user guide

---

*This document is automatically referenced by validation agents. Update with new learnings after each workflow run.*
