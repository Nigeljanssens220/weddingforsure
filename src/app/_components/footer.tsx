import { routes } from '@/lib/routes'
import Link from 'next/link'
import Hero from './ui/hero'
import Typography from './ui/typography'

export function Footer() {
  return (
    <footer className="flex min-h-60 items-center bg-foreground">
      <section className="mx-auto grid max-w-screen-lg grid-cols-2 gap-20 py-8">
        <div>
          <Hero variant="heavy" className="text-balance text-background">
            Wedding vibes only
          </Hero>
        </div>
        <div className="grid grid-cols-2">
          {routes.map(({ href, label }) => (
            <Link key={label} href={href} className="w-fit">
              <Typography as="span" variant="sm/regular" className="p-1 font-light text-background">
                {label}
              </Typography>
            </Link>
          ))}
        </div>
      </section>
    </footer>
  )
}
