"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { PrimaryButton } from "@/components/custom/primary-button"
import type { CtaBandConfig } from "./types"

/**
 * Closing CTA band — mirrors the site's homepage/product FinalCTA format
 * (centered, serif headline with a highlighted word, description, ShimmerButton,
 * and a row of feature checks). Internal links open in the same tab.
 */
export function CtaBand({ config }: { config: CtaBandConfig }) {
  const { headline, description, cta, features } = config
  const isExternal = cta.href.startsWith("http") || cta.href.startsWith("mailto:")

  const button = (
    <PrimaryButton
      slow
      className="h-11 sm:h-12 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base flex items-center justify-center gap-2 w-full sm:w-auto"
    >
      {cta.text}
      <ArrowRight className="size-4" />
    </PrimaryButton>
  )

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-tight">
                {headline.before} <span className="text-primary">{headline.highlight}</span>{" "}
                {headline.after}
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex justify-center items-center px-4 sm:px-0">
              {isExternal ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  {button}
                </a>
              ) : (
                <Link href={cta.href} className="w-full sm:w-auto">
                  {button}
                </Link>
              )}
            </div>

            {features && features.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
