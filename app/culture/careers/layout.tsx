import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Careers | MYCURE" },
  description:
    "Join MYCURE—a healthcare technology company transforming clinics across the Philippines. Explore open roles in software engineering and customer support.",
  keywords: [
    "MYCURE careers",
    "healthcare tech jobs Philippines",
    "software engineer healthcare",
    "healthcare tech jobs Manila",
  ],
  openGraph: {
    title: "Careers | MYCURE",
    description:
      "Build healthcare technology that matters. Explore open roles in software engineering and customer support at MYCURE.",
    url: "https://mycure.md/culture/careers",
    siteName: "MYCURE",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-banners/mycure-og-banner.webp",
        width: 1200,
        height: 630,
        alt: "Careers at MYCURE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | MYCURE",
    description:
      "Build healthcare technology that matters. Explore open roles at MYCURE.",
    images: ["/og-banners/mycure-og-banner.webp"],
  },
  alternates: {
    canonical: "https://mycure.md/culture/careers",
  },
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children
}
