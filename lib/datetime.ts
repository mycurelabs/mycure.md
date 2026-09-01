// Timezone-aware date helpers for the booking week grid. Uses native Intl only
// (no date-fns dependency). Slot times come from the API as ISO-8601 UTC and
// must be DISPLAYED in the event's (clinic's) timezone, while day columns are
// keyed by the clinic-local calendar date so a 11pm slot lands under the right
// day regardless of the visitor's own timezone.

export const MS_PER_DAY = 86_400_000;

/** yyyy-MM-dd for an instant, in a given IANA timezone (en-CA => ISO order). */
export function tzDateKey(iso: string | Date, timeZone: string): string {
  const date = typeof iso === "string" ? new Date(iso) : iso;
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

/** "9:00 AM" — clock time of an instant in a timezone. */
export function tzTime(iso: string, timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(iso));
}

/** "Mon, Jul 20, 9:00 AM" — instant rendered in a specific timezone. */
export function tzDateTimeLabel(iso: string, timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(iso));
}

/** Same instant rendered in the visitor's own (browser) timezone. */
export function localDateTimeLabel(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(iso));
}

/** Short timezone name (e.g. "GMT+8") for an instant in a timezone. */
export function tzShortLabel(iso: string, timeZone: string): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "short",
  }).formatToParts(new Date(iso));
  return parts.find((p) => p.type === "timeZoneName")?.value ?? timeZone;
}

/** Today's yyyy-MM-dd in a timezone. */
export function todayKeyInTz(timeZone: string): string {
  return tzDateKey(new Date(), timeZone);
}

/** Add n calendar days to a yyyy-MM-dd key (tz-independent). */
export function addDaysToKey(key: string, n: number): string {
  const [y, m, d] = key.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + n);
  return tzDateKey(dt, "UTC");
}

/** Weekday / day-of-month / month pieces for a column header from a date key. */
export function dayColumnParts(key: string): {
  weekday: string;
  day: string;
  month: string;
} {
  const [y, m, d] = key.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d, 12)); // noon UTC — DST-safe
  return {
    weekday: new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "UTC" }).format(dt),
    day: new Intl.DateTimeFormat("en-US", { day: "numeric", timeZone: "UTC" }).format(dt),
    month: new Intl.DateTimeFormat("en-US", { month: "short", timeZone: "UTC" }).format(dt),
  };
}

/**
 * UTC midnight of a calendar date key. Used ONLY to bound the slots query; call
 * sites pad the window by ±1 day so a clinic timezone offset never clips slots.
 */
export function keyToUtcMidnight(key: string): Date {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

/** Format minor-unit (cents) amounts as currency, e.g. 50000 -> "₱500.00". */
export function formatCurrency(amountCents?: number, currency = "PHP"): string | null {
  if (amountCents == null) return null;
  try {
    return new Intl.NumberFormat("en-PH", { style: "currency", currency }).format(
      amountCents / 100,
    );
  } catch {
    return `${(amountCents / 100).toFixed(2)} ${currency}`;
  }
}
