# Performance Management - Customer Challenge Analysis Report

**Analysis Date:** January 21, 2026
**Data Sources:** TSSD Support Tickets, Avatar Development Tickets
**Total Tickets Analyzed:** 278 PM-related tickets

---

## Executive Summary

Performance Management is one of the highest support burden features in the Bayzat HR platform. Analysis of 278 tickets reveals that **30% of all PM support requests relate to timeline/deadline modifications** - a task that customers cannot self-serve effectively. This report identifies the top customer pain points, known system limitations, and actionable recommendations for both product improvement and user guide documentation.

---

## 1. Support Burden Overview

### Ticket Distribution by Status

| Status | Count | Percentage |
|--------|-------|------------|
| Resolved | 252 | 91% |
| Closed | 19 | 7% |
| Pending | 5 | 2% |
| Cancelled | 2 | <1% |

### Ticket Distribution by Challenge Category

| Rank | Challenge Category | Tickets | % of Total | Severity |
|------|-------------------|---------|------------|----------|
| 1 | Timeline/Deadline Issues | 83 | 30% | HIGH |
| 2 | Form/Template Issues | 64 | 23% | MEDIUM |
| 3 | Cycle Management | 35 | 13% | HIGH |
| 4 | Employee Management | 16 | 6% | MEDIUM |
| 5 | Calibration Issues | 7 | 3% | MEDIUM |
| 6 | Scoring/Rating Issues | 5 | 2% | LOW |
| 7 | Other | 52 | 19% | VARIES |

---

## 2. Detailed Problem Analysis

### 2.1 Timeline/Deadline Issues (83 tickets) - CRITICAL

**Problem Statement:**
Customers frequently need to modify performance cycle dates after initial setup but lack the ability to do so independently. This results in high support ticket volume for routine date changes.

**Common Scenarios:**
- Extending self-review deadlines when employees need more time
- Changing line manager review dates due to business conflicts
- Adjusting goal-setting periods based on company priorities
- Modifying cycle end dates for operational reasons

**Representative Tickets:**

| Ticket | Summary | Root Cause |
|--------|---------|------------|
| TSSD-880 | Change the date for self review and manager review | Admin cannot modify dates |
| TSSD-3764 | Client unable to update Performance timelines | UI limitation |
| TSSD-2500 | Please extend performance dates | No self-service option |
| TSSD-727 | Update Performance Cycle dates | Requires backend change |
| TSSD-2804 | Extend self review date | Deadline passed |

**Impact:**
- High support ticket volume (30% of all PM tickets)
- Delayed performance reviews when support response is slow
- Customer frustration with platform limitations
- Increased support team workload

**Recommendation:**
1. **Product:** Enable admin self-service date modifications with audit logging
2. **User Guide:** Document the date change request process and expected turnaround times
3. **User Guide:** Provide best practices for planning cycle dates upfront

---

### 2.2 Cycle Management Issues (35 tickets) - HIGH PRIORITY

**Problem Statement:**
The current cycle architecture has fundamental limitations that prevent common business scenarios, forcing customers to contact support or implement workarounds.

**Known System Limitations:**

#### Limitation 1: One-Year Maximum Cycle Duration
- **Issue:** Cycles cannot exceed 12 months
- **Impact:** Cannot create annual reviews that span fiscal years
- **Evidence:** TSSD-4475 - "When he tries to reopen it today, he gets an error saying the cycle cannot exceed one year"

#### Limitation 2: No Parallel Cycles
- **Issue:** Cannot run multiple simultaneous cycles
- **Impact:** Departments with different review schedules cannot be accommodated
- **Evidence:** TSSD-3551 - "Currently, this is not possible as each department has a separate end date"

#### Limitation 3: Single Cycle Participation
- **Issue:** Employees cannot participate in multiple cycles simultaneously
- **Impact:** Cannot run specialized reviews (e.g., Annual + Quarterly) for the same employee
- **Evidence:** TSSD-3551 - "Employees should be able to participate in more than one review cycle"

**Common Requests:**

