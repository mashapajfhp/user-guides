<div class="content-area" role="main" aria-label="User guide content">

<div id="feature-overview" class="section section section-feature-overview">

<div class="section-header">

## What is Multi-factor Authentication?

</div>

<div class="section-body">

<div class="subsection">

### Overview

Multi-factor Authentication (MFA) adds a second layer of security to your Bayzat account by requiring a time-based one-time password (TOTP) from an authenticator app in addition to your regular password. Access MFA settings through your Profile avatar (top-right) → Security settings.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/multifactor-authentication/v1/validation/screenshots/02-security-settings-page.png" class="screenshot" loading="lazy" alt="Security settings page showing MFA and Password sections" />
<figcaption>Security settings page showing Multi-factor authentication and Password settings sections</figcaption>
</figure>

When MFA is enabled, every login requires both your password and a 6-digit code from your authenticator app. This protects your account even if your password is compromised.

</div>

<div class="subsection">

### Key Benefits

- Protect your account against unauthorized access even if your password is compromised
- Use any TOTP-compatible authenticator app (Google Authenticator, Authy, Microsoft Authenticator)
- Simple 3-step setup wizard with QR code scanning
- Per-user setting — each employee controls their own MFA independently
- Immediate activation upon completing setup

</div>

<div class="strategic-context">

<div class="strategic-header">

### Strategic Context

</div>

<div class="strategic-grid">

<div class="strategic-card">

#### What MFA Solves

Prevents unauthorized account access by requiring a second verification factor beyond passwords.

- Eliminates the risk of password-only authentication being compromised through phishing or data breaches
- Adds time-based verification that changes every 30 seconds, making stolen credentials useless without physical device access
- Provides account-level security that works independently of company-wide security policies

</div>

<div class="strategic-card">

#### Why It Matters

MFA is a critical security control for protecting sensitive HR and payroll data.

- Employees with access to financial data, payroll, or sensitive employee records benefit most from MFA
- Finance-critical roles may have mandatory MFA requirements enforced by the platform
- Reduces the attack surface for social engineering and credential theft

</div>

<div class="strategic-card">

#### How It Connects

MFA integrates with the login flow and security settings within the Profile section.

- Located under Profile → Security settings alongside Password settings
- Applies to all future logins immediately after activation
- No workflow automation triggers exist for MFA events — it operates as a standalone security control

</div>

</div>

</div>

<div class="subsection">

### Who Uses This Feature?

| User Role | What They Do | Value Proposition |
|----|----|----|
| **All Employees** | Enable MFA on their own account to add a second verification layer during login | Protect personal and company data from unauthorized access |
| **Finance-Critical Roles** | May be required to keep MFA enabled as a platform-enforced security policy | Mandatory protection for users with access to sensitive financial operations |
| **HR Administrators** | Enable MFA to secure access to employee records, payroll data, and configuration settings | Prevent unauthorized changes to employee data and payroll |
| **Super Admins** | Enable MFA to protect the highest-privilege account type on the platform | Secure full system access including company settings and role management |

</div>

</div>

</div>

<div id="product-foundation" class="section section section-product-foundation">

<div class="section-header">

## Product Foundation Overview

</div>

<div class="section-body">

<div class="subsection">

### How MFA Fits

MFA is a per-user security toggle found under Profile → Security settings. It is not a company-wide setting — each user independently decides whether to enable MFA on their account. Once enabled, every login requires a 6-digit TOTP code from an authenticator app in addition to the standard email and password.

<div class="info-box">

**Mental model:** Security Settings → Enable MFA → Scan QR Code → Verify Code → All Future Logins Require Authenticator App

</div>

MFA does not affect other users when one person enables it. Each account's MFA status is independent. Password changes do not disable MFA.

</div>

<div class="subsection">

### Key Decisions Before Setup

Answer these questions before enabling MFA:

- **Which authenticator app will you use?** — Google Authenticator, Authy, or any TOTP-compatible app
- **Have you saved your recovery method?** — If you lose access to your authenticator device, you will need backend support to reset MFA
- **Are you ready for every login to require a code?** — MFA applies immediately and cannot be bypassed

</div>

<div class="subsection">

### Related Features

- **Password Settings** — Located on the same Security settings page; password changes do not affect MFA status
- **View Profile** — Accessible from the same profile avatar dropdown menu
- **Email Notification Settings** — Also under the PREFERENCES section in the profile sidebar
- **Login Flow** — MFA adds a verification step after password entry during login

