import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diagnostic Center Software | MYCURE for Labs & Imaging',
  description: 'Complete laboratory and imaging center management. LIS integration, result tracking, and automated reporting for Philippine diagnostic centers.',
  keywords: 'diagnostic center software, laboratory information system, LIS Philippines, imaging center management, medical lab software',
  openGraph: {
    title: 'Diagnostic Center Software | MYCURE for Labs & Imaging',
    description: 'Complete laboratory and imaging center management with LIS integration and automated reporting.',
    url: 'https://mycure.md/diagnostics',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: '/hero-section-assets/diagnostics-clinics-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'MYCURE Diagnostic Center Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diagnostic Center Software | MYCURE for Labs & Imaging',
    description: 'Complete laboratory and imaging center management with LIS integration and automated reporting.',
    images: ['/hero-section-assets/diagnostics-clinics-hero-image.webp'],
  },
  alternates: {
    canonical: 'https://mycure.md/diagnostics',
  },
}

export default function DiagnosticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
