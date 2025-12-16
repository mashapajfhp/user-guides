# Zendesk Documentation – Daily Wage Calculator

  Generated on: 2025-12-16

  ## Feature Overview
  The Daily Wage Calculator is a comprehensive payroll feature that enables organizations to calculate and manage employee 
  daily wage rates for various compensation scenarios. This system calculate and deduct daily pay for employees taking unpaid leave by determining the appropriate salary reduction, and provide a flexible and customizable method for calculating daily wages, including salary proration, leave encashment, and unpaid leave deductions, and adjust and calculate an employee's salary proportionally based on the actual days worked. The feature supports multiple calculation bases including calendar days (standard monthly days), working days (excluding 
  weekends and holidays), and custom days (configurable to align with regional labor laws). It integrates seamlessly with payroll processing, leave 
  management, and end-of-service calculations to ensure accurate compensation across all employee lifecycle stages. The calculator accommodates 
  different organizational structures and regional compliance requirements, particularly for UAE and KSA companies that typically use 30 custom days 
  for labor law alignment. Users can configure salary components to include basic salary only, basic salary plus allowances, or allowances only, 
  providing flexibility for diverse compensation structures. The system automatically handles public holiday exclusions and weekend calculations 
  based on configured work week settings. All calculations maintain audit trails and integrate with broader payroll workflows to ensure data 
  consistency and compliance.

  ## Documented Jobs To Be Done
  - Calculate and deduct daily pay for employees taking unpaid leave by determining the appropriate salary reduction [Articles: 14154746403601]
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
- Settings → Payroll → Daily Wage Calculation (Accessing Daily Wage Calculator) [Articles: 14243704039185]
- Settings > Payroll > Daily wage calculation (Accessing salary proration configuration) [Articles: 14243760419089]


  ## Prerequisites
  - Approved unpaid leave request [Articles: 14154746403601]
- Access to payroll settings and configuration permissions [Articles: 14243704039185]


  ## Data Inputs Required
  - **Employee's total salary**: Basic salary plus allowances [Articles: 14154746403601]
- **Number of working days**: Can be calendar days (30) or working days (22) [Articles: 14154746403601]
- **Calculation base**: Calendar days, working days, or custom days [Articles: 14243704039185]
- **Salary components**: Basic salary, basic salary plus allowances, or allowances only [Articles: 14243704039185]
- **Calculation basis**: Choose from custom days, calendar days, or working days [Articles: 14243760419089]


  ## Outputs & Results
  - **Daily pay rate**: Salary divided by actual working days [Articles: 14154746403601]
- **Payroll deduction**: Automatic adjustment in payroll table [Articles: 14154746403601]
- **Daily wage rates**: For salary proration, leave encashment, and unpaid leave deduction [Articles: 14243704039185]
- **Prorated salary calculation**: Proportionally adjusted employee compensation [Articles: 14243760419089]


  ## Procedures
  ### Daily Pay Calculation [Articles: 14154746403601]
  **When to use**: For unpaid leave salary deductions
  **Steps**:
    1. Determine leave policy (calendar or working days)
  1. Calculate total working days
  1. Subtract public holidays
  1. Divide total salary by working days
  1. Generate payroll deduction

### Daily Wage Calculation [Articles: 14243704039185]
  **When to use**: Determining prorated salaries, leave payments, and unpaid leave deductions
  **Steps**:
    1. Access Daily Wage Calculator
  1. Select calculation base
  1. Choose salary components
  1. Apply calculation

### Update Salary Proration [Articles: 14243760419089]
  **When to use**: Adjusting salary calculations for partial work periods
  **Steps**:
    1. Navigate to Settings
  1. Select Payroll
  1. Choose Daily Wage Calculation
  1. Select Calculation Basis
  1. Save Changes
  1. Optionally reject existing prorated transactions



  ## Rules & Limitations
  - Daily pay = Salary / Number of actual working days [Articles: 14154746403601]
- Public holidays are deducted from working days [Articles: 14154746403601]
- Calculation can be based on calendar days, working days, or custom days [Articles: 14243704039185]
- Can exclude weekends and public holidays [Articles: 14243704039185]
- Changes affect all active (unpaid) amounts in payroll table [Articles: 14243760419089]
- When payroll month is open, must reject existing prorated salary transactions before saving new settings [Articles: 14243760419089]


  ## Edge Cases & Warnings
  - Manual transaction management required when payroll month is open [Articles: 14243760419089]


  ## Feature Interactions & Dependencies
  - Interacts with Payroll system and Daily Wage Calculator [Articles: 14243760419089]


  ## Glossary Terms
  - **Daily Pay**: Salary amount divided by number of working days in a month [Articles: 14154746403601]
- **Calendar days**: Total number of days in a given month [Articles: 14243704039185]
- **Working days**: Business days excluding weekends and public holidays [Articles: 14243704039185]
- **Custom days**: Flexible calculation base set according to company policies [Articles: 14243704039185]
- **Daily Wage Calculator**: Tool for calculating proportional employee wages [Articles: 14243760419089]


  ## Claims To Validate
  - (calculation_rule) Daily pay is calculated by dividing total monthly salary by actual working days [Articles: 14154746403601]
- (system_behavior) Public holidays are automatically subtracted from working days [Articles: 14154746403601]
- (navigation) User can navigate to Daily Wage Calculator via Settings → Payroll → Daily Wage Calculation [Articles: 14243704039185]
- (calculation_rule) System supports three calculation bases: calendar days, working days, custom days [Articles: 14243704039185]
- (navigation) User can navigate to Settings > Payroll > Daily wage calculation [Articles: 14243760419089]
- (ui_step) User can select between custom days, calendar days, and working days [Articles: 14243760419089]


  ## Source Articles Index
  - **How is daily pay calculated** (ID: 14154746403601): Explains how daily pay is calculated for unpaid leave, including methods for determining working days and applying salary deductions
    - URL: https://bayzathelp.zendesk.com/hc/en-gb/articles/14154746403601-How-is-daily-pay-calculated
    - Keywords: unpaid leave, daily pay calculation, salary deduction, working days, calendar days, public holidays, payroll

  - **Introduction to daily wage calculator** (ID: 14243704039185): Introduces a new Daily Wage calculator with flexible calculation options for salary proration, leave encashment, and unpaid leave deductions.
    - URL: https://bayzathelp.zendesk.com/hc/en-gb/articles/14243704039185-Introduction-to-daily-wage-calculator
    - Keywords: daily wage, salary proration, leave encashment, unpaid leave, calculation base, calendar days, working days, custom days, payroll, labor law

  - **Salary Proration** (ID: 14243760419089): Explains how to update salary proration settings in the Daily Wage Calculator, affecting employee first salary and end-of-service settlement calculations.
    - URL: https://bayzathelp.zendesk.com/hc/en-gb/articles/14243760419089-Salary-Proration
    - Keywords: daily wage calculator, payroll, salary calculation, prorated salary, super admin, calculation bases, working days, calendar days, custom days

  