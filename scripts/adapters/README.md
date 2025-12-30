# Flattened Plans to Validator Input Adapter (v2.0)

Deterministic adapter that converts flattened Playwright plan payloads (from n8n) into the Interface Reality Validator agent's Primary Input Format.

## v2.0 Changes

| Fix | Description |
|-----|-------------|
| #1 | Skip navigation checks (avoid duplication with navigate step) |
| #2 | Stable screenshot names using plan_id/claim_key slug |
| #3 | Preserve breadcrumbs and check.type in output metadata |
| #4 | Prefer non-navigation check for reported_behavior |
| #5 | Safe toArrowNotation (handles non-strings) |
| #6 | Extended Jira key extraction (TSSD, OS, FIN, HR, PAY, etc.) |

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
          "target": "Settings → Payroll → Daily Wage",
          "metadata": {
            "breadcrumbs": ["Settings", "Payroll", "Daily Wage"]
          }
        },
        {
          "step": 2,
          "action": "observe",
          "target": "[data-testid='daily-wage-toggle']",
          "expected": "Toggle should be visible and enabled",
          "screenshot": "plan-plan-jira-tssd-2648-02-chk01.png",
          "metadata": {
            "check_type": "ui_element",
            "check_id": "jira_tssd_2648_02_chk01"
          }
        },
        {
          "step": 3,
          "action": "capture",
          "target": "final state for VAL-001",
          "screenshot": "plan-plan-jira-tssd-2648-02-final.png"
        }
      ],
      "observable_indicators": ["Toggle should be visible and enabled"],
      "priority": "high",
      "metadata": {
        "source": "jira",
        "plan_id": "plan_jira_tssd_2648_02",
        "claim_key": "jira_tssd_2648_02",
        "navigation_breadcrumbs": ["Settings", "Payroll", "Daily Wage"]
      }
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
| `issues_to_validate[].jira_key` | Extracted from `claim_key` pattern (supports TSSD, OS, FIN, HR, PAY, etc.) |
| `issues_to_validate[].priority` | `high` if `source === "jira"`, else `medium` |
| `issues_to_validate[].metadata` | Contains `source`, `plan_id`, `claim_key`, `navigation_breadcrumbs` |
| `validation_steps[].metadata` | Contains `breadcrumbs` (navigate) or `check_type`, `check_id` (observe) |

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
- JIRA keys extracted from multiple project patterns: `{project}_{number}` (e.g., `tssd_2648`, `os_123`, `fin_456`)
- Navigation-type checks are skipped (only `navigate` step is generated once)
- Screenshot names use stable slugs: `plan-{slug}-{check_id}.png` (max 40 chars)
- Non-string inputs to path conversion handled safely (returns "unknown navigation path")
- Metadata preserved at issue and step level for debugging
