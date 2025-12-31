# Playwright Validation Runner

Exploration-first UI validation runner using Playwright.

## Overview

The `run-validation.mjs` script performs UI validation using an **exploration-first** methodology. This approach:

1. Navigates to target pages with **fallback strategies**
2. **Explores the page** to discover interactive controls (accordions, tabs, dropdowns, toggles, tables)
3. Uses exploration findings to **inform check validation**
4. Provides **rich evidence output** with screenshots at every step

## Key Features

### Exploration-First Validation

Instead of relying solely on selector hints, the runner:

- **Expands accordions** to reveal hidden content
- **Explores tabs** to find relevant sections
- **Opens dropdowns** to capture available options
- **Discovers toggles** and switches
- **Scans tables** for relevant data
- **Explores dialogs/modals** when present

### SAFE_MODE (Enabled by Default)

The runner skips potentially destructive actions:
- Save/Submit buttons
- Delete/Remove buttons
- Confirm/Yes buttons
- Any button with destructive styling

### MCP Mode (Recommended)

The runner supports **MCP-style accessibility snapshot navigation**, which is more reliable than CSS selectors:

```bash
# Enable MCP mode via CLI flag
node run-validation.mjs --input input.json --out output.json --mcp-mode

# Or via environment variable
PLAYWRIGHT_MCP_MODE=true node run-validation.mjs --input input.json --out output.json
```

**Benefits of MCP Mode:**
- Uses accessibility tree snapshots instead of brittle CSS selectors
- Finds elements by semantic role and name (like `button "Settings"`)
- Handles overlays and popups automatically (presses Escape to dismiss)
- More resilient to UI changes and dynamic content
- Matches how the Playwright MCP server works

### Fallback Navigation

When primary breadcrumb navigation fails, the runner tries:

1. **Search navigation** - Uses the app's search functionality
2. **Settings crawl** - Navigates through Settings menu systematically
3. **Link exploration** - Follows relevant links based on keywords

## Input Format

The runner accepts input from the adapter (`flattened-plans-to-validator-input.mjs`).

### Validation Plans Format

```json
{
  "validation_plans": [
    {
      "plan_id": "plan_jira_PROJ_123_01",
      "claim_key": "jira_PROJ_123_01",
      "source": "jira",
      "nav": {
        "canonical": "Settings > Payroll > Configuration",
        "breadcrumb_array": ["Settings", "Payroll", "Configuration"]
      },
      "checks": [
        {
          "check_id": "jira_PROJ_123_01_chk01",
          "type": "content_presence|ui_state|options|override_indicator|navigation",
          "description": "Check description",
          "selector_hint": "optional selector",
          "assertion": "Expected behavior"
        }
      ]
    }
  ]
}
```

## Methodology

### 1. Navigation with Fallbacks

```
Breadcrumb Navigation → [Success] → Continue
         ↓ [Fail]
Search Navigation → [Success] → Continue
         ↓ [Fail]
Settings Crawl → [Success] → Continue
         ↓ [Fail]
Mark navigation failed, continue with checks
```

### 2. Page Exploration

After successful navigation:

| Control Type | Action | Limit |
|--------------|--------|-------|
| Accordions | Expand to reveal content | 8 max |
| Tabs | Click through each tab | 6 max |
| Dropdowns | Open and capture options | 5 max |
| Toggles | Observe (no state changes) | 10 max |
| Tables | Scan visible rows | 5 rows max |
| Dialogs | Explore visible modals | - |

### 3. Check Execution

Each check uses exploration evidence:

```javascript
// Exploration-first check flow
1. Run targeted exploration for check context
2. Match exploration discoveries against assertion keywords
3. Apply type-specific validation
4. Merge with traditional check if needed
5. Capture evidence screenshot
```

## Output Format

```json
{
  "status": "pass|partial|fail",
  "plan_results": [
    {
      "plan_id": "plan_jira_PROJ_123_01",
      "methodology": "exploration_first",
      "navigation": {
        "status": "pass|partial|fail",
        "fallback_used": true,
        "fallback_method": "search|settings_crawl"
      },
      "exploration": {
        "status": "completed|error",
        "discoveries": [
          { "type": "accordion", "label": "...", "state": "expanded" },
          { "type": "dropdown", "label": "...", "options": [...] }
        ],
        "observations": ["text found on page..."],
        "screenshots": ["plan_xxx_explore_01.png"],
        "safe_mode_skips": 2
      },
      "checks": [
        {
          "check_id": "...",
          "type": "content_presence",
          "status": "pass|partial|fail",
          "methodology": "exploration_first",
          "evidence": {
            "exploration_based": true,
            "discoveries": [...],
            "observations": [...],
            "assertion_keywords": ["daily", "wage"],
            "matched_keywords": ["daily"]
          },
          "exploration_steps": [
            { "kind": "IN_PAGE_INTERACTION", "action": "expand_accordion", "outcome": "success" }
          ]
        }
      ]
    }
  ]
}
```

## Check Types

| Check Type | Exploration Behavior |
|------------|---------------------|
| `navigation` | Verifies page loaded, checks breadcrumbs |
| `content_presence` | Searches exploration observations for assertion keywords |
| `ui_state` | Looks for toggles, checkboxes, switches in discoveries |
| `options` | Checks dropdown/select discoveries for options |
| `override_indicator` | Searches for "override", "greyed", "disabled" labels |

## Usage

```bash
# Standard mode (CSS selectors with fallbacks)
node scripts/playwright/run-validation.mjs \
  --input <input.json> \
  --out <output.json> \
  --screenshots <screenshots_dir>

# MCP mode (recommended - uses accessibility snapshots)
node scripts/playwright/run-validation.mjs \
  --input <input.json> \
  --out <output.json> \
  --screenshots <screenshots_dir> \
  --mcp-mode
```

## UI Explorer Module

The exploration logic is in `ui-explorer.mjs`:

```javascript
import {
  UIExplorer,
  NavigationExplorer,
  runExplorationForCheck,
  DEFAULT_LIMITS,
  extractKeywords
} from "./ui-explorer.mjs";

// Create explorer
const explorer = new UIExplorer(page, {
  screenshotsDir: './screenshots',
  screenshotPrefix: 'plan_001',
  safeMode: true,
  limits: DEFAULT_LIMITS
});

// Run full page exploration
const result = await explorer.explorePage();

// Run targeted exploration for a check
const evidence = await runExplorationForCheck(page, check, options);
```

### Default Limits

```javascript
DEFAULT_LIMITS = {
  maxAccordions: 8,
  maxTabs: 6,
  maxDropdowns: 5,
  maxToggles: 10,
  maxRowsPerTable: 5,
  maxLinks: 10
}
```

## Related Files

| Component | Path |
|-----------|------|
| Runner | `/scripts/playwright/run-validation.mjs` |
| Snapshot Navigator | `/scripts/playwright/snapshot-navigator.mjs` |
| UI Explorer | `/scripts/playwright/ui-explorer.mjs` |
| Adapter | `/scripts/adapters/flattened-plans-to-validator-input.mjs` |
| Agent | `/agents/interface-validator.md` |
| Alignment Analysis | `/docs/PAYLOAD-ALIGNMENT-ANALYSIS.md` |
