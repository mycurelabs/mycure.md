"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedBadge } from "@/components/custom/animated-badge"
import { PrimaryButton } from "@/components/custom/primary-button"
import { Button } from "@/components/ui/button"
import type { HeroConfig } from "./types"

/**
 * Culture / Careers hero.
 * - Default: white-background subpage hero, two-column with a side graphic.
 * - `gradient`: brand blue-gradient background with light text (centered),
 *   matching the homepage hero / "Trusted by…" treatment.
 */
export function CultureHero({ config }: { config: HeroConfig }) {
  const gradient = Boolean(config.gradient)
  const hasImage = Boolean(config.image) && !gradient

  const content = (
    <motion.div
      initial={{ opacity: 0, x: hasImage ? -20 : 0, y: hasImage ? 0 : 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={cn(
        "space-y-6",
        hasImage ? "text-center lg:text-left" : "max-w-3xl mx-auto text-center"
      )}
    >
      {config.eyebrow &&
        (gradient ? (
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 bg-white/90 border border-white/20 backdrop-blur-sm shadow-lg text-sm font-medium text-primary">
              {config.eyebrow}
            </span>
          </div>
        ) : (
          <div className={hasImage ? "flex justify-center lg:justify-start" : "flex justify-center"}>
            <AnimatedBadge>{config.eyebrow}</AnimatedBadge>
          </div>
        ))}

      <h1
        className={cn(
          "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-tight",
          gradient && "text-white"
        )}
      >
        {config.title}
      </h1>
      <p
        className={cn(
          "text-xl sm:text-2xl font-medium leading-snug",
          gradient ? "text-white/90" : "text-primary"
        )}
      >
        {config.tagline}
      </p>
      <p
        className={cn(
          "text-lg sm:text-xl leading-relaxed",
          gradient ? "text-white/80 max-w-3xl mx-auto" : "text-muted-foreground"
        )}
      >
        {config.intro}
      </p>

      <div
        className={cn(
          "flex flex-col sm:flex-row gap-3 pt-2",
          hasImage ? "justify-center lg:justify-start" : "justify-center"
        )}
      >
        <Link href={config.primaryCta.href} className="w-full sm:w-auto">
          <PrimaryButton className="h-11 sm:h-12 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base flex items-center justify-center gap-2 w-full sm:w-auto">
            {config.primaryCta.label}
            <ArrowRight className="size-4" />
          </PrimaryButton>
        </Link>
        {config.secondaryCta && (
          <Button
            asChild
            variant="outline"
            size="lg"
            className={cn(
              "rounded-full",
              gradient && "bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
            )}
          >
            <Link href={config.secondaryCta.href}>{config.secondaryCta.label}</Link>
          </Button>
        )}
      </div>
    </motion.div>
  )

  return (
    <section
      id="hero"
      className={cn(
        "w-full",
        gradient
          ? "relative overflow-hidden brand-gradient-bg text-white py-16 sm:py-20 md:py-28"
          : "bg-background py-8 sm:py-12 md:py-20"
      )}
    >
      {gradient && (
        <>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </>
      )}
      <div className="container px-4 sm:px-6 md:px-8 relative">
        {hasImage ? (
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {content}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative order-first lg:order-last"
            >
              <Image
                src={config.image!.src}
                width={600}
                height={500}
                alt={config.image!.alt}
                className="w-full aspect-[6/5] object-contain mx-auto max-w-sm md:max-w-none"
                priority
              />
            </motion.div>
          </div>
        ) : (
          content
        )}
      </div>
    </section>
  )
}
