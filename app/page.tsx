"use client"

import React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
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
import { DotPattern } from "@/components/magicui/dot-pattern"
import { Card, CardContent } from "@/components/ui/card"
import { LogoCloud } from "@/components/ui/logo-cloud"
import { StickyFeatures } from "@/components/ui/sticky-features"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    // Close mobile menu if open
    setMobileMenuOpen(false)
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
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-2">
              {/* Features Dropdown - 1 column */}
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
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            Let patients schedule appointments online and reduce wait times.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/telehealth" className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Telehealth</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            Secure video consultations for virtual patient care.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions Dropdown - 2 columns */}
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
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            Streamlined workflows for outpatient clinic operations.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/hospital" className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Hospital</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            Comprehensive management for hospital operations.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/corporate" className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Corporate</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            Employee health programs and physical exams.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/dental" className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Dental</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            Specialized tools for dental practice management.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/skin" className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Skin & Aesthetics</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            Dermatology and aesthetic clinic solutions.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/diagnostics" className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Diagnostics</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            Laboratory and imaging workflow management.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/mobile-labs" className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Mobile Labs</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            On-site diagnostic services and specimen collection.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Simple Links */}
              <NavigationMenuItem>
                <Link
                  href="#how-it-works"
                  onClick={(e) => scrollToSection(e, '#how-it-works')}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground focus:outline-none"
                >
                  How it Works
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="#faq"
                  onClick={(e) => scrollToSection(e, '#faq')}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground focus:outline-none"
                >
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
                className="h-11 sm:h-12 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full" 
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
                href="#how-it-works" 
                className="py-2 text-sm font-medium" 
                onClick={(e) => scrollToSection(e, '#how-it-works')}
              >
                How it Works
              </Link>
              
              <Link 
                href="#faq" 
                className="py-2 text-sm font-medium" 
                onClick={(e) => scrollToSection(e, '#faq')}
              >
                FAQs
              </Link>
              
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="https://next.cms.mycure.md/" target="_blank" rel="noopener noreferrer" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Log In
                </Link>
                <Link href="https://calendly.com/mycure/demo" target="_blank" rel="noopener noreferrer">
                  <ShimmerButton 
                    className="h-11 sm:h-12 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full" 
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
        {/* Hero Section */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden text-white relative brand-gradient-bg">
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
                    ✨ MYCURE X: Launches soon
                  </AnimatedGradientText>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 text-white">
                Your practice, simplified.<br />Your patients, first.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto">
                Transform your practice with the clinic management system designed for Philippine healthcare—secure, offline-capable, and ready to simplify your entire operation.
              </p>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                <Link href="https://calendly.com/mycure/demo" target="_blank" rel="noopener noreferrer">
                  <RainbowButton
                    variant="outline"
                    size="lg"
                    className="!h-12 sm:!h-14 !px-6 sm:!px-8 !text-base sm:!text-lg !font-semibold !rounded-full whitespace-nowrap"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 size-4" />
                  </RainbowButton>
                </Link>
                <Link href="#video-demo" onClick={(e) => { e.preventDefault(); document.getElementById('video-demo')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white whitespace-nowrap"
                  >
                    Watch Demo
                  </Button>
                </Link>
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
        {/* Logo Cloud Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 border-y bg-muted/30">
          <div className="container px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center space-y-6 md:space-y-8 text-center"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Trusted by experts.</p>
                <p className="text-lg font-semibold text-foreground">Used by healthcare leaders.</p>
              </div>
              <LogoCloud
                logos={[
                  { src: "/Client Logos/Medicard.png", alt: "Medicard", name: "Medicard" },
                  { src: "/Client Logos/Skin 101.png", alt: "Skin 101", name: "Skin 101" },
                  { src: "/Client Logos/Premier Medical Center.png", alt: "Premier Medical Center", name: "Premier Medical Center" },
                  { src: "/Client Logos/Duya Med Diagnostic Clinic.png", alt: "Duya Med Diagnostic Clinic", name: "Duya Med Diagnostic Clinic" },
                  { src: "/Client Logos/Ferrer OB-GYN and Medical Clinic.png", alt: "Ferrer OB-GYN and Medical Clinic", name: "Ferrer OB-GYN and Medical Clinic" },
                  { src: "/Client Logos/Vicente L. Danguilan Memorial Clinic.png", alt: "Vicente L. Danguilan Memorial Clinic", name: "Vicente L. Danguilan Memorial Clinic" },
                  { src: "/Client Logos/Lablife Medical & Diagnostic Center-Murphy Cubao.png", alt: "Lablife Medical & Diagnostic Center", name: "Lablife Medical & Diagnostic Center" },
                  { src: "/Client Logos/Newport EW Villa Medica.png", alt: "Newport EW Villa Medica", name: "Newport EW Villa Medica" },
                  { src: "/Client Logos/PhilCare.png", alt: "PhilCare", name: "PhilCare" },
                  { src: "/Client Logos/Unihealth Parañaque Hospital ENT Center.png", alt: "Unihealth Parañaque Hospital ENT Center", name: "Unihealth Parañaque Hospital ENT Center" },
                ]}
                className="w-full max-w-6xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Sticky Features Section - Koala Mascot */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <StickyFeatures
              items={[
                {
                  badge: "CLEAR YOUR MIND",
                  title: "The Reality",
                  description: "Paper-based tracking, inconsistent follow-ups, and endless back-and-forth create chaos in your clinic operations every single day. Your time is consumed by paperwork instead of patients.",
                  image: (
                    <Image
                      src="/Koalas/koala-scene1.jpg"
                      alt="Koala doctor overwhelmed with paperwork"
                      fill
                      className="object-cover rounded-xl"
                    />
                  ),
                },
                {
                  badge: "KNOW THE BASICS: IMPERFECT",
                  title: "The Frustration",
                  description: "You didn't become a healthcare provider to spend your nights buried in administrative tasks. The dedication you bring to your patients is being drained by paperwork.",
                  image: (
                    <Image
                      src="/Koalas/koala-scene2.jpg"
                      alt="Koala doctor feeling frustrated"
                      fill
                      className="object-cover rounded-xl"
                    />
                  ),
                },
                {
                  badge: "TIME TO TRANSFORM",
                  title: "The Truth",
                  description: "Your patients deserve your full attention—and you deserve tools that actually work. It's time for technology that serves healthcare, not the other way around.",
                  image: (
                    <Image
                      src="/Koalas/koala-scene3.jpg"
                      alt="Koala doctor confident and happy"
                      fill
                      className="object-cover rounded-xl"
                    />
                  ),
                },
              ]}
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
          <div className="container px-4 sm:px-6 md:px-8">
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
                    <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col h-full">
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
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 text-primary-foreground relative overflow-hidden brand-gradient-bg">
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
                    <NumberTicker value={2946953} delay={0.4} className="font-bold text-primary" />
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
                    <NumberTicker value={6242974} delay={0.5} className="font-bold text-primary" />
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
        <section id="features" className="w-full py-20 md:py-32 bg-white dark:bg-[#1a1a1a]">
          <div className="container px-4 sm:px-6 md:px-8">
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
                Enterprise-grade capabilities with healthcare-specific design, providing compliance, reliability, and seamless operations.
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
                      <span>Role-based access controls so staff see only authorized patient information</span>
                    </li>
                  </ul>
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
                      <span>Local backup systems providing zero data loss during connectivity issues</span>
                    </li>
                  </ul>
                </div>
                <div className="relative lg:order-1">
                  <div className="w-full max-w-[480px] overflow-hidden rounded-xl mx-auto lg:mx-0">
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
                      suppressHydrationWarning
                    />
                  </div>
                </div>
              </motion.div>

              {/* Feature 3 - Simplified PhilHealth Claims Management */}
              {/* TEMPORARILY HIDDEN - PhilHealth Claims Management Section
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
                </div>
              </motion.div>
              */}

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
        <section id="solutions" className="w-full py-20 md:py-32 bg-muted/30">
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
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
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
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
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
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
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
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
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
        {/* All-in-One Integration Section */}
        <section className="w-full pt-20 sm:pt-28 md:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-32 bg-background relative overflow-hidden">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
              "opacity-50"
            )}
          />
          <div className="container px-4 md:px-6 relative z-10">
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
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
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
                    className="flex justify-center"
                  >
                    <Link href="https://calendly.com/mycure/demo" target="_blank" rel="noopener noreferrer">
                      <ShimmerButton
                        className="px-6 py-3 text-base font-semibold rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        background="#0099CC"
                        shimmerColor="#ffffff"
                        shimmerDuration="3s"
                      >
                        Get started
                        <ArrowRight className="size-4" />
                      </ShimmerButton>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* How It Works Section - Interactive Timeline */}
        <section id="how-it-works" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
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
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-xl">in just 7 days</span>
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
                    "MYCURE is a comprehensive healthcare management platform designed specifically for clinics and healthcare facilities. We streamline your practice operations while maintaining HIPAA compliance and operational efficiency.",
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
                  answer: "MYCURE works on Mac computers through Chromium-based browsers (Chrome, Edge, Brave). Our platform is optimized for these environments to deliver the best performance and reliability.",
                },
                {
                  question: "What kind of support do you offer healthcare providers?",
                  answer: (
                    <>
                      Visit <a href="https://portal.mycure.md" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">portal.mycure.md</a> for complete self-service support including our comprehensive knowledgebase, ticketing system for technical issues, and community forum discussions with other healthcare providers.
                    </>
                  ),
                },
                {
                  question: "Can I try MYCURE before committing?",
                  answer: "Yes! Start with our 15-day free trial that includes full platform access and no credit card requirement. We'll provide you with a demo app link to explore the platform at your own pace.",
                },
              ].map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-white/20 bg-white/10 backdrop-blur-sm rounded-xl mb-4 px-6"
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
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-background to-muted/30">
          <div className="container px-4 sm:px-6 md:px-8">
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

                <div className="flex justify-center items-center">
                  <Link href="https://calendly.com/mycure/demo" target="_blank" rel="noopener noreferrer">
                    <ShimmerButton
                      className="h-12 px-6 py-3 text-base font-semibold rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                      background="#0099CC"
                      shimmerColor="#ffffff"
                      shimmerDuration="3s"
                    >
                      Transform Your Practice
                      <ArrowRight className="size-4" />
                    </ShimmerButton>
                  </Link>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    <span>See demo video</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    <span>30-day free trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    <span>Training on-premises</span>
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
