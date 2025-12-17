# Daily Wage Calculator

**Module area:** Payroll  
**Feature slug:** `daily_wage_calculator`  
**Source:** zendesk  
**Generated at:** 2025-12-17  
**Confidence:** high

**Requested feature name:** daily wage calculator  
**Requested clean feature name:** `daily_wage_calculator`  

## Feature overview

The daily wage calculator is a payroll system functionality designed to precisely calculate salary deductions for employees taking unpaid leave. It provides a systematic approach to determining daily pay by dividing an employee's total salary by the number of actual working days in a month. The calculator accommodates different leave policies, allowing organizations to use either calendar days (30 days) or working days (e.g., 22 days) as the basis for calculation. A key sophistication of this system is its ability to automatically account for public holidays, which are subtracted from the total working days to ensure accurate salary reduction. By integrating with payroll systems, the calculator generates automatic deductions that reflect approved unpaid leave, supporting HR personnel in maintaining precise and fair compensation management. This feature helps organizations standardize leave-related salary calculations, reduce manual processing errors, and provide transparency in how unpaid leave impacts employee compensation. The daily wage calculator is an advanced payroll management tool designed to provide organizations with flexible and precise methods for calculating employee compensation. It enables payroll professionals to determine daily wage rates using multiple calculation bases, including calendar days, working days, and custom days. The tool addresses complex salary computation scenarios such as salary proration, leave encashment, and unpaid leave deductions. By offering granular control over calculation parameters, the system allows companies to align wage calculations with specific organizational policies and regional labor regulations. Users can select which salary components to include, such as basic salary, allowances, or combinations thereof, ensuring accurate and compliant wage computations. The calculator supports customization for different business contexts, particularly in regions like UAE and KSA where labor laws have specific monthly wage calculation requirements. This feature represents a significant improvement over traditional limited wage calculation methods, providing payroll managers with enhanced flexibility and precision in compensation management. The Daily Wage Calculator is a payroll management tool that enables super administrators to proportionally adjust employee salaries based on actual days worked. It provides flexible calculation methods for prorating salaries during an employee's first month of work or end-of-service settlement. The feature allows administrators to choose between different calculation bases such as custom days, calendar days, or working days, ensuring precise and adaptable salary computations. By offering granular control over salary calculations, the tool helps organizations accurately compensate employees for partial work periods. The system ensures that salary adjustments can be made systematically, with changes automatically applied to active, unpaid payroll amounts. This functionality is critical for maintaining payroll accuracy and supporting fair compensation practices across varying employment scenarios.
## UI entry points

- Unpaid Leave Request → Approval → Payroll Deduction Calculation
- Settings → Payroll → Daily Wage Calculation
## Permissions

- Admin
- Super Admin
## Documentation coverage

- Total articles: **3**
- Article IDs: 14154746403601, 14243704039185, 14243760419089
- Recency assessment: **fresh**

**Doc categories:**
- feature_documentation: **2**
- feature_introduction: **1**

## Job to be done

- Calculate and deduct daily pay for employees taking unpaid leave by determining the appropriate salary reduction based on the number of working or calendar days
- Provide a flexible and customizable method for calculating daily wages, including salary proration, leave encashment, and unpaid leave deductions
- Adjust and calculate an employee's salary proportionally based on the actual days worked
## Primary personas

- HR personnel and payroll administrators responsible for managing employee leave and salary calculations
- Superadmin
- Payroll table managers
- Transaction processors
- Super admin
## Key actions and steps

_None_
## Navigation paths

- Unpaid Leave Request > Approval > Payroll Deduction Calculation — _Process for managing leave-related salary adjustments_
- Settings → Payroll → Daily Wage Calculation — _Accessing the daily wage calculator_
- Settings > Payroll > Daily wage calculation — _Accessing salary proration configuration_
## Prerequisites

- Approved unpaid leave request
- Access to payroll settings
- Company's public holiday calendar configured
- Super admin access to payroll settings
## Data inputs required

- Employee's total salary (basic + allowance) — _Complete salary information needed for calculation_
- Number of working days in the month — _Can be calendar days (30) or working days (e.g., 22)_
- Calculation base — _Choose between calendar days, working days, or custom days_
- Salary components — _Select basic salary, basic salary plus allowances, or allowances only_
- Calculation basis — _Options include custom days, calendar days, or working days_
## Outputs and results

- Automatic pay deduction — _Reflected on the payroll table, calculated based on daily pay rate_
- Calculated daily wage rates — _For salary proration, leave encashment, and unpaid leave deduction_
- Prorated salary calculations — _Proportionally adjusted employee compensation based on selected calculation method_
## Procedures

- **Daily Pay Calculation** — _For processing unpaid leave salary deductions_
  - Receive and approve unpaid leave request
  - Determine leave policy (calendar or working days)
  - Calculate total working days
  - Subtract public holidays from working days
  - Calculate daily pay rate: Salary / Actual Working Days
  - Generate payroll deduction
