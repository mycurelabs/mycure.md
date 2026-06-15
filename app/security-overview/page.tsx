"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DocumentHeader } from "@/components/sections/shared"

export default function SecurityOverviewPage() {
  const [mobileTocOpen, setMobileTocOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "principles", title: "1. Security Principles" },
    { id: "shared-responsibility", title: "2. Shared Responsibility" },
    { id: "data-protection", title: "3. Data Protection" },
    { id: "access-controls", title: "4. Access Controls" },
    { id: "mfa", title: "5. Multi-Factor Authentication and Account Security" },
    { id: "auditability", title: "6. Auditability and Activity Records" },
    { id: "support-access", title: "7. Support Access" },
    { id: "hosting", title: "8. Hosting and Deployment" },
    { id: "backups", title: "9. Backups, Recovery, and Availability" },
    { id: "secure-development", title: "10. Secure Development and Maintenance" },
    { id: "vendors", title: "11. Vendors and Service Providers" },
    { id: "incident-response", title: "12. Incident Response" },
    { id: "compliance-support", title: "13. Privacy and Compliance Support" },
    { id: "clinical-responsibility", title: "14. Patient Data and Clinical Responsibility" },
    { id: "enterprise-requests", title: "15. Enterprise Security Requests" },
    { id: "reporting", title: "16. Reporting Security Concerns" },
  ]

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("reporting")
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
                Security Overview
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                MYCURE is designed to support healthcare organizations that handle sensitive clinic, patient, operational, and administrative data.
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
                      Security is a shared responsibility between MYCURE and each Customer. MYCURE is responsible for providing reasonable safeguards for the platform and services we operate. Customers are responsible for managing their own users, devices, permissions, workflows, and internal compliance obligations.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      This Security Overview summarizes our general approach to security. It is not a complete description of all controls, does not create a service level commitment, and does not replace the MYCURE{" "}
                      <Link href="/terms-and-conditions" className="text-primary hover:underline">Terms of Agreement</Link>,{" "}
                      <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>, Data Processing Addendum, Business Associate Agreement, Service Level Agreement, or other written agreement, where applicable.
                    </p>
                  </motion.div>

                  {/* Section 1 */}
                  <motion.section
                    id="principles"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">1. Security Principles</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">MYCURE&rsquo;s security approach is guided by the following principles:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>protect patient and clinic data;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>limit access based on role and need;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>support auditability and accountability;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>reduce operational and privacy risks;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>apply safeguards appropriate to healthcare workflows;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>support Customer compliance obligations where applicable;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintain reasonable technical, administrative, and organizational controls; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>continuously improve security practices as the platform evolves.</span></li>
                    </ul>
                  </motion.section>

                  {/* Section 2 */}
                  <motion.section
                    id="shared-responsibility"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">2. Shared Responsibility</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE provides security controls designed to protect the Services. However, security also depends on how each Customer configures and uses the platform.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">MYCURE is generally responsible for:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>platform-level security controls;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>infrastructure and application safeguards for MYCURE-hosted services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access controls for MYCURE personnel;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>system monitoring and maintenance;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security updates and improvements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>reasonable backup and recovery practices;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>support access controls;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>incident response procedures; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>vendor and service provider safeguards.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">Customers are generally responsible for:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>assigning proper user roles and permissions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>removing access for former staff or unauthorized users;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>protecting passwords and login credentials;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>enabling multi-factor authentication where available;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>securing devices, browsers, networks, and endpoints used to access MYCURE;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>training staff on privacy, security, and proper system use;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>reviewing audit logs or access activity where available;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>configuring workflows, templates, and patient access appropriately;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>obtaining required patient consents and authorizations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>complying with medical recordkeeping and healthcare regulations; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintaining backup clinical workflows where appropriate.</span></li>
                    </ul>
                  </motion.section>

                  {/* Section 3 */}
                  <motion.section
                    id="data-protection"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">3. Data Protection</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE applies reasonable safeguards designed to protect personal data, patient data, and clinic information processed through the Services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">Depending on the deployment model and enabled services, safeguards may include:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>encryption for data in transit;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>encryption or equivalent safeguards for stored sensitive data where appropriate;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>role-based access controls;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>user authentication;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>audit logs or activity records;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>secure backup practices;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access monitoring;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>secure configuration practices;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>administrative access controls; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>internal policies governing employee and support access.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      No system, software, network, or storage method can be guaranteed to be completely secure. MYCURE continuously works to improve its safeguards, but Customers should maintain their own operational, technical, and compliance controls.
                    </p>
                  </motion.section>

                  {/* Section 4 */}
                  <motion.section
                    id="access-controls"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">4. Access Controls</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE supports access controls intended to help Customers manage who may access information within the platform.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">Depending on the Customer&rsquo;s configuration and enabled modules, access controls may include:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>user accounts;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>role-based permissions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>administrator controls;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>account-level settings;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>staff access management;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>authentication requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>session controls;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>activity tracking; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access restrictions by function or module.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customers are responsible for assigning appropriate roles and permissions and for promptly disabling access when a user is no longer authorized.
                    </p>
                  </motion.section>

                  {/* Section 5 */}
                  <motion.section
                    id="mfa"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">5. Multi-Factor Authentication and Account Security</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Where available, Customers should enable and use multi-factor authentication or similar security features.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">Customers and users are responsible for:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>keeping login credentials confidential;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>using strong and unique passwords;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>not sharing accounts;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>reporting suspected unauthorized access promptly;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>securing devices used to access the Services;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>reviewing user access regularly; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>following Customer internal security policies.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE may suspend or restrict accounts where we detect or reasonably suspect unauthorized access, credential compromise, abuse, or security risk.
                    </p>
                  </motion.section>

                  {/* Section 6 */}
                  <motion.section
                    id="auditability"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">6. Auditability and Activity Records</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE is designed to support accountability in healthcare workflows.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">Depending on the enabled modules and configuration, the Services may record activity such as:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>user access;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>changes to records;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>login activity;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>administrative actions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>system events;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>support activity; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other relevant operational events.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Auditability features are intended to support Customer oversight, investigation, security monitoring, and compliance workflows. Customers remain responsible for reviewing and using available logs appropriately.
                    </p>
                  </motion.section>

                  {/* Section 7 */}
                  <motion.section
                    id="support-access"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">7. Support Access</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE support personnel may access Customer accounts or Customer Data only where reasonably necessary to provide, maintain, secure, troubleshoot, improve, or support the Services; investigate suspected abuse, security issues, or technical problems; comply with law; or perform obligations under an applicable agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Support access is intended to be limited to authorized personnel and appropriate purposes.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customers should avoid sending unnecessary patient data through unsecured support channels. Where support requires review of specific records or screenshots, Customers should share only what is reasonably necessary for the support request.
                    </p>
                  </motion.section>

                  {/* Section 8 */}
                  <motion.section
                    id="hosting"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">8. Hosting and Deployment</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE may support different deployment models depending on the Customer&rsquo;s plan and written agreement, including MYCURE-hosted cloud services, private cloud arrangements, client-hosted environments, or other deployment models.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      For MYCURE-hosted services, MYCURE is generally responsible for platform-level hosting safeguards within the scope of the services we operate.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      For client-hosted, private cloud, or customer-managed deployments, responsibility for infrastructure, network, environment security, backup configuration, and operational controls may be shared or assigned differently under the applicable Order Form, Statement of Work, Service Level Agreement, or Security Addendum.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customers should confirm the applicable deployment model and responsibility allocation before using the Services for regulated workloads.
                    </p>
                  </motion.section>

                  {/* Section 9 */}
                  <motion.section
                    id="backups"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">9. Backups, Recovery, and Availability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE maintains reasonable backup and recovery practices for MYCURE-hosted services, subject to the applicable plan, deployment model, and written agreement.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Backups are intended to support service continuity and recovery from operational issues. They are not a substitute for Customer recordkeeping, export, compliance, or business continuity obligations.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Unless expressly stated in a Service Level Agreement or other written agreement, MYCURE does not guarantee any specific uptime, recovery time objective, recovery point objective, backup retention period, or service availability level.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customers should maintain appropriate downtime procedures, emergency workflows, and backup clinical processes.
                    </p>
                  </motion.section>

                  {/* Section 10 */}
                  <motion.section
                    id="secure-development"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">10. Secure Development and Maintenance</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE works to maintain and improve the security of its software and services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">Our development and maintenance practices may include:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>code review;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>testing;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access control for development systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>issue tracking;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>vulnerability review;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>dependency updates;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>change management;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>monitoring of production systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patching and maintenance; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>continuous improvement of security practices.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Security practices may evolve as the Services, technology, regulatory expectations, and Customer needs change.
                    </p>
                  </motion.section>

                  {/* Section 11 */}
                  <motion.section
                    id="vendors"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">11. Vendors and Service Providers</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE may use trusted vendors, service providers, and subprocessors to provide, host, secure, support, monitor, and improve the Services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">These may include providers for:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>cloud hosting and infrastructure;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>data storage and backups;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>email and SMS communications;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>payment processing;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security monitoring;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>analytics and performance monitoring;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>support tools;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>implementation services; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other operational needs.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE requires service providers that process personal data on our behalf to apply appropriate confidentiality, security, and data protection obligations.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      A public subprocessor list may be made available separately and updated from time to time. See our{" "}
                      <Link href="/subprocessors" className="text-primary hover:underline">Subprocessor List</Link>.
                    </p>
                  </motion.section>

                  {/* Section 12 */}
                  <motion.section
                    id="incident-response"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">12. Incident Response</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE maintains processes designed to identify, investigate, respond to, and mitigate security incidents.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      If MYCURE becomes aware of a security incident involving Customer Data that requires notification under applicable law or agreement, MYCURE will notify affected Customers without undue delay and in accordance with applicable legal or contractual requirements.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customers may have their own obligations to notify patients, regulators, payors, partners, or other third parties depending on applicable law and the nature of the incident.
                    </p>
                  </motion.section>

                  {/* Section 13 */}
                  <motion.section
                    id="compliance-support"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">13. Privacy and Compliance Support</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE is designed to support healthcare organizations in operating secure and compliant clinic workflows. However, privacy, healthcare, consumer protection, medical record, telehealth, and technology laws vary by jurisdiction and by use case.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Customers are responsible for determining whether their use of the Services complies with laws and regulations applicable to their organization, personnel, patients, and location.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Where specific legal frameworks require additional contractual terms, such as a Data Processing Addendum or Business Associate Agreement, those terms must be separately agreed in writing before the Services are used for that regulated purpose.
                    </p>
                  </motion.section>

                  {/* Section 14 */}
                  <motion.section
                    id="clinical-responsibility"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">14. Patient Data and Clinical Responsibility</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MYCURE provides software tools. MYCURE is not a healthcare provider and does not make clinical decisions.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">Customers and their licensed healthcare professionals are responsible for:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>clinical judgment;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient care;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>medical documentation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>treatment decisions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>prescriptions and orders;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient communications;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>medical record retention;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>consent and authorization;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>regulatory reporting; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>professional compliance.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      MYCURE&rsquo;s security controls are intended to support the platform, but they do not replace Customer clinical, operational, legal, or professional responsibilities.
                    </p>
                  </motion.section>

                  {/* Section 15 */}
                  <motion.section
                    id="enterprise-requests"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">15. Enterprise Security Requests</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Enterprise Customers may request additional security documentation as part of procurement, contracting, or compliance review.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">Depending on the nature of the request and applicable commercial terms, MYCURE may provide:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security questionnaires;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>data protection documentation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>deployment responsibility summaries;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>subprocessor information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>incident response summaries;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>service level terms;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security addenda;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>business associate agreements, where applicable; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other documentation reasonably appropriate for the engagement.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Some security details may be confidential and may require a nondisclosure agreement before disclosure.
                    </p>
                  </motion.section>

                  {/* Section 16 */}
                  <motion.section
                    id="reporting"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">16. Reporting Security Concerns</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you believe you have identified a security issue involving MYCURE, please contact us promptly.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Security and Support Contact<br />
                      Email:{" "}
                      <a href="mailto:support@mycure.md" className="text-primary hover:underline">support@mycure.md</a>
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      For privacy-related matters, please contact:
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Data Protection Officer<br />
                      Email:{" "}
                      <a href="mailto:dpo@mycure.md" className="text-primary hover:underline">dpo@mycure.md</a>
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Please do not include unnecessary patient data, passwords, credentials, or sensitive screenshots in unsecured communications.
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
