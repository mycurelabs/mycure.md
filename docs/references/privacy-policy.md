# Privacy Policy Page - Section Order Reference

**File**: `/app/privacy-policy/page.tsx`  
**Route**: `/privacy-policy`  
**Last Updated**: 2025-09-02

## Current Section Arrangement

### 1. Navigation Header
- Fixed navigation with scroll effect
- Logo and navigation menu
- Mobile menu support

### 2. Hero Section (Line ~145)
- Page title: "Privacy Policy"
- Subtitle: "Your Privacy is Our Priority"
- Last updated date
- Muted background with border

### 3. Main Content Container (Line ~168)
- Two-column layout with sidebar
- Privacy policy sections with consistent spacing

### 4. Privacy Policy Sections

#### Section 1: Introduction (Line ~187)
- Overview of privacy commitment
- Scope of the policy
- MYCURE's approach to data protection

#### Section 2: Information We Collect (Line ~205)
- Personal information types
- Healthcare information
- Usage data
- Technical information
- Detailed categories with examples

#### Section 3: Lawful Basis for Processing (Line ~246)
- Legal grounds for data processing
- Consent mechanisms
- Legitimate interests
- Compliance requirements

#### Section 4: How We Use Information (Line ~279)
- Service provision
- Healthcare management
- Communication purposes
- Analytics and improvements
- Comprehensive use cases

#### Section 5: Sharing and Disclosure (Line ~320)
- Third-party sharing policies
- Healthcare provider sharing
- Legal requirements
- Business transfers

#### Section 6: Data Retention (Line ~353)
- Retention periods
- Deletion policies
- Archive practices
- Legal compliance timelines

#### Section 7: Data Security (Line ~385)
- Security measures
- Encryption practices
- Access controls
- Incident response

#### Section 8: User Rights (Line ~418)
- Access rights
- Correction rights
- Deletion rights
- Data portability
- Objection rights
- Detailed GDPR/privacy rights

#### Section 9: Children's Privacy (Line ~462)
- Age restrictions
- Parental consent
- Special protections

#### Section 10: International Data Transfers (Line ~477)
- Cross-border transfers
- Safeguards
- Adequacy decisions

#### Section 11: Data Breach Notification (Line ~492)
- Breach response procedures
- Notification timelines
- User communications

#### Section 12: Changes to This Policy (Line ~517)
- Update procedures
- Notification methods
- Version control

#### Section 13: Contact Information (Line ~532)
- Contact details
- Data protection officer
- Complaint procedures

### 5. Sidebar Components (Line ~554)
- Table of Contents (sticky)
- Quick navigation to all 13 sections
- Smooth scroll anchors

### 6. Footer Section (Line ~650+)
- Company information
- Resource links
- Support links
- Legal links (including Privacy Policy)
- Contact information

## Key Features
- Framer Motion animations for smooth transitions
- Responsive design with mobile menu
- Sticky sidebar for easy navigation
- Comprehensive privacy coverage
- GDPR-compliant structure

## Technical Notes
- Client-side component with "use client" directive
- Uses shadcn/ui Accordion components (imported but may be used elsewhere)
- Dark mode support via next-themes
- Professional legal document formatting
- Accessibility-focused design