import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MYCURE - Security Overview',
  description: 'An overview of MYCURE\'s approach to security, including shared responsibility, data protection, access controls, and incident response.',
  openGraph: {
    title: 'MYCURE - Security Overview',
    description: 'An overview of MYCURE\'s approach to security, including shared responsibility, data protection, access controls, and incident response.',
    url: 'https://mycure.md/security-overview',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: '/og-banners/mycure-og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'MYCURE - Security Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MYCURE - Security Overview',
    description: 'An overview of MYCURE\'s approach to security, including shared responsibility, data protection, access controls, and incident response.',
    images: ['/og-banners/mycure-og-banner.webp'],
  },
  alternates: {
    canonical: 'https://mycure.md/security-overview',
  },
}

export default function SecurityOverviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
