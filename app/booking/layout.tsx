import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MYCURE Booking - Easy Booking App to Grow Your Practice',
  description: 'Accept online appointments 24/7 with MYCURE Booking. Set up your booking page in 10 minutes, reduce no-shows by 70%. Grow your practice.',
  keywords: 'online booking, appointment scheduling, medical booking system, patient appointments, clinic scheduling, healthcare booking',
  openGraph: {
    title: 'MYCURE Booking - Easy Booking App to Grow Your Practice',
    description: 'Accept online appointments 24/7 with MYCURE Booking. Set up your professional booking page in 10 minutes.',
    url: 'https://mycure.md/booking',
    siteName: 'MYCURE',
    locale: 'en_US',
    type: 'website',
  },
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}