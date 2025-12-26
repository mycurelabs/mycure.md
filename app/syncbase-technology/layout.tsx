import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MYCURE - Syncbase Technology',
  description: 'MYCURE Syncbase: The holy grail of online-offline technology. Work seamlessly with or without internet connectivity for healthcare management.',
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