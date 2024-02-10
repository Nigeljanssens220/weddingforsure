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
          Vier onze liefde in stijl in het thema <q>Whimsical Summer</q>. We willen jullie vragen om uit te pakken:
          Underdressed bestaat niet!
        </Typography>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="h-8 w-8 rounded-full bg-[#A0CCDA]" />
        <div className="h-8 w-8 rounded-full bg-[#B3CB96]" />
        <div className="h-8 w-8 rounded-full bg-[#E8C37B]" />
        <div className="h-8 w-8 rounded-full bg-[#EAB4C1]" />
      </div>
      {/* <Image
        src="https://res.cloudinary.com/dmdewqwqf/image/upload/f_auto,q_auto,w_auto/v1707564556/wedding/vzxnlqpwnwymdxgwynad.png"
        alt="Wedding theme women"
        width={400}
        height={800}
        className="object-cover"
      /> */}
      <Link href={'/photos/vzxnlqpwnwymdxgwynad'}>
        {/* todo image carousel voor vrouwen/mannen */}
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
