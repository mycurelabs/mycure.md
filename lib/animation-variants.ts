import type { Variants } from "framer-motion"

// Motion rules: fade-up <=24px, ease-out cubic-bezier(0, 0, 0.58, 1), <=300ms, 50-75ms stagger.
export const easeOut: [number, number, number, number] = [0, 0, 0.58, 1]

// Stagger container variants for grids
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } },
}

// Transition presets (all normalised to the single entrance timing)
export const transition = {
  fast: { duration: 0.2, ease: easeOut },
  medium: { duration: 0.3, ease: easeOut },
  slow: { duration: 0.3, ease: easeOut },
  delayed: { duration: 0.3, delay: 0.06, ease: easeOut },
} as const

// Viewport options
export const viewportOnce = { once: true } as const
