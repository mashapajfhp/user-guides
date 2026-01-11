-- Migration: Create page_features table for storing discovered UI elements
-- This table stores accordions, tabs, and other features discovered on Bayzat pages
-- Related to the navigation taxonomy via canonical_path

-- Create enum for feature types
CREATE TYPE feature_type AS ENUM (
  'accordion',
  'tab',
  'toggle',
  'action_card',
  'data_section',
  'table',
  'summary_card'
);

-- Create the page_features table
CREATE TABLE IF NOT EXISTS page_features (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Relationship to navigation path
  canonical_path TEXT NOT NULL,  -- e.g., "Settings > Payroll"
  env TEXT NOT NULL DEFAULT 'prod',

  -- Feature identification
  feature_type feature_type NOT NULL,
  feature_name TEXT NOT NULL,  -- e.g., "Daily Wage Calculation"
  feature_description TEXT,    -- e.g., "Set the daily rate calculation for employee's salary"

  -- Feature metadata
  display_order INTEGER,       -- Order as it appears on the page
  has_new_badge BOOLEAN DEFAULT FALSE,
  is_expandable BOOLEAN DEFAULT FALSE,

  -- URL patterns (for direct linking if available)
  feature_url_fragment TEXT,   -- e.g., "#daily-wage-calculation"

  -- Discovery metadata
  discovered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_verified_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE,

  -- Constraints
  UNIQUE(canonical_path, feature_type, feature_name, env)
);

-- Create indexes for common queries
CREATE INDEX idx_page_features_canonical_path ON page_features(canonical_path);
CREATE INDEX idx_page_features_type ON page_features(feature_type);
CREATE INDEX idx_page_features_env ON page_features(env);

-- Add comment
COMMENT ON TABLE page_features IS 'Stores discovered UI features (accordions, tabs, etc.) for each navigation path in the Bayzat platform';

-- ============================================================================
-- Insert discovered accordions for Settings > Payroll
-- ============================================================================

INSERT INTO page_features (canonical_path, env, feature_type, feature_name, feature_description, display_order, has_new_badge, is_expandable)
VALUES
  ('Settings > Payroll', 'prod', 'accordion', 'Daily Wage Calculation', 'Set the daily rate calculation for employee''s salary', 1, FALSE, TRUE),
  ('Settings > Payroll', 'prod', 'accordion', 'Payroll Templates', 'Create, view and customize templates', 2, FALSE, TRUE),
  ('Settings > Payroll', 'prod', 'accordion', 'Employee Loan Policies', 'Configure loan policies that employees can apply for', 3, FALSE, TRUE),
  ('Settings > Payroll', 'prod', 'accordion', 'Leave salary policy', 'This policy outlines the criteria for applying for leave salary', 4, FALSE, TRUE),
  ('Settings > Payroll', 'prod', 'accordion', 'Leave encashment policy', 'This policy outlines the criteria for applying for leave encashment', 5, TRUE, TRUE),
  ('Settings > Payroll', 'prod', 'accordion', 'Bank Accounts', NULL, 6, FALSE, TRUE),
  ('Settings > Payroll', 'prod', 'accordion', 'End of service eligibility', NULL, 7, FALSE, TRUE),
  ('Settings > Payroll', 'prod', 'accordion', 'Allowances', NULL, 8, FALSE, TRUE),
  ('Settings > Payroll', 'prod', 'accordion', 'Variable Pays', NULL, 9, FALSE, TRUE),
  ('Settings > Payroll', 'prod', 'accordion', 'Additions', NULL, 10, FALSE, TRUE),
  ('Settings > Payroll', 'prod', 'accordion', 'Deductions', NULL, 11, FALSE, TRUE),
  ('Settings > Payroll', 'prod', 'accordion', 'Social Security Contributions', 'Setup fixed items that are considered of calculation of social security contribution.', 12, FALSE, TRUE);

-- ============================================================================
-- Insert discovered toggles for Settings > Payroll (General section)
-- ============================================================================

INSERT INTO page_features (canonical_path, env, feature_type, feature_name, feature_description, display_order, is_expandable)
VALUES
  ('Settings > Payroll', 'prod', 'toggle', 'Automatically generate payslips at the end of the month', NULL, 1, FALSE),
  ('Settings > Payroll', 'prod', 'toggle', 'Allow employees to download their payslips', NULL, 2, FALSE),
  ('Settings > Payroll', 'prod', 'toggle', 'Allow employees to edit payment details of their Bank/Exchange House', NULL, 3, FALSE);

-- ============================================================================
-- Insert discovered action cards for Settings > Payroll (Mass Uploads section)
-- ============================================================================

INSERT INTO page_features (canonical_path, env, feature_type, feature_name, feature_description, display_order, feature_url_fragment, is_expandable)
VALUES
  ('Settings > Payroll', 'prod', 'action_card', 'Configure salaries and bank details', 'After adding your employees to Bayzat, download the excel to configure salaries and bank details for all employees.', 1, '/sheets/payroll/manage/salary-configuration', FALSE),
  ('Settings > Payroll', 'prod', 'action_card', 'Mass Upload Variable Pay', 'Add Variable pay to current active payroll cycle for your employees before paying them.', 2, '/sheets/payroll/mass-upload/variable-pay', FALSE),
  ('Settings > Payroll', 'prod', 'action_card', 'Mass Upload Additions', 'Add Additions to current active payroll cycle for your employees before paying them.', 3, '/sheets/payroll/mass-upload/addition', FALSE),
  ('Settings > Payroll', 'prod', 'action_card', 'Mass Upload Deductions', 'Add Deductions pay to current active payroll cycle for your employees before paying them.', 4, '/sheets/payroll/mass-upload/deduction', FALSE);
