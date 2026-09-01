// Read-only hapihub public API client. Every route here is anonymous-readable
// for a PUBLISHED profile, so these calls carry no auth. Booking (writes) and
// auth live in `./booking` and `./auth`.
//
// Server (RSC) reads are ISR-cached with `next: { revalidate }`; client-side
// reads that must reflect live availability (slots, on-demand event detail)
// pass `cache: 'no-store'`.
import { getHapihubBaseUrl } from "./config";
import { HapihubError, type HapihubErrorBody } from "./error";
import type {
  BookingEvent,
  EventSlot,
  ListResult,
  ProfileType,
  PublicProfile,
} from "./types";

const REVALIDATE_SECONDS = 300;

async function parseBody(res: Response): Promise<unknown> {
  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

/**
 * GET /public-profiles/by-slug/{slug} — a published profile, or null on 404.
 * NOTE: this endpoint does NOT filter by type; the caller must reconcile
 * `profile.type` against the route prefix and redirect on mismatch.
 */
export async function getProfileBySlug(slug: string): Promise<PublicProfile | null> {
  const res = await fetch(
    `${getHapihubBaseUrl()}/public-profiles/by-slug/${encodeURIComponent(slug)}`,
    { next: { revalidate: REVALIDATE_SECONDS }, headers: { Accept: "application/json" } },
  );
  if (res.status === 404) return null;
  if (!res.ok) throw new HapihubError(res.status, (await parseBody(res)) as HapihubErrorBody);
  return (await parseBody(res)) as PublicProfile;
}

/**
 * GET /public-profiles/{idOrSlug}/events — active booking events linked to a
 * published profile (sanitized projection; no formConfig).
 */
export async function getProfileEvents(idOrSlug: string): Promise<BookingEvent[]> {
  const res = await fetch(
    `${getHapihubBaseUrl()}/public-profiles/${encodeURIComponent(idOrSlug)}/events`,
    { next: { revalidate: REVALIDATE_SECONDS }, headers: { Accept: "application/json" } },
  );
  if (!res.ok) return [];
  const body = (await parseBody(res)) as ListResult<BookingEvent> | null;
  return body?.data ?? [];
}

/**
 * GET /booking/events/{eventId} — full event projection including `formConfig`
 * (intake fields). Anonymous OK for events linked to a published profile.
 * Called on-demand client-side, so it is never cached.
 */
export async function getEvent(eventId: string): Promise<BookingEvent | null> {
  const res = await fetch(
    `${getHapihubBaseUrl()}/booking/events/${encodeURIComponent(eventId)}`,
    { cache: "no-store", headers: { Accept: "application/json" } },
  );
  if (!res.ok) return null;
  return (await parseBody(res)) as BookingEvent;
}

/**
 * GET /booking/events/{eventId}/slots?from&to&timezone — virtual availability
 * for a window (≤ 31 days). Returns only `available` slots. Client-side, live.
 */
export async function getEventSlots(
  eventId: string,
  params: { from: string; to: string; timezone: string },
): Promise<EventSlot[]> {
  const query = new URLSearchParams({
    from: params.from,
    to: params.to,
    timezone: params.timezone,
  });
  const res = await fetch(
    `${getHapihubBaseUrl()}/booking/events/${encodeURIComponent(eventId)}/slots?${query}`,
    { cache: "no-store", headers: { Accept: "application/json" } },
  );
  if (!res.ok) throw new HapihubError(res.status, (await parseBody(res)) as HapihubErrorBody);
  const body = (await parseBody(res)) as ListResult<EventSlot> | null;
  return (body?.data ?? []).filter((slot) => slot.status === "available");
}

/**
 * GET /public-profiles?type&status=published — used by the sitemap. Never
 * throws: on any failure it returns an empty list so the build cannot break
 * on API downtime.
 */
export async function listPublishedProfiles(type: ProfileType): Promise<PublicProfile[]> {
  try {
    const query = new URLSearchParams({ type, status: "published", $limit: "100" });
    const res = await fetch(`${getHapihubBaseUrl()}/public-profiles?${query}`, {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return [];
    const body = (await parseBody(res)) as ListResult<PublicProfile> | null;
    return body?.data ?? [];
  } catch {
    return [];
  }
}
