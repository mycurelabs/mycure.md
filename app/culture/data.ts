import { Flag, Target, Gem, Heart, Sparkles, Plane, Coffee, Lightbulb } from "lucide-react"
import type {
  HeroConfig,
  MissionConfig,
  ValueItem,
  HighlightItem,
  TeamMember,
  GalleryTile,
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
    "Building awesome apps is our mission. Building them with love and passion is our extra mile.",
  intro:
    "MYCURE Inc. is a healthcare technology company born to save lives. Founded in 2016, we're a team of software engineers, designers, and problem-solvers building health management solutions that make things easier for everyone through technology.",
  primaryCta: { label: "See open roles", href: "/culture/careers" },
  secondaryCta: { label: "Meet the leads", href: "#team" },
  image: { src: "/section-assets/mycure-about.png", alt: "The MYCURE team" },
}

export const missionConfig: MissionConfig = {
  eyebrow: "Our mission",
  title: "Care the Extra Mile",
  subtitle: "Our mission is the health of every patient we help reach.",
  paragraphs: [
    "MYCURE's mission is to save lives by providing innovative tech solutions for health facilities. By centralizing the way we organize and share health information, we make it more accessible and useful for doctors, patients, and healthcare organizations alike.",
    "Our web-based clinic management system gives patients, doctors, clinic owners, and government health sectors the ability to securely store and retrieve health records anytime, anywhere—and we honor the health workers who care the extra mile for their patients every day.",
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
      "We take initiative and lead by example—shipping and improving instead of waiting for permission.",
  },
  {
    title: "Obsession",
    icon: Target,
    description: "We're obsessed with quality and sweat the details others overlook.",
  },
  {
    title: "One of a Kind",
    icon: Gem,
    description:
      "We solve problems our own way, building thoughtful solutions for real-world complexity.",
  },
  {
    title: "Love",
    icon: Heart,
    description:
      "We genuinely love what we do—and it shows in how we care for our users and each other.",
  },
]

export const lifeHeading = "Life at MYCURE"
export const lifeIntro =
  "We genuinely enjoy spending time together—at work and well beyond it."
export const lifeHighlights: HighlightItem[] = [
  {
    title: "Pan de Turo Saturdays",
    description:
      "Weekend tech sessions where we explore new tools and share what we learned that week.",
    icon: Sparkles,
  },
  {
    title: "Adventures together",
    description: "We occasionally travel together and celebrate milestones beyond the office.",
    icon: Plane,
  },
  {
    title: "Mascots & good food",
    description: "Shared dinners, office mascots, and a whole lot of laughter.",
    icon: Coffee,
  },
  {
    title: "Bright ideas",
    description: "Team meetings full of fruitful dialogue and new ideas.",
    icon: Lightbulb,
  },
]
// Auto-advancing carousel — reuses existing real team/community photos.
// TODO: add more approved culture photos from the team.
export const lifeImages = [
  { src: "/Our Story Photos/mycure-team.webp", alt: "The MYCURE team" },
  { src: "/Our Story Photos/mycure-our-story-community.png", alt: "MYCURE in the community" },
]

export const teamHeading = "Meet the leads"
export const teamIntro = "The people steering MYCURE."
// Titles and portraits confirmed by MYCURE.
export const team: TeamMember[] = [
  { name: "Dale", role: "Founder & CEO", image: "/section-assets/dale.png" },
  { name: "Joff", role: "Vice President of Engineering", image: "/section-assets/joff.png" },
]

export const galleryHeading = "A glimpse into MYCURE life"
export const galleryIntro = "The moments that make MYCURE more than just a workplace."
// TODO: replace placeholder tiles with approved culture photos from the team.
export const gallery: GalleryTile[] = [
  { src: "/Our Story Photos/mycure-team.webp", alt: "MYCURE team", span: "wide" },
  { alt: "Pan de Turo session", span: "normal" },
  { alt: "Team celebration", span: "tall" },
  { alt: "Collaborative workspace", span: "normal" },
  { alt: "Team outing", span: "wide" },
]

export const cultureCta: CtaBandConfig = {
  headline: { before: "Ready to", highlight: "care the extra mile", after: "with us?" },
  description:
    "Join a team building healthcare technology that helps clinics across the Philippines deliver better care.",
  cta: { text: "See open roles", href: "/culture/careers" },
}
