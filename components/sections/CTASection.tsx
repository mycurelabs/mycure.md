"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CTASectionProps {
  badge?: {
    text: string
    variant?: "default" | "secondary" | "destructive" | "outline"
  }
  title?: string
  description?: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  backgroundStyle?: "gradient" | "muted" | "default"
  className?: string
}

export function CTASection({
  badge,
  title = "Ready to Transform Your Practice?",
  description = "Join thousands of healthcare providers who have already streamlined their operations with MYCURE. Start your free trial today and see the difference.",
  primaryCta = { text: "Get Started Free", href: "#" },
  secondaryCta = { text: "Schedule Demo", href: "#" },
  backgroundStyle = "gradient",
  className = ""
}: CTASectionProps) {
  const backgroundClasses = {
    gradient: "bg-gradient-to-br from-background to-muted/30",
    muted: "bg-muted/30",
    default: "bg-background"
  }

  return (
    <section className={`w-full py-20 md:py-32 ${backgroundClasses[backgroundStyle]} ${className}`}>
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto"
        >
          {badge && (
            <Badge 
              className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" 
              variant={badge.variant || "secondary"}
            >
              {badge.text}
            </Badge>
          )}
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button size="lg" className="px-8" asChild>
              <Link href={primaryCta.href}>
                {primaryCta.text}
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            
            {secondaryCta && (
              <Button variant="outline" size="lg" className="px-8" asChild>
                <Link href={secondaryCta.href}>
                  {secondaryCta.text}
                  <ChevronRight className="ml-2 size-4" />
                </Link>
              </Button>
            )}
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}