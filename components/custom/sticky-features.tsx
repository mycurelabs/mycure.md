"use client";
import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { reducedMotionTransition } from "@/lib/animation-variants";

interface FeatureItem {
  badge?: string;
  title: string;
  description: string;
  image: React.ReactNode;
}

export function StickyFeatures({
  items,
  className,
}: {
  items: FeatureItem[];
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left: Scrolling text content */}
        <div className="space-y-16 lg:space-y-[50vh]">
          {items.map((item, index) => (
            <FeatureText
              key={index}
              item={item}
              index={index}
              onInView={() => setActiveIndex(index)}
            />
          ))}
          {/* Spacer for last item to scroll past - desktop only */}
          <div className="hidden lg:block h-[30vh]" />
        </div>

        {/* Right: Sticky image panel */}
        <div className="hidden lg:block">
          <div className="sticky top-[20vh] h-[60vh]">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={prefersReducedMotion ? reducedMotionTransition : { duration: 0.5 }}
                className={cn(
                  "absolute inset-0",
                  activeIndex === index ? "z-10" : "z-0"
                )}
              >
                {item.image}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureText({
  item,
  index,
  onInView,
}: {
  item: FeatureItem;
  index: number;
  onInView: () => void;
}) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px", // Trigger when in center 20% of viewport
  });

  React.useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 20 }}
      animate={prefersReducedMotion
        ? { opacity: 1, y: 0 }
        : { opacity: isInView ? 1 : 0.3, y: isInView ? 0 : 20 }
      }
      transition={prefersReducedMotion ? reducedMotionTransition : { duration: 0.5 }}
      className="space-y-4"
    >
      {item.badge && (
        <span className="text-xs font-medium text-primary uppercase tracking-wide">
          {item.badge}
        </span>
      )}
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
        {item.title}
      </h3>
      <p className="text-lg text-muted-foreground max-w-md">
        {item.description}
      </p>
      {/* Mobile: Show image inline */}
      <div className="lg:hidden mt-6 relative aspect-square rounded-xl overflow-hidden">
        {item.image}
      </div>
    </motion.div>
  );
}
