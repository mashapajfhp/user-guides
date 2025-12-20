#!/usr/bin/env node
/**
 * scripts/playwright/run-validation.mjs
 *
 * Aligned to Interface Validation workflow input:
 * {
 *   feature_name: string,
 *   claims_to_validate: array,
 *   navigation_paths: (array OR object tree),
 *   app: { base_url: string, username: string, password: string }
 * }
 *
 * Now supports navigation_paths_json object-tree like:
 * navigation_paths.authentication.login.path, main_navigation.*, etc.
 *
 * Output (deterministic JSON, always written):
 * {
 *   status: "pass"|"fail",
 *   executed_at: string,
 *   started_at: string,
 *   feature_name: string|null,
 *   login: {...},
 *   navigation_results: [...],
 *   claim_ui_checks: [...],
 *   summary: {...},
 *   fatal_error: string|null
 * }
 */

import fs from "fs";
import path from "path";
import process from "process";
import { chromium } from "@playwright/test";

// ------------------ CLI args ------------------
function getArg(name, def = null) {
  const i = process.argv.indexOf(name);
  if (i === -1) return def;
  const v = process.argv[i + 1];
  if (!v || v.startsWith("--")) return def;
  return v;
}

const ROOT = process.cwd();
const INPUT_PATH = getArg("--input", path.join(ROOT, ".validation/input/request.json"));
const OUT_PATH = getArg("--out", path.join(ROOT, ".validation/output/pw_result.json"));
const SCREENSHOTS_DIR = getArg("--screenshots", path.join(ROOT, ".validation/output/screenshots"));

// timeouts / limits
const GOTO_TIMEOUT = Number(process.env.PLAYWRIGHT_GOTO_TIMEOUT_MS || 45000);
const STEP_TIMEOUT = Number(process.env.PLAYWRIGHT_STEP_TIMEOUT_MS || 15000);
const HEADLESS = (process.env.PLAYWRIGHT_HEADLESS ?? "true") !== "false";

// Bound navigation checks so we don't explode CI time on huge trees.
// You can raise this later if needed.
const MAX_NAV_PAGES = Number(process.env.PLAYWRIGHT_MAX_NAV_PAGES || 30);

// ------------------ helpers ------------------
function nowISO() {
  return new Date().toISOString();
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function readJSON(filePath) {
  if (!fs.existsSync(filePath)) throw new Error(`Input JSON not found: ${filePath}`);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function safeString(x) {
  if (x === null || x === undefined) return "";
  return String(x);
}

function sanitizeFileName(name) {
  return safeString(name)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9._-]+/g, "")
    .slice(0, 80) || "unnamed";
}

async function saveScreenshot(page, screenshotsDir, label) {
  try {
    const file = `${sanitizeFileName(label)}.png`;
    const fullPath = path.join(screenshotsDir, file);
    await page.screenshot({ path: fullPath, fullPage: true });
    return path.relative(ROOT, fullPath);
  } catch {
    return null;
  }
}

function writeOutput(outPath, obj) {
  ensureDir(path.dirname(outPath));
  fs.writeFileSync(outPath, JSON.stringify(obj, null, 2));
}

