# Jira Analysis – Salary Proration Configuration

  Generated on: 2025-12-16

  ## Operational Reality Overview
  Based on comprehensive Jira ticket analysis, the Daily Wage Calculator represents a critical payroll feature with 
  significant operational complexity and customer impact. Customer requests and issues reveal that organizations primarily need this feature to configure different salary proration methods for distinct employee categories, and calculate fair pro-rated leave encashment for mid-month employee departures, and configure daily rate for leave encashment directly in calculator, and quickly visualize employee attendance patterns, and add contextual comments to employee attendance records, and receive mobile notifications for attendance comments, and accurately track employee work hours across different time zones, and generate comprehensive attendance reports for legal and payroll purposes, and verify consistent attendance record details across different reports, and log daily work attendance digitally, and automate absence deduction request generation for employees with no attendance record, and configure leave balance accrual to match organizational policies, and reliable admin platform access, and accurately track employee attendance across split shifts, and correctly display leave status for complex shift schedules, and correct historical biometric attendance data, and configure leave encashment calculation using only basic salary, and track and approve employee leave requests, and manage unpaid and vacation leave across organization, and capture comprehensive attendance data including office location via api, and understand precise leave balance calculation for individual employees, and track document lifecycle with precise start and expiry dates, and receive timely notifications about document expirations, and configure different salary proration methods for distinct employee groups, and migrate leave policy between cycle types with accurate balance calculations, and view motivational daily quotes across different devices, and automate salary calculation based on actual working days, and selectively disable specific system-generated posts, and synchronize daily wage calculation formulas across leave and payroll modules, and synchronize attendance records from external time tracking systems, and accurately calculate unpaid leave deductions based on daily wage rates, and understand attendance records for employees with split shifts, and accurately calculate prorated employer social security contributions for partial employment months, and accurately calculate end of service gratuity for employees, and calculate accurate pro-rated salary for employees leaving mid-month, and understand precise eos gratuity calculation methodology, and accurately calculate end of service benefits based on daily wage rate, and calculate accurate prorated salary and terminal benefits for mid-month employee departures, and calculate accurate leave balance during employee termination, and accurately calculate employee termination benefits, and submit final employee settlement accurately and quickly, and calculate accurate prorated salary for employees joining mid-month, and filter attendance reports to isolate out-of-office check-ins, and obtain accurate unpaid leave daily rate calculations reflecting historical salary rates, and accurately calculate end-of-service gratuity for limited contract employees, and accurately calculate end-of-service gratuity across different contract types and departure reasons, and understand precise gratuity calculation methodology, and calculate accurate end of service gratuity for employees, and verify accurate gratuity calculation for limited contract employees, and understand precise leave balance calculation method, and modify payroll processing cycle to match organizational payment schedules, and understand precise unpaid leave financial deductions, and calculate precise end-of-service gratuity for employees, and generate accurate payroll reports with prorated gosi deductions, and obtain accurate leave encashment calculation for mid-month departures, and obtain accurate prorated leave salary calculation, and generate accurate monthly leave salary accrual reports, and understand salary deduction calculations for different leave types, and accurately calculate unpaid leave salary deductions, and correct duplicate variable pay entries after payroll cycle closure, and accurately calculate prorated leave salary, and process accurate end of service benefits for departing employees, and generate accurate leave salary accrual reports using custom salary formulas, and calculate precise prorated salary for employees departing mid-month, and manage leave requests for offboarding employees, and automate accurate leave balance calculations, and understand leave salary calculation methodology, and understand precise leave balance calculations, and understand detailed leave balance calculations, and accurate leave balance calculation across different policy types, and accurate prorated salary calculation during leave periods with public holidays, and configure custom leave salary accrual calculation methods, and generate accurate leave salary reports reflecting organizational policies, and understand monthly leave salary accrual calculations, and track cumulative leave salary across months, and accurately calculate prorated salary for partial work months, and calculate leave salary with precise daily wage formulas, and obtain accurate leave salary compensation, and accurately calculate prorated salary during employee leave, and precise leave salary calculation with configurable component handling, and configure flexible leave salary policies for different employee groups, and configure leave policies that pay only basic salary during annual leave, and implement different salary proration formulas for distinct employee groups, and obtain granular, daily-calculated air ticket allowances, and understand salary proration calculation logic, and understand precise timing of gosi percentage data retrieval, and understand precise gratuity calculation methodology, and manually reduce incorrect leave balance allocations, and accurately calculate leave salary with configurable proration rules, and calculate accurate partial month salary for offboarded employees, and calculate accurate partial month salaries for employees joining mid-month, and accurately calculate prorated salary during employee offboarding, and calculate accurate partial month salary for mid-cycle employee terminations, and automatically categorize processed time and pay adjustments, and quickly determine total daily work hours across multiple activities, and accurately log daily work tasks across different dates, and modify automatically generated leave deductions in eos calculations, and change salary calculation basis from basic to gross pay, and accurately track and deduct unpaid leave days across multiple payroll months, and recalculate unpaid leave deductions without generating duplicate entries, and accurately track and display unpaid leave days across multiple months, and accurate salary deduction for unpaid leave periods, and understand unpaid leave salary deduction calculations, and configure accurate daily wage calculations for different leave types, and accurately calculate unpaid leave salary deductions, and calculate precise leave salary accruals using calendar month days, and automate employee absence notifications, and automate employee absence tracking and notification, and accurate unpaid leave salary deduction calculation, and accurate unpaid leave salary deduction calculation, and calculate accurate unpaid leave deductions across different payroll months. Real-world usage patterns show that 103 distinct workflow scenarios have been documented through customer 
  interactions. Support analysis identifies 100 known technical issues requiring customer workarounds or manual interventions. 
  The platform currently implements 107 specific system constraints that impact customer workflows and 
  calculation accuracy. These operational realities, documented through customer support interactions and development tickets, reveal both the 
  feature's importance and areas requiring enhancement. The analysis provides validation-ready claims for interface testing and user guide accuracy 
  verification.

  ## Summary
  Total tickets analysed: 103
  Projects: tssd, os, TSSD

  ## Observed User Goals
  - Configure different salary proration methods for distinct employee categories [TSSD-4876]
- Calculate fair pro-rated leave encashment for mid-month employee departures [TSSD-2499]
- Configure Daily Rate for Leave Encashment directly in calculator [OS-446]
- Quickly visualize employee attendance patterns [TSSD-3774]
- Add contextual comments to employee attendance records [TSSD-1517]
- Receive mobile notifications for attendance comments [TSSD-1517]
- Accurately track employee work hours across different time zones [TSSD-713]
- Generate comprehensive attendance reports for legal and payroll purposes [TSSD-1433]
- Verify consistent attendance record details across different reports [TSSD-1908]
- Log daily work attendance digitally [TSSD-430]
- Automate absence deduction request generation for employees with no attendance record [TSSD-2206]
- Configure leave balance accrual to match organizational policies [TSSD-1453]
- Reliable Admin Platform Access [TSSD-2266]
- Accurately track employee attendance across split shifts [OS-639]
- Correctly display leave status for complex shift schedules [OS-639]
- Correct historical biometric attendance data [TSSD-1134]
- Configure leave encashment calculation using only basic salary [TSSD-3939]
- Track and approve employee leave requests [TSSD-2056]
- Manage unpaid and vacation leave across organization [TSSD-2056]
- Capture comprehensive attendance data including office location via API [TSSD-4151]
- Understand precise leave balance calculation for individual employees [TSSD-4203]
- Track document lifecycle with precise start and expiry dates [TSSD-1357]
- Receive timely notifications about document expirations [TSSD-1357]
- Configure different salary proration methods for distinct employee groups [TSSD-4882]
- Migrate leave policy between cycle types with accurate balance calculations [TSSD-4212]
- View motivational daily quotes across different devices [TSSD-872]
- Automate salary calculation based on actual working days [TSSD-4905]
- Selectively disable specific system-generated posts [TSSD-120]
- Synchronize daily wage calculation formulas across leave and payroll modules [TSSD-2648]
- Synchronize attendance records from external time tracking systems [TSSD-3419]
- Accurately calculate unpaid leave deductions based on daily wage rates [TSSD-1581]
- Understand attendance records for employees with split shifts [TSSD-4230]
- Accurately calculate prorated employer social security contributions for partial employment months [TSSD-2561]
- Accurately calculate end of service gratuity for employees [TSSD-4179]
- Calculate accurate pro-rated salary for employees leaving mid-month [TSSD-2605]
- Understand precise EOS gratuity calculation methodology [TSSD-1232]
- Accurately calculate end of service benefits based on daily wage rate [TSSD-3832]
- Calculate accurate prorated salary and terminal benefits for mid-month employee departures [TSSD-4033]
- Calculate accurate leave balance during employee termination [TSSD-4042]
- Accurately calculate employee termination benefits [TSSD-4742]
- Submit final employee settlement accurately and quickly [TSSD-3908]
- Calculate accurate prorated salary for employees joining mid-month [TSSD-4129]
- Filter attendance reports to isolate out-of-office check-ins [TSSD-319]
- Obtain accurate unpaid leave daily rate calculations reflecting historical salary rates [OS-867]
- Accurately calculate end-of-service gratuity for limited contract employees [TSSD-1625]
- Accurately calculate end-of-service gratuity across different contract types and departure reasons [TSSD-4779]
- Understand precise gratuity calculation methodology [TSSD-3123]
- Calculate accurate end of service gratuity for employees [TSSD-2252]
- Verify accurate gratuity calculation for limited contract employees [TSSD-4796]
- Understand precise leave balance calculation method [TSSD-3139]
- Modify payroll processing cycle to match organizational payment schedules [TSSD-3879]
- Understand precise unpaid leave financial deductions [TSSD-2212]
- Calculate precise end-of-service gratuity for employees [TSSD-2043]
- Generate accurate payroll reports with prorated GOSI deductions [TSSD-3249]
- Obtain accurate leave encashment calculation for mid-month departures [TSSD-4813]
- Obtain accurate prorated leave salary calculation [TSSD-2106]
- Generate accurate monthly leave salary accrual reports [TSSD-3487]
- Understand salary deduction calculations for different leave types [TSSD-3213]
- Accurately calculate unpaid leave salary deductions [TSSD-1798]
- Correct duplicate variable pay entries after payroll cycle closure [TSSD-3880]
- Accurately calculate prorated leave salary [TSSD-4731]
- Process accurate End of Service benefits for departing employees [TSSD-2597]
- Generate accurate leave salary accrual reports using custom salary formulas [TSSD-3402]
- Calculate precise prorated salary for employees departing mid-month [TSSD-3995]
- Manage leave requests for offboarding employees [TSSD-4720]
- Automate accurate leave balance calculations [TSSD-291]
- Understand leave salary calculation methodology [TSSD-4543]
- Understand precise leave balance calculations [TSSD-3822]
- Understand detailed leave balance calculations [TSSD-4243]
- Accurate leave balance calculation across different policy types [TSSD-3082]
- Accurate prorated salary calculation during leave periods with public holidays [TSSD-2937]
- Configure custom leave salary accrual calculation methods [TSSD-3779]
- Generate accurate leave salary reports reflecting organizational policies [TSSD-3779]
- Understand monthly leave salary accrual calculations [TSSD-3648]
- Track cumulative leave salary across months [TSSD-3648]
- Accurately calculate prorated salary for partial work months [TSSD-2321]
- Calculate leave salary with precise daily wage formulas [TSSD-2321]
- Obtain accurate leave salary compensation [TSSD-3226]
- Accurately calculate prorated salary during employee leave [TSSD-3275]
- Precise leave salary calculation with configurable component handling [TSSD-4387]
- Configure flexible leave salary policies for different employee groups [TSSD-2934]
- Configure leave policies that pay only basic salary during annual leave [TSSD-3654]
- Implement different salary proration formulas for distinct employee groups [TSSD-4375]
- Obtain granular, daily-calculated air ticket allowances [TSSD-3146]
- Understand salary proration calculation logic [TSSD-4292]
- Understand precise timing of GOSI percentage data retrieval [OS-3034]
- Understand precise gratuity calculation methodology [TSSD-375]
- Manually reduce incorrect leave balance allocations [TSSD-3789]
- Accurately calculate leave salary with configurable proration rules [TSSD-4349]
- Calculate accurate partial month salary for offboarded employees [TSSD-3058]
- Calculate accurate partial month salaries for employees joining mid-month [TSSD-3512]
- Accurately calculate prorated salary during employee offboarding [TSSD-2518]
- Calculate accurate partial month salary for mid-cycle employee terminations [TSSD-4303]
- Automatically categorize processed time and pay adjustments [TSSD-463]
- Quickly determine total daily work hours across multiple activities [TSSD-696]
- Accurately log daily work tasks across different dates [TSSD-4409]
- Modify automatically generated leave deductions in EOS calculations [TSSD-3946]
- Change salary calculation basis from Basic to Gross pay [TSSD-3946]
- Accurately track and deduct unpaid leave days across multiple payroll months [TSSD-2384]
- Recalculate unpaid leave deductions without generating duplicate entries [TSSD-2532]
- Accurately track and display unpaid leave days across multiple months [TSSD-3044]
- Accurate salary deduction for unpaid leave periods [TSSD-4464]
- Understand unpaid leave salary deduction calculations [TSSD-4368]
- Configure accurate daily wage calculations for different leave types [TSSD-4947]
- Accurately calculate unpaid leave salary deductions [TSSD-1746]
- Calculate precise leave salary accruals using calendar month days [TSSD-1227]
- Automate employee absence notifications [TSSD-3438]
- Automate employee absence tracking and notification [TSSD-3507]
- Accurate unpaid leave salary deduction calculation [TSSD-1301]
- Accurate unpaid leave salary deduction calculation [TSSD-1753]
- Calculate accurate unpaid leave deductions across different payroll months [TSSD-1807]


  ## Observed Workflows
  ### Attempt to set multiple proration calculation methods for different employee types [TSSD-4876]
  **When it occurs**: During payroll configuration
  **Failure points**:
    - System only supports single, organization-wide proration method
  - Cannot differentiate proration rules by employee category

### Employee offboarding leave calculation [TSSD-2499]
  **When it occurs**: During employee termination or resignation
  **Failure points**:
    - Only full month leave accrual recognized
  - Partial month work days not proportionally calculated
  - Manual intervention required for accurate calculation

### Payroll managers attempt to set daily rates for leave compensation [OS-446]
  **When it occurs**: During payroll configuration and leave balance settlement
  **Failure points**:
    - No direct rate configuration in Daily Rate Calculator
  - Requires manual workarounds
  - Additional administrative steps needed

### Current attendance tracking requires manual review of list-based attendance records [TSSD-3774]
  **When it occurs**: During workforce management and reporting
  **Failure points**:
    - Difficult to quickly understand attendance patterns
  - Requires manual data interpretation
  - Limited visual comprehension

### Comment submission from daily attendance record [TSSD-1517]
  **When it occurs**: During attendance review process
  **Failure points**:
    - Notification delivery inconsistent
  - Mobile push notifications unreliable

### Employee checks in, system validates against configured work timing and late arrival settings [TSSD-713]
  **When it occurs**: During employee work hours
  **Failure points**:
    - Timezone configuration mismatch
  - Inconsistent late arrival settings
  - Work timing configuration errors

### Employee checks in/out, system calculates total and extra hours automatically [TSSD-1433]
  **When it occurs**: During shift and post-shift reporting
  **Failure points**:
    - No validation of checkout legitimacy
  - Automatic hour calculation without manual review
  - Potential for checkout time manipulation

### Cross-referencing Time & Productivity adjustments with daily attendance reports [TSSD-1908]
  **When it occurs**: During attendance record review and validation
  **Failure points**:
    - Inconsistent location status representation
  - Mismatched edit status across reports

### Employee performs single daily check-in and check-out [TSSD-430]
  **When it occurs**: During work day
  **Failure points**:
    - Check-in button disappears after daily cycle
  - No clear indication of cycle completion

### Manual 'Mark as Absent' process for employees with no check-in data [TSSD-2206]
  **When it occurs**: When employee has no attendance record for entire day
  **Failure points**:
    - Requires individual manager intervention
  - No bulk marking capability
  - Inconsistent with other automated deduction scenarios

### Select leave policy type (conditional/non-conditional) which determines accrual method [TSSD-1453]
  **When it occurs**: During leave policy configuration
  **Failure points**:
    - Cannot change accrual frequency after policy type selection
  - Limited flexibility in accrual calculation method

### Login Troubleshooting Sequence [TSSD-2266]
  **When it occurs**: During intermittent authentication failures
  **Failure points**:
    - Browser cache interference
  - Inconsistent page loading
  - Error message display

### Leave request processing for split shift employees [OS-639]
  **When it occurs**: When employee submits leave request for multi-segment work day
  **Failure points**:
    - Status not propagating across all shift rows
  - Incomplete leave status representation
  - Inconsistent attendance reporting

### Attempt to delete or modify API-logged attendance records [TSSD-1134]
  **When it occurs**: When attendance data requires correction
  **Failure points**:
    - API does not support data deletion
  - Cannot overwrite existing attendance logs
  - Requires manual manager intervention

### Configure EOS leave encashment daily wage calculation method [TSSD-3939]
  **When it occurs**: During employee separation process
  **Failure points**:
    - Unclear UI feedback on configuration changes
  - Potential mismatch between selected calculation method and displayed results

### Leave request creation, approval, and tracking [TSSD-2056]
  **When it occurs**: Employee submits leave request
  **Failure points**:
    - Multiple record generation
  - Inconsistent status tracking
  - Unexpected status reversion

### API attendance data synchronization without location metadata [TSSD-4151]
  **When it occurs**: During external system check-in/check-out integration
  **Failure points**:
    - Office location not transmitted
  - Custom reports show incomplete data
  - Location tracking disabled for API punches

### User checks leave balance and notices discrepancy from expected calculation [TSSD-4203]
  **When it occurs**: During leave balance review
  **Failure points**:
    - Lack of transparency in daily accrual calculation
  - Complexity of conditional policy calculations

### Monthly automated email notifications about document expirations [TSSD-1357]
  **When it occurs**: First day of each month
  **Failure points**:
    - No daily notification option
  - Fixed monthly schedule
  - Cannot customize notification frequency

### Manual salary adjustment for employee groups with different proration requirements [TSSD-4882]
  **When it occurs**: During payroll processing for organizations with mixed employee categories
  **Failure points**:
    - Single proration method applied across all employees
  - Inability to configure group-specific calculation rules

### Configure leave policy with specific accrual method [TSSD-4212]
  **When it occurs**: During HR system setup or policy migration
  **Failure points**:
    - Misunderstanding daily vs monthly accrual mechanics
  - Incorrect conditional policy configuration

### User accesses newsfeed on mobile or desktop platform expecting consistent quote display [TSSD-872]
  **When it occurs**: Daily content publication
  **Failure points**:
    - Content rendering across different screen sizes
  - Cross-platform UI consistency

### Calculate monthly salary using 26 working days standard, with dynamic adjustments for extra or fewer days worked [TSSD-4905]
  **When it occurs**: Monthly payroll processing
  **Failure points**:
    - Manual salary adjustments
  - Separate tracking of overtime and unpaid leaves
  - Lack of automatic pro-rata calculation

### Navigate to Admin Panel >> Company >> Newsfeed system posts to configure system post visibility [TSSD-120]
  **When it occurs**: When administrator wants to modify system post settings
  **Failure points**:
    - Unclear navigation
  - Limited administrative access

### Configure daily wage calculation formula in payroll settings [TSSD-2648]
  **When it occurs**: During initial payroll and leave policy setup
  **Failure points**:
    - Lack of clear override communication
  - Inconsistent formula display between modules

### API-based attendance data transmission from third-party provider to Bayzat [TSSD-3419]
  **When it occurs**: During employee check-in and check-out events
  **Failure points**:
    - Time zone conversion
  - Selective day data transmission
  - Punch log validation

### Calculate unpaid leave deduction by dividing monthly salary by 30.41 and multiplying by leave days [TSSD-1581]
  **When it occurs**: When employee takes unpaid leave
  **Failure points**:
    - Salary configuration changes after leave request
  - Incorrect daily rate calculation
  - Failure to update pending leave deductions

### View attendance page with split shift employees [TSSD-4230]
  **When it occurs**: When employees have non-continuous work schedules
  **Failure points**:
    - Multiple records for same employee can be misinterpreted as system error
  - Lack of visual consolidation for split shift records

### Employee offboarding triggers full monthly social security contribution calculation [TSSD-2561]
  **When it occurs**: During employee termination mid-month
  **Failure points**:
    - No proportional calculation of contributions
  - Full monthly amount displayed regardless of days worked

### Calculate total service days across multiple years, including potential leap years [TSSD-4179]
  **When it occurs**: During employee termination or exit process
  **Failure points**:
    - Incorrect leap year handling
  - Miscalculation of service period
  - Potential underpayment of gratuity

### Select employee departure date, compute pro-rated salary using basic salary + allowances / 30 [TSSD-2605]
  **When it occurs**: During employee exit/termination process
  **Failure points**:
    - Decimal precision calculation
  - Rounding of final settlement amount

### Calculate employee gratuity using WPS-compliant formula [TSSD-1232]
  **When it occurs**: Upon employee contract termination
  **Failure points**:
    - Decimal precision differences
  - Manual calculation mismatches

