# MYCURE Landing Page - Section Order Reference

**File**: `/app/page.tsx`  
**Route**: `/` (root)  
**Last Updated**: 2025-09-02

## Current Section Arrangement

### 1. Hero Section (Line 391)
- Main value proposition with video
- Email capture form
- Primary CTA buttons
- Video embed section
- Custom radial gradient background (light blue base with darker blue overlays)

### 2. Logos Section (Line 494) 
- "Trusted by" partner/client logos showcase
- Border styling with muted background
- Two-row layout (5 logos top row, 3 logos bottom row)
- Native CSS tooltips showing clinic names on hover

### 3. Features Section (Line 575)
- 5 main feature cards grid
- ID: #features
- Covers: Physicians, Outpatient Clinics, Diagnostics, Scheduling, Offline work

### 4. Medical Data Tracker Section (Line 619)
- Statistics showcase: 2.7M medical records, 1.5M patients served, 1.5K partners
- Same custom radial gradient background as Hero Section
- "Trusted by Healthcare Providers Worldwide"

### 5. Image + Content Features Section (Line 695)
- 4 detailed healthcare-focused features with accompanying images
- HIPAA Security & Compliance
- Seamless Offline Operations
- Simplified PhilHealth Claims Management
- Effortless Clinical Workflows
- Each feature includes CTA buttons
- Muted background

### 6. Company Visibility Features Section (Line 928)
- "Visibility for your entire clinic"
- 4 sub-features with updated descriptions:
  - Eliminate unnecessary tool costs with one comprehensive platform
  - Reduce administrative burden through intelligent automation
  - Improve patient satisfaction with seamless scheduling and optimized workflows
  - Protect revenue with automatic compliance monitoring and HIPAA security
- Full-container image layout (540×256px) with gradient borders
- Images use object-cover and object-top alignment

### 7. All-in-One Integration Section (Line 1263)
- "Healthcare that works together" messaging
- Healthcare-focused integration with existing workflows
- Floating healthcare integration icons: Laboratory, Imaging, Authentication, Billing, Pharmacy, Chat, Inventory, Queuing
- Visual integration showcase with healthcare-specific imagery

### 8. How It Works Timeline Section (Line 1458)
- Interactive 7-day implementation timeline
- Tabbed interface (Today, Day 3, Day 7)
- "What you can achieve with MYCURE in just 7 days"
- Free trial period: 15 days

### 9. FAQ Section (Line 1572)
- Accordion-style frequently asked questions
- ID: #faq
- Same custom radial gradient background as Hero Section

### 10. Final CTA Section (Line 1640)
- Additional call-to-action section
- Gradient background

### 11. Footer Section (Line 1703)
- Company information
- Navigation links
- Legal and contact information

## Hidden Sections (Temporarily Disabled)
- **Download Section** - "Take MYCURE with you everywhere"
- **Testimonials Section** - Customer testimonials grid  
- **Pricing Section** - Three-tier pricing plans

## Technical Notes
- Backup files available: 
  - page-backup-2025-08-20-092734.tsx
  - page-backup-2025-08-20-163147.tsx
- All sections maintain Framer Motion animations
- Scrollytelling section uses external library (@bsmnt/scrollytelling)
- Several sections have ID anchors for navigation
- Multiple sections with similar backgrounds/styling that could be consolidated