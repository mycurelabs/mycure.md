"use client"

import { AlertCircle, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { dayColumnParts, tzTime } from "@/lib/datetime"
import type { EventSlot } from "@/lib/hapihub/types"

interface BookingWeekGridProps {
  dayKeys: string[]
  slotsByDay: Record<string, EventSlot[]>
  timezone: string
  loading: boolean
  error: boolean
  onRetry: () => void
  weekOffset: number
  onPrevWeek: () => void
  onNextWeek: () => void
  onSelectSlot: (slot: EventSlot) => void
  selectedSlotId?: string
}

export function BookingWeekGrid({
  dayKeys,
  slotsByDay,
  timezone,
  loading,
  error,
  onRetry,
  weekOffset,
  onPrevWeek,
  onNextWeek,
  onSelectSlot,
  selectedSlotId,
}: BookingWeekGridProps) {
  const first = dayColumnParts(dayKeys[0])
  const last = dayColumnParts(dayKeys[dayKeys.length - 1])
  const rangeLabel = `${first.month} ${first.day} – ${last.month} ${last.day}`
  const totalSlots = dayKeys.reduce((n, key) => n + (slotsByDay[key]?.length ?? 0), 0)

  return (
    <div className="rounded-2xl border border-border/60 bg-background p-4 sm:p-6">
      {/* Week navigation */}
      <div className="flex items-center justify-between mb-4">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={onPrevWeek}
          disabled={weekOffset === 0}
          aria-label="Previous week"
        >
          <ChevronLeft className="size-4" />
        </Button>
        <div className="text-sm font-medium">{rangeLabel}</div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={onNextWeek}
          aria-label="Next week"
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>

      {error ? (
        <div className="flex flex-col items-center gap-3 py-10 text-center">
          <AlertCircle className="size-6 text-destructive" />
          <p className="text-sm text-muted-foreground">
            We couldn&apos;t load availability. Please try again.
          </p>
          <Button type="button" variant="outline" size="sm" onClick={onRetry}>
            Retry
          </Button>
        </div>
      ) : !loading && totalSlots === 0 ? (
        <div className="flex flex-col items-center gap-3 py-10 text-center">
          <p className="text-sm text-muted-foreground">
            No available slots this week.
          </p>
          <Button type="button" variant="outline" size="sm" onClick={onNextWeek}>
            Check next week
            <ChevronRight className="size-4" />
          </Button>
        </div>
      ) : (
        <div className="overflow-x-auto -mx-1 px-1">
          <div className="grid grid-flow-col auto-cols-[minmax(6.25rem,1fr)] md:grid-flow-row md:grid-cols-7 md:auto-cols-auto gap-2">
            {dayKeys.map((key) => {
              const parts = dayColumnParts(key)
              const slots = slotsByDay[key] ?? []
              return (
                <div key={key} className="flex flex-col gap-2">
                  <div className="text-center pb-1 border-b border-border/50">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">
                      {parts.weekday}
                    </div>
                    <div className="text-sm font-semibold">{parts.day}</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {loading ? (
                      <>
                        <Skeleton className="h-11 w-full rounded-full" />
                        <Skeleton className="h-11 w-full rounded-full" />
                      </>
                    ) : slots.length === 0 ? (
                      <div className="text-center text-muted-foreground/50 text-xs py-2">
                        —
                      </div>
                    ) : (
                      slots.map((slot) => {
                        const active = slot.id === selectedSlotId
                        return (
                          <button
                            key={slot.id}
                            type="button"
                            onClick={() => onSelectSlot(slot)}
                            className={cn(
                              "min-h-[44px] w-full rounded-full border px-2 text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                              active
                                ? "bg-primary text-white border-primary"
                                : "bg-background border-border hover:border-primary/60 hover:bg-primary/5"
                            )}
                          >
                            {tzTime(slot.startTime, timezone)}
                          </button>
                        )
                      })
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Times shown in {timezone.replace(/_/g, " ")}
      </p>
    </div>
  )
}