</div>

<div class="subsection">

### Prerequisites & Requirements

| Requirement | Description | Status |
|----|----|----|
| Active Bayzat Account | Must have valid login credentials | Required |
| Authenticator App | Google Authenticator, Authy, or any TOTP-compatible app installed on a mobile device | Required |
| Camera or Manual Entry | Ability to scan QR code or manually enter the setup key | Required |
| Internet Connection | Required during setup to communicate with the server | Required |

</div>

</div>

</div>

<div id="user-journey" class="section section section-user-journey">

<div class="section-header">

## Complete User Journey Guide

</div>

<div class="section-body">

<div class="journey-roadmap">

<div class="subsection">

### End-to-End Journey: Multi-factor Authentication

From enabling MFA to using it for daily logins.

</div>

<div class="journey-phases">

<div class="journey-phase">

<div class="phase-marker">

1

</div>

<div class="phase-content">

#### Prepare

Install an authenticator app on your mobile device (Google Authenticator recommended).

<a href="#product-foundation" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

2

</div>

<div class="phase-content">

#### Navigate

Go to Security settings via your profile avatar menu.

<a href="#feature-entry-points" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

3

</div>

<div class="phase-content">

#### Enable

Complete the 3-step MFA setup wizard: download app, scan QR code, verify code.

<a href="#core-tasks" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

4

</div>

<div class="phase-content">

#### Login

Enter your 6-digit authenticator code after your password on every login.

<a href="#core-tasks" class="phase-link">See details →</a>

</div>

</div>

<div class="journey-phase">

<div class="phase-marker">

5

</div>

<div class="phase-content">

#### Manage

Disable MFA from Security settings if needed (requires verification code).

<a href="#core-tasks" class="phase-link">See details →</a>

</div>

</div>

</div>

</div>

</div>

</div>

<div id="feature-entry-points" class="section section section-feature-entry-points">

<div class="section-header">

## Feature Discovery

</div>

<div class="section-body">

<div class="subsection">

### How to Access Multi-factor Authentication

#### Via Profile Avatar Menu

<div class="nav-path">

Profile Avatar (top-right) → Security settings

</div>

Click your profile avatar in the top-right corner of any page. In the dropdown menu, click **Security settings** under the PREFERENCES section. This takes you to the Security settings page at `/auth/security`.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/multifactor-authentication/v1/validation/screenshots/01-profile-menu-security-settings.png" class="screenshot" loading="lazy" alt="Profile dropdown menu showing Security settings option" />
<figcaption>Profile dropdown menu showing Security settings under PREFERENCES</figcaption>
</figure>

#### Via Profile Sidebar

<div class="nav-path">

Profile → PREFERENCES → Security settings (in sidebar)

</div>

If you are already on your Profile page, look at the left sidebar. Under the **PREFERENCES** section, click **Security settings**.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/multifactor-authentication/v1/validation/screenshots/05-sidebar-preferences-section.png" class="screenshot" loading="lazy" alt="Sidebar showing PREFERENCES section with Security settings" />
<figcaption>Profile sidebar showing Security settings under the PREFERENCES section</figcaption>
</figure>

</div>

<div class="subsection">

### Navigation Paths by Task

| Task | Navigation Path | Who Can Do This |
|----|----|----|
| Enable MFA | Profile Avatar → Security settings → Enable button | All users |
| View MFA status | Profile Avatar → Security settings | All users |
| Disable MFA | Profile Avatar → Security settings → Disable button | All users (with active MFA) |
| Change password | Profile Avatar → Security settings → Change Password | All users |

</div>

</div>

</div>

<div id="core-tasks" class="section section section-core-tasks">

<div class="section-header">

## Key Tasks

</div>

<div class="section-body">

<div class="subsection">

### Task: Activate Multi-factor Authentication

To enable MFA on your account, navigate to **Profile Avatar → Security settings**. On the Security settings page, find the **Multi-factor authentication** section showing a "Disabled" status badge.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/multifactor-authentication/v1/validation/screenshots/03-mfa-section-disabled-state.png" class="screenshot" loading="lazy" alt="MFA section showing Disabled status with Enable button" />
<figcaption>Multi-factor authentication section showing Disabled status and Enable button</figcaption>
</figure>

