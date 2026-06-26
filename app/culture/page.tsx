"use client"

import { ProductHeader } from "@/components/sections/product-page"
import {
  CultureHero,
  MissionSection,
  CoreValues,
  LifeAtMycure,
  TeamGrid,
  CultureGallery,
  CtaBand,
} from "@/components/sections/culture-page"
import { BreadcrumbSchema } from "@/components/schemas/BreadcrumbSchema"
import {
  heroConfig,
  missionConfig,
  valuesEyebrow,
  valuesHeading,
  valuesIntro,
  values,
  lifeHeading,
  lifeIntro,
  lifeHighlights,
  lifeImages,
  teamHeading,
  teamIntro,
  team,
  galleryHeading,
  galleryIntro,
  gallery,
  cultureCta,
} from "./data"

export default function CulturePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ProductHeader />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mycure.md" },
          { name: "Culture", url: "https://mycure.md/culture" },
        ]}
      />

      <main className="flex-1">
        <CultureHero config={heroConfig} />
        <MissionSection config={missionConfig} />
        <CoreValues
          eyebrow={valuesEyebrow}
          heading={valuesHeading}
          intro={valuesIntro}
          values={values}
        />
        <LifeAtMycure
          heading={lifeHeading}
          intro={lifeIntro}
          highlights={lifeHighlights}
          images={lifeImages}
        />
        <TeamGrid heading={teamHeading} intro={teamIntro} members={team} />
        <CultureGallery heading={galleryHeading} intro={galleryIntro} tiles={gallery} />
        <CtaBand config={cultureCta} />
      </main>
    </div>
  )
}
