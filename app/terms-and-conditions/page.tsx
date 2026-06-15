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
    { id: "who-applies", title: "1. Who These Terms Apply To" },
    { id: "other-agreements", title: "2. Relationship to Other Agreements" },
    { id: "our-services", title: "3. Our Services" },
    { id: "clinical-responsibility", title: "4. Healthcare Use and Clinical Responsibility" },
    { id: "no-emergency", title: "5. No Emergency Use" },
    { id: "regulatory-scope", title: "6. Regulatory Scope" },
    { id: "eligibility", title: "7. Eligibility and Account Authority" },
    { id: "customer-accounts", title: "8. Customer Accounts and Authorized Users" },
    { id: "patient-facing", title: "9. Patient-Facing Features" },
    { id: "minor-patients", title: "10. Minor Patients and Guardian Access" },
    { id: "customer-data", title: "11. Customer Data" },
    { id: "data-protection-roles", title: "12. Data Protection Roles" },
    { id: "privacy-policy", title: "13. Privacy Policy" },
    { id: "hipaa", title: "14. HIPAA and US-Regulated Use" },
    { id: "ai-features", title: "15. AI-Assisted Features" },
    { id: "anonymized-data", title: "16. Anonymized and Aggregated Data" },
    { id: "support-access", title: "17. Support Access" },
    { id: "security", title: "18. Security" },
    { id: "incident-notification", title: "19. Incident and Breach Notification" },
    { id: "customer-responsibilities", title: "20. Customer Responsibilities" },
    { id: "acceptable-use", title: "21. Acceptable Use" },
    { id: "third-party", title: "22. Third-Party Services and Integrations" },
    { id: "fees-billing", title: "23. Fees, Billing, and Taxes" },
    { id: "suspension", title: "24. Suspension" },
    { id: "termination", title: "25. Termination" },
    { id: "data-export", title: "26. Data Export and Post-Termination Access" },
    { id: "intellectual-property", title: "27. Intellectual Property" },
    { id: "customer-content", title: "28. Customer Content and Responsibility for Inputs" },
    { id: "confidentiality", title: "29. Confidentiality" },
    { id: "beta-features", title: "30. Beta, Pilot, or Trial Features" },
    { id: "disclaimers", title: "31. Disclaimers" },
    { id: "limitation-liability", title: "32. Limitation of Liability" },
    { id: "indemnification", title: "33. Indemnification" },
    { id: "ip-claims", title: "34. Intellectual Property Claims" },
    { id: "changes", title: "35. Changes to the Services or Terms" },
    { id: "force-majeure", title: "36. Force Majeure" },
    { id: "assignment", title: "37. Assignment" },
    { id: "severability", title: "38. Severability" },
    { id: "no-waiver", title: "39. No Waiver" },
    { id: "entire-agreement", title: "40. Entire Agreement" },
    { id: "governing-law", title: "41. Governing Law and Dispute Resolution" },
    { id: "notices", title: "42. Notices" },
    { id: "contact", title: "43. Contact Information" },
    { id: "acknowledgment", title: "44. Acknowledgment" },
  ]

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("acknowledgment")
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
                Terms of Agreement
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                These Terms govern access to and use of the MYCURE clinic management platform, related websites, applications, patient-facing features, APIs, integrations, support services, and other related services (collectively, the &ldquo;Services&rdquo;).
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
                      Please read these Terms carefully. By accessing or using the Services, creating an account, signing an order form, or otherwise agreeing to use MYCURE, you agree to be bound by these Terms.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      If you are using the Services on behalf of a clinic, healthcare organization, company, or other legal entity, you represent that you have authority to bind that organization to these Terms.
                    </p>
                  </motion.div>

                  {/* Section 1 */}
                  <motion.section
                    id="who-applies"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">1. Who These Terms Apply To</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">These Terms apply to:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Customers</strong> — clinics, healthcare organizations, companies, groups, practices, and other entities that subscribe to or use the Services;</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Authorized Users</strong> — doctors, nurses, clinic staff, administrators, billing personnel, and other individuals authorized by a Customer to use the Services;</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Patient Users</strong> — patients, parents, guardians, or authorized representatives who access patient-facing features, portals, mobile applications, or communication tools, where enabled; and</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Other Users</strong> — third-party users, integration partners, or other persons who access the Services with authorization.</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      The Customer is responsible for its Authorized Users and for all use of the Services under its account.
                    </p>
                  </motion.section>

                  {/* Section 2 */}
                  <motion.section
                    id="other-agreements"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">2. Relationship to Other Agreements</h2>
                    <p className="text-muted-foreground leading-relaxed">These Terms are the general terms for using MYCURE.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Some Customers may also enter into separate written agreements with us, such as an Order Form, Statement of Work, Data Processing Addendum, Business Associate Agreement, Service Level Agreement, Security Addendum, or other written agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      If there is a conflict between these Terms and a signed written agreement between MYCURE and the Customer, the signed written agreement will control for that Customer, but only for the specific subject matter covered by that agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Your use of the Services is also governed by our Privacy Policy and any applicable notices, policies, or addenda referenced in these Terms.
                    </p>
                  </motion.section>

                  {/* Section 3 */}
                  <motion.section
                    id="our-services"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">3. Our Services</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      MYCURE provides clinic management software and related services. Depending on the Customer&rsquo;s subscription, configuration, location, and enabled modules, the Services may include features for:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>electronic medical records or clinical documentation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient registration and management;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>appointment scheduling;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>billing, invoicing, and payment workflows;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>inventory and supplies management;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>pharmacy, laboratory, imaging, dental, or other clinic workflows;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>queueing, notifications, and patient communications;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>reporting, dashboards, and analytics;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient portals or patient-facing applications;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>integrations with third-party systems; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other healthcare administration and workflow tools.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      The availability of specific features may vary by plan, region, deployment model, Customer configuration, and applicable agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      We may improve, modify, suspend, or discontinue parts of the Services from time to time, subject to these Terms and any applicable written agreement.
                    </p>
                  </motion.section>

                  {/* Section 4 */}
                  <motion.section
                    id="clinical-responsibility"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">4. Healthcare Use and Clinical Responsibility</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE is a software provider. We are not a healthcare provider, clinic, hospital, physician, nurse, pharmacist, diagnostic center, or emergency medical service.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      The Services are intended to support healthcare workflows, documentation, administration, communication, and related operations. They do not replace professional medical judgment.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      All clinical, diagnostic, treatment, prescribing, referral, documentation, billing, reporting, and patient-care decisions remain the responsibility of the Customer and its licensed healthcare professionals.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">Customers and Authorized Users are responsible for:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>verifying the accuracy and completeness of information entered into the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>reviewing clinical records, alerts, outputs, reports, and recommendations before relying on them;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintaining appropriate clinical policies, supervision, and professional standards;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>obtaining patient consents and authorizations required by law;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>complying with medical recordkeeping and healthcare regulations applicable to their practice;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>ensuring that only qualified and authorized personnel perform regulated healthcare activities; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintaining backup procedures or alternative workflows where appropriate for patient care.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE does not guarantee any clinical outcome, diagnosis, treatment result, reimbursement result, regulatory result, or business result.
                    </p>
                  </motion.section>

                  {/* Section 5 */}
                  <motion.section
                    id="no-emergency"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">5. No Emergency Use</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The Services are not an emergency medical service and are not intended to be used as the sole means of handling emergencies, urgent care, life-threatening conditions, or situations where delay could result in harm.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customers and Authorized Users are responsible for maintaining appropriate emergency procedures, escalation protocols, backup systems, and alternative communication methods.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Patient Users should contact their healthcare provider, local emergency number, or nearest emergency facility for urgent or life-threatening medical concerns.
                    </p>
                  </motion.section>

                  {/* Section 6 */}
                  <motion.section
                    id="regulatory-scope"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">6. Regulatory Scope</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE is designed to support healthcare organizations in operating secure and compliant clinic management workflows. However, healthcare, privacy, data protection, consumer protection, medical record, telehealth, and related technology laws vary by jurisdiction and by the way the Services are used.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Unless expressly stated in a separate written agreement, Order Form, Data Processing Addendum, Business Associate Agreement, or other applicable addendum, MYCURE does not represent that the Services are certified, approved, or compliant for every jurisdiction, healthcare setting, or regulated use case.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      The Customer is responsible for determining whether its use of the Services complies with the laws, regulations, professional standards, licensing requirements, consent requirements, and recordkeeping obligations applicable to its organization, personnel, patients, and location.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE will provide the Services using reasonable administrative, technical, and organizational safeguards designed to support applicable privacy, security, and healthcare data protection requirements. Where specific legal frameworks require additional contractual terms, such as a data processing agreement or business associate agreement, those terms must be separately agreed in writing before the Services are used for that regulated purpose.
                    </p>
                  </motion.section>

                  {/* Section 7 */}
                  <motion.section
                    id="eligibility"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">7. Eligibility and Account Authority</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">To use the Services, you must:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>be at least 18 years old or the age of majority in your jurisdiction, unless using patient-facing features with the consent or involvement of a parent, guardian, healthcare provider, or legally authorized representative;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>have legal authority to agree to these Terms on your own behalf or on behalf of the Customer you represent;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>be authorized by the Customer to access the Services, if using a Customer account;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>use the Services only for lawful and authorized purposes; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>not be barred from using the Services under applicable law.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      We may refuse, suspend, or terminate access if we reasonably believe that a user is not eligible, is not authorized, or is using the Services in violation of these Terms or applicable law.
                    </p>
                  </motion.section>

                  {/* Section 8 */}
                  <motion.section
                    id="customer-accounts"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">8. Customer Accounts and Authorized Users</h2>
                    <p className="text-muted-foreground leading-relaxed">Customers are responsible for managing their accounts and Authorized Users.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">The Customer must:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>provide accurate and current account information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>designate appropriate account administrators;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>assign user roles and permissions based on job function and need-to-know access;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>promptly remove access for users who are no longer authorized;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintain the confidentiality and security of login credentials;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>enable and use multi-factor authentication or similar security features where available;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>monitor activity under its account;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>notify MYCURE promptly of suspected unauthorized access or security incidents; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>ensure that all Authorized Users comply with these Terms.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      The Customer is responsible for all activity under its account, whether or not the activity was authorized, except to the extent caused by MYCURE&rsquo;s breach of these Terms or applicable written agreement.
                    </p>
                  </motion.section>

                  {/* Section 9 */}
                  <motion.section
                    id="patient-facing"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">9. Patient-Facing Features</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE may offer patient-facing features, such as patient portals, mobile applications, appointment tools, messaging, results access, forms, payment tools, or other patient communication features.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Patient-facing features may be enabled, configured, limited, or disabled depending on the Customer&rsquo;s subscription, settings, deployment, and applicable law.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">The Customer is responsible for determining:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>whether patient-facing features are appropriate for its practice;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>which patients may access patient-facing features;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>what information may be made available to patients;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>how patient identity and authorization are verified;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>whether parent, guardian, or representative access is permitted;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>whether patient consent or authorization is required; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>how patient communications are monitored and handled.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE may provide technical tools to support patient-facing access, but the Customer remains responsible for the healthcare relationship, patient communication policy, and legal basis for making patient information available through the Services.
                    </p>
                  </motion.section>

                  {/* Section 10 */}
                  <motion.section
                    id="minor-patients"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">10. Minor Patients and Guardian Access</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Where patient-facing features are enabled, minor patients may use such features only with the consent, involvement, or authorization of a parent, guardian, healthcare provider, or legally authorized representative where required by applicable law.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customers are responsible for determining who may access a minor patient&rsquo;s information and for configuring access in accordance with applicable laws, professional obligations, and clinic policies.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE may restrict, suspend, or require additional verification for minor-related accounts or access where necessary to support legal, safety, privacy, or security requirements.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Unless expressly agreed in writing, MYCURE is not responsible for independently verifying family relationships, guardianship status, legal authority, custody arrangements, or the scope of a person&rsquo;s right to access a minor patient&rsquo;s information.
                    </p>
                  </motion.section>

                  {/* Section 11 */}
                  <motion.section
                    id="customer-data"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">11. Customer Data</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      &ldquo;Customer Data&rdquo; means data, content, records, files, images, documents, messages, and other information submitted to, uploaded to, stored in, generated through, or processed by the Services on behalf of the Customer, including patient and clinical data.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      As between MYCURE and the Customer, the Customer retains ownership of Customer Data.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
                      The Customer grants MYCURE a limited right to host, process, transmit, store, display, maintain, back up, secure, and otherwise use Customer Data only as needed to:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>provide, operate, maintain, support, and secure the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>perform our obligations under these Terms and applicable written agreements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>prevent or address fraud, abuse, security issues, or technical problems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>comply with law and lawful requests;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>improve the Services using anonymized or aggregated information as described in these Terms and our Privacy Policy; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>perform other activities authorized by the Customer or permitted by applicable agreement.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE does not sell Customer Data or identifiable patient health data.
                    </p>
                  </motion.section>

                  {/* Section 12 */}
                  <motion.section
                    id="data-protection-roles"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">12. Data Protection Roles</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      For patient and clinical data entered, uploaded, or processed by or on behalf of a Customer, the Customer is generally the data controller, personal information controller, covered entity, healthcare provider, legal custodian of the medical record, or equivalent responsible party under applicable law.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE generally acts as a data processor, personal information processor, service provider, business associate, or equivalent service provider role, depending on the applicable legal framework and only to the extent such framework applies.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">The Customer is responsible for:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>establishing the lawful basis for processing Customer Data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>obtaining patient consents, authorizations, and notices where required;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>responding to patient requests relating to care, medical records, or clinical content;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>determining appropriate retention periods for medical and business records;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>ensuring that its use of the Services complies with applicable healthcare, privacy, and professional laws; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>providing lawful and documented instructions to MYCURE where required.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE will process Customer Data as described in these Terms, our Privacy Policy, and any applicable Data Processing Addendum, Business Associate Agreement, or other written agreement.
                    </p>
                  </motion.section>

                  {/* Section 13 */}
                  <motion.section
                    id="privacy-policy"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">13. Privacy Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Our collection, use, disclosure, and protection of personal data is described in our{" "}
                      <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      The Privacy Policy is incorporated into these Terms by reference. If there is a conflict between these Terms and the Privacy Policy regarding our public privacy practices, the Privacy Policy will govern to the extent of that conflict.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      For business Customers, additional data protection obligations may be set out in a Data Processing Addendum, Business Associate Agreement, or other written agreement.
                    </p>
                  </motion.section>

                  {/* Section 14 */}
                  <motion.section
                    id="hipaa"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">14. HIPAA and US-Regulated Use</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE does not represent that the Services are automatically compliant with the US Health Insurance Portability and Accountability Act (&ldquo;HIPAA&rdquo;) for all Customers or all uses.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      If a Customer is subject to HIPAA and intends to use the Services to create, receive, maintain, or transmit protected health information in a manner that requires MYCURE to act as a business associate, the Customer must enter into a Business Associate Agreement with MYCURE before using the Services for that purpose.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Unless and until a Business Associate Agreement has been signed by MYCURE and the applicable Customer, the Services are not offered or represented for HIPAA-regulated use by that Customer.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE may decline, condition, or limit HIPAA-regulated use based on commercial, technical, operational, security, or legal considerations.
                    </p>
                  </motion.section>

                  {/* Section 15 */}
                  <motion.section
                    id="ai-features"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">15. AI-Assisted Features</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE may introduce artificial intelligence, machine learning, automation, or assistive features from time to time.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      AI-assisted features, if enabled, are intended to support users by helping with administrative, operational, documentation, communication, analytics, or workflow tasks. They are not a substitute for professional medical judgment, legal judgment, billing judgment, or regulatory review.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Users are responsible for reviewing, verifying, and approving any AI-assisted output before relying on it or including it in a patient record, communication, report, claim, prescription, order, certificate, or other official document.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Unless expressly agreed in writing, MYCURE does not use identifiable patient data or identifiable Customer Data to train artificial intelligence or machine learning models.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      AI-assisted features may be inaccurate, incomplete, delayed, or unsuitable for a particular use case. MYCURE does not guarantee the accuracy, completeness, clinical appropriateness, regulatory sufficiency, or fitness of AI-assisted outputs.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE may disable, limit, or modify AI-assisted features where necessary for safety, quality, legal, security, or operational reasons.
                    </p>
                  </motion.section>

                  {/* Section 16 */}
                  <motion.section
                    id="anonymized-data"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">16. Anonymized and Aggregated Data</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE may create and use anonymized, aggregated, or statistical information derived from use of the Services for purposes such as operating, securing, improving, and developing the Services; analytics; benchmarking; product planning; performance monitoring; and research and development.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE will not use identifiable patient data for these purposes unless permitted by applicable law and applicable agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Anonymized and aggregated data must not identify, and must not reasonably be capable of being used to identify, any individual patient, user, or Customer. MYCURE will not attempt to re-identify anonymized data and will require the same from third parties with whom such data is shared.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Additional information is provided in our Privacy Policy.
                    </p>
                  </motion.section>

                  {/* Section 17 */}
                  <motion.section
                    id="support-access"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">17. Support Access</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE personnel may access Customer accounts or Customer Data only where reasonably necessary to provide, maintain, secure, troubleshoot, improve, or support the Services; investigate suspected abuse, security issues, or technical problems; comply with law; or perform obligations under an applicable agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE will use reasonable administrative, technical, and organizational safeguards designed to limit support access to authorized personnel and appropriate purposes.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customer acknowledges that certain support, maintenance, security, and troubleshooting activities may require limited access to Customer Data.
                    </p>
                  </motion.section>

                  {/* Section 18 */}
                  <motion.section
                    id="security"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">18. Security</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE will implement reasonable administrative, technical, physical, and organizational safeguards designed to protect Customer Data against unauthorized access, loss, misuse, alteration, or disclosure.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Security measures may include access controls, authentication, encryption, monitoring, backups, audit logs, and other safeguards, as appropriate to the Services and deployment model.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      No system, software, network, method of transmission, or method of storage can be guaranteed to be completely secure. MYCURE does not guarantee absolute security, uninterrupted access, or prevention of all unauthorized access.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customers are responsible for their own security practices, including managing user access, configuring permissions, protecting devices and networks, training personnel, maintaining endpoint security, using available authentication controls, and promptly reporting suspected incidents.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Additional security commitments, if any, must be set out in a separate written agreement, Security Addendum, or Service Level Agreement. See also our{" "}
                      <Link href="/security-overview" className="text-primary hover:underline">Security Overview</Link>.
                    </p>
                  </motion.section>

                  {/* Section 19 */}
                  <motion.section
                    id="incident-notification"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">19. Incident and Breach Notification</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If MYCURE becomes aware of a security incident involving Customer Data that requires notification under applicable law or applicable written agreement, MYCURE will notify the affected Customer without undue delay and in accordance with applicable legal or contractual requirements.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      The Customer is responsible for determining whether and how to notify patients, regulators, payors, employers, partners, or other third parties, except where applicable law requires MYCURE to notify directly.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE will provide reasonable cooperation and information available to us to support the Customer&rsquo;s assessment and response, subject to security, confidentiality, legal, and operational limitations.
                    </p>
                  </motion.section>

                  {/* Section 20 */}
                  <motion.section
                    id="customer-responsibilities"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">20. Customer Responsibilities</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The Customer is responsible for its use of the Services and for ensuring that its use complies with applicable law, professional standards, and these Terms.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">The Customer is responsible for:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>obtaining required licenses, permits, accreditations, and authorizations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>ensuring that only qualified personnel perform regulated healthcare activities;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>obtaining required patient consents, authorizations, and notices;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintaining accurate patient, billing, and operational records;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>reviewing and validating information before relying on it;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>configuring workflows, templates, roles, and permissions appropriately;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>training Authorized Users;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintaining backup workflows and continuity plans;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>complying with medical record retention requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>responding to patient requests relating to care or medical records;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>ensuring that third-party integrations are appropriate and authorized; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>using the Services in accordance with documentation and applicable agreements.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE is not responsible for errors, omissions, delays, claims, losses, or liabilities arising from Customer&rsquo;s data entry, configuration, misuse, unauthorized access, failure to maintain proper workflows, or failure to comply with applicable laws or professional obligations.
                    </p>
                  </motion.section>

                  {/* Section 21 */}
                  <motion.section
                    id="acceptable-use"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">21. Acceptable Use</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">You must not use the Services to:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>violate any law, regulation, professional rule, or third-party right;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access, use, disclose, or process data without authorization;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>provide false, misleading, fraudulent, or unlawful information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>impersonate another person or misrepresent your authority;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>interfere with or disrupt the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>attempt to gain unauthorized access to any system, account, or data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>upload viruses, malware, or harmful code;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>reverse engineer, decompile, disassemble, copy, scrape, or misuse the Services except as permitted by law;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>bypass security, access controls, or usage limits;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>use the Services to build a competing product or service;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>use automated tools to access the Services without permission;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>use the Services for emergency dispatch or life-critical functions unless expressly agreed in writing; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>use the Services in any way that may harm patients, users, MYCURE, Customers, or third parties.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      We may suspend or restrict access if we reasonably believe these Terms have been violated or if continued access creates legal, security, operational, or patient-safety risk.
                    </p>
                  </motion.section>

                  {/* Section 22 */}
                  <motion.section
                    id="third-party"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">22. Third-Party Services and Integrations</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The Services may integrate with or allow access to third-party services, such as cloud hosting providers, SMS gateways, email services, payment processors, laboratories, imaging centers, pharmacies, HMOs, analytics tools, support tools, or other systems.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Third-party services may be subject to their own terms, policies, fees, availability, security practices, and data practices.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE is not responsible for third-party services except to the extent expressly stated in a separate written agreement. Customer is responsible for authorizing third-party integrations and ensuring that such integrations are appropriate for its use case and lawful under applicable requirements.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE may use subprocessors and service providers to provide, secure, and support the Services, subject to applicable confidentiality, security, and data protection obligations. A current list is available in our{" "}
                      <Link href="/subprocessors" className="text-primary hover:underline">Subprocessor List</Link>.
                    </p>
                  </motion.section>

                  {/* Section 23 */}
                  <motion.section
                    id="fees-billing"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">23. Fees, Billing, and Taxes</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Fees, billing terms, subscription plans, modules, payment schedules, and other commercial terms will be set out in the applicable Order Form, invoice, subscription page, proposal, or written agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">Unless otherwise stated in writing:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>fees are due as stated in the applicable invoice or order;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>fees are non-refundable;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>subscriptions renew according to the applicable plan or order;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer is responsible for applicable taxes, duties, and government charges;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>MYCURE may change pricing with reasonable notice;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>failure to pay fees when due may result in suspension or termination; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer remains responsible for fees incurred before suspension, cancellation, or termination.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      If payment is overdue, MYCURE may suspend access after reasonable notice. Where appropriate for healthcare continuity, MYCURE may provide limited access, export capability, or transition assistance for a reasonable period, subject to payment status, security, legal requirements, and applicable agreement.
                    </p>
                  </motion.section>

                  {/* Section 24 */}
                  <motion.section
                    id="suspension"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">24. Suspension</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">MYCURE may suspend or restrict access to the Services if:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>fees are overdue;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer or any user violates these Terms;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>continued use creates a security, legal, operational, or patient-safety risk;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>MYCURE is required to do so by law or government order;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer&rsquo;s use may harm MYCURE, other customers, patients, users, or third parties;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer&rsquo;s use exceeds agreed limits; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>a third-party service necessary for the Services becomes unavailable or restricted.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Where reasonably practicable, MYCURE will provide notice before suspension. However, we may suspend access immediately where necessary to address urgent security, legal, operational, or patient-safety risks.
                    </p>
                  </motion.section>

                  {/* Section 25 */}
                  <motion.section
                    id="termination"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">25. Termination</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Customer may stop using the Services or terminate its subscription according to the applicable Order Form, plan, or written agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">MYCURE may terminate these Terms or Customer&rsquo;s access to the Services if:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer materially breaches these Terms and does not cure the breach within a reasonable period after notice;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer fails to pay fees when due;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer becomes insolvent or ceases business operations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>continued service is prohibited by law;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer uses the Services in a way that creates material legal, security, operational, or patient-safety risk; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>MYCURE discontinues the Services or relevant part of the Services.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Upon termination, Customer&rsquo;s right to access and use the Services will end, except for any limited access MYCURE may provide for data export, transition, legal compliance, or other agreed purposes.
                    </p>
                  </motion.section>

                  {/* Section 26 */}
                  <motion.section
                    id="data-export"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">26. Data Export and Post-Termination Access</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Following termination or expiration of a paid subscription, MYCURE will make Customer Data available for export for thirty (30) days, unless a different period is stated in an applicable Order Form or written agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      After the export period, MYCURE may delete, archive, anonymize, or retain Customer Data in accordance with our Privacy Policy, backup practices, legal obligations, and applicable agreements.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customer is responsible for exporting Customer Data before the end of the export period and for maintaining records required by applicable healthcare, tax, corporate, or professional obligations.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE is not responsible for Customer&rsquo;s failure to export data during the applicable export period.
                    </p>
                  </motion.section>

                  {/* Section 27 */}
                  <motion.section
                    id="intellectual-property"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">27. Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE and its licensors own all rights, title, and interest in and to the Services, including software, technology, designs, workflows, templates, features, interfaces, documentation, trademarks, logos, and other intellectual property.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Subject to these Terms and payment of applicable fees, MYCURE grants Customer a limited, non-exclusive, non-transferable, revocable right to access and use the Services for Customer&rsquo;s internal healthcare operations.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      No rights are granted except as expressly stated in these Terms or applicable written agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customer must not copy, modify, distribute, sell, lease, sublicense, reverse engineer, or create derivative works from the Services except as expressly permitted by MYCURE in writing or by applicable law.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      If Customer provides feedback, suggestions, ideas, or recommendations regarding the Services, MYCURE may use them without restriction or compensation, provided we do not disclose Customer&rsquo;s confidential information in doing so.
                    </p>
                  </motion.section>

                  {/* Section 28 */}
                  <motion.section
                    id="customer-content"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">28. Customer Content and Responsibility for Inputs</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Customer is responsible for all data, records, files, forms, templates, messages, images, documents, and other content submitted to or generated through the Services by Customer or its users.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customer represents that it has the rights, permissions, consents, and legal basis necessary to submit, process, and use such content through the Services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE is not responsible for the accuracy, completeness, legality, appropriateness, or clinical validity of Customer Data or Customer-provided content.
                    </p>
                  </motion.section>

                  {/* Section 29 */}
                  <motion.section
                    id="confidentiality"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">29. Confidentiality</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Each party may receive confidential or proprietary information from the other party.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Confidential information includes non-public business, technical, financial, operational, product, security, and customer information, as well as patient and clinical data.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Each party agrees to protect the other party&rsquo;s confidential information using reasonable care and to use it only for purposes of performing under these Terms or applicable written agreements.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Confidentiality obligations do not apply to information that is publicly available without breach, independently developed, lawfully received from a third party, or required to be disclosed by law, provided that the receiving party gives notice where legally permitted.
                    </p>
                  </motion.section>

                  {/* Section 30 */}
                  <motion.section
                    id="beta-features"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">30. Beta, Pilot, or Trial Features</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE may offer beta, pilot, preview, trial, experimental, or early-access features.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Such features may be incomplete, unstable, limited, or changed at any time. They are provided for evaluation unless otherwise stated in writing.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE may suspend or discontinue beta, pilot, preview, trial, experimental, or early-access features at any time.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Unless expressly stated in writing, such features are provided &ldquo;as is&rdquo; and without service level commitments, warranties, or indemnities.
                    </p>
                  </motion.section>

                  {/* Section 31 */}
                  <motion.section
                    id="disclaimers"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">31. Disclaimers</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To the maximum extent permitted by law, the Services are provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo;
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE disclaims all warranties, whether express, implied, statutory, or otherwise, including warranties of merchantability, fitness for a particular purpose, title, non-infringement, accuracy, availability, security, and uninterrupted operation.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">MYCURE does not warrant that:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>the Services will be uninterrupted, error-free, secure, or available at all times;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>all defects or errors will be corrected;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>the Services will meet every Customer requirement;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>the Services will comply with every law or regulation applicable to Customer;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>data will never be lost, corrupted, accessed without authorization, or delayed;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>clinical, billing, reporting, AI-assisted, or analytics outputs will be accurate or complete; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>use of the Services will produce any particular clinical, financial, regulatory, operational, or business result.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Nothing in these Terms limits rights or warranties that cannot be excluded under applicable law.
                    </p>
                  </motion.section>

                  {/* Section 32 */}
                  <motion.section
                    id="limitation-liability"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">32. Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To the maximum extent permitted by law, MYCURE will not be liable for any indirect, incidental, special, consequential, exemplary, punitive, or similar damages, or for any loss of profits, revenues, business opportunities, goodwill, data, use, or anticipated savings, whether based on contract, tort, negligence, strict liability, or any other legal theory.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      To the maximum extent permitted by law, MYCURE&rsquo;s total aggregate liability arising out of or relating to the Services or these Terms will not exceed the fees paid by the Customer to MYCURE for the Services giving rise to the claim during the three (3) months immediately preceding the event giving rise to liability.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      The limitations in this section apply even if a remedy fails of its essential purpose.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law, including liability for fraud, willful misconduct, or death or personal injury caused by negligence where such limitation is prohibited by law.
                    </p>
                  </motion.section>

                  {/* Section 33 */}
                  <motion.section
                    id="indemnification"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">33. Indemnification</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Customer agrees to defend, indemnify, and hold harmless MYCURE, its affiliates, officers, directors, employees, contractors, agents, and licensors from and against any claims, damages, losses, liabilities, penalties, costs, and expenses, including reasonable attorneys&rsquo; fees, arising out of or relating to:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer&rsquo;s or its users&rsquo; use of the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer Data or Customer-provided content;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer&rsquo;s breach of these Terms or applicable written agreement;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Customer&rsquo;s violation of law, regulation, professional obligation, or third-party right;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>clinical, diagnostic, treatment, billing, prescribing, referral, reporting, or patient-care decisions made by Customer or its users;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>unauthorized access caused by Customer&rsquo;s failure to manage credentials, permissions, devices, or security practices;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>disputes between Customer and its patients, staff, providers, payors, employers, partners, or regulators; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>third-party integrations authorized by Customer.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE reserves the right to control the defense of any matter subject to indemnification, at Customer&rsquo;s expense, and Customer agrees to cooperate with MYCURE&rsquo;s defense.
                    </p>
                  </motion.section>

                  {/* Section 34 */}
                  <motion.section
                    id="ip-claims"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">34. Intellectual Property Claims</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      If the Services become, or in MYCURE&rsquo;s opinion are likely to become, subject to a third-party intellectual property infringement claim, MYCURE may, at its option:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>obtain the right for Customer to continue using the affected Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>modify the Services so they are no longer allegedly infringing;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>replace the affected Services with substantially similar functionality; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>terminate the affected Services and provide any refund required under an applicable written agreement.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE will have no obligation for claims arising from Customer Data, Customer instructions, Customer modifications, unauthorized use, use of the Services in combination with non-MYCURE products or services, or use after MYCURE provides notice to stop.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      This section states MYCURE&rsquo;s sole obligation and Customer&rsquo;s exclusive remedy for intellectual property infringement claims.
                    </p>
                  </motion.section>

                  {/* Section 35 */}
                  <motion.section
                    id="changes"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">35. Changes to the Services or Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE may update the Services and these Terms from time to time.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      If we make material changes to these Terms, we will provide reasonable notice, such as by posting an updated version on our website, sending email notice, or providing in-platform notice.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Changes will take effect on the date stated in the updated Terms. Continued use of the Services after the effective date means you accept the updated Terms.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      If a Customer does not agree to material changes, its remedy is to stop using the Services or terminate according to the applicable agreement.
                    </p>
                  </motion.section>

                  {/* Section 36 */}
                  <motion.section
                    id="force-majeure"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">36. Force Majeure</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Neither party will be liable for delay or failure to perform caused by events beyond its reasonable control, including natural disasters, acts of God, war, terrorism, civil unrest, labor disputes, government action, power failures, internet or telecommunications failures, cyberattacks, epidemics, pandemics, cloud provider failures, third-party service failures, or other events beyond reasonable control.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      This section does not excuse payment obligations for Services already provided.
                    </p>
                  </motion.section>

                  {/* Section 37 */}
                  <motion.section
                    id="assignment"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">37. Assignment</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Customer may not assign or transfer these Terms or its rights or obligations under these Terms without MYCURE&rsquo;s prior written consent.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE may assign or transfer these Terms in connection with a merger, acquisition, corporate reorganization, sale of assets, change of control, or by operation of law.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Any attempted assignment in violation of this section is void.
                    </p>
                  </motion.section>

                  {/* Section 38 */}
                  <motion.section
                    id="severability"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">38. Severability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If any provision of these Terms is found to be invalid, illegal, or unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, or if modification is not possible, severed from these Terms.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      The remaining provisions will remain in full force and effect.
                    </p>
                  </motion.section>

                  {/* Section 39 */}
                  <motion.section
                    id="no-waiver"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">39. No Waiver</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Failure by either party to enforce any provision of these Terms will not be considered a waiver of that provision or any other provision.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Any waiver must be in writing and signed by the party granting the waiver.
                    </p>
                  </motion.section>

                  {/* Section 40 */}
                  <motion.section
                    id="entire-agreement"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">40. Entire Agreement</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms, together with the Privacy Policy, applicable Order Forms, written agreements, and addenda incorporated by reference, constitute the entire agreement between MYCURE and Customer regarding the Services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      They supersede all prior or contemporaneous discussions, proposals, representations, or agreements regarding the Services, unless otherwise stated in a signed written agreement.
                    </p>
                  </motion.section>

                  {/* Section 41 */}
                  <motion.section
                    id="governing-law"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">41. Governing Law and Dispute Resolution</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms are governed by the laws of the Republic of the Philippines, without regard to conflict of law rules.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Unless otherwise stated in a signed written agreement, any dispute arising out of or relating to these Terms or the Services will be resolved exclusively in the proper courts of Quezon City, Philippines.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Nothing in these Terms limits rights that cannot be waived under applicable law, including mandatory rights of consumers, patients, or data subjects where applicable.
                    </p>
                  </motion.section>

                  {/* Section 42 */}
                  <motion.section
                    id="notices"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">42. Notices</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE may provide notices by email, in-platform notification, website posting, or other reasonable means.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customer is responsible for keeping its account and billing contact information current.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Legal notices to MYCURE must be sent to the contact information below, unless another notice address is stated in a signed written agreement.
                    </p>
                  </motion.section>

                  {/* Section 43 */}
                  <motion.section
                    id="contact"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">43. Contact Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      For questions about these Terms, please contact:
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

                  {/* Section 44 */}
                  <motion.section
                    id="acknowledgment"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">44. Acknowledgment</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing or using the Services, you acknowledge that you have read, understood, and agree to these Terms.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      If you do not agree to these Terms, you must not access or use the Services.
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
