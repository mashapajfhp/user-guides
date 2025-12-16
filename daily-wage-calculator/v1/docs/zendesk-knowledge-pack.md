# Zendesk Documentation – Daily Wage Calculator

  Generated on: 2025-12-16

  ## Feature Overview
  The Daily Wage Calculator is a comprehensive payroll feature that enables organizations to calculate and manage employee 
  daily wage rates for various compensation scenarios. This system calculate and deduct daily pay for employees taking unpaid leave, and provide a flexible and customizable method for calculating daily wages, including salary proration, leave encashment, and unpaid leave deductions, and adjust and calculate an employee's salary proportionally based on the actual days worked. The feature supports multiple calculation bases including calendar days (standard monthly days), working days (excluding 
  weekends and holidays), and custom days (configurable to align with regional labor laws). It integrates seamlessly with payroll processing, leave 
  management, and end-of-service calculations to ensure accurate compensation across all employee lifecycle stages. The calculator accommodates 
  different organizational structures and regional compliance requirements, particularly for UAE and KSA companies that typically use 30 custom days 
  for labor law alignment. Users can configure salary components to include basic salary only, basic salary plus allowances, or allowances only, 
  providing flexibility for diverse compensation structures. The system automatically handles public holiday exclusions and weekend calculations 
  based on configured work week settings. All calculations maintain audit trails and integrate with broader payroll workflows to ensure data 
  consistency and compliance.

  ## Documented Jobs To Be Done
  - Calculate and deduct daily pay for employees taking unpaid leave [Articles: 14154746403601]
- Provide a flexible and customizable method for calculating daily wages, including salary proration, leave encashment, and unpaid leave deductions [Articles: 14243704039185]
- Adjust and calculate an employee's salary proportionally based on the actual days worked [Articles: 14243760419089]


  ## Primary User Personas
  - HR personnel and payroll administrators [Articles: 14154746403601]
- Superadmin [Articles: 14243704039185]
- Payroll table managers [Articles: 14243704039185]
- Transaction processors [Articles: 14243704039185]
- Super admin [Articles: 14243760419089]


  ## Navigation Paths
  - Unpaid Leave Request → Approval → Payroll Deduction (Leave management workflow) [Articles: 14154746403601]
- Settings → Payroll → Daily Wage Calculation (Accessing the Daily Wage Calculator) [Articles: 14243704039185]
- Settings > Payroll > Daily wage calculation (Updating salary proration settings) [Articles: 14243760419089]


  ## Prerequisites
  - Approved unpaid leave request [Articles: 14154746403601]
- Company's public holiday calendar setup [Articles: 14243704039185]
- Super admin access [Articles: 14243760419089]


  ## Data Inputs Required
  - **Employee's total salary**: Basic salary + Allowances [Articles: 14154746403601]
- **Working days in month**: Calendar days (30) or working days (22) [Articles: 14154746403601]
- **Calculation base**: Calendar days, working days, or custom days [Articles: 14243704039185]
- **Salary components**: Basic salary, basic salary plus allowances, or allowances only [Articles: 14243704039185]
- **Calculation basis**: Choose from: custom days, calendar days, working days [Articles: 14243760419089]


  ## Outputs & Results
  - **Daily pay rate**: Total salary divided by actual working days [Articles: 14154746403601]
- **Payroll deduction**: Automatic adjustment in payroll table [Articles: 14154746403601]
- **Daily wage rates**: For salary proration, leave encashment, and unpaid leave deduction [Articles: 14243704039185]
- **Prorated salary calculation**: Proportional salary adjustment based on selected calculation method [Articles: 14243760419089]


  ## Procedures
  ### Daily Pay Calculation [Articles: 14154746403601]
  **When to use**: Processing unpaid leave salary deductions
  **Steps**:
    1. Determine leave policy (calendar or working days)
  1. Calculate total working days
  1. Subtract public holidays
  1. Divide total salary by working days

### Daily Wage Calculation [Articles: 14243704039185]
  **When to use**: Determining prorated salaries, leave payments, and unpaid leave deductions
  **Steps**:
    1. Access Daily Wage Calculator
  1. Select calculation base
  1. Choose salary components
  1. Apply calculation

