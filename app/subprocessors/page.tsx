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
    { id: "what-is", title: "1. What Is a Subprocessor?" },
    { id: "how-we-use", title: "2. How We Use Subprocessors" },
    { id: "current", title: "3. Current Subprocessors" },
    { id: "customer-integrations", title: "4. Customer-Enabled Third-Party Integrations" },
    { id: "deployment", title: "5. Deployment-Specific Subprocessors" },
    { id: "safeguards", title: "6. Subprocessor Safeguards" },
    { id: "updates", title: "7. Updates to This List" },
    { id: "questions", title: "8. Questions" },
  ]

  const subprocessors = [
    {
      name: "DigitalOcean, LLC",
      category: "Cloud hosting / infrastructure",
      purpose: "Managed Kubernetes hosting, compute, networking, and backup storage",
      region: "United States",
      data: "Customer Data, usage data, technical data",
    },
    {
      name: "Google LLC (Google Cloud)",
      category: "Cloud storage, secret management, and sign-in",
      purpose: "Object/file storage, encrypted secret management, and Google sign-in (OAuth)",
      region: "United States / configured per deployment",
      data: "Customer Data, account identifiers, application secrets",
    },
    {
      name: "Twilio Inc. (SendGrid)",
      category: "Email delivery",
      purpose: "Transactional and service emails",
      region: "United States",
      data: "Contact details, message metadata, service notices",
    },
    {
      name: "ActiveCampaign, LLC (Postmark)",
      category: "Email delivery",
      purpose: "Transactional and service emails",
      region: "United States",
      data: "Contact details, message metadata, service notices",
    },
    {
      name: "Twilio Inc.",
      category: "SMS / messaging",
      purpose: "Appointment reminders, notifications, and patient communications where enabled",
      region: "United States",
      data: "Contact details, message content or metadata",
    },
    {
      name: "Stripe, Inc.",
      category: "Payment processing",
      purpose: "Billing, subscription payments, and payment records",
      region: "United States",
      data: "Billing and transaction information",
    },
    {
      name: "PayMongo Philippines, Inc.",
      category: "Payment processing",
      purpose: "Online payments and checkout for Philippine Customers",
      region: "Philippines",
      data: "Billing and transaction information",
    },
    {
      name: "Odoo S.A. (Odoo Helpdesk)",
      category: "Customer support",
      purpose: "Support ticketing, troubleshooting, and customer communications",
      region: "European Union (Belgium)",
      data: "Support communications, account information, limited Customer Data where needed",
    },
    {
      name: "Google LLC (Google Analytics)",
      category: "Analytics",
      purpose: "Website and product usage analytics",
      region: "United States",
      data: "Usage data, device and technical data",
    },
    {
      name: "Cloudflare, Inc.",
      category: "Security / DNS",
      purpose: "DNS management and TLS for MYCURE domains",
      region: "United States / Global",
      data: "Technical and DNS query metadata",
    },
    {
      name: "Internet Security Research Group (Let’s Encrypt)",
      category: "Security / TLS certificates",
      purpose: "Issuance of TLS/SSL certificates for MYCURE domains",
      region: "United States",
      data: "Domain technical data",
    },
  ]

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("questions")
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
                Subprocessor List
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                This Subprocessor List identifies third-party service providers that MYCURE may use to provide, host, secure, support, maintain, or improve the MYCURE platform and related services.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Effective Date: June 08, 2026
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">
                Operated by TOPSI Inc. (&ldquo;MYCURE,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
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
                    <p className="text-muted-foreground leading-relaxed">
                      This page should be read together with our{" "}
                      <Link href="/terms-and-conditions" className="text-primary hover:underline">Terms of Agreement</Link>,{" "}
                      <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>,{" "}
                      <Link href="/security-overview" className="text-primary hover:underline">Security Overview</Link>, and any applicable Data Processing Addendum, Business Associate Agreement, Order Form, or other written agreement.
                    </p>
                  </motion.div>

                  {/* Section 1 */}
                  <motion.section
                    id="what-is"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">1. What Is a Subprocessor?</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      A subprocessor is a third-party service provider engaged by MYCURE that may process personal data or Customer Data on behalf of MYCURE in connection with the Services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Subprocessors may help us with activities such as hosting, storage, security, communications, payments, support, analytics, monitoring, and other operational services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE requires subprocessors that process personal data on our behalf to apply appropriate confidentiality, security, and data protection obligations.
                    </p>
                  </motion.section>

                  {/* Section 2 */}
                  <motion.section
                    id="how-we-use"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">2. How We Use Subprocessors</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">MYCURE may use subprocessors to:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>host and operate the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>store and back up data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>send service-related emails, SMS, or notifications;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>process payments and billing;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>monitor performance, uptime, errors, and security events;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>provide customer support;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>troubleshoot technical issues;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>protect against abuse, fraud, or unauthorized access;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintain internal business systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>improve platform reliability and user experience; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>comply with legal, security, and operational obligations.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Subprocessors may vary depending on the Customer&rsquo;s subscription, enabled modules, deployment model, region, and applicable written agreement.
                    </p>
                  </motion.section>

                  {/* Section 3 */}
                  <motion.section
                    id="current"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">3. Current Subprocessors</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      The table below identifies subprocessors that may process personal data or Customer Data in connection with the Services.
                    </p>
                    <div className="not-prose overflow-x-auto rounded-lg border">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 text-foreground">
                          <tr>
                            <th className="px-4 py-3 font-semibold whitespace-nowrap">Subprocessor</th>
                            <th className="px-4 py-3 font-semibold whitespace-nowrap">Service Category</th>
                            <th className="px-4 py-3 font-semibold">Purpose</th>
                            <th className="px-4 py-3 font-semibold whitespace-nowrap">Location / Processing Region</th>
                            <th className="px-4 py-3 font-semibold">Data Processed</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {subprocessors.map((sp, index) => (
                            <tr key={index} className="align-top text-muted-foreground">
                              <td className="px-4 py-3 font-medium text-foreground">{sp.name}</td>
                              <td className="px-4 py-3">{sp.category}</td>
                              <td className="px-4 py-3">{sp.purpose}</td>
                              <td className="px-4 py-3">{sp.region}</td>
                              <td className="px-4 py-3">{sp.data}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mt-6">
                      MYCURE does not currently use a third-party artificial intelligence or large language model subprocessor. If AI-assisted features are introduced, this list will be updated. MYCURE does not use identifiable patient data to train artificial intelligence or machine learning models unless expressly agreed in writing.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Underlying databases, caches, and other core components are operated within MYCURE&rsquo;s own hosted environment rather than provided by separate data subprocessors. Subprocessors and processing regions may vary depending on the Customer&rsquo;s deployment model, enabled modules, region, and applicable written agreement.
                    </p>
                  </motion.section>

                  {/* Section 4 */}
                  <motion.section
                    id="customer-integrations"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">4. Customer-Enabled Third-Party Integrations</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Some third-party services are not MYCURE subprocessors because they are enabled, selected, or authorized by the Customer.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">Examples may include:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>laboratory systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>imaging or radiology systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>pharmacy systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>HMO or payor systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>accounting or payment systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>messaging platforms;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient communication tools;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>third-party reporting tools;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>government or regulatory portals;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>APIs or customer-managed integrations; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other external systems selected or authorized by the Customer.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customer-enabled integrations may be governed by the third party&rsquo;s own terms, privacy policy, security practices, and data processing arrangements.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customers are responsible for determining whether third-party integrations are appropriate and lawful for their use case.
                    </p>
                  </motion.section>

                  {/* Section 5 */}
                  <motion.section
                    id="deployment"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">5. Deployment-Specific Subprocessors</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The subprocessors used for a Customer may vary depending on deployment model.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      For MYCURE-hosted cloud services, MYCURE may use hosting, infrastructure, monitoring, communications, support, and security subprocessors as needed to provide the Services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      For private cloud, client-hosted, or customer-managed deployments, some infrastructure, hosting, backup, security, or support responsibilities may belong to the Customer or to Customer-selected vendors.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Deployment-specific responsibilities should be confirmed in the applicable Order Form, Statement of Work, Security Addendum, Service Level Agreement, or other written agreement.
                    </p>
                  </motion.section>

                  {/* Section 6 */}
                  <motion.section
                    id="safeguards"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">6. Subprocessor Safeguards</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE takes reasonable steps designed to ensure that subprocessors processing personal data on our behalf are subject to appropriate confidentiality, security, and data protection obligations.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">Depending on the nature of the service, these safeguards may include:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>written contractual obligations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>confidentiality commitments;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>restrictions on use of personal data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access control obligations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>incident notification obligations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>data protection terms;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>limitations on onward transfer;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>return or deletion obligations; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other safeguards appropriate to the service.</span></li>
                    </ul>
                  </motion.section>

                  {/* Section 7 */}
                  <motion.section
                    id="updates"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">7. Updates to This List</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE may update this Subprocessor List from time to time as our Services, vendors, infrastructure, and business operations evolve.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Where required by applicable agreement, MYCURE will provide notice of material changes to subprocessors in accordance with the relevant Data Processing Addendum, Business Associate Agreement, Order Form, or other written agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Continued use of the Services after an update to this Subprocessor List is governed by the Terms of Agreement and any applicable written agreement.
                    </p>
                  </motion.section>

                  {/* Section 8 */}
                  <motion.section
                    id="questions"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">8. Questions</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      For questions about this Subprocessor List, please contact:
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE / TOPSI Inc.<br />
                      Email:{" "}
                      <a href="mailto:helpdesk@mycure.md" className="text-primary hover:underline">helpdesk@mycure.md</a>
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      For privacy-related matters, please contact:
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Data Protection Officer<br />
                      Email:{" "}
                      <a href="mailto:dpo@mycure.md" className="text-primary hover:underline">dpo@mycure.md</a>
                    </p>
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
