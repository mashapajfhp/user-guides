# Zendesk Documentation – Daily Wage Calculator

Generated on: 2025-12-16

## Documented Jobs To Be Done
- Calculate and deduct daily pay for employees taking unpaid leave by determining appropriate salary reduction
- Provide a flexible and customizable method for calculating daily wages, including salary proration, leave encashment, and unpaid leave deductions
- Adjust and calculate an employee's salary proportionally based on the actual days worked


## Navigation Paths
- Unpaid Leave Request → Approval → Pay Calculation
- Settings → Payroll → Daily Wage Calculation
- Settings > Payroll > Daily wage calculation


## Rules & Limitations
- Daily pay = Salary / Actual Working Days
- Public holidays reduce working days count
- Calculation can exclude weekends and public holidays
- UAE and KSA companies typically use 30 custom days to align with labor law
- Changes affect all active (unpaid) amounts in payroll table


## Claims To Validate
- (calculation_rule) Daily pay is calculated by dividing total salary by actual working days
- (calculation_rule) Daily wage can be calculated using calendar days, working days, or custom days
- (system_behavior) Changes to proration settings immediately affect all active unpaid payroll amounts
