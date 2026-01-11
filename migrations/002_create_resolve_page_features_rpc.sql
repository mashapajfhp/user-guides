-- Migration: Create RPC function to resolve page features for a navigation path
-- This function returns all features (accordions, tabs, toggles, etc.) for a given path

CREATE OR REPLACE FUNCTION resolve_page_features(
  p_canonical_path TEXT,
  p_env TEXT DEFAULT 'prod',
  p_feature_type feature_type DEFAULT NULL
)
RETURNS TABLE (
  id UUID,
  canonical_path TEXT,
  feature_type feature_type,
  feature_name TEXT,
  feature_description TEXT,
  display_order INTEGER,
  has_new_badge BOOLEAN,
  is_expandable BOOLEAN,
  feature_url_fragment TEXT,
  is_active BOOLEAN
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT
    pf.id,
    pf.canonical_path,
    pf.feature_type,
    pf.feature_name,
    pf.feature_description,
    pf.display_order,
    pf.has_new_badge,
    pf.is_expandable,
    pf.feature_url_fragment,
    pf.is_active
  FROM page_features pf
  WHERE pf.canonical_path = p_canonical_path
    AND pf.env = p_env
    AND pf.is_active = TRUE
    AND (p_feature_type IS NULL OR pf.feature_type = p_feature_type)
  ORDER BY pf.display_order ASC NULLS LAST, pf.feature_name ASC;
END;
$$;

-- Grant access to authenticated and anon users
GRANT EXECUTE ON FUNCTION resolve_page_features TO authenticated, anon;

-- Add comment
COMMENT ON FUNCTION resolve_page_features IS 'Returns all active features (accordions, tabs, etc.) for a given navigation path';


-- ============================================================================
-- Example usage:
-- ============================================================================
-- Get all features for Settings > Payroll:
--   SELECT * FROM resolve_page_features('Settings > Payroll');
--
-- Get only accordions:
--   SELECT * FROM resolve_page_features('Settings > Payroll', 'prod', 'accordion');
--
-- Get only toggles:
--   SELECT * FROM resolve_page_features('Settings > Payroll', 'prod', 'toggle');
-- ============================================================================


-- ============================================================================
-- Additional helper function: Get all navigation paths that have features
-- ============================================================================

CREATE OR REPLACE FUNCTION list_paths_with_features(
  p_env TEXT DEFAULT 'prod'
)
RETURNS TABLE (
  canonical_path TEXT,
  accordion_count BIGINT,
  tab_count BIGINT,
  toggle_count BIGINT,
  total_features BIGINT
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT
    pf.canonical_path,
    COUNT(*) FILTER (WHERE pf.feature_type = 'accordion') as accordion_count,
    COUNT(*) FILTER (WHERE pf.feature_type = 'tab') as tab_count,
    COUNT(*) FILTER (WHERE pf.feature_type = 'toggle') as toggle_count,
    COUNT(*) as total_features
  FROM page_features pf
  WHERE pf.env = p_env
    AND pf.is_active = TRUE
  GROUP BY pf.canonical_path
  ORDER BY pf.canonical_path;
END;
$$;

GRANT EXECUTE ON FUNCTION list_paths_with_features TO authenticated, anon;

COMMENT ON FUNCTION list_paths_with_features IS 'Lists all navigation paths that have discovered features, with counts by type';
