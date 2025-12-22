import {
  Activity,
  TrendingUp,
  Shield,
  Users,
  FileText,
  Target,
  Briefcase,
  Heart,
  Stethoscope,
  Award,
  DollarSign,
  Globe,
  Building2,
  BarChart,
  ShieldCheck,
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
  badge: "MYCURE for Corporate",
  headline: {
    prefix: "Save Your",
    highlight: "Corporate Clinic",
    suffix: "from Chaos",
  },
  description:
    "MYCURE streamlines corporate healthcare with comprehensive electronic medical records, integrated HMO workflows, and analytics that drive employee wellness and reduce costs.",
  image: {
    src: "/hero-section-assets/corporate-clinics-hero-image.webp",
    alt: "MYCURE Corporate Clinics - Enterprise healthcare management",
  },
  cta: {
    text: "Book a Demo",
    href: "https://calendly.com/mycure/demo",
  },
}

export const solutionsGridConfig: SolutionsGridConfig = {
  badge: "Enterprise Solutions",
  headline: "Turn Corporate Healthcare Challenges Into Strategic Advantages",
  description:
    "See how MYCURE Corporate turns complex healthcare management into streamlined operations that boost productivity and employee satisfaction",
  items: [
    {
      icon: Activity,
      title: "Employee Wellness",
      description:
        "Turn employee health data into actionable wellness programs with comprehensive health tracking and preventive care management",
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description:
        "Turn healthcare expenditure into strategic investment with transparent pricing, data-driven insights, and efficient resource allocation",
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description:
        "Convert regulatory requirements into automated workflows with built-in DOH, HIPAA, and industry compliance standards",
    },
    {
      icon: Users,
      title: "Executive Health",
      description:
        "Change annual check-ups into continuous health monitoring with personalized executive health packages and concierge services",
    },
    {
      icon: FileText,
      title: "Centralized Records",
      description:
        "Consolidate fragmented health data into unified employee health profiles accessible across all your corporate locations",
    },
    {
      icon: Target,
      title: "Productivity Analytics",
      description:
        "Replace guesswork with data-driven insights linking employee wellness to productivity and reduced absenteeism",
    },
  ],
}

export const videoShowcaseConfig: VideoShowcaseConfig = {
  badge: "Complete Corporate Solution",
  headline: "Enterprise Healthcare.\nSimplified.",
  description:
    "MYCURE Corporate brings together employee health management, HMO coordination, and compliance reporting in one unified platform that scales with your organization and helps reduce healthcare costs.",
  cta: {
    text: "Schedule a Walkthrough",
    href: "https://calendly.com/mycure/demo",
  },
  video: {
    src: "https://www.youtube-nocookie.com/embed/KL4tCmttTPs",
    title: "MYCURE Corporate Healthcare Platform - Enterprise Solution",
  },
}

export const featureJourneyConfig: FeatureJourneyConfig = {
  badge: "Corporate Benefits",
  headline: "How MYCURE Improves Corporate Healthcare",
  description:
    "From employee wellness to regulatory compliance, discover why leading corporations trust MYCURE to manage their healthcare operations efficiently and cost-effectively.",
  image: {
    src: "/section-assets/clinic-page/clinic-journey.webp",
    alt: "MYCURE Corporate Healthcare Journey - From Onboarding to Analytics",
  },
  footnote:
    "Every employee touchpoint integrated smoothly—from onboarding health assessments to retirement planning, ensuring comprehensive healthcare management throughout the employment lifecycle.",
}

export const statisticsConfig: StatisticsConfig = {
  headline: "Trusted by Leading Corporations Nationwide",
  description:
    "MYCURE Corporate helps businesses save millions in healthcare costs while improving employee wellness and satisfaction.",
  items: [
    { value: 250000, label: "Employees Served", suffix: "+", delay: 0.3 },
    { value: 500, label: "Corporate Clients", suffix: "+", delay: 0.4 },
    { value: 10, label: "Years in Healthcare", suffix: "+", delay: 0.5 },
  ],
}

