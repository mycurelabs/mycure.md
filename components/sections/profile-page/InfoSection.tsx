"use client"

import { motion } from "framer-motion"
import {
  Clock,
  Facebook,
  Globe,
  Instagram,
  Languages,
  Mail,
  MapPin,
  Phone,
  Stethoscope,
  Twitter,
} from "lucide-react"

import { AnimatedBadge } from "@/components/custom/animated-badge"
import { Card, CardContent } from "@/components/ui/card"
import type { ProfileSectionProps } from "@/components/types/profile-page"
import { viewportOnce } from "@/lib/animation-variants"
import { formatFullAddress, humanizeLabel, mapsLink } from "./utils"

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin
  title: string
  children: React.ReactNode
}) {
  return (
    <Card className="h-full border-border/40 bg-gradient-to-b from-background to-muted/10">
      <CardContent className="p-6 space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
            <Icon className="size-5 text-primary" />
          </div>
          <h3 className="font-semibold">{title}</h3>
        </div>
        <div className="text-sm text-muted-foreground space-y-1">{children}</div>
      </CardContent>
    </Card>
  )
}

function SectionShell({
  badge,
  headline,
  description,
  children,
}: {
  badge: string
  headline: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <AnimatedBadge>{badge}</AnimatedBadge>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-4">
            {headline}
          </h2>
          {description && (
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  )
}

export function InfoSection({ profile }: ProfileSectionProps) {
  if (profile.type === "organization") {
    return <ClinicInfo profile={profile} />
  }
  return <DoctorInfo profile={profile} />
}

function ClinicInfo({ profile }: ProfileSectionProps) {
  const org = profile.organization
  if (!org) return null

  const address = formatFullAddress(org.address)
  const maps = mapsLink(org.address)
  const schedule = org.schedule?.filter((s) => s.day) ?? []
  const services = org.servicesOffered?.filter((s) => s.name) ?? []
  const socials = org.socialMedia ?? {}
  const hasContact = org.phone || org.email || org.website
  const hasCards = hasContact || schedule.length > 0 || address

  if (!hasCards && services.length === 0) return null

  return (
    <SectionShell
      badge="About the clinic"
      headline={org.name || "Clinic details"}
      description={org.tagline || undefined}
    >
      {hasCards && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hasContact && (
            <InfoCard icon={Phone} title="Contact">
              {org.phone && (
                <p>
                  <a href={`tel:${org.phone}`} className="hover:text-primary transition-colors">
                    {org.phone}
                  </a>
                </p>
              )}
              {org.email && (
                <p className="flex items-center gap-1.5">
                  <Mail className="size-3.5 shrink-0" />
                  <a href={`mailto:${org.email}`} className="hover:text-primary transition-colors break-all">
                    {org.email}
                  </a>
                </p>
              )}
              {org.website && (
                <p className="flex items-center gap-1.5">
                  <Globe className="size-3.5 shrink-0" />
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors break-all"
                  >
                    {org.website.replace(/^https?:\/\//, "")}
                  </a>
                </p>
              )}
              {(socials.facebook || socials.instagram || socials.twitter) && (
                <div className="flex items-center gap-3 pt-2">
                  {socials.facebook && (
                    <a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors">
                      <Facebook className="size-4" />
                    </a>
                  )}
                  {socials.instagram && (
                    <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
                      <Instagram className="size-4" />
                    </a>
                  )}
                  {socials.twitter && (
                    <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors">
                      <Twitter className="size-4" />
                    </a>
                  )}
                </div>
              )}
            </InfoCard>
          )}

          {schedule.length > 0 && (
            <InfoCard icon={Clock} title="Clinic hours">
              <ul className="space-y-1">
                {schedule.map((s, i) => (
                  <li key={`${s.day}-${i}`} className="flex justify-between gap-4">
                    <span className="capitalize">{s.day}</span>
                    <span className="text-foreground/80">
                      {s.opening} – {s.closing}
                    </span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          )}

          {address && (
            <InfoCard icon={MapPin} title="Location">
              <p>{address}</p>
              {maps && (
                <a
                  href={maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline pt-1"
                >
                  View on Google Maps
                </a>
              )}
            </InfoCard>
          )}
        </div>
      )}

      {services.length > 0 && (
        <div className="mt-8">
          <h3 className="font-serif text-xl font-bold text-center mb-6">Services offered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <Card key={`${service.name}-${i}`} className="border-border/40">
                <CardContent className="p-5 space-y-1">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="size-4 text-primary shrink-0" />
                    <h4 className="font-medium">{service.name}</h4>
                  </div>
                  {service.description && (
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </SectionShell>
  )
}

function DoctorInfo({ profile }: ProfileSectionProps) {
  const p = profile.person
  if (!p) return null

  const professions = (p.professions ?? []).filter(Boolean).map(humanizeLabel)
  const languages = (p.languages ?? []).filter(Boolean).map(humanizeLabel)
  const hasContact = p.phone || p.email || p.website
  const hasAnything = professions.length > 0 || languages.length > 0 || hasContact

  if (!hasAnything) return null

  return (
    <SectionShell badge="About" headline="Provider details">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {professions.length > 0 && (
          <InfoCard icon={Stethoscope} title="Professions">
            <ul className="space-y-1">
              {professions.map((prof) => (
                <li key={prof}>{prof}</li>
              ))}
            </ul>
          </InfoCard>
        )}

        {languages.length > 0 && (
          <InfoCard icon={Languages} title="Languages">
            <p>{languages.join(", ")}</p>
          </InfoCard>
        )}

        {hasContact && (
          <InfoCard icon={Phone} title="Contact">
            {p.phone && (
              <p>
                <a href={`tel:${p.phone}`} className="hover:text-primary transition-colors">
                  {p.phone}
                </a>
              </p>
            )}
            {p.email && (
              <p className="flex items-center gap-1.5">
                <Mail className="size-3.5 shrink-0" />
                <a href={`mailto:${p.email}`} className="hover:text-primary transition-colors break-all">
                  {p.email}
                </a>
              </p>
            )}
            {p.website && (
              <p className="flex items-center gap-1.5">
                <Globe className="size-3.5 shrink-0" />
                <a
                  href={p.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors break-all"
                >
                  {p.website.replace(/^https?:\/\//, "")}
                </a>
              </p>
            )}
          </InfoCard>
        )}
      </div>
    </SectionShell>
  )
}
