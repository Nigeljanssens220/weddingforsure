import RsvpForm from '@/app/_components/rsvp-form'
import Typography from '@/app/_components/ui/typography'
import Image from 'next/image'
import flowers from '../../../../public/icons/bloemending.svg'

export const dynamic = 'force-static'

const RSVP = () => {
  return (
    <div className="mt-10 flex min-h-dvh w-full flex-col items-center px-8 selection:bg-black selection:text-[#C78686] md:mt-32">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:pt-36">
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image src={flowers} alt={'flowers'} className="object-cover" />
          <Typography className="-mt-10 max-w-lg text-balance text-4xl md:text-7xl" as="h1">
            Come dance with us, baby!
          </Typography>
          <Typography as="p">
            We kunnen niet wachten om onze bruiloft met jullie te vieren! Maar, we moeten wel weten of je de moves hebt.
            Vul het formulier hieronder in om te laten weten of je komt, wat je eet en of je een plus one meeneemt. Dan
            zorgen wij voor een plekje op de eerste rij, lekker eten en een plekje op de dansvloer!
          </Typography>
        </div>
        <RsvpForm />
      </div>
    </div>
  )
}

export default RSVP
