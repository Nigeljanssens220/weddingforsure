import ScrollReveal from '@/app/_components/ui/animated/scroll-reveal'
import Typography from '@/app/_components/ui/typography'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

export function LocationSection() {
  return (
    <div
      id="location"
      className="flex w-screen max-w-screen-md flex-col items-center gap-12 px-10 py-[120px] text-center "
    >
      <div className="space-y-4">
        <Typography as="h3" className="text-3xl font-semibold">
          Locatie
        </Typography>
        <Typography as="p">
          Op Buitenplaats Sparrendaal vieren wij de liefde te midden van historische pracht en betoverende tuinen. Een
          romantische setting waar we met onze favoriete mensen onvergetelijke herinneringen gaan maken.
        </Typography>
      </div>
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://swijnenburg.com/locatie/buitenplaats-sparrendaal/"
            className="flex items-center"
          >
            <Typography as="span" variant="lg/semibold" className="font-eaves">
              Buitenplaats Sparrendaal
            </Typography>
            <ExternalLink className="ml-2 size-4 text-foreground" />
          </a>
          <Typography as="p" className="font-eaves">
            Hoofdstraat 89
          </Typography>
          <Typography as="p" className="font-eaves">
            3971 KE, Driebergen-Rijsenburg
          </Typography>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.35}>
        <Image
          src="https://res.cloudinary.com/dmdewqwqf/image/upload/f_auto,w_auto,q_auto/v1707575465/wedding/bhjqd1c3ehxxxh6ydyez.png"
          alt="Buitenplaats Sparrendaal"
          width={300}
          height={200}
          className="object-cover"
        />
      </ScrollReveal>
    </div>
  )
}
