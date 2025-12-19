"use client"

import {
  ProductHeader,
  ProductHero,
  SolutionsGrid,
  VideoShowcase,
  FeatureJourney,
  StatisticsBar,
  CSIGuarantee,
  OfflineCapability,
  SpecialtiesGrid,
  AdvantagesSection,
  FinalCTA,
} from "@/components/sections/product-page"

import {
  heroConfig,
  solutionsGridConfig,
  videoShowcaseConfig,
  featureJourneyConfig,
  statisticsConfig,
  specialtiesGridConfig,
  advantagesConfig,
  finalCtaConfig,
} from "./data"

export default function CorporatePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ProductHeader />

      <main className="flex-1">
        <ProductHero config={heroConfig} />
        <SolutionsGrid config={solutionsGridConfig} />
        <VideoShowcase config={videoShowcaseConfig} />
        <FeatureJourney config={featureJourneyConfig} />
        <StatisticsBar config={statisticsConfig} />
        <CSIGuarantee />
        <OfflineCapability />
        <SpecialtiesGrid config={specialtiesGridConfig} />
        <AdvantagesSection config={advantagesConfig} />
        <FinalCTA config={finalCtaConfig} />
      </main>
    </div>
  )
}
