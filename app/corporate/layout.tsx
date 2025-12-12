import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corporate Clinic Software | MYCURE for Occupational Health',
  description: 'Enterprise healthcare management for corporate clinics. Employee health tracking, APE management, and compliance reporting for Philippine companies.',
  keywords: 'corporate clinic software, occupational health system, employee health management, APE software, Philippine corporate healthcare',
  openGraph: {
    title: 'Corporate Clinic Software | MYCURE for Occupational Health',
    description: 'Enterprise healthcare management with employee health tracking and APE management.',
    url: 'https://mycure.md/corporate',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mycure.md/corporate',
  },
}

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
