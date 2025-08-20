"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface HeroSectionProps {
  badge?: {
    text: string
    icon?: string
  }
  title: string
  description: string
  emailPlaceholder?: string
  ctaText?: string
  downloadText?: string
  features?: string[]
  dashboardImage?: {
    src: string
    alt: string
    width: number
    height: number
  }
}

export function HeroSection({
  badge = { text: "🎉 Now Available" },
  title = "Finally, A Healthcare System That Actually Saves You Time",
  description = "Stop drowning in paperwork and start focusing on what matters most - your patients. Healthcare providers everywhere are discovering how intuitive practice management can transform their daily workflow and reduce administrative stress.",
  emailPlaceholder = "Enter your email address",
  ctaText = "Get Early Access",
  downloadText = "Download apps",
  features = [
    "No credit card required",
    "14-day free trial",
    "Setup in minutes"
  ],
  dashboardImage = {
    src: "https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png?resize=1504x1128&vertical=center",
    alt: "MYCURE dashboard",
    width: 1280,
    height: 720
  }
}: HeroSectionProps) {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <Badge
            className="mb-6 rounded-full px-4 py-1.5 text-sm font-medium bg-white/10 text-white border-white/20"
            variant="outline"
          >
            {badge.text}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            {description}
          </p>

          {/* Email Capture Section */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-lg mx-auto mb-8">
            <div className="relative flex-1 w-full sm:w-auto">
              <input
                type="email"
                placeholder={emailPlaceholder}
                className="w-full h-12 px-4 pr-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
              />
            </div>
            <Button
              size="lg"
              className="h-12 px-8 bg-white text-primary hover:bg-white/90 font-semibold rounded-lg whitespace-nowrap"
            >
              {ctaText}
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>

          {/* Download CTA */}
          <div className="mb-8">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium group"
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {downloadText}
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="size-4 text-white" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm">
            <Image
              src={dashboardImage.src}
              width={dashboardImage.width}
              height={dashboardImage.height}
              alt={dashboardImage.alt}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-white/20 to-white/10 blur-3xl opacity-70"></div>
          <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-white/10 to-white/20 blur-3xl opacity-70"></div>
        </motion.div>
      </div>
    </section>
  )
}