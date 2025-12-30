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
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: '/hero-section-assets/booking-feature-hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'MYCURE Booking - Easy Appointment Scheduling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MYCURE Booking - Easy Booking App to Grow Your Practice',
    description: 'Accept online appointments 24/7 with MYCURE Booking. Set up your professional booking page in 10 minutes.',
    images: ['/hero-section-assets/booking-feature-hero-image.webp'],
  },
  alternates: {
    canonical: 'https://mycure.md/booking',
  },
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}