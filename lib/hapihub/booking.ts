// Booking write — requires an authenticated Better Auth session. Runs
// client-side only (it reads the bearer token captured by `./auth`).
import { getAuthToken } from "./auth";
import { getHapihubBaseUrl } from "./config";
import { HapihubError, type HapihubErrorBody } from "./error";
import type { Booking, CreateBookingInput } from "./types";

/**
 * POST /booking/bookings — creates a pending booking. Every website-originated
 * booking is tagged `['website']` so the clinic can identify/filter them
 * (mirrors PXP's `tags: ['pxp']`). `type: 'appointment'` matches PXP.
 *
 * Throws HapihubError. A 409 with `code: 'SLOT_TAKEN'` carries
 * `body.errors[].suggestions` — alternative slots the UI surfaces one-click.
 */
export async function createBooking(input: CreateBookingInput): Promise<Booking> {
  const token = getAuthToken();
  const res = await fetch(`${getHapihubBaseUrl()}/booking/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    credentials: "include",
    body: JSON.stringify({ ...input, type: "appointment", tags: ["website"] }),
  });

  const text = await res.text();
  let body: unknown = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = null;
  }

  if (!res.ok) {
    throw new HapihubError(res.status, body as HapihubErrorBody | null);
  }
  return body as Booking;
}