### Calculate daily wage by dividing total compensation by actual working days in month [TSSD-3832]
  **When it occurs**: During employee separation or gratuity calculation
  **Failure points**:
    - Public holiday handling
  - Variance between policy working days and actual working days
  - No manual override for working day calculation

### Employee offboarding and final salary settlement process [TSSD-4033]
  **When it occurs**: When an employee leaves the organization mid-month
  **Failure points**:
    - System cannot handle unpaid leave in EOS calculations
  - Full monthly salary deducted instead of prorated amount
  - Cannot add leave after departure date

### Monthly leave accrual crediting process [TSSD-4042]
  **When it occurs**: End of each calendar month
  **Failure points**:
    - Mid-month employee departures
  - Pro-rata leave calculations
  - Manual balance adjustments required

### Calculate EOS gratuity by segmenting service duration into rate-specific periods [TSSD-4742]
  **When it occurs**: Employee contract termination
  **Failure points**:
    - Mid-month departures
  - Incomplete month leave accrual
  - Manual calculation verification required

### Employee offboarding financial settlement process [TSSD-3908]
  **When it occurs**: Upon employee resignation, termination, or contract completion
  **Failure points**:
    - Incorrect leave request validation
  - Complex salary component calculations
  - Rigid system validation checks

### Determine working days by excluding weekends and public holidays from total month days [TSSD-4129]
  **When it occurs**: During mid-month employee onboarding or partial employment periods
  **Failure points**:
    - Incorrect workweek configuration
  - Missing public holiday calendar data
  - Lack of transparent calculation steps

### Employee checks in from office or external location [TSSD-319]
  **When it occurs**: During work hours
  **Failure points**:
    - No filtering for out-of-office locations
  - Limited reporting capabilities

### Calculate daily compensation for unpaid leave periods [OS-867]
  **When it occurs**: During payroll processing and leave management
  **Failure points**:
    - Incorrect salary rate application
  - Using current salary instead of historical rates
  - Lack of temporal salary configuration tracking

### Input employee details, compute gratuity using service duration and salary [TSSD-1625]
  **When it occurs**: Employee contract termination or expiration
  **Failure points**:
    - Leap year day inclusion
  - Departure date counting
  - Manual calculation verification

### Calculate gratuity by multiplying daily rate with total service duration, handling partial years with calendar day precision [TSSD-4779]
  **When it occurs**: Employee leaves company via resignation, termination, or contract completion
  **Failure points**:
    - Inconsistent calculation based on contract type
  - Different amounts shown for different departure reasons
  - Not accounting for 2021 UAE Labor Law changes

### Employee departure triggers automated gratuity calculation based on contract details [TSSD-3123]
  **When it occurs**: Upon employee resignation or contract termination
  **Failure points**:
    - Calculation methodology not transparent
  - Potential minor computational differences from manual calculations

### Calculate gratuity by segmenting service duration into periods with different daily rates [TSSD-2252]
  **When it occurs**: When an employee is leaving the organization
  **Failure points**:
    - Handling partial years
  - Leap year calculations
  - Communicating calculation methodology

### User identifies discrepancy in gratuity amount, compares manual calculation with system result [TSSD-4796]
  **When it occurs**: During employee departure or contract termination
  **Failure points**:
    - Inconsistent calculation logic
  - Departure reason impacts calculation
  - Contract type affects computation

### Calculate leave balance by segmenting leave cycle into completed and partial months [TSSD-3139]
  **When it occurs**: During employee leave entitlement tracking
  **Failure points**:
    - Manual calculation required
  - Lack of transparent calculation display
  - Complex prorating logic

### Attempt to change payroll cycle from standard calendar month to custom date range [TSSD-3879]
  **When it occurs**: During initial payroll system setup or organizational payment schedule restructuring
  **Failure points**:
    - Irreversible cycle change
  - Loss of historical payroll data access
  - Proration calculation disruption
  - Potential duplicate month entries

### Employee requests unpaid leave, system calculates daily rate based on current salary and working days [TSSD-2212]
  **When it occurs**: During leave request and payroll processing
  **Failure points**:
    - Dynamic daily rate recalculation
  - Holiday calendar modifications
  - Inconsistent UI display

### Input employee basic salary, contract dates, and departure details to compute gratuity [TSSD-2043]
  **When it occurs**: Employee contract termination or resignation
  **Failure points**:
    - Inflexible daily wage calculation method
  - Potential rounding discrepancies in days worked

### Export payroll template for employees with variable joining dates [TSSD-3249]
  **When it occurs**: Monthly payroll processing
  **Failure points**:
    - Incorrect proration of GOSI deductions
  - Full monthly deduction displayed for partial month

### Employee offboarding leave balance calculation [TSSD-4813]
  **When it occurs**: During employee termination or resignation
  **Failure points**:
    - Monthly proration instead of daily proration
  - Incorrect partial month accrual calculation

### Employee submits leave request, system calculates salary based on configured day type settings [TSSD-2106]
  **When it occurs**: During leave request processing
  **Failure points**:
    - Misunderstanding of day type calculation methods
  - Unexpected full salary payment
  - Lack of transparent calculation explanation

### Monthly leave salary report generation with wage calculation [TSSD-3487]
  **When it occurs**: End of monthly payroll cycle
  **Failure points**:
    - Incorrect salary base selection
  - Inappropriate social security component display
  - Country-specific configuration mismatches

### Employee requests leave, system calculates daily rate based on leave policy type [TSSD-3213]
  **When it occurs**: During leave request and payroll processing
  **Failure points**:
    - Lack of formula transparency
  - Multiple calculation methods for different leave types
  - User confusion about specific policy rules

### Compute daily rate for unpaid leave using configurable salary divisors [TSSD-1798]
  **When it occurs**: During payroll processing and end-of-service settlements
  **Failure points**:
    - Configuration changes mid-period
  - Dynamic recalculation of historical rates
  - Lack of calculation snapshot preservation

### Monthly payroll cycle finalization process [TSSD-3880]
  **When it occurs**: End of each payroll month
  **Failure points**:
    - Inability to modify closed cycles
  - No backend correction mechanism
  - Permanent locking of payment entries

### User submits leave request, system calculates prorated salary based on policy configuration [TSSD-4731]
  **When it occurs**: During employee leave periods
  **Failure points**:
    - Misalignment between user expectations and system calculation logic
  - Inflexible divisor configuration

### Process EOS for employee with departure in previous month [TSSD-2597]
  **When it occurs**: During monthly payroll cycle closure
  **Failure points**:
    - Incorrect prorated salary calculation
  - Automatic deduction generation
  - Salary arrears miscalculation

### User configures leave salary formula with basic salary, allowances, and working days divisor [TSSD-3402]
  **When it occurs**: During financial reporting preparation
  **Failure points**:
    - System defaults to calendar days instead of working days
  - Formula configuration not respected by calculation engine

### Input employee departure date and calculate final salary based on working days [TSSD-3995]
  **When it occurs**: Employee termination or resignation
  **Failure points**:
    - Public holiday handling
  - Day-level salary reduction
  - Departure date interpretation

### Automatic deletion of future leave requests during employee offboarding [TSSD-4720]
  **When it occurs**: When leave request dates extend beyond employee's departure date
  **Failure points**:
    - No warning before leave request deletion
  - No manual override option
  - Potential loss of leave and payroll information

### Leave accrual balance computation using current system methodology [TSSD-291]
  **When it occurs**: Monthly/periodic leave balance updates
  **Failure points**:
    - Uses calendar days instead of working days
  - Calculates from post-deduction salary
  - Requires manual reconciliation

### User downloads leave accrual report and compares projected salary against system calculations [TSSD-4543]
  **When it occurs**: Monthly or quarterly reporting cycle
  **Failure points**:
    - Lack of clear calculation explanation
  - Mismatch between projection and actual salary

### Employee checks leave balance across work cycles [TSSD-3822]
  **When it occurs**: At cycle end or during balance verification
  **Failure points**:
    - Leap year hire date calculations
  - Partial cycle allowance computation
  - Daily conditional allowance tracking

### Employee checks leave balance across multiple cycles [TSSD-4243]
  **When it occurs**: During leave planning or request submission
  **Failure points**:
    - Complex balance projection logic
  - Negative balance representations
  - Cross-cycle calculation complexity

### Configure leave policy accrual method based on conditional/non-conditional policy type [TSSD-3082]
  **When it occurs**: During leave policy setup
  **Failure points**:
    - Toggle misconfiguration
  - Incorrect accrual method selection
  - Mid-month employee exit

### Submit leave request spanning multiple days including public holiday [TSSD-2937]
  **When it occurs**: Employee taking leave during month with public holidays
  **Failure points**:
    - Incorrect working days calculation
  - Public holiday exclusion from salary computation

### User configures leave encashment calculation method [TSSD-3779]
  **When it occurs**: During payroll configuration
  **Failure points**:
    - Configuration not consistently applied across reporting modules
  - Report generation uses default calculation instead of configured method

### Download leave salary accrual report and verify cumulative calculations [TSSD-3648]
  **When it occurs**: Monthly financial reporting
  **Failure points**:
    - Unexpected variations in daily wage calculations
  - Misunderstanding of working days configuration

### Calculate employee compensation during leave periods [TSSD-2321]
  **When it occurs**: When employee takes partial month leave
  **Failure points**:
    - Mismatched daily wage divisors
  - Independent configuration of leave and proration calculations

### Leave salary calculation and submission process [TSSD-3226]
  **When it occurs**: When employee takes approved leave
  **Failure points**:
    - Incorrect day count conversion
  - Miscalculation of daily rate
  - Mismatch between approved days and calculated days

### Calculate leave salary across multiple payroll months using daily rate formula [TSSD-3275]
  **When it occurs**: When employee takes leave spanning multiple months
  **Failure points**:
    - Lack of calculation transparency
  - Complex multi-month proration logic

### Calculate leave salary by prorating specific components and processing remaining salary [TSSD-4387]
  **When it occurs**: During employee leave periods
  **Failure points**:
    - Inability to exclude specific allowances
  - Full payment of excluded salary components
  - Lack of granular prorating options

### Create and map leave salary policies to annual leave policies [TSSD-2934]
  **When it occurs**: During payroll and HR policy configuration
  **Failure points**:
    - Multiple active policies cause calculation conflicts
  - Policy changes do not propagate consistently
  - Minimum days threshold validation unreliable

### Configure leave policy with percentage-based payment [TSSD-3654]
  **When it occurs**: During payroll and leave policy setup
  **Failure points**:
    - Cannot exclude specific salary components
  - Deductions calculated on total salary
  - No granular salary component control

### Global proration formula application across all employee types [TSSD-4375]
  **When it occurs**: During payroll configuration and salary calculation
  **Failure points**:
    - Cannot differentiate proration methods by employee category
  - Single formula applies uniformly
  - No group-specific calculation support

### Bulk air ticket allowance allocation at renewal cycle end [TSSD-3146]
  **When it occurs**: End of employee renewal cycle
  **Failure points**:
    - Cannot access partial tickets
  - No daily pro-ration mechanism
  - Rigid allocation timing

### Verify daily wage proration calculation based on work week configuration [TSSD-4292]
  **When it occurs**: During payroll processing or salary review
  **Failure points**:
    - Misunderstanding of work week configuration
  - Incorrect expectation of working days calculation

### Daily automated GOSI percentage data retrieval at 5 AM DBX time [OS-3034]
  **When it occurs**: Daily at 5 AM DBX time zone
  **Failure points**:
    - Timestamp inconsistency
  - Time zone synchronization
  - Backend process timing

### Verify end of service gratuity calculation for employee termination [TSSD-375]
  **When it occurs**: During employee departure/contract termination
  **Failure points**:
    - Lack of transparent calculation logic
  - Inconsistent documentation
  - Unclear contract type handling

### Backend manual database update for leave balance correction [TSSD-3789]
  **When it occurs**: When leave balance cannot be corrected through standard UI
  **Failure points**:
    - No direct UI for balance adjustment
  - Risk of overwriting attendance records
  - Requires technical intervention

### Navigate to Settings > Payroll > Leave Salary Policy to configure calculation method [TSSD-4349]
  **When it occurs**: During payroll setup or policy adjustment
  **Failure points**:
    - Misunderstanding configuration options
  - Incorrect selection of calculation method
  - Incomplete allowance configuration

### Process payroll for employee with mid-month departure [TSSD-3058]
  **When it occurs**: During employee offboarding
  **Failure points**:
    - Proration logic fails for future departure dates
  - Full salary displayed instead of prorated amount

### Configure salary proration with custom divisor, calculate daily rate, multiply by actual calendar days worked [TSSD-3512]
  **When it occurs**: During payroll processing for employees with partial month employment
  **Failure points**:
    - Misunderstanding of two-step calculation process
  - Confusion about day-counting methodology
  - Expectations of uniform day calculation

### Employee offboarding salary proration calculation [TSSD-2518]
  **When it occurs**: During employee resignation or termination
  **Failure points**:
    - Daily rate configuration change after offboarding
  - System not auto-recalculating proration
  - Locked calculation based on original configuration

### Calculate daily wage by dividing total monthly salary by working days, then multiply by days worked [TSSD-4303]
  **When it occurs**: Employee joins or leaves mid-month
  **Failure points**:
    - User misunderstanding of working day calculation
  - Lack of configuration flexibility

### Manually download and filter processed time adjustment entries [TSSD-463]
  **When it occurs**: When needing to separate time off from payroll entries
  **Failure points**:
    - No native filtering for processed entries
  - Manual data export required
  - Time-consuming categorization process

### Log multiple work activities with individual start/end times [TSSD-696]
  **When it occurs**: Daily time tracking
  **Failure points**:
    - Manual total hours calculation required
  - No automatic daily hours aggregation

### Employee logs task, potentially modifies task date after initial entry [TSSD-4409]
  **When it occurs**: During daily time tracking process
  **Failure points**:
    - Date modification causes unexpected timesheet display changes
  - Tasks appear to disappear from original logged date
  - No clear visual indication of date modification

### Admin attempts to edit system-generated leave deduction amount [TSSD-3946]
  **When it occurs**: During EOS calculation preparation
  **Failure points**:
    - System prevents editing auto-generated deductions
  - Cannot set deduction amount to zero
  - Inflexible calculation base selection

### Employee submits multi-month unpaid leave request [TSSD-2384]
  **When it occurs**: During payroll cycle spanning multiple months
  **Failure points**:
    - Cannot manually adjust used days
  - Deductions accumulate across closed months
  - Potential negative salary calculation

### Modify daily wage calculation and delete leave transaction [TSSD-2532]
  **When it occurs**: During payroll cycle recalculation
  **Failure points**:
    - Duplicate deduction generation
  - Persistent deductions after leave request deletion

### Cross-month unpaid leave processing and payslip generation [TSSD-3044]
  **When it occurs**: During payroll cycle when leave spans multiple months
  **Failure points**:
    - Inconsistent day count display
  - Deduction amount vs day count mismatch
  - Retrospective leave approval handling

### Calculate daily wage by dividing total monthly salary by working days, excluding weekends and public holidays [TSSD-4464]
  **When it occurs**: During payroll processing for employees with unpaid leave
  **Failure points**:
    - Public holiday additions after leave request
  - Inconsistent working day calculations
  - Lack of real-time module synchronization

### Calculate daily wage for unpaid leave using custom divisor [TSSD-4368]
  **When it occurs**: During monthly payroll processing
  **Failure points**:
    - Deduction amount exceeds expected monthly salary
  - Lack of transparent calculation explanation

### Configure daily wage calculation method in Payroll Configuration, then set up corresponding Leave Policy [TSSD-4947]
  **When it occurs**: During payroll and leave policy setup
  **Failure points**:
    - Inconsistent UI display between Payroll Configuration and Leave Policy
  - Overwrite option hides actual calculation method
  - Difficulty understanding which calculation method is active

### Employee takes unpaid leave, system applies daily rate calculation based on configured leave policy [TSSD-1746]
  **When it occurs**: During payroll processing
  **Failure points**:
    - User unaware of specific policy details
  - Multiple policies with similar names
  - Complex calculation formulas

### Generate leave salary accrual report using system's predefined calendar day calculation [TSSD-1227]
  **When it occurs**: Monthly financial reporting cycle
  **Failure points**:
    - Cannot use custom day divisors
  - Rigid calculation method
  - No support for non-standard accounting practices

### HR manually marks employee as absent to trigger notification workflow [TSSD-3438]
  **When it occurs**: When daily attendance report is reviewed
  **Failure points**:
    - No automatic absence detection
  - Requires manual 'mark as absent' action
  - System-default absences not recognized

### Daily early morning check of previous day's attendance records for absent employees [TSSD-3507]
  **When it occurs**: Configured daily at specific time (e.g., 7 AM)
  **Failure points**:
    - Inconsistent event triggering
  - Configuration complexity
  - Cross-company variability

### Monthly salary deduction calculation for unpaid leave days [TSSD-1301]
  **When it occurs**: During payroll processing
  **Failure points**:
    - Incorrect display of daily rate in remarks
  - Potential user confusion with UI

### Unpaid leave deduction calculation process involving global configuration override [TSSD-1753]
  **When it occurs**: During payroll processing for employees with unpaid leave
  **Failure points**:
    - Global daily rate configuration overrides policy-specific settings
  - Incorrect salary component selection
  - Miscalculation of working days divisor

