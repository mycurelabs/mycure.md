"use client"

import { motion } from "framer-motion"
import { HeartPulse, Quote } from "lucide-react"
import type { MissionConfig } from "./types"

/**
 * "Care the Extra Mile" — genuine mission/about copy on the brand blue-gradient
 * background (matching the homepage "Trusted by…" section): white heading over
 * the gradient, with the supporting paragraphs inside a raised white card.
 */
export function MissionSection({ config }: { config: MissionConfig }) {
  return (
    <section
      id="mission"
      className="w-full py-16 sm:py-20 md:py-28 text-white relative overflow-hidden brand-gradient-bg"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

      <div className="container px-4 sm:px-6 md:px-8 relative">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {config.eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              {config.eyebrow}
            </p>
          )}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight leading-tight mb-5 text-white">
            {config.title}
          </h2>
          {config.subtitle && (
            <p className="text-lg sm:text-xl text-white leading-relaxed">{config.subtitle}</p>
          )}
        </motion.div>

        <motion.div
          className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {config.paragraphs.map((paragraph, index) => {
              const Icon = index === 0 ? HeartPulse : Quote
              return (
                <div key={index} className="flex flex-col gap-4">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
