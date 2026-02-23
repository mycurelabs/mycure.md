import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MYCURE - Terms and Conditions',
  description: 'Terms and Conditions for using MYCURE healthcare management services.',
  openGraph: {
    title: 'MYCURE - Terms and Conditions',
    description: 'Terms and Conditions for using MYCURE healthcare management services.',
    url: 'https://mycure.md/terms-and-conditions',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: '/og-banners/mycure-og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'MYCURE - Terms and Conditions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MYCURE - Terms and Conditions',
    description: 'Terms and Conditions for using MYCURE healthcare management services.',
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