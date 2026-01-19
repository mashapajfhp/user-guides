# Validation Report: bayzat_ai

**Generated**: 2026-01-19T13:05:15Z
**Run ID**: 21138354504

## Result

```json
{
  "validation_status": "blocked",
  "login_success": false,
  "feature_accessible": false,
  "feature_info": {
    "name": "Bayzat AI",
    "slug": "bayzat-ai",
    "category": "ai",
    "url": "/ai"
  },
  "exploration_journey": [
    {
      "screen_name": "Login Page",
      "url": "https://app.bayzat.com/",
      "screenshot": "fresh-login-page-2026-01-19T13-04-24-853Z.png",
      "what_i_went_through": "Attempted to access the Bayzat application login page to begin feature validation. Navigated to the base URL https://app.bayzat.com/.",
      "what_i_came_across": "A login form with email and password fields, along with alternative login options (Google, Microsoft) and a 'Log in without password' magic link option.",
      "what_i_saw": {
        "page_structure": "The page has a two-column layout with the login form on the left and a promotional banner for Smart Invoice Management on the right.",
        "visible_elements": [
          "Email address input field",
          "Password input field",
          "Log in button",
          "Log in with Google button",
          "Log in with Microsoft button",
          "Log in without password link",
          "Keep me logged in checkbox",
          "Forgot password link",
          "Sign up link",
          "Promotional banner for Smart Invoice Management"
        ],
        "data_displayed": "Login form fields and authentication options",
        "empty_states": "N/A - login page with form fields"
      },
      "actions_i_performed": [
        {
          "action": "Attempted to fill email field using multiple methods",
          "target": "Email input field (input[type='email'], #email, input[placeholder='Email address'])",
          "result": "Failed - Playwright could not locate or interact with the email input field. Multiple selector strategies attempted including by type, ID, placeholder, and JavaScript evaluation.",
          "screenshot_after": "N/A"
        },
        {
          "action": "Attempted to fill password field using multiple methods",
          "target": "Password input field (input[type='password'], #password, input[placeholder='Password'])",
          "result": "Failed - Playwright could not locate or interact with the password input field despite visible presence in screenshots.",
          "screenshot_after": "N/A"
        },
        {
          "action": "Attempted JavaScript evaluation to programmatically fill and submit form",
          "target": "Login form inputs and submit button",
          "result": "Failed - JavaScript evaluate function consistently returned undefined, suggesting potential issues with page JavaScript execution context or timing.",
          "screenshot_after": "N/A"
        },
        {
          "action": "Browser restart and fresh navigation",
          "target": "Entire browser instance",
          "result": "Attempted to resolve interaction issues by closing browser and reopening with networkidle wait condition, but login interaction remained blocked.",
          "screenshot_after": "fresh-login-page-2026-01-19T13-04-24-853Z.png"
        }
      ],
      "results_i_got": {
        "success_outcomes": [],
        "error_outcomes": [
          "Timeout errors when attempting to locate email input field (30000ms exceeded)",
          "Timeout errors when attempting to locate password input field (30000ms exceeded)",
          "JavaScript evaluate() function returning undefined consistently",
          "Unable to interact with form elements despite visual confirmation in screenshots",
          "Login could not be completed, blocking access to the Bayzat AI feature"
        ],
        "unexpected_behaviors": [
          "Form elements visible in screenshots but not detectable by Playwright selectors",
          "JavaScript context appears to be isolated or restricted",
          "React application appears to load (confirmed via DOM inspection) but form elements remain inaccessible to automation"
        ]
      }
    }
  ],
  "tasks_explored": [],
  "full_behavior_catalog": {
    "buttons": [
      {
        "label": "Log in",
        "location": "Login form, below password field",
        "state": "Unable to determine - not accessible via automation",
        "action_result": "Could not test - form submission blocked"
      },
      {
        "label": "Log in with Google",
        "location": "Login form, below main Log in button",
        "state": "Visible",
        "action_result": "Not tested - attempting standard email/password login"
      },
      {
        "label": "Log in with Microsoft",
        "location": "Login form, below Google login",
        "state": "Visible",
        "action_result": "Not tested"
      }
    ],
    "dropdowns": [],
    "form_fields": [
      {
        "label": "Email address",
        "type": "email",
        "required": true,
        "placeholder": "Email address",
        "validation": "Unable to test",
        "error_message": "Unable to test"
      },
      {
        "label": "Password",
        "type": "password",
        "required": true,
        "placeholder": "Password",
        "validation": "Unable to test",
        "error_message": "Unable to test"
      }
    ],
    "tabs": [],
    "modals_dialogs": [],
    "tables": [],
    "filters": [],
    "notifications_alerts": []
  },
  "ui_behaviors_documented": {
    "disabled_states": [],
    "conditional_logic": [],
    "progressive_disclosure": [],
    "required_fields": [
      "Email address",
      "Password"
    ],
    "optional_fields": [
      "Keep me logged in checkbox"
    ],
    "default_values": [],
    "validation_rules": [],
    "tooltips_help_text": []
  },
  "what_works": [],
  "what_made_it_work": [],
  "whats_not_working": [
    {
      "issue": "Login form interaction completely blocked",
      "symptoms": "Playwright unable to locate or interact with email and password input fields despite their visible presence in screenshots. All selector strategies failed including CSS selectors, ID selectors, placeholder selectors, and JavaScript evaluation.",
      "impact": "Complete validation blockage - cannot access the Bayzat application to explore the Bayzat AI feature. All subsequent validation tasks depend on successful login.",
      "possible_cause": "Potential causes: (1) Shadow DOM or iframe encapsulation preventing direct element access, (2) Dynamic rendering timing issues where elements appear visually but aren't in the DOM accessibility tree, (3) React app hydration delays, (4) JavaScript execution context isolation, (5) Anti-automation protections on the login form"
    },
    {
      "issue": "JavaScript evaluate() function returning undefined",
      "symptoms": "All JavaScript code executed via playwright_evaluate returns undefined, including simple queries like document.querySelector() and DOM inspection code.",
      "impact": "Unable to use JavaScript-based workarounds or debugging approaches to identify and resolve the form interaction issues.",
      "possible_cause": "Browser context restrictions, Content Security Policy blocking script execution, or Playwright browser context configuration issues"
    }
  ],
  "ui_sections_explored": [
    "Login Page"
  ],
  "issues_found": [
    "Login form automation blocked - cannot interact with email/password fields",
    "JavaScript evaluation context issues - evaluate() consistently returns undefined",
    "Playwright selectors unable to locate visible form elements",
    "Validation cannot proceed beyond login page"
  ],
  "known_issues_validated": [
    {
      "issue": "Bayzat AI Report generation error - cannot generate complex, multi-field reports",
      "status": "not_validated",
      "evidence": "Unable to validate - blocked at login stage before reaching AI Reports feature"
    }
  ],
  "screenshots_taken": 5,
  "validation_timestamp": "2026-01-19T13:04:24.853Z",
  "recommendations_for_user_guide": [
    "User guide cannot be generated from this validation due to login blockage",
    "Alternative validation approach needed: Manual exploration with screen recordings, use of authenticated session cookies, or investigation of anti-automation protections",
    "Consider using browser DevTools to inspect Shadow DOM or iframe structures that may be encapsulating login form",
    "Review Playwright configuration for potential CSP or JavaScript execution context issues",
    "Test with alternative automation frameworks (Selenium, Puppeteer) to determine if issue is Playwright-specific"
  ],
  "summary": "Validation of the Bayzat AI feature was completely blocked at the login stage. Despite successfully navigating to the login page and visually confirming the presence of email and password input fields in screenshots, Playwright was unable to interact with these form elements using any selector strategy (CSS selectors, ID selectors, placeholder text, or JavaScript evaluation). All attempts to fill the form fields resulted in timeout errors after 30 seconds. JavaScript evaluate() function consistently returned undefined for all queries, preventing JavaScript-based workarounds. Multiple approaches were attempted including direct selector filling, JavaScript DOM manipulation, form submission via evaluate(), browser restarts, and different wait conditions, but none succeeded. The root cause appears to be either Shadow DOM/iframe encapsulation, JavaScript execution context isolation, anti-automation protections, or dynamic rendering timing issues. Without successful login, no exploration of the Bayzat AI feature (AI Dashboards, AI Reports) could be performed. This represents a critical blocker requiring investigation of the login page's DOM structure, Playwright configuration, and potential anti-automation measures before feature validation can proceed.",
  "payload_context": {
    "what_to_watch_out_for": [
      {
        "issue": "Bayzat AI Report generation error",
        "limitation": "The AI report builder cannot generate complex, multi-field reports that aggregate data across different platform modules such as Payroll and Leave Management.",
        "workaround": "Users must manually compile reports by extracting data separately from multiple sources.",
        "jira_reference": "TSSD-4906",
        "severity": "medium"
      }
    ],
    "what_to_do": [
      {
        "task": "Create and manage AI Dashboards",
        "steps": [
          "Access pre-built HR dashboard",
          "Create new dashboards by clicking 'New Dashboard'",
          "Enter natural language query to add insights",
          "Choose visualization format for dashboard tiles",
          "Save dashboard tile",
          "Rename or delete dashboard tiles",
          "Rearrange dashboard layout",
          "Search dashboards",
          "Refresh dashboards manually or wait for weekly refresh"
        ],
        "expected_outcome": "Users can create, customize, and manage AI dashboards with insights visualized in chosen formats, with tiles auto-arranged for a clean layout.",
        "source_articles": [
          "36749794201617"
        ]
      },
      {
        "task": "Generate and use AI Reports",
        "steps": [
          "Access AI Reports via dashboard menu",
          "Use pre-built reports or create custom reports using input bar",
          "Apply filters such as date ranges, employee filters, or departments",
          "Generate report",
          "Review report",
          "Download or save report data or images"
        ],
        "expected_outcome": "Users can generate AI reports with specific queries and filters, review results, and download or save reports. Feature is currently in beta with ongoing enhancements.",
        "source_articles": [
          "36719362970257"
        ]
      }
    ],
    "feature_info": {
      "feature_name": "bayzat_ai",
      "feature_slug": "bayzat-ai",
      "next_version": "v2"
    },
    "detected_integrations": {
      "has_workflows": null,
      "workflow_evidence": "No evidence found",
      "has_approval_flow": null,
      "approval_evidence": "No evidence found"
    },
    "limitations_count": 1,
    "tasks_count": 2
  },
  "what_to_watch_out_for": [
    {
      "issue": "Bayzat AI Report generation error",
      "limitation": "The AI report builder cannot generate complex, multi-field reports that aggregate data across different platform modules such as Payroll and Leave Management.",
      "workaround": "Users must manually compile reports by extracting data separately from multiple sources.",
      "jira_reference": "TSSD-4906",
      "severity": "medium"
    }
  ],
  "what_to_do": [
    {
      "task": "Create and manage AI Dashboards",
      "steps": [
        "Access pre-built HR dashboard",
        "Create new dashboards by clicking 'New Dashboard'",
        "Enter natural language query to add insights",
        "Choose visualization format for dashboard tiles",
        "Save dashboard tile",
        "Rename or delete dashboard tiles",
        "Rearrange dashboard layout",
        "Search dashboards",
        "Refresh dashboards manually or wait for weekly refresh"
      ],
      "expected_outcome": "Users can create, customize, and manage AI dashboards with insights visualized in chosen formats, with tiles auto-arranged for a clean layout.",
      "source_articles": [
        "36749794201617"
      ]
    },
    {
      "task": "Generate and use AI Reports",
      "steps": [
        "Access AI Reports via dashboard menu",
        "Use pre-built reports or create custom reports using input bar",
        "Apply filters such as date ranges, employee filters, or departments",
        "Generate report",
        "Review report",
        "Download or save report data or images"
      ],
      "expected_outcome": "Users can generate AI reports with specific queries and filters, review results, and download or save reports. Feature is currently in beta with ongoing enhancements.",
      "source_articles": [
        "36719362970257"
      ]
    }
  ]
}```

