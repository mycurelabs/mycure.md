import type { LucideIcon } from "lucide-react"

/**
 * Shared types for the Culture + Careers pages.
 *
 * Content for these pages is sourced ONLY from the genuine live culture.mycure.md
 * site (captured under products/health/mycure/website/culture.mycure.com/old-culture-website)
 * and the brand source of truth. No invented stats, bios, benefits, or value
 * descriptions — see migration issue #1384.
 */

export interface CtaLink {
  label: string
  href: string
  /** Marks a placeholder/TODO link (e.g. Google Form not yet final). */
  placeholder?: boolean
}

export interface HeroConfig {
  eyebrow?: string
  title: string
  tagline: string
  intro: string
  primaryCta: CtaLink
  secondaryCta?: CtaLink
  /** Optional side graphic — renders the two-column subpage hero when present. */
  image?: { src: string; alt: string }
  /** Render on the brand blue-gradient background with light text. */
  gradient?: boolean
}

export interface MissionConfig {
  eyebrow?: string
  title: string
  /** Substring of `title` rendered in the brand color. */
  highlight?: string
  subtitle?: string
  paragraphs: string[]
}

/** Final CTA band, mirroring the site's homepage/product FinalCTA format. */
export interface CtaBandConfig {
  headline: { before: string; highlight: string; after: string }
  description: string
  cta: { text: string; href: string }
  features?: string[]
}

export interface ValueItem {
  title: string
  icon: LucideIcon
  /** Short explanation shown in the body text (drafted for the migration). */
  description?: string
}

export interface HighlightItem {
  title: string
  description: string
  icon: LucideIcon
}

export interface TeamMember {
  name: string
  role: string
  /** Genuine one-line blurb from the live site; optional. Never an invented bio. */
  blurb?: string
  /** Real asset path, or undefined to render a branded placeholder (TODO). */
  image?: string
}

export interface DeptTeaser {
  id: string
  name: string
  internalName: string
  roles: string
  icon: LucideIcon
  href: string
}

export interface Role {
  title: string
  type: string
  location: string
  summary: string
  /** Shared application Google Form URL (all roles use the same form). */
  applyUrl: string
}

export interface Department {
  id: string
  name: string
  internalName: string
  blurb: string
  icon: LucideIcon
  roles: Role[]
}

export interface GalleryTile {
  /** Real asset path, or undefined to render a branded placeholder (TODO). */
  src?: string
  alt: string
  span?: "tall" | "wide" | "normal"
}
