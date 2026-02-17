// HTML Generator - Modern Navigation + Accordion FAQs + Journey Roadmap
// Input from "Merged JSON Parser" (screenshots already injected where available)

const data = $input.first().json;
const runContext = $('Build Run Context').first().json;

// ============ SAFE PARSE HELPER ============
function safeParse(val) {
  if (!val) return val;
  if (typeof val === 'string') {
    try {
      return JSON.parse(val);
    } catch (e) {
      return val;
    }
  }
  return val;
}

// ============ SAFE STRING HELPER ============
function safeStr(val) {
  if (val === null || val === undefined) return '';
  if (typeof val === 'string') return val;
  if (Array.isArray(val)) return val.map(item => safeStr(item)).filter(Boolean).join(', ');
  if (typeof val === 'object') {
    return (
      val.text ||
      val.content ||
      val.description ||
      val.title ||
      val.name ||
      val.value ||
      ''
    );
  }
  return String(val);
}

// ============ SLUG TO DISPLAY NAME ============
function slugToDisplayName(slug) {
  if (!slug) return '';
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// ============ BASIC SANITIZE (VERY LIGHT) ============
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ============ ESCAPE REGEX SPECIAL CHARS ============
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ============ SANITIZE HTML CONTENT (ALLOW SAFE TAGS) ============
function sanitizeHtml(html) {
  if (!html) return '';
  // Remove script tags and event handlers from AI-generated content
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/\bon\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/javascript\s*:/gi, '')
    .replace(/<iframe\b[^>]*>[\s\S]*?<\/iframe>/gi, '')
    .replace(/<object\b[^>]*>[\s\S]*?<\/object>/gi, '')
    .replace(/<embed\b[^>]*>/gi, '')
    .replace(/<form\b[^>]*>[\s\S]*?<\/form>/gi, '');
}

