import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Download MYCURE | Mac App for Healthcare Management',
  description: 'Download MYCURE for Mac. Works with Chrome, Edge, and Brave browsers. Start your 15-day free trial with no credit card required.',
  keywords: 'download MYCURE, MYCURE Mac app, healthcare software download, clinic management download',
  openGraph: {
    title: 'Download MYCURE | Mac App for Healthcare Management',
    description: 'Download MYCURE for Mac. Start your 15-day free trial with no credit card required.',
    url: 'https://mycure.md/download',
    siteName: 'MYCURE',
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download MYCURE | Mac App for Healthcare Management',
    description: 'Download MYCURE for Mac. Start your 15-day free trial with no credit card required.',
  },
  alternates: {
    canonical: 'https://mycure.md/download',
  },
}

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
