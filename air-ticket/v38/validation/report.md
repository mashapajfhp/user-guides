# Validation Report: Air Ticket

**Status**: failed
**Execution Mode**: Chunked (1 chunks)
**Generated**: 2026-01-11T00:46:24Z

## Summary

| Metric | Count |
|--------|-------|
| Passed | 0 |
| Failed | 0 |
| Skipped | 4 |
| Total | 4 |

## Test Results

### FE: Show remaining air tickets when balance is on hold due to booking request
- **Status**: skipped
- **Assertions**: 0/0
- **Notes**: Test requires: 1) Login to app.bayzat.com, 2) Navigate to Employee Benefits > Air Tickets, 3) Verify balance display with pending booking. Cannot execute without browser automation.

### FE: Unclear indication of available air ticket requests
- **Status**: skipped
- **Assertions**: 0/0
- **Notes**: Test requires: 1) Login to app.bayzat.com, 2) Navigate to Employee Benefits > Air Tickets, 3) Verify request counter text clarity. Cannot execute without browser automation.

### Client is unable to remove Processed Air tickets
- **Status**: skipped
- **Assertions**: 0/0
- **Notes**: Test requires: 1) Login, 2) Navigate to Work Expenses > Air Tickets, 3) Validate processed ticket deletion after payroll transaction rejection. Cannot execute without browser automation.

### Need to remove processed (Encashment) Air tickets with Payroll reopen
- **Status**: skipped
- **Assertions**: 0/0
- **Notes**: Test requires: 1) Login, 2) Navigate to Payroll Management > Air Ticket Encashment, 3) Validate cross-period encashment transfer workflow. Cannot execute without browser automation.

