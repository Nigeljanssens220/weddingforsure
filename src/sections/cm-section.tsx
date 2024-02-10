import { Avatar, AvatarFallback, AvatarImage } from '@/app/_components/ui/avatar'
import { Card, CardContent } from '@/app/_components/ui/card'
import Typography from '@/app/_components/ui/typography'

export function CMSection() {
  return (
    <div
      id="ceremoniemeester"
      className="flex w-screen max-w-screen-md flex-col items-center gap-10 px-10 py-[120px] text-center"
    >
      <div className="space-y-4">
        <Typography as="h3" className="text-3xl font-semibold">
          Ceremoniemeester
        </Typography>
        <Typography as="p">
          Wil je graag bijdragen aan onze bruiloft in de vorm van een speech, filmpje of dansje? Neem dan contact op met
          de ceremoniemeester!
        </Typography>
      </div>
      <Card className="min-w-96 border-none bg-black bg-opacity-5 shadow-lg">
        <CardContent className="flex items-center gap-6 p-6">
          <Avatar>
            <AvatarImage
              src="https://res.cloudinary.com/dmdewqwqf/image/upload/f_auto,q_auto,w_auto/v1707579512/wedding/hjdnksslpgbr9xhrflmp.jpg"
              alt="dylan"
            />
            <AvatarFallback>DT</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2 text-start">
            <Typography as="h3" variant="xl/semibold">
              Dylan Janssens
            </Typography>
            <div className="flex flex-col">
              <Typography as="a" href="mailto:d.t.janssens@gmail.com">
                d.t.janssens@gmail.com
              </Typography>
              <Typography as="a" href="tel:+31683562869">
                +31 6 83562869
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* <ScrollReveal>
        <Image
          width={300}
          height={200}
          src="https://res.cloudinary.com/dmdewqwqf/image/upload/f_auto,q_auto/v1707564556/wedding/hm3nn14zgd3em9bzujgl.png"
          alt="cocktail"
          className="mb-20 w-40 object-cover md:w-40"
        />
      </ScrollReveal>
      <div className="space-y-4">
        <Typography as="h3" className="text-3xl font-semibold">
          You&apos;re invited!
        </Typography>
        <Typography as="p">
          Join us as we say &quot;I do&quot; and celebrate our love on August 7th, 2024 at Buitenplaats Sparrendaal.
          Your presence will make our special day truly complete.
        </Typography>
      </div>
      <Link
        href="/rsvp"
        className="mt-12 rounded-full bg-[#87926A] px-20 py-2 text-white shadow-md hover:bg-opacity-90"
      >
        RSVP
      </Link> */}
    </div>
  )
}
