import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MYCURE - Syncbase Technology',
  description: 'MYCURE Syncbase: Advanced online-offline technology. Work smoothly with or without internet connectivity for healthcare management.',
  alternates: {
    canonical: 'https://mycure.md/syncbase-technology',
  },
}

export default function SyncbaseTechnologyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}