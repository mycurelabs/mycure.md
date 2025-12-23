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
    logo: "https://mycure.md/logo.png",
    description:
      "MYCURE is a comprehensive healthcare management platform designed specifically for Philippine healthcare providers. Trusted by 2,900+ clinics and hospitals.",
    foundingDate: "2013",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PH",
      },
    },
    sameAs: [
      "https://www.facebook.com/mycaboret",
      "https://www.linkedin.com/company/mycaboret",
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
      "PhilHealth Integration",
      "HIPAA Compliance",
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
    potentialAction: {
      "@type": "SearchAction",
      target: "https://mycure.md/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
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
          text: "MYCURE is a comprehensive healthcare management platform designed specifically for clinics and healthcare facilities. We streamline your practice operations while maintaining HIPAA compliance and operational efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "How much does MYCURE cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MYCURE offers flexible pricing plans designed for healthcare facilities of all sizes, from small clinics to large hospitals. Our plans include all essential features with transparent pricing and no hidden fees. Contact us or start a free trial to explore the best option for your practice.",
        },
      },
      {
        "@type": "Question",
        name: "Is MYCURE compliant with healthcare regulations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, MYCURE is designed to be HIPAA compliant and supports Philippine healthcare requirements including PhilHealth integration, DOH reporting, and secure patient data management.",
        },
      },
      {
        "@type": "Question",
        name: "What platforms does MYCURE support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MYCURE works on Mac computers through Chromium-based browsers (Chrome, Edge, Brave). Our platform is optimized for these environments to deliver the best performance and reliability.",
        },
      },
      {
        "@type": "Question",
        name: "Can I try MYCURE before committing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Start with our 15-day free trial that includes full platform access and no credit card requirement. We'll provide you with a demo app link to explore the platform at your own pace.",
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
