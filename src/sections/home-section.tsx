'use client'

import Typography from '@/app/_components/ui/typography'

import { ParallaxHero } from '@/app/_components/parallax-hero'
import Hero from '@/app/_components/ui/hero'
import { motion, useScroll, useTransform } from 'framer-motion'
export function HomeSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])

  return (
    <div className="relative flex h-svh w-screen flex-col items-center">
      <ParallaxHero />
      {/* <div className="absolute top-0 -z-10 h-svh w-screen bg-black bg-opacity-40" /> */}
      <motion.div style={{ y }} className="flex flex-col items-center gap-10 pt-36 text-center lg:pt-16">
        <div className="space-y-2">
          <Typography as="p" variant="md/regular" className="uppercase text-[#464646]">
            Buitenplaats Sparrendaal
          </Typography>
          <Typography as="p" variant="md/regular" className="uppercase text-[#464646]">
            07.08.2024
          </Typography>
        </div>
        <div className="flex flex-col gap-2 text-start">
          <Hero variant="light" className="-ml-4 font-sloop">
            Shinta
          </Hero>
          <Typography variant="xl/regular" className="-mt-2 self-center uppercase text-[#464646]">
            EN
          </Typography>
          <Hero variant="light" className="-ml-4 font-sloop">
            Nigel
          </Hero>
        </div>
      </motion.div>
      {/* <div className="container mt-20 flex h-full flex-col justify-center gap-8 text-center text-white md:mt-32 md:justify-center">
        <Hero variant="light" className="font-sloop">
          Shinta
        </Hero>
        <Typography as="span" variant="xl/regular" className="-mt-4 font-geist tracking-widest text-white">
          EN
        </Typography>
        <Hero variant="light" className="font-sloop">
          Nigel
        </Hero>
        <Typography variant="md/semibold" className="pt-10 text-background">
          Nodigen je uit voor hun bruiloft!
        </Typography>
      </div> */}
    </div>
  )
}