- **Daily Wage Calculation** — _When prorating salary, calculating leave encashment, or deducting unpaid leave_
  - Navigate to Settings → Payroll → Daily Wage Calculation
  - Select calculation base (calendar/working/custom days)
  - Choose salary components to include
  - Apply calculation
- **Update Salary Proration** — _Adjusting employee salary for partial work periods_
  - Go to Settings > Payroll > Daily wage calculation
  - Select calculation basis (custom days, calendar days, or working days)
  - Save changes
  - If payroll month is open, reject existing prorated salary transactions
  - Confirm new proration settings
## Rules, limitations, constraints

- Daily pay calculated by dividing total salary by number of actual working days
- Can use either calendar days (30 days) or working days (e.g., 22 days)
- Public holidays must be subtracted from working days
- Calculation can be based on calendar days, working days, or custom days
- Can exclude weekends and public holidays
- Most UAE and KSA companies use 30 custom days to align with labor law
- Changes affect all active (unpaid) amounts in the payroll table
- When payroll month is open, must reject existing prorated salary transactions before saving new settings
## Edge cases and warnings

- Public holidays must be considered and subtracted from working days when calculating daily pay
- Calculation varies depending on month length (31 days in January, 28 days in February)
- Manually reject and resave transactions when payroll month is open and prorated salary transactions exist
## Feature interactions and dependencies

- Interacts with payroll system to create and reflect pay deductions
- Interacts with Payroll system and Daily Wage Calculator (DWC)
## Glossary terms

- **Daily Pay**: Salary Amount (Basic + Allowance) divided by the number of actual working days in the month
- **Salary Proration**: Proportional salary adjustment based on actual days worked, affecting first salary and end-of-service settlement
## Claims to validate

- **daily_pay_calculation_rule** (calculation_rule; risk: low)
  - Claim: Daily pay is calculated by dividing total salary by actual working days, excluding public holidays
  - Validation hint: Verify calculation matches: Total Salary / (Working Days - Public Holidays)
  - Source article IDs: 14154746403601
- **leave_policy_flexibility** (system_behavior; risk: low)
  - Claim: System supports both calendar days (30) and working days (e.g., 22) leave policies
  - Validation hint: Test daily pay calculation with different leave policy configurations
  - Source article IDs: 14154746403601
- **daily_wage_nav_001** (navigation; risk: low)
  - Claim: User can navigate to Daily Wage Calculator via Settings → Payroll → Daily Wage Calculation
  - Validation hint: Verify navigation path exists and is accessible
  - Source article IDs: 14243704039185
- **daily_wage_calc_002** (calculation_rule; risk: low)
  - Claim: Daily wage can be calculated using calendar days, working days, or custom days
  - Validation hint: Verify all three calculation base options are available and function correctly
  - Source article IDs: 14243704039185
- **daily_wage_calc_navigation** (navigation; risk: low)
  - Claim: Super admin can navigate to Daily wage calculation under Settings > Payroll
  - Validation hint: Verify navigation path exists and is accessible
  - Source article IDs: 14243760419089
- **proration_calculation_bases** (ui_step; risk: low)
  - Claim: User can select between custom days, calendar days, and working days for salary calculation
  - Validation hint: Confirm all three calculation basis options are present and selectable
  - Source article IDs: 14243760419089
- **proration_save_behavior** (system_behavior; risk: medium)
  - Claim: Saving proration changes affects all active (unpaid) amounts in the payroll table
  - Validation hint: Verify that saved changes propagate to unpaid payroll transactions
  - Source article IDs: 14243760419089

## Source articles

- **How is daily pay calculated** (ID: 14154746403601; feature_documentation)
  - URL: https://bayzathelp.zendesk.com/hc/en-gb/articles/14154746403601-How-is-daily-pay-calculated
  - Summary: Explains how daily pay is calculated for unpaid leave, including considerations for working days, calendar days, and public holidays
  - Keywords: unpaid leave, daily pay calculation, salary deduction, working days, calendar days, public holidays, payroll
- **Introduction to daily wage calculator** (ID: 14243704039185; feature_introduction)
  - URL: https://bayzathelp.zendesk.com/hc/en-gb/articles/14243704039185-Introduction-to-daily-wage-calculator
  - Summary: Comprehensive guide to the new Daily Wage calculator, explaining its flexible calculation methods for salary proration, leave encashment, and unpaid leave deductions.
  - Keywords: daily wage, salary proration, leave encashment, unpaid leave, calculation base, calendar days, working days, custom days, payroll, labor law
- **Salary Proration** (ID: 14243760419089; feature_documentation)
  - URL: https://bayzathelp.zendesk.com/hc/en-gb/articles/14243760419089-Salary-Proration
  - Summary: Explains how to update salary proration for calculating proportional employee salaries using the Daily Wage Calculator, with options for different calculation bases and procedures for managing prorated salary transactions.
  - Keywords: daily wage calculator, payroll, salary calculation, prorated salary, super admin, calculation bases, working days, calendar days, custom days
