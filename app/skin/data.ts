import {
  FileText,
  Camera,
  DollarSign,
  Package,
  WifiOff,
  MessageCircle,
  Sparkles,
  Star,
  Zap,
  Heart,
  TrendingUp,
  Shield,
  BarChart,
  Cloud,
  Calendar,
} from "lucide-react"
import type {
  HeroConfig,
  SolutionsGridConfig,
  VideoShowcaseConfig,
  FeatureJourneyConfig,
  StatisticsConfig,
  SpecialtiesGridConfig,
  AdvantagesConfig,
  FinalCtaConfig,
} from "@/components/types/product-page"

export const heroConfig: HeroConfig = {
  badge: "MYCURE Beauty",
  headline: {
    prefix: "The Premier",
    highlight: "Aesthetic & Skin Clinic",
    suffix: "Management Platform",
  },
  description:
    "Easy appointment booking, inventory management, and secure client records with relationship management, analytics and reporting designed specifically for aesthetic and dermatology clinics.",
  image: {
    src: "/hero-section-assets/skin-clinics-hero-image.webp",
    alt: "MYCURE Beauty - Aesthetic clinic reception and treatment areas",
  },
  cta: {
    text: "Book a Demo",
    href: "https://calendly.com/mycure/demo",
  },
}

export const solutionsGridConfig: SolutionsGridConfig = {
  badge: "Elevate Your Beauty Business",
  headline: "Turn Beauty Services Into Client Experiences",
  description:
    "See how MYCURE Beauty turns aesthetic clinics into thriving businesses with intelligent client management and treatment tracking",
  items: [
    {
      icon: FileText,
      title: "Digital Medical Records",
      description:
        "Turn paper charts into secure digital records with complete treatment history and client preferences",
    },
    {
      icon: Camera,
      title: "Smart Attachments",
      description:
        "Turn physical before/after photos into organized digital galleries with treatment tracking and progress documentation",
    },
    {
      icon: DollarSign,
      title: "Point-of-Sales",
      description:
        "Convert complex billing into streamlined payment processing with product sales and package management",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description:
        "Change supply chaos into automated inventory tracking for skincare products and aesthetic supplies",
    },
    {
      icon: WifiOff,
      title: "Works Offline",
      description:
        "Turn connectivity worries into confidence with offline-capable system that syncs when ready",
    },
    {
      icon: MessageCircle,
      title: "Team Communication",
      description:
        "Replace fragmented communication with built-in chat for smooth clinic coordination",
    },
  ],
}

export const videoShowcaseConfig: VideoShowcaseConfig = {
  badge: "Complete Clinic Solution",
  headline: "Everything Your Clinic Needs.\nNothing It Doesn't.",
  description:
    "MYCURE brings together the three core functions every clinic depends on—medical records, patient scheduling, and billing—in one comprehensive platform that works offline and helps reduce admin time.",
  cta: {
    text: "Schedule a Walkthrough",
    href: "https://calendly.com/mycure/demo",
  },
  video: {
    src: "https://www.youtube-nocookie.com/embed/KL4tCmttTPs",
    title: "MYCURE Clinic Management Platform - Complete Solution",
  },
}

export const featureJourneyConfig: FeatureJourneyConfig = {
  badge: "End-to-End Workflow",
  headline: "How MYCURE Automates Your Entire Patient Workflow",
  description:
    "Discover why clinics nationwide are switching to MYCURE's integrated workflow that connects every touchpoint—from booking to billing—in one intuitive platform that your entire team can master in minutes.",
  image: {
    src: "/section-assets/clinic-page/clinic-journey.webp",
    alt: "MYCURE Patient Journey Flow - From Appointments to Billing",
  },
  footnote:
    "Every touchpoint works together smoothly—eliminating paperwork, reducing wait times, and ensuring a complete client experience from start to finish.",
}

export const statisticsConfig: StatisticsConfig = {
  headline: "Trusted by Healthcare Providers Across the Philippines",
  description:
    "MYCURE is dedicated to help healthcare providers save lives every day through innovative clinic management technology.",
  items: [
    { value: 500000, label: "Client Records", suffix: "+", delay: 0.3 },
    { value: 2000000, label: "Treatments Performed", suffix: "+", delay: 0.4 },
    { value: 10, label: "Years in Healthcare", suffix: "+", delay: 0.5 },
  ],
}