### Calculate daily rate by dividing (basic salary + allowances) by working days, excluding public holidays [TSSD-1807]
  **When it occurs**: During payroll processing for months with employee leave
  **Failure points**:
    - Displaying daily rate from incorrect month
  - Recalculating instead of storing initial daily rate



  ## System Rules & Constraints
  - **Rule**: Only one proration method can be applied organization-wide
    - **How users discover**: During payroll setup process
    - **Impact**: Prevents configuring category-specific proration rules
    - **Evidence**: [TSSD-4876]

  - **Rule**: Leave accrual calculated only after full month completion
    - **How users discover**: During employee offboarding process
    - **Impact**: Employees lose potential leave compensation for partial month work
    - **Evidence**: [TSSD-2499]

  - **Rule**: Daily Rate Calculator does not allow direct rate configuration for Leave Encashment
    - **How users discover**: During payroll setup process
    - **Impact**: Increased administrative complexity, potential calculation errors
    - **Evidence**: [OS-446]

  - **Rule**: Attendance data currently only displayed in list view format
    - **How users discover**: When attempting to analyze attendance records
    - **Impact**: Reduced efficiency in attendance tracking and analysis
    - **Evidence**: [TSSD-3774]

  - **Rule**: Must mention employee or manager to trigger notification
    - **How users discover**: Through failed notification attempts
    - **Impact**: Comments may not be communicated effectively without proper mentioning
    - **Evidence**: [TSSD-1517]

  - **Rule**: Attendance status depends on work timing configuration and late arrival settings
    - **How users discover**: Through attendance reports and color-coded status indicators
    - **Impact**: Potential incorrect attendance marking if settings are misconfigured
    - **Evidence**: [TSSD-713]

  - **Rule**: Hours calculated until employee checks out or shift ends
    - **How users discover**: Through attendance report generation
    - **Impact**: Can display up to 24 hours if no checkout occurs
    - **Evidence**: [TSSD-1433]

  - **Rule**: Attendance data must maintain consistency across reporting views
    - **How users discover**: By comparing multiple attendance reports
    - **Impact**: Potential misunderstanding of employee attendance records
    - **Evidence**: [TSSD-1908]

  - **Rule**: One check-in/check-out cycle per day
    - **How users discover**: By attempting multiple check-ins
    - **Impact**: Prevents duplicate attendance entries
    - **Evidence**: [TSSD-430]

  - **Rule**: Managers must manually click 'Mark as Absent' for no check-in scenarios
    - **How users discover**: Through daily attendance reporting process
    - **Impact**: High administrative overhead for large organizations
    - **Evidence**: [TSSD-2206]

  - **Rule**: Conditional leave policies enforce daily accrual
    - **How users discover**: During policy configuration and implementation
    - **Impact**: Prevents monthly accrual for conditional leave types
    - **Evidence**: [TSSD-1453]

  - **Rule**: Browser cache management impacts login reliability
    - **How users discover**: Through repeated login attempts and support guidance
    - **Impact**: Unpredictable authentication experience
    - **Evidence**: [TSSD-2266]

  - **Rule**: Leave requests can only be processed for entire shift segments
    - **How users discover**: Through inconsistent status updates in attendance reports
    - **Impact**: Reduced accuracy in attendance tracking for complex schedules
    - **Evidence**: [OS-639]

  - **Rule**: Biometric attendance API logs are immutable after initial submission
    - **How users discover**: Through failed deletion attempts
    - **Impact**: Prevents direct data modification
    - **Evidence**: [TSSD-1134]

  - **Rule**: Leave encashment can be calculated using basic salary or basic salary plus allowances
    - **How users discover**: Through configuration interface during EOS setup
    - **Impact**: Determines final leave settlement amount for departing employees
    - **Evidence**: [TSSD-3939]

  - **Rule**: Leave requests can be created for full or partial days
    - **How users discover**: Through system interface and approval workflow
    - **Impact**: Enables flexible time-off management
    - **Evidence**: [TSSD-2056]

  - **Rule**: Superadmin approval required for leave requests
    - **How users discover**: Approval workflow and notification system
    - **Impact**: Centralized leave management control
    - **Evidence**: [TSSD-2056]

  - **Rule**: API integration does not support office location parameter
    - **How users discover**: By comparing daily vs custom attendance reports
    - **Impact**: Reduced reporting accuracy and granularity
    - **Evidence**: [TSSD-4151]

  - **Rule**: Conditional leave policies trigger daily pro-rata accrual calculation
    - **How users discover**: Through support inquiry or unexpected balance differences
    - **Impact**: More precise but complex leave tracking
    - **Evidence**: [TSSD-4203]

  - **Rule**: Document notifications only sent monthly
    - **How users discover**: Through support interactions and platform usage
    - **Impact**: Limited flexibility in document tracking and renewal processes
    - **Evidence**: [TSSD-1357]

  - **Rule**: Current system applies uniform salary proration across all employee types
    - **How users discover**: During payroll setup and processing
    - **Impact**: Requires manual adjustments for employee groups with unique proration needs
    - **Evidence**: [TSSD-4882]

  - **Rule**: Daily accrual requires conditional leave policy
    - **How users discover**: Through support interactions or system documentation
    - **Impact**: Limited default accrual flexibility
    - **Evidence**: [TSSD-4212]

  - **Rule**: Newsfeed content must be responsive and maintain formatting across platforms
    - **How users discover**: Through visual rendering inconsistencies
    - **Impact**: Reduced content readability and engagement
    - **Evidence**: [TSSD-872]

  - **Rule**: Annual working days calculation: 365 - 52 (weekly offs) = 313 days
    - **How users discover**: During payroll configuration and salary discussions
    - **Impact**: Determines baseline for daily wage calculations
    - **Evidence**: [TSSD-4905]

  - **Rule**: Individual system post types can be independently toggled
    - **How users discover**: Through administrative interface exploration
    - **Impact**: Provides granular content management
    - **Evidence**: [TSSD-120]

  - **Rule**: Payroll settings always override leave policy formulas for daily wage calculations
    - **How users discover**: Through greyed-out formulas and unexpected calculation results
    - **Impact**: Users must manually align configurations across modules
    - **Evidence**: [TSSD-2648]

  - **Rule**: Data must be transmitted via compatible API protocols
    - **How users discover**: Through integration configuration and support interactions
    - **Impact**: Requires precise data transmission and validation
    - **Evidence**: [TSSD-3419]

  - **Rule**: Deductions calculated using monthly salary divided by 30.41
    - **How users discover**: Through payroll processing and manual verification
    - **Impact**: Enables precise pro-rata salary adjustments
    - **Evidence**: [TSSD-1581]

  - **Rule**: Each shift segment generates a separate attendance record
    - **How users discover**: By observing multiple entries for same employee on attendance page
    - **Impact**: Detailed time tracking at shift level, potential initial user confusion
    - **Evidence**: [TSSD-4230]

  - **Rule**: Social security contributions calculated on full monthly basis
    - **How users discover**: During payroll transaction submission for offboarded employees
    - **Impact**: Inaccurate reporting of employer contributions
    - **Evidence**: [TSSD-2561]

  - **Rule**: Default to 365-day year calculation
    - **How users discover**: Through discrepancies in gratuity calculations
    - **Impact**: Potential financial loss for employees
    - **Evidence**: [TSSD-4179]

  - **Rule**: Daily wage calculated as (basic salary + allowances) / 30
    - **How users discover**: During end of service settlement computation
    - **Impact**: Potential minor financial discrepancies due to decimal handling
    - **Evidence**: [TSSD-2605]

  - **Rule**: Use 21 days per service year for gratuity calculation
    - **How users discover**: Through platform calculation or support inquiry
    - **Impact**: Determines base gratuity amount calculation
    - **Evidence**: [TSSD-1232]

  - **Rule**: Convert partial years using exact decimal (days/365)
    - **How users discover**: By comparing manual vs platform calculations
    - **Impact**: Enables precise fractional year computation
    - **Evidence**: [TSSD-1232]

  - **Rule**: Daily wage calculated using actual working days, not policy-defined working days
    - **How users discover**: By comparing manual calculations with system output
    - **Impact**: Potential discrepancies in end of service benefit amounts
    - **Evidence**: [TSSD-3832]

  - **Rule**: EOS calculation uses full monthly salary by default
    - **How users discover**: Through incorrect terminal benefit calculations
    - **Impact**: Inaccurate compensation settlements for mid-month leavers
    - **Evidence**: [TSSD-4033]

  - **Rule**: Leave is only credited at month-end
    - **How users discover**: During end-of-service processing
    - **Impact**: Requires manual intervention for partial month departures
    - **Evidence**: [TSSD-4042]

  - **Rule**: Monthly leave accrual only grants leave days at month end
    - **How users discover**: During EOS calculation for mid-month departures
    - **Impact**: Leave days for incomplete months are not included in gratuity
    - **Evidence**: [TSSD-4742]

  - **Rule**: Leave requests must be cleared before EOS submission
    - **How users discover**: Error messages blocking transaction submission
    - **Impact**: Prevents legitimate EOS processing even without actual leave conflicts
    - **Evidence**: [TSSD-3908]

  - **Rule**: Proration calculation requires accurate working day count excluding weekends and holidays
    - **How users discover**: Through manual verification or support ticket investigation
    - **Impact**: Determines precise employee compensation for partial employment periods
    - **Evidence**: [TSSD-4129]

  - **Rule**: Location detection based on pre-configured office geofences
    - **How users discover**: Through check-in location labeling
    - **Impact**: Requires precise office location configuration
    - **Evidence**: [TSSD-319]

  - **Rule**: Daily rates must be calculated using salary configuration at the time of leave
    - **How users discover**: Through payroll discrepancies and manual reconciliation
    - **Impact**: Potential compensation inaccuracies
    - **Evidence**: [OS-867]

  - **Rule**: Service days calculated by dividing total days by 365
    - **How users discover**: Manual cross-checking of system calculations
    - **Impact**: Minor calculation variations possible with leap years
    - **Evidence**: [TSSD-1625]

  - **Rule**: Gratuity calculation must use daily rate × total service duration
    - **How users discover**: By comparing calculated amounts with expected values
    - **Impact**: Determines final financial settlement for departing employees
    - **Evidence**: [TSSD-4779]

  - **Rule**: Gratuity calculated using system-defined proprietary formula
    - **How users discover**: Through support inquiries or discrepancy investigations
    - **Impact**: Users cannot directly modify calculation logic
    - **Evidence**: [TSSD-3123]

  - **Rule**: First 5 years calculated at 21 days per year, subsequent years at 30 days per year
    - **How users discover**: Through manual comparison or support inquiry
    - **Impact**: Determines gratuity calculation methodology
    - **Evidence**: [TSSD-2252]

  - **Rule**: Use 366-day divisor for periods containing leap years
    - **How users discover**: Through detailed calculation review
    - **Impact**: Affects precise day counting for partial years
    - **Evidence**: [TSSD-2252]

  - **Rule**: Gratuity calculation depends on departure reason and contract type
    - **How users discover**: Through discrepancies in calculated amounts
    - **Impact**: Requires manual workarounds to generate correct calculation
    - **Evidence**: [TSSD-4796]

  - **Rule**: Leave balance calculated using monthly and daily accrual rates
    - **How users discover**: Through support team explanation
    - **Impact**: Requires manual intervention to understand calculation
    - **Evidence**: [TSSD-3139]

  - **Rule**: Payroll cycles cannot be modified after initial configuration
    - **How users discover**: Through support interactions when attempting cycle changes
    - **Impact**: Permanent system configuration with no rollback mechanism
    - **Evidence**: [TSSD-3879]

  - **Rule**: Daily rate calculation: (Basic Salary + Allowances) / Working Days
    - **How users discover**: Through payroll deduction details
    - **Impact**: Deduction amount varies based on working day count
    - **Evidence**: [TSSD-2212]

  - **Rule**: Daily wage calculated as Basic Salary / 30
    - **How users discover**: During gratuity calculation verification
    - **Impact**: Cannot customize daily wage computation method
    - **Evidence**: [TSSD-2043]

  - **Rule**: GOSI deduction calculations must reflect actual working days
    - **How users discover**: By comparing exported reports with actual payroll tables
    - **Impact**: Potential financial reporting inaccuracies
    - **Evidence**: [TSSD-3249]

  - **Rule**: Leave accrual defaults to monthly calculation
    - **How users discover**: During final settlement process
    - **Impact**: Potential minor discrepancies in leave balance
    - **Evidence**: [TSSD-4813]

  - **Rule**: Leave salary can be calculated using 'Custom Days' or 'Calendar Days' day type
    - **How users discover**: Through payroll configuration or unexpected calculation results
    - **Impact**: Significant variation in salary computation method
    - **Evidence**: [TSSD-2106]

  - **Rule**: Daily wage calculation must use predefined salary base
    - **How users discover**: By reviewing generated reports
    - **Impact**: Potential financial reporting inaccuracies
    - **Evidence**: [TSSD-3487]

  - **Rule**: Different leave types use distinct salary deduction formulas
    - **How users discover**: Through payroll statements or support interactions
    - **Impact**: Potential misunderstanding of salary calculations
    - **Evidence**: [TSSD-3213]

  - **Rule**: Daily rate can be calculated using basic/working days or basic+allowances/calendar days
    - **How users discover**: Through payroll configuration settings
    - **Impact**: Directly affects unpaid leave deduction amount
    - **Evidence**: [TSSD-1798]

  - **Rule**: Closed payroll cycles are completely immutable
    - **How users discover**: Through support ticket escalation
    - **Impact**: Prevents retroactive payment corrections
    - **Evidence**: [TSSD-3880]

  - **Rule**: Daily wage calculated using fixed policy-configured divisor
    - **How users discover**: Through salary calculation results
    - **Impact**: Consistent but potentially counterintuitive salary calculations
    - **Evidence**: [TSSD-4731]

  - **Rule**: System automatically generates EOS deduction for previous month's full salary
    - **How users discover**: During payroll processing
    - **Impact**: Requires manual verification and potential adjustment
    - **Evidence**: [TSSD-2597]

  - **Rule**: Calculation engine defaults to calendar days for leave salary computation
    - **How users discover**: By comparing expected vs actual report calculations
    - **Impact**: Inaccurate leave salary reporting
    - **Evidence**: [TSSD-3402]

  - **Rule**: Public holidays are automatically excluded from working days salary calculation
    - **How users discover**: Through unexpected salary computation results
    - **Impact**: Rigid salary proration that may not match user expectations
    - **Evidence**: [TSSD-3995]

  - **Rule**: Leave requests must not extend beyond employee's departure date
    - **How users discover**: Through automatic deletion during offboarding process
    - **Impact**: Future leave requests are systematically removed
    - **Evidence**: [TSSD-4720]

  - **Rule**: Leave accrual calculated using post-GOSI salary
    - **How users discover**: Through manual verification of leave balance
    - **Impact**: Potential underestimation of leave entitlements
    - **Evidence**: [TSSD-291]

  - **Rule**: Leave salary projection uses Leave Availed * Daily Wage formula
    - **How users discover**: By comparing report values with actual leave salary requests
    - **Impact**: Potential user confusion about compensation calculation
    - **Evidence**: [TSSD-4543]

  - **Rule**: Leave cycle starts based on hire/renewal date
    - **How users discover**: Through balance discrepancies
    - **Impact**: Affects conditional allowance calculations
    - **Evidence**: [TSSD-3822]

  - **Rule**: Maximum 25 days can be carried forward between leave cycles
    - **How users discover**: Through balance calculations and support interactions
    - **Impact**: Limits total available leave balance
    - **Evidence**: [TSSD-4243]

  - **Rule**: Accrual frequency depends on policy type and toggle state
    - **How users discover**: During leave balance calculation or EOS settlement
    - **Impact**: Potential inaccurate leave encashment
    - **Evidence**: [TSSD-3082]

  - **Rule**: Public holidays are excluded from leave day counts but should be included in working days
    - **How users discover**: Comparing manual calculations with system-generated prorated salary
    - **Impact**: Potential salary calculation discrepancies
    - **Evidence**: [TSSD-2937]

  - **Rule**: Leave salary can be calculated using multiple methods (working days, fixed 30 days)
    - **How users discover**: Through payroll configuration interface
    - **Impact**: Determines accuracy of leave salary reporting
    - **Evidence**: [TSSD-3779]

  - **Rule**: Leave salary accrual calculated based on working days per month
    - **How users discover**: By comparing monthly reports and noticing calculation differences
    - **Impact**: Cumulative totals vary month-to-month due to working day differences
    - **Evidence**: [TSSD-3648]

  - **Rule**: Leave salary and salary proration use independent daily wage configurations
    - **How users discover**: Through calculation discrepancies
    - **Impact**: Requires manual configuration alignment
    - **Evidence**: [TSSD-2321]

  - **Rule**: Daily rate calculated as monthly salary divided by 30
    - **How users discover**: Through payroll documentation or support interactions
    - **Impact**: Determines base calculation for leave salary
    - **Evidence**: [TSSD-3226]

  - **Rule**: Use 30.41 days per month for salary proration
    - **How users discover**: Through manual calculation or support explanation
    - **Impact**: Precise but complex salary calculation
    - **Evidence**: [TSSD-3275]

  - **Rule**: Leave salary calculated using (Basic + Housing) / 30 * leave days
    - **How users discover**: Through payroll processing and salary calculations
    - **Impact**: Inconsistent handling of salary components during leave
    - **Evidence**: [TSSD-4387]

  - **Rule**: Only one leave salary policy should be active per employee group
    - **How users discover**: Through unexpected calculation results
    - **Impact**: Incorrect leave salary calculations if multiple policies are active
    - **Evidence**: [TSSD-2934]

  - **Rule**: Leave payments calculated using daily rate formula
    - **How users discover**: During leave policy configuration and payroll processing
    - **Impact**: Limited flexibility in salary component handling
    - **Evidence**: [TSSD-3654]

  - **Rule**: Only one global proration formula can be configured
    - **How users discover**: During payroll setup and configuration process
    - **Impact**: Prevents flexible, group-specific salary calculations
    - **Evidence**: [TSSD-4375]

  - **Rule**: Air ticket allowances are added in full at renewal cycle end
    - **How users discover**: Through payroll system configuration
    - **Impact**: Limited flexibility in ticket allocation
    - **Evidence**: [TSSD-3146]

  - **Rule**: Proration calculation depends entirely on work week configuration
    - **How users discover**: Through payroll processing and salary review
    - **Impact**: Salary calculations can vary significantly based on work week setup
    - **Evidence**: [TSSD-4292]

  - **Rule**: Backend process executes daily at 5 AM DBX time
    - **How users discover**: Through timestamp observation and reporting interface
    - **Impact**: Potential confusion about exact data retrieval moment
    - **Evidence**: [OS-3034]

  - **Rule**: Different calculation rules for limited vs unlimited contracts
    - **How users discover**: Through manual verification and support inquiries
    - **Impact**: Potential miscalculation and user confusion
    - **Evidence**: [TSSD-375]

  - **Rule**: Cannot backdate leave balance changes if daily attendance records exist
    - **How users discover**: Through support ticket escalation
    - **Impact**: Prevents simple leave balance corrections
    - **Evidence**: [TSSD-3789]

  - **Rule**: Leave salary calculated first, then deducted from active salary cycle
    - **How users discover**: Through support interactions or manual exploration
    - **Impact**: Affects total compensation calculation
    - **Evidence**: [TSSD-4349]

  - **Rule**: Can choose between calendar days and custom day calculations
    - **How users discover**: Configuration settings
    - **Impact**: Determines daily wage computation method
    - **Evidence**: [TSSD-4349]

  - **Rule**: Salary proration depends on departure date relative to payroll processing date
    - **How users discover**: Through payroll calculations during offboarding
    - **Impact**: Inconsistent salary calculations across different departure scenarios
    - **Evidence**: [TSSD-3058]

  - **Rule**: Daily rate calculated using configured divisor (e.g., 30 days)
    - **How users discover**: Through payroll configuration and support interactions
    - **Impact**: Enables flexible salary computation strategies
    - **Evidence**: [TSSD-3512]

  - **Rule**: Proration calculation locked after transaction submission
    - **How users discover**: Through payroll processing errors
    - **Impact**: Manual intervention required to recalculate
    - **Evidence**: [TSSD-2518]

  - **Rule**: Weekends are automatically excluded from working day calculations
    - **How users discover**: Through salary proration results
    - **Impact**: Consistent, standardized salary calculations
    - **Evidence**: [TSSD-4303]

  - **Rule**: Filtering only available for approved entries
    - **How users discover**: Attempting to filter processed entries
    - **Impact**: Requires manual data manipulation
    - **Evidence**: [TSSD-463]

  - **Rule**: Timesheets track individual activity hours but cannot calculate daily total
    - **How users discover**: Through manual calculation attempts
    - **Impact**: Increased user cognitive load and time spent on administrative tasks
    - **Evidence**: [TSSD-696]

  - **Rule**: Task dates can be modified retroactively without comprehensive tracking
    - **How users discover**: Through unexpected timesheet display changes
    - **Impact**: Reduced trust in time tracking system's accuracy
    - **Evidence**: [TSSD-4409]

  - **Rule**: Auto-generated deductions cannot be directly edited
    - **How users discover**: Attempting manual modification in payroll interface
    - **Impact**: Reduces administrative payroll configuration flexibility
    - **Evidence**: [TSSD-3946]

  - **Rule**: Unpaid leave requests cannot have manual 'used days' adjustment
    - **How users discover**: During payroll processing and leave balance reconciliation
    - **Impact**: Prevents accurate leave balance tracking for complex leave scenarios
    - **Evidence**: [TSSD-2384]

  - **Rule**: Leave request deletion does not automatically remove associated payroll deductions
    - **How users discover**: Through manual payroll review and unexpected deduction persistence
    - **Impact**: Requires manual deduction removal and introduces potential financial discrepancies
    - **Evidence**: [TSSD-2532]

  - **Rule**: Payslip must display total deduction amount and corresponding leave days
    - **How users discover**: During payroll review and salary verification
    - **Impact**: Potential compliance and reporting issues
    - **Evidence**: [TSSD-3044]

  - **Rule**: Daily wage calculation uses basic salary + allowance divided by working days
    - **How users discover**: During payroll processing and salary deduction review
    - **Impact**: Precise but fragile calculation method susceptible to configuration changes
    - **Evidence**: [TSSD-4464]

  - **Rule**: Use 30.42 days divisor for daily wage calculation
    - **How users discover**: Through payroll support interactions
    - **Impact**: Precise but potentially confusing salary deduction method
    - **Evidence**: [TSSD-4368]

  - **Rule**: Payroll Configuration 'Overwrite' option takes precedence over Leave Policy settings
    - **How users discover**: Through configuration attempts and support interactions
    - **Impact**: Users cannot edit leave policy when overwrite is enabled
    - **Evidence**: [TSSD-4947]

  - **Rule**: Daily rate can be calculated using Basic/Calendar Days or Basic+Allowances/Calendar Days
    - **How users discover**: During payroll review or after salary deduction
    - **Impact**: Potential misunderstanding of leave policy calculations
    - **Evidence**: [TSSD-1746]

  - **Rule**: Daily wage calculation uses exact calendar days for the month
    - **How users discover**: By reviewing report calculations
    - **Impact**: Prevents custom divisor configurations
    - **Evidence**: [TSSD-1227]

  - **Rule**: Workflow only triggers on manual 'mark as absent' action
    - **How users discover**: Through failed notification attempts
    - **Impact**: Breaks automated absence tracking workflow
    - **Evidence**: [TSSD-3438]

  - **Rule**: Workflow only checks attendance status, not T&P adjustments
    - **How users discover**: Through configuration and system behavior
    - **Impact**: Limited to raw attendance status tracking
    - **Evidence**: [TSSD-3507]

  - **Rule**: Daily rate calculated by dividing monthly salary by actual calendar days
    - **How users discover**: Through payroll remarks and deduction calculations
    - **Impact**: Precise unpaid leave financial tracking
    - **Evidence**: [TSSD-1301]

  - **Rule**: Global daily rate configuration takes precedence over policy-level settings
    - **How users discover**: Through unexpected salary deduction calculations
    - **Impact**: Limited ability to customize leave deduction calculations
    - **Evidence**: [TSSD-1753]

  - **Rule**: Daily rate must be calculated based on working days in the leave occurrence month
    - **How users discover**: By comparing displayed rate with expected calculation
    - **Impact**: Ensures fair and accurate leave deduction
    - **Evidence**: [TSSD-1807]

  

  ## Known Bugs & Failures
  ### Cannot configure multiple proration methods within same organization [TSSD-4876]
  **Severity**: high
  **Root cause hypothesis**: Inflexible payroll configuration architecture
  **Current status**: Feature request pending implementation

  ### No pro-rated leave accrual for mid-month departures [TSSD-2499]
  **Severity**: medium
  **Root cause hypothesis**: Rigid monthly calculation logic
  **Current status**: Requires manual workaround

  ### Limited Daily Rate configuration capabilities in Leave Encashment module [OS-446]
  **Severity**: medium
  **Root cause hypothesis**: Incomplete feature implementation
  **Current status**: Feature gap acknowledged but not prioritized

  ### Region-specific comment and notification delivery failures [TSSD-1517]
  **Severity**: high
  **Root cause hypothesis**: Potential regional deployment configuration differences
  **Current status**: Intermittent failures in KSA accounts

  ### Inconsistent attendance marking across different time periods [TSSD-713]
  **Severity**: medium
  **Root cause hypothesis**: Misconfigured work timing and late arrival settings
  **Current status**: Configuration-dependent attendance tracking

  ### No mechanism to flag suspicious attendance records [TSSD-1433]
  **Severity**: high
  **Root cause hypothesis**: Lack of checkout validation logic
  **Current status**: System assumes all checkouts are legitimate

  ### Attendance location status inconsistent across reporting views [TSSD-1908]
  **Severity**: medium
  **Root cause hypothesis**: Lack of unified data synchronization mechanism
  **Current status**: Unresolved data mapping issue

  ### Lack of clear UI feedback about attendance cycle status [TSSD-430]
  **Severity**: low
  **Root cause hypothesis**: Minimal user guidance in attendance tracking interface
  **Current status**: Ongoing UX limitation

  ### Lack of automated absence detection for employees with no attendance record [TSSD-2206]
  **Severity**: high
  **Root cause hypothesis**: System design assumes manual manager intervention
  **Current status**: Unresolved feature gap

  ### No flexibility in accrual frequency for conditional leave policies [TSSD-1453]
  **Severity**: medium
  **Root cause hypothesis**: System design prioritizes scalability over configuration flexibility
  **Current status**: Hardcoded daily accrual for conditional leave

  ### Intermittent Login Access Failures [TSSD-2266]
  **Severity**: medium
  **Root cause hypothesis**: Browser cache and cookie management complexity
  **Current status**: Requires manual user intervention

  ### Leave status not consistently displayed for split shifts [OS-639]
  **Severity**: medium
  **Root cause hypothesis**: Insufficient logic for handling multi-segment shift configurations
  **Current status**: Partial status propagation

  ### Unable to delete or re-push attendance API logs [TSSD-1134]
  **Severity**: medium
  **Root cause hypothesis**: Intentional data integrity design preventing log modifications
  **Current status**: Requires manual workaround

  ### UI does not provide clear confirmation of EOS leave encashment configuration changes [TSSD-3939]
  **Severity**: medium
  **Root cause hypothesis**: Potential synchronization issue between configuration settings and display
  **Current status**: Configuration changes may not be immediately visible

  ### Approved leave requests can mysteriously revert to pending status [TSSD-2056]
  **Severity**: high
  **Root cause hypothesis**: Inconsistent state tracking across database tables
  **Current status**: Requires manual investigation and developer intervention

  ### Office location missing in custom reports for API integrations [TSSD-4151]
  **Severity**: medium
  **Root cause hypothesis**: API payload does not include office parameter
  **Current status**: Unresolved long-standing limitation

  ### Lack of user understanding about daily accrual calculation method [TSSD-4203]
  **Severity**: medium
  **Root cause hypothesis**: Insufficient documentation of calculation logic
  **Current status**: Requires support intervention to explain

  ### No start date field for documents [TSSD-1357]
  **Severity**: medium
  **Root cause hypothesis**: Limited document metadata configuration
  **Current status**: No plans to implement start date tracking

  ### No support for group-specific salary proration configuration [TSSD-4882]
  **Severity**: high
  **Root cause hypothesis**: Rigid payroll calculation design
  **Current status**: Feature request pending implementation

  ### Lack of intuitive daily accrual configuration [TSSD-4212]
  **Severity**: medium
  **Root cause hypothesis**: Overly complex policy configuration system
  **Current status**: Requires conditional policy workaround

  ### Daily quotes incorrectly rendered on mobile and desktop interfaces [TSSD-872]
  **Severity**: medium
  **Root cause hypothesis**: Lack of responsive design implementation
  **Current status**: Monitored but not actively addressed

  ### No automatic salary adjustment for varying attendance [TSSD-4905]
  **Severity**: high
  **Root cause hypothesis**: Lack of integrated attendance and payroll calculation system
  **Current status**: Manual workarounds using unpaid leaves and overtime tracking

  ### Unclear formula override mechanism in daily wage calculations [TSSD-2648]
  **Severity**: medium
  **Root cause hypothesis**: Intentional design prioritizing payroll configuration flexibility
  **Current status**: Working as designed, but with poor user communication

  ### Inconsistent attendance data transmission on weekends [TSSD-3419]
  **Severity**: medium
  **Root cause hypothesis**: Time zone or API transmission protocol limitations
  **Current status**: Requires manual investigation and client-side verification

  ### Unpaid leave deduction not recalculated when salary configuration changes [TSSD-1581]
  **Severity**: high
  **Root cause hypothesis**: Synchronization issue between salary config and leave deduction system
  **Current status**: Requires manual intervention or workaround

  ### Visual complexity in attendance record display for split shifts [TSSD-4230]
  **Severity**: low
  **Root cause hypothesis**: Prioritizing detailed tracking over simplified presentation
  **Current status**: System working as designed, no immediate plan to change

  ### Social security contribution not prorated for partial employment months [TSSD-2561]
  **Severity**: medium
  **Root cause hypothesis**: Lack of dynamic calculation logic
  **Current status**: Known limitation, planned future improvement

  ### Leap year not correctly handled in service days calculation [TSSD-4179]
  **Severity**: high
  **Root cause hypothesis**: Hardcoded 365-day year assumption
  **Current status**: Unresolved systemic calculation issue

  ### Systematic undercalculation of pro-rated amounts by 0.1-0.2 decimal points [TSSD-2605]
  **Severity**: medium
  **Root cause hypothesis**: Decimal precision limitation in calculation engine
  **Current status**: Resolved via development escalation

  ### Perceived calculation discrepancy due to decimal precision [TSSD-1232]
  **Severity**: low
  **Root cause hypothesis**: Difference between manual rounding and system's exact decimal handling
  **Current status**: Requires customer education about calculation methodology

  ### Inflexible working days calculation not aligned with leave policy [TSSD-3832]
  **Severity**: medium
  **Root cause hypothesis**: Rigid system logic for monthly working day determination
  **Current status**: Requires manual verification and potential adjustment

  ### EOS calculation does not consider unpaid leave or prorated salary [TSSD-4033]
  **Severity**: high
  **Root cause hypothesis**: Rigid backend calculation logic
  **Current status**: Requires manual intervention

  ### No daily leave accrual for partial months [TSSD-4042]
  **Severity**: medium
  **Root cause hypothesis**: System designed for monthly, not daily, leave crediting
  **Current status**: Requires manual adjustment

  ### Gratuity calculation discrepancies between system and manual calculations [TSSD-4742]
  **Severity**: medium
  **Root cause hypothesis**: Complex calculation rules with multiple segmentation criteria
  **Current status**: Requires manual verification and potential adjustment

  ### EOS submission blocked by false leave request detection [TSSD-3908]
  **Severity**: high
  **Root cause hypothesis**: Validation logic incorrectly interprets leave request existence
  **Current status**: Requires manual override or support intervention

  ### Lack of transparency in proration calculation interface [TSSD-4129]
  **Severity**: medium
  **Root cause hypothesis**: Calculation steps not visibly displayed to users
  **Current status**: Users require manual verification or support assistance

  ### No filter for out-of-office attendance records [TSSD-319]
  **Severity**: medium
  **Root cause hypothesis**: Reporting system lacks location-based filtering
  **Current status**: Feature gap requiring development

  ### Incorrect daily rate calculation for unpaid leave [OS-867]
  **Severity**: high
  **Root cause hypothesis**: Lack of temporal salary rate tracking
  **Current status**: System uses current salary configuration instead of historical rates

  ### Leap year day not consistently handled in service duration calculation [TSSD-1625]
  **Severity**: low
  **Root cause hypothesis**: Inconsistent day counting methodology
  **Current status**: Manual verification and override possible

  ### Legacy contract type logic producing inconsistent gratuity calculations [TSSD-4779]
  **Severity**: high
  **Root cause hypothesis**: Outdated system design not reflecting 2021 UAE Labor Law
  **Current status**: Requires backend fix to implement uniform calculation

  ### Calculation methodology creates minor computational differences [TSSD-3123]
  **Severity**: low
  **Root cause hypothesis**: Proprietary system formula with nuanced computational approach
  **Current status**: Requires support explanation, not considered a true error

  ### Calculation methodology not transparently communicated [TSSD-2252]
  **Severity**: medium
  **Root cause hypothesis**: Complex calculation logic lacks clear documentation
  **Current status**: Requires manual explanation by support team

  ### Gratuity calculation for limited contracts produces incorrect amounts [TSSD-4796]
  **Severity**: high
  **Root cause hypothesis**: Calculation logic does not consistently handle different contract types
  **Current status**: Requires manual intervention

  ### Lack of transparent leave accrual calculation display [TSSD-3139]
  **Severity**: medium
  **Root cause hypothesis**: Insufficient user-friendly calculation breakdown
  **Current status**: Relies on manual support explanation

  ### Custom payroll cycle changes create unrecoverable data inconsistencies [TSSD-3879]
  **Severity**: high
  **Root cause hypothesis**: Rigid system design preventing flexible cycle configuration
  **Current status**: Unsupported configuration change

  ### UI dynamically recalculates daily rate on page load [TSSD-2212]
  **Severity**: medium
  **Root cause hypothesis**: Lack of mechanism to store initially calculated rate
  **Current status**: Fix deployed to store initial daily rate

  ### Potential extra day added in days worked calculation [TSSD-2043]
  **Severity**: low
  **Root cause hypothesis**: Rounding or date computation method
  **Current status**: Confirmed as designed behavior

  ### Payroll template export displays incorrect GOSI deduction for mid-month joiners [TSSD-3249]
  **Severity**: medium
  **Root cause hypothesis**: Lack of sophisticated proration logic
  **Current status**: Workaround available via alternate report formats

  ### Incorrect leave balance calculation for mid-month departures [TSSD-4813]
  **Severity**: medium
  **Root cause hypothesis**: Monthly proration logic does not handle partial month accurately
  **Current status**: Requires manual intervention or policy configuration workaround

  ### Unclear leave salary calculation due to complex configuration settings [TSSD-2106]
  **Severity**: medium
  **Root cause hypothesis**: Lack of transparent explanation of day type calculation methods
  **Current status**: Requires manual investigation and explanation

  ### Incorrect daily wage calculation base [TSSD-3487]
  **Severity**: high
  **Root cause hypothesis**: Inflexible salary component selection
  **Current status**: Requires manual correction

  ### Lack of clear documentation for leave policy calculation methods [TSSD-3213]
  **Severity**: medium
  **Root cause hypothesis**: Complex, policy-driven calculation logic
  **Current status**: Requires manual support intervention

  ### System recalculates historical unpaid leave rates using current configuration [TSSD-1798]
  **Severity**: high
  **Root cause hypothesis**: Lack of calculation method snapshot preservation
  **Current status**: Requires manual verification and potential correction

  ### No mechanism to correct payment errors in closed payroll cycles [TSSD-3880]
  **Severity**: medium
  **Root cause hypothesis**: Strict data integrity enforcement
  **Current status**: Requires manual workarounds or cycle reopening

  ### User misunderstanding of daily wage calculation logic [TSSD-4731]
  **Severity**: medium
  **Root cause hypothesis**: Lack of transparent calculation methodology
  **Current status**: Requires support explanation of policy-driven calculations

  ### Incorrect EOS calculation for employees with complex employment status changes [TSSD-2597]
  **Severity**: high
  **Root cause hypothesis**: Rigid calculation logic not handling nuanced employment transitions
  **Current status**: Requires manual backend adjustment

  ### Leave salary accrual report calculates using calendar days instead of working days [TSSD-3402]
  **Severity**: high
  **Root cause hypothesis**: Inflexible calculation logic in reporting engine
  **Current status**: Requires backend code modification

  ### Lack of granular day-level salary adjustment [TSSD-3995]
  **Severity**: medium
  **Root cause hypothesis**: Inflexible working days proration setting
  **Current status**: System follows predefined calculation logic without manual override

  ### Automatic deletion of future leave requests during offboarding [TSSD-4720]
  **Severity**: medium
  **Root cause hypothesis**: Strict date validation rules in offboarding workflow
  **Current status**: System behavior considered 'expected'

  ### Inaccurate leave balance calculation methodology [TSSD-291]
  **Severity**: medium
  **Root cause hypothesis**: Rigid calculation rules not adaptable to diverse organizational policies
  **Current status**: Requires manual intervention and reconciliation

  ### Leave accrual report calculation differs from leave salary request [TSSD-4543]
  **Severity**: medium
  **Root cause hypothesis**: Intentional design using different calculation methodologies
  **Current status**: Requires user education about report's purpose

  ### Incorrect leave balance calculation for specific hire dates [TSSD-3822]
  **Severity**: medium
  **Root cause hypothesis**: Daily conditional allowance calculation complexity
  **Current status**: Requires manual review and system adjustment

  ### Unintuitive leave balance display [TSSD-4243]
  **Severity**: medium
  **Root cause hypothesis**: Complex multi-cycle calculation logic
  **Current status**: Requires extensive support explanation

  ### Inconsistent leave accrual across policy types [TSSD-3082]
  **Severity**: medium
  **Root cause hypothesis**: Configuration toggle limits accrual calculation method
  **Current status**: Requires manual intervention for accurate calculations

  ### Public holiday not counted as paid working day in prorated salary calculation [TSSD-2937]
  **Severity**: high
  **Root cause hypothesis**: Calculation logic does not consistently handle public holiday interactions
  **Current status**: Requires manual correction or engineering fix

  ### Leave salary accrual report uses incorrect calculation method [TSSD-3779]
  **Severity**: high
  **Root cause hypothesis**: Configuration synchronization issue between settings and reporting modules
  **Current status**: Configuration not reliably translated to reports

  ### Misalignment between expected and actual leave salary accrual calculations [TSSD-3648]
  **Severity**: medium
  **Root cause hypothesis**: Configuration of daily wage calculator using working days method
  **Current status**: Requires user understanding and potential configuration adjustment

  ### Mismatched daily wage calculation between leave salary and salary proration [TSSD-2321]
  **Severity**: medium
  **Root cause hypothesis**: Separate configuration paths for daily wage computations
  **Current status**: Requires manual configuration alignment

  ### System calculates leave salary using incorrect number of days [TSSD-3226]
  **Severity**: high
  **Root cause hypothesis**: Failure in date range to day count conversion logic
  **Current status**: Requires manual deletion and resubmission of request

  ### Leave salary calculation not transparent to users [TSSD-3275]
  **Severity**: medium
  **Root cause hypothesis**: Complex multi-step calculation without clear UI explanation
  **Current status**: Requires manual support intervention

  ### Excluded allowances not prorated during leave periods [TSSD-4387]
  **Severity**: high
  **Root cause hypothesis**: Inflexible salary component configuration
  **Current status**: Requires manual adjustment or workaround

  ### Policy changes do not take effect until other policies are set to inactive [TSSD-2934]
  **Severity**: high
  **Root cause hypothesis**: Broken policy precedence and caching logic
  **Current status**: Manual policy deactivation required to apply changes

  ### Cannot configure leave policies to pay only basic salary [TSSD-3654]
  **Severity**: medium
  **Root cause hypothesis**: Inflexible salary component handling in leave module
  **Current status**: Requires workarounds or manual payroll adjustments

  ### Cannot apply different proration formulas to employee groups [TSSD-4375]
  **Severity**: high
  **Root cause hypothesis**: Inflexible salary calculation engine design
  **Current status**: Unresolved product limitation

  ### No daily pro-ration of air ticket allowances [TSSD-3146]
  **Severity**: medium
  **Root cause hypothesis**: System design prioritizes batch processing over granular allocation
  **Current status**: Feature not planned for development

  ### Timestamp inconsistency in GOSI percentage retrieval [OS-3034]
  **Severity**: medium
  **Root cause hypothesis**: Time zone synchronization complexity
  **Current status**: Unresolved system behavior

  ### Lack of clear documentation on gratuity calculation formula [TSSD-375]
  **Severity**: medium
  **Root cause hypothesis**: Insufficient system transparency
  **Current status**: Requires manual verification and support intervention

  ### No UI for manual leave balance adjustment [TSSD-3789]
  **Severity**: medium
  **Root cause hypothesis**: System design prioritizes attendance record protection
  **Current status**: Requires backend intervention

  ### Calculation method not intuitively clear [TSSD-4349]
  **Severity**: medium
  **Root cause hypothesis**: Complex configuration options without clear guidance
  **Current status**: Requires support intervention to resolve

  ### Salary proration fails for future departure dates [TSSD-3058]
  **Severity**: high
  **Root cause hypothesis**: Inflexible date-handling logic in daily wage calculator
  **Current status**: Bug identified and escalated to development team

  ### User misunderstands proration calculation logic [TSSD-3512]
  **Severity**: medium
  **Root cause hypothesis**: Lack of transparent calculation explanation in UI
  **Current status**: Requires manual support explanation

  ### Salary proration not recalculated after daily rate configuration change [TSSD-2518]
  **Severity**: high
  **Root cause hypothesis**: System design prioritizes transactional lock over dynamic recalculation
  **Current status**: Requires manual workaround of rehiring/re-offboarding

  ### Lack of configurable proration calculation methods [TSSD-4303]
  **Severity**: medium
  **Root cause hypothesis**: Rigid system design prioritizing standardization
  **Current status**: Single calculation method applied universally

  ### Cannot filter processed time and pay adjustments by destination [TSSD-463]
  **Severity**: medium
  **Root cause hypothesis**: Reporting system design limitation
  **Current status**: Logged in product backlog as improvement

  ### No automatic daily hours summary in timesheet records [TSSD-696]
  **Severity**: low
  **Root cause hypothesis**: Missing feature for hours aggregation
  **Current status**: Backlog item, not immediately planned

  ### Timesheet entries appear to vanish after date modification [TSSD-4409]
  **Severity**: medium
  **Root cause hypothesis**: Lack of clear date change visualization mechanism
  **Current status**: Unresolved user experience issue

  ### Cannot edit or delete system-generated leave deductions [TSSD-3946]
  **Severity**: medium
  **Root cause hypothesis**: Rigid system design preventing manual overrides
  **Current status**: Requires development team intervention

  ### Multi-month unpaid leave requests cause deduction accumulation [TSSD-2384]
  **Severity**: high
  **Root cause hypothesis**: Lack of flexible leave balance adjustment mechanism
  **Current status**: Requires manual workaround of deleting and recreating leave requests

  ### Leave-to-payroll synchronization failure causing duplicate deductions [TSSD-2532]
  **Severity**: critical
  **Root cause hypothesis**: Lack of transactional integrity between leave management and payroll modules
  **Current status**: Manual intervention required to resolve deduction inconsistencies

  ### Cross-month leave day aggregation not supported [TSSD-3044]
  **Severity**: high
  **Root cause hypothesis**: Limitation in payroll calculation logic
  **Current status**: Manual reconciliation required

  ### Unpaid leave deduction calculation becomes inconsistent when public holidays are added late [TSSD-4464]
  **Severity**: high
  **Root cause hypothesis**: Lack of real-time synchronization between Time Off and Payroll modules
  **Current status**: Manual intervention required to resolve calculation discrepancies

  ### Unpaid leave deduction calculation lacks user-friendly explanation [TSSD-4368]
  **Severity**: medium
  **Root cause hypothesis**: Complex mathematical model prioritizes precision over clarity
  **Current status**: Requires manual intervention and support explanation

  ### Leave Policy UI does not reflect actual calculation method when Overwrite is enabled [TSSD-4947]
  **Severity**: medium
  **Root cause hypothesis**: Configuration hierarchy prioritizes Payroll Configuration over Leave Policy display
  **Current status**: Known limitation in configuration interface

  ### Lack of clear policy differentiation leads to user distrust [TSSD-1746]
  **Severity**: medium
  **Root cause hypothesis**: Insufficient user guidance on policy configurations
  **Current status**: Requires manual investigation and explanation

  ### No support for custom daily wage calculation divisors [TSSD-1227]
  **Severity**: medium
  **Root cause hypothesis**: System designed for standard accounting practices
  **Current status**: Enhancement request added to backlog

  ### Workflow does not auto-detect system-generated absences [TSSD-3438]
  **Severity**: high
  **Root cause hypothesis**: Event design requires manual intervention
  **Current status**: Planned enhancement in development

  ### Inconsistent workflow event triggering across different company configurations [TSSD-3507]
  **Severity**: medium
  **Root cause hypothesis**: Configuration complexity and potential system-level event execution issues
  **Current status**: Requires periodic engineering intervention

  ### Remarks display incorrect number of days for daily rate calculation [TSSD-1301]
  **Severity**: low
  **Root cause hypothesis**: UI display logic not synchronized with backend calculation
  **Current status**: Backend calculation remains accurate despite display inconsistency

  ### Unpaid leave deduction uses gross salary instead of basic salary [TSSD-1753]
  **Severity**: high
  **Root cause hypothesis**: Global configuration override of policy-specific calculation method
  **Current status**: Confirmed as expected system behavior

  ### Daily rate display shows payroll processing month instead of leave occurrence month [TSSD-1807]
  **Severity**: medium
  **Root cause hypothesis**: System recalculates daily rate during payroll processing
  **Current status**: Fixed by storing initially calculated daily rate

  

  ## Edge Cases & Exceptions
  - **Scenario**: Organizations with mixed workforce (white-collar vs blue-collar employees)
    - **System behavior**: Forces uniform proration calculation across all employee types
    - **User impact**: Inaccurate or unfair salary calculations
    - **Evidence**: [TSSD-4876]

  - **Scenario**: Employee leaving mid-month
    - **System behavior**: Partial leave days not automatically calculated
    - **User impact**: Reduced leave encashment amount
    - **Evidence**: [TSSD-2499]

  - **Scenario**: Payroll manager needs to set custom daily rate for leave compensation
    - **System behavior**: No direct configuration path available
    - **User impact**: Must use external calculations or manual interventions
    - **Evidence**: [OS-446]

  - **Scenario**: Comparing attendance across different time periods
    - **System behavior**: Limited visualization capabilities
    - **User impact**: Difficulty in identifying attendance trends
    - **Evidence**: [TSSD-3774]

  - **Scenario**: Comment submission from custom reports
    - **System behavior**: Error messages prevent comment sending
    - **User impact**: Unable to annotate attendance records in custom reports
    - **Evidence**: [TSSD-1517]

  - **Scenario**: Employee checks in early but gets marked late due to configuration
    - **System behavior**: Applies late arrival status based on configured thresholds
    - **User impact**: Potential incorrect attendance tracking
    - **Evidence**: [TSSD-713]

  - **Scenario**: Employee checks out on next day
    - **System behavior**: Calculates extended hours across shift boundaries
    - **User impact**: Potential overtime claim without verification
    - **Evidence**: [TSSD-1433]

  - **Scenario**: Overtime adjustment report shows different location status than daily attendance report
    - **System behavior**: Displays conflicting attendance activity details
    - **User impact**: Reduced trust in reporting accuracy
    - **Evidence**: [TSSD-1908]

  - **Scenario**: User attempts second check-in same day
    - **System behavior**: Check-in button becomes unavailable
    - **User impact**: Confusion about feature functionality
    - **Evidence**: [TSSD-430]

  - **Scenario**: No check-in data for entire day
    - **System behavior**: Requires explicit manager action to generate deduction request
    - **User impact**: Manual tracking and marking required
    - **Evidence**: [TSSD-2206]

  - **Scenario**: Client requires monthly accrual for conditional leave
    - **System behavior**: System defaults to daily accrual
    - **User impact**: Cannot match specific organizational leave calculation methods
    - **Evidence**: [TSSD-1453]

  - **Scenario**: Login works in incognito but fails in regular browser
    - **System behavior**: Authentication bypasses browser-specific cache limitations
    - **User impact**: Requires manual cache clearing or alternative browser
    - **Evidence**: [TSSD-2266]

  - **Scenario**: Split shift with partial leave request
    - **System behavior**: Incomplete status update across shift rows
    - **User impact**: Misleading attendance records
    - **Evidence**: [OS-639]

  - **Scenario**: Bulk attendance data correction needed
    - **System behavior**: Requires individual record management via manager override
    - **User impact**: Complex, time-consuming correction process
    - **Evidence**: [TSSD-1134]

  - **Scenario**: Configuration change not immediately reflected in UI
    - **System behavior**: Eligibility section may show previous calculation method
    - **User impact**: Uncertainty about whether configuration was successfully applied
    - **Evidence**: [TSSD-3939]

  - **Scenario**: Multiple approval entries for single leave request
    - **System behavior**: Generates duplicate audit log entries
    - **User impact**: Confusing approval status tracking
    - **Evidence**: [TSSD-2056]

  - **Scenario**: API check-in without office location
    - **System behavior**: Attendance recorded without location context
    - **User impact**: Loss of geographical tracking for workforce management
    - **Evidence**: [TSSD-4151]

  - **Scenario**: Employee with partial month tenure
    - **System behavior**: Calculates leave as (monthly allowance / 30) * days worked
    - **User impact**: Precise leave balance reflecting exact work period
    - **Evidence**: [TSSD-4203]

  - **Scenario**: User needs daily expiration notifications
    - **System behavior**: Only monthly notifications available
    - **User impact**: Potential missed document renewal opportunities
    - **Evidence**: [TSSD-1357]

  - **Scenario**: Mixed workforce with head office and operational employees
    - **System behavior**: Enforces single proration calculation method
    - **User impact**: Necessitates manual salary corrections
    - **Evidence**: [TSSD-4882]

  - **Scenario**: Migrating from work anniversary to calendar year cycle
    - **System behavior**: Requires explicit configuration of accrual method
    - **User impact**: Potential miscalculation of leave balances
    - **Evidence**: [TSSD-4212]

  - **Scenario**: Quote display on different screen sizes and orientations
    - **System behavior**: Content gets truncated or incorrectly formatted
    - **User impact**: Incomplete or unreadable daily quotes
    - **Evidence**: [TSSD-872]

  - **Scenario**: Employee works more than 26 days in a month
    - **System behavior**: Currently requires manual overtime tracking
    - **User impact**: Additional administrative work, potential compensation discrepancies
    - **Evidence**: [TSSD-4905]

  - **Scenario**: Disabling specific system posts without affecting entire Newsfeed
    - **System behavior**: Allows selective post type deactivation
    - **User impact**: Maintains communication flexibility
    - **Evidence**: [TSSD-120]

  - **Scenario**: Unpaid leave daily wage calculation
    - **System behavior**: Uses payroll-configured daily wage formula instead of leave policy formula
    - **User impact**: Potential confusion about which formula is actually applied
    - **Evidence**: [TSSD-2648]

  - **Scenario**: Weekend-specific data transmission inconsistencies
    - **System behavior**: Selective data synchronization failures
    - **User impact**: Incomplete or inaccurate attendance records
    - **Evidence**: [TSSD-3419]

  - **Scenario**: Salary configuration changes after leave request creation
    - **System behavior**: May use outdated salary configuration for deduction calculation
    - **User impact**: Potential incorrect payroll deductions
    - **Evidence**: [TSSD-1581]

  - **Scenario**: Employee with multiple non-continuous work periods in a day
    - **System behavior**: Generate multiple attendance records
    - **User impact**: Requires understanding of split shift record generation
    - **Evidence**: [TSSD-4230]

  - **Scenario**: Employee works partial month before offboarding
    - **System behavior**: Full monthly contribution calculated
    - **User impact**: Reporting discrepancy without financial consequence
    - **Evidence**: [TSSD-2561]

  - **Scenario**: Service period spanning a leap year
    - **System behavior**: Incorrectly calculates total service days
    - **User impact**: Reduced gratuity payment
    - **Evidence**: [TSSD-4179]

  - **Scenario**: Employee departs mid-month
    - **System behavior**: Calculates proportional salary based on days worked
    - **User impact**: Potential small calculation errors affecting final settlement
    - **Evidence**: [TSSD-2605]

  - **Scenario**: Limited contract with partial year service
    - **System behavior**: Convert service duration to precise decimal representation
    - **User impact**: Potential minor calculation differences from manual methods
    - **Evidence**: [TSSD-1232]

  - **Scenario**: Month with public holidays affecting working day count
    - **System behavior**: System uses 21 working days instead of policy-defined 22 days
    - **User impact**: Slight reduction in calculated daily wage rate
    - **Evidence**: [TSSD-3832]

  - **Scenario**: Employee leaves mid-month with unpaid leave
    - **System behavior**: Calculates EOS using full monthly salary
    - **User impact**: Incorrect compensation and manual adjustment required
    - **Evidence**: [TSSD-4033]

  - **Scenario**: Employee departing mid-month
    - **System behavior**: No automatic pro-rata leave calculation
    - **User impact**: Potential loss of accrued leave days
    - **Evidence**: [TSSD-4042]

  - **Scenario**: Employee departs mid-month
    - **System behavior**: No automatic prorating of leave days
    - **User impact**: Manual balance adjustment required
    - **Evidence**: [TSSD-4742]

  - **Scenario**: Employee with no pending leaves still blocked from EOS submission
    - **System behavior**: Incorrectly detects leave requests after departure date
    - **User impact**: Manual intervention required to complete offboarding process
    - **Evidence**: [TSSD-3908]

  - **Scenario**: Employee joining mid-month with public holidays and weekend days
    - **System behavior**: Dynamically calculate working days and adjust salary proportionally
    - **User impact**: Ensures fair compensation based on actual working days
    - **Evidence**: [TSSD-4129]

  - **Scenario**: Check-in from location outside configured offices
    - **System behavior**: Automatically labels as 'out of office'
    - **User impact**: Cannot easily filter or investigate these records
    - **Evidence**: [TSSD-319]

  - **Scenario**: Employee with salary changes during leave period
    - **System behavior**: Applies current salary rate incorrectly
    - **User impact**: Potential underpayment or overpayment
    - **Evidence**: [OS-867]

  - **Scenario**: Leap year with February 29th
    - **System behavior**: Potential day counting discrepancy
    - **User impact**: Slight variations in gratuity calculation
    - **Evidence**: [TSSD-1625]

  - **Scenario**: Partial service year calculation
    - **System behavior**: Calculate precise days and divide by 365, accounting for leap years
    - **User impact**: Ensures accurate pro-rata gratuity for incomplete service years
    - **Evidence**: [TSSD-4779]

  - **Scenario**: Limited contract with partial service year
    - **System behavior**: Pro-rata gratuity calculation
    - **User impact**: Precise entitlement computation considering exact service duration
    - **Evidence**: [TSSD-3123]

  - **Scenario**: Partial service year with leap year inclusion
    - **System behavior**: Dynamically adjust divisor between 365 and 366 days
    - **User impact**: Slight variations in gratuity calculation
    - **Evidence**: [TSSD-2252]

  - **Scenario**: Limited contract employee termination
    - **System behavior**: Calculation produces inconsistent results
    - **User impact**: Requires manual amount adjustment or departure reason modification
    - **Evidence**: [TSSD-4796]

  - **Scenario**: Partial month leave accrual
    - **System behavior**: Calculate daily rate by dividing monthly accrual by working days
    - **User impact**: Precise but complex leave balance tracking
    - **Evidence**: [TSSD-3139]

  - **Scenario**: Attempting to change payroll cycle mid-year
    - **System behavior**: Blocks configuration change or introduces data integrity risks
    - **User impact**: Unable to flexibly adjust payroll processing periods
    - **Evidence**: [TSSD-3879]

  - **Scenario**: Holiday calendar modification after leave approval
    - **System behavior**: Potentially recalculates daily rate dynamically
    - **User impact**: Inconsistent rate display and potential confusion
    - **Evidence**: [TSSD-2212]

  - **Scenario**: Client requires alternative daily wage calculation method
    - **System behavior**: Rejects custom formulas, uses fixed 30-day divisor
    - **User impact**: Potential minor differences in gratuity amount
    - **Evidence**: [TSSD-2043]

  - **Scenario**: Employee joining mid-month
    - **System behavior**: Displays full monthly GOSI deduction
    - **User impact**: Incorrect financial representation
    - **Evidence**: [TSSD-3249]

  - **Scenario**: Employee leaves mid-month
    - **System behavior**: Calculates leave based on previous month's accrual
    - **User impact**: Potential undercalculation of leave balance
    - **Evidence**: [TSSD-4813]

  - **Scenario**: Leave request spanning public holidays
    - **System behavior**: Different calculation methods exclude or include holidays based on day type setting
    - **User impact**: Potential salary amount discrepancy
    - **Evidence**: [TSSD-2106]

  - **Scenario**: UAE client with no social security contributions
    - **System behavior**: Displays unconfigured GOSI component
    - **User impact**: Misleading financial reporting
    - **Evidence**: [TSSD-3487]

  - **Scenario**: Confusion between unpaid leave and sick leave unpaid policies
    - **System behavior**: Applies policy-specific calculation method
    - **User impact**: Unexpected daily rate calculation
    - **Evidence**: [TSSD-3213]

  - **Scenario**: Configuration change occurs after leave is taken
    - **System behavior**: Recalculates display value using current configuration
    - **User impact**: Potential discrepancy between original and displayed deduction
    - **Evidence**: [TSSD-1798]

  - **Scenario**: Duplicate variable pay discovered after cycle closure
    - **System behavior**: No correction possible without reopening entire payroll cycle
    - **User impact**: Potential financial reconciliation challenges
    - **Evidence**: [TSSD-3880]

  - **Scenario**: Leave request spans partial month with varying calendar days
    - **System behavior**: Applies consistent divisor regardless of actual month length
    - **User impact**: Potential minor salary calculation discrepancies
    - **Evidence**: [TSSD-4731]

  - **Scenario**: Employee offboarded and rehired in consecutive months
    - **System behavior**: Generates potentially incorrect salary arrears and deductions
    - **User impact**: Manual intervention required to correct calculations
    - **Evidence**: [TSSD-2597]

  - **Scenario**: User specifies working days in salary accrual formula
    - **System behavior**: Calculates using calendar days regardless of configuration
    - **User impact**: Incorrect financial reporting
    - **Evidence**: [TSSD-3402]

  - **Scenario**: Employee departs on a date near a public holiday
    - **System behavior**: Calculates salary based on working days, excluding public holidays
    - **User impact**: Potential misunderstanding of final salary computation
    - **Evidence**: [TSSD-3995]

  - **Scenario**: Leave request created before offboarding with dates after departure
    - **System behavior**: Automatic deletion of leave request
    - **User impact**: Loss of leave record and associated payroll deduction
    - **Evidence**: [TSSD-4720]

  - **Scenario**: Calculating leave for employees with variable salary structures
    - **System behavior**: Current system uses inflexible calculation method
    - **User impact**: Requires manual adjustment of leave balances
    - **Evidence**: [TSSD-291]

  - **Scenario**: Discrepancy between projected and actual leave salary
    - **System behavior**: Report shows virtual calculation, not actual salary
    - **User impact**: Misunderstanding of potential leave compensation
    - **Evidence**: [TSSD-4543]

  - **Scenario**: Employee hired on February 29th (leap year)
    - **System behavior**: Cycle starts from February 28th, causing 1-day allowance discrepancy
    - **User impact**: Temporary negative or reduced leave balance
    - **Evidence**: [TSSD-3822]

  - **Scenario**: Leave request spanning multiple cycles
    - **System behavior**: Dynamically calculates deductions from current and future cycle balances
    - **User impact**: Requires complex understanding of balance projections
    - **Evidence**: [TSSD-4243]

  - **Scenario**: Employee leaves mid-month with non-conditional leave policy
    - **System behavior**: Monthly accrual may result in inaccurate leave settlement
    - **User impact**: Potential financial discrepancy in leave encashment
    - **Evidence**: [TSSD-3082]

  - **Scenario**: Leave request spanning a public holiday
    - **System behavior**: Excludes public holiday from leave days but may incorrectly handle working days calculation
    - **User impact**: Potential underpayment or incorrect salary proration
    - **Evidence**: [TSSD-2937]

  - **Scenario**: Configuring custom leave salary calculation formula
    - **System behavior**: May not propagate configuration to report generation
    - **User impact**: Inaccurate leave salary reports
    - **Evidence**: [TSSD-3779]

  - **Scenario**: February has fewer working days
    - **System behavior**: Recalculates daily wage based on actual working days
    - **User impact**: Cumulative leave salary total differs from manual expectations
    - **Evidence**: [TSSD-3648]

  - **Scenario**: Mid-month leave with complex salary structure
    - **System behavior**: Calculates using configured daily wage divisors
    - **User impact**: Potential calculation variations
    - **Evidence**: [TSSD-2321]

  - **Scenario**: Leave period spans multiple months
    - **System behavior**: Potential miscalculation of days
    - **User impact**: Incorrect leave salary computation
    - **Evidence**: [TSSD-3226]

  - **Scenario**: Leave spanning two payroll months
    - **System behavior**: Calculate total leave salary, then deduct current month portion
    - **User impact**: Potential confusion about calculation method
    - **Evidence**: [TSSD-3275]

  - **Scenario**: Allowances excluded from leave salary formula still paid in full
    - **System behavior**: Pays excluded allowances regardless of leave days
    - **User impact**: Unexpected salary calculations and potential overpayment
    - **Evidence**: [TSSD-4387]

  - **Scenario**: Multiple leave salary policies mapped to same employee
    - **System behavior**: Unpredictable daily rate calculations and policy precedence
    - **User impact**: Incorrect leave compensation generation
    - **Evidence**: [TSSD-2934]

  - **Scenario**: Custom payroll cycles requiring specific leave payment rules
    - **System behavior**: Default percentage-based calculation applies
    - **User impact**: Manual adjustments required to achieve desired payment configuration
    - **Evidence**: [TSSD-3654]

  - **Scenario**: Attempting to configure different proration formulas for office vs. non-office employees
    - **System behavior**: Rejects multiple formula configurations, enforces single global method
    - **User impact**: Must use uniform calculation across all employee groups
    - **Evidence**: [TSSD-4375]

  - **Scenario**: Employee joins mid-cycle
    - **System behavior**: No partial air ticket allowance
    - **User impact**: Cannot access travel benefits proportionally
    - **Evidence**: [TSSD-3146]

  - **Scenario**: Work week with all 7 days configured as working days
    - **System behavior**: Calculates full month as working days
    - **User impact**: Potentially unexpected salary proration results
    - **Evidence**: [TSSD-4292]

  - **Scenario**: Data retrieval timestamp differs from scheduled time
    - **System behavior**: Shows data fetched slightly before or after scheduled time
    - **User impact**: Uncertainty about precise data synchronization moment
    - **Evidence**: [OS-3034]

  - **Scenario**: Calculating gratuity for employees with 5+ years of service
    - **System behavior**: Switch between 21 and 30 days per year calculation
    - **User impact**: Potential miscalculation if contract type is misunderstood
    - **Evidence**: [TSSD-375]

  - **Scenario**: Incorrect leave balance allocation
    - **System behavior**: Requires backend SQL update
    - **User impact**: No self-service correction mechanism
    - **Evidence**: [TSSD-3789]

  - **Scenario**: Selective allowance proration
    - **System behavior**: Some allowances prorated, others paid in full
    - **User impact**: Requires manual configuration for precise control
    - **Evidence**: [TSSD-4349]

  - **Scenario**: Employee departing in future but payroll processed earlier
    - **System behavior**: Displays full monthly salary without proration
    - **User impact**: Potential financial discrepancies and manual intervention required
    - **Evidence**: [TSSD-3058]

  - **Scenario**: Employee joins mid-month in February
    - **System behavior**: Calculates prorated salary based on actual calendar days present
    - **User impact**: Potential confusion about day-counting methodology
    - **Evidence**: [TSSD-3512]

  - **Scenario**: Changing daily rate configuration after employee offboarding
    - **System behavior**: Retains original proration calculation
    - **User impact**: Potential salary calculation inaccuracies
    - **Evidence**: [TSSD-2518]

  - **Scenario**: Mid-month employee termination
    - **System behavior**: Prorates salary based on actual working days
    - **User impact**: Precise salary calculation reflecting actual work performed
    - **Evidence**: [TSSD-4303]

  - **Scenario**: Multiple daily extra hour requests processed
    - **System behavior**: No automatic destination tracking
    - **User impact**: Increased administrative complexity
    - **Evidence**: [TSSD-463]

  - **Scenario**: Employee logs multiple diverse activities in one day
    - **System behavior**: Displays individual activity hours without total
    - **User impact**: Must manually sum hours to understand total work time
    - **Evidence**: [TSSD-696]

  - **Scenario**: Modifying task date across different days
    - **System behavior**: Task moves to new date, potentially disappearing from original date
    - **User impact**: Perceived loss of time entry information
    - **Evidence**: [TSSD-4409]

  - **Scenario**: Employee exceeds standard leave allowance
    - **System behavior**: Automatically generates financial deduction
    - **User impact**: Mandatory financial penalty applied without manual intervention
    - **Evidence**: [TSSD-3946]

  - **Scenario**: Unpaid leave request spanning multiple payroll months
    - **System behavior**: Accumulates deductions, potentially causing negative salary
    - **User impact**: Unexpected financial calculations and leave balance discrepancies
    - **Evidence**: [TSSD-2384]

  - **Scenario**: Changing daily wage calculation mid-transaction
    - **System behavior**: Creates duplicate deductions with old and new calculations
    - **User impact**: Incorrect payroll processing and potential financial reconciliation challenges
    - **Evidence**: [TSSD-2532]

  - **Scenario**: Leave approved across multiple months during single payroll cycle
    - **System behavior**: Partial day count display, full deduction amount
    - **User impact**: Confusion and potential reporting discrepancies
    - **Evidence**: [TSSD-3044]

  - **Scenario**: Public holiday added after leave request processing
    - **System behavior**: Recalculation not supported, leading to potential salary deduction discrepancies
    - **User impact**: Incorrect salary deduction that cannot be automatically corrected
    - **Evidence**: [TSSD-4464]

  - **Scenario**: Full month unpaid leave
    - **System behavior**: Calculate deduction using daily rate * total leave days
    - **User impact**: Potential deduction larger than monthly salary
    - **Evidence**: [TSSD-4368]

  - **Scenario**: Configuring half-paid or unpaid leave types with different calculation methods
    - **System behavior**: Payroll configuration method overrides leave policy display
    - **User impact**: Potential confusion about actual wage calculation method
    - **Evidence**: [TSSD-4947]

  - **Scenario**: Multiple unpaid leave policies with different calculation methods
    - **System behavior**: Apply policy-specific daily rate formula
    - **User impact**: Confusion about how leave is deducted
    - **Evidence**: [TSSD-1746]

  - **Scenario**: Client requires 30.5 day divisor for wage calculations
    - **System behavior**: Defaults to calendar days, rejects custom configuration
    - **User impact**: Requires manual report manipulation
    - **Evidence**: [TSSD-1227]

  - **Scenario**: System-default absent records
    - **System behavior**: No workflow trigger occurs
    - **User impact**: Missing absence notifications
    - **Evidence**: [TSSD-3438]

  - **Scenario**: Workflow fails to trigger despite configured settings
    - **System behavior**: No notification generated
    - **User impact**: Manual intervention required
    - **Evidence**: [TSSD-3507]

  - **Scenario**: February in leap year with 29 days
    - **System behavior**: Adjusts daily rate calculation to use 29 days instead of default 31
    - **User impact**: More accurate salary deduction computation
    - **Evidence**: [TSSD-1301]

  - **Scenario**: 7-day work week with public holidays affecting daily rate calculation
    - **System behavior**: Daily rate calculated using total working days, potentially including or excluding holidays
    - **User impact**: Inconsistent salary deduction amounts
    - **Evidence**: [TSSD-1753]

  - **Scenario**: Leave requested in April, processed in May
    - **System behavior**: Potentially displays May's daily rate instead of April's
    - **User impact**: Confusion about correct deduction calculation
    - **Evidence**: [TSSD-1807]

  

  ## Dependencies & Integrations
  - **Payroll configuration system**: Limits proration calculation flexibility [TSSD-4876]