function joinUrl(baseUrl, pth) {
  const b = safeString(baseUrl).replace(/\/+$/, "");
  const p = safeString(pth).trim();
  if (!p) return b;
  if (/^https?:\/\//i.test(p)) return p;
  return `${b}${p.startsWith("/") ? "" : "/"}${p}`;
}

function isPlainObject(x) {
  return !!x && typeof x === "object" && !Array.isArray(x);
}

/**
 * Detect if a string is a breadcrumb path (e.g., "Settings > Payroll > Daily Wage")
 * vs an actual URL
 */
function isBreadcrumbPath(str) {
  if (!str || typeof str !== "string") return false;
  // If it looks like a URL, it's not a breadcrumb
  if (/^https?:\/\//i.test(str.trim())) return false;
  if (str.trim().startsWith("/")) return false;
  // Check for breadcrumb separators
  return /[>→›]/.test(str);
}

/**
 * Parse a breadcrumb string into an array of navigation items
 * "Settings > Payroll > Daily Wage" → ["Settings", "Payroll", "Daily Wage"]
 */
function parseBreadcrumb(breadcrumb) {
  if (!breadcrumb || typeof breadcrumb !== "string") return [];
  // Split by common breadcrumb separators: >, →, ›
  return breadcrumb
    .split(/\s*[>→›]\s*/)
    .map(s => s.trim())
    .filter(Boolean);
}

// ------------------ claims normalization ------------------
function normalizeClaimChecks(claims_to_validate) {
  if (!Array.isArray(claims_to_validate)) return [];
  return claims_to_validate.map((c, idx) => {
    const id = c?.id || c?.claim_id || `claim_${idx + 1}`;
    const text = c?.claim || c?.text || c?.statement || "";
    const url = c?.url || null;

    const selectors = []
      .concat(c?.selectors || [])
      .concat(c?.selector ? [c.selector] : [])
      .filter(Boolean);

    const expects_text = c?.expects_text || c?.expected_text || null;

    return { id, text, url, selectors, expects_text, raw: c };
  });
}

// ------------------ NEW: navigation tree flattening ------------------
/**
 * Flattens a navigation object-tree into an ordered list of pages:
 * - Any object that has a string `.path` is considered a page.
 * - We traverse deterministically by sorted keys.
 * - We also pick up `.sections` and `.sub_sections` patterns naturally because we traverse all objects.
 *
 * Returns: [{ key, title, path }]
 */
function flattenNavigationTree(navObj) {
  const pages = [];

  function walk(node, prefix = "") {
    if (!node) return;

    // If node itself is a page
    if (isPlainObject(node) && typeof node.path === "string" && node.path.trim()) {
      pages.push({
        key: prefix || "page",
        title: typeof node.title === "string" ? node.title : null,
        path: node.path.trim(),
      });
    }

    // Traverse children deterministically
    if (Array.isArray(node)) {
      node.forEach((child, i) => walk(child, `${prefix}[${i}]`));
      return;
    }

    if (isPlainObject(node)) {
      const keys = Object.keys(node).sort();
      for (const k of keys) {
        if (k === "path" || k === "title") continue; // already handled / metadata
        const child = node[k];
        // Avoid walking huge ui_elements blobs too deeply if they don't contain paths
        // (But still safe to walk; this short-circuits some noise.)
        if (k === "ui_elements") continue;
        walk(child, prefix ? `${prefix}.${k}` : k);
      }
    }
  }

  walk(navObj, "");
  // Deduplicate by path (keep first appearance for stable key/title)
  const seen = new Set();
  const deduped = [];
  for (const p of pages) {
    const token = p.path;
    if (seen.has(token)) continue;
    seen.add(token);
    deduped.push(p);
  }
  return deduped;
}

/**
 * Supports:
 * - navigation_paths as an ARRAY (old format)
 * - navigation_paths as an OBJECT TREE (your sample)
 * - Breadcrumb paths like "Settings > Payroll > Daily Wage" (converted to click sequences)
 *
 * IMPORTANT: Navigation paths are provided for CONTEXT and GUIDANCE only.
 * Actual system behavior may differ since Zendesk documentation can become
 * outdated as navigation menus change frequently. These paths should NOT be
 * considered as absolute truth but rather as context setters and guidance
 * for exploration. The validator will attempt to follow these paths but
 * gracefully handle cases where the UI has changed.
 *
 * Returns list of paths to check:
 * [{ name, steps: [{action:"navigate", url:"..."}, {action:"verify"...} ...] }]
 */
function normalizeNavigationPaths(navigation_paths, appBaseUrl) {
  // If array: handle strings (URLs or breadcrumbs)
  if (Array.isArray(navigation_paths)) {
    // String array - could be URLs or breadcrumbs
    if (typeof navigation_paths[0] === "string") {
      const steps = [];

      for (const item of navigation_paths) {
        if (isBreadcrumbPath(item)) {
          // Convert breadcrumb to click sequence
          const menuItems = parseBreadcrumb(item);
          steps.push({
            action: "click_sequence",
            name: item,
            menu_items: menuItems,
            original_breadcrumb: item
          });
        } else {
          // Regular URL navigation
          steps.push({ action: "navigate", url: item });
        }
      }

      return [{
        name: "navigation_urls",
        steps: steps,
      }];
    }

    // Step objects array (implicit path)
    if (navigation_paths[0] && typeof navigation_paths[0] === "object" && navigation_paths[0].action) {
      return [{ name: "navigation_path_1", steps: navigation_paths }];
    }

    // Path objects
    return navigation_paths.map((p, idx) => {
      const name = p?.name || p?.path_name || p?.title || `navigation_path_${idx + 1}`;
      const steps = p?.steps || p?.actions || p?.navigation_steps || [];
      return { name, steps: Array.isArray(steps) ? steps : [] };
    });
  }

  // If object-tree: flatten pages and create navigation checks
  if (isPlainObject(navigation_paths)) {
    const pages = flattenNavigationTree(navigation_paths);

    // Deterministic order:
    // 1) Sort by path, then key (stable)
    pages.sort((a, b) => (a.path.localeCompare(b.path) || a.key.localeCompare(b.key)));

    // Bound to MAX_NAV_PAGES (deterministic: take first N)
    const bounded = pages.slice(0, Math.max(0, MAX_NAV_PAGES));

    return [{
      name: "navigation_tree_pages",
      steps: bounded.map(p => ({
        action: "navigate",
        name: p.title ? `${p.title} (${p.path})` : p.path,
        url: joinUrl(appBaseUrl, p.path),
        meta: { key: p.key, title: p.title, path: p.path },
      })),
    }];
  }

  return [];
}

// ------------------ action executor ------------------
async function runStep(page, step, screenshotsDir, context) {
  const action = step?.action || step?.type || step?.op;
  const label = step?.name || step?.label || action || "step";

  const res = {
    action: action || "unknown",
    name: label,
    status: "fail",
    error: null,
    evidence: {},
  };

  try {
    if (!action) throw new Error("Missing step.action");

    if (action === "navigate") {
      const url = step.url || step.href;
      if (!url) throw new Error("navigate requires url");

      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: GOTO_TIMEOUT });
      const status = response ? response.status() : null;

      // Treat 4xx/5xx as failure (deterministic)
      if (typeof status === "number" && status >= 400) {
        throw new Error(`Navigation HTTP ${status} for ${url}`);
      }

      res.status = "pass";
      res.evidence.url = url;
      if (status !== null) res.evidence.http_status = status;
      if (step.meta) res.evidence.meta = step.meta;
      return res;
    }

    if (action === "click") {
      const selector = step.selector || step.target;
      if (!selector) throw new Error("click requires selector");
      await page.click(selector, { timeout: STEP_TIMEOUT });
      res.status = "pass";
      res.evidence.selector = selector;
      return res;
    }

    if (action === "type") {
      const selector = step.selector || step.target;
      const value = step.text ?? step.value ?? step.input;
      if (!selector) throw new Error("type requires selector");
      await page.fill(selector, safeString(value), { timeout: STEP_TIMEOUT });
      res.status = "pass";
      res.evidence.selector = selector;
      return res;
    }

    if (action === "press") {
      const selector = step.selector || step.target;
      const key = step.key;
      if (!selector) throw new Error("press requires selector");
      if (!key) throw new Error("press requires key");
      await page.press(selector, key, { timeout: STEP_TIMEOUT });
      res.status = "pass";
      res.evidence.selector = selector;
      res.evidence.key = key;
      return res;
    }

    if (action === "wait_for_selector") {
      const selector = step.selector || step.target;
      if (!selector) throw new Error("wait_for_selector requires selector");
      await page.waitForSelector(selector, { timeout: STEP_TIMEOUT });
      res.status = "pass";
      res.evidence.selector = selector;
      return res;
    }

    if (action === "verify") {
      const selector = step.selector || step.target;
      const text = step.text ?? step.expects_text ?? step.expected_text ?? null;
      if (!selector) throw new Error("verify requires selector");
      const el = await page.waitForSelector(selector, { timeout: STEP_TIMEOUT });
      if (text !== null) {
        const content = safeString(await el.textContent());
        if (!content.includes(safeString(text))) {
          throw new Error(`Text mismatch. Expected contains "${text}", got "${content}"`);
        }
      }
      res.status = "pass";
      res.evidence.selector = selector;
      if (text !== null) res.evidence.expected_text = text;
      return res;
    }

    if (action === "screenshot") {
      const shotLabel = step.name || step.label || `${context?.pathName || "path"}_${label}`;
      const screenshot = await saveScreenshot(page, screenshotsDir, shotLabel);
      res.status = "pass";
      res.evidence.screenshot = screenshot;
      return res;
    }

    if (action === "click_sequence") {
      // Click through a breadcrumb navigation sequence
      // e.g., "Settings > Payroll > Daily Wage" → click Settings, click Payroll, click Daily Wage
      //
      // NOTE: These navigation paths are from Zendesk documentation and serve as
      // GUIDANCE only. The actual UI may have changed. We attempt best-effort navigation.
      const menuItems = step.menu_items || [];
      const originalBreadcrumb = step.original_breadcrumb || step.name || "unknown";

      if (!menuItems.length) {
        throw new Error(`click_sequence requires menu_items array, got: ${originalBreadcrumb}`);
      }

      res.evidence.breadcrumb = originalBreadcrumb;
      res.evidence.menu_items = menuItems;
      res.evidence.clicked = [];
      res.evidence.caveat = "Navigation paths are from Zendesk docs (guidance only). Actual UI may differ.";

      for (let i = 0; i < menuItems.length; i++) {
        const menuText = menuItems[i];

        // Try multiple strategies to find and click the menu item
        let clicked = false;

        // Strategy 1: Look for exact text match in clickable elements
        const clickableSelectors = [
          `a:has-text("${menuText}")`,
          `button:has-text("${menuText}")`,
          `[role="menuitem"]:has-text("${menuText}")`,
          `[role="tab"]:has-text("${menuText}")`,
          `[role="link"]:has-text("${menuText}")`,
          `li:has-text("${menuText}")`,
          `span:has-text("${menuText}")`,
          `div[class*="menu"]:has-text("${menuText}")`,
          `div[class*="nav"]:has-text("${menuText}")`,
        ];

        for (const selector of clickableSelectors) {
          try {
            const element = page.locator(selector).first();
            if (await element.isVisible({ timeout: 2000 })) {
              await element.click({ timeout: STEP_TIMEOUT });
              clicked = true;
              res.evidence.clicked.push({ item: menuText, selector, success: true });
              // Wait for navigation/animation after click
              await page.waitForTimeout(1000);
              break;
            }
          } catch {
            // Try next selector
          }
        }

        // Strategy 2: Use getByRole with name
        if (!clicked) {
          try {
            const roleElement = page.getByRole("link", { name: menuText }).or(
              page.getByRole("button", { name: menuText })
            ).or(
              page.getByRole("menuitem", { name: menuText })
            ).or(
              page.getByRole("tab", { name: menuText })
            ).first();

            if (await roleElement.isVisible({ timeout: 2000 })) {
              await roleElement.click({ timeout: STEP_TIMEOUT });
              clicked = true;
              res.evidence.clicked.push({ item: menuText, method: "getByRole", success: true });
              await page.waitForTimeout(1000);
            }
          } catch {
            // Continue to next strategy
          }
        }

        // Strategy 3: Use getByText with exact match
        if (!clicked) {
          try {
            const textElement = page.getByText(menuText, { exact: true }).first();
            if (await textElement.isVisible({ timeout: 2000 })) {
              await textElement.click({ timeout: STEP_TIMEOUT });
              clicked = true;
              res.evidence.clicked.push({ item: menuText, method: "getByText-exact", success: true });
              await page.waitForTimeout(1000);
            }
          } catch {
            // Continue to next strategy
          }
        }

        // Strategy 4: Use getByText with partial match
        if (!clicked) {
          try {
            const partialTextElement = page.getByText(menuText).first();
            if (await partialTextElement.isVisible({ timeout: 2000 })) {
              await partialTextElement.click({ timeout: STEP_TIMEOUT });
              clicked = true;
              res.evidence.clicked.push({ item: menuText, method: "getByText-partial", success: true });
              await page.waitForTimeout(1000);
            }
          } catch {
            // Continue to error
          }
        }

        if (!clicked) {
          res.evidence.clicked.push({ item: menuText, success: false, error: "Element not found" });
          throw new Error(`Could not find clickable element for menu item: "${menuText}" in breadcrumb: ${originalBreadcrumb}`);
        }
      }

      // All menu items clicked successfully
      res.status = "pass";
      return res;
    }

    throw new Error(`Unsupported action: ${action}`);
  } catch (e) {
    res.error = safeString(e?.message || e);
    res.evidence.screenshot = await saveScreenshot(
      page,
      screenshotsDir,
      `${context?.pathName || "path"}_${label}_fail`
    );
    return res;
  }
}

