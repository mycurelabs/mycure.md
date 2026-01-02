import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/magicui/scroll-progress"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics as GoogleAnalytics } from "@/components/analytics"
import { Footer } from "@/components/sections/Footer"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://mycure.md"),
  title: {
    default: "MYCURE - Clinic Management System for Philippine Healthcare",
    template: "%s | MYCURE",
  },
  description: "Streamline your clinic with MYCURE. Trusted by leading Philippine healthcare providers. HIPAA compliant, works offline. Free trial.",
  keywords: [
    "clinic management system",
    "healthcare management software",
    "EMR Philippines",
    "electronic medical records",
    "clinic software Philippines",
        "HIPAA compliant healthcare software",
    "patient management system",
    "medical practice management",
    "healthcare automation",
  ],
  authors: [{ name: "MYCURE", url: "https://mycure.md" }],
  creator: "MYCURE by TOPSI Inc.",
  publisher: "TOPSI Inc.",
  generator: null,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://mycure.md",
    siteName: "MYCURE",
    title: "MYCURE - Clinic Management System for Philippine Healthcare",
    description: "Transform your healthcare practice with MYCURE. Trusted by leading Philippine healthcare providers. HIPAA compliant, works offline.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MYCURE - Clinic Management System for Philippine Healthcare",
    description: "Transform your healthcare practice with MYCURE. Trusted by leading Philippine healthcare providers.",
    creator: "@mycaboret",
  },
  alternates: {
    canonical: "https://mycure.md",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <StructuredData />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            <ScrollProgress />
            {children}
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
