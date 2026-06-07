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
import { BreadcrumbSchema } from "@/components/schemas/BreadcrumbSchema"
import { ServiceSchema } from "@/components/schemas/ServiceSchema"
import { VideoObjectSchema } from "@/components/schemas/VideoObjectSchema"

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

export default function DiagnosticsPage() {
  const videoId = videoShowcaseConfig.video.src.split("/").pop() ?? ""
  const serviceName = [
    heroConfig.headline.prefix,
    heroConfig.headline.highlight,
    heroConfig.headline.suffix,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ProductHeader />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mycure.md" },
          { name: "Diagnostics", url: "https://mycure.md/diagnostics" },
        ]}
      />
      <ServiceSchema
        name={serviceName}
        description={heroConfig.description}
        url="https://mycure.md/diagnostics"
      />
      <VideoObjectSchema
        videoId={videoId}
        name={videoShowcaseConfig.video.title}
      />

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
