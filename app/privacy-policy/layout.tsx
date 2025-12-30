import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MYCURE - Privacy Policy',
  description: 'Privacy Policy for MYCURE healthcare management services. Learn how we protect and handle your data.',
  alternates: {
    canonical: 'https://mycure.md/privacy-policy',
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
