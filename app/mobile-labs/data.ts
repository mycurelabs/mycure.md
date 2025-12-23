import {
  Clock,
  Zap,
  Users,
  CalendarCheck,
  Star,
  FileCheck,
  TestTube,
  Activity,
  Route,
  CreditCard,
  Download,
  Wifi,
  WifiOff,
  MapPin,
  Shield,
  MessageSquare,
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
  badge: "MYCURE Mobile Labs",
  headline: {
    prefix: "The Simplest",
    highlight: "Clinic Management System",
    suffix: "for Mobile Labs",
  },
  description:
    "MYCURE Diagnostics is an easy to use, secure, cloud-based clinic information system that you can set up no matter where your mobile lab is based.",
  image: {
    src: "/hero-section-assets/mobile-labs-clinics-hero-image.webp",
    alt: "MYCURE Mobile Labs - Mobile diagnostic services interface",
  },
  cta: {
    text: "Book a Demo",
    href: "https://calendly.com/mycure/demo",
  },
}

export const solutionsGridConfig: SolutionsGridConfig = {
  badge: "Improve Your Mobile Lab",
  headline: "Turn Daily Challenges Into Success Stories",
  description:
    "See how MYCURE Mobile Labs turns common mobile lab challenges into powerful operational advantages",
  items: [
    {
      id: "wasted-time-resources",
      icon: Clock,
      title: "Wasted Time & Resources",
      description:
        "Turn manual processes into automated workflows saving hours daily with location-based registrations",
    },
    {
      id: "long-wait-times",
      icon: Zap,
      title: "Long Wait Times",
      description:
        "Turn patient delays into quick turnarounds with mobile-optimized scheduling and queue management",
    },
    {
      id: "overworked-staff",
      icon: Users,
      title: "Overworked Staff",
      description:
        "Convert staff stress into productivity with an easy-to-use system designed for mobile operations",
    },
    {
      id: "cancelled-appointments",
      icon: CalendarCheck,
      title: "Cancelled Appointments",
      description:
        "Change no-shows into confirmed visits using automated reminders and flexible mobile booking",
    },
    {
      id: "frustrated-patients",
      icon: Star,
      title: "Frustrated Patients",
      description:
        "Turn complaints into satisfaction with mobile-friendly patient portals and instant results",
    },
    {
      id: "error-prone-reports",
      icon: FileCheck,
      title: "Error-prone Reports",
      description:
        "Replace manual errors with digital accuracy through automated validation on-the-go",
    },
  ],
}

export const videoShowcaseConfig: VideoShowcaseConfig = {
  badge: "Complete Mobile Solution",
  headline: "Everything Your Mobile Lab Needs.\nNothing It Doesn't.",
  description:
    "MYCURE brings together the core functions every mobile lab depends on—patient registration, sample tracking, and result delivery—in one comprehensive platform that works anywhere, anytime.",
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
  badge: "Smooth Mobile Workflow",
  headline: "How MYCURE Automates Your Entire Mobile Lab Workflow",
  description:
    "Discover why mobile labs nationwide are switching to MYCURE's integrated workflow that handles location-based registrations with ease—from sample collection to result delivery.",
  image: {
    src: "/section-assets/diagnostics/diagnostics-workflow.webp",
    alt: "MYCURE Mobile Lab Workflow - From Sample Collection to Result Delivery",
  },
  footnote:
    "Every touchpoint works together smoothly—eliminating manual processes, tracking samples accurately, and ensuring timely results delivery regardless of location.",
}

export const statisticsConfig: StatisticsConfig = {
  headline: "Trusted by Healthcare Providers Across the Philippines",
  description:
    "MYCURE is dedicated to help healthcare providers save lives every day through innovative clinic management technology.",
  items: [
    { value: 13239859, label: "Medical Records", delay: 0.3 },
    { value: 2946953, label: "Patients Served", delay: 0.4 },
    { value: 6242974, label: "Transactions Completed", delay: 0.5 },
  ],
}

export const specialtiesGridConfig: SpecialtiesGridConfig = {
  badge: "Specialized Workflows",
  headline: "One Platform. Every Specialty.",
  description:
    "MYCURE adapts to your practice with specialized workflows for every medical field. Experience healthcare technology that speaks your specialty's language.",
  items: [
    {
      id: "sample-collection",
      icon: TestTube,
      title: "Sample Collection",
      description:
        "On-site sample collection with barcode tracking and chain of custody management",
    },
    {
      id: "field-testing",
      icon: Activity,
      title: "Field Testing",
      description:
        "Point-of-care testing with instant result processing and validation",
    },
    {
      id: "route-management",
      icon: Route,
      title: "Route Management",
      description:
        "Optimize daily routes and schedule multiple location visits efficiently",
    },
    {
      id: "mobile-billing",
      icon: CreditCard,
      title: "Mobile Billing",
      description:
        "Process payments on-site with integrated insurance verification",
    },
    {
      id: "result-delivery",
      icon: Download,
      title: "Result Delivery",
      description:
        "Instant digital delivery of results to patients and referring physicians",
    },
    {
      id: "offline-sync",
      icon: Wifi,
      title: "Offline Sync",
      description:
        "Work smoothly offline and auto-sync when connectivity is restored",
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
      title: "Work Online or Offline",
      description:
        "With MYCURE Syncbase, work as if you have an in-house server with all cloud conveniences. Even if the Internet is down, you can still create records on any device.",
      icon: WifiOff,
      image: "/section-assets/clinic-page/carousel/carousel-network.webp",
      bullets: [
        "Continue working even without internet connectivity",
        "Automatic synchronization when connection is restored",
        "Local data storage ensures uninterrupted mobile lab operations",
      ],
    },
    {
      title: "Location-Based Registration",
      description:
        "Handle multiple locations with ease using GPS-enabled patient registration and automated location tracking for compliance.",
      icon: MapPin,
      image: "/section-assets/clinic-page/carousel/carousel-insights.webp",
      bullets: [
        "GPS-enabled check-ins for accurate location tracking",
        "Multi-site schedule management from a single dashboard",
        "Automated mileage and route tracking for reporting",
      ],
    },
    {
      title: "Protected by MYCURE CSI Guarantee",
      description:
        "As a healthcare provider, your patients trust you with their private electronic health records. We protect that information with our CSI guarantee.",
      icon: Shield,
      image: "/section-assets/clinic-page/carousel/carousel-hipaa-compliance.webp",
      bullets: [
        "Compliance with healthcare regulations and standards",
        "Security with encrypted data and secure access controls",
        "Interoperability with HL7-ready integration capabilities",
      ],
    },
    {
      title: "Maintain Communication with Lab Staff",
      description:
        "MYCURE Mobile Labs comes with its own chat feature, allowing everyone in your team to stay in touch throughout the day.",
      icon: MessageSquare,
      image: "/section-assets/clinic-page/carousel/carousel-lifeline.webp",
      bullets: [
        "Coordinate sample collections across multiple locations",
        "Real-time updates on test results and urgent findings",
        "Team messaging for efficient field operations",
      ],
    },
  ],
}

export const finalCtaConfig: FinalCtaConfig = {
  headline: {
    prefix: "Ready to",
    highlight: "mobilize",
    suffix: "your diagnostic services?",
  },
  description:
    "Join hundreds of mobile labs who trust MYCURE to streamline their operations and deliver better patient care anywhere.",
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
