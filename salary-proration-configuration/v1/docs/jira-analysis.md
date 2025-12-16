# Jira Analysis – Salary Proration Configuration

  Generated on: 2025-12-16

  ## Operational Reality Overview
  Based on comprehensive Jira ticket analysis, the Salary Proration Configuration represents a critical payroll feature with 
  significant operational complexity and customer impact. Customer requests and issues reveal that organizations primarily need this feature to configure different salary proration methods for multiple employee categories, and calculate accurate pro-rated leave encashment for mid-month employee departures, and configure daily rate for leave encashment directly within daily rate calculator, and visualize employee attendance patterns through calendar interface, and add contextual comments to attendance records, and notify employees/managers about attendance events, and accurately track employee check-in times across different timezones, and generate comprehensive attendance records for time tracking and legal documentation, and verify consistent attendance records across different reporting modules, and log daily work attendance, and automate absence deduction request generation for employees with no attendance record, and configure leave balance accrual to match organizational policy, and successfully log into bayzat admin platform, and accurately track employee attendance across different shift configurations, and correct historical biometric attendance data, and configure leave encashment calculation using only basic salary, and track and approve employee leave requests, and calculate unpaid leave deductions accurately, and generate comprehensive attendance reports with complete location details, and understand precise leave balance calculation method, and track document expiration dates, and receive timely document expiry notifications, and configure different salary proration methods for distinct employee groups, and migrate leave accrual between work anniversary and calendar year cycles, and configure daily leave proration for accurate end-of-service calculations, and view daily motivational quotes across different platforms, and automate salary calculation based on precise working days, and selectively disable specific system-generated newsfeed posts, and achieve consistent daily wage formula across leave and payroll modules, and synchronize attendance records across different systems, and accurately calculate unpaid leave deductions, and track detailed employee work hours across multiple shift segments, and accurately calculate prorated employer social security contributions for employees offboarded mid-month, and calculate accurate end of service gratuity considering exact service days, and calculate accurate pro-rated salary for employees leaving mid-month, and understand precise eos gratuity calculation methodology, and accurately calculate end-of-service daily wage, and accurately calculate prorated salary for mid-month employee departures, and process end-of-service settlements with precise salary deductions, and calculate accurate leave balance during employee exit, and calculate accurate end of service gratuity for employees, and understand gratuity calculation logic and rules, and process employee final settlement accurately, and submit end of service transaction for departing employee, and calculate accurate prorated salary for mid-month employee joining, and filter attendance reports to investigate out-of-office check-ins, and accurate unpaid leave daily rate calculations reflecting historical salary rates, and accurately calculate end-of-service gratuity for employees, and accurately calculate end-of-service gratuity payment, and understand precise gratuity calculation methodology, and calculate precise end-of-service gratuity payments, and accurately calculate gratuity for limited contract employees, and understand precise leave balance calculation methodology, and change payroll cycle from calendar month to custom date range, and understand unpaid leave deduction calculations, and calculate precise employee end-of-service gratuity benefits, and generate accurate payroll documentation with precise gosi deduction calculations, and generate accurate leave encashment for mid-month employee departures, and obtain accurate prorated leave salary based on actual leave duration, and generate accurate leave salary accrual reports with correct daily wage calculations, and understand salary deduction calculations for different leave types, and accurately calculate unpaid leave deductions based on current salary configuration, and correct duplicate variable pay entries after payroll cycle closure, and accurately calculate prorated leave salary, and process accurate end of service compensation for employees with complex employment histories, and generate accurate leave salary accrual report using custom salary formulas, and precise mid-month salary calculation for employee departures, and process unpaid leave deductions accurately during payroll cycles, and manage leave requests during employee offboarding, and calculate leave accruals using full salary before deductions, and compute daily leave rates based on working days, not calendar days, and understand projected leave salary calculations, and understand precise leave balance calculations, and verify accurate leave allowance across work cycles, and understand detailed leave balance calculation across multiple cycles, and obtain accurate daily leave accrual across all leave policy types, and accurately calculate prorated salary during leave periods, and configure flexible leave salary accrual calculation methods, and understand monthly leave salary accrual calculations, and verify cumulative leave salary totals across months, and calculate accurate leave salary using custom daily wage formulas, and receive accurate financial compensation for approved leave periods, and accurately calculate leave salary across multiple payroll months, and configure precise leave salary calculations with component-level control, and configure complex leave salary policies with variable daily rate calculations, and map different leave policies to specific employee groups, and configure leave policies that pay only specific salary components during leave, and configure different salary proration formulas for distinct employee groups, and implement daily pro-ration of air ticket allowances, and understand salary proration calculation logic, and understand precise timing of gosi percentage data retrieval, and understand precise gratuity calculation formula, and manually reduce employee's leave balance due to incorrect initial approval, and understand leave salary calculation methodology, and accurately calculate prorated salary for offboarded employees, and calculate accurate partial month salary for employees joining mid-month, and calculate accurate prorated salary during employee resignation/offboarding, and calculate accurate prorated salary for mid-month employee terminations, and filter processed time and pay adjustments by destination (time off vs payroll), and automatically calculate total daily work hours across multiple activities, and log daily work tasks with accurate date tracking, and modify automatically generated leave deductions in eos calculations, and change daily rate calculation basis from basic to gross salary, and accurately track and deduct unpaid leave days from leave allowance, and recalculate unpaid leave deductions without generating duplicate entries, and accurately represent unpaid leave days and deductions on payslips, and accurately calculate unpaid leave salary deductions, and understand unpaid leave deduction calculations, and accurately calculate daily wage deductions for unpaid and half-paid leaves, and accurately calculate unpaid leave compensation across different policy types, and calculate precise leave salary accruals using calendar-based daily wage computations, and automate employee absence notifications, and automate employee absence notification process, and accurately calculate unpaid leave salary deductions, and obtain accurate unpaid leave salary deductions based on specific leave policy configurations, and accurately calculate unpaid leave deductions across different payroll months. Real-world usage patterns show that 103 distinct workflow scenarios have been documented through customer 
  interactions. Support analysis identifies 97 known technical issues requiring customer workarounds or manual interventions. 
  The platform currently implements 106 specific system constraints that impact customer workflows and 
  calculation accuracy. These operational realities, documented through customer support interactions and development tickets, reveal both the 
  feature's importance and areas requiring enhancement. The analysis provides validation-ready claims for interface testing and user guide accuracy 
  verification.

  ## Summary
  Total tickets analysed: 103
  Projects: tssd, os, TSSD

  ## Observed User Goals
  - Configure different salary proration methods for multiple employee categories [TSSD-4876]
- Calculate accurate pro-rated leave encashment for mid-month employee departures [TSSD-2499]
- Configure Daily Rate for Leave Encashment directly within Daily Rate Calculator [OS-446]
- Visualize employee attendance patterns through calendar interface [TSSD-3774]
- Add contextual comments to attendance records [TSSD-1517]
- Notify employees/managers about attendance events [TSSD-1517]
- Accurately track employee check-in times across different timezones [TSSD-713]
- Generate comprehensive attendance records for time tracking and legal documentation [TSSD-1433]
- Verify consistent attendance records across different reporting modules [TSSD-1908]
- Log daily work attendance [TSSD-430]
- Automate absence deduction request generation for employees with no attendance record [TSSD-2206]
- Configure leave balance accrual to match organizational policy [TSSD-1453]
- Successfully log into Bayzat admin platform [TSSD-2266]
- Accurately track employee attendance across different shift configurations [OS-639]
- Correct historical biometric attendance data [TSSD-1134]
- Configure leave encashment calculation using only basic salary [TSSD-3939]
- Track and approve employee leave requests [TSSD-2056]
- Calculate unpaid leave deductions accurately [TSSD-2056]
- Generate comprehensive attendance reports with complete location details [TSSD-4151]
- Understand precise leave balance calculation method [TSSD-4203]
- Track document expiration dates [TSSD-1357]
- Receive timely document expiry notifications [TSSD-1357]
- Configure different salary proration methods for distinct employee groups [TSSD-4882]
- Migrate leave accrual between work anniversary and calendar year cycles [TSSD-4212]
- Configure daily leave proration for accurate end-of-service calculations [TSSD-4212]
- View daily motivational quotes across different platforms [TSSD-872]
- Automate salary calculation based on precise working days [TSSD-4905]
- Selectively disable specific system-generated newsfeed posts [TSSD-120]
- Achieve consistent daily wage formula across leave and payroll modules [TSSD-2648]
- Synchronize attendance records across different systems [TSSD-3419]
- Accurately calculate unpaid leave deductions [TSSD-1581]
- Track detailed employee work hours across multiple shift segments [TSSD-4230]
- Accurately calculate prorated employer social security contributions for employees offboarded mid-month [TSSD-2561]
- Calculate accurate end of service gratuity considering exact service days [TSSD-4179]
- Calculate accurate pro-rated salary for employees leaving mid-month [TSSD-2605]
- Understand precise EOS gratuity calculation methodology [TSSD-1232]
- Accurately calculate end-of-service daily wage [TSSD-3832]
- Accurately calculate prorated salary for mid-month employee departures [TSSD-4033]
- Process end-of-service settlements with precise salary deductions [TSSD-4033]
- Calculate accurate leave balance during employee exit [TSSD-4042]
- Calculate accurate end of service gratuity for employees [TSSD-4742]
- Understand gratuity calculation logic and rules [TSSD-4742]
- Process employee final settlement accurately [TSSD-3908]
- Submit End of Service transaction for departing employee [TSSD-3908]
- Calculate accurate prorated salary for mid-month employee joining [TSSD-4129]
- Filter attendance reports to investigate out-of-office check-ins [TSSD-319]
- Accurate unpaid leave daily rate calculations reflecting historical salary rates [OS-867]
- Accurately calculate end-of-service gratuity for employees [TSSD-1625]
- Accurately calculate end-of-service gratuity payment [TSSD-4779]
- Understand precise gratuity calculation methodology [TSSD-3123]
- Calculate precise end-of-service gratuity payments [TSSD-2252]
- Accurately calculate gratuity for limited contract employees [TSSD-4796]
- Understand precise leave balance calculation methodology [TSSD-3139]
- Change payroll cycle from calendar month to custom date range [TSSD-3879]
- Understand unpaid leave deduction calculations [TSSD-2212]
- Calculate precise employee end-of-service gratuity benefits [TSSD-2043]
- Generate accurate payroll documentation with precise GOSI deduction calculations [TSSD-3249]
- Generate accurate leave encashment for mid-month employee departures [TSSD-4813]
- Obtain accurate prorated leave salary based on actual leave duration [TSSD-2106]
- Generate accurate leave salary accrual reports with correct daily wage calculations [TSSD-3487]
- Understand salary deduction calculations for different leave types [TSSD-3213]
- Accurately calculate unpaid leave deductions based on current salary configuration [TSSD-1798]
- Correct duplicate variable pay entries after payroll cycle closure [TSSD-3880]
- Accurately calculate prorated leave salary [TSSD-4731]
- Process accurate End of Service compensation for employees with complex employment histories [TSSD-2597]
- Generate accurate leave salary accrual report using custom salary formulas [TSSD-3402]
- Precise mid-month salary calculation for employee departures [TSSD-3995]
- Process unpaid leave deductions accurately during payroll cycles [TSSD-4720]
- Manage leave requests during employee offboarding [TSSD-4720]
- Calculate leave accruals using full salary before deductions [TSSD-291]
- Compute daily leave rates based on working days, not calendar days [TSSD-291]
- Understand projected leave salary calculations [TSSD-4543]
- Understand precise leave balance calculations [TSSD-3822]
- Verify accurate leave allowance across work cycles [TSSD-3822]
- Understand detailed leave balance calculation across multiple cycles [TSSD-4243]
- Obtain accurate daily leave accrual across all leave policy types [TSSD-3082]
- Accurately calculate prorated salary during leave periods [TSSD-2937]
- Configure flexible leave salary accrual calculation methods [TSSD-3779]
- Understand monthly leave salary accrual calculations [TSSD-3648]
- Verify cumulative leave salary totals across months [TSSD-3648]
- Calculate accurate leave salary using custom daily wage formulas [TSSD-2321]
- Receive accurate financial compensation for approved leave periods [TSSD-3226]
- Accurately calculate leave salary across multiple payroll months [TSSD-3275]
- Configure precise leave salary calculations with component-level control [TSSD-4387]
- Configure complex leave salary policies with variable daily rate calculations [TSSD-2934]
- Map different leave policies to specific employee groups [TSSD-2934]
- Configure leave policies that pay only specific salary components during leave [TSSD-3654]
- Configure different salary proration formulas for distinct employee groups [TSSD-4375]
- Implement daily pro-ration of air ticket allowances [TSSD-3146]
- Understand salary proration calculation logic [TSSD-4292]
- Understand precise timing of GOSI percentage data retrieval [OS-3034]
- Understand precise gratuity calculation formula [TSSD-375]
- Manually reduce employee's leave balance due to incorrect initial approval [TSSD-3789]
- Understand leave salary calculation methodology [TSSD-4349]
- Accurately calculate prorated salary for offboarded employees [TSSD-3058]
- Calculate accurate partial month salary for employees joining mid-month [TSSD-3512]
- Calculate accurate prorated salary during employee resignation/offboarding [TSSD-2518]
- Calculate accurate prorated salary for mid-month employee terminations [TSSD-4303]
- Filter processed time and pay adjustments by destination (Time Off vs Payroll) [TSSD-463]
- Automatically calculate total daily work hours across multiple activities [TSSD-696]
- Log daily work tasks with accurate date tracking [TSSD-4409]
- Modify automatically generated leave deductions in EOS calculations [TSSD-3946]
- Change daily rate calculation basis from Basic to Gross salary [TSSD-3946]
- Accurately track and deduct unpaid leave days from leave allowance [TSSD-2384]
- Recalculate unpaid leave deductions without generating duplicate entries [TSSD-2532]
- Accurately represent unpaid leave days and deductions on payslips [TSSD-3044]
- Accurately calculate unpaid leave salary deductions [TSSD-4464]
- Understand unpaid leave deduction calculations [TSSD-4368]
- Accurately calculate daily wage deductions for unpaid and half-paid leaves [TSSD-4947]
- Accurately calculate unpaid leave compensation across different policy types [TSSD-1746]
- Calculate precise leave salary accruals using calendar-based daily wage computations [TSSD-1227]
- Automate employee absence notifications [TSSD-3438]
- Automate employee absence notification process [TSSD-3507]
- Accurately calculate unpaid leave salary deductions [TSSD-1301]
- Obtain accurate unpaid leave salary deductions based on specific leave policy configurations [TSSD-1753]
- Accurately calculate unpaid leave deductions across different payroll months [TSSD-1807]


  ## Observed Workflows
  ### Attempt to set up organization-wide salary proration with multiple employee type calculations [TSSD-4876]
  **When it occurs**: During payroll configuration and setup
  **Failure points**:
    - Cannot define separate proration rules for different employee categories
  - System enforces single proration method across organization

### Employee departure triggers leave encashment calculation [TSSD-2499]
  **When it occurs**: Upon employee resignation or termination
  **Failure points**:
    - System only calculates full month leave accruals
  - Partial month leave days not automatically computed

### Payroll managers attempt to configure leave encashment daily rates [OS-446]
  **When it occurs**: During payroll setup and leave compensation processing
  **Failure points**:
    - No direct rate configuration in Daily Rate Calculator
  - Requires external or manual rate setting

### Current attendance tracking relies on list view with limited visual context [TSSD-3774]
  **When it occurs**: During workforce management and reporting
  **Failure points**:
    - Lack of visual attendance representation
  - Difficulty in quickly understanding attendance patterns

### Comment submission from daily attendance record [TSSD-1517]
  **When it occurs**: During workforce event tracking
  **Failure points**:
    - Notification delivery inconsistent
  - Mobile push notifications unreliable

### Employee checks in, system compares check-in time against configured work timing and timezone settings [TSSD-713]
  **When it occurs**: During daily employee check-in process
  **Failure points**:
    - Inconsistent timezone configuration
  - Misconfigured work timing settings
  - Mismatched late arrival settings

### Employee checks in/out, system calculates total and extra hours automatically [TSSD-1433]
  **When it occurs**: During shift completion and checkout process
  **Failure points**:
    - No validation of checkout legitimacy
  - Automatic extra hours calculation without manual review
  - Inability to flag suspicious checkout patterns

### Cross-referencing Time & Productivity adjustments with daily attendance reports [TSSD-1908]
  **When it occurs**: During attendance record review and verification
  **Failure points**:
    - Inconsistent location status display
  - Mismatched edit status across reports
  - Lack of data synchronization

### Employee checks in once per day, system tracks and manages check-in button visibility [TSSD-430]
  **When it occurs**: During work day
  **Failure points**:
    - Check-in button disappears after daily cycle
  - No clear indication of cycle completion

### Manual marking of employee absence when no check-in data exists [TSSD-2206]
  **When it occurs**: Daily attendance tracking
  **Failure points**:
    - Requires individual manager intervention
  - No bulk action capabilities
  - Time-consuming for large organizations

### Select leave policy type (conditional/non-conditional) which determines accrual frequency [TSSD-1453]
  **When it occurs**: During leave policy configuration
  **Failure points**:
    - Cannot customize accrual frequency for conditional leave
  - Monthly accrual not supported for conditional policies

### Admin attempts login, encounters page loading issues, tries multiple browser strategies [TSSD-2266]
  **When it occurs**: During authentication process
  **Failure points**:
    - Browser cache interference
  - Inconsistent page rendering
  - Multiple login attempt required

### Leave request submission and status update for split shifts [OS-639]
  **When it occurs**: When employee has multiple shift segments
  **Failure points**:
    - Status not consistently updated across shift rows
  - Incomplete leave status propagation

### Attempt to delete or modify historical attendance API logs [TSSD-1134]
  **When it occurs**: When data entry errors are discovered
  **Failure points**:
    - API does not support log deletion
  - Cannot overwrite existing attendance records
  - Requires manual manager intervention

### Configure End of Service (EOS) leave encashment daily wage calculation [TSSD-3939]
  **When it occurs**: During employee exit/termination process
  **Failure points**:
    - Unclear configuration change reflection
  - Potential misalignment between selected setting and displayed calculation method

### Leave request submission, superadmin approval, and payroll deduction calculation [TSSD-2056]
  **When it occurs**: When employee submits leave request
  **Failure points**:
    - Multiple approval entries for single request
  - Approved requests reverting to pending
  - Unexpected email notifications

### API-based attendance check-in/check-out process [TSSD-4151]
  **When it occurs**: When external systems integrate attendance tracking
  **Failure points**:
    - Office location not captured
  - Incomplete reporting data
  - Inconsistent information across report types

### User checks leave balance and notices discrepancy with expected calculation [TSSD-4203]
  **When it occurs**: During leave balance review
  **Failure points**:
    - Lack of transparent calculation explanation
  - Complex pro-rata accrual logic

### Monthly automated email notifications for document expiry [TSSD-1357]
  **When it occurs**: First day of each month
  **Failure points**:
    - No daily notification option
  - Cannot customize notification frequency

### Manual salary adjustment for employee groups not supported by default proration method [TSSD-4882]
  **When it occurs**: During employee onboarding or monthly payroll processing
  **Failure points**:
    - Single proration method applied across all employees
  - No group-specific calculation support

### Configure leave policy to enable daily accrual through conditional policy settings [TSSD-4212]
  **When it occurs**: During initial leave policy setup or cycle migration
  **Failure points**:
    - Incorrect configuration leads to inaccurate leave balance calculations
  - Misunderstanding of daily vs. monthly accrual mechanisms

### User accesses newsfeed on mobile or desktop, expecting to view complete daily quote [TSSD-872]
  **When it occurs**: Daily content publication
  **Failure points**:
    - Content rendering across different screen sizes
  - UI layout consistency

### Calculate monthly salary using 26 working days as standard, with dynamic adjustments for extra or fewer days worked [TSSD-4905]
  **When it occurs**: Monthly payroll processing
  **Failure points**:
    - Manual tracking of overtime
  - Manual tracking of unpaid leaves
  - No automatic pro-rata adjustments

### Navigate to Admin Panel >> Company >> Newsfeed system posts to configure post visibility [TSSD-120]
  **When it occurs**: When administrator wants to modify system post settings
  **Failure points**:
    - Requires administrative permissions
  - Potential confusion about navigation path

### Configure daily wage calculation by selecting salary components and defining divisor method [TSSD-2648]
  **When it occurs**: During payroll and leave policy setup
  **Failure points**:
    - Inconsistent formula configuration between modules
  - Unclear override mechanisms
  - Lack of synchronization between leave and payroll settings

### API-based attendance data transmission from third-party provider to Bayzat [TSSD-3419]
  **When it occurs**: Continuous data synchronization
  **Failure points**:
    - Weekend data transmission
  - Check-in time recording
  - Time zone conversion

### Calculate daily wage by dividing total salary by 30.41 and multiplying by days of unpaid leave [TSSD-1581]
  **When it occurs**: During monthly payroll processing
  **Failure points**:
    - Salary configuration changes after leave request
  - System uses outdated salary information

