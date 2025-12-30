import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clinic Management Software | MYCURE for Outpatient Clinics',
  description: 'Streamline your clinic operations with MYCURE. Complete EMR, scheduling, billing, and PhilHealth integration for Philippine outpatient clinics.',
  keywords: 'clinic management software, outpatient clinic EMR, clinic scheduling system, Philippine clinic software, patient management system',
  openGraph: {
    title: 'Clinic Management Software | MYCURE for Outpatient Clinics',
    description: 'Streamline your clinic operations with MYCURE. Complete EMR, scheduling, billing, and PhilHealth integration.',
    url: 'https://mycure.md/clinics',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: '/section-assets/clinic-page/outpatient-clinics-hero-section.png',
        width: 1200,
        height: 630,
        alt: 'MYCURE Clinic Management Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinic Management Software | MYCURE for Outpatient Clinics',
    description: 'Streamline your clinic operations with MYCURE. Complete EMR, scheduling, billing, and PhilHealth integration.',
    images: ['/section-assets/clinic-page/outpatient-clinics-hero-section.png'],
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
