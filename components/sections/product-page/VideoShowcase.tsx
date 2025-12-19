"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { AnimatedBadge } from "@/components/ui/animated-badge"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { viewportOnce, transition } from "@/lib/animation-variants"
import type { VideoShowcaseConfig } from "@/components/types/product-page"

interface VideoShowcaseProps {
  config: VideoShowcaseConfig
}

export function VideoShowcase({ config }: VideoShowcaseProps) {
  return (
    <section id="solution" className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
      <div className="container px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* Content Section - Centered Vertical Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={transition.medium}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Animated Badge */}
          <div className="flex justify-center">
            <AnimatedBadge>{config.badge}</AnimatedBadge>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            {config.headline}
          </h2>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {config.description}
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <Link href={config.cta.href} target="_blank" rel="noopener noreferrer">
              <ShimmerButton
                className="h-11 sm:h-12 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                background="#0099CC"
                shimmerColor="#ffffff"
                shimmerDuration="2s"
              >
                {config.cta.text}
                <ArrowRight className="size-4" />
              </ShimmerButton>
            </Link>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          id="solution-video"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto max-w-5xl mt-16"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm">
            <iframe
              src={config.video.src}
              title={config.video.title}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>
          </div>
          <noscript>
            <div className="aspect-video rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
              <p className="text-muted-foreground">Please enable JavaScript to view the video</p>
            </div>
          </noscript>
        </motion.div>
      </div>
    </section>
  )
}
