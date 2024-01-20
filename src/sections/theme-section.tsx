import Typography from '@/app/_components/ui/typography'
import Image from 'next/image'

export function ThemeSection() {
  return (
    <div id="theme" className="flex w-screen max-w-screen-md flex-col items-center gap-10 px-10 py-10 text-center ">
      <Typography as="h3" className="text-3xl font-semibold">
        Thema
      </Typography>
      <Typography as="p">
        Vier onze liefde in stijl in het thema &quot;Whimsical Pastels&quot;. We willen jullie vragen om uit te pakken:
        &quot;Underdressed&quot; bestaat niet!
      </Typography>
      <div className="flex items-center justify-center gap-4">
        <div className="h-8 w-8 rounded-full bg-[#A0CCDA]" />
        <div className="h-8 w-8 rounded-full bg-[#B3CB96]" />
        <div className="h-8 w-8 rounded-full bg-[#E8C37B]" />
        <div className="h-8 w-8 rounded-full bg-[#EAB4C1]" />
      </div>
      <Image src="/images/sparrendaal.svg" alt="Buitenplaats Sparrendaal" width={282} height={162} />
    </div>
  )
}
