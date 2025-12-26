"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Download,
  Smartphone,
  Monitor,
  Tablet,
  Globe,
  Check,
  ArrowRight,
  Shield,
  Zap,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type PlatformKey = "desktop" | "mobile" | "tablet" | "web";

export default function DownloadPage() {
  const [activeTab, setActiveTab] = useState<PlatformKey>("desktop")

  const platforms: Record<PlatformKey, {
    title: string;
    subtitle: string;
    primaryButton: string;
    primaryIcon: React.ReactNode;
    downloads: { name: string; icon: string; version: string; size: string }[];
  }> = {
    desktop: {
      title: "MYCURE for Desktop",
      subtitle: "Full-featured clinic management for your computer",
      primaryButton: "Download for Windows",
      primaryIcon: <Monitor className="w-5 h-5" />,
      downloads: [
        { name: "Windows", icon: "🪟", version: "v2.1.0", size: "125 MB" },
        { name: "macOS", icon: "🍎", version: "v2.1.0", size: "98 MB" },
        { name: "Linux", icon: "🐧", version: "v2.1.0", size: "112 MB" },
      ],
    },
    mobile: {
      title: "MYCURE Mobile",
      subtitle: "Manage your clinic on the go",
      primaryButton: "Download for iOS",
      primaryIcon: <Smartphone className="w-5 h-5" />,
      downloads: [
        { name: "iOS", icon: "📱", version: "v1.8.2", size: "45 MB" },
        { name: "Android", icon: "🤖", version: "v1.8.2", size: "38 MB" },
      ],
    },
    tablet: {
      title: "MYCURE for Tablet",
      subtitle: "Optimized for larger screens",
      primaryButton: "Download for iPad",
      primaryIcon: <Tablet className="w-5 h-5" />,
      downloads: [
        { name: "iPad", icon: "📱", version: "v1.8.2", size: "52 MB" },
        { name: "Android Tablet", icon: "📱", version: "v1.8.2", size: "48 MB" },
      ],
    },
    web: {
      title: "MYCURE Web App",
      subtitle: "Access from any browser",
      primaryButton: "Open Web App",
      primaryIcon: <Globe className="w-5 h-5" />,
      downloads: [
        { name: "Chrome Extension", icon: "🌐", version: "v1.2.1", size: "2.1 MB" },
        { name: "Firefox Add-on", icon: "🦊", version: "v1.2.1", size: "2.3 MB" },
        { name: "Safari Extension", icon: "🧭", version: "v1.2.1", size: "1.9 MB" },
      ],
    },
  }

  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security for patient data",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Real-time Sync",
      description: "Instant updates across all your devices",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your entire staff",
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border/40">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
          <div className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-full bg-white flex items-center justify-center">
              <Image src="/mycure-logo.svg" alt="MYCURE Logo" width={32} height={32} />
            </div>
            <span>MYCURE</span>
          </div>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              {/* Device Illustration */}
              <div className="relative mx-auto max-w-2xl mb-12">
                <div className="flex items-center justify-center gap-8">
                  {/* Desktop */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative"
                  >
                    <div className="w-32 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg border border-primary/20 flex items-center justify-center">
                      <Monitor className="w-8 h-8 text-primary" />
                    </div>
                    <div className="w-36 h-2 bg-muted rounded-full mx-auto mt-2"></div>
                  </motion.div>

                  {/* Tablet */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="w-20 h-28 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg border border-primary/20 flex items-center justify-center">
                      <Tablet className="w-6 h-6 text-primary" />
                    </div>
                  </motion.div>

                  {/* Mobile */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                  >
                    <div className="w-12 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg border border-primary/20 flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-primary" />
                    </div>
                  </motion.div>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {platforms[activeTab].title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                {platforms[activeTab].subtitle}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {platforms[activeTab].primaryIcon}
                  {platforms[activeTab].primaryButton}
                  <Download className="ml-2 size-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Platform Selection */}
        <section className="w-full py-8 sm:py-12 md:py-16 bg-muted/30">
          <div className="container px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Award-winning apps for every device
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Download MYCURE for{" "}
                <span className="text-primary">Windows</span>,{" "}
                <span className="text-primary">Mac</span>,{" "}
                <span className="text-primary">iOS</span>,{" "}
                <span className="text-primary">Android</span>, and{" "}
                <span className="text-primary">Web</span>.
                Add MYCURE to your browser and email, too.
              </p>
            </motion.div>

            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as PlatformKey)} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-2xl grid-cols-4 rounded-full p-1 bg-background border border-border/40">
                  <TabsTrigger
                    value="desktop"
                    className="rounded-full px-6 data-[state=active]:bg-foreground data-[state=active]:text-background flex items-center gap-2"
                  >
                    <Monitor className="w-4 h-4" />
                    <span className="hidden sm:inline">Desktop</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="mobile"
                    className="rounded-full px-6 data-[state=active]:bg-foreground data-[state=active]:text-background flex items-center gap-2"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span className="hidden sm:inline">Mobile</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="tablet"
                    className="rounded-full px-6 data-[state=active]:bg-foreground data-[state=active]:text-background flex items-center gap-2"
                  >
                    <Tablet className="w-4 h-4" />
                    <span className="hidden sm:inline">Tablet</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="web"
                    className="rounded-full px-6 data-[state=active]:bg-foreground data-[state=active]:text-background flex items-center gap-2"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="hidden sm:inline">Web</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              {Object.entries(platforms).map(([key, platform]) => (
                <TabsContent key={key} value={key}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
                  >
                    {platform.downloads.map((download, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Card className="h-full overflow-hidden border-border/40 bg-background hover:shadow-md transition-all duration-300 group cursor-pointer">
                          <CardContent className="p-6 text-center">
                            <div className="text-4xl mb-4">{download.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{download.name}</h3>
                            <div className="space-y-1 mb-4">
                              <p className="text-sm text-muted-foreground">Version {download.version}</p>
                              <p className="text-xs text-muted-foreground">{download.size}</p>
                            </div>
                            <Button
                              variant="outline"
                              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* App Screenshot */}
        <section className="w-full py-8 sm:py-12 md:py-16">
          <div className="container px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/10">
                <Image
                  src="https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png?resize=1504x1128&vertical=center"
                  width={1280}
                  height={720}
                  alt="MYCURE application interface"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="w-full py-8 sm:py-12 md:py-16 bg-muted/30">
          <div className="container px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Why healthcare providers choose MYCURE
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by thousands of healthcare professionals worldwide for secure, efficient clinic management.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center border-border/40 bg-background">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="w-full py-8 sm:py-12 md:py-16">
          <div className="container px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-12">System Requirements</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-border/40 bg-background">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Monitor className="w-5 h-5 text-primary" />
                      Desktop Applications
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Windows</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Windows 10 or later</li>
                          <li>• 4 GB RAM minimum</li>
                          <li>• 500 MB available storage</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">macOS</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• macOS 10.15 or later</li>
                          <li>• 4 GB RAM minimum</li>
                          <li>• 500 MB available storage</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Linux</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Ubuntu 18.04+ or equivalent</li>
                          <li>• 4 GB RAM minimum</li>
                          <li>• 500 MB available storage</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/40 bg-background">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-primary" />
                      Mobile Applications
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">iOS</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• iOS 14.0 or later</li>
                          <li>• iPhone 7 or newer</li>
                          <li>• iPad (6th generation) or newer</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Android</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Android 8.0 (API level 26) or later</li>
                          <li>• 3 GB RAM minimum</li>
                          <li>• ARMv7 or ARM64 processor</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Web Browser</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Chrome 90+, Firefox 88+, Safari 14+</li>
                          <li>• JavaScript enabled</li>
                          <li>• Stable internet connection</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Ready to transform your healthcare practice?
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/80 leading-relaxed mb-8">
                Join thousands of healthcare providers who trust MYCURE for their clinic management needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-primary px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 size-5" />
                </Button>
                <Link
                  href="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-lg font-medium"
                >
                  Learn more about MYCURE
                </Link>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-primary-foreground/70 mt-8">
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-primary-foreground" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-primary-foreground" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-primary-foreground" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

    </div>
  )
}
