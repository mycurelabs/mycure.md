import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Culture",
  description:
    "When in MYCURE: a healthcare technology company born to save lives. Explore our values and what life on the team is like, then find your role.",
  keywords: [
    "MYCURE culture",
    "MYCURE team",
    "healthcare technology company Philippines",
    "MYCURE careers",
    "work at MYCURE",
  ],
  openGraph: {
    title: "Culture | MYCURE",
    description:
      "See our values and what life at MYCURE is like at a healthcare technology company transforming clinics across the Philippines.",
    url: "https://mycure.md/culture",
    siteName: "MYCURE",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-banners/mycure-og-banner.webp",
        width: 1200,
        height: 630,
        alt: "MYCURE Culture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Culture | MYCURE",
    description:
      "See our values and what life at MYCURE is like at a healthcare technology company transforming clinics across the Philippines.",
    images: ["/og-banners/mycure-og-banner.webp"],
  },
  alternates: {
    canonical: "https://mycure.md/culture",
  },
}

export default function CultureLayout({ children }: { children: React.ReactNode }) {
  return children
}
