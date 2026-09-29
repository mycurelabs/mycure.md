/** "smooth" unless the user prefers reduced motion, then "auto" (instant). */
export function scrollBehavior(): ScrollBehavior {
  if (typeof window === "undefined" || !window.matchMedia) return "auto"
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
}
