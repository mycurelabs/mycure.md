import {
  Clock,
  Users,
  AlertCircle,
  Calendar,
  UserX,
  Shield,
  Globe,
  Building2,
  Zap,
  MessageSquare,
} from "lucide-react"
import type {
  HeroConfig,
  IconCardGridConfig,
  VideoShowcaseConfig,
  FinalCtaConfig,
  HowItWorksConfig,
  TestimonialsConfig,
  TabSectionConfig,
} from "@/components/types/product-page"

export const heroConfig: HeroConfig = {
  badge: "MYCURE Booking",
  headline: {
    prefix: "The",
    highlight: "Easy Booking App",
    suffix: "to Grow Your Practice",
  },
  description:
    "Accept online appointments 24/7 with professional booking pages. Set up in 10 minutes, reduce no-shows by 70%, and let patients self-schedule while you focus on care.",
  image: {
    src: "/hero-section-assets/booking-feature-hero-image.webp",
    alt: "MYCURE Booking - Easy appointment scheduling system",
  },
  cta: {
    text: "Get Started",
    href: "https://calendly.com/mycure/demo",
  },
}

export const solutionsGridConfig: IconCardGridConfig = {
  sectionId: "solutions",
  badge: "Transform Your Clinic",
  headline: "Turn Daily Challenges Into Success Stories",
  description:
    "See how MYCURE Clinics transforms common clinic problems into powerful competitive advantages for your practice",
  items: [
    {
      id: "long-wait-times",
      icon: Clock,
      title: "Long Wait Times",
      description:
        "Reduced wait times by 70% with smart scheduling and automated queue management",
    },
    {
      id: "missed-appointments",
      icon: AlertCircle,
      title: "Missed Appointments",
      description:
        "Automated reminders reduce no-shows by 40% through SMS and email notifications",
    },
    {
      id: "manual-scheduling",
      icon: Calendar,
      title: "Manual Scheduling",
      description:
        "Save 3+ hours daily with automated booking and intelligent appointment management",
    },
    {
      id: "patient-frustration",
      icon: UserX,
      title: "Patient Frustration",
      description:
        "Increase patient satisfaction with 24/7 online booking and real-time updates",
    },
  ],
}

export const tabSectionConfig: TabSectionConfig = {
  badge: "Professional Booking Page",
  headline: "Activate your Appointment Scheduling Website",
  description:
    "Patients can directly book their next visit on your professional booking page. It's a digital hub where you can showcase your services and medical professionals like having your very own website.",
  tabs: [
    {
      id: "doctors",
      label: "Doctors",
      icon: Users,
      title: "For Individual Practitioners",
      subtitle:
        "Patients can directly book their next visit on your professional booking page",
      features: [
        "Create your professional website with custom branding",
        "Set your availability preferences and working hours",
        "Accept online bookings 24/7 from any device",
        "Automatic appointment confirmations and reminders",
      ],
      image: {
        src: "/section-assets/booking/booking-tab-doctors.webp",
        alt: "MYCURE Booking for Doctors - Professional booking page",
      },
    },
    {
      id: "clinics",
      label: "Clinics",
      icon: Building2,
      title: "For Medical Facilities",
      subtitle:
        "Comprehensive booking system for multi-doctor clinics and hospitals",
      features: [
        "Manage multiple doctors and departments",
        "Queue management and walk-in handling",
        "API integration with existing hospital systems",
        "Real-time availability across all providers",
      ],
      image: {
        src: "/section-assets/booking/booking-tab-clinics.webp",
        alt: "MYCURE Booking for Clinics - Multi-provider management",
      },
    },
  ],
}

export const videoShowcaseConfig: VideoShowcaseConfig = {
  badge: "Complete Clinic Solution",
  headline: "Watch How You Can Improve Your Patient Attendance Rate",
  description:
    "Discover how MYCURE Booking helps you reduce no-shows, optimize scheduling, and create a seamless booking experience for your patients.",
  cta: {
    text: "Get Started",
    href: "https://calendly.com/mycure/demo",
  },
  video: {
    src: "https://www.youtube-nocookie.com/embed/Xj9GgIHW0_s",
    title: "MYCURE Booking - Improve Patient Attendance Rates",
  },
}

export const howItWorksConfig: HowItWorksConfig = {
  badge: "How It Works",
  headline: "Start Accepting Online Bookings in Minutes",
  description:
    "Get your practice online in just 3 simple steps and start accepting appointments 24/7.",
  steps: [
    {
      number: 1,
      title: "Set up your page",
      items: [
        "Add your practice details and branding",
        "Set your availability and services",
        "Configure booking rules and preferences",
        "Customize your booking page design",
      ],
    },
    {
      number: 2,
      title: "Share your link",
      items: [
        "Share on social media platforms",
        "Add link to your email signature",
        "Display on your existing website",
        "Send to patients via SMS or WhatsApp",
      ],
    },
    {
      number: 3,
      title: "Get booked",
      items: [
        "Receive instant booking notifications",
        "Automated confirmation emails",
        "Sync with your calendar automatically",
        "Manage all bookings from one dashboard",
      ],
    },
  ],
  cta: {
    text: "Get Started Today",
    href: "https://calendly.com/mycure/demo",
  },
  ctaNote: "No credit card required • 15-day free trial • Setup in minutes",
}

export const testimonialsConfig: TestimonialsConfig = {
  badge: "Testimonials",
  headline: "What Our Clients are Saying",
  description:
    "Don't just take our word for it. See what healthcare providers have to say about their experience with MYCURE Booking.",
  testimonials: [
    {
      quote:
        "MYCURE fulfills a long time need of physicians for accurate records of patients which they can carry with them wherever they are. It enables them also to prescribe and countercheck their prescriptions, issue medical certificate, communicate with other doctors for referrals. Patients could check and follow their medical progress, check their medications and look for doctors anywhere and set up appointments. I look forward to enjoying this app to improve my practice.",
      author: "Dr. Nelson S. Abelardo",
      role: "Cardiologist",
      rating: 5,
    },
    {
      quote:
        "It's a great experience using MYCURE app in our rural setup. I've been through many EMR apps, but this one is the best so far. MYCURE provides a well organized patient data profiling with customized options for personalized encoding and with integration of lab tests, immunizations as well as growth charts that are very important for us as pediatricians for growth monitoring of our little ones. It is very convenient to use, simple, adaptable and user friendly even to my secretary.",
      author: "Dr. Gay Cadorna-Toledo",
      role: "Pediatrician",
      rating: 5,
    },
  ],
}

export const finalCtaConfig: FinalCtaConfig = {
  headline: {
    prefix: "Create your",
    highlight: "appointment scheduling",
    suffix: "website in less than 10 minutes",
  },
  description:
    "Join thousands of healthcare providers who've streamlined their booking process and improved patient attendance rates.",
  cta: {
    text: "Start Your Free Trial",
    href: "https://calendly.com/mycure/demo",
  },
  features: [
    "No setup fees",
    "15-day Free Trial",
    "Training via webinars",
    "Cancel anytime",
  ],
}
