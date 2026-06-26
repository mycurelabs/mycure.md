"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { GalleryTile } from "./types"

/**
 * Culture gallery. The original site used a FooGallery of team photos that were
 * never captured. Tiles without a real `src` render as branded placeholders
 * (TODO) so the page ships without broken images.
 */
export function CultureGallery({
  heading,
  intro,
  tiles,
}: {
  heading: string
  intro?: string
  tiles: GalleryTile[]
}) {
  return (
    <section id="gallery" className="w-full py-16 sm:py-20 md:py-24">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] sm:auto-rows-[180px]">
          {tiles.map((tile, index) => (
            <motion.div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-lg border bg-muted",
                tile.span === "tall" && "row-span-2",
                tile.span === "wide" && "col-span-2"
              )}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
            >
              {tile.src ? (
                <Image src={tile.src} alt={tile.alt} fill className="object-cover" />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 text-muted-foreground/60">
                  <ImageIcon className="size-6" />
                  <span className="px-3 text-center text-xs">{tile.alt}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
