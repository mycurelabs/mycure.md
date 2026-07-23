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
 * Open-roles list is the final, MYCURE-confirmed set (supplied 2026-07-16),
 * superseding the earlier 10-role draft and the form's own (stale, Oct 2023)
 * dropdown options. Departments with no current opening keep their section
 * (genuine org structure) and render the "no openings" empty state.
 *
 * Applications: all roles link to the single live application Google Form
 * (one form with an in-form role selector), supplied by MYCURE 2026-07-16.
 */

// Single live application Google Form shared by all roles (applicants pick the
// role from the form's own dropdown). Supplied by MYCURE 2026-07-16.
const APPLY_FORM_URL = "https://forms.gle/4N7gb7U6VffJR7J59"

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
    title: "Room to grow as a junior",
    description: "Fresh graduates are welcome on the Junior Software Engineer track, growing alongside experienced developers.",
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
export const applyNote =
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
        type: "Full-time",
        location: "Philippines",
        summary:
          "Grow as an engineer alongside experienced developers. Solid CS fundamentals and JavaScript; Vue or React a plus. Fresh graduates welcome.",
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
        // Title updated from "Customer Support Representative" per MYCURE's
        // 2026-07-16 confirmed list; summary carried over as the closest
        // genuine description of the same support function.
        title: "Customer Support Specialist",
        type: "Full-time",
        location: "Philippines",
        summary:
          "Help clinics resolve issues with empathy. Strong communication and familiarity with GitHub, Jira, and CRM tools.",
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
    // No current openings (confirmed 2026-07-16) — renders the "no openings" state.
    roles: [],
  },
  {
    id: "marketing-business",
    name: "Marketing & Business",
    internalName: "Hustlers",
    blurb: "The team driving growth and bringing MYCURE to clinics that need it.",
    icon: TrendingUp,
    // No current openings (confirmed 2026-07-16) — renders the "no openings" state.
    roles: [],
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
  headline: { before: "Curious about", highlight: "life at MYCURE", after: "?" },
  description: "Get to know our team, values, and what day-to-day life at MYCURE looks like.",
  cta: { text: "Explore our culture", href: "/culture" },
}
