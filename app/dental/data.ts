import {
  Stethoscope,
  CalendarCheck,
  Package,
  DollarSign,
  MessageCircle,
  GraduationCap,
  ClipboardList,
  Sparkles,
  Shield,
  Baby,
  Heart,
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
  badge: "MYCURE for Dental",
  headline: {
    prefix: "The Complete",
    highlight: "Dental Practice Management",
    suffix: "Platform",
  },
  description:
    "Everything your dental clinic needs from appointments, billing, inventory, to advanced charting. Improve your dental practice with digital tools designed specifically for dentists.",
  image: {
    src: "/hero-section-assets/dental-clinics-hero-image.webp",
    alt: "MYCURE Dental - Advanced dental practice management",
  },
  cta: {
    text: "Book a Demo",
    href: "https://calendly.com/mycure/demo",
  },
}

export const solutionsGridConfig: SolutionsGridConfig = {
  badge: "Improve Your Dental Practice",
  headline: "Turn Dental Challenges Into Practice Success",
  description:
    "See how MYCURE Dental turns common dental practice challenges into powerful competitive advantages",
  items: [
    {
      icon: Stethoscope,
      title: "Digital Charting",
      description:
        "Turn paper charts into interactive digital tooth maps with visual treatment planning and periodontal tracking",
    },
    {
      icon: CalendarCheck,
      title: "Appointment Precision",
      description:
        "Turn scheduling chaos into organized workflows - never miss an appointment, never miss a tooth",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description:
        "Convert supply tracking headaches into automated inventory management for dental materials and equipment",
    },
    {
      icon: DollarSign,
      title: "Integrated Billing",
      description:
        "Change complex insurance claims into streamlined billing with automated processing and patient payment tracking",
    },
    {
      icon: MessageCircle,
      title: "Team Communication",
      description:
        "Turn fragmented communication into smooth team coordination with built-in chat for your dental practice",
    },
    {
      icon: GraduationCap,
      title: "Student Support",
      description:
        "Replace learning barriers with free webinar series and training resources for dentistry students and new practitioners",
    },
  ],
}

export const videoShowcaseConfig: VideoShowcaseConfig = {
  badge: "Complete Dental Solution",
  headline: "Everything Your Dental Practice Needs.\nNothing It Doesn't.",
  description:
    "MYCURE brings together advanced dental charting, appointment management, and billing in one comprehensive platform designed specifically for dental practices, helping reduce chair-side admin time.",
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
  badge: "Dental Workflow Excellence",
  headline: "How MYCURE Streamlines Your Dental Practice Workflow",
  description:
    "Discover why clinics nationwide are switching to MYCURE's integrated workflow that connects every touchpoint—from booking to billing—in one intuitive platform that your entire team can master in minutes.",
  image: {
    src: "/section-assets/dental-clinics/dental-workflow.webp",
    alt: "MYCURE Dental Workflow - From Booking to Treatment",
  },
  footnote:
    "Every touchpoint works together smoothly—eliminating paperwork, reducing wait times, and ensuring a complete patient experience from start to finish.",
}

export const statisticsConfig: StatisticsConfig = {
  headline: "Trusted by Healthcare Providers Across the Philippines",
  description:
    "MYCURE is dedicated to help healthcare providers save lives every day through innovative clinic management technology.",
  items: [
    { value: 13239859, label: "Dental Records", delay: 0.3 },
    { value: 2946953, label: "Patients Treated", delay: 0.4 },
    { value: 6242974, label: "Procedures Completed", delay: 0.5 },
  ],
}

export const specialtiesGridConfig: SpecialtiesGridConfig = {
  badge: "Specialized Workflows",
  headline: "One Platform. Every Specialty.",
  description:
    "MYCURE adapts to your practice with specialized workflows for every medical field. Experience healthcare technology that speaks your specialty's language.",
  items: [
    {
      icon: Stethoscope,
      title: "Visual Dental Charting",
      description:
        "Interactive tooth mapping with periodontal charts, treatment notes, and visual documentation for comprehensive patient records",
    },
    {
      icon: ClipboardList,
      title: "Treatment Planning",
      description:
        "Create comprehensive treatment plans with cost estimates, phase scheduling, and patient consent tracking",
    },
    {
      icon: Sparkles,
      title: "Orthodontics Support",
      description:
        "Track braces adjustments, aligner progress, and orthodontic treatment milestones with specialized tools",
    },
    {
      icon: Shield,
      title: "Endodontics Tools",
      description:
        "Root canal tracking, procedure documentation, and endodontic treatment history management",
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description:
        "Child-friendly interfaces, behavior management notes, and specialized pediatric dental charting",
    },
    {
      icon: Heart,
      title: "Oral Surgery",
      description:
        "Surgical procedure planning, post-operative tracking, and comprehensive surgical documentation",
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
    highlight: "modernize",
    suffix: "your dental practice?",
  },
  description:
    "Join thousands of dentists who trust MYCURE to digitize their practice and deliver exceptional patient care.",
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
