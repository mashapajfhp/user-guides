# Zendesk Documentation – Daily Wage Calculator

Generated on: 2025-12-16

## Documented Jobs To Be Done
- Calculate and deduct daily pay for employees taking unpaid leave by determining the appropriate salary reduction
- Provide a flexible and customizable method for calculating daily wages, including salary proration, leave encashment, and unpaid leave deductions
- Adjust and calculate an employee's salary proportionally based on the actual days worked, affecting their first salary and end-of-service settlement


## Navigation Paths
- Unpaid Leave Request → Approval → Payroll Deduction
- Settings → Payroll → Daily Wage Calculation
- Settings > Payroll > Daily wage calculation


## Rules & Limitations
- Daily pay = Salary / Actual Working Days
- Public holidays are subtracted from working days
- Calculation can exclude weekends and public holidays
- Most UAE and KSA companies use 30 custom days to align with labor law
- Changes will affect all active (unpaid) amounts in the payroll table
- When payroll month is open, super admin must reject existing prorated salary transactions before saving new proration settings


## Claims To Validate
- (calculation_rule) Daily pay is calculated by dividing total salary by actual working days
- (system_behavior) Users can select from calendar days, working days, or custom days for wage calculations
- (calculation_rule) Salary can be prorated using custom days, calendar days, or working days
