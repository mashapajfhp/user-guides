# Playwright Validation Runner

Cognitive walkthrough-based UI validation runner using Playwright.

## Overview

The `run-validation.mjs` script performs UI validation using a **cognitive walkthrough** methodology rather than prescriptive step execution. It explores the UI intelligently to find and validate features.

## Input Format

The runner accepts input from the adapter (`flattened-plans-to-validator-input.mjs`) or legacy formats.

### New Format (from adapter v2.1)

```json
{
  "feature_name": "<feature_name>",
  "clean_feature_name": "<feature_slug>",
  "issues_to_validate": [
    {
      "issue_id": "VAL-001",
      "jira_key": "<PROJECT>-<issue_num>",
      "issue_summary": "<plan_id>",
      "reported_behavior": "<claim_key>: <description>",
      "validation_steps": [...],
      "observable_indicators": ["<assertion>"],
      "priority": "high|medium",
      "metadata": {...}
    }
  ],
  "navigation_paths_from_zendesk": {...},
  "validation_config": {...},
  "output_configuration": {...}
}
```

### Legacy Format

```json
{
  "feature_name": "<feature_name>",
  "claims_to_validate": ["<claim_text>"],
  "navigation_paths": ["<path>"],
  "procedures": [...]
}
```

## Input Conversion

The runner automatically converts new format to legacy format:

| New Format Field | Converted To |
|------------------|--------------|
| `issues_to_validate` | `claims_to_validate` |
| `issue_id` | `claim_id`, `id` |
| `reported_behavior` | `claim` |
| `validation_steps` | Preserved but **NOT EXECUTED** |
| `observable_indicators` | `observable_indicators` |

## Methodology: Cognitive Walkthrough

The runner uses **cognitive walkthrough** instead of executing `validation_steps`:

1. **Feature Context Extraction** - Analyzes input to understand the feature
2. **Intelligent Navigation** - Uses navigation hints as guidance, not literal paths
3. **UI Exploration** - Searches for feature elements through heuristics
4. **Screenshot Capture** - Documents discovered UI states
5. **Behavioral Testing** - Validates feature behavior through observation

### Why Cognitive Walkthrough?

- **Resilience** - Handles UI changes without breaking
- **Discovery** - Finds elements that may not be explicitly specified
- **Context Awareness** - Understands feature intent, not just steps

## validation_steps Usage

The `validation_steps` array from the adapter is:

| Aspect | Status |
|--------|--------|
| Preserved in converted claims | ✅ Yes |
| Executed as prescriptive steps | ❌ No |
| Used as navigation hints | ✅ Partial |
| Used for screenshot naming | ❌ No |

### What validation_steps Provide

```json
{
  "step": 1,
  "action": "navigate|observe|capture",
  "check_type": "<type>",
  "description": "<description>",
  "target": "<selector_hint>",
  "expected": "<assertion>",
  "screenshot": "<filename>",
  "metadata": {...}
}
```

### Current Behavior

The runner extracts keywords from:
- `reported_behavior` (claim text)
- `observable_indicators` (assertions)
- Navigation path hints

These keywords guide the cognitive walkthrough exploration.

## Output Format

```json
{
  "status": "pass|partial|fail",
  "methodology": "cognitive_walkthrough_and_behavioral_testing",
  "feature_context": {...},
  "cognitive_walkthrough": {
    "status": "pass|fail|skipped",
    "goal": "<goal_description>",
    "exploration_path": [...],
    "discovered_elements": [...],
    "screenshots": [...]
  },
  "feature_inspection": {...},
  "navigation_results": [...],
  "claim_validations": [...]
}
```

## Limitations

### validation_steps Not Executed

The structured `validation_steps` from the adapter are preserved but the runner does not:
- Follow the step sequence
- Use `check_type` for type-specific validation
- Apply `selector_hint` for element targeting
- Use `screenshot` naming conventions from steps

### Check Type Mapping

| Check Type | Runner Behavior |
|------------|-----------------|
| `navigation` | Uses as navigation hint only |
| `override_indicator` | Not specifically detected |
| `content_presence` | Generic element search |
| `ui_state` | Not differentiated |
| `options` | Not specifically validated |

## Alternative: Interface Validator Agent

For prescriptive step execution, use the `interface-validator.md` Claude agent instead:

- Interprets `validation_steps` as instructions
- Uses Playwright MCP for browser automation
- Produces deterministic evidence JSON
- Follows screenshot naming conventions

## Usage

```bash
node scripts/playwright/run-validation.mjs \
  --input <input.json> \
  --output <output.json> \
  --screenshots-dir <path>
```

## Related Files

| Component | Path |
|-----------|------|
| Adapter | `/scripts/adapters/flattened-plans-to-validator-input.mjs` |
| Agent | `/agents/interface-validator.md` |
| Alignment Analysis | `/docs/PAYLOAD-ALIGNMENT-ANALYSIS.md` |
