"use client"

import { useEffect, useState } from "react"
import { CalendarClock, CheckCircle2, Clock, Loader2, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import {
  localDateTimeLabel,
  tzDateTimeLabel,
  tzShortLabel,
} from "@/lib/datetime"
import { getEvent } from "@/lib/hapihub/client"
import { isAuthenticated, signIn, signOut, signUp } from "@/lib/hapihub/auth"
import { createBooking } from "@/lib/hapihub/booking"
import { HapihubError } from "@/lib/hapihub/error"
import type {
  Booking,
  BookingEvent,
  BookingSuggestion,
  EventSlot,
  FormField,
  LocationType,
} from "@/lib/hapihub/types"

type SlotLike = { startTime: string; endTime?: string; durationMinutes: number }
type Step = "auth" | "details" | "success"

interface BookingConfirmDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  event: BookingEvent
  slot: EventSlot | null
  profileName: string
  timezone: string
  onBooked?: () => void
}

const LOCATION_LABEL: Record<LocationType, string> = {
  "in-person": "In person",
  video: "Video call",
  phone: "Phone call",
}

// Field types we can render minimally; anything else is skipped gracefully.
const INPUT_TYPE: Record<string, string> = {
  text: "text",
  email: "email",
  phone: "tel",
  number: "number",
  date: "date",
}

