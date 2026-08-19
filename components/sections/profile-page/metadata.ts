import type { Metadata } from "next"

import type { PublicProfile } from "@/lib/hapihub/types"
import { getProfileName, toHeroData } from "./utils"

/**
 * Next Metadata for a public profile page. Title flows through the root layout
 * template ("%s | MYCURE"). Canonical always points at the type-correct prefix
 * (/d for person, /c for organization) regardless of the requested route, so a
 * mismatched URL that redirects still advertises the right canonical.
 */
export function buildProfileMetadata(profile: PublicProfile): Metadata {
  const name = getProfileName(profile)
  const prefix = profile.type === "person" ? "d" : "c"
  const canonical = `https://mycure.md/${prefix}/${profile.slug}`
  const hero = toHeroData(profile)

  const title = profile.seo?.title || name
  const description =
    profile.seo?.description ||
    hero.bio ||
    (profile.type === "person"
      ? `Book an appointment with ${name} on MYCURE.`
      : `Book an appointment at ${name} on MYCURE.`)
  const image = profile.seo?.image

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "profile",
      url: canonical,
      title,
      description,
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  }
}
