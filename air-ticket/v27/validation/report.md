# Validation Report: Air Ticket

**Status**: failed
**Execution Mode**: Chunked (1 chunks)
**Generated**: 2026-01-08T13:52:56Z

## Summary

| Metric | Count |
|--------|-------|
| Passed | 0 |
| Failed | 0 |
| Skipped | 4 |
| Total | 4 |

## Test Results

### Client is unable to remove Processed Air tickets
- **Status**: skipped
- **Assertions**: 0/0
- **Notes**: Skipped due to missing Playwright MCP integration. Test requires: (1) Navigate to Settings > Workflows, (2) Create Air Tickets Auto Encashment workflow, (3) Process air ticket in payroll, (4) Reopen payroll month, (5) Reject payroll transaction, (6) Verify deletion options become available

### FE: Show remaining air tickets when balance is on hold due to booking request
- **Status**: skipped
- **Assertions**: 0/0
- **Notes**: Skipped due to missing Playwright MCP integration. Test requires: (1) Create air ticket allowance policy, (2) Navigate to employee dashboard, (3) Initiate booking request, (4) Verify remaining balance visibility during pending booking, (5) Verify balance updates after completion

### FE: Unclear indication of available air ticket requests
- **Status**: skipped
- **Assertions**: 0/0
- **Notes**: Skipped due to missing Playwright MCP integration. Test requires: (1) Create air ticket policy with request limits, (2) Submit requests to reach limit (0/1 scenario), (3) Verify display clarity of request counter, (4) Test various request count scenarios (1/5, 3/10)

### Need to remove processed (Encashment) Air tickets with Payroll reopen
- **Status**: skipped
- **Assertions**: 0/0
- **Notes**: Skipped due to missing Playwright MCP integration. Test requires: (1) Create air ticket encashment workflow, (2) Process encashment in December payroll, (3) Reopen December payroll, (4) Delete encashment transaction, (5) Move request to pending, (6) Reassign to January payroll

