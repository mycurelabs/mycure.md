import { LucideIcon } from "lucide-react"

// Solution/Problem Grid Types
export interface SolutionItem {
  icon: LucideIcon
  title: string
  description: string
}

// Specialty Grid Types
export interface SpecialtyItem {
  icon: LucideIcon
  title: string
  description: string
}

// Advantage Section Types
export interface AdvantageItem {
  title: string
  description: string
  icon: LucideIcon
  image: string
  bullets: string[]
}

// Hero Section Types
export interface HeroConfig {
  badge: string
  headline: {
    prefix: string
    highlight: string
    suffix: string
  }
  description: string
  image: {
    src: string
    alt: string
  }
  cta: {
    text: string
    href: string
  }
}

// Video Showcase Section Types
export interface VideoShowcaseConfig {
  badge: string
  headline: string
  description: string
  cta: {
    text: string
    href: string
  }
  video: {
    src: string
    title: string
  }
}

// Feature Journey Section Types
export interface FeatureJourneyConfig {
  badge: string
  headline: string
  description: string
  image: {
    src: string
    alt: string
  }
  footnote?: string
}

// Statistics Section Types
export interface StatisticItem {
  value: number
  label: string
  suffix?: string
  delay?: number
}

export interface StatisticsConfig {
  headline: string
  description: string
  items: StatisticItem[]
}

// Solutions Grid Section Types
export interface SolutionsGridConfig {
  badge: string
  headline: string
  description: string
  items: SolutionItem[]
}

// Specialties Grid Section Types
export interface SpecialtiesGridConfig {
  badge: string
  headline: string
  description: string
  items: SpecialtyItem[]
}

// Advantages Section Types
export interface AdvantagesConfig {
  badge: string
  headline: string
  description: string
  items: AdvantageItem[]
}

// Final CTA Section Types
export interface FinalCtaConfig {
  headline: {
    prefix: string
    highlight: string
    suffix: string
  }
  description: string
  cta: {
    text: string
    href: string
  }
  features: string[]
}

// Complete Product Page Configuration
export interface ProductPageConfig {
  pageName: string
  hero: HeroConfig
  solutionsGrid: SolutionsGridConfig
  videoShowcase: VideoShowcaseConfig
  featureJourney: FeatureJourneyConfig
  statistics: StatisticsConfig
  specialtiesGrid: SpecialtiesGridConfig
  advantages: AdvantagesConfig
  finalCta: FinalCtaConfig
}
