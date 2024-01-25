import Typography from '@/app/_components/ui/typography'

import Hero from '@/app/_components/ui/hero'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export function HomeSection() {
  return (
    <div className="relative h-dvh w-screen">
      <Image
        fill
        priority
        loading="eager"
        quality={100}
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src="https://res.cloudinary.com/dmdewqwqf/image/upload/v1705758405/Michelle.Cole.Wedding-0248_gzyi2d.jpg"
        alt="nigel-and-shinta-g"
        className="absolute -z-10 object-cover object-bottom text-transparent"
      />
      <div className="mt-20 flex flex-col px-10 text-center">
        <div className="flex flex-col text-center text-white">
          <Hero variant="light">Shinta</Hero>
          <Typography as="span" variant="xl/regular" className="uppercase">
            and
          </Typography>
          <Hero variant="light">Nigel</Hero>
        </div>
        <a href="#rsvp" className="absolute bottom-4 left-[47%] animate-bounce">
          <span className="sr-only">scroll to rsvp</span>
          <ChevronDown className="h-8 w-8 text-white" />
        </a>
      </div>
    </div>
  )
}
