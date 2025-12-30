"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Logo {
  src: string;
  alt: string;
  name?: string;
}

export function LogoCloud({
  logos,
  className,
}: {
  logos: Logo[];
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("group relative overflow-x-clip overflow-y-visible", className)}>
      <div
        className={cn(
          "flex gap-16 md:gap-24",
          // Only animate when motion is allowed
          !prefersReducedMotion && "animate-marquee group-hover:[animation-play-state:paused]",
          // Static layout for reduced motion - center the logos
          prefersReducedMotion && "flex-wrap justify-center",
        )}
      >
        {/* Only duplicate logos when animating */}
        {(prefersReducedMotion ? logos : [...logos, ...logos]).map((logo, idx) => (
          <div
            key={`${logo.alt}-${idx}`}
            className="relative flex shrink-0 items-center justify-center group/logo"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={240}
              height={96}
              className={cn(
                "h-20 w-auto object-contain opacity-60 grayscale md:h-24",
                // Transitions only when motion is allowed
                !prefersReducedMotion && "transition-all duration-300",
                "group-hover/logo:opacity-100 group-hover/logo:grayscale-0",
              )}
            />
            {/* Tooltip */}
            <span
              className={cn(
                "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-md opacity-0 scale-95 pointer-events-none z-50 whitespace-nowrap",
                !prefersReducedMotion && "transition-all duration-200",
                "group-hover/logo:opacity-100 group-hover/logo:scale-100",
              )}
            >
              {logo.name || logo.alt}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
