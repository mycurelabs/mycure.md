"use client"

import { m } from "framer-motion"
import { NumberTicker } from "@/components/magicui/number-ticker"
import type { StatisticsConfig } from "@/components/types/product-page"

interface StatisticsBarProps {
  config: StatisticsConfig
}

export function StatisticsBar({ config }: StatisticsBarProps) {
  return (
    <section className="w-full py-20 md:py-32 text-primary-foreground relative overflow-hidden brand-gradient-bg">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container px-4 sm:px-6 md:px-8 relative">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0, 0, 0.58, 1] }}
          className="flex flex-col items-center justify-center space-y-6 text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight">
            {config.headline}
          </h2>
          <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
            {config.description}
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.075, ease: [0, 0, 0.58, 1] }}
          className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10"
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {config.items.map((stat, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06, ease: [0, 0, 0.58, 1] }}
                className="text-center space-y-2"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                  <NumberTicker value={stat.value} delay={stat.delay ?? 0.3 + index * 0.1} className="font-bold text-primary" />
                </div>
                <div className="text-sm md:text-base font-semibold text-muted-foreground tracking-wider uppercase">
                  {stat.label}
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  )
}
