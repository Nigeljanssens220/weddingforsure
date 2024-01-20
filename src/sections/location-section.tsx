import Typography from '@/app/_components/ui/typography'
import Image from 'next/image'

export function LocationSection() {
  return (
    <div id="location" className="flex w-screen max-w-screen-md flex-col items-center gap-10 px-10 py-10 text-center ">
      <Typography as="h3" className="text-3xl font-semibold">
        Locatie
      </Typography>
      <Typography as="p">
        Op Buitenplaats Sparrendaal vieren wij de liefde te midden van historische pracht en betoverende tuinen. Een
        romantische setting waar we met onze favoriete mensen onvergetelijke herinneringen gaan maken.
      </Typography>
      <div>
        <Typography as="p" className="italic">
          Buitenplaats Sparrendaal
        </Typography>
        <Typography as="p" className="italic">
          Hoofdstraat 89
        </Typography>
        <Typography as="p" className="italic">
          3971 KE &nbsp;&nbsp;Driebergen-Rijsenburg
        </Typography>
      </div>
      <Image src="/images/sparrendaal.svg" alt="Buitenplaats Sparrendaal" width={282} height={162} />
    </div>
  )
}
