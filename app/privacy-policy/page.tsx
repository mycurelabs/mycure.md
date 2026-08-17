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
    { id: "scope", title: "1. Scope" },
    { id: "our-role-in-processing-personal-data", title: "2. Our Role in Processing Personal Data" },
    { id: "information-we-process", title: "3. Information We Process" },
    { id: "how-we-obtain-information", title: "4. How We Obtain Information" },
    { id: "how-we-process-information", title: "5. How We Process Information" },
    { id: "lawful-bases", title: "6. Lawful Bases" },
    { id: "sharing-and-disclosure", title: "7. Sharing and Disclosure" },
    { id: "artificial-intelligence-and-automated-features", title: "8. Artificial Intelligence and Automated Features" },
    { id: "aggregated-statistical-and-de-identified-information", title: "9. Aggregated, Statistical, and De-Identified Information" },
    { id: "data-retention", title: "10. Data Retention" },
    { id: "security", title: "11. Security" },
    { id: "mycure-personnel-and-support-access", title: "12. MYCURE Personnel and Support Access" },
    { id: "security-incidents-and-personal-data-breaches", title: "13. Security Incidents and Personal Data Breaches" },
    { id: "international-processing", title: "14. International Processing" },
    { id: "children-and-minor-patients", title: "15. Children and Minor Patients" },
    { id: "privacy-rights", title: "16. Privacy Rights" },
    { id: "philippines", title: "17. Philippines" },
    { id: "marketing-and-service-communications", title: "18. Marketing and Service Communications" },
    { id: "cookies-and-website-technologies", title: "19. Cookies, Website, and In-Application Technologies" },
    { id: "third-party-websites-and-services", title: "20. Third-Party Websites and Services" },
    { id: "changes-to-this-privacy-notice", title: "21. Changes to This Privacy Notice" },
    { id: "relationship-to-customer-agreements", title: "22. Relationship to Customer Agreements" },
    { id: "contact", title: "23. Contact" },
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
                Privacy Notice
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                This Privacy Notice explains how <strong>Team OPS Inc. dba MYCURE (“MYCURE,” “we,” “us,” or “our”)</strong> processes personal data in connection with our websites, <strong>MYCURE CMS</strong>, patient-facing features, applications, integrations, support services, and related services.
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
                    <p className="text-muted-foreground leading-relaxed">This Privacy Notice should be read together with our <strong>Terms of Service</strong>, <strong>Security Overview</strong>, <strong>Subprocessor List</strong>, and any applicable Order Form, Data Processing Agreement, Business Associate Agreement, service agreement, or other written agreement.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where a written agreement contains more specific privacy or data-processing terms, that agreement applies to the extent provided in that agreement.</p>
                  </motion.div>

                  <motion.section
                    id="scope"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">1. Scope</h2>
                    <p className="text-muted-foreground leading-relaxed">This Privacy Notice applies to personal data processed in connection with MYCURE, including information relating to:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customers;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Authorized Users;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patients and Patient Users;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer representatives;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>website visitors;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>prospective Customers;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>support contacts; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other individuals who interact with MYCURE.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">For purposes of this Privacy Notice:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Customer</strong> means a clinic, healthcare organization, practice, company, or other entity that subscribes to, deploys, or uses MYCURE CMS or related services.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Authorized User</strong> means a physician, dentist, nurse, healthcare professional, employee, contractor, administrator, or other person authorized by a Customer to access MYCURE CMS.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Customer Data</strong> means information submitted to, stored in, transmitted through, generated through, or otherwise processed through MYCURE CMS for or on behalf of a Customer, including patient and clinical information.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Patient Data</strong> means personal data relating to a patient, including health, clinical, appointment, billing, communication, and care-related information.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Service Administration Data</strong> means personal data that MYCURE processes for its own legitimate business and service-administration purposes, such as account administration, authentication and security, Customer relationship management, billing, contractual administration, support administration, legal compliance, and permitted business communications.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">This Privacy Notice does not replace a Customer's own privacy notice, patient notice, consent form, medical-record policy, or other legal obligation.</p>
                  </motion.section>

                  <motion.section
                    id="our-role-in-processing-personal-data"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">2. Our Role in Processing Personal Data</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE may process different personal data in different legal capacities depending on the information, purpose, Customer relationship, deployment model, and applicable law.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">Customer Data</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">For Patient Data and other Customer Data that a Customer submits to or processes through MYCURE CMS, the Customer generally determines why and how that information is processed.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">In this context, the Customer generally acts as the data controller, personal information controller, healthcare provider, record custodian, or equivalent responsible party under applicable law.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE generally processes that Customer Data on behalf of the Customer as a data processor, personal information processor, service provider, or equivalent processing role.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE processes such Customer Data in accordance with the applicable Customer agreement, Customer instructions, configuration and use of MYCURE CMS, and applicable law.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">Data Controlled by MYCURE</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may separately determine the purposes and means of processing Service Administration Data and other information relating to its own business operations.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">This may include personal data used for:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>account and Customer administration;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>authentication and account security;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>fraud and misuse prevention;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>service administration;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>billing and contractual administration;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>business-contact management;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>support administration;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>legal and regulatory compliance;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security monitoring;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>communications with Customer personnel; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>permitted sales, product, and business communications.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">The same information may be processed in different capacities for different purposes.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">For example, an Authorized User's email address may be processed on behalf of the Customer for access to MYCURE CMS while also being processed by MYCURE for security, account administration, or contractual communications.</p>
                  </motion.section>

                  <motion.section
                    id="information-we-process"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">3. Information We Process</h2>
                    <p className="text-muted-foreground leading-relaxed">Depending on the services used and the applicable relationship, we may process the following categories of information.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">3.1 Customer and Account Information</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">This may include:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>name;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>work email address;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>telephone number;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>organization or clinic name;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>position, role, or department;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>account information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>user roles and permissions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>authentication and account-security information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>preferences and settings;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>billing and contractual information; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>communications with MYCURE.</span></li>
                    </ul>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">3.2 Patient and Clinical Information</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">When Customers use MYCURE CMS for healthcare or clinic operations, Customer Data may include:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient identifiers and demographic information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>contact information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>appointments and visits;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>medical history;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>clinical notes;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>diagnoses and assessments;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>examination findings;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>vital signs;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>allergies;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>medications and prescriptions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>treatment plans and procedures;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>laboratory and diagnostic information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>imaging information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>dental information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>pharmacy information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>medical certificates;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>referrals;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>attachments and clinical documents;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>billing, HMO, insurance, or claims-related information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>occupational-health information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient communications;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>consent or representative information; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other information entered into or generated through MYCURE CMS.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Patient and clinical information may constitute sensitive, special-category, protected, or otherwise regulated personal data under applicable law.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">3.3 Patient-Facing Features</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where patient-facing functionality is enabled, MYCURE CMS may process information such as:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>account-registration information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>appointment requests;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>forms;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>messages;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>uploaded files and documents;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>account and portal activity;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>billing-related information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>representative, parent, guardian, or caregiver information; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other information submitted through the applicable functionality.</span></li>
                    </ul>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">3.4 Billing and Business Information</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may process information such as:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>billing contact details;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>subscription or service information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>invoices;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>payment status;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>transaction records;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>tax or business registration information; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>related commercial records.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where payment services are provided through an external provider, payment information may also be processed by that provider under the applicable arrangement.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">3.5 Technical and Security Information</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">Depending on the service and deployment, MYCURE may process:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>IP addresses;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>browser and device information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>operating-system information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>authentication events;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access and session information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>timestamps;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>application activity;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>error information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>system and security events;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>performance and diagnostic information; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other information reasonably necessary for operation, security, troubleshooting, and service administration.</span></li>
                    </ul>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">3.6 Support Information</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">If you or a Customer contacts MYCURE for support, onboarding, implementation, training, security, or another inquiry, we may process:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>contact information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>organization information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>support-request information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>communications;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>screenshots, attachments, files, or logs supplied to us; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other information reasonably necessary to address the request.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers and users should avoid including Patient Data or other sensitive Customer Data in support communications unless reasonably necessary for the applicable support issue.</p>
                  </motion.section>

                  <motion.section
                    id="how-we-obtain-information"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">4. How We Obtain Information</h2>
                    <p className="text-muted-foreground leading-relaxed">Depending on the context, information may be provided or generated:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>directly by you;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>by a Customer or Authorized User;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>by a patient or authorized representative;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>through use of MYCURE CMS;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>through our websites;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>through devices or systems accessing the services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>through Customer-authorized integrations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>through service providers;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>through business communications; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>through other lawful sources relevant to the applicable relationship.</span></li>
                    </ul>
                  </motion.section>

                  <motion.section
                    id="how-we-process-information"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">5. How We Process Information</h2>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">Customer Data</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where MYCURE processes Customer Data on behalf of a Customer, processing may include activities reasonably necessary to:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>provide and operate MYCURE CMS;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>store and retrieve Customer Data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>provide enabled functionality;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>authenticate users;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>secure the service;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>provide support;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>troubleshoot problems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintain and update the service;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>perform backup and recovery;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>respond to security incidents;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>transmit information through Customer-authorized integrations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>perform Customer instructions; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>comply with obligations imposed by applicable law.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">The Customer remains responsible for determining the purposes and lawful basis for its processing of Customer Data, including Patient Data, and for providing notices or obtaining consent or other authorization where required.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">MYCURE-Controlled Data</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where MYCURE determines the purposes and means of processing, we may process personal data for purposes such as:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>establishing and administering Customer relationships;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>managing accounts;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>authenticating users;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintaining security;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>preventing fraud and misuse;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>managing subscriptions, billing, and contracts;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>responding to inquiries;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>providing Customer support;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>administering our websites and services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>complying with law;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintaining business and accounting records;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>establishing, exercising, or defending legal rights;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>communicating service or security information; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>conducting permitted business and marketing communications.</span></li>
                    </ul>
                  </motion.section>

                  <motion.section
                    id="lawful-bases"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">6. Lawful Bases</h2>
                    <p className="text-muted-foreground leading-relaxed">The lawful basis for processing depends on the applicable jurisdiction and context.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where MYCURE acts as the controller or equivalent responsible party, processing may be based on grounds available under applicable law, which may include:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>performance of a contract;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>steps taken in connection with entering into a contract;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>compliance with legal obligations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>legitimate interests where recognized and applicable;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>consent where required;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>protection of vital interests where applicable; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>another lawful basis available under applicable law.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where MYCURE processes Customer Data on behalf of a Customer, the Customer is generally responsible for establishing the lawful basis for that processing.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Nothing in this Privacy Notice means that consent is required for every processing activity.</p>
                  </motion.section>

                  <motion.section
                    id="sharing-and-disclosure"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">7. Sharing and Disclosure</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE does not sell identifiable Patient Data.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">We may disclose personal data in the circumstances described below.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">7.1 Customers and Authorized Users</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customer Data may be made available to the applicable Customer and its Authorized Users according to permissions, configuration, workflow, and Customer instructions.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">7.2 Patients and Authorized Representatives</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where applicable functionality is enabled, information may be made available to patients or their authorized representatives according to the Customer's configuration, instructions, and applicable law.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">7.3 Subprocessors and Service Providers</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may engage third parties that process Customer Data on our behalf to help provide, operate, secure, maintain, support, or recover MYCURE CMS.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Our current material Subprocessors are identified in our:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Subprocessor List</strong><br /><a href="/subprocessors" className="text-primary hover:underline">https://mycure.md/subprocessors</a></p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Not every vendor used by MYCURE is a Subprocessor of Customer Data.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">7.4 Customer-Selected Third Parties</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers may configure or request connections to external systems or third parties, such as laboratories, imaging centers, pharmacies, insurers, payment services, communications providers, government systems, or other integrations.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where MYCURE transmits Customer Data to a third party at the Customer's instruction, that third party does not become a MYCURE Subprocessor merely because MYCURE CMS communicates with it.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Third-party services may be governed by their own privacy, security, contractual, and data-processing terms.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">7.5 Legal and Protective Disclosures</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may process, preserve, or disclose information where reasonably necessary to:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>comply with applicable law or lawful process;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>respond to a legally binding request;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>protect the security of MYCURE CMS;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>investigate suspected fraud, misuse, or unauthorized access;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>protect the rights or safety of MYCURE, Customers, users, patients, or others; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>establish, exercise, or defend legal claims.</span></li>
                    </ul>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">7.6 Business Transactions</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">If MYCURE undergoes a merger, acquisition, financing, restructuring, reorganization, sale of assets, or similar transaction, personal data may be transferred or disclosed as reasonably necessary for that transaction and subject to applicable confidentiality and data-protection requirements.</p>
                  </motion.section>

                  <motion.section
                    id="artificial-intelligence-and-automated-features"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">8. Artificial Intelligence and Automated Features</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE may introduce AI-assisted, machine-learning, automation, or similar functionality as MYCURE CMS evolves.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">The introduction of such functionality does not by itself authorize an external AI provider to process Customer Data.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where a third-party AI or large-language-model provider will process Customer Data on MYCURE's behalf, MYCURE will address applicable Customer instructions or authorization, Subprocessor requirements, privacy and security review, and other requirements under the applicable agreement and law before or in connection with that processing.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Current material external Subprocessors are identified in our Subprocessor List.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Unless otherwise expressly authorized through an applicable Customer agreement or documented instruction, MYCURE does not authorize identifiable production Customer Data to be used to train general-purpose third-party AI or large-language models.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">AI-assisted functionality is not a substitute for professional medical judgment. Customers and healthcare professionals remain responsible for reviewing information used for clinical, professional, or regulated purposes.</p>
                  </motion.section>

                  <motion.section
                    id="aggregated-statistical-and-de-identified-information"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">9. Aggregated, Statistical, and De-Identified Information</h2>
                    <p className="text-muted-foreground leading-relaxed">Where permitted by applicable law and the applicable Customer agreement or instructions, MYCURE may generate aggregated, statistical, or de-identified information for legitimate purposes such as:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>service operation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>reliability and performance;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>capacity planning;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>product and service analysis; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>development and improvement.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Information treated as de-identified or anonymized for these purposes must not identify an individual where applicable law requires that status.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE does not treat identifiable Patient Data as anonymized merely because direct identifiers have been removed where the information remains reasonably capable of being linked to an individual.</p>
                  </motion.section>

                  <motion.section
                    id="data-retention"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">10. Data Retention</h2>
                    <p className="text-muted-foreground leading-relaxed">Retention depends on the type of information, MYCURE's role in processing it, the applicable Customer agreement, Customer instructions, legal requirements, operational requirements, and applicable law.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">Customer Data</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers are responsible for determining the retention requirements applicable to their medical records and other regulated records.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Export, return, archival, retention, backup, and deletion of Customer Data following expiration or termination of MYCURE CMS are governed by the applicable Customer agreement and Service terms.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Deletion from active systems may not result in immediate deletion of residual information contained in ordinary backup cycles or information that must lawfully be preserved.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">MYCURE-Controlled Data</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE retains Service Administration Data and other information processed for its own purposes for as long as reasonably necessary for the applicable business, contractual, security, legal, accounting, dispute-resolution, or compliance purpose, subject to applicable law.</p>
                  </motion.section>

                  <motion.section
                    id="security"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">11. Security</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE maintains reasonable technical and organizational safeguards appropriate to the nature of the service, information, deployment model, and reasonably foreseeable risks.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">These may include measures concerning:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>authentication;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access control;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>encryption;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>logging;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>monitoring;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>backups;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>personnel access;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>incident response; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other applicable security controls.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">No information system or security control can eliminate all risk, and MYCURE does not represent that unauthorized access, security incidents, vulnerabilities, or service interruptions can never occur.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers remain responsible for matters under their control, including their:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Authorized Users;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>roles and permissions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>passwords and authentication factors;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>email accounts;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>devices;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>networks;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>exported information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>third-party integrations; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other Customer-controlled security matters.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">More information is available in our:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Security Overview</strong><br /><a href="/security-overview" className="text-primary hover:underline">https://mycure.md/security-overview</a></p>
                  </motion.section>

                  <motion.section
                    id="mycure-personnel-and-support-access"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">12. MYCURE Personnel and Support Access</h2>
                    <p className="text-muted-foreground leading-relaxed">Access to production Customer Data by MYCURE personnel is restricted to authorized personnel with an appropriate operational need.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Such access may occur where reasonably necessary for:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>support;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintenance;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>troubleshooting;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>incident investigation or response;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>backup or recovery;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>service administration;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>compliance with applicable law; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other activities necessary to provide the applicable service.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Support access does not make MYCURE the controller of Patient Data that MYCURE processes on behalf of a Customer.</p>
                  </motion.section>

                  <motion.section
                    id="security-incidents-and-personal-data-breaches"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">13. Security Incidents and Personal Data Breaches</h2>
                    <p className="text-muted-foreground leading-relaxed">Where MYCURE processes Customer Data on behalf of a Customer and becomes aware of an applicable Security Incident or Personal Data Breach, MYCURE will provide notice and cooperation as required by the applicable Customer agreement and applicable law.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">The Customer, as controller or equivalent responsible party for its Customer Data, generally remains responsible for determining and carrying out notifications to patients, data subjects, regulators, or other parties where that obligation rests with the Customer.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE remains responsible for any notification or other obligation imposed directly upon MYCURE by applicable law.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where MYCURE acts as the controller of affected personal data, MYCURE will address notification obligations applicable to MYCURE in that capacity.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Security and privacy concerns relating to MYCURE may be reported to:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong><a href="mailto:privacy@mycure.md" className="text-primary hover:underline">privacy@mycure.md</a></strong></p>
                  </motion.section>

                  <motion.section
                    id="international-processing"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">14. International Processing</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE may serve Customers and users in multiple jurisdictions.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Personal data may therefore be processed or accessed in countries other than the country in which the Customer or individual is located, depending on:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>deployment model;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>hosting location;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>enabled services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Subprocessors;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>support arrangements; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>applicable written agreements.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where cross-border processing is subject to specific legal requirements, MYCURE and the applicable Customer will address the required safeguards, contractual mechanisms, instructions, or other measures as applicable to their respective roles.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Current material Subprocessors and applicable processing locations are identified in our:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Subprocessor List</strong><br /><a href="/subprocessors" className="text-primary hover:underline">https://mycure.md/subprocessors</a></p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE does not represent that MYCURE CMS is approved, certified, or legally suitable for every jurisdiction merely because it is technically accessible there.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Jurisdiction-specific requirements may be addressed through an Order Form, Data Processing Agreement, Business Associate Agreement, local terms, deployment arrangement, or other written agreement.</p>
                  </motion.section>

                  <motion.section
                    id="children-and-minor-patients"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">15. Children and Minor Patients</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE CMS may process information relating to children or minor patients where used by healthcare Customers for authorized healthcare or related purposes.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where such Patient Data is processed on behalf of a Customer, the Customer is generally responsible for determining:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>the lawful basis for processing;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>who may access the minor's information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>whether parental, guardian, representative, or other authorization is required; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>applicable healthcare and recordkeeping requirements.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may apply reasonable identity, authorization, access, or security requirements to patient-facing functionality where appropriate.</p>
                  </motion.section>

                  <motion.section
                    id="privacy-rights"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">16. Privacy Rights</h2>
                    <p className="text-muted-foreground leading-relaxed">Privacy rights vary by jurisdiction and depend on MYCURE's role in processing the applicable information.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Subject to applicable law, individuals may have rights relating to matters such as:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>correction;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>deletion or erasure;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>objection;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>restriction;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>portability;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>withdrawal of consent where processing is based on consent; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>complaints to an applicable privacy or data-protection authority.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">These rights may be subject to legal exceptions, verification requirements, medical-record retention requirements, contractual restrictions, or other limitations under applicable law.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">Requests Concerning Customer or Patient Data</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">If a request concerns Patient Data or other Customer Data controlled by a clinic, healthcare organization, employer, insurer, or other Customer, the request should ordinarily be directed to that Customer.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may refer or forward the request to the applicable Customer and may assist the Customer as required by applicable law and the applicable agreement.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">Requests Concerning Data Controlled by MYCURE</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">For information for which MYCURE determines the purposes and means of processing, requests may be submitted to:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong><a href="mailto:privacy@mycure.md" className="text-primary hover:underline">privacy@mycure.md</a></strong></p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may request reasonable information necessary to verify identity, authority, or the scope of a request.</p>
                  </motion.section>

                  <motion.section
                    id="philippines"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">17. Philippines</h2>
                    <p className="text-muted-foreground leading-relaxed">For processing subject to the <strong>Philippine Data Privacy Act of 2012, its Implementing Rules and Regulations, and applicable issuances of the National Privacy Commission</strong>, the legal roles and responsibilities of MYCURE and its Customers are determined according to the applicable processing activity and agreement.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">For Customer Data processed through MYCURE CMS on behalf of a Philippine healthcare Customer, the Customer will generally act as the <strong>Personal Information Controller (PIC)</strong> and MYCURE as the <strong>Personal Information Processor (PIP)</strong>.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may separately act as a PIC for Service Administration Data and other personal data for which MYCURE independently determines the purposes and means of processing.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Philippine Customers may also have a separate Data Processing and Security Agreement or other written agreement governing MYCURE's processing of Customer Data. Where that agreement contains more specific terms, those terms apply according to the agreement's provisions.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Questions or privacy requests concerning processing for which MYCURE acts as PIC may be directed to:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong><a href="mailto:privacy@mycure.md" className="text-primary hover:underline">privacy@mycure.md</a></strong></p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Requests concerning Patient Data controlled by a Customer should ordinarily be directed to the applicable clinic, healthcare organization, or other Customer.</p>
                  </motion.section>

                  <motion.section
                    id="marketing-and-service-communications"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">18. Marketing and Service Communications</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE may send communications necessary or appropriate for:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>account administration;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>authentication;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>billing;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>support;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>service operation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>contractual administration; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>important service updates.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where permitted by applicable law, MYCURE may also send product, business, educational, or marketing communications to appropriate Customer representatives, users, or business contacts.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Recipients may opt out of marketing communications through the mechanism provided in the communication or by contacting MYCURE.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Opting out of marketing communications does not prevent MYCURE from sending necessary account, security, billing, transactional, contractual, or service-related communications.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Identifiable Patient Data is not used for third-party advertising.</p>
                  </motion.section>

                  <motion.section
                    id="cookies-and-website-technologies"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">19. Cookies, Website, and In-Application Technologies</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE websites may use cookies, local storage, and similar technologies for purposes such as:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>website functionality;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>preference management;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>performance; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>analytics.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Available controls may vary according to the website, technology, browser, and applicable jurisdiction.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where applicable law requires additional notice, consent, or choice concerning particular technologies, MYCURE will provide an appropriate mechanism.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE also uses in-application analytics and error-monitoring technologies within MYCURE CMS to understand product usage, maintain and improve reliability, diagnose problems, and develop the service.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">For these purposes, MYCURE processes Authorized User account and usage information—such as user identifiers, name, email address, organization identifiers, activity events, and technical and diagnostic information—as information for which MYCURE determines the purposes and means of processing. This may involve a third-party product-analytics and error-monitoring provider that processes such information on MYCURE's behalf, including in the United States.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">These in-application analytics and error-monitoring technologies are not intended to collect identifiable Patient Data, and MYCURE is implementing measures to exclude Patient Data and other sensitive Customer Data from diagnostic and error reports.</p>
                  </motion.section>

                  <motion.section
                    id="third-party-websites-and-services"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">20. Third-Party Websites and Services</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE websites or services may contain links to, or integrations with, services operated by third parties.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">This Privacy Notice does not govern independent third-party services that are not operated by MYCURE.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Third parties may maintain their own terms, privacy notices, security practices, and processing arrangements.</p>
                  </motion.section>

                  <motion.section
                    id="changes-to-this-privacy-notice"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">21. Changes to This Privacy Notice</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE may update this Privacy Notice from time to time to reflect changes in:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>our services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>processing activities;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>technology;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security practices;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>legal or regulatory requirements; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>business operations.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">The current version will be posted at:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><a href="/privacy-policy" className="text-primary hover:underline">https://mycure.md/privacy-policy</a></p>
                    <p className="text-muted-foreground leading-relaxed mt-4">The effective date shown above indicates when the current version took effect.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where applicable law or an applicable agreement requires additional notice or another mechanism for a material change, MYCURE will follow that requirement.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">An update to this Privacy Notice does not by itself override a more specific obligation contained in an applicable written Customer agreement.</p>
                  </motion.section>

                  <motion.section
                    id="relationship-to-customer-agreements"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">22. Relationship to Customer Agreements</h2>
                    <p className="text-muted-foreground leading-relaxed">This Privacy Notice describes MYCURE's general privacy practices.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">It does not:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>replace a Customer's own privacy obligations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>expand the purposes for which MYCURE may process Customer Data beyond applicable Customer instructions and agreements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>reduce protections specifically established in an applicable Data Processing Agreement or other written agreement; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>create a representation that MYCURE CMS complies with every law or regulatory framework in every jurisdiction.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Contractual rights, obligations, liability provisions, data-processing instructions, retention requirements, processing locations, and other Customer-specific requirements remain governed by the applicable written agreement and Terms of Service.</p>
                  </motion.section>

                  <motion.section
                    id="contact"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">23. Contact</h2>
                    <p className="text-muted-foreground leading-relaxed">For privacy, data-protection, or security matters concerning MYCURE:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Team OPS Inc. dba MYCURE</strong><br />201 Malayan Plaza<br />ADB Avenue corner Opal Road<br />Ortigas Business Center<br />Pasig City, Philippines 1600</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Privacy &amp; Security Contact:</strong><br /><a href="mailto:privacy@mycure.md" className="text-primary hover:underline">privacy@mycure.md</a></p>
                    <p className="text-muted-foreground leading-relaxed mt-4">If your inquiry concerns a medical record or Patient Data controlled by a Customer, you should ordinarily contact the applicable clinic, healthcare organization, or other Customer directly.</p>
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
