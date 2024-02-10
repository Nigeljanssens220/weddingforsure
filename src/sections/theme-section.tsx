import Typography from '@/app/_components/ui/typography'
import Image from 'next/image'
import Link from 'next/link'

export function ThemeSection() {
  return (
    <div
      id="theme"
      className="flex w-screen max-w-screen-md flex-col items-center gap-10 px-10 py-[120px] text-center "
    >
      <div className="space-y-4">
        <Typography as="h3" className="text-3xl font-semibold">
          Thema
        </Typography>
        <Typography as="p">
          Uiteraard hopen we dat jullie met ons uitpakken in jullie outfit. Ons thema is <q>Whimsical Summer</q>, dat
          betekent dat vooral veel kleur! Wat ons betreft is niks te gek. Wees vooral jezelf en trek aan waar jij je
          prettig in voelt. We hebben er zin in!
        </Typography>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="h-8 w-8 rounded-full bg-[#A0CCDA]" />
        <div className="h-8 w-8 rounded-full bg-[#B3CB96]" />
        <div className="h-8 w-8 rounded-full bg-[#E8C37B]" />
        <div className="h-8 w-8 rounded-full bg-[#EAB4C1]" />
      </div>

      <Link href={'/photos/vzxnlqpwnwymdxgwynad'}>
        <Image
          src="https://res.cloudinary.com/dmdewqwqf/image/upload/f_auto,q_auto,w_auto/v1707564556/wedding/vzxnlqpwnwymdxgwynad.png"
          alt="Wedding theme women"
          width={400}
          height={100}
          className="object-cover"
        />
      </Link>
    </div>
  )
}
