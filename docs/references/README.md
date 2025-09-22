# MYCURE Section References

This directory contains detailed section breakdowns and references for all pages in the MYCURE website. These references help maintain consistency and provide quick navigation guides for development.

## Available Page References

### Main Pages

1. **[Landing Page](./landing-page.md)**
   - **Route**: `/`
   - **File**: `/app/page.tsx`
   - Main marketing landing page with all product features, testimonials, and CTAs

2. **[Our Story](./our-story.md)**
   - **Route**: `/our-story`
   - **File**: `/app/our-story/page.tsx`
   - Company story, founders, mission, and values

3. **[Syncbase Technology](./syncbase-technology.md)**
   - **Route**: `/syncbase-technology`
   - **File**: `/app/syncbase-technology/page.tsx`
   - Technical documentation for offline-first sync technology

### Legal Pages

4. **[Privacy Policy](./privacy-policy.md)**
   - **Route**: `/privacy-policy`
   - **File**: `/app/privacy-policy/page.tsx`
   - Comprehensive privacy policy with 13 sections

5. **[Terms and Conditions](./terms-and-conditions.md)**
   - **Route**: `/terms-and-conditions`
   - **File**: `/app/terms-and-conditions/page.tsx`
   - Complete terms of service with 25 sections

### Excluded Pages

- **Download Page** (`/download/*`) - Excluded per requirements
  - Contains platform-specific download options
  - Separate reference system may be created if needed

## How to Use These References

Each reference file contains:
- **File location** - Exact path to the source file
- **Route** - URL path where the page is accessible
- **Last updated** - When the reference was last synchronized
- **Section breakdown** - Detailed list of all page sections with:
  - Section names and descriptions
  - Line numbers for quick navigation
  - Key features and IDs
  - Technical implementation notes

## Maintaining References

When updating pages:
1. Make your changes to the page component
2. Update the corresponding reference file with new sections/line numbers
3. Update the "Last Updated" date in the reference
4. Add notes about significant changes in the Technical Notes section

## Quick Section Lookup

### Common Sections Across Pages
- **Navigation Header** - Present on all pages
- **Footer** - Consistent across all pages
- **Hero Sections** - Landing, Our Story, Privacy Policy, Terms, Syncbase
- **Table of Contents** - Our Story, Privacy Policy, Terms, Syncbase (sidebar)

### Unique Sections
- **Scrollytelling** - Landing page only (Line 1049)
- **Medical Data Tracker** - Landing page only (Line 619)
- **FAQ Accordion** - Landing page only (Line 1572)
- **Founder Profiles** - Our Story only
- **Legal Sections** - Privacy (13 sections), Terms (25 sections)
- **Demo Section** - Syncbase Technology only

## File Structure Convention

```
section-references/
├── README.md                    # This index file
├── landing-page.md              # Main landing page reference
├── our-story.md                 # Our Story page reference
├── privacy-policy.md            # Privacy Policy reference
├── terms-and-conditions.md      # Terms and Conditions reference
└── syncbase-technology.md       # Syncbase Technology reference
```

## Adding New Page References

To add a new page reference:
1. Create a new `.md` file named after the page (kebab-case)
2. Follow the existing format from other reference files
3. Include all sections with line numbers
4. Add the page to this README index
5. Commit with message: "Add section reference for [page name]"

---

*Note: This reference system was created on 2025-09-02 to improve maintainability and provide better documentation for the MYCURE website structure.*