Click the **Enable** button to start the 3-step setup wizard.

#### Step 1: Download Google Authenticator

The first step prompts you to download an authenticator app. Links are provided for both the **App Store** (iOS) and **Google Play** (Android). If you already have Google Authenticator or another TOTP-compatible app installed, click **Next** to proceed.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/multifactor-authentication/v1/validation/screenshots/06-mfa-setup-step1-download-app.png" class="screenshot" loading="lazy" alt="MFA setup Step 1 - Download Google Authenticator" />
<figcaption>Step 1: Download Google Authenticator with App Store and Google Play links</figcaption>
</figure>

#### Step 2: Scan QR Code

A QR code is displayed on screen. Open your authenticator app and scan this QR code to add your Bayzat account.

If you cannot scan the QR code, a manual setup key is displayed below it (e.g., `2S2Y3XBXX7WZCTSO`). You can enter this key manually in your authenticator app. A **"How to set it up manually"** link provides additional instructions.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/multifactor-authentication/v1/validation/screenshots/07-mfa-setup-step2-qr-code.png" class="screenshot" loading="lazy" alt="MFA setup Step 2 - QR code and manual key" />
<figcaption>Step 2: Scan QR code with your authenticator app, or use the manual key shown below</figcaption>
</figure>

<div class="warning-box">

**Important:** The QR code is shown only once during setup. Make sure to scan it or save the manual key before proceeding. If you navigate away, you will need to restart the setup process.

</div>

Once your authenticator app shows a 6-digit code for your Bayzat account, click **I got authentication code** to proceed.

#### Step 3: Verify Your Code

Enter the 6-digit code from your authenticator app into the verification field. The code refreshes every 30 seconds, so enter the current code promptly.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/multifactor-authentication/v1/validation/screenshots/08-mfa-setup-step3-verify-code.png" class="screenshot" loading="lazy" alt="MFA setup Step 3 - Enter 6-digit verification code" />
<figcaption>Step 3: Enter the 6-digit code from your authenticator app and click Verify</figcaption>
</figure>

Click **Verify** to complete the setup. MFA is now active on your account and applies to all future logins immediately.

<div class="info-box">

**Note:** You can click **Cancel** at any step to exit the wizard without enabling MFA. Your account will remain unchanged.

</div>

</div>

<div class="subsection">

### Task: Login with MFA Enabled

Once MFA is activated, the login process adds an extra step:

1. Go to the Bayzat login page and enter your **email** and **password** as usual
2. After password verification, the system prompts you for a **6-digit MFA code**
3. Open your authenticator app and find the current code for your Bayzat account
4. Enter the 6-digit code and submit
5. You are logged in successfully

<div class="warning-box">

**Important:** TOTP codes expire every 30 seconds. If your code is rejected, wait for the next code to appear in your authenticator app and try again. Make sure your device clock is synced correctly — time drift can cause code validation failures.

</div>

</div>

<div class="subsection">

### Task: Deactivate Multi-factor Authentication

To disable MFA, navigate to **Profile Avatar → Security settings**. When MFA is active, the Multi-factor authentication section shows an "Enabled" status badge and a **Disable** button.

1. Click the **Disable** button
2. Enter your current 6-digit authenticator code to confirm
3. MFA is deactivated — future logins require only your password

<div class="warning-box">

**Important:** Finance-critical roles may be restricted from disabling MFA. If you have a finance-critical role and need to disable MFA, contact your system administrator or Bayzat support for backend assistance.

</div>

</div>

<div class="subsection">

### Task: Change Your Password

The Security settings page also provides access to password management. Click **Change Password** in the Password settings section to update your password.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/multifactor-authentication/v1/validation/screenshots/04-password-settings-section.png" class="screenshot" loading="lazy" alt="Password settings section with Change Password button" />
<figcaption>Password settings section on the Security settings page</figcaption>
</figure>

The Change Password page requires your current password, a new password, and confirmation of the new password.

<figure class="screenshot-container">
<img src="https://raw.githubusercontent.com/mashapajfhp/user-guides/main/multifactor-authentication/v1/validation/screenshots/09-change-password-page.png" class="screenshot" loading="lazy" alt="Change Password page" />
<figcaption>Change Password page with Current password, New password, and Confirm new password fields</figcaption>
</figure>

