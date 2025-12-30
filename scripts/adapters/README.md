# Flattened Plans to Validator Input Adapter

Deterministic adapter that converts flattened Playwright plan payloads (from n8n) into the Interface Reality Validator agent's Primary Input Format.

## Usage

```bash
node scripts/adapters/flattened-plans-to-validator-input.mjs \
  --in <input.json> \
  --out <output.json> \
  --base-url <baseUrl> \
  --login-required true|false \
  --screenshots-dir "<path>" \
  --reports-dir "<path>" \
  --evidence-file "<path>" \
  --summary-file "<path>"
```

### Required Arguments

| Argument | Description |
|----------|-------------|
| `--in` | Path to input JSON file (flattened plans payload) |
| `--out` | Path to write output JSON file |
| `--base-url` | Base URL for validation (e.g., `https://app.bayzat.com`) |
| `--login-required` | Whether login is required (`true` or `false`) |
| `--screenshots-dir` | Directory path for screenshots |
| `--reports-dir` | Directory path for reports |
| `--evidence-file` | Path for evidence JSON file |
| `--summary-file` | Path for summary Markdown file |

### Optional Arguments

| Argument | Description |
|----------|-------------|
| `--required-role` | Required user role (e.g., `HR Admin`). Defaults to empty string. |

## Input Formats

The adapter supports two input shapes:

### Shape A: Array of flattened plan objects (preferred)

```json
[
  {
    "feature_name": "daily wage calculator",
    "feature_slug": "daily_wage_calculator",
    "generated_at": "2025-04-10T12:00:00Z",
    "plan_id": "plan_jira_tssd_2648_02",
    "claim_key": "jira_tssd_2648_02",
    "source": "jira",
    "nav": {
      "canonical": "Settings > Payroll > Daily Wage",
      "breadcrumb_array": ["Settings", "Payroll", "Daily Wage"]
    },
    "checks": [
      {
        "check_id": "jira_tssd_2648_02_chk01",
        "type": "navigation",
        "description": "Verify daily wage toggle exists",
        "selector_hint": "[data-testid='daily-wage-toggle']",
        "assertion": "Toggle should be visible and enabled"
      }
    ]
  }
]
```

### Shape B: Object with plans array

```json
{
  "feature_name": "daily wage calculator",
  "feature_slug": "daily_wage_calculator",
  "generated_at": "2025-04-10T12:00:00Z",
  "plans": [
    {
      "plan_id": "plan_jira_tssd_2648_02",
      "claim_key": "jira_tssd_2648_02",
      "source": "jira",
      "nav": { "canonical": "Settings > Payroll > Daily Wage" },
      "checks": []
    }
  ]
}
```

## Output Format

The adapter produces a single JSON object matching the Interface Reality Validator's Primary Input Format:

```json
{
  "feature_name": "daily wage calculator",
  "clean_feature_name": "daily_wage_calculator",
  "validation_purpose": "UI validation from Jira/Zendesk plans",
  "validation_timestamp": "2025-04-10T14:30:00.000Z",
  "navigation_paths_from_zendesk": {
    "path_01": "Help Center → Daily Wage → Setup Guide"
  },
  "issues_to_validate": [
    {
      "issue_id": "VAL-001",
      "jira_key": "TSSD-2648",
      "issue_summary": "plan_jira_tssd_2648_02",
      "reported_behavior": "jira_tssd_2648_02: Verify daily wage toggle exists",
      "validation_steps": [
        {
          "step": 1,
          "action": "navigate",
          "target": "Settings → Payroll → Daily Wage"
        },
        {
          "step": 2,
          "action": "observe",
          "target": "[data-testid='daily-wage-toggle']",
          "expected": "Toggle should be visible and enabled",
          "screenshot": "claim-01-jira_tssd_2648_02_chk01.png"
        },
        {
          "step": 3,
          "action": "capture",
          "target": "final state for VAL-001",
          "screenshot": "claim-01-final.png"
        }
      ],
      "observable_indicators": ["Toggle should be visible and enabled"],
      "priority": "high"
    }
  ],
  "configuration_areas_to_document": [],
  "validation_config": {
    "base_url": "https://app.bayzat.com",
    "login_required": true,
    "required_role": "",
    "max_attempts_per_validation": 2,
    "screenshot_on_each_step": true,
    "timeout_ms": 30000,
    "wait_after_navigation_ms": 2000
  },
  "output_configuration": {
    "screenshots_dir": "/runs/run-001/screenshots",
    "reports_dir": "/runs/run-001/reports",
    "evidence_file": "/runs/run-001/reports/evidence.json",
    "summary_file": "/runs/run-001/reports/summary.md"
  }
}
```

## Mapping Rules

| Output Field | Source |
|--------------|--------|
| `feature_name` | First plan's `feature_name` or object-level `feature_name` |
| `clean_feature_name` | First plan's `feature_slug`, else snake_case of `feature_name` |
| `validation_timestamp` | Current ISO timestamp |
| `navigation_paths_from_zendesk` | Unique `nav.canonical` paths from zendesk sources only |
| `issues_to_validate[].issue_id` | Sequential `VAL-001`, `VAL-002`, etc. |
| `issues_to_validate[].jira_key` | Extracted from `claim_key` pattern `/tssd_(\d+)/i` |
| `issues_to_validate[].priority` | `high` if `source === "jira"`, else `medium` |

## Example Command

```bash
node scripts/adapters/flattened-plans-to-validator-input.mjs \
  --in ./n8n-output/flattened-plans.json \
  --out ./validator-input/daily-wage-validator-input.json \
  --base-url "https://app.bayzat.com" \
  --login-required true \
  --screenshots-dir "/runs/daily-wage-001/screenshots" \
  --reports-dir "/runs/daily-wage-001/reports" \
  --evidence-file "/runs/daily-wage-001/reports/evidence.json" \
  --summary-file "/runs/daily-wage-001/reports/summary.md"
```

## Notes

- The adapter does NOT create directories; it only generates JSON
- Output is deterministic with stable ordering and IDs
- Navigation paths use " → " arrows (replaces " > ")
- JIRA keys are extracted from `tssd_NNNN` patterns in claim_key
