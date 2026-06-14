"use client"

import {
  ProductHeader,
  ProductHero,
  SolutionsGrid,
  VideoShowcase,
  FeatureJourney,
  CSIGuarantee,
  OfflineCapability,
  SpecialtiesGrid,
  AdvantagesSection,
  FinalCTA,
} from "@/components/sections/product-page"
import { MedicalBusinessSchema } from "@/components/schemas/MedicalBusinessSchema"
import { BreadcrumbSchema } from "@/components/schemas/BreadcrumbSchema"
import { ServiceSchema } from "@/components/schemas/ServiceSchema"
import { VideoObjectSchema } from "@/components/schemas/VideoObjectSchema"
import { getServiceMeta } from "@/components/schemas/utils"

import {
  heroConfig,
  solutionsGridConfig,
  videoShowcaseConfig,
  featureJourneyConfig,
  specialtiesGridConfig,
  advantagesConfig,
  finalCtaConfig,
} from "./data"

export default function CorporatePage() {
  const { videoId, serviceName } = getServiceMeta(heroConfig, videoShowcaseConfig)

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ProductHeader />
      <MedicalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mycure.md" },
          { name: "Corporate", url: "https://mycure.md/corporate" },
        ]}
      />
      <ServiceSchema
        name={serviceName}
        description={heroConfig.description}
        url="https://mycure.md/corporate"
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
        <CSIGuarantee />
        <OfflineCapability />
        <SpecialtiesGrid config={specialtiesGridConfig} />
        <AdvantagesSection config={advantagesConfig} />
        <FinalCTA config={finalCtaConfig} />
      </main>
    </div>
  )
}
