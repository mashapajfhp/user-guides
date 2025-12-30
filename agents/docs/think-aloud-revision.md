# Think Aloud Protocol Revision — v2 (Compact Decision Log)

This document contains the revised section 3.6 and related schema changes.
Drop these into the interface-validator.md agent spec.

---

## 3.6) DECISION LOG PROTOCOL (MANDATORY)

**Replace verbose narration with compact, structured event logging.**

The Decision Log creates an audit trail without token explosion. Log ONLY when state changes or progress blocks occur. Screenshots remain the authoritative evidence; logs are secondary metadata.

### Event Code System (MANDATORY)

| Code | Meaning | When to Log |
|------|---------|-------------|
| `NAV` | Navigation | Arrived at destination or navigation failed |
| `OBS` | Observation | Element found, missing, or in unexpected state |
| `ACT` | Action | Click, type, or interaction completed |
| `POP` | Popup/Modal | Dialog opened or closed |
| `DD` | Dropdown | Options captured from dropdown/select |
| `TGL` | Toggle | Toggle/switch state observed or changed |
| `ERR` | Error | Unexpected error or exception |
| `BLK` | Blocked | Permission, MFA, or access block encountered |
| `NOTE` | Note | Important observation not covered above |

### Log Entry Format (STRICT)

Each entry is ONE line:
```
<CODE>|<what>|<result>|<evidence>
```

- `<CODE>`: Event code from table above (3 chars, uppercase)
- `<what>`: What was targeted (max 60 chars)
- `<result>`: Outcome in past tense (max 80 chars)
- `<evidence>`: Screenshot filename(s) comma-separated, or `-` if none

### Hard Limits (ENFORCED)

| Constraint | Limit |
|------------|-------|
| Log entries per claim | max 8 |
| Characters per entry | max 180 |
| Total log chars (entire run) | max 12,000 |
| Run log events | max 12 |

If limits would be exceeded: truncate oldest entries, keep most recent.

### When to Log (ONLY THESE EVENTS)

Log when:
- Navigation arrives at destination or fails
- Element found present or confirmed missing
- Popup/modal opens or closes
- Dropdown options captured
- Toggle state observed or changed
- Permission/MFA block encountered
- Unexpected error or modal appears
- State change affects other elements

Do NOT log:
- Every micro-step or mouse movement
- Waiting for elements (unless timeout)
- Internal reasoning or planning
- Repetitive confirmations of same state

### Run Log (Top-Level)

The `run_log` captures run-wide events (login, session, fatal blocks):

```json
{
  "meta": {
    "run_log": [
      "NAV|app.bayzat.com|login page loaded|step-00-start.png",
      "ACT|login form|credentials submitted|step-01-login.png",
      "NAV|dashboard|session established|-",
      "BLK|settings access|403 forbidden - insufficient permissions|extra-01-permission-block.png"
    ]
  }
}
```

### Claim Decision Log

Each claim's `exploration.decision_log` captures claim-specific events:

```json
{
  "exploration": {
    "decision_log": [
      "NAV|Settings → Payroll|arrived at payroll settings|path-01.png",
      "OBS|Daily Wage accordion|found, collapsed state|claim-01-evidence-01.png",
      "ACT|accordion expand|clicked, revealed 3 services|-",
      "POP|Salary proration edit|popup opened with form|claim-01-popup-salary.png",
      "DD|Calculation method|2 options: Calendar days, Working days|claim-01-dropdown.png"
    ]
  }
}
```

### What Worked (COMPACT)

The `what_worked` object summarizes successful exploration:

```json
{
  "what_worked": {
    "summary": "string (max 300 chars)",
    "successful_path": ["string (max 6 items)"],
    "key_discoveries": ["string (max 6 items)"],
    "gotchas": ["string (max 6 items)"]
  }
}
```

Constraints:
- `summary`: max 300 characters
- `successful_path`: max 6 array items
- `key_discoveries`: max 6 array items
- `gotchas`: max 6 array items

### Observed Truth is Authoritative

The `observed_truth` field in claims is the PRIMARY record of what was seen.
Decision logs are SECONDARY — they explain HOW you arrived at the observation.
If logs and observed_truth conflict, observed_truth wins.

