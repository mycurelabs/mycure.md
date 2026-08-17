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
    { id: "security-principles", title: "1. Security Principles" },
    { id: "shared-responsibility", title: "2. Shared Responsibility" },
    { id: "hosting-and-deployment-models", title: "3. Hosting and Deployment Models" },
    { id: "data-protection", title: "4. Data Protection" },
    { id: "access-control", title: "5. Access Control" },
    { id: "multi-factor-authentication-and-account-security", title: "6. Multi-Factor Authentication and Account Security" },
    { id: "logging-and-auditability", title: "7. Logging and Auditability" },
    { id: "mycure-personnel-and-support-access", title: "8. MYCURE Personnel and Support Access" },
    { id: "backups-recovery-and-business-continuity", title: "9. Backups, Recovery, and Business Continuity" },
    { id: "secure-development-and-maintenance", title: "10. Secure Development and Maintenance" },
    { id: "vulnerability-and-threat-management", title: "11. Vulnerability and Threat Management" },
    { id: "subprocessors-and-service-providers", title: "12. Subprocessors and Service Providers" },
    { id: "artificial-intelligence", title: "13. Artificial Intelligence" },
    { id: "security-incident-response", title: "14. Security Incident Response" },
    { id: "privacy-healthcare-and-regulatory-responsibilities", title: "15. Privacy, Healthcare, and Regulatory Responsibilities" },
    { id: "patient-data-and-clinical-responsibility", title: "16. Patient Data and Clinical Responsibility" },
    { id: "enterprise-security-and-compliance-reviews", title: "17. Enterprise Security and Compliance Reviews" },
    { id: "changes-to-security-measures", title: "18. Changes to Security Measures" },
    { id: "reporting-privacy-or-security-concerns", title: "19. Reporting Privacy or Security Concerns" },
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
                Security Overview
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                MYCURE CMS is designed to support healthcare organizations that handle sensitive clinical, patient, operational, and administrative information.
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
                    <p className="text-muted-foreground leading-relaxed"><strong>Team OPS Inc. dba MYCURE (“MYCURE,” “we,” “us,” or “our”)</strong> maintains security measures appropriate to the services and systems we operate.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Security is a shared responsibility. MYCURE is responsible for safeguards applicable to MYCURE CMS and the systems under our control. Customers remain responsible for users, permissions, devices, networks, workflows, third-party systems, and other environments or activities under their control.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">This Security Overview describes our general security approach. It is not an exhaustive description of every control, configuration, policy, technology, or procedure and does not establish a service-level commitment.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">More specific requirements may be established in an applicable Order Form, service agreement, Data Processing Agreement, Security Agreement, Business Associate Agreement, Service Level Agreement, or other written agreement.</p>
                  </motion.div>

                  <motion.section
                    id="security-principles"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">1. Security Principles</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE's security approach is guided by principles that include:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>protecting Customer Data appropriate to its sensitivity and risk;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>limiting access according to role and operational need;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>supporting accountability and auditability;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintaining appropriate technical, administrative, and organizational safeguards;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>protecting systems and services under MYCURE's control;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>applying security controls appropriate to healthcare workflows;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>supporting Customer security and compliance requirements where applicable; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>adapting security practices as technology, risks, services, and legal requirements evolve.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Security measures are intended to reduce risk. No information system, network, software service, authentication mechanism, or security control can eliminate all security risk.</p>
                  </motion.section>

                  <motion.section
                    id="shared-responsibility"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">2. Shared Responsibility</h2>
                    <p className="text-muted-foreground leading-relaxed">Security of MYCURE CMS depends both on the safeguards maintained by MYCURE and on how Customers deploy, configure, administer, and use the service.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">MYCURE Responsibilities</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">Depending on the applicable deployment model and written agreement, MYCURE is generally responsible for matters under its control, which may include:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>application-level security controls;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>authentication capabilities;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>role and permission functionality;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access controls for MYCURE personnel;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security of MYCURE-operated systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>application maintenance and security updates;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>logging and monitoring appropriate to MYCURE-operated components;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>support-access controls;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security-incident response procedures;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>vulnerability and threat management for systems under MYCURE's control;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>backup and recovery processes for MYCURE-hosted services; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>appropriate safeguards for Subprocessors engaged by MYCURE.</span></li>
                    </ul>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">Customer Responsibilities</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers are generally responsible for matters under their control, including:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>determining who may use MYCURE CMS;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>creating and approving Authorized Users;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>assigning appropriate roles and permissions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>periodically reviewing users and privileges;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>promptly removing access that is no longer required;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>protecting passwords and authentication factors;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>complying with applicable multi-factor authentication requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>securing Customer-controlled email accounts;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>securing Customer-controlled devices, browsers, endpoints, and networks;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>preventing unauthorized account sharing or access;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>securing information exported or downloaded from MYCURE CMS;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>configuring Customer workflows and integrations appropriately;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>training personnel on appropriate privacy and security practices;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintaining appropriate internal security and privacy policies;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>responding to security events within Customer-controlled environments;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintaining appropriate downtime and business-continuity procedures; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>complying with laws and regulatory requirements applicable to the Customer.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">The applicable written agreement may further define or modify this allocation for a particular deployment.</p>
                  </motion.section>

                  <motion.section
                    id="hosting-and-deployment-models"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">3. Hosting and Deployment Models</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE CMS may be deployed using different hosting and infrastructure arrangements.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">MYCURE-Hosted Services</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">For MYCURE-hosted services, MYCURE is responsible for the hosting, platform, application, and related infrastructure safeguards within the scope of the systems and services operated by MYCURE and its authorized Subprocessors.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Specific hosting locations, Subprocessors, backup arrangements, and contractual responsibilities may be described in the applicable Customer agreement and our Subprocessor List.</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3">Client-Hosted and Customer-Managed Environments</h3>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE CMS may also be deployed in infrastructure selected, provided, administered, or controlled by the Customer.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Unless otherwise expressly agreed in writing, the Customer is responsible for the security and administration of its Customer-controlled environment, including as applicable:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>cloud accounts or subscriptions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>servers or compute infrastructure;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>operating systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>container or orchestration infrastructure;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>databases and storage controlled by the Customer;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>networks;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>firewalls;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>network-security configurations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>identity and access controls for the Customer environment;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>encryption or key-management systems controlled by the Customer;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>infrastructure monitoring;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>infrastructure logging;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>backups and recovery for Customer-controlled systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>vulnerability management for Customer-controlled infrastructure;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patching and maintenance of Customer-controlled components; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>physical or environmental security where applicable.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may provide deployment support, application support, troubleshooting, or technical guidance relating to MYCURE CMS.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Unless separately agreed in writing, such activities do not make MYCURE the administrator or operator of the Customer-controlled infrastructure and do not transfer responsibility for that environment to MYCURE.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">The applicable Order Form, Statement of Work, service agreement, Security Agreement, or other written agreement may provide a more specific allocation of responsibilities.</p>
                  </motion.section>

                  <motion.section
                    id="data-protection"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">4. Data Protection</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE applies safeguards designed to protect Customer Data processed through systems under MYCURE's control.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Depending on deployment and applicable functionality, these measures may include:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>encrypted network connections;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>encryption or equivalent safeguards for stored data where applicable;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>authentication controls;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>role-based access controls;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>administrative access restrictions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>audit, application, authentication, or security logging;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security monitoring;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>backup and recovery processes;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>secure configuration practices;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>personnel access controls;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>confidentiality requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security-incident procedures; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>internal security policies and processes.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">The specific technologies and implementation of these safeguards may evolve over time.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may modify, replace, upgrade, reconfigure, or discontinue internal technologies and security components as reasonably necessary to maintain, secure, develop, or improve MYCURE CMS.</p>
                  </motion.section>

                  <motion.section
                    id="access-control"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">5. Access Control</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE CMS provides access-control functionality intended to help Customers restrict access according to organizational roles and operational requirements.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Depending on the applicable configuration and enabled functionality, controls may include:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>individual user accounts;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>role-based permissions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>administrator controls;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>account and organization settings;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>authentication requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>session controls;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>functional or module-level restrictions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>user-access management; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>activity records.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers are responsible for assigning appropriate permissions and promptly removing access when a user is no longer authorized.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">A technical access-control capability does not determine whether a particular person should legally or operationally have access to particular information. That determination remains the Customer's responsibility.</p>
                  </motion.section>

                  <motion.section
                    id="multi-factor-authentication-and-account-security"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">6. Multi-Factor Authentication and Account Security</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE CMS supports multi-factor authentication and may require MFA or other reasonable authentication controls for some or all users, accounts, or functionality.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where MYCURE requires MFA or another security control as a condition of access, Customers and affected users must complete and maintain the applicable security requirement.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers and users are responsible for:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>keeping passwords and authentication factors confidential;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintaining access to required account email addresses;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>not sharing accounts or authentication factors with unauthorized persons;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>protecting account-recovery credentials;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>securing devices used to access MYCURE CMS;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>promptly reporting suspected credential compromise;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>regularly reviewing Authorized Users; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>not disabling, bypassing, or circumventing required security controls.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may restrict, suspend, reset, or revoke access where reasonably necessary to address suspected credential compromise, unauthorized access, misuse, or another material security risk.</p>
                  </motion.section>

                  <motion.section
                    id="logging-and-auditability"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">7. Logging and Auditability</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE CMS maintains logging and activity records appropriate to applicable service components.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Depending on configuration and technical availability, recorded information may include:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>user or account identifiers;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>authentication events;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>date and time information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>source network information where available;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>administrative activity;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>material application activity;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>changes to records;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>system events; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security-related events.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Logging supports purposes such as:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>troubleshooting;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>operational monitoring;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>accountability;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>investigation; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>incident response.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">The availability, granularity, and retention of particular events may vary according to the component, deployment model, technical feasibility, security requirements, and evolution of MYCURE CMS.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE logging is not represented as a complete forensic system capable of detecting every unauthorized action or reconstructing every activity performed through the service.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers should not rely on MYCURE logging as their sole organizational, regulatory, fraud-detection, or personnel-monitoring control.</p>
                  </motion.section>

                  <motion.section
                    id="mycure-personnel-and-support-access"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">8. MYCURE Personnel and Support Access</h2>
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
                    <p className="text-muted-foreground leading-relaxed mt-4">Authorized personnel are subject to applicable access controls and confidentiality obligations.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers should avoid including unnecessary Patient Data, credentials, passwords, authentication factors, or sensitive information in support communications.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where specific Customer Data is reasonably necessary to diagnose or resolve an issue, Customers should provide only the information necessary for that purpose.</p>
                  </motion.section>

                  <motion.section
                    id="backups-recovery-and-business-continuity"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">9. Backups, Recovery, and Business Continuity</h2>
                    <p className="text-muted-foreground leading-relaxed">For MYCURE-hosted services, MYCURE maintains backup, recovery, and business-continuity processes appropriate to the applicable service and risk.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Backup architecture, frequency, retention, technology, and recovery procedures may vary or evolve based on:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>deployment model;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>service architecture;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>technology;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>capacity;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>operational requirements; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>applicable written agreements.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Unless expressly established in a separately executed Service Level Agreement or other written agreement, this Security Overview does not establish:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>a guaranteed recovery-point objective;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>a guaranteed recovery-time objective;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>uninterrupted availability;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>zero data loss;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>a guaranteed backup-retention period; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>a guaranteed restoration time.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">For client-hosted or Customer-managed deployments, backup and recovery responsibilities for Customer-controlled infrastructure remain with the Customer unless expressly assigned otherwise in writing.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers remain responsible for maintaining any independent exports, archives, downtime procedures, or additional records required for their legal, regulatory, clinical, or operational needs.</p>
                  </motion.section>

                  <motion.section
                    id="secure-development-and-maintenance"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">10. Secure Development and Maintenance</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE maintains development and maintenance practices designed to support the security and reliability of MYCURE CMS.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Depending on the system and development activity, these practices may include:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>code review;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>software testing;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access controls for development and production systems;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>issue and defect tracking;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>dependency management;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>vulnerability review;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>change management;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security updates;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>monitoring;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>maintenance; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>separation of development activities from production Customer Data where appropriate.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Production Customer Data is not authorized for use in development tools merely for software-development convenience.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Development and security practices may evolve as MYCURE CMS, technology, risks, and applicable requirements change.</p>
                  </motion.section>

                  <motion.section
                    id="vulnerability-and-threat-management"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">11. Vulnerability and Threat Management</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE maintains processes designed to identify, assess, and respond to material security threats and vulnerabilities affecting systems under MYCURE's control.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Depending on the circumstances, activities may include:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>vulnerability review;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>dependency updates;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security patches;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>configuration changes;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>access restrictions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>monitoring;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>investigation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>mitigation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>remediation; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other appropriate protective measures.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">No vulnerability-management process guarantees that every vulnerability will be identified before exploitation or that every security issue can be eliminated.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">For Customer-controlled environments, Customers remain responsible for vulnerability, patch, configuration, and infrastructure-security management within their control unless otherwise expressly agreed in writing.</p>
                  </motion.section>

                  <motion.section
                    id="subprocessors-and-service-providers"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">12. Subprocessors and Service Providers</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE may engage third-party providers to help provide, operate, secure, maintain, support, or recover MYCURE CMS.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">A provider is considered a Subprocessor of Customer Data only where it processes Customer Data on behalf of MYCURE in connection with the applicable service.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Not every software vendor, corporate service provider, website vendor, or technology used by MYCURE is therefore a Subprocessor of Customer Data.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Current material Subprocessors and processing locations are identified in our:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Subprocessor List</strong><br /><a href="/subprocessors" className="text-primary hover:underline">https://mycure.md/subprocessors</a></p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE requires Subprocessors processing Customer Data on its behalf to be subject to appropriate confidentiality, security, and data-protection obligations based on the nature of the processing and applicable law.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers may also select or control third-party integrations or infrastructure providers. A third party independently selected or controlled by a Customer does not become a MYCURE Subprocessor solely because MYCURE CMS communicates with or operates within that service.</p>
                  </motion.section>

                  <motion.section
                    id="artificial-intelligence"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">13. Artificial Intelligence</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE may introduce AI-assisted, machine-learning, automation, or similar functionality as MYCURE CMS evolves.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">The use of AI functionality does not automatically mean that Customer Data is provided to an external artificial-intelligence provider.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where a third-party AI or large-language-model provider will process Customer Data on MYCURE's behalf, MYCURE will address applicable contractual, Subprocessor, privacy, security, and authorization requirements before or in connection with that processing.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Current material external Subprocessors are identified in our Subprocessor List.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Development or productivity tools that do not receive production Customer Data do not become Subprocessors of Customer Data merely because they are used by MYCURE personnel.</p>
                  </motion.section>

                  <motion.section
                    id="security-incident-response"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">14. Security Incident Response</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE maintains procedures for assessing and responding to identified Security Incidents affecting systems under its control.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Depending on the incident, response activities may include:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>investigation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>containment;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>account or session restriction;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>credential reset;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>preservation of available relevant logs;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>vulnerability remediation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>recovery;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>communication with affected Customers; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other appropriate response measures.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where MYCURE becomes aware of a Security Incident affecting Customer Data, MYCURE will provide notice and cooperation as required by the applicable Customer agreement and applicable law.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers remain responsible for reporting incidents originating from Customer-controlled users, credentials, devices, networks, infrastructure, integrations, or other systems where required under the applicable agreement.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Each party remains responsible for legal or regulatory notification obligations imposed directly upon it.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers should promptly report suspected:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>credential compromise;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>unauthorized MYCURE CMS account access;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>lost or compromised devices with access to MYCURE CMS;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>circumvention of security controls; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other security concerns affecting MYCURE CMS or Customer Data.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Reports should be sent to:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong><a href="mailto:privacy@mycure.md" className="text-primary hover:underline">privacy@mycure.md</a></strong></p>
                  </motion.section>

                  <motion.section
                    id="privacy-healthcare-and-regulatory-responsibilities"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">15. Privacy, Healthcare, and Regulatory Responsibilities</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE CMS provides technology used by healthcare organizations in different jurisdictions and operational settings.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Privacy, healthcare, medical-record, professional, consumer-protection, security, telehealth, and other requirements vary by jurisdiction, Customer, and use case.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers remain responsible for determining the legal and regulatory requirements applicable to their organization and their use of MYCURE CMS.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Depending on the applicable relationship, additional contractual documentation may be required, such as:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Data Processing Agreements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Security Agreements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Business Associate Agreements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Service Level Agreements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>jurisdiction-specific terms;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>deployment-responsibility schedules; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other written agreements.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE does not represent that MYCURE CMS is approved, certified, or legally suitable for every jurisdiction or regulated use merely because the service is technically available there.</p>
                  </motion.section>

                  <motion.section
                    id="patient-data-and-clinical-responsibility"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">16. Patient Data and Clinical Responsibility</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE CMS is an information-technology system.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE is not a healthcare provider merely by providing MYCURE CMS and does not replace the independent professional judgment of licensed healthcare professionals.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Customers and their healthcare professionals remain responsible for matters such as:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>clinical judgment;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>diagnoses;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>treatment decisions;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>prescriptions and orders;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient care;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>accuracy and review of clinical information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>patient communications;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>consent and authorization requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>medical-record obligations;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>regulatory reporting; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>professional compliance.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">Security controls provided by MYCURE support the service but do not transfer those clinical or professional responsibilities to MYCURE.</p>
                  </motion.section>

                  <motion.section
                    id="enterprise-security-and-compliance-reviews"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">17. Enterprise Security and Compliance Reviews</h2>
                    <p className="text-muted-foreground leading-relaxed">Customers may request reasonable security and privacy information in connection with procurement, contracting, risk assessment, or regulatory review.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Depending on the Customer relationship, applicable agreement, sensitivity of the information, and nature of the request, MYCURE may provide or complete materials such as:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security questionnaires;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>privacy and data-processing documentation;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security summaries;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>deployment-responsibility information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Subprocessor information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>incident-response information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>architecture information;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>applicable contractual security terms; and</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>other reasonable documentary information.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">MYCURE may first satisfy routine reviews through existing security documentation, questionnaires, written responses, policy summaries, or other appropriate evidence.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Certain information concerning MYCURE's infrastructure, security architecture, internal procedures, vulnerabilities, personnel, or other confidential systems may be restricted or subject to confidentiality protections.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Nothing in this Security Overview provides a right to penetration testing, vulnerability exploitation, source-code access, destructive testing, unrestricted infrastructure access, or access to information concerning other Customers.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Any audit or more extensive review remains subject to the applicable Customer agreement and applicable law.</p>
                  </motion.section>

                  <motion.section
                    id="changes-to-security-measures"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">18. Changes to Security Measures</h2>
                    <p className="text-muted-foreground leading-relaxed">MYCURE may modify, replace, upgrade, reconfigure, add, or discontinue security technologies, infrastructure components, software, tools, controls, and procedures as MYCURE CMS evolves.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Changes may be made in response to:</p>
                    <ul className="space-y-3 text-muted-foreground mt-4">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>technology developments;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>identified risks;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Service changes;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>operational requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>security requirements;</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>availability requirements; or</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>legal and regulatory developments.</span></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">This Security Overview does not permanently commit MYCURE to a particular cloud provider, monitoring technology, database, security product, authentication technology, software library, or infrastructure architecture.</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Where a change materially affects Customer Data processing and requires Customer notice, authorization, contractual changes, or another mechanism under applicable law or an applicable written agreement, MYCURE will follow that requirement.</p>
                  </motion.section>

                  <motion.section
                    id="reporting-privacy-or-security-concerns"
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">19. Reporting Privacy or Security Concerns</h2>
                    <p className="text-muted-foreground leading-relaxed">Suspected security incidents, unauthorized access, credential compromise, privacy concerns, or other security or data-protection matters relating to MYCURE should be reported promptly to:</p>
                    <p className="text-muted-foreground leading-relaxed mt-4"><strong>Privacy &amp; Security Contact</strong><br /><a href="mailto:privacy@mycure.md" className="text-primary hover:underline">privacy@mycure.md</a></p>
                    <p className="text-muted-foreground leading-relaxed mt-4">Please do not send passwords, authentication factors, or unnecessary Patient Data through unsecured communications.</p>
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
