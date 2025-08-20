"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Logo {
  name: string
  src: string
  width?: number
  height?: number
}

interface LogosSectionProps {
  title?: string
  logos?: Logo[]
  className?: string
}

// Function to clean up filename for display
const cleanLogoName = (filename: string): string => {
  return filename
    .replace(/\.(png|jpeg|jpg)$/i, '') // Remove file extension
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .trim()
}

// Real client logos from public/Client Logos directory
const defaultLogos: Logo[] = [
  { name: cleanLogoName("Duya Med Diagnostic Clinic.png"), src: "/Client Logos/Duya Med Diagnostic Clinic.png", width: 140, height: 50 },
  { name: cleanLogoName("Ferrer OB-GYN and Medical Clinic.png"), src: "/Client Logos/Ferrer OB-GYN and Medical Clinic.png", width: 140, height: 50 },
  { name: cleanLogoName("Lablife Medical & Diagnostic Center-Murphy Cubao.png"), src: "/Client Logos/Lablife Medical & Diagnostic Center-Murphy Cubao.png", width: 140, height: 50 },
  { name: cleanLogoName("Medicard.png"), src: "/Client Logos/Medicard.png", width: 140, height: 50 },
  { name: cleanLogoName("Newport EW Villa Medica.png"), src: "/Client Logos/Newport EW Villa Medica.png", width: 140, height: 50 },
  { name: cleanLogoName("Nueve de Febrero Family Clinic.png"), src: "/Client Logos/Nueve de Febrero Family Clinic.png", width: 140, height: 50 },
  { name: cleanLogoName("Premier Medical Center.png"), src: "/Client Logos/Premier Medical Center.png", width: 140, height: 50 },
  { name: cleanLogoName("Skin 101.png"), src: "/Client Logos/Skin 101.png", width: 140, height: 50 },
  { name: cleanLogoName("Vicente L. Danguilan Memorial Clinic .jpeg"), src: "/Client Logos/Vicente L. Danguilan Memorial Clinic .jpeg", width: 140, height: 50 },
]

export function LogosSection({
  title = "Trusted by leading healthcare providers",
  logos = defaultLogos,
  className = ""
}: LogosSectionProps) {
  return (
    <section className={`w-full py-12 border-y bg-muted/30 ${className}`}>
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">{title}</p>
          <TooltipProvider>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {logos.map((logo, i) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center justify-center"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="cursor-default">
                        <Image
                          src={logo.src}
                          alt={`${logo.name} logo`}
                          width={logo.width || 140}
                          height={logo.height || 50}
                          className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{logo.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </div>
          </TooltipProvider>
        </motion.div>
      </div>
    </section>
  )
}