import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MYCURE - Our Story',
  description: 'MYCURE starts and ends with real people. Learn about our journey from a personal struggle to a healthcare solution that helps millions.',
  openGraph: {
    title: 'MYCURE - Our Story',
    description: 'MYCURE starts and ends with real people. Learn about our journey from a personal struggle to a healthcare solution that helps millions.',
    url: 'https://mycure.md/our-story',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: '/og-banners/mycure-og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'MYCURE - Our Story',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MYCURE - Our Story',
    description: 'MYCURE starts and ends with real people. Learn about our journey from a personal struggle to a healthcare solution that helps millions.',
    images: ['/og-banners/mycure-og-banner.webp'],
  },
  alternates: {
    canonical: 'https://mycure.md/our-story',
  },
}

export default function OurStoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}