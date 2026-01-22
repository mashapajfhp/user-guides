# 360 Feedback v5 - Additional Validation Tasks Report

**Date:** 2026-01-22
**Output Folder:** `/Users/mashapa/actions-runner/_work/user-guides/user-guides/360-feedback/v5/validation`

---

## Task 1: Add New Feedback Category

### Objective
Test the ability to add a custom feedback category to the 360 feedback configuration.

### Navigation Path
Settings > Performance > 360° feedback configurations > Feedback categories tab

### Steps Performed

1. **Accessed Feedback Categories Tab**
   - Already at Performance Management settings with 360° feedback configurations expanded
   - Feedback categories tab was pre-selected
   - Screenshot: `additional-01-feedback-categories-list.png`

2. **Clicked "Add New" Button**
   - Located purple "Add New" button at bottom of categories list
   - Dialog opened: "Add new feedback category"
   - Screenshot: `additional-02-add-category-form.png`

3. **Filled in Category Details**
   - **Category Name:** "Problem Solving Skills" (max 50 characters)
   - **Description:** "How effectively does this person identify issues, analyze problems, and develop practical solutions?" (max 200 characters)
   - Screenshot: `additional-03-category-filled.png`

4. **Saved the Category**
   - Clicked "Save changes" button
   - Category successfully created and added to the list
   - Screenshot: `additional-04-category-added-success.png`

### Validation Results

**Status:** PASSED

**Observations:**
- New category appears at the top of the list
- Category is marked as "Custom" (vs "Default" for built-in categories)
- Custom categories have both edit (pencil icon) and delete (trash icon) buttons
- Default categories only have edit button (delete is disabled)
- The category immediately appears in the Question Bank tab with 0 questions across all reviewer types

**Category Types:**
- **Default Categories:** 7 pre-configured categories (cannot be deleted)
  - Technical Expertise
  - Leadership & Influence
  - Values & Culture Fit
  - Flexibility and Adaptability
  - Reliability and Dependability
  - Communication Skills
  - Teamwork and Collaboration
- **Custom Categories:** User-created categories (can be edited and deleted)

---

## Task 2: Test Question Bank

### Objective
Explore the Question Bank interface, understand how questions are structured, and document the question management capabilities.

### Navigation Path
Settings > Performance > 360° feedback configurations > Question bank tab

### Steps Performed

1. **Accessed Question Bank Tab**
   - Clicked on "Question bank" tab
   - Screenshot: `additional-05-question-bank-overview.png`

2. **Reviewed Question Bank Structure**
   - All feedback categories listed (8 total including new custom category)
   - Each category shows question counts by reviewer type:
     - Employee questions (self-assessment)
     - Manager questions
     - Direct reports questions
     - Peer questions
   - Total question count per category displayed

3. **Explored Question Details**
   - Clicked "View / Edit" on Technical Expertise category
   - Navigated to detailed question bank page
   - Screenshot: `additional-06-question-bank-detail.png`

4. **Examined Question Structure**
   - Questions organized by category (accordion style)
   - Each question has:
     - Theme/Title (e.g., "Application of Skills")
     - Preview section showing how question appears to each participant type
     - Edit and delete buttons
   - Example question structure:
     - **Employee:** "How do you apply your technical skills to solve real business or team challenges?"
     - **Manager:** "How effectively does this employee apply their skills to achieve outcomes?"
     - **Direct Reports:** "How well does your manager leverage their skills to support the team?"
     - **Peer:** "How does this colleague's skill application contribute to team success?"

5. **Tested Add Question Interface**
   - Clicked "Add question" button for Problem Solving Skills category
   - Screenshot: `additional-07-add-question-dialog.png`

### Question Bank Overview Summary

| Category | Employee Q | Manager Q | Direct Reports Q | Peer Q | Total |
|----------|-----------|-----------|------------------|--------|-------|
| Problem Solving Skills (Custom) | 0 | 0 | 0 | 0 | 0 |
| Technical Expertise | 3 | 3 | 3 | 3 | 12 |
| Leadership & Influence | 3 | 3 | 3 | 3 | 12 |
| Values & Culture Fit | 2 | 2 | 2 | 2 | 8 |
| Flexibility and Adaptability | 2 | 2 | 2 | 2 | 8 |
| Reliability and Dependability | 3 | 3 | 3 | 3 | 12 |
| Communication Skills | 3 | 3 | 3 | 3 | 12 |
| Teamwork and Collaboration | 4 | 4 | 4 | 4 | 16 |

