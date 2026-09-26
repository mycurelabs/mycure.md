import type { Variants } from "framer-motion"

// Stagger container variants for grids
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// Transition presets
export const transition = {
  fast: { duration: 0.3 },
  medium: { duration: 0.5 },
  slow: { duration: 0.6 },
  delayed: { duration: 0.5, delay: 0.1 },
} as const

// Viewport options
export const viewportOnce = { once: true } as const
