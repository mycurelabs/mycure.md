import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clinic Management Software | MYCURE for Outpatient Clinics',
  description: 'Streamline your clinic operations with MYCURE. Complete EMR, scheduling, and comprehensive billing for Philippine outpatient clinics.',
  keywords: 'clinic management software, outpatient clinic EMR, clinic scheduling system, Philippine clinic software, patient management system',
  openGraph: {
    title: 'Clinic Management Software | MYCURE for Outpatient Clinics',
    description: 'Streamline your clinic operations with MYCURE. Complete EMR, scheduling, and comprehensive billing.',
    url: 'https://mycure.md/clinics',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: '/og-banners/mycure-og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'MYCURE Clinic Management Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinic Management Software | MYCURE for Outpatient Clinics',
    description: 'Streamline your clinic operations with MYCURE. Complete EMR, scheduling, and comprehensive billing.',
    images: ['/og-banners/mycure-og-banner.webp'],
  },
  alternates: {
    canonical: 'https://mycure.md/clinics',
  },
}

export default function ClinicsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
