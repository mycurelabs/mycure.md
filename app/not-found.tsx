import Link from 'next/link'
import { Fragment } from 'react'
import { navigationConfig } from '@/app/(home)/data'
import { Metadata } from 'next'
import { ProductHeader } from '@/components/sections/product-page/ProductHeader'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <ProductHeader />
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 py-16 text-center">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-primary">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Page Not Found
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for.
              It might have been moved or doesn't exist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Go to Homepage
              </Link>
              <Link
                href="/#features"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                Explore the Platform
              </Link>
            </div>
            <div className="pt-6 border-t border-border max-w-md mx-auto">
              <p className="text-sm text-muted-foreground mb-3">
                Looking for something specific?
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                {navigationConfig.solutions.map((item, i) => (
                  <Fragment key={item.href}>
                    {i > 0 && <span aria-hidden="true">•</span>}
                    <Link href={item.href} className="underline">{item.label}</Link>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
