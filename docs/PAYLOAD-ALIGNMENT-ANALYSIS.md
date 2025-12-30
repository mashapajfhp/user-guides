# Payload Alignment Analysis

## Executive Summary

Analysis of alignment between the new Playwright plan payload structure and the three consuming components:
1. `scripts/adapters/flattened-plans-to-validator-input.mjs` (v2.1)
2. `scripts/playwright/run-validation.mjs`
3. `agents/interface-validator.md`

**Key Finding**: The adapter produces `validation_steps` but run-validation.mjs does not execute them. The runner uses its own cognitive walkthrough approach instead.

---

## 1. New Payload Structure (SOURCE - AUTHORITATIVE)

```json
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
      "type": "navigation",
      "description": "<navigation description>",
      "selector_hint": null,
      "assertion": "<navigation assertion>"
    },
    {
      "check_id": "<claim_key>_chk02",
      "type": "override_indicator",
      "description": "<override check description>",
      "selector_hint": "<selector>",
      "assertion": "<override assertion>"
    },
    {
      "check_id": "<claim_key>_chk03",
      "type": "content_presence",
      "description": "<content check description>",
      "selector_hint": "<selector>",
      "assertion": "<content assertion>"
    },
    {
      "check_id": "<claim_key>_chk04",
      "type": "ui_state",
      "description": "<ui state description>",
      "selector_hint": "<selector>",
      "assertion": "<ui state assertion>"
    },
    {
      "check_id": "<claim_key>_chk05",
      "type": "options",
      "description": "<options description>",
      "selector_hint": "<selector>",
      "assertion": "<options assertion>"
    }
  ]
}
```

### Check Types Defined

| Type | Purpose | Expected Validation |
|------|---------|---------------------|
| `navigation` | Verify navigation path accessibility | Page loads, breadcrumbs visible |
| `override_indicator` | Verify greyed-out/disabled states | Badge/indicator visible showing override |
| `content_presence` | Verify UI content exists | Element with content is present |
| `ui_state` | Verify element visibility/state | Element is visible, enabled, or has specific state |
| `options` | Verify dropdown/selection options | Dropdown contains expected options |

---

## 2. Adapter Output (v2.1)

The adapter converts the payload to:

```json
{
  "feature_name": "<feature_name>",
  "clean_feature_name": "<feature_slug>",
  "issues_to_validate": [
    {
      "issue_id": "VAL-001",
      "jira_key": "<PROJECT>-<issue_num>",
      "issue_summary": "<plan_id>",
      "reported_behavior": "<claim_key>: <first_non_nav_check_description>",
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
          "target": "<selector_hint>",
          "expected": "<assertion>",
          "screenshot": "plan-<plan_slug>-<check_id>.png",
          "metadata": {
            "check_id": "<check_id>"
          }
        }
      ],
      "observable_indicators": ["<assertion1>", "<assertion2>"],
      "priority": "high|medium",
      "metadata": {
        "source": "jira|zendesk",
        "plan_id": "<plan_id>",
        "claim_key": "<claim_key>"
      }
    }
  ],
  "navigation_paths_from_zendesk": {},
  "validation_config": {...},
  "output_configuration": {...}
}
```

### Adapter Mapping (v2.1)

| Payload Field | Adapter Output |
|---------------|----------------|
| `plan_id` | `issue_summary`, `metadata.plan_id` |
| `claim_key` | `metadata.claim_key` |
| `source` | `metadata.source` |
| `nav.canonical` | `validation_steps[0].target` (with arrows) |
| `nav.breadcrumb_array` | `validation_steps[0].metadata.breadcrumbs` |
| `checks[].type` | `validation_steps[].check_type` (v2.1: top-level) |
| `checks[].description` | `validation_steps[].description` (v2.1: new field) |
| `checks[].selector_hint` | `validation_steps[].target` |
| `checks[].assertion` | `validation_steps[].expected` |
| `checks[].check_id` | `validation_steps[].metadata.check_id` |

---

## 3. run-validation.mjs Consumption

### Current Behavior

The runner's `convertInputFormat()` function:
1. Detects `issues_to_validate` as "new format"
2. Converts to `claims_to_validate`
3. **Preserves `validation_steps` but DOES NOT EXECUTE THEM**

```javascript
converted.claims_to_validate = input.issues_to_validate.map(issue => ({
  id: issue.issue_id || issue.id,
  claim: issue.reported_behavior || issue.issue_summary,
  validation_steps: issue.validation_steps,  // PRESERVED but NOT USED
  observable_indicators: issue.observable_indicators || [],
  raw: issue
}));
```

### What Actually Happens

The runner uses **cognitive walkthrough** instead:
1. Extracts keywords from `claim` text
2. Attempts pattern-based navigation
3. Searches for UI elements by heuristics
4. Takes screenshots opportunistically

### Gap Analysis

| Feature | Adapter Provides | Runner Uses |
|---------|------------------|-------------|
| Navigation path | `validation_steps[0].target` | Keyword extraction from claim text |
| Selector hints | `validation_steps[].target` | Heuristic element search |
| Check types | `metadata.check_type` | Not differentiated |
| Expected assertions | `validation_steps[].expected` | Observable indicators (text matching) |

---

## 4. interface-validator.md (Claude Agent)

### Input Contract

The agent expects:
```json
{
  "feature_name": "string",
  "claims_to_validate": ["string"] OR "issues_to_validate": [...],
  "navigation_paths": [...],
  "output_configuration": {...}
}
```

### How Agent Processes

The agent is a Claude LLM with Playwright MCP access. It:
1. Reads the input JSON
2. Interprets `validation_steps` as instructions
3. Uses Playwright MCP to execute navigation and observations
4. Produces evidence JSON with exploration data

