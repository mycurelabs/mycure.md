// Pure display helpers shared by the profile sections. No React, no "use
// client" — safe to import from server or client components.
import type { ProfileHeroData } from "@/components/types/profile-page"
import type {
  PersonProfile,
  ProfileAddress,
  PublicProfile,
} from "@/lib/hapihub/types"

const DEFAULT_TIMEZONE = "Asia/Manila"

/** Timezone to display an event's slots in — the event's own, else Manila. */
export function resolveTimezone(timezone?: string): string {
  return timezone && timezone.trim() ? timezone : DEFAULT_TIMEZONE
}

/**
 * Humanize a stored label (specialty / profession / type) for display.
 * Seeded values arrive as kebab/snake case ("family-medicine") — turn them into
 * Title Case ("Family Medicine"). Only the first letter of each word is
 * uppercased so legitimate acronyms in already-formatted values are preserved.
 */
export function humanizeLabel(value: string): string {
  return value
    .trim()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .split(" ")
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(" ")
}

/** "Dr. Jane Doe, MD" from a structured person name. */
export function formatPersonName(name?: PersonProfile["name"]): string {
  if (!name) return "Doctor"
  const main = [name.prefix, name.firstName, name.lastName].filter(Boolean).join(" ").trim()
  const withSuffix = name.suffix ? `${main}, ${name.suffix}` : main
  return withSuffix || "Doctor"
}

function isPhysician(professions?: string[]): boolean {
  return (professions ?? []).some((p) => /physician|doctor|\bmd\b/i.test(p))
}

/**
 * Display name for a person. Honors an explicit `name.prefix` when present;
 * otherwise falls back to a "Dr." honorific ONLY when the person is a physician
 * (so non-physician person profiles are never mislabeled).
 */
export function getPersonDisplayName(person?: PersonProfile): string {
  if (!person) return "Doctor"
  const base = formatPersonName(person.name)
  if (!person.name?.prefix && !/^dr\.?\s/i.test(base) && isPhysician(person.professions)) {
    return `Dr. ${base}`
  }
  return base
}

/** Best display name for either profile type. */
export function getProfileName(profile: PublicProfile): string {
  if (profile.type === "person") return getPersonDisplayName(profile.person)
  return profile.organization?.name?.trim() || "Medical Clinic"
}

/** "City, Province" (skips blanks) from an address. */
export function formatLocation(address?: ProfileAddress): string | undefined {
  if (!address) return undefined
  const parts = [address.city || address.municipality, address.province].filter(Boolean)
  return parts.length ? parts.join(", ") : undefined
}

/** Up to two initials for the avatar placeholder. */
export function getInitials(name: string): string {
  const words = name.replace(/^dr\.?\s+/i, "").trim().split(/\s+/).filter(Boolean)
  if (!words.length) return "?"
  const letters = words.slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "")
  return letters.join("") || "?"
}

/** Google Maps link from coordinates when present, else the address string. */
export function mapsLink(address?: ProfileAddress): string | undefined {
  if (!address) return undefined
  if (typeof address.lat === "number" && typeof address.lng === "number") {
    return `https://www.google.com/maps/search/?api=1&query=${address.lat},${address.lng}`
  }
  const parts = [
    address.street1,
    address.city || address.municipality,
    address.province,
    address.country,
  ].filter(Boolean)
  if (!parts.length) return undefined
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(parts.join(", "))}`
}

/** Full one-line address string for display. */
export function formatFullAddress(address?: ProfileAddress): string | undefined {
  if (!address) return undefined
  const parts = [
    address.street1,
    address.city || address.municipality,
    address.province,
    address.country,
  ].filter(Boolean)
  return parts.length ? parts.join(", ") : undefined
}

/** Drop pills that duplicate the eyebrow (or each other), case-insensitively. */
function dedupePills(pills: string[], eyebrow: string): string[] {
  const seen = new Set<string>([eyebrow.toLowerCase()])
  const out: string[] = []
  for (const pill of pills) {
    const key = pill.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    out.push(pill)
  }
  return out
}

/** Normalize either profile type into the hero's display fields. */
export function toHeroData(profile: PublicProfile): ProfileHeroData {
  const name = getProfileName(profile)
  const initials = getInitials(name)

  if (profile.type === "person") {
    const p = profile.person
    const specialties = (p?.specialties ?? []).filter(Boolean).map(humanizeLabel)
    const professions = (p?.professions ?? []).filter(Boolean).map(humanizeLabel)
    const eyebrow = specialties[0] || professions[0] || "Healthcare Provider"
    return {
      eyebrow,
      name,
      photoURL: p?.picURL,
      initials,
      credentials: p?.credentials,
      pills: dedupePills(specialties, eyebrow),
      location: formatLocation(p?.address),
      bio: p?.bio,
    }
  }

  const org = profile.organization
  const types = (org?.types ?? []).filter(Boolean).map(humanizeLabel)
  const eyebrow = types[0] || "Medical Clinic"
  return {
    eyebrow,
    name,
    photoURL: org?.logoURL || org?.picURL || org?.coverURL,
    initials,
    credentials: org?.tagline,
    pills: dedupePills(types, eyebrow),
    location: formatLocation(org?.address),
    bio: org?.description,
  }
}
