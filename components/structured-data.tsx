/**
 * Structured Data (JSON-LD) for SEO
 *
 * SECURITY NOTE: This component uses dangerouslySetInnerHTML to inject JSON-LD
 * scripts. This is safe because:
 * 1. All schema data is statically defined within this file
 * 2. No user input or dynamic data is used in the schemas
 * 3. JSON.stringify() properly escapes the static objects
 *
 * If schema data ever becomes dynamic (e.g., from CMS or API), this must be
 * refactored to use proper sanitization or Next.js metadata API.
 */
export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MYCURE",
    url: "https://mycure.md",
    logo: "https://mycure.md/mycure-logo.svg",
    description:
      "MYCURE is a comprehensive healthcare management platform designed specifically for Philippine healthcare providers. Trusted by leading clinics and multi-specialty practices.",
    foundingDate: "2016",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PH",
      },
    },
    sameAs: [
      "https://www.facebook.com/mycure.md",
      "https://www.instagram.com/mycure.md/",
      "https://www.linkedin.com/company/mycure",
      "https://x.com/mycuremd",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://portal.mycure.md",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MYCURE",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PHP",
      description: "15-day free trial available",
    },
    featureList: [
      "Electronic Medical Records (EMR)",
      "Patient Registration",
      "Appointment Scheduling",
      "Data Privacy Act (RA 10173) Compliance",
      "PhilHealth eClaims 3.0 Submission",
      "Offline Capability",
      "Telehealth",
      "Laboratory Management",
      "Pharmacy Management",
      "Billing & Invoicing",
    ],
    screenshot: "https://mycure.md/og-image.png",
    softwareHelp: {
      "@type": "WebPage",
      url: "https://portal.mycure.md",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MYCURE",
    url: "https://mycure.md",
    description: "Comprehensive clinic management system for Philippine healthcare providers",
    publisher: {
      "@type": "Organization",
      name: "MYCURE",
      url: "https://mycure.md",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is MYCURE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MYCURE is an EMR and clinic management system built for Philippine healthcare providers, designed to comply with Republic Act 10173 (the Data Privacy Act of 2012) and National Privacy Commission (NPC) requirements. It supports the core clinical workflow — patient registration, charting, prescriptions, billing — from a single portal, with offline capability for clinics in areas with unreliable bandwidth.",
        },
      },
      {
        "@type": "Question",
        name: "How much does MYCURE cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MYCURE pricing is denominated in Philippine peso (PHP) and structured for Philippine clinics under the regulatory environment of the Data Privacy Act (RA 10173) and PhilHealth eClaims 3.0. Contact sales for a clinic-size-specific quote, or start the 15-day free trial without a credit card.",
        },
      },
      {
        "@type": "Question",
        name: "Is MYCURE compliant with healthcare regulations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MYCURE is built to comply with Republic Act 10173 (the Data Privacy Act of 2012) and operates under National Privacy Commission (NPC) requirements for Philippine healthcare providers. It is built to support PhilHealth eClaims 3.0 submission in line with PhilHealth Advisory PA2025-0076, with patient-privacy controls comparable to HIPAA standards for clinics serving international patients.",
        },
      },
      {
        "@type": "Question",
        name: "What platforms does MYCURE support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MYCURE runs in Google Chrome on Mac and Windows desktops used at Philippine clinics, and is designed to operate offline so patient records can be captured under Data Privacy Act (RA 10173) requirements even when internet access is intermittent.",
        },
      },
      {
        "@type": "Question",
        name: "Can I try MYCURE before committing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — MYCURE offers a 15-day free trial with full access to EMR, scheduling, and billing features built around PhilHealth eClaims 3.0 workflows and Data Privacy Act (RA 10173) controls. No credit card is required.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
