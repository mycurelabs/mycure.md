"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { DeptTeaser } from "./types"

/**
 * "Find your role" — the four teams as a teaser grid on /culture. Each card deep
 * links to the matching department anchor on /culture/careers.
 */
export function JobCategories({
  heading,
  intro,
  departments,
}: {
  heading: string
  intro?: string
  departments: DeptTeaser[]
}) {
  return (
    <section id="find-your-role" className="w-full py-16 sm:py-20 md:py-24">
      <div className="container px-4 sm:px-6 md:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {heading}
          </h2>
          {intro && <p className="text-lg text-muted-foreground">{intro}</p>}
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {departments.map((dept, index) => {
            const Icon = dept.icon
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={dept.href} className="group block h-full">
                  <Card className="h-full p-6 md:p-8 transition-colors hover:border-primary/40 hover:bg-muted/40">
                    <div className="flex items-start gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-6" />
                      </span>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2">
                          <h3 className="text-xl font-semibold">{dept.name}</h3>
                          <span className="text-xs text-muted-foreground">({dept.internalName})</span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {dept.roles}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                          View roles
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