<div class="info-box">

**Note:** Changing your password does **not** disable MFA. Both security features operate independently.

</div>

</div>

</div>

</div>

<div id="business-rules-limitations" class="section section section-business-rules-limitations">

<div class="section-header">

## Business Rules & Limitations

</div>

<div class="section-body">

<div class="subsection">

### MFA Behavior Rules

| Rule | Description |
|----|----|
| **Immediate activation** | MFA applies to all logins immediately after completing the setup wizard |
| **Per-user setting** | Each user controls their own MFA independently; no company-wide toggle |
| **Password independence** | Changing your password does not disable or affect MFA |
| **No browser bypass** | Browser "remember me" does not bypass MFA verification |
| **30-second code rotation** | TOTP codes change every 30 seconds; expired codes are rejected |
| **App compatibility** | Any TOTP-compatible app works (Google Authenticator, Authy, Microsoft Authenticator, etc.) |
| **Single QR code display** | The QR code is shown only once during setup; manual key is available as backup |

</div>

<div class="subsection">

### Finance-Critical Role Restrictions

Users with finance-critical roles (e.g., users who process corporate card transactions or manage financial operations) may be subject to mandatory MFA policies:

- **Cannot disable MFA** through the standard Security settings interface
- **Must contact support** for backend MFA reset if they lose access to their authenticator device
- This is an intentional security constraint to protect financial operations

<div class="warning-box">

**Important:** If you have a finance-critical role and lose access to your authenticator device, contact Bayzat support immediately. There is no self-service recovery option for mandatory MFA accounts.

</div>

</div>

<div class="subsection">

### Known Limitations

| Issue | Impact | Severity |
|----|----|----|
| **No self-service recovery** | If you lose your authenticator device, there is no built-in recovery flow — backend support intervention is required to reset MFA | High |
| **No admin MFA management** | Company admins cannot enable, disable, or reset MFA for individual employees through the admin interface | Medium |
| **No backup codes** | The platform does not generate backup/recovery codes during MFA setup | Medium |
| **MFA disable error messages** | Error messages during the MFA disable flow may be unclear when entering incorrect or expired codes | Medium |
| **No OTP resend in Benefits auth** | The Benefits authentication OTP flow lacks a resend mechanism for transaction verification | Medium |
| **No workflow integration** | No MFA-related triggers or actions are available in the Workflows automation system | Low |

</div>

</div>

</div>

<div id="troubleshooting-edge-cases" class="section section section-troubleshooting-edge-cases">

<div class="section-header">

## Troubleshooting & Edge Cases

</div>

<div class="section-body">

<div class="subsection">

### Common Issues

| Issue | Cause | Resolution |
|----|----|----|
| MFA code rejected during login | Code has expired (30-second window) or device clock is out of sync | Wait for the next code; check that your device's automatic time sync is enabled |
| Cannot scan QR code | Camera not working or screen glare | Use the manual setup key displayed below the QR code to add the account manually in your authenticator app |
| Lost authenticator device | Device lost, stolen, or factory reset | Contact Bayzat support for a backend MFA reset — there is no self-service recovery |
| Cannot disable MFA | Finance-critical role restriction | Contact your system administrator or Bayzat support for backend assistance |
| MFA setup wizard disappeared | Navigated away during setup | Return to Security settings and click Enable again to restart the setup process; a new QR code will be generated |
| Authenticator shows wrong code | Time sync issue between device and server | Enable automatic time synchronization on your device; in Google Authenticator, go to Settings → Time correction for codes |

</div>

<div class="subsection">

### Edge Cases

- **Multiple Devices:** Multiple devices can scan the same QR code during the initial setup step. All devices will generate valid codes. However, once you proceed past Step 2, the QR code cannot be retrieved again.
- **App Reinstallation:** If you uninstall and reinstall your authenticator app, your Bayzat MFA entry will be lost. You will need to contact support for a reset.
- **Account Switching:** MFA is per-account. If you use "Add another account" to switch between Bayzat accounts, each account has its own independent MFA setting.
- **Password Reset:** Resetting your password through the "Forgot Password" flow does not disable MFA. You will still need your authenticator code to log in after resetting your password.

</div>

<div class="subsection">

### Getting Additional Help

<div class="info-box">

