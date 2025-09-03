# Page Layouts Reference

This document catalogs all page layout types used in the MYCURE website. Layouts are classified by their structural patterns, not their content.

## Layout Types

### 1. landing-style
**Description**: Complex marketing/hero page with multiple animated sections
**Characteristics**:
- Hero section with CTA buttons
- Multiple feature sections
- Testimonials/social proof
- Pricing sections
- FAQ sections
- Heavy use of animations (Framer Motion)
- Marketing-focused components
- Complex navigation header with multiple links

**Files using this layout**:
- `/app/page.tsx` - Main landing page

---

### 2. document-style
**Description**: Long-form content layout optimized for reading with navigation aids
**Characteristics**:
- Simplified header (logo + theme toggle only)
- Hero section with back-to-home button
- Prose-styled main content area
- Desktop sidebar Table of Contents (sticky)
- Mobile floating TOC button (bottom-right)
- Scrollspy navigation (active section highlighting)
- Section-based content structure
- Consistent footer layout

**Files using this layout**:
- `/app/privacy-policy/page.tsx` - Privacy Policy document
- `/app/terms-and-conditions/page.tsx` - Terms and Conditions document
- `/app/our-story/page.tsx` - Company story and values
- `/app/syncbase-technology/page.tsx` - Syncbase technology explanation

---

### 3. download-style
**Description**: Platform download and installation options showcase
**Characteristics**:
- Tab-based navigation for categories
- Product/option cards
- Download buttons and platform selection
- Feature comparisons
- Simple header structure
- Focus on conversion/download actions

**Files using this layout**:
- `/app/download/page.tsx` - Platform download options

---

## Layout Components Matrix

| Component | landing-style | document-style | download-style |
|-----------|--------------|----------------|----------------|
| Complex Nav Header | ✓ | ✗ | ✗ |
| Simple Header | ✗ | ✓ | ✓ |
| Hero Section | ✓ | ✓ | ✓ |
| Back Button | ✗ | ✓ | ✓ |
| Sidebar TOC | ✗ | ✓ | ✗ |
| Mobile TOC | ✗ | ✓ | ✗ |
| Scrollspy | ✗ | ✓ | ✗ |
| Tabs | ✗ | ✗ | ✓ |
| Animations | Heavy | Light | Moderate |
| Footer | Full | Full | Simple |

## Usage Guidelines

### When to use each layout:

**landing-style**: 
- Main landing/home pages
- Marketing campaign pages
- Product launch pages

**document-style**: 
- Legal documents (Privacy, Terms, etc.)
- Company information pages
- Long-form content that needs navigation
- Blog posts (if implemented)
- Technology/feature explanations
- Service descriptions

**download-style**: 
- Download/installation pages
- Platform-specific software distribution
- Multi-platform download options
- Version selection interfaces

## Adding New Layouts

When creating a new layout type:
1. Define the layout's unique structural characteristics
2. List the common components used
3. Specify when this layout should be used
4. Update this document with the new layout type
5. Ensure consistent naming convention (lowercase with -style suffix)

## Notes

- Layouts are determined by structure, not content
- All layouts should be responsive (mobile/tablet/desktop)
- Maintain consistency within each layout type
- Consider accessibility (ARIA labels, semantic HTML)
- Each layout should have consistent animation patterns