// ------------------ UPDATED: deterministic login using your sample ------------------
async function attemptLoginFromNavigationSpec(page, app, navigation_paths, screenshotsDir) {
  const res = { status: "fail", error: null, evidence: {} };

  try {
    if (!app?.base_url || !app?.username || !app?.password) {
      throw new Error("Missing app.base_url / app.username / app.password");
    }

    // If spec contains authentication.login.path, use it; else base_url
    let loginPath = null;
    let loginTitle = null;

    if (isPlainObject(navigation_paths)) {
      loginPath = navigation_paths?.authentication?.login?.path || null;
      loginTitle = navigation_paths?.authentication?.login?.title || null;
    }

    const loginUrl = joinUrl(app.base_url, loginPath || "");
    await page.goto(loginUrl, { waitUntil: "domcontentloaded", timeout: GOTO_TIMEOUT });

    // If sample header exists, verify it (non-fatal if not found; but we record)
    // Sample:
    // title: "Welcome back"
    // subtitle: "Log in to Bayzat"
    const expectedTitle = navigation_paths?.authentication?.login?.ui_elements?.header?.title?.text || "Welcome back";
    const expectedSubtitle = navigation_paths?.authentication?.login?.ui_elements?.header?.subtitle?.text || "Log in to Bayzat";

    let headerChecks = { title_found: null, subtitle_found: null };
    try {
      headerChecks.title_found = await page.getByText(expectedTitle, { exact: false }).first().isVisible({ timeout: 2000 });
    } catch { headerChecks.title_found = false; }
    try {
      headerChecks.subtitle_found = await page.getByText(expectedSubtitle, { exact: false }).first().isVisible({ timeout: 2000 });
    } catch { headerChecks.subtitle_found = false; }

    // Use LABELS from your sample (deterministic)
    const emailLabel = navigation_paths?.authentication?.login?.ui_elements?.form?.email_field?.label || "Email address";
    const passwordLabel = navigation_paths?.authentication?.login?.ui_elements?.form?.password_field?.label || "Password";
    const loginButtonText = navigation_paths?.authentication?.login?.ui_elements?.actions?.primary?.text || "Log in";

    // Fill inputs - use specific selectors for reliability
    await page.getByLabel(emailLabel, { exact: false }).fill(app.username, { timeout: STEP_TIMEOUT });
    // Use input[type="password"] selector to avoid matching toggle buttons or switches
    await page.locator('input[type="password"]').fill(app.password, { timeout: STEP_TIMEOUT });

    // Click primary login button - use type="submit" to avoid matching social login buttons
    await page.locator('button[type="submit"]').click({ timeout: STEP_TIMEOUT });

    await page.waitForTimeout(1500);

    res.status = "pass";
    res.evidence = {
      login_url: loginUrl,
      login_title: loginTitle,
      header_checks: headerChecks,
      screenshot: await saveScreenshot(page, screenshotsDir, "post_login"),
    };
    return res;
  } catch (e) {
    res.error = safeString(e?.message || e);
    res.evidence.screenshot = await saveScreenshot(page, screenshotsDir, "login_fail");
    return res;
  }
}

