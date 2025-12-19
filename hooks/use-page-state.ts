"use client"

import { useState, useEffect, useCallback } from "react"
import { useTheme } from "next-themes"

export interface PageState {
  /** Whether the page has scrolled past the threshold */
  isScrolled: boolean
  /** Whether the mobile menu is open */
  mobileMenuOpen: boolean
  /** Set the mobile menu open state */
  setMobileMenuOpen: (open: boolean) => void
  /** Whether the component has mounted (for hydration safety) */
  mounted: boolean
  /** Current theme ("light" | "dark" | "system") */
  theme: string | undefined
  /** Toggle between light and dark theme */
  toggleTheme: () => void
}

interface UsePageStateOptions {
  /** Scroll threshold in pixels (default: 10) */
  scrollThreshold?: number
}

/**
 * Shared hook for common page state management.
 * Consolidates scroll tracking, mobile menu state, theme handling, and mount state.
 *
 * @example
 * ```tsx
 * function Page() {
 *   const { isScrolled, mobileMenuOpen, setMobileMenuOpen, mounted, theme, toggleTheme } = usePageState()
 *
 *   return (
 *     <header className={isScrolled ? "bg-white shadow" : "bg-transparent"}>
 *       <button onClick={toggleTheme}>
 *         {mounted && theme === "dark" ? <Sun /> : <Moon />}
 *       </button>
 *     </header>
 *   )
 * }
 * ```
 */
export function usePageState(options: UsePageStateOptions = {}): PageState {
  const { scrollThreshold = 10 } = options

  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold)
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollThreshold])

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  return {
    isScrolled,
    mobileMenuOpen,
    setMobileMenuOpen,
    mounted,
    theme,
    toggleTheme,
  }
}
