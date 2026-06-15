"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DocumentHeader } from "@/components/sections/shared"

export default function PrivacyPolicyPage() {
  const [mobileTocOpen, setMobileTocOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "scope", title: "1. Scope of This Privacy Policy" },
    { id: "our-role", title: "2. Our Role in Processing Data" },
    { id: "information-we-collect", title: "3. Information We Collect" },
    { id: "how-we-collect", title: "4. How We Collect Information" },
    { id: "how-we-use", title: "5. How We Use Information" },
    { id: "legal-bases", title: "6. Legal Bases for Processing" },
    { id: "how-we-share", title: "7. How We Share Information" },
    { id: "ai-features", title: "8. AI-Assisted Features" },
    { id: "anonymized-data", title: "9. Anonymized and Aggregated Data" },
    { id: "data-retention", title: "10. Data Retention" },
    { id: "security", title: "11. Security" },
    { id: "support-access", title: "12. Support Access" },
    { id: "breach-notification", title: "13. Data Breach and Security Incident Notification" },
    { id: "international-transfers", title: "14. International Data Transfers" },
    { id: "children", title: "15. Children and Minor Patients" },
    { id: "privacy-rights", title: "16. Your Privacy Rights" },
    { id: "marketing", title: "17. Marketing Communications" },
    { id: "cookies", title: "18. Cookies and Website Choices" },
    { id: "third-party", title: "19. Third-Party Links and Services" },
    { id: "changes", title: "20. Changes to This Privacy Policy" },
    { id: "limitations", title: "21. Limitations" },
    { id: "contact", title: "22. Contact Information" },
  ]

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("contact")
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
                Privacy Policy
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                Your privacy is important to us. This Privacy Policy explains how MYCURE collects, uses, discloses, protects, and retains personal data when you use our Services.
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
                      This Privacy Policy explains how MYCURE collects, uses, discloses, protects, and retains personal data when you use our websites, clinic management platform, patient-facing features, applications, integrations, support services, and related services (collectively, the &ldquo;Services&rdquo;).
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      This Privacy Policy should be read together with our{" "}
                      <Link href="/terms-and-conditions" className="text-primary hover:underline">Terms of Agreement</Link>{" "}
                      and any applicable written agreement, Data Processing Addendum, Business Associate Agreement, Order Form, or other addendum.
                    </p>
                  </motion.div>

                  {/* Section 1 */}
                  <motion.section
                    id="scope"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">1. Scope of This Privacy Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      This Privacy Policy applies to personal data processed through MYCURE&rsquo;s Services, including information relating to Customers, Authorized Users, Patient Users, website visitors, and other individuals who interact with us.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">For purposes of this Privacy Policy:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Customer</strong> means the clinic, healthcare organization, company, practice, or other entity that subscribes to or uses the Services.</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Authorized User</strong> means a doctor, nurse, staff member, administrator, billing user, or other person authorized by a Customer to use the Services.</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Patient User</strong> means a patient, parent, guardian, or legally authorized representative using patient-facing features where enabled.</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Customer Data</strong> means data submitted to, uploaded to, stored in, generated through, or processed by the Services on behalf of a Customer, including patient and clinical data.</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Personal Data</strong> means information that identifies or can reasonably be linked to an individual.</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Patient Data</strong> means personal data relating to a patient, including health, clinical, billing, appointment, communication, or care-related information.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      This Privacy Policy does not replace a Customer&rsquo;s own privacy notices, consent forms, patient intake forms, medical record policies, or legal obligations. Customers are responsible for their own privacy and healthcare compliance obligations.
                    </p>
                  </motion.section>

                  {/* Section 2 */}
                  <motion.section
                    id="our-role"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">2. Our Role in Processing Data</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE processes different types of personal data in different roles.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      For patient and clinical data entered, uploaded, or processed by or on behalf of a Customer, the Customer is generally the personal information controller, data controller, healthcare provider, covered entity, legal custodian of the medical record, or equivalent responsible party under applicable law.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE generally acts as a personal information processor, data processor, service provider, business associate, or equivalent service provider role for such data, depending on the applicable legal framework and only to the extent such framework applies.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      For information relating to MYCURE&rsquo;s own website visitors, billing contacts, sales leads, administrative contacts, support communications, and business operations, MYCURE may act as the controller or personal information controller.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      If you are a patient and have questions about your medical record, treatment, billing, consent, or clinical information, you should first contact your healthcare provider or clinic. Where appropriate, we may direct or forward your request to the relevant Customer.
                    </p>
                  </motion.section>

                  {/* Section 3 */}
                  <motion.section
                    id="information-we-collect"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">3. Information We Collect</h2>
                    <p className="text-muted-foreground leading-relaxed">We may collect the following categories of information.</p>

                    <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">3.1 Customer and Account Information</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">We may collect information about Customers and Authorized Users, such as:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>name;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>work email address;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>phone number;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>clinic, company, or organization name;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>job title, role, or department;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>account login information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>user permissions, preferences, and settings;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>billing contact information; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>communications with MYCURE.</span></li>
                    </ul>

                    <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">3.2 Patient and Clinical Information</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">When Customers use the Services to manage patient care or clinic operations, the Services may process Patient Data, such as:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient name, contact details, date of birth, sex, address, and identifiers;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>appointment records;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>medical history;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>clinical notes;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>diagnoses, assessments, and treatment plans;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>prescriptions and medication information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>laboratory, imaging, dental, pharmacy, or other clinical records;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>medical certificates, forms, and documents;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>billing, claims, or payment-related information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient communications;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>consent, authorization, or representative information; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other information entered by the Customer, Authorized Users, Patient Users, or authorized third-party integrations.</span></li>
                    </ul>

                    <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">3.3 Patient-Facing Feature Information</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">Where patient-facing features are enabled, we may process information provided by or about Patient Users, such as:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>account registration information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>appointment requests;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient forms;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>uploaded files or documents;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>messages or communications with the clinic;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>payment or billing-related information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access logs and portal activity;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>parent, guardian, caregiver, or representative information; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other information submitted through patient-facing tools.</span></li>
                    </ul>

                    <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">3.4 Payment and Billing Information</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">We may collect billing-related information, such as:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>billing name and contact details;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>subscription plan;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>invoices;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>payment status;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>transaction records; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>tax or business registration information where applicable.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Payment card or payment method details may be processed by third-party payment processors. We do not intend to store full payment card numbers unless expressly stated and supported by appropriate safeguards.
                    </p>

                    <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">3.5 Technical, Device, and Usage Information</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">We may collect technical and usage information, such as:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>IP address;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>device type;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>browser type;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>operating system;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>log data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>session activity;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access times;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>pages or features used;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>error reports;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>performance data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security logs;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>approximate location derived from IP address; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other diagnostic or analytics information.</span></li>
                    </ul>

                    <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">3.6 Cookies and Similar Technologies</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our websites and Services may use cookies, local storage, analytics tools, and similar technologies to operate the Services, remember preferences, improve performance, understand usage, and protect security.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      We do not use identifiable patient health data for third-party advertising.
                    </p>

                    <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">3.7 Support and Communications</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">If you contact us for support, sales, onboarding, implementation, training, or other inquiries, we may collect:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>your name and contact details;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>organization information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>support request details;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>screenshots, files, or logs you provide;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>communications with our team; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>information necessary to investigate or resolve the request.</span></li>
                    </ul>
                  </motion.section>

                  {/* Section 4 */}
                  <motion.section
                    id="how-we-collect"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">4. How We Collect Information</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">We may collect information:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>directly from you;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>from Customers and Authorized Users;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>from Patient Users, parents, guardians, or authorized representatives;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>through use of the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>from devices, browsers, and systems used to access the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>from third-party integrations authorized by the Customer;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>from payment processors or service providers;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>from public or business sources where permitted; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>from communications with our sales, support, implementation, or operations teams.</span></li>
                    </ul>
                  </motion.section>

                  {/* Section 5 */}
                  <motion.section
                    id="how-we-use"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">5. How We Use Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We use personal data to provide, operate, maintain, secure, and improve the Services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">Depending on the context, we may use information to:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>create and manage accounts;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>provide clinic management and patient-facing features;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>support scheduling, documentation, billing, reporting, and other workflows;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>process payments and manage subscriptions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>provide onboarding, implementation, training, and support;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>troubleshoot errors and technical issues;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>monitor performance and availability;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>protect against unauthorized access, fraud, misuse, abuse, or security threats;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>communicate with Customers, Authorized Users, and Patient Users;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>send service notices, updates, and administrative messages;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>respond to inquiries and requests;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>comply with legal, regulatory, contractual, and audit obligations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>enforce our Terms of Agreement and other agreements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>improve and develop the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>create anonymized or aggregated data as described in this Privacy Policy; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>perform other purposes authorized by the Customer or permitted by applicable law.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      For Patient Data processed on behalf of a Customer, MYCURE uses such data to provide the Services according to the Customer&rsquo;s instructions, applicable agreements, and applicable law.
                    </p>
                  </motion.section>

                  {/* Section 6 */}
                  <motion.section
                    id="legal-bases"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">6. Legal Bases for Processing</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Where a legal basis is required, we process personal data based on one or more of the following grounds, depending on the context:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>performance of a contract;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>steps taken before entering into a contract;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>compliance with legal obligations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>legitimate business interests, such as operating, securing, supporting, and improving the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>consent, where required;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>protection of vital interests, where applicable;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>performance of a task carried out in the public interest, where applicable; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other lawful bases available under applicable law.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      For Patient Data processed through a Customer&rsquo;s use of the Services, the Customer is generally responsible for determining the lawful basis for processing and for obtaining any required consents, notices, or authorizations.
                    </p>
                  </motion.section>

                  {/* Section 7 */}
                  <motion.section
                    id="how-we-share"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">7. How We Share Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We do not sell personal data. We do not sell patient health data. We do not use identifiable patient health data for third-party advertising.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">We may disclose personal data in the following situations.</p>

                    <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">7.1 With Customers and Authorized Users</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Information may be made available to the Customer and its Authorized Users according to account settings, user permissions, clinical workflows, and Customer configuration.
                    </p>

                    <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">7.2 With Patient Users and Authorized Representatives</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Where patient-facing features are enabled, information may be made available to Patient Users, parents, guardians, or authorized representatives according to Customer settings, applicable law, and the Customer&rsquo;s policies.
                    </p>

                    <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">7.3 With Service Providers and Subprocessors</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We may share information with vendors, service providers, and subprocessors who help us provide, secure, operate, support, and improve the Services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      These may include providers of hosting, infrastructure, storage, communications, SMS, email, payments, analytics, monitoring, security, support, implementation, and other operational services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      We require service providers to protect personal data and use it only for authorized purposes. A current list is available in our{" "}
                      <Link href="/subprocessors" className="text-primary hover:underline">Subprocessor List</Link>.
                    </p>

                    <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">7.4 With Third-Party Integrations</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Customers may enable integrations with third-party systems, such as laboratories, imaging centers, pharmacies, HMOs, payment providers, messaging tools, or other services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      When a Customer enables or authorizes an integration, personal data may be shared with or received from that third party as needed for the integration.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Third-party integrations may be subject to their own terms, privacy policies, and data practices.
                    </p>

                    <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">7.5 For Legal, Safety, and Compliance Reasons</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">We may disclose information where we believe disclosure is necessary to:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>comply with law, regulation, court order, subpoena, or legal process;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>respond to lawful requests from government, regulatory, or law enforcement authorities;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>protect the rights, privacy, safety, or property of MYCURE, Customers, users, patients, or others;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>investigate fraud, abuse, security incidents, or technical issues;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>enforce our Terms of Agreement or other agreements; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>defend against legal claims.</span></li>
                    </ul>

                    <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">7.6 Business Transfers</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      If MYCURE is involved in a merger, acquisition, financing, restructuring, sale of assets, or similar transaction, personal data may be disclosed or transferred as part of that transaction, subject to appropriate confidentiality and data protection safeguards.
                    </p>
                  </motion.section>

                  {/* Section 8 */}
                  <motion.section
                    id="ai-features"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">8. AI-Assisted Features</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE may introduce artificial intelligence, machine learning, automation, or assistive features from time to time.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      AI-assisted features, where enabled, are intended to support administrative, operational, documentation, communication, analytics, or workflow tasks. They are not a substitute for professional medical judgment.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Unless expressly agreed in writing, MYCURE does not use identifiable patient data or identifiable Customer Data to train artificial intelligence or machine learning models.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Users are responsible for reviewing and verifying AI-assisted outputs before relying on them or including them in patient records, communications, reports, claims, prescriptions, orders, certificates, or other official documents.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Additional terms may apply to specific AI-assisted features.
                    </p>
                  </motion.section>

                  {/* Section 9 */}
                  <motion.section
                    id="anonymized-data"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">9. Anonymized and Aggregated Data</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We may create and use anonymized, aggregated, or statistical information derived from use of the Services for purposes such as:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>operating and improving the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>product development;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>analytics and reporting;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>performance monitoring;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security and fraud prevention;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>benchmarking;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>research and development; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>developing or improving features, including automation or AI-assisted features where appropriate.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Anonymized and aggregated data must not identify, and must not reasonably be capable of being used to identify, any individual patient, user, or Customer.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      We do not attempt to re-identify anonymized data, and we require the same from third parties with whom we share such data.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      We do not sell anonymized and aggregated data.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Where available, Customers may request to opt out of having data associated with their account contribute to optional analytics, benchmarking, or machine-learning improvement activities that are not necessary to provide the Services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Opting out does not affect processing necessary to provide, secure, support, maintain, or improve the reliability of the Services.
                    </p>
                  </motion.section>

                  {/* Section 10 */}
                  <motion.section
                    id="data-retention"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">10. Data Retention</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We retain personal data only for as long as reasonably necessary for the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law, contract, audit requirements, backup practices, dispute resolution, or legitimate business needs.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Retention periods may vary depending on the type of data and context.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      For Customer Data, including Patient Data, retention may be governed by the Customer&rsquo;s subscription, configuration, written agreement, legal obligations, and medical recordkeeping requirements.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customers are responsible for determining appropriate retention periods for medical records and other regulated records under laws applicable to their organization and practice.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Following termination or expiration of a paid subscription, Customer Data will generally be made available for export for thirty (30) days, unless a different period is stated in an applicable agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      After the export period, we may delete, archive, anonymize, or retain Customer Data in accordance with our agreements, backup practices, legal obligations, and legitimate business needs.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Backup copies may remain for a limited period before being overwritten or deleted according to our backup cycles.
                    </p>
                  </motion.section>

                  {/* Section 11 */}
                  <motion.section
                    id="security"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">11. Security</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We use reasonable administrative, technical, physical, and organizational safeguards designed to protect personal data against unauthorized access, loss, misuse, alteration, or disclosure.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Safeguards may include access controls, authentication, encryption, logging, monitoring, backups, security review, and other measures appropriate to the Services and deployment model.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      No system, network, software, method of transmission, or method of storage is completely secure. We cannot guarantee absolute security.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customers are responsible for managing their own users, permissions, devices, networks, passwords, authentication settings, and internal security practices.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customers should notify us promptly if they suspect unauthorized access, account compromise, or a security incident involving the Services. For more information, see our{" "}
                      <Link href="/security-overview" className="text-primary hover:underline">Security Overview</Link>.
                    </p>
                  </motion.section>

                  {/* Section 12 */}
                  <motion.section
                    id="support-access"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">12. Support Access</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE personnel may access Customer accounts or Customer Data only where reasonably necessary to provide, maintain, secure, troubleshoot, improve, or support the Services; investigate suspected abuse, security issues, or technical problems; comply with law; or perform obligations under an applicable agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      We use reasonable safeguards designed to limit support access to authorized personnel and appropriate purposes.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customers acknowledge that certain support, maintenance, security, and troubleshooting activities may require limited access to Customer Data.
                    </p>
                  </motion.section>

                  {/* Section 13 */}
                  <motion.section
                    id="breach-notification"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">13. Data Breach and Security Incident Notification</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If we become aware of a security incident involving personal data that requires notification under applicable law or applicable agreement, we will notify affected Customers or individuals as required by law and applicable agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      For Patient Data processed on behalf of a Customer, the Customer may be responsible for determining whether and how to notify patients, regulators, payors, employers, partners, or other third parties, unless applicable law requires MYCURE to notify directly.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      We will provide reasonable cooperation and information available to us to support assessment and response, subject to security, confidentiality, legal, and operational limitations.
                    </p>
                  </motion.section>

                  {/* Section 14 */}
                  <motion.section
                    id="international-transfers"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">14. International Data Transfers</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE primarily serves healthcare organizations in the Philippines, but the Services may be accessed, supported, hosted, or processed in other locations depending on the Customer&rsquo;s deployment, configuration, service providers, support needs, and applicable agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Where personal data is transferred across borders, we use reasonable safeguards designed to protect personal data in accordance with applicable law.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Where specific transfer mechanisms, contractual clauses, local hosting arrangements, or additional data protection terms are required, they must be addressed in an applicable Data Processing Addendum, Order Form, Business Associate Agreement, or other written agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE does not represent that the Services are approved, certified, or compliant for use in every jurisdiction unless expressly stated in a signed written agreement.
                    </p>
                  </motion.section>

                  {/* Section 15 */}
                  <motion.section
                    id="children"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">15. Children and Minor Patients</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE does not knowingly collect personal data directly from children through patient-facing features except where such use is enabled by a Customer and occurs with the involvement, consent, or authorization of a parent, guardian, healthcare provider, or legally authorized representative where required by law.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Where a minor&rsquo;s Patient Data is processed in the Services, it is generally processed on behalf of the treating clinic, healthcare provider, or Customer.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customers are responsible for determining who may access a minor patient&rsquo;s information and for obtaining and documenting any consent, authorization, or legal basis required for such access.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE may restrict, suspend, or require additional verification for minor-related accounts or access where necessary to support legal, safety, privacy, or security requirements.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      We do not sell minors&rsquo; personal data or use identifiable minor patient health data for third-party advertising.
                    </p>
                  </motion.section>

                  {/* Section 16 */}
                  <motion.section
                    id="privacy-rights"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">16. Your Privacy Rights</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Depending on where you are located and the context of processing, you may have rights over your personal data, such as the right to:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access your personal data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>request correction of inaccurate or incomplete data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>request deletion of personal data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>object to certain processing;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>restrict certain processing;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>withdraw consent where processing is based on consent;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>request data portability where applicable;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>opt out of certain communications or optional uses; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>lodge a complaint with a relevant authority where applicable.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      These rights may be subject to legal limits, verification requirements, healthcare recordkeeping obligations, contractual obligations, security requirements, and exceptions under applicable law.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      If your request relates to Patient Data controlled by a clinic or healthcare provider, we may direct you to that Customer or forward your request to them. The Customer is generally responsible for responding to requests relating to medical records, care, treatment, billing, and clinical information.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      To exercise rights relating to MYCURE-controlled information, contact us using the details in the Contact Information section below.
                    </p>
                  </motion.section>

                  {/* Section 17 */}
                  <motion.section
                    id="marketing"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">17. Marketing Communications</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may send service-related messages, administrative notices, product updates, billing notices, and security alerts.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Where permitted by law, we may also send marketing or promotional communications. You may opt out of marketing communications by following the unsubscribe instructions in the message or contacting us.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Even if you opt out of marketing communications, we may still send non-marketing messages relating to your account, subscription, security, support, transactions, or use of the Services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      We do not use identifiable patient health data for third-party advertising.
                    </p>
                  </motion.section>

                  {/* Section 18 */}
                  <motion.section
                    id="cookies"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">18. Cookies and Website Choices</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Our websites may use cookies and similar technologies for functionality, analytics, security, performance, and user experience.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      You may be able to manage cookies through your browser settings or tools we provide. Blocking cookies may affect website or Service functionality.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Where required by applicable law, we will provide additional choices or notices regarding cookies and similar technologies.
                    </p>
                  </motion.section>

                  {/* Section 19 */}
                  <motion.section
                    id="third-party"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">19. Third-Party Links and Services</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The Services may contain links to or integrations with third-party websites, applications, systems, or services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      This Privacy Policy does not apply to third-party services that are not operated by MYCURE.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      We are not responsible for the privacy, security, or data practices of third parties. You should review their privacy policies and terms before using them.
                    </p>
                  </motion.section>

                  {/* Section 20 */}
                  <motion.section
                    id="changes"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">20. Changes to This Privacy Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may update this Privacy Policy from time to time.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      If we make material changes, we will provide reasonable notice, such as by posting the updated policy on our website, sending email notice, or providing in-platform notice.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      The updated Privacy Policy will take effect on the date stated above or as otherwise stated in the notice.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Continued use of the Services after the effective date means the updated Privacy Policy applies to your use of the Services.
                    </p>
                  </motion.section>

                  {/* Section 21 */}
                  <motion.section
                    id="limitations"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">21. Limitations</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      This Privacy Policy explains our privacy practices. It does not create warranties, expand contractual obligations, or limit rights and obligations set out in our Terms of Agreement or applicable written agreements.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      To the maximum extent permitted by law, liability relating to the Services is governed by our Terms of Agreement and applicable written agreements.
                    </p>
                  </motion.section>

                  {/* Section 22 */}
                  <motion.section
                    id="contact"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">22. Contact Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      For questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact:
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE / TOPSI Inc.<br />
                      Email:{" "}
                      <a href="mailto:helpdesk@mycure.md" className="text-primary hover:underline">helpdesk@mycure.md</a>
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      For privacy-related matters or data subject requests, you may contact:
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
