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

### 3. product-style
**Description**: Product-focused marketing page with modern design patterns and conversion optimization
**Characteristics**:
- Hero section with AnimatedShinyText badge for product positioning
- Problem-to-Solution card grids addressing specific pain points
- Embedded media (YouTube videos) for product demonstrations
- Visual storytelling through journey maps and process flows
- Statistics sections with NumberTicker animations
- Sticky scroll sections using Scrollytelling for progressive reveals
- Alternating Image + Content layouts for feature showcases
- Multiple ShimmerButton CTAs for conversion points
- Glass morphism effects and gradient backgrounds
- Comprehensive use of Framer Motion animations with viewport triggers
- Responsive grid layouts with mobile-first approach

**Key Components**:
- `AnimatedShinyText` - Badge-style product announcements
- `ShimmerButton` - Primary call-to-action buttons
- `NumberTicker` - Animated statistics display
- `Scrollytelling` - Sticky scroll interactions
- `Card` components with icons for solutions/features

**Section Flow Pattern**:
1. Hero with badge and dual CTAs
2. Solutions grid (problem-to-solution narrative)
3. Product demo (video or interactive element)
4. Visual feature presentation (journey/process)
5. Specialty/category cards
6. Social proof (statistics tracker)
7. Security/compliance features (sticky scroll)
8. Detailed advantages (alternating layouts)
9. Final conversion CTA

**Files using this layout**:
- `/app/clinics/page.tsx` - Clinics product page (definitive standard)

---

### 4. feature-style
**Description**: Clean, focused feature page inspired by modern SaaS products (Notion Calendar pattern)
**Characteristics**:
- Minimal hero with punchy headline and single CTA
- Product icon/badge positioning
- 2x2 feature grid with icons
- Integration showcase with alternating layouts
- Benefits section with visual demonstrations
- Tool/platform compatibility grid
- Download options for multiple platforms
- FAQ accordion at bottom
- Clean, spacious design with ample whitespace
- Focus on single product/feature
- Subtle animations and transitions

**Key Components**:
- Product badge/icon
- Feature cards with icons
- Integration screenshots
- Platform download buttons
- Expandable FAQ items
- Testimonial cards (optional)

**Section Flow Pattern**:
1. Hero with product icon and single CTA
2. Primary features (2x2 grid)
3. Integration showcase (alternating layouts)
4. Benefits/use cases section
5. Tool compatibility grid
6. Download/access options
7. FAQ section

**Files using this layout**:
- `/app/booking/page.tsx` - Booking feature page (implemented)
- `/app/telehealth/page.tsx` - Telehealth feature page (implemented)

---

### 5. download-style
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

| Component | landing-style | document-style | product-style | feature-style | download-style |
|-----------|--------------|----------------|---------------|---------------|----------------|
| Complex Nav Header | ✓ | ✗ | ✓ | ✓ | ✗ |
| Simple Header | ✗ | ✓ | ✗ | ✗ | ✓ |
| Hero with Badge | ✗ | ✗ | ✓ | ✗ | ✗ |
| Hero Section | ✓ | ✓ | ✓ | ✓ | ✓ |
| Product Icon | ✗ | ✗ | ✗ | ✓ | ✗ |
| Back Button | ✗ | ✓ | ✗ | ✗ | ✓ |
| Sidebar TOC | ✗ | ✓ | ✗ | ✗ | ✗ |
| Mobile TOC | ✗ | ✓ | ✗ | ✗ | ✗ |
| Scrollspy | ✗ | ✓ | ✗ | ✗ | ✗ |
| Solution Cards | ✗ | ✗ | ✓ | ✗ | ✗ |
| Feature Cards | ✓ | ✗ | ✓ | ✓ | ✗ |
| Video Embed | ✗ | ✗ | ✓ | ✓ | ✗ |
| Journey Maps | ✗ | ✗ | ✓ | ✗ | ✗ |
| NumberTicker | ✓ | ✗ | ✓ | ✗ | ✗ |
| Sticky Scroll | ✗ | ✗ | ✓ | ✗ | ✗ |
| Image + Content | ✗ | ✗ | ✓ | ✓ | ✗ |
| ShimmerButton | ✓ | ✗ | ✓ | ✗ | ✗ |
| Statistics | ✓ | ✗ | ✓ | ✗ | ✗ |
| Integration Grid | ✗ | ✗ | ✗ | ✓ | ✗ |
| FAQ Accordion | ✗ | ✗ | ✗ | ✓ | ✗ |
| Download Links | ✗ | ✗ | ✗ | ✓ | ✓ |
| Tabs | ✗ | ✗ | ✗ | ✗ | ✓ |
| Animations | Heavy | Light | Heavy | Subtle | Moderate |
| Footer | Full | Full | Full | Full | Simple |

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

**product-style**:
- Product marketing pages
- Service offerings
- Solution presentations
- Feature showcases
- Industry-specific products
- B2B product pages

**feature-style**:
- Individual feature pages
- Single tool/module presentations
- Focused functionality showcases
- Integration-heavy features
- Clean, modern SaaS features
- When you need less complexity than product-style

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