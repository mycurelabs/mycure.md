"use client"

import { motion } from "framer-motion"
import { Mail, MapPin } from "lucide-react"

export interface ApplyStep {
  title: string
  description: string
}

/**
 * "How to apply" — application steps plus the genuine recruitment contact
 * (jobs@mycure.md) and the real office location from the site's MedicalBusiness
 * schema. No invented contact numbers.
 */
export function HowToApply({
  heading,
  steps,
  contactEmail,
  office,
}: {
  heading: string
  steps: ApplyStep[]
  contactEmail: string
  office?: string
}) {
  return (
    <section id="apply" className="w-full py-16 sm:py-20 md:py-24 bg-muted/30 border-y">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-5xl grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">{heading}</h2>
            <ol className="space-y-6">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            className="rounded-lg border bg-card p-6 md:p-8 h-fit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4">Prefer to reach out directly?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Email us your CV and tell us how you&apos;d like to help. We read every message.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
            >
              <Mail className="size-4" />
              {contactEmail}
            </a>
            {office && (
              <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 shrink-0 mt-0.5" />
                {office}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