// ============ MARKDOWN TO HTML (ONLY IF PLAIN TEXT) ============
function md(text) {
  if (!text) return '';
  if (typeof text === 'object') text = safeStr(text);
  if (typeof text !== 'string') text = String(text);

  // If content is already HTML, sanitize and return
  if (/<[a-z][\s\S]*>/i.test(text)) return sanitizeHtml(text);

  let html = escapeHtml(text);

  // Code blocks first (protect from other transforms)
  const codeBlocks = [];
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (_m, _lang, code) => {
    const placeholder = `%%CODEBLOCK_${codeBlocks.length}%%`;
    codeBlocks.push(`<pre><code>${code}</code></pre>`);
    return placeholder;
  });

  // Inline code (protect from other transforms)
  const inlineCodes = [];
  html = html.replace(/`([^`]+)`/g, (_m, code) => {
    const placeholder = `%%INLINE_${inlineCodes.length}%%`;
    inlineCodes.push(`<code>${code}</code>`);
    return placeholder;
  });

  // Horizontal rules
  html = html.replace(/^---+$/gm, '<hr>');

  // Headers
  html = html.replace(/^#### (.*$)/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gm, '<h3>$1</h3>');
  html = html.replace(/^# (.*$)/gm, '<h3>$1</h3>');

  // Bold + italic combined
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');

  // Bold (use negative lookbehind/ahead to avoid matching inside URLs)
  html = html.replace(/(?<![/\w])\*\*(.*?)\*\*(?![/\w])/g, '<strong>$1</strong>');

  // Italic (avoid matching inside URLs and file paths)
  html = html.replace(/(?<![/\w:])\*([^*\n]+?)\*(?![/\w])/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  // Multi-line blockquotes
  const lines = html.split('\n');
  const processed = [];
  let inList = false;
  let listType = null;
  let listDepth = 0;
  let inBlockquote = false;

  for (const line of lines) {
    const bqMatch = line.match(/^>\s+(.*)$/);
    const ulMatch = line.match(/^(\s*)[-*]\s+(.*)$/);
    const olMatch = line.match(/^(\s*)\d+\.\s+(.*)$/);

    // Handle blockquotes (merge consecutive lines)
    if (bqMatch) {
      if (inList) {
        processed.push(listType === 'ul' ? '</ul>' : '</ol>');
        inList = false;
        listType = null;
      }
      if (!inBlockquote) {
        processed.push('<blockquote>');
        inBlockquote = true;
      }
      processed.push(`<p>${bqMatch[1]}</p>`);
      continue;
    } else if (inBlockquote) {
      processed.push('</blockquote>');
      inBlockquote = false;
    }

    // Handle lists (flat — keeping it simple and reliable)
    if (ulMatch) {
      if (!inList || listType !== 'ul') {
        if (inList) processed.push(listType === 'ul' ? '</ul>' : '</ol>');
        processed.push('<ul>');
        inList = true;
        listType = 'ul';
      }
      processed.push(`<li>${ulMatch[2]}</li>`);
    } else if (olMatch) {
      if (!inList || listType !== 'ol') {
        if (inList) processed.push(listType === 'ul' ? '</ul>' : '</ol>');
        processed.push('<ol>');
        inList = true;
        listType = 'ol';
      }
      processed.push(`<li>${olMatch[2]}</li>`);
    } else {
      if (inList) {
        processed.push(listType === 'ul' ? '</ul>' : '</ol>');
        inList = false;
        listType = null;
      }
      processed.push(line);
    }
  }
  if (inList) processed.push(listType === 'ul' ? '</ul>' : '</ol>');
  if (inBlockquote) processed.push('</blockquote>');

  html = processed.join('\n');
  html = html
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 0)
    .join('\n');

  // Restore code blocks and inline code
  for (let i = 0; i < codeBlocks.length; i++) {
    html = html.replace(`%%CODEBLOCK_${i}%%`, codeBlocks[i]);
  }
  for (let i = 0; i < inlineCodes.length; i++) {
    html = html.replace(`%%INLINE_${i}%%`, inlineCodes[i]);
  }

  if (!/<(h3|h4|table|figure|div|ol|ul|pre|blockquote|hr)\b/i.test(html)) {
    html = `<p>${html.replace(/\n+/g, '<br>')}</p>`;
  } else {
    html = html.replace(/\n+/g, '<br>');
  }

  return html;
}

// ============ FIX SCREENSHOT COMMENTS ============
function fixScreenshotComments(html, featureFolder) {
  if (!featureFolder) return html;
  return html.replace(
    /<!-- Screenshot not found: ([a-zA-Z0-9_.-]+) -->/g,
    (_m, file) =>
      `<img src="validation/screenshots/${file}" alt="${escapeHtml(file)}" class="screenshot" loading="lazy">`
  );
}

// ============ STRIP DUPLICATE WRAPPERS FROM AI CONTENT ============
function stripDuplicateWrappers(content, sectionTitle) {
  if (!content || !sectionTitle) return content || '';

  // 1. Strip <h2> tags whose text matches the section title (case-insensitive)
  const titlePattern = escapeRegex(sectionTitle.trim());
  const h2Regex = new RegExp(`<h2[^>]*>\\s*${titlePattern}\\s*<\\/h2>`, 'gi');
  content = content.replace(h2Regex, '');

  // 2. Strip outer <section> wrapper tags that AI agents add around their content.
  //    These nest inside renderSection()'s own <section>, causing duplicate IDs,
  //    double borders, and broken anchors.
  //    Pattern: <section id="..." class="section">...content...</section>
  //    We unwrap by removing the opening and closing tags, keeping inner content.
  content = content.replace(
    /^(\s*)<section[^>]*class="section"[^>]*>\s*/i,
    '$1'
  );
  // Remove the matching closing </section> at the end
  content = content.replace(/\s*<\/section>\s*$/i, '');

  return content;
}

// ============ CONVERT FAQ CARDS TO ACCORDION ============
function convertFaqToAccordion(html) {
  // Pattern 1: feature-grid card layout (legacy)
  const faqGridPattern = /<div class="subsection">[\s\S]*?<h3>(?:Frequently Asked Questions|FAQ)<\/h3>[\s\S]*?<div class="feature-grid">([\s\S]*?)<\/div>[\s\S]*?<\/div>/gi;

  html = html.replace(faqGridPattern, (_match, gridContent) => {
    const cardPattern = /<div class="feature-card">[\s\S]*?<h4>([\s\S]*?)<\/h4>([\s\S]*?)<\/div>/gi;
    let accordionItems = '';
    let cardMatch;

    while ((cardMatch = cardPattern.exec(gridContent)) !== null) {
      const question = cardMatch[1].trim();
      let answer = cardMatch[2].trim();
      answer = answer.replace(/^<p>/, '').replace(/<\/p>$/, '');

      accordionItems += `
        <details class="faq-item">
          <summary class="faq-question">${question}</summary>
          <div class="faq-answer">
            <p>${answer}</p>
          </div>
        </details>`;
    }

    if (!accordionItems) return _match; // No cards found, return original

    return `<div class="subsection">
      <h3>Frequently Asked Questions</h3>
      <div class="faq-accordion">
        ${accordionItems}
      </div>
    </div>`;
  });

  // Pattern 2: Ensure existing <details> FAQ items get proper wrapper classes
  // If there are faq-items without a faq-accordion wrapper, wrap them
  html = html.replace(
    /(<div class="subsection">[\s\S]*?<h3>(?:Frequently Asked Questions|FAQ|FAQs)[^<]*<\/h3>[\s\S]*?)(<details class="faq-item">[\s\S]*?)(<\/div>\s*(?=<(?:\/section|div class="subsection"|section)))/gi,
    (match, before, details, after) => {
      // Already wrapped in faq-accordion? Skip
      if (before.includes('faq-accordion')) return match;
      return `${before}<div class="faq-accordion">${details}</div>${after}`;
    }
  );

  return html;
}

// ============ SECTION ID + NAV LABEL ============
function sectionIdFromType(type) {
  return String(type || 'section')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function humanizeSectionType(type) {
  const t = String(type || '').trim();
  if (!t) return '';
  return t
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// ============ SECTION ICON MAPPING ============
function getSectionIcon(sectionType) {
  const iconMap = {
    'feature-overview': '&#10024;',
    'product-foundation': '&#127959;&#65039;',
    'user-journey': '&#128506;&#65039;',
    'feature-entry-points': '&#128640;',
    'initial-setup': '&#9881;&#65039;',
    'core-tasks': '&#128203;',
    'workflow-integration': '&#128260;',
    'approval-flow': '&#9989;',
    'business-rules-limitations': '&#128207;',
    'troubleshooting-edge-cases': '&#128295;',
    'support-resources': '&#128172;',
    'glossary': '&#128218;',
    'faq': '&#10067;',
    'best-practices': '&#128161;',
    'security': '&#128274;',
    'integrations': '&#128279;',
    'reporting': '&#128202;',
    'notifications': '&#128276;',
    'permissions': '&#128101;'
  };
  const id = sectionIdFromType(sectionType);
  return iconMap[id] || '&#128196;';
}

// ============ BUILD NAVIGATION (MODERN CARD-BASED) ============
function buildNav(sections) {
  const cards = sections
    .filter(s => s && s.section_type && s.section_type !== 'hero')
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .map(s => {
      const id = sectionIdFromType(s.section_type);
      const label = safeStr(s.title) || humanizeSectionType(s.section_type);
      const icon = getSectionIcon(s.section_type);
      return `        <a class="nav-card" href="#${id}">
          <span class="card-icon">${icon}</span>
          <span class="card-label">${escapeHtml(label)}</span>
        </a>`;
    })
    .join('\n');

  return `
    <nav class="guide-nav" aria-label="Guide navigation">
      <div class="nav-header">
        <span class="nav-icon">&#128214;</span>
        <span class="nav-title">Quick Navigation</span>
      </div>
      <div class="nav-grid">
