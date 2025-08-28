import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MYCURE - Terms and Conditions',
  description: 'Terms and Conditions for using MYCURE healthcare management services',
}

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}