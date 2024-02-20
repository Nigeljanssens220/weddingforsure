'use client'

import ScrollReveal from '@/app/_components/ui/animated/scroll-reveal'
import { Card } from '@/app/_components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/app/_components/ui/dialog'
import Typography from '@/app/_components/ui/typography'
import Image from 'next/image'

export function SleepSection() {
  return (
    <div
      id="overnachten"
      className="min-h-h-dvh container mx-10 flex max-w-screen-md flex-col items-center gap-10 py-[120px] text-center "
    >
      <div className="space-y-4">
        <Typography as="h3" className="text-3xl font-semibold">
          Overnachten
        </Typography>
        <Typography as="p">
          Willen jullie in de liefdesbubbel blijven met ons en dus nog niet terug naar het echte leven? Check de hotels
          in de buurt. Wij zullen na de bruiloft in Hotel Bergse Bossen overnachten! Klik een kaartje aan voor meer
          informatie.
        </Typography>
      </div>
      <div className="space-y-4">
        <ScrollReveal>
          <Dialog>
            <DialogTrigger>
              <Card className="relative w-screen max-w-sm rounded-md md:max-w-2xl lg:max-w-3xl">
                <Image
                  width={1200}
                  height={800}
                  src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_auto,c_crop,h_584/v1706796977/wedding/egwwzsiedldudl81nwpn.png"
                  alt="Kasteel Kerckebosch"
                  className="left-0 top-0 max-h-[300px] rounded-md object-cover grayscale"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-10 p-4 text-start backdrop-blur-sm">
                  <Typography className="text-white" as="h3" variant="xl/semibold">
                    Kasteel Kerckebosch
                  </Typography>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="h-fit w-screen max-w-sm overflow-hidden rounded-md p-0 md:max-w-2xl lg:max-w-3xl">
              <Image
                width={1200}
                height={800}
                src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_1200,f_auto,q_auto,c_crop,h_584/v1706796977/wedding/egwwzsiedldudl81nwpn.png"
                alt="Bergse Bossen"
                className="scale-110 rounded-t-lg object-cover grayscale"
              />
              <div className="mt-6 flex flex-col gap-4 pb-6 md:mt-10">
                <Typography variant="xl/regular" as="h3">
                  Kasteel Kerckebosch
                </Typography>
                <Typography as="p">
                  Kasteel Kerckebosch bevindt zich in een historisch gebouw uit 1904, met glas-in-loodramen en een
                  unieke architectuur. Het ligt op slechts 11 km van Utrecht. Het rustige beboste terrein beschikt over
                  een terras.
                </Typography>
              </div>
            </DialogContent>
          </Dialog>
        </ScrollReveal>
        <ScrollReveal>
          <Dialog>
            <DialogTrigger>
              <Card className="relative w-screen max-w-sm rounded-md md:max-w-2xl lg:max-w-3xl">
                <Image
                  width={1200}
                  height={800}
                  src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_auto/v1706796977/wedding/w4ns4656otvtb7dqmwl9.png"
                  alt="Bergse Bossen"
                  className="left-0 top-0 rounded-md object-cover "
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-10 p-4 text-start backdrop-blur-sm">
                  <Typography className="text-white" as="h3" variant="xl/semibold">
                    Hotel Bergse Bossen
                  </Typography>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="h-fit w-screen max-w-sm overflow-hidden rounded-md p-0 md:max-w-2xl lg:max-w-3xl">
              <Image
                width={1200}
                height={800}
                src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_1200,f_auto,q_auto/v1706796977/wedding/w4ns4656otvtb7dqmwl9.png"
                alt="Bergse Bossen"
                className="scale-110 rounded-t-lg object-fill "
              />
              <div className="mt-6 flex flex-col gap-4 pb-6 md:mt-10">
                <Typography variant="xl/regular" as="h3">
                  Hotel Bergse Bossen
                </Typography>
                <Typography as="p">
                  Het hotel is gevestigd op een rustige locatie in de bossen van het Nationaal Park Utrechtse Heuvelrug.
                  De meeste kamers bieden uitzicht op de natuur.
                </Typography>
              </div>
            </DialogContent>
          </Dialog>
        </ScrollReveal>
        <ScrollReveal>
          <Dialog>
            <DialogTrigger>
              <Card className="relative w-screen max-w-sm rounded-md md:max-w-2xl lg:max-w-3xl ">
                <Image
                  width={1200}
                  height={800}
                  src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_auto/v1706796977/wedding/h7ei2pezpgln0hbm3x1z.png"
                  alt="Hotel Landgoed de Horst"
                  className="left-0 top-0 rounded-md object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-10 p-4 text-start backdrop-blur-sm">
                  <Typography className="text-white" as="h3" variant="xl/semibold">
                    Landgoed de Horst
                  </Typography>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="h-fit w-screen max-w-sm overflow-hidden rounded-md p-0 md:max-w-2xl lg:max-w-3xl ">
              <Image
                width={1200}
                height={800}
                src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_1200,f_auto,q_auto/v1706796977/wedding/h7ei2pezpgln0hbm3x1z.png"
                alt="Bergse Bossen"
                className="scale-110 rounded-t-lg object-fill"
              />
              <div className="mt-6 flex flex-col gap-4 pb-6 md:mt-10">
                <Typography variant="xl/regular" as="h3">
                  Landgoed de Horst
                </Typography>
                <Typography as="p">
                  Een hotel met een eigen bos en gratis parkeergelegenheid. Helaas is het voor ons niet mogelijk om hier
                  een groepsreservering te maken!
                </Typography>
              </div>
            </DialogContent>
          </Dialog>
        </ScrollReveal>
      </div>
      <Typography as="p" variant="sm/regular">
        * Helaas is het voor ons niet mogelijk om voor iedereen een hotelovernachting te verzorgen. In de RSVP staat er
        een optie om aan te geven of je geïnteresseerd bent in een hotelovernachting. Als er genoeg interesse is, zullen
        wij een hotel proberen te regelen met een groepskorting en een kamer in dezelfde sectie van het hotel!
      </Typography>
    </div>
  )
}
