import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mobile Laboratory Software | MYCURE for Mobile Labs',
  description: 'Field-ready laboratory management for mobile diagnostics. Offline-capable, GPS tracking, and real-time sync for Philippine mobile lab services.',
  keywords: 'mobile lab software, field laboratory management, mobile diagnostics, home service lab, Philippine mobile laboratory',
  openGraph: {
    title: 'Mobile Laboratory Software | MYCURE for Mobile Labs',
    description: 'Field-ready laboratory management with offline capability and GPS tracking.',
    url: 'https://mycure.md/mobile-labs',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mycure.md/mobile-labs',
  },
}

export default function MobileLabsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
