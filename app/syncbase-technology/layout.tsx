import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MYCURE - Syncbase Technology',
  description: 'MYCURE Syncbase: Advanced online-offline technology. Work smoothly with or without internet connectivity for healthcare management.',
  openGraph: {
    title: 'MYCURE - Syncbase Technology',
    description: 'MYCURE Syncbase: Advanced online-offline technology. Work smoothly with or without internet connectivity for healthcare management.',
    url: 'https://mycure.md/syncbase-technology',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: '/og-banners/mycure-og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'MYCURE - Syncbase Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MYCURE - Syncbase Technology',
    description: 'MYCURE Syncbase: Advanced online-offline technology. Work smoothly with or without internet connectivity for healthcare management.',
    images: ['/og-banners/mycure-og-banner.webp'],
  },
  alternates: {
    canonical: 'https://mycure.md/syncbase-technology',
  },
}

export default function SyncbaseTechnologyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}