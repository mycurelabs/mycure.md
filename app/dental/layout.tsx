import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dental Practice Management Software | MYCURE for Dental Clinics',
  description: 'Purpose-built dental practice management. Digital dental charts, treatment planning, and seamless billing for Philippine dental clinics.',
  keywords: 'dental practice software, dental EMR, dental clinic management, dental chart software, Philippine dental software',
  openGraph: {
    title: 'Dental Practice Management Software | MYCURE for Dental Clinics',
    description: 'Purpose-built dental practice management with digital charts, treatment planning, and billing.',
    url: 'https://mycure.md/dental',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mycure.md/dental',
  },
}

export default function DentalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
