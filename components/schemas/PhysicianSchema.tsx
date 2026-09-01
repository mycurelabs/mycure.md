import type { PublicProfile } from "@/lib/hapihub/types"
import { getPersonDisplayName, humanizeLabel } from "@/components/sections/profile-page/utils"
import { jsonLdString } from "./utils"

// schema.org Physician for a published doctor profile. Content is
// user-controlled, so the payload is emitted through jsonLdString() (which
// escapes `<`) — never raw JSON.stringify.
export function PhysicianSchema({
  profile,
  url,
}: {
  profile: PublicProfile
  url: string
}) {
  const p = profile.person
  if (!p) return null

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: getPersonDisplayName(p),
    url,
  }

  // Only real URLs make sense as schema image — skip base64 data URLs.
  if (p.picURL && !p.picURL.startsWith("data:")) schema.image = p.picURL
  if (p.bio) schema.description = p.bio
  if (p.specialties?.length) schema.medicalSpecialty = p.specialties.map(humanizeLabel)
  if (p.languages?.length) schema.knowsLanguage = p.languages.map(humanizeLabel)
  if (p.phone) schema.telephone = p.phone
  if (p.email) schema.email = p.email
  if (p.website) schema.sameAs = [p.website]

  const address = p.address
  if (address) {
    const postal: Record<string, unknown> = { "@type": "PostalAddress" }
    const locality = address.city || address.municipality
    if (locality) postal.addressLocality = locality
    if (address.province) postal.addressRegion = address.province
    if (address.country) postal.addressCountry = address.country
    if (address.street1) postal.streetAddress = address.street1
    if (Object.keys(postal).length > 1) schema.address = postal
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString(schema) }}
    />
  )
}
