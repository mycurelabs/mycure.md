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
  },
}

export default function TelehealthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}