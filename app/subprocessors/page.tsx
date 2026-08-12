"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DocumentHeader } from "@/components/sections/shared"

export default function SubprocessorsPage() {
  const [mobileTocOpen, setMobileTocOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "what-is-a-subprocessor", title: "1. What Is a Subprocessor?" },
    { id: "current-material-subprocessors", title: "2. Current Material Subprocessors" },
    { id: "deployment-specific-processing", title: "3. Deployment-Specific Processing" },
    { id: "customer-selected-third-party-services", title: "4. Customer-Selected Third-Party Services" },
    { id: "artificial-intelligence-services", title: "5. Artificial Intelligence Services" },
    { id: "subprocessor-safeguards", title: "6. Subprocessor Safeguards" },
    { id: "changes-to-subprocessors", title: "7. Changes to Subprocessors" },
    { id: "questions-and-privacy-contact", title: "8. Questions and Privacy Contact" },
    { id: "related-resources", title: "Related Resources" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection(sections[sections.length - 1].id)
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
        {/* Hero Section */}
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
                Subprocessor List
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                This Subprocessor List identifies material third-party service providers that <strong>Team OPS Inc. dba MYCURE (“MYCURE,” “we,” “us,” or “our”)</strong> currently engages to process Customer Data in connection with <strong>MYCURE CMS</strong> and related services.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Effective Date: August 11, 2026
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

                  {/* Preamble */}
                  <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-muted-foreground leading-relaxed">This page should be read together with our <strong>Privacy Notice</strong>, <strong>Terms of Service</strong>, <strong>Security Overview</strong>, and any applicable data processing agreement, Business Associate Agreement, Order Form, or other written agreement with the Customer.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where a Customer has a written agreement containing more specific provisions regarding subprocessors, processing locations, or deployment responsibilities, that agreement applies to the extent provided in that agreement.</p>
                  </motion.div>

                  <motion.section
                    id="what-is-a-subprocessor"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">1. What Is a Subprocessor?</h2>
                    <p className="text-muted-foreground leading-relaxed">A <strong>Subprocessor</strong> is a third-party service provider engaged by MYCURE that processes Customer Data on behalf of MYCURE in connection with providing MYCURE CMS.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">A provider is not necessarily a Subprocessor merely because MYCURE uses its software, technology, or services.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">For purposes of this list, Subprocessors generally do not include:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>software libraries, frameworks, databases, caches, or other components operated within MYCURE-controlled infrastructure where no external provider independently receives Customer Data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>general website, corporate, administrative, sales, marketing, accounting, or business-service providers that do not process Customer Data on behalf of Customers through MYCURE CMS;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>third-party services selected, enabled, or controlled independently by a Customer; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>infrastructure and service providers selected and controlled by a Customer for a client-hosted or customer-managed deployment.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Other personal data processed by MYCURE for its own business, account-administration, website, security, billing, or similar purposes is addressed in our Privacy Notice as applicable.</p>
                  </motion.section>

                  <motion.section
                    id="current-material-subprocessors"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">2. Current Material Subprocessors</h2>
                    <p className="text-muted-foreground leading-relaxed">The following providers currently process Customer Data in connection with the applicable MYCURE-hosted MYCURE CMS service.</p>
                    <div className="not-prose overflow-x-auto rounded-lg border mt-6"><table className="w-full text-sm text-left"><thead className="bg-muted/50 text-foreground"><tr><th className="px-4 py-3 font-semibold"><strong>Provider</strong></th><th className="px-4 py-3 font-semibold"><strong>Service</strong></th><th className="px-4 py-3 font-semibold"><strong>Primary Processing Location</strong></th><th className="px-4 py-3 font-semibold"><strong>Customer Data Involved</strong></th></tr></thead><tbody className="divide-y"><tr className="align-top text-muted-foreground"><td className="px-4 py-3 font-medium text-foreground"><strong>DigitalOcean</strong></td><td className="px-4 py-3">Managed Kubernetes hosting, compute, networking, and managed database</td><td className="px-4 py-3"><strong>Singapore</strong></td><td className="px-4 py-3">Potentially all Customer Data, depending on the infrastructure component used</td></tr><tr className="align-top text-muted-foreground"><td className="px-4 py-3 font-medium text-foreground"><strong>Google LLC (Google Cloud)</strong></td><td className="px-4 py-3">Object and file storage, encrypted secret management, and Google sign-in (OAuth)</td><td className="px-4 py-3"><strong>United States / configured per deployment</strong></td><td className="px-4 py-3">Customer Data (including file attachments), account identifiers, and application secrets</td></tr><tr className="align-top text-muted-foreground"><td className="px-4 py-3 font-medium text-foreground"><strong>Postmark</strong></td><td className="px-4 py-3">Transactional and system email delivery, including account verification, password-reset communications, and other applicable service-related communications</td><td className="px-4 py-3"><strong>United States</strong></td><td className="px-4 py-3">Primarily Authorized User names, email addresses, applicable message content, and delivery metadata</td></tr></tbody></table></div>
                    <p className="text-muted-foreground leading-relaxed mt-4">Patient clinical information is not intentionally transmitted to Postmark as part of the currently described account-verification and password-reset workflows.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">The providers and processing arrangements applicable to a particular Customer may vary based on deployment model, enabled functionality, geographic requirements, and the Customer’s applicable written agreement.</p>
                  </motion.section>

                  <motion.section
                    id="deployment-specific-processing"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">3. Deployment-Specific Processing</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE CMS may be provided using different deployment models.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">MYCURE-Hosted Deployments</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">For MYCURE-hosted services, MYCURE may engage infrastructure and other Subprocessors reasonably necessary to provide, operate, secure, maintain, support, and recover the applicable service.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Current material Subprocessors are identified above.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">Client-Hosted or Customer-Managed Deployments</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">For client-hosted, private-cloud, or customer-managed deployments, the Customer may select, provide, administer, or control its own hosting environment, infrastructure providers, networks, storage, backup systems, security services, or other technology.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">A provider selected or controlled by the Customer does not become a MYCURE Subprocessor solely because MYCURE CMS is deployed in or interacts with that environment.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">The applicable Order Form, service agreement, data processing agreement, security agreement, Statement of Work, or other written agreement may further describe deployment-specific responsibilities.</p>
                  </motion.section>

                  <motion.section
                    id="customer-selected-third-party-services"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">4. Customer-Selected Third-Party Services</h2>
                    <p className="text-muted-foreground leading-relaxed">Customers may enable, request, or authorize MYCURE CMS to connect with third-party services.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Examples may include:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>laboratories and diagnostic systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>imaging or radiology systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>pharmacies;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>HMO, insurer, or payor systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>payment services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>accounting systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>messaging and communication services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>government or regulatory systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>reporting or analytics services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>APIs; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other Customer-selected integrations.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">A third party selected or independently controlled by a Customer is not a MYCURE Subprocessor solely because MYCURE CMS transmits information to or receives information from that third party at the Customer’s instruction.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers are responsible for determining whether Customer-selected integrations and disclosures are appropriate and lawful for their use.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Third-party services may also be subject to their own terms, privacy notices, security practices, and data-processing arrangements.</p>
                  </motion.section>

                  <motion.section
                    id="artificial-intelligence-services"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">5. Artificial Intelligence Services</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE does not currently use a third-party artificial intelligence or large-language-model provider to process Customer Data as part of the production MYCURE CMS application.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may introduce AI-assisted functionality in the future.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">If an external AI or large-language-model provider is introduced and qualifies as a Subprocessor of Customer Data, MYCURE will address the applicable data-processing, authorization, security, and notice requirements and update this list as appropriate.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Use of development or internal productivity tools that do not receive production Customer Data does not make the provider of those tools a Subprocessor of Customer Data.</p>
                  </motion.section>

                  <motion.section
                    id="subprocessor-safeguards"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">6. Subprocessor Safeguards</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE requires Subprocessors processing Customer Data on its behalf to be subject to appropriate contractual, confidentiality, security, and data-protection obligations taking into account the nature of the service and applicable law.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Depending on the Processing, these arrangements may address matters such as:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>processing instructions and permitted purposes;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>confidentiality;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>appropriate technical and organizational security measures;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access restrictions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>incident notification and cooperation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>data protection requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>onward processing;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>return or deletion of data; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other obligations appropriate to the Processing.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">The specific obligations applicable to a Subprocessor may vary according to the nature of its service, the Customer’s deployment, and applicable law.</p>
                  </motion.section>

                  <motion.section
                    id="changes-to-subprocessors"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">7. Changes to Subprocessors</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE may add, replace, or discontinue Subprocessors as its services, infrastructure, security requirements, technology, availability requirements, and business operations evolve.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where a new material Subprocessor will process Customer Data and an applicable written agreement or law requires notice or another documented mechanism, MYCURE will follow the applicable requirement.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Urgent changes may sometimes be necessary for security, legal, availability, continuity, or similar operational reasons. Where applicable, notice may be provided after such a change where prior notice is not reasonably practicable and the applicable agreement permits it.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">This Subprocessor List is intended to remain current but does not permanently commit MYCURE to any particular infrastructure provider or technology.</p>
                  </motion.section>

                  <motion.section
                    id="questions-and-privacy-contact"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">8. Questions and Privacy Contact</h2>
                    <p className="text-muted-foreground leading-relaxed">Questions concerning this Subprocessor List, privacy, data protection, or security matters relating to MYCURE may be directed to:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Team OPS Inc. dba MYCURE</strong><br />201 Malayan Plaza<br />ADB Avenue corner Opal Road<br />Ortigas Business Center<br />Pasig City, Philippines 1600</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Privacy &amp; Security Contact:</strong><br /><a href="mailto:privacy@mycure.md" className="text-primary hover:underline">privacy@mycure.md</a></p>
                  </motion.section>

                  <motion.section
                    id="related-resources"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Related Resources</h2>
                    <p className="text-muted-foreground leading-relaxed"><strong>Privacy Notice</strong><br /><a href="/privacy-policy" className="text-primary hover:underline">https://mycure.md/privacy-policy</a></p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Terms of Service</strong><br /><a href="/terms-and-conditions" className="text-primary hover:underline">https://mycure.md/terms-and-conditions</a></p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Security Overview</strong><br /><a href="/security-overview" className="text-primary hover:underline">https://mycure.md/security-overview</a></p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Subprocessor List</strong><br /><a href="/subprocessors" className="text-primary hover:underline">https://mycure.md/subprocessors</a></p>
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