### Employee with split shifts generates multiple attendance records on the same day [TSSD-4230]
  **When it occurs**: When an employee is scheduled for non-consecutive work periods
  **Failure points**:
    - Visual confusion from multiple attendance entries
  - Potential misunderstanding of record generation

### Calculate full monthly social security contribution regardless of employee's actual working days [TSSD-2561]
  **When it occurs**: During employee offboarding or partial month employment
  **Failure points**:
    - No prorated calculation logic
  - Full month contribution calculated automatically
  - Reporting shows incorrect contribution amount

### Employee exit gratuity calculation using daily wage, service period, and benefit rate [TSSD-4179]
  **When it occurs**: During employee termination or resignation
  **Failure points**:
    - Leap year day count
  - Pro-rata service period calculation
  - Daily wage computation

### Select employee departure date, compute pro-rated salary using basic + allowances / 30 formula [TSSD-2605]
  **When it occurs**: During employee end of service process
  **Failure points**:
    - Decimal precision in calculation
  - Rounding of final amount

### Calculate employee gratuity using WPS-compliant formula [TSSD-1232]
  **When it occurs**: At employee contract termination
  **Failure points**:
    - Decimal precision differences
  - Manual calculation misalignment
  - Rounding interpretation

### Calculate daily wage by dividing total compensation by working days in departure month [TSSD-3832]
  **When it occurs**: During employee separation or end-of-service benefit calculation
  **Failure points**:
    - Handling of public holidays
  - Variation between policy standard and actual working days

### Employee offboarding with salary proration and EOS calculation [TSSD-4033]
  **When it occurs**: When employee leaves mid-month with potential unpaid leave
  **Failure points**:
    - System cannot handle unpaid leave in EOS calculations
  - Rigid full-month salary calculation
  - No dynamic adjustment for actual days worked

### Employee exit processing with leave balance calculation [TSSD-4042]
  **When it occurs**: During employee termination or resignation
  **Failure points**:
    - Mid-month departures not automatically pro-rated
  - Manual adjustment required for partial month leave

### Compute gratuity based on service duration, daily wage, and tiered rates [TSSD-4742]
  **When it occurs**: Employee contract termination
  **Failure points**:
    - Mid-month departures
  - Partial year service duration
  - Leave balance calculation

### Validate employee leave requests before EOS submission [TSSD-3908]
  **When it occurs**: During employee offboarding process
  **Failure points**:
    - Incorrect leave request detection
  - False positive validation checks
  - Blocking legitimate EOS transactions

### Verify working days by excluding weekends and public holidays [TSSD-4129]
  **When it occurs**: During monthly salary calculation for new employees
  **Failure points**:
    - Incorrect working day counting
  - Misunderstanding of proration formula

### Employee checks in from various locations, system automatically detects and labels location [TSSD-319]
  **When it occurs**: During employee check-in process
  **Failure points**:
    - No filtering capability for out-of-office locations
  - Limited reporting options for location-based attendance

### Compute daily compensation rates for employee time off [OS-867]
  **When it occurs**: During payroll processing and leave accounting
  **Failure points**:
    - Using current salary configuration instead of historical rates
  - Inability to perform retrospective salary calculations

### Input employee details → Calculate daily wage → Compute service duration → Apply gratuity formula [TSSD-1625]
  **When it occurs**: Employee termination or contract completion
  **Failure points**:
    - Leap year day inclusion
  - Departure date counting
  - Service duration conversion

### Calculate gratuity by multiplying daily rate by total service duration, handling complete and partial years [TSSD-4779]
  **When it occurs**: Employee departure/contract termination
  **Failure points**:
    - Inconsistent calculation based on contract type
  - Incorrect handling of partial years
  - Departure reason affecting calculation

### Employee departure triggers automated gratuity calculation based on contract details [TSSD-3123]
  **When it occurs**: Upon employee resignation or contract termination
  **Failure points**:
    - Calculation methodology not transparent
  - Potential minor computational differences from manual calculations

### Input employee service duration, calculate gratuity based on service period segments [TSSD-2252]
  **When it occurs**: Employee termination or resignation
  **Failure points**:
    - Handling partial years
  - Leap year calculations
  - Different rate periods (first 5 years vs subsequent years)

### Calculate end-of-service gratuity based on contract type, daily wage, and service period [TSSD-4796]
  **When it occurs**: Employee contract termination
  **Failure points**:
    - Incorrect calculation for limited contracts
  - Departure reason impacts calculation accuracy
  - Manual intervention required to correct amounts

### Manual calculation of leave balance by support team, breaking down monthly and daily accrual components [TSSD-3139]
  **When it occurs**: When users request detailed leave balance explanation
  **Failure points**:
    - Lack of transparent calculation display
  - Requires manual support intervention

### Request payroll cycle modification [TSSD-3879]
  **When it occurs**: During payroll setup or periodic review
  **Failure points**:
    - Irreversible cycle change
  - Cannot reopen previous months
  - Potential duplicate monthly entries
  - Altered proration calculations

### Calculate daily rate for unpaid leave based on basic salary, allowances, and working days [TSSD-2212]
  **When it occurs**: During leave approval and payroll processing
  **Failure points**:
    - Dynamic recalculation of daily rates
  - Inconsistent handling of holiday calendar changes

### Input employee basic salary, joining date, departure date, and contract details to compute gratuity [TSSD-2043]
  **When it occurs**: Employee contract termination or resignation
  **Failure points**:
    - Inflexible daily wage calculation method
  - Potential rounding discrepancies in days worked

### Export payroll template for employees, with focus on accurate social insurance deduction calculations [TSSD-3249]
  **When it occurs**: During monthly payroll processing
  **Failure points**:
    - Incorrect proration for mid-month joiners
  - Full monthly deduction displayed instead of prorated amount

### Calculate remaining leave balance for end-of-service settlement [TSSD-4813]
  **When it occurs**: During employee offboarding process
  **Failure points**:
    - Monthly proration instead of daily accrual
  - Incorrect handling of partial month leave calculations

### Employee submits leave request, system calculates salary based on configured leave policy settings [TSSD-2106]
  **When it occurs**: During payroll processing for time off periods
  **Failure points**:
    - Mismatched day type configurations
  - Public holiday exclusion inconsistencies
  - Unclear calculation logic

### Download leave salary accrual report for monthly payroll reconciliation [TSSD-3487]
  **When it occurs**: Monthly payroll processing
  **Failure points**:
    - Incorrect daily wage base calculation
  - Unexpected social security component display

### Employee requests leave, system calculates daily rate based on specific leave policy formula [TSSD-3213]
  **When it occurs**: During leave request and payroll processing
  **Failure points**:
    - Lack of formula transparency
  - User confusion between leave policy types

### Calculate daily rate for unpaid leave using salary components [TSSD-1798]
  **When it occurs**: During payroll processing and end of service calculations
  **Failure points**:
    - Recalculating historical rates with current configuration
  - Not preserving original calculation method

### Monthly payroll cycle finalization process with irreversible data lock [TSSD-3880]
  **When it occurs**: End of each payroll month
  **Failure points**:
    - No mechanism to correct variable pay errors after closure
  - Complete cycle reopening required for any modifications

### Employee submits leave request, system calculates prorated salary based on predefined policy configuration [TSSD-4731]
  **When it occurs**: During leave request and salary processing
  **Failure points**:
    - Misalignment between user expectation and system calculation logic
  - Lack of transparency in calculation method

### Process EOS for an employee in the current open payroll month, considering previous month's employment status [TSSD-2597]
  **When it occurs**: During employee offboarding and final compensation calculation
  **Failure points**:
    - Incorrect prorated salary calculation
  - Automatic deduction generation
  - Salary arrears miscalculation

### User configures leave salary accrual report with custom formula (Basic Salary + Allowance / Working Days) [TSSD-3402]
  **When it occurs**: During financial reporting period
  **Failure points**:
    - System defaults to calendar days instead of working days
  - Formula configuration not respected by calculation engine

### Input last working day to calculate prorated salary [TSSD-3995]
  **When it occurs**: Employee termination or resignation
  **Failure points**:
    - Public holiday handling in working days calculation
  - Lack of manual day-level salary adjustment

### Leave request creation, payroll deduction generation, and automatic deletion during offboarding [TSSD-4720]
  **When it occurs**: During employee departure process
  **Failure points**:
    - Automatic deletion of future leave requests
  - Loss of leave request details for offboarded employees

### Leave balance calculation process involving salary analysis and time tracking [TSSD-291]
  **When it occurs**: During periodic leave entitlement updates
  **Failure points**:
    - Using post-GOSI deduction salary
  - Calculating on calendar days instead of working days

### User downloads leave accrual report and compares virtual projection with expected leave salary [TSSD-4543]
  **When it occurs**: During monthly or periodic leave reporting
  **Failure points**:
    - Lack of clear calculation methodology explanation
  - Misalignment between report projection and actual leave salary

### System calculates leave balance based on hire date, policy type, and work cycle [TSSD-3822]
  **When it occurs**: At end of each leave cycle
  **Failure points**:
    - Leap year hire dates
  - Conditional allowance daily calculations
  - Cycle start date determination

### Employee checks leave balance, discovers complex multi-cycle calculation, seeks support clarification [TSSD-4243]
  **When it occurs**: During leave planning or balance review
  **Failure points**:
    - Negative day representations
  - Cross-cycle leave deduction display
  - Fractional day calculations

### Configure leave policy type and job tenure toggle to determine accrual calculation method [TSSD-3082]
  **When it occurs**: During leave policy setup and employee tenure tracking
  **Failure points**:
    - Inconsistent accrual methods between policy types
  - Inaccurate mid-month leave calculations
  - Potential EOS leave encashment errors

### Submit leave request spanning multiple days, including potential public holidays [TSSD-2937]
  **When it occurs**: Employee takes leave across calendar days
  **Failure points**:
    - Incorrect working days calculation
  - Public holiday handling in salary proration

### Configure daily wage calculation method, generate leave salary accrual report, verify calculation accuracy [TSSD-3779]
  **When it occurs**: During payroll configuration and reporting
  **Failure points**:
    - Inconsistent application of configured calculation method
  - Report generation not respecting configuration settings

### Download leave salary accrual report for specific month [TSSD-3648]
  **When it occurs**: Monthly financial reporting
  **Failure points**:
    - Unexpected calculation variations
  - Misunderstanding of daily wage calculation method

### Compute prorated salary by dividing monthly compensation across working and leave days [TSSD-2321]
  **When it occurs**: During partial work months or employee leave periods
  **Failure points**:
    - Mismatched daily wage divisors
  - Inconsistent calculation configurations

### Employee submits leave request, system calculates daily rate and leave salary based on approved days [TSSD-3226]
  **When it occurs**: During payroll processing for time off
  **Failure points**:
    - Incorrect day count conversion
  - Miscalculation of daily rate
  - Mismatch between approved days and calculated days

### Employee requests leave spanning multiple months, system calculates prorated salary deduction [TSSD-3275]
  **When it occurs**: During multi-month leave periods
  **Failure points**:
    - Lack of calculation transparency
  - User misunderstanding of prorating logic

### Calculate leave salary by prorating formula components and handling non-formula allowances [TSSD-4387]
  **When it occurs**: During employee leave periods
  **Failure points**:
    - Non-formula allowances paid in full
  - Lack of granular component configuration

### Create and map multiple leave salary policies to employee groups [TSSD-2934]
  **When it occurs**: During payroll and leave management configuration
  **Failure points**:
    - Policy precedence not clearly defined
  - Changes to one policy affect others unpredictably
  - Minimum days threshold validation inconsistent

### Configure leave policy with partial payment percentage [TSSD-3654]
  **When it occurs**: During employee leave policy setup
  **Failure points**:
    - Cannot exclude specific salary components
  - Deductions calculated on total salary
  - No granular salary component control

### Global proration formula application across all employee types [TSSD-4375]
  **When it occurs**: During payroll configuration and salary calculation
  **Failure points**:
    - Cannot differentiate proration methods by employee category
  - Single formula applies to entire organization

### Annual bulk air ticket allowance allocation at renewal cycle end [TSSD-3146]
  **When it occurs**: End of employee renewal cycle
  **Failure points**:
    - No mid-cycle allowance access
  - Cannot calculate partial allowances
  - Inflexible benefit allocation

### Verify daily wage calculation based on work week configuration [TSSD-4292]
  **When it occurs**: During payroll processing or salary review
  **Failure points**:
    - Misunderstanding of work week configuration
  - Incorrect expectation of weekend detection

### Daily backend data retrieval for social insurance percentages [OS-3034]
  **When it occurs**: 5 AM DBX time zone
  **Failure points**:
    - Timestamp inconsistency
  - Time zone synchronization

### Verify end of service gratuity calculation for employee termination [TSSD-375]
  **When it occurs**: During employee departure process
  **Failure points**:
    - Lack of transparent calculation methodology
  - Potential misapplication of contract-specific rules
  - Unclear decimal precision and rounding rules

### Backend manual database update to adjust leave balance [TSSD-3789]
  **When it occurs**: When standard UI adjustment is not possible
  **Failure points**:
    - Risk of overwriting attendance records
  - Requires technical intervention
  - No standardized correction mechanism

### Navigate to Settings > Payroll > Leave Salary Policy to configure proration rules [TSSD-4349]
  **When it occurs**: Before processing employee leave compensation
  **Failure points**:
    - Misunderstanding configuration options
  - Incorrect selection of calendar vs custom days
  - Incomplete allowance configuration

### Process payroll for employee with mid-month departure [TSSD-3058]
  **When it occurs**: During employee offboarding
  **Failure points**:
    - Handling departure dates in future vs past
  - Calculating daily rate correctly
  - Applying proration logic consistently

### Configure salary proration with custom divisor, calculate daily rate, multiply by actual days worked [TSSD-3512]
  **When it occurs**: When employee starts work partway through a month
  **Failure points**:
    - Misunderstanding of divisor purpose
  - Confusion about day counting methodology
  - Unclear calculation transparency

### Employee offboarding with salary proration calculation [TSSD-2518]
  **When it occurs**: During employee termination or resignation
  **Failure points**:
    - Daily rate configuration change after offboarding
  - System not auto-recalculating proration
  - Locked calculation based on offboarding moment's configuration

### Determine daily wage by dividing total monthly salary by working days, then multiply by days worked [TSSD-4303]
  **When it occurs**: During mid-month employment termination
  **Failure points**:
    - User misunderstanding of calculation method

### Administrators download processed time adjustment data and manually filter entries [TSSD-463]
  **When it occurs**: When needing to categorize processed extra hour requests
  **Failure points**:
    - No native filtering for processed entries
  - Manual export required
  - Potential for human error in categorization

### Employee logs multiple work activities with individual time entries [TSSD-696]
  **When it occurs**: Daily time tracking process
  **Failure points**:
    - No automatic total hours calculation
  - Manual summation required

### Employee logs task, potentially modifies task date after initial entry [TSSD-4409]
  **When it occurs**: During daily time tracking
  **Failure points**:
    - Date modification causes entry visibility issues
  - Entries appear to disappear when date changed
  - No clear indication of date modification impact

### Administrator attempts to edit system-generated leave deduction amount [TSSD-3946]
  **When it occurs**: During payroll configuration and end-of-service settlement
  **Failure points**:
    - Cannot set deduction to zero
  - System prevents editing auto-generated deductions

### Employee submits multi-month unpaid leave request [TSSD-2384]
  **When it occurs**: During payroll processing across multiple months
  **Failure points**:
    - Cannot manually adjust used days
  - Deductions accumulate incorrectly
  - Potential negative salary calculation

### Modify daily wage calculation and delete leave transaction [TSSD-2532]
  **When it occurs**: During payroll cycle recalculation
  **Failure points**:
    - Duplicate deduction generation
  - Persistent orphaned deductions
  - Inability to remove deductions after leave request deletion

### Process unpaid leave across multiple months during single payroll cycle [TSSD-3044]
  **When it occurs**: When employee has retrospective leave approvals
  **Failure points**:
    - Cross-month leave day aggregation
  - Matching deduction amount with displayed leave days

### Calculate daily wage by dividing monthly salary by working days, excluding weekends and public holidays [TSSD-4464]
  **When it occurs**: During payroll processing for employees with unpaid leave
  **Failure points**:
    - Public holidays added after leave request
  - Inconsistent working days calculation
  - No retroactive recalculation support

### Calculate daily wage for unpaid leave deductions using custom divisor [TSSD-4368]
  **When it occurs**: During payroll processing for employees with partial month absences
  **Failure points**:
    - Deduction amount differs from expected monthly salary
  - Requires manual reconciliation
  - Potential user confusion about calculation method

### Configure daily wage calculation method in Payroll Configuration, then set up corresponding leave policy [TSSD-4947]
  **When it occurs**: During payroll and leave policy setup
  **Failure points**:
    - Inconsistent UI display of actual calculation method
  - Overwrite option obscures actual calculation logic

### Configure multiple leave policies with distinct daily rate calculation formulas [TSSD-1746]
  **When it occurs**: During payroll system setup and maintenance
  **Failure points**:
    - Lack of clear policy differentiation
  - Complex calculation methods
  - No explicit policy selection guidance

### Generate monthly leave salary accrual report using total compensation divided by calendar days [TSSD-1227]
  **When it occurs**: End of accounting period
  **Failure points**:
    - Cannot use custom day divisors
  - Rigid calculation methodology
  - No support for non-standard accounting formulas

### HR managers configure absence detection workflow [TSSD-3438]
  **When it occurs**: Daily attendance reporting
  **Failure points**:
    - Manual 'mark as absent' button required
  - No automatic system-default absence detection

### Daily early morning check of previous day's attendance records to trigger absence notifications [TSSD-3507]
  **When it occurs**: Configured daily time (e.g., 7 AM)
  **Failure points**:
    - Inconsistent event triggering
  - Misconfiguration of date-based events
  - Incomplete attendance record maintenance

### Calculate daily wage rate by dividing monthly salary by actual calendar days in the month [TSSD-1301]
  **When it occurs**: During monthly payroll processing
  **Failure points**:
    - Incorrect day count in remarks display
  - Potential user misunderstanding of displayed rates

### Calculate daily wage rate for unpaid leave by dividing salary component by working days [TSSD-1753]
  **When it occurs**: During employee absence and payroll processing
  **Failure points**:
    - Global configuration overrides policy-specific calculations
  - Potential use of incorrect salary component (gross vs basic)
  - Inconsistent working day calculations

