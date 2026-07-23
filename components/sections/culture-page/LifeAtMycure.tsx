"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ImageIcon } from "lucide-react"
import type { HighlightItem } from "./types"

interface LifeImage {
  src: string
  alt: string
}

/**
 * "Life at MYCURE" — grounded in the live site's culture captions (Pan de Turo
 * Saturday sessions, occasional travel, team dinners, office mascots, bright ideas).
 * The right column holds a single static graphic (vector, provided by MYCURE); a
 * branded placeholder renders until one is supplied.
 */
export function LifeAtMycure({
  heading,
  intro,
  highlights,
  image,
}: {
  heading: string
  intro: string
  highlights: HighlightItem[]
  image?: LifeImage
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
            {image ? (
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={800}
                className="w-full h-auto rounded-md"
              />
            ) : (
              <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed bg-muted text-muted-foreground/60">
                <ImageIcon className="size-7" />
                <span className="px-6 text-center text-sm">Graphic coming soon</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
