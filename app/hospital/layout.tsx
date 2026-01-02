import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospital OPD Management Software | MYCURE",
  description: "Streamline your hospital outpatient department with MYCURE's comprehensive CMS and EMR system. Manage multi-department operations, reduce wait times, and enhance patient care.",
  keywords: "hospital OPD software, outpatient management system, hospital CMS, hospital EMR, multi-department integration, healthcare management system, hospital patient management, OPD queue management, hospital appointment system, medical records management",
  openGraph: {
    title: "Hospital OPD Management Software | MYCURE",
    description: "Streamline your hospital outpatient department with MYCURE's comprehensive CMS and EMR system. Manage multi-department operations, reduce wait times, and enhance patient care.",
    type: "website",
    url: "https://mycure.md/hospital",
    images: [
      {
        url: "/hero-section-assets/hospital-opd-hero-image.webp",
        width: 1200,
        height: 630,
        alt: "MYCURE Hospital OPD Management System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital OPD Management Software | MYCURE",
    description: "Streamline your hospital outpatient department with MYCURE's comprehensive CMS and EMR system.",
    images: ["/hero-section-assets/hospital-opd-hero-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HospitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}