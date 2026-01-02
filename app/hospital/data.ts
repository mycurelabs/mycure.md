import {
  Clock,
  Zap,
  Users,
  CalendarCheck,
  Star,
  FileX,
  Building2,
  Shield,
  MessageSquare,
  WifiOff,
  Globe,
  BarChart,
  Cloud,
  Calendar,
} from "lucide-react"
import type {
  HeroConfig,
  IconCardGridConfig,
  VideoShowcaseConfig,
  FeatureJourneyConfig,
  StatisticsConfig,
  AdvantagesConfig,
  FinalCtaConfig,
} from "@/components/types/product-page"

export const heroConfig: HeroConfig = {
  badge: "MYCURE Hospitals",
  headline: {
    prefix: "Robust CMS and EMR for",
    highlight: "Modern Hospital OPD",
    suffix: "",
  },
  description:
    "Keep your hospital's outpatient department operations running smoothly with MYCURE Hospital-OPD. Designed for OPD clinics of all sizes, from small departments to large multi-specialty hospitals.",
  image: {
    src: "/hero-section-assets/hospital-opd-hero-image.webp",
    alt: "MYCURE Hospital OPD - Modern hospital outpatient department management",
  },
  cta: {
    text: "Book a Demo",
    href: "https://calendly.com/mycure/demo",
  },
}

export const solutionsGridConfig: IconCardGridConfig = {
  sectionId: "solutions",
  badge: "Improve Your Hospital OPD",
  headline: "Turn Daily Challenges Into Success Stories",
  description:
    "See how MYCURE Hospitals transforms common OPD challenges into operational advantages for hospital systems",
  items: [
    {
      id: "time-resource-savings",
      icon: Clock,
      title: "Time & Resource Savings",
      description:
        "Reduce time spent on manual paperwork by automating OPD workflows and documentation",
    },
    {
      id: "reduced-wait-times",
      icon: Zap,
      title: "Reduced Wait Times",
      description:
        "Cut patient wait times with smart queuing and efficient appointment management",
    },
    {
      id: "staff-support",
      icon: Users,
      title: "Staff Support",
      description:
        "Reduce staff workload with intuitive tools designed for busy hospital environments",
    },
    {
      id: "appointment-control",
      icon: CalendarCheck,
      title: "Appointment Control",
      description:
        "Reduce cancellations with automated reminders and easy rebooking systems",
    },
    {
      id: "patient-satisfaction",
      icon: Star,
      title: "Patient Satisfaction",
      description:
        "Boost patient satisfaction scores with smooth OPD experiences and shorter wait times",
    },
    {
      id: "error-free-reports",
      icon: FileX,
      title: "Error-Free Reports",
      description:
        "Generate accurate, compliance-ready reports automatically in seconds, not hours",
    },
  ],
}

export const videoShowcaseConfig: VideoShowcaseConfig = {
  badge: "Complete Hospital OPD Solution",
  headline: "Everything Your Clinic Needs.\nNothing It Doesn't.",
  description:
    "MYCURE brings together the three core functions every hospital OPD depends on—medical records, patient scheduling, and billing—in one comprehensive platform that works offline and helps reduce admin time.",
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
    "Discover why hospitals are choosing MYCURE's integrated workflow that connects every touchpoint—from booking to billing—in one intuitive platform that your entire team can master in minutes.",
  image: {
    src: "/section-assets/clinic-page/clinic-journey.webp",
    alt: "MYCURE Patient Journey Flow - From Appointments to Billing",
  },
  footnote:
    "Every touchpoint works together smoothly—eliminating paperwork, reducing wait times, and ensuring a complete patient experience from start to finish.",
}

export const statisticsConfig: StatisticsConfig = {
  headline: "Trusted by Healthcare Facilities Across the Philippines",
  description:
    "MYCURE helps hospitals deliver better care through modern healthcare management technology.",
  items: [
    { value: 500000, label: "OPD Visits Managed", delay: 0.3 },
    { value: 60, label: "% Reduced Wait Times", delay: 0.4 },
    { value: 24, label: "/7 System Availability", delay: 0.5 },
  ],
}

