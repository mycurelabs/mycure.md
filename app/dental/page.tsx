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
  ClipboardList,
  Package,
  MessageCircle,
  GraduationCap,
  DollarSign,
  Package2,
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

export default function DentalPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

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
      icon: Stethoscope,
      title: "Digital Charting",
      description: "Transform paper charts into interactive digital tooth maps with visual treatment planning and periodontal tracking" 
    },
    { 
      icon: CalendarCheck,
      title: "Appointment Precision",
      description: "Turn scheduling chaos into organized workflows - never miss an appointment, never miss a tooth" 
    },
    { 
      icon: Package,
      title: "Inventory Management",
      description: "Convert supply tracking headaches into automated inventory management for dental materials and equipment" 
    },
    { 
      icon: DollarSign,
      title: "Integrated Billing",
      description: "Change complex insurance claims into streamlined billing with automated processing and patient payment tracking" 
    },
    { 
      icon: MessageCircle,
      title: "Team Communication",
      description: "Transform fragmented communication into seamless team coordination with built-in chat for your dental practice" 
    },
    { 
      icon: GraduationCap,
      title: "Student Support",
      description: "Replace learning barriers with free webinar series and training resources for dentistry students and new practitioners" 
    },
  ]

  const specialties = [
    { 
      icon: Stethoscope,
      title: "Visual Dental Charting",
      description: "Interactive tooth mapping with periodontal charts, treatment notes, and visual documentation for comprehensive patient records" 
    },
    { 
      icon: ClipboardList,
      title: "Treatment Planning",
      description: "Create comprehensive treatment plans with cost estimates, phase scheduling, and patient consent tracking" 
    },
    { 
      icon: Sparkles,
      title: "Orthodontics Support",
      description: "Track braces adjustments, aligner progress, and orthodontic treatment milestones with specialized tools" 
    },
    { 
      icon: Shield,
      title: "Endodontics Tools",
      description: "Root canal tracking, procedure documentation, and endodontic treatment history management" 
    },
    { 
      icon: Baby,
      title: "Pediatric Dentistry",
      description: "Child-friendly interfaces, behavior management notes, and specialized pediatric dental charting" 
    },
    { 
      icon: Heart,
      title: "Oral Surgery",
      description: "Surgical procedure planning, post-operative tracking, and comprehensive surgical documentation" 
    },
  ]

  const advantages = [
    {
      title: "HIPAA-Compliant Telehealth Platform",
      description: "Your patients' privacy matters to us, which is why we've gone the extra mile to meet the standards of the United States' Health Insurance Portability and Accountability Act (HIPAA).",
      icon: Shield,
      image: "/section-assets/clinic-page/carousel/carousel-hipaa-compliance.webp",
      bullets: [
        "End-to-end encrypted video consultations protecting patient privacy",
        "HIPAA-compliant storage and transmission of all telehealth records",
        "Integrated billing for virtual consultations with automatic documentation"
      ]
    },
    {
      title: "Gain New Insights Into Your Clinic",
      description: "Thanks to the daily reports tool on MYCURE, you'll be able to identify problems before they result in inconveniences for your patients and staff.",
      icon: BarChart,
      image: "/section-assets/clinic-page/carousel/carousel-insights.webp",
      bullets: [
        "Real-time dashboards showing patient flow and clinic performance metrics",
        "Automated daily reports highlighting areas for improvement",
        "Predictive analytics to forecast busy periods and optimize staffing"
      ]
    },
    {
      title: "A Lifeline for Your Clinic",
      description: "Use MYCURE Clinics' cloud-based system to digitize your patients' records. You'll be able to glance over electronic copies of complete health records all in one place!",
      icon: Cloud,
      image: "/section-assets/clinic-page/carousel/carousel-lifeline.webp",
      bullets: [
        "Instant access to complete patient histories from any device",
        "Automatic backups ensuring your data is never lost",
        "Seamless migration from paper records with our digitization support"
      ]
    },
    {
      title: "Easy Appointment Booking for Your Patients",
      description: "Make booking appointments easy for your patients with MYCURE Booking. Your patients can use the app to see your availability and book appointments.",
      icon: Calendar,
      image: "/section-assets/clinic-page/carousel/carousel-booking.webp",
      bullets: [
        "24/7 online booking reducing phone calls and administrative work",
        "Smart scheduling that prevents double-booking and optimizes clinic time",
        "Automated reminders reducing no-shows by up to 70%"
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
                  src="/hero-section-assets/dental-clinics-hero-image.webp"
                  width={600}
                  height={500}
                  alt="MYCURE Dental - Advanced dental practice management"
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
                        MYCURE for Dental
                      </AnimatedShinyText>
                    </div>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                    The Complete{" "}
                    <span className="text-primary">Dental Practice Management</span>{" "}
                    Platform
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Everything your dental clinic needs from appointments, billing, inventory, to advanced charting. 
                    Transform your dental practice with digital tools designed specifically for dentists.
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
                    Transform Your Dental Practice
                  </AnimatedShinyText>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Turn Dental Challenges Into Practice Success
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                See how MYCURE Dental transforms common dental practice challenges into powerful competitive advantages
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
                    Complete Dental Solution
                  </AnimatedShinyText>
                </div>
              </div>
              
              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Everything Your Dental Practice Needs.<br />
                Nothing It Doesn't.
              </h2>
              
              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                MYCURE brings together advanced dental charting, appointment management, 
                and billing in one comprehensive platform designed specifically for dental practices, 
                reducing chair-side admin time by 60%.
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
                      Dental Workflow Excellence
                    </AnimatedShinyText>
                  </div>
                </div>
                
                {/* Headline */}
                <h2 className="text-3xl md:text-4xl font-bold">
                  How MYCURE Streamlines Your Dental Practice Workflow
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
                  src="/section-assets/dental-clinics/dental-workflow.webp"
                  alt="MYCURE Dental Workflow - From Booking to Treatment"
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
                    <NumberTicker value={13239859} delay={0.3} className="font-bold text-primary" />
                  </div>
                  <div className="text-sm md:text-base font-semibold text-muted-foreground tracking-wider uppercase">
                    Dental Records
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
                    <NumberTicker value={2946953} delay={0.4} className="font-bold text-primary" />
                  </div>
                  <div className="text-sm md:text-base font-semibold text-muted-foreground tracking-wider uppercase">
                    Patients Treated
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
                    <NumberTicker value={6242974} delay={0.5} className="font-bold text-primary" />
                  </div>
                  <div className="text-sm md:text-base font-semibold text-muted-foreground tracking-wider uppercase">
                    Procedures Completed
                  </div>
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
                    Uninterrupted Dental Practice
                  </AnimatedShinyText>
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
                Keep Your Practice Running, Online or Offline
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                MYCURE's offline capabilities ensure your dental practice never misses a beat. 
                Access dental charts, plan treatments, and manage patient records seamlessly—everything 
                syncs automatically when connectivity returns.
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
                    aria-label="MYCURE Dental Offline - Uninterrupted Practice"
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
                  <h3 className="font-semibold text-lg">Access Dental Charts</h3>
                  <p className="text-sm text-muted-foreground">
                    View and update dental charts and tooth diagrams without internet
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Treatment Planning</h3>
                  <p className="text-sm text-muted-foreground">
                    Create and modify treatment plans even when offline
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Automatic Billing Sync</h3>
                  <p className="text-sm text-muted-foreground">
                    Process billing and insurance claims with automatic synchronization
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

              {/* Feature 2 - Insights */}
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

              {/* Feature 3 - Lifeline */}
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

              {/* Feature 4 - Booking */}
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
                    Ready to <span className="text-[#0099CC]">modernize</span> your dental practice?
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Join thousands of dentists who trust MYCURE to digitize their practice and deliver
                    exceptional patient care.
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
                      Transform Your Practice
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