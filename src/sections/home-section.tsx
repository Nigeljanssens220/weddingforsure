'use client'

import Typography from '@/app/_components/ui/typography'

import Hero from '@/app/_components/ui/hero'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export function HomeSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '300%'])

  return (
    <div className="relative flex h-svh w-screen flex-col items-center">
      <Image
        fill
        quality={100}
        priority
        loading="eager"
        src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_1920,f_auto,q_100/v1707551624/wedding/nzvklbrwxbtxaes4vwlg.jpg"
        alt="nigel-and-shinta-g"
        className="absolute -z-20 max-h-svh w-screen object-cover object-bottom"
      />
      <motion.div style={{ y }} className="flex flex-col items-center gap-10 pt-[152px] text-center lg:pt-16">
        <div>
          <Typography as="p" variant="md/regular" className="uppercase text-black">
            Buitenplaats Sparrendaal
          </Typography>
          <Typography as="p" variant="md/regular" className="uppercase text-black">
            07.08.2024
          </Typography>
        </div>
        <div className="flex flex-col gap-2 text-start">
          <Hero variant="light" className="-ml-4 font-sloop">
            Shinta
          </Hero>
          <Typography variant="xl/regular" className="-mt-2 self-center uppercase text-black">
            EN
          </Typography>
          <Hero variant="light" className="-ml-4 font-sloop">
            Nigel
          </Hero>
        </div>
      </motion.div>
    </div>
  )
}
