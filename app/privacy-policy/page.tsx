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
    { id: "introduction", title: "1. Introduction" },
    { id: "information-we-collect", title: "2. Information We Collect" },
    { id: "lawful-basis", title: "3. Lawful Basis for Processing" },
    { id: "how-we-use", title: "4. How We Use Information" },
    { id: "sharing-disclosure", title: "5. Sharing and Disclosure" },
    { id: "data-retention", title: "6. Data Retention" },
    { id: "data-security", title: "7. Data Security" },
    { id: "user-rights", title: "8. User Rights" },
    { id: "childrens-privacy", title: "9. Children's Privacy" },
    { id: "international-transfers", title: "10. International Data Transfers" },
    { id: "breach-notification", title: "11. Data Breach Notification" },
    { id: "policy-changes", title: "12. Changes to This Policy" },
    { id: "limitations", title: "13. Limitations" },
    { id: "anonymized-analytics", title: "14. Anonymized Analytics and Machine Learning" },
    { id: "contact", title: "15. Contact Information" },
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
                Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Effective Date: June 08, 2026
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">
                Operated by TOPSI Inc. (&ldquo;MYCURE,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;)
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

                  {/* Section 1: Introduction */}
                  <motion.section
                    id="introduction"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">1. Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      This Privacy Policy explains how MYCURE, operated by TOPSI Inc., collects, uses, discloses, and safeguards personal data. We seek to handle personal data in compliance with the Philippine Data Privacy Act of 2012 (DPA) and its Implementing Rules and Regulations, and, where applicable, in alignment with the EU/UK General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      For patient and clinical data entered by healthcare providers, the provider or clinic acts as the controller / personal information controller and MYCURE acts as processor / personal information processor on their documented instructions. By using our Services you acknowledge the practices described in this Policy; where the law requires consent, we will obtain it separately.
                    </p>
                  </motion.section>

                  {/* Section 2: Information We Collect */}
                  <motion.section
                    id="information-we-collect"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">2. Information We Collect</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We may collect the following categories of personal information:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Personal Identification Data</strong> – name, address, email, phone number, date of birth.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Medical and Health Data</strong> – health records, medical history, prescriptions, treatment details (when required for service delivery).</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Account Information</strong> – login credentials, user preferences.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Financial Information</strong> – billing details, payment method, and transaction records.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Usage Information</strong> – IP address, device identifiers, browsing activity within our platforms.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Other Information</strong> – any additional data you voluntarily provide.</span>
                      </li>
                    </ul>
                  </motion.section>

                  {/* Section 3: Lawful Basis for Processing */}
                  <motion.section
                    id="lawful-basis"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">3. Lawful Basis for Processing</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We process personal data based on the following grounds:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Performance of a contract (e.g., delivering services requested).</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Compliance with legal obligations (e.g., healthcare reporting).</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Legitimate interests (e.g., service improvement, fraud prevention).</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Consent (when explicitly required, such as marketing or sensitive data use).</span>
                      </li>
                    </ul>
                  </motion.section>

                  {/* Section 4: How We Use Information */}
                  <motion.section
                    id="how-we-use"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">4. How We Use Information</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We use personal information for:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Delivering healthcare-related services and managing accounts.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Processing payments and transactions.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Improving user experience and platform performance.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Sending updates, notices, or promotional materials (with consent).</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Fulfilling regulatory and compliance requirements.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Preventing fraud, misuse, or unlawful activity.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Creating Anonymized and Aggregated Data for the purposes described in Section 14 (Anonymized Analytics and Machine Learning).</span>
                      </li>
                    </ul>
                  </motion.section>

                  {/* Section 5: Sharing and Disclosure */}
                  <motion.section
                    id="sharing-disclosure"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">5. Sharing and Disclosure</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We do not sell your personal data, and we do not use patient health data for third-party advertising. Data may be shared only with:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Healthcare Providers</strong> – doctors, nurses, and clinics as part of patient care.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Service Providers</strong> – billing partners, IT support, and cloud services, under written confidentiality and data-processing agreements.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Regulatory Authorities</strong> – when legally required.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Business Transfers</strong> – mergers, acquisitions, or restructuring, ensuring continued data protection.</span>
                      </li>
                    </ul>
                  </motion.section>

                  {/* Section 6: Data Retention */}
                  <motion.section
                    id="data-retention"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">6. Data Retention</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We retain personal data only as long as necessary for service provision, legal and regulatory compliance, and archival/auditing purposes. When no longer needed, personal data will be securely deleted, or irreversibly anonymized in accordance with the standard described in Section 14.
                    </p>
                  </motion.section>

                  {/* Section 7: Data Security */}
                  <motion.section
                    id="data-security"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">7. Data Security</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We implement administrative, technical, and physical safeguards including:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Encryption of sensitive data in transit and at rest.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Access controls and authentication.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Regular audits and monitoring.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Secure storage and transmission protocols.</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      While we use reasonable measures designed to protect personal data, no system or method of transmission or storage can be guaranteed to be completely secure.
                    </p>
                  </motion.section>

                  {/* Section 8: User Rights */}
                  <motion.section
                    id="user-rights"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">8. User Rights</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Subject to applicable laws, you have the right to:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Access your personal data.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Request correction of inaccurate information.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Request deletion ("right to be forgotten").</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Restrict or object to processing.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Withdraw consent at any time (without affecting prior lawful processing).</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Data portability (when applicable).</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Requests can be submitted via the contact information provided below.
                    </p>
                  </motion.section>

                  {/* Section 9: Children's Privacy */}
                  <motion.section
                    id="childrens-privacy"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">9. Children's Privacy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We do not knowingly collect personal data directly from children below the age required by applicable law. Where children's data is processed in a healthcare context, it is processed on behalf of the treating provider and with the consent of a parent or guardian where required.
                    </p>
                  </motion.section>

                  {/* Section 10: International Data Transfers */}
                  <motion.section
                    id="international-transfers"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">10. International Data Transfers</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If personal data is transferred outside the Philippines, we ensure adequate safeguards (e.g., contractual clauses, equivalent protection laws) to protect your data.
                    </p>
                  </motion.section>

                  {/* Section 11: Data Breach Notification */}
                  <motion.section
                    id="breach-notification"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">11. Data Breach Notification</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      In the event of a personal data breach that requires notification, we will notify affected individuals and the relevant authorities within the timeframes required by applicable law, and provide details on the scope, risks, and mitigation steps.
                    </p>
                  </motion.section>

                  {/* Section 12: Changes to This Policy */}
                  <motion.section
                    id="policy-changes"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">12. Changes to This Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may update this Privacy Policy from time to time. Changes will be notified via email or platform announcements. Continued use of our services after updates constitutes acceptance.
                    </p>
                  </motion.section>

                  {/* Section 13: Limitations */}
                  <motion.section
                    id="limitations"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">13. Limitations</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      This Privacy Policy describes our practices but does not expand our liability or create warranties. Your use of the Services is also governed by our Terms and Conditions, including the disclaimers and limitation of liability set out there, to the maximum extent permitted by applicable law.
                    </p>
                  </motion.section>

                  {/* Section 14: Anonymized Analytics and Machine Learning */}
                  <motion.section
                    id="anonymized-analytics"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">14. Anonymized Analytics and Machine Learning</h2>
                    <ul className="space-y-4 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary font-medium">(a)</span>
                        <span><strong>What we do.</strong> To operate, secure, improve, and develop our Services — including for product improvement, business analytics, statistical analysis, and the development and improvement of machine learning models — we may generate and use Anonymized and Aggregated Data derived from use of the Services.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-medium">(b)</span>
                        <span><strong>No PII — ever, for this purpose.</strong> We do not use personally identifiable information, and we do not use identifiable patient or health records, for these analytics and machine-learning purposes. Data used for this purpose is first aggregated and irreversibly anonymized so that it can no longer be linked to any identified or identifiable individual.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-medium">(c)</span>
                        <span><strong>Anonymization standard and commitment.</strong> "Anonymized and Aggregated Data" means data that has been irreversibly altered such that no individual can be identified, directly or indirectly, by us or by any other party using means reasonably likely to be used — consistent with the ISO/IEC 29100 standard referenced by the Philippine National Privacy Commission. We will not attempt to re-identify Anonymized and Aggregated Data, and we contractually require the same of any party with whom we share it.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-medium">(d)</span>
                        <span><strong>Status of anonymized data.</strong> Once data is irreversibly anonymized, it no longer constitutes personal data under the DPA or GDPR. We nonetheless treat the anonymization process itself as a regulated processing activity and apply appropriate safeguards, documentation, and Privacy Impact Assessment.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-medium">(e)</span>
                        <span><strong>Opt-out.</strong> Even though this data is not personally identifiable, you may opt out of having data associated with your account contribute to these analytics and machine-learning purposes by contacting <a href="mailto:helpdesk@mycure.md" className="text-primary hover:underline">helpdesk@mycure.md</a> or, where available, via your account settings. Opting out does not affect processing necessary to provide the Services to you.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-medium">(f)</span>
                        <span><strong>What we do not do.</strong> We do not sell Anonymized and Aggregated Data, and we do not use it to make decisions that produce legal or similarly significant effects about any individual patient.</span>
                      </li>
                    </ul>
                  </motion.section>

                  {/* Section 15: Contact Information */}
                  <motion.section
                    id="contact"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">15. Contact Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      For questions, concerns, or to exercise your rights, please contact us at{" "}
                      <a href="mailto:helpdesk@mycure.md" className="text-primary hover:underline">
                        helpdesk@mycure.md
                      </a>
                      . You may also contact our Data Protection Officer at{" "}
                      <a href="mailto:dpo@mycure.md" className="text-primary hover:underline">
                        dpo@mycure.md
                      </a>
                      .
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
