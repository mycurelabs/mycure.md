import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dental Practice Management Software | MYCURE for Dental Clinics',
  description: 'Purpose-built dental practice management. Digital dental charts, treatment planning, and integrated billing for Philippine dental clinics.',
  keywords: 'dental practice software, dental EMR, dental clinic management, dental chart software, Philippine dental software',
  openGraph: {
    title: 'Dental Practice Management Software | MYCURE for Dental Clinics',
    description: 'Purpose-built dental practice management with digital charts, treatment planning, and billing.',
    url: 'https://mycure.md/dental',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: '/hero-section-assets/dental-clinics-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'MYCURE Dental Practice Management Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Practice Management Software | MYCURE for Dental Clinics',
    description: 'Purpose-built dental practice management with digital charts, treatment planning, and billing.',
    images: ['/hero-section-assets/dental-clinics-hero-image.webp'],
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
  return children
}
