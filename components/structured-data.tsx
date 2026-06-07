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
      url: "https://calendly.com/mycure/demo",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "PHP",
        description: "Custom pricing for multi-specialty clinics and enterprise healthcare organizations.",
      },
      description: "15-day free trial. Contact for a pricing quote tailored to your clinic.",
    },
    featureList: [
      "Electronic Medical Records (EMR)",
      "Patient Registration",
      "Appointment Scheduling",
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
    description: "Comprehensive clinic management system for Philippine healthcare providers",
    publisher: {
      "@type": "Organization",
      name: "MYCURE",
      url: "https://mycure.md",
    },
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
    </>
  );
}