## Screenshots

### 01 dashboard after login.png 2026 01 19T12 18 35 135Z

![01-dashboard-after-login.png-2026-01-19T12-18-35-135Z.png](screenshots/01-dashboard-after-login.png-2026-01-19T12-18-35-135Z.png)

### 01 login page 2026 01 19T10 36 04 074Z

![01-login-page-2026-01-19T10-36-04-074Z.png](screenshots/01-login-page-2026-01-19T10-36-04-074Z.png)

### 01 login page 2026 01 19T11 44 36 767Z

![01-login-page-2026-01-19T11-44-36-767Z.png](screenshots/01-login-page-2026-01-19T11-44-36-767Z.png)

### 01 login page 2026 01 19T12 00 35 461Z

![01-login-page-2026-01-19T12-00-35-461Z.png](screenshots/01-login-page-2026-01-19T12-00-35-461Z.png)

### 01 login page 2026 01 19T12 48 13 226Z

![01-login-page-2026-01-19T12-48-13-226Z.png](screenshots/01-login-page-2026-01-19T12-48-13-226Z.png)

### 02 after login 2026 01 19T10 36 26 433Z

![02-after-login-2026-01-19T10-36-26-433Z.png](screenshots/02-after-login-2026-01-19T10-36-26-433Z.png)