export const specialtiesGridConfig: SpecialtiesGridConfig = {
  badge: "Specialized Workflows",
  headline: "One Platform. Every Specialty.",
  description:
    "MYCURE adapts to your practice with specialized workflows for every medical field. Experience healthcare technology that speaks your specialty's language.",
  items: [
    {
      icon: Sparkles,
      title: "Medical Dermatology",
      description:
        "Comprehensive skin condition management with diagnosis tracking, treatment protocols, and medication history",
    },
    {
      icon: Star,
      title: "Cosmetic Treatments",
      description:
        "Advanced aesthetic procedure management including injectables, chemical peels, and non-invasive treatments",
    },
    {
      icon: Zap,
      title: "Laser Therapy",
      description:
        "Laser treatment tracking with session management, parameter recording, and outcome documentation",
    },
    {
      icon: Heart,
      title: "Injectables & Fillers",
      description:
        "Detailed injection mapping, product tracking, and treatment interval management for Botox and dermal fillers",
    },
    {
      icon: TrendingUp,
      title: "Body Contouring",
      description:
        "Body sculpting and contouring treatment plans with progress tracking and measurement documentation",
    },
    {
      icon: Shield,
      title: "Medical Spa Services",
      description:
        "Full-service medical spa management including facials, wellness treatments, and therapeutic services",
    },
  ],
}

export const advantagesConfig: AdvantagesConfig = {
  badge: "The MYCURE Advantage",
  headline: "Why Clinics Choose MYCURE",
  description:
    "Experience the features that make MYCURE the trusted choice for clinics nationwide.",
  items: [
    {
      title: "HIPAA-Compliant Telehealth Platform",
      description:
        "Your patients' privacy matters to us, which is why we've gone the extra mile to meet the standards of the United States' Health Insurance Portability and Accountability Act (HIPAA).",
      icon: Shield,
      image: "/section-assets/clinic-page/carousel/carousel-hipaa-compliance.webp",
      bullets: [
        "End-to-end encrypted video consultations protecting patient privacy",
        "HIPAA-compliant storage and transmission of all telehealth records",
        "Integrated billing for virtual consultations with automatic documentation",
      ],
    },
    {
      title: "Gain New Insights Into Your Clinic",
      description:
        "Thanks to the daily reports tool on MYCURE, you'll be able to identify problems before they result in inconveniences for your patients and staff.",
      icon: BarChart,
      image: "/section-assets/clinic-page/carousel/carousel-insights.webp",
      bullets: [
        "Real-time dashboards showing patient flow and clinic performance metrics",
        "Automated daily reports highlighting areas for improvement",
        "Historical trend reports to help plan for busy periods and staffing needs",
      ],
    },
    {
      title: "A Lifeline for Your Clinic",
      description:
        "Use MYCURE Clinics' cloud-based system to digitize your patients' records. You'll be able to glance over electronic copies of complete health records all in one place!",
      icon: Cloud,
      image: "/section-assets/clinic-page/carousel/carousel-lifeline.webp",
      bullets: [
        "Instant access to complete patient histories from any device",
        "Automatic backups ensuring your data is never lost",
        "Smooth migration from paper records with our digitization support",
      ],
    },
    {
      title: "Easy Appointment Booking for Your Patients",
      description:
        "Make booking appointments easy for your patients with MYCURE Booking. Your patients can use the app to see your availability and book appointments.",
      icon: Calendar,
      image: "/section-assets/clinic-page/carousel/carousel-booking.webp",
      bullets: [
        "24/7 online booking reducing phone calls and administrative work",
        "Smart scheduling that prevents double-booking and optimizes clinic time",
        "Automated reminders helping reduce no-shows",
      ],
    },
  ],
}

export const finalCtaConfig: FinalCtaConfig = {
  headline: {
    prefix: "Ready to",
    highlight: "elevate",
    suffix: "your beauty business?",
  },
  description:
    "Join leading aesthetic clinics who trust MYCURE Beauty to improve their client experiences and grow their practices.",
  cta: {
    text: "Book Your Demo",
    href: "https://calendly.com/mycure/demo",
  },
  features: [
    "No setup fees",
    "15-day Free Trial",
    "Training via webinars",
    "Cancel anytime",
  ],
}
