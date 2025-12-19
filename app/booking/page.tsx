"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Clock,
  Users,
  AlertCircle,
  Calendar,
  UserX,
  Shield,
  Globe,
  Building2,
  ArrowRight,
  Zap,
  Check,
  MessageSquare,
  Star,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text"
import { ProductHeader } from "@/components/sections/product-page"

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState("doctors")

  const solutions = [
    {
      icon: Clock,
      title: "Long Wait Times",
      description: "Reduced wait times by 70% with smart scheduling and automated queue management"
    },
    {
      icon: AlertCircle,
      title: "Missed Appointments",
      description: "Automated reminders reduce no-shows by 40% through SMS and email notifications"
    },
    {
      icon: Calendar,
      title: "Manual Scheduling",
      description: "Save 3+ hours daily with automated booking and intelligent appointment management"
    },
    {
      icon: UserX,
      title: "Patient Frustration",
      description: "Increase patient satisfaction with 24/7 online booking and real-time updates"
    },
  ]

  const specialties = [
    {
      icon: Globe,
      title: "Professional Booking Page",
      description: "Create your branded appointment website with custom domain and professional design templates"
    },
    {
      icon: MessageSquare,
      title: "Automated Reminders",
      description: "SMS and email notifications reduce no-shows with personalized appointment confirmations and follow-ups"
    },
    {
      icon: Zap,
      title: "Flexible Scheduling",
      description: "Support for virtual and in-person appointments with customizable time slots and buffer periods"
    },
    {
      icon: Calendar,
      title: "Calendar Integration",
      description: "Seamlessly sync with Google Calendar, Outlook, and other existing calendar systems"
    },
    {
      icon: Users,
      title: "Patient Management",
      description: "Complete patient profiles with appointment history, preferences, and contact information"
    },
    {
      icon: Building2,
      title: "API Integration",
      description: "Connect with existing hospital information systems and electronic health records"
    },
  ]

  const advantages = [
    {
      title: "Systematic Organization",
      description: "MYCURE Booking is a scheduling app that can help you organize patients' appointments while keeping the waiting room in compliance with your local COVID-19 safety regulations.",
      icon: Shield,
      image: "/section-assets/clinic-page/carousel/carousel-booking.webp",
      bullets: [
        "Organize patient appointments efficiently with smart queue management",
        "Maintain COVID-19 safety compliance with capacity controls",
        "Smart queue management system for optimal patient flow"
      ]
    },
    {
      title: "Automated Workflow",
      description: "Set your schedule in the software and your patients can book appointments on their own. And MYCURE Booking will send out appointment reminders automatically, saving you time.",
      icon: Zap,
      image: "/section-assets/clinic-page/carousel/carousel-insights.webp",
      bullets: [
        "Patients book appointments independently 24/7",
        "Automatic appointment reminders via SMS and email",
        "Reduced administrative burden on staff"
      ]
    },
    {
      title: "Flexible Platform",
      description: "MYCURE Booking can be used for virtual and in-person appointments at clinics, without needing to switch between different apps.",
      icon: Globe,
      image: "/section-assets/clinic-page/carousel/carousel-network.webp",
      bullets: [
        "Support for virtual and in-person visits",
        "Multi-provider scheduling in one platform",
        "Customizable booking rules and availability"
      ]
    },
    {
      title: "Medium and Large-scale Facilities",
      description: "MYCURE Booking can also be used for clinics, diagnostic centers, and hospitals to seamlessly organize your patient visits. It has APIs that can be integrated in your existing information systems.",
      icon: Building2,
      image: "/section-assets/clinic-page/carousel/carousel-lifeline.webp",
      bullets: [
        "Scalable for clinics, diagnostic centers, and hospitals",
        "API integration with existing information systems",
        "Enterprise-level appointment management capabilities"
      ]
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ProductHeader />

      <main className="flex-1">
        {/* Hero Section - Split Layout */}
        <section id="hero" className="w-full py-8 sm:py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Hero Image - Shows first on mobile, left side on desktop */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative order-1 lg:order-1"
              >
                <Image
                  src="/hero-section-assets/booking-feature-hero-image.webp"
                  width={600}
                  height={500}
                  alt="MYCURE Booking - Easy appointment scheduling system"
                  className="rounded-2xl w-full h-auto mx-auto max-w-sm md:max-w-none"
                  priority
                />
              </motion.div>

              {/* Content - Shows second on mobile, right side on desktop */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6 order-2 lg:order-2 text-center lg:text-left"
              >
                <div className="space-y-4">
                  {/* Animated Badge */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="rounded-full px-3 py-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 inline-flex items-center justify-center h-8">
                      <AnimatedShinyText className="text-xs font-medium !mx-0 !max-w-none !text-[#004d66] dark:!text-white !bg-gradient-to-r !from-transparent !via-[#004d66]/80 dark:!via-white/80 !via-50% !to-transparent !leading-none" shimmerWidth={150}>
                        MYCURE Booking
                      </AnimatedShinyText>
                    </div>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                    The{" "}
                    <span className="text-primary">Easy Booking App</span>{" "}
                    to Grow Your Practice
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Accept online appointments 24/7 with professional booking pages. Set up in 10 minutes,
                    reduce no-shows by 70%, and let patients self-schedule while you focus on care.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <Link href="https://calendly.com/mycure/demo" target="_blank" rel="noopener noreferrer">
                    <ShimmerButton
                      className="h-11 sm:h-12 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                      background="#0099CC"
                      shimmerColor="#ffffff"
                      shimmerDuration="2s"
                    >
                      Get Started
                      <ArrowRight className="size-4" />
                    </ShimmerButton>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions Section (formerly Problem Statement) */}
        <section id="solutions" className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30">
          <div className="container px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                <div className="rounded-full px-3 py-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 inline-flex items-center justify-center h-8">
                  <AnimatedShinyText className="text-xs font-medium !mx-0 !max-w-none !text-[#004d66] dark:!text-white !bg-gradient-to-r !from-transparent !via-[#004d66]/80 dark:!via-white/80 !via-50% !to-transparent !leading-none" shimmerWidth={150}>
                    Transform Your Clinic
                  </AnimatedShinyText>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Turn Daily Challenges Into Success Stories
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                See how MYCURE Clinics transforms common clinic problems into powerful competitive advantages for your practice
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            >
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-200 hover:bg-card/80 hover:border-border/60 hover:shadow-lg">
                    <CardContent className="p-8 space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/15 dark:group-hover:bg-primary/25 transition-colors">
                        <solution.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold leading-tight">
                          {solution.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Tab Section - Activate your Appointment Scheduling Website */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30">
          <div className="container px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                <div className="rounded-full px-3 py-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 inline-flex items-center justify-center h-8">
                  <AnimatedShinyText className="text-xs font-medium !mx-0 !max-w-none !text-[#004d66] dark:!text-white !bg-gradient-to-r !from-transparent !via-[#004d66]/80 dark:!via-white/80 !via-50% !to-transparent !leading-none" shimmerWidth={150}>
                    Professional Booking Page
                  </AnimatedShinyText>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Activate your Appointment Scheduling Website
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Patients can directly book their next visit on your professional booking page.
                It's a digital hub where you can showcase your services and medical professionals
                like having your very own website.
              </p>
            </motion.div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex gap-4 p-2 bg-background rounded-full border border-border/40 shadow-sm">
                {[
                  { id: "doctors", label: "Doctors" },
                  { id: "clinics", label: "Clinics" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    style={activeTab === tab.id ? { backgroundColor: '#0099CC' } : undefined}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Left side - Images */}
                <div className="relative order-2 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={activeTab === "doctors"
                        ? "/section-assets/booking/booking-tab-doctors.webp"
                        : "/section-assets/booking/booking-tab-clinics.webp"
                      }
                      width={600}
                      height={400}
                      alt={activeTab === "doctors"
                        ? "MYCURE Booking for Doctors - Professional booking page"
                        : "MYCURE Booking for Clinics - Multi-provider management"
                      }
                      className="rounded-xl shadow-lg w-full"
                    />
                  </motion.div>
                </div>

                {/* Right side - Content */}
                <div className="order-1 lg:order-2">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        {activeTab === "doctors" ? (
                          <Users className="size-5 text-primary" />
                        ) : (
                          <Building2 className="size-5 text-primary" />
                        )}
                        <h3 className="text-2xl sm:text-3xl font-bold">
                          {activeTab === "doctors" ? "For Individual Practitioners" : "For Medical Facilities"}
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {activeTab === "doctors"
                          ? "Patients can directly book their next visit on your professional booking page"
                          : "Comprehensive booking system for multi-doctor clinics and hospitals"}
                      </p>
                    </div>
                    <ul className="space-y-4">
                      {(activeTab === "doctors"
                        ? [
                            "Create your professional website with custom branding",
                            "Set your availability preferences and working hours",
                            "Accept online bookings 24/7 from any device",
                            "Automatic appointment confirmations and reminders"
                          ]
                        : [
                            "Manage multiple doctors and departments",
                            "Queue management and walk-in handling",
                            "API integration with existing hospital systems",
                            "Real-time availability across all providers"
                          ]
                      ).map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="size-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
          <div className="container px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
            {/* Content Section - Centered Vertical Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              {/* Animated Badge */}
              <div className="flex justify-center">
                <div className="rounded-full px-3 py-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 inline-flex items-center justify-center h-8">
                  <AnimatedShinyText className="text-xs font-medium !mx-0 !max-w-none !text-[#004d66] dark:!text-white !bg-gradient-to-r !from-transparent !via-[#004d66]/80 dark:!via-white/80 !via-50% !to-transparent !leading-none" shimmerWidth={150}>
                    Complete Clinic Solution
                  </AnimatedShinyText>
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Watch How You Can Improve<br />
                Your Patient Attendance Rate
              </h2>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover how MYCURE Booking helps you reduce no-shows, optimize scheduling,
                and create a seamless booking experience for your patients.
              </p>

              {/* CTA */}
              <div className="flex justify-center">
                <Link href="https://calendly.com/mycure/demo" target="_blank" rel="noopener noreferrer">
                  <ShimmerButton
                    className="h-11 sm:h-12 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    background="#0099CC"
                    shimmerColor="#ffffff"
                    shimmerDuration="2s"
                  >
                    Get Started
                    <ArrowRight className="size-4" />
                  </ShimmerButton>
                </Link>
              </div>
            </motion.div>

            {/* Video Section */}
            <motion.div
              id="solution-video"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl mt-16"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/Xj9GgIHW0_s"
                  title="MYCURE Booking - Improve Patient Attendance Rates"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>
              </div>
              <noscript>
                <div className="aspect-video rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <p className="text-muted-foreground">Please enable JavaScript to view the video</p>
                </div>
              </noscript>
            </motion.div>
          </div>
        </section>


        {/* How It Works Timeline Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <div className="rounded-full px-3 py-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 inline-block h-8 flex items-center justify-center">
                <AnimatedShinyText className="text-xs font-medium !mx-0 !max-w-none !text-[#004d66] dark:!text-white !bg-gradient-to-r !from-transparent !via-[#004d66]/80 dark:!via-white/80 !via-50% !to-transparent" shimmerWidth={150}>
                  How It Works
                </AnimatedShinyText>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Start Accepting Online Bookings in Minutes
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Get your practice online in just 3 simple steps and start accepting appointments 24/7.
              </p>
            </motion.div>

            {/* Timeline Cards */}
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-3 gap-8 mb-12"
              >
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-background rounded-2xl p-6 border border-border/40 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">1</span>
                      </div>
                      <h3 className="text-lg font-semibold">Set up your page</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">Add your practice details and branding</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">Set your availability and services</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">Configure booking rules and preferences</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">Customize your booking page design</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="bg-background rounded-2xl p-6 border border-border/40 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">2</span>
                      </div>
                      <h3 className="text-lg font-semibold">Share your link</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">Share on social media platforms</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">Add link to your email signature</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">Display on your existing website</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">Send to patients via SMS or WhatsApp</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="bg-background rounded-2xl p-6 border border-border/40 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">3</span>
                      </div>
                      <h3 className="text-lg font-semibold">Get booked</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">Receive instant booking notifications</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">Automated confirmation emails</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">Sync with your calendar automatically</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">Manage all bookings from one dashboard</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center flex flex-col items-center"
              >
                <Link href="https://calendly.com/mycure/demo" target="_blank" rel="noopener noreferrer">
                  <ShimmerButton
                    className="px-6 py-3 text-base font-semibold rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    background="#0099CC"
                    shimmerColor="#ffffff"
                    shimmerDuration="3s"
                  >
                    Get Started Today
                    <ArrowRight className="size-4" />
                  </ShimmerButton>
                </Link>
                <p className="text-sm text-muted-foreground mt-4">
                  No credit card required • 15-day free trial • Setup in minutes
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="rounded-full px-3 py-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 inline-flex items-center justify-center h-8">
                <AnimatedShinyText className="text-xs font-medium !mx-0 !max-w-none !text-[#004d66] dark:!text-white !bg-gradient-to-r !from-transparent !via-[#004d66]/80 dark:!via-white/80 !via-50% !to-transparent !leading-none" shimmerWidth={150}>
                  Testimonials
                </AnimatedShinyText>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Our Clients are Saying</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Don't just take our word for it. See what healthcare providers have to say about their experience with MYCURE Booking.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
              {[
                {
                  quote: "MYCURE fulfills a long time need of physicians for accurate records of patients which they can carry with them wherever they are. It enables them also to prescribe and countercheck their prescriptions, issue medical certificate, communicate with other doctors for referrals. Patients could check and follow their medical progress, check their medications and look for doctors anywhere and set up appointments. I look forward to enjoying this app to improve my practice.",
                  author: "Dr. Nelson S. Abelardo",
                  role: "Cardiologist",
                  rating: 5,
                },
                {
                  quote: "It's a great experience using MYCURE app in our rural setup. I've been through many EMR apps, but this one is the best so far. MYCURE provides a well organized patient data profiling with customized options for personalized encoding and with integration of lab tests, immunizations as well as growth charts that are very important for us as pediatricians for growth monitoring of our little ones. It is very convenient to use, simple, adaptable and user friendly even to my secretary.",
                  author: "Dr. Gay Cadorna-Toledo",
                  role: "Pediatrician",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                          ))}
                      </div>
                      <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* Final CTA Section */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                    Create your <span className="text-[#0099CC]">appointment scheduling</span> website in less than 10 minutes
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Join thousands of healthcare providers who've streamlined their booking process and improved patient attendance rates.
                  </p>
                </div>

                <div className="flex justify-center items-center">
                  <Link href="https://calendly.com/mycure/demo" target="_blank" rel="noopener noreferrer">
                    <ShimmerButton
                      className="h-11 sm:h-12 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                      background="#0099CC"
                      shimmerColor="#ffffff"
                      shimmerDuration="3s"
                    >
                      Start Your Free Trial
                      <ArrowRight className="size-4" />
                    </ShimmerButton>
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    <span>No setup fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    <span>15-day Free Trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    <span>Training via webinars</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

    </div>
  )
}
