"use client"

import { useEffect, useRef, useState, type ElementType, type HTMLAttributes } from "react"

type RevealProps = HTMLAttributes<HTMLElement> & { as?: ElementType }

/**
 * Fade-up on first scroll into view. Server HTML is fully visible; the hidden
 * state is applied only after mount (data-reveal="pending"), and only under
 * prefers-reduced-motion: no-preference (see .reveal in app/globals.css).
 */
export function Reveal({ as: Tag = "div", className = "", ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [state, setState] = useState<"idle" | "pending" | "shown">("idle")

  useEffect(() => {
    const el = ref.current
    if (!el || !("IntersectionObserver" in window)) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) return // already on screen: never hide
    setState("pending")
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setState("shown")
        io.disconnect()
      }
    }, { rootMargin: "0px 0px -10% 0px" })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return <Tag ref={ref} data-reveal={state} className={`reveal ${className}`.trim()} {...rest} />
}
