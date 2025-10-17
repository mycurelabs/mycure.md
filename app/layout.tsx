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

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MYCURE - Enterprise Healthcare Practice Management Solutions",
  description: "Transform your healthcare practice with MYCURE's comprehensive clinic management system. Streamline operations, enhance patient care, and grow your practice with our all-in-one healthcare platform.",
  generator: null,
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
      <body className={inter.className}>
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            <ScrollProgress />
            {children}
          </TooltipProvider>
        </ThemeProvider>
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
