"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"

import { AnimatedBadge } from "@/components/custom/animated-badge"
import { PrimaryButton } from "@/components/custom/primary-button"
import { Badge } from "@/components/ui/badge"
import type { ProfileSectionProps } from "@/components/types/profile-page"
import { toHeroData } from "./utils"

export function ProfileHero({ profile }: ProfileSectionProps) {
  const hero = toHeroData(profile)

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="hero" className="w-full py-8 sm:py-12 md:py-20 bg-background">
      <div className="container px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[minmax(0,22rem)_1fr] gap-8 md:gap-12 items-center">
          {/* Photo — person.picURL may be a base64 data URL, so use a plain
              <img> (not next/image) and fall back to initials. */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-1 mx-auto w-full max-w-xs lg:max-w-none"
          >
            {hero.photoURL ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={hero.photoURL}
                alt={hero.name}
                className="rounded-2xl w-full aspect-square object-cover border border-border/60 shadow-sm bg-muted"
              />
            ) : (
              <div className="rounded-2xl w-full aspect-square flex items-center justify-center bg-primary/10 dark:bg-primary/20 border border-primary/20">
                <span className="text-6xl font-serif font-bold text-primary">
                  {hero.initials}
                </span>
              </div>
            )}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 order-2 text-center lg:text-left"
          >
            <div className="space-y-4">
              <div className="flex justify-center lg:justify-start">
                <AnimatedBadge>{hero.eyebrow}</AnimatedBadge>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight leading-tight">
                {hero.name}
              </h1>

              {(hero.credentials || hero.pills.length > 0) && (
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {hero.credentials && (
                    <Badge variant="muted">{hero.credentials}</Badge>
                  )}
                  {hero.pills.map((pill) => (
                    <Badge key={pill}>{pill}</Badge>
                  ))}
                </div>
              )}

              {hero.location && (
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-muted-foreground">
                  <MapPin className="size-4 shrink-0" />
                  <span className="text-sm sm:text-base">{hero.location}</span>
                </div>
              )}

              {hero.bio && (
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {hero.bio}
                </p>
              )}
            </div>

            <div className="flex justify-center lg:justify-start">
              <PrimaryButton
                onClick={scrollToBooking}
                className="h-11 sm:h-12 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base flex items-center justify-center gap-2"
              >
                Book an appointment
                <ArrowRight className="size-4" />
              </PrimaryButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
