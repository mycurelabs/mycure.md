import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MYCURE - Terms and Conditions',
  description: 'Terms and Conditions for using MYCURE healthcare management services.',
  openGraph: {
    title: 'MYCURE - Terms and Conditions',
    description: 'Terms and Conditions for using MYCURE healthcare management services.',
    url: 'https://mycure.md/terms-and-conditions',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MYCURE - Terms and Conditions',
    description: 'Terms and Conditions for using MYCURE healthcare management services.',
  },
  alternates: {
    canonical: 'https://mycure.md/terms-and-conditions',
  },
}

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}