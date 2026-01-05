# Workflow Learnings & Feedback

*Last updated: 2026-01-06*

## Purpose
This file captures learnings from validation runs and user feedback to continuously improve the validation agent's behavior. The validation agent MUST review this file before starting any validation.

---

## Critical Learnings

### 1. DATA PERSISTENCE - Don't Give Up Early
**Problem:** Agent marked checks as 'not_applicable' after the first record didn't have relevant data.
**Example:** Clicked one employee who wasn't eligible for EOS and stopped.
**Solution:**
- Try multiple records systematically before giving up
- Use filters to find records likely to have relevant data
- Only mark 'not_applicable' if NO records in the system satisfy the requirement

### 2. COMPREHENSIVE EXPLORATION - Act Like a User Learning the System
**Problem:** Agent only verified static elements existed without exploring how they work.
**Expected Flow:**
1. Navigate to feature area
2. Click on dropdown menus (three dots "...", chevrons)
3. Click on names/links in lists (they're often clickable)
4. Open tabs and sub-tabs
5. Fill out forms and click action buttons (Calculate, Save, etc.)
6. Try different input combinations to see how outputs change
7. Document what happens at each step

### 3. IDENTIFY ALL INTERACTIVE ELEMENTS
**Problem:** Agent missed clickable elements like names in employee lists.
**Solution:** On every screen, scan for:
- Clickable text (names, links)
- Buttons (primary, secondary, icon buttons)
- Dropdown menus and three-dot menus
- Tabs and sub-tabs
- Accordions and expandable sections
- Form inputs (text fields, date pickers, dropdowns)
- Action CTAs (Calculate, Save, Configure, View, Edit)

### 4. FOLLOW CROSS-REFERENCES
**Problem:** Agent didn't follow links like "Daily rate is configured in daily wage calculation setting"
**Solution:**
1. Screenshot the message with the link/CTA
2. Click the link to navigate to the referenced setting
3. Document the relationship between settings
4. Show how changes in one place affect another

### 5. CONFIGURATION EXPLORATION
**Problem:** Agent didn't explore settings/configuration areas.
**Expected Flow:**
1. Navigate to Settings > [Feature Category]
2. Look for accordions and expandable sections
3. Click "Configure" buttons
4. Document all configuration options
5. Note dependencies between settings

---

## Feature-Specific Insights

### End of Service (EOS)
**Navigation Paths:**
- Payroll Table > Menu (three dots) > Download Gratuity File
- Company > All Employees > [Click Employee Name] > Payroll Tab > End of Service Tab
- Settings > Payroll > End of Service accordion > Configure

**Key Interactive Elements:**
- Employee names in list are clickable (navigate to profile)
- Three-dot menu has important options
- EOS tab has Calculate button with input fields
- Configuration has multiple toggles and options

**Cross-References Found:**
- "Daily rate is configured in daily wage calculation setting" - follow this CTA

**Data Requirements:**
- Not all employees are eligible for EOS (residency requirements)
- Look for employees with UAE residency for valid EOS data
- Try multiple employees to find one with complete EOS data

---

## Common Issues Across Features

1. **Premature 'not_applicable' marking** - Always try multiple records first
2. **Missing dropdown/menu exploration** - Check three-dot menus and chevrons
3. **Ignoring clickable text** - Names and links in tables are often navigation points
4. **Skipping configuration areas** - Settings are essential for complete documentation
5. **Not following cross-references** - Links to other settings provide important context

---

## Agent Performance Improvements

### Before These Learnings:
- Stopped at first record without data
- Only verified element visibility
- Missed interactive elements
- Didn't explore configurations

### After These Learnings:
- Persist through multiple records
- Document how features actually work
- Identify and interact with all UI elements
- Explore settings and follow cross-references

---

*This file is updated after each validation run based on user feedback. The validation agent should apply all learnings listed here.*
