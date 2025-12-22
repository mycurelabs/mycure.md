import {
  Users,
  Shield,
  Zap,
  BarChart,
  Layers,
  Star,
  Stethoscope,
  Hospital,
  FlaskConical,
  Calendar,
  Video,
  WifiOff,
  Check,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

// Hero Section Config
export const heroConfig = {
  badge: "✨ MYCURE X: Launches soon",
  headline: {
    line1: "Your practice, simplified.",
    line2: "Your patients, first.",
  },
  description:
    "Streamline your practice with the clinic management system designed for Philippine healthcare—secure, offline-capable, and ready to simplify your entire operation.",
  cta: {
    primary: {
      text: "Book a Demo",
      href: "https://calendly.com/mycure/demo",
    },
    secondary: {
      text: "Watch Demo",
      href: "#video-demo",
    },
  },
  video: {
    src: "https://www.youtube-nocookie.com/embed/tye5mfEtoBw",
    title: "MYCURE Healthcare Management Platform Introduction",
    watchUrl: "https://www.youtube.com/watch?v=tye5mfEtoBw",
  },
}

// Logo Cloud Config
export const logosConfig = {
  heading: "Trusted by experts.",
  subheading: "Used by healthcare leaders.",
  logos: [
    { src: "/Client Logos/Medicard.png", alt: "Medicard", name: "Medicard" },
    { src: "/Client Logos/Skin 101.png", alt: "Skin 101", name: "Skin 101" },
    { src: "/Client Logos/Premier Medical Center.png", alt: "Premier Medical Center", name: "Premier Medical Center" },
    { src: "/Client Logos/Duya Med Diagnostic Clinic.png", alt: "Duya Med Diagnostic Clinic", name: "Duya Med Diagnostic Clinic" },
    { src: "/Client Logos/Ferrer OB-GYN and Medical Clinic.png", alt: "Ferrer OB-GYN and Medical Clinic", name: "Ferrer OB-GYN and Medical Clinic" },
    { src: "/Client Logos/Vicente L. Danguilan Memorial Clinic.png", alt: "Vicente L. Danguilan Memorial Clinic", name: "Vicente L. Danguilan Memorial Clinic" },
    { src: "/Client Logos/Lablife Medical & Diagnostic Center-Murphy Cubao.png", alt: "Lablife Medical & Diagnostic Center", name: "Lablife Medical & Diagnostic Center" },
    { src: "/Client Logos/Newport EW Villa Medica.png", alt: "Newport EW Villa Medica", name: "Newport EW Villa Medica" },
    { src: "/Client Logos/PhilCare.png", alt: "PhilCare", name: "PhilCare" },
    { src: "/Client Logos/Unihealth Parañaque Hospital ENT Center.png", alt: "Unihealth Parañaque Hospital ENT Center", name: "Unihealth Parañaque Hospital ENT Center" },
  ],
}

// Sticky Features Config (Koala Mascot)
export const stickyFeaturesConfig = [
  {
    badge: "CLEAR YOUR MIND",
    title: "The Reality",
    description: "Paper-based tracking, inconsistent follow-ups, and endless back-and-forth create chaos in your clinic operations every single day. Your time is consumed by paperwork instead of patients.",
    image: "/Koalas/koala-scene1.jpg",
    imageAlt: "Koala doctor overwhelmed with paperwork",
  },
  {
    badge: "KNOW THE BASICS: IMPERFECT",
    title: "The Frustration",
    description: "You didn't become a healthcare provider to spend your nights buried in administrative tasks. The dedication you bring to your patients is being drained by paperwork.",
    image: "/Koalas/koala-scene2.jpg",
    imageAlt: "Koala doctor feeling frustrated",
  },
  {
    badge: "A BETTER WAY",
    title: "The Truth",
    description: "Your patients deserve your full attention—and you deserve tools that actually work. It's time for technology that serves healthcare, not the other way around.",
    image: "/Koalas/koala-scene3.jpg",
    imageAlt: "Koala doctor confident and happy",
  },
]

// Features Grid Config
export interface FeatureItem {
  title: string
  description: string
  icon: LucideIcon
}

export const featuresGridConfig = {
  badge: "Features",
  headline: "Complete Tools to Improve Your Healthcare Practice",
  description: "MYCURE provides an integrated set of solutions tailored to physicians, clinics, and diagnostics. From patient records to telehealth, our platform empowers your team to deliver care more efficiently and securely.",
  items: [
    {
      title: "Physicians",
      description: "Explore a simpler way to create electronic medical records, prescriptions, and diagnostic test orders.",
      icon: Stethoscope,
    },
    {
      title: "Outpatient Clinics",
      description: "Experience streamlined workflows and real-time reports for optimized operational efficiency.",
      icon: Hospital,
    },
    {
      title: "Diagnostics",
      description: "Embrace a simplified diagnostic test process from specimen collection to online test results.",
      icon: FlaskConical,
    },
    {
      title: "Easy Scheduling",
      description: "Let your patients schedule appointments with ease and cut down on long waiting times.",
      icon: Calendar,
    },
    {
      title: "Telehealth",
      description: "Try a safe and secure platform to build your virtual practice through video and audio calls.",
      icon: Video,
    },
    {
      title: "Work Offline",
      description: "Enjoy the benefits of using a cloud-based medical software even with little to no internet connection.",
      icon: WifiOff,
    },
  ] as FeatureItem[],
}

// Statistics Config
export const statisticsConfig = {
  headline: "Trusted by Healthcare Providers Across the Philippines",
  description: "MYCURE is dedicated to help healthcare providers save lives every day through innovative clinic management technology.",
  items: [
    { value: 13239859, label: "Medical Records", delay: 0.3 },
    { value: 2946953, label: "Patients Served", delay: 0.4 },
    { value: 6242974, label: "Transactions Completed", delay: 0.5 },
  ],
}

// Why Choose MYCURE Config (Image + Content Features)
export const whyChooseConfig = {
  badge: "Why Choose MYCURE",
  headline: "Built for Modern Teams",
  description: "Enterprise-grade capabilities with healthcare-specific design, providing compliance, reliability, and smooth operations.",
  items: [
    {
      title: "HIPAA Security & Compliance",
      description: "MYCURE demonstrates industry-leading commitment to protecting patient data with comprehensive HIPAA compliance, end-to-end encryption, and rigorous security protocols that exceed healthcare standards.",
      icon: Shield,
      mediaType: "image" as const,
      mediaSrc: "/Features Photos/Built for Modern Teams/Hipaa-compliance-mycure.webp",
      mediaAlt: "HIPAA Security & Compliance",
      bullets: [
        "End-to-end data encryption for all patient communications and records",
        "Automated compliance monitoring with real-time alerts and audit trails",
        "Role-based access controls so staff see only authorized patient information",
      ],
      imagePosition: "left" as const,
    },
    {
      title: "Reliable Offline Operations",
      description: "Work confidently regardless of internet connectivity. MYCURE's advanced offline capabilities ensure your practice continues operating smoothly, with automatic synchronization when connectivity returns.",
      icon: WifiOff,
      mediaType: "video" as const,
      mediaSrc: "/Features Photos/Built for Modern Teams/mycure-syncbase-demo.mp4",
      mediaAlt: "Seamless Offline Operations Demo",
      bullets: [
        "Full offline patient record access for electronic medical record management",
        "Smart data synchronization that resolves conflicts and updates automatically",
        "Local backup systems providing zero data loss during connectivity issues",
      ],
      imagePosition: "right" as const,
    },
    {
      title: "Effortless Clinical Workflows",
      description: "Experience healthcare software designed by medical professionals for medical professionals. Intuitive interfaces reduce training time while powerful features enhance clinical documentation and patient care efficiency.",
      icon: Stethoscope,
      mediaType: "image" as const,
      mediaSrc: "/Features Photos/Built for Modern Teams/effortless-clinical-workflows-v3.png",
      mediaAlt: "Clinical Workflows",
      bullets: [
        "Intuitive patient charting with medical-professional-designed interfaces",
        "Streamlined documentation workflows that reduce administrative burden",
        "Smart clinical templates that adapt to different specialties and procedures",
      ],
      imagePosition: "right" as const,
    },
  ],
}

// Visibility Section Config
export const visibilityConfig = {
  headline: "Visibility for your entire clinic.",
  description: "Keep up with what's happening across every department and patient case.",
  items: [
    {
      bold: "Eliminate",
      normal: "unnecessary tool costs with one comprehensive platform.",
      image: "/Features Photos/Visibility for your entire clinic/eliminate-unnecessary-tool-costs.png",
      imageAlt: "MYCURE platform showing elimination of unnecessary tool costs with comprehensive features",
      gradient: "from-orange-400 via-pink-400 to-pink-500",
    },
    {
      bold: "Reduce",
      normal: "administrative burden through intelligent automation.",
      image: "/Features Photos/Visibility for your entire clinic/reduce-administrative-burden.png",
      imageAlt: "MYCURE dashboard reducing administrative burden through intelligent automation",
      gradient: "from-orange-400 via-yellow-400 to-orange-500",
    },
    {
      bold: "Improve",
      normal: "patient satisfaction with efficient scheduling, clear communication, and reduced wait times through optimized workflows.",
      image: "/Features Photos/Visibility for your entire clinic/improve-patient-satisfaction.png",
      imageAlt: "MYCURE clinic management dashboard showing patient management features",
      gradient: "from-green-400 via-blue-400 to-blue-500",
    },
    {
      bold: "Protect",
      normal: "your revenue with automatic compliance monitoring, HIPAA security, and regulatory reporting that prevents costly fines.",
      image: "/Features Photos/Visibility for your entire clinic/protect-your-revenue.png",
      imageAlt: "MYCURE revenue protection dashboard showing compliance monitoring and HIPAA security features",
      gradient: "from-gray-400 via-gray-300 to-gray-400",
    },
  ],
}

// Integration Section Config
export const integrationConfig = {
  headline: {
    before: "Healthcare that",
    highlight: "works together",
  },
  description: "MYCURE works with your existing healthcare workflows rather than replacing them. Our platform enhances what already works while filling critical gaps in patient records, specialist coordination, and compliance—adapting to your practice, not the other way around.",
  cta: {
    text: "Schedule a Walkthrough",
    href: "https://calendly.com/mycure/demo",
  },
  icons: [
    { src: "/Icons/Laboratory.73d89a4.webp", alt: "Laboratory Integration" },
    { src: "/Icons/Imaging.6ce014b.webp", alt: "Medical Imaging Integration" },
    { src: "/Icons/Authentication.44e8ba4.webp", alt: "Authentication Integration" },
    { src: "/Icons/Billing.e26d6fb.webp", alt: "Billing Integration" },
    { src: "/Icons/Pharmacy.0b3ed83.webp", alt: "Pharmacy Integration" },
    { src: "/Icons/Chat.5394f0b.webp", alt: "Chat Integration" },
    { src: "/Icons/Inventory.c0eabf9.webp", alt: "Inventory Integration" },
    { src: "/Icons/Queuing.2f5c8c8.webp", alt: "Queuing Integration" },
  ],
}

// Timeline Config (How It Works)
export interface TimelineStep {
  title: string
  icon: LucideIcon
  items: string[]
}

export interface TimelineContent {
  today: TimelineStep[]
  day3: TimelineStep[]
  day7: TimelineStep[]
}

export const timelineConfig = {
  badge: "How It Works",
  headline: "What you can achieve with MYCURE",
  headlineHighlight: "in just 7 days",
  description: "Improve your healthcare practice step by step with our guided onboarding process.",
  tabs: [
    { id: "today", label: "Today" },
    { id: "day3", label: "Day 3" },
    { id: "day7", label: "Day 7" },
  ],
  content: {
    today: [
      {
        title: "Setup Your Clinic",
        icon: Users,
        items: [
          "Create your clinic profile in minutes",
          "Add your first staff members and departments",
          "Configure basic settings and preferences",
          "Import existing patient data securely",
        ],
      },
      {
        title: "Patient Registration",
        icon: Shield,
        items: [
          "Register your first patients",
          "Set up appointment scheduling",
          "Configure patient communication preferences",
          "Enable HIPAA-compliant data storage",
        ],
      },
      {
        title: "Basic Operations",
        icon: Zap,
        items: [
          "Schedule your first appointments",
          "Start using digital patient records",
          "Set up basic billing and invoicing",
          "Configure notification preferences",
        ],
      },
    ],
    day3: [
      {
        title: "Advanced Features",
        icon: BarChart,
        items: [
          "Connect with lab systems and pharmacies",
          "Set up automated appointment reminders",
          "Configure advanced reporting dashboards",
          "Enable telemedicine capabilities",
        ],
      },
      {
        title: "Workflow Optimization",
        icon: Layers,
        items: [
          "Automate patient check-in processes",
          "Set up custom treatment protocols",
          "Configure insurance verification workflows",
          "Enable prescription management",
        ],
      },
      {
        title: "Team Collaboration",
        icon: Users,
        items: [
          "Set up department-specific workflows",
          "Configure staff scheduling and shifts",
          "Enable secure internal messaging",
          "Set up role-based access controls",
        ],
      },
    ],
    day7: [
      {
        title: "Streamlined Operations",
        icon: Zap,
        items: [
          "Automate routine administrative tasks",
          "Set up smart patient queuing workflows",
          "Use scheduling insights to reduce wait times",
          "Configure automated billing workflows",
        ],
      },
      {
        title: "Advanced Analytics",
        icon: BarChart,
        items: [
          "Generate comprehensive practice reports",
          "Track key performance indicators",
          "Monitor patient satisfaction metrics",
          "Analyze revenue and efficiency trends",
        ],
      },
      {
        title: "Scale Your Practice",
        icon: Star,
        items: [
          "Reduce administrative burden significantly",
          "Increase patient satisfaction scores",
          "Improve appointment scheduling efficiency",
          "Enhance overall practice profitability",
        ],
      },
    ],
  } as TimelineContent,
  cta: {
    text: "Start Free Trial",
    href: "https://calendly.com/mycure/demo",
  },
  ctaNote: "No credit card required • 15-day free trial • Setup in minutes",
}

// FAQ Config
export const faqConfig = {
  headline: "Frequently Asked Questions",
  description: "We've compiled a list of frequently asked questions to help you get started.",
  items: [
    {
      question: "What is MYCURE?",
      answer: "MYCURE is a comprehensive healthcare management platform designed specifically for clinics and healthcare facilities. We streamline your practice operations while maintaining HIPAA compliance and operational efficiency.",
    },
    {
      question: "How much does MYCURE cost?",
      answer: "MYCURE offers flexible pricing plans designed for healthcare facilities of all sizes, from small clinics to large hospitals. Our plans include all essential features with transparent pricing and no hidden fees. Contact us or start a free trial to explore the best option for your practice.",
    },
    {
      question: "Is MYCURE compliant with healthcare regulations?",
      answer: "MYCURE is a comprehensive healthcare management platform designed specifically for clinics, hospitals, and healthcare facilities. From patient registration to PhilHealth claims, we streamline every aspect of your practice while ensuring HIPAA compliance and operational efficiency.",
    },
    {
      question: "What platforms does MYCURE support?",
      answer: "MYCURE works on Mac computers through Chromium-based browsers (Chrome, Edge, Brave). Our platform is optimized for these environments to deliver the best performance and reliability.",
    },
    {
      question: "What kind of support do you offer healthcare providers?",
      answer: "Visit portal.mycure.md for complete self-service support including our comprehensive knowledgebase, ticketing system for technical issues, and community forum discussions with other healthcare providers.",
      hasLink: true,
      linkText: "portal.mycure.md",
      linkHref: "https://portal.mycure.md",
    },
    {
      question: "Can I try MYCURE before committing?",
      answer: "Yes! Start with our 15-day free trial that includes full platform access and no credit card requirement. We'll provide you with a demo app link to explore the platform at your own pace.",
    },
  ],
}

// Final CTA Config
export const finalCtaConfig = {
  headline: {
    before: "Ready to",
    highlight: "improve",
    after: "your healthcare practice?",
  },
  description: "Join thousands of healthcare providers who trust MYCURE to streamline their operations and improve patient care.",
  cta: {
    text: "Book Your Demo",
    href: "https://calendly.com/mycure/demo",
  },
  features: [
    "See demo video",
    "15-day free trial",
    "Training on-premises",
    "Cancel anytime",
  ],
}

// Navigation Config
export const navigationConfig = {
  features: [
    { label: "Booking", href: "/booking", description: "Let patients schedule appointments online and reduce wait times." },
    { label: "Telehealth", href: "/telehealth", description: "Secure video consultations for virtual patient care." },
  ],
  solutions: [
    { label: "Clinics", href: "/clinics", description: "Streamlined workflows for outpatient clinic operations." },
    { label: "Hospital", href: "/hospital", description: "Comprehensive management for hospital operations." },
    { label: "Corporate", href: "/corporate", description: "Employee health programs and physical exams." },
    { label: "Dental", href: "/dental", description: "Specialized tools for dental practice management." },
    { label: "Skin & Aesthetics", href: "/skin", description: "Dermatology and aesthetic clinic solutions." },
    { label: "Diagnostics", href: "/diagnostics", description: "Laboratory and imaging workflow management." },
    { label: "Mobile Labs", href: "/mobile-labs", description: "On-site diagnostic services and specimen collection." },
  ],
  links: [
    { label: "How it Works", href: "#how-it-works" },
    { label: "FAQs", href: "#faq" },
  ],
  loginUrl: "https://next.cms.mycure.md/",
  ctaUrl: "https://calendly.com/mycure/demo",
}