export function BookingConfirmDialog({
  open,
  onOpenChange,
  event,
  slot,
  profileName,
  timezone,
  onBooked,
}: BookingConfirmDialogProps) {
  const [step, setStep] = useState<Step>("details")
  const [activeSlot, setActiveSlot] = useState<SlotLike | null>(slot)

  // Auth form
  const [authTab, setAuthTab] = useState<"signin" | "signup">("signin")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState<string | null>(null)
  const [authBusy, setAuthBusy] = useState(false)

  // Booking details
  const [fields, setFields] = useState<FormField[]>([])
  const [formValues, setFormValues] = useState<Record<string, string>>({})
  const [reason, setReason] = useState("")
  const [locationType, setLocationType] = useState<LocationType | undefined>(
    event.locationTypes?.[0]
  )
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [suggestions, setSuggestions] = useState<BookingSuggestion[]>([])
  const [booking, setBooking] = useState<Booking | null>(null)

  // Reset every time the dialog opens for a (new) slot.
  useEffect(() => {
    if (!open || !slot) return
    setActiveSlot(slot)
    setStep(isAuthenticated() ? "details" : "auth")
    setAuthTab("signin")
    setName("")
    setEmail("")
    setPassword("")
    setAuthError(null)
    setReason("")
    setFormValues({})
    setLocationType(event.locationTypes?.[0])
    setSubmitError(null)
    setSuggestions([])
    setBooking(null)

    // Pull the full event to discover any required intake fields. Best-effort —
    // if it fails we simply proceed without extra fields.
    let cancelled = false
    getEvent(event.id)
      .then((detail) => {
        if (!cancelled) setFields(detail?.formConfig?.fields ?? [])
      })
      .catch(() => {
        if (!cancelled) setFields([])
      })
    return () => {
      cancelled = true
    }
  }, [open, slot, event.id, event.locationTypes])

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault()
    setAuthError(null)
    setAuthBusy(true)
    try {
      if (authTab === "signup") {
        await signUp(name.trim(), email.trim(), password)
      } else {
        await signIn(email.trim(), password)
      }
      setStep("details")
    } catch (err) {
      setAuthError(friendlyError(err, "We couldn't sign you in. Check your details and try again."))
    } finally {
      setAuthBusy(false)
    }
  }

  async function submitBooking(override?: SlotLike) {
    const target = override ?? activeSlot
    if (!target) return

    // Required intake fields must be filled.
    const missing = fields
      .filter((f) => f.required && renderable(f))
      .find((f) => !(formValues[f.name] ?? "").trim())
    if (missing) {
      setSubmitError(`Please complete "${missing.label || missing.name}".`)
      return
    }

    setSubmitting(true)
    setSubmitError(null)
    setSuggestions([])
    try {
      const result = await createBooking({
        event: event.id,
        scheduledAt: target.startTime,
        durationMinutes: target.durationMinutes,
        locationType,
        reason: reason.trim() || undefined,
        formResponses: fields.length ? { data: formValues } : undefined,
      })
      setBooking(result)
      setActiveSlot(target)
      setStep("success")
      onBooked?.()
    } catch (err) {
      if (err instanceof HapihubError) {
        if (err.status === 401 || err.status === 403) {
          signOut()
          setStep("auth")
          setAuthError("Your session expired. Please sign in again.")
          return
        }
        if (err.status === 409 && err.code === "SLOT_TAKEN") {
          const alts = (err.body?.errors ?? []).flatMap((e) => e.suggestions ?? [])
          setSuggestions(alts)
          setSubmitError("That time was just taken. Here are the closest openings:")
          return
        }
      }
      setSubmitError(friendlyError(err, "We couldn't complete your booking. Please try again."))
    } finally {
      setSubmitting(false)
    }
  }

  const slotForDisplay = activeSlot ?? slot

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        {step === "auth" && (
          <>
            <DialogHeader>
              <DialogTitle>Confirm your booking</DialogTitle>
              <DialogDescription>
                Sign in or create a patient account to book with {profileName}.
              </DialogDescription>
            </DialogHeader>

            <Tabs value={authTab} onValueChange={(v) => setAuthTab(v as "signin" | "signup")}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign in</TabsTrigger>
                <TabsTrigger value="signup">Create account</TabsTrigger>
              </TabsList>

              <form onSubmit={handleAuth} className="space-y-4 pt-4">
                {authTab === "signup" && (
                  <div className="space-y-1.5">
                    <Label htmlFor="booking-name">Full name</Label>
                    <Input
                      id="booking-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      autoComplete="name"
                    />
                  </div>
                )}
                <div className="space-y-1.5">
                  <Label htmlFor="booking-email">Email</Label>
                  <Input
                    id="booking-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="booking-password">Password</Label>
                  <Input
                    id="booking-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete={authTab === "signup" ? "new-password" : "current-password"}
                  />
                </div>

                {authError && <p className="text-sm text-destructive">{authError}</p>}

                <Button type="submit" className="w-full rounded-full" disabled={authBusy}>
                  {authBusy && <Loader2 className="size-4 animate-spin" />}
                  {authTab === "signup" ? "Create account & continue" : "Sign in & continue"}
                </Button>
              </form>
            </Tabs>
          </>
        )}

        {step === "details" && slotForDisplay && (
          <>
            <DialogHeader>
              <DialogTitle>Confirm your booking</DialogTitle>
              <DialogDescription>{event.title}</DialogDescription>
            </DialogHeader>

            <SlotSummary slot={slotForDisplay} timezone={timezone} />

            {event.locationTypes && event.locationTypes.length > 1 && (
              <div className="space-y-2">
                <Label>How would you like to meet?</Label>
                <div className="flex flex-wrap gap-2">
                  {event.locationTypes.map((lt) => (
                    <button
                      key={lt}
                      type="button"
                      onClick={() => setLocationType(lt)}
                      className={cn(
                        "min-h-[44px] rounded-full border px-4 text-sm font-medium transition-colors",
                        locationType === lt
                          ? "bg-primary text-white border-primary"
                          : "bg-background border-border hover:border-primary/60"
                      )}
                    >
                      {LOCATION_LABEL[lt] ?? lt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {fields.filter(renderable).map((field) => (
              <IntakeField
                key={field.name}
                field={field}
                value={formValues[field.name] ?? ""}
                onChange={(v) => setFormValues((prev) => ({ ...prev, [field.name]: v }))}
              />
            ))}

            <div className="space-y-1.5">
              <Label htmlFor="booking-reason">Reason for visit (optional)</Label>
              <textarea
                id="booking-reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
                className="flex w-full rounded-xl border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                placeholder="Share anything that will help the clinic prepare."
              />
            </div>

            {submitError && <p className="text-sm text-destructive">{submitError}</p>}

            {suggestions.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s.startTime}
                    type="button"
                    onClick={() => submitBooking(s)}
                    disabled={submitting}
                    className="min-h-[44px] rounded-full border border-primary/50 bg-primary/5 px-4 text-sm font-medium text-primary transition-colors hover:bg-primary/10 disabled:opacity-50"
                  >
                    {tzDateTimeLabel(s.startTime, timezone)}
                  </button>
                ))}
              </div>
            )}

            <Button
              type="button"
              className="w-full rounded-full"
              onClick={() => submitBooking()}
              disabled={submitting}
            >
              {submitting && <Loader2 className="size-4 animate-spin" />}
              Confirm booking
            </Button>
          </>
        )}

        {step === "success" && slotForDisplay && (
          <div className="text-center space-y-4 py-2">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="size-8 text-primary" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-center">Booking requested</DialogTitle>
              <DialogDescription className="text-center">
                {event.title} with {profileName}
              </DialogDescription>
            </DialogHeader>

            <div className="rounded-xl border border-border/60 bg-muted/30 p-4 text-left space-y-2">
              <div className="flex items-start gap-2 text-sm">
                <CalendarClock className="size-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium">
                    {tzDateTimeLabel(slotForDisplay.startTime, timezone)}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {tzShortLabel(slotForDisplay.startTime, timezone)} · your time:{" "}
                    {localDateTimeLabel(slotForDisplay.startTime)}
                  </div>
                </div>
              </div>
              <Separator />
              <p className="text-sm">
                <Badge variant="muted" className="mr-1.5">
                  Pending
                </Badge>
                The clinic will confirm your appointment.
              </p>
            </div>

            <p className="text-xs text-muted-foreground">
              What happens next: you&apos;ll get a notification once the clinic reviews and
              confirms your request. No payment is taken on this site.
            </p>

            <Button
              type="button"
              variant="outline"
              className="w-full rounded-full"
              onClick={() => onOpenChange(false)}
            >
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

function SlotSummary({ slot, timezone }: { slot: SlotLike; timezone: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-muted/30 p-4 space-y-1.5">
      <div className="flex items-center gap-2 text-sm font-medium">
        <CalendarClock className="size-4 text-primary shrink-0" />
        {tzDateTimeLabel(slot.startTime, timezone)}
      </div>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Clock className="size-3.5 shrink-0" />
        {slot.durationMinutes} min · {tzShortLabel(slot.startTime, timezone)}
      </div>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <MapPin className="size-3.5 shrink-0" />
        Your local time: {localDateTimeLabel(slot.startTime)}
      </div>
    </div>
  )
}

function IntakeField({
  field,
  value,
  onChange,
}: {
  field: FormField
  value: string
  onChange: (v: string) => void
}) {
  const label = field.label || field.name
  const id = `intake-${field.name}`

  if (field.type === "textarea") {
    return (
      <div className="space-y-1.5">
        <Label htmlFor={id}>
          {label}
          {field.required && <span className="text-destructive"> *</span>}
        </Label>
        <textarea
          id={id}
          value={value}
          required={field.required}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="flex w-full rounded-xl border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        />
      </div>
    )
  }

  if (field.type === "select") {
    const options = (field.options ?? []).map((o) =>
      typeof o === "string" ? { label: o, value: o } : { label: o.label ?? o.value, value: o.value }
    )
    return (
      <div className="space-y-1.5">
        <Label htmlFor={id}>
          {label}
          {field.required && <span className="text-destructive"> *</span>}
        </Label>
        <select
          id={id}
          value={value}
          required={field.required}
          onChange={(e) => onChange(e.target.value)}
          className="flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <option value="">Select…</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    )
  }

  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>
        {label}
        {field.required && <span className="text-destructive"> *</span>}
      </Label>
      <Input
        id={id}
        type={INPUT_TYPE[field.type] ?? "text"}
        value={value}
        required={field.required}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

function renderable(field: FormField): boolean {
  return (
    field.type === "textarea" ||
    field.type === "select" ||
    field.type in INPUT_TYPE
  )
}

function friendlyError(err: unknown, fallback: string): string {
  if (err instanceof HapihubError && err.body?.message) return err.body.message
  if (err instanceof Error && err.message) return err.message
  return fallback
}
