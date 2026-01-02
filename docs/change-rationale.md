# Website Copy Changes: Rationale Summary

**Purpose:** Explains the reasoning behind major content changes made to the MYCURE website.
**Date:** 2026-01-02
**Scope:** Homepage, clinics, hospital, diagnostics, dental, skin, telehealth, corporate, mobile-labs, booking, our-story, syncbase-technology, download pages

---

## Files Modified

### Homepage (Phase 0)
1. `app/(home)/data.ts` - Main copy configuration
2. `components/sections/home-page/StorybrandSection.tsx` - Hardcoded narrative copy

### Phase 1: Product Pages
3. `app/clinics/data.ts` - Clinics page copy configuration
4. `app/hospital/data.ts` - Hospital OPD page copy configuration
5. `app/diagnostics/data.ts` - Diagnostics page copy configuration

### Phase 2: Specialty Pages
6. `app/dental/data.ts` - Dental practice page copy configuration
7. `app/skin/data.ts` - Aesthetic/skin clinic page copy configuration
8. `app/telehealth/data.ts` - Telehealth feature page copy configuration

### Phase 3: Enterprise & Feature Pages
9. `app/corporate/data.ts` - Corporate clinics page copy configuration
10. `app/mobile-labs/data.ts` - Mobile labs page copy configuration
11. `app/booking/data.ts` - Booking feature page copy configuration

### Phase 4: Document Pages
12. `app/our-story/page.tsx` - Founder story page (no changes needed)
13. `app/syncbase-technology/page.tsx` - Syncbase technology page copy
14. `app/download/page.tsx` - Download page copy

---

## Changes by Category

### 1. Softened Unverifiable Claims

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "industry-leading commitment" | "strong commitment" | Comparative claims require evidence; "strong" is defensible |
| "exceed healthcare standards" | "meet healthcare standards" | Removed comparative; "meet" is verifiable |
| "zero data loss" | "designed to minimize data loss" | Absolute claims are technically impossible; realistic language |
| "Join thousands of healthcare facilities" | "Join healthcare facilities across the Philippines" | "Thousands" conflicts with "2,900+" cited elsewhere |
| "save lives every day" | "deliver better care" | Removed dramatic claim; focused on practical value |

### 2. Brand Voice Compliance

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "flows seamlessly" | "flows smoothly" | "Seamlessly" is on the banned phrases list |
| "empowers your team" | "enables your team" | "Empowers" is on the banned phrases list |
| "every single day" | "daily" | Redundant emphasis; cleaner language |
| "endless back-and-forth" | "constant back-and-forth" | Less hyperbolic |

### 3. Clarity Improvements

| Section | Change | Rationale |
|---------|--------|-----------|
| Hero description | Broke into two shorter sentences | Original was a run-on; easier to scan |
| Features grid | Replaced imperative verbs (Explore, Experience, Embrace, Try, Enjoy) | Clearer value statements without filler imperatives |
| FAQ Q3 | Rewrote to focus on compliance | Was duplicate of Q1; now answers the actual question |
| FAQ description | "We've compiled..." → "Common questions..." | Simpler, less formal |

### 4. Redundancy Removal

| Location | Original | Changed To | Rationale |
|----------|----------|------------|-----------|
| stickyFeaturesConfig | "tools that actually work" | "tools that work" | "Actually" is filler |
| featuresGridConfig.description | "an integrated set of solutions tailored to" | "an integrated set of solutions for" | Shorter, same meaning |
| whyChooseConfig.description | "providing compliance, reliability, and smooth operations" | "Compliance, reliability, and smooth operations." | Removed gerund; cleaner |

---

## What Was NOT Changed

1. **Metrics banner values** - 13M+ records, 2.9M+ patients, 6.2M+ transactions (confirmed as directionally accurate)
2. **Hero badge** - "MYCURE X: Launches soon" (confirmed by stakeholder)
3. **Core value propositions** - Offline capability, HIPAA focus, clinical workflows
4. **Structural layout** - Section order and hierarchy unchanged

---

## Claims Flagged for Verification

These claims were NOT changed but require business confirmation:

1. **7-day implementation timeline** - "What you can achieve in just 7 days"
2. **HIPAA compliance statements** - Multiple locations; recommend legal review

See `docs/claims-to-verify.md` for complete list.

---

## Testing Recommendations

1. Review all changes in staging environment
2. Verify metrics banner displays correctly
3. Test FAQ accordion behavior after content changes
4. Confirm StorybrandSection animations work with updated text

---

# Phase 1: Product Pages (Clinics, Hospital, Diagnostics)

**Date:** 2026-01-02

---

## Clinics Page Changes

