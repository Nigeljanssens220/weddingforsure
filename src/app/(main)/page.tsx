import nigelAndShintaG from '../../../public/images/background-photo-color.png'

import Image from 'next/image'
import Hero from '../_components/ui/hero'
import Typography from '../_components/ui/typography'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <>
      <main className="container relative flex h-screen w-screen max-w-screen-2xl flex-col items-center justify-start gap-20 overflow-x-hidden p-0">
        <Image
          quality={100}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={nigelAndShintaG}
          alt="nigel-and-shinta-g"
          className="absolute -z-10 bg-white bg-opacity-10 object-cover object-bottom text-transparent"
        />
        <div className="mt-20 flex flex-col px-10 text-center">
          <Typography variant="xl/regular" className="text-balance uppercase">
            you&apos;re invited to the wedding of
          </Typography>
          <div className="flex flex-col text-center">
            <Hero variant="light">Shinta</Hero>
            <Typography variant="xl/regular" className="uppercase">
              and
            </Typography>
            <Hero variant="light">Nigel</Hero>
          </div>
        </div>
      </main>
    </>
  )
}
