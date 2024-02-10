import ScrollReveal from '@/app/_components/ui/animated/scroll-reveal'
import Typography from '@/app/_components/ui/typography'
import Image from 'next/image'
import Link from 'next/link'
// import Celebrations from '../../public/celebration.lottie'

export function RSVPSection() {
  return (
    <div id="rsvp" className="flex w-screen max-w-screen-md flex-col items-center px-10 py-[120px] text-center ">
      <ScrollReveal>
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
      </Link>
    </div>
  )
}
