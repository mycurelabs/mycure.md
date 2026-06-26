"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import type { TeamMember } from "./types"

/**
 * "Meet the team" — names + genuine one-line role blurbs from the live site.
 * No invented bios. Portraits render as branded placeholders until real assets
 * are provided (TODO).
 */
export function TeamGrid({
  heading,
  intro,
  members,
  caption,
}: {
  heading: string
  intro?: string
  members: TeamMember[]
  caption?: string
}) {
  return (
    <section id="team" className="w-full py-16 sm:py-20 md:py-24 bg-muted/30 border-y">
      <div className="container px-4 sm:px-6 md:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
            {heading}
          </h2>
          {intro && <p className="text-lg text-muted-foreground">{intro}</p>}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="relative aspect-square w-full bg-muted">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-primary/5 text-3xl font-semibold text-primary/40">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold leading-tight">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  {member.blurb && (
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.blurb}</p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {caption && (
          <p className="text-center text-sm text-muted-foreground mt-8">{caption}</p>
        )}
      </div>
    </section>
  )
}
