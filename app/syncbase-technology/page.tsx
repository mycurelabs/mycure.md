"use client"

import React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Moon,
  Sun,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Shield,
  Lock,
  Cloud,
  Users,
  Key,
  CheckCircle,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { useTheme } from "next-themes"

export default function SyncbaseTechnologyPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileTocOpen, setMobileTocOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "why-syncbase", title: "Why Syncbase?" },
    { id: "key-features", title: "Key Features" },
    { id: "security-privacy", title: "Security & Privacy" },
    { id: "benefits", title: "Benefits" },
    { id: "demo", title: "Demo" },
  ]

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Check if we're at the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("demo")
      } else {
        // Find the section that's most visible in the viewport
        let currentSection = ""
        let maxVisibility = 0
        
        for (const section of sections) {
          const element = document.getElementById(section.id)
          if (element) {
            const rect = element.getBoundingClientRect()
            const elementTop = rect.top
            const elementBottom = rect.bottom
            const viewportHeight = window.innerHeight
            
            // Calculate how much of the element is visible
            const visibleTop = Math.max(0, elementTop)
            const visibleBottom = Math.min(viewportHeight, elementBottom)
            const visibleHeight = Math.max(0, visibleBottom - visibleTop)
            
            // If this section is more visible than previous ones, or if we're scrolled past it
            if (visibleHeight > maxVisibility || (elementTop <= 100 && elementBottom > 100)) {
              maxVisibility = visibleHeight
              currentSection = section.id
            }
          }
        }
        
        if (currentSection) {
          setActiveSection(currentSection)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setMobileTocOpen(false)
    }
  }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Simplified Header - Matching main page style */}
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link 
            href="/"
            className="flex items-center gap-2 font-bold hover:opacity-80 transition-opacity"
          >
            <div className="size-8 rounded-full bg-white flex items-center justify-center">
              <Image src="/mycure-logo.svg" alt="MYCURE Logo" width={32} height={32} />
            </div>
            <span>MYCURE</span>
          </Link>
          
          <div className="flex gap-4 items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Blog Template Style */}
        <section className="w-full border-b bg-muted/30">
          <div className="container px-4 md:px-6 py-16 md:py-20">
            <div className="max-w-4xl">
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
                <ArrowLeft className="size-4" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                MYCURE Syncbase
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                The holy grail of online-offline technology
              </p>
              <p className="text-lg text-muted-foreground">
                MYCURE Syncbase is the cost-effective setup for your clinic management system. It enables clinics and hospitals to enjoy the reliability of on-premise servers with the flexibility and affordability of the cloud.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section with TOC */}
        <section className="w-full">
          <div className="container px-4 md:px-6 py-12">
            <div className="flex gap-12">
              {/* Main Content */}
              <div className="flex-1 max-w-4xl">
                <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight">
                  
                  {/* Section 1: Why Syncbase? */}
                  <section id="why-syncbase" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Why Syncbase?</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Setting up a health information system is a major investment for healthcare facilities. Traditional desktop-based applications often require expensive hardware and on-premise servers to run onsite.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      While newer web-based systems offer lower upfront costs, they suffer from a key limitation: when internet access is weak or unavailable, the system becomes inaccessible.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      <strong>MYCURE Syncbase solves this problem.</strong>
                    </p>
                    
                    {/* Embedded YouTube Video */}
                    <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/siFBgZMt26k"
                        title="MYCURE Syncbase Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      It lets you work offline without disruption and syncs your data to the cloud once you're back online.
                    </p>
                  </section>

                  {/* Section 2: Key Features */}
                  <section id="key-features" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <Cloud className="size-5 text-primary" />
                        Work Online or Offline
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Continue creating electronic health records even without internet.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Automatic synchronization once online.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Combines the reliability of on-premise servers with the affordability of the cloud.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <Users className="size-5 text-primary" />
                        Built to Scale
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Deployable in single or multiple branches.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Branches can work independently offline.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Data consolidation occurs seamlessly once internet connectivity is restored.</span>
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* Section 3: Security & Privacy */}
                  <section id="security-privacy" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Security & Privacy</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      MYCURE is designed with healthcare-grade data protection in mind. It complies with international standards for patient data privacy and security.
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-3">
                        <Shield className="size-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Grade A+ SSL</strong> – enterprise-grade encryption in transit.</span>
                      </li>
                      <li className="flex gap-3">
                        <Lock className="size-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Data Encryption</strong> – secure storage and transmission of records.</span>
                      </li>
                      <li className="flex gap-3">
                        <Key className="size-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>User Designated Access</strong> – role-based permissions for staff.</span>
                      </li>
                      <li className="flex gap-3">
                        <Cloud className="size-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Secure Cloud Hosting</strong> – reliable and scalable infrastructure.</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Compliance with Data Privacy Standards</strong> – built around international healthcare privacy requirements.</span>
                      </li>
                    </ul>
                  </section>

                  {/* Section 4: Benefits */}
                  <section id="benefits" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Cost-effective alternative to heavy on-premise setups.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Eliminates downtime due to poor internet.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Scalable for clinics, hospitals, or multi-branch health facilities.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Protects sensitive patient information at every step.</span>
                      </li>
                    </ul>
                  </section>

                  {/* Section 5: Demo */}
                  <section id="demo" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Demo</h2>
                    <ul className="space-y-3 text-muted-foreground mb-6">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>See MYCURE Syncbase in action.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Watch how fast staff can encode medical records.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Learn how Syncbase can be tailored to your clinic's workflow.</span>
                      </li>
                    </ul>
                    
                    <div className="flex justify-start mt-2">
                      <Link 
                        href="https://calendly.com/mycure/demo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ShimmerButton
                          className="px-6 py-3 text-base font-semibold rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                          background="#0099CC"
                          shimmerColor="#ffffff"
                          shimmerDuration="3s"
                        >
                          👉 Book a Demo Today
                          <ExternalLink className="size-4" />
                        </ShimmerButton>
                      </Link>
                    </div>
                  </section>
                </div>
              </div>

              {/* Desktop Table of Contents */}
              <aside className="hidden lg:block w-80 flex-shrink-0">
                <div className="sticky top-24">
                  <div className="border rounded-lg p-6">
                    <h3 className="font-semibold mb-4">Table of Contents</h3>
                    <nav className="space-y-2">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`block w-full text-left text-sm py-2 px-3 rounded-md transition-colors ${
                            activeSection === section.id
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {section.title}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Mobile Table of Contents */}
        <div className="lg:hidden fixed bottom-6 right-6 z-40">
          <Button
            onClick={() => setMobileTocOpen(!mobileTocOpen)}
            size="icon"
            className="rounded-full shadow-lg"
          >
            <Menu className="size-5" />
          </Button>
          {mobileTocOpen && (
            <div className="absolute bottom-16 right-0 w-72 bg-background border rounded-lg shadow-xl p-4 max-h-[70vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Table of Contents</h3>
                <Button
                  onClick={() => setMobileTocOpen(false)}
                  size="icon"
                  variant="ghost"
                >
                  <X className="size-4" />
                </Button>
              </div>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left text-sm py-2 px-3 rounded-md transition-colors ${
                      activeSection === section.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </main>

      {/* Footer - Exact copy from main page with copyright position preserved */}
      <footer className="w-full bg-muted/30 border-t border-border/40">
        <div className="container px-4 md:px-6 py-12">
          {/* Mobile Layout - Two Sections */}
          <div className="sm:hidden">
            {/* Company Info Section - Full Width on Mobile */}
            <div className="mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold">
                  <div className="size-8 rounded-full bg-white flex items-center justify-center">
                    <Image src="/mycure-logo.svg" alt="MYCURE Logo" width={32} height={32} />
                  </div>
                  <span>MYCURE</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Transforming healthcare management with innovative clinic solutions for providers worldwide.
                </p>
                <div className="flex space-x-4">
                  <Link href="https://www.facebook.com/mycure.md/" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </Link>
                  <Link href="https://www.instagram.com/mycure.md/" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </Link>
                  <Link href="https://www.linkedin.com/company/mycure" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Links Section - 2 Column Grid on Mobile */}
            <div className="grid grid-cols-2 gap-4">
              {/* Left Column - Resources and Legal */}
              <div className="space-y-6">
                {/* Resources */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Resources</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="https://culture.mycure.md/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="https://blog.mycure.md/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-story" className="text-muted-foreground hover:text-foreground transition-colors">
                        Our Story
                      </Link>
                    </li>
                    <li>
                      <Link href="/syncbase-technology" className="text-muted-foreground hover:text-foreground transition-colors">
                        Syncbase
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Legal */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Legal</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-and-conditions" className="text-muted-foreground hover:text-foreground transition-colors">
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Support */}
              <div className="space-y-4">
                <h3 className="font-semibold">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="https://help.mycure.md/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:helpdesk@mycure.md" className="text-muted-foreground hover:text-foreground transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Layout - 4 Columns */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Company */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="size-8 rounded-full bg-white flex items-center justify-center">
                  <Image src="/mycure-logo.svg" alt="MYCURE Logo" width={32} height={32} />
                </div>
                <span>MYCURE</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming healthcare management with innovative clinic solutions for providers worldwide.
              </p>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/mycure.md/" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link href="https://www.instagram.com/mycure.md/" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com/company/mycure" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://culture.mycure.md/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="https://blog.mycure.md/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/our-story" className="text-muted-foreground hover:text-foreground transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/syncbase-technology" className="text-muted-foreground hover:text-foreground transition-colors">
                    Syncbase
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://help.mycure.md/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="mailto:helpdesk@mycure.md" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
        
        {/* Copyright - Bottom of Footer */}
        <div className="container px-4 md:px-6 py-4 border-t">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} MYCURE. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}