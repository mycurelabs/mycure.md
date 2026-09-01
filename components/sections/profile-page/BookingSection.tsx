"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { CalendarX, Clock, MapPin, Phone, Video } from "lucide-react"

import { AnimatedBadge } from "@/components/custom/animated-badge"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { BookingSectionProps } from "@/components/types/profile-page"
import { viewportOnce } from "@/lib/animation-variants"
import { cn } from "@/lib/utils"
import {
  MS_PER_DAY,
  addDaysToKey,
  formatCurrency,
  keyToUtcMidnight,
  todayKeyInTz,
  tzDateKey,
} from "@/lib/datetime"
import { getEventSlots } from "@/lib/hapihub/client"
import type { EventSlot, LocationType } from "@/lib/hapihub/types"
import { BookingConfirmDialog } from "./BookingConfirmDialog"
import { BookingWeekGrid } from "./BookingWeekGrid"
import { resolveTimezone } from "./utils"

const LOCATION_META: Record<LocationType, { icon: typeof Video; label: string }> = {
  "in-person": { icon: MapPin, label: "In person" },
  video: { icon: Video, label: "Video call" },
  phone: { icon: Phone, label: "Phone call" },
}

export function BookingSection({ events, profileName }: BookingSectionProps) {
  const [activeEventId, setActiveEventId] = useState(events[0]?.id ?? "")
  const [weekOffset, setWeekOffset] = useState(0)
  const [reloadKey, setReloadKey] = useState(0)
  const [slots, setSlots] = useState<EventSlot[]>([])
  // Starts true: whenever an event exists the mount effect immediately fetches,
  // so skeletons should show first rather than a flash of the empty state.
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState<EventSlot | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const activeEvent = useMemo(
    () => events.find((e) => e.id === activeEventId) ?? events[0],
    [events, activeEventId]
  )
  const timezone = resolveTimezone(activeEvent?.timezone)

  const dayKeys = useMemo(() => {
    const base = todayKeyInTz(timezone)
    const first = addDaysToKey(base, weekOffset * 7)
    return Array.from({ length: 7 }, (_, i) => addDaysToKey(first, i))
  }, [timezone, weekOffset])

  useEffect(() => {
    if (!activeEvent) return
    const firstKey = dayKeys[0]
    const lastKey = dayKeys[dayKeys.length - 1]
    // Pad the window ±1–2 days around the visible week so a clinic timezone
    // offset never clips the first/last day's real slots (they're regrouped by
    // clinic-local calendar date below). Window stays well under the 31-day cap.
    const fromMs =
      weekOffset === 0 ? Date.now() : keyToUtcMidnight(firstKey).getTime() - MS_PER_DAY
    const toMs = keyToUtcMidnight(lastKey).getTime() + 2 * MS_PER_DAY
    const from = new Date(fromMs).toISOString()
    const to = new Date(toMs).toISOString()

    let cancelled = false
    setLoading(true)
    setError(false)
    getEventSlots(activeEvent.id, { from, to, timezone })
      .then((result) => {
        if (!cancelled) setSlots(result)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [activeEvent, weekOffset, timezone, dayKeys, reloadKey])

  const slotsByDay = useMemo(() => {
    const map: Record<string, EventSlot[]> = {}
    for (const key of dayKeys) map[key] = []
    const now = Date.now()
    for (const slot of slots) {
      if (new Date(slot.startTime).getTime() < now) continue
      const key = tzDateKey(slot.startTime, timezone)
      if (map[key]) map[key].push(slot)
    }
    for (const key of dayKeys) {
      map[key].sort((a, b) => a.startTime.localeCompare(b.startTime))
    }
    return map
  }, [slots, dayKeys, timezone])

  function selectEvent(id: string) {
    setActiveEventId(id)
    setWeekOffset(0)
    setSelectedSlot(null)
  }

  function handleSelectSlot(slot: EventSlot) {
    setSelectedSlot(slot)
    setDialogOpen(true)
  }

  return (
    <section id="booking" className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-background scroll-mt-16">
      <div className="container px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex justify-center mb-4">
            <AnimatedBadge>Scheduling</AnimatedBadge>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-4">
            Book an appointment
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pick a time that works for you. You&apos;ll confirm with a quick sign in — the
            clinic reviews and confirms every request.
          </p>
        </motion.div>

        {!activeEvent ? (
          <Card className="max-w-xl mx-auto border-border/60">
            <CardContent className="flex flex-col items-center gap-3 py-12 text-center">
              <CalendarX className="size-8 text-muted-foreground" />
              <p className="text-muted-foreground">
                Online booking isn&apos;t available for {profileName} yet.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Event selector */}
            {events.length > 1 && (
              <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-2 p-2 bg-muted/50 rounded-2xl border border-border/40">
                  {events.map((ev) => (
                    <button
                      key={ev.id}
                      type="button"
                      onClick={() => selectEvent(ev.id)}
                      className={cn(
                        "min-h-[44px] rounded-full px-5 text-sm font-medium transition-colors",
                        ev.id === activeEvent.id
                          ? "bg-primary text-white shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-background"
                      )}
                    >
                      {ev.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Active event summary */}
            <Card className="border-border/60">
              <CardContent className="p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{activeEvent.title}</h3>
                  {activeEvent.description && (
                    <p className="text-sm text-muted-foreground max-w-prose">
                      {activeEvent.description}
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-4" />
                      {activeEvent.durationMinutes} min
                    </span>
                    {activeEvent.locationTypes?.map((lt) => {
                      const meta = LOCATION_META[lt]
                      if (!meta) return null
                      const Icon = meta.icon
                      return (
                        <span key={lt} className="flex items-center gap-1.5">
                          <Icon className="size-4" />
                          {meta.label}
                        </span>
                      )
                    })}
                  </div>
                </div>
                {activeEvent.billingEnabled && (
                  <Badge variant="outline" className="text-sm px-3 py-1 self-start">
                    {formatCurrency(activeEvent.billingAmount, activeEvent.billingCurrency) ??
                      "Paid"}
                  </Badge>
                )}
              </CardContent>
            </Card>

            <BookingWeekGrid
              dayKeys={dayKeys}
              slotsByDay={slotsByDay}
              timezone={timezone}
              loading={loading}
              error={error}
              onRetry={() => setReloadKey((k) => k + 1)}
              weekOffset={weekOffset}
              onPrevWeek={() => setWeekOffset((w) => Math.max(0, w - 1))}
              onNextWeek={() => setWeekOffset((w) => w + 1)}
              onSelectSlot={handleSelectSlot}
              selectedSlotId={selectedSlot?.id}
            />

            <BookingConfirmDialog
              open={dialogOpen}
              onOpenChange={(open) => {
                setDialogOpen(open)
                if (!open) setSelectedSlot(null)
              }}
              event={activeEvent}
              slot={selectedSlot}
              profileName={profileName}
              timezone={timezone}
              onBooked={() => setReloadKey((k) => k + 1)}
            />
          </div>
        )}
      </div>
    </section>
  )
}
