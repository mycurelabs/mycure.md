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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TermsAndConditionsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileTocOpen, setMobileTocOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "eligibility", title: "2. Eligibility" },
    { id: "account", title: "3. Account Registration" },
    { id: "services", title: "4. Services Provided" },
    { id: "use-restrictions", title: "5. Use Restrictions" },
    { id: "payment", title: "6. Payment and Billing" },
    { id: "refunds", title: "7. Refunds and Cancellations" },
    { id: "intellectual-property", title: "8. Intellectual Property" },
    { id: "confidentiality", title: "9. Confidentiality" },
    { id: "disclaimers", title: "10. Disclaimers" },
    { id: "limitation", title: "11. Limitation of Liability" },
    { id: "indemnification", title: "12. Indemnification" },
    { id: "compliance", title: "13. Healthcare Compliance" },
    { id: "third-party", title: "14. Third-Party Services" },
    { id: "modifications", title: "15. Modifications to Service" },
    { id: "termination", title: "16. Termination" },
    { id: "data-security", title: "17. Data Security and Privacy" },
    { id: "force-majeure", title: "18. Force Majeure" },
    { id: "severability", title: "19. Severability" },
    { id: "entire-agreement", title: "20. Entire Agreement" },
    { id: "assignment", title: "21. Assignment" },
    { id: "governing-law", title: "22. Governing Law" },
    { id: "notices", title: "23. Notices" },
    { id: "contact-information", title: "24. Contact Information" },
    { id: "acknowledgment", title: "25. Acknowledgment" },
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
        setActiveSection("acknowledgment")
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
                Terms and Conditions
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Please read these Terms and Conditions carefully before using our services.
              </p>
              <p className="text-sm text-muted-foreground">
                Effective Date: August 29, 2025
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
                  
                  {/* Section 1: Acceptance of Terms */}
                  <section id="acceptance" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing, browsing, or using the MYCURE platform ("Services"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to all the terms and conditions, you must not use the Services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      These Terms constitute a legally binding agreement between you (or the entity you represent) and MYCURE.
                    </p>
                  </section>

                  {/* Section 2: Eligibility */}
                  <section id="eligibility" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      To use our Services, you must:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Be at least 18 years old or the legal age of majority in your jurisdiction.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Be a licensed healthcare provider, clinic, or authorized personnel.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Have the legal authority to enter into these Terms.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Not be barred from using the Services under applicable law.</span>
                      </li>
                    </ul>
                  </section>

                  {/* Section 3: Account Registration */}
                  <section id="account" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      You must create an account to access certain features. You agree to:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Provide accurate, current, and complete information.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Maintain and promptly update your account information.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Keep your login credentials confidential and secure.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Notify us immediately of any unauthorized access or security breach.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Accept responsibility for all activities under your account.</span>
                      </li>
                    </ul>
                  </section>

                  {/* Section 4: Services Provided */}
                  <section id="services" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">4. Services Provided</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      MYCURE provides healthcare management software including but not limited to:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Electronic Medical Records (EMR) management.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Appointment scheduling and management.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Billing and invoicing systems.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Inventory management.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Analytics and reporting tools.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Patient communication features.</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Services may vary based on your subscription plan and region.
                    </p>
                  </section>

                  {/* Section 5: Use Restrictions */}
                  <section id="use-restrictions" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">5. Use Restrictions</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      You agree NOT to:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Use the Services for any illegal or unauthorized purpose.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Violate any laws, regulations, or third-party rights.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Attempt to gain unauthorized access to any portion of the Services.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Interfere with or disrupt the Services or servers.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Transmit viruses, malware, or harmful code.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Reverse engineer, decompile, or disassemble the Services.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Share your account credentials with unauthorized parties.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Use automated systems to access the Services without permission.</span>
                      </li>
                    </ul>
                  </section>

                  {/* Section 6: Payment and Billing */}
                  <section id="payment" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">6. Payment and Billing</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      By subscribing to our paid Services, you agree to:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Pay all applicable fees according to your selected plan.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Provide valid payment information and keep it current.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Authorize automatic recurring charges for subscription services.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Pay any applicable taxes, duties, or government fees.</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      All fees are non-refundable unless otherwise stated. We reserve the right to modify pricing with 30 days' notice.
                    </p>
                  </section>

                  {/* Section 7: Refunds and Cancellations */}
                  <section id="refunds" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">7. Refunds and Cancellations</h2>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>You may cancel your subscription at any time through your account settings.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Cancellation takes effect at the end of the current billing period.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>No refunds are provided for partial months or unused services.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>We may offer refunds at our sole discretion for exceptional circumstances.</span>
                      </li>
                    </ul>
                  </section>

                  {/* Section 8: Intellectual Property */}
                  <section id="intellectual-property" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All intellectual property rights in the Services, including software, content, features, and functionality, are owned by MYCURE or its licensors. You are granted a limited, non-exclusive, non-transferable license to use the Services in accordance with these Terms.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      You retain ownership of data you input into the Services but grant us a license to use, process, and store such data to provide the Services.
                    </p>
                  </section>

                  {/* Section 9: Confidentiality */}
                  <section id="confidentiality" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">9. Confidentiality</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the use of Services. This includes but is not limited to technical data, business strategies, and patient information.
                    </p>
                  </section>

                  {/* Section 10: Disclaimers */}
                  <section id="disclaimers" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">10. Disclaimers</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      We do not guarantee that the Services will be uninterrupted, secure, or error-free. We are not responsible for any medical decisions made using the Services.
                    </p>
                  </section>

                  {/* Section 11: Limitation of Liability */}
                  <section id="limitation" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, MYCURE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Our total liability shall not exceed the amount paid by you for the Services in the 12 months preceding the claim.
                    </p>
                  </section>

                  {/* Section 12: Indemnification */}
                  <section id="indemnification" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You agree to indemnify, defend, and hold harmless MYCURE, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.
                    </p>
                  </section>

                  {/* Section 13: Healthcare Compliance */}
                  <section id="compliance" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">13. Healthcare Compliance</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You acknowledge that the use of Services in healthcare settings may be subject to various regulations including but not limited to HIPAA, Data Privacy Act, and local healthcare laws. You are responsible for ensuring your use of the Services complies with all applicable regulations.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      We will maintain appropriate safeguards for protected health information as required by law.
                    </p>
                  </section>

                  {/* Section 14: Third-Party Services */}
                  <section id="third-party" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">14. Third-Party Services</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The Services may integrate with or link to third-party services. We are not responsible for the content, accuracy, or practices of third-party services. Your use of third-party services is governed by their respective terms and policies.
                    </p>
                  </section>

                  {/* Section 15: Modifications to Service */}
                  <section id="modifications" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">15. Modifications to Service</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We reserve the right to modify, suspend, or discontinue any part of the Services at any time. We will provide reasonable notice for significant changes that materially affect your use of the Services.
                    </p>
                  </section>

                  {/* Section 16: Termination */}
                  <section id="termination" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">16. Termination</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We may terminate or suspend your account immediately, without prior notice, if:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>You breach these Terms.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>You fail to pay applicable fees.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>We are required to do so by law.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>We discontinue the Services.</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Upon termination, your right to use the Services will immediately cease. We will retain and use your information as necessary to comply with legal obligations.
                    </p>
                  </section>

                  {/* Section 17: Data Security and Privacy */}
                  <section id="data-security" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">17. Data Security and Privacy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Your use of the Services is also governed by our Privacy Policy. We implement industry-standard security measures to protect your data, but cannot guarantee absolute security. You are responsible for maintaining the security of your account credentials.
                    </p>
                  </section>

                  {/* Section 18: Force Majeure */}
                  <section id="force-majeure" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">18. Force Majeure</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Neither party shall be liable for any delay or failure to perform due to causes beyond their reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.
                    </p>
                  </section>

                  {/* Section 19: Severability */}
                  <section id="severability" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">19. Severability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
                    </p>
                  </section>

                  {/* Section 20: Entire Agreement */}
                  <section id="entire-agreement" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">20. Entire Agreement</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms, together with our Privacy Policy and any other agreements expressly incorporated by reference, constitute the entire agreement between you and MYCURE regarding the use of Services.
                    </p>
                  </section>

                  {/* Section 21: Assignment */}
                  <section id="assignment" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">21. Assignment</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations under these Terms without restriction.
                    </p>
                  </section>

                  {/* Section 22: Governing Law */}
                  <section id="governing-law" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">22. Governing Law</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms shall be governed by and construed in accordance with the laws of the Republic of the Philippines, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Quezon City, Philippines.
                    </p>
                  </section>

                  {/* Section 23: Notices */}
                  <section id="notices" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">23. Notices</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All notices under these Terms shall be in writing and deemed given when delivered personally, sent by confirmed email, or sent by certified mail, return receipt requested, to the addresses provided during registration or as updated in account settings.
                    </p>
                  </section>

                  {/* Section 24: Contact Information */}
                  <section id="contact-information" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">24. Contact Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      For questions about these Terms and Conditions, please contact us at:
                    </p>
                    <p className="mt-4">
                      <a href="mailto:helpdesk@mycure.md" className="text-primary hover:underline">
                        helpdesk@mycure.md
                      </a>
                    </p>
                  </section>

                  {/* Section 25: Acknowledgment */}
                  <section id="acknowledgment" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">25. Acknowledgment</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      BY USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS AND CONDITIONS, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS AND CONDITIONS, YOU ARE NOT AUTHORIZED TO USE THE SERVICES.
                    </p>
                  </section>
                </div>
              </div>

              {/* Desktop Table of Contents */}
              <aside className="hidden lg:block w-80 flex-shrink-0">
                <div className="sticky top-24">
                  <div className="border rounded-lg p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
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
                      <Link href="https://culture.mycure.md/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        Careers
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
                  <Link href="https://culture.mycure.md/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
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