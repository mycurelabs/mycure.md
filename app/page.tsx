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
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { RainbowButton } from "@/components/magicui/rainbow-button"
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text"
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"
import NumberTicker from "@/components/magicui/number-ticker"
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
            <div className="size-8 rounded-full bg-white flex items-center justify-center">
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
            <ShimmerButton 
              className="h-10 px-4 py-2 text-sm font-medium rounded-full" 
              background="#0099CC"
              shimmerColor="#ffffff"
              shimmerDuration="2s"
            >
              Get Started
              <ChevronRight className="ml-1 size-4" />
            </ShimmerButton>
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
              
              <Link href="#our-story" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Our Story
              </Link>
              
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="#" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
                <ShimmerButton 
                  className="h-10 px-4 py-2 text-sm font-medium rounded-full" 
                  background="#0099CC"
                  shimmerColor="#ffffff"
                  shimmerDuration="2s"
                >
                  Get Started
                  <ChevronRight className="ml-1 size-4" />
                </ShimmerButton>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden text-white relative brand-gradient-bg">
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
              <div className="mb-6">
                <div className="rounded-full px-4 py-1.5 bg-white/90 border border-white/30 backdrop-blur-sm shadow-lg inline-block">
                  <AnimatedGradientText
                    className="text-sm font-medium"
                    colorFrom="#0099CC"
                    colorTo="#FF6B35"
                    speed={1.5}
                  >
                    🚀 INTRODUCING: MYCURE X
                  </AnimatedGradientText>
                </div>
              </div>
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
                <RainbowButton
                  variant="outline"
                  size="lg"
                  className="!h-12 !px-8 !font-semibold !rounded-full whitespace-nowrap"
                >
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </RainbowButton>
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
        <section className="w-full py-16 md:py-20 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center space-y-6 md:space-y-8 text-center"
            >
              <p className="text-sm font-medium text-muted-foreground">Trusted by leading healthcare providers</p>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-8 md:space-y-12 max-w-6xl mx-auto"
              >
                {/* Top Row - 5 Logos */}
                <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-12 flex-wrap">
                  {[
                    { name: "Medicard", src: "/Client Logos/Medicard.png" },
                    { name: "Skin 101", src: "/Client Logos/Skin 101.png" },
                    { name: "Premier Medical Center", src: "/Client Logos/Premier Medical Center.png" },
                    { name: "Duya Med Diagnostic Clinic", src: "/Client Logos/Duya Med Diagnostic Clinic.png" },
                    { name: "Ferrer OB-GYN and Medical Clinic", src: "/Client Logos/Ferrer OB-GYN and Medical Clinic.png" }
                  ].map((logo, index) => (
                    <motion.div
                      key={logo.name}
                      variants={item}
                      className="relative group flex items-center justify-center p-2"
                      whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
                    >
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        width={120}
                        height={60}
                        className="w-16 h-10 sm:w-18 sm:h-11 md:w-20 md:h-12 lg:w-24 lg:h-14 object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-105"
                      />
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-sm font-medium rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none z-50 whitespace-nowrap">
                        {logo.name}
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></span>
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Bottom Row - 5 Logos */}
                <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-12 flex-wrap">
                  {[
                    { name: "Vicente L. Danguilan Memorial Clinic", src: "/Client Logos/Vicente L. Danguilan Memorial Clinic .jpeg" },
                    { name: "Lablife Medical & Diagnostic Center", src: "/Client Logos/Lablife Medical & Diagnostic Center-Murphy Cubao.png" },
                    { name: "Newport EW Villa Medica", src: "/Client Logos/Newport EW Villa Medica.png" },
                    { name: "PhilCare", src: "/Client Logos/PhilCare.png" },
                    { name: "Unihealth Parañaque Hospital ENT Center", src: "/Client Logos/Unihealth Parañaque Hospital ENT Center.png" }
                  ].map((logo, index) => (
                    <motion.div
                      key={logo.name}
                      variants={item}
                      className="relative group flex items-center justify-center p-2"
                      whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
                    >
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        width={120}
                        height={60}
                        className="w-16 h-10 sm:w-18 sm:h-11 md:w-20 md:h-12 lg:w-24 lg:h-14 object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-105"
                      />
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-sm font-medium rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none z-50 whitespace-nowrap">
                        {logo.name}
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></span>
                      </span>
                    </motion.div>
                  ))}
                </div>
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
              <div className="rounded-full px-3 py-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 inline-block h-8 flex items-center justify-center">
                <AnimatedShinyText className="text-xs font-medium !mx-0 !max-w-none !text-[#004d66] dark:!text-white !bg-gradient-to-r !from-transparent !via-[#004d66]/80 dark:!via-white/80 !via-50% !to-transparent" shimmerWidth={150}>
                  Features
                </AnimatedShinyText>
              </div>
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
        <section className="w-full py-20 md:py-32 text-primary-foreground relative overflow-hidden brand-gradient-bg">
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
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                    <NumberTicker value={3239859} delay={0.3} className="font-bold text-primary" />
                  </div>
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
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                    <NumberTicker value={446953} delay={0.4} className="font-bold text-primary" />
                  </div>
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
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                    <NumberTicker value={1242974} delay={0.5} className="font-bold text-primary" />
                  </div>
                  <div className="text-sm md:text-base font-semibold text-muted-foreground tracking-wider uppercase">
                    Transactions Completed
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Image + Content Features Section */}
        <section className="w-full py-20 md:py-32 bg-white dark:bg-[#1a1a1a]">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <div className="rounded-full px-3 py-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 inline-block h-8 flex items-center justify-center">
                <AnimatedShinyText className="text-xs font-medium !mx-0 !max-w-none !text-[#004d66] dark:!text-white !bg-gradient-to-r !from-transparent !via-[#004d66]/80 dark:!via-white/80 !via-50% !to-transparent !leading-none !flex !items-center" shimmerWidth={150}>
                  Why Choose MYCURE
                </AnimatedShinyText>
              </div>
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
                <div className="relative order-2 lg:order-1">
                  <Image
                    src="/Features Photos/Built for Modern Teams/Hipaa-compliance-mycure.webp"
                    width={480}
                    height={320}
                    alt="HIPAA Security & Compliance"
                    className="relative rounded-xl"
                  />
                </div>
                <div className="space-y-6 order-1 lg:order-2">
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
                  <Button variant="outline" className="mt-4 rounded-full h-12" asChild>
                    <Link href="https://blog.mycure.md/mycure-is-hipaa-compliant/" target="_blank">
                      Learn About MYCURE's Privacy Standards
                      <ChevronRight className="ml-2 size-4" />
                    </Link>
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
                  <Button variant="outline" className="mt-4 rounded-full h-12" asChild>
                    <Link href="https://www.mycure.md/syncbase" target="_blank">
                      Learn About Syncbase
                      <ChevronRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative lg:order-1">
                  <div className="w-[480px] overflow-hidden rounded-xl mx-auto lg:mx-0">
                    <video
                      src="/Features Photos/Built for Modern Teams/mycure-syncbase-demo.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto object-cover"
                      style={{ 
                        transform: 'scale(1.02)', 
                        transformOrigin: 'center',
                        clipPath: 'inset(0 2px 0 2px)'
                      }}
                      aria-label="Seamless Offline Operations Demo"
                    />
                  </div>
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
                <div className="relative order-2 lg:order-1">
                  <Image
                    src="/Features Photos/Built for Modern Teams/philhealth-accreditation-v2.png"
                    width={480}
                    height={320}
                    alt="PhilHealth Claims Management"
                    className="relative rounded-xl"
                  />
                </div>
                <div className="space-y-6 order-1 lg:order-2">
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
                  <Button variant="outline" className="mt-4 rounded-full h-12" asChild>
                    <Link href="https://blog.mycure.md/mycure-is-philhealth-e-claims-certified/" target="_blank">
                      Learn More about MYCURE's Accreditation
                      <ChevronRight className="ml-2 size-4" />
                    </Link>
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
                  <Button variant="outline" className="mt-4 rounded-full h-12" asChild>
                    <Link href="https://www.mycure.md/features" target="_blank">
                      Learn More about MYCURE's Features
                      <ChevronRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative lg:order-1">
                  <Image
                    src="/Features Photos/Built for Modern Teams/effortless-clinical-workflows-v3.png"
                    width={480}
                    height={320}
                    alt="Clinical Workflows"
                    className="relative rounded-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Company Visibility Features Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6 mx-auto max-w-6xl">
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
                  <img
                    src="/Features Photos/Visibility for your entire clinic/eliminate-unnecessary-tool-costs.png"
                    alt="MYCURE platform showing elimination of unnecessary tool costs with comprehensive features"
                    className="w-full h-64 object-cover object-top rounded-xl"
                  />
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
                  <img
                    src="/Features Photos/Visibility for your entire clinic/reduce-administrative-burden.png"
                    alt="MYCURE dashboard reducing administrative burden through intelligent automation"
                    className="w-full h-64 object-cover object-top rounded-xl"
                  />
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
                  <img
                    src="/Features Photos/Visibility for your entire clinic/improve-patient-satisfaction.png"
                    alt="MYCURE clinic management dashboard showing patient management features"
                    className="w-full h-64 object-cover object-top rounded-xl"
                  />
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
                  <img
                    src="/Features Photos/Visibility for your entire clinic/protect-your-revenue.png"
                    alt="MYCURE revenue protection dashboard showing compliance monitoring and HIPAA security features"
                    className="w-full h-64 object-cover object-top rounded-xl"
                  />
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
                    <div className="rounded-full px-3 py-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 inline-flex items-center justify-center h-8 w-fit">
                      <AnimatedShinyText className="text-xs font-medium !mx-0 !max-w-none !text-[#004d66] dark:!text-white !bg-gradient-to-r !from-transparent !via-[#004d66]/80 dark:!via-white/80 !via-50% !to-transparent !leading-none" shimmerWidth={140}>
                        Healthcare Excellence
                      </AnimatedShinyText>
                    </div>
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
                          <div className="flex items-center justify-between p-3 bg-white/90 dark:bg-gray-800 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <Calendar className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-sm">Dr. Smith - Cardiology</div>
                                <div className="text-xs text-muted-foreground">Today 2:30 PM</div>
                              </div>
                            </div>
                            <div className="text-xs bg-primary/30 dark:bg-primary/60 border border-primary/40 dark:border-primary/70 rounded-full px-3 py-1 inline-flex items-center justify-center h-7 min-w-fit">
                              <AnimatedShinyText className="!mx-0 !max-w-none !text-[#004d66] dark:!text-white !bg-gradient-to-r !from-transparent !via-[#004d66]/80 dark:!via-white/80 !via-50% !to-transparent !leading-none !flex !items-center" shimmerWidth={120}>Confirmed</AnimatedShinyText>
                            </div>
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
                        <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center">
                          <Zap className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-purple-600">Operations That Actually Work</h3>
                          <p className="text-muted-foreground">Intelligent automation</p>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        See your entire practice come alive with intelligent automation. Real-time insights reveal optimization opportunities while smart scheduling eliminates bottlenecks—turning operational chaos into competitive advantage.
                      </p>
                      <div className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 rounded-2xl p-6 border border-purple-500/20">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-white/90 dark:bg-gray-800 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                <Zap className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-sm">Patient Records</div>
                                <div className="text-xs text-muted-foreground">2,847 active files</div>
                              </div>
                            </div>
                            <div className="text-xs bg-purple-500/30 dark:bg-purple-500/60 border border-purple-500/40 dark:border-purple-500/70 rounded-full px-3 py-1 inline-flex items-center justify-center h-7 min-w-fit">
                              <AnimatedShinyText className="!mx-0 !max-w-none !text-purple-600 dark:!text-purple-200 !bg-gradient-to-r !from-transparent !via-purple-600/80 dark:!via-purple-200/80 !via-50% !to-transparent !leading-none !flex !items-center" shimmerWidth={160}>HIPAA Compliant</AnimatedShinyText>
                            </div>
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
                          <div className="flex items-center justify-between p-3 bg-white/90 dark:bg-gray-800 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                <Video className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-sm">Security Status</div>
                                <div className="text-xs text-muted-foreground">256-bit AES encryption</div>
                              </div>
                            </div>
                            <div className="text-xs bg-orange-500/30 dark:bg-orange-500/60 border border-orange-500/40 dark:border-orange-500/70 rounded-full px-3 py-1 inline-flex items-center justify-center h-7 min-w-fit">
                              <AnimatedShinyText className="!mx-0 !max-w-none !text-orange-600 dark:!text-orange-200 !bg-gradient-to-r !from-transparent !via-orange-600/80 dark:!via-orange-200/80 !via-50% !to-transparent !leading-none !flex !items-center" shimmerWidth={100}>Active</AnimatedShinyText>
                            </div>
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
                        <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center">
                          <WifiOff className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-green-600">Your Practice, Always On</h3>
                          <p className="text-muted-foreground">Offline-first design</p>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Discover true peace of mind with offline-first design. Whether internet fails or power fluctuates, your practice continues uninterrupted. When connectivity returns, everything syncs perfectly—like the disruption never happened.
                      </p>
                      <div className="bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-2xl p-6 border border-green-500/20">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-white/90 dark:bg-gray-800 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <WifiOff className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-sm">Practice Analytics</div>
                                <div className="text-xs text-muted-foreground">Real-time insights</div>
                              </div>
                            </div>
                            <div className="text-xs bg-green-500/30 dark:bg-green-500/60 border border-green-500/40 dark:border-green-500/70 rounded-full px-3 py-1 inline-flex items-center justify-center h-7 min-w-fit">
                              <AnimatedShinyText className="!mx-0 !max-w-none !text-green-600 dark:!text-green-200 !bg-gradient-to-r !from-transparent !via-green-600/80 dark:!via-green-200/80 !via-50% !to-transparent !leading-none !flex !items-center" shimmerWidth={110}>SYNCED</AnimatedShinyText>
                            </div>
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
                  className="absolute top-0 left-4 sm:left-8 md:left-1/4 transform -translate-x-1/2 -translate-y-8"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 bg-white rounded-full shadow-lg flex items-center justify-center border-[4px] border-gray-100/60">
                    <Image
                      src="/Icons/Laboratory.73d89a4.webp"
                      width={40}
                      height={40}
                      alt="Laboratory Integration"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute top-8 right-4 sm:right-12 md:right-1/4 transform translate-x-1/2 -translate-y-12 sm:-translate-y-16 md:-translate-y-4"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 bg-white rounded-full shadow-lg flex items-center justify-center border-[4px] border-gray-100/60">
                    <Image
                      src="/Icons/Imaging.6ce014b.webp"
                      width={40}
                      height={40}
                      alt="Medical Imaging Integration"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded"
                    />
                  </div>
                </motion.div>

                {/* Middle Row Icons */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute top-1/2 left-1 sm:left-8 md:left-8 transform -translate-y-1/2 hidden md:block"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 bg-white rounded-full shadow-lg flex items-center justify-center border-[4px] border-gray-100/60">
                    <Image
                      src="/Icons/Authentication.44e8ba4.webp"
                      width={40}
                      height={40}
                      alt="Authentication Integration"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute top-1/2 right-1 sm:right-8 md:right-8 transform -translate-y-1/2 hidden md:block"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 bg-white rounded-full shadow-lg flex items-center justify-center border-[4px] border-gray-100/60">
                    <Image
                      src="/Icons/Billing.e26d6fb.webp"
                      width={40}
                      height={40}
                      alt="Billing Integration"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded"
                    />
                  </div>
                </motion.div>

                {/* Bottom Row Icons */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute bottom-8 left-8 sm:left-16 md:left-1/3 transform -translate-x-1/2 translate-y-8 sm:translate-y-12 md:translate-y-4"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 bg-white rounded-full shadow-lg flex items-center justify-center border-[4px] border-gray-100/60">
                    <Image
                      src="/Icons/Pharmacy.0b3ed83.webp"
                      width={40}
                      height={40}
                      alt="Pharmacy Integration"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute bottom-0 right-8 sm:right-16 md:right-1/3 transform translate-x-1/2 translate-y-12 sm:translate-y-16 md:translate-y-8"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 bg-white rounded-full shadow-lg flex items-center justify-center border-[4px] border-gray-100/60">
                    <Image
                      src="/Icons/Chat.5394f0b.webp"
                      width={40}
                      height={40}
                      alt="Chat Integration"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded"
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
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white rounded-full shadow-md flex items-center justify-center border-[4px] border-gray-100/60">
                    <Image
                      src="/Icons/Inventory.c0eabf9.webp"
                      width={28}
                      height={28}
                      alt="Inventory Integration"
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded"
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
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white rounded-full shadow-md flex items-center justify-center border-[4px] border-gray-100/60">
                    <Image
                      src="/Icons/Queuing.2f5c8c8.webp"
                      width={28}
                      height={28}
                      alt="Queuing Integration"
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded"
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
                    <ShimmerButton
                      className="px-6 py-3 text-base font-semibold rounded-full shadow-lg hover:shadow-xl mx-auto flex items-center justify-center gap-2"
                      background="#0099CC"
                      shimmerColor="#ffffff"
                      shimmerDuration="3s"
                    >
                      Get started
                      <ArrowRight className="size-4" />
                    </ShimmerButton>
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
              <div className="rounded-full px-3 py-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 inline-block h-8 flex items-center justify-center">
                <AnimatedShinyText className="text-xs font-medium !mx-0 !max-w-none !text-[#004d66] dark:!text-white !bg-gradient-to-r !from-transparent !via-[#004d66]/80 dark:!via-white/80 !via-50% !to-transparent" shimmerWidth={150}>
                  How It Works
                </AnimatedShinyText>
              </div>
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
                          ? "text-white shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                      style={activeDay === timepoint.day ? { backgroundColor: '#0099CC' } : undefined}
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
                <ShimmerButton
                  className="px-6 py-3 text-base font-semibold rounded-full shadow-lg hover:shadow-xl mx-auto flex items-center justify-center gap-2"
                  background="#0099CC"
                  shimmerColor="#ffffff"
                  shimmerDuration="3s"
                >
                  Start Free Trial
                  <ArrowRight className="size-4" />
                </ShimmerButton>
                <p className="text-sm text-muted-foreground mt-4">
                  No credit card required • 15-day free trial • Setup in minutes
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section
          id="faq"
          className="w-full py-20 md:py-32 text-white relative overflow-hidden brand-gradient-bg"
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
                    "MYCURE is a comprehensive healthcare management platform designed specifically for clinics, hospitals, and healthcare facilities. From patient registration to PhilHealth claims, we streamline every aspect of your practice while ensuring HIPAA compliance and operational efficiency.",
                },
                {
                  question: "How much does MYCURE cost?",
                  answer:
                    "MYCURE offers flexible pricing plans designed for healthcare facilities of all sizes, from small clinics to large hospitals. Our plans include all essential features with transparent pricing and no hidden fees. Contact us or start a free trial to explore the best option for your practice.",
                },
                {
                  question: "Is MYCURE compliant with healthcare regulations?",
                  answer:
                    "MYCURE is a comprehensive healthcare management platform designed specifically for clinics, hospitals, and healthcare facilities. From patient registration to PhilHealth claims, we streamline every aspect of your practice while ensuring HIPAA compliance and operational efficiency.",
                },
                {
                  question: "What platforms does MYCURE support?",
                  answer: "MYCURE works on desktop computers through web browsers (Chrome, Firefox, Safari) and as downloadable applications for Windows and Mac. Our platform also includes mobile-responsive patient portals and offline capabilities for uninterrupted practice operations.",
                },
                {
                  question: "What kind of support do you offer healthcare providers?",
                  answer:
                    "We provide specialized healthcare support through our two-tier team of Helpdesk and Technical specialists who understand clinic workflows and regulatory requirements. Our support includes Monday-Friday 9am-6pm coverage with up to 2-hour response times, on-call assistance for critical patient care issues, healthcare-focused training for medical staff, and ongoing CMS optimization guidance tailored to your practice needs.",
                },
                {
                  question: "Can I try MYCURE before committing?",
                  answer: "Yes! Start with our 15-day free trial that includes full platform access, dedicated onboarding support, and no credit card requirement. Most practices are fully operational within their first week of implementation.",
                },
              ].map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-white/20 bg-white/10 backdrop-blur-sm rounded-lg mb-4 px-6"
                >
                  <AccordionTrigger className="text-white hover:text-white/80 text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 text-xl leading-relaxed">{faq.answer}</AccordionContent>
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
                    Ready to <span className="text-[#0099CC]">transform</span> your healthcare practice?
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Join thousands of healthcare providers who trust MYCURE to streamline their operations and improve
                    patient care.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <ShimmerButton
                    className="h-12 px-6 py-3 text-base font-semibold rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    background="#0099CC"
                    shimmerColor="#ffffff"
                    shimmerDuration="3s"
                  >
                    Get Started Today
                    <ArrowRight className="size-4" />
                  </ShimmerButton>
                  <Button
                    variant="outline"
                    className="h-12 px-6 py-3 text-base font-semibold rounded-full border-2 hover:bg-muted/50 transition-all duration-300 flex items-center justify-center"
                  >
                    Schedule a Demo
                  </Button>
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
                    <span>Complete training included</span>
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

      {/* Footer */}
      <footer className="w-full bg-muted/30 border-t border-border/40">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 py-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="size-8 rounded-full bg-white flex items-center justify-center">
                  <Image src="/mycure-logo.svg" alt="MYCURE Logo" width={32} height={32} />
                </div>
                <span>MYCURE</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming healthcare management with innovative clinic solutions for providers worldwide.
              </p>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/mycure.md/" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link href="https://www.instagram.com/mycure.md/" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com/company/mycure" className="text-muted-foreground hover:text-foreground transition-colors">
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
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Telehealth
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Directory
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Patient Portal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <h3 className="font-semibold">Solutions</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Outpatient Clinics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Hospitals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Diagnostics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Laboratories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pharmacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Dental Clinics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Skin Clinics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    OFW Clinics
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
                    Security (CSI)
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
