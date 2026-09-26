"use client"

import { m } from "framer-motion"
import Image from "next/image"

interface VisibilityItem {
  bold: string
  normal: string
  image: string
  imageAlt: string
  gradient: string
}

interface VisibilityConfig {
  headline: string
  description: string
  items: VisibilityItem[]
}

interface VisibilitySectionProps {
  config: VisibilityConfig
}

export function VisibilitySection({ config }: VisibilitySectionProps) {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 md:px-8 mx-auto max-w-6xl">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0, 0, 0.58, 1] }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight">
            {config.headline}
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {config.description}
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {config.items.map((item, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06, ease: [0, 0, 0.58, 1] }}
              className="space-y-6"
            >
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} p-1`}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={600}
                  height={256}
                  className="w-full h-64 object-cover object-top rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  <span className="font-bold">{item.bold}</span>{" "}
                  <span className="font-normal text-muted-foreground">
                    {item.normal}
                  </span>
                </h3>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
