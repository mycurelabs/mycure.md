"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePageState } from "@/hooks/use-page-state"
import { PrimaryButton } from "@/components/custom/primary-button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ProductHeader() {
  const { isScrolled, mobileMenuOpen, setMobileMenuOpen, mounted, theme, toggleTheme } = usePageState()

  return (
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
            <PrimaryButton className="h-10 px-4 py-2 text-sm font-medium">
              Get Started
              <ChevronRight className="ml-1 size-4" />
            </PrimaryButton>
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.nav
          id="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          aria-label="Mobile navigation"
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
                <PrimaryButton className="h-10 px-4 py-2 text-sm font-medium rounded-full">
                  Get Started
                  <ChevronRight className="ml-1 size-4" />
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </motion.nav>
      )}
    </header>
  )
}
