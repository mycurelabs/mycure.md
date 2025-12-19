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
