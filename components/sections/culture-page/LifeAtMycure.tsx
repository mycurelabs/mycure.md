"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { HighlightItem } from "./types"

interface CarouselImage {
  src: string
  alt: string
}

/** Auto-advancing image carousel (2s interval). Pauses for reduced-motion users. */
function LifeCarousel({ images }: { images: CarouselImage[] }) {
  const [index, setIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion || images.length <= 1) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [images.length, prefersReducedMotion])

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border bg-muted shadow-sm">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image src={images[index].src} alt={images[index].alt} fill className="object-cover" />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-5 bg-white" : "w-1.5 bg-white/60 hover:bg-white/80"
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}

/**
 * "Life at MYCURE" — grounded in the live site's culture captions (Pan de Turo
 * Saturday sessions, occasional travel, team dinners, office mascots, bright ideas).
 */
export function LifeAtMycure({
  heading,
  intro,
  highlights,
  images,
}: {
  heading: string
  intro: string
  highlights: HighlightItem[]
  images: CarouselImage[]
}) {
  return (
    <section id="life" className="w-full py-16 sm:py-20 md:py-24">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
              {heading}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{intro}</p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <LifeCarousel images={images} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
