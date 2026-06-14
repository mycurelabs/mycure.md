import { jsonLdString } from "./utils"

export function MedicalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "MYCURE",
    url: "https://mycure.md",
    logo: "https://mycure.md/mycure-logo.svg",
    description:
      "MYCURE is a clinic management system and electronic medical records (EMR) platform serving healthcare providers across the Philippines.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "The Malayan Plaza, ADB Avenue, corner Opal Road, Ortigas Center",
      addressLocality: "Pasig",
      addressRegion: "Metro Manila",
      postalCode: "1600",
      addressCountry: "PH",
    },
    telephone: "+63 2 7799 6262",
    areaServed: {
      "@type": "Country",
      name: "Philippines",
    },
    sameAs: [
      "https://www.facebook.com/mycure.md",
      "https://www.instagram.com/mycure.md/",
      "https://www.linkedin.com/company/mycure",
      "https://x.com/mycuremd",
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString(schema) }}
    />
  )
}