### Update Salary Proration [Articles: 14243760419089]
  **When to use**: Adjusting employee compensation for partial work periods
  **Steps**:
    1. Navigate to Settings
  1. Select Payroll
  1. Choose Daily Wage Calculation
  1. Select Calculation Basis
  1. Save Changes
  1. Optionally reject existing prorated transactions



  ## Rules & Limitations
  - Daily pay = Salary / Actual Working Days [Articles: 14154746403601]
- Public holidays are subtracted from working days [Articles: 14154746403601]
- Can exclude weekends and public holidays [Articles: 14243704039185]
- Most UAE and KSA companies use 30 custom days to align with labor law [Articles: 14243704039185]
- Changes affect all active (unpaid) amounts in payroll table [Articles: 14243760419089]
- During open payroll month, existing prorated transactions must be rejected before saving new settings [Articles: 14243760419089]


  ## Edge Cases & Warnings
  - Public holidays must be considered in working days calculation [Articles: 14154746403601]
- Calculation varies depending on month length (31 days in January, 28 days in February) [Articles: 14243704039185]
- Manual transaction rejection required during open payroll months [Articles: 14243760419089]


  ## Feature Interactions & Dependencies
  - Integrates with payroll, leave management, and employee record systems [Articles: 14154746403601]
- Interacts with Payroll system and Daily Wage Calculator [Articles: 14243760419089]


  ## Glossary Terms
  - **Daily Pay**: Salary amount divided by actual working days in a month [Articles: 14154746403601]
- **Calendar days**: The total number of days in a given month [Articles: 14243704039185]
- **Working days**: Only business days, excluding weekends and public holidays [Articles: 14243704039185]
- **Custom days**: Flexible calculation base set according to company policies [Articles: 14243704039185]
- **Daily Wage Calculator (DWC)**: System interface for managing and calculating prorated salaries [Articles: 14243760419089]


  ## Claims To Validate
  - (calculation_rule) Daily pay is calculated by dividing total salary by actual working days [Articles: 14154746403601]
- (system_behavior) Public holidays are automatically subtracted from working days [Articles: 14154746403601]
- (navigation) Daily Wage Calculator can be accessed via Settings → Payroll → Daily Wage Calculation [Articles: 14243704039185]
- (system_behavior) Calculator supports calendar days, working days, and custom days calculation bases [Articles: 14243704039185]
- (calculation_rule) Users can select salary components: basic salary, basic salary plus allowances, or allowances only [Articles: 14243704039185]
- (navigation) Super admin can navigate to Settings > Payroll > Daily wage calculation [Articles: 14243760419089]
- (calculation_rule) Calculation basis can be set to custom days, calendar days, or working days [Articles: 14243760419089]


  ## Source Articles Index
  - **How is daily pay calculated** (ID: 14154746403601): Explains how daily pay is calculated for unpaid leave, including working days, calendar days, and public holiday considerations
    - URL: https://bayzathelp.zendesk.com/hc/en-gb/articles/14154746403601-How-is-daily-pay-calculated
    - Keywords: unpaid leave, daily pay calculation, salary deduction, working days, calendar days, public holidays, payroll

  - **Introduction to daily wage calculator** (ID: 14243704039185): Introduces a new Daily Wage calculator with flexible calculation options for salary proration, leave encashment, and unpaid leave deductions.
    - URL: https://bayzathelp.zendesk.com/hc/en-gb/articles/14243704039185-Introduction-to-daily-wage-calculator
    - Keywords: daily wage, salary proration, leave encashment, unpaid leave, calculation base, calendar days, working days, custom days, payroll, labor law

  - **Salary Proration** (ID: 14243760419089): Explains how super admins can update salary proration settings in the Daily Wage Calculator, affecting employee first salary and end-of-service settlement calculations.
    - URL: https://bayzathelp.zendesk.com/hc/en-gb/articles/14243760419089-Salary-Proration
    - Keywords: daily wage calculator, payroll, salary calculation, prorated salary, super admin, calculation bases, working days, calendar days, custom days

  