import { LottiePlayer } from '@/app/_components/lottie-player'
import Typography from '@/app/_components/ui/typography'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-static'

export default function ThankYouPage() {
  return (
    <div className="relative flex h-dvh flex-col items-center justify-center">
      <LottiePlayer />
      <div className="absolute left-0 top-0 -z-10 h-dvh w-screen bg-white bg-opacity-60" />
      <Image
        quality={100}
        width={1920}
        height={130}
        src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_100/v1707551624/wedding/qrbk4cg2c1ahkvbgdgef.jpg"
        alt="staring-lovely-couple"
        className="absolute left-0 top-0 -z-20 h-dvh w-screen object-cover object-top md:object-center"
      />
      <div className="flex flex-col items-center gap-4 text-center">
        <Typography variant="xl/semibold" as="h1" className="text-4xl text-black">
          Thank you!
        </Typography>
        <Typography as="p" className="max-w-xs text-black">
          We kunnen niet wachten om samen op de dansvloer te staan!
        </Typography>
        <Link href="/" className="mt-6 rounded-lg bg-black px-8 py-2 text-center text-background">
          Terug naar home
        </Link>
      </div>
    </div>
  )
}
