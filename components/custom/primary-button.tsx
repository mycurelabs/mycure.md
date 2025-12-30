"use client"

import * as React from "react"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { cn } from "@/lib/utils"

interface PrimaryButtonProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof ShimmerButton>,
    "background" | "shimmerColor"
  > {
  /**
   * Use slower shimmer animation (3s instead of 2s)
   * Best for CTA sections where button is more prominent
   */
  slow?: boolean
}

/**
 * Primary brand button with MYCURE's signature cyan color
 * Wraps ShimmerButton with consistent brand configuration
 */
export const PrimaryButton = React.forwardRef<
  HTMLButtonElement,
  PrimaryButtonProps
>(({ slow, className, children, ...props }, ref) => {
  return (
    <ShimmerButton
      ref={ref}
      background="var(--gradient-quinary)"
      shimmerColor="#ffffff"
      shimmerDuration={slow ? "3s" : "2s"}
      className={cn(
        "px-6 py-3 text-base font-semibold rounded-full shadow-lg hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </ShimmerButton>
  )
})

PrimaryButton.displayName = "PrimaryButton"