**Total Questions in Bank:** 80 questions (across 7 default categories)

### Question Management Capabilities

#### Adding Questions

**Form Fields:**
1. **Feedback Category** (dropdown, required)
   - Pre-selected when adding from category context
   - Can be changed to add question to different category

2. **Theme/Title** (text field)
   - Descriptive title for the question
   - Supports placeholders: [Subject] and [Employee Name]
   - Used for organizing questions within a category

3. **Questions for Different Participants:**
   - **Employee Question:** For self-assessment
     - Example placeholder: "e.g. How do you contribute to team building in your day-to-day work?"

   - **Manager Question:** For manager's assessment of employee
     - Example placeholder: "e.g. In what ways does your team member demonstrate good communication with their teammates or cross-functional partners"

   - **Direct Reports Question:** For direct reports to assess their manager
     - Example placeholder: "e.g. What are 2-3 ways [Manager Name] facilitates team collaboration and supports project success?"

   - **Peer Question:** For peer assessment
     - Example placeholder: "e.g. What impact does your colleague have on team collaboration and project success"

**Features:**
- All four participant-specific questions can be customized independently
- Placeholders help craft contextually appropriate questions
- Questions can reference the subject being reviewed dynamically

#### Editing Questions

- Edit button (pencil icon) available for each question
- Allows modification of:
  - Theme/Title
  - All four participant-specific question texts
- Changes are saved per question

#### Deleting Questions

- Delete button (trash icon) available for custom category questions
- Default category questions cannot be deleted (button disabled)
- Confirmation likely required before deletion

#### Question Types Available

Based on the existing default questions, the system supports:
1. **Open-ended text questions** - All questions appear to be text-based responses
2. **Role-specific variations** - Same theme posed differently based on reviewer relationship
3. **Competency-based questions** - Organized by skill/competency areas

### Validation Results

**Status:** PASSED

**Key Findings:**

1. **Question Structure:**
   - Questions are organized hierarchically: Category > Theme > Participant-specific variations
   - Each question has 4 variations tailored to reviewer perspective
   - Questions use natural language appropriate to each relationship context

2. **Question Bank Features:**
   - Categories can be expanded/collapsed (accordion interface)
   - Preview mode shows exact question text for each participant type
   - Question count summary helps track coverage per category
   - Actions clearly separated (View/Edit, Add question)

3. **Customization Capabilities:**
   - Organizations can create custom categories aligned to their competency framework
   - Questions can be added, edited, or deleted within each category
   - Placeholder support ([Subject], [Employee Name], [Manager Name]) for dynamic question text
   - Each participant type gets contextually appropriate question wording

4. **Default Content:**
   - System comes with 80 pre-built questions across 7 categories
   - Default questions cover common competencies:
     - Technical skills
     - Leadership
     - Cultural alignment
     - Adaptability
     - Reliability
     - Communication
     - Collaboration
   - Provides good starting point before customization

5. **User Experience:**
   - Clear visual distinction between Default and Custom categories
   - Intuitive add/edit/delete controls
   - Preview functionality helps review questions before use
   - Guidance text and examples in form fields

---

## Screenshots Captured

| Screenshot | Description |
|-----------|-------------|
| `additional-01-feedback-categories-list.png` | Initial view of Feedback categories tab with default categories |
| `additional-02-add-category-form.png` | Empty form for adding new feedback category |
| `additional-03-category-filled.png` | Completed form with "Problem Solving Skills" category details |
| `additional-04-category-added-success.png` | Confirmation that custom category was added successfully |
| `additional-05-question-bank-overview.png` | Question bank tab showing all categories with question counts |
| `additional-06-question-bank-detail.png` | Detailed view of questions in Technical Expertise category |
| `additional-07-add-question-dialog.png` | Form for adding a new question with all participant fields |

---

## Summary

Both additional validation tasks were completed successfully:

1. **Add New Feedback Category:** Fully functional with intuitive UI and clear distinction between custom and default categories
2. **Question Bank Exploration:** Comprehensive question management system with role-specific variations and strong customization options

The 360 feedback configuration module demonstrates a well-designed, flexible system that allows organizations to align feedback collection with their specific competency frameworks while providing sensible defaults for quick setup.

---

**Validation Complete**
All tasks executed successfully with detailed documentation and screenshots captured.
