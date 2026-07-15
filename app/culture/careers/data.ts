import {
  LineChart,
  GraduationCap,
  Sparkles,
  Code2,
  Palette,
  TrendingUp,
  HeartHandshake,
} from "lucide-react"
import type { HeroConfig, HighlightItem, Department, CtaBandConfig } from "@/components/sections/culture-page"
import type { ApplyStep } from "@/components/sections/culture-page/HowToApply"

/**
 * /culture/careers content — GENUINE content only, from the 8 captured job posts
 * + the live site (products/health/mycure/website/culture.mycure.com/old-culture-website).
 *
 * Applications: all roles link to the single live application Google Form
 * (one form with an in-form role selector), supplied by MYCURE 2026-07-15.
 *
 * TODO (MYCURE input): the form's own role dropdown (captured 2026-07-15, form
 * self-labeled "as of October 2023") lists 12 roles — including Customer Success
 * Specialist, Operations (Full-time + OJT), Product Specialist, and Digital
 * Marketing Specialist — several of which don't match the 10 roles below.
 * Confirm the canonical open-roles list before launch.
 */

// Single live application Google Form shared by all roles (applicants pick the
// role from the form's own dropdown). Supplied by MYCURE 2026-07-15.
const APPLY_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdFFH2loF7JOSY49i1RwOjkRLYla37_y1xXsCSnAsehz3a_Sw/viewform"

export const contactEmail = "jobs@mycure.md"
// Real, approved office address (source: site MedicalBusinessSchema).
export const office =
  "The Malayan Plaza, ADB Avenue cor. Opal Road, Ortigas Center, Pasig, Metro Manila"

export const heroConfig: HeroConfig = {
  eyebrow: "Careers",
  title: "Do work that matters",
  tagline: "Help reshape healthcare for clinics across the Philippines.",
  // "seasoned" + since-2016 framing per product owner 2026-07-15; activity claim
  // traceable to the site's "10+ Years in Healthcare" stat.
  intro:
    "We're a seasoned health-tech team that's been helping clinics deliver better care since 2016. The work is fast-paced and meaningful, with real impact on patients and the people who treat them.",
  primaryCta: { label: "View open roles", href: "#roles" },
  secondaryCta: { label: "How to apply", href: "#apply" },
  gradient: true,
}

export const howWeWorkBadge = "Working at MYCURE"
export const howWeWorkHeading = "How we work"
export const howWeWorkIntro = "The things that shape day-to-day life on the team."
// Only facts genuinely attested across the live job listings.
export const howWeWork: HighlightItem[] = [
  {
    title: "Equity for early hires",
    description: "Qualified early full-time employees receive stock options.",
    icon: LineChart,
  },
  {
    title: "OJT & internships",
    description: "Fresh graduates and students are welcome through our OJT and internship roles.",
    icon: GraduationCap,
  },
  {
    title: "Learn every week",
    description: "Level up together at our Saturday Pan de Turo sessions.",
    icon: Sparkles,
  },
]

export const rolesHeading = "Open roles"
export const rolesIntro = "Four teams, one mission. Find where you fit."
export const placeholderNote =
  "All open roles use the same application form—select your role from the dropdown inside. You can also email jobs@mycure.md directly."

export const departments: Department[] = [
  {
    id: "developers",
    name: "Developers",
    internalName: "Hackers",
    blurb: "The engineers building the systems that power healthcare for clinics.",
    icon: Code2,
    roles: [
      {
        title: "Senior Software Engineer",
        type: "Full-time",
        location: "Philippines",
        summary:
          "Full-stack web development across front-end and backend, with deep JavaScript expertise. Experience with Angular or React is a plus.",
        applyUrl: APPLY_FORM_URL,
      },
      {
        title: "Junior Software Engineer",
        type: "Full-time · OJT",
        location: "Philippines",
        summary:
          "Grow as an engineer alongside experienced developers. Solid CS fundamentals and JavaScript; Vue or React a plus. Fresh graduates welcome.",
        applyUrl: APPLY_FORM_URL,
      },
    ],
  },
  {
    id: "creatives",
    name: "Creatives",
    internalName: "Creative Geeks",
    blurb: "Designers and writers turning complex ideas into work people love.",
    icon: Palette,
    roles: [
      {
        title: "UI/UX Designer",
        type: "Full-time",
        location: "Philippines",
        summary:
          "Design intuitive web and mobile experiences. Proficiency with Figma or Adobe XD; a portfolio is expected.",
        applyUrl: APPLY_FORM_URL,
      },
      {
        title: "Creative Writer",
        type: "Full-time",
        location: "Philippines",
        summary:
          "Write content that captures attention and supports our goals. Strong writing paired with commercial awareness.",
        applyUrl: APPLY_FORM_URL,
      },
    ],
  },
  {
    id: "marketing-business",
    name: "Marketing & Business",
    internalName: "Hustlers",
    blurb: "The team driving growth and bringing MYCURE to clinics that need it.",
    icon: TrendingUp,
    roles: [
      {
        title: "Product Manager",
        type: "Full-time · OJT",
        location: "Philippines",
        summary:
          "Shape the product through strategy and problem-solving. Fresh graduates welcome; 200-hour minimum for OJT positions.",
        applyUrl: APPLY_FORM_URL,
      },
      {
        title: "Business Development Manager",
        type: "Full-time",
        location: "Philippines",
        summary:
          "Define strategy, build key customer relationships, and grow revenue—with a focus on Southeast Asia.",
        applyUrl: APPLY_FORM_URL,
      },
      {
        title: "Sales & Marketing Specialist",
        type: "Full-time",
        location: "Philippines",
        summary:
          "Drive sales and commercial strategy. Proven sales experience, fluent English, and MS Office; CRM and medical-industry background a plus.",
        applyUrl: APPLY_FORM_URL,
      },
    ],
  },
  {
    id: "customer-happiness",
    name: "Customer Happiness",
    internalName: "Happiness Agents",
    blurb: "The people making sure every clinic succeeds with MYCURE.",
    icon: HeartHandshake,
    roles: [
      {
        title: "Accounts Manager",
        type: "Full-time",
        location: "Philippines",
        summary:
          "Be the primary contact for clients and help them succeed. Account management experience with CRM (Salesforce, Zoho, or HubSpot) and Excel.",
        applyUrl: APPLY_FORM_URL,
      },
      {
        title: "Customer Support Representative",
        type: "Full-time",
        location: "Philippines",
        summary:
          "Help clinics resolve issues with empathy. Strong communication and familiarity with GitHub, Jira, and CRM tools.",
        applyUrl: APPLY_FORM_URL,
      },
      {
        title: "Administrative Assistant",
        type: "Full-time",
        location: "Philippines",
        summary:
          "A smart generalist keeping operations and customers happy. 1+ year of admin experience; English and Filipino; MS Office and Google Suite.",
        applyUrl: APPLY_FORM_URL,
      },
    ],
  },
]

export const applyHeading = "How to apply"
export const applySteps: ApplyStep[] = [
  {
    title: "Find your fit",
    description: "Browse the open roles above and pick the one that matches your skills.",
  },
  {
    title: "Send your application",
    description: "Submit your details through the role's application form.",
  },
  {
    title: "We'll be in touch",
    description: "Our team reviews every application and reaches out about next steps.",
  },
]

export const careersCta: CtaBandConfig = {
  headline: { before: "Don't see", highlight: "your role", after: "yet?" },
  description: "Our team keeps growing. Send your CV and tell us how you'd help.",
  cta: { text: "Email jobs@mycure.md", href: "mailto:jobs@mycure.md" },
}
