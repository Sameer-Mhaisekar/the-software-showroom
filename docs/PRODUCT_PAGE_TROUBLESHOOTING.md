# Product Page Troubleshooting Guide

## Common Issues and Solutions

### Issue: Random Dark Section Appears
**Symptoms:** Dark section with "Close Details" button appears unexpectedly on page
**Root Cause:** Orphaned HTML from old implementation conflicting with current design

**Solution:**
1. Check for duplicate or leftover `<div class="details-container">` sections in HTML
2. Remove orphaned HTML that contains old implementation code
3. Mark or remove corresponding orphaned CSS with comment blocks

**Why this happens:**
- Leftover code from previous implementations
- Dark-themed sections conflicting with light theme
- HTML sections that aren't properly closed or removed during refactoring

### Issue: Blank/White Page
**Symptoms:** Product page loads but shows completely blank content
**Root Cause:** Theme conflict between main site dark theme and product page light theme

**Solution:**
1. Ensure `product.css` comes AFTER `styles.css` in HTML head
2. Verify body override in `product.css` includes `!important` declarations:
   ```css
   body {
       background: #ffffff !important;
       color: #1f2937 !important;
       /* other !important overrides */
   }
   ```

**Why this happens:**
- Main `styles.css` applies dark theme (`background: #0f172a`, `color: #e2e8f0`)
- Product page design expects light theme for readability
- Without override, dark text appears on dark background = invisible

### Issue: Use Case Panels Not Visible
**Symptoms:** Page loads but use case section is empty
**Root Cause:** CSS `opacity: 0` or `display: none` rules

**Solution:**
1. Check for `opacity: 0` in `.use-case-panel` CSS
2. Ensure no `display: none` on `.use-cases-grid`
3. Verify JavaScript isn't hiding elements during progressive enhancement

### Issue: Layout Broken on Mobile
**Symptoms:** Content overlaps or doesn't fit on mobile devices
**Root Cause:** Missing responsive CSS or conflicting grid rules

**Solution:**
1. Verify media queries are properly closed with `}`
2. Check grid `minmax(400px, 1fr)` - reduce if needed for smaller screens
3. Ensure mobile-specific overrides are applied

### Issue: Section Subtitles Barely Visible
**Symptoms:** Section subtitle text appears extremely light/faded and is barely readable
**Root Cause:** Light gray colors from main theme (`#94a3b8`, `#cbd5e1`) have poor contrast on white background

**Solution:**
Option 1 - CSS Override (may not work due to specificity):
```css
body .section-subtitle {
    color: #1f2937 !important;
    font-weight: 500 !important;
}
```

Option 2 - Inline Style (guaranteed to work):
```html
<p class="section-subtitle" style="color: #1f2937 !important; font-weight: 500;">
```

**Why this happens:**
- Main `styles.css` defines `.section-subtitle` with light gray colors suitable for dark backgrounds
- Product page uses white background but inherits the light text colors
- CSS specificity and loading order can prevent overrides from working
- Inline styles have highest specificity and always work

**Recommended Fix:** Use inline styles for critical visibility issues like this

## CSS Architecture Notes

### Theme Override Pattern
```css
/* Main site theme (styles.css) */
body { background: #0f172a; color: #e2e8f0; }

/* Product page override (product.css) */
body { background: #ffffff !important; color: #1f2937 !important; }
```

### Critical CSS Order
1. `styles.css` - Base/main site styles
2. `product.css` - Product-specific overrides (MUST be last)

### Use Case Panel Structure
```css
.use-cases-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    /* Responsive grid that adapts to content */
}

.use-case-panel {
    /* NO opacity: 0 here - causes invisible panels */
    background: rgba(30, 41, 59, 0.8);
    /* Glassmorphism effect requires light background */
}
```

## Last Updated: July 4, 2025
## Issue Resolution History:
- Blank page: Fixed with body theme override
- Use case visibility: Removed problematic opacity rules
- Mobile responsiveness: Enhanced media queries
- Section subtitle visibility: Fixed with inline style override (July 4, 2025)
