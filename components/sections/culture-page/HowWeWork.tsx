"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedBadge } from "@/components/custom/animated-badge"
import type { HighlightItem } from "./types"

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

/**
 * "How we work" — facts genuinely attested across the live job listings,
 * presented with the homepage "Complete Tools…" features-grid design
 * (animated badge, serif headline, icon-circle cards).
 */
export function HowWeWork({
  badge,
  heading,
  intro,
  items,
}: {
  badge?: string
  heading: string
  intro?: string
  items: HighlightItem[]
}) {
  return (
    <section id="how-we-work" className="w-full py-20 md:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          {badge && <AnimatedBadge>{badge}</AnimatedBadge>}
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">{heading}</h2>
          {intro && <p className="max-w-[800px] text-muted-foreground md:text-lg">{intro}</p>}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
        >
          {items.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div key={feature.title} variants={item}>
                <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                  <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col h-full">
                    <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
