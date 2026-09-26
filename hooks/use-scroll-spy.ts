"use client"

import { useEffect, useState } from "react"

/**
 * Tracks which section (by element id) is active while the page scrolls.
 * Same rules as the per-page handlers it replaces: near the bottom of the
 * page the last id wins; otherwise the section with the most visible height
 * (or the one crossing the 100px line) wins. The listener is passive and
 * throttled to one measurement per animation frame.
 */
export function useScrollSpy(ids: string[], offset = 100) {
  const [active, setActive] = useState("")
  const key = ids.join("|")

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      const viewportHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (window.scrollY + offset + viewportHeight >= documentHeight - offset) {
        setActive(ids[ids.length - 1])
        return
      }

      let current = ""
      let maxVisibility = 0
      for (const id of ids) {
        const element = document.getElementById(id)
        if (!element) continue
        const { top, bottom } = element.getBoundingClientRect()
        const visibleHeight = Math.max(0, Math.min(viewportHeight, bottom) - Math.max(0, top))
        if (visibleHeight > maxVisibility || (top <= offset && bottom > offset)) {
          maxVisibility = visibleHeight
          current = id
        }
      }
      if (current) setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    measure()
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, offset])

  return active
}