### Why This Protocol

1. **Deterministic**: Same inputs produce same log structure
2. **Token-efficient**: ~50-100 tokens per claim vs 500+ with verbose narration
3. **Audit-friendly**: Event codes enable automated parsing and filtering
4. **Scalable**: Works with 5 claims or 50 claims without explosion

---

## EVIDENCE JSON SCHEMA — REVISED SECTIONS

### meta.run_log (NEW)

```json
{
  "meta": {
    "feature_name": "string",
    "clean_feature_name": "string",
    "run_mode": "step5|step7|step5_step7",
    "generated_at": "ISO 8601",
    "run_log": [
      "CODE|what|result|evidence"
    ],
    "environment": {
      "base_url": "string",
      "notes": "string"
    }
  }
}
```

Schema:
- `run_log`: array of strings
- Max 12 entries
- Each entry max 180 chars
- Format: `CODE|what|result|evidence`

### claims[].exploration.decision_log (REPLACES think_aloud_log)

```json
{
  "claims": [
    {
      "claim_id": "VAL-001",
      "jira_key": "TSSD-1234",
      "claim": "string",
      "status": "pass|fail|not_confirmed",
      "observed_truth": "string (AUTHORITATIVE)",
      "evidence": ["screenshot.png"],
      "notes": "string",
      "exploration": {
        "decision_log": [
          "CODE|what|result|evidence"
        ],
        "interactive_elements_found": [],
        "popups_opened": [],
        "state_changes_observed": [],
        "what_worked": {
          "summary": "string (max 300 chars)",
          "successful_path": ["max 6 items"],
          "key_discoveries": ["max 6 items"],
          "gotchas": ["max 6 items"]
        },
        "screenshots": ["string"]
      }
    }
  ]
}
```

Schema for `decision_log`:
- Array of strings
- Max 8 entries per claim
- Each entry max 180 chars
- Format: `CODE|what|result|evidence`

### what_worked Constraints (UPDATED)

```json
{
  "what_worked": {
    "summary": {
      "type": "string",
      "maxLength": 300
    },
    "successful_path": {
      "type": "array",
      "items": { "type": "string" },
      "maxItems": 6
    },
    "key_discoveries": {
      "type": "array",
      "items": { "type": "string" },
      "maxItems": 6
    },
    "gotchas": {
      "type": "array",
      "items": { "type": "string" },
      "maxItems": 6
    }
  }
}
```

---

## EXAMPLE: Decision Log in Practice

### Scenario
Validating "Daily Wage Calculation" feature with 1 claim.

### Run Log (4 events)

```json
{
  "meta": {
    "feature_name": "Daily Wage Calculation",
    "clean_feature_name": "daily_wage_calculation",
    "run_mode": "step5",
    "generated_at": "2025-01-15T10:30:00Z",
    "run_log": [
      "NAV|app.bayzat.com|login page loaded|step-00-start.png",
      "ACT|login form|authenticated as hr.admin@test.com|step-01-login.png",
      "NAV|dashboard|session active, nav menu visible|-",
      "NAV|Settings → Payroll|payroll settings page loaded|path-01.png"
    ],
    "environment": {
      "base_url": "https://app.bayzat.com",
      "notes": "Test environment, HR Admin role"
    }
  }
}
```

### Claim with Decision Log (5 entries)

