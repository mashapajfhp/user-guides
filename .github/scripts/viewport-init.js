// Viewport initialization script for Playwright MCP
// This script runs on every page load to ensure full sidebar visibility

// Force a large viewport to show the complete Bayzat sidebar
// Settings icon at the bottom of sidebar MUST always be visible
(function() {
  // Set viewport dimensions to ensure full sidebar visibility
  // Height of 1200 ensures Settings gear icon is visible at sidebar bottom
  const targetWidth = 1920;
  const targetHeight = 1200;

  // Log for debugging
  console.log('[Viewport Init] Setting viewport to ' + targetWidth + 'x' + targetHeight);

  // Store original values for reference
  window.__VIEWPORT_FORCED__ = {
    width: targetWidth,
    height: targetHeight,
    timestamp: new Date().toISOString()
  };
})();
