"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { DotPattern } from "@/components/magicui/dot-pattern"
import type { ValueItem } from "./types"

/**
 * Core values — emulates the homepage "works together" section: a centered
 * message with brand-blue circular icons. Each circle is a #0099CC disc with a
 * white lucide icon (white stroke), and the trait explained in the body text
 * beneath it.
 */
export function CoreValues({
  eyebrow,
  heading,
  intro,
  values,
}: {
  eyebrow?: string
  heading: string
  intro?: string
  values: ValueItem[]
}) {
  return (
    <section id="values" className="w-full py-16 sm:py-20 md:py-28 bg-background relative overflow-hidden">
      <DotPattern
        className={cn("[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]", "opacity-50")}
      />
      <div className="container px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              {eyebrow}
            </p>
          )}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight mb-5">
            {heading}
          </h2>
          {intro && (
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">{intro}</p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  aria-hidden="true"
                  className="mb-5 flex size-20 md:size-24 items-center justify-center rounded-full bg-[#0099CC] text-white shadow-lg shadow-primary/20 ring-4 ring-white"
                >
                  <Icon className="size-9 md:size-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold tracking-tight mb-2">
                  {value.title}
                </h3>
                {value.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                    {value.description}
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
