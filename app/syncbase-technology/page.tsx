"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
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
import { PrimaryButton } from "@/components/custom/primary-button"
import { DocumentHeader } from "@/components/sections/shared"
import { YouTubeFacade } from "@/components/custom/youtube-facade"

export default function SyncbaseTechnologyPage() {
  const [mobileTocOpen, setMobileTocOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "why-syncbase", title: "Why Syncbase?" },
    { id: "key-features", title: "Key Features" },
    { id: "security-privacy", title: "Security & Privacy" },
    { id: "benefits", title: "Benefits" },
    { id: "demo", title: "Demo" },
  ]

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("demo")
      } else {
        let currentSection = ""
        let maxVisibility = 0

        for (const section of sections) {
          const element = document.getElementById(section.id)
          if (element) {
            const rect = element.getBoundingClientRect()
            const elementTop = rect.top
            const elementBottom = rect.bottom
            const viewportHeight = window.innerHeight

            const visibleTop = Math.max(0, elementTop)
            const visibleBottom = Math.min(viewportHeight, elementBottom)
            const visibleHeight = Math.max(0, visibleBottom - visibleTop)

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
      <DocumentHeader />

      <main className="flex-1">
        {/* Hero Section - Blog Template Style */}
        <section className="w-full border-b bg-muted/30">
          <div className="container px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
            <motion.div 
              className="max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
                <ArrowLeft className="size-4" />
                Back to Home
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                MYCURE Syncbase
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
                The holy grail of online-offline technology
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                MYCURE Syncbase is the cost-effective setup for your clinic management system. It enables clinics and multi-specialty practices to enjoy the reliability of on-premise servers with the flexibility and affordability of the cloud.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section with TOC */}
        <section className="w-full">
          <div className="container px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
            <div className="flex gap-12">
              {/* Main Content */}
              <div className="flex-1 max-w-4xl">
                <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight">
                  
                  {/* Section 1: Why Syncbase? */}
                  <motion.section 
                    id="why-syncbase" 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Why Syncbase?</h2>
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
                      <YouTubeFacade
                        videoId="siFBgZMt26k"
                        title="MYCURE Syncbase Demo"
                      />
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      It lets you work offline without disruption and syncs your data to the cloud once you're back online.
                    </p>
                  </motion.section>

                  {/* Section 2: Key Features */}
                  <motion.section 
                    id="key-features" 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
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
                          <span>Data consolidation occurs smoothly once internet connectivity is restored.</span>
                        </li>
                      </ul>
                    </div>
                  </motion.section>

                  {/* Section 3: Security & Privacy */}
                  <motion.section 
                    id="security-privacy" 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Security & Privacy</h2>
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
                  </motion.section>

                  {/* Section 4: Benefits */}
                  <motion.section 
                    id="benefits" 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Benefits</h2>
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
                        <span>Scalable for clinics, enterprises, or multi-branch health facilities.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Protects sensitive patient information at every step.</span>
                      </li>
                    </ul>
                  </motion.section>

                  {/* Section 5: Demo */}
                  <motion.section 
                    id="demo" 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Demo</h2>
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
                        <PrimaryButton slow className="flex items-center justify-center gap-2">
                          👉 Book a Demo Today
                          <ExternalLink className="size-4" />
                        </PrimaryButton>
                      </Link>
                    </div>
                  </motion.section>
                </div>
              </div>

              {/* Desktop Table of Contents */}
              <aside className="hidden lg:block w-80 flex-shrink-0">
                <motion.div 
                  className="sticky top-24"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
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
                </motion.div>
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

    </div>
  )
}