| Request Type | Frequency | Current Status |
|--------------|-----------|----------------|
| Reopen closed cycle | High | Requires support |
| Extend cycle duration | High | Blocked by 1-year limit |
| Create parallel cycles | Medium | Not supported |
| Close cycle early | Low | Requires support |

**Representative Tickets:**

| Ticket | Summary | Issue Type |
|--------|---------|------------|
| TSSD-4475 | Request to Reopen Performance Cycle for One Day | Reopen |
| TSSD-3551 | Performance Management - Requirements (parallel cycles) | Enhancement |
| TSSD-2537 | Reopen PM cycle | Reopen |
| TSSD-3791 | Extending a closed PM cycle | Extend |
| TSSD-1717 | Performance Management - Reopen forms for Calibration | Reopen |

**Recommendation:**
1. **Product:** Evaluate removing the 1-year cycle limit or making it configurable
2. **Product:** Consider implementing parallel cycle support for enterprise customers
3. **User Guide:** Clearly document the 1-year limitation upfront
4. **User Guide:** Provide workarounds for parallel review needs (e.g., separate cycles per department group)

---

### 2.3 Form/Template Issues (64 tickets) - MEDIUM PRIORITY

**Problem Statement:**
Customers need to make changes to evaluation forms and scoring after reviews have begun, which is not always possible through the UI.

**Common Scenarios:**
- Reset self-review scoring for specific employees
- Update evaluation form questions mid-cycle
- Change performance cycle names
- Modify form templates after deployment

**Representative Tickets:**

| Ticket | Summary |
|--------|---------|
| TSSD-655 | Reset Performance Self Review Scoring |
| TSSD-523 | Reset Performance Self Review Scoring |
| TSSD-516 | Reset Performance Self Review Scoring |
| TSSD-2951 | We need to change the current performance cycle name |
| TSSD-3573 | Incorrect performance review |

**Impact:**
- Employees may have incorrect scores on record
- HR teams cannot correct data entry errors independently
- Cycle naming inconsistencies cause confusion

**Recommendation:**
1. **Product:** Add admin ability to reset individual employee scores with audit trail
2. **Product:** Allow cycle name changes without support intervention
3. **User Guide:** Document the score reset request process
4. **User Guide:** Provide guidance on setting up forms correctly before cycle launch

---

### 2.4 Calibration Issues (7 tickets) - MEDIUM PRIORITY

**Problem Statement:**
The calibration workflow requires calibrators to adjust individual goal scores rather than the final score directly, which is time-consuming for large organizations.

**Key Issue:**
- **TSSD-765:** "The client has over 300 employees in the PM cycles and it is challenging to calibrate each of the goals and instead would like to understand if just the final score can be adjusted."

**Current Limitation:**
Calibrators must modify individual goal scores to affect the final rating. There is no option to override or adjust the final score directly.

**Impact:**
- Calibration sessions take longer than expected
- Large organizations (300+ employees) find the process impractical
- Calibrators may skip detailed calibration due to time constraints

**Recommendation:**
1. **Product:** Consider adding a "Final Score Override" option for calibrators with appropriate permissions
2. **User Guide:** Document the calibration workflow clearly, explaining why individual goal adjustment is required
3. **User Guide:** Provide time estimates for calibration based on organization size

---

### 2.5 Employee Management Issues (16 tickets) - MEDIUM PRIORITY

**Problem Statement:**
Managing employee participation in performance cycles requires support intervention in many cases.

**Common Scenarios:**
- Adding employees to an active cycle
- Removing terminated employees from cycles
- Transferring employees between cycles
- Handling employees who change departments mid-cycle

**Representative Ticket:**
- TSSD-3480: "Employee to be added to the performance cycle"

**Recommendation:**
1. **Product:** Streamline employee addition/removal from active cycles
2. **User Guide:** Document the process for managing cycle participants
3. **User Guide:** Provide guidance on handling employee changes mid-cycle

---

### 2.6 Catchup (1:1) Feature Issues (from Avatar tickets)

**Problem Statement:**
The Catchup feature has several UX issues that have been identified and addressed, but some limitations remain.

