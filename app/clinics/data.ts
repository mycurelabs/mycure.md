import {
  TrendingUp,
  Zap,
  Heart,
  CalendarCheck,
  Star,
  ShieldCheck,
  Sparkles,
  Baby,
  Stethoscope,
  BarChart,
  Building2,
  Shield,
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
  badge: "MYCURE for Clinics",
  headline: {
    prefix: "The All-in-One",
    highlight: "Clinic Management System",
    suffix: "That Actually Works",
  },
  description:
    "From patient scheduling to billing, manage every aspect of your outpatient clinic in one unified platform. Reduce wait times, eliminate paperwork, and give your staff the tools they need to focus on patient care.",
  image: {
    src: "/section-assets/clinic-page/outpatient-clinics-hero-section.png",
    alt: "MYCURE Clinics - Healthcare professionals at reception desks",
  },
  cta: {
    text: "Book a Demo",
    href: "https://calendly.com/mycure/demo",
  },
}

export const solutionsGridConfig: IconCardGridConfig = {
  sectionId: "solutions",
  badge: "Improve Your Clinic",
  headline: "Turn Daily Challenges Into Success Stories",
  description:
    "See how MYCURE Clinics turns common clinic problems into powerful competitive advantages for your practice",
  items: [
    {
      id: "time-efficiency",
      icon: TrendingUp,
      title: "Time Efficiency",
      description:
        "Turn wasted hours into 3+ hours saved daily with automated workflows and streamlined operations",
    },
    {
      id: "patient-flow",
      icon: Zap,
      title: "Patient Flow",
      description:
        "Turn long wait times into faster patient flow through smart scheduling and queue management",
    },
    {
      id: "staff-wellness",
      icon: Heart,
      title: "Staff Wellness",
      description:
        "Convert staff burnout into empowered teams with intuitive tools that make work enjoyable and productive",
    },
    {
      id: "schedule-optimization",
      icon: CalendarCheck,
      title: "Schedule Optimization",
      description:
        "Change cancellations into full schedules using automated reminders and easy rebooking systems",
    },
    {
      id: "patient-satisfaction",
      icon: Star,
      title: "Patient Satisfaction",
      description:
        "Turn patient frustration into positive reviews with smooth experiences that delight",
    },
    {
      id: "compliance-security",
      icon: ShieldCheck,
      title: "Compliance & Security",
      description:
        "Replace compliance worries with peace of mind through built-in HIPAA compliance and automated reporting",
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
    "Every touchpoint works together smoothly—eliminating paperwork, reducing wait times, and ensuring a complete patient experience from start to finish.",
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

export const specialtiesGridConfig: IconCardGridConfig = {
  sectionId: "specialties",
  badge: "Specialized Workflows",
  headline: "One Platform. Every Specialty.",
  description:
    "MYCURE adapts to your practice with specialized workflows for every medical field. Experience healthcare technology that speaks your specialty's language.",
  items: [
    {
      id: "skin-aesthetics",
      icon: Sparkles,
      title: "Skin & Aesthetics",
      description:
        "Specialized tools for dermatology procedures, cosmetic treatments, and aesthetic consultations with before/after tracking",
    },
    {
      id: "maternity-care",
      icon: Heart,
      title: "Maternity Care",
      description:
        "Complete prenatal to postnatal journey management with trimester tracking, appointment scheduling, and delivery records",
    },
    {
      id: "pediatric-care",
      icon: Baby,
      title: "Pediatric Care",
      description:
        "Child-focused workflows with growth charts, vaccination schedules, and developmental milestone tracking",
    },
    {
      id: "dentistry",
      icon: Stethoscope,
      title: "Dentistry",
      description:
        "Comprehensive dental charting, treatment planning, and appointment management with visual tooth mapping",
    },
    {
      id: "diagnostics",
      icon: BarChart,
      title: "Diagnostics",
      description:
        "Integrated laboratory result management, test tracking, and diagnostic center workflow automation",
    },
    {
      id: "corporate-health",
      icon: Building2,
      title: "Corporate Health",
      description:
        "Employee wellness programs, occupational health management, and executive check-up packages",
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
    highlight: "improve",
    suffix: "your healthcare practice?",
  },
  description:
    "Join thousands of healthcare providers who trust MYCURE to streamline their operations and improve patient care.",
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