// ------------------ main ------------------
(async () => {
  const startedAt = nowISO();
  let browser = null;

  const output = {
    status: "fail",
    executed_at: nowISO(),
    started_at: startedAt,
    feature_name: null,
    login: { status: "fail" },
    navigation_results: [],
    claim_ui_checks: [],
    summary: { total_steps: 0, passed_steps: 0, failed_steps: 0, screenshots: 0 },
    fatal_error: null,
    input_path: path.relative(ROOT, INPUT_PATH),
    output_path: path.relative(ROOT, OUT_PATH),
  };

  try {
    ensureDir(SCREENSHOTS_DIR);

    const input = readJSON(INPUT_PATH);
    output.feature_name = input?.feature_name || null;

    const appBaseUrl = input?.app?.base_url || "";
    const navigation_paths = input?.navigation_paths; // could be array OR object tree
    const normalizedNav = normalizeNavigationPaths(navigation_paths, appBaseUrl);
    const claims = normalizeClaimChecks(input?.claims_to_validate);

    browser = await chromium.launch({ headless: HEADLESS });
    const context = await browser.newContext();
    const page = await context.newPage();

    // 1) Login using your navigation spec (if present)
    output.login = await attemptLoginFromNavigationSpec(page, input?.app, navigation_paths, SCREENSHOTS_DIR);

    // 2) Navigation checks (deterministic, bounded)
    for (const navPath of normalizedNav) {
      const pathName = navPath.name || "navigation";
      const steps = Array.isArray(navPath.steps) ? navPath.steps : [];

      const pathResult = {
        name: pathName,
        status: "pass",
        steps: [],
      };

      for (const step of steps) {
        const stepRes = await runStep(page, step, SCREENSHOTS_DIR, { pathName });
        pathResult.steps.push(stepRes);
        if (stepRes.status !== "pass") pathResult.status = "fail";
      }

      const endShot = await saveScreenshot(page, SCREENSHOTS_DIR, `${pathName}_end`);
      if (endShot) {
        pathResult.steps.push({
          action: "screenshot",
          name: `${pathName}_end`,
          status: "pass",
          evidence: { screenshot: endShot },
          error: null,
        });
      }

      output.navigation_results.push(pathResult);
    }

    // 3) Claim UI checks (best-effort; unchanged)
    for (const c of claims) {
      const claimRes = {
        id: c.id,
        claim: c.text,
        status: "pass",
        checks: [],
      };

      try {
        if (c.url) {
          const nav = await runStep(
            page,
            { action: "navigate", url: c.url, name: `claim_${c.id}_navigate` },
            SCREENSHOTS_DIR,
            { pathName: `claim_${c.id}` }
          );
          claimRes.checks.push(nav);
          if (nav.status !== "pass") claimRes.status = "fail";
        }

        if (!c.selectors.length) {
          claimRes.status = "skipped_no_selectors";
        } else {
          for (const sel of c.selectors) {
            const verify = await runStep(
              page,
              { action: "verify", selector: sel, text: c.expects_text, name: `claim_${c.id}_verify` },
              SCREENSHOTS_DIR,
              { pathName: `claim_${c.id}` }
            );
            claimRes.checks.push(verify);
            if (verify.status !== "pass") claimRes.status = "fail";
          }
        }

        const shot = await saveScreenshot(page, SCREENSHOTS_DIR, `claim_${c.id}`);
        if (shot) {
          claimRes.checks.push({
            action: "screenshot",
            name: `claim_${c.id}`,
            status: "pass",
            evidence: { screenshot: shot },
            error: null,
          });
        }
      } catch (e) {
        claimRes.status = "fail";
        claimRes.error = safeString(e?.message || e);
      }

      output.claim_ui_checks.push(claimRes);
    }

    // 4) Summary + final status
    let total = 0,
      passed = 0,
      failed = 0;

    for (const p of output.navigation_results) {
      for (const s of p.steps) {
        total += 1;
        if (s.status === "pass") passed += 1;
        else failed += 1;
      }
    }

    // Count login as a step
    total += 1;
    if (output.login?.status === "pass") passed += 1;
    else failed += 1;

    const screenshotCount = (() => {
      try {
        return fs.readdirSync(SCREENSHOTS_DIR).filter((f) => f.toLowerCase().endsWith(".png")).length;
      } catch {
        return 0;
      }
    })();

    output.summary = {
      total_steps: total,
      passed_steps: passed,
      failed_steps: failed,
      screenshots: screenshotCount,
    };

    const anyNavFail = output.navigation_results.some((p) => p.status !== "pass");
    const anyClaimFail = output.claim_ui_checks.some((c) => c.status === "fail");
    const loginFail = output.login?.status !== "pass";

    output.status = loginFail || anyNavFail || anyClaimFail ? "fail" : "pass";
  } catch (e) {
    output.fatal_error = safeString(e?.message || e);
    output.status = "fail";
  } finally {
    if (browser) await browser.close().catch(() => {});
    writeOutput(OUT_PATH, output);
    console.log(`✅ Playwright results written to ${OUT_PATH}`);
    if (output.status !== "pass") process.exit(1);
  }
})();
