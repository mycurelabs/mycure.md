import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MYCURE - Terms of Service',
  description: 'Terms of Service governing access to and use of MYCURE CMS, related websites, applications, APIs, integrations, and services provided by Team OPS Inc. dba MYCURE.',
  openGraph: {
    title: 'MYCURE - Terms of Service',
    description: 'Terms of Service governing access to and use of MYCURE CMS, related websites, applications, APIs, integrations, and services provided by Team OPS Inc. dba MYCURE.',
    url: 'https://mycure.md/terms-and-conditions',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: '/og-banners/mycure-og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'MYCURE - Terms of Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MYCURE - Terms of Service',
    description: 'Terms of Service governing access to and use of MYCURE CMS, related websites, applications, APIs, integrations, and services provided by Team OPS Inc. dba MYCURE.',
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
