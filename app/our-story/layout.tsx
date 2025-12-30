import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MYCURE - Our Story',
  description: 'MYCURE starts and ends with real people. Learn about our journey from a personal struggle to a healthcare solution that helps millions.',
  alternates: {
    canonical: 'https://mycure.md/our-story',
  },
}

export default function OurStoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}