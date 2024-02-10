import { SmoothScroll } from '@/app/_components/smooth-scroll-wrapper'
import { Separator } from '@/app/_components/ui/separator'
import Typography from '@/app/_components/ui/typography'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-static'

const FAQ = () => {
  return (
    <SmoothScroll>
      <section className="my-20 selection:bg-foreground selection:text-background md:my-32">
        <div className="mx-auto grid max-w-screen-2xl gap-8 px-8 md:grid-cols-2 md:px-0">
          <Typography className="max-w-lg text-4xl md:text-7xl" as="h2">
            Bruiloft en thema
          </Typography>
          <article className="space-y-8">
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Huh, het zou toch op 3 augustus 2024 plaatsvinden?
              </Typography>
              <Typography as="p">
                Dat klopt. Omdat wij hebben besloten om last minute van locatie te veranderen, hebben wij de bruiloft
                moeten verplaatsen naar 7 augustus 2024!
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Is mijn plus één welkom?
              </Typography>
              <Typography as="p">
                Dit vonden wij een hele moeilijke keuze. We willen natuurlijk het liefst al onze vrienden en familie
                uitnodigen, maar helaas is dat voor ons niet mogelijk. Kijk daarom goed naar de uitnodiging of de
                uitnodiging geadresseerd is aan jou en je partner. Als dit het geval is, zijn jullie van harte harte
                welkom! Als dit niet het geval is, dan is het helaas niet mogelijk om een plus één mee te nemen.
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Mag ik mijn kinderen meenemen?
              </Typography>
              <Typography as="p">
                Helaas hebben wij besloten om de bruiloft kindvrij te houden. Wij hopen dat jullie begrip hebben voor
                deze keuze. Dat betekent aan de andere kant wel dat jullie een dagje voor jezelf hebben!
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Hoe zien jullie de dress code voor je?
              </Typography>
              <Typography as="p">
                Wat ons betreft maakt dit het feestje compleet. Wij zullen zelf in een pak en trouwjurk trouwen, maar
                wij vinden het ook leuk als jullie je mooiste jurk of pak aantrekken.
                <br />
                <br />
                Het thema van het feest is <span className="italic">whimsical summer pastels</span> en wij zouden het
                heel erg waarderen als jullie je kleding hierop aanpassen. Daarnaast is het allerbelangrijkste
                natuurlijk dat je je goed voelt in wat je aanhebt en dat je er stralend uitziet!
                <br />
                <br />
                <Link href="/#theme" className="underline underline-offset-4">
                  Klik hier voor ons moodboard
                </Link>
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Moet ik mij kleden op het weer?
              </Typography>
              <Typography as="p">
                Wij hopen natuurlijk op een zonnige dag, maar het blijft Nederland. Het is dus verstandig om je kleding
                aan te passen op het weer. Wij zullen zelf een aantal maatregelen nemen om de gasten te beschermen tegen
                de zon of mogelijk slecht weer, maar wij raden aan om bijvoorbeeld zelf ook een zonnebril en zonnebrand
                mee te nemen.
              </Typography>
            </div>
          </article>
        </div>
        <Separator className="col-span-2 my-16 bg-black md:my-20" />
        <div className="mx-auto grid max-w-screen-2xl gap-8 px-8 md:grid-cols-2 md:px-0">
          <Typography className="max-w-lg text-4xl md:text-7xl" as="h2">
            RSVP
          </Typography>
          <article className="space-y-8">
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Is de RSVP verplicht?
              </Typography>
              <Typography as="p">
                De RSVP helpt ons enorm om een overzicht te krijgen van onze gasten en diens wensen tijdens de bruiloft
                en is daarom dan ook verplicht!
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Voldoet een online RSVP of moet ik nog reageren op de uitnodiging?
              </Typography>
              <Typography as="p">
                Het is niet nodig om nog te reageren op de uitnodiging. Je kunt de RSVP online invullen, dan weten wij
                dat je erbij kunt zijn!
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Is er een deadline om te RSVPen?
              </Typography>
              <Typography as="p">
                Omdat wij de hoeveelheid gasten en eventuele dieetwensen moeten doorgaven aan de trouwlocatie, hebben
                wij een harde deadline gesteld op XX-XX-2024 om aan te geven of je erbij kunt zijn.
              </Typography>
            </div>
          </article>
        </div>
        <Separator className="col-span-2 my-16 bg-black md:my-20" />
        <div className="mx-auto grid max-w-screen-2xl gap-8 px-8 md:grid-cols-2 md:px-0">
          <Typography className="max-w-lg text-4xl md:text-7xl" as="h2">
            Foto- en videografie
          </Typography>
          <article className="space-y-8">
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Is er een foto en/of video policy?
              </Typography>
              <Typography as="p">
                Tijdens de ceremonie hanteren wij een no-phone policy. Wij willen dit moment zo puur mogelijk met jullie
                beleven. Daarvoor en daarna mag je wat ons betreft gewoon lekker je innerlijke foto- of videograaf
                uithangen. Wij zouden het wel waarderen als je de foto&apos;s en video&apos;s achteraf met ons deelt!
                Dit kan via XX.
                <br />
                <br />
                Daarnaast hebben wij een team aan professionele foto- en videografen die de hele dag aanwezig zullen
                zijn.
              </Typography>
            </div>
          </article>
        </div>
        <Separator className="col-span-2 my-16 bg-black md:my-20" />
        <div className="mx-auto grid max-w-screen-2xl gap-8 px-8 md:grid-cols-2 md:px-0">
          <Typography className="max-w-lg text-4xl md:text-7xl" as="h2">
            Locatie, verblijf en transport
          </Typography>
          <article className="space-y-8">
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Vindt de bruiloft binnen of buiten plaats?
              </Typography>
              <Typography as="p">
                De bruiloft zal plaatsvinden in hartje zomer en we hopen dan ook dat de ceremonie buiten in de tuin van
                de locatie voldaan kan worden. De overige delen van de bruiloft zullen binnen plaatsvinden. Het is en
                blijft natuurlijk Nederland, dus bij slecht weer zal de ceremonie ook naar binnen verplaatsen of onder
                een tent.
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Wat is het adres van de trouwlocatie?
              </Typography>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/Buitenplaats+Sparrendaal/@52.0542996,5.2774825,17z/data=!4m14!1m7!3m6!1s0x47c65d2234117707:0x7fe358ce772d9d71!2sBuitenplaats+Sparrendaal!8m2!3d52.0542963!4d5.2800574!16s%2Fg%2F120xcv72!3m5!1s0x47c65d2234117707:0x7fe358ce772d9d71!8m2!3d52.0542963!4d5.2800574!16s%2Fg%2F120xcv72?entry=ttu"
                className="flex w-fit items-center"
              >
                <span className="font-medium underline underline-offset-4">Buitenplaats Sparrendaal</span>
                <ExternalLink className="ml-2 size-4 text-foreground" />
              </a>
              <Typography as="p" className="italic">
                Hoofdstraat 89
              </Typography>
              <Typography as="p" className="italic">
                3971 KE &nbsp;&nbsp;Driebergen-Rijsenburg
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Hoe zit het met de parkeergelegenheid?
              </Typography>
              <Typography as="p">
                Er is beperkte plek om te parkeren voor de deur. Wij raden aan om de door de trouwlocatie aangegeven
                parkeerplaats te gebruiken. Deze bevindt zich op 5 minuten loopafstand van de locatie.
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Wat is de beste manier om daar te komen?
              </Typography>
              <Typography as="p">
                De locatie is goed te bereiken met de auto en het openbaar vervoer. De dichtstbijzijnde bushalte is op 5
                minuten loopafstand van de locatie. Vanaf station Driebergen-Zeist is het 10 minuten met de bus. Vanaf
                station Utrecht Centraal is het 30 minuten met de bus.
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Zijn er kamers gereserveerd voor de gasten, of waar kan ik verblijven?
              </Typography>
              <Typography as="p">
                Wij hebben vooraf geen kamers gereserveerd voor de gasten, maar er zijn een aantal hotels in de buurt
                van de trouwlocatie. Wij raden aan om een hotel te boeken in Driebergen-Rijsenburg, Zeist of Utrecht.
                <br />
                <br />
                Tip: in de RSVP is er een optie om aan te geven of je geïnteresseerd bent in een hotelovernachting. Als
                er genoeg interesse is, zullen wij een hotel proberen te regelen met een groepskorting.
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Is er een shuttle service van en/of naar de hotels?
              </Typography>
              <Typography as="p">
                Wij zullen zelf verblijven in een hotel in de buurt van de trouwlocatie. Indien er veel gasten zijn die
                graag een hotelovernachtig willen, zullen wij een shuttle service aanbieden van en naar de hotels.
              </Typography>
            </div>
          </article>
        </div>
        <Separator className="col-span-2 my-16 bg-black md:my-20" />
        <div className="mx-auto grid max-w-screen-2xl gap-8 px-8 md:grid-cols-2 md:px-0">
          <Typography className="max-w-lg text-4xl md:text-7xl" as="h2">
            Menu en dieetwensen
          </Typography>
          <article className="space-y-8">
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Wat voor eten wordt er geserveerd tijdens het diner?
              </Typography>
              <Typography as="p">
                Het diner zal bestaan uit een 3 of 4-gangen menu. De menu opties zijn momenteel echter nog niet bekend.
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Zijn er alternatieven voor het diner beschikbaar?
              </Typography>
              <Typography as="p">
                Wij willen jullie vragen om eventuele dieetwensen zo snel mogelijk aan te geven in de RSVP. Wij zullen
                ons best doen om een alternatief te regelen. Mocht dit niet lukken, dan zullen wij contact met je
                opnemen!
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Is er een open bar?
              </Typography>
              <Typography as="p">
                Er is gedurende de hele dag een open bar. Daarnaast is er ook de mogelijkheid om een aantal vooraf
                geselecteerde cocktails te bestellen tijdens het feest!
              </Typography>
            </div>
          </article>
        </div>
        <Separator className="col-span-2 my-16 bg-black md:my-20" />
        <div className="mx-auto grid max-w-screen-2xl gap-8 px-8 md:grid-cols-2 md:px-0">
          <Typography className="max-w-lg text-4xl md:text-7xl" as="h2">
            Overige vragen
          </Typography>
          <article className="space-y-8">
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Doen jullie aan huwelijkscadeaus?
              </Typography>
              <Typography as="p">
                Wij vragen uiteraard niet om cadeaus, jullie aanwezigheid is al een cadeau op zich! Zo lekker cheesy
                zijn wij wel. Mochten jullie echt iets willen geven:
                <br />
                <br />
                Wij willen na het huwelijk heel graag onze droomreis door Nieuw Zeeland en Australie maken. Eventuele
                bijdrages zijn daarom altijd welkom!
              </Typography>
            </div>
            <div className="space-y-1">
              <Typography className="text-xl font-semibold" as="h3">
                Wie kan ik storen met al mijn vragen?
              </Typography>
              <Typography as="p">
                XXX is onze ceremoniemeester. Hij zal jullie op de dag zelf begeleiden en is ook bereikbaar voor al
                jullie vragen. Zijn contactgegevens zijn te vinden in de uitnodiging.
              </Typography>
            </div>
          </article>
        </div>
      </section>
    </SmoothScroll>
  )
}

export default FAQ
