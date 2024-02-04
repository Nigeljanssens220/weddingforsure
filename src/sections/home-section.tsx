'use client'

import Typography from '@/app/_components/ui/typography'

import { ParallaxHero } from '@/app/_components/parallax-hero'
import Hero from '@/app/_components/ui/hero'

export function HomeSection() {
  return (
    <div className="relative flex h-svh w-screen flex-col items-center">
      <ParallaxHero />
      {/* <div className="absolute top-0 -z-10 h-svh w-screen bg-black bg-opacity-40" /> */}
      <div className="container mt-20 flex h-full flex-col justify-center gap-8 text-center text-white md:mt-32 md:justify-center">
        <Hero variant="light" className="font-slight">
          Shinta
        </Hero>
        <Typography as="span" variant="xl/regular" className="-mt-4 font-garamond tracking-widest text-white">
          EN
        </Typography>
        <Hero variant="light" className="font-slight">
          Nigel
        </Hero>
        <Typography variant="md/semibold" className="pt-10 text-background">
          Nodigen je uit voor hun bruiloft!
        </Typography>
      </div>
    </div>
  )
}
