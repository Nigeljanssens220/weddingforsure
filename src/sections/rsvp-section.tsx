import Typography from '@/app/_components/ui/typography'
import Image from 'next/image'
import Link from 'next/link'

export function RSVPSection() {
  return (
    <div id="rsvp" className="flex w-screen max-w-screen-md flex-col items-center gap-10 px-10 py-10 text-center ">
      <Image src="/images/cocktail.svg" alt="cocktail" width={90} height={300} quality={100} />
      <Typography as="h3" className="text-3xl font-semibold">
        You&apos;re invited!
      </Typography>
      <Typography as="p">
        Join us as we say &quot;I do&quot; and celebrate our love on August 7th, 2024 at Buitenplaats Sparrendaal. Your
        presence will make our special day truly complete.
      </Typography>
      <Link
        href="/rsvp"
        className="w-full border border-white bg-[#87926A] px-4 py-2 text-white ring-1 ring-[#87926A] hover:bg-opacity-90"
      >
        RSVP
      </Link>
    </div>
  )
}
