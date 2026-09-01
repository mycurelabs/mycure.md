import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"

import { ProductHeader } from "@/components/sections/product-page"
import { ProfilePageBody, buildProfileMetadata } from "@/components/sections/profile-page"
import { getProfileBySlug, getProfileEvents } from "@/lib/hapihub/client"

export const revalidate = 300

interface PageParams {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const profile = await getProfileBySlug(params.slug)
  if (!profile) {
    return { title: "Profile not found", robots: { index: false, follow: false } }
  }
  return buildProfileMetadata(profile)
}

export default async function DoctorProfilePage({ params }: PageParams) {
  const profile = await getProfileBySlug(params.slug)
  if (!profile) notFound()
  // by-slug does not filter type — send organizations to the clinic route.
  if (profile.type !== "person") redirect(`/c/${profile.slug}`)

  const events = await getProfileEvents(profile.slug)

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ProductHeader />
      <ProfilePageBody profile={profile} events={events} />
    </div>
  )
}
