/**
 * Homepage FAQPage JSON-LD schema.
 *
 * Extracted from components/structured-data.tsx so that FAQPage only
 * renders on /, where the FAQ section is actually visible. Google's
 * guidance is that FAQPage schema should only appear on the page that
 * carries the FAQ content.
 *
 * Inlines the same `</` escape used by other schema components (replace `<`
 * with `<`) to defend against any future contributor piping user
 * input into the schema strings.
 */
export function HomeFAQSchema() {
  const schema = {
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
          text: "MYCURE offers flexible pricing plans for multi-specialty clinics and enterprise healthcare organizations. Our plans include all essential features with transparent pricing and no hidden fees. Contact us or start a free trial to explore the best option for your practice.",
        },
      },
      {
        "@type": "Question",
        name: "Is MYCURE compliant with healthcare regulations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, MYCURE is designed to be HIPAA compliant and supports Philippine healthcare requirements with secure patient data management.",
        },
      },
      {
        "@type": "Question",
        name: "What platforms does MYCURE support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MYCURE works on Mac and Windows computers through Google Chrome. Our platform is optimized for this environment to deliver the best performance and reliability.",
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
  }
  const jsonStr = JSON.stringify(schema).replace(/</g, "\\u003c")
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonStr }}
    />
  )
}
