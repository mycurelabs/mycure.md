"use client"

import React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
  Calendar,
  FileText,
  Lock,
  Activity,
  Stethoscope,
  Hospital,
  FlaskConical,
  Video,
  WifiOff,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import * as Scrollytelling from "@bsmnt/scrollytelling"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const [activeDay, setActiveDay] = useState("today")

  const timelineContent = {
    today: [
      {
        title: "Setup Your Clinic",
        icon: <Users className="w-5 h-5 text-primary" />,
        items: [
          "Create your clinic profile in minutes",
          "Add your first staff members and departments",
          "Configure basic settings and preferences",
          "Import existing patient data securely",
        ],
      },
      {
        title: "Patient Registration",
        icon: <Shield className="w-5 h-5 text-primary" />,
        items: [
          "Register your first patients",
          "Set up appointment scheduling",
          "Configure patient communication preferences",
          "Enable HIPAA-compliant data storage",
        ],
      },
      {
        title: "Basic Operations",
        icon: <Zap className="w-5 h-5 text-primary" />,
        items: [
          "Schedule your first appointments",
          "Start using digital patient records",
          "Set up basic billing and invoicing",
          "Configure notification preferences",
        ],
      },
    ],
    day3: [
      {
        title: "Advanced Features",
        icon: <BarChart className="w-5 h-5 text-primary" />,
        items: [
          "Connect with lab systems and pharmacies",
          "Set up automated appointment reminders",
          "Configure advanced reporting dashboards",
          "Enable telemedicine capabilities",
        ],
      },
      {
        title: "Workflow Optimization",
        icon: <Layers className="w-5 h-5 text-primary" />,
        items: [
          "Automate patient check-in processes",
          "Set up custom treatment protocols",
          "Configure insurance verification workflows",
          "Enable prescription management",
        ],
      },
      {
        title: "Team Collaboration",
        icon: <Users className="w-5 h-5 text-primary" />,
        items: [
          "Set up department-specific workflows",
          "Configure staff scheduling and shifts",
          "Enable secure internal messaging",
          "Set up role-based access controls",
        ],
      },
    ],
    day7: [
      {
        title: "Full Automation",
        icon: <Zap className="w-5 h-5 text-primary" />,
        items: [
          "Automate 90% of administrative tasks",
          "Set up AI-powered patient triage",
          "Enable predictive analytics for scheduling",
          "Configure automated billing workflows",
        ],
      },
      {
        title: "Advanced Analytics",
        icon: <BarChart className="w-5 h-5 text-primary" />,
        items: [
          "Generate comprehensive practice reports",
          "Track key performance indicators",
          "Monitor patient satisfaction metrics",
          "Analyze revenue and efficiency trends",
        ],
      },
      {
        title: "Scale Your Practice",
        icon: <Star className="w-5 h-5 text-primary" />,
        items: [
          "Reduce administrative time by 60%",
          "Increase patient satisfaction scores",
          "Improve appointment scheduling efficiency",
          "Enhance overall practice profitability",
        ],
      },
    ],
  }

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "Physicians",
      description: "Explore a simpler way to create electronic medical records, prescriptions, and diagnostic test orders.",
      icon: <Stethoscope className="size-5" />,
    },
    {
      title: "Outpatient Clinics",
      description: "Experience streamlined workflows and real-time reports for optimized operational efficiency.",
      icon: <Hospital className="size-5" />,
    },
    {
      title: "Diagnostics",
      description: "Embrace a simplified diagnostic test process from specimen collection to online test results.",
      icon: <FlaskConical className="size-5" />,
    },
    {
      title: "Easy Scheduling",
      description: "Let your patients schedule appointments with ease and cut down on long waiting times.",
      icon: <Calendar className="size-5" />,
    },
    {
      title: "Telehealth",
      description: "Try a safe and secure platform to build your virtual practice through video and audio calls.",
      icon: <Video className="size-5" />,
    },
    {
      title: "Work Offline",
      description: "Enjoy the benefits of using a cloud-based medical software even with little to no internet connection.",
      icon: <WifiOff className="size-5" />,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 font-bold hover:opacity-80 transition-opacity"
          >
            <div className="size-8 rounded-lg bg-white flex items-center justify-center">
              <Image src="/mycure-logo.svg" alt="MYCURE Logo" width={32} height={32} />
            </div>
            <span>MYCURE</span>
          </button>
          <nav className="hidden md:flex gap-8">
            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Solutions
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link href="#outpatient-clinics" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-sm transition-colors">
                    Outpatient Clinics
                  </Link>
                  <Link href="#hospital-opd" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-sm transition-colors">
                    Hospital OPD
                  </Link>
                  <Link href="#skin-clinics" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-sm transition-colors">
                    Skin Clinics
                  </Link>
                  <Link href="#dental-clinics" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-sm transition-colors">
                    Dental Clinics
                  </Link>
                  <Link href="#corporate-clinics" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-sm transition-colors">
                    Corporate Clinics
                  </Link>
                  <Link href="#diagnostics" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-sm transition-colors">
                    Diagnostics
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Features Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Features
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link href="#booking" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-sm transition-colors">
                    Booking
                  </Link>
                  <Link href="#telehealth" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-sm transition-colors">
                    Telehealth
                  </Link>
                </div>
              </div>
            </div>
            
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#our-story"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Our Story
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Log in
            </Link>
            <Button className="rounded-full">
              Get Started
              <ChevronRight className="ml-1 size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              {/* Solutions */}
              <div className="py-2">
                <div className="text-sm font-medium mb-2">Solutions</div>
                <div className="ml-4 flex flex-col gap-1">
                  <Link href="#outpatient-clinics" className="py-1 text-sm text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
                    Outpatient Clinics
                  </Link>
                  <Link href="#hospital-opd" className="py-1 text-sm text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
                    Hospital OPD
                  </Link>
                  <Link href="#skin-clinics" className="py-1 text-sm text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
                    Skin Clinics
                  </Link>
                  <Link href="#dental-clinics" className="py-1 text-sm text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
                    Dental Clinics
                  </Link>
                  <Link href="#corporate-clinics" className="py-1 text-sm text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
                    Corporate Clinics
                  </Link>
                  <Link href="#diagnostics" className="py-1 text-sm text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
                    Diagnostics
                  </Link>
                </div>
              </div>
              
              {/* Features */}
              <div className="py-2">
                <div className="text-sm font-medium mb-2">Features</div>
                <div className="ml-4 flex flex-col gap-1">
                  <Link href="#booking" className="py-1 text-sm text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
                    Booking
                  </Link>
                  <Link href="#telehealth" className="py-1 text-sm text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
                    Telehealth
                  </Link>
                </div>
              </div>
              
              <Link href="#pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="#our-story" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Our Story
              </Link>
              
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="#" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
                <Button className="rounded-full">
                  Get Started
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <Badge
                className="mb-6 rounded-full px-4 py-1.5 text-sm font-medium bg-white/10 text-white border-white/20"
                variant="outline"
              >
                🚀 INTRODUCING: MYCURE X
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
                The Complete Healthcare Management Platform
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                MYCURE empowers healthcare providers with comprehensive clinic management solutions. Serving small practices to large multi-specialty clinics, we help you streamline patient care, ensure compliance, and optimize operations.
              </p>

              {/* Email Capture Section */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-lg mx-auto mb-8">
                <div className="relative flex-1 w-full sm:w-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full h-12 px-4 pr-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
                  />
                </div>
                <Button
                  size="lg"
                  className="h-12 px-8 bg-white text-primary hover:bg-white/90 font-semibold rounded-lg whitespace-nowrap"
                >
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>

              {/* Download CTA */}
              <div className="mb-8">
                <Link
                  href="/download"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium group"
                >
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  Download apps
                </Link>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-white" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-white" />
                  <span>15-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-white" />
                  <span>Setup in minutes</span>
                </div>
              </div>
            </motion.div>

            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/tye5mfEtoBw"
                  title="MYCURE Healthcare Management Platform Introduction"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>
              </div>
              <noscript>
                <div className="aspect-video rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <Link 
                    href="https://www.youtube.com/watch?v=tye5mfEtoBw"
                    className="text-white hover:text-white/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch MYCURE Introduction Video
                  </Link>
                </div>
              </noscript>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-white/20 to-white/10 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-white/10 to-white/20 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>
        {/* Logos Section */}
        <section className="w-full py-12 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <p className="text-sm font-medium text-muted-foreground">Trusted by leading healthcare providers</p>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-6 gap-8 md:gap-12 max-w-5xl mx-auto"
              >
                {[
                  { name: "Medicard", src: "/Client Logos/Medicard.png" },
                  { name: "Skin 101", src: "/Client Logos/Skin 101.png" },
                  { name: "Premier Medical Center", src: "/Client Logos/Premier Medical Center.png" },
                  { name: "Duya Med Diagnostic Clinic", src: "/Client Logos/Duya Med Diagnostic Clinic.png" },
                  { name: "Ferrer OB-GYN and Medical Clinic", src: "/Client Logos/Ferrer OB-GYN and Medical Clinic.png" },
                  { name: "Vicente L. Danguilan Memorial Clinic", src: "/Client Logos/Vicente L. Danguilan Memorial Clinic .jpeg" },
                  { name: "Lablife Medical & Diagnostic Center", src: "/Client Logos/Lablife Medical & Diagnostic Center-Murphy Cubao.png" },
                  { name: "Newport EW Villa Medica", src: "/Client Logos/Newport EW Villa Medica.png" },
                  { name: "Nueve de Febrero Family Clinic", src: "/Client Logos/Nueve de Febrero Family Clinic.png" }
                ].slice(0, 12).map((logo, index) => (
                  <motion.div
                    key={logo.name}
                    variants={item}
                    className="flex items-center justify-center"
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={120}
                      height={60}
                      className="w-20 h-12 object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Powerful Tools to Transform Your Healthcare Practice</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                MYCURE provides an integrated set of solutions tailored to physicians, clinics, and diagnostics. From patient records to telehealth, our platform empowers your team to deliver care more efficiently, securely, and seamlessly.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* Medical Data Tracker Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Trusted by Healthcare Providers Worldwide
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                MYCURE is dedicated to help healthcare providers save lives every day through innovative clinic
                management technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10"
            >
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center space-y-2"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">2,793,041</div>
                  <div className="text-sm md:text-base font-semibold text-muted-foreground tracking-wider uppercase">
                    Medical Records
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-center space-y-2"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">1,506,040</div>
                  <div className="text-sm md:text-base font-semibold text-muted-foreground tracking-wider uppercase">
                    Patients Served
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-center space-y-2"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">1,513</div>
                  <div className="text-sm md:text-base font-semibold text-muted-foreground tracking-wider uppercase">
                    Partner Providers
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Image + Content Features Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Why Choose MYCURE
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built for Modern Teams</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Enterprise-grade capabilities with healthcare-specific design, ensuring compliance, reliability, and seamless operations.
              </p>
            </motion.div>

            <div className="space-y-20">
              {/* Feature 1 - HIPAA Security & Compliance */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-30"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=HIPAA+Security"
                    width={600}
                    height={400}
                    alt="HIPAA Security & Compliance"
                    className="relative rounded-xl shadow-2xl border border-border/40"
                  />
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                      <Shield className="size-6" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">HIPAA Security & Compliance</h3>
                    <p className="text-muted-foreground text-lg">
                      MYCURE demonstrates industry-leading commitment to protecting patient data with comprehensive HIPAA compliance, end-to-end encryption, and rigorous security protocols that exceed healthcare standards.
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="size-5 text-primary" />
                      <span>End-to-end data encryption for all patient communications and records</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="size-5 text-primary" />
                      <span>Automated compliance monitoring with real-time alerts and audit trails</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="size-5 text-primary" />
                      <span>Role-based access controls ensuring staff see only authorized patient information</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="mt-4">
                    Learn About MYCURE's Privacy Standards
                    <ChevronRight className="ml-2 size-4" />
                  </Button>
                </div>
              </motion.div>

              {/* Feature 2 - Seamless Offline Operations */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6 lg:order-2">
                  <div className="space-y-4">
                    <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                      <WifiOff className="size-6" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Seamless Offline Operations</h3>
                    <p className="text-muted-foreground text-lg">
                      Work confidently regardless of internet connectivity. MYCURE's advanced offline capabilities ensure your practice continues operating smoothly, with automatic synchronization when connectivity returns.
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="size-5 text-primary" />
                      <span>Full offline patient record access for electronic medical record management</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="size-5 text-primary" />
                      <span>Smart data synchronization that resolves conflicts and updates automatically</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="size-5 text-primary" />
                      <span>Local backup systems ensuring zero data loss during connectivity issues</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="mt-4">
                    Learn About Syncbase
                    <ChevronRight className="ml-2 size-4" />
                  </Button>
                </div>
                <div className="relative lg:order-1">
                  <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-2xl opacity-30"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Offline+Operations"
                    width={600}
                    height={400}
                    alt="Seamless Offline Operations"
                    className="relative rounded-xl shadow-2xl border border-border/40"
                  />
                </div>
              </motion.div>

              {/* Feature 3 - Simplified PhilHealth Claims Management */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-30"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=PhilHealth+Claims"
                    width={600}
                    height={400}
                    alt="PhilHealth Claims Management"
                    className="relative rounded-xl shadow-2xl border border-border/40"
                  />
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                      <FileText className="size-6" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Simplified PhilHealth Claims Management</h3>
                    <p className="text-muted-foreground text-lg">
                      Streamline your revenue cycle with direct PhilHealth integration. Automate claims processing, track submissions, and ensure accurate reimbursements while maintaining full compliance with Philippine healthcare regulations.
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="size-5 text-primary" />
                      <span>Automated PhilHealth form generation with pre-populated patient data</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="size-5 text-primary" />
                      <span>Real-time claims status tracking from submission to reimbursement</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="size-5 text-primary" />
                      <span>Built-in compliance validation preventing common rejection reasons</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="mt-4">
                    Learn More about MYCURE's Accreditation
                    <ChevronRight className="ml-2 size-4" />
                  </Button>
                </div>
              </motion.div>

              {/* Feature 4 - Effortless Clinical Workflows */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6 lg:order-2">
                  <div className="space-y-4">
                    <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                      <Stethoscope className="size-6" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Effortless Clinical Workflows</h3>
                    <p className="text-muted-foreground text-lg">
                      Experience healthcare software designed by medical professionals for medical professionals. Intuitive interfaces reduce training time while powerful features enhance clinical documentation and patient care efficiency.
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="size-5 text-primary" />
                      <span>Intuitive patient charting with medical-professional-designed interfaces</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="size-5 text-primary" />
                      <span>Streamlined documentation workflows that reduce administrative burden</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="size-5 text-primary" />
                      <span>Smart clinical templates that adapt to different specialties and procedures</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="mt-4">
                    Learn More about MYCURE's Features
                    <ChevronRight className="ml-2 size-4" />
                  </Button>
                </div>
                <div className="relative lg:order-1">
                  <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-2xl opacity-30"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Clinical+Workflows"
                    width={600}
                    height={400}
                    alt="Clinical Workflows"
                    className="relative rounded-xl shadow-2xl border border-border/40"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Company Visibility Features Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Visibility for your entire clinic.
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Keep up with what's happening across every department and patient case.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              {/* Feature 1 - Patient Feed */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400 via-pink-400 to-pink-500 p-1">
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 h-64 flex items-center justify-center">
                    <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                          Dr
                        </div>
                        <div>
                          <div className="font-semibold text-sm">Dr. Sarah Chen</div>
                          <div className="text-xs text-muted-foreground">Cardiology • 2h ago</div>
                        </div>
                      </div>
                      <div className="text-sm">
                        Patient John D. showing excellent recovery progress post-surgery. Vitals stable, ready for
                        discharge planning.
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />3 staff
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Priority
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold">
                    <span className="font-bold">Eliminate</span>{" "}
                    <span className="font-normal text-muted-foreground">
                      unnecessary tool costs with one comprehensive platform.
                    </span>
                  </h3>
                </div>
              </motion.div>

              {/* Feature 2 - Digest Reports */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500 p-1">
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 h-64 flex items-center justify-center">
                    <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold">Daily Clinic Report</div>
                        <div className="text-xs text-muted-foreground">Today</div>
                      </div>
                      <div className="bg-primary text-primary-foreground rounded-lg p-3 text-sm">
                        <div className="font-semibold">MYCURE</div>
                        <div className="text-xs opacity-90">Daily clinic digest</div>
                        <div className="text-xs opacity-75 mt-1">Here's what your team accomplished today.</div>
                      </div>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="h-2 bg-muted rounded"></div>
                        <div className="h-2 bg-muted rounded w-3/4"></div>
                        <div className="h-2 bg-muted rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold">
                    <span className="font-bold">Reduce</span>{" "}
                    <span className="font-normal text-muted-foreground">
                      administrative burden through intelligent automation.
                    </span>
                  </h3>
                </div>
              </motion.div>

              {/* Feature 3 - Department Organization */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-400 via-blue-400 to-blue-500 p-1">
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 h-64 flex items-center justify-center">
                    <div className="w-full max-w-sm space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                          <div className="text-xs font-semibold mb-2">Emergency Dept</div>
                          <div className="text-xs text-muted-foreground">Managing critical cases</div>
                          <div className="flex -space-x-1 mt-2">
                            {[1, 2, 3, 4].map((i) => (
                              <div key={i} className="w-4 h-4 bg-red-400 rounded-full border border-white"></div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                          <div className="text-xs font-semibold mb-2">Cardiology</div>
                          <div className="text-xs text-muted-foreground">Heart health specialists</div>
                          <div className="flex -space-x-1 mt-2">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="w-4 h-4 bg-blue-400 rounded-full border border-white"></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold">
                    <span className="font-bold">Improve</span>{" "}
                    <span className="font-normal text-muted-foreground">
                      patient satisfaction with seamless scheduling, clear communication, and reduced wait times through optimized workflows.
                    </span>
                  </h3>
                </div>
              </motion.div>

              {/* Feature 4 - Patient Archive */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-400 via-gray-300 to-gray-400 p-1">
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 h-64 flex items-center justify-center">
                    <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <div>
                            <div className="font-semibold">Dr. Martinez</div>
                            <div className="text-muted-foreground">Oct 3 • Pediatrics</div>
                          </div>
                        </div>
                        <div className="text-xs">Completed vaccination schedule for patient Emma K.</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                            <Shield className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-semibold">Nurse Johnson</div>
                            <div className="text-muted-foreground">Oct 2 • ICU</div>
                          </div>
                        </div>
                        <div className="text-xs">Patient monitoring protocols updated.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold">
                    <span className="font-bold">Protect</span>{" "}
                    <span className="font-normal text-muted-foreground">
                      your revenue with automatic compliance monitoring, HIPAA security, and regulatory reporting that prevents costly fines.
                    </span>
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Sticky Scroll Features Section */}
        <Scrollytelling.Root
          start="top bottom"
          end="bottom top"
          scrub={true}
        >
          <section className="w-full py-12 md:py-20 mb-20 md:mb-32 relative">
            <div className="container px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Sticky Left Content */}
                <div className="lg:sticky lg:top-32 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                      Healthcare Excellence
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mt-4">
                      Built for healthcare
                      <br />excellence
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-lg">
                      Healthcare providers deserve technology that matches their professional standards. MYCURE combines enterprise-grade capabilities with healthcare-specific design, ensuring that every feature supports clinical excellence while maintaining operational efficiency and regulatory compliance.
                    </p>
                  </motion.div>
                </div>

                {/* Progressive Feature Reveals */}
                <div className="space-y-40">
                  {/* Feature 1 - Patient Scheduling */}
                  <Scrollytelling.Animation
                    tween={{
                      start: 0,
                      end: 30,
                      from: { opacity: 0, y: 60, scale: 0.9 }
                    }}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-primary">Your Clinical Command Center</h3>
                          <p className="text-muted-foreground">Powerful dashboard control</p>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Take control of every patient interaction from one powerful dashboard. Watch as complex medical workflows transform into streamlined processes—from initial consultation to final treatment documentation, everything flows seamlessly.
                      </p>
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-white/80 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <Calendar className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-sm">Dr. Smith - Cardiology</div>
                                <div className="text-xs text-muted-foreground">Today 2:30 PM</div>
                              </div>
                            </div>
                            <Badge variant="secondary" className="text-xs">Confirmed</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Scrollytelling.Animation>

                  <Scrollytelling.Waypoint at={25} label="feature-1" />

                  {/* Feature 2 - Medical Records */}
                  <Scrollytelling.Animation
                    tween={{
                      start: 20,
                      end: 50,
                      from: { opacity: 0, y: 60, scale: 0.9 }
                    }}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center">
                          <Zap className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-green-600">Operations That Actually Work</h3>
                          <p className="text-muted-foreground">Intelligent automation</p>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        See your entire practice come alive with intelligent automation. Real-time insights reveal optimization opportunities while smart scheduling eliminates bottlenecks—turning operational chaos into competitive advantage.
                      </p>
                      <div className="bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-2xl p-6 border border-green-500/20">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-white/80 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <Zap className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-sm">Patient Records</div>
                                <div className="text-xs text-muted-foreground">2,847 active files</div>
                              </div>
                            </div>
                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">HIPAA Compliant</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Scrollytelling.Animation>

                  <Scrollytelling.Waypoint at={50} label="feature-2" />

                  {/* Feature 3 - Security & Compliance */}
                  <Scrollytelling.Animation
                    tween={{
                      start: 35,
                      end: 65,
                      from: { opacity: 0, y: 60, scale: 0.9 }
                    }}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center">
                          <Video className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-orange-600">Virtual Care That Feels Personal</h3>
                          <p className="text-muted-foreground">Enterprise-grade telehealth</p>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Bridge the distance between you and your patients with enterprise-grade telehealth. Experience the future of patient care where technology enhances connection rather than replacing it—secure, seamless, and surprisingly human.
                      </p>
                      <div className="bg-gradient-to-br from-orange-500/5 to-orange-500/10 rounded-2xl p-6 border border-orange-500/20">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-white/80 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                <Video className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-sm">Security Status</div>
                                <div className="text-xs text-muted-foreground">256-bit AES encryption</div>
                              </div>
                            </div>
                            <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">Active</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Scrollytelling.Animation>

                  <Scrollytelling.Waypoint at={75} label="feature-3" />

                  {/* Feature 4 - Analytics & Insights */}
                  <Scrollytelling.Animation
                    tween={{
                      start: 45,
                      end: 100,
                      from: { opacity: 0, y: 60, scale: 0.9 }
                    }}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center">
                          <WifiOff className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-purple-600">Your Practice, Always On</h3>
                          <p className="text-muted-foreground">Offline-first design</p>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Discover true peace of mind with offline-first design. Whether internet fails or power fluctuates, your practice continues uninterrupted. When connectivity returns, everything syncs perfectly—like the disruption never happened.
                      </p>
                      <div className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 rounded-2xl p-6 border border-purple-500/20">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-white/80 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                <WifiOff className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-sm">Practice Analytics</div>
                                <div className="text-xs text-muted-foreground">Real-time insights</div>
                              </div>
                            </div>
                            <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">+15.2%</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Scrollytelling.Animation>

                  <Scrollytelling.Waypoint at={100} label="feature-4" />
                </div>
              </div>
            </div>
          </section>
        </Scrollytelling.Root>
        {/* All-in-One Integration Section */}
        <section className="w-full pt-28 md:pt-40 pb-20 md:pb-32 bg-muted/20 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto text-center relative">
              {/* Floating Integration Icons */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top Row Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-8"
                >
                  <div className="w-15 h-15 bg-white rounded-full shadow-lg flex items-center justify-center border-[4px] border-gray-100/60">
                    <Image
                      src="/Icons/Laboratory.73d89a4.webp"
                      width={52}
                      height={52}
                      alt="Laboratory Integration"
                      className="rounded"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute top-8 right-1/4 transform translate-x-1/2 -translate-y-4"
                >
                  <div className="w-15 h-15 bg-white rounded-full shadow-lg flex items-center justify-center border-[4px] border-gray-100/60">
                    <Image
                      src="/Icons/Imaging.6ce014b.webp"
                      width={52}
                      height={52}
                      alt="Medical Imaging Integration"
                      className="rounded"
                    />
                  </div>
                </motion.div>

                {/* Middle Row Icons */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute top-1/2 left-8 transform -translate-y-1/2"
                >
                  <div className="w-15 h-15 bg-white rounded-full shadow-lg flex items-center justify-center border-[4px] border-gray-100/60">
                    <Image
                      src="/Icons/Authentication.44e8ba4.webp"
                      width={52}
                      height={52}
                      alt="Authentication Integration"
                      className="rounded"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute top-1/2 right-8 transform -translate-y-1/2"
                >
                  <div className="w-15 h-15 bg-white rounded-full shadow-lg flex items-center justify-center border-[4px] border-gray-100/60">
                    <Image
                      src="/Icons/Billing.e26d6fb.webp"
                      width={52}
                      height={52}
                      alt="Billing Integration"
                      className="rounded"
                    />
                  </div>
                </motion.div>

                {/* Bottom Row Icons */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute bottom-8 left-1/3 transform -translate-x-1/2 translate-y-4"
                >
                  <div className="w-15 h-15 bg-white rounded-full shadow-lg flex items-center justify-center border-[4px] border-gray-100/60">
                    <Image
                      src="/Icons/Pharmacy.0b3ed83.webp"
                      width={52}
                      height={52}
                      alt="Pharmacy Integration"
                      className="rounded"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute bottom-0 right-1/3 transform translate-x-1/2 translate-y-8"
                >
                  <div className="w-15 h-15 bg-white rounded-full shadow-lg flex items-center justify-center border-[4px] border-gray-100/60">
                    <Image
                      src="/Icons/Chat.5394f0b.webp"
                      width={52}
                      height={52}
                      alt="Chat Integration"
                      className="rounded"
                    />
                  </div>
                </motion.div>

                {/* Additional smaller icons for mobile spacing */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute top-1/4 left-12 transform -translate-x-1/2 hidden lg:block"
                >
                  <div className="w-11 h-11 bg-white rounded-full shadow-md flex items-center justify-center border-[4px] border-gray-100/60">
                    <Image
                      src="/Icons/Inventory.c0eabf9.webp"
                      width={36}
                      height={36}
                      alt="Inventory Integration"
                      className="rounded"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute top-1/4 right-12 transform translate-x-1/2 hidden lg:block"
                >
                  <div className="w-11 h-11 bg-white rounded-full shadow-md flex items-center justify-center border-[4px] border-gray-100/60">
                    <Image
                      src="/Icons/Queuing.2f5c8c8.webp"
                      width={36}
                      height={36}
                      alt="Queuing Integration"
                      className="rounded"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 py-16 md:py-24"
              >
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                      Healthcare that <br className="hidden sm:block" />
                      <span style={{color: '#0099CC'}}>works together</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                      MYCURE integrates seamlessly with your existing healthcare workflows rather than replacing them. Our platform enhances what already works while filling critical gaps in patient records, specialist coordination, and compliance—adapting to your practice, not the other way around.
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get started
                      <ArrowRight className="ml-2 size-5" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* How It Works Section - Interactive Timeline */}
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
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                How It Works
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                What you can achieve with MYCURE{" "}
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg">in just 7 days</span>
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Transform your healthcare practice step by step with our guided onboarding process.
              </p>
            </motion.div>

            {/* Interactive Timeline */}
            <div className="max-w-4xl mx-auto">
              {/* Timeline Navigation */}
              <div className="flex justify-center mb-12">
                <div className="flex gap-4 p-2 bg-background rounded-full border border-border/40 shadow-sm">
                  {[
                    { day: "today", label: "Today" },
                    { day: "day3", label: "Day 3" },
                    { day: "day7", label: "Day 7" },
                  ].map((timepoint) => (
                    <button
                      key={timepoint.day}
                      onClick={() => setActiveDay(timepoint.day)}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeDay === timepoint.day
                          ? "bg-foreground text-background shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {timepoint.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Content */}
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-3 gap-8 mb-12"
              >
                {timelineContent[activeDay].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-background rounded-2xl p-6 border border-border/40 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          {step.icon}
                        </div>
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {step.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                              <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                            </div>
                            <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 size-5" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  No credit card required • 14-day free trial • Setup in minutes
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Download Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                    Take MYCURE with you, <br className="hidden sm:block" />
                    <span className="text-muted-foreground">everywhere you go.</span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Access your clinic management tools on any device. Desktop, mobile, tablet, or web - MYCURE works
                    seamlessly across all platforms.
                  </p>
                </div>

                {/* Device Icons */}
                <div className="flex items-center justify-center gap-8 py-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">Desktop</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">Mobile</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H3V6h18v12z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">Tablet</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">Web</span>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Link href="/download">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Download MYCURE
                    </Button>
                  </Link>
                </motion.div>

                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    <span>Available on all platforms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    <span>Sync across devices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    <span>Offline capable</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Loved by Teams Worldwide</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Don't just take our word for it. See what our customers have to say about their experience.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "SaaSify has transformed how we manage our projects. The automation features have saved us countless hours of manual work.",
                  author: "Sarah Johnson",
                  role: "Project Manager, TechCorp",
                  rating: 5,
                },
                {
                  quote:
                    "The analytics dashboard provides insights we never had access to before. It's helped us make data-driven decisions that have improved our ROI.",
                  author: "Michael Chen",
                  role: "Marketing Director, GrowthLabs",
                  rating: 5,
                },
                {
                  quote:
                    "Customer support is exceptional. Any time we've had an issue, the team has been quick to respond and resolve it. Couldn't ask for better service.",
                  author: "Emily Rodriguez",
                  role: "Operations Lead, StartupX",
                  rating: 5,
                },
                {
                  quote:
                    "We've tried several similar solutions, but none compare to the ease of use and comprehensive features of SaaSify. It's been a game-changer.",
                  author: "David Kim",
                  rating: 5,
                },
                {
                  quote:
                    "We've tried several similar solutions, but none compare to the ease of use and comprehensive features of SaaSify. It's been a game-changer.",
                  author: "David Kim",
                  role: "CEO, InnovateNow",
                  rating: 5,
                },
                {
                  quote:
                    "The collaboration tools have made remote work so much easier for our team. We're more productive than ever despite being spread across different time zones.",
                  author: "Lisa Patel",
                  role: "HR Director, RemoteFirst",
                  rating: 5,
                },
                {
                  quote:
                    "Implementation was seamless, and the ROI was almost immediate. We've reduced our operational costs by 30% since switching to SaaSify.",
                  author: "James Wilson",
                  role: "COO, ScaleUp Inc",
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
        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Pricing Plans
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Choose Your Healthcare Solution</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Try our Starter plan risk-free for 30 days. Switch plans or cancel anytime with no long-term
                commitments.
              </p>
            </motion.div>

            <div className="mx-auto max-w-7xl">
              <Tabs defaultValue="monthly" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="rounded-full p-1 bg-background border border-border/40">
                    <TabsTrigger
                      value="monthly"
                      className="rounded-full px-6 data-[state=active]:bg-foreground data-[state=active]:text-background"
                    >
                      Monthly pricing
                    </TabsTrigger>
                    <TabsTrigger
                      value="annually"
                      className="rounded-full px-6 data-[state=active]:bg-foreground data-[state=active]:text-background"
                    >
                      Annual pricing
                      <Badge className="ml-2 bg-green-100 text-green-700 text-xs">Save 20%</Badge>
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="monthly">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Plan Headers */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                      {/* Features Column Header */}
                      <div className="hidden lg:block">
                        <div className="h-32 flex items-end pb-6">
                          <h3 className="text-lg font-semibold">Features</h3>
                        </div>
                      </div>

                      {/* Plan Headers */}
                      {[
                        {
                          name: "Starter",
                          price: "$49",
                          description: "Perfect for small clinics and solo practitioners",
                          popular: false,
                          cta: "Start Free Trial",
                          icon: <Users className="w-5 h-5" />,
                        },
                        {
                          name: "Professional",
                          price: "$149",
                          description: "Ideal for growing practices and multi-specialty clinics",
                          popular: true,
                          cta: "Start Free Trial",
                          icon: <BarChart className="w-5 h-5" />,
                        },
                        {
                          name: "Enterprise",
                          price: "$349",
                          description: "For large hospitals and healthcare networks",
                          popular: false,
                          cta: "Contact Sales",
                          icon: <Shield className="w-5 h-5" />,
                        },
                      ].map((plan, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className={`relative rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${
                            plan.popular
                              ? "border-primary bg-primary/5 shadow-lg"
                              : "border-border/40 bg-background hover:border-primary/50"
                          }`}
                        >
                          {plan.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <Badge className="bg-primary text-primary-foreground px-4 py-1 text-xs font-medium">
                                Most Popular
                              </Badge>
                            </div>
                          )}

                          <div className="text-center space-y-4">
                            <div className="flex items-center justify-center gap-2">
                              <div className={`p-2 rounded-lg ${plan.popular ? "bg-primary/10" : "bg-muted"}`}>
                                {plan.icon}
                              </div>
                              <h3 className="text-xl font-bold">{plan.name}</h3>
                            </div>

                            <div>
                              <div className="flex items-baseline justify-center">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className="text-muted-foreground ml-1">/month</span>
                              </div>
                              <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                            </div>

                            <Button
                              className={`w-full rounded-full ${
                                plan.popular
                                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                                  : "bg-muted hover:bg-muted/80 text-foreground"
                              }`}
                              variant={plan.popular ? "default" : "outline"}
                            >
                              {plan.cta}
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Feature Comparison Table */}
                    <div className="bg-background rounded-2xl border border-border/40 overflow-hidden shadow-sm">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-muted/30 border-b border-border/40">
                            <tr>
                              <th className="text-left p-4 font-semibold">Features</th>
                              <th className="text-center p-4 font-semibold">Starter</th>
                              <th className="text-center p-4 font-semibold bg-primary/5">Professional</th>
                              <th className="text-center p-4 font-semibold">Enterprise</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              {
                                category: "Core Features",
                                features: [
                                  {
                                    name: "Patient Management",
                                    tooltip: "Comprehensive patient records and history tracking",
                                    starter: true,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "Appointment Scheduling",
                                    tooltip: "Advanced scheduling with automated reminders",
                                    starter: true,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "Basic Billing",
                                    tooltip: "Invoice generation and payment tracking",
                                    starter: true,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "Staff Users",
                                    tooltip: "Number of staff members who can access the system",
                                    starter: "Up to 5",
                                    professional: "Up to 25",
                                    enterprise: "Unlimited",
                                  },
                                  {
                                    name: "Patient Records",
                                    tooltip: "Maximum number of patient records you can store",
                                    starter: "Up to 500",
                                    professional: "Up to 5,000",
                                    enterprise: "Unlimited",
                                  },
                                ],
                              },
                              {
                                category: "Advanced Features",
                                features: [
                                  {
                                    name: "Advanced Analytics",
                                    tooltip: "Detailed reports and practice insights",
                                    starter: false,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "Insurance Integration",
                                    tooltip: "Automated insurance verification and claims",
                                    starter: false,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "Telemedicine",
                                    tooltip: "Built-in video consultation platform",
                                    starter: false,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "API Access",
                                    tooltip: "Integration with third-party healthcare systems",
                                    starter: false,
                                    professional: "Limited",
                                    enterprise: "Full Access",
                                  },
                                  {
                                    name: "Custom Workflows",
                                    tooltip: "Create custom processes for your practice",
                                    starter: false,
                                    professional: "Basic",
                                    enterprise: "Advanced",
                                  },
                                ],
                              },
                              {
                                category: "Support & Security",
                                features: [
                                  {
                                    name: "Email Support",
                                    tooltip: "Get help via email during business hours",
                                    starter: true,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "Priority Support",
                                    tooltip: "Faster response times and dedicated support",
                                    starter: false,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "Phone Support",
                                    tooltip: "Direct phone line to our support team",
                                    starter: false,
                                    professional: false,
                                    enterprise: true,
                                  },
                                  {
                                    name: "HIPAA Compliance",
                                    tooltip: "Full HIPAA compliance and security features",
                                    starter: true,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "Data Backup",
                                    tooltip: "Automated daily backups of all your data",
                                    starter: "Weekly",
                                    professional: "Daily",
                                    enterprise: "Real-time",
                                  },
                                ],
                              },
                            ].map((section, sectionIndex) => (
                              <React.Fragment key={sectionIndex}>
                                <tr className="bg-muted/10">
                                  <td
                                    colSpan={4}
                                    className="p-4 font-semibold text-sm uppercase tracking-wider text-muted-foreground"
                                  >
                                    {section.category}
                                  </td>
                                </tr>
                                {section.features.map((feature, featureIndex) => (
                                  <tr
                                    key={featureIndex}
                                    className="border-b border-border/20 hover:bg-muted/20 transition-colors"
                                  >
                                    <td className="p-4">
                                      <div className="flex items-center gap-2">
                                        <span className="font-medium">{feature.name}</span>
                                        <div className="group relative">
                                          <svg
                                            className="w-4 h-4 text-muted-foreground cursor-help"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                          </svg>
                                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                                            {feature.tooltip}
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="p-4 text-center">
                                      {typeof feature.starter === "boolean" ? (
                                        feature.starter ? (
                                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                                        ) : (
                                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                                        )
                                      ) : (
                                        <span className="text-sm font-medium">{feature.starter}</span>
                                      )}
                                    </td>
                                    <td className="p-4 text-center bg-primary/5">
                                      {typeof feature.professional === "boolean" ? (
                                        feature.professional ? (
                                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                                        ) : (
                                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                                        )
                                      ) : (
                                        <span className="text-sm font-medium">{feature.professional}</span>
                                      )}
                                    </td>
                                    <td className="p-4 text-center">
                                      {typeof feature.enterprise === "boolean" ? (
                                        feature.enterprise ? (
                                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                                        ) : (
                                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                                        )
                                      ) : (
                                        <span className="text-sm font-medium">{feature.enterprise}</span>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </React.Fragment>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-8 p-6 bg-muted/20 rounded-2xl border border-border/40">
                      <h3 className="text-xl font-semibold mb-2">Need a custom solution?</h3>
                      <p className="text-muted-foreground mb-4">
                        Contact our sales team to discuss enterprise features, custom integrations, and volume pricing.
                      </p>
                      <Button variant="outline" className="rounded-full">
                        Contact Sales Team
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="annually">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Annual Plan Headers */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                      {/* Features Column Header */}
                      <div className="hidden lg:block">
                        <div className="h-32 flex items-end pb-6">
                          <h3 className="text-lg font-semibold">Features</h3>
                        </div>
                      </div>

                      {/* Annual Plan Headers */}
                      {[
                        {
                          name: "Starter",
                          price: "$39",
                          originalPrice: "$49",
                          description: "Perfect for small clinics and solo practitioners",
                          popular: false,
                          cta: "Start Free Trial",
                          icon: <Users className="w-5 h-5" />,
                        },
                        {
                          name: "Professional",
                          price: "$119",
                          originalPrice: "$149",
                          description: "Ideal for growing practices and multi-specialty clinics",
                          popular: true,
                          cta: "Start Free Trial",
                          icon: <BarChart className="w-5 h-5" />,
                        },
                        {
                          name: "Enterprise",
                          price: "$279",
                          originalPrice: "$349",
                          description: "For large hospitals and healthcare networks",
                          popular: false,
                          cta: "Contact Sales",
                          icon: <Shield className="w-5 h-5" />,
                        },
                      ].map((plan, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className={`relative rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${
                            plan.popular
                              ? "border-primary bg-primary/5 shadow-lg"
                              : "border-border/40 bg-background hover:border-primary/50"
                          }`}
                        >
                          {plan.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <Badge className="bg-primary text-primary-foreground px-4 py-1 text-xs font-medium">
                                Most Popular
                              </Badge>
                            </div>
                          )}

                          <div className="text-center space-y-4">
                            <div className="flex items-center justify-center gap-2">
                              <div className={`p-2 rounded-lg ${plan.popular ? "bg-primary/10" : "bg-muted"}`}>
                                {plan.icon}
                              </div>
                              <h3 className="text-xl font-bold">{plan.name}</h3>
                            </div>

                            <div>
                              <div className="flex items-baseline justify-center gap-2">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className="text-muted-foreground ml-1">/month</span>
                              </div>
                              <div className="flex items-center justify-center gap-2 mt-1">
                                <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
                                <Badge className="bg-green-100 text-green-700 text-xs">Save 20%</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                            </div>

                            <Button
                              className={`w-full rounded-full ${
                                plan.popular
                                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                                  : "bg-muted hover:bg-muted/80 text-foreground"
                              }`}
                              variant={plan.popular ? "default" : "outline"}
                            >
                              {plan.cta}
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Same feature table as monthly */}
                    <div className="bg-background rounded-2xl border border-border/40 overflow-hidden shadow-sm">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-muted/30 border-b border-border/40">
                            <tr>
                              <th className="text-left p-4 font-semibold">Features</th>
                              <th className="text-center p-4 font-semibold">Starter</th>
                              <th className="text-center p-4 font-semibold bg-primary/5">Professional</th>
                              <th className="text-center p-4 font-semibold">Enterprise</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              {
                                category: "Core Features",
                                features: [
                                  {
                                    name: "Patient Management",
                                    tooltip: "Comprehensive patient records and history tracking",
                                    starter: true,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "Appointment Scheduling",
                                    tooltip: "Advanced scheduling with automated reminders",
                                    starter: true,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "Basic Billing",
                                    tooltip: "Invoice generation and payment tracking",
                                    starter: true,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "Staff Users",
                                    tooltip: "Number of staff members who can access the system",
                                    starter: "Up to 5",
                                    professional: "Up to 25",
                                    enterprise: "Unlimited",
                                  },
                                  {
                                    name: "Patient Records",
                                    tooltip: "Maximum number of patient records you can store",
                                    starter: "Up to 500",
                                    professional: "Up to 5,000",
                                    enterprise: "Unlimited",
                                  },
                                ],
                              },
                              {
                                category: "Advanced Features",
                                features: [
                                  {
                                    name: "Advanced Analytics",
                                    tooltip: "Detailed reports and practice insights",
                                    starter: false,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "Insurance Integration",
                                    tooltip: "Automated insurance verification and claims",
                                    starter: false,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "Telemedicine",
                                    tooltip: "Built-in video consultation platform",
                                    starter: false,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "API Access",
                                    tooltip: "Integration with third-party healthcare systems",
                                    starter: false,
                                    professional: "Limited",
                                    enterprise: "Full Access",
                                  },
                                  {
                                    name: "Custom Workflows",
                                    tooltip: "Create custom processes for your practice",
                                    starter: false,
                                    professional: "Basic",
                                    enterprise: "Advanced",
                                  },
                                ],
                              },
                              {
                                category: "Support & Security",
                                features: [
                                  {
                                    name: "Email Support",
                                    tooltip: "Get help via email during business hours",
                                    starter: true,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "Priority Support",
                                    tooltip: "Faster response times and dedicated support",
                                    starter: false,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "Phone Support",
                                    tooltip: "Direct phone line to our support team",
                                    starter: false,
                                    professional: false,
                                    enterprise: true,
                                  },
                                  {
                                    name: "HIPAA Compliance",
                                    tooltip: "Full HIPAA compliance and security features",
                                    starter: true,
                                    professional: true,
                                    enterprise: true,
                                  },
                                  {
                                    name: "Data Backup",
                                    tooltip: "Automated daily backups of all your data",
                                    starter: "Weekly",
                                    professional: "Daily",
                                    enterprise: "Real-time",
                                  },
                                ],
                              },
                            ].map((section, sectionIndex) => (
                              <React.Fragment key={sectionIndex}>
                                <tr className="bg-muted/10">
                                  <td
                                    colSpan={4}
                                    className="p-4 font-semibold text-sm uppercase tracking-wider text-muted-foreground"
                                  >
                                    {section.category}
                                  </td>
                                </tr>
                                {section.features.map((feature, featureIndex) => (
                                  <tr
                                    key={featureIndex}
                                    className="border-b border-border/20 hover:bg-muted/20 transition-colors"
                                  >
                                    <td className="p-4">
                                      <div className="flex items-center gap-2">
                                        <span className="font-medium">{feature.name}</span>
                                        <div className="group relative">
                                          <svg
                                            className="w-4 h-4 text-muted-foreground cursor-help"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                          </svg>
                                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                                            {feature.tooltip}
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="p-4 text-center">
                                      {typeof feature.starter === "boolean" ? (
                                        feature.starter ? (
                                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                                        ) : (
                                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                                        )
                                      ) : (
                                        <span className="text-sm font-medium">{feature.starter}</span>
                                      )}
                                    </td>
                                    <td className="p-4 text-center bg-primary/5">
                                      {typeof feature.professional === "boolean" ? (
                                        feature.professional ? (
                                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                                        ) : (
                                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                                        )
                                      ) : (
                                        <span className="text-sm font-medium">{feature.professional}</span>
                                      )}
                                    </td>
                                    <td className="p-4 text-center">
                                      {typeof feature.enterprise === "boolean" ? (
                                        feature.enterprise ? (
                                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                                        ) : (
                                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                                        )
                                      ) : (
                                        <span className="text-sm font-medium">{feature.enterprise}</span>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </React.Fragment>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-8 p-6 bg-muted/20 rounded-2xl border border-border/40">
                      <h3 className="text-xl font-semibold mb-2">Need a custom solution?</h3>
                      <p className="text-muted-foreground mb-4">
                        Contact our sales team to discuss enterprise features, custom integrations, and volume pricing.
                      </p>
                      <Button variant="outline" className="rounded-full">
                        Contact Sales Team
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section
          id="faq"
          className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                We've compiled a list of frequently asked questions to help you get started.
              </p>
            </motion.div>

            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              {[
                {
                  question: "What is MYCURE?",
                  answer:
                    "MYCURE is a comprehensive clinic management system designed to streamline operations, improve patient care, and boost efficiency for healthcare providers of all sizes.",
                },
                {
                  question: "How much does MYCURE cost?",
                  answer:
                    "MYCURE offers flexible pricing plans to suit different needs and budgets. Check out our pricing page for details.",
                },
                {
                  question: "Is MYCURE HIPAA compliant?",
                  answer:
                    "Yes, MYCURE is fully HIPAA compliant and employs advanced security measures to protect patient data.",
                },
                {
                  question: "What platforms does MYCURE support?",
                  answer: "MYCURE is accessible on desktop, mobile, tablet, and web browsers.",
                },
                {
                  question: "What kind of support do you offer?",
                  answer:
                    "We offer email support for all plans, with priority support and phone support available on our Professional and Enterprise plans.",
                },
                {
                  question: "Can I try MYCURE before I buy?",
                  answer: "Yes, you can start a free 14-day trial of MYCURE. No credit card is required to begin.",
                },
              ].map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-white/20 bg-white/10 backdrop-blur-sm rounded-lg mb-4 px-6"
                >
                  <AccordionTrigger className="text-white hover:text-white/80 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                    Ready to transform your healthcare practice?
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Join thousands of healthcare providers who trust MYCURE to streamline their operations and improve
                    patient care.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 size-5" />
                  </Button>
                  <Link href="/download">
                    <Button
                      variant="outline"
                      size="lg"
                      className="px-8 py-4 text-lg font-semibold rounded-full border-2 hover:bg-muted/50 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Download Apps
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    <span>Setup in minutes</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-muted/30 border-t border-border/40">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="size-8 rounded-lg bg-white flex items-center justify-center">
                  <Image src="/mycure-logo.svg" alt="MYCURE Logo" width={32} height={32} />
                </div>
                <span>MYCURE</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming healthcare management with innovative clinic solutions for providers worldwide.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-.6 2.14-2.23z" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h3 className="font-semibold">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="text-muted-foreground hover:text-foreground transition-colors">
                    Download
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">© 2024 MYCURE. All rights reserved.</p>
              <div className="flex gap-6 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  HIPAA Compliance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
