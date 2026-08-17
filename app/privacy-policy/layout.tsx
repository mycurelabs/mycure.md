import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MYCURE - Privacy Notice',
  description: 'How Team OPS Inc. dba MYCURE processes personal data across its websites, MYCURE CMS, patient-facing features, integrations, and related services.',
  openGraph: {
    title: 'MYCURE - Privacy Notice',
    description: 'How Team OPS Inc. dba MYCURE processes personal data across its websites, MYCURE CMS, patient-facing features, integrations, and related services.',
    url: 'https://mycure.md/privacy-policy',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: '/og-banners/mycure-og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'MYCURE - Privacy Notice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MYCURE - Privacy Notice',
    description: 'How Team OPS Inc. dba MYCURE processes personal data across its websites, MYCURE CMS, patient-facing features, integrations, and related services.',
    images: ['/og-banners/mycure-og-banner.webp'],
  },
  alternates: {
    canonical: 'https://mycure.md/privacy-policy',
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
