"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll } from "framer-motion";
import React from "react";

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-16 z-40 h-[1.85px] bg-gradient-to-r from-[#0099CC] via-[#00B8CC] to-[#0099CC] shadow-sm opacity-65",
        className,
      )}
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
    />
  );
}