### 02 after login 2026 01 19T11 44 57 919Z

![02-after-login-2026-01-19T11-44-57-919Z.png](screenshots/02-after-login-2026-01-19T11-44-57-919Z.png)

### 02 dashboard before dismissal 2026 01 19T12 49 14 883Z

![02-dashboard-before-dismissal-2026-01-19T12-49-14-883Z.png](screenshots/02-dashboard-before-dismissal-2026-01-19T12-49-14-883Z.png)

### 02 home dashboard.png 2026 01 19T12 19 47 189Z

![02-home-dashboard.png-2026-01-19T12-19-47-189Z.png](screenshots/02-home-dashboard.png-2026-01-19T12-19-47-189Z.png)

### 02 page after wait 2026 01 19T12 01 29 537Z

![02-page-after-wait-2026-01-19T12-01-29-537Z.png](screenshots/02-page-after-wait-2026-01-19T12-01-29-537Z.png)

### 03 after login attempt 2026 01 19T12 03 27 088Z

![03-after-login-attempt-2026-01-19T12-03-27-088Z.png](screenshots/03-after-login-attempt-2026-01-19T12-03-27-088Z.png)

### 03 bayzat ai landing.png 2026 01 19T12 19 58 132Z

![03-bayzat-ai-landing.png-2026-01-19T12-19-58-132Z.png](screenshots/03-bayzat-ai-landing.png-2026-01-19T12-19-58-132Z.png)

