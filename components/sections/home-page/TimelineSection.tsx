"use client"

import Link from "next/link"
import { m } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { AnimatedBadge } from "@/components/custom/animated-badge"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import type { LucideIcon } from "lucide-react"

interface ProcessStep {
  step: number
  title: string
  description: string
  icon: LucideIcon
}

interface TimelineConfig {
  badge: string
  headline: string
  headlineHighlight: string
  description: string
  processSteps: ProcessStep[]
  cta: { text: string; href: string }
  ctaNote: string
}

interface TimelineSectionProps {
  config: TimelineConfig
}

export function TimelineSection({ config }: TimelineSectionProps) {
  return (
    <section id="how-it-works" className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container px-4 sm:px-6 md:px-8 relative">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0, 0, 0.58, 1] }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <AnimatedBadge>{config.badge}</AnimatedBadge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight">
            {config.headline}{" "}
            <span className="px-3 py-1">{config.headlineHighlight}</span>
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            {config.description}
          </p>
        </m.div>

        <div className="max-w-5xl mx-auto">
          {/* 3-Step Process */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {config.processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.06, ease: [0, 0, 0.58, 1] }}
                  className="bg-background rounded-2xl p-6 lg:p-8 border border-border/40 shadow-sm hover:shadow-md transition-shadow duration-150 relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-md">
                    {step.step}
                  </div>

                  <div className="space-y-4 pt-2">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </m.div>
              )
            })}
          </div>

          {/* Call to Action */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15, ease: [0, 0, 0.58, 1] }}
            className="text-center flex flex-col items-center"
          >
            <Link href={config.cta.href} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <ShimmerButton
                background="#0099CC"
                shimmerColor="#FFFFFF"
                className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold w-full sm:w-auto"
              >
                {config.cta.text}
                <ArrowRight className="ml-2 size-4" />
              </ShimmerButton>
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              {config.ctaNote}
            </p>
          </m.div>
        </div>
      </div>
    </section>
  )
}
