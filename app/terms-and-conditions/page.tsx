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
    { id: "compliance", title: "13. Healthcare Compliance and Data Protection Roles" },
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
                Terms and Conditions
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                Please read these Terms and Conditions carefully before using our services.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Effective Date: June 08, 2026
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">
                Operated by TOPSI Inc. (&ldquo;MYCURE,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
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
                  
                  {/* Section 1: Acceptance of Terms */}
                  <motion.section 
                    id="acceptance" 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing, browsing, or using the MYCURE platform ("Services"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to all the terms and conditions, you must not use the Services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      These Terms constitute a legally binding agreement between you (or the entity you represent) and MYCURE, operated by TOPSI Inc.
                    </p>
                  </motion.section>

                  {/* Section 2: Eligibility */}
                  <motion.section 
                    id="eligibility" 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">2. Eligibility</h2>
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
                  </motion.section>

                  {/* Section 3: Account Registration */}
                  <motion.section 
                    id="account" 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">3. Account Registration</h2>
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
                  </motion.section>

                  {/* Section 4: Services Provided */}
                  <motion.section 
                    id="services" 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">4. Services Provided</h2>
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
                      Services may vary based on your subscription plan and region. The Services are software tools intended to support, not replace, the professional judgment of licensed healthcare providers.
                    </p>
                  </motion.section>

                  {/* Section 5: Use Restrictions */}
                  <motion.section 
                    id="use-restrictions" 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">5. Use Restrictions</h2>
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
                  </motion.section>

                  {/* Section 6: Payment and Billing */}
                  <motion.section 
                    id="payment" 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">6. Payment and Billing</h2>
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
                  </motion.section>

                  {/* Section 7: Refunds and Cancellations */}
                  <motion.section 
                    id="refunds" 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">7. Refunds and Cancellations</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of the current billing period. No refunds are provided for partial months or unused services. We may offer refunds at our sole discretion for exceptional circumstances.
                    </p>
                  </motion.section>

                  {/* Section 8: Intellectual Property */}
                  <motion.section 
                    id="intellectual-property" 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">8. Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All intellectual property rights in the Services, including software, content, features, and functionality, are owned by MYCURE or its licensors. You are granted a limited, non-exclusive, non-transferable license to use the Services in accordance with these Terms.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      You retain all ownership of the data you and your authorized users input into the Services ("Customer Data"). You grant MYCURE a limited, worldwide, royalty-free license to host, process, transmit, and store Customer Data solely to provide and support the Services, and to create Anonymized and Aggregated Data as described in Section 13 and in our Privacy Policy.
                    </p>
                  </motion.section>

                  {/* Section 9: Confidentiality */}
                  <motion.section 
                    id="confidentiality" 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">9. Confidentiality</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the use of Services. This includes but is not limited to technical data, business strategies, and patient information.
                    </p>
                  </motion.section>

                  {/* Section 10: Disclaimers */}
                  <motion.section 
                    id="disclaimers" className="mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">10. Disclaimers</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. We do not warrant that the Services will be uninterrupted, timely, secure, error-free, or free of viruses or other harmful components, and we do not guarantee any specific result, uptime, or level of availability except as may be expressly set out in a separate written service-level agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      The Services do not provide medical advice and MYCURE is not a healthcare provider. All clinical, diagnostic, and treatment decisions are the sole responsibility of the licensed healthcare professionals using the Services, who must exercise their own independent professional judgment. We are not responsible or liable for any medical decision, act, or omission made in reliance on the Services.
                    </p>
                  </motion.section>

                  {/* Section 11: Limitation of Liability */}
                  <motion.section 
                    id="limitation" className="mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">11. Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, MYCURE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES. OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THE SERVICES OR THESE TERMS SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICES IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law, including liability for death or personal injury caused by negligence, for fraud, or for willful misconduct.
                    </p>
                  </motion.section>

                  {/* Section 12: Indemnification */}
                  <motion.section 
                    id="indemnification" className="mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">12. Indemnification</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You agree to indemnify, defend, and hold harmless MYCURE, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.
                    </p>
                  </motion.section>

                  {/* Section 13: Healthcare Compliance */}
                  <motion.section 
                    id="compliance" className="mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">13. Healthcare Compliance and Data Protection Roles</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You acknowledge that the use of the Services in healthcare settings is subject to laws and regulations that may include the Philippine Data Privacy Act of 2012 (Republic Act No. 10173) and its Implementing Rules and Regulations, and, where applicable to you, the EU/UK GDPR and other local healthcare and privacy laws.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      As between the parties, you (the healthcare provider, clinic, or organization) are the data controller / personal information controller for patient and clinical data, and MYCURE acts as your data processor / personal information processor, processing such data only on your documented instructions and as described in our Privacy Policy. You are responsible for establishing a lawful basis for your processing and for obtaining any patient consents required by law.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      We will implement reasonable and appropriate organizational, physical, and technical safeguards designed to protect personal and health data consistent with the Data Privacy Act and prevailing industry standards.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Where you are subject to the US Health Insurance Portability and Accountability Act (HIPAA), we will, upon request and where commercially reasonable, enter into a Business Associate Agreement; absent a signed Business Associate Agreement, the Services are not represented as HIPAA-compliant for your particular use.
                    </p>
                  </motion.section>

                  {/* Section 14: Third-Party Services */}
                  <motion.section 
                    id="third-party" className="mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">14. Third-Party Services</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The Services may integrate with or link to third-party services. We are not responsible for the content, accuracy, or practices of third-party services. Your use of third-party services is governed by their respective terms and policies.
                    </p>
                  </motion.section>

                  {/* Section 15: Modifications to Service */}
                  <motion.section 
                    id="modifications" className="mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">15. Modifications to Service</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We reserve the right to modify, suspend, or discontinue any part of the Services at any time. We will provide reasonable notice for significant changes that materially affect your use of the Services.
                    </p>
                  </motion.section>

                  {/* Section 16: Termination */}
                  <motion.section 
                    id="termination" className="mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">16. Termination</h2>
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
                  </motion.section>

                  {/* Section 17: Data Security and Privacy */}
                  <motion.section 
                    id="data-security" className="mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">17. Data Security and Privacy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Your use of the Services is also governed by our Privacy Policy. We implement industry-standard security measures designed to protect your data; however, no method of transmission or storage is completely secure, and we cannot and do not guarantee absolute security. You are responsible for maintaining the confidentiality and security of your account credentials.
                    </p>
                  </motion.section>

                  {/* Section 18: Force Majeure */}
                  <motion.section 
                    id="force-majeure" className="mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">18. Force Majeure</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Neither party shall be liable for any delay or failure to perform due to causes beyond their reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.
                    </p>
                  </motion.section>

                  {/* Section 19: Severability */}
                  <motion.section 
                    id="severability" className="mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">19. Severability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
                    </p>
                  </motion.section>

                  {/* Section 20: Entire Agreement */}
                  <motion.section 
                    id="entire-agreement" className="mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">20. Entire Agreement</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms, together with our Privacy Policy and any other agreements expressly incorporated by reference, constitute the entire agreement between you and MYCURE regarding the use of Services.
                    </p>
                  </motion.section>

                  {/* Section 21: Assignment */}
                  <motion.section 
                    id="assignment" className="mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">21. Assignment</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations under these Terms without restriction.
                    </p>
                  </motion.section>

                  {/* Section 22: Governing Law */}
                  <motion.section 
                    id="governing-law" className="mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">22. Governing Law</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms shall be governed by and construed in accordance with the laws of the Republic of the Philippines, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Quezon City, Philippines. Nothing in this section deprives a consumer or data subject of the protection afforded by the mandatory laws of their country of residence.
                    </p>
                  </motion.section>

                  {/* Section 23: Notices */}
                  <motion.section 
                    id="notices" className="mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">23. Notices</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All notices under these Terms shall be in writing and deemed given when delivered personally, sent by confirmed email, or sent by certified mail, return receipt requested, to the addresses provided during registration or as updated in account settings.
                    </p>
                  </motion.section>

                  {/* Section 24: Contact Information */}
                  <motion.section 
                    id="contact-information" className="mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">24. Contact Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      For questions about these Terms and Conditions, please contact us at:
                    </p>
                    <p className="mt-4">
                      <a href="mailto:helpdesk@mycure.md" className="text-primary hover:underline">
                        helpdesk@mycure.md
                      </a>
                    </p>
                  </motion.section>

                  {/* Section 25: Acknowledgment */}
                  <motion.section 
                    id="acknowledgment" className="mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">25. Acknowledgment</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      BY USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS AND CONDITIONS, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS AND CONDITIONS, YOU ARE NOT AUTHORIZED TO USE THE SERVICES.
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