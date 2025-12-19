import {
  TrendingUp,
  Users,
  ShieldCheck,
  Building2,
  Video,
  Clock,
  MessageSquare,
  Calendar,
  FileX,
  Shield,
  Globe,
  Zap,
  BarChart,
  Cloud,
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
  badge: "MYCURE Telehealth",
  headline: {
    prefix: "Everything You Need to Build Your",
    highlight: "Telemedicine Practice",
    suffix: "",
  },
  description:
    "Give your patients the quality telehealth care they deserve, without having to visit in-person. Expand your practice reach, increase revenue, and provide convenient virtual consultations.",
  image: {
    src: "/hero-section-assets/telehealth-feature-hero-image.webp",
    alt: "MYCURE Telehealth - Virtual consultations and telemedicine platform",
  },
  cta: {
    text: "Get Started",
    href: "https://calendly.com/mycure/demo",
  },
}

export const solutionsGridConfig: SolutionsGridConfig = {
  badge: "Virtual Practice Solutions",
  headline: "Transform Your Practice with Telehealth",
  description:
    "See how virtual consultations can expand your practice reach, increase revenue, and improve patient satisfaction",
  items: [
    {
      icon: TrendingUp,
      title: "Increase Your Revenue",
      description:
        "Treat more patients and reduce no-shows by 40% with secure video consultations and automated reminders",
    },
    {
      icon: Users,
      title: "Build Your Clientele",
      description:
        "Expand your practice beyond physical hours and build patient loyalty with convenient virtual care options",
    },
    {
      icon: ShieldCheck,
      title: "Secure Medical Records",
      description:
        "Keep patient data safe with HIPAA-compliant storage and international data privacy regulations",
    },
    {
      icon: Building2,
      title: "Group Practice Ready",
      description:
        "Coordinate seamlessly with other physicians and centralize medical records in one comprehensive workspace",
    },
    {
      icon: Video,
      title: "Conference Calls",
      description:
        "Host multi-participant video consultations for group therapy, family consultations, or team meetings",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Let patients book appointments anytime through your professional booking website",
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
    src: "https://www.youtube-nocookie.com/embed/9gxJX_eokC0",
    title: "MYCURE Telehealth - Virtual Care Platform",
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
    { value: 850000, label: "Virtual Consultations", suffix: "+", delay: 0.3 },
    { value: 95, label: "Patient Satisfaction", suffix: "%", delay: 0.4 },
    { value: 40, label: "Reduced No-Shows", suffix: "%", delay: 0.5 },
  ],
}

export const specialtiesGridConfig: SpecialtiesGridConfig = {
  badge: "Telehealth Features",
  headline: "Complete Virtual Care Platform",
  description:
    "Everything you need for professional virtual consultations. From video calls to digital prescriptions, we've got you covered with enterprise-grade security.",
  items: [
    {
      icon: Video,
      title: "HD Video Consultations",
      description:
        "Crystal-clear video and audio quality for professional virtual consultations with screen sharing capabilities",
    },
    {
      icon: MessageSquare,
      title: "Secure Messaging",
      description:
        "HIPAA-compliant chat system for patient communication with file sharing and appointment reminders",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "Automated appointment booking with calendar integration, timezone management, and buffer time settings",
    },
    {
      icon: FileX,
      title: "Digital Prescriptions",
      description:
        "Issue and send electronic prescriptions directly to pharmacies with dosage tracking and refill management",
    },
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description:
        "Military-grade encryption for all patient data, video calls, and medical records with audit trails",
    },
    {
      icon: Globe,
      title: "Multi-Platform Access",
      description:
        "Access from any device - desktop, tablet, or mobile - with synchronized data across all platforms",
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
      title: "Start Virtual Consultations in Minutes",
      description:
        "Launch your telemedicine practice instantly with our ready-to-use platform. No complex setup or technical expertise required.",
      icon: Video,
      image: "/section-assets/clinic-page/carousel/carousel-hipaa-compliance.webp",
      bullets: [
        "One-click video calls with HD quality and screen sharing",
        "Built-in waiting room for managing multiple patients",
        "Automatic recording and transcription for documentation",
      ],
    },
    {
      title: "Expand Beyond Physical Boundaries",
      description:
        "Reach patients anywhere, anytime. Break geographical barriers and provide care to patients who can't visit in person.",
      icon: Globe,
      image: "/section-assets/clinic-page/carousel/carousel-insights.webp",
      bullets: [
        "Treat patients from multiple locations without travel",
        "Accommodate patients with mobility challenges or transportation issues",
        "Expand your practice reach to underserved areas",
      ],
    },
    {
      title: "Integrated Virtual Care Workflow",
      description:
        "Seamlessly blend virtual and in-person care with our comprehensive telehealth tools designed for modern healthcare.",
      icon: Zap,
      image: "/section-assets/clinic-page/carousel/carousel-lifeline.webp",
      bullets: [
        "Switch between virtual and in-person appointments effortlessly",
        "Complete patient journey from booking to follow-up online",
        "Integrated billing and insurance processing for virtual visits",
      ],
    },
    {
      title: "Group Practice Collaboration",
      description:
        "Perfect for multi-physician practices. Coordinate care, share resources, and manage your virtual practice together.",
      icon: Users,
      image: "/section-assets/clinic-page/carousel/carousel-network.webp",
      bullets: [
        "Multi-provider video conferences for case discussions",
        "Shared patient records and treatment plans",
        "Centralized scheduling across all providers",
      ],
    },
  ],
}

export const finalCtaConfig: FinalCtaConfig = {
  headline: {
    prefix: "Let Us Do the",
    highlight: "Work",
    suffix: "for You",
  },
  description:
    "Worrying about the shift to digital records? We've got you covered. Our lean implementation process ensures you get what you need: customized forms, optimized workflows, and well-trained staff.",
  cta: {
    text: "Start Your Virtual Practice",
    href: "https://calendly.com/mycure/demo",
  },
  features: [
    "No setup fees",
    "15-day Free Trial",
    "Training via webinars",
    "Cancel anytime",
  ],
}
