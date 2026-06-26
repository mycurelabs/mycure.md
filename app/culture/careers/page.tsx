"use client"

import { ProductHeader } from "@/components/sections/product-page"
import {
  CultureHero,
  HowWeWork,
  DepartmentRoles,
  HowToApply,
  CtaBand,
} from "@/components/sections/culture-page"
import { BreadcrumbSchema } from "@/components/schemas/BreadcrumbSchema"
import {
  heroConfig,
  howWeWorkBadge,
  howWeWorkHeading,
  howWeWorkIntro,
  howWeWork,
  rolesHeading,
  rolesIntro,
  placeholderNote,
  departments,
  applyHeading,
  applySteps,
  contactEmail,
  office,
  careersCta,
} from "./data"

export default function CareersPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ProductHeader />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mycure.md" },
          { name: "Culture", url: "https://mycure.md/culture" },
          { name: "Careers", url: "https://mycure.md/culture/careers" },
        ]}
      />

      <main className="flex-1">
        <CultureHero config={heroConfig} />
        <HowWeWork
          badge={howWeWorkBadge}
          heading={howWeWorkHeading}
          intro={howWeWorkIntro}
          items={howWeWork}
        />
        <DepartmentRoles
          heading={rolesHeading}
          intro={rolesIntro}
          placeholderNote={placeholderNote}
          departments={departments}
          contactEmail={contactEmail}
        />
        <HowToApply
          heading={applyHeading}
          steps={applySteps}
          contactEmail={contactEmail}
          office={office}
        />
        <CtaBand config={careersCta} />
      </main>
    </div>
  )
}
