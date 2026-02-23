import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MYCURE - Privacy Policy',
  description: 'Privacy Policy for MYCURE healthcare management services. Learn how we protect and handle your data.',
  openGraph: {
    title: 'MYCURE - Privacy Policy',
    description: 'Privacy Policy for MYCURE healthcare management services. Learn how we protect and handle your data.',
    url: 'https://mycure.md/privacy-policy',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: '/og-banners/mycure-og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'MYCURE - Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MYCURE - Privacy Policy',
    description: 'Privacy Policy for MYCURE healthcare management services. Learn how we protect and handle your data.',
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
