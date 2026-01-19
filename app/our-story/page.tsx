"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Menu, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DocumentHeader } from "@/components/sections/shared"
import { YouTubeFacade } from "@/components/custom/youtube-facade"

export default function OurStoryPage() {
  const [mobileTocOpen, setMobileTocOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "meet-paulette", title: "Meet Paulette" },
    { id: "about-founders", title: "About the Founders" },
    { id: "the-problem", title: "The Problem We Are Trying To Solve" },
    { id: "our-purpose", title: "Our Purpose" },
    { id: "our-values", title: "Our Values" },
  ]

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("our-values")
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

  const values = [
    "We are passionate, fun-loving, innovative people.",
    "We grow through continuous learning.",
    "We dare to challenge the status quo and make things happen.",
    "We value diversity and respect everyone's opinions.",
    "We practice honesty, transparency and highly value integrity.",
    "We truly care and deliver awesomeness to our customers.",
    "We commit to be grateful of life and remain humble in our successes.",
    "We promise to help each other and make this world a better place."
  ]

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
                Our Story
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                MYCURE starts and ends with real people
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
                  
                  {/* YouTube Video */}
                  <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">Watch Our Journey</h2>
                    <p className="text-lg text-muted-foreground">
                      Discover how personal experience shaped our mission to transform healthcare
                    </p>
                  </div>
                  <div className="relative w-full aspect-video mb-20 rounded-lg overflow-hidden">
                    <YouTubeFacade
                      videoId="zvM3LIvq-6k"
                      title="MYCURE Our Story"
                    />
                  </div>
                  
                  <hr className="border-t border-border/40 my-12" />

                  {/* Section 1: Meet Paulette */}
                  <motion.section 
                    id="meet-paulette" 
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="md:flex md:gap-8 items-start">
                      <div className="md:w-2/5 mb-6 md:mb-0">
                        <Image 
                          src="/Our Story Photos/mycure-web-our-story-paulette.185cb5b.png"
                          alt="Paulette - In loving memory"
                          width={400}
                          height={400}
                          className="rounded-lg w-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/5">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">Meet Paulette</h2>
                        
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Paulette became a young widow at age 30. Her two children were just 4- and 6-year olds then. Despite limited resources, she managed to give her kids a good life.
                        </p>
                        
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Just when things got a lot better, Paulette encountered a bigger challenge—cancer.
                        </p>
                        
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          For about a decade and a half, her life had been all about trips to the doctor, regular checkups, and staying healthy. <span className="font-semibold">Years of medical files</span> were definitely taking up space in their home and in her everyday life. As she shuttled between Guam (where she is based) and the Philippines, carrying her medical files to different doctors and pharmacies became too cumbersome and costly. Replenishing her medication had become a guessing game. Staying healthy sometimes became detrimental to her own health.
                        </p>
                        
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Paulette stood strong as a cancer warrior and survivor.
                        </p>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          Our founder, Dale, had been witness to all of this. Paulette is Dale's mother.
                        </p>
                      </div>
                    </div>
                  </motion.section>
                  
                  <hr className="border-t border-border/40 my-12" />

                  {/* Section 2: About the Founders */}
                  <motion.section 
                    id="about-founders" 
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">About the Founders</h2>
                    
                    <div className="grid md:grid-cols-2 gap-12">
                      {/* Dale's Column */}
                      <div>
                        <div className="flex justify-center mb-4">
                          <Image 
                            src="/Our Story Photos/mycure-our-story-dale.png"
                            alt="Dale - MYCURE Co-founder"
                            width={300}
                            height={300}
                            className="rounded-lg w-full max-w-[300px] object-cover"
                          />
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          <span className="font-semibold">Dale</span> runs a tech company that started in 2004. Among numerous IT projects, their team also made the first Filipino-themed game on iTunes and Googleplay called <a href="https://www.butchukoy.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Sipa</a> and a mobile photo diary meant to tell your story through photos called Pickld. He regularly shares experiences being a Mentor and Director at Founder Institute (Manila). He also started <a href="https://www.mightyminds.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mighty Minds</a>, a nonprofit organization that helps kids finish school.
                        </p>
                      </div>
                      
                      {/* Joel's Column */}
                      <div>
                        <div className="flex justify-center mb-4">
                          <Image 
                            src="/Our Story Photos/mycure-our-story-joel.png"
                            alt="Joel - MYCURE Co-founder"
                            width={300}
                            height={300}
                            className="rounded-lg w-full max-w-[300px] object-cover"
                          />
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          <span className="font-semibold">Joel</span> is a marketing executive and has been involved in the field for the last 20 years. His work involves a lot of travel and he loves to explore and talk to local folks during these times. Through these encounters, he was able to get a closer look at the plight of the Filipinos with regard to medical and health access. He believes that there is still a lot that can be done and that a good tech infrastructure can be a big boost in improving this sector.
                        </p>
                      </div>
                    </div>
                  </motion.section>
                  
                  <hr className="border-t border-border/40 my-12" />

                  {/* Section 3: The Problem */}
                  <motion.section 
                    id="the-problem" 
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">The Problem</h2>
                    
                    <div className="mb-6">
                      <Image 
                        src="/Our Story Photos/mycure-our-story-problem.png"
                        alt="Healthcare challenges illustration - Problems MYCURE solves"
                        width={800}
                        height={400}
                        className="rounded-lg w-full object-cover"
                      />
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Medical record systems are highly fragmented, disorganized, and non-collaborative even in some developed countries. Many are still using legacy platforms and are not employing the latest available technologies. Some are exclusive and are not interoperable with other systems.
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Thus health professionals are unable to optimize patient healthcare. In the same manner, patients have difficulty monitoring and organizing their medical data and history.
                    </p>
                  </motion.section>
                  
                  <hr className="border-t border-border/40 my-12" />

                  {/* Section 4: Our Purpose */}
                  <motion.section 
                    id="our-purpose" 
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">Our Purpose</h2>
                    
                    <div className="mb-6">
                      <Image 
                        src="/Our Story Photos/mycure-team.webp"
                        alt="MYCURE Team - Healthcare technology innovators"
                        width={800}
                        height={400}
                        className="rounded-lg w-full object-cover"
                      />
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      MYCURE's vision is to <span className="font-semibold">securely organize medical records that will provide fast, safe, and efficient access to health professionals, enabling them to help and save more lives.</span> We believe that even small things can make a big difference. And that extra mile of care we give for humanity goes a long way and creates a lasting impact.
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Thus, we honor and support people who care the extra mile. They are the unsung heroes, the doctors and other health professionals who work tirelessly to serve their patients.
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      While they see themselves as simply doing their everyday jobs, we see individuals that impact change on humanity; we see heroes that truly make the world a better place. MYCURE commits to design and build innovative tech tools and products specifically for healthcare teams and professionals. Our goal is to help and enable these heroes, to make their jobs easier and more efficient.
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      They are our true inspirations, the reasons for our being and existence.
                    </p>
                  </motion.section>
                  
                  <hr className="border-t border-border/40 my-12" />

                  {/* Section 5: Our Values */}
                  <motion.section 
                    id="our-values" 
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">Our Values</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      To further go the extra mile, we practice the <span className="font-bold">8 Codes of Being</span>:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      {values.map((value, index) => (
                        <div key={index} className="flex gap-3 items-start">
                          <Check className="size-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-base text-muted-foreground leading-relaxed">{value}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <Image 
                        src="/Our Story Photos/mycure-our-story-community.png"
                        alt="MYCURE integrated to the community"
                        width={800}
                        height={400}
                        className="rounded-lg w-full object-cover"
                      />
                    </div>
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
                  <div className="border rounded-lg p-6">
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
            className="rounded-full"
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