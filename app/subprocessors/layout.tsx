import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MYCURE - Subprocessor List',
  description: 'Third-party service providers that MYCURE may use to provide, host, secure, support, maintain, or improve the MYCURE platform and related services.',
  openGraph: {
    title: 'MYCURE - Subprocessor List',
    description: 'Third-party service providers that MYCURE may use to provide, host, secure, support, maintain, or improve the MYCURE platform and related services.',
    url: 'https://mycure.md/subprocessors',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: '/og-banners/mycure-og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'MYCURE - Subprocessor List',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MYCURE - Subprocessor List',
    description: 'Third-party service providers that MYCURE may use to provide, host, secure, support, maintain, or improve the MYCURE platform and related services.',
    images: ['/og-banners/mycure-og-banner.webp'],
  },
  alternates: {
    canonical: 'https://mycure.md/subprocessors',
  },
}

export default function SubprocessorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
