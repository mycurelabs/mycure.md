import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Start Your Virtual Practice | MYCURE Telehealth',
  description: 'Launch your telemedicine practice with MYCURE Telehealth. Video consultations, e-prescriptions, and secure patient care. Expand your reach.',
  keywords: 'telehealth, telemedicine, virtual consultations, online medical practice, video consultations, remote healthcare, digital health platform',
  openGraph: {
    title: 'Start Your Virtual Practice | MYCURE Telehealth',
    description: 'Launch your telemedicine practice with MYCURE\'s complete virtual care platform.',
    url: 'https://mycure.md/telehealth',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: '/og-banners/mycure-og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'MYCURE Telehealth - Virtual Care Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start Your Virtual Practice | MYCURE Telehealth',
    description: 'Launch your telemedicine practice with MYCURE\'s complete virtual care platform.',
    images: ['/og-banners/mycure-og-banner.webp'],
  },
  alternates: {
    canonical: 'https://mycure.md/telehealth',
  },
}

export default function TelehealthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}