### 03 clean dashboard 2026 01 19T11 45 10 809Z

![03-clean-dashboard-2026-01-19T11-45-10-809Z.png](screenshots/03-clean-dashboard-2026-01-19T11-45-10-809Z.png)

### 03 dashboard after dismissal 2026 01 19T12 49 41 237Z

![03-dashboard-after-dismissal-2026-01-19T12-49-41-237Z.png](screenshots/03-dashboard-after-dismissal-2026-01-19T12-49-41-237Z.png)

### 03 dashboard clean 2026 01 19T10 36 40 930Z

![03-dashboard-clean-2026-01-19T10-36-40-930Z.png](screenshots/03-dashboard-clean-2026-01-19T10-36-40-930Z.png)

### 04 bayzat ai main 2026 01 19T10 37 00 085Z

![04-bayzat-ai-main-2026-01-19T10-37-00-085Z.png](screenshots/04-bayzat-ai-main-2026-01-19T10-37-00-085Z.png)

### 04 bayzat ai main page 2026 01 19T12 49 55 299Z

![04-bayzat-ai-main-page-2026-01-19T12-49-55-299Z.png](screenshots/04-bayzat-ai-main-page-2026-01-19T12-49-55-299Z.png)

### 04 bayzat ai main page.png 2026 01 19T12 20 09 308Z

![04-bayzat-ai-main-page.png-2026-01-19T12-20-09-308Z.png](screenshots/04-bayzat-ai-main-page.png-2026-01-19T12-20-09-308Z.png)

### 04 bayzat ai page 2026 01 19T11 46 03 245Z

![04-bayzat-ai-page-2026-01-19T11-46-03-245Z.png](screenshots/04-bayzat-ai-page-2026-01-19T11-46-03-245Z.png)

### 04 fresh login page 2026 01 19T12 04 08 127Z

![04-fresh-login-page-2026-01-19T12-04-08-127Z.png](screenshots/04-fresh-login-page-2026-01-19T12-04-08-127Z.png)

### 05 after login 2026 01 19T12 05 21 160Z

