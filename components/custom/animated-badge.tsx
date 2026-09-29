import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text"

interface AnimatedBadgeProps {
  children: React.ReactNode
  shimmerWidth?: number
}

// Shimmer runs only under prefers-reduced-motion: no-preference (motion-safe:);
// reduced-motion users get the solid primary text.
export function AnimatedBadge({ children, shimmerWidth = 150 }: AnimatedBadgeProps) {
  return (
    <div className="rounded-full px-3 py-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 inline-flex items-center justify-center h-8">
      <AnimatedShinyText
        className="text-xs font-medium !mx-0 !max-w-none !text-primary dark:!text-white motion-safe:!bg-gradient-to-r motion-safe:!from-transparent motion-safe:!via-primary/80 motion-safe:dark:!via-white/80 motion-safe:!via-50% motion-safe:!to-transparent !leading-none"
        shimmerWidth={shimmerWidth}
      >
        {children}
      </AnimatedShinyText>
    </div>
  )
}