### Softened Unverifiable Claims

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "3+ hours saved daily" | "Reduce time spent on administrative tasks" | Unverified time claim; focus on benefit instead |
| "save lives every day" | "deliver better care" | Dramatic claim; practical value focus |
| "Join thousands of healthcare facilities" | "Join healthcare facilities across the Philippines" | Consistent with homepage change |

### Brand Voice Compliance

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "empowered teams" | "Support your team with intuitive tools" | "Empowers/empowered" is on banned phrases list |

---

## Hospital Page Changes

### Softened Unverifiable Claims

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "Save 3+ hours daily" | "Reduce time spent on manual paperwork" | Unverified time claim; focus on benefit |
| "Never lose data" | "designed to minimize loss" | Absolute claim; technically impossible |
| "Join thousands of healthcare facilities" | "Join hospitals across the Philippines" | Consistent; page-appropriate language |

### Context Corrections

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "clinics nationwide are switching" | "hospitals are choosing" | Wrong context; this is hospital page |
| "trusted choice for clinics nationwide" | "trusted choice for hospitals across the Philippines" | Wrong context; page-appropriate |

### Brand Voice Compliance

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "Staff Empowerment" (title) | "Staff Support" | "Empowerment" is on banned phrases list |

### Clarity Improvements

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "60" (wait times) | "60%" (Reduced Wait Times) | Missing unit; unclear without context |
| "24" (availability) | "24/7" (System Availability) | Missing unit; unclear without context |
| "improve patient outcomes" | "deliver better care" | Consistent with homepage pattern |

---

## Diagnostics Page Changes

### Softened Unverifiable Claims

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "The best tool" | "A comprehensive platform" | Superlative claim; unverifiable |
| "Lives Saved" metric | "Patients Served" | Problematic metric; implies causation |

### Context Corrections

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "clinics nationwide are switching" | "diagnostic centers are choosing" | Wrong context; this is diagnostics page |
| "trusted choice for clinics nationwide" | "trusted choice for diagnostic centers across the Philippines" | Wrong context; page-appropriate |

### Clarity Improvements

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "improve diagnostics" | "deliver better patient care" | Consistent pattern; clearer value |
| "Medical Records" (stat label) | "Test Results Delivered" | More specific to diagnostics context |

---

## What Was NOT Changed (Phase 1)

1. **Statistics values** - Kept as-is pending business verification
2. **CSI Guarantee claims** - Flagged for verification but not changed
3. **Core page structure** - Section order and hierarchy unchanged
4. **Specialty-specific terminology** - LIS, RIS, PACS terminology preserved

---

## Claims Flagged for Verification (Phase 1)

See `docs/claims-to-verify.md` for complete list including:

1. **Hospital statistics** - 500K OPD visits, 60% wait time reduction, 24/7 availability
2. **Diagnostics statistics** - 1.7M test results, 1.45M patients, 780 partners
3. **CSI Guarantee** - Formal definition and coverage

---

## Testing Recommendations (Phase 1)

1. Review clinics, hospital, and diagnostics pages in staging
2. Verify statistics banner displays correctly with updated labels
3. Confirm page-specific language is contextually appropriate
4. Check navigation consistency across product pages

---

# Phase 2: Specialty Pages (Dental, Skin, Telehealth)

**Date:** 2026-01-02

---

## Critical Change: Duplicate Advantages Sections

Both dental and skin pages had **identical** "Advantages" sections copied from the clinics page. These were completely rewritten with specialty-specific content.

### Dental Page - New Advantages Section

| Original (Generic) | New (Specialty-Specific) |
|-------------------|--------------------------|
| HIPAA-Compliant Telehealth Platform | Interactive Digital Dental Charting |
| Gain New Insights Into Your Clinic | Streamlined Treatment Planning |
| A Lifeline for Your Clinic | Dental-Specific Inventory Management |
| Easy Appointment Booking | Easy Appointment Booking for Patients |

**Rationale:** The generic HIPAA/insights/lifeline content was not relevant to dental practices. New content focuses on tooth charting, treatment planning, and dental supplies.

### Skin Page - New Advantages Section

| Original (Generic) | New (Specialty-Specific) |
|-------------------|--------------------------|
| HIPAA-Compliant Telehealth Platform | Before/After Photo Management |
| Gain New Insights Into Your Clinic | Client Relationship Management |
| A Lifeline for Your Clinic | Aesthetic Treatment Tracking |
| Easy Appointment Booking | Product & Service Sales |

**Rationale:** Aesthetic clinics need photo galleries, injectable tracking, and retail POS. Uses "client" terminology appropriate for beauty industry.

---

