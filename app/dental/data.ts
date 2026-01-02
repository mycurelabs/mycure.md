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
    "Everything your dental clinic needs from appointments, billing, inventory, to advanced charting. Improve clinic operations with digital tools designed specifically for dental professionals.",
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
      id: "digital-charting",
      icon: Stethoscope,
      title: "Digital Charting",
      description:
        "Turn paper charts into interactive digital tooth maps with visual treatment planning and periodontal tracking",
    },
    {
      id: "appointment-precision",
      icon: CalendarCheck,
      title: "Appointment Precision",
      description:
        "Turn scheduling chaos into organized workflows - never miss an appointment, never miss a tooth",
    },
    {
      id: "inventory-management",
      icon: Package,
      title: "Inventory Management",
      description:
        "Convert supply tracking headaches into automated inventory management for dental materials and equipment",
    },
    {
      id: "integrated-billing",
      icon: DollarSign,
      title: "Integrated Billing",
      description:
        "Change complex insurance claims into streamlined billing with automated processing and patient payment tracking",
    },
    {
      id: "team-communication",
      icon: MessageCircle,
      title: "Team Communication",
      description:
        "Turn fragmented communication into smooth team coordination with built-in chat for your dental practice",
    },
    {
      id: "student-support",
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
    "Discover why dental practices are choosing MYCURE's integrated workflow that connects every touchpoint—from booking to billing—in one intuitive platform that your entire team can master in minutes.",
  image: {
    src: "/section-assets/dental-clinics/dental-workflow.webp",
    alt: "MYCURE Dental Workflow - From Booking to Treatment",
  },
  footnote:
    "Every touchpoint works together smoothly—eliminating paperwork, reducing wait times, and ensuring a complete patient experience from start to finish.",
}

export const statisticsConfig: StatisticsConfig = {
  headline: "Trusted by Healthcare Facilities Across the Philippines",
  description:
    "MYCURE helps dental practices deliver better patient care through modern clinic management technology.",
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
      id: "visual-dental-charting",
      icon: Stethoscope,
      title: "Visual Dental Charting",
      description:
        "Interactive tooth mapping with periodontal charts, treatment notes, and visual documentation for comprehensive patient records",
    },
    {
      id: "treatment-planning",
      icon: ClipboardList,
      title: "Treatment Planning",
      description:
        "Create comprehensive treatment plans with cost estimates, phase scheduling, and patient consent tracking",
    },
    {
      id: "orthodontics-support",
      icon: Sparkles,
      title: "Orthodontics Support",
      description:
        "Track braces adjustments, aligner progress, and orthodontic treatment milestones with specialized tools",
    },
    {
      id: "endodontics-tools",
      icon: Shield,
      title: "Endodontics Tools",
      description:
        "Root canal tracking, procedure documentation, and endodontic treatment history management",
    },
    {
      id: "pediatric-dentistry",
      icon: Baby,
      title: "Pediatric Dentistry",
      description:
        "Child-friendly interfaces, behavior management notes, and specialized pediatric dental charting",
    },
    {
      id: "oral-surgery",
      icon: Heart,
      title: "Oral Surgery",
      description:
        "Surgical procedure planning, post-operative tracking, and comprehensive surgical documentation",
    },
  ],
}

export const advantagesConfig: AdvantagesConfig = {
  badge: "The MYCURE Advantage",
  headline: "Why Dental Practices Choose MYCURE",
  description:
    "Experience the features that make MYCURE the trusted choice for dental practices across the Philippines.",
  items: [
    {
      title: "Interactive Digital Dental Charting",
      description:
        "Replace paper charts with interactive tooth mapping that helps dentists document conditions, track treatments, and plan procedures visually.",
      icon: Stethoscope,
      image: "/section-assets/clinic-page/carousel/carousel-hipaa-compliance.webp",
      bullets: [
        "Visual tooth-by-tooth charting with condition and treatment tracking",
        "Periodontal charting with pocket depth measurements",
        "Treatment history accessible at a glance during consultations",
      ],
    },
    {
      title: "Streamlined Treatment Planning",
      description:
        "Create comprehensive treatment plans with cost estimates and phase scheduling. Help patients understand their treatment options and payment paths.",
      icon: ClipboardList,
      image: "/section-assets/clinic-page/carousel/carousel-insights.webp",
      bullets: [
        "Multi-phase treatment plans with estimated costs per procedure",
        "Patient consent tracking and treatment acceptance workflow",
        "Track treatment progress across multiple appointments",
      ],
    },
    {
      title: "Dental-Specific Inventory Management",
      description:
        "Keep track of dental materials, consumables, and equipment. Receive alerts when supplies run low so you're always prepared for procedures.",
      icon: Package,
      image: "/section-assets/clinic-page/carousel/carousel-lifeline.webp",
      bullets: [
        "Track dental supplies, materials, and disposables by category",
        "Low-stock alerts help prevent procedure delays",
        "Supplier management and purchase order tracking",
      ],
    },
    {
      title: "Easy Appointment Booking for Patients",
      description:
        "Let patients book dental appointments online at their convenience. Reduce phone calls and give your front desk more time for patient care.",
      icon: Calendar,
      image: "/section-assets/clinic-page/carousel/carousel-booking.webp",
      bullets: [
        "24/7 online booking for routine and specialty dental visits",
        "Appointment type selection (cleaning, consultation, procedure)",
        "Automated reminders to help reduce no-shows",
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
    "Join dental practices across the Philippines that trust MYCURE to digitize operations and deliver better patient care.",
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
