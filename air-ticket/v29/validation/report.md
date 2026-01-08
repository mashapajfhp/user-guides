# Validation Report: Air Ticket

**Status**: failed
**Execution Mode**: Chunked (1 chunks)
**Generated**: 2026-01-08T22:40:34Z

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
- **Notes**: Test requires: (1) Reopen closed payroll month, (2) Reject payroll transaction, (3) Verify air ticket deletion workflow. Cannot proceed without Playwright MCP.

### FE: Show remaining air tickets when balance is on hold due to booking request
- **Status**: skipped
- **Assertions**: 0/0
- **Notes**: Test requires: (1) Create air ticket booking request, (2) Verify remaining balance visibility, (3) Verify balance during pending status. Cannot proceed without Playwright MCP.

### FE: Unclear indication of available air ticket requests
- **Status**: skipped
- **Assertions**: 0/0
- **Notes**: Test requires: (1) View air ticket info card, (2) Verify text clarity for available vs used requests, (3) Verify zero-state handling. Cannot proceed without Playwright MCP.

### Need to remove processed (Encashment) Air tickets with Payroll reopen
- **Status**: skipped
- **Assertions**: 0/0
- **Notes**: Test requires: (1) Reopen previous payroll month, (2) Delete processed air ticket transaction, (3) Move request back to pending, (4) Transfer to different payroll period. Cannot proceed without Playwright MCP.