${cards}
      </div>
    </nav>
  `;
}

// ============ RENDER SECTION WRAPPER ============
function renderSection(section) {
  const type = section.section_type || 'generic';
  const id = sectionIdFromType(type);
  const sectionClass = `section section-${id}`;
  const title = safeStr(section.title) || humanizeSectionType(type);
  const rawContent = safeStr(section.content);
  const content = sanitizeHtml(stripDuplicateWrappers(rawContent, title));

  return `
    <section class="${sectionClass}" id="${id}">
      <header class="section-header">
        <h2 class="section-title">${escapeHtml(title)}</h2>
      </header>
      <div class="section-body">
        ${content}
      </div>
    </section>
  `;
}

// ============ INPUT NORMALIZATION ============
let hero = safeParse(data.hero) || {};
if (typeof hero === 'string') hero = {};

const sections = Array.isArray(data.sections)
  ? data.sections
  : (safeParse(data.sections) || []);

const metadata = safeParse(data.metadata) || {};

// ============ FEATURE NAME + TAGLINE ============
let featureName = '';
if (hero.title && typeof hero.title === 'string') {
  featureName = hero.title;
} else if (data.feature_name && typeof data.feature_name === 'string') {
  featureName = data.feature_name;
} else if (runContext.feature_name && typeof runContext.feature_name === 'string') {
  featureName = runContext.feature_name;
} else if (runContext.feature_slug) {
  featureName = slugToDisplayName(runContext.feature_slug);
} else {
  featureName = 'Feature Guide';
}

let tagline = '';
if (hero.blurb && typeof hero.blurb === 'string') {
  tagline = hero.blurb;
} else if (hero.tagline && typeof hero.tagline === 'string') {
  tagline = hero.tagline;
} else if (hero.description && typeof hero.description === 'string') {
  tagline = hero.description;
} else if (hero.subtitle && typeof hero.subtitle === 'string') {
  tagline = hero.subtitle;
} else if (data.tagline && typeof data.tagline === 'string') {
  tagline = data.tagline;
} else if (data.blurb && typeof data.blurb === 'string') {
  tagline = data.blurb;
} else {
  tagline = `Comprehensive guide for ${featureName}`;
}

// ============ HERO IMAGE SUPPORT ============
let heroImageHtml = '';

if (hero.image && typeof hero.image === 'string') {
  heroImageHtml = `
    <figure class="hero-image">
      <img src="${escapeHtml(hero.image)}" alt="${escapeHtml(featureName)}" class="screenshot" loading="lazy">
    </figure>
  `;
} else if (hero.screenshot && typeof hero.screenshot === 'string') {
  heroImageHtml = `
    <figure class="hero-image">
      <img src="${escapeHtml(hero.screenshot)}" alt="${escapeHtml(featureName)}" class="screenshot" loading="lazy">
    </figure>
  `;
} else if (hero.hero_image && typeof hero.hero_image === 'string') {
  const maybe = hero.hero_image.trim();
  heroImageHtml = `
    <figure class="hero-image">
      ${maybe.includes('<img') ? sanitizeHtml(maybe) : `<img src="${escapeHtml(maybe)}" alt="${escapeHtml(featureName)} - hero overview" class="screenshot" loading="lazy">`}
      <figcaption>${escapeHtml(featureName)} — hero overview</figcaption>
    </figure>
  `;
}

// ============ BUILD PAGE ============
const featureSlug =
  data.feature_slug ||
  runContext.feature_slug ||
  featureName.toLowerCase().replace(/\s+/g, '-');

const featureFolder = runContext.feature_folder || featureSlug;

const sortedSections = sections
  .filter(Boolean)
  .sort((a, b) => (a.order || 0) - (b.order || 0));

const tocHtml = buildNav(sortedSections);
const sectionsHtml = sortedSections.map(s => renderSection(s)).join('\n');

// ============ COMPLETE HTML WITH ALL STYLES ============
let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(featureName)} - User Guide | Bayzat</title>
  <style>
/* ===============================
   GLOBAL RESET
================================ */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ===============================
   BASE TYPOGRAPHY
================================ */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  line-height: 1.6;
  color: #000000;
  background-color: #ffffff;
  max-width: 1060px;
  margin: 0 auto;
  padding: 20px;
}

h1, h2, h3, h4, h5, h6 {
  color: #000000;
  font-weight: 600;
}

p, span, li, td, th, dt, dd {
  color: #000000;
}

a {
  color: #6B46C1;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

hr {
  border: none;
  border-top: 2px solid #E2E8F0;
  margin: 2rem 0;
}

/* ===============================
   HERO SECTION
================================ */
.hero-banner {
  background: linear-gradient(135deg, #6B46C1 0%, #805AD5 100%);
  color: #ffffff;
  padding: 60px 40px;
  border-radius: 12px;
  margin-bottom: 40px;
  text-align: center;
}

.hero-banner h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #ffffff;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.95;
  margin-bottom: 20px;
  color: #ffffff;
}

.hero-image {
  margin-top: 24px;
}

.hero-image img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}

/* ===============================
   MODERN GUIDE NAVIGATION
================================ */
.guide-nav {
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 40px;
  border: 1px solid #e2e8f0;
}

.nav-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
}

.nav-icon {
  font-size: 1.5rem;
}

.nav-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a2e;
  letter-spacing: -0.02em;
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
}

.nav-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  background: #ffffff;
  border-radius: 12px;
  text-decoration: none;
  color: #000000;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}

.nav-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(107, 70, 193, 0.15);
  border-color: #6B46C1;
  background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
  color: #6B46C1;
  text-decoration: none;
}

.nav-card:active {
  transform: translateY(0);
}

.card-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.card-label {
  line-height: 1.3;
}

/* ===============================
   SECTIONS
================================ */
.section {
  margin-bottom: 3rem;
  padding: 24px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #E2E8F0;
}

.section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #E2E8F0;
  margin-bottom: 1rem;
}

.subsection {
  margin: 1.5rem 0;
  padding-left: 1rem;
  border-left: 3px solid #E2E8F0;
}

.subsection h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 1rem;
}

/* ===============================
   STRATEGIC CONTEXT
================================ */
.strategic-context {
  margin: 1.5rem 0;
  padding-left: 1rem;
  border-left: 3px solid #E2E8F0;
}

.strategic-header {
  margin-bottom: 1rem;
}

.strategic-header h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #000000;
  margin: 0;
}

.strategic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.strategic-card {
  background: #ffffff;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 20px;
}

.strategic-card h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
  margin: 0 0 12px 0;
}

.strategic-card p {
  font-size: 0.95rem;
  color: #000000;
  margin: 0 0 12px 0;
  line-height: 1.5;
}

.strategic-card ul {
  margin: 0;
  padding-left: 1.25rem;
}

.strategic-card li {
  font-size: 0.9rem;
  color: #000000;
  margin-bottom: 6px;
}

.strategic-card li:last-child {
  margin-bottom: 0;
}

/* ===============================
   JOURNEY ROADMAP
================================ */
.journey-roadmap {
  margin: 1rem 0;
}

.journey-roadmap > .subsection {
  border-left: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
}

.journey-roadmap > .subsection h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.journey-roadmap > .subsection > p {
  color: #000000;
  font-size: 0.95rem;
  margin: 0;
}

.journey-phases {
  position: relative;
  padding-left: 24px;
}

/* Vertical timeline line */
.journey-phases::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 20px;
  bottom: 20px;
  width: 2px;
  background: linear-gradient(to bottom, #6B46C1 0%, #805AD5 100%);
  border-radius: 2px;
}

.journey-phase {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 0;
  position: relative;
}

.journey-phase:first-child {
  padding-top: 0;
}

.journey-phase:last-child {
  padding-bottom: 0;
}

.phase-marker {
  width: 32px;
  height: 32px;
  min-width: 32px;
  background: linear-gradient(135deg, #6B46C1 0%, #805AD5 100%);
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(107, 70, 193, 0.3);
}

.phase-content {
  flex: 1;
  background: #ffffff;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 16px 20px;
  transition: all 0.2s ease;
}

.phase-content:hover {
  border-color: #6B46C1;
  box-shadow: 0 4px 12px rgba(107, 70, 193, 0.1);
}

.phase-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
  margin: 0 0 8px 0;
}

.phase-content p {
  font-size: 0.9rem;
  color: #000000;
  margin: 0 0 12px 0;
  line-height: 1.5;
}

.phase-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #6B46C1;
  text-decoration: none;
  transition: all 0.2s ease;
}

.phase-link:hover {
  color: #805AD5;
  text-decoration: none;
}

.phase-link::after {
  content: '\\2192';
  transition: transform 0.2s ease;
}

.phase-link:hover::after {
  transform: translateX(4px);
}

/* ===============================
   WHO USES TABLE
================================ */
.who-uses-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.who-uses-table th,
.who-uses-table td {
  padding: 12px 16px;
  text-align: left;
  border: 1px solid #E2E8F0;
}

.who-uses-table th {
  background: #F7FAFC;
  font-weight: 600;
}

/* ===============================
   FAQ ACCORDION
================================ */
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
}

.faq-item {
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
  transition: all 0.2s ease;
}

.faq-item:hover {
  border-color: #6B46C1;
  box-shadow: 0 2px 8px rgba(107, 70, 193, 0.1);
}

.faq-item[open] {
  border-color: #6B46C1;
  box-shadow: 0 4px 12px rgba(107, 70, 193, 0.15);
}

.faq-question,
.faq-item > summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  font-weight: 600;
  font-size: 1rem;
  color: #1a1a2e;
  cursor: pointer;
  background: #f8f9ff;
  list-style: none;
  transition: all 0.2s ease;
}

.faq-question::-webkit-details-marker,
.faq-item > summary::-webkit-details-marker {
  display: none;
}

.faq-question::after,
.faq-item > summary::after {
  content: '';
  width: 10px;
  height: 10px;
  border-right: 2px solid #6B46C1;
  border-bottom: 2px solid #6B46C1;
  transform: rotate(-45deg);
  transition: transform 0.3s ease;
  flex-shrink: 0;
  margin-left: 16px;
}

.faq-item[open] .faq-question::after,
.faq-item[open] > summary::after {
  transform: rotate(45deg);
}

.faq-question:hover,
.faq-item > summary:hover {
  background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
  color: #6B46C1;
}

.faq-item[open] .faq-question,
.faq-item[open] > summary {
  background: linear-gradient(135deg, #6B46C1 0%, #805AD5 100%);
  color: #ffffff;
}

.faq-item[open] .faq-question::after,
.faq-item[open] > summary::after {
  border-color: #ffffff;
}

.faq-answer {
  padding: 20px;
  background: #ffffff;
  color: #000000;
  line-height: 1.7;
  border-top: 1px solid #E2E8F0;
  animation: fadeIn 0.3s ease;
}

.faq-answer p {
  margin: 0;
  color: #000000;
}

.faq-answer ul, .faq-answer ol {
  margin: 12px 0;
  padding-left: 24px;
}

.faq-answer li {
  margin-bottom: 8px;
  color: #000000;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ===============================
   INFO & WARNING BOXES
================================ */
.info-box {
  padding: 16px 20px;
  border-radius: 8px;
  margin: 20px 0;
  background: #FAF5FF;
  border-left: 4px solid #6B46C1;
  color: #000000;
}

.warning-box {
  padding: 16px 20px;
  border-radius: 8px;
  margin: 20px 0;
  background: #FFFBEB;
  border-left: 4px solid #D97706;
  color: #000000;
}

.warning-box p,
.info-box p {
  margin: 0 0 8px 0;
}

.warning-box p:last-child,
.info-box p:last-child {
  margin-bottom: 0;
}

/* ===============================
   LISTS
================================ */
ul, ol {
  margin: 1rem 0;
  padding-left: 2rem;
}

li {
  margin-bottom: 0.5rem;
}

/* ===============================
   TABLES
================================ */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th, td {
  padding: 12px 16px;
  text-align: left;
  border: 1px solid #E2E8F0;
  color: #000000;
}

th {
  background: #F7FAFC;
  font-weight: 600;
}

tr:hover {
  background: #F7FAFC;
}

/* ===============================
   SCREENSHOTS
================================ */
figure {
  margin: 24px auto;
  text-align: center;
}

figure img,
.screenshot {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #E2E8F0;
  display: block;
  margin: 0 auto;
}

figcaption {
  margin-top: 12px;
  font-size: 0.9rem;
  font-style: italic;
  color: #000000;
  opacity: 0.8;
}

/* Screenshot container with consistent spacing */
.screenshot-container {
  margin: 24px auto;
  text-align: center;
}

.screenshot-container img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #E2E8F0;
  display: block;
  margin: 0 auto;
}

.screenshot-container figcaption {
  margin-top: 12px;
  font-size: 0.9rem;
  font-style: italic;
  color: #000000;
  opacity: 0.8;
}

/* ===============================
   FEATURE CARDS & GRIDS
================================ */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin: 20px 0;
}

.feature-card {
  background: #ffffff;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 20px;
  color: #000000;
}

.feature-card h4 {
  margin-top: 0;
  color: #000000;
}

/* ===============================
   REQUIREMENTS TABLE
================================ */
.requirements-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.requirements-table th,
.requirements-table td {
  padding: 12px 16px;
  text-align: left;
  border: 1px solid #E2E8F0;
}

.requirements-table th {
  background: #F7FAFC;
  font-weight: 600;
}

/* ===============================
   LIMITATIONS TABLE
================================ */
.limitations-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.limitations-table th,
.limitations-table td {
  padding: 12px 16px;
  text-align: left;
  border: 1px solid #E2E8F0;
}

.limitations-table th {
  background: #F7FAFC;
  font-weight: 600;
}

/* ===============================
   GLOSSARY TABLE
================================ */
.glossary-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.glossary-table th,
.glossary-table td {
  padding: 12px 16px;
  text-align: left;
  border: 1px solid #E2E8F0;
}

.glossary-table th {
  background: #F7FAFC;
  font-weight: 600;
}

.glossary-table td:first-child {
  width: 25%;
  white-space: nowrap;
}

/* ===============================
   LEGACY JOURNEY & STEPS (backwards compatibility)
================================ */
.journey-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin: 20px 0;
}

.journey-step {
  background: #F7FAFC;
  border-radius: 8px;
  padding: 20px;
  color: #000000;
}

.journey-step .step-number,
.step-number {
  background: #6B46C1;
  color: #ffffff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-bottom: 12px;
}

.step {
  display: flex;
  gap: 16px;
  margin: 20px 0;
  padding: 16px;
  background: #F7FAFC;
  border-radius: 8px;
}

/* ===============================
   NAVIGATION PATH
================================ */
.nav-path {
  background: #F7FAFC;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: 'SF Mono', Monaco, monospace;
  margin: 16px 0;
  color: #000000;
}

/* ===============================
   CODE & BLOCKQUOTES
================================ */
code {
  background: #F7FAFC;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, monospace;
  font-size: 0.9em;
  color: #000000;
}

pre {
  background: #F7FAFC;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  color: #000000;
}

blockquote {
  border-left: 4px solid #E2E8F0;
  padding-left: 16px;
  margin: 16px 0;
  font-style: italic;
  color: #000000;
}

blockquote p {
  margin: 0 0 8px 0;
}

blockquote p:last-child {
  margin-bottom: 0;
}

/* ===============================
   FOOTER
================================ */
footer {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #E2E8F0;
  text-align: center;
  color: #000000;
  font-size: 0.9rem;
}

/* ===============================
   RESPONSIVE
================================ */
@media (max-width: 768px) {
  body { padding: 16px; }
  .hero-banner { padding: 40px 24px; }
  .hero-banner h1 { font-size: 1.75rem; }
  .section { padding: 16px; }
  th, td { padding: 8px 12px; }
  .nav-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .nav-card {
    padding: 12px;
    font-size: 0.85rem;
  }
  .card-icon {
    font-size: 1rem;
  }
  .faq-question,
  .faq-item > summary {
    padding: 14px 16px;
    font-size: 0.95rem;
  }
  .faq-answer {
    padding: 16px;
  }
  .strategic-grid {
    grid-template-columns: 1fr;
  }
  .journey-phases {
    padding-left: 20px;
  }
  .journey-phases::before {
    left: 11px;
  }
  .phase-marker {
    width: 28px;
    height: 28px;
    min-width: 28px;
    font-size: 0.8rem;
  }
  .phase-content {
    padding: 14px 16px;
  }
  .glossary-table td:first-child {
    white-space: normal;
  }
}

@media (max-width: 480px) {
  .hero-banner h1 { font-size: 1.5rem; }
  .hero-subtitle { font-size: 1rem; }
  .step { flex-direction: column; gap: 12px; }
  .nav-grid {
    grid-template-columns: 1fr;
  }
  .guide-nav {
    padding: 16px;
  }
  .journey-phase {
    gap: 12px;
  }
}

/* ===============================
   PRINT
================================ */
@media print {
  body { max-width: 100%; padding: 0; }
  .hero-banner {
    background: #6B46C1 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .section { break-inside: avoid; }
  .guide-nav { display: none; }
  .faq-item { break-inside: avoid; }
  .faq-item[open] .faq-answer { display: block; }
  .journey-phases::before {
    background: #6B46C1 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}
  </style>
</head>
<body>
  <div class="page">
    <div class="hero-banner">
      <h1>${escapeHtml(featureName)}</h1>
      <p class="hero-subtitle">${escapeHtml(tagline)}</p>
      ${heroImageHtml}
    </div>

    ${tocHtml}

    <main class="content-area" aria-label="User guide content">
      ${sectionsHtml}
    </main>

    <footer>
      <div>Generated by Bayzat Documentation System</div>
      <div>Last updated: ${escapeHtml(metadata.last_updated || new Date().toISOString().split('T')[0])}</div>
    </footer>
  </div>
</body>
</html>`;

// Apply screenshot fix (with loading="lazy")
html = fixScreenshotComments(html, featureFolder);

// Fix screenshot paths that incorrectly include featureFolder prefix
if (featureFolder) {
  const escaped = escapeRegex(featureFolder);
  html = html.replace(
    new RegExp(`src=["']${escaped}/validation/screenshots/`, 'g'),
    'src="validation/screenshots/'
  );
}

// Convert FAQ card grids to accordion format
html = convertFaqToAccordion(html);

return [
  {
    json: {
      html,
      file_path: `${featureFolder}/${featureSlug}-user-guide.html`,
      feature_name: featureName,
      feature_slug: featureSlug,
      version: data.version || runContext.version || 'v1',
      commit_message: `docs: add user guide for ${featureName}`,
      generated_at: new Date().toISOString()
    }
  }
];
