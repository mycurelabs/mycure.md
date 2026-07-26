import { BreadcrumbSchema } from "@/components/schemas/BreadcrumbSchema"
import { MedicalClinicSchema } from "@/components/schemas/MedicalClinicSchema"
import { PhysicianSchema } from "@/components/schemas/PhysicianSchema"
import type { BookingEvent, PublicProfile } from "@/lib/hapihub/types"
import { BookingSection } from "./BookingSection"
import { InfoSection } from "./InfoSection"
import { ProfileHero } from "./ProfileHero"
import { getProfileName } from "./utils"

// Shared body for both /d (doctor) and /c (clinic) routes. The page shell
// (ProductHeader + layout Footer) is provided by the route; this renders the
// JSON-LD schema and the profile sections.
export function ProfilePageBody({
  profile,
  events,
}: {
  profile: PublicProfile
  events: BookingEvent[]
}) {
  const name = getProfileName(profile)
  const prefix = profile.type === "person" ? "d" : "c"
  const url = `https://mycure.md/${prefix}/${profile.slug}`

  return (
    <>
      {profile.type === "person" ? (
        <PhysicianSchema profile={profile} url={url} />
      ) : (
        <MedicalClinicSchema profile={profile} url={url} />
      )}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mycure.md" },
          { name, url },
        ]}
      />

      <main className="flex-1">
        <ProfileHero profile={profile} />
        <InfoSection profile={profile} />
        <BookingSection events={events} profileName={name} profileType={profile.type} />
      </main>
    </>
  )
}
