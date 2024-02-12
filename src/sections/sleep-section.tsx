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
      className="min-h-h-dvh flex w-screen max-w-screen-md flex-col items-center gap-10 px-10 py-[120px] text-center "
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
              <div className="absolute bottom-4 left-4">
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
              className="scale-110 rounded-t-lg object-fill"
            />
            <div className="mt-6 flex flex-col gap-4 pb-6 md:mt-10">
              <Typography variant="xl/regular" as="h3">
                Hotel Bergse Bossen
              </Typography>
              <Typography as="p">
                Het hotel waar wij de nacht doorbrengen! Kom de volgende dag gezellig met ons nagenieten bij het
                ontbijt. We kunnen een groepsreservering maken met 5% korting. Dus laat in de RSVP weten of je hier wilt
                overnachten!
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
              <div className="absolute bottom-4 left-4">
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
      <Typography as="p" variant="sm/regular">
        * Helaas is het voor ons niet mogelijk om voor iedereen een hotelovernachting te verzorgen. In de RSVP staat er
        een optie om aan te geven of je geïnteresseerd bent in een hotelovernachting. Als er genoeg interesse is, zullen
        wij een hotel proberen te regelen met een groepskorting en een kamer in dezelfde sectie van het hotel!
      </Typography>
    </div>
  )
}