### Calculate daily rate by dividing (Basic Salary + Allowances) by working days, excluding public holidays [TSSD-1807]
  **When it occurs**: During payroll processing and leave deduction calculation
  **Failure points**:
    - Displaying daily rate from incorrect month
  - Recalculating instead of storing original daily rate



  ## System Rules & Constraints
  - **Rule**: Only one proration method can be configured organization-wide
    - **How users discover**: During payroll setup process
    - **Impact**: Prevents configuring category-specific salary calculations
    - **Evidence**: [TSSD-4876]

  - **Rule**: Leave days are only accrued after full month completion
    - **How users discover**: During employee offboarding process
    - **Impact**: Employees may lose partial month leave days
    - **Evidence**: [TSSD-2499]

  - **Rule**: Cannot configure Daily Rate directly in Daily Rate Calculator
    - **How users discover**: Through attempted configuration and system limitations
    - **Impact**: Increased administrative overhead and potential calculation errors
    - **Evidence**: [OS-446]

  - **Rule**: Attendance data currently displayed only in list format
    - **How users discover**: When attempting to analyze attendance records
    - **Impact**: Reduced usability and slower data comprehension
    - **Evidence**: [TSSD-3774]

  - **Rule**: Must mention employee or manager to trigger notification
    - **How users discover**: Through support interactions and failed notifications
    - **Impact**: Additional manual step required for notification delivery
    - **Evidence**: [TSSD-1517]

  - **Rule**: Attendance status depends on work timing configuration and timezone offset
    - **How users discover**: Through inconsistent attendance marking
    - **Impact**: Potential unfair or incorrect attendance tracking
    - **Evidence**: [TSSD-713]

  - **Rule**: Hours calculated until official checkout or shift end
    - **How users discover**: Through attendance report generation
    - **Impact**: Can display up to 24 hours if no checkout occurs
    - **Evidence**: [TSSD-1433]

  - **Rule**: Attendance records must maintain consistent metadata across all reporting views
    - **How users discover**: By comparing different attendance reports for the same employee
    - **Impact**: Potential misunderstandings about actual work location and attendance status
    - **Evidence**: [TSSD-1908]

  - **Rule**: One check-in/check-out per day
    - **How users discover**: Through UI behavior and system limitations
    - **Impact**: Prevents multiple attendance entries
    - **Evidence**: [TSSD-430]

  - **Rule**: Managers must manually click 'Mark as Absent' for employees with no check-in data
    - **How users discover**: Through daily attendance report interface
    - **Impact**: Increased administrative overhead and potential delays in Time & Pay adjustments
    - **Evidence**: [TSSD-2206]

  - **Rule**: Conditional leave policies enforce daily accrual
    - **How users discover**: During policy configuration and implementation
    - **Impact**: Limited flexibility in leave balance tracking
    - **Evidence**: [TSSD-1453]

  - **Rule**: Login process is browser-cache dependent
    - **How users discover**: Through intermittent access failures
    - **Impact**: Requires manual cache management and browser switching
    - **Evidence**: [TSSD-2266]

  - **Rule**: Leave status cannot be uniformly applied to multi-segment shifts
    - **How users discover**: Through inconsistent reporting in daily attendance reports
    - **Impact**: Potential misrepresentation of employee attendance
    - **Evidence**: [OS-639]

  - **Rule**: Attendance API logs are immutable once created
    - **How users discover**: During data correction attempts
    - **Impact**: Prevents direct data modification
    - **Evidence**: [TSSD-1134]

  - **Rule**: Leave encashment can be calculated using basic salary or basic salary with allowances
    - **How users discover**: During EOS configuration process
    - **Impact**: Determines final compensation calculation method
    - **Evidence**: [TSSD-3939]

  - **Rule**: Leave requests can be full-day or half-day
    - **How users discover**: Through leave submission interface
    - **Impact**: Enables flexible time-off tracking
    - **Evidence**: [TSSD-2056]

  - **Rule**: API integration does not support office location parameter
    - **How users discover**: When generating custom attendance reports
    - **Impact**: Incomplete attendance tracking and reporting
    - **Evidence**: [TSSD-4151]

  - **Rule**: Conditional leave policies trigger daily accrual calculation
    - **How users discover**: Through support inquiry or balance discrepancy
    - **Impact**: Precise but potentially confusing leave balance tracking
    - **Evidence**: [TSSD-4203]

  - **Rule**: Notifications only sent monthly on first day
    - **How users discover**: Through support interactions
    - **Impact**: Limited flexibility in document tracking
    - **Evidence**: [TSSD-1357]

  - **Rule**: Only one proration calculation method can be used company-wide
    - **How users discover**: During payroll setup and configuration
    - **Impact**: Requires manual corrections for employee groups with different pay calculation needs
    - **Evidence**: [TSSD-4882]

  - **Rule**: Daily leave accrual only available with conditional leave policies
    - **How users discover**: Through support interactions or system configuration exploration
    - **Impact**: Limits flexible leave accrual configuration without specific policy setup
    - **Evidence**: [TSSD-4212]

  - **Rule**: Quotes must be displayed consistently on mobile and desktop
    - **How users discover**: Through visual rendering inconsistencies
    - **Impact**: Reduced content readability and engagement
    - **Evidence**: [TSSD-872]

  - **Rule**: Salary based on 26 working days per month
    - **How users discover**: Through payroll calculations and manual adjustments
    - **Impact**: Requires manual intervention for attendance variations
    - **Evidence**: [TSSD-4905]

  - **Rule**: Can disable individual system post types without affecting entire newsfeed
    - **How users discover**: Through support guidance or administrative interface exploration
    - **Impact**: Provides granular content management control
    - **Evidence**: [TSSD-120]

  - **Rule**: Payroll settings always override leave policy daily wage formulas
    - **How users discover**: Through greyed-out formulas and configuration screens
    - **Impact**: Prevents unintended wage calculations and ensures centralized financial control
    - **Evidence**: [TSSD-2648]

  - **Rule**: Dependent on third-party API provider's data transmission accuracy
    - **How users discover**: Through attendance record discrepancies
    - **Impact**: Manual investigation required for data reconciliation
    - **Evidence**: [TSSD-3419]

  - **Rule**: Deduction calculation depends on most recent salary configuration
    - **How users discover**: Through payroll discrepancies
    - **Impact**: Potential incorrect financial calculations
    - **Evidence**: [TSSD-1581]

  - **Rule**: One attendance record is generated per shift segment
    - **How users discover**: By observing multiple entries for the same employee on a single day
    - **Impact**: Detailed time tracking at the cost of simplified visual representation
    - **Evidence**: [TSSD-4230]

  - **Rule**: Social security contribution calculated as fixed percentage of gross salary
    - **How users discover**: During payroll transaction submission
    - **Impact**: Inflexible calculation method that does not adjust for partial employment
    - **Evidence**: [TSSD-2561]

  - **Rule**: Gratuity calculated using 21 days per year for service between 1-5 years
    - **How users discover**: Through payroll system calculation
    - **Impact**: Determines final benefit amount
    - **Evidence**: [TSSD-4179]

  - **Rule**: Daily wage calculated as (basic salary + allowances) / 30
    - **How users discover**: During final settlement computation
    - **Impact**: Affects accuracy of pro-rated salary calculations
    - **Evidence**: [TSSD-2605]

  - **Rule**: Fixed WPS-compliant gratuity calculation formula
    - **How users discover**: Through calculation discrepancies
    - **Impact**: Cannot customize calculation method
    - **Evidence**: [TSSD-1232]

  - **Rule**: System uses actual working days in month for daily wage calculation
    - **How users discover**: Through discrepancies between manual and system calculations
    - **Impact**: Potential minor variations in calculated end-of-service amounts
    - **Evidence**: [TSSD-3832]

  - **Rule**: EOS calculation uses full monthly salary regardless of actual work performed
    - **How users discover**: During payroll processing and settlement
    - **Impact**: Potential financial discrepancies and manual adjustment requirements
    - **Evidence**: [TSSD-4033]

  - **Rule**: Leave accrues only at month-end
    - **How users discover**: During end-of-service processing
    - **Impact**: Requires manual balance adjustment for mid-month exits
    - **Evidence**: [TSSD-4042]

  - **Rule**: Monthly leave accrual only grants leave days at month-end
    - **How users discover**: During EOS calculation
    - **Impact**: Partial months not automatically included in leave balance
    - **Evidence**: [TSSD-4742]

  - **Rule**: Daily wage calculated by dividing monthly salary by 30
    - **How users discover**: During gratuity computation
    - **Impact**: Standardized wage rate calculation
    - **Evidence**: [TSSD-4742]

  - **Rule**: EOS transaction requires no pending leave requests
    - **How users discover**: Through system error messages during submission
    - **Impact**: Prevents EOS processing even with no actual leave conflicts
    - **Evidence**: [TSSD-3908]

  - **Rule**: Salary proration requires total working days in month calculation
    - **How users discover**: Through manual verification of calculation
    - **Impact**: Determines precise salary for partial month employment
    - **Evidence**: [TSSD-4129]

  - **Rule**: Location detection based on predefined office geofence configurations
    - **How users discover**: Through check-in location labeling
    - **Impact**: Limits ability to track check-ins across multiple undefined locations
    - **Evidence**: [TSSD-319]

  - **Rule**: Daily rates must be calculated using salary configuration at the time of leave
    - **How users discover**: Through payroll discrepancies and compensation tracking
    - **Impact**: Potential financial inaccuracies and employee compensation errors
    - **Evidence**: [OS-867]

  - **Rule**: Gratuity calculated using 21 days per year for 1-5 years of service
    - **How users discover**: Manual calculation verification
    - **Impact**: Determines final settlement amount
    - **Evidence**: [TSSD-1625]

  - **Rule**: Must calculate gratuity uniformly across contract types post-2021 UAE Labor Law
    - **How users discover**: Through payroll calculation discrepancies
    - **Impact**: Requires backend system updates to remove legacy calculation logic
    - **Evidence**: [TSSD-4779]

  - **Rule**: Gratuity calculation follows UAE labor law with system-specific computational nuances
    - **How users discover**: Through support interactions or manual comparison
    - **Impact**: Slight variations possible between system and manual calculations
    - **Evidence**: [TSSD-3123]

  - **Rule**: First 5 years calculated at 21 days per year, subsequent years at 30 days per year
    - **How users discover**: Manual comparison or support inquiry
    - **Impact**: Affects total gratuity calculation
    - **Evidence**: [TSSD-2252]

  - **Rule**: Use 366-day divisor for years containing leap year periods
    - **How users discover**: Calculation discrepancies
    - **Impact**: Precise day count in partial years
    - **Evidence**: [TSSD-2252]

  - **Rule**: Gratuity calculation depends on contract type and departure reason
    - **How users discover**: Through calculation discrepancies
    - **Impact**: Requires manual workarounds to generate correct amounts
    - **Evidence**: [TSSD-4796]

  - **Rule**: Leave balance calculated using monthly and daily accrual rates
    - **How users discover**: Through support team explanation
    - **Impact**: Complex calculation requires manual interpretation
    - **Evidence**: [TSSD-3139]

  - **Rule**: Payroll cycle changes are permanent and cannot be undone
    - **How users discover**: Through support consultation or attempted configuration
    - **Impact**: High risk of data integrity issues
    - **Evidence**: [TSSD-3879]

  - **Rule**: Daily rate calculation must use working days at time of leave approval
    - **How users discover**: Through payroll deduction discrepancies
    - **Impact**: Ensures consistent and fair leave deduction calculations
    - **Evidence**: [TSSD-2212]

  - **Rule**: Daily wage calculated as Basic Salary / 30, not configurable
    - **How users discover**: During gratuity calculation process
    - **Impact**: Prevents custom daily wage calculation methodologies
    - **Evidence**: [TSSD-2043]

  - **Rule**: GOSI deductions must be calculated based on actual working days for partial months
    - **How users discover**: By comparing exported report with actual payroll calculations
    - **Impact**: Potential financial reporting inaccuracies
    - **Evidence**: [TSSD-3249]

  - **Rule**: Leave accrual defaults to monthly calculation
    - **How users discover**: During final settlement process
    - **Impact**: Potential minor discrepancies in leave balance
    - **Evidence**: [TSSD-4813]

  - **Rule**: Leave salary calculated using daily rate based on selected day type configuration
    - **How users discover**: Through payroll statements or manual calculation comparisons
    - **Impact**: Can result in full salary payment instead of prorated amount
    - **Evidence**: [TSSD-2106]

  - **Rule**: Daily wage calculated using basic salary by default
    - **How users discover**: By comparing report calculations with expected results
    - **Impact**: Potential financial reporting inaccuracies
    - **Evidence**: [TSSD-3487]

  - **Rule**: Different leave types have unique deduction calculation formulas
    - **How users discover**: Through payroll statements or support interaction
    - **Impact**: Potential misunderstanding of deduction amounts
    - **Evidence**: [TSSD-3213]

  - **Rule**: Daily rate can be calculated as basic/working days or basic+allowances/calendar days
    - **How users discover**: Through payroll configuration and unexpected deduction amounts
    - **Impact**: Directly affects unpaid leave financial calculations
    - **Evidence**: [TSSD-1798]

  - **Rule**: Closed payroll cycles cannot be modified from backend
    - **How users discover**: When attempting post-closure corrections
    - **Impact**: Prevents retroactive payment adjustments
    - **Evidence**: [TSSD-3880]

  - **Rule**: Daily wage calculated using fixed divisor defined in leave policy
    - **How users discover**: During salary computation or through support interactions
    - **Impact**: Standardized but potentially inflexible salary calculations
    - **Evidence**: [TSSD-4731]

  - **Rule**: System automatically generates full EOS deduction, then recalculates proportionally based on working days
    - **How users discover**: During payroll processing and EOS calculation
    - **Impact**: Users cannot directly delete platform-generated deductions
    - **Evidence**: [TSSD-2597]

  - **Rule**: Calculation engine defaults to calendar days for leave salary accrual
    - **How users discover**: By comparing expected vs actual report calculations
    - **Impact**: Inaccurate financial reporting and leave compensation tracking
    - **Evidence**: [TSSD-3402]

  - **Rule**: Public holidays are automatically excluded from working days salary calculations
    - **How users discover**: During final salary settlement process
    - **Impact**: Consistent but potentially inflexible salary proration
    - **Evidence**: [TSSD-3995]

  - **Rule**: Leave requests with dates after offboarding date are automatically deleted
    - **How users discover**: During offboarding process or after transaction rejection
    - **Impact**: Potential loss of leave records and associated payroll information
    - **Evidence**: [TSSD-4720]

  - **Rule**: Current system calculates leave accruals using post-GOSI salary
    - **How users discover**: Through manual reconciliation and discrepancy detection
    - **Impact**: Requires additional manual calculation and verification
    - **Evidence**: [TSSD-291]

  - **Rule**: Leave salary report shows virtual projection (Leave Availed * Daily Wage)
    - **How users discover**: Through manual comparison with actual leave salary requests
    - **Impact**: Potential user confusion about leave earnings
    - **Evidence**: [TSSD-4543]

  - **Rule**: Leave cycles start based on employee's hire date
    - **How users discover**: Through balance discrepancies
    - **Impact**: Potential variations in leave balance calculations
    - **Evidence**: [TSSD-3822]

  - **Rule**: Conditional allowance calculated on daily basis
    - **How users discover**: Comparing expected vs actual balance
    - **Impact**: Precise but complex calculation method
    - **Evidence**: [TSSD-3822]

  - **Rule**: Maximum 25 days can be carried forward between leave cycles
    - **How users discover**: Through support explanation or system display
    - **Impact**: Limits total accumulated leave
    - **Evidence**: [TSSD-4243]

  - **Rule**: Accrual frequency depends on policy type and job tenure toggle state
    - **How users discover**: Through system configuration and leave balance calculations
    - **Impact**: Determines precision of leave balance and EOS calculations
    - **Evidence**: [TSSD-3082]

  - **Rule**: Public holidays must be correctly counted as paid working days in prorated salary
    - **How users discover**: Comparing manual calculations with system-generated results
    - **Impact**: Potential salary calculation discrepancies
    - **Evidence**: [TSSD-2937]

  - **Rule**: Leave encashment calculation can use working days or custom 30-day formula
    - **How users discover**: Through payroll configuration interface
    - **Impact**: Determines how daily wage is calculated for leave salary accrual
    - **Evidence**: [TSSD-3779]

  - **Rule**: Daily wage calculation depends on monthly working days
    - **How users discover**: By comparing reports across different months
    - **Impact**: Cumulative totals can vary based on working days configuration
    - **Evidence**: [TSSD-3648]

  - **Rule**: Leave salary and salary proration use independent daily wage configurations
    - **How users discover**: Through calculation discrepancies
    - **Impact**: Requires manual configuration alignment
    - **Evidence**: [TSSD-2321]

  - **Rule**: Daily rate calculated as monthly salary divided by 30
    - **How users discover**: Through payroll documentation or calculation discrepancies
    - **Impact**: Determines base unit for leave salary computation
    - **Evidence**: [TSSD-3226]

  - **Rule**: Leave salary calculated using (Monthly Salary / 30.41) * Days of Leave
    - **How users discover**: Through manual calculation or support explanation
    - **Impact**: Precise but complex salary adjustment mechanism
    - **Evidence**: [TSSD-3275]

  - **Rule**: Leave salary calculated using (Basic + Housing) / 30 * leave days
    - **How users discover**: Through payroll calculations and discrepancies
    - **Impact**: Limited flexibility in salary component handling
    - **Evidence**: [TSSD-4387]

  - **Rule**: Only one leave salary policy should be active per employee group
    - **How users discover**: Through unexpected calculation errors or policy conflicts
    - **Impact**: Incorrect leave salary calculations and request generation
    - **Evidence**: [TSSD-2934]

  - **Rule**: Leave policies calculate deductions based on total salary percentage
    - **How users discover**: During leave payment calculation
    - **Impact**: Cannot implement component-specific leave payments
    - **Evidence**: [TSSD-3654]

  - **Rule**: Only one proration formula can be configured globally
    - **How users discover**: During initial payroll setup or when attempting to configure multiple formulas
    - **Impact**: Limits compensation strategy flexibility
    - **Evidence**: [TSSD-4375]

  - **Rule**: Air ticket allowances are added in full at renewal cycle end
    - **How users discover**: Through system configuration and benefit policy
    - **Impact**: Limited flexibility in allowance management
    - **Evidence**: [TSSD-3146]

  - **Rule**: Salary proration depends entirely on configured work week
    - **How users discover**: Through payroll calculations and support interactions
    - **Impact**: Requires precise work week configuration for accurate calculations
    - **Evidence**: [TSSD-4292]

  - **Rule**: Backend process runs daily at 5 AM DBX time
    - **How users discover**: Through reporting interface timestamps
    - **Impact**: Potential user confusion about exact retrieval timing
    - **Evidence**: [OS-3034]

  - **Rule**: Different gratuity calculation rules for limited vs unlimited contracts
    - **How users discover**: Through manual calculation verification
    - **Impact**: Potential miscalculation of termination benefits
    - **Evidence**: [TSSD-375]

  - **Rule**: Cannot backdate leave balance adjustments with existing daily attendance records
    - **How users discover**: Through support ticket escalation
    - **Impact**: Prevents direct balance modifications
    - **Evidence**: [TSSD-3789]

  - **Rule**: Leave salary calculated first, then deducted from active salary cycle
    - **How users discover**: Through support interactions or manual calculation verification
    - **Impact**: Affects total compensation calculation
    - **Evidence**: [TSSD-4349]

  - **Rule**: Salary proration based on 30-day month calculation
    - **How users discover**: During payroll processing
    - **Impact**: Determines precise daily wage for partial month work
    - **Evidence**: [TSSD-3058]

  - **Rule**: Daily rate calculated using custom divisor (e.g., 30 days)
    - **How users discover**: Through payroll configuration or support explanation
    - **Impact**: Precise compensation calculation
    - **Evidence**: [TSSD-3512]

  - **Rule**: Proration calculation locks at offboarding moment's daily rate configuration
    - **How users discover**: During payroll processing or salary verification
    - **Impact**: Potential salary calculation inaccuracies
    - **Evidence**: [TSSD-2518]

  - **Rule**: Salary proration based on working days, not calendar days
    - **How users discover**: Through system calculations during payroll processing
    - **Impact**: Ensures precise compensation matching actual work performed
    - **Evidence**: [TSSD-4303]

  - **Rule**: Filtering is only available for Approved section, not Processed section
    - **How users discover**: Through attempted use of filtering functionality
    - **Impact**: Requires manual data management and increases administrative overhead
    - **Evidence**: [TSSD-463]

  - **Rule**: Individual activity hours are tracked but not automatically totaled
    - **How users discover**: Through manual calculation attempts
    - **Impact**: Increased cognitive load for employees
    - **Evidence**: [TSSD-696]

  - **Rule**: Changing task date moves entry to new date in timesheet view
    - **How users discover**: Through unexpected timesheet display changes
    - **Impact**: Entries can appear to vanish from original dates
    - **Evidence**: [TSSD-4409]

  - **Rule**: Leave deductions are automatically generated and cannot be easily modified
    - **How users discover**: During payroll configuration attempts
    - **Impact**: Reduced payroll configuration flexibility
    - **Evidence**: [TSSD-3946]

  - **Rule**: Unpaid leave requests cannot have manual used days adjustment
    - **How users discover**: During payroll processing and leave balance review
    - **Impact**: Prevents accurate leave balance tracking
    - **Evidence**: [TSSD-2384]

  - **Rule**: Leave request deletion does not automatically remove associated payroll deductions
    - **How users discover**: Through manual verification during payroll processing
    - **Impact**: Manual deduction removal required, potential payroll calculation errors
    - **Evidence**: [TSSD-2532]

  - **Rule**: Unpaid leave deductions must match approved leave days
    - **How users discover**: By reviewing payslip details
    - **Impact**: Potential compliance and reporting issues
    - **Evidence**: [TSSD-3044]

  - **Rule**: Daily wage calculation locked at time of initial processing
    - **How users discover**: Through unexpected salary deduction amounts
    - **Impact**: Cannot modify deduction after initial calculation
    - **Evidence**: [TSSD-4464]

  - **Rule**: Use 30.42 days divisor for daily wage calculation instead of calendar days
    - **How users discover**: Through payroll deduction results
    - **Impact**: Precise but potentially confusing wage deduction calculations
    - **Evidence**: [TSSD-4368]

  - **Rule**: Payroll Configuration 'Overwrite' option takes precedence over Leave Policy settings
    - **How users discover**: Through configuration attempts and support interactions
    - **Impact**: Users cannot modify leave policy calculation when overwrite is enabled
    - **Evidence**: [TSSD-4947]

  - **Rule**: Daily rate can be calculated using Basic/Calendar days or Basic+Allowances/Calendar days
    - **How users discover**: Through payroll calculations and policy configuration
    - **Impact**: Potential miscalculation and user confusion
    - **Evidence**: [TSSD-1746]

  - **Rule**: Daily wage calculated using actual calendar days in month
    - **How users discover**: During report generation
    - **Impact**: Prevents custom divisor configurations
    - **Evidence**: [TSSD-1227]

  - **Rule**: Workflow only triggers on manual 'mark as absent' action
    - **How users discover**: Through workflow configuration and failed notifications
    - **Impact**: Reduced automation, increased manual administrative overhead
    - **Evidence**: [TSSD-3438]

  - **Rule**: Workflow must be configured with specific trigger time and date-based event parameters
    - **How users discover**: Through configuration interface and support interactions
    - **Impact**: Requires precise configuration for reliable operation
    - **Evidence**: [TSSD-3507]

  - **Rule**: Use actual calendar days for daily rate calculation
    - **How users discover**: Through payroll remarks and deduction calculations
    - **Impact**: Ensures precise, proportional salary deductions
    - **Evidence**: [TSSD-1301]

  - **Rule**: Global daily rate configuration takes precedence over policy-level settings
    - **How users discover**: Through unexpected salary deduction calculations
    - **Impact**: Users cannot customize leave deduction calculations when global settings exist
    - **Evidence**: [TSSD-1753]

  - **Rule**: Daily rate calculation must exclude public holidays
    - **How users discover**: During unpaid leave deduction verification
    - **Impact**: Ensures precise pro-rata salary deductions
    - **Evidence**: [TSSD-1807]

  

  ## Known Bugs & Failures
  ### Cannot configure multiple proration methods within same organization [TSSD-4876]
  **Severity**: high
  **Root cause hypothesis**: Inflexible proration calculation engine
  **Current status**: Feature request pending implementation

  ### No automatic pro-rated leave encashment calculation [TSSD-2499]
  **Severity**: high
  **Root cause hypothesis**: Rigid monthly accrual logic
  **Current status**: Requires manual workaround

  ### Region-specific notification delivery failures [TSSD-1517]
  **Severity**: high
  **Root cause hypothesis**: Potential regional deployment configuration issue
  **Current status**: Intermittent notification failures in KSA accounts

  ### Inconsistent attendance marking across different time periods [TSSD-713]
  **Severity**: medium
  **Root cause hypothesis**: Misconfigured work timing and late arrival settings
  **Current status**: Configuration-dependent attendance tracking

  ### Attendance report allows unvalidated overtime display [TSSD-1433]
  **Severity**: high
  **Root cause hypothesis**: Lack of checkout validation mechanisms
  **Current status**: System automatically calculates hours without manual review

  ### Data inconsistency between Time & Productivity and daily attendance reports [TSSD-1908]
  **Severity**: high
  **Root cause hypothesis**: Lack of unified data synchronization mechanism across reporting modules
  **Current status**: Unresolved systemic reporting issue

  ### Lack of clear UI guidance about daily attendance cycle [TSSD-430]
  **Severity**: medium
  **Root cause hypothesis**: Insufficient user experience design
  **Current status**: Users confused about check-in button availability

  ### Lack of automated absence deduction generation for full-day employee absences [TSSD-2206]
  **Severity**: high
  **Root cause hypothesis**: System design prioritizes manual manager decision-making
  **Current status**: Manual workflow with no automation option

  ### Cannot configure monthly accrual for conditional leave policies [TSSD-1453]
  **Severity**: medium
  **Root cause hypothesis**: System design constraint prioritizing scalability
  **Current status**: Unresolved system limitation

  ### Browser cache interferes with login process [TSSD-2266]
  **Severity**: medium
  **Root cause hypothesis**: Inconsistent browser cache and cookie management
  **Current status**: Requires manual intervention

  ### Leave status not consistently displayed for split shifts [OS-639]
  **Severity**: medium
  **Root cause hypothesis**: Incomplete shift configuration handling
  **Current status**: Unresolved limitation

  ### Cannot delete or overwrite biometric attendance API logs [TSSD-1134]
  **Severity**: medium
  **Root cause hypothesis**: Design prioritizes data immutability and audit trail preservation
  **Current status**: Requires manual workaround through manager override

  ### UI does not provide clear feedback after changing EOS leave encashment calculation method [TSSD-3939]
  **Severity**: medium
  **Root cause hypothesis**: Potential synchronization issue between configuration backend and frontend display
  **Current status**: Configuration changes not immediately reflected in UI

  ### Leave request status inconsistency [TSSD-2056]
  **Severity**: high
  **Root cause hypothesis**: Fragmented state tracking across multiple database tables
  **Current status**: Approved leaves can unexpectedly revert to pending

  ### Office location missing in API-integrated attendance reports [TSSD-4151]
  **Severity**: medium
  **Root cause hypothesis**: API integration lacks office location data transmission capability
  **Current status**: Unresolved long-standing limitation

  ### Lack of transparent leave balance calculation explanation [TSSD-4203]
  **Severity**: medium
  **Root cause hypothesis**: Complex policy configuration options
  **Current status**: Requires manual support explanation

  ### No start date field for documents [TSSD-1357]
  **Severity**: medium
  **Root cause hypothesis**: Limited document metadata configuration
  **Current status**: Feature not planned

  ### Cannot configure different proration methods per employee group [TSSD-4882]
  **Severity**: high
  **Root cause hypothesis**: Lack of flexible salary configuration options
  **Current status**: Requires manual workarounds

  ### Limited flexibility in leave accrual configuration across different cycle types [TSSD-4212]
  **Severity**: medium
  **Root cause hypothesis**: Rigid system design that requires complex policy configurations
  **Current status**: Requires manual intervention and support assistance

  ### Cross-platform UI rendering inconsistencies for daily quotes [TSSD-872]
  **Severity**: medium
  **Root cause hypothesis**: Lack of responsive design mechanisms
  **Current status**: Monitored but not immediately addressed

  ### No automated salary proration for working days variation [TSSD-4905]
  **Severity**: high
  **Root cause hypothesis**: Lack of dynamic payroll calculation system
  **Current status**: Manual tracking and adjustment required

  ### Unclear visual communication of formula override mechanisms [TSSD-2648]
  **Severity**: medium
  **Root cause hypothesis**: Lack of explicit override indicators and synchronization between modules
  **Current status**: Greyed-out formulas with implicit override behavior

  ### Selective data transmission discrepancies on weekends [TSSD-3419]
  **Severity**: medium
  **Root cause hypothesis**: API integration protocol limitations
  **Current status**: Requires manual client-side investigation

  ### Unpaid leave deduction not automatically updated on salary configuration change [TSSD-1581]
  **Severity**: high
  **Root cause hypothesis**: Synchronization issue between leave requests and salary configs
  **Current status**: Requires manual intervention or workaround

  ### Split shift attendance records can be misinterpreted as duplicates [TSSD-4230]
  **Severity**: low
  **Root cause hypothesis**: Lack of visual differentiation between shift segments
  **Current status**: System working as designed, but with potential user confusion

  ### No prorated calculation for employer social security contributions [TSSD-2561]
  **Severity**: medium
  **Root cause hypothesis**: Rigid calculation logic not designed for partial month scenarios
  **Current status**: Known limitation, planned for future improvement

  ### Leap year not correctly processed in service day calculation [TSSD-4179]
  **Severity**: high
  **Root cause hypothesis**: Hardcoded 365-day year assumption
  **Current status**: Requires manual correction

  ### Systematic undercalculation of pro-rated amounts by 0.1-0.2 decimals [TSSD-2605]
  **Severity**: medium
  **Root cause hypothesis**: Decimal precision handling limitation
  **Current status**: Escalated to development, resolved

  ### Perceived calculation discrepancy due to decimal precision [TSSD-1232]
  **Severity**: low
  **Root cause hypothesis**: Precise mathematical handling vs simplified manual calculation
  **Current status**: Explained as expected system behavior

  ### Inflexible working days calculation excluding manual override [TSSD-3832]
  **Severity**: medium
  **Root cause hypothesis**: Rigid system logic for working days determination
  **Current status**: Unresolved system limitation

  ### EOS calculation ignores unpaid leave and actual salary received [TSSD-4033]
  **Severity**: high
  **Root cause hypothesis**: Inflexible backend calculation logic
  **Current status**: Requires manual intervention and adjustment

  ### No daily leave accrual for partial months [TSSD-4042]
  **Severity**: medium
  **Root cause hypothesis**: Monthly accrual system design
  **Current status**: Requires manual intervention

  ### Potential discrepancy between system and manual gratuity calculations [TSSD-4742]
  **Severity**: medium
  **Root cause hypothesis**: Complex calculation rules with multiple variables
  **Current status**: Manual verification and adjustment possible

  ### Incorrect leave request validation blocking EOS submission [TSSD-3908]
  **Severity**: high
  **Root cause hypothesis**: Flawed backend validation logic detecting non-existent leave requests
  **Current status**: Requires manual override or support intervention

  ### Lack of calculation transparency in user interface [TSSD-4129]
  **Severity**: medium
  **Root cause hypothesis**: Missing detailed calculation breakdown fields
  **Current status**: Users must manually verify calculations

  ### No filtering mechanism for out-of-office attendance records [TSSD-319]
  **Severity**: medium
  **Root cause hypothesis**: Reporting system lacks granular location-based filtering
  **Current status**: Unresolved feature gap

  ### Incorrect daily rate calculation for unpaid leave [OS-867]
  **Severity**: high
  **Root cause hypothesis**: Lack of temporal salary rate tracking mechanism
  **Current status**: Unresolved systemic limitation

  ### Leap year day not consistently included in service duration calculation [TSSD-1625]
  **Severity**: medium
  **Root cause hypothesis**: Inconsistent day counting methodology
  **Current status**: Manual verification required

  ### Legacy contract type logic causing inconsistent gratuity calculations [TSSD-4779]
  **Severity**: high
  **Root cause hypothesis**: Outdated system logic not aligned with 2021 UAE Labor Law
  **Current status**: Requires backend fix to implement uniform calculation

  ### Gratuity calculation shows slight computational variance from manual calculation [TSSD-3123]
  **Severity**: low
  **Root cause hypothesis**: System uses proprietary calculation methodology
  **Current status**: Requires support explanation

  ### Calculation methodology not transparently communicated [TSSD-2252]
  **Severity**: medium
  **Root cause hypothesis**: Complex calculation logic with multiple segmentation rules
  **Current status**: Requires manual explanation

  ### Gratuity calculation logic fails for limited contract employees [TSSD-4796]
  **Severity**: high
  **Root cause hypothesis**: Algorithmic complexity in handling contract type variations
  **Current status**: Requires manual intervention

  ### Custom payroll cycle modifications cause systemic data inconsistencies [TSSD-3879]
  **Severity**: high
  **Root cause hypothesis**: Rigid system architecture not designed for flexible cycle changes
  **Current status**: Not recommended by support team

  ### UI dynamically recalculates daily rates on page load [TSSD-2212]
  **Severity**: medium
  **Root cause hypothesis**: Lack of mechanism to store initially calculated daily rate
  **Current status**: Resolved with fix to store initial daily rate

  ### Potential extra day added in days worked calculation [TSSD-2043]
  **Severity**: low
  **Root cause hypothesis**: Rounding or date calculation logic
  **Current status**: Confirmed as designed behavior

  ### Incorrect GOSI deduction calculation for mid-month joiners [TSSD-3249]
  **Severity**: medium
  **Root cause hypothesis**: Lack of sophisticated proration logic in export calculation
  **Current status**: Workaround available through payroll table download

  ### Incorrect leave balance calculation for mid-month departures [TSSD-4813]
  **Severity**: high
  **Root cause hypothesis**: Monthly proration logic does not handle partial month accurately
  **Current status**: Requires manual intervention or policy configuration workaround

  ### Leave salary calculation inconsistent with displayed leave duration [TSSD-2106]
  **Severity**: medium
  **Root cause hypothesis**: Misalignment between 'Custom Days' and 'Calendar Days' configurations
  **Current status**: Configuration-dependent unexpected behavior

  ### Daily wage calculation uses incorrect salary base [TSSD-3487]
  **Severity**: high
  **Root cause hypothesis**: Lack of configurable calculation method
  **Current status**: Unresolved systemic issue

  ### Lack of clear documentation for leave policy calculation methods [TSSD-3213]
  **Severity**: medium
  **Root cause hypothesis**: Complex, policy-driven calculation logic
  **Current status**: Requires manual support intervention

  ### System recalculates historical unpaid leave daily rates with current configuration [TSSD-1798]
  **Severity**: high
  **Root cause hypothesis**: Lack of configuration snapshot mechanism
  **Current status**: Fix deployed to store initially calculated daily rate

  ### Unable to correct variable pay entries in closed payroll cycle [TSSD-3880]
  **Severity**: medium
  **Root cause hypothesis**: Intentional system design preventing post-closure modifications
  **Current status**: Manual workaround or acceptance of duplicate payment required

  ### Perceived calculation discrepancy in leave salary computation [TSSD-4731]
  **Severity**: medium
  **Root cause hypothesis**: Rigid policy configuration not adapting to specific month characteristics
  **Current status**: Requires support explanation of system logic

  ### Incorrect arrear amount calculation for employees with complex employment status changes [TSSD-2597]
  **Severity**: high
  **Root cause hypothesis**: Inflexible calculation logic not accounting for nuanced employment transitions
  **Current status**: Requires manual intervention and backend support

  ### Leave salary accrual report calculates using calendar days instead of working days [TSSD-3402]
  **Severity**: high
  **Root cause hypothesis**: Calculation engine lacks flexible formula interpretation
  **Current status**: Bug identified, fix in development

  ### Lack of manual override for public holiday exclusion in working days proration [TSSD-3995]
  **Severity**: medium
  **Root cause hypothesis**: Rigid system design prioritizing standardization over flexibility
  **Current status**: Calculation follows predefined working days logic

  ### Deduction details not displayed for offboarded employees [TSSD-4720]
  **Severity**: medium
  **Root cause hypothesis**: System limitation in displaying leave information post-offboarding
  **Current status**: Daily rates and number of days not shown

  ### Leave accrual calculation does not support full salary basis [TSSD-291]
  **Severity**: medium
  **Root cause hypothesis**: Inflexible calculation methodology
  **Current status**: Planned enhancement for Q1 2024

  ### Leave accrual report calculation does not match actual leave salary [TSSD-4543]
  **Severity**: medium
  **Root cause hypothesis**: Intentional virtual projection design lacking clear user communication
  **Current status**: Unresolved UX design limitation

  ### Incorrect leave balance for specific hire dates [TSSD-3822]
  **Severity**: medium
  **Root cause hypothesis**: Complexity in daily conditional allowance calculation
  **Current status**: Requires manual investigation and system adjustment

  ### Leave balance display not intuitive for complex calculations [TSSD-4243]
  **Severity**: medium
  **Root cause hypothesis**: Complex multi-cycle projection logic
  **Current status**: Requires manual support explanation

  ### Inconsistent leave accrual calculation across policy types [TSSD-3082]
  **Severity**: medium
  **Root cause hypothesis**: Configuration toggle limits accrual method flexibility
  **Current status**: System allows different accrual methods based on policy configuration

  ### Public holiday incorrectly excluded from working days calculation during leave salary computation [TSSD-2937]
  **Severity**: high
  **Root cause hypothesis**: Inflexible calculation logic not handling holiday interactions
  **Current status**: Requires manual correction

  ### Leave salary accrual report does not respect configured calculation method [TSSD-3779]
  **Severity**: high
  **Root cause hypothesis**: Potential frontend or cache synchronization issue
  **Current status**: Requires manual verification and potential backend intervention

  ### Misalignment between expected and calculated leave salary accrual [TSSD-3648]
  **Severity**: medium
  **Root cause hypothesis**: Configuration of daily wage calculator affects calculation method
  **Current status**: Requires user configuration and understanding

  ### Calculation mismatch between expected and system-generated leave salary [TSSD-2321]
  **Severity**: medium
  **Root cause hypothesis**: Independent daily wage configurations
  **Current status**: Requires manual configuration verification

  ### System calculates leave salary using incorrect number of days [TSSD-3226]
  **Severity**: high
  **Root cause hypothesis**: Algorithmic error in date range to day count conversion
  **Current status**: Requires manual deletion and resubmission of leave salary request

  ### Leave salary calculation not intuitively understood by users [TSSD-3275]
  **Severity**: medium
  **Root cause hypothesis**: Complex mathematical logic not visually explained
  **Current status**: Requires manual support explanation

  ### Non-formula allowances not prorated during leave periods [TSSD-4387]
  **Severity**: high
  **Root cause hypothesis**: Rigid salary calculation logic without component-level configuration
  **Current status**: Requires manual adjustments

  ### Policy changes do not take effect until other policies are deactivated [TSSD-2934]
  **Severity**: high
  **Root cause hypothesis**: Ineffective policy precedence and caching mechanism
  **Current status**: Manual policy deactivation required to apply changes

  ### Cannot configure leave policies to pay only basic salary [TSSD-3654]
  **Severity**: high
  **Root cause hypothesis**: Lack of granular salary component configuration
  **Current status**: Requires manual workarounds

  ### Cannot apply different proration formulas for employee groups [TSSD-4375]
  **Severity**: high
  **Root cause hypothesis**: Inflexible salary calculation engine design
  **Current status**: Unresolved product limitation

  ### No daily pro-ration mechanism for air ticket allowances [TSSD-3146]
  **Severity**: medium
  **Root cause hypothesis**: System designed for bulk allocation instead of granular tracking
  **Current status**: Feature not planned for development

  ### Timestamp discrepancy in scheduled data retrieval [OS-3034]
  **Severity**: medium
  **Root cause hypothesis**: Time zone or backend process configuration complexity
  **Current status**: Unresolved system behavior

  ### Potential incorrect application of contract-type calculation rules [TSSD-375]
  **Severity**: medium
  **Root cause hypothesis**: Lack of clear documentation on calculation logic
  **Current status**: Requires manual verification

  ### No UI for manual leave balance adjustment [TSSD-3789]
  **Severity**: high
  **Root cause hypothesis**: System design prioritizes attendance record integrity
  **Current status**: Requires case-by-case backend intervention

  ### Configuration complexity leads to calculation misunderstandings [TSSD-4349]
  **Severity**: medium
  **Root cause hypothesis**: Non-intuitive policy settings
  **Current status**: Requires manual configuration and verification

  ### Inconsistent salary proration for future departure dates [TSSD-3058]
  **Severity**: high
  **Root cause hypothesis**: Date-sensitive calculation logic error
  **Current status**: Bug identified and escalated to development

  ### Lack of transparent proration calculation explanation [TSSD-3512]
  **Severity**: medium
  **Root cause hypothesis**: Complex two-step calculation not clearly communicated
  **Current status**: Requires manual support intervention

  ### Salary proration miscalculated when daily rate configuration changes [TSSD-2518]
  **Severity**: high
  **Root cause hypothesis**: System design prevents dynamic proration recalculation
  **Current status**: Requires manual workaround of rehiring and re-offboarding

  ### User misunderstanding of proration calculation method [TSSD-4303]
  **Severity**: low
  **Root cause hypothesis**: Lack of clear documentation about working day calculation
  **Current status**: Resolved through support explanation

  ### Cannot filter processed time and pay adjustments by destination [TSSD-463]
  **Severity**: medium
  **Root cause hypothesis**: Missing feature in reporting infrastructure
  **Current status**: Logged in product backlog as improvement

  ### No daily hours summary feature [TSSD-696]
  **Severity**: low
  **Root cause hypothesis**: System design limitation in time aggregation
  **Current status**: Acknowledged as backlog item

  ### Timesheet entries disappear or show incorrectly after date modification [TSSD-4409]
  **Severity**: medium
  **Root cause hypothesis**: Lack of clear date change tracking mechanism
  **Current status**: User confusion about entry persistence

  ### Unable to edit or delete automatically created annual leave deduction [TSSD-3946]
  **Severity**: medium
  **Root cause hypothesis**: Rigid system configuration preventing manual intervention
  **Current status**: Requires development team intervention

  ### Multi-month unpaid leave causes incorrect deduction and salary calculation [TSSD-2384]
  **Severity**: high
  **Root cause hypothesis**: Lack of flexible leave balance adjustment mechanism
  **Current status**: Requires manual workaround of deleting and recreating leave requests

  ### Duplicate deduction generation during leave transaction modification [TSSD-2532]
  **Severity**: high
  **Root cause hypothesis**: Lack of robust leave-to-payroll synchronization logic
  **Current status**: Unresolved systemic issue requiring manual cleanup

  ### Payslip displays incorrect unpaid leave day count [TSSD-3044]
  **Severity**: high
  **Root cause hypothesis**: Incomplete cross-month leave aggregation logic
  **Current status**: Unresolved system limitation

  ### Time Off and Payroll modules lack real-time synchronization [TSSD-4464]
  **Severity**: high
  **Root cause hypothesis**: Modules do not share complete leave request details during calculation
  **Current status**: Manual deduction or cycle reopening required

  ### Leave Policy UI does not reflect actual calculation method when Overwrite is enabled [TSSD-4947]
  **Severity**: medium
  **Root cause hypothesis**: Configuration hierarchy complexity
  **Current status**: Requires manual verification of actual calculation method

  ### Lack of transparency in leave policy configuration and calculation [TSSD-1746]
  **Severity**: medium
  **Root cause hypothesis**: Complex, non-intuitive policy configuration system
  **Current status**: Requires manual verification and deep understanding

  ### Cannot accommodate custom daily wage calculation methods [TSSD-1227]
  **Severity**: medium
  **Root cause hypothesis**: Intentional design for accounting compliance
  **Current status**: Enhancement request added to backlog

  ### Workflow does not trigger for system-default absent employees [TSSD-3438]
  **Severity**: medium
  **Root cause hypothesis**: Event design requires explicit manual action
  **Current status**: Planned enhancement in development

  ### Attendance absence workflow inconsistently triggered [TSSD-3507]
  **Severity**: medium
  **Root cause hypothesis**: Configuration complexity and event trigger mechanism limitations
  **Current status**: Requires ongoing engineering intervention

  ### Remarks display shows incorrect number of days [TSSD-1301]
  **Severity**: low
  **Root cause hypothesis**: Frontend display logic not synchronized with backend calculation
  **Current status**: Calculation remains accurate despite display inconsistency

  ### Unpaid leave deduction calculated using gross salary instead of basic salary [TSSD-1753]
  **Severity**: high
  **Root cause hypothesis**: Global configuration override of policy-specific calculation rules
  **Current status**: Confirmed as expected system behavior

  ### Daily rate display shows incorrect month's calculation [TSSD-1807]
  **Severity**: medium
  **Root cause hypothesis**: System recalculates daily rate during payroll processing instead of preserving original rate
  **Current status**: Fixed by storing initially calculated daily rate

  

  ## Edge Cases & Exceptions
  - **Scenario**: Organizations with white-collar and blue-collar employees requiring different proration calculations
    - **System behavior**: Forces uniform proration across all employee types
    - **User impact**: Inaccurate salary calculations for different employee categories
    - **Evidence**: [TSSD-4876]

  - **Scenario**: Employee leaves mid-month
    - **System behavior**: Incomplete leave day calculation
    - **User impact**: Potential loss of accrued leave compensation
    - **Evidence**: [TSSD-2499]

  - **Scenario**: Payroll manager needs to set unique daily rate for leave encashment
    - **System behavior**: No direct configuration path available
    - **User impact**: Requires manual workaround or external calculation
    - **Evidence**: [OS-446]

  - **Scenario**: Comparing attendance across different time periods
    - **System behavior**: Limited by current list view representation
    - **User impact**: Difficulty in identifying attendance trends
    - **Evidence**: [TSSD-3774]

  - **Scenario**: Comment submission from custom reports
    - **System behavior**: Potential error in comment transmission
    - **User impact**: Comments may fail to send or notify
    - **Evidence**: [TSSD-1517]

  - **Scenario**: Employee checks in early but is marked late due to configuration
    - **System behavior**: Applies late status based on configured work timing rules
    - **User impact**: Potential misrepresentation of actual attendance
    - **Evidence**: [TSSD-713]

  - **Scenario**: Employee checks out on subsequent day
    - **System behavior**: Calculates and displays extended hours as overtime
    - **User impact**: Potential for manipulating overtime claims
    - **Evidence**: [TSSD-1433]

  - **Scenario**: Overtime adjustments showing different location statuses in multiple reports
    - **System behavior**: Inconsistent display of check-in/out location across reporting modules
    - **User impact**: Reduced trust in attendance tracking system
    - **Evidence**: [TSSD-1908]

  - **Scenario**: Attempting multiple check-ins in same day
    - **System behavior**: Check-in button becomes unavailable
    - **User impact**: Confusion about button visibility
    - **Evidence**: [TSSD-430]

  - **Scenario**: No attendance record for entire day
    - **System behavior**: Requires explicit manager action to generate deduction request
    - **User impact**: Manual intervention needed for absence tracking
    - **Evidence**: [TSSD-2206]

  - **Scenario**: Client needs monthly accrual for conditional leave policies
    - **System behavior**: System defaults to daily accrual
    - **User impact**: Cannot match specific organizational leave calculation methods
    - **Evidence**: [TSSD-1453]

  - **Scenario**: Browser-specific login inconsistencies
    - **System behavior**: Intermittent page loading and authentication failures
    - **User impact**: Requires technical troubleshooting
    - **Evidence**: [TSSD-2266]

  - **Scenario**: Split shift with leave request
    - **System behavior**: Partial or inconsistent status update
    - **User impact**: Incorrect attendance tracking
    - **Evidence**: [OS-639]

  - **Scenario**: Selective employee attendance data correction
    - **System behavior**: Requires manager override for individual record editing
    - **User impact**: Manual intervention needed for data adjustments
    - **Evidence**: [TSSD-1134]

  - **Scenario**: Changing daily wage calculation setting does not immediately update UI
    - **System behavior**: Configuration change made, but display remains unchanged
    - **User impact**: Confusion about whether configuration was successfully applied
    - **Evidence**: [TSSD-3939]

  - **Scenario**: Multiple leave requests for same employee and date
    - **System behavior**: Creates duplicate records across multiple tables
    - **User impact**: Confusing approval status and notification history
    - **Evidence**: [TSSD-2056]

  - **Scenario**: API-based attendance tracking
    - **System behavior**: Office location column remains empty in custom reports
    - **User impact**: Reduced reporting accuracy and compliance tracking
    - **Evidence**: [TSSD-4151]

  - **Scenario**: Leave policy set to Conditional with changing tenure conditions
    - **System behavior**: Calculate accrual on a daily basis using pro-rata method
    - **User impact**: Balance may differ from manual expectations
    - **Evidence**: [TSSD-4203]

  - **Scenario**: Need for daily expiry notifications
    - **System behavior**: System cannot provide daily alerts
    - **User impact**: Potential missed document renewal opportunities
    - **Evidence**: [TSSD-1357]

  - **Scenario**: Mixed workforce with head office and operations employees
    - **System behavior**: Applies uniform proration calculation
    - **User impact**: Necessitates manual salary adjustments
    - **Evidence**: [TSSD-4882]

  - **Scenario**: Migrating from work anniversary to calendar year cycle
    - **System behavior**: Requires manual configuration of conditional leave policy for daily accrual
    - **User impact**: Potential miscalculation of leave balances during transition
    - **Evidence**: [TSSD-4212]

  - **Scenario**: Quote display on varying screen sizes and orientations
    - **System behavior**: Content gets truncated or cut off
    - **User impact**: Incomplete quote visibility
    - **Evidence**: [TSSD-872]

  - **Scenario**: Employee works more than 26 days
    - **System behavior**: Currently requires manual salary increment
    - **User impact**: Additional administrative work
    - **Evidence**: [TSSD-4905]

  - **Scenario**: Disabling 'Daily word of wisdom' while keeping newsfeed active
    - **System behavior**: Allows selective post type deactivation
    - **User impact**: Customizable information stream
    - **Evidence**: [TSSD-120]

  - **Scenario**: Unpaid leave daily wage calculation
    - **System behavior**: Uses payroll-configured daily wage formula instead of leave policy formula
    - **User impact**: Potential confusion about actual calculation method
    - **Evidence**: [TSSD-2648]

  - **Scenario**: Weekend attendance data transmission
    - **System behavior**: Potential selective recording issues
    - **User impact**: Incomplete or inaccurate attendance records
    - **Evidence**: [TSSD-3419]

  - **Scenario**: Salary configuration changes after leave request creation
    - **System behavior**: May use outdated salary information for deduction
    - **User impact**: Incorrect payroll deduction amounts
    - **Evidence**: [TSSD-1581]

  - **Scenario**: Employee working split shifts
    - **System behavior**: Generate separate attendance records for each shift segment
    - **User impact**: Multiple entries appear for the same employee on the same day
    - **Evidence**: [TSSD-4230]

  - **Scenario**: Employee offboarded mid-month
    - **System behavior**: Calculates full monthly social security contribution
    - **User impact**: Incorrect reporting of employer contributions
    - **Evidence**: [TSSD-2561]

  - **Scenario**: Calculating service days across a leap year
    - **System behavior**: Incorrectly uses 365 days instead of 366
    - **User impact**: Reduced gratuity calculation
    - **Evidence**: [TSSD-4179]

  - **Scenario**: Employee departure on non-month-end date
    - **System behavior**: Calculates proportional salary based on days worked
    - **User impact**: Potential minor calculation discrepancies
    - **Evidence**: [TSSD-2605]

  - **Scenario**: Partial year service duration
    - **System behavior**: Convert days to precise decimal year fraction
    - **User impact**: Minor calculation differences from manual methods
    - **Evidence**: [TSSD-1232]

  - **Scenario**: Public holiday present in calculation month
    - **System behavior**: Includes public holiday in working days count
    - **User impact**: Slight reduction in calculated daily wage
    - **Evidence**: [TSSD-3832]

  - **Scenario**: Employee leaves mid-month with unpaid leave
    - **System behavior**: Calculates EOS using full monthly salary
    - **User impact**: Incorrect compensation and potential financial disputes
    - **Evidence**: [TSSD-4033]

  - **Scenario**: Employee leaving mid-month
    - **System behavior**: No automatic pro-rata leave calculation
    - **User impact**: Potential leave balance discrepancy
    - **Evidence**: [TSSD-4042]

  - **Scenario**: Mid-month employee departure
    - **System behavior**: Leave days not automatically prorated or included
    - **User impact**: Requires manual balance adjustment
    - **Evidence**: [TSSD-4742]

  - **Scenario**: Employee with no pending leaves cannot submit EOS
    - **System behavior**: Blocks transaction with misleading error message
    - **User impact**: Manual intervention required to resolve false validation
    - **Evidence**: [TSSD-3908]

  - **Scenario**: Employee joins mid-month with public holidays
    - **System behavior**: Excludes non-working days from salary calculation
    - **User impact**: Proportional salary based on actual working days
    - **Evidence**: [TSSD-4129]

  - **Scenario**: Check-in from location outside configured office boundaries
    - **System behavior**: Generically labels as 'out of office'
    - **User impact**: Cannot distinguish between different external locations
    - **Evidence**: [TSSD-319]

  - **Scenario**: Unpaid leave spanning multiple salary rate periods
    - **System behavior**: Defaults to current salary configuration
    - **User impact**: Incorrect daily rate calculations
    - **Evidence**: [OS-867]

  - **Scenario**: Leap year with February 29th
    - **System behavior**: Potential inconsistent day counting
    - **User impact**: Minor gratuity amount discrepancies
    - **Evidence**: [TSSD-1625]

  - **Scenario**: Partial year service duration calculation
    - **System behavior**: Calculate using calendar days divided by 365, accounting for leap years
    - **User impact**: Precise prorated gratuity calculation
    - **Evidence**: [TSSD-4779]

  - **Scenario**: Calculating gratuity for limited contract with resignation
    - **System behavior**: Pro-rata calculation using specific formula
    - **User impact**: Potential minor computational differences from expected amount
    - **Evidence**: [TSSD-3123]

  - **Scenario**: Partial year calculation with leap year inclusion
    - **System behavior**: Dynamic divisor selection between 365 and 366
    - **User impact**: Potential calculation differences from manual methods
    - **Evidence**: [TSSD-2252]

  - **Scenario**: Limited contract employee termination
    - **System behavior**: Inconsistent gratuity calculation
    - **User impact**: Requires manual amount adjustment or departure reason modification
    - **Evidence**: [TSSD-4796]

  - **Scenario**: Partial month leave accrual calculation
    - **System behavior**: Calculate daily accrual rate and multiply by working days
    - **User impact**: Requires detailed understanding of calculation method
    - **Evidence**: [TSSD-3139]

  - **Scenario**: Changing payroll cycle mid-year
    - **System behavior**: Generates potential calculation and historical reporting complications
    - **User impact**: Loss of historical data access and potential salary calculation errors
    - **Evidence**: [TSSD-3879]

  - **Scenario**: Holiday calendar modifications after leave approval
    - **System behavior**: Original calculation parameters should remain unchanged
    - **User impact**: Prevents retroactive changes to approved leave deductions
    - **Evidence**: [TSSD-2212]

  - **Scenario**: Client wants alternative daily wage calculation (Basic × 12 / 365)
    - **System behavior**: Rejects non-standard calculation, uses fixed 30-day divisor
    - **User impact**: Potential minor differences in gratuity amount
    - **Evidence**: [TSSD-2043]

  - **Scenario**: Employee joins mid-month
    - **System behavior**: Displays full monthly GOSI deduction instead of prorated amount
    - **User impact**: Requires manual correction or alternative report verification
    - **Evidence**: [TSSD-3249]

  - **Scenario**: Employee leaves mid-month
    - **System behavior**: Calculates leave based on previous month's end
    - **User impact**: Potential loss of partial month leave days
    - **Evidence**: [TSSD-4813]

  - **Scenario**: Leave policy uses 'Custom Days' with public holidays
    - **System behavior**: Calculates using full interval without excluding holidays
    - **User impact**: Potential overpayment or salary calculation confusion
    - **Evidence**: [TSSD-2106]

  - **Scenario**: UAE client with no social security contributions
    - **System behavior**: Displays GOSI component despite no configuration
    - **User impact**: Misleading financial reporting
    - **Evidence**: [TSSD-3487]

  - **Scenario**: Confusion between unpaid leave and sick leave unpaid policy formulas
    - **System behavior**: Applies policy-specific calculation method
    - **User impact**: Unexpected or misunderstood salary deduction
    - **Evidence**: [TSSD-3213]

  - **Scenario**: Configuration changes mid-period
    - **System behavior**: Dynamically recalculates display values using current settings
    - **User impact**: Potential discrepancies in historical leave deduction amounts
    - **Evidence**: [TSSD-1798]

  - **Scenario**: Duplicate variable pay discovered after payroll cycle closure
    - **System behavior**: No correction possible without reopening entire cycle
    - **User impact**: Potential financial discrepancies and manual reconciliation required
    - **Evidence**: [TSSD-3880]

  - **Scenario**: Leave spans partial month with varying calendar days
    - **System behavior**: Applies consistent divisor regardless of month length
    - **User impact**: Potential minor discrepancies in salary calculation
    - **Evidence**: [TSSD-4731]

  - **Scenario**: Employee offboarded and rehired in consecutive months
    - **System behavior**: Generates prorated salary and EOS deductions based on departure date
    - **User impact**: Requires manual verification and potential adjustment of arrears
    - **Evidence**: [TSSD-2597]

  - **Scenario**: User specifies working days in formula
    - **System behavior**: Calculates using calendar days
    - **User impact**: Incorrect leave salary computation
    - **Evidence**: [TSSD-3402]

  - **Scenario**: Employee departs mid-month near a public holiday
    - **System behavior**: Maintains consistent salary calculation regardless of holiday proximity
    - **User impact**: Potential misalignment with expected granular salary reduction
    - **Evidence**: [TSSD-3995]

  - **Scenario**: Leave request created before offboarding with dates after departure
    - **System behavior**: Automatic deletion of leave request
    - **User impact**: Unable to preserve leave records beyond departure date
    - **Evidence**: [TSSD-4720]

  - **Scenario**: Organizations with complex leave policy requirements
    - **System behavior**: Unable to configure granular leave calculation rules
    - **User impact**: Manual workarounds and potential leave balance inaccuracies
    - **Evidence**: [TSSD-291]

  - **Scenario**: One month leave salary request always equals monthly salary
    - **System behavior**: Actual calculation differs from report projection
    - **User impact**: Misunderstanding of leave salary computation
    - **Evidence**: [TSSD-4543]

  - **Scenario**: Employee hired on February 29th (leap year)
    - **System behavior**: Cycle starts from February 28th, causing 1-day discrepancy
    - **User impact**: Potential negative or reduced leave balance in first cycle
    - **Evidence**: [TSSD-3822]

  - **Scenario**: Leave request spanning multiple cycles with partial month accruals
    - **System behavior**: Prorates accrual and deducts from future and current balances
    - **User impact**: Requires complex explanation of balance calculation
    - **Evidence**: [TSSD-4243]

  - **Scenario**: Employee leaves company mid-month with non-conditional leave policy
    - **System behavior**: Monthly accrual may result in less accurate leave encashment
    - **User impact**: Potential financial discrepancy in leave settlement
    - **Evidence**: [TSSD-3082]

  - **Scenario**: Leave request spanning a public holiday
    - **System behavior**: Excludes public holiday from working days calculation
    - **User impact**: Incorrect prorated salary computation
    - **Evidence**: [TSSD-2937]

  - **Scenario**: Configured calculation method not reflected in generated reports
    - **System behavior**: Report uses default or previous calculation method
    - **User impact**: Incorrect leave salary accrual reporting
    - **Evidence**: [TSSD-3779]

  - **Scenario**: February has fewer working days
    - **System behavior**: Recalculates daily wage rate based on available working days
    - **User impact**: Potentially inconsistent cumulative leave salary totals
    - **Evidence**: [TSSD-3648]

  - **Scenario**: Different divisors used for leave salary (30 days) and salary proration (30.42 days)
    - **System behavior**: Calculates compensation using separate formulas
    - **User impact**: Potential misalignment in salary calculations
    - **Evidence**: [TSSD-2321]

  - **Scenario**: Leave request spans multiple months or partial pay periods
    - **System behavior**: Potential miscalculation of total leave days
    - **User impact**: Incorrect leave salary amount
    - **Evidence**: [TSSD-3226]

  - **Scenario**: Leave spanning two different payroll months
    - **System behavior**: Compute total leave salary, then deduct current month's portion
    - **User impact**: Potential confusion about calculation method
    - **Evidence**: [TSSD-3275]

  - **Scenario**: Allowances excluded from leave salary formula are still paid in full
    - **System behavior**: Pays excluded allowances regardless of leave days
    - **User impact**: Potential over-compensation and client dissatisfaction
    - **Evidence**: [TSSD-4387]

  - **Scenario**: Multiple active leave salary policies for same employee type
    - **System behavior**: Unpredictable daily rate calculations and policy application
    - **User impact**: Incorrect leave salary requests and compensation
    - **Evidence**: [TSSD-2934]

  - **Scenario**: Custom payroll cycle from 26th to 25th of month
    - **System behavior**: Standard monthly salary calculations may not align
    - **User impact**: Requires manual adjustment of leave calculations
    - **Evidence**: [TSSD-3654]

  - **Scenario**: Different proration needed for office vs non-office employees
    - **System behavior**: Rejects configuration of multiple formulas
    - **User impact**: Manual calculations or workarounds required
    - **Evidence**: [TSSD-4375]

  - **Scenario**: Employee wants to use partial air ticket allowance mid-cycle
    - **System behavior**: Request rejected due to insufficient accrued balance
    - **User impact**: Cannot utilize travel benefits proportionally
    - **Evidence**: [TSSD-3146]

  - **Scenario**: Work week with all 7 days configured as working days
    - **System behavior**: Calculates full month as working days
    - **User impact**: Different proration result compared to standard calendar assumptions
    - **Evidence**: [TSSD-4292]

  - **Scenario**: Data retrieval occurs slightly before scheduled time
    - **System behavior**: Timestamp shows retrieval 6 minutes early
    - **User impact**: Uncertainty about precise data synchronization
    - **Evidence**: [OS-3034]

  - **Scenario**: Calculating gratuity for employees with 5+ years of service
    - **System behavior**: Apply 30 days per year of service
    - **User impact**: Requires precise understanding of calculation methodology
    - **Evidence**: [TSSD-375]

  - **Scenario**: Incorrect leave balance approval requiring reduction
    - **System behavior**: Requires backend manual database update
    - **User impact**: No self-service correction mechanism available
    - **Evidence**: [TSSD-3789]

  - **Scenario**: Selective allowance proration
    - **System behavior**: Only specific allowances (e.g., housing) can be prorated
    - **User impact**: Potential misalignment with expected compensation
    - **Evidence**: [TSSD-4349]

  - **Scenario**: Payroll processed before employee departure date
    - **System behavior**: Fails to prorate salary correctly
    - **User impact**: Potential over or underpayment of final salary
    - **Evidence**: [TSSD-3058]

  - **Scenario**: Employee joins mid-month in February
    - **System behavior**: Calculates days worked based on actual calendar days
    - **User impact**: Potential misunderstanding of proration logic
    - **Evidence**: [TSSD-3512]

  - **Scenario**: Changing daily rate configuration after employee offboarding
    - **System behavior**: No automatic recalculation of prorated amounts
    - **User impact**: Incorrect salary calculations requiring manual intervention
    - **Evidence**: [TSSD-2518]

  - **Scenario**: Employee terminated mid-month
    - **System behavior**: Prorates salary based on actual working days in month
    - **User impact**: Transparent and consistent salary calculation
    - **Evidence**: [TSSD-4303]

  - **Scenario**: Multiple daily extra hour requests across different allocation types
    - **System behavior**: No automatic categorization or filtering
    - **User impact**: Increased manual tracking and potential misallocation risk
    - **Evidence**: [TSSD-463]

  - **Scenario**: Employee works multiple disconnected activities in a single day
    - **System behavior**: Tracks individual activity times separately
    - **User impact**: Must manually sum total hours worked
    - **Evidence**: [TSSD-696]

  - **Scenario**: Manually changing task date across different days
    - **System behavior**: Entry relocates to new date without warning
    - **User impact**: Perceived loss or inconsistent tracking of time entries
    - **Evidence**: [TSSD-4409]

  - **Scenario**: Employee uses more leave days than allowed
    - **System behavior**: Automatically generates deduction based on predefined rules
    - **User impact**: Limited ability to adjust or override automatic deductions
    - **Evidence**: [TSSD-3946]

  - **Scenario**: Unpaid leave spanning multiple payroll months
    - **System behavior**: Accumulates deductions, creates negative salary
    - **User impact**: Incorrect leave balance and salary calculations
    - **Evidence**: [TSSD-2384]

  - **Scenario**: Changing daily wage calculation after leave request submission
    - **System behavior**: Creates multiple deduction entries with different calculation methods
    - **User impact**: Requires manual intervention to resolve deduction discrepancies
    - **Evidence**: [TSSD-2532]

  - **Scenario**: Leave approved across multiple months during single payroll cycle
    - **System behavior**: Partial day count display with full deduction amount
    - **User impact**: Confusion in leave representation
    - **Evidence**: [TSSD-3044]

  - **Scenario**: Public holiday added after leave request creation
    - **System behavior**: Recalculation not supported, causing potential salary deduction discrepancies
    - **User impact**: Potential incorrect salary deductions requiring manual intervention
    - **Evidence**: [TSSD-4464]

  - **Scenario**: Full month unpaid leave
    - **System behavior**: Calculate deduction using 30.42 day divisor, potentially exceeding monthly salary
    - **User impact**: Requires manual adjustment to balance payroll
    - **Evidence**: [TSSD-4368]

  - **Scenario**: Maternity half-pay leave with complex wage calculation
    - **System behavior**: Calculation method can differ between Basic/calendar and Basic+Allowance/calendar
    - **User impact**: Requires careful configuration to ensure correct wage deduction
    - **Evidence**: [TSSD-4947]

  - **Scenario**: Multiple leave policies with similar names but different calculation methods
    - **System behavior**: Applies policy-specific calculation without user warning
    - **User impact**: Potential misunderstanding of salary deductions
    - **Evidence**: [TSSD-1746]

  - **Scenario**: Client requires 30.5 day divisor instead of calendar days
    - **System behavior**: Report uses strict calendar day calculation
    - **User impact**: Manual workaround required
    - **Evidence**: [TSSD-1227]

  - **Scenario**: System-default absent records
    - **System behavior**: No automatic workflow trigger
    - **User impact**: Missing absence notifications
    - **Evidence**: [TSSD-3438]

  - **Scenario**: Workflow not triggering despite presence of absent employees
    - **System behavior**: Failed to generate notifications
    - **User impact**: Manual tracking and communication required
    - **Evidence**: [TSSD-3507]

  - **Scenario**: February in leap year with 29 days
    - **System behavior**: Calculates daily rate using 29 days instead of default 31
    - **User impact**: More accurate unpaid leave deductions
    - **Evidence**: [TSSD-1301]

  - **Scenario**: Employees with non-standard work weeks and public holidays
    - **System behavior**: Applies global daily rate calculation across all scenarios
    - **User impact**: Potential miscalculation of salary deductions
    - **Evidence**: [TSSD-1753]

  - **Scenario**: Leave request created in one month, processed in another
    - **System behavior**: Potentially recalculates daily rate based on processing month
    - **User impact**: Confusing daily rate display that doesn't match leave occurrence month
    - **Evidence**: [TSSD-1807]

  

  ## Dependencies & Integrations
  - **Employee classification system**: Requires ability to link proration rules to specific employee categories [TSSD-4876]
