"use client";

import Image from "next/image";
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
  return (
    <div className={cn("group relative overflow-x-clip overflow-y-visible", className)}>
      <div className="flex animate-marquee gap-16 md:gap-24 group-hover:[animation-play-state:paused]">
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={`${logo.alt}-${idx}`}
            className="relative flex shrink-0 items-center justify-center group/logo"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={240}
              height={96}
              className="h-20 w-auto object-contain opacity-60 grayscale transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0 md:h-24"
            />
            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-md opacity-0 scale-95 group-hover/logo:opacity-100 group-hover/logo:scale-100 transition-all duration-200 pointer-events-none z-50 whitespace-nowrap">
              {logo.name || logo.alt}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
