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
