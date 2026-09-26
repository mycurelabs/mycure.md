import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  className?: string;
}

/**
 * CSS-only reading progress bar driven by `animation-timeline: scroll(root)`.
 * Hidden where scroll-driven animations are unsupported or reduced motion is
 * requested (see `.scroll-progress` in app/globals.css). Server component.
 */
export function ScrollProgress({ className }: ScrollProgressProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "scroll-progress pointer-events-none fixed inset-x-0 top-16 z-40 h-[1.85px] bg-gradient-to-r from-[var(--gradient-quinary)] via-[var(--gradient-tertiary)] to-[var(--gradient-quinary)] shadow-sm opacity-65",
        className,
      )}
    />
  );
}
