"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, Beaker, Activity } from "lucide-react"

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

import { AnimatedBadge } from "@/components/custom/animated-badge"

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

export default function MobileLabsPage() {
  const [activeTab, setActiveTab] = useState("imaging")

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ProductHeader />

      <main className="flex-1">
        <ProductHero config={heroConfig} />
        <SolutionsGrid config={solutionsGridConfig} />
        <VideoShowcase config={videoShowcaseConfig} />
        <FeatureJourney config={featureJourneyConfig} />
        <StatisticsBar config={statisticsConfig} />

        {/* Advanced Tools Section - Unique to Mobile Labs */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30">
          <div className="container px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                <AnimatedBadge>Advanced Mobile Diagnostics</AnimatedBadge>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Advanced Tools for a Growing Mobile Lab
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're here to make managing your mobile lab so much easier. We offer full functionality for our free accounts,
                and you only need to upgrade as your mobile lab grows.
              </p>
            </motion.div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex gap-4 p-2 bg-background rounded-full border border-border/40 shadow-sm">
                {[
                  { id: "imaging", label: "Imaging" },
                  { id: "laboratory", label: "Laboratory" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "text-white shadow-sm bg-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Left side - Images */}
              <div className="relative order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={activeTab === "imaging"
                      ? "/section-assets/diagnostics/diagnostics-tab-imaging.webp"
                      : "/section-assets/diagnostics/diagnostics-tab-laboratory.webp"
                    }
                    width={600}
                    height={400}
                    alt={activeTab === "imaging"
                      ? "MYCURE Mobile Diagnostics Imaging Interface - Mobile Radiology"
                      : "MYCURE Mobile Diagnostics Laboratory Interface - Mobile Lab Results"
                    }
                    className="rounded-xl w-full"
                  />
                </motion.div>
              </div>

              {/* Right side - Content */}
              <div className="order-1 lg:order-2">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      {activeTab === "imaging" ? (
                        <Activity className="size-5 text-primary" />
                      ) : (
                        <Beaker className="size-5 text-primary" />
                      )}
                      <h3 className="text-2xl sm:text-3xl font-bold">
                        {activeTab === "imaging" ? "Mobile Imaging" : "Mobile Laboratory"}
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {activeTab === "imaging"
                        ? "Complete mobile radiology capabilities with portable equipment support"
                        : "Comprehensive mobile lab management with on-site testing capabilities"}
                    </p>
                  </div>
                  <ul className="space-y-4">
                    {(activeTab === "imaging"
                      ? [
                          "Mobile-optimized DICOM viewer for field use",
                          "Cloud-based image storage accessible anywhere",
                          "Offline-capable reporting with auto-sync",
                          "Remote consultation tools for expert review"
                        ]
                      : [
                          "Portable analyzer integration and calibration",
                          "Mobile sample tracking with GPS location",
                          "Cloud-synced results with offline capability",
                          "Field-ready quality control management"
                        ]
                    ).map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="size-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <CSIGuarantee />
        <OfflineCapability />
        <SpecialtiesGrid config={specialtiesGridConfig} />
        <AdvantagesSection config={advantagesConfig} />
        <FinalCTA config={finalCtaConfig} />
      </main>
    </div>
  )
}
