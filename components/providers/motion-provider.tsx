"use client";

import { LazyMotion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Animation features load in a separate async chunk so the root layout stays light.
const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

/**
 * LazyMotion (strict): only the lightweight `m` component may be used.
 * MotionConfig makes every animation honour the OS reduce-motion setting.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
