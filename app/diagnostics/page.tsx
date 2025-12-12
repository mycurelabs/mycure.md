"use client"

import React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  Clock,
  Users,
  AlertCircle,
  Calendar,
  UserX,
  FileX,
  Shield,
  Lock,
  Cloud,
  CheckCircle,
  Check,
  MessageSquare,
  WifiOff,
  Globe,
  Baby,
  Heart,
  Sparkles,
  Stethoscope,
  Building2,
  ArrowRight,
  BarChart,
  TrendingUp,
  Zap,
  CalendarCheck,
  Star,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"
import NumberTicker from "@/components/magicui/number-ticker"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text"
import * as Scrollytelling from "@bsmnt/scrollytelling"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronDown } from "lucide-react"
import { Beaker, Activity, FileCheck, CreditCard, Download, Network } from "lucide-react"

export default function DiagnosticsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("imaging")

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const solutions = [
    { 
      icon: Clock,
      title: "Wasted Time & Resources",
      description: "Transform manual processes into automated workflows saving 3+ hours daily with seamless LIS/RIS integration" 
    },
    { 
      icon: Zap,
      title: "Long Wait Times",
      description: "Turn patient delays into quick turnarounds with smart appointment booking and automated queue management" 
    },
    { 
      icon: Users,
      title: "Overworked Staff",
      description: "Convert staff stress into productivity with an easy-to-use laboratory information system that simplifies complex tasks" 
    },
    { 
      icon: CalendarCheck,
      title: "Cancelled Appointments",
      description: "Change no-shows into confirmed visits using automated reminders and flexible online rebooking" 
    },
    { 
      icon: Star,
      title: "Frustrated Patients",
      description: "Transform complaints into satisfaction with online results access and patient portal convenience" 
    },
    { 
      icon: FileCheck,
      title: "Error-prone Reports",
      description: "Replace manual errors with digital accuracy through automated validation and standardized reporting" 
    },
  ]

  const specialties = [
    { 
      icon: Beaker,
      title: "Laboratory Information System (LIS)",
      description: "Complete lab workflow automation from sample collection to result delivery with barcode tracking and quality control" 
    },
    { 
      icon: Calendar,
      title: "Booking System",
      description: "Smart appointment scheduling with automated confirmations, queue management, and walk-in handling" 
    },
    { 
      icon: Activity,
      title: "Radiology Information System (RIS)",
      description: "Comprehensive imaging center management with PACS integration, modality worklists, and structured reporting" 
    },
    { 
      icon: CreditCard,
      title: "Billing",
      description: "Integrated payment processing with insurance claims, package deals, and automated invoicing" 
    },
    { 
      icon: Download,
      title: "Online Results",
      description: "Instant digital test results delivery with secure patient portals and automated notifications" 
    },
    { 
      icon: Network,
      title: "Interoperability",
      description: "HL7-ready integration connecting with hospitals, clinics, and healthcare providers seamlessly" 
    },
  ]

  const advantages = [
    {
      title: "Easy to Integrate. Easy to Use.",
      description: "Connect seamlessly with healthcare providers and expand your diagnostic center's reach.",
      icon: Network,
      image: "/section-assets/clinic-page/carousel/carousel-network.webp",
      bullets: [
        "Get more customers through referrals from connected clinics",
        "Easily validate prescriptions and test orders",
        "Promote your diagnostic services across the network"
      ]
    },
    {
      title: "Send Test Results Instantly",
      description: "Give your patients quick access to their test results through the MYCURE app for patients.",
      icon: Download,
      image: "/section-assets/clinic-page/carousel/carousel-insights.webp",
      bullets: [
        "Patient Portal for Diagnostic Tests with secure access",
        "Tabulated Cumulative Results for easy comparison",
        "Quick Appointment Booking directly from results page"
      ]
    },
    {
      title: "Protected by MYCURE CSI Guarantee",
      description: "As a healthcare provider, your patients trust you with their private electronic health records. We protect that information with our CSI guarantee.",
      icon: Shield,
      image: "/section-assets/clinic-page/carousel/carousel-hipaa-compliance.webp",
      bullets: [
        "Compliance with healthcare regulations and standards",
        "Security with encrypted data and secure access controls",
        "Interoperability with HL7-ready integration capabilities"
      ]
    },
    {
      title: "Maintain Communication with Lab Staff",
      description: "MYCURE Diagnostics comes with its own chat feature, allowing everyone in your lab to stay in touch on busy days.",
      icon: MessageSquare,
      image: "/section-assets/clinic-page/carousel/carousel-lifeline.webp",
      bullets: [
        "Office staff can ask questions about billing without interrupting workflows",
        "Communicate with other techs at your lab quickly and efficiently",
        "Coordinate sample processing and result verification seamlessly"
      ]
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold hover:opacity-80 transition-opacity">
            <div className="size-8 rounded-full bg-white flex items-center justify-center">
              <Image src="/mycure-logo.svg" alt="MYCURE Logo" width={32} height={32} />
            </div>
            <span>MYCURE</span>
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent bg-transparent rounded-xl">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[320px] gap-1 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/booking" className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Booking</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">Let patients schedule appointments online and reduce wait times.</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/telehealth" className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Telehealth</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">Secure video consultations for virtual patient care.</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent bg-transparent rounded-xl">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-1 p-2 md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/clinics" className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Clinics</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">Streamlined workflows for outpatient clinic operations.</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/hospital" className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Hospital</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">Comprehensive management for hospital operations.</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/corporate" className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Corporate</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">Employee health programs and physical exams.</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/dental" className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Dental</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">Specialized tools for dental practice management.</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/skin" className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Skin & Aesthetics</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">Dermatology and aesthetic clinic solutions.</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/diagnostics" className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Diagnostics</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">Laboratory and imaging workflow management.</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/mobile-labs" className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Mobile Labs</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">On-site diagnostic services and specimen collection.</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#how-it-works" className="group inline-flex h-9 w-max items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground focus:outline-none">
                  How it Works
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#faq" className="group inline-flex h-9 w-max items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground focus:outline-none">
                  FAQs
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="hidden md:flex gap-4 items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link
              href="https://next.cms.mycure.md/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Log In
            </Link>
            <Link href="https://calendly.com/mycure/demo" target="_blank" rel="noopener noreferrer">
              <ShimmerButton 
                className="h-10 px-4 py-2 text-sm font-medium rounded-full" 
                background="#0099CC"
                shimmerColor="#ffffff"
                shimmerDuration="2s"
              >
                Get Started
                <ChevronRight className="ml-1 size-4" />
              </ShimmerButton>
            </Link>
          </div>
          
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <div className="py-2">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="features" className="border-none">
                    <AccordionTrigger className="py-0 hover:no-underline">
                      <span className="text-sm font-medium">Features</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link
                        href="/booking"
                        className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Booking
                      </Link>
                      <Link
                        href="/telehealth"
                        className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Telehealth
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="solutions" className="border-none">
                    <AccordionTrigger className="py-0 hover:no-underline">
                      <span className="text-sm font-medium">Solutions</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link
                        href="/clinics"
                        className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Clinics
                      </Link>
                      <Link
                        href="/hospital"
                        className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Hospital
                      </Link>
                      <Link
                        href="/corporate"
                        className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Corporate
                      </Link>
                      <Link
                        href="/dental"
                        className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Dental
                      </Link>
                      <Link
                        href="/skin"
                        className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Skin/Aesthetics
                      </Link>
                      <Link
                        href="/diagnostics"
                        className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Diagnostics
                      </Link>
                      <Link
                        href="/mobile-labs"
                        className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Mobile Labs
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <Link 
                href="/#how-it-works" 
                className="py-2 text-sm font-medium" 
                onClick={() => setMobileMenuOpen(false)}
              >
                How it Works
              </Link>
              
              <Link 
                href="/#faq" 
                className="py-2 text-sm font-medium" 
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQs
              </Link>
              
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="https://next.cms.mycure.md/" target="_blank" rel="noopener noreferrer" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Log In
                </Link>
                <Link href="https://calendly.com/mycure/demo" target="_blank" rel="noopener noreferrer">
                  <ShimmerButton 
                    className="h-10 px-4 py-2 text-sm font-medium rounded-full" 
                    background="#0099CC"
                    shimmerColor="#ffffff"
                    shimmerDuration="2s"
                  >
                    Get Started
                    <ChevronRight className="ml-1 size-4" />
                  </ShimmerButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </header>

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
                  src="/hero-section-assets/diagnostics-clinics-hero-image.webp"
                  width={600}
                  height={500}
                  alt="MYCURE Diagnostics - Laboratory and imaging center interface"
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
                        MYCURE Diagnostics
                      </AnimatedShinyText>
                    </div>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                    Your{" "}
                    <span className="text-primary">Diagnostic Center</span>{" "}
                    Transformed
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    The best tool to streamline diagnostic laboratories and imaging centers' operations, 
                    automate routine tasks, and reduce costs and errors.
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                        <solution.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold leading-tight">
                          {solution.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
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
                Everything Your Clinic Needs.<br />
                Nothing It Doesn't.
              </h2>
              
              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                MYCURE brings together the three core functions every clinic depends on—medical records, 
                patient scheduling, and billing—in one comprehensive platform that works offline and 
                reduces admin time by 60%.
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
                  src="https://www.youtube-nocookie.com/embed/KL4tCmttTPs"
                  title="MYCURE Clinic Management Platform - Complete Solution"
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

        {/* Features Section - Patient Journey */}
        <section id="features" className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30">
          <div className="container px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              {/* Header Content */}
              <div className="text-center mb-12 space-y-4">
                {/* AnimatedShinyText Badge */}
                <div className="flex justify-center mb-4">
                  <div className="rounded-full px-3 py-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 inline-flex items-center justify-center h-8">
                    <AnimatedShinyText className="text-xs font-medium !mx-0 !max-w-none !text-[#004d66] dark:!text-white !bg-gradient-to-r !from-transparent !via-[#004d66]/80 dark:!via-white/80 !via-50% !to-transparent !leading-none" shimmerWidth={150}>
                      End-to-End Workflow
                    </AnimatedShinyText>
                  </div>
                </div>
                
                {/* Headline */}
                <h2 className="text-3xl md:text-4xl font-bold">
                  How MYCURE Automates Your Entire Patient Workflow
                </h2>
                
                {/* Subheadline */}
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Discover why clinics nationwide are switching to MYCURE's integrated workflow that connects every 
                  touchpoint—from booking to billing—in one intuitive platform that your entire team 
                  can master in minutes.
                </p>
              </div>

              {/* Patient Journey Image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <Image
                  src="/section-assets/clinic-page/clinic-journey.webp"
                  alt="MYCURE Patient Journey Flow - From Appointments to Billing"
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </motion.div>

              {/* Optional Supporting Text */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 text-center"
              >
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                  Every touchpoint works together seamlessly—eliminating paperwork, reducing wait times, 
                  and ensuring a complete patient experience from start to finish.
                </p>
              </motion.div>
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
                    <NumberTicker value={1700000} delay={0.3} className="font-bold text-primary" />+
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
                    <NumberTicker value={1450000} delay={0.4} className="font-bold text-primary" />+
                  </div>
                  <div className="text-sm md:text-base font-semibold text-muted-foreground tracking-wider uppercase">
                    Lives Saved
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
                    <NumberTicker value={780} delay={0.5} className="font-bold text-primary" />+
                  </div>
                  <div className="text-sm md:text-base font-semibold text-muted-foreground tracking-wider uppercase">
                    Partner Providers
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Advanced Tools Section - Notion Style Tabs */}
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
                    Advanced Diagnostics
                  </AnimatedShinyText>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Advanced Tools for a Busy Diagnostic Center
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're here to make managing your lab so much easier. We offer full functionality for our free accounts, 
                and you only need to upgrade as your center grows. We're here to help you make the world a healthier place.
              </p>
            </motion.div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex gap-4 p-2 bg-background rounded-full border border-border/40 shadow-sm">
                {[
                  { id: "imaging", label: "Imaging" },
                  { id: "laboratory", label: "Laboratory" },
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
                      src={activeTab === "imaging" 
                        ? "/section-assets/diagnostics/diagnostics-tab-imaging.webp"
                        : "/section-assets/diagnostics/diagnostics-tab-laboratory.webp"
                      }
                      width={600}
                      height={400}
                      alt={activeTab === "imaging"
                        ? "MYCURE Diagnostics Imaging Interface - Radiology Report"
                        : "MYCURE Diagnostics Laboratory Interface - Lab Results"
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
                        {activeTab === "imaging" ? (
                          <Activity className="size-5 text-primary" />
                        ) : (
                          <Beaker className="size-5 text-primary" />
                        )}
                        <h3 className="text-2xl sm:text-3xl font-bold">
                          {activeTab === "imaging" ? "Imaging" : "Laboratory"}
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {activeTab === "imaging"
                          ? "Complete radiology report interface with ultrasound imaging capabilities"
                          : "Comprehensive lab results management with patient data tracking"}
                      </p>
                    </div>
                    <ul className="space-y-4">
                      {(activeTab === "imaging"
                        ? [
                            "Digital imaging with DICOM support and PACS integration",
                            "Structured reporting templates for consistent documentation",
                            "Real-time collaboration with referring physicians",
                            "Automated measurements and annotations"
                          ]
                        : [
                            "Automated result entry from analyzers and instruments",
                            "Reference range validation and critical value alerts",
                            "Cumulative patient history and trend analysis",
                            "Quality control tracking and compliance reporting"
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

        {/* CSI Guarantee Section - Sticky Scroll */}
        <Scrollytelling.Root
          start="top bottom"
          end="bottom top"
          scrub={true}
        >
          <section id="csi-guarantee" className="w-full py-12 sm:py-16 md:py-20 lg:py-32 mb-12 md:mb-20 lg:mb-32 relative bg-background">
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
                        MYCURE CSI Guarantee
                      </AnimatedShinyText>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mt-4">
                      Protected by Design,<br />
                      Compliant by Default
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground mt-6 max-w-lg leading-relaxed">
                      Your patients trust you with their most sensitive health information. MYCURE CSI ensures 
                      that trust is never broken with enterprise-grade security, automatic compliance, and 
                      seamless interoperability.
                    </p>
                  </motion.div>
                </div>

                {/* Progressive Feature Reveals */}
                <div className="space-y-40">
                  {/* Compliance Feature */}
                  <Scrollytelling.Animation
                    tween={{
                      start: 0,
                      end: 30,
                      from: { opacity: 0, y: 60, scale: 0.9 }
                    }}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-green-600">HIPAA-Compliant from Day One</h3>
                          <p className="text-muted-foreground">Automatic healthcare compliance</p>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Start accepting patients immediately with built-in HIPAA compliance. No configuration needed—we handle 
                        encryption, access controls, and audit logs automatically so you can focus on patient care, not paperwork.
                      </p>
                      <div className="bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-2xl p-6 border border-green-500/20">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-white/90 dark:bg-gray-800 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-sm">Compliance Status</div>
                                <div className="text-xs text-muted-foreground">100% HIPAA Compliant</div>
                              </div>
                            </div>
                            <div className="text-xs font-medium text-green-600">Active</div>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-white/90 dark:bg-gray-800 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                              <div>
                                <div className="font-semibold text-sm">Audit Logs</div>
                                <div className="text-xs text-muted-foreground">Automatic tracking enabled</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-white/90 dark:bg-gray-800 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                              <div>
                                <div className="font-semibold text-sm">Access Controls</div>
                                <div className="text-xs text-muted-foreground">Role-based permissions active</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Scrollytelling.Animation>
                  <Scrollytelling.Waypoint at={25} label="compliance" />

                  {/* Security Feature */}
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
                          <Shield className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-purple-600">Bank-Level Security Infrastructure</h3>
                          <p className="text-muted-foreground">Enterprise-grade protection</p>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Sleep soundly with our dual-layer security approach. AES-256 encryption protects your data at rest, 
                        while advanced deidentification techniques ensure patient privacy even in worst-case scenarios.
                      </p>
                      <div className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 rounded-2xl p-6 border border-purple-500/20">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-white/90 dark:bg-gray-800 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                <Shield className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-sm">AES-256 Encryption</div>
                                <div className="text-xs text-muted-foreground">Military-grade data protection</div>
                              </div>
                            </div>
                            <div className="text-xs font-medium text-purple-600">Active</div>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-white/90 dark:bg-gray-800 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                              <div>
                                <div className="font-semibold text-sm">Data Deidentification</div>
                                <div className="text-xs text-muted-foreground">Automated anonymization</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-white/90 dark:bg-gray-800 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                              <div>
                                <div className="font-semibold text-sm">Dual-Layer Protection</div>
                                <div className="text-xs text-muted-foreground">Encryption + anonymization</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Scrollytelling.Animation>
                  <Scrollytelling.Waypoint at={50} label="security" />

                  {/* Interoperability Feature */}
                  <Scrollytelling.Animation
                    tween={{
                      start: 35,
                      end: 65,
                      from: { opacity: 0, y: 60, scale: 0.9 }
                    }}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                          <Cloud className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-blue-600">Connect with Any Healthcare System</h3>
                          <p className="text-muted-foreground">Universal interoperability</p>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Break down data silos and connect seamlessly with labs, hospitals, pharmacies, and insurance providers. 
                        Share records, receive results, and process claims—all from one unified platform.
                      </p>
                      <div className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 rounded-2xl p-6 border border-blue-500/20">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-white/90 dark:bg-gray-800 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <Cloud className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-sm">Healthcare Network</div>
                                <div className="text-xs text-muted-foreground">Comprehensive connectivity</div>
                              </div>
                            </div>
                            <div className="text-xs font-medium text-blue-600">Connected</div>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-white/90 dark:bg-gray-800 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                              <div>
                                <div className="font-semibold text-sm">Lab & Diagnostic Centers</div>
                                <div className="text-xs text-muted-foreground">Instant result sharing</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-white/90 dark:bg-gray-800 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                              <div>
                                <div className="font-semibold text-sm">Insurance & HMO Partners</div>
                                <div className="text-xs text-muted-foreground">Streamlined claims processing</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Scrollytelling.Animation>
                  <Scrollytelling.Waypoint at={75} label="interoperability" />
                </div>
              </div>
            </div>
          </section>
        </Scrollytelling.Root>

        {/* Offline Capability Section - Vertical Layout */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
          <div className="container px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-8"
            >
              {/* Animated Badge */}
              <div className="flex justify-center">
                <div className="rounded-full px-3 py-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 inline-flex items-center justify-center h-8">
                  <AnimatedShinyText className="text-xs font-medium !mx-0 !max-w-none !text-[#004d66] dark:!text-white !bg-gradient-to-r !from-transparent !via-[#004d66]/80 dark:!via-white/80 !via-50% !to-transparent !leading-none" shimmerWidth={150}>
                    Always-On Diagnostics
                  </AnimatedShinyText>
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
                Process Results Anywhere, Anytime
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                MYCURE's offline mode keeps your diagnostic center fully operational. 
                Process lab results, queue test orders, and manage reports seamlessly—all data 
                synchronizes intelligently when you reconnect.
              </p>

              {/* Offline Sync Video */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full max-w-xl mt-8"
              >
                <div className="overflow-hidden rounded-2xl">
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
                    aria-label="MYCURE Diagnostics Offline - Always-On Operations"
                  />
                </div>
              </motion.div>

              {/* Feature Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-3xl"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Process Lab Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Enter and process lab results even without internet connectivity
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Queue Test Orders</h3>
                  <p className="text-sm text-muted-foreground">
                    Create and queue test orders locally for automatic processing
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Smart Result Sync</h3>
                  <p className="text-sm text-muted-foreground">
                    Intelligent synchronization ensures all results are delivered accurately
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Specialties Section - Card Grid Style */}
        <section id="specialties" className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30">
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
                    Specialized Workflows
                  </AnimatedShinyText>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                One Platform. Every Specialty.
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                MYCURE adapts to your practice with specialized workflows for every medical field. 
                Experience healthcare technology that speaks your specialty's language.
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {specialties.map((specialty, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                        <specialty.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold leading-tight">
                          {specialty.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {specialty.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Advantages Section - Image + Content Features */}
        <section id="advantages" className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
          <div className="container px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <div className="rounded-full px-3 py-1 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 inline-block h-8 flex items-center justify-center">
                <AnimatedShinyText className="text-xs font-medium !mx-0 !max-w-none !text-[#004d66] dark:!text-white !bg-gradient-to-r !from-transparent !via-[#004d66]/80 dark:!via-white/80 !via-50% !to-transparent !leading-none !flex !items-center" shimmerWidth={150}>
                  The MYCURE Advantage
                </AnimatedShinyText>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Why Clinics Choose MYCURE</h2>
              <p className="max-w-[800px] text-muted-foreground text-xl md:text-2xl leading-relaxed">
                Experience the features that make MYCURE the trusted choice for clinics nationwide.
              </p>
            </motion.div>

            <div className="space-y-20">
              {/* Feature 1 - HIPAA Telehealth */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="relative order-2 lg:order-1">
                  <Image
                    src={advantages[0].image}
                    width={480}
                    height={320}
                    alt={advantages[0].title}
                    className="relative rounded-xl"
                  />
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="space-y-4">
                    <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                      {React.createElement(advantages[0].icon, { className: "size-6" })}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{advantages[0].title}</h3>
                    <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                      {advantages[0].description}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {advantages[0].bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="size-5 text-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Feature 2 - Send Test Results */}
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
                      {React.createElement(advantages[1].icon, { className: "size-6" })}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{advantages[1].title}</h3>
                    <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                      {advantages[1].description}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {advantages[1].bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="size-5 text-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative lg:order-1">
                  <Image
                    src={advantages[1].image}
                    width={480}
                    height={320}
                    alt={advantages[1].title}
                    className="relative rounded-xl"
                  />
                </div>
              </motion.div>

              {/* Feature 3 - MYCURE CSI */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="relative order-2 lg:order-1">
                  <Image
                    src={advantages[2].image}
                    width={480}
                    height={320}
                    alt={advantages[2].title}
                    className="relative rounded-xl"
                  />
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="space-y-4">
                    <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                      {React.createElement(advantages[2].icon, { className: "size-6" })}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{advantages[2].title}</h3>
                    <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                      {advantages[2].description}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {advantages[2].bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="size-5 text-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Feature 4 - Staff Communication */}
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
                      {React.createElement(advantages[3].icon, { className: "size-6" })}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{advantages[3].title}</h3>
                    <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                      {advantages[3].description}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {advantages[3].bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="size-5 text-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative lg:order-1">
                  <Image
                    src={advantages[3].image}
                    width={480}
                    height={320}
                    alt={advantages[3].title}
                    className="relative rounded-xl"
                  />
                </div>
              </motion.div>
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
                    Ready to <span className="text-[#0099CC]">transform</span> your diagnostic center?
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Join hundreds of labs and imaging centers who trust MYCURE to streamline their operations and deliver
                    better patient care.
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
                      Transform Your Diagnostic Center
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