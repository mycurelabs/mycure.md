"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DocumentHeader } from "@/components/sections/shared"

export default function TermsAndConditionsPage() {
  const [mobileTocOpen, setMobileTocOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "who-these-terms-apply-to", title: "1. Who These Terms Apply To" },
    { id: "relationship-to-other-agreements", title: "2. Relationship to Other Agreements" },
    { id: "mycure-cms-and-the-services", title: "3. MYCURE CMS and the Services" },
    { id: "hosting-and-deployment-models", title: "4. Hosting and Deployment Models" },
    { id: "healthcare-use-and-clinical-responsibility", title: "5. Healthcare Use and Clinical Responsibility" },
    { id: "no-emergency-use", title: "6. No Emergency Use" },
    { id: "regulatory-scope-and-jurisdiction-specific-use", title: "7. Regulatory Scope and Jurisdiction-Specific Use" },
    { id: "eligibility-and-authority", title: "8. Eligibility and Authority" },
    { id: "customer-accounts-and-authorized-users", title: "9. Customer Accounts and Authorized Users" },
    { id: "multi-factor-authentication-and-account-security", title: "10. Multi-Factor Authentication and Account Security" },
    { id: "patient-facing-features", title: "11. Patient-Facing Features" },
    { id: "minor-patients-and-representative-access", title: "12. Minor Patients and Representative Access" },
    { id: "customer-data", title: "13. Customer Data" },
    { id: "data-protection-roles", title: "14. Data Protection Roles" },
    { id: "privacy-and-security-resources", title: "15. Privacy and Security Resources" },
    { id: "hipaa-and-united-states-regulated-use", title: "16. HIPAA and United States Regulated Use" },
    { id: "ai-assisted-features", title: "17. AI-Assisted Features" },
    { id: "aggregated-statistical-and-de-identified-information", title: "18. Aggregated, Statistical, and De-Identified Information" },
    { id: "mycure-personnel-and-support-access", title: "19. MYCURE Personnel and Support Access" },
    { id: "security", title: "20. Security" },
    { id: "security-incidents", title: "21. Security Incidents" },
    { id: "customer-responsibilities", title: "22. Customer Responsibilities" },
    { id: "acceptable-use", title: "23. Acceptable Use" },
    { id: "third-party-services-integrations-and-subprocessors", title: "24. Third-Party Services, Integrations, and Subprocessors" },
    { id: "fees-billing-taxes-and-renewals", title: "25. Fees, Billing, Taxes, and Renewals" },
    { id: "suspension-and-protective-measures", title: "26. Suspension and Protective Measures" },
    { id: "termination", title: "27. Termination" },
    { id: "data-export-return-and-post-termination-processing", title: "28. Data Export, Return, and Post-Termination Processing" },
    { id: "service-changes-and-availability", title: "29. Service Changes and Availability" },
    { id: "intellectual-property", title: "30. Intellectual Property" },
    { id: "feedback", title: "31. Feedback" },
    { id: "customer-content-and-inputs", title: "32. Customer Content and Inputs" },
    { id: "confidentiality", title: "33. Confidentiality" },
    { id: "beta-preview-pilot-and-trial-features", title: "34. Beta, Preview, Pilot, and Trial Features" },
    { id: "disclaimers", title: "35. Disclaimers" },
    { id: "limitation-of-liability", title: "36. Limitation of Liability" },
    { id: "customer-caused-claims-and-indemnification", title: "37. Customer-Caused Claims and Indemnification" },
    { id: "intellectual-property-claims", title: "38. Intellectual Property Claims" },
    { id: "government-and-legal-requests", title: "39. Government and Legal Requests" },
    { id: "force-majeure", title: "40. Force Majeure" },
    { id: "assignment", title: "41. Assignment" },
    { id: "changes-to-these-terms", title: "42. Changes to These Terms" },
    { id: "governing-law-and-dispute-resolution", title: "43. Governing Law and Dispute Resolution" },
    { id: "notices", title: "44. Notices" },
    { id: "entire-agreement", title: "45. Entire Agreement" },
    { id: "severability", title: "46. Severability" },
    { id: "no-waiver", title: "47. No Waiver" },
    { id: "contact-information", title: "48. Contact Information" },
    { id: "acknowledgment", title: "49. Acknowledgment" },
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
                Terms of Service
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                These Terms of Service (“<strong>Terms</strong>”) govern access to and use of <strong>MYCURE CMS</strong>, related websites, applications, patient-facing features, APIs, integrations, support services, and other related services made available by MYCURE (collectively, the “<strong>Services</strong>”).
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Effective Date: August 11, 2026
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">
                Team OPS Inc. dba MYCURE (&ldquo;MYCURE,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
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
                    <p className="text-muted-foreground leading-relaxed">The Services are provided by <strong>Team OPS Inc. dba MYCURE (“MYCURE,” “we,” “us,” or “our”)</strong>.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Please read these Terms carefully.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">By accessing or using the Services, creating an account, signing or accepting an applicable Order Form, or otherwise agreeing to use the Services, you agree to these Terms.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">If you use the Services on behalf of a clinic, healthcare organization, company, or other legal entity, you represent that you have authority to bind that organization to these Terms.</p>
                  </motion.div>

                  <motion.section
                    id="who-these-terms-apply-to"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">1. Who These Terms Apply To</h2>
                    <p className="text-muted-foreground leading-relaxed">These Terms may apply to:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Customers</strong> — clinics, healthcare organizations, companies, practices, groups, and other entities that subscribe to, license, deploy, or use the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Authorized Users</strong> — physicians, dentists, nurses, healthcare professionals, employees, contractors, administrators, billing personnel, and other individuals authorized by a Customer to use the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Patient Users</strong> — patients, parents, guardians, caregivers, or authorized representatives who access patient-facing functionality where enabled; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span><strong>Other Users</strong> — integration partners or other persons authorized to access applicable Services.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">The Customer is responsible for determining who may access its Services and for managing its Authorized Users.</p>
                  </motion.section>

                  <motion.section
                    id="relationship-to-other-agreements"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">2. Relationship to Other Agreements</h2>
                    <p className="text-muted-foreground leading-relaxed">These Terms establish MYCURE's general terms for the Services.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">A Customer may also have one or more separate agreements with MYCURE, such as:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>an Order Form;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>proposal or subscription agreement;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Service Agreement;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Statement of Work;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Data Processing and Security Agreement;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Data Processing Agreement or Addendum;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Business Associate Agreement;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Security Agreement or Addendum;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Service Level Agreement; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other written agreement.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where a separately executed written agreement contains provisions that conflict with these Terms, the separately executed agreement controls for the Customer and subject matter addressed by that agreement.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Specific commercial terms stated in an applicable Order Form, subscription agreement, proposal, or other accepted written agreement control over general commercial provisions in these Terms to the extent of an inconsistency.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Specific data-processing, privacy, confidentiality, security, retention, return, deletion, incident-notification, audit, or similar obligations stated in an applicable Data Processing Agreement, Data Processing and Security Agreement, Business Associate Agreement, or Security Agreement control for the subject matter addressed by that agreement.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">These Terms may be supplemented by applicable MYCURE policies and notices made available through the Services or official MYCURE website as provided in these Terms and the applicable Customer agreement.</p>
                  </motion.section>

                  <motion.section
                    id="mycure-cms-and-the-services"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">3. MYCURE CMS and the Services</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE provides clinic-management software and related services.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Depending on the Customer's subscription, deployment, configuration, location, and enabled modules, MYCURE CMS may provide functionality concerning:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>electronic medical records and clinical documentation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient registration and management;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>appointment scheduling;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>queue management;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>billing and invoicing;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>payment workflows;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>pharmacy;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>laboratory;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>diagnostic imaging;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>dental workflows;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>inventory and materials management;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>occupational and corporate health;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient communications;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient-facing applications or portals;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>forms and documentation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>reports, dashboards, and analytics;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>APIs and integrations; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other healthcare, administrative, and operational workflows.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Not every feature is available to every Customer.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Feature availability may vary according to:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>subscription or license;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer configuration;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>deployment model;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>jurisdiction;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>technical requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>third-party dependencies; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>applicable written agreement.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may develop, improve, modify, replace, or discontinue functionality over time, subject to these Terms and any applicable written agreement.</p>
                  </motion.section>

                  <motion.section
                    id="hosting-and-deployment-models"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">4. Hosting and Deployment Models</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE CMS may be provided through different deployment models.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">4.1 MYCURE-Hosted Services</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where MYCURE provides the hosting environment, MYCURE is responsible for the systems, hosting services, and infrastructure within MYCURE's agreed scope of control, including applicable authorized Subprocessors.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">The applicable Order Form, Service Agreement, Data Processing Agreement, Security Agreement, or other written agreement may establish more specific responsibilities.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">4.2 Client-Hosted or Customer-Managed Services</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE CMS may also be deployed within cloud infrastructure, servers, networks, databases, storage, accounts, or other environments selected, provided, administered, or controlled by the Customer.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Unless expressly agreed otherwise in writing, the Customer is responsible for Customer-controlled infrastructure, including as applicable:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>cloud accounts and subscriptions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>servers and compute resources;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>operating systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>container or orchestration infrastructure;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>databases and storage;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>networks;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>firewalls and network configuration;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>infrastructure identity and access management;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>infrastructure credentials;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>encryption and key-management systems controlled by the Customer;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>infrastructure logging and monitoring;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>infrastructure backups and recovery;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patching;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>vulnerability management;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>capacity;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>availability;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>disaster recovery; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other infrastructure components controlled by the Customer.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may provide deployment support, application support, troubleshooting, maintenance assistance, or technical guidance relating to MYCURE CMS.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Unless separately agreed in writing, such assistance does not make MYCURE the administrator or operator of the Customer-controlled environment and does not transfer responsibility for that infrastructure to MYCURE.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Additional infrastructure, migration, implementation, remediation, or technical services outside the applicable Service scope may be subject to a separate Statement of Work or professional-service fees.</p>
                  </motion.section>

                  <motion.section
                    id="healthcare-use-and-clinical-responsibility"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">5. Healthcare Use and Clinical Responsibility</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE is a software and technology provider.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE does not become a healthcare provider, clinic, hospital, physician, dentist, nurse, pharmacist, diagnostic center, insurer, or emergency medical provider merely by providing MYCURE CMS.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">The Services are intended to support healthcare workflows, documentation, administration, communication, and related operations.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">They do not replace professional medical judgment.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers and their healthcare professionals remain responsible for:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>diagnoses;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>assessments;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>treatment decisions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>prescriptions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>medication orders;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>referrals;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>clinical documentation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>interpretation of diagnostic information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient care;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>professional judgment;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>clinical supervision;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient communications;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>regulatory reporting;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>billing and claims decisions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>verification of information before reliance; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>compliance with applicable professional standards.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE does not guarantee any particular clinical, treatment, diagnostic, reimbursement, regulatory, operational, or business outcome.</p>
                  </motion.section>

                  <motion.section
                    id="no-emergency-use"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">6. No Emergency Use</h2>
                    <p className="text-muted-foreground leading-relaxed">The Services are not an emergency medical service.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Unless expressly agreed otherwise in writing for specific functionality, MYCURE CMS should not be used as the sole means of:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>emergency dispatch;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>handling life-threatening conditions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>urgent clinical escalation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>communicating time-critical emergency information; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>performing functions where temporary system unavailability could itself create an unacceptable risk of harm.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers are responsible for maintaining appropriate emergency procedures, escalation protocols, downtime procedures, backup workflows, and alternative communication methods.</p>
                  </motion.section>

                  <motion.section
                    id="regulatory-scope-and-jurisdiction-specific-use"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">7. Regulatory Scope and Jurisdiction-Specific Use</h2>
                    <p className="text-muted-foreground leading-relaxed">Healthcare, privacy, data-protection, consumer-protection, professional, medical-record, telehealth, security, and other requirements vary by jurisdiction and use case.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Unless expressly stated in an applicable written agreement, MYCURE does not represent that MYCURE CMS is:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>certified under every regulatory framework;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>approved for every healthcare use;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>compliant with every law applicable to every Customer;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>suitable for every jurisdiction; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>sufficient by itself to satisfy a Customer's regulatory obligations.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers are responsible for determining whether their use of MYCURE CMS is appropriate and lawful for their:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>jurisdiction;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>healthcare setting;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>personnel;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patients;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>professional obligations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>workflows; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>regulatory requirements.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where a particular regulatory framework requires additional contractual, technical, deployment, or operational arrangements, those arrangements may need to be separately agreed before MYCURE CMS is used for that regulated purpose.</p>
                  </motion.section>

                  <motion.section
                    id="eligibility-and-authority"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">8. Eligibility and Authority</h2>
                    <p className="text-muted-foreground leading-relaxed">To use the Services, you must:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>have legal authority to agree to these Terms;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>if acting for a Customer, have authority to act for that Customer;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>be authorized to access the applicable account or functionality;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>use the Services only for lawful and authorized purposes; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>comply with applicable age, capacity, parental, guardian, or representative requirements.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may refuse, restrict, suspend, or terminate access where MYCURE reasonably believes that a person lacks appropriate authorization or is using the Services unlawfully or contrary to these Terms.</p>
                  </motion.section>

                  <motion.section
                    id="customer-accounts-and-authorized-users"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">9. Customer Accounts and Authorized Users</h2>
                    <p className="text-muted-foreground leading-relaxed">Customers are responsible for administering their Authorized Users.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers shall:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintain accurate account information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>designate appropriate administrators;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>create accounts only for authorized persons;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>assign roles and permissions according to legitimate operational need;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>periodically review users and privileges;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>promptly remove access that is no longer appropriate;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>protect account and administrative credentials;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>comply with applicable authentication requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>notify MYCURE promptly of known or suspected unauthorized access; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>require Authorized Users to comply with these Terms and applicable Customer policies.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customer is responsible for activity performed through Customer-controlled accounts and credentials to the extent such activity results from matters within Customer's control, except to the extent caused or materially contributed to by MYCURE's breach of its own applicable obligations.</p>
                  </motion.section>

                  <motion.section
                    id="multi-factor-authentication-and-account-security"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">10. Multi-Factor Authentication and Account Security</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE CMS may support and require multi-factor authentication (“<strong>MFA</strong>”) or other reasonable authentication controls.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may make MFA or another security measure a condition of access to some or all Services or functionality.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where such a requirement applies, Customers and affected users must complete and maintain the required security control.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers and users must not:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>share credentials with unauthorized persons;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>disclose authentication factors;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>circumvent required authentication;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>intentionally bypass security controls; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>permit unauthorized third parties to use their accounts.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may reset credentials, invalidate sessions, restrict accounts, require additional verification, or suspend access where reasonably necessary to address suspected credential compromise or another material security risk.</p>
                  </motion.section>

                  <motion.section
                    id="patient-facing-features"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">11. Patient-Facing Features</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE CMS may include patient-facing functionality such as:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient portals;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>mobile applications;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>appointment tools;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>forms;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>messaging;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>results access;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>payment functionality; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other patient services.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Such functionality may be enabled, configured, limited, or disabled according to the applicable Customer's subscription, configuration, deployment, and legal requirements.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">The Customer remains responsible for determining:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>whether patient-facing functionality is appropriate;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>which patients or representatives may use it;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>what information may be made available;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>how identity and authorization should be verified;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>whether consent or another authorization is required;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>whether parent, guardian, caregiver, or representative access is permitted; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>how patient communications are handled.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE provides technical functionality but does not assume responsibility for the Customer's healthcare relationship with its patients.</p>
                  </motion.section>

                  <motion.section
                    id="minor-patients-and-representative-access"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">12. Minor Patients and Representative Access</h2>
                    <p className="text-muted-foreground leading-relaxed">Where MYCURE CMS processes information relating to minors, Customers remain responsible for determining applicable legal, clinical, and organizational requirements.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">This includes determining:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>who may access a minor patient's information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>whether parental, guardian, representative, or other authorization is required;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>how such authority should be documented; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>when access should be limited or removed.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Unless expressly agreed otherwise in writing, MYCURE is not responsible for independently determining family relationships, guardianship, custody, legal authority, or entitlement to access a patient's information.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may require additional verification or restrict access where reasonably necessary for privacy, security, legal, or safety reasons.</p>
                  </motion.section>

                  <motion.section
                    id="customer-data"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">13. Customer Data</h2>
                    <p className="text-muted-foreground leading-relaxed">“<strong>Customer Data</strong>” means data, content, records, files, images, documents, messages, and other information submitted to, stored in, transmitted through, generated through, or otherwise processed through MYCURE CMS for or on behalf of a Customer, including patient and clinical data.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">As between MYCURE and the Customer, the Customer retains its rights in Customer Data.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customer authorizes MYCURE to process Customer Data as reasonably necessary to:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>provide, operate, support, maintain, and secure the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>provide functionality requested or enabled by Customer;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>authenticate users;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>store and retrieve Customer Data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>perform backup and recovery where within MYCURE's scope;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>troubleshoot technical issues;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>investigate and respond to security issues;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>provide Customer-authorized integrations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>perform applicable written agreements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>follow lawful Customer instructions; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>comply with obligations imposed by applicable law.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE does not acquire ownership of Customer Data merely because it is processed through the Services.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE does not sell identifiable patient Customer Data.</p>
                  </motion.section>

                  <motion.section
                    id="data-protection-roles"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">14. Data Protection Roles</h2>
                    <p className="text-muted-foreground leading-relaxed">The parties' data-protection roles depend on the applicable information, processing purpose, jurisdiction, and agreement.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">For patient, clinical, and other Customer Data where the Customer determines the purposes and means of processing, the Customer generally acts as the controller, personal information controller, healthcare provider, record custodian, or equivalent responsible party.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE generally processes such Customer Data on the Customer's behalf as a processor, personal information processor, service provider, or equivalent processing role.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may separately act as a controller or equivalent responsible party for personal data for which MYCURE independently determines the purposes and means of processing, such as certain:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>account-administration data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>business-contact data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>authentication and security data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>billing administration;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>contractual administration;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>legal and regulatory records; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>permitted business communications.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">More specific responsibilities may be established in an applicable Data Processing Agreement, Data Processing and Security Agreement, Business Associate Agreement, or other written agreement.</p>
                  </motion.section>

                  <motion.section
                    id="privacy-and-security-resources"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">15. Privacy and Security Resources</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE's general privacy and security practices are described in the following resources:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Privacy Notice</strong><br /><a href="/privacy-policy" className="text-primary hover:underline">https://mycure.md/privacy-policy</a></p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Security Overview</strong><br /><a href="/security-overview" className="text-primary hover:underline">https://mycure.md/security-overview</a></p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Subprocessor List</strong><br /><a href="/subprocessors" className="text-primary hover:underline">https://mycure.md/subprocessors</a></p>
                    <p className="text-muted-foreground leading-relaxed mt-4">These resources supplement these Terms as applicable.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">A Privacy Notice or Security Overview does not by itself expand MYCURE's contractual obligations concerning Customer Data beyond these Terms and any applicable written Customer agreement.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where an applicable Data Processing Agreement, Data Processing and Security Agreement, Security Agreement, Business Associate Agreement, or similar written agreement establishes more specific requirements, the more specific written agreement controls for its subject matter.</p>
                  </motion.section>

                  <motion.section
                    id="hipaa-and-united-states-regulated-use"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">16. HIPAA and United States Regulated Use</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE does not represent that MYCURE CMS is automatically suitable for use subject to the United States Health Insurance Portability and Accountability Act (“HIPAA”) by every Customer or deployment.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">If a Customer intends to use MYCURE CMS in circumstances that require MYCURE to act as a Business Associate under HIPAA, the applicable parties must enter into an appropriate Business Associate Agreement before MYCURE performs processing that requires such an agreement.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Unless and until the required Business Associate Agreement and any necessary technical, commercial, or deployment arrangements are in place, MYCURE CMS is not represented to that Customer as configured or contracted for HIPAA-regulated use requiring MYCURE to act as a Business Associate.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may condition or decline a particular regulated deployment based on technical, security, commercial, operational, or legal considerations.</p>
                  </motion.section>

                  <motion.section
                    id="ai-assisted-features"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">17. AI-Assisted Features</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE may introduce artificial intelligence, machine-learning, automation, or assistive functionality from time to time.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">AI-assisted features may support activities such as:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>administration;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>documentation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>communication;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>analytics;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>workflow assistance;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>information organization; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other Service functions.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">AI-assisted outputs may be inaccurate, incomplete, delayed, or unsuitable for a particular purpose.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Users remain responsible for reviewing and verifying AI-assisted output before relying on it for:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>clinical decisions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient records;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>prescriptions or orders;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>certificates;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>claims or billing;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>regulatory submissions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>official communications; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other consequential purposes.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">AI-assisted functionality does not replace professional medical, legal, accounting, regulatory, billing, or other qualified judgment.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where an external AI or large-language-model provider will process Customer Data on MYCURE's behalf, MYCURE will address applicable contractual, Subprocessor, authorization, privacy, and security requirements before or in connection with that processing.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Unless otherwise expressly authorized through an applicable Customer agreement or documented instruction, MYCURE does not authorize identifiable production Customer Data to be used to train general-purpose third-party AI or large-language models.</p>
                  </motion.section>

                  <motion.section
                    id="aggregated-statistical-and-de-identified-information"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">18. Aggregated, Statistical, and De-Identified Information</h2>
                    <p className="text-muted-foreground leading-relaxed">Where permitted by applicable law and the applicable Customer agreement or instructions, MYCURE may create and use aggregated, statistical, anonymized, or de-identified information for legitimate purposes such as:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>operating the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>securing the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>reliability and performance analysis;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>capacity planning;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>product and service analysis;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>benchmarking;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>research and development; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>improving and developing MYCURE CMS.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Information represented as anonymized or de-identified must satisfy applicable requirements for that status.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE will not treat identifiable Patient Data as anonymized merely because obvious direct identifiers have been removed where the information remains reasonably capable of identifying an individual.</p>
                  </motion.section>

                  <motion.section
                    id="mycure-personnel-and-support-access"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">19. MYCURE Personnel and Support Access</h2>
                    <p className="text-muted-foreground leading-relaxed">Access to production Customer Data by MYCURE personnel is restricted to authorized personnel with an appropriate operational need.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Access may occur where reasonably necessary for:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>support;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintenance;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>troubleshooting;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>incident investigation or response;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>backup or recovery;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>service administration;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>compliance with applicable law; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other activities necessary to provide the applicable Services.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Authorized personnel are subject to applicable confidentiality and access-control requirements.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers should avoid submitting unnecessary Patient Data or other sensitive information through support channels.</p>
                  </motion.section>

                  <motion.section
                    id="security"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">20. Security</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE maintains reasonable technical and organizational security measures appropriate to the systems, Services, and Customer Data under MYCURE's control.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Measures may include, as applicable:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>authentication;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access controls;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>encryption;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>logging;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>monitoring;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>backups;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>personnel access restrictions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security procedures; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>incident-response measures.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Specific measures depend on the deployment model and may evolve over time.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">No information system, software service, network, authentication mechanism, storage system, or security control can eliminate all risk.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE does not warrant:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>absolute security;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>uninterrupted availability;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>detection of every malicious action;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>prevention of every unauthorized access event;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>correction of every vulnerability before exploitation; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>zero data loss.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers remain responsible for security matters within their control.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Additional information is available in the Security Overview.</p>
                  </motion.section>

                  <motion.section
                    id="security-incidents"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">21. Security Incidents</h2>
                    <p className="text-muted-foreground leading-relaxed">Where MYCURE becomes aware of a Security Incident affecting Customer Data, MYCURE will provide notice and cooperation in accordance with applicable law and the applicable Customer agreement.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers remain responsible for promptly reporting known or suspected incidents arising from matters within Customer's control, including:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>compromised credentials;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>unauthorized account access;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>lost or compromised devices;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>compromised email accounts;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer network compromise;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer-controlled infrastructure compromise;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>unauthorized integrations; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>circumvention of security controls.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">As between MYCURE and the Customer, the Customer generally remains responsible for determining and carrying out applicable notifications to its patients, data subjects, regulators, or other parties where the Customer is the responsible controller or equivalent party, subject to any independent obligation imposed directly upon MYCURE.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Security and privacy concerns relating to MYCURE should be reported to:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong><a href="mailto:privacy@mycure.md" className="text-primary hover:underline">privacy@mycure.md</a></strong></p>
                  </motion.section>

                  <motion.section
                    id="customer-responsibilities"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">22. Customer Responsibilities</h2>
                    <p className="text-muted-foreground leading-relaxed">Customer is responsible for its organization, healthcare operations, personnel, workflows, and use of the Services.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customer responsibilities include, as applicable:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>complying with laws and professional requirements applicable to Customer;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>obtaining required licenses, permits, registrations, and accreditations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>determining lawful bases for Customer Data processing;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>providing required privacy notices;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>obtaining consent or authorization where required;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>ensuring that only appropriately authorized personnel use the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>managing Authorized Users;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>assigning appropriate roles and permissions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintaining accurate information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>verifying information before reliance;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>training personnel;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintaining appropriate internal privacy and security controls;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintaining emergency and downtime procedures;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>complying with medical-record retention requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>responding to patient and data-subject requests;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>securing Customer-controlled devices and networks;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>securing Customer-controlled infrastructure;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>managing Customer-selected integrations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>protecting exported information; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>complying with applicable documentation and written agreements.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE is not responsible, as between MYCURE and Customer, for harm to the extent caused by Customer's failure to perform responsibilities within Customer's control, except to the extent MYCURE independently caused or materially contributed to that harm.</p>
                  </motion.section>

                  <motion.section
                    id="acceptable-use"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">23. Acceptable Use</h2>
                    <p className="text-muted-foreground leading-relaxed">You must not use the Services to:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>violate applicable law or another person's rights;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access or process information without authorization;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>submit fraudulent or knowingly unlawful information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>impersonate another person or misrepresent authority;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>interfere with the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>attempt unauthorized access to systems, accounts, or data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>introduce viruses, malware, destructive code, or similar threats;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>circumvent authentication, access controls, security measures, or agreed usage restrictions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>scrape or use automated access methods without authorization;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>probe, scan, exploit, or test vulnerabilities without MYCURE's written authorization;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>reverse engineer, decompile, disassemble, copy, or create derivative works except where expressly permitted by applicable law or written agreement;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>use the Services or MYCURE confidential materials to develop a competing service in violation of applicable contractual or intellectual-property rights;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>use MYCURE CMS as an unauthorized emergency-dispatch or life-critical system; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>use the Services in a manner reasonably likely to cause material harm to MYCURE, Customers, patients, users, or third parties.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may restrict or suspend access where MYCURE reasonably believes that these requirements have been materially violated or continued use presents a material legal, security, operational, or safety risk.</p>
                  </motion.section>

                  <motion.section
                    id="third-party-services-integrations-and-subprocessors"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">24. Third-Party Services, Integrations, and Subprocessors</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE CMS may interact with third-party systems.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">These may include:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>laboratories;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>imaging systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>pharmacies;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>HMO or insurer systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>payment services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>communications services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>government systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>accounting systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>APIs;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer infrastructure; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other integrations.</span></li>
                    </ul>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">Customer-Selected Services</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where a third party is selected, requested, enabled, or independently controlled by Customer, Customer is responsible for determining whether the integration and associated disclosure or processing are lawful and appropriate.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Third-party services may be subject to separate:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>terms;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>fees;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>privacy notices;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>availability;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security practices; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>data-processing arrangements.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE is not responsible for an independently controlled third-party service except to the extent expressly agreed in writing or required by applicable law.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">MYCURE Subprocessors</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may engage Subprocessors to provide, operate, secure, support, maintain, or recover applicable Services.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Current material Subprocessors are identified at:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><a href="/subprocessors" className="text-primary hover:underline">https://mycure.md/subprocessors</a></p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Not every vendor, software product, library, framework, or business service used by MYCURE is a Subprocessor of Customer Data.</p>
                  </motion.section>

                  <motion.section
                    id="fees-billing-taxes-and-renewals"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">25. Fees, Billing, Taxes, and Renewals</h2>
                    <p className="text-muted-foreground leading-relaxed">Fees, subscription terms, licensing terms, modules, billing schedules, implementation charges, renewal arrangements, usage limits, and other commercial matters are governed by the applicable:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Order Form;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>proposal;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>subscription;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>invoice;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>pricing arrangement; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>written agreement.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Unless otherwise stated in an applicable written agreement or required by law:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>fees are due according to the applicable billing terms;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>fees already earned or paid are non-refundable;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer is responsible for applicable taxes, duties, and government charges;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer remains responsible for amounts incurred before suspension or termination; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>non-payment may result in restriction, suspension, or termination.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may change pricing for future purchases, renewals, additional Services, or future subscription periods upon reasonable notice.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">A pricing change does not alter fees already committed for a fixed contractual period unless:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>the applicable agreement permits the change;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer changes the Service scope;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer purchases additional functionality or capacity;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>applicable taxes or government charges change; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>the parties otherwise agree.</span></li>
                    </ul>
                  </motion.section>

                  <motion.section
                    id="suspension-and-protective-measures"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">26. Suspension and Protective Measures</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE may suspend or restrict an account, user, session, integration, feature, or Service where MYCURE reasonably determines that such action is necessary because:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>fees are materially overdue;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>these Terms or an applicable agreement have been materially violated;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>credentials or accounts may be compromised;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>use creates a material security risk;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>use creates a material legal or regulatory risk;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>use threatens the Service or another Customer;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>use may cause material patient or third-party harm;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>MYCURE is required to act by law or lawful process;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>agreed Service limits have been materially exceeded; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>an essential third-party dependency becomes unavailable or restricted.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where reasonably practicable and consistent with the reason for suspension, MYCURE will provide notice.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may act without prior notice where reasonably necessary to address an urgent security, legal, safety, fraud, or service-protection concern.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Suspension does not relieve Customer of payment obligations already incurred.</p>
                  </motion.section>

                  <motion.section
                    id="termination"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">27. Termination</h2>
                    <p className="text-muted-foreground leading-relaxed">Customer may terminate or discontinue Services according to the applicable subscription, Order Form, plan, or written agreement.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may terminate a Customer's Services or applicable agreement where:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer materially breaches these Terms or an applicable agreement and fails to cure the breach within any applicable cure period;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer materially fails to pay amounts when due;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer becomes insolvent or ceases operations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>continued provision of the applicable Service becomes unlawful;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer's use creates an unacceptable material security, legal, operational, or safety risk;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>MYCURE is required to terminate by lawful process; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>MYCURE discontinues the applicable Service, subject to any contractual notice or transition obligations.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Upon termination, Customer's ordinary right to use the terminated Service ends except for any limited access provided for:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>export;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>transition;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>legal compliance;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>archival services; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>another agreed purpose.</span></li>
                    </ul>
                  </motion.section>

                  <motion.section
                    id="data-export-return-and-post-termination-processing"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">28. Data Export, Return, and Post-Termination Processing</h2>
                    <p className="text-muted-foreground leading-relaxed">Unless a different period is established by an applicable written agreement, following expiration or termination of the active paid Service, Customer will have a period of up to <strong>sixty (60) days</strong> to request or perform an available export of Customer Data.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">During this period, MYCURE may restrict normal operational use while maintaining reasonable access necessary for available export.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customer is responsible for:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>requesting or completing export within the applicable period;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>verifying exported information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintaining records required for Customer's legal, healthcare, tax, corporate, or professional obligations; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>securing exported copies.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">After the applicable export period, MYCURE may delete or irreversibly anonymize remaining Customer Data in MYCURE's active control, subject to:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>an applicable written archival arrangement;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>ordinary backup rotation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>lawful preservation requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>applicable law; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>the applicable Data Processing Agreement or other Customer agreement.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Deletion from active systems may not result in immediate deletion of residual backup copies.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE is not responsible for Customer's failure to request or complete an available export within the applicable period, except to the extent otherwise required by applicable law or written agreement.</p>
                  </motion.section>

                  <motion.section
                    id="service-changes-and-availability"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">29. Service Changes and Availability</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE may maintain, update, improve, modify, replace, add, reconfigure, or discontinue technologies, features, components, or internal implementations used to provide the Services.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE does not commit to permanent use of a particular:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>cloud provider;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>database;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>framework;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>software library;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>monitoring tool;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>authentication technology;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>infrastructure architecture; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other internal technical implementation,</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">unless expressly stated in an applicable written agreement.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may also modify or discontinue functionality where reasonably necessary because of:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>technical developments;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>legal requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>third-party changes;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>operational requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>product evolution; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>commercial considerations.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where an applicable written agreement requires notice, migration assistance, Customer authorization, or another mechanism for a material change, MYCURE will comply with that agreement.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Unless expressly stated in a separately executed Service Level Agreement, MYCURE does not guarantee uninterrupted availability, a particular uptime percentage, recovery-point objective, recovery-time objective, or restoration time.</p>
                  </motion.section>

                  <motion.section
                    id="intellectual-property"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">30. Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE and its licensors retain all rights, title, and interest in MYCURE CMS and related:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>software;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>source code;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>object code;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>technology;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>architecture;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>designs;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>user interfaces;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>workflows;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>templates;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>documentation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>methodologies;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>trademarks;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>logos;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>know-how; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other intellectual property.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Subject to these Terms, applicable fees, and any applicable written agreement, MYCURE grants Customer a limited, non-exclusive right to access and use the applicable Services for Customer's authorized internal purposes.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where an applicable written agreement authorizes a client-hosted installation, the Customer may install and operate the authorized MYCURE CMS components only to the extent permitted by that agreement.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">No ownership rights in MYCURE technology are transferred to Customer unless expressly stated in writing.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Except where expressly permitted by applicable law or written agreement, Customer shall not:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>copy MYCURE software;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>distribute it;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>sell or sublicense it;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>publish source code;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>reverse engineer it;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>create unauthorized derivative works; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>make MYCURE software available to third parties outside Customer's authorized use.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Third-party and open-source components may be subject to their applicable licenses.</p>
                  </motion.section>

                  <motion.section
                    id="feedback"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">31. Feedback</h2>
                    <p className="text-muted-foreground leading-relaxed">If Customer or a user voluntarily provides MYCURE with suggestions, ideas, recommendations, or other feedback concerning the Services, MYCURE may use that feedback to develop or improve its products and services without payment or other obligation to the person providing the feedback.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE will not acquire ownership of Customer Data or Customer confidential information merely because it appears in feedback.</p>
                  </motion.section>

                  <motion.section
                    id="customer-content-and-inputs"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">32. Customer Content and Inputs</h2>
                    <p className="text-muted-foreground leading-relaxed">Customer is responsible for Customer Data and other information submitted through its accounts.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customer represents that it has the necessary rights, authority, permissions, instructions, or lawful basis to provide and process such information through the Services.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE is not responsible for determining the:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>clinical accuracy;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>factual accuracy;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>completeness;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>legality;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>appropriateness;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>professional sufficiency; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>regulatory sufficiency</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">of Customer-provided content or instructions, except for obligations independently applicable to MYCURE.</p>
                  </motion.section>

                  <motion.section
                    id="confidentiality"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">33. Confidentiality</h2>
                    <p className="text-muted-foreground leading-relaxed">Each party may receive confidential or proprietary information belonging to the other.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Confidential information may include non-public:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>business information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>technical information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>financial information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>product information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>operational information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer Data; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other information that reasonably should be understood to be confidential.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Each party shall use reasonable care to protect the other party's confidential information and shall use it only for purposes consistent with the applicable Services and agreements.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Confidentiality obligations do not apply to information that the receiving party can demonstrate:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>is lawfully public without breach;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>was already lawfully known without confidentiality restriction;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>is independently developed without use of the confidential information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>is lawfully received from another source without confidentiality restriction; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>must be disclosed by applicable law or lawful process.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where legally permitted and reasonably practicable, a party required to disclose the other party's confidential information may provide notice before disclosure.</p>
                  </motion.section>

                  <motion.section
                    id="beta-preview-pilot-and-trial-features"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">34. Beta, Preview, Pilot, and Trial Features</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE may offer:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>beta;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>pilot;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>preview;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>experimental;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>trial;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>early-access; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>pre-release</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">functionality.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Such functionality may be incomplete, unstable, modified, limited, or discontinued.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Unless expressly agreed otherwise in writing, such functionality is provided for evaluation and:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>may change without notice;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>may not be suitable for production or regulated use;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>may not be covered by ordinary Service Level Agreements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>may contain defects; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>is provided “as is” and “as available” to the maximum extent permitted by law.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may impose additional conditions on use of beta or experimental functionality.</p>
                  </motion.section>

                  <motion.section
                    id="disclaimers"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">35. Disclaimers</h2>
                    <p className="text-muted-foreground leading-relaxed">To the maximum extent permitted by applicable law and except as expressly provided in an applicable written agreement, the Services are provided <strong>“as is” and “as available.”</strong></p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE disclaims warranties that may lawfully be disclaimed, including implied warranties of:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>merchantability;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>fitness for a particular purpose;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>title;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>non-infringement; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>uninterrupted or error-free operation.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE does not warrant that:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>the Services will always be available;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>the Services will be error-free;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>every defect will be corrected;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>every security incident will be prevented;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>every vulnerability will be discovered;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer Data can never be lost or corrupted;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>every unauthorized access event will be detected;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>the Services will satisfy every Customer requirement;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>the Services will comply with every law applicable to every Customer;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>clinical or administrative outputs will always be accurate or complete;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>third-party services will remain available; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>use of the Services will produce a particular clinical, regulatory, financial, operational, or business result.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Nothing in these Terms excludes warranties or rights that cannot lawfully be excluded.</p>
                  </motion.section>

                  <motion.section
                    id="limitation-of-liability"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">36. Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed">To the maximum extent permitted by applicable law, MYCURE shall not be liable for indirect, incidental, special, exemplary, punitive, or consequential damages, or for loss of:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>profits;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>revenues;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>goodwill;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>business opportunities;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>anticipated savings; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>business interruption,</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">arising out of or relating to the Services or these Terms, regardless of the legal theory asserted.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">To the maximum extent permitted by applicable law, <strong>MYCURE's aggregate liability arising out of or relating to the Services or these Terms shall not exceed the fees paid or payable by the applicable Customer to MYCURE for the affected Services during the three (3) months immediately preceding the event giving rise to the claim.</strong></p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where an applicable separately executed written agreement establishes a different liability limitation, the applicable written agreement controls according to its terms.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">The foregoing limitations apply to the maximum extent permitted by applicable law even if a remedy fails of its essential purpose.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Nothing in these Terms limits liability to the extent applicable law prohibits such limitation or exclusion.</p>
                  </motion.section>

                  <motion.section
                    id="customer-caused-claims-and-indemnification"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">37. Customer-Caused Claims and Indemnification</h2>
                    <p className="text-muted-foreground leading-relaxed">To the maximum extent permitted by applicable law and subject to any more specific applicable written agreement, Customer shall defend, indemnify, and hold harmless MYCURE and its affiliates, officers, directors, personnel, contractors, and agents from third-party claims, losses, liabilities, penalties, damages, costs, and reasonable legal fees to the extent arising from:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer's unlawful collection or processing of information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer's violation of applicable law or third-party rights;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>unlawful or unauthorized Customer instructions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer personnel's unauthorized use or disclosure of information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer's breach of these Terms;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer-provided content;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>clinical, diagnostic, treatment, prescribing, referral, billing, reporting, or patient-care decisions made by Customer or its personnel;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>credential sharing or Customer's material failure to safeguard Customer-controlled authentication factors;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer-controlled devices, networks, or infrastructure;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer-selected third-party integrations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer's unauthorized disclosure or export of Customer Data; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>another material act or omission within Customer's responsibility.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">This Section does not apply to the extent the applicable claim was caused or materially contributed to by MYCURE's breach of these Terms, an applicable written agreement, or applicable law.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Nothing in this Section creates liability beyond what is permitted by applicable law or replaces a more specific indemnification provision contained in an applicable written agreement.</p>
                  </motion.section>

                  <motion.section
                    id="intellectual-property-claims"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">38. Intellectual Property Claims</h2>
                    <p className="text-muted-foreground leading-relaxed">If MYCURE reasonably determines that the Services have become, or are likely to become, subject to a third-party intellectual-property infringement claim, MYCURE may, at its option:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>obtain the right for Customer to continue using the affected Service;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>modify the affected Service;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>replace the affected Service with reasonably comparable functionality; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>terminate the affected Service and provide any refund or other remedy required under the applicable written agreement or applicable law.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE is not responsible for infringement claims to the extent arising from:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer Data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer instructions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>unauthorized Customer modifications;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>use outside the applicable agreement;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>combinations with non-MYCURE products or services not provided or required by MYCURE; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>continued use after MYCURE provides reasonable notice to discontinue the affected use.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Subject to any applicable written agreement or non-waivable legal requirement, this Section states MYCURE's obligations concerning third-party intellectual-property infringement claims relating to the Services.</p>
                  </motion.section>

                  <motion.section
                    id="government-and-legal-requests"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">39. Government and Legal Requests</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE may preserve, process, or disclose information where required by:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>applicable law;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>a lawful court order;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>a regulatory authority;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>government process; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>another legally binding requirement.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where legally permitted and reasonably practicable, MYCURE may notify the affected Customer of a request specifically directed to Customer Data so that the Customer may exercise available legal rights.</p>
                  </motion.section>

                  <motion.section
                    id="force-majeure"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">40. Force Majeure</h2>
                    <p className="text-muted-foreground leading-relaxed">Neither party is liable for delay or failure to perform an obligation, other than an obligation to pay amounts already due, to the extent caused by events beyond that party's reasonable control.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Such events may include:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>natural disasters;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>acts of God;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>war;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>terrorism;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>civil unrest;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>widespread labor disputes;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>government action;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>epidemics or pandemics;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>widespread power failures;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>internet or telecommunications failures;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>material cyberattacks;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>major cloud or infrastructure-provider failures; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other comparable events beyond reasonable control.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">The affected party remains responsible for taking reasonable measures appropriate to the circumstances to resume performance.</p>
                  </motion.section>

                  <motion.section
                    id="assignment"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">41. Assignment</h2>
                    <p className="text-muted-foreground leading-relaxed">Customer may not assign these Terms or transfer its rights or obligations under them without MYCURE's prior written consent, except where an applicable written agreement expressly permits assignment.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may assign or transfer these Terms in connection with:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>a merger;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>acquisition;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>corporate reorganization;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>sale of substantially all relevant assets;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>change of control; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>operation of law.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Any assignment remains subject to rights that cannot lawfully be transferred or restricted.</p>
                  </motion.section>

                  <motion.section
                    id="changes-to-these-terms"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">42. Changes to These Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE may update these Terms prospectively from time to time to reflect:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Service changes;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>technology changes;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>legal or regulatory developments;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>operational requirements; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>legitimate business requirements.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">The current version will be posted at:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><a href="/terms-and-conditions" className="text-primary hover:underline">https://mycure.md/terms-and-conditions</a></p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where MYCURE makes a material change, MYCURE will provide reasonable notice using a mechanism appropriate to the applicable Customer relationship, which may include:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>email;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>in-Service notice;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>website notice; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>another reasonable electronic mechanism.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Changes take effect on the stated effective date.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where permitted by the applicable agreement and applicable law, continued use of the Services after the stated effective date may constitute acceptance of updated Terms.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">An online update to these Terms does not by itself:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>retroactively alter obligations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>override a separately executed written agreement;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>alter specifically negotiated commercial terms during an existing fixed term;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>materially diminish protections specifically established for Customer Data in an applicable written Data Processing Agreement or similar agreement; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>alter a provision where applicable law requires a different amendment or acceptance mechanism.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where a separately executed agreement requires mutual written amendment for a particular matter, that requirement controls.</p>
                  </motion.section>

                  <motion.section
                    id="governing-law-and-dispute-resolution"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">43. Governing Law and Dispute Resolution</h2>
                    <p className="text-muted-foreground leading-relaxed">Unless otherwise stated in an applicable separately executed written agreement, these Terms are governed by the laws of the <strong>Republic of the Philippines</strong>, without regard to conflict-of-law principles.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Unless otherwise stated in a separately executed written agreement, disputes arising out of or relating to these Terms or the Services shall be brought in the proper courts of <strong>Quezon City, Philippines</strong>.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Nothing in these Terms restricts rights, jurisdiction, remedies, or protections that cannot lawfully be waived or contractually restricted.</p>
                  </motion.section>

                  <motion.section
                    id="notices"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">44. Notices</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE may provide operational, contractual, security, or other notices through:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>email;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>in-Service notification;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>website publication; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>another reasonable mechanism appropriate to the matter.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customer is responsible for maintaining current account, billing, administrator, privacy, and security contact information.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where an applicable written agreement specifies a notice method or address, that agreement controls for notices subject to that provision.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Privacy and security communications to MYCURE may be sent to:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong><a href="mailto:privacy@mycure.md" className="text-primary hover:underline">privacy@mycure.md</a></strong></p>
                  </motion.section>

                  <motion.section
                    id="entire-agreement"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">45. Entire Agreement</h2>
                    <p className="text-muted-foreground leading-relaxed">These Terms, together with applicable:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Order Forms;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>proposals or subscriptions expressly incorporated into the agreement;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>written Customer agreements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>addenda;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Privacy Notice;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Security Overview;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Subprocessor provisions; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other policies validly incorporated under these Terms</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">constitute the applicable agreement concerning the Services to the extent provided in those documents.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">A separately executed written agreement controls over these general Terms for the specific subject matter addressed by that agreement.</p>
                  </motion.section>

                  <motion.section
                    id="severability"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">46. Severability</h2>
                    <p className="text-muted-foreground leading-relaxed">If a provision of these Terms is held invalid or unenforceable, it shall be modified or limited to the minimum extent necessary to make it enforceable where permitted.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">If modification is not possible, the affected provision shall be severed.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">The remaining provisions continue in effect to the maximum extent permitted by law.</p>
                  </motion.section>

                  <motion.section
                    id="no-waiver"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">47. No Waiver</h2>
                    <p className="text-muted-foreground leading-relaxed">Failure by either party to enforce a provision on one occasion does not waive the right to enforce that provision later.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">A waiver of a contractual right must be given through a legally valid mechanism by the party granting the waiver.</p>
                  </motion.section>

                  <motion.section
                    id="contact-information"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">48. Contact Information</h2>
                    <p className="text-muted-foreground leading-relaxed">Questions concerning these Terms may be directed to:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Team OPS Inc. dba MYCURE</strong><br />201 Malayan Plaza<br />ADB Avenue corner Opal Road<br />Ortigas Business Center<br />Pasig City, Philippines 1600</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">For privacy, data-protection, or security matters:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Privacy &amp; Security Contact</strong><br /><a href="mailto:privacy@mycure.md" className="text-primary hover:underline">privacy@mycure.md</a></p>
                  </motion.section>

                  <motion.section
                    id="acknowledgment"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">49. Acknowledgment</h2>
                    <p className="text-muted-foreground leading-relaxed">By accessing or using the Services through a mechanism that validly binds you to these Terms, you acknowledge that you have read and understood these Terms and agree to be bound by them.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">If you do not agree to these Terms, you must not access or use the Services except to the extent necessary to exercise an applicable termination, transition, export, or other right under an existing agreement.</p>
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