![05-after-login-2026-01-19T12-05-21-160Z.png](screenshots/05-after-login-2026-01-19T12-05-21-160Z.png)

### 05 bayzat ai main page 2026 01 19T11 46 26 759Z

![05-bayzat-ai-main-page-2026-01-19T11-46-26-759Z.png](screenshots/05-bayzat-ai-main-page-2026-01-19T11-46-26-759Z.png)

### 05 current view 2026 01 19T10 38 46 142Z

![05-current-view-2026-01-19T10-38-46-142Z.png](screenshots/05-current-view-2026-01-19T10-38-46-142Z.png)

### 05 insights page 2026 01 19T12 50 27 327Z

![05-insights-page-2026-01-19T12-50-27-327Z.png](screenshots/05-insights-page-2026-01-19T12-50-27-327Z.png)

### 05 insights section.png 2026 01 19T12 21 18 547Z

![05-insights-section.png-2026-01-19T12-21-18-547Z.png](screenshots/05-insights-section.png-2026-01-19T12-21-18-547Z.png)

### 06 after insights click.png 2026 01 19T12 21 45 387Z

![06-after-insights-click.png-2026-01-19T12-21-45-387Z.png](screenshots/06-after-insights-click.png-2026-01-19T12-21-45-387Z.png)

### 06 ai reports page 2026 01 19T12 50 44 358Z

![06-ai-reports-page-2026-01-19T12-50-44-358Z.png](screenshots/06-ai-reports-page-2026-01-19T12-50-44-358Z.png)

### 06 bayzat ai knowledge hub 2026 01 19T11 46 42 668Z

![06-bayzat-ai-knowledge-hub-2026-01-19T11-46-42-668Z.png](screenshots/06-bayzat-ai-knowledge-hub-2026-01-19T11-46-42-668Z.png)

### 06 dashboard after login 2026 01 19T12 05 52 389Z

![06-dashboard-after-login-2026-01-19T12-05-52-389Z.png](screenshots/06-dashboard-after-login-2026-01-19T12-05-52-389Z.png)

### 06 insights page 2026 01 19T10 39 04 100Z

![06-insights-page-2026-01-19T10-39-04-100Z.png](screenshots/06-insights-page-2026-01-19T10-39-04-100Z.png)

### 07 ai reports dashboards clean 2026 01 19T12 50 58 728Z

![07-ai-reports-dashboards-clean-2026-01-19T12-50-58-728Z.png](screenshots/07-ai-reports-dashboards-clean-2026-01-19T12-50-58-728Z.png)

### 07 ai reports page 2026 01 19T10 39 16 727Z

![07-ai-reports-page-2026-01-19T10-39-16-727Z.png](screenshots/07-ai-reports-page-2026-01-19T10-39-16-727Z.png)

### 07 chat with documents modal 2026 01 19T11 46 57 346Z

![07-chat-with-documents-modal-2026-01-19T11-46-57-346Z.png](screenshots/07-chat-with-documents-modal-2026-01-19T11-46-57-346Z.png)

### 07 clean dashboard 2026 01 19T12 06 22 194Z

![07-clean-dashboard-2026-01-19T12-06-22-194Z.png](screenshots/07-clean-dashboard-2026-01-19T12-06-22-194Z.png)

### 07 upload and chat.png 2026 01 19T12 22 01 245Z

![07-upload-and-chat.png-2026-01-19T12-22-01-245Z.png](screenshots/07-upload-and-chat.png-2026-01-19T12-22-01-245Z.png)

### 08 bayzat ai main page 2026 01 19T12 06 37 450Z

![08-bayzat-ai-main-page-2026-01-19T12-06-37-450Z.png](screenshots/08-bayzat-ai-main-page-2026-01-19T12-06-37-450Z.png)

### 08 bayzat ai scrolled.png 2026 01 19T12 22 13 521Z

![08-bayzat-ai-scrolled.png-2026-01-19T12-22-13-521Z.png](screenshots/08-bayzat-ai-scrolled.png-2026-01-19T12-22-13-521Z.png)

### 08 hr dashboard view 2026 01 19T12 51 08 280Z

![08-hr-dashboard-view-2026-01-19T12-51-08-280Z.png](screenshots/08-hr-dashboard-view-2026-01-19T12-51-08-280Z.png)

