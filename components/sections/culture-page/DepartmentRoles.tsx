"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Mail, MapPin, Search } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Department, Role } from "./types"

/** Single role card. "Apply" opens the (placeholder) Google Form in a new tab. */
function JobCard({ role }: { role: Role }) {
  return (
    <Card className="flex h-full flex-col p-6">
      <h4 className="text-lg font-semibold">{role.title}</h4>
      <div className="mt-2 flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          {role.type}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          <MapPin className="size-3" />
          {role.location}
        </span>
      </div>
      <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">{role.summary}</p>
      <div className="mt-4">
        <Button asChild variant="outline" size="sm">
          <a href={role.applyUrl} target="_blank" rel="noopener noreferrer">
            Apply
            <ArrowUpRight className="size-4" />
          </a>
        </Button>
      </div>
    </Card>
  )
}

/** Professional empty state for a department with no current openings. */
function NoOpenRolesState({ contactEmail }: { contactEmail: string }) {
  return (
    <Card className="flex flex-col items-center gap-3 p-8 text-center">
      <h4 className="text-lg font-semibold">No openings here right now</h4>
      <p className="max-w-md text-sm text-muted-foreground">
        We&apos;re not actively hiring for this team at the moment, but we&apos;re always glad to
        meet people who care the extra mile.
      </p>
      <Button asChild variant="outline" size="sm">
        <a href={`mailto:${contactEmail}`}>
          <Mail className="size-4" />
          Send us your CV
        </a>
      </Button>
    </Card>
  )
}

export function DepartmentRoles({
  heading,
  intro,
  placeholderNote,
  departments,
  contactEmail,
}: {
  heading: string
  intro?: string
  /** Shown when role apply links are still placeholders (TODO). */
  placeholderNote?: string
  departments: Department[]
  contactEmail: string
}) {
  const [query, setQuery] = useState("")
  const [activeDept, setActiveDept] = useState("All")

  const filters = useMemo(() => ["All", ...departments.map((d) => d.name)], [departments])
  const isSearching = query.trim().length > 0

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return departments
      .filter((d) => activeDept === "All" || d.name === activeDept)
      .map((d) => ({
        ...d,
        roles: q
          ? d.roles.filter((r) => `${r.title} ${r.summary}`.toLowerCase().includes(q))
          : d.roles,
      }))
      .filter((d) => (q ? d.roles.length > 0 : true))
  }, [departments, activeDept, query])

  const totalMatches = filtered.reduce((sum, d) => sum + d.roles.length, 0)

  return (
    <section id="roles" className="w-full py-16 sm:py-20 md:py-24">
      <div className="container px-4 sm:px-6 md:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-4"
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

        {placeholderNote && (
          <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-muted-foreground/80">
            {placeholderNote}
          </p>
        )}

        {/* Search + department filters */}
        <div className="mx-auto mb-12 max-w-5xl space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search roles…"
              aria-label="Search roles"
              className="h-11 w-full rounded-full border border-input bg-background pl-10 pr-4 text-sm outline-none transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((name) => (
              <Button
                key={name}
                type="button"
                size="sm"
                variant={activeDept === name ? "default" : "outline"}
                onClick={() => setActiveDept(name)}
                className="rounded-full"
              >
                {name}
              </Button>
            ))}
          </div>
        </div>

        {isSearching && totalMatches === 0 ? (
          <p className="text-center text-muted-foreground">
            No roles match your search. Try a different keyword or{" "}
            <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
              email us
            </a>
            .
          </p>
        ) : (
          <div className="mx-auto max-w-5xl space-y-16">
            {filtered.map((dept) => {
              const Icon = dept.icon
              return (
                <div key={dept.id} id={dept.id} className="scroll-mt-24">
                  <div className="mb-6 flex items-start gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </span>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <h3 className="text-2xl font-semibold">{dept.name}</h3>
                        <span className="text-sm text-muted-foreground">({dept.internalName})</span>
                      </div>
                      <p className="mt-1 text-muted-foreground">{dept.blurb}</p>
                    </div>
                  </div>

                  {dept.roles.length > 0 ? (
                    <div className={cn("grid gap-4 md:gap-6", "sm:grid-cols-2")}>
                      {dept.roles.map((role) => (
                        <JobCard key={role.title} role={role} />
                      ))}
                    </div>
                  ) : (
                    <NoOpenRolesState contactEmail={contactEmail} />
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