- **HR offboarding process**: Requires manual intervention for accurate leave calculations [TSSD-2499]
- **Mobile notification system**: Unreliable push notification delivery across devices [TSSD-1517]
- **Accurate timezone and work timing configuration**: Directly impacts attendance status calculation [TSSD-713]
- **Overtime policy configuration**: Toggle determines extra hours request requirement [TSSD-1433]
- **Cross-module data mapping and synchronization**: Determines accuracy and consistency of attendance reporting [TSSD-1908]
- **Time and Pay adjustment system**: Requires manual trigger for absence deduction requests [TSSD-2206]
- **Leave policy type determines accrual method**: Constrains accrual frequency configuration [TSSD-1453]
- **Browser cache and cookie management**: Directly impacts login reliability and user experience [TSSD-2266]
- **Shift scheduling system**: Determines complexity of attendance reporting [OS-639]
- **Manager administrative access**: Required for making attendance record modifications [TSSD-1134]
- **Labor law compliance requirements**: Determines acceptable wage calculation methods [TSSD-3939]
- **Payroll deduction calculation**: Triggers system updates and notifications [TSSD-2056]
- **Employee profile and shift configurations**: Potentially used as fallback for office location information [TSSD-4151]
- **Employee tenure tracking system**: Enables day-wise leave accrual calculation [TSSD-4203]
- **Leave policy configuration**: Determines whether calculations are based on working days or calendar days [TSSD-4882]
- **Conditional leave policy configuration**: Enables or restricts daily leave accrual functionality [TSSD-4212]
- **Responsive UI design framework**: Determines content display consistency across platforms [TSSD-872]
- **Accurate employee attendance tracking**: Required for precise salary calculation [TSSD-4905]
- **Admin Panel access and permissions**: Configuration requires administrative credentials [TSSD-120]
- **Payroll configuration module**: Determines ultimate daily wage calculation logic [TSSD-2648]
- **Third-party API provider (Jay Softworks)**: Determines data transmission accuracy and completeness [TSSD-3419]
- **Salary configuration system**: Determines accuracy of daily wage and leave deduction calculations [TSSD-1581]
- **Shift configuration system**: Determines how attendance records are generated and displayed [TSSD-4230]
- **Gross salary configuration**: Determines base for social security contribution calculation [TSSD-2561]
- **Accurate employee joining and exit date recording**: Directly impacts gratuity calculation precision [TSSD-4179]
- **Accurate salary component configuration**: Determines base calculation accuracy [TSSD-2605]
- **WPS gratuity calculation regulations**: Enforces strict calculation methodology [TSSD-1232]
- **Accurate employee joining and departure dates**: Directly impacts daily wage calculation precision [TSSD-3832]
- **Accurate employee departure date and leave records**: Determines proration and salary calculation precision [TSSD-4033]
- **Monthly leave policy configuration**: Determines leave crediting mechanism [TSSD-4042]
- **Accurate employee hire and departure date records**: Directly impacts gratuity calculation precision [TSSD-4742]
- **Leave management system**: Validates leave requests during EOS processing [TSSD-3908]
- **Accurate workweek configuration**: Determines working day identification [TSSD-4129]
- **Accurate office geofence configuration**: Determines accuracy of location detection and labeling [TSSD-319]
- **Salary configuration system**: Determines accuracy of leave compensation calculations [OS-867]
- **Accurate employee contract and salary data**: Directly impacts gratuity calculation precision [TSSD-1625]
- **UAE Labor Law compliance**: Mandates uniform gratuity calculation across contract types [TSSD-4779]
- **UAE labor law regulations**: Defines core calculation rules and parameters [TSSD-3123]
- **Accurate employee profile data (joining date, contract type, salary)**: Precise input required for correct gratuity calculation [TSSD-2252]
- **Accurate employee contract and departure reason data**: Determines gratuity calculation method and result [TSSD-4796]
- **Leave cycle dates**: Determines accrual calculation methodology [TSSD-3139]
- **Salary proration logic tied to payroll cycle configuration**: Changes to cycle directly impact new employee salary calculations [TSSD-3879]
- **Accurate holiday calendar configuration**: Determines working day count for daily rate calculation [TSSD-2212]
- **Accurate employee contract and salary data**: Requires precise input for correct gratuity calculation [TSSD-2043]
- **Accurate employee joining date and salary data**: Determines precision of GOSI deduction calculations [TSSD-3249]
- **Leave policy configuration**: Determines accrual calculation method [TSSD-4813]
- **Leave policy settings**: Determines day type, holiday exclusion, and salary calculation method [TSSD-2106]
- **Payroll configuration settings**: Determines salary component inclusion and calculation methods [TSSD-3487]
- **Accurate policy configuration for each leave type**: Determines specific deduction calculation method [TSSD-3213]
- **Salary configuration and leave policy settings**: Determines calculation method for unpaid leave deductions [TSSD-1798]
- **Requires manual pre-closure validation of all compensation entries**: Forces thorough review before payroll cycle finalization [TSSD-3880]
- **Leave policy configuration**: Determines divisor and calculation method for daily wage [TSSD-4731]
- **Accurate offboarding date and employment status tracking**: Determines prorated salary and EOS deduction calculations [TSSD-2597]
- **Accurate day counting mechanism**: Determines precision of leave salary calculations [TSSD-3402]
- **Public holiday calendar configuration**: Determines automatic exclusion in working days calculations [TSSD-3995]
- **Payroll transaction system**: Determines leave deduction calculation and processing [TSSD-4720]
- **Payroll system salary components**: Determines base for leave accrual calculation [TSSD-291]
- **Accurate daily wage and leave balance configuration**: Determines accuracy of leave accrual projection [TSSD-4543]
- **Accurate employee hire date recording**: Directly impacts leave balance calculation precision [TSSD-3822]
- **Leave policy configuration**: Determines accrual rates, carry-over limits, and calculation rules [TSSD-4243]
- **Job tenure tracking and policy type configuration**: Determines daily or monthly leave accrual calculation method [TSSD-3082]
- **Calendar leave settings**: Determines how public holidays are treated in leave and salary calculations [TSSD-2937]
- **Payroll configuration system**: Determines calculation method for daily wage computation [TSSD-3779]
- **Daily Wage Calculator configuration**: Determines method of calculating leave salary accrual [TSSD-3648]
- **Accurate monthly salary and leave policy configurations**: Determines precision of daily wage calculations [TSSD-2321]
- **Accurate monthly salary configuration**: Determines daily rate calculation accuracy [TSSD-3226]
- **Accurate monthly salary configuration**: Determines base calculation for leave salary [TSSD-3275]
- **Salary structure configuration**: Determines leave salary calculation approach [TSSD-4387]
- **Accurate employee policy mapping**: Determines which leave salary policy is applied [TSSD-2934]
- **Payroll system salary component definitions**: Determines leave payment calculation logic [TSSD-3654]
- **Payroll configuration system**: Enforces uniform proration calculation across all employees [TSSD-4375]
- **Payroll management system**: Determines annual allowance allocation strategy [TSSD-3146]
- **Accurate work week configuration**: Determines working days calculation logic [TSSD-4292]
- **DBX time zone configuration**: Influences scheduled job execution timing [OS-3034]
- **Accurate employee contract type configuration**: Determines gratuity calculation methodology [TSSD-375]
- **Daily attendance tracking system**: Prevents retroactive leave balance modifications [TSSD-3789]
- **Accurate daily wage breakdown configuration**: Determines precision of leave salary calculations [TSSD-4349]
- **Employee profile and offboarding date configuration**: Determines proration calculation accuracy [TSSD-3058]
- **Accurate employee join date and salary configuration**: Determines precise proration calculation [TSSD-3512]
- **Payroll cycle status and transaction submission**: Blocks automatic proration recalculation [TSSD-2518]
- **Accurate salary component configuration**: Requires complete salary configuration to enable accurate proration [TSSD-4303]
- **Manual data export functionality**: Enables workaround for lack of native filtering [TSSD-463]
- **User understanding of date modification behavior**: Directly impacts perceived reliability of time tracking system [TSSD-4409]
- **Salary components (Basic vs Gross pay)**: Determines basis for daily rate and deduction calculations [TSSD-3946]
- **Payroll cycle and leave allowance tracking system**: Restricts manual intervention in leave balance calculations [TSSD-2384]
- **Leave management system and payroll deduction module**: Synchronization failures lead to data inconsistency and manual intervention [TSSD-2532]
- **MOHRE reporting requirements**: Requires accurate leave day and deduction tracking [TSSD-3044]
- **Country-specific public holiday configurations**: Determines working days calculation and daily wage rate [TSSD-4464]
- **Unpaid leave policy configuration**: Determines daily wage calculation method and divisor [TSSD-4368]
- **Interaction between Payroll Configuration and Leave Policy settings**: Overwrite option can completely change calculation method [TSSD-4947]
- **Accurate employee profile and salary configuration**: Determines daily rate calculation precision [TSSD-1746]
- **Requires complete monthly salary and allowance data**: Calculation depends on accurate compensation information [TSSD-1227]
- **Daily attendance report**: Manual interaction required to generate absence workflows [TSSD-3438]
- **Accurate daily attendance record maintenance**: Workflow relies on correct 'absent' status recording [TSSD-3507]
- **Accurate calendar day detection**: Enables precise monthly salary division [TSSD-1301]
- **Global payroll configuration settings**: Determines precedence of salary calculation rules [TSSD-1753]
- **Monthly working days configuration**: Determines divisor for daily rate calculation, must exclude public holidays [TSSD-1807]


  ## Claims to Validate
  - **(system_behavior)** System allows only single proration method across entire organization (Confidence: high)
    - **Validation hint**: Attempt to configure different proration rules for multiple employee types
    - **Evidence**: [TSSD-4876]

  - **(workflow_step)** Proration configuration does not support category-specific calculation methods (Confidence: high)
    - **Validation hint**: Verify inability to set different proration rules for white-collar vs blue-collar employees
    - **Evidence**: [TSSD-4876]

  - **(calculation_rule)** System only calculates leave days after full month completion (Confidence: high)
    - **Validation hint**: Test leave encashment for employee leaving mid-month
    - **Evidence**: [TSSD-2499]

  - **(system_behavior)** Manual intervention required for pro-rated leave encashment (Confidence: high)
    - **Validation hint**: Verify manual addition process for partial month leave
    - **Evidence**: [TSSD-2499]

  - **(system_behavior)** Daily Rate Calculator does not support direct daily rate configuration for leave encashment (Confidence: high)
    - **Validation hint**: Attempt to configure daily rate within the calculator interface
    - **Evidence**: [OS-446]

  - **(workflow_step)** Payroll managers must use external methods to set leave encashment daily rates (Confidence: medium)
    - **Validation hint**: Verify alternative configuration pathways
    - **Evidence**: [OS-446]

  - **(system_behavior)** Current attendance module supports only list view representation (Confidence: high)
    - **Validation hint**: Verify attendance data can only be viewed in linear list format
    - **Evidence**: [TSSD-3774]

  - **(workflow_step)** Attendance calendar view would enable day-by-day presence/absence tracking (Confidence: medium)
    - **Validation hint**: Simulate calendar interface showing employee attendance status
    - **Evidence**: [TSSD-3774]

  - **(workflow_step)** Comments can be submitted from daily attendance records and custom reports (Confidence: medium)
    - **Validation hint**: Test comment submission across different report types
    - **Evidence**: [TSSD-1517]

  - **(system_behavior)** Notification requires explicit mention of employee or manager (Confidence: high)
    - **Validation hint**: Verify notification delivery with and without explicit mentions
    - **Evidence**: [TSSD-1517]

  - **(edge_case)** Mobile push notifications may fail inconsistently across regions (Confidence: high)
    - **Validation hint**: Test notification delivery on multiple regional accounts
    - **Evidence**: [TSSD-1517]

  - **(system_behavior)** Attendance status is calculated based on work timing configuration and timezone settings (Confidence: high)
    - **Validation hint**: Verify attendance marking under different timezone and work timing configurations
    - **Evidence**: [TSSD-713]

  - **(workflow_step)** Late arrival settings can override default attendance marking behavior (Confidence: medium)
    - **Validation hint**: Test attendance marking with late arrival enabled and disabled
    - **Evidence**: [TSSD-713]

  - **(system_behavior)** System calculates hours until official checkout or shift end (Confidence: high)
    - **Validation hint**: Verify hours calculation logic in different checkout scenarios
    - **Evidence**: [TSSD-1433]

  - **(edge_case)** Report displays extended hours for checkouts on subsequent days (Confidence: high)
    - **Validation hint**: Test checkout scenarios spanning multiple days
    - **Evidence**: [TSSD-1433]

  - **(workflow_step)** Overtime policy toggle does not prevent extra hours column display (Confidence: high)
    - **Validation hint**: Verify column visibility after overtime policy configuration
    - **Evidence**: [TSSD-1433]

  - **(system_behavior)** Attendance location status must be consistent across Time & Productivity and daily attendance reports (Confidence: high)
    - **Validation hint**: Compare location status for the same employee record in multiple reports
    - **Evidence**: [TSSD-1908]

  - **(workflow_step)** Edit status for attendance records should propagate uniformly across all reporting views (Confidence: high)
    - **Validation hint**: Verify edit status matches in T&P and daily attendance reports
    - **Evidence**: [TSSD-1908]

  - **(system_behavior)** Check-in button becomes unavailable after daily attendance cycle completion (Confidence: high)
    - **Validation hint**: Verify button disappears after successful check-in and check-out
    - **Evidence**: [TSSD-430]

  - **(workflow_step)** Only one check-in/check-out cycle permitted per day (Confidence: high)
    - **Validation hint**: Attempt multiple check-ins and confirm system prevents duplicate entries
    - **Evidence**: [TSSD-430]

  - **(system_behavior)** System requires manual 'Mark as Absent' action for employees with no check-in data (Confidence: high)
    - **Validation hint**: Verify manual marking process in attendance report interface
    - **Evidence**: [TSSD-2206]

  - **(workflow_step)** No automated or bulk absence marking available for organizations with large employee bases (Confidence: high)
    - **Validation hint**: Check for bulk action capabilities in attendance tracking module
    - **Evidence**: [TSSD-2206]

  - **(system_behavior)** Conditional leave policies always use daily accrual calculation (Confidence: high)
    - **Validation hint**: Verify accrual method cannot be changed for conditional policies
    - **Evidence**: [TSSD-1453]

  - **(workflow_step)** Leave policy type selection determines accrual frequency automatically (Confidence: high)
    - **Validation hint**: Check if accrual method changes when switching between conditional/non-conditional
    - **Evidence**: [TSSD-1453]

  - **(system_behavior)** Login process requires multiple attempts in certain browser environments (Confidence: high)
    - **Validation hint**: Verify login process across Chrome, Internet Explorer with cache cleared
    - **Evidence**: [TSSD-2266]

  - **(workflow_step)** Incognito/private browsing mode bypasses standard login complications (Confidence: high)
    - **Validation hint**: Test login in regular vs incognito browser modes
    - **Evidence**: [TSSD-2266]

  - **(system_behavior)** Leave status is not consistently applied across split shift rows (Confidence: high)
    - **Validation hint**: Test leave request for employee with multiple shift segments
    - **Evidence**: [OS-639]

  - **(workflow_step)** Daily attendance report fails to update status for all shift segments simultaneously (Confidence: medium)
    - **Validation hint**: Verify status changes in multi-segment shift scenarios
    - **Evidence**: [OS-639]

  - **(system_behavior)** Biometric attendance API logs cannot be deleted after initial creation (Confidence: high)
    - **Validation hint**: Attempt to delete API attendance logs and verify system response
    - **Evidence**: [TSSD-1134]

  - **(workflow_step)** Manager override is the only method to modify existing attendance records (Confidence: high)
    - **Validation hint**: Verify edit capabilities require manager-level permissions
    - **Evidence**: [TSSD-1134]

  - **(system_behavior)** Daily wage calculation method can be configured to use basic salary only or basic salary with allowances (Confidence: high)
    - **Validation hint**: Verify configuration options in EOS settings
    - **Evidence**: [TSSD-3939]

  - **(workflow_step)** Configuration changes in daily wage calculation do not immediately update the End of Service Eligibility section (Confidence: medium)
    - **Validation hint**: Check UI synchronization after changing settings
    - **Evidence**: [TSSD-3939]

  - **(system_behavior)** Approved leave requests can revert to pending status without clear user action (Confidence: high)
    - **Validation hint**: Submit multiple leave requests and track their status over time
    - **Evidence**: [TSSD-2056]

  - **(system_behavior)** System generates email notifications for leave requests without explicit user edits (Confidence: high)
    - **Validation hint**: Monitor email notifications during leave request workflow
    - **Evidence**: [TSSD-2056]

  - **(system_behavior)** API attendance integration does not capture office location during check-in/check-out (Confidence: high)
    - **Validation hint**: Verify office column is empty in custom reports for API-based attendance
    - **Evidence**: [TSSD-4151]

  - **(system_behavior)** Office location appears in daily attendance report but not in custom reports for API integration (Confidence: high)
    - **Validation hint**: Compare daily and custom attendance reports for API-integrated data
    - **Evidence**: [TSSD-4151]

  - **(calculation_rule)** For Conditional leave policies, system calculates accrual daily using (monthly allowance / 30) * days worked (Confidence: high)
    - **Validation hint**: Verify calculation matches ticket example of 2.5/30 * 5 days
    - **Evidence**: [TSSD-4203]

  - **(system_behavior)** Leave balance changes based on policy type (Conditional vs Non-Conditional) (Confidence: high)
    - **Validation hint**: Test accrual calculation with different policy configurations
    - **Evidence**: [TSSD-4203]

  - **(system_behavior)** Monthly automated emails are triggered on the first day of each month for document expiry notifications (Confidence: high)
    - **Validation hint**: Verify email trigger date and content
    - **Evidence**: [TSSD-1357]

  - **(system_behavior)** No configurable start date field exists for documents (Confidence: high)
    - **Validation hint**: Check document creation/upload form for start date input
    - **Evidence**: [TSSD-1357]

  - **(system_behavior)** Daily notification option is not available for document expiry (Confidence: high)
    - **Validation hint**: Attempt to configure daily notifications in system settings
    - **Evidence**: [TSSD-1357]

  - **(system_behavior)** System currently applies a single salary proration method across all employee groups (Confidence: high)
    - **Validation hint**: Verify proration configuration screens allow group-specific rules
    - **Evidence**: [TSSD-4882]

  - **(workflow_step)** Manual salary adjustments are required when default proration method does not match employee group needs (Confidence: high)
    - **Validation hint**: Test payroll processing with mixed employee type scenarios
    - **Evidence**: [TSSD-4882]

  - **(system_behavior)** Daily leave accrual is only possible with conditional leave policies (Confidence: high)
    - **Validation hint**: Verify system behavior when attempting daily accrual with standard vs. conditional policies
    - **Evidence**: [TSSD-4212]

  - **(workflow_step)** Migrating between work anniversary and calendar year cycles requires explicit configuration (Confidence: high)
    - **Validation hint**: Test leave balance calculation during cycle type transition
    - **Evidence**: [TSSD-4212]

  - **(system_behavior)** Daily quotes should render completely without truncation on mobile and desktop interfaces (Confidence: medium)
    - **Validation hint**: Test quote display across multiple device screen sizes and orientations
    - **Evidence**: [TSSD-872]

  - **(ui_rendering)** Newsfeed quotes maintain consistent formatting across different platforms (Confidence: low)
    - **Validation hint**: Compare quote display on mobile, tablet, and desktop browsers
    - **Evidence**: [TSSD-872]

  - **(calculation_rule)** Salary is calculated based on 26 working days per month standard (Confidence: high)
    - **Validation hint**: Verify calculation method matches 26-day standard
    - **Evidence**: [TSSD-4905]

  - **(system_behavior)** System cannot automatically adjust salary for extra or fewer working days (Confidence: high)
    - **Validation hint**: Test salary calculation with varying attendance
    - **Evidence**: [TSSD-4905]

  - **(navigation)** Administrators can navigate to Newsfeed system posts configuration via Admin Panel >> Company (Confidence: high)
    - **Validation hint**: Verify exact navigation path in admin interface
    - **Evidence**: [TSSD-120]

  - **(system_behavior)** Individual system post types can be disabled without affecting overall newsfeed functionality (Confidence: high)
    - **Validation hint**: Test disabling 'Daily word of wisdom' while confirming newsfeed remains active
    - **Evidence**: [TSSD-120]

  - **(system_behavior)** Payroll settings always override leave policy daily wage formulas (Confidence: high)
    - **Validation hint**: Compare daily wage calculations in payroll vs leave policy configurations
    - **Evidence**: [TSSD-2648]

  - **(navigation)** Greyed-out formulas indicate active override from payroll settings (Confidence: medium)
    - **Validation hint**: Check UI for greyed-out formulas and verify corresponding payroll configuration
    - **Evidence**: [TSSD-2648]

  - **(integration)** Attendance data from third-party APIs must be accurately transmitted across all days of the week (Confidence: medium)
    - **Validation hint**: Compare weekend vs. weekday attendance record transmission
    - **Evidence**: [TSSD-3419]

  - **(system_behavior)** System must handle time zone conversions without losing attendance record integrity (Confidence: medium)
    - **Validation hint**: Test Dubai time and IST time zone conversions for punch logs
    - **Evidence**: [TSSD-3419]

  - **(calculation_rule)** Daily wage is calculated by dividing total monthly salary by 30.41 (Confidence: high)
    - **Validation hint**: Verify calculation matches ticket example of (5250/30.41 = 172.64)
    - **Evidence**: [TSSD-1581]

  - **(system_behavior)** Unpaid leave deduction updates automatically when new salary configuration is created (Confidence: low)
    - **Validation hint**: Test leave request created before and after salary config change
    - **Evidence**: [TSSD-1581]

  - **(system_behavior)** For employees with split shifts, the system generates one attendance record per shift segment (Confidence: high)
    - **Validation hint**: Verify multiple attendance entries for an employee on the same day with different time ranges
    - **Evidence**: [TSSD-4230]

  - **(workflow_step)** The attendance page does not consolidate split shift records into a single daily entry (Confidence: medium)
    - **Validation hint**: Check if split shift records can be merged or viewed in a consolidated format
    - **Evidence**: [TSSD-4230]

  - **(calculation_rule)** Social security contribution is calculated for full month regardless of actual days worked (Confidence: high)
    - **Validation hint**: Verify contribution amount for mid-month employee departure
    - **Evidence**: [TSSD-2561]

  - **(system_behavior)** Employer contribution calculation does not affect employee net payout (Confidence: high)
    - **Validation hint**: Compare net payout with and without full month contribution
    - **Evidence**: [TSSD-2561]

  - **(calculation_rule)** System must dynamically recognize and use 366 days for leap years in service period calculations (Confidence: high)
    - **Validation hint**: Test gratuity calculation for employees with service spanning leap years
    - **Evidence**: [TSSD-4179]

  - **(calculation_rule)** Daily wage calculated by dividing monthly salary by 30 days (Confidence: high)
    - **Validation hint**: Verify daily rate calculation across different salary amounts
    - **Evidence**: [TSSD-4179]

  - **(calculation_rule)** Pro-rated salary calculation uses (basic + allowances) / 30 formula (Confidence: high)
    - **Validation hint**: Verify calculation across multiple salary structures
    - **Evidence**: [TSSD-2605]

  - **(system_behavior)** System consistently produces pro-rated amounts with minor decimal variations (Confidence: medium)
    - **Validation hint**: Test calculations for multiple departure dates and salary levels
    - **Evidence**: [TSSD-2605]

  - **(calculation_rule)** Daily salary is calculated as basic salary divided by 30 days (Confidence: high)
    - **Validation hint**: Verify calculation for multiple salary amounts
    - **Evidence**: [TSSD-1232]

  - **(system_behavior)** Partial years are converted using 365-day basis with full decimal precision (Confidence: high)
    - **Validation hint**: Test different service duration scenarios
    - **Evidence**: [TSSD-1232]

  - **(workflow_step)** Service duration uses 21 days per year multiplier for limited contracts (Confidence: high)
    - **Validation hint**: Compare calculations across different contract lengths
    - **Evidence**: [TSSD-1232]

  - **(calculation_rule)** Daily wage is calculated by dividing (basic salary + allowances) by actual working days in departure month (Confidence: high)
    - **Validation hint**: Compare system calculation with manual calculation for various employee scenarios
    - **Evidence**: [TSSD-3832]

  - **(system_behavior)** System does not exclude public holidays when counting working days (Confidence: high)
    - **Validation hint**: Test calculation in months with public holidays
    - **Evidence**: [TSSD-3832]

  - **(calculation_rule)** System calculates salary proration using full monthly salary divided by 30, including departure date (Confidence: high)
    - **Validation hint**: Verify salary calculation for mid-month departures
    - **Evidence**: [TSSD-4033]

  - **(system_behavior)** EOS calculation does not consider unpaid leave or partial salary payments (Confidence: high)
    - **Validation hint**: Test EOS settlement for employees with unpaid leave
    - **Evidence**: [TSSD-4033]

  - **(workflow_step)** Users must manually delete unpaid leave to enable EOS calculation (Confidence: medium)
    - **Validation hint**: Confirm system behavior when unpaid leave exists
    - **Evidence**: [TSSD-4033]

  - **(system_behavior)** Leave is only credited at month-end, not pro-rated for partial months (Confidence: high)
    - **Validation hint**: Verify leave balance for mid-month employee exit
    - **Evidence**: [TSSD-4042]

  - **(workflow_step)** Manual adjustment is required for leave balance during mid-month exits (Confidence: high)
    - **Validation hint**: Test leave balance calculation for employee leaving before month-end
    - **Evidence**: [TSSD-4042]

  - **(calculation_rule)** Gratuity calculation uses 21 days per year for first 5 years, 30 days per year thereafter (Confidence: high)
    - **Validation hint**: Verify calculation for employees with varying service durations
    - **Evidence**: [TSSD-4742]

  - **(system_behavior)** Monthly leave accrual only grants leave days at month-end (Confidence: high)
    - **Validation hint**: Test leave balance for mid-month departures
    - **Evidence**: [TSSD-4742]

  - **(edge_case)** Partial years are prorated using days divided by 365 (Confidence: high)
    - **Validation hint**: Calculate gratuity for non-complete service years
    - **Evidence**: [TSSD-4742]

  - **(system_behavior)** System blocks EOS submission when no actual pending leave requests exist (Confidence: high)
    - **Validation hint**: Attempt EOS submission for employee with zero pending leaves
    - **Evidence**: [TSSD-3908]

  - **(workflow_step)** Leave request validation occurs before EOS transaction processing (Confidence: high)
    - **Validation hint**: Verify validation sequence in EOS submission workflow
    - **Evidence**: [TSSD-3908]

  - **(calculation_rule)** Prorated salary calculation excludes weekends and public holidays (Confidence: high)
    - **Validation hint**: Verify calculation for mid-month employee scenarios
    - **Evidence**: [TSSD-4129]

  - **(system_behavior)** Salary is calculated as (Basic + Allowances) / Total Working Days * Included Working Days (Confidence: high)
    - **Validation hint**: Test calculation with sample employee data
    - **Evidence**: [TSSD-4129]

  - **(workflow_step)** Workweek and public holiday configurations are mandatory for accurate calculation (Confidence: medium)
    - **Validation hint**: Validate calculation fails without proper configuration
    - **Evidence**: [TSSD-4129]

  - **(system_behavior)** System automatically detects and labels check-ins as specific office location or 'out of office' (Confidence: high)
    - **Validation hint**: Verify location labeling across multiple check-in scenarios
    - **Evidence**: [TSSD-319]

  - **(workflow_step)** Current attendance reports do not support filtering by 'out of office' location type (Confidence: high)
    - **Validation hint**: Attempt to filter daily/custom reports by out-of-office entries
    - **Evidence**: [TSSD-319]

  - **(calculation_rule)** Daily rates for unpaid leave must be calculated using salary configuration effective during the specific leave period (Confidence: high)
    - **Validation hint**: Compare daily rate calculations across different historical salary configurations
    - **Evidence**: [OS-867]

  - **(system_behavior)** System cannot perform retrospective salary rate calculations for leave periods (Confidence: high)
    - **Validation hint**: Test leave compensation calculations with salary changes
    - **Evidence**: [OS-867]

  - **(calculation_rule)** System must correctly handle February 29th in leap year service duration calculations (Confidence: medium)
    - **Validation hint**: Compare manual and system calculations for leap year scenarios
    - **Evidence**: [TSSD-1625]

  - **(system_behavior)** Last working day must be consistently included or excluded in service duration (Confidence: medium)
    - **Validation hint**: Verify day counting logic across different termination scenarios
    - **Evidence**: [TSSD-1625]

  - **(calculation_rule)** Gratuity calculation uses daily rate multiplied by total service duration, with precise calendar day handling for partial years (Confidence: high)
    - **Validation hint**: Verify calculation matches ticket example of 216.67 × 2.90685 years
    - **Evidence**: [TSSD-4779]

  - **(system_behavior)** Gratuity amount display varies based on departure reason before system update (Confidence: high)
    - **Validation hint**: Check gratuity display for resignation vs termination scenarios
    - **Evidence**: [TSSD-4779]

  - **(calculation_rule)** Gratuity calculation uses basic salary/30 * 21 days * service years with potential minor algorithmic adjustments (Confidence: high)
    - **Validation hint**: Compare system calculation against manual computation for multiple scenarios
    - **Evidence**: [TSSD-3123]

  - **(system_behavior)** Calculation methodology varies slightly from manual interpretation of UAE labor law (Confidence: medium)
    - **Validation hint**: Document and explain computational differences transparently
    - **Evidence**: [TSSD-3123]

  - **(calculation_rule)** First 5 years of service calculated at 21 days per year (Confidence: high)
    - **Validation hint**: Verify calculation for employee with exactly 5 years service
    - **Evidence**: [TSSD-2252]

  - **(calculation_rule)** Years after 5 years calculated at 30 days per year (Confidence: high)
    - **Validation hint**: Verify calculation for employee with more than 5 years service
    - **Evidence**: [TSSD-2252]

  - **(system_behavior)** Dynamically select 365 or 366 day divisor based on leap year inclusion (Confidence: medium)
    - **Validation hint**: Test partial year calculations across leap year boundaries
    - **Evidence**: [TSSD-2252]

  - **(calculation_rule)** Gratuity calculation changes based on contract type and departure reason (Confidence: high)
    - **Validation hint**: Test calculations for different contract types and exit scenarios
    - **Evidence**: [TSSD-4796]

  - **(system_behavior)** Limited contract gratuity calculations require manual verification (Confidence: high)
    - **Validation hint**: Verify if system generates different amounts compared to manual calculation
    - **Evidence**: [TSSD-4796]

  - **(calculation_rule)** Leave balance is calculated by multiplying completed months by monthly accrual rate, plus daily accrual for partial months (Confidence: high)
    - **Validation hint**: Verify calculation matches support team's manual breakdown
    - **Evidence**: [TSSD-3139]

  - **(system_behavior)** Daily accrual rate is computed by dividing monthly accrual rate by total working days in a month (Confidence: high)
    - **Validation hint**: Check daily rate calculation against monthly rate
    - **Evidence**: [TSSD-3139]

  - **(system_behavior)** Changing payroll cycle is an irreversible action that prevents accessing previous months' data (Confidence: high)
    - **Validation hint**: Attempt to modify payroll cycle and verify historical data accessibility
    - **Evidence**: [TSSD-3879]

  - **(calculation_rule)** Salary proration automatically adjusts to match the configured payroll cycle length (Confidence: high)
    - **Validation hint**: Create new employee record and verify prorated salary calculation
    - **Evidence**: [TSSD-3879]

  - **(calculation_rule)** Daily rate for unpaid leave is calculated using (Basic Salary + Allowances) / Working Days at time of leave approval (Confidence: high)
    - **Validation hint**: Verify calculation remains constant after leave approval
    - **Evidence**: [TSSD-2212]

  - **(system_behavior)** Leave deduction amount is locked and cannot be retroactively modified after payroll processing (Confidence: high)
    - **Validation hint**: Test scenario of holiday calendar changes post-leave approval
    - **Evidence**: [TSSD-2212]

  - **(calculation_rule)** Daily wage is always calculated as Basic Salary / 30 (Confidence: high)
    - **Validation hint**: Verify calculation across different salary amounts
    - **Evidence**: [TSSD-2043]

  - **(system_behavior)** Daily wage divisor cannot be modified via configuration (Confidence: high)
    - **Validation hint**: Attempt to change daily wage calculation method in settings
    - **Evidence**: [TSSD-2043]

  - **(edge_case)** System rounds service duration to nearest whole day (Confidence: medium)
    - **Validation hint**: Test edge cases with partial days in employment
    - **Evidence**: [TSSD-2043]

  - **(calculation_rule)** GOSI deductions for mid-month joiners should be calculated proportionally based on actual working days (Confidence: high)
    - **Validation hint**: Compare exported template against manual calculation for partial month employees
    - **Evidence**: [TSSD-3249]

  - **(system_behavior)** Payroll template export must display accurate, prorated deduction amounts for employees with non-standard joining dates (Confidence: medium)
    - **Validation hint**: Test export for employees joining on different dates within a month
    - **Evidence**: [TSSD-3249]

  - **(calculation_rule)** System calculates leave balance using monthly proration by default (Confidence: high)
    - **Validation hint**: Verify leave balance calculation for mid-month departure
    - **Evidence**: [TSSD-4813]

  - **(system_behavior)** Conditional leave policy can force daily proration for all employees (Confidence: medium)
    - **Validation hint**: Test leave balance with conditional policy enabled
    - **Evidence**: [TSSD-4813]

  - **(calculation_rule)** Leave salary calculation uses different methods for 'Custom Days' and 'Calendar Days' (Confidence: high)
    - **Validation hint**: Compare salary calculations with different day type settings
    - **Evidence**: [TSSD-2106]

  - **(system_behavior)** Public holiday exclusion flag changes day count in leave duration (Confidence: high)
    - **Validation hint**: Test leave duration with and without public holiday exclusion
    - **Evidence**: [TSSD-2106]

  - **(calculation_rule)** Daily wage is calculated using basic salary by default (Confidence: high)
    - **Validation hint**: Verify daily wage calculation method in leave accrual report
    - **Evidence**: [TSSD-3487]

  - **(system_behavior)** Social security components appear without proper country-specific configuration (Confidence: high)
    - **Validation hint**: Check report for unexpected social security line items
    - **Evidence**: [TSSD-3487]

  - **(calculation_rule)** Different leave types use distinct daily rate calculation formulas (Confidence: high)
    - **Validation hint**: Verify calculation methods for unpaid leave vs sick leave unpaid
    - **Evidence**: [TSSD-3213]

  - **(system_behavior)** Working days calculation excludes weekends (Saturdays and Sundays) (Confidence: high)
    - **Validation hint**: Check monthly working days computation
    - **Evidence**: [TSSD-3213]

  - **(calculation_rule)** Daily rate for unpaid leave is calculated using either basic/working days or basic+allowances/calendar days (Confidence: high)
    - **Validation hint**: Verify calculation methods in payroll configuration
    - **Evidence**: [TSSD-1798]

  - **(system_behavior)** System should preserve original daily rate calculation method at time of leave (Confidence: medium)
    - **Validation hint**: Check if historical calculations remain consistent after configuration changes
    - **Evidence**: [TSSD-1798]

  - **(system_behavior)** Payroll cycle becomes completely locked and unmodifiable after closure (Confidence: high)
    - **Validation hint**: Attempt to modify a closed payroll cycle through various interfaces
    - **Evidence**: [TSSD-3880]

  - **(system_behavior)** No backend mechanism exists to correct variable pay entries in a closed cycle (Confidence: high)
    - **Validation hint**: Verify inability to modify variable pay through admin/backend interfaces
    - **Evidence**: [TSSD-3880]

  - **(calculation_rule)** Daily wage is calculated using a fixed divisor defined in leave policy configuration (Confidence: high)
    - **Validation hint**: Verify calculation across different month lengths and leave periods
    - **Evidence**: [TSSD-4731]

  - **(system_behavior)** System does not dynamically adjust divisor based on actual calendar days in month (Confidence: high)
    - **Validation hint**: Test salary calculation for months with 28, 30, and 31 days
    - **Evidence**: [TSSD-4731]

  - **(system_behavior)** System automatically generates full EOS deduction and recalculates proportionally based on working days (Confidence: high)
    - **Validation hint**: Verify deduction calculation for employees with partial month employment
    - **Evidence**: [TSSD-2597]

  - **(calculation_rule)** Salary arrears are automatically calculated based on offboarding and rehiring dates (Confidence: medium)
    - **Validation hint**: Test arrears calculation for employees with consecutive month employment changes
    - **Evidence**: [TSSD-2597]

  - **(calculation_rule)** System must respect user-configured day type (working vs calendar) in leave salary accrual formula (Confidence: high)
    - **Validation hint**: Test report generation with different day type configurations
    - **Evidence**: [TSSD-3402]

  - **(system_behavior)** Leave salary accrual report calculation engine defaults to calendar days (Confidence: high)
    - **Validation hint**: Verify calculation method when no explicit day type is specified
    - **Evidence**: [TSSD-3402]

  - **(calculation_rule)** System calculates salary based on working days, automatically excluding public holidays (Confidence: high)
    - **Validation hint**: Test salary calculation for departures near public holidays
    - **Evidence**: [TSSD-3995]

  - **(system_behavior)** Departure date proximity to public holidays does not change salary calculation (Confidence: high)
    - **Validation hint**: Verify salary remains consistent with different departure dates
    - **Evidence**: [TSSD-3995]

  - **(system_behavior)** Leave requests with dates after offboarding date are automatically deleted (Confidence: high)
    - **Validation hint**: Create a leave request for an offboarded employee with future dates
    - **Evidence**: [TSSD-4720]

  - **(calculation_rule)** Unpaid leave deductions are calculated based on daily rates and total leave days (Confidence: medium)
    - **Validation hint**: Verify deduction amount matches leave request duration
    - **Evidence**: [TSSD-4720]

  - **(calculation_rule)** Leave accrual balance uses full salary before GOSI deduction (Confidence: medium)
    - **Validation hint**: Verify salary base in calculation matches gross salary
    - **Evidence**: [TSSD-291]

  - **(calculation_rule)** Daily leave rate calculates using working days, not calendar days (Confidence: medium)
    - **Validation hint**: Confirm day calculation excludes non-working days
    - **Evidence**: [TSSD-291]

  - **(system_behavior)** Leave accrual report shows a virtual projection calculated as Leave Availed * Daily Wage (Confidence: high)
    - **Validation hint**: Verify calculation matches ticket description
    - **Evidence**: [TSSD-4543]

  - **(workflow_step)** One month leave salary request always equals full monthly salary (Confidence: high)
    - **Validation hint**: Test leave salary request for single month scenario
    - **Evidence**: [TSSD-4543]

  - **(ux_issue)** Report lacks clear explanation of its virtual projection methodology (Confidence: high)
    - **Validation hint**: Review report UI for calculation method description
    - **Evidence**: [TSSD-4543]

  - **(calculation_rule)** Leave balance is calculated daily based on conditional allowance rules (Confidence: high)
    - **Validation hint**: Verify balance calculations for employees with various hire dates
    - **Evidence**: [TSSD-3822]

  - **(edge_case)** Employees hired on February 29th may experience a 1-day leave balance discrepancy in the first cycle (Confidence: medium)
    - **Validation hint**: Test balance calculation for leap year hire dates
    - **Evidence**: [TSSD-3822]

  - **(calculation_rule)** System calculates leave balance across multiple cycles with daily precision (Confidence: high)
    - **Validation hint**: Verify fractional day calculations match support explanation
    - **Evidence**: [TSSD-4243]

  - **(system_behavior)** Maximum 25 days can be carried forward between leave cycles (Confidence: high)
    - **Validation hint**: Test carry-over limit enforcement
    - **Evidence**: [TSSD-4243]

  - **(system_behavior)** Job tenure toggle controls whether leave accrual is calculated on daily or monthly basis (Confidence: high)
    - **Validation hint**: Verify toggle state changes accrual calculation method
    - **Evidence**: [TSSD-3082]

  - **(calculation_rule)** Conditional leave policies default to daily accrual, non-conditional policies default to monthly accrual (Confidence: high)
    - **Validation hint**: Test accrual calculation for different policy types
    - **Evidence**: [TSSD-3082]

  - **(calculation_rule)** System must count public holidays as paid working days during leave salary calculation (Confidence: high)
    - **Validation hint**: Verify prorated salary includes public holidays in working days total
    - **Evidence**: [TSSD-2937]

  - **(system_behavior)** Leave requests spanning public holidays should maintain accurate working days count (Confidence: high)
    - **Validation hint**: Check that total working days match calendar days minus excluded days
    - **Evidence**: [TSSD-2937]

  - **(system_behavior)** Daily wage calculation method can be configured to use either working days or custom 30-day formula (Confidence: high)
    - **Validation hint**: Verify configuration options in payroll settings
    - **Evidence**: [TSSD-3779]

  - **(calculation_rule)** Leave salary accrual report must use the configured daily wage calculation method (Confidence: medium)
    - **Validation hint**: Generate report and compare against configuration settings
    - **Evidence**: [TSSD-3779]

  - **(edge_case)** System might default to working days calculation if custom method configuration fails (Confidence: low)
    - **Validation hint**: Test various configuration scenarios and verify report output
    - **Evidence**: [TSSD-3779]

  - **(calculation_rule)** Daily wage for leave salary accrual changes based on monthly working days (Confidence: high)
    - **Validation hint**: Compare leave salary reports for months with different working day counts
    - **Evidence**: [TSSD-3648]

  - **(system_behavior)** Users can switch between 'working days' and 'custom days' calculation methods (Confidence: high)
    - **Validation hint**: Verify configuration options in Daily Wage Calculator
    - **Evidence**: [TSSD-3648]

  - **(calculation_rule)** Leave salary and salary proration use separate daily wage divisors (Confidence: high)
    - **Validation hint**: Compare calculations using 30 and 30.42 day divisors
    - **Evidence**: [TSSD-2321]

  - **(system_behavior)** Daily wage calculator supports independent configuration for leave and proration calculations (Confidence: high)
    - **Validation hint**: Verify ability to set different divisors for leave and proration
    - **Evidence**: [TSSD-2321]

  - **(calculation_rule)** Daily rate is calculated by dividing monthly salary by 30 (Confidence: high)
    - **Validation hint**: Verify daily rate computation matches 'monthly salary / 30'
    - **Evidence**: [TSSD-3226]

  - **(system_behavior)** Leave salary calculation must use exact number of approved leave days (Confidence: high)
    - **Validation hint**: Compare system-calculated days against approved leave request days
    - **Evidence**: [TSSD-3226]

  - **(workflow_step)** Incorrect leave salary calculations require manual request deletion and resubmission (Confidence: medium)
    - **Validation hint**: Verify workflow allows complete request deletion and fresh submission
    - **Evidence**: [TSSD-3226]

  - **(calculation_rule)** Leave salary is calculated by dividing monthly salary by 30.41 and multiplying by actual leave days (Confidence: high)
    - **Validation hint**: Verify calculation matches ticket example of 8200/30.41 * 32
    - **Evidence**: [TSSD-3275]

  - **(system_behavior)** For multi-month leave, system computes total leave salary, then deducts current month's portion from active payroll (Confidence: high)
    - **Validation hint**: Check calculation for leave spanning two months
    - **Evidence**: [TSSD-3275]

  - **(calculation_rule)** Allowances excluded from leave salary formula should be prorated based on leave days (Confidence: high)
    - **Validation hint**: Verify calculation of allowances during partial month leave
    - **Evidence**: [TSSD-4387]

  - **(system_behavior)** System must provide configurable options for handling salary components during leave (Confidence: medium)
    - **Validation hint**: Check configuration interfaces for component-level leave behavior control
    - **Evidence**: [TSSD-4387]

  - **(system_behavior)** Only one leave salary policy can be active for a specific employee group to prevent calculation conflicts (Confidence: high)
    - **Validation hint**: Attempt to activate multiple policies and verify calculation behavior
    - **Evidence**: [TSSD-2934]

  - **(calculation_rule)** Daily rate calculations must update immediately when policy changes are made (Confidence: medium)
    - **Validation hint**: Modify policy settings and confirm immediate calculation updates
    - **Evidence**: [TSSD-2934]

  - **(system_behavior)** Leave policies cannot exclude specific salary components during payment calculation (Confidence: high)
    - **Validation hint**: Attempt to configure a leave policy paying only basic salary
    - **Evidence**: [TSSD-3654]

  - **(calculation_rule)** Partial leave payment uses total salary percentage instead of component-specific rules (Confidence: high)
    - **Validation hint**: Compare leave deduction calculations across different salary structures
    - **Evidence**: [TSSD-3654]

  - **(system_behavior)** System allows only one global proration formula for all employees (Confidence: high)
    - **Validation hint**: Attempt to set different formulas for employee groups
    - **Evidence**: [TSSD-4375]

  - **(calculation_rule)** Proration formula applies Basic + Allowance divided by fixed period (Confidence: high)
    - **Validation hint**: Review salary calculation logic in configuration
    - **Evidence**: [TSSD-4375]

  - **(system_behavior)** Air ticket allowances are added in bulk at renewal cycle end (Confidence: high)
    - **Validation hint**: Verify allocation timing and method in system configuration
    - **Evidence**: [TSSD-3146]

  - **(workflow_step)** No daily pro-ration of air ticket allowances is currently supported (Confidence: high)
    - **Validation hint**: Check if system allows incremental air ticket allowance accrual
    - **Evidence**: [TSSD-3146]

  - **(system_behavior)** Salary proration calculates based on configured work week, not standard calendar days (Confidence: high)
    - **Validation hint**: Verify proration calculation with various work week configurations
    - **Evidence**: [TSSD-4292]

  - **(calculation_rule)** All days marked as working in work week configuration are considered for salary proration (Confidence: high)
    - **Validation hint**: Test proration with 7-day work week configuration
    - **Evidence**: [TSSD-4292]

  - **(system_behavior)** GOSI percentage retrieval occurs daily at 5 AM DBX time with potential ±6 minute variation (Confidence: medium)
    - **Validation hint**: Check multiple days' timestamps for retrieval consistency
    - **Evidence**: [OS-3034]

  - **(workflow_step)** Reporting interface displays last retrieval timestamp for GOSI percentages (Confidence: high)
    - **Validation hint**: Verify timestamp display accuracy and timezone representation
    - **Evidence**: [OS-3034]

  - **(calculation_rule)** System applies different gratuity calculation rules for limited and unlimited contracts (Confidence: high)
    - **Validation hint**: Verify calculation logic for 0-5 years and 5+ years of service
    - **Evidence**: [TSSD-375]

  - **(system_behavior)** Gratuity calculation requires precise configuration of contract type, basic salary, and service period (Confidence: high)
    - **Validation hint**: Test calculation with varied employee profiles
    - **Evidence**: [TSSD-375]

  - **(system_behavior)** Leave balance cannot be manually adjusted when daily attendance records exist (Confidence: high)
    - **Validation hint**: Attempt to reduce leave balance with active attendance records
    - **Evidence**: [TSSD-3789]

  - **(workflow_step)** Leave balance corrections require backend database intervention (Confidence: high)
    - **Validation hint**: Verify no direct UI method for balance adjustment exists
    - **Evidence**: [TSSD-3789]

  - **(system_behavior)** Leave salary is calculated first using daily rates before deducting from active salary cycle (Confidence: high)
    - **Validation hint**: Verify calculation sequence in payroll settings
    - **Evidence**: [TSSD-4349]

  - **(configuration_rule)** Users can select between calendar days and custom days for leave salary calculation (Confidence: high)
    - **Validation hint**: Check available options in leave salary policy settings
    - **Evidence**: [TSSD-4349]

  - **(calculation_rule)** Salary proration calculates daily rate by dividing monthly fixed income by 30 days (Confidence: high)
    - **Validation hint**: Verify calculation matches ticket example: 21,000 / 30 = 700 daily rate
    - **Evidence**: [TSSD-3058]

  - **(system_behavior)** Proration logic differs for departure dates in past versus future (Confidence: high)
    - **Validation hint**: Test proration scenarios with departure dates before and after payroll processing date
    - **Evidence**: [TSSD-3058]

  - **(calculation_rule)** Daily rate is calculated by dividing total compensation by a custom divisor (e.g., 30 days) (Confidence: high)
    - **Validation hint**: Verify daily rate calculation matches configured divisor
    - **Evidence**: [TSSD-3512]

  - **(calculation_rule)** Actual prorated salary is calculated by multiplying daily rate by actual calendar days worked (Confidence: high)
    - **Validation hint**: Count and validate days between start and end dates
    - **Evidence**: [TSSD-3512]

  - **(system_behavior)** Proration calculation locks at the moment of employee offboarding (Confidence: high)
    - **Validation hint**: Change daily rate configuration after offboarding and verify calculation remains unchanged
    - **Evidence**: [TSSD-2518]

  - **(workflow_step)** Rehiring and re-offboarding an employee triggers proration recalculation (Confidence: high)
    - **Validation hint**: Perform rehire and re-offboarding to confirm proration updates
    - **Evidence**: [TSSD-2518]

  - **(calculation_rule)** Daily wage is calculated by dividing total monthly salary by total working days in the month (Confidence: high)
    - **Validation hint**: Verify calculation matches ticket example of (5300 + 700 + 500) / 23
    - **Evidence**: [TSSD-4303]

  - **(system_behavior)** Weekend days are automatically excluded from working day calculations (Confidence: high)
    - **Validation hint**: Confirm system detects and removes Saturday/Sunday from working day count
    - **Evidence**: [TSSD-4303]

  - **(workflow_step)** Prorated salary equals daily wage multiplied by actual working days completed (Confidence: high)
    - **Validation hint**: Check mid-month termination calculation matches ticket example of 282.6 * 14
    - **Evidence**: [TSSD-4303]

  - **(system_behavior)** Filtering in Time and Pay Adjustments is limited to Approved section only (Confidence: high)
    - **Validation hint**: Verify filtering options in Processed section of Time and Pay Adjustments
    - **Evidence**: [TSSD-463]

  - **(workflow_step)** Users must download data and manually filter to separate Time Off and Payroll processed entries (Confidence: high)
    - **Validation hint**: Attempt to filter processed entries directly in UI and confirm manual export requirement
    - **Evidence**: [TSSD-463]

  - **(system_behavior)** System tracks individual activity times but does not automatically calculate total daily hours (Confidence: high)
    - **Validation hint**: Verify total hours are not automatically displayed in timesheet view
    - **Evidence**: [TSSD-696]

  - **(workflow_step)** Users must manually sum activity times to determine total daily hours worked (Confidence: high)
    - **Validation hint**: Confirm no automatic calculation exists in current UI
    - **Evidence**: [TSSD-696]

  - **(system_behavior)** Changing a task's date will move the entire entry to the new date without preserving original date context (Confidence: high)
    - **Validation hint**: Modify task date and verify entry's new location in timesheet
    - **Evidence**: [TSSD-4409]

  - **(workflow_step)** Task entries can become temporarily or permanently invisible when date is modified (Confidence: medium)
    - **Validation hint**: Track a task through multiple date changes and confirm visibility
    - **Evidence**: [TSSD-4409]

  - **(system_behavior)** System automatically generates leave deductions that cannot be directly edited (Confidence: high)
    - **Validation hint**: Attempt to modify an auto-generated leave deduction
    - **Evidence**: [TSSD-3946]

  - **(calculation_rule)** Daily rate can be calculated based on Basic or Gross salary (Confidence: medium)
    - **Validation hint**: Verify configuration options for salary basis in calculation
    - **Evidence**: [TSSD-3946]

  - **(system_behavior)** System cannot manually adjust used days for unpaid leave requests (Confidence: high)
    - **Validation hint**: Attempt to modify used days in an unpaid leave request
    - **Evidence**: [TSSD-2384]

  - **(workflow_step)** Multi-month unpaid leave requests cause cumulative salary deductions (Confidence: high)
    - **Validation hint**: Submit unpaid leave request spanning multiple payroll months
    - **Evidence**: [TSSD-2384]

  - **(system_behavior)** Deleting a leave request does not automatically remove corresponding payroll deductions (Confidence: high)
    - **Validation hint**: Attempt to delete leave request and verify payroll deduction persistence
    - **Evidence**: [TSSD-2532]

  - **(calculation_rule)** Changing daily wage calculation creates duplicate deduction entries instead of replacing existing entries (Confidence: high)
    - **Validation hint**: Modify daily wage mid-transaction and check for duplicate deductions
    - **Evidence**: [TSSD-2532]

  - **(calculation_rule)** Unpaid leave day count must match total deduction amount across multiple months (Confidence: high)
    - **Validation hint**: Verify payslip shows correct total days when leave spans multiple months
    - **Evidence**: [TSSD-3044]

  - **(system_behavior)** Payslip must aggregate leave days from previous months during current payroll cycle (Confidence: medium)
    - **Validation hint**: Check if retrospective leaves are fully represented
    - **Evidence**: [TSSD-3044]

  - **(calculation_rule)** Daily wage is calculated by dividing monthly salary by total working days, excluding weekends and public holidays (Confidence: high)
    - **Validation hint**: Verify calculation for different employee scenarios
    - **Evidence**: [TSSD-4464]

  - **(system_behavior)** System cannot recalculate salary deduction retroactively after initial processing (Confidence: high)
    - **Validation hint**: Attempt to modify past payroll calculations
    - **Evidence**: [TSSD-4464]

  - **(calculation_rule)** Daily wage is calculated by dividing monthly salary by 30.42, not calendar days (Confidence: high)
    - **Validation hint**: Verify calculation matches ticket example of 4300/30.42 = 141.35
    - **Evidence**: [TSSD-4368]

  - **(system_behavior)** Unpaid leave deductions can exceed monthly salary amount (Confidence: medium)
    - **Validation hint**: Test deduction calculation for full month absence
    - **Evidence**: [TSSD-4368]

  - **(system_behavior)** Payroll Configuration 'Overwrite' option always takes precedence over Leave Policy calculation settings (Confidence: high)
    - **Validation hint**: Verify calculation method matches Payroll Configuration when Overwrite is enabled
    - **Evidence**: [TSSD-4947]

  - **(workflow_step)** Users cannot modify Leave Policy calculation method when Overwrite option is enabled (Confidence: high)
    - **Validation hint**: Attempt to change calculation in Leave Policy with Overwrite active
    - **Evidence**: [TSSD-4947]

  - **(ux_issue)** Leave Policy UI does not synchronize or clearly indicate when Payroll Configuration overrides are active (Confidence: high)
    - **Validation hint**: Check for visual indicators of configuration override in Leave Policy interface
    - **Evidence**: [TSSD-4947]

  - **(system_behavior)** Leave policies can have different daily rate calculation formulas (Confidence: high)
    - **Validation hint**: Verify multiple policy configurations with distinct calculation methods
    - **Evidence**: [TSSD-1746]

  - **(workflow_step)** System applies policy-specific calculation without explicit user confirmation (Confidence: high)
    - **Validation hint**: Test leave request processing across different policy types
    - **Evidence**: [TSSD-1746]

  - **(edge_case)** No warning is provided when selecting between similar leave policies (Confidence: high)
    - **Validation hint**: Attempt to select between policies with similar names and different calculations
    - **Evidence**: [TSSD-1746]

  - **(calculation_rule)** Daily wage is calculated by dividing total compensation by actual calendar days in the month (Confidence: high)
    - **Validation hint**: Verify calculation across different months with varying day counts
    - **Evidence**: [TSSD-1227]

  - **(system_behavior)** System does not support custom divisor configurations for daily wage calculation (Confidence: high)
    - **Validation hint**: Attempt to modify divisor in report settings
    - **Evidence**: [TSSD-1227]

  - **(system_behavior)** Attendance workflow only triggers when 'mark as absent' button is manually clicked (Confidence: high)
    - **Validation hint**: Verify workflow behavior with system-default and manually marked absences
    - **Evidence**: [TSSD-3438]

  - **(workflow_step)** HR managers do not receive automatic notifications for system-default absent records (Confidence: high)
    - **Validation hint**: Test workflow with various absence scenarios
    - **Evidence**: [TSSD-3438]

  - **(system_behavior)** Workflow triggers at configured daily time to check previous day's attendance records (Confidence: medium)
    - **Validation hint**: Verify event triggers at specified time with sample attendance data
    - **Evidence**: [TSSD-3507]

  - **(configuration)** Users can configure specific trigger time for absence notification workflow (Confidence: high)
    - **Validation hint**: Test workflow configuration interface for time selection
    - **Evidence**: [TSSD-3507]

  - **(calculation_rule)** Daily wage rate is calculated by dividing monthly salary by actual calendar days in the month (Confidence: high)
    - **Validation hint**: Verify calculation for February in leap year shows 29 days, not 31
    - **Evidence**: [TSSD-1301]

  - **(system_behavior)** Unpaid leave deduction uses precise daily rate multiplied by number of unpaid days (Confidence: high)
    - **Validation hint**: Check deduction amount matches calculated daily rate
    - **Evidence**: [TSSD-1301]

  - **(calculation_rule)** Daily wage is calculated by dividing salary component by total working days (Confidence: high)
    - **Validation hint**: Verify calculation using different salary components and work schedules
    - **Evidence**: [TSSD-1753]

  - **(system_behavior)** Global configuration always overrides policy-specific leave calculation settings (Confidence: high)
    - **Validation hint**: Test different policy configurations against global settings
    - **Evidence**: [TSSD-1753]

  - **(calculation_rule)** Daily rate is calculated as (Basic Salary + Allowances) / Working Days, excluding public holidays (Confidence: high)
    - **Validation hint**: Verify calculation matches ticket example of 4000/17 = 235.294
    - **Evidence**: [TSSD-1807]

  - **(system_behavior)** Daily rate display should match the leave occurrence month, not the payroll processing month (Confidence: medium)
    - **Validation hint**: Compare displayed daily rate with month of leave request
    - **Evidence**: [TSSD-1807]

  

  ## Reference Tickets Summary
  **Total unique tickets**: 103
  **Ticket keys**: TSSD-4876, TSSD-2499, OS-446, TSSD-3774, TSSD-1517, TSSD-713, TSSD-1433, TSSD-1908, TSSD-430, TSSD-2206, TSSD-1453, TSSD-2266, OS-639, TSSD-1134, TSSD-3939, TSSD-2056, TSSD-4151, TSSD-4203, TSSD-1357, TSSD-4882, TSSD-4212, TSSD-872, TSSD-4905, TSSD-120, TSSD-2648, TSSD-3419, TSSD-1581, TSSD-4230, TSSD-2561, TSSD-4179, TSSD-2605, TSSD-1232, TSSD-3832, TSSD-4033, TSSD-4042, TSSD-4742, TSSD-3908, TSSD-4129, TSSD-319, OS-867, TSSD-1625, TSSD-4779, TSSD-3123, TSSD-2252, TSSD-4796, TSSD-3139, TSSD-3879, TSSD-2212, TSSD-2043, TSSD-3249, TSSD-4813, TSSD-2106, TSSD-3487, TSSD-3213, TSSD-1798, TSSD-3880, TSSD-4731, TSSD-2597, TSSD-3402, TSSD-3995, TSSD-4720, TSSD-291, TSSD-4543, TSSD-3822, TSSD-4243, TSSD-3082, TSSD-2937, TSSD-3779, TSSD-3648, TSSD-2321, TSSD-3226, TSSD-3275, TSSD-4387, TSSD-2934, TSSD-3654, TSSD-4375, TSSD-3146, TSSD-4292, OS-3034, TSSD-375, TSSD-3789, TSSD-4349, TSSD-3058, TSSD-3512, TSSD-2518, TSSD-4303, TSSD-463, TSSD-696, TSSD-4409, TSSD-3946, TSSD-2384, TSSD-2532, TSSD-3044, TSSD-4464, TSSD-4368, TSSD-4947, TSSD-1746, TSSD-1227, TSSD-3438, TSSD-3507, TSSD-1301, TSSD-1753, TSSD-1807

  ## Analysis Metadata
  - **Source**: jira
  - **Analysis date**: 2025-12-16
  - **Project distribution**: {"tssd":75,"os":4,"TSSD":24}
  