### 08 insights menu 2026 01 19T11 47 19 713Z

![08-insights-menu-2026-01-19T11-47-19-713Z.png](screenshots/08-insights-menu-2026-01-19T11-47-19-713Z.png)

### 08 new dashboard modal 2026 01 19T10 40 03 876Z

![08-new-dashboard-modal-2026-01-19T10-40-03-876Z.png](screenshots/08-new-dashboard-modal-2026-01-19T10-40-03-876Z.png)

### 09 add insight modal 2026 01 19T12 51 24 770Z

![09-add-insight-modal-2026-01-19T12-51-24-770Z.png](screenshots/09-add-insight-modal-2026-01-19T12-51-24-770Z.png)

### 09 dashboard name filled 2026 01 19T10 41 25 787Z

![09-dashboard-name-filled-2026-01-19T10-41-25-787Z.png](screenshots/09-dashboard-name-filled-2026-01-19T10-41-25-787Z.png)

### 09 insights menu 2026 01 19T12 07 04 519Z

![09-insights-menu-2026-01-19T12-07-04-519Z.png](screenshots/09-insights-menu-2026-01-19T12-07-04-519Z.png)

### 09 insights menu.png 2026 01 19T12 22 36 247Z

![09-insights-menu.png-2026-01-19T12-22-36-247Z.png](screenshots/09-insights-menu.png-2026-01-19T12-22-36-247Z.png)

### 09 insights submenu 2026 01 19T11 47 31 054Z

![09-insights-submenu-2026-01-19T11-47-31-054Z.png](screenshots/09-insights-submenu-2026-01-19T11-47-31-054Z.png)

### 10 ai reports page 2026 01 19T11 47 44 836Z

![10-ai-reports-page-2026-01-19T11-47-44-836Z.png](screenshots/10-ai-reports-page-2026-01-19T11-47-44-836Z.png)

### 10 daily tasks clicked.png 2026 01 19T12 23 29 571Z

![10-daily-tasks-clicked.png-2026-01-19T12-23-29-571Z.png](screenshots/10-daily-tasks-clicked.png-2026-01-19T12-23-29-571Z.png)

### 10 dashboard created 2026 01 19T10 41 37 195Z

![10-dashboard-created-2026-01-19T10-41-37-195Z.png](screenshots/10-dashboard-created-2026-01-19T10-41-37-195Z.png)

### 10 insights page 2026 01 19T12 07 47 048Z

![10-insights-page-2026-01-19T12-07-47-048Z.png](screenshots/10-insights-page-2026-01-19T12-07-47-048Z.png)

### 11 add insight modal 2026 01 19T10 41 49 370Z

![11-add-insight-modal-2026-01-19T10-41-49-370Z.png](screenshots/11-add-insight-modal-2026-01-19T10-41-49-370Z.png)

### 11 hr dashboard view 2026 01 19T11 48 09 275Z

![11-hr-dashboard-view-2026-01-19T11-48-09-275Z.png](screenshots/11-hr-dashboard-view-2026-01-19T11-48-09-275Z.png)

### 11 insights main page 2026 01 19T12 08 09 872Z

![11-insights-main-page-2026-01-19T12-08-09-872Z.png](screenshots/11-insights-main-page-2026-01-19T12-08-09-872Z.png)

### 11 spaces section.png 2026 01 19T12 23 46 598Z

![11-spaces-section.png-2026-01-19T12-23-46-598Z.png](screenshots/11-spaces-section.png-2026-01-19T12-23-46-598Z.png)

### 12 back to bayzat ai 2026 01 19T12 08 28 917Z

![12-back-to-bayzat-ai-2026-01-19T12-08-28-917Z.png](screenshots/12-back-to-bayzat-ai-2026-01-19T12-08-28-917Z.png)

### 12 final bayzat ai view.png 2026 01 19T12 24 03 322Z

![12-final-bayzat-ai-view.png-2026-01-19T12-24-03-322Z.png](screenshots/12-final-bayzat-ai-view.png-2026-01-19T12-24-03-322Z.png)

### 12 help dialog 2026 01 19T10 43 11 535Z

![12-help-dialog-2026-01-19T10-43-11-535Z.png](screenshots/12-help-dialog-2026-01-19T10-43-11-535Z.png)

