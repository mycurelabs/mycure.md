import type { PublicProfile } from "@/lib/hapihub/types"
import { jsonLdString } from "./utils"

const DAY_MAP: Record<string, string> = {
  sun: "Sunday",
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
}

function normalizeDay(day: string): string {
  const key = day.trim().toLowerCase().slice(0, 3)
  return DAY_MAP[key] ?? day
}

// schema.org MedicalClinic for a published organization profile. Emitted via
// jsonLdString() (escapes `<`) because content is user-controlled.
export function MedicalClinicSchema({
  profile,
  url,
}: {
  profile: PublicProfile
  url: string
}) {
  const org = profile.organization
  if (!org) return null

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: org.name || "Medical Clinic",
    url,
  }

  if (org.description) schema.description = org.description
  if (org.logoURL && !org.logoURL.startsWith("data:")) schema.logo = org.logoURL
  const image = org.coverURL || org.picURL
  if (image && !image.startsWith("data:")) schema.image = image
  if (org.phone) schema.telephone = org.phone
  if (org.email) schema.email = org.email

  const sameAs = [
    org.website,
    org.socialMedia?.facebook,
    org.socialMedia?.instagram,
    org.socialMedia?.twitter,
  ].filter(Boolean)
  if (sameAs.length) schema.sameAs = sameAs

  const address = org.address
  if (address) {
    const postal: Record<string, unknown> = { "@type": "PostalAddress" }
    const locality = address.city || address.municipality
    if (address.street1) postal.streetAddress = address.street1
    if (locality) postal.addressLocality = locality
    if (address.province) postal.addressRegion = address.province
    if (address.country) postal.addressCountry = address.country
    if (Object.keys(postal).length > 1) schema.address = postal

    if (typeof address.lat === "number" && typeof address.lng === "number") {
      schema.geo = {
        "@type": "GeoCoordinates",
        latitude: address.lat,
        longitude: address.lng,
      }
    }
  }

  const schedule = org.schedule?.filter((s) => s.day && s.opening && s.closing) ?? []
  if (schedule.length) {
    schema.openingHoursSpecification = schedule.map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: normalizeDay(s.day),
      opens: s.opening,
      closes: s.closing,
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString(schema) }}
    />
  )
}