## Dental Page Changes

### Context Corrections

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "clinics nationwide are switching" | "dental practices are choosing" | Wrong context; this is dental page |
| "trusted choice for clinics nationwide" | "dental practices across the Philippines" | Wrong context; page-appropriate |
| "improve outcomes" | "deliver better patient care" | Consistent pattern |
| "Join thousands of dental clinics" | "Join dental practices across the Philippines" | Inconsistent count claim |

---

## Skin Page Changes

### Context Corrections

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "clinics nationwide are switching" | "aesthetic clinics are choosing" | Wrong context; this is skin page |
| "trusted choice for clinics nationwide" | "aesthetic clinics across the Philippines" | Wrong context; page-appropriate |
| "superior patient outcomes" | "better client experiences" | Softer; uses industry-appropriate "client" |
| "every medical field" | "aesthetic and dermatology services" | Page-specific context |

---

## Telehealth Page Changes

### Softened Revenue Claims

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "increase revenue" (hero description) | Removed | Unverifiable revenue claim |
| "increase revenue, and improve" (solutions description) | Removed | Unverifiable revenue claim |
| "Increase Your Revenue" (card title) | "Grow Your Practice" | Softer, aspirational language |

### Context Corrections

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "clinics nationwide are switching" | "healthcare providers are choosing" | More appropriate for telehealth context |
| "trusted choice for clinics nationwide" | "healthcare providers across the Philippines" | Page-appropriate context |

### Brand Voice Compliance

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "Military-grade encryption" | "Enterprise-grade encryption" | Less hyperbolic; still strong |

---

## What Was NOT Changed (Phase 2)

1. **Telehealth Advantages section** - Already unique and specialty-specific
2. **Statistics values** - Kept as-is pending business verification
3. **Core page structure** - Section order and hierarchy unchanged
4. **Specialty-specific terminology** - Injectable, filler, Botox terminology preserved

---

## Claims Flagged for Verification (Phase 2)

See `docs/claims-to-verify.md` for complete list including:

1. **Dental statistics** - Uses company-wide numbers; may need specialty-specific data
2. **Skin statistics** - 500K client records, 2M treatments, 10+ years
3. **Telehealth statistics** - 850K+ virtual consultations, 780 partner providers

---

## Testing Recommendations (Phase 2)

1. Review dental, skin, and telehealth pages in staging
2. Verify new Advantages sections render correctly with new icons
3. Confirm specialty-specific terminology is contextually appropriate
4. Check that skin page uses "client" consistently vs "patient"
5. Verify telehealth video showcases correct video (different from other pages)

---

# Phase 3: Enterprise & Feature Pages (Corporate, Mobile-Labs, Booking)

**Date:** 2026-01-02

---

## Critical Change: Unverified Performance Claims

The booking page contained multiple specific percentage claims that were unverified. These have been softened to focus on benefits without specific numbers.

---

## Corporate Page Changes

### Softened Unverifiable Claims

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "save millions in healthcare costs" | "manage healthcare costs" | Unverifiable financial claim |
| "reducing wastage significantly" | "helping reduce wastage" | Vague "significantly"; softer language |
| "reducing claim rejections significantly" | "helping reduce claim rejections" | Vague "significantly"; softer language |

---

## Mobile-Labs Page Changes

### Context Corrections

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "mobile labs nationwide are switching" | "mobile labs are choosing" | Consistent with other pages |
| "trusted choice for clinics nationwide" | "trusted choice for mobile labs across the Philippines" | Wrong context; this is mobile-labs page |

### Clarity Improvements

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "saving hours daily" | Removed | Unverified time claim; focus on automation benefit |

---

## Booking Page Changes

### Softened Performance Claims (HIGH PRIORITY)

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "reduce no-shows by 70%" | "help reduce no-shows" | Unverified percentage claim |
| "Set up in 10 minutes" | "Set up in minutes" | Specific time claim; softer language |
| "Reduced wait times by 70%" | "Help reduce wait times" | Unverified percentage claim |
| "reduce no-shows by 40%" | "help reduce no-shows" | Unverified percentage claim |
| "Save 3+ hours daily" | "Save time" | Unverified time claim |
| "Join thousands of healthcare facilities" | "Join healthcare facilities across the Philippines" | Inconsistent with facility count |

---

## What Was NOT Changed (Phase 3)

1. **Corporate statistics** - 250K employees, 500 corporate clients, 10+ years (flagged for verification)
2. **Mobile-labs statistics** - Uses company-wide numbers (consistent with homepage)
3. **Booking testimonials** - Real customer quotes preserved
4. **Core page structure** - Section order and hierarchy unchanged

---