```json
{
  "claims": [
    {
      "claim_id": "VAL-001",
      "jira_key": "TSSD-2648",
      "claim": "Daily Wage Calculation accordion exists with configurable services",
      "status": "pass",
      "observed_truth": "Accordion present with 3 services: Salary proration, EOS leave encashment, Unpaid leave deduction. Each has edit popup with Calculation method dropdown (Calendar/Working days) and Overwrite toggle.",
      "evidence": [
        "claim-01-pass.png",
        "claim-01-accordion-expanded.png",
        "claim-01-popup-salary.png",
        "claim-01-dropdown-calc.png"
      ],
      "notes": "Overwrite toggle enables dependent fields when ON",
      "exploration": {
        "decision_log": [
          "OBS|Daily Wage Calculation accordion|found in collapsed state|claim-01-evidence-01.png",
          "ACT|accordion chevron|expanded, revealed 3 service rows|claim-01-accordion-expanded.png",
          "POP|Salary proration edit icon|popup opened with config form|claim-01-popup-salary.png",
          "DD|Calculation method dropdown|options: Calendar days, Working days|claim-01-dropdown-calc.png",
          "TGL|Overwrite toggle OFF→ON|enabled 2 dependent fields (holidays, week start)|claim-01-pass.png"
        ],
        "interactive_elements_found": [
          {
            "type": "accordion",
            "label": "Daily Wage Calculation",
            "action": "expanded",
            "children_discovered": ["Salary proration", "EOS leave encashment", "Unpaid leave deduction"]
          }
        ],
        "popups_opened": [
          {
            "trigger": "Edit icon on Salary proration",
            "popup_title": "Salary Proration Settings",
            "fields_documented": [
              {"name": "Calculation method", "type": "dropdown", "options": ["Calendar days", "Working days"]},
              {"name": "Overwrite calculation", "type": "toggle", "state": "OFF"}
            ]
          }
        ],
        "state_changes_observed": [
          {
            "trigger": "Overwrite toggle ON",
            "effect": "Include public holidays and Week start day fields enabled"
          }
        ],
        "what_worked": {
          "summary": "Accordion expands to show 3 services. Each edit icon opens config popup with Calculation method dropdown and Overwrite toggle. Overwrite enables advanced options.",
          "successful_path": [
            "Settings → Payroll",
            "Click Daily Wage Calculation accordion",
            "Click edit icon on any service",
            "Configure dropdown and toggles",
            "Click Save"
          ],
          "key_discoveries": [
            "Overwrite toggle is master switch for policy overrides",
            "3 services configurable independently",
            "2 calc methods: Calendar days, Working days"
          ],
          "gotchas": [
            "Some fields hidden until Overwrite is ON",
            "No auto-save - must click Save button"
          ]
        },
        "screenshots": [
          "claim-01-evidence-01.png",
          "claim-01-accordion-expanded.png",
          "claim-01-popup-salary.png",
          "claim-01-dropdown-calc.png",
          "claim-01-pass.png"
        ]
      }
    }
  ]
}
```

### Token Comparison

| Approach | Tokens per claim |
|----------|------------------|
| Old verbose narration | ~500-800 |
| New decision_log | ~80-120 |
| Savings | ~85% reduction |

For a 20-claim run:
- Old: ~12,000 tokens just for think-aloud
- New: ~2,000 tokens for decision logs

---

## MIGRATION NOTES

When updating the agent spec:

1. **Replace** section 3.6 entirely with the new "DECISION LOG PROTOCOL"
2. **Update** section 6 (Evidence JSON Schema) to include:
   - `meta.run_log` array
   - `claims[].exploration.decision_log` (replaces `think_aloud_log`)
   - Updated `what_worked` constraints
3. **Remove** references to:
   - `think_aloud_log`
   - Verbose emoji-based narration (🎯🔍💭👆📸✅)
   - "If you're not narrating, you're not exploring thoroughly enough"
4. **Keep** unchanged:
   - `exploration.interactive_elements_found`
   - `exploration.popups_opened`
   - `exploration.state_changes_observed`
   - `exploration.screenshots`
   - All other sections (0-5, 7-10)

---

## QUICK REFERENCE CARD

```
EVENT CODES
-----------
NAV = Navigation arrived/failed
OBS = Element found/missing
ACT = Click/type completed
POP = Popup opened/closed
DD  = Dropdown options captured
TGL = Toggle state change
ERR = Unexpected error
BLK = Permission/MFA block
NOTE = Important observation

FORMAT
------
CODE|what (≤60)|result (≤80)|evidence or -

LIMITS
------
Per claim:    8 entries max
Per entry:    180 chars max
Run log:      12 entries max
Total chars:  12,000 max (entire run)

what_worked:
- summary:         300 chars max
- successful_path: 6 items max
- key_discoveries: 6 items max
- gotchas:         6 items max
```
