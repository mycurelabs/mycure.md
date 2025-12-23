"use client"

import {
  ProductHeader,
  ProductHero,
  IconCardGrid,
  VideoShowcase,
  FeatureJourney,
  StatisticsBar,
  CSIGuarantee,
  OfflineCapability,
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

export default function HospitalPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ProductHeader />

      <main className="flex-1">
        <ProductHero config={heroConfig} />
        <IconCardGrid config={solutionsGridConfig} />
        <VideoShowcase config={videoShowcaseConfig} />
        <FeatureJourney config={featureJourneyConfig} />
        <StatisticsBar config={statisticsConfig} />
        <CSIGuarantee />
        <OfflineCapability />
        <IconCardGrid config={specialtiesGridConfig} />
        <AdvantagesSection config={advantagesConfig} />
        <FinalCTA config={finalCtaConfig} />
      </main>
    </div>
  )
}
