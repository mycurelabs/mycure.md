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
    line1: "Run the clinic",
    line2: "you've always envisioned.",
  },
  description:
    "No more lost records. No more scheduling chaos. Just a practice that runs smoothly — so you can focus on what matters.",
  cta: {
    primary: {
      text: "Book a Demo",
      href: "https://calendly.com/mycure/demo",
    },
    secondary: {
      text: "Watch an Overview",
      href: "#video-demo",
    },
  },
  video: {
    videoId: "tye5mfEtoBw",
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
    description: "Paper-based tracking, inconsistent follow-ups, and constant back-and-forth create daily chaos in clinic operations. Administrative burden diverts focus from patient care.",
    image: "/Koalas/koala-scene1.jpg",
    imageAlt: "Koala doctor overwhelmed with paperwork",
  },
  {
    badge: "KNOW THE BASICS: IMPERFECT",
    title: "The Frustration",
    description: "Healthcare teams deserve tools that respect their time. Administrative efficiency enables better patient care.",
    image: "/Koalas/koala-scene2.jpg",
    imageAlt: "Koala doctor feeling frustrated",
  },
  {
    badge: "A BETTER WAY",
    title: "The Truth",
    description: "Your patients deserve your full attention—and you deserve tools that work. Technology should serve healthcare, not the other way around.",
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
  headline: "Complete Tools to Improve Healthcare Operations",
  description: "MYCURE provides an integrated set of solutions for healthcare facilities, clinics, and diagnostic centers. From patient records to telehealth, our platform enables your team to deliver care more efficiently and securely.",
  items: [
    {
      title: "Healthcare Professionals",
      description: "Create electronic medical records, prescriptions, and diagnostic test orders with a streamlined interface.",
      icon: Stethoscope,
    },
    {
      title: "Outpatient Clinics",
      description: "Streamlined workflows and real-time reports help optimize operational efficiency.",
      icon: Hospital,
    },
    {
      title: "Diagnostics",
      description: "Manage the diagnostic test process from specimen collection to online test results.",
      icon: FlaskConical,
    },
    {
      title: "Easy Scheduling",
      description: "Patients can schedule appointments online, helping reduce waiting times.",
      icon: Calendar,
    },
    {
      title: "Telehealth",
      description: "A secure platform for virtual consultations through video and audio calls.",
      icon: Video,
    },
    {
      title: "Work Offline",
      description: "Continue using MYCURE even with limited or no internet connection.",
      icon: WifiOff,
    },
  ] as FeatureItem[],
}

// Statistics Config
export const statisticsConfig = {
  headline: "Trusted by Healthcare Facilities Across the Philippines",
  description: "MYCURE helps healthcare facilities and teams deliver better care through modern clinic management technology.",
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
  description: "Enterprise-grade capabilities with healthcare-specific design. Compliance, reliability, and smooth operations.",
  items: [
    {
      title: "HIPAA Security & Compliance",
      description: "MYCURE demonstrates a strong commitment to protecting patient data with HIPAA compliance, end-to-end encryption, and rigorous security protocols that meet healthcare standards.",
      icon: Shield,
      mediaType: "image" as const,
      mediaSrc: "/Features Photos/Built for Modern Teams/Hipaa-compliance-mycure.webp",
      mediaAlt: "HIPAA Security & Compliance",
      bullets: [
        "End-to-end data encryption for patient communications and records",
        "Compliance monitoring with real-time alerts and audit trails",
        "Role-based access controls so staff see only authorized patient information",
      ],
      imagePosition: "left" as const,
    },
    {
      title: "Reliable Offline Operations",
      description: "Work confidently regardless of internet connectivity. MYCURE's offline capabilities help your practice continue operating smoothly, with automatic synchronization when connectivity returns.",
      icon: WifiOff,
      mediaType: "video" as const,
      mediaSrc: "/Features Photos/Built for Modern Teams/mycure-syncbase-demo.mp4",
      mediaAlt: "Offline Operations Demo",
      bullets: [
        "Offline patient record access for electronic medical record management",
        "Smart data synchronization that resolves conflicts and updates automatically",
        "Local backup systems designed to minimize data loss during connectivity issues",
      ],
      imagePosition: "right" as const,
    },
    {
      title: "Effortless Clinical Workflows",
      description: "Healthcare software designed by medical professionals for medical professionals. Intuitive interfaces reduce training time while powerful features enhance clinical documentation and patient care efficiency.",
      icon: Stethoscope,
      mediaType: "image" as const,
      mediaSrc: "/Features Photos/Built for Modern Teams/effortless-clinical-workflows-v3.png",
      mediaAlt: "Clinical Workflows",
      bullets: [
        "Intuitive patient charting with medical-professional-designed interfaces",
        "Streamlined documentation workflows that reduce administrative burden",
        "Smart clinical templates that adapt to different specialties and procedures",
      ],
      imagePosition: "left" as const,
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
          "Reduce administrative burden",
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
  description: "Common questions about getting started with MYCURE.",
  items: [
    {
      question: "What is MYCURE?",
      answer: "MYCURE is a healthcare management platform designed for clinics and healthcare facilities. It streamlines practice operations including patient records, scheduling, billing, and telehealth.",
    },
    {
      question: "How much does MYCURE cost?",
      answer: "MYCURE offers flexible pricing plans for healthcare facilities of all sizes, from small clinics to large hospitals. Plans include essential features with transparent pricing and no hidden fees. Contact us or start a free trial to explore your options.",
    },
    {
      question: "Is MYCURE compliant with healthcare regulations?",
      answer: "MYCURE is designed with HIPAA compliance in mind. The platform includes end-to-end encryption, role-based access controls, and audit trails to support your compliance requirements. We recommend consulting with your compliance team for specific regulatory needs.",
    },
    {
      question: "What platforms does MYCURE support?",
      answer: "MYCURE works on Mac and Windows computers through Chromium-based browsers (Chrome, Edge, Brave). The platform is optimized for these environments for best performance and reliability.",
    },
    {
      question: "What kind of support do you offer?",
      answer: "Visit portal.mycure.md for self-service support including our knowledgebase, ticketing system for technical issues, and community forum discussions with other healthcare organizations.",
      hasLink: true,
      linkText: "portal.mycure.md",
      linkHref: "https://portal.mycure.md",
    },
    {
      question: "Can I try MYCURE before committing?",
      answer: "Yes. Start with a 15-day free trial that includes full platform access. No credit card is required. We'll provide you with a demo app link to explore the platform at your own pace.",
    },
  ],
}

// Final CTA Config
export const finalCtaConfig = {
  headline: {
    before: "Ready to",
    highlight: "improve",
    after: "your clinic operations?",
  },
  description: "Join healthcare facilities across the Philippines that trust MYCURE to streamline their operations and improve patient care.",
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
    { label: "Corporate", href: "/corporate", description: "Employee health programs and physical exams." },
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
