import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MYCURE - Terms of Agreement',
  description: 'Terms of Agreement governing access to and use of the MYCURE clinic management platform and related services.',
  openGraph: {
    title: 'MYCURE - Terms of Agreement',
    description: 'Terms of Agreement governing access to and use of the MYCURE clinic management platform and related services.',
    url: 'https://mycure.md/terms-and-conditions',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: '/og-banners/mycure-og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'MYCURE - Terms of Agreement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MYCURE - Terms of Agreement',
    description: 'Terms of Agreement governing access to and use of the MYCURE clinic management platform and related services.',
    images: ['/og-banners/mycure-og-banner.webp'],
  },
  alternates: {
    canonical: 'https://mycure.md/terms-and-conditions',
  },
}

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}