**Issues Identified:**

| Ticket | Issue | Status |
|--------|-------|--------|
| AV-6355 | Catchups cannot be edited by other participant | Fixed (Already Done) |
| AV-6353 | Cycle cannot be selected when catchup is edited | Fixed (Already Done) |
| AV-6388 | Manager can't see participant's cycles when editing | Fixed (Already Done) |
| AV-6354 | Selected cycle can be removed on catchup edit | Fixed (Already Done) |
| AV-6490 | After creating catchup, left panel doesn't list new catchup | Won't Do |
| AV-5174 | Evaluation > Review Label Change in timeline | Won't Do |

**Recommendation:**
1. **User Guide:** Document the Catchup feature workflow
2. **User Guide:** Note that only the participant who recorded the catchup can edit it (if this is still the case)

---

## 3. Known System Limitations Summary

| # | Limitation | Impact | Workaround |
|---|------------|--------|------------|
| 1 | **Cycle cannot exceed 12 months** | Cannot create multi-year cycles or reopen cycles past their anniversary | Create a new cycle for the next period |
| 2 | **No parallel cycles per department** | Departments with different schedules need separate management | Create department-specific cycles sequentially |
| 3 | **Single cycle participation per employee** | Cannot run Annual + Quarterly reviews simultaneously | Choose one primary cycle per employee |
| 4 | **Calibrators cannot adjust final score directly** | Time-consuming for large organizations | Must adjust individual goal scores |
| 5 | **Timeline changes require support** | Delays in cycle adjustments | Plan dates carefully before cycle creation |
| 6 | **Score resets require support** | Cannot correct errors independently | Contact support for score corrections |

---

## 4. Recommendations Summary

### For Product Team

| Priority | Recommendation | Expected Impact |
|----------|---------------|-----------------|
| HIGH | Enable self-service date modifications | Reduce 30% of PM support tickets |
| HIGH | Remove or increase 1-year cycle limit | Reduce reopen requests |
| MEDIUM | Add final score override for calibrators | Improve calibration efficiency |
| MEDIUM | Streamline employee cycle management | Reduce employee management tickets |
| LOW | Consider parallel cycle support | Address enterprise customer needs |

### For User Guide Documentation

| Section | Content to Include |
|---------|-------------------|
| **Getting Started** | Emphasize importance of planning dates before cycle creation |
| **Cycle Setup** | Document the 1-year maximum duration limitation prominently |
| **Timeline Management** | Explain that date changes require support intervention and expected turnaround |
| **Calibration** | Document why individual goal adjustment is required and provide time estimates |
| **Troubleshooting** | Include common issues and when to contact support |
| **Known Limitations** | Create a dedicated section listing all known limitations |
| **Best Practices** | Provide recommendations for large organizations (300+ employees) |

---

## 5. Appendix: Sample Tickets

### High-Impact Tickets Requiring Documentation

1. **TSSD-3551** - Performance Management Requirements
   - Parallel cycles request
   - Multi-cycle participation request
   - Status: Pending

2. **TSSD-4475** - Request to Reopen Performance Cycle
   - 1-year limit blocking reopen
   - Status: Resolved (manual intervention)

3. **TSSD-765** - Calibrator Final Score Adjustment
   - Request to adjust final score directly
   - Status: Resolved (not possible)

4. **TSSD-3764** - Unable to Update Performance Timelines
   - Admin could not modify dates
   - Status: Resolved (support updated)

---

## 6. Conclusion

Performance Management support tickets are dominated by **timeline/deadline issues (30%)** and **cycle management challenges (13%)**, most of which stem from limited admin self-service capabilities. The top recommendation is to enable self-service date modifications, which could reduce support burden by approximately one-third.

For the user guide, emphasis should be placed on:
1. Planning cycle dates carefully before creation
2. Understanding the 1-year cycle limitation
3. Calibration workflow expectations for large organizations
4. When and how to contact support for changes

---

*Report generated from analysis of 278 Performance Management tickets across TSSD and Avatar projects.*
