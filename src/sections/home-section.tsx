import Typography from '@/app/_components/ui/typography'

import Hero from '@/app/_components/ui/hero'
import Image from 'next/image'

export function HomeSection() {
  return (
    <div className="relative h-lvh w-screen">
      <Image
        fill
        priority
        loading="eager"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_1920,f_auto,q_auto/v1705758405/Michelle.Cole.Wedding-0248_gzyi2d.jpg"
        alt="nigel-and-shinta-g"
        className="absolute -z-20 object-cover object-top"
      />
      <div className="absolute top-0 -z-10 h-dvh w-screen bg-black bg-opacity-40" />
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
        {/* <a href="#rsvp" className="absolute bottom-4 left-[47%] animate-bounce">
          <span className="sr-only">scroll to rsvp</span>
          <ChevronDown className="h-8 w-8 text-white" />
        </a> */}
      </div>
    </div>
  )
}
