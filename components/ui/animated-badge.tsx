"use client"

import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text"

interface AnimatedBadgeProps {
  children: React.ReactNode
  shimmerWidth?: number
}

export function AnimatedBadge({ children, shimmerWidth = 150 }: AnimatedBadgeProps) {
  return (
    <div className="rounded-full px-3 py-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 inline-flex items-center justify-center h-8">
      <AnimatedShinyText
        className="text-xs font-medium !mx-0 !max-w-none !text-[#004d66] dark:!text-white !bg-gradient-to-r !from-transparent !via-[#004d66]/80 dark:!via-white/80 !via-50% !to-transparent !leading-none"
        shimmerWidth={shimmerWidth}
      >
        {children}
      </AnimatedShinyText>
    </div>
  )
}
