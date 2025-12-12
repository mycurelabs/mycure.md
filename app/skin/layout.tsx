import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dermatology Clinic Software | MYCURE for Skin Clinics',
  description: 'Specialized software for dermatology and aesthetic clinics. Photo documentation, treatment tracking, and patient management for Philippine skin clinics.',
  keywords: 'dermatology software, skin clinic EMR, aesthetic clinic management, derma clinic software, Philippine dermatology software',
  openGraph: {
    title: 'Dermatology Clinic Software | MYCURE for Skin Clinics',
    description: 'Specialized software for dermatology clinics with photo documentation and treatment tracking.',
    url: 'https://mycure.md/skin',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mycure.md/skin',
  },
}

export default function SkinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
