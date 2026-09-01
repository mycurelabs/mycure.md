// Types for the public profile pages (/d/[slug] doctor, /c/[slug] clinic).
// The raw API shapes live in `lib/hapihub/types`; these are the presentational
// props the profile sections consume.
import type {
  BookingEvent,
  ProfileType,
  PublicProfile,
} from "@/lib/hapihub/types"

export interface ProfileSectionProps {
  profile: PublicProfile
}

export interface BookingSectionProps {
  events: BookingEvent[]
  /** Display name of the profile owner, used in the confirmation card. */
  profileName: string
  profileType: ProfileType
}

/** Normalized hero display fields, derived from a person or organization. */
export interface ProfileHeroData {
  eyebrow: string
  name: string
  photoURL?: string
  initials: string
  credentials?: string
  pills: string[]
  location?: string
  bio?: string
}
