import {
  Clock,
  Zap,
  Users,
  CalendarCheck,
  Star,
  FileCheck,
  Beaker,
  Calendar,
  Activity,
  CreditCard,
  Download,
  Network,
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
  badge: "MYCURE Diagnostics",
  headline: {
    prefix: "Your",
    highlight: "Diagnostic Center",
    suffix: "Transformed",
  },
  description:
    "The best tool to streamline diagnostic laboratories and imaging centers' operations, automate routine tasks, and reduce costs and errors.",
  image: {
    src: "/hero-section-assets/diagnostics-clinics-hero-image.webp",
    alt: "MYCURE Diagnostics - Laboratory and imaging center interface",
  },
  cta: {
    text: "Get Started",
    href: "https://calendly.com/mycure/demo",
  },
}

export const solutionsGridConfig: SolutionsGridConfig = {
  badge: "Transform Your Clinic",
  headline: "Turn Daily Challenges Into Success Stories",
  description:
    "See how MYCURE Clinics transforms common clinic problems into powerful competitive advantages for your practice",
  items: [
    {
      icon: Clock,
      title: "Wasted Time & Resources",
      description:
        "Transform manual processes into automated workflows saving 3+ hours daily with seamless LIS/RIS integration",
    },
    {
      icon: Zap,
      title: "Long Wait Times",
      description:
        "Turn patient delays into quick turnarounds with smart appointment booking and automated queue management",
    },
    {
      icon: Users,
      title: "Overworked Staff",
      description:
        "Convert staff stress into productivity with an easy-to-use laboratory information system that simplifies complex tasks",
    },
    {
      icon: CalendarCheck,
      title: "Cancelled Appointments",
      description:
        "Change no-shows into confirmed visits using automated reminders and flexible online rebooking",
    },
    {
      icon: Star,
      title: "Frustrated Patients",
      description:
        "Transform complaints into satisfaction with online results access and patient portal convenience",
    },
    {
      icon: FileCheck,
      title: "Error-prone Reports",
      description:
        "Replace manual errors with digital accuracy through automated validation and standardized reporting",
    },
  ],
}

export const videoShowcaseConfig: VideoShowcaseConfig = {
  badge: "Complete Clinic Solution",
  headline: "Everything Your Clinic Needs.\nNothing It Doesn't.",
  description:
    "MYCURE brings together the three core functions every clinic depends on—medical records, patient scheduling, and billing—in one comprehensive platform that works offline and reduces admin time by 60%.",
  cta: {
    text: "Get Started",
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
    "Every touchpoint works together seamlessly—eliminating paperwork, reducing wait times, and ensuring a complete patient experience from start to finish.",
}

export const statisticsConfig: StatisticsConfig = {
  headline: "Trusted by Healthcare Providers Worldwide",
  description:
    "MYCURE is dedicated to help healthcare providers save lives every day through innovative clinic management technology.",
  items: [
    { value: 1700000, label: "Medical Records", delay: 0.3 },
    { value: 1450000, label: "Lives Saved", delay: 0.4 },
    { value: 780, label: "Partner Providers", delay: 0.5 },
  ],
}

export const specialtiesGridConfig: SpecialtiesGridConfig = {
  badge: "Specialized Workflows",
  headline: "One Platform. Every Specialty.",
  description:
    "MYCURE adapts to your practice with specialized workflows for every medical field. Experience healthcare technology that speaks your specialty's language.",
  items: [
    {
      icon: Beaker,
      title: "Laboratory Information System (LIS)",
      description:
        "Complete lab workflow automation from sample collection to result delivery with barcode tracking and quality control",
    },
    {
      icon: Calendar,
      title: "Booking System",
      description:
        "Smart appointment scheduling with automated confirmations, queue management, and walk-in handling",
    },
    {
      icon: Activity,
      title: "Radiology Information System (RIS)",
      description:
        "Comprehensive imaging center management with PACS integration, modality worklists, and structured reporting",
    },
    {
      icon: CreditCard,
      title: "Billing",
      description:
        "Integrated payment processing with insurance claims, package deals, and automated invoicing",
    },
    {
      icon: Download,
      title: "Online Results",
      description:
        "Instant digital test results delivery with secure patient portals and automated notifications",
    },
    {
      icon: Network,
      title: "Interoperability",
      description:
        "HL7-ready integration connecting with hospitals, clinics, and healthcare providers seamlessly",
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
      title: "Easy to Integrate. Easy to Use.",
      description:
        "Connect seamlessly with healthcare providers and expand your diagnostic center's reach.",
      icon: Network,
      image: "/section-assets/clinic-page/carousel/carousel-network.webp",
      bullets: [
        "Get more customers through referrals from connected clinics",
        "Easily validate prescriptions and test orders",
        "Promote your diagnostic services across the network",
      ],
    },
    {
      title: "Send Test Results Instantly",
      description:
        "Give your patients quick access to their test results through the MYCURE app for patients.",
      icon: Download,
      image: "/section-assets/clinic-page/carousel/carousel-insights.webp",
      bullets: [
        "Patient Portal for Diagnostic Tests with secure access",
        "Tabulated Cumulative Results for easy comparison",
        "Quick Appointment Booking directly from results page",
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
        "MYCURE Diagnostics comes with its own chat feature, allowing everyone in your lab to stay in touch on busy days.",
      icon: MessageSquare,
      image: "/section-assets/clinic-page/carousel/carousel-lifeline.webp",
      bullets: [
        "Office staff can ask questions about billing without interrupting workflows",
        "Communicate with other techs at your lab quickly and efficiently",
        "Coordinate sample processing and result verification seamlessly",
      ],
    },
  ],
}

export const finalCtaConfig: FinalCtaConfig = {
  headline: {
    prefix: "Ready to",
    highlight: "transform",
    suffix: "your diagnostic center?",
  },
  description:
    "Join hundreds of labs and imaging centers who trust MYCURE to streamline their operations and deliver better patient care.",
  cta: {
    text: "Transform Your Diagnostic Center",
    href: "https://calendly.com/mycure/demo",
  },
  features: [
    "No setup fees",
    "15-day Free Trial",
    "Training via webinars",
    "Cancel anytime",
  ],
}