- **Monthly payroll and leave management systems**: Constrains leave calculation to full month periods [TSSD-2499]
- **Payroll configuration system**: Restricts direct rate calculation and configuration [OS-446]
- **Mobile device notification system**: Unreliable push notification delivery across different accounts [TSSD-1517]
- **Accurate HR configuration of work timing and timezone settings**: Directly impacts attendance tracking accuracy [TSSD-713]
- **Overtime policy configuration**: Toggle controls extra hours request requirement [TSSD-1433]
- **Cross-report data mapping**: Determines consistency of attendance record representation [TSSD-1908]
- **Manual line manager interaction**: Blocks automatic deduction request generation [TSSD-2206]
- **Leave policy type determines accrual calculation method**: Limits configuration options based on policy type selection [TSSD-1453]
- **Browser cache and cookie management**: Directly impacts authentication reliability [TSSD-2266]
- **Shift scheduling system**: Determines complexity of leave status tracking [OS-639]
- **Manager-level access for attendance record modifications**: Requires administrative intervention for data corrections [TSSD-1134]
- **Labor law compliance requirements**: Determines acceptable calculation methods for leave encashment [TSSD-3939]
- **Payroll deduction calculation system**: Triggers notifications and updates to leave request records [TSSD-2056]
- **External attendance tracking systems**: Determines availability of location metadata in check-in/check-out process [TSSD-4151]
- **Leave policy configuration settings**: Determines whether daily or monthly accrual is used [TSSD-4203]
- **Leave policy configuration**: Determines basis for proration calculation (calendar days vs working days) [TSSD-4882]
- **Conditional leave policy configuration**: Enables advanced leave accrual customization [TSSD-4212]
- **Cross-platform UI rendering engine**: Determines quote display consistency and readability [TSSD-872]
- **Attendance tracking system**: Required to accurately calculate working days for salary computation [TSSD-4905]
- **Admin Panel access and permissions**: Requires administrative credentials to modify system post settings [TSSD-120]
- **Payroll settings module**: Determines precedence of daily wage calculation formulas [TSSD-2648]
- **Third-party API providers (e.g., Jay Softworks)**: Determines data transmission accuracy and reliability [TSSD-3419]
- **Accurate and timely salary configuration management**: Directly impacts leave deduction calculation accuracy [TSSD-1581]
- **Shift configuration system**: Determines when multiple attendance records are generated [TSSD-4230]
- **Excel reporting system**: Displays full monthly contributions without prorated adjustment [TSSD-2561]
- **MOHRE labor regulations**: Requires accurate service period calculation [TSSD-4179]
- **Accurate salary component configuration**: Requires precise input of basic salary and allowances for correct calculations [TSSD-2605]
- **WPS (Wage Protection System) compliance**: Enforces standardized gratuity calculation rules [TSSD-1232]
- **Accurate employee compensation and joining date data**: Directly impacts EOS calculation precision [TSSD-3832]
- **Payroll cycle closure**: Must close payroll cycle before processing EOS [TSSD-4033]
- **Leave policy configuration**: Determines monthly vs daily accrual approach [TSSD-4042]
- **Leave policy configuration (monthly vs conditional accrual)**: Determines leave balance inclusion in EOS calculation [TSSD-4742]
- **UAE labor law calculation engine**: Drives complex gratuity and leave encashment calculations [TSSD-3908]
- **Accurate workweek configuration**: Determines which days are considered working days [TSSD-4129]
- **Public holiday calendar**: Excludes non-working holidays from salary calculation [TSSD-4129]
- **Accurate office geofence configuration**: Determines precision of location detection [TSSD-319]
- **Salary configuration system**: Determines accuracy of leave compensation calculations [OS-867]
- **Accurate employee contract and salary data**: Precise gratuity calculation requires complete input data [TSSD-1625]
- **UAE Labor Law regulations**: Requires uniform gratuity calculation across contract types [TSSD-4779]
- **UAE Labor Law Regulations**: Defines fundamental calculation parameters and compliance requirements [TSSD-3123]
- **Accurate employee profile data**: Requires precise tracking of joining date, departure date, salary, and contract type [TSSD-2252]
- **Accurate employee contract and departure information**: Directly impacts gratuity calculation accuracy [TSSD-4796]
- **Accurate working days calendar**: Determines daily accrual rate calculation [TSSD-3139]
- **Salary proration calculations**: Proration logic permanently changes with cycle modification [TSSD-3879]
- **Holiday calendar configuration**: Determines working day count for rate calculation [TSSD-2212]
- **Accurate employee contract and salary data**: Precise input required for correct gratuity calculation [TSSD-2043]
- **Payroll table download for accurate calculations**: Provides correct prorated values when template export fails [TSSD-3249]
- **Leave policy configuration**: Determines accrual calculation method [TSSD-4813]
- **Leave policy configuration**: Determines day counting and salary calculation method [TSSD-2106]
- **Payroll configuration system**: Determines salary component inclusion and calculation methods [TSSD-3487]
- **HR policy configuration**: Determines specific calculation formulas for each leave type [TSSD-3213]
- **Payroll configuration management**: Determines calculation method and divisors for unpaid leave [TSSD-1798]
- **Accurate pre-closure validation processes**: Critical for preventing locked-in payment errors [TSSD-3880]
- **Leave policy configuration**: Determines divisor and calculation method for daily wage [TSSD-4731]
- **Accurate employee offboarding and departure date logging**: Directly impacts EOS calculation accuracy [TSSD-2597]
- **Payroll and HR systems requiring precise leave compensation calculations**: Calculation inaccuracies can impact financial reporting [TSSD-3402]
- **Public holiday calendar configuration**: Determines which days are excluded from working days calculation [TSSD-3995]
- **Payroll transaction processing**: Deductions can be created and deleted based on leave request status [TSSD-4720]
- **Salary calculation system**: Determines base for leave accrual computation [TSSD-291]
- **Accurate daily wage and leave balance configurations**: Determines accuracy of leave accrual projection [TSSD-4543]
- **Accurate hire date recording**: Determines leave cycle and allowance calculation [TSSD-3822]
- **Accurate monthly accrual rate configuration**: Determines leave balance calculations [TSSD-4243]
- **Leave policy configuration toggle**: Controls daily vs monthly accrual calculation method [TSSD-3082]
- **Accurate calendar and holiday configuration**: Determines correct working days and leave salary calculations [TSSD-2937]
- **Payroll configuration system**: Determines leave salary calculation method [TSSD-3779]
- **Daily Wage Calculator configuration**: Determines method of calculating leave salary accruals [TSSD-3648]
- **Accurate salary component definition**: Impacts daily wage calculation precision [TSSD-2321]
- **Monthly salary configuration**: Determines daily rate for leave salary calculation [TSSD-3226]
- **Accurate salary component configuration**: Determines precision of leave salary calculation [TSSD-3275]
- **Payroll configuration and salary structure**: Determines leave salary calculation logic and component handling [TSSD-4387]
- **Employee leave policy assignment**: Determines which leave salary policy is applied [TSSD-2934]
- **Payroll cycle configuration**: Influences leave payment calculations and deduction methods [TSSD-3654]
- **Payroll configuration system**: Enforces uniform proration calculation across all employees [TSSD-4375]
- **Payroll renewal cycle**: Determines timing and completeness of air ticket allowance [TSSD-3146]
- **Work week configuration**: Directly determines working days calculation for salary proration [TSSD-4292]
- **DBX time zone configuration**: Determines precise timing of data retrieval process [OS-3034]
- **Accurate employee contract and service duration tracking**: Directly impacts gratuity calculation precision [TSSD-375]
- **Daily attendance tracking system**: Prevents simple leave balance retroactive modifications [TSSD-3789]
- **Accurate payroll settings configuration**: Determines precise leave salary calculation logic [TSSD-4349]
- **Employee profile configuration**: Departure date determines proration calculation [TSSD-3058]
- **Accurate employee join date configuration**: Directly impacts prorated salary calculation [TSSD-3512]
- **Payroll transaction submission**: Blocks automatic proration recalculation [TSSD-2518]
- **Accurate salary component configuration**: Determines base for daily wage calculation [TSSD-4303]
- **Manual data export for reporting**: Introduces potential human error in tracking [TSSD-463]
- **User interface date modification controls**: Enables flexible but potentially confusing time entry modifications [TSSD-4409]
- **Salary component configuration**: Determines calculation basis for leave deductions [TSSD-3946]
- **Payroll cycle and leave allowance tracking**: Prevents seamless handling of complex leave scenarios [TSSD-2384]
- **Daily wage calculation system**: Triggers deduction recalculation and potential synchronization errors [TSSD-2532]
- **MOHRE reporting requirements**: Requires precise leave day and deduction tracking [TSSD-3044]
- **Country-specific public holiday calendar**: Determines working days and impacts daily wage calculation [TSSD-4464]
- **Unpaid leave policy configuration**: Determines daily wage divisor and calculation method [TSSD-4368]
- **Payroll Configuration must be set before configuring Leave Policy**: Determines wage calculation method and overrides policy settings [TSSD-4947]
- **Accurate employee leave policy mapping**: Determines daily rate calculation method [TSSD-1746]
- **Relies on accurate monthly calendar day information**: Dynamically adjusts calculations based on month's actual days [TSSD-1227]
- **Daily attendance report**: Manual interaction required to trigger workflow [TSSD-3438]
- **Accurate daily attendance record maintenance**: Workflow relies on precise and timely attendance status updates [TSSD-3507]
- **Accurate calendar day detection**: Enables precise monthly salary division and unpaid leave tracking [TSSD-1301]
- **Global payroll configuration system**: Determines daily rate calculation method and salary component selection [TSSD-1753]
- **Accurate tracking of working days and public holidays**: Determines precise daily rate calculation [TSSD-1807]


  ## Claims to Validate
  - **(system_behavior)** System allows only one proration method across entire organization (Confidence: high)
    - **Validation hint**: Attempt to set different proration rules for multiple employee categories
    - **Evidence**: [TSSD-4876]

  - **(workflow_step)** Proration configuration cannot distinguish between employee types (Confidence: high)
    - **Validation hint**: Check if different denominators can be set for white-collar vs blue-collar employees
    - **Evidence**: [TSSD-4876]

  - **(system_behavior)** System only calculates leave days after full month completion (Confidence: high)
    - **Validation hint**: Test leave calculation for employee departing mid-month
    - **Evidence**: [TSSD-2499]

  - **(calculation_rule)** Pro-rated leave calculation not automatically supported (Confidence: high)
    - **Validation hint**: Verify manual addition process for partial month leave
    - **Evidence**: [TSSD-2499]

  - **(system_behavior)** Daily Rate Calculator prevents direct configuration of Leave Encashment rates (Confidence: high)
    - **Validation hint**: Attempt to configure daily rate within calculator interface
    - **Evidence**: [OS-446]

  - **(workflow_step)** Payroll managers must use external methods to calculate leave encashment rates (Confidence: medium)
    - **Validation hint**: Verify alternative configuration pathways
    - **Evidence**: [OS-446]

  - **(system_behavior)** Attendance records can be displayed in a calendar grid format (Confidence: medium)
    - **Validation hint**: Verify ability to map attendance data onto calendar layout
    - **Evidence**: [TSSD-3774]

  - **(workflow_step)** Users can switch between list and calendar view for attendance data (Confidence: low)
    - **Validation hint**: Test view switching functionality in attendance module
    - **Evidence**: [TSSD-3774]

  - **(workflow_step)** Comments can be successfully added to daily attendance records (Confidence: high)
    - **Validation hint**: Verify comment submission from daily attendance page
    - **Evidence**: [TSSD-1517]

  - **(system_behavior)** Comment submission requires explicit employee/manager mention (Confidence: medium)
    - **Validation hint**: Test notification delivery with and without explicit mentions
    - **Evidence**: [TSSD-1517]

  - **(edge_case)** Custom reports have different comment submission behavior compared to daily attendance records (Confidence: high)
    - **Validation hint**: Compare comment submission process across different report types
    - **Evidence**: [TSSD-1517]

  - **(system_behavior)** Attendance status is calculated based on configured work timing and late arrival settings (Confidence: high)
    - **Validation hint**: Verify attendance marking logic across different employee configurations
    - **Evidence**: [TSSD-713]

  - **(workflow_step)** System requires precise timezone and work timing configuration for accurate attendance tracking (Confidence: high)
    - **Validation hint**: Test attendance marking with varied timezone and work timing settings
    - **Evidence**: [TSSD-713]

  - **(system_behavior)** System calculates hours until explicit checkout or shift end (Confidence: high)
    - **Validation hint**: Verify hour calculation across shift boundaries
    - **Evidence**: [TSSD-1433]

  - **(edge_case)** Next-day checkout triggers extended hours display (Confidence: high)
    - **Validation hint**: Test checkout scenarios across midnight
    - **Evidence**: [TSSD-1433]

  - **(system_behavior)** Extra hours column remains visible regardless of overtime policy (Confidence: high)
    - **Validation hint**: Disable overtime policy, confirm column visibility
    - **Evidence**: [TSSD-1433]

  - **(system_behavior)** Attendance reports must display identical location and edit status across different views (Confidence: high)
    - **Validation hint**: Compare T&P Adjustments and Daily Attendance reports for the same employee record
    - **Evidence**: [TSSD-1908]

  - **(workflow_step)** Location tracking must be consistently mapped in all attendance reporting modules (Confidence: medium)
    - **Validation hint**: Verify location status synchronization between different report types
    - **Evidence**: [TSSD-1908]

  - **(system_behavior)** Check-in button becomes unavailable after successful daily check-in/check-out (Confidence: high)
    - **Validation hint**: Verify button disappears after completing daily cycle
    - **Evidence**: [TSSD-430]

  - **(workflow_step)** Check-in functionality resets automatically the next day (Confidence: high)
    - **Validation hint**: Confirm check-in button reappears at start of new day
    - **Evidence**: [TSSD-430]

  - **(system_behavior)** System requires manual 'Mark as Absent' for employees with no check-in data (Confidence: high)
    - **Validation hint**: Verify manual click requirement in absence scenarios
    - **Evidence**: [TSSD-2206]

  - **(workflow_step)** No automated deduction request generation for full-day absences (Confidence: high)
    - **Validation hint**: Check if system can auto-generate deduction requests without manual marking
    - **Evidence**: [TSSD-2206]

  - **(system_behavior)** Conditional leave policies always calculate accrual on a daily basis (Confidence: high)
    - **Validation hint**: Verify accrual calculation for different conditional leave configurations
    - **Evidence**: [TSSD-1453]

  - **(workflow_step)** Users cannot change accrual frequency after selecting leave policy type (Confidence: high)
    - **Validation hint**: Attempt to modify accrual method after policy configuration
    - **Evidence**: [TSSD-1453]

  - **(system_behavior)** Platform login process allows multiple retry attempts before successful authentication (Confidence: high)
    - **Validation hint**: Verify login can succeed after initial failures
    - **Evidence**: [TSSD-2266]

  - **(edge_case)** Incognito/private browsing mode bypasses standard browser cache login limitations (Confidence: high)
    - **Validation hint**: Test login in regular and incognito modes
    - **Evidence**: [TSSD-2266]

  - **(system_behavior)** Leave status must propagate consistently across all shift rows for split shifts (Confidence: medium)
    - **Validation hint**: Verify status change on attendance report for multi-segment leave requests
    - **Evidence**: [OS-639]

  - **(calculation_rule)** Attendance report should reduce total shift count when leave is approved (Confidence: high)
    - **Validation hint**: Check shift count before and after leave request approval
    - **Evidence**: [OS-639]

  - **(system_behavior)** Biometric attendance API logs cannot be deleted or overwritten after initial submission (Confidence: high)
    - **Validation hint**: Attempt to delete API attendance logs via system interface
    - **Evidence**: [TSSD-1134]

  - **(workflow_step)** Attendance data corrections require manager-level override (Confidence: high)
    - **Validation hint**: Verify manager permissions for attendance record editing
    - **Evidence**: [TSSD-1134]

  - **(system_behavior)** Leave encashment calculation method can be configured to use basic salary or basic salary plus allowances (Confidence: high)
    - **Validation hint**: Verify configuration options in EOS setup screen
    - **Evidence**: [TSSD-3939]

  - **(workflow_step)** Configuration changes in daily wage calculation might not immediately update the End of Service Eligibility section (Confidence: medium)
    - **Validation hint**: Check UI after changing calculation method and verify display synchronization
    - **Evidence**: [TSSD-3939]

  - **(system_behavior)** Leave request status should remain consistent after administrator approval (Confidence: low)
    - **Validation hint**: Verify that approved requests do not unexpectedly revert to pending
    - **Evidence**: [TSSD-2056]

  - **(system_behavior)** Email notifications should only be sent when actual changes occur to leave request (Confidence: low)
    - **Validation hint**: Confirm no notifications are generated without user-initiated modifications
    - **Evidence**: [TSSD-2056]

  - **(system_behavior)** API attendance integration does not transmit office location data (Confidence: high)
    - **Validation hint**: Compare API punch data payload against biometric integration payload
    - **Evidence**: [TSSD-4151]

  - **(workflow_step)** Custom reports cannot display office location for API-based check-ins (Confidence: high)
    - **Validation hint**: Generate custom attendance report using API-integrated data source
    - **Evidence**: [TSSD-4151]

  - **(calculation_rule)** For conditional leave policies, system calculates leave balance using daily pro-rata method: (monthly allowance / 30) * days worked (Confidence: high)
    - **Validation hint**: Verify calculation across different partial month scenarios
    - **Evidence**: [TSSD-4203]

  - **(system_behavior)** Only leave policies marked as 'Conditional' use daily accrual calculation (Confidence: high)
    - **Validation hint**: Test leave balance calculation with different policy type settings
    - **Evidence**: [TSSD-4203]

  - **(system_behavior)** Monthly automated emails are triggered on the first day of each month for document expiration notifications (Confidence: high)
    - **Validation hint**: Verify email trigger date and content
    - **Evidence**: [TSSD-1357]

  - **(workflow_step)** No configurable start date field exists for documents (Confidence: high)
    - **Validation hint**: Check document creation/upload form for start date input
    - **Evidence**: [TSSD-1357]

  - **(system_behavior)** Notification frequency is fixed to monthly, with no option for daily alerts (Confidence: high)
    - **Validation hint**: Explore notification settings and verify customization options
    - **Evidence**: [TSSD-1357]

  - **(system_behavior)** System allows configuring different proration methods per employee group (Confidence: low)
    - **Validation hint**: Verify ability to set distinct calculation rules for head office and operational employees
    - **Evidence**: [TSSD-4882]

  - **(calculation_rule)** Proration can be calculated using working days or calendar days per employee category (Confidence: medium)
    - **Validation hint**: Test proration calculation for different employee group configurations
    - **Evidence**: [TSSD-4882]

  - **(system_behavior)** Daily leave accrual is only possible with conditional leave policies (Confidence: high)
    - **Validation hint**: Verify accrual settings across different cycle types
    - **Evidence**: [TSSD-4212]

  - **(configuration_rule)** Calendar year cycle defaults to monthly accrual without conditional policy (Confidence: high)
    - **Validation hint**: Test leave balance calculation in different cycle configurations
    - **Evidence**: [TSSD-4212]

  - **(system_behavior)** Daily quotes maintain consistent formatting across mobile and desktop platforms (Confidence: low)
    - **Validation hint**: Test quote display on multiple device types and screen sizes
    - **Evidence**: [TSSD-872]

  - **(edge_case)** Quotes are fully visible without truncation on all screen sizes (Confidence: low)
    - **Validation hint**: Verify complete quote visibility in different screen orientations
    - **Evidence**: [TSSD-872]

  - **(calculation_rule)** Salary is calculated based on 26 working days per month standard (Confidence: high)
    - **Validation hint**: Verify calculation matches 313 annual working days formula
    - **Evidence**: [TSSD-4905]

  - **(system_behavior)** Extra working days increase salary proportionally (Confidence: medium)
    - **Validation hint**: Test salary increase for days worked beyond 26
    - **Evidence**: [TSSD-4905]

  - **(system_behavior)** Fewer working days result in proportional salary reduction (Confidence: medium)
    - **Validation hint**: Verify salary decrease for days worked less than 26
    - **Evidence**: [TSSD-4905]

  - **(navigation)** Administrators can navigate to Admin Panel >> Company >> Newsfeed system posts to configure system post visibility (Confidence: high)
    - **Validation hint**: Verify navigation path and accessibility of configuration options
    - **Evidence**: [TSSD-120]

  - **(system_behavior)** System allows independent toggling of specific post types without disrupting entire Newsfeed (Confidence: high)
    - **Validation hint**: Test disabling individual system posts while maintaining Newsfeed functionality
    - **Evidence**: [TSSD-120]

  - **(system_behavior)** Payroll settings always override leave policy formulas for daily wage calculations (Confidence: high)
    - **Validation hint**: Verify that payroll-configured formula takes precedence in unpaid leave scenarios
    - **Evidence**: [TSSD-2648]

  - **(workflow_step)** Greyed-out formulas in leave policy indicate an active override from payroll settings (Confidence: medium)
    - **Validation hint**: Check if greyed-out formulas correlate with active payroll configuration
    - **Evidence**: [TSSD-2648]

  - **(integration)** Attendance records are accurately synchronized across different time zones (Confidence: medium)
    - **Validation hint**: Compare API logs from multiple time zones during weekend data transmission
    - **Evidence**: [TSSD-3419]

  - **(system_behavior)** API integration handles weekend check-in data transmission consistently (Confidence: low)
    - **Validation hint**: Test API data ingestion for Saturday and Sunday check-in records
    - **Evidence**: [TSSD-3419]

  - **(calculation_rule)** Daily wage is calculated by dividing monthly salary by 30.41 (Confidence: high)
    - **Validation hint**: Verify calculation with multiple salary and leave scenarios
    - **Evidence**: [TSSD-1581]

  - **(system_behavior)** Unpaid leave deductions do not automatically update when salary configuration changes (Confidence: high)
    - **Validation hint**: Test leave deduction recalculation after salary config update
    - **Evidence**: [TSSD-1581]

  - **(system_behavior)** System generates separate attendance records for each shift segment of an employee's work day (Confidence: high)
    - **Validation hint**: Verify multiple records are created for employee with configured split shifts
    - **Evidence**: [TSSD-4230]

  - **(workflow_step)** Attendance page displays multiple entries for employees with split shifts, which might initially confuse users (Confidence: medium)
    - **Validation hint**: Test user comprehension when viewing split shift attendance records
    - **Evidence**: [TSSD-4230]

  - **(calculation_rule)** Social security contributions should be calculated proportionally based on actual days worked in final employment month (Confidence: high)
    - **Validation hint**: Verify calculation matches (monthly contribution / total working days) * actual days worked
    - **Evidence**: [TSSD-2561]

  - **(system_behavior)** Full monthly contribution is currently displayed regardless of employment duration (Confidence: high)
    - **Validation hint**: Check if contribution amount remains constant across different partial month scenarios
    - **Evidence**: [TSSD-2561]

  - **(calculation_rule)** System must dynamically recognize and use 366 days for leap years in service period calculations (Confidence: high)
    - **Validation hint**: Test gratuity calculation for service periods including 2024 (a leap year)
    - **Evidence**: [TSSD-4179]

  - **(calculation_rule)** Gratuity calculation should use precise daily wage and correct service period for pro-rata computation (Confidence: high)
    - **Validation hint**: Verify calculation matches manual calculation and MOHRE standards
    - **Evidence**: [TSSD-4179]

  - **(calculation_rule)** Pro-rated salary is calculated as (basic salary + allowances) / 30 * days worked (Confidence: high)
    - **Validation hint**: Verify calculation across multiple departure dates and salary ranges
    - **Evidence**: [TSSD-2605]

  - **(system_behavior)** System consistently shows pro-rated amounts with potential decimal precision errors (Confidence: medium)
    - **Validation hint**: Test multiple scenarios with varied salary and departure date combinations
    - **Evidence**: [TSSD-2605]

  - **(calculation_rule)** Daily salary is calculated as (Basic Salary / 30 days) (Confidence: high)
    - **Validation hint**: Verify calculation for sample employee salaries
    - **Evidence**: [TSSD-1232]

  - **(system_behavior)** Partial years are converted using precise decimal (days/365) (Confidence: high)
    - **Validation hint**: Test calculation for employees with fractional service duration
    - **Evidence**: [TSSD-1232]

  - **(calculation_rule)** Gratuity uses 21 days per service year for limited contracts (Confidence: high)
    - **Validation hint**: Confirm multiplier in various service duration scenarios
    - **Evidence**: [TSSD-1232]

  - **(calculation_rule)** Daily wage is calculated by dividing total compensation by actual working days in the month (Confidence: high)
    - **Validation hint**: Compare system calculation against manual calculation for various months
    - **Evidence**: [TSSD-3832]

  - **(system_behavior)** Public holidays are not automatically excluded from working day calculations (Confidence: high)
    - **Validation hint**: Test calculation in months with public holidays
    - **Evidence**: [TSSD-3832]

  - **(edge_case)** System uses actual month working days, which may differ from standard leave policy days (Confidence: medium)
    - **Validation hint**: Verify calculation across different months and employment scenarios
    - **Evidence**: [TSSD-3832]

  - **(calculation_rule)** System calculates EOS using full monthly salary regardless of actual days worked (Confidence: high)
    - **Validation hint**: Test EOS calculation for mid-month employee with partial month salary
    - **Evidence**: [TSSD-4033]

  - **(system_behavior)** Cannot add leave after employee's departure date (Confidence: high)
    - **Validation hint**: Attempt to add unpaid leave post-departure and verify system response
    - **Evidence**: [TSSD-4033]

  - **(system_behavior)** Leave is only credited at the end of each calendar month (Confidence: high)
    - **Validation hint**: Verify leave balance updates occur on month's first day
    - **Evidence**: [TSSD-4042]

  - **(edge_case)** System does not automatically calculate pro-rata leave for employees departing mid-month (Confidence: high)
    - **Validation hint**: Test leave balance for employee exiting before month-end
    - **Evidence**: [TSSD-4042]

  - **(calculation_rule)** Gratuity calculation uses 21 days per year for first 5 years of service (Confidence: high)
    - **Validation hint**: Verify calculation for employee with exactly 5 years service
    - **Evidence**: [TSSD-4742]

  - **(system_behavior)** Leave days for incomplete months are not automatically included in EOS calculation (Confidence: high)
    - **Validation hint**: Test mid-month departure scenario with different accrual policies
    - **Evidence**: [TSSD-4742]

  - **(system_behavior)** System blocks EOS submission if any leave requests are detected, even if no actual conflicts exist (Confidence: high)
    - **Validation hint**: Attempt EOS submission with employee having zero pending/approved leaves
    - **Evidence**: [TSSD-3908]

  - **(calculation_rule)** Gratuity calculation includes service duration, excluding unpaid leave days per UAE regulations (Confidence: high)
    - **Validation hint**: Verify gratuity amount matches expected calculation based on service period
    - **Evidence**: [TSSD-3908]

  - **(calculation_rule)** Prorated salary is calculated by (Basic + Allowances) / total working days in month * working days in employment period (Confidence: high)
    - **Validation hint**: Verify calculation matches ticket example of (11000/18) * 4 = 2444.44
    - **Evidence**: [TSSD-4129]

  - **(system_behavior)** System excludes weekends and public holidays when calculating working days (Confidence: high)
    - **Validation hint**: Confirm working day count matches expected configuration
    - **Evidence**: [TSSD-4129]

  - **(interface)** UI should display detailed proration calculation steps, including total working days and included working days (Confidence: medium)
    - **Validation hint**: Add calculation breakdown fields to salary proration interface
    - **Evidence**: [TSSD-4129]

  - **(system_behavior)** System automatically detects and labels check-in locations based on configured office geofences (Confidence: high)
    - **Validation hint**: Verify location labeling across different office and external locations
    - **Evidence**: [TSSD-319]

  - **(workflow_step)** Current attendance reports do not support filtering by 'out of office' location type (Confidence: high)
    - **Validation hint**: Attempt to filter daily or custom reports by out-of-office status
    - **Evidence**: [TSSD-319]

  - **(calculation_rule)** Daily rate for unpaid leave must be calculated using salary configuration effective during the specific leave period (Confidence: high)
    - **Validation hint**: Compare calculated daily rates across different salary change scenarios
    - **Evidence**: [OS-867]

  - **(system_behavior)** System cannot dynamically adjust daily rates based on historical salary configurations (Confidence: high)
    - **Validation hint**: Test rate calculations for employees with mid-year salary changes
    - **Evidence**: [OS-867]

  - **(calculation_rule)** System correctly handles February 29th in leap year service duration calculations (Confidence: medium)
    - **Validation hint**: Compare manual calculation with system output for leap year scenarios
    - **Evidence**: [TSSD-1625]

  - **(system_behavior)** Departure date is consistently counted as a working day in service duration calculation (Confidence: medium)
    - **Validation hint**: Verify day count includes or excludes departure date
    - **Evidence**: [TSSD-1625]

  - **(calculation_rule)** Daily rate is calculated as monthly salary divided by 30 (Confidence: high)
    - **Validation hint**: Verify daily rate calculation for multiple salary levels
    - **Evidence**: [TSSD-4779]

  - **(system_behavior)** Partial years are calculated by dividing total calendar days by 365 (Confidence: high)
    - **Validation hint**: Test calculation for service periods crossing leap years
    - **Evidence**: [TSSD-4779]

  - **(workflow_step)** Gratuity calculation is independent of departure reason post-2021 UAE Labor Law (Confidence: medium)
    - **Validation hint**: Compare gratuity amounts for resignation and termination scenarios
    - **Evidence**: [TSSD-4779]

  - **(calculation_rule)** Gratuity calculation uses basic salary/30 * 21 days * service years with potential minor computational variations (Confidence: high)
    - **Validation hint**: Compare system calculation against manual computation for multiple scenarios
    - **Evidence**: [TSSD-3123]

  - **(system_behavior)** System supports pro-rata calculations for partial service years (Confidence: medium)
    - **Validation hint**: Test gratuity computation for employees with incomplete contract periods
    - **Evidence**: [TSSD-3123]

  - **(calculation_rule)** First 5 years of service are calculated at 21 days per year (Confidence: high)
    - **Validation hint**: Verify calculation for employees with 5 years of service
    - **Evidence**: [TSSD-2252]

  - **(calculation_rule)** Service years above 5 years are calculated at 30 days per year (Confidence: high)
    - **Validation hint**: Verify calculation for employees with more than 5 years of service
    - **Evidence**: [TSSD-2252]

  - **(system_behavior)** Partial years use day-based pro-rata calculation with 366-day divisor for leap years (Confidence: medium)
    - **Validation hint**: Test calculation for service periods containing leap years
    - **Evidence**: [TSSD-2252]

  - **(calculation_rule)** Gratuity calculation varies based on contract type and departure reason (Confidence: high)
    - **Validation hint**: Test calculation for limited and unlimited contracts with different departure scenarios
    - **Evidence**: [TSSD-4796]

  - **(system_behavior)** Manual departure reason change can trigger different calculation results (Confidence: high)
    - **Validation hint**: Modify departure reason and verify gratuity amount changes
    - **Evidence**: [TSSD-4796]

  - **(calculation_rule)** Leave balance is calculated by multiplying completed months by monthly accrual rate, plus prorated daily accrual for partial month (Confidence: high)
    - **Validation hint**: Verify calculation matches support team's manual breakdown
    - **Evidence**: [TSSD-3139]

  - **(system_behavior)** Daily accrual rate is computed by dividing monthly accrual rate by total working days in the month (Confidence: high)
    - **Validation hint**: Check daily rate calculation against monthly rate
    - **Evidence**: [TSSD-3139]

  - **(system_behavior)** Payroll cycle cannot be changed after initial configuration (Confidence: high)
    - **Validation hint**: Attempt to modify existing payroll cycle and verify system response
    - **Evidence**: [TSSD-3879]

  - **(workflow_step)** Changing payroll cycle results in loss of historical payroll data access (Confidence: high)
    - **Validation hint**: Modify cycle and check previous month's accessibility
    - **Evidence**: [TSSD-3879]

  - **(calculation_rule)** Salary proration automatically adjusts to new cycle length for new joiners (Confidence: medium)
    - **Validation hint**: Create new employee profile after cycle change and verify proration calculation
    - **Evidence**: [TSSD-3879]

  - **(calculation_rule)** Daily rate is calculated by dividing (Basic Salary + Allowances) by total working days in the month (Confidence: high)
    - **Validation hint**: Verify calculation matches ticket example of AED 5500 / working days
    - **Evidence**: [TSSD-2212]

  - **(system_behavior)** Once unpaid leave deduction is approved, the calculation remains locked and unchanged (Confidence: high)
    - **Validation hint**: Confirm deduction amount does not modify after holiday calendar changes
    - **Evidence**: [TSSD-2212]

  - **(calculation_rule)** Daily wage is always calculated as Basic Salary / 30 (Confidence: high)
    - **Validation hint**: Verify no configuration allows changing daily wage divisor
    - **Evidence**: [TSSD-2043]

  - **(system_behavior)** System rounds service duration to nearest day/year (Confidence: medium)
    - **Validation hint**: Compare manual vs system calculation for edge cases
    - **Evidence**: [TSSD-2043]

  - **(calculation_rule)** GOSI deduction in payroll template export must reflect prorated amount based on actual working days (Confidence: high)
    - **Validation hint**: Compare exported report value against manual calculation for mid-month joiner
    - **Evidence**: [TSSD-3249]

  - **(system_behavior)** Payroll table download provides accurate prorated values when template export shows incorrect information (Confidence: medium)
    - **Validation hint**: Verify values across different report formats for same employee
    - **Evidence**: [TSSD-3249]

  - **(calculation_rule)** System calculates leave encashment using monthly proration by default (Confidence: high)
    - **Validation hint**: Verify leave balance for mid-month departure scenarios
    - **Evidence**: [TSSD-4813]

  - **(system_behavior)** Conditional leave policy can force daily proration for all employees (Confidence: medium)
    - **Validation hint**: Test policy configuration impact on leave accrual calculation
    - **Evidence**: [TSSD-4813]

  - **(calculation_rule)** Leave salary calculation changes based on 'Custom Days' vs 'Calendar Days' day type setting (Confidence: high)
    - **Validation hint**: Verify salary calculation for leave requests with and without public holidays
    - **Evidence**: [TSSD-2106]

  - **(system_behavior)** Public holiday exclusion flag impacts day count in leave salary calculation (Confidence: high)
    - **Validation hint**: Test leave salary for intervals containing public holidays with exclusion flag on/off
    - **Evidence**: [TSSD-2106]

  - **(calculation_rule)** Daily wage can be calculated using basic or gross salary base (Confidence: medium)
    - **Validation hint**: Verify configurable wage calculation options in payroll settings
    - **Evidence**: [TSSD-3487]

  - **(system_behavior)** Social security components should only display when explicitly configured (Confidence: high)
    - **Validation hint**: Check component filtering logic for country-specific payroll configurations
    - **Evidence**: [TSSD-3487]

  - **(calculation_rule)** Daily rate calculation varies based on leave type (unpaid leave vs sick leave) (Confidence: high)
    - **Validation hint**: Verify different formulas for various leave categories
    - **Evidence**: [TSSD-3213]

  - **(system_behavior)** Working days exclude weekends when calculating daily rate (Confidence: high)
    - **Validation hint**: Check calculation for months with different weekend patterns
    - **Evidence**: [TSSD-3213]

  - **(calculation_rule)** Daily unpaid leave rate can be calculated using multiple divisor methods (Confidence: high)
    - **Validation hint**: Verify configurable calculation options in payroll settings
    - **Evidence**: [TSSD-1798]

  - **(system_behavior)** System dynamically recalculates historical rates using current configuration (Confidence: high)
    - **Validation hint**: Compare displayed rate with original calculation for past periods
    - **Evidence**: [TSSD-1798]

  - **(system_behavior)** Payroll cycles become completely immutable upon closure (Confidence: high)
    - **Validation hint**: Attempt to modify a closed payroll cycle's variable pay entry
    - **Evidence**: [TSSD-3880]

  - **(workflow_step)** Correcting payment errors requires complete payroll cycle reopening (Confidence: high)
    - **Validation hint**: Verify if partial corrections are possible without full cycle reopening
    - **Evidence**: [TSSD-3880]

  - **(calculation_rule)** Daily wage is calculated using a fixed divisor defined in leave policy configuration (Confidence: high)
    - **Validation hint**: Verify salary calculation across different month lengths
    - **Evidence**: [TSSD-4731]

  - **(system_behavior)** System does not dynamically adjust divisor based on actual calendar month length (Confidence: high)
    - **Validation hint**: Test prorated calculations for months with 30 and 31 days
    - **Evidence**: [TSSD-4731]

  - **(calculation_rule)** System automatically generates full month salary deduction and recalculates proportionally based on working days (Confidence: high)
    - **Validation hint**: Verify calculation for employees with partial month employment
    - **Evidence**: [TSSD-2597]

  - **(system_behavior)** Platform cannot delete automatically generated EOS deductions (Confidence: high)
    - **Validation hint**: Attempt to remove platform-generated deductions and verify system response
    - **Evidence**: [TSSD-2597]

  - **(calculation_rule)** Leave salary accrual report must calculate using working days when specified in formula (Confidence: high)
    - **Validation hint**: Configure formula with working days, verify report uses working days divisor
    - **Evidence**: [TSSD-3402]

  - **(system_behavior)** Calculation engine must respect user-configured divisors in leave salary formulas (Confidence: medium)
    - **Validation hint**: Test multiple formula configurations to ensure correct day calculation
    - **Evidence**: [TSSD-3402]

  - **(calculation_rule)** Salary is calculated strictly based on working days, excluding public holidays (Confidence: high)
    - **Validation hint**: Test salary calculation for various departure dates near public holidays
    - **Evidence**: [TSSD-3995]

  - **(system_behavior)** Departure date near a public holiday results in identical salary calculation (Confidence: high)
    - **Validation hint**: Verify salary remains constant when changing departure date around a holiday
    - **Evidence**: [TSSD-3995]

  - **(system_behavior)** Future leave requests are automatically deleted if they extend beyond the employee's departure date (Confidence: high)
    - **Validation hint**: Create a leave request for an employee with an offboarding date, verify if future leave is deleted
    - **Evidence**: [TSSD-4720]

  - **(calculation_rule)** Payroll deductions are created and can be deleted based on leave request status during offboarding (Confidence: high)
    - **Validation hint**: Submit and then reject a payroll transaction with an unpaid leave deduction
    - **Evidence**: [TSSD-4720]

  - **(calculation_rule)** Leave accrual balance is currently calculated using post-GOSI salary (Confidence: high)
    - **Validation hint**: Compare calculated leave balance with manual computation
    - **Evidence**: [TSSD-291]

  - **(system_behavior)** System uses calendar days instead of working days for leave accrual (Confidence: high)
    - **Validation hint**: Verify day counting method in leave balance calculation
    - **Evidence**: [TSSD-291]

  - **(system_behavior)** Leave accrual report shows a virtual projection using Leave Availed * Daily Wage formula (Confidence: high)
    - **Validation hint**: Compare report calculation against actual leave salary request
    - **Evidence**: [TSSD-4543]

  - **(calculation_rule)** One-month leave salary always equals standard monthly salary (Confidence: high)
    - **Validation hint**: Verify leave salary request matches monthly salary
    - **Evidence**: [TSSD-4543]

  - **(calculation_rule)** Leave balance is calculated daily based on conditional allowance logic (Confidence: high)
    - **Validation hint**: Verify balance changes across different hiring dates and cycle periods
    - **Evidence**: [TSSD-3822]

  - **(edge_case)** Employees hired on February 29th experience a 1-day calculation anomaly in their first leave cycle (Confidence: medium)
    - **Validation hint**: Test leave balance for leap year hires starting February 28th
    - **Evidence**: [TSSD-3822]

  - **(calculation_rule)** Monthly leave accrual is calculated with a precise daily rate (Confidence: high)
    - **Validation hint**: Verify monthly accrual matches system configuration
    - **Evidence**: [TSSD-4243]

  - **(system_behavior)** Maximum 25 days can be carried forward between leave cycles (Confidence: high)
    - **Validation hint**: Test balance projection with large carry-over
    - **Evidence**: [TSSD-4243]

  - **(workflow_step)** Cross-cycle leave requests require complex balance calculations (Confidence: medium)
    - **Validation hint**: Verify balance deduction across multiple cycles
    - **Evidence**: [TSSD-4243]

  - **(system_behavior)** Leave accrual method changes based on policy type and toggle configuration (Confidence: high)
    - **Validation hint**: Verify accrual calculation for conditional and non-conditional policies
    - **Evidence**: [TSSD-3082]

  - **(calculation_rule)** Monthly accrual may cause inaccurate EOS leave settlement for mid-month exits (Confidence: high)
    - **Validation hint**: Test leave encashment for employees leaving partway through a month
    - **Evidence**: [TSSD-3082]

  - **(calculation_rule)** Public holidays during leave periods are correctly counted as paid working days in prorated salary calculations (Confidence: medium)
    - **Validation hint**: Compare system-generated salary with manually calculated salary across different leave scenarios
    - **Evidence**: [TSSD-2937]

  - **(system_behavior)** Leave requests spanning public holidays are processed with accurate day counting logic (Confidence: medium)
    - **Validation hint**: Test leave requests that include public holidays and verify total working days calculation
    - **Evidence**: [TSSD-2937]

  - **(calculation_rule)** Leave salary can be configured using Basic/30 days or working days method (Confidence: high)
    - **Validation hint**: Verify multiple calculation method options in configuration
    - **Evidence**: [TSSD-3779]

  - **(system_behavior)** Leave salary accrual report must reflect configured calculation method (Confidence: medium)
    - **Validation hint**: Generate report with different configuration methods and compare output
    - **Evidence**: [TSSD-3779]

  - **(calculation_rule)** Leave salary accrual calculations dynamically adjust based on monthly working days (Confidence: high)
    - **Validation hint**: Compare leave salary reports across months with different working day counts
    - **Evidence**: [TSSD-3648]

  - **(system_behavior)** Users can switch between 'working days' and 'custom days' settings for leave encashment calculations (Confidence: high)
    - **Validation hint**: Verify configuration options in Daily Wage Calculator settings
    - **Evidence**: [TSSD-3648]

  - **(calculation_rule)** Daily wage can be calculated using different divisors for leave salary and salary proration (Confidence: high)
    - **Validation hint**: Verify independent configuration paths
    - **Evidence**: [TSSD-2321]

  - **(system_behavior)** System allows manual alignment of daily wage calculation methods (Confidence: medium)
    - **Validation hint**: Test configuration flexibility
    - **Evidence**: [TSSD-2321]

  - **(calculation_rule)** Daily rate is calculated by dividing monthly salary by 30 (Confidence: high)
    - **Validation hint**: Verify calculation matches employee's monthly salary
    - **Evidence**: [TSSD-3226]

  - **(system_behavior)** Leave salary is computed by multiplying daily rate by approved leave days (Confidence: medium)
    - **Validation hint**: Check calculation matches approved leave period
    - **Evidence**: [TSSD-3226]

  - **(workflow_step)** Incorrect calculations require deleting and resubmitting leave salary request (Confidence: high)
    - **Validation hint**: Confirm resubmission triggers accurate recalculation
    - **Evidence**: [TSSD-3226]

  - **(calculation_rule)** Leave salary is calculated using 30.41 days per month (Confidence: high)
    - **Validation hint**: Verify daily rate calculation matches ticket example
    - **Evidence**: [TSSD-3275]

  - **(system_behavior)** Leave salary deduction applies only to current payroll cycle (Confidence: high)
    - **Validation hint**: Check that deduction matches current month's portion
    - **Evidence**: [TSSD-3275]

  - **(workflow_step)** System computes total leave salary before applying monthly deduction (Confidence: medium)
    - **Validation hint**: Trace calculation steps in UI or reports
    - **Evidence**: [TSSD-3275]

  - **(calculation_rule)** Leave salary is calculated by dividing (Basic + Housing) by 30 and multiplying by leave days (Confidence: high)
    - **Validation hint**: Verify calculation for different leave periods
    - **Evidence**: [TSSD-4387]

  - **(system_behavior)** Allowances excluded from leave salary formula are still paid in full during leave (Confidence: high)
    - **Validation hint**: Check remaining salary component payments
    - **Evidence**: [TSSD-4387]

  - **(configuration)** No option exists to prorate or exclude specific allowances during leave (Confidence: high)
    - **Validation hint**: Examine salary component configuration screens
    - **Evidence**: [TSSD-4387]

  - **(system_behavior)** Only one leave salary policy should be active per employee group (Confidence: high)
    - **Validation hint**: Verify that multiple active policies trigger a system warning
    - **Evidence**: [TSSD-2934]

  - **(calculation_rule)** Daily rate calculations must update immediately when policy is modified (Confidence: medium)
    - **Validation hint**: Test policy change and verify instant calculation update
    - **Evidence**: [TSSD-2934]

  - **(workflow_step)** Minimum days threshold must be consistently enforced across leave salary policies (Confidence: low)
    - **Validation hint**: Validate minimum days requirement prevents leave salary request generation
    - **Evidence**: [TSSD-2934]

  - **(system_behavior)** Leave payments are calculated using a daily rate formula based on total salary percentage (Confidence: high)
    - **Validation hint**: Verify daily rate calculation across different leave policy configurations
    - **Evidence**: [TSSD-3654]

  - **(workflow_step)** System cannot selectively exclude salary components during leave payment (Confidence: high)
    - **Validation hint**: Test leave policy configuration with multiple salary components
    - **Evidence**: [TSSD-3654]

  - **(system_behavior)** System applies a single, global proration formula for all employees (Confidence: high)
    - **Validation hint**: Attempt to configure different formulas for employee groups
    - **Evidence**: [TSSD-4375]

  - **(workflow_step)** Proration formula cannot be segmented by employee classification (Confidence: high)
    - **Validation hint**: Verify inability to create group-specific proration rules
    - **Evidence**: [TSSD-4375]

  - **(system_behavior)** Air ticket allowances are added in full at renewal cycle end, not pro-rated daily (Confidence: high)
    - **Validation hint**: Check payroll configuration and verify bulk allocation timing
    - **Evidence**: [TSSD-3146]

  - **(workflow_step)** Employees cannot access partial air ticket allowances before renewal cycle completion (Confidence: high)
    - **Validation hint**: Attempt to request air ticket mid-cycle and verify system response
    - **Evidence**: [TSSD-3146]

  - **(system_behavior)** Salary proration calculation uses work week configuration to determine working days (Confidence: high)
    - **Validation hint**: Verify proration result matches configured work week
    - **Evidence**: [TSSD-4292]

  - **(calculation_rule)** Work week can be configured to include all 7 days as working days (Confidence: high)
    - **Validation hint**: Test proration with 7-day work week configuration
    - **Evidence**: [TSSD-4292]

  - **(system_behavior)** GOSI percentage data retrieval occurs daily at 5 AM DBX time with potential timestamp variance (Confidence: medium)
    - **Validation hint**: Verify exact timestamp of data retrieval across multiple days
    - **Evidence**: [OS-3034]

  - **(workflow_step)** Backend process can retrieve data slightly before or after scheduled time (Confidence: high)
    - **Validation hint**: Check timestamp consistency and time zone handling
    - **Evidence**: [OS-3034]

  - **(calculation_rule)** System applies different gratuity calculation rules for limited and unlimited contracts (Confidence: high)
    - **Validation hint**: Compare gratuity calculations for multiple contract types with known service durations
    - **Evidence**: [TSSD-375]

  - **(system_behavior)** Gratuity calculation switches from 21 to 30 days per year after 5 years of service (Confidence: medium)
    - **Validation hint**: Test calculation for employees with service periods before and after 5-year mark
    - **Evidence**: [TSSD-375]

  - **(system_behavior)** Leave balance cannot be manually adjusted if daily attendance records exist (Confidence: high)
    - **Validation hint**: Attempt to reduce leave balance with active attendance records
    - **Evidence**: [TSSD-3789]

  - **(workflow_step)** Leave balance corrections require backend database intervention (Confidence: high)
    - **Validation hint**: Verify no direct UI method exists for balance adjustment
    - **Evidence**: [TSSD-3789]

  - **(system_behavior)** Leave salary is calculated first using selected method (calendar days or custom days) before deducting from active salary cycle (Confidence: high)
    - **Validation hint**: Verify calculation sequence in multiple scenarios
    - **Evidence**: [TSSD-4349]

  - **(configuration_rule)** Users can configure different proration rules for each allowance type (Confidence: high)
    - **Validation hint**: Test selective proration of basic salary, housing, and other allowances
    - **Evidence**: [TSSD-4349]

  - **(calculation_rule)** Salary proration must work consistently for past and future departure dates (Confidence: high)
    - **Validation hint**: Test proration with departure dates before and after payroll processing date
    - **Evidence**: [TSSD-3058]

  - **(system_behavior)** Daily wage calculator must support dynamic date-based proration logic (Confidence: medium)
    - **Validation hint**: Verify prorated amount calculation across multiple departure date scenarios
    - **Evidence**: [TSSD-3058]

  - **(calculation_rule)** Daily rate is calculated by dividing total monthly compensation by a configurable divisor (e.g., 30 days) (Confidence: high)
    - **Validation hint**: Verify daily rate calculation matches configured divisor
    - **Evidence**: [TSSD-3512]

  - **(system_behavior)** Prorated salary multiplies daily rate by actual calendar days worked, not configured divisor days (Confidence: high)
    - **Validation hint**: Compare calculated days against actual calendar days
    - **Evidence**: [TSSD-3512]

  - **(system_behavior)** Changing daily rate configuration after employee offboarding does not automatically update proration calculation (Confidence: high)
    - **Validation hint**: Offboard employee, change daily rate, verify proration calculation remains unchanged
    - **Evidence**: [TSSD-2518]

  - **(workflow_step)** Rehiring and re-offboarding an employee triggers a fresh proration calculation (Confidence: high)
    - **Validation hint**: Perform rehire and re-offboarding, confirm proration updates with new configuration
    - **Evidence**: [TSSD-2518]

  - **(calculation_rule)** Daily wage is calculated by dividing total monthly salary by total working days in the month (Confidence: high)
    - **Validation hint**: Verify calculation matches ticket example of (5300 + 700 + 500) / 23
    - **Evidence**: [TSSD-4303]

  - **(system_behavior)** Weekends are automatically excluded from working day calculations (Confidence: high)
    - **Validation hint**: Confirm system detects and removes Saturday/Sunday from monthly working days
    - **Evidence**: [TSSD-4303]

  - **(edge_case)** Prorated salary equals daily wage multiplied by actual working days in termination month (Confidence: high)
    - **Validation hint**: Test mid-month termination scenarios with varying departure dates
    - **Evidence**: [TSSD-4303]

  - **(system_behavior)** Processed entries cannot be filtered by Time Off or Payroll destination (Confidence: high)
    - **Validation hint**: Attempt to filter processed entries in Time and Pay Adjustments section
    - **Evidence**: [TSSD-463]

  - **(workflow_step)** Users must download data and manually separate Time Off and Payroll entries (Confidence: high)
    - **Validation hint**: Verify manual filtering process for processed adjustments
    - **Evidence**: [TSSD-463]

  - **(system_behavior)** Timesheet interface does not automatically calculate total daily hours across activities (Confidence: high)
    - **Validation hint**: Verify no automatic daily hours summary exists
    - **Evidence**: [TSSD-696]

  - **(workflow_step)** Users must manually sum individual activity hours to determine daily work time (Confidence: high)
    - **Validation hint**: Test daily hours calculation process
    - **Evidence**: [TSSD-696]

  - **(navigation)** Users can modify task dates after initial logging (Confidence: high)
    - **Validation hint**: Verify ability to change task date in timesheet interface
    - **Evidence**: [TSSD-4409]

  - **(system_behavior)** Changing task date moves entry to new date without preserving original date visibility (Confidence: high)
    - **Validation hint**: Log task, change date, confirm original date no longer shows entry
    - **Evidence**: [TSSD-4409]

  - **(system_behavior)** System automatically generates leave deductions based on predefined rules (Confidence: high)
    - **Validation hint**: Verify auto-deduction creation process in multiple scenarios
    - **Evidence**: [TSSD-3946]

  - **(workflow_step)** Administrators cannot manually set auto-generated deduction amounts to zero (Confidence: high)
    - **Validation hint**: Attempt to modify deduction amount in various user roles
    - **Evidence**: [TSSD-3946]

  - **(system_behavior)** System cannot manually adjust used days for unpaid leave requests (Confidence: high)
    - **Validation hint**: Attempt to modify used days in an unpaid leave request
    - **Evidence**: [TSSD-2384]

  - **(workflow_step)** Multi-month unpaid leave requests cause deduction accumulation across payroll months (Confidence: high)
    - **Validation hint**: Submit a multi-month unpaid leave request and verify payroll calculations
    - **Evidence**: [TSSD-2384]

  - **(system_behavior)** Deleting a leave request should automatically remove all associated payroll deductions (Confidence: low)
    - **Validation hint**: Verify deduction removal after leave request deletion across multiple scenarios
    - **Evidence**: [TSSD-2532]

  - **(calculation_rule)** Changing daily wage calculation should not generate duplicate deductions (Confidence: low)
    - **Validation hint**: Test wage recalculation with existing leave transactions
    - **Evidence**: [TSSD-2532]

  - **(calculation_rule)** Payslip must display total unpaid leave days matching total deduction amount (Confidence: high)
    - **Validation hint**: Verify day count matches deduction calculation across multiple months
    - **Evidence**: [TSSD-3044]

  - **(system_behavior)** System must support cross-month leave day aggregation in single payroll cycle (Confidence: medium)
    - **Validation hint**: Test leave processing for retrospective approvals spanning multiple months
    - **Evidence**: [TSSD-3044]

  - **(calculation_rule)** Daily wage is calculated by dividing (basic salary + allowance) by total working days, excluding weekends and public holidays (Confidence: high)
    - **Validation hint**: Verify calculation across different employee profiles and leave scenarios
    - **Evidence**: [TSSD-4464]

  - **(system_behavior)** Time Off module does not automatically send complete leave request details to Payroll module during calculation (Confidence: high)
    - **Validation hint**: Test synchronization between modules when public holidays are modified
    - **Evidence**: [TSSD-4464]

  - **(calculation_rule)** Daily wage is calculated by dividing monthly salary by 30.42, not calendar days (Confidence: high)
    - **Validation hint**: Verify calculation with multiple salary and leave duration scenarios
    - **Evidence**: [TSSD-4368]

  - **(system_behavior)** Deduction can exceed monthly salary for extended unpaid leave periods (Confidence: high)
    - **Validation hint**: Test deduction calculation for full month absence
    - **Evidence**: [TSSD-4368]

  - **(system_behavior)** When 'Overwrite' is enabled in Payroll Configuration, Leave Policy UI cannot modify daily wage calculation method (Confidence: high)
    - **Validation hint**: Attempt to change calculation method in Leave Policy with Overwrite enabled
    - **Evidence**: [TSSD-4947]

  - **(workflow_step)** Payroll Configuration settings take precedence over Leave Policy display when 'Overwrite' is active (Confidence: high)
    - **Validation hint**: Compare displayed vs. actual calculation method with Overwrite enabled
    - **Evidence**: [TSSD-4947]

  - **(edge_case)** Half-paid and unpaid leave types may have different daily wage calculation methods depending on configuration (Confidence: medium)
    - **Validation hint**: Test calculation methods for multiple leave type scenarios
    - **Evidence**: [TSSD-4947]

  - **(system_behavior)** System supports multiple leave policies with different daily rate calculation methods (Confidence: high)
    - **Validation hint**: Verify multiple policy configurations can coexist with distinct formulas
    - **Evidence**: [TSSD-1746]

  - **(calculation_rule)** Daily rate can be calculated using Basic/Calendar Days or Basic+Allowances/Calendar Days (Confidence: high)
    - **Validation hint**: Test different leave policy configurations and compare calculation results
    - **Evidence**: [TSSD-1746]

  - **(workflow_step)** Leave policy must be explicitly selected for each leave request (Confidence: medium)
    - **Validation hint**: Ensure system requires policy selection during leave request submission
    - **Evidence**: [TSSD-1746]

  - **(calculation_rule)** Daily wage is calculated by dividing total salary by exact calendar days in the month (Confidence: high)
    - **Validation hint**: Verify calculation for different months with varying day counts
    - **Evidence**: [TSSD-1227]

  - **(system_behavior)** System does not support custom day divisors for leave salary calculations (Confidence: high)
    - **Validation hint**: Attempt to configure custom divisor and confirm system rejection
    - **Evidence**: [TSSD-1227]

  - **(system_behavior)** Absence workflow only triggers when 'mark as absent' is manually clicked (Confidence: high)
    - **Validation hint**: Attempt to generate absence notification without manual click
    - **Evidence**: [TSSD-3438]

  - **(edge_case)** System-default absent records do not generate workflow notifications (Confidence: high)
    - **Validation hint**: Verify notification behavior for system-generated absences
    - **Evidence**: [TSSD-3438]

  - **(system_behavior)** Workflow triggers daily at configured time to check previous day's absent employees (Confidence: medium)
    - **Validation hint**: Verify event execution at specified time with test attendance records
    - **Evidence**: [TSSD-3507]

  - **(workflow_step)** Email notification is generated only for employees with 'absent' status (Confidence: high)
    - **Validation hint**: Test with multiple employee status scenarios
    - **Evidence**: [TSSD-3507]

  - **(calculation_rule)** Daily wage is calculated by dividing monthly salary by actual calendar days in the month (Confidence: high)
    - **Validation hint**: Verify calculation for different months, especially February
    - **Evidence**: [TSSD-1301]

  - **(system_behavior)** Backend calculation remains accurate even if remarks display might show inconsistent information (Confidence: high)
    - **Validation hint**: Compare backend calculation with displayed remarks
    - **Evidence**: [TSSD-1301]

  - **(calculation_rule)** Daily rate is calculated by dividing salary by total working days using global configuration settings (Confidence: high)
    - **Validation hint**: Verify daily rate calculation across different policy configurations
    - **Evidence**: [TSSD-1753]

  - **(system_behavior)** Global daily rate configuration always overrides policy-specific leave deduction settings (Confidence: high)
    - **Validation hint**: Test configuration hierarchy and precedence rules
    - **Evidence**: [TSSD-1753]

  - **(calculation_rule)** Daily rate is calculated as (Basic Salary + Allowances) / Working Days, excluding public holidays (Confidence: high)
    - **Validation hint**: Verify calculation matches ticket example of 4000/17 = 235.294
    - **Evidence**: [TSSD-1807]

  - **(system_behavior)** Daily rate displayed must match the leave occurrence month, not the payroll processing month (Confidence: high)
    - **Validation hint**: Compare displayed rate with month of leave request
    - **Evidence**: [TSSD-1807]

  

  ## Reference Tickets Summary
  **Total unique tickets**: 103
  **Ticket keys**: TSSD-4876, TSSD-2499, OS-446, TSSD-3774, TSSD-1517, TSSD-713, TSSD-1433, TSSD-1908, TSSD-430, TSSD-2206, TSSD-1453, TSSD-2266, OS-639, TSSD-1134, TSSD-3939, TSSD-2056, TSSD-4151, TSSD-4203, TSSD-1357, TSSD-4882, TSSD-4212, TSSD-872, TSSD-4905, TSSD-120, TSSD-2648, TSSD-3419, TSSD-1581, TSSD-4230, TSSD-2561, TSSD-4179, TSSD-2605, TSSD-1232, TSSD-3832, TSSD-4033, TSSD-4042, TSSD-4742, TSSD-3908, TSSD-4129, TSSD-319, OS-867, TSSD-1625, TSSD-4779, TSSD-3123, TSSD-2252, TSSD-4796, TSSD-3139, TSSD-3879, TSSD-2212, TSSD-2043, TSSD-3249, TSSD-4813, TSSD-2106, TSSD-3487, TSSD-3213, TSSD-1798, TSSD-3880, TSSD-4731, TSSD-2597, TSSD-3402, TSSD-3995, TSSD-4720, TSSD-291, TSSD-4543, TSSD-3822, TSSD-4243, TSSD-3082, TSSD-2937, TSSD-3779, TSSD-3648, TSSD-2321, TSSD-3226, TSSD-3275, TSSD-4387, TSSD-2934, TSSD-3654, TSSD-4375, TSSD-3146, TSSD-4292, OS-3034, TSSD-375, TSSD-3789, TSSD-4349, TSSD-3058, TSSD-3512, TSSD-2518, TSSD-4303, TSSD-463, TSSD-696, TSSD-4409, TSSD-3946, TSSD-2384, TSSD-2532, TSSD-3044, TSSD-4464, TSSD-4368, TSSD-4947, TSSD-1746, TSSD-1227, TSSD-3438, TSSD-3507, TSSD-1301, TSSD-1753, TSSD-1807

  ## Analysis Metadata
  - **Source**: jira
  - **Analysis date**: 2025-12-16
  - **Project distribution**: {"tssd":81,"os":4,"TSSD":18}
  