**Support Contact:** For MFA-related issues that cannot be self-resolved (device loss, mandatory MFA reset, finance-critical role restrictions), contact Bayzat support with your account email and a description of the issue.

</div>

- Provide your account email address when contacting support
- Specify whether you need a full MFA reset or temporary bypass
- For finance-critical roles, your request may require additional verification

</div>

</div>

</div>

<div id="support-resources" class="section section section-support-resources">

<div class="section-header">

## FAQs & Support

</div>

<div class="section-body">

<div class="subsection">

### Frequently Asked Questions

<div class="faq-accordion">

Can I use any authenticator app, or only Google Authenticator?

You can use any TOTP-compatible authenticator app. Google Authenticator, Authy, Microsoft Authenticator, 1Password, and other standard TOTP apps all work. The setup wizard recommends Google Authenticator, but it is not required.

What happens if I lose my phone with the authenticator app?

Contact Bayzat support to request an MFA reset on your account. There is no self-service recovery option. Support will verify your identity and disable MFA so you can log in and set it up again with a new device.

Does changing my password disable MFA?

No. Password changes and MFA are independent security settings. Changing your password has no effect on your MFA configuration.

Can my company admin force-enable MFA on my account?

No. MFA is a per-user setting that each employee controls independently. However, users with finance-critical roles may be restricted from disabling MFA once it is enabled.

Will I need my MFA code every single time I log in?

Yes. Once MFA is enabled, every login requires your authenticator code. The browser "remember me" option does not bypass MFA.

Can I disable MFA after enabling it?

Yes, unless you have a finance-critical role. Navigate to Security settings and click the Disable button. You will need to enter a valid authenticator code to confirm the deactivation.

What is the manual setup key shown during Step 2?

The manual setup key is an alphanumeric string (e.g., `2S2Y3XBXX7WZCTSO`) that you can enter manually in your authenticator app instead of scanning the QR code. This is useful if your camera is not working or you are setting up on a desktop.

Can multiple devices have my MFA codes?

Yes, but only if multiple devices scan the QR code during the initial setup (Step 2). Once you proceed past Step 2, the QR code cannot be shown again. All devices that scanned the code will generate valid codes.

Is there a way to see recovery codes during setup?

No. The current MFA implementation does not generate backup or recovery codes. Save your manual setup key during Step 2 as a backup method for re-adding the account to a new device.

</div>

</div>

<div class="subsection">

### Getting Help

- **Bayzat Support:** Contact support@bayzat.com or use the in-app help widget for MFA reset requests
- **Knowledge Base:** Visit [Activate Multi-factor Authentication](https://bayzathelp.zendesk.com/hc/en-us/articles/14303986197649) for the official activation guide
- **Knowledge Base:** Visit [Login using Multi-factor Authentication](https://bayzathelp.zendesk.com/hc/en-us/articles/14303988851473) for login instructions with MFA
- **Knowledge Base:** Visit [Deactivate Multi-factor Authentication](https://bayzathelp.zendesk.com/hc/en-us/articles/17880159401745) for deactivation steps

</div>

</div>

</div>

<div id="glossary" class="section section section-glossary">

<div class="section-header">

## Glossary

</div>

<div class="section-body">

| Term | Definition |
|----|----|
| **Authenticator App** | A mobile application that generates time-based one-time passwords (TOTP) for two-factor authentication. Examples: Google Authenticator, Authy, Microsoft Authenticator. |
| **MFA (Multi-factor Authentication)** | A security method that requires two or more verification factors to access an account — typically a password plus a code from an authenticator app. |
| **QR Code** | A scannable code displayed during MFA setup (Step 2) that automatically configures your authenticator app with the correct account details and secret key. |
| **TOTP (Time-based One-Time Password)** | A temporary 6-digit code generated by an authenticator app that changes every 30 seconds. Used as the second factor during MFA-enabled logins. |
| **Manual Setup Key** | An alphanumeric string provided as an alternative to QR code scanning. Can be entered manually in an authenticator app to configure the account. |
| **Finance-Critical Role** | A user role with access to financial operations (corporate cards, expense processing) that may have mandatory MFA requirements enforced by the platform. |
| **Recovery/Reset** | The process of disabling MFA on an account through backend support when the user has lost access to their authenticator device. |
| **Security Settings** | The profile page at `/auth/security` where users manage both their password and MFA configuration. |

</div>

</div>

</div>
