"use client";

import { LazyMotion, MotionConfig, MotionGlobalConfig, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Animation features load in a separate async chunk. The provider is mounted only
// by route layouts that render `m.*` components, so document routes load no framer code.
const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

const INSTANT = { duration: 0 } as const;

/**
 * LazyMotion (strict): only the lightweight `m` component may be used.
 * Under prefers-reduced-motion every animation (including opacity fades) is
 * skipped: reducedMotion="always" drops transforms, duration 0 makes the rest instant.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  // Variant-level transitions override MotionConfig, so also skip globally:
  // values jump straight to their target (no fade). Idempotent, client only.
  if (typeof window !== "undefined") MotionGlobalConfig.skipAnimations = !!reduce;
  return (
    <LazyMotion features={loadFeatures} strict>
      {reduce ? (
        <MotionConfig reducedMotion="always" transition={INSTANT}>
          {children}
        </MotionConfig>
      ) : (
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      )}
    </LazyMotion>
  );
}
