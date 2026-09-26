"use client"

import { useState } from "react"
import Image from "next/image"
import { m } from "framer-motion"
import { Check } from "lucide-react"
import { AnimatedBadge } from "@/components/custom/animated-badge"
import type { TabSectionConfig } from "@/components/types/product-page"

interface BookingTabSectionProps {
  config: TabSectionConfig
}

export function BookingTabSection({ config }: BookingTabSectionProps) {
  const [activeTab, setActiveTab] = useState(config.tabs[0]?.id || "")

  const activeTabContent = config.tabs.find((tab) => tab.id === activeTab)

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0, 0, 0.58, 1] }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <AnimatedBadge>{config.badge}</AnimatedBadge>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6">
            {config.headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {config.description}
          </p>
        </m.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 p-2 bg-background rounded-full border border-border/40 shadow-sm">
            {config.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-150 ${
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

        {activeTabContent && (
          <div
            key={activeTab}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left side - Images */}
            <div className="relative order-2 lg:order-1">
              <div>
                <Image
                  src={activeTabContent.image.src}
                  width={600}
                  height={400}
                  alt={activeTabContent.image.alt}
                  className="rounded-xl w-full"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <activeTabContent.icon className="size-5 text-primary" />
                    <h3 className="text-2xl sm:text-3xl font-bold">
                      {activeTabContent.title}
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {activeTabContent.subtitle}
                  </p>
                </div>
                <ul className="space-y-4">
                  {activeTabContent.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="size-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
