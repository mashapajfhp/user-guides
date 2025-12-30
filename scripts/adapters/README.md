# Flattened Plans to Validator Input Adapter (v2.1)

Deterministic adapter that converts flattened Playwright plan payloads (from n8n) into the Interface Reality Validator agent's Primary Input Format.

## v2.1 Changes

| Change | Description |
|--------|-------------|
| Promoted check_type | `check_type` moved from metadata to top-level in observe steps |
| Added description | `description` field added to observe steps for context |
| Cleaner structure | Step structure optimized for runner and agent consumption |

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
    "feature_name": "<feature_name>",
    "feature_slug": "<feature_slug>",
    "generated_at": "<ISO_timestamp>",
    "plan_id": "plan_<source>_<project>_<issue_num>_<seq>",
    "claim_key": "<source>_<project>_<issue_num>_<seq>",
    "source": "jira|zendesk",
    "nav": {
      "canonical": "<Menu> > <Submenu> > <Page>",
      "breadcrumb_array": ["<Menu>", "<Submenu>", "<Page>"]
    },
    "checks": [
      {
        "check_id": "<claim_key>_chk01",
        "type": "<check_type>",
        "description": "<check_description>",
        "selector_hint": "<selector>",
        "assertion": "<assertion>"
      }
    ]
  }
]
```

### Shape B: Object with plans array

```json
{
  "feature_name": "<feature_name>",
  "feature_slug": "<feature_slug>",
  "generated_at": "<ISO_timestamp>",
  "plans": [
    {
      "plan_id": "plan_<source>_<project>_<issue_num>_<seq>",
      "claim_key": "<source>_<project>_<issue_num>_<seq>",
      "source": "jira|zendesk",
      "nav": { "canonical": "<Menu> > <Submenu> > <Page>" },
      "checks": []
    }
  ]
}
```

## Output Format

The adapter produces a single JSON object matching the Interface Reality Validator's Primary Input Format:

```json
{
  "feature_name": "<feature_name>",
  "clean_feature_name": "<feature_slug>",
  "validation_purpose": "UI validation from Jira/Zendesk plans",
  "validation_timestamp": "<ISO_timestamp>",
  "navigation_paths_from_zendesk": {
    "path_01": "<zendesk_path_1>"
  },
  "issues_to_validate": [
    {
      "issue_id": "VAL-001",
      "jira_key": "<PROJECT>-<issue_num>",
      "issue_summary": "<plan_id>",
      "reported_behavior": "<claim_key>: <description>",
      "validation_steps": [
        {
          "step": 1,
          "action": "navigate",
          "target": "<Menu> → <Submenu> → <Page>",
          "metadata": {
            "breadcrumbs": ["<Menu>", "<Submenu>", "<Page>"]
          }
        },
        {
          "step": 2,
          "action": "observe",
          "check_type": "<type>",
          "description": "<description>",
          "target": "<selector>",
          "expected": "<assertion>",
          "screenshot": "plan-<plan_slug>-<check_id>.png",
          "metadata": {
            "check_id": "<check_id>"
          }
        },
        {
          "step": 3,
          "action": "capture",
          "target": "final state for VAL-001",
          "screenshot": "plan-<plan_slug>-final.png"
        }
      ],
      "observable_indicators": ["<assertion>"],
      "priority": "high|medium",
      "metadata": {
        "source": "jira|zendesk",
        "plan_id": "<plan_id>",
        "claim_key": "<claim_key>",
        "navigation_breadcrumbs": ["<Menu>", "<Submenu>", "<Page>"]
      }
    }
  ],
  "configuration_areas_to_document": [],
  "validation_config": {
    "base_url": "<base_url>",
    "login_required": true,
    "required_role": "",
    "max_attempts_per_validation": 2,
    "screenshot_on_each_step": true,
    "timeout_ms": 30000,
    "wait_after_navigation_ms": 2000
  },
  "output_configuration": {
    "screenshots_dir": "<screenshots_dir>",
    "reports_dir": "<reports_dir>",
    "evidence_file": "<evidence_file>",
    "summary_file": "<summary_file>"
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
| `validation_steps[].check_type` | (v2.1) Top-level field on observe steps: `override_indicator`, `content_presence`, `ui_state`, `options`, etc. |
| `validation_steps[].description` | (v2.1) Check description from source payload |
| `validation_steps[].metadata` | Contains `breadcrumbs` (navigate) or `check_id` (observe) |

## Example Command

```bash
node scripts/adapters/flattened-plans-to-validator-input.mjs \
  --in ./n8n-output/flattened-plans.json \
  --out ./validator-input/<feature_slug>-validator-input.json \
  --base-url "<base_url>" \
  --login-required true \
  --screenshots-dir "/runs/<feature_slug>-<run_id>/screenshots" \
  --reports-dir "/runs/<feature_slug>-<run_id>/reports" \
  --evidence-file "/runs/<feature_slug>-<run_id>/reports/evidence.json" \
  --summary-file "/runs/<feature_slug>-<run_id>/reports/summary.md"
```

## Notes

- The adapter does NOT create directories; it only generates JSON
- Output is deterministic with stable ordering and IDs
- Navigation paths use " → " arrows (replaces " > ")
- JIRA keys extracted from multiple project patterns: `{project}_{number}`
- Navigation-type checks are skipped (only `navigate` step is generated once)
- Screenshot names use stable slugs: `plan-{slug}-{check_id}.png` (max 40 chars)
- Non-string inputs to path conversion handled safely (returns "unknown navigation path")
- Metadata preserved at issue and step level for debugging
- v2.1: `check_type` and `description` promoted to top-level in observe steps