### Agent Alignment

The agent CAN consume `validation_steps` because:
- It's an LLM that interprets instructions
- It has Playwright MCP for browser automation
- Its evidence schema matches the check types

---

## 5. Misalignments Identified

### Critical

| Issue | Impact | Severity |
|-------|--------|----------|
| `validation_steps` not executed by runner | Structured steps ignored, falls back to heuristics | HIGH |
| Check types (`override_indicator`, etc.) not mapped to actions | Type-specific validation not performed | MEDIUM |

### Minor

| Issue | Impact | Severity |
|-------|--------|----------|
| Field naming: `issues_to_validate` vs `claims_to_validate` | Conversion needed (already handled) | LOW |
| Screenshot naming conventions differ | Minor mismatch in output filenames | LOW |

---

## 6. Recommended Alignment

### Option A: Document Current Behavior (Minimal Change)

Keep run-validation.mjs as cognitive walkthrough. Document that:
- `validation_steps` are metadata hints
- Actual validation uses heuristic exploration
- Check types inform agent behavior only

**Pros**: No code changes needed
**Cons**: Structured steps not leveraged

### Option B: Enhance Runner to Use validation_steps

Add step execution to run-validation.mjs:

```javascript
async function executeValidationSteps(page, steps) {
  const results = [];
  for (const step of steps) {
    if (step.action === 'navigate') {
      // Click breadcrumb path
      const result = await navigateBreadcrumbs(page, step.metadata.breadcrumbs);
      results.push({ step: step.step, status: result.status, screenshot: ... });
    } else if (step.action === 'observe') {
      // Check element based on check_type
      const checkType = step.metadata?.check_type || 'ui_element';
      const result = await validateByCheckType(page, step.target, step.expected, checkType);
      results.push({ step: step.step, status: result.status, screenshot: step.screenshot });
    } else if (step.action === 'capture') {
      // Take final screenshot
      await takeScreenshot(page, step.screenshot);
      results.push({ step: step.step, status: 'pass', screenshot: step.screenshot });
    }
  }
  return results;
}

async function validateByCheckType(page, target, expected, checkType) {
  switch (checkType) {
    case 'navigation':
      return checkNavigationSuccess(page);
    case 'override_indicator':
      return checkOverrideIndicator(page, target, expected);
    case 'content_presence':
      return checkContentPresence(page, target, expected);
    case 'ui_state':
      return checkUIState(page, target, expected);
    case 'options':
      return checkDropdownOptions(page, target, expected);
    default:
      return checkElementExists(page, target);
  }
}
```

**Pros**: Full alignment with payload structure, type-specific validation
**Cons**: Requires runner code changes

### Option C: Use Agent Instead of Runner ✅ CHOSEN

Replace run-validation.mjs with interface-validator.md agent invocation:
- Agent already interprets validation_steps
- Produces evidence JSON
- Uses Playwright MCP

**Pros**: Already aligned, more flexible, LLM adaptability, deterministic evidence output
**Cons**: Requires Claude API calls (cost), different integration pattern

---

## 7. Decision Summary

**Selected: Option C** — Use `interface-validator.md` agent for formal validation runs.

### Rationale

| Criteria | Option A | Option B | Option C |
|----------|----------|----------|----------|
| Stability | Medium | Low | **High** |
| Determinism | Low | High | **High** |
| Payload alignment | Poor | Full | **Full** |
| Maintenance burden | None | High | **Low** |
| Check type handling | None | Custom code | **LLM interprets** |
| UI change resilience | High | Low | **Medium-High** |

### Key Factors

1. **Already aligned** — Agent interprets `validation_steps` as instructions
2. **No new code to maintain** — Runner step executor would be ~200+ lines of brittle code
3. **LLM adaptability** — Handles minor UI variations without breaking
4. **Deterministic evidence** — Produces structured JSON with defined schema
5. **Built-in audit trail** — Decision Log Protocol provides traceable execution

### Recommended Architecture

```
n8n workflow
    ↓
flattened-plans-to-validator-input.mjs (adapter v2.1)
    ↓
interface-validator.md (Claude agent via Playwright MCP)
    ↓
evidence.json + summary.md + screenshots
```

The runner (`run-validation.mjs`) remains available for quick exploratory validation when needed.

---

## 8. Action Items

1. ~~**Update adapter** (v2.1)~~ ✅ COMPLETED - check_type and description promoted to top level:
   ```json
   {
     "action": "observe",
     "check_type": "<type>",
     "description": "<description>",
     "target": "<selector_hint>",
     "expected": "<assertion>"
   }
   ```

2. ~~**Document runner limitations**~~ ✅ COMPLETED - Added README at `/scripts/playwright/README.md`:
   - Documents cognitive walkthrough methodology
   - Explains validation_steps are preserved but NOT executed
   - Lists check type handling limitations
   - References interface-validator.md agent as alternative

3. ~~**Alignment decision**~~ ✅ COMPLETED - Option C chosen (use agent instead of runner)
   - Runner remains for exploratory validation
   - Agent used for formal validation runs
   - No step executor implementation needed

---

## 9. File Locations

| Component | Path |
|-----------|------|
| Adapter | `/scripts/adapters/flattened-plans-to-validator-input.mjs` |
| Adapter README | `/scripts/adapters/README.md` |
| Runner | `/scripts/playwright/run-validation.mjs` |
| Runner README | `/scripts/playwright/README.md` |
| Agent | `/agents/interface-validator.md` |
| This doc | `/docs/PAYLOAD-ALIGNMENT-ANALYSIS.md` |