export const specialtiesGridConfig: SpecialtiesGridConfig = {
  badge: "Corporate Features",
  headline: "Built for Enterprise Scale",
  description:
    "MYCURE Corporate adapts to your organization's unique needs with specialized modules designed for large-scale healthcare management.",
  items: [
    {
      icon: Briefcase,
      title: "Multi-site Operations",
      description:
        "Centralized management system for corporate clinics across multiple locations with real-time synchronization and unified reporting",
    },
    {
      icon: Heart,
      title: "Annual Physical Exams",
      description:
        "Streamlined APE workflows with automated scheduling, batch processing, and comprehensive health reports for entire organizations",
    },
    {
      icon: Stethoscope,
      title: "Occupational Health",
      description:
        "Complete occupational health management including pre-employment medicals, fitness-to-work assessments, and workplace injury tracking",
    },
    {
      icon: Award,
      title: "HMO Integration",
      description:
        "Direct integration with all major HMO providers for automated eligibility verification and claims processing",
    },
    {
      icon: DollarSign,
      title: "Cost Analytics",
      description:
        "Detailed healthcare spending analysis with department-wise breakdowns, trend identification, and ROI tracking",
    },
    {
      icon: Globe,
      title: "Regional Compliance",
      description:
        "Compliance support for corporations across multiple locations with customizable workflows per region",
    },
  ],
}

export const advantagesConfig: AdvantagesConfig = {
  badge: "The MYCURE Corporate Advantage",
  headline: "Why Corporations Choose MYCURE",
  description:
    "Experience the features that make MYCURE the preferred choice for enterprise healthcare management.",
  items: [
    {
      title: "Unified Multi-Branch Management",
      description:
        "Manage all your corporate clinic branches from a single dashboard. Monitor performance, share resources, and maintain consistent standards across all locations.",
      icon: Building2,
      image: "/section-assets/clinic-page/carousel/carousel-network.webp",
      bullets: [
        "Real-time visibility across all clinic branches and departments",
        "Centralized inventory management reducing wastage significantly",
        "Standardized protocols ensuring consistent care quality",
      ],
    },
    {
      title: "Employee Health Intelligence",
      description:
        "Turn employee health data into strategic business intelligence. Identify health trends, monitor risks, and implement targeted wellness programs.",
      icon: BarChart,
      image: "/section-assets/clinic-page/carousel/carousel-insights.webp",
      bullets: [
        "Health trend analysis identifying risks before they impact productivity",
        "Department-wise health scorecards and wellness metrics",
        "ROI tracking for wellness program investments",
      ],
    },
    {
      title: "Automated Compliance & Reporting",
      description:
        "Stay compliant with DOH, DOLE, and industry regulations automatically. Generate required reports with one click and maintain audit-ready records.",
      icon: ShieldCheck,
      image: "/section-assets/clinic-page/carousel/carousel-hipaa-compliance.webp",
      bullets: [
        "Automated regulatory report generation for government submissions",
        "Built-in compliance checks preventing violations",
        "Complete audit trails for all medical and administrative activities",
      ],
    },
    {
      title: "Integrated HMO & Benefits Management",
      description:
        "Simplify complex HMO coordination and employee benefits administration. Process claims faster and reduce administrative overhead.",
      icon: Users,
      image: "/section-assets/clinic-page/carousel/carousel-booking.webp",
      bullets: [
        "Direct HMO integration eliminating manual verification",
        "Automated benefits tracking and utilization reports",
        "Instant eligibility checking reducing claim rejections significantly",
      ],
    },
  ],
}

export const finalCtaConfig: FinalCtaConfig = {
  headline: {
    prefix: "Ready to",
    highlight: "improve",
    suffix: "your corporate healthcare?",
  },
  description:
    "Join hundreds of leading corporations who trust MYCURE to manage their employee healthcare efficiently and cost-effectively.",
  cta: {
    text: "Book Your Demo",
    href: "https://calendly.com/mycure/demo",
  },
  features: [
    "No setup fees",
    "15-day Free Trial",
    "Enterprise support",
    "Scale as you grow",
  ],
}
