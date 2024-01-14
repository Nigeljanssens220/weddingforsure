import Typography from '@/app/_components/ui/typography'
import Image from 'next/image'

export function SleepSection() {
  return (
    <div id="sleep" className="flex h-dvh w-screen flex-col items-center gap-10 px-10 py-10 text-center">
      <Typography as="h3" className="text-3xl font-semibold">
        Overnachten
      </Typography>
      <Typography as="p">
        Willen jullie in de liefdesbubbel blijven met ons en dus nog niet terug naar het echte leven? Check de hotels in
        de buurt.
      </Typography>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <Typography as="h4">HOTEL BERGSE BOSSEN</Typography>
          <Typography as="p">
            Het hotel waar wij de nacht doorbrengen! Kom de volgende dag gezellig met ons nagenieten bij het ontbijt. En
            wellicht daarna een boswandeling maken.
          </Typography>
        </div>
        <div>
          <Typography as="h4">LANDGOED DE HORST</Typography>
          <Typography as="p">
            Dit hotel is gunstig gelegen, met gratis parkeergelegenheid. Kamerprijzen vanaf €90,- inclusief ontbijt.
          </Typography>
        </div>
      </div>
      <Image src="/images/map.png" alt="Map driebergen" width={262} height={205} />
      <Typography as="p">
        * Helaas is het voor ons niet mogelijk om voor iedereen overnachting te verzorgen. Eventuele overnachtingen
        dienen dus zelf geregeld en betaald te worden. Laat ons even weten als je een hotel hebt geboekt, dan kunnen wij
        het vervoer regelen voor na het feest!
      </Typography>
    </div>
  )
}
