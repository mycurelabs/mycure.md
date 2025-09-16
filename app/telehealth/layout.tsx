import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Start Your Virtual Practice | MYCURE Telehealth',
  description: 'Everything you need to build your telemedicine practice. Give patients quality telehealth care without in-person visits. Expand your practice reach, increase revenue, and provide convenient virtual consultations.',
  keywords: 'telehealth, telemedicine, virtual consultations, online medical practice, video consultations, remote healthcare, digital health platform',
  openGraph: {
    title: 'Start Your Virtual Practice | MYCURE Telehealth',
    description: 'Launch your telemedicine practice with MYCURE\'s complete virtual care platform.',
    url: 'https://mycure.md/telehealth',
    siteName: 'MYCURE',
    images: [
      {
        url: '/og-telehealth.png',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function TelehealthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}