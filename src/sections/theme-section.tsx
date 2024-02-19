import ScrollReveal from '@/app/_components/ui/animated/scroll-reveal'
import Typography from '@/app/_components/ui/typography'
import Image from 'next/image'

export function ThemeSection() {
  return (
    <div
      id="thema"
      className="flex w-screen max-w-screen-md flex-col items-center gap-10 px-10 py-[120px] text-center "
    >
      <div className="space-y-4">
        <Typography as="h3" className="text-3xl font-semibold">
          Thema
        </Typography>
        <Typography as="p">
          Uiteraard hopen we dat jullie samen met ons uitpakken in jullie outfit. Ons thema is <q>Whimsical Summer</q>,
          dat betekent vooral veel kleur! Wat ons betreft is niks te gek, dus een hoedje, een leuke print of mooie
          kleuren zijn allemaal dingen die we graag willen zien. We willen jullie vragen om een formele outfit te
          dragen, dit betekent een mooie jurk of jumpsuit voor de vrouwen en een pak voor de mannen. Maar het
          allerbelangrijkste is: wees vooral jezelf en trek aan waar jij je prettig in voelt. We zijn benieuwd naar
          jullie outfits!
        </Typography>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="h-8 w-8 rounded-full bg-[#A0CCDA]" />
        <div className="h-8 w-8 rounded-full bg-[#B3CB96]" />
        <div className="h-8 w-8 rounded-full bg-[#E8C37B]" />
        <div className="h-8 w-8 rounded-full bg-[#EAB4C1]" />
      </div>
      <ScrollReveal>
        <Image
          quality={100}
          src="https://res.cloudinary.com/dmdewqwqf/image/upload/f_auto,q_auto,w_auto/v1707564556/wedding/gzbb1alpagpgoyhgntdj.jpg"
          alt="Wedding theme"
          width={400}
          height={100}
          className="object-cover"
        />
      </ScrollReveal>
    </div>
  )
}