export const specialtiesGridConfig: IconCardGridConfig = {
  sectionId: "specialties",
  badge: "Hospital-Grade Workflows",
  headline: "One Platform. Every Specialty.",
  description:
    "MYCURE adapts to hospital operations with specialized workflows for every medical field. Experience healthcare technology that speaks your specialty's language.",
  items: [
    {
      id: "multi-department-integration",
      icon: Building2,
      title: "Multi-Department Integration",
      description:
        "Easily connect your OPD with other hospital departments for unified patient care and smooth referrals",
    },
    {
      id: "csi-guarantee",
      icon: Shield,
      title: "CSI Guarantee",
      description:
        "Hospital-grade security with Compliance, Security, and Interoperability built into every feature",
    },
    {
      id: "staff-communication",
      icon: MessageSquare,
      title: "Staff Communication",
      description:
        "Built-in secure messaging for instant coordination between OPD staff and other departments",
    },
    {
      id: "offline-capability",
      icon: WifiOff,
      title: "Offline Capability",
      description:
        "Continue operations even without internet with MYCURE Syncbase technology",
    },
    {
      id: "mycure-one-network",
      icon: Globe,
      title: "MYCURE One Network",
      description:
        "Expand your reach with professional profiles that help new patients find and book appointments",
    },
    {
      id: "advanced-analytics",
      icon: BarChart,
      title: "Advanced Analytics",
      description:
        "Real-time OPD performance metrics and automated daily reports for data-driven decisions",
    },
  ],
}

export const advantagesConfig: AdvantagesConfig = {
  badge: "The MYCURE Advantage",
  headline: "Why Hospitals Choose MYCURE",
  description:
    "Experience the features that make MYCURE the trusted choice for hospitals across the Philippines.",
  items: [
    {
      title: "A Lifeline for Your OPD Clinic",
      description:
        "Digitize your entire OPD operations with cloud-based records that grow with your hospital. Access complete patient histories instantly from any department.",
      icon: Cloud,
      image: "/section-assets/clinic-page/carousel/carousel-lifeline.webp",
      bullets: [
        "Complete electronic health records accessible across departments",
        "Prior illnesses, vaccinations, and medications all in one place",
        "Automatic backups with enterprise-grade security",
      ],
    },
    {
      title: "Easy Appointment Booking for Your Patients",
      description:
        "Let patients book OPD appointments 24/7 with MYCURE Booking. Show real-time availability for multiple doctors and specialties in your hospital.",
      icon: Calendar,
      image: "/section-assets/clinic-page/carousel/carousel-booking.webp",
      bullets: [
        "Patients see all available doctors and time slots instantly",
        "Helps reduce reception desk workload",
        "Smart scheduling prevents overbooking and optimizes doctor time",
      ],
    },
    {
      title: "Reach New Patients with MYCURE One Network",
      description:
        "Expand your hospital's reach with a professional profile on MYCURE One. Let patients find your OPD services and book appointments directly.",
      icon: Globe,
      image: "/section-assets/clinic-page/carousel/carousel-network.webp",
      bullets: [
        "Professional hospital profile showcasing all OPD services",
        "Patients can search by specialty, location, and availability",
        "Direct appointment booking from search results",
      ],
    },
    {
      title: "Maintain Communication Across Departments",
      description:
        "Built-in secure messaging keeps your entire OPD team connected. Coordinate with other departments without interrupting patient care.",
      icon: MessageSquare,
      image: "/section-assets/clinic-page/carousel/carousel-insights.webp",
      bullets: [
        "Instant messaging between OPD staff and departments",
        "Share patient updates and lab results securely",
        "Reduce phone calls and physical document transfers",
      ],
    },
    {
      title: "Online or Offline - Always Operational",
      description:
        "With MYCURE Syncbase, your OPD never stops. Work offline during internet outages and automatically sync when connection returns.",
      icon: WifiOff,
      image: "/section-assets/clinic-page/carousel/carousel-hipaa-compliance.webp",
      bullets: [
        "Continue seeing patients even without internet",
        "All devices sync automatically when back online",
        "Data protection designed to minimize loss during connectivity issues",
      ],
    },
  ],
}

export const finalCtaConfig: FinalCtaConfig = {
  headline: {
    prefix: "Ready to",
    highlight: "improve",
    suffix: "your hospital operations?",
  },
  description:
    "Join hospitals across the Philippines that trust MYCURE to streamline their OPD operations and improve patient care.",
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
