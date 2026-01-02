"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Check, ChevronRight, Menu, X, Moon, Sun, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PrimaryButton } from "@/components/custom/primary-button"
import { RainbowButton } from "@/components/magicui/rainbow-button"
import { AnimatedBadge } from "@/components/custom/animated-badge"
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { DotPattern } from "@/components/magicui/dot-pattern"
import { Card, CardContent } from "@/components/ui/card"
import { LogoCloud } from "@/components/custom/logo-cloud"
import { YouTubeFacade } from "@/components/custom/youtube-facade"
import { usePageState } from "@/hooks/use-page-state"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { WhyChooseSection, VisibilitySection, TimelineSection, StorybrandSection } from "@/components/sections/home-page"

import {
  heroConfig,
  logosConfig,
  featuresGridConfig,
  statisticsConfig,
  whyChooseConfig,
  visibilityConfig,
  integrationConfig,
  timelineConfig,
  faqConfig,
  finalCtaConfig,
  navigationConfig,
} from "./(home)/data"

export default function LandingPage() {
  const { isScrolled, mobileMenuOpen, setMobileMenuOpen, mounted, theme, toggleTheme } = usePageState()

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Header */}
      <header className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}>
        <div className="container flex h-16 items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 font-bold hover:opacity-80 transition-opacity">
            <div className="size-8 rounded-full bg-white flex items-center justify-center">
              <Image src="/mycure-logo.svg" alt="MYCURE Logo" width={32} height={32} />
            </div>
            <span>MYCURE</span>
          </button>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent bg-transparent rounded-xl">Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[320px] gap-1 p-2">
                    {navigationConfig.features.map((navItem) => (
                      <li key={navItem.href}>
                        <NavigationMenuLink asChild>
                          <Link href={navItem.href} className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{navItem.label}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">{navItem.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent bg-transparent rounded-xl">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-1 p-2 md:grid-cols-2">
                    {navigationConfig.solutions.map((navItem) => (
                      <li key={navItem.href}>
                        <NavigationMenuLink asChild>
                          <Link href={navItem.href} className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{navItem.label}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">{navItem.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {navigationConfig.links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="group inline-flex h-9 w-max items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground focus:outline-none">{link.label}</Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden md:flex gap-4 items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link href={navigationConfig.loginUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Log In</Link>
            <Link href={navigationConfig.ctaUrl} target="_blank" rel="noopener noreferrer">
              <PrimaryButton className="h-11 sm:h-12 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base">Get Started<ChevronRight className="ml-1 size-4" /></PrimaryButton>
            </Link>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">{mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}<span className="sr-only">Toggle theme</span></Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}<span className="sr-only">Toggle menu</span></Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b">
            <div className="container py-4 flex flex-col gap-4">
              <div className="py-2">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="features" className="border-none">
                    <AccordionTrigger className="py-0 hover:no-underline"><span className="text-sm font-medium">Features</span></AccordionTrigger>
                    <AccordionContent>{navigationConfig.features.map((navItem) => (<Link key={navItem.href} href={navItem.href} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>{navItem.label}</Link>))}</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="solutions" className="border-none">
                    <AccordionTrigger className="py-0 hover:no-underline"><span className="text-sm font-medium">Solutions</span></AccordionTrigger>
                    <AccordionContent>{navigationConfig.solutions.map((navItem) => (<Link key={navItem.href} href={navItem.href} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>{navItem.label}</Link>))}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {navigationConfig.links.map((link) => (<Link key={link.href} href={link.href} className="py-2 text-sm font-medium" onClick={(e) => scrollToSection(e, link.href)}>{link.label}</Link>))}
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href={navigationConfig.loginUrl} target="_blank" rel="noopener noreferrer" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
                <Link href={navigationConfig.ctaUrl} target="_blank" rel="noopener noreferrer"><PrimaryButton className="h-11 sm:h-12 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base">Get Started<ChevronRight className="ml-1 size-4" /></PrimaryButton></Link>
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
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-4xl mx-auto mb-12">
              <div className="mb-6"><div className="rounded-full px-4 py-1.5 bg-white/90 border border-white/30 backdrop-blur-sm shadow-lg inline-block"><AnimatedGradientText className="text-sm font-medium" colorFrom="var(--gradient-quinary)" colorTo="#FF6B35" speed={1.5}>{heroConfig.badge}</AnimatedGradientText></div></div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 text-white">{heroConfig.headline.line1}<br />{heroConfig.headline.line2}</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto">{heroConfig.description}</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                <Link href={heroConfig.cta.primary.href} target="_blank" rel="noopener noreferrer"><RainbowButton variant="outline" size="lg" className="!h-12 sm:!h-14 !px-6 sm:!px-8 !text-base sm:!text-lg !font-semibold !rounded-full whitespace-nowrap">{heroConfig.cta.primary.text}<ArrowRight className="ml-2 size-4" /></RainbowButton></Link>
                <Link href={heroConfig.cta.secondary.href} onClick={(e) => { e.preventDefault(); document.getElementById('video-demo')?.scrollIntoView({ behavior: 'smooth' }); }}><Button variant="outline" size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white whitespace-nowrap">{heroConfig.cta.secondary.text}</Button></Link>
              </div>
            </motion.div>
            <motion.div id="video-demo" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative mx-auto max-w-5xl">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm">
                <YouTubeFacade videoId={heroConfig.video.videoId} title={heroConfig.video.title} />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>
              </div>
              <noscript><div className="aspect-video rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center"><Link href={heroConfig.video.watchUrl} className="text-white hover:text-white/80 transition-colors" target="_blank" rel="noopener noreferrer">Watch MYCURE Introduction Video</Link></div></noscript>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-white/20 to-white/10 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-white/10 to-white/20 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>

        {/* Logo Cloud Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 border-y bg-muted/30">
          <div className="container px-4 sm:px-6 md:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col items-center justify-center space-y-6 md:space-y-8 text-center">
              <div className="space-y-1"><p className="text-sm font-medium text-muted-foreground">{logosConfig.heading}</p><p className="text-lg font-semibold text-foreground">{logosConfig.subheading}</p></div>
              <LogoCloud logos={logosConfig.logos} className="w-full max-w-6xl" />
            </motion.div>
          </div>
        </section>

        {/* Storybrand Section */}
        <StorybrandSection />

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
          <div className="container px-4 sm:px-6 md:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <AnimatedBadge>{featuresGridConfig.badge}</AnimatedBadge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{featuresGridConfig.headline}</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">{featuresGridConfig.description}</p>
            </motion.div>
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuresGridConfig.items.map((feature, i) => { const Icon = feature.icon; return (<motion.div key={i} variants={item}><Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md"><CardContent className="p-4 sm:p-6 md:p-8 flex flex-col h-full"><div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4"><Icon className="size-5" /></div><h3 className="text-xl font-bold mb-2">{feature.title}</h3><p className="text-muted-foreground">{feature.description}</p></CardContent></Card></motion.div>) })}
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 text-primary-foreground relative overflow-hidden brand-gradient-bg">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="container px-4 md:px-6 relative">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{statisticsConfig.headline}</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">{statisticsConfig.description}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {statisticsConfig.items.map((stat, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: stat.delay }} className="text-center space-y-2"><div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary"><NumberTicker value={stat.value} delay={stat.delay} className="font-bold text-primary" /></div><div className="text-sm md:text-base font-semibold text-muted-foreground tracking-wider uppercase">{stat.label}</div></motion.div>))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose MYCURE Section */}
        <WhyChooseSection config={whyChooseConfig} />

        {/* Visibility Section */}
        <VisibilitySection config={visibilityConfig} />

        {/* All-in-One Integration Section */}
        <section className="w-full pt-20 sm:pt-28 md:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-32 bg-background relative overflow-hidden">
          <DotPattern className={cn("[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]", "opacity-50")} />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center relative">
              <div className="absolute inset-0 pointer-events-none">
                {integrationConfig.icons.slice(0, 2).map((icon, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 * (i + 1) }} className={`absolute ${i === 0 ? "top-0 left-4 sm:left-8 md:left-1/4 -translate-x-1/2 -translate-y-8" : "top-8 right-4 sm:right-12 md:right-1/4 translate-x-1/2 -translate-y-12 sm:-translate-y-16 md:-translate-y-4"}`}><div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 bg-white rounded-full shadow-lg flex items-center justify-center border-[4px] border-gray-100/60"><Image src={icon.src} width={40} height={40} alt={icon.alt} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded" /></div></motion.div>))}
                {integrationConfig.icons.slice(2, 4).map((icon, i) => (<motion.div key={i} initial={{ opacity: 0, x: i === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 + 0.1 * i }} className={`absolute top-1/2 ${i === 0 ? "left-1 sm:left-8 md:left-8" : "right-1 sm:right-8 md:right-8"} -translate-y-1/2 hidden md:block`}><div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 bg-white rounded-full shadow-lg flex items-center justify-center border-[4px] border-gray-100/60"><Image src={icon.src} width={40} height={40} alt={icon.alt} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded" /></div></motion.div>))}
                {integrationConfig.icons.slice(4, 6).map((icon, i) => (<motion.div key={i} initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 + 0.1 * i }} className={`absolute ${i === 0 ? "bottom-8 left-8 sm:left-16 md:left-1/3 -translate-x-1/2 translate-y-8 sm:translate-y-12 md:translate-y-4" : "bottom-0 right-8 sm:right-16 md:right-1/3 translate-x-1/2 translate-y-12 sm:translate-y-16 md:translate-y-8"}`}><div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 bg-white rounded-full shadow-lg flex items-center justify-center border-[4px] border-gray-100/60"><Image src={icon.src} width={40} height={40} alt={icon.alt} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded" /></div></motion.div>))}
                {integrationConfig.icons.slice(6, 8).map((icon, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.7 + 0.1 * i }} className={`absolute top-1/4 ${i === 0 ? "left-12" : "right-12"} ${i === 0 ? "-translate-x-1/2" : "translate-x-1/2"} hidden lg:block`}><div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white rounded-full shadow-md flex items-center justify-center border-[4px] border-gray-100/60"><Image src={icon.src} width={28} height={28} alt={icon.alt} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded" /></div></motion.div>))}
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-10 py-16 md:py-24">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">{integrationConfig.headline.before} <br className="hidden sm:block" /><span className="text-primary">{integrationConfig.headline.highlight}</span></h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{integrationConfig.description}</p>
                  </div>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="flex justify-center">
                    <Link href={integrationConfig.cta.href} target="_blank" rel="noopener noreferrer"><PrimaryButton slow className="flex items-center justify-center gap-2">{integrationConfig.cta.text}<ArrowRight className="size-4" /></PrimaryButton></Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <TimelineSection config={timelineConfig} />

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32 text-white relative overflow-hidden brand-gradient-bg">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="container px-4 md:px-6 relative">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{faqConfig.headline}</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">{faqConfig.description}</p>
            </motion.div>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              {faqConfig.items.map((faq, i) => (<AccordionItem key={i} value={`item-${i}`} className="border-white/20 bg-white/10 backdrop-blur-sm rounded-xl mb-4 px-6"><AccordionTrigger className="text-white hover:text-white/80 text-left text-lg font-medium">{faq.question}</AccordionTrigger><AccordionContent className="text-white/80 text-xl leading-relaxed">{faq.hasLink ? (<>Visit <a href={faq.linkHref} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{faq.linkText}</a> for complete self-service support including our comprehensive knowledgebase, ticketing system for technical issues, and community forum discussions with other healthcare providers.</>) : faq.answer}</AccordionContent></AccordionItem>))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-background to-muted/30">
          <div className="container px-4 sm:px-6 md:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">{finalCtaConfig.headline.before} <span className="text-primary">{finalCtaConfig.headline.highlight}</span> {finalCtaConfig.headline.after}</h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{finalCtaConfig.description}</p>
                </div>
                <div className="flex justify-center items-center"><Link href={finalCtaConfig.cta.href} target="_blank" rel="noopener noreferrer"><PrimaryButton slow className="h-12 flex items-center justify-center gap-2">{finalCtaConfig.cta.text}<ArrowRight className="size-4" /></PrimaryButton></Link></div>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">{finalCtaConfig.features.map((feature, i) => (<div key={i} className="flex items-center gap-2"><Check className="size-4 text-primary" /><span>{feature}</span></div>))}</div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
