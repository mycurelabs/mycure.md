"use client"

import {
  ProductHeader,
  ProductHero,
  IconCardGrid,
  VideoShowcase,
  FinalCTA,
  HowItWorksTimeline,
  TestimonialsSection,
} from "@/components/sections/product-page"
import { BookingTabSection } from "@/components/sections/booking-page"
import { BreadcrumbSchema } from "@/components/schemas/BreadcrumbSchema"
import { ServiceSchema } from "@/components/schemas/ServiceSchema"
import { VideoObjectSchema } from "@/components/schemas/VideoObjectSchema"
import {
  heroConfig,
  solutionsGridConfig,
  tabSectionConfig,
  videoShowcaseConfig,
  howItWorksConfig,
  testimonialsConfig,
  finalCtaConfig,
} from "./data"

export default function BookingPage() {
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
          { name: "Booking", url: "https://mycure.md/booking" },
        ]}
      />
      <ServiceSchema
        name={serviceName}
        description={heroConfig.description}
        url="https://mycure.md/booking"
      />
      <VideoObjectSchema
        videoId={videoId}
        name={videoShowcaseConfig.video.title}
      />

      <main className="flex-1">
        <ProductHero config={heroConfig} />
        <IconCardGrid config={solutionsGridConfig} />
        <BookingTabSection config={tabSectionConfig} />
        <VideoShowcase config={videoShowcaseConfig} />
        <HowItWorksTimeline config={howItWorksConfig} />
        <TestimonialsSection config={testimonialsConfig} />
        <FinalCTA config={finalCtaConfig} />
      </main>
    </div>
  )
}
