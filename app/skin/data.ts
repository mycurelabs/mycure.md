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
      id: "digital-medical-records",
      icon: FileText,
      title: "Digital Medical Records",
      description:
        "Turn paper charts into secure digital records with complete treatment history and client preferences",
    },
    {
      id: "smart-attachments",
      icon: Camera,
      title: "Smart Attachments",
      description:
        "Turn physical before/after photos into organized digital galleries with treatment tracking and progress documentation",
    },
    {
      id: "point-of-sales",
      icon: DollarSign,
      title: "Point-of-Sales",
      description:
        "Convert complex billing into streamlined payment processing with product sales and package management",
    },
    {
      id: "inventory-management",
      icon: Package,
      title: "Inventory Management",
      description:
        "Change supply chaos into automated inventory tracking for skincare products and aesthetic supplies",
    },
    {
      id: "works-offline",
      icon: WifiOff,
      title: "Works Offline",
      description:
        "Turn connectivity worries into confidence with offline-capable system that syncs when ready",
    },
    {
      id: "team-communication",
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
    "Discover why aesthetic clinics are choosing MYCURE's integrated workflow that connects every touchpoint—from booking to billing—in one intuitive platform that your entire team can master in minutes.",
  image: {
    src: "/section-assets/clinic-page/clinic-journey.webp",
    alt: "MYCURE Patient Journey Flow - From Appointments to Billing",
  },
  footnote:
    "Every touchpoint works together smoothly—eliminating paperwork, reducing wait times, and ensuring a complete client experience from start to finish.",
}

export const statisticsConfig: StatisticsConfig = {
  headline: "Trusted by Healthcare Facilities Across the Philippines",
  description:
    "MYCURE helps aesthetic clinics deliver better client experiences through modern clinic management technology.",
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
    "MYCURE adapts to your practice with specialized workflows for aesthetic and dermatology services. Experience technology designed for beauty and skincare professionals.",
  items: [
    {
      id: "medical-dermatology",
      icon: Sparkles,
      title: "Medical Dermatology",
      description:
        "Comprehensive skin condition management with diagnosis tracking, treatment protocols, and medication history",
    },
    {
      id: "cosmetic-treatments",
      icon: Star,
      title: "Cosmetic Treatments",
      description:
        "Advanced aesthetic procedure management including injectables, chemical peels, and non-invasive treatments",
    },
    {
      id: "laser-therapy",
      icon: Zap,
      title: "Laser Therapy",
      description:
        "Laser treatment tracking with session management, parameter recording, and outcome documentation",
    },
    {
      id: "injectables-fillers",
      icon: Heart,
      title: "Injectables & Fillers",
      description:
        "Detailed injection mapping, product tracking, and treatment interval management for Botox and dermal fillers",
    },
    {
      id: "body-contouring",
      icon: TrendingUp,
      title: "Body Contouring",
      description:
        "Body sculpting and contouring treatment plans with progress tracking and measurement documentation",
    },
    {
      id: "medical-spa-services",
      icon: Shield,
      title: "Medical Spa Services",
      description:
        "Full-service medical spa management including facials, wellness treatments, and therapeutic services",
    },
  ],
}

export const advantagesConfig: AdvantagesConfig = {
  badge: "The MYCURE Advantage",
  headline: "Why Aesthetic Clinics Choose MYCURE",
  description:
    "Experience the features that make MYCURE the trusted choice for aesthetic clinics across the Philippines.",
  items: [
    {
      title: "Before/After Photo Management",
      description:
        "Document treatment progress with organized photo galleries. Compare results across sessions and share outcomes with clients to build confidence in your services.",
      icon: Camera,
      image: "/section-assets/clinic-page/carousel/carousel-hipaa-compliance.webp",
      bullets: [
        "Secure before/after photo galleries organized by treatment",
        "Side-by-side comparison views for client consultations",
        "Treatment progress tracking with dated documentation",
      ],
    },
    {
      title: "Client Relationship Management",
      description:
        "Build lasting relationships with comprehensive client profiles. Track preferences, treatment history, and product purchases to deliver personalized experiences.",
      icon: Heart,
      image: "/section-assets/clinic-page/carousel/carousel-insights.webp",
      bullets: [
        "Complete client profiles with preferences and treatment history",
        "Product purchase history for personalized recommendations",
        "Loyalty tracking and package management",
      ],
    },
    {
      title: "Aesthetic Treatment Tracking",
      description:
        "Track injectable placements, treatment intervals, and session schedules. Help ensure proper timing between treatments and maintain treatment protocols.",
      icon: Sparkles,
      image: "/section-assets/clinic-page/carousel/carousel-lifeline.webp",
      bullets: [
        "Injectable mapping for Botox and filler placements",
        "Treatment interval tracking for proper scheduling",
        "Session history with dosage and product documentation",
      ],
    },
    {
      title: "Product & Service Sales",
      description:
        "Integrated point-of-sale for skincare products and treatment packages. Manage retail inventory alongside clinic services in one system.",
      icon: DollarSign,
      image: "/section-assets/clinic-page/carousel/carousel-booking.webp",
      bullets: [
        "Sell skincare products directly through the system",
        "Package deals and treatment bundles management",
        "Inventory tracking for retail and professional products",
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
    "Join leading aesthetic clinics that trust MYCURE Beauty to improve client experiences and operational efficiency.",
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
