import { Flag, Target, Gem, Heart, GraduationCap, Plane, Coffee, Lightbulb } from "lucide-react"
import type {
  HeroConfig,
  MissionConfig,
  ValueItem,
  HighlightItem,
  CtaBandConfig,
} from "@/components/sections/culture-page"

/**
 * /culture content — GENUINE content only, sourced from the live culture.mycure.md
 * site (captured under products/health/mycure/website/culture.mycure.com/old-culture-website).
 * The Odoo prep doc's additions (statistics, written value descriptions, invented
 * bios, benefits section) are intentionally excluded — see issue #1384.
 */

export const heroConfig: HeroConfig = {
  eyebrow: "When in MYCURE",
  title: "Building healthcare tech, the extra mile",
  tagline:
    "We build healthcare technology that helps clinics across the Philippines care for more patients, every day.",
  intro:
    "MYCURE Inc. is a healthcare technology company born to save lives. Founded in 2016, we're a team of software engineers, designers, and problem-solvers building health management solutions that make things easier for everyone through technology.",
  primaryCta: { label: "Explore careers", href: "/culture/careers" },
  image: {
    src: "/section-assets/mycure-about.png",
    alt: "Illustration of a person working on a laptop under a tree",
  },
}

export const missionConfig: MissionConfig = {
  eyebrow: "Our mission",
  title: "Care the Extra Mile",
  subtitle: "Our mission is the health of every patient we help reach.",
  paragraphs: [
    "MYCURE's mission is to save lives by providing innovative tech solutions for health facilities. By centralizing the way we organize and share health information, we make it more accessible and useful for doctors, patients, and healthcare organizations alike.",
    "Our web-based clinic management system gives patients, doctors, clinic owners, and government health sectors the ability to securely store and retrieve health records anytime, anywhere. We honor the health workers who care the extra mile for their patients every day.",
  ],
}

export const valuesEyebrow = "Our values"
export const valuesHeading = "What we stand for"
export const valuesIntro = "Four values we hold ourselves to, every single day."
// Value names are genuine to the live site. The one-line explanations below are
// newly drafted for this migration — TODO: confirm wording with MYCURE.
export const values: ValueItem[] = [
  {
    title: "First",
    icon: Flag,
    description:
      "We take initiative and lead by example, shipping and improving rather than waiting for permission.",
  },
  {
    title: "Obsession",
    icon: Target,
    description: "We care about quality and the details that make software genuinely easy to use.",
  },
  {
    title: "One of a Kind",
    icon: Gem,
    description: "We build for the real-world complexity of healthcare, in our own way.",
  },
  {
    title: "Love",
    icon: Heart,
    description: "We genuinely care about our work, our users, and each other.",
  },
]

export const lifeHeading = "Life at MYCURE"
export const lifeIntro =
  "We genuinely enjoy spending time together, at work and well beyond it."
export const lifeHighlights: HighlightItem[] = [
  {
    title: "Learning from each other",
    description:
      "We help each other grow, sharing what we know across engineering, design, and every other role on the team.",
    icon: GraduationCap,
  },
  {
    title: "Adventures together",
    description: "We occasionally travel together and celebrate milestones beyond the office.",
    icon: Plane,
  },
  {
    title: "Good food",
    description: "Shared dinners, good food, and a whole lot of laughter.",
    icon: Coffee,
  },
  {
    title: "Bright ideas",
    description: "Team meetings full of fruitful dialogue and new ideas.",
    icon: Lightbulb,
  },
]
// Static graphic for the Life at MYCURE section — a vector illustration (no stock
// people photos), provided by MYCURE.
export const lifeImage: { src: string; alt: string } | undefined = {
  src: "/career.png",
  alt: "Illustration of two MYCURE team members collaborating at a board of pinned notes",
}

export const cultureCta: CtaBandConfig = {
  headline: { before: "Ready to", highlight: "care the extra mile", after: "with us?" },
  description:
    "Join a team building healthcare technology that helps clinics across the Philippines deliver better care.",
  cta: { text: "See open roles", href: "/culture/careers" },
}