### 12 hr dashboard detail 2026 01 19T11 48 21 528Z

![12-hr-dashboard-detail-2026-01-19T11-48-21-528Z.png](screenshots/12-hr-dashboard-detail-2026-01-19T11-48-21-528Z.png)

### 13 add insight modal 2026 01 19T11 48 39 700Z

![13-add-insight-modal-2026-01-19T11-48-39-700Z.png](screenshots/13-add-insight-modal-2026-01-19T11-48-39-700Z.png)

### 13 back to dashboard 2026 01 19T10 43 26 328Z

![13-back-to-dashboard-2026-01-19T10-43-26-328Z.png](screenshots/13-back-to-dashboard-2026-01-19T10-43-26-328Z.png)

### 13 upload chat interface 2026 01 19T12 08 50 913Z

![13-upload-chat-interface-2026-01-19T12-08-50-913Z.png](screenshots/13-upload-chat-interface-2026-01-19T12-08-50-913Z.png)

### 14 after closing modal 2026 01 19T11 49 36 431Z

![14-after-closing-modal-2026-01-19T11-49-36-431Z.png](screenshots/14-after-closing-modal-2026-01-19T11-49-36-431Z.png)

### 14 back to ai reports main 2026 01 19T10 45 27 135Z

![14-back-to-ai-reports-main-2026-01-19T10-45-27-135Z.png](screenshots/14-back-to-ai-reports-main-2026-01-19T10-45-27-135Z.png)

### 14 search opened 2026 01 19T12 09 12 793Z

![14-search-opened-2026-01-19T12-09-12-793Z.png](screenshots/14-search-opened-2026-01-19T12-09-12-793Z.png)

### 15 final bayzat ai view 2026 01 19T12 09 39 636Z

![15-final-bayzat-ai-view-2026-01-19T12-09-39-636Z.png](screenshots/15-final-bayzat-ai-view-2026-01-19T12-09-39-636Z.png)

### 15 reports tab 2026 01 19T10 45 41 378Z

![15-reports-tab-2026-01-19T10-45-41-378Z.png](screenshots/15-reports-tab-2026-01-19T10-45-41-378Z.png)

### 15 reports tab 2026 01 19T11 49 54 738Z

![15-reports-tab-2026-01-19T11-49-54-738Z.png](screenshots/15-reports-tab-2026-01-19T11-49-54-738Z.png)

### 16 report generated 2026 01 19T10 45 57 413Z

![16-report-generated-2026-01-19T10-45-57-413Z.png](screenshots/16-report-generated-2026-01-19T10-45-57-413Z.png)

### 16 report generation complete 2026 01 19T11 50 09 886Z

![16-report-generation-complete-2026-01-19T11-50-09-886Z.png](screenshots/16-report-generation-complete-2026-01-19T11-50-09-886Z.png)

### 17 report complete 2026 01 19T10 46 08 093Z

![17-report-complete-2026-01-19T10-46-08-093Z.png](screenshots/17-report-complete-2026-01-19T10-46-08-093Z.png)

### 18 report loading status 2026 01 19T10 46 21 035Z

![18-report-loading-status-2026-01-19T10-46-21-035Z.png](screenshots/18-report-loading-status-2026-01-19T10-46-21-035Z.png)

### after login attempt 2026 01 19T13 01 35 338Z

![after-login-attempt-2026-01-19T13-01-35-338Z.png](screenshots/after-login-attempt-2026-01-19T13-01-35-338Z.png)

### current state 2026 01 19T13 03 32 565Z

![current-state-2026-01-19T13-03-32-565Z.png](screenshots/current-state-2026-01-19T13-03-32-565Z.png)

### fresh login page 2026 01 19T13 04 24 853Z

![fresh-login-page-2026-01-19T13-04-24-853Z.png](screenshots/fresh-login-page-2026-01-19T13-04-24-853Z.png)

### login page 2026 01 19T12 59 57 422Z

![login-page-2026-01-19T12-59-57-422Z.png](screenshots/login-page-2026-01-19T12-59-57-422Z.png)

### login status check 2026 01 19T13 01 54 505Z

![login-status-check-2026-01-19T13-01-54-505Z.png](screenshots/login-status-check-2026-01-19T13-01-54-505Z.png)


**Total screenshots captured**: 75