## Claims Flagged for Verification (Phase 3)

See `docs/claims-to-verify.md` for complete list including:

1. **Corporate statistics** - 250K employees served, 500+ corporate clients
2. **Booking performance claims** - Original 70%, 40%, 3+ hours claims (now softened but may want to restore if verified)

---

## Testing Recommendations (Phase 3)

1. Review corporate, mobile-labs, and booking pages in staging
2. Verify booking page still communicates value without specific percentages
3. Confirm mobile-labs page uses correct context language
4. Check corporate page statistics display correctly

---

# Phase 4: Document Pages (Our-Story, Syncbase-Technology, Download)

**Date:** 2026-01-02

---

## Our-Story Page

**No changes needed.** The founder story page contains authentic narrative content with no brand voice violations or unverifiable claims.

---

## Syncbase-Technology Page Changes

### Brand Voice Compliance

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "Data consolidation occurs seamlessly" | "Data consolidation occurs smoothly" | "Seamlessly" is on banned phrases list |

---

## Download Page Changes

### Brand Voice Compliance

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "Work seamlessly with your entire staff" | "Work smoothly with your entire staff" | "Seamlessly" is on banned phrases list |

### Softened Unverifiable Claims

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "Award-winning apps for every device" | "Apps for every device" | "Award-winning" is unverified claim |
| "Trusted by thousands of healthcare professionals worldwide" | "Trusted by healthcare professionals across the Philippines" | "Thousands" is inconsistent with facility count; "worldwide" conflicts with Philippines focus |
| "Join thousands of healthcare providers" | "Join healthcare providers across the Philippines" | Same inconsistency issue |

### Consistency Fixes

| Original | Changed To | Rationale |
|----------|------------|-----------|
| "14-day free trial" | "15-day free trial" | All other pages use "15-day"; maintain consistency |

---

## What Was NOT Changed (Phase 4)

1. **Our-story content** - Authentic founder narrative preserved completely
2. **Syncbase technical details** - Technical accuracy preserved
3. **Download platform information** - App store details unchanged
4. **Core page structure** - Section order and hierarchy unchanged

---

## Testing Recommendations (Phase 4)

1. Review syncbase-technology and download pages in staging
2. Verify "15-day" trial period is consistent across all pages
3. Confirm "across the Philippines" language matches other pages
4. Check download page still communicates value without "Award-winning"

---

# Metadata Audit (Layout Files)

**Date:** 2026-01-02

---

## Overview

Audited all page layout.tsx files for metadata consistency with copy cleanup changes. Found 4 issues where metadata descriptions contained claims that were softened in the main copy.

---

## Fixes Applied

### hospital/layout.tsx

| Field | Original | Changed To | Rationale |
|-------|----------|------------|-----------|
| description | "reduce wait times by 60%" | "reduce wait times" | Unverified percentage removed |
| openGraph.url | "https://www.mycure.md/hospital" | "https://mycure.md/hospital" | URL consistency (no www) |

### dental/layout.tsx

| Field | Original | Changed To | Rationale |
|-------|----------|------------|-----------|
| description | "seamless billing" | "integrated billing" | "seamless" is banned phrase |

### booking/layout.tsx

| Field | Original | Changed To | Rationale |
|-------|----------|------------|-----------|
| description | "in 10 minutes, reduce no-shows by 70%" | "in minutes and help reduce no-shows" | Specific claims removed |
| openGraph.description | "in 10 minutes" | "in minutes" | Consistency with main description |
| twitter.description | "in 10 minutes" | "in minutes" | Consistency with main description |

### syncbase-technology/layout.tsx

| Field | Original | Changed To | Rationale |
|-------|----------|------------|-----------|
| description | "Work seamlessly" | "Work smoothly" | "seamlessly" is banned phrase |
| description | "The holy grail of online-offline technology" | "Advanced online-offline technology" | Hyperbolic claim softened |

---

## What Was NOT Changed

1. **OG Images** - All product/feature pages have proper OG images configured
2. **Canonical URLs** - All pages have proper canonical URLs
3. **Keywords** - No changes needed to keyword metadata
4. **Page titles** - All titles are appropriate and SEO-friendly

---

## Flagged for Future Work

The following pages are missing openGraph.images (lower priority):
- our-story/layout.tsx
- syncbase-technology/layout.tsx
- download/layout.tsx

These pages will use the default OG image from the root layout.

---

## Testing Recommendations (Metadata)

1. Validate OG images render correctly using Facebook/LinkedIn debuggers
2. Confirm meta descriptions appear correctly in search results preview
3. Verify canonical URLs resolve properly
4. Test Twitter Card validator for all pages
