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
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ProductHeader />

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
