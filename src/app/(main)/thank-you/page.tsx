import { LottiePlayer } from '@/app/_components/lottie-player'
import Typography from '@/app/_components/ui/typography'
import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      <LottiePlayer />
      <div />
      <div className="flex flex-col gap-4">
        <Typography variant="xl/semibold" as="h1">
          Bedankt voor het RSVPen!
        </Typography>
        <Link href="/" className="bg-black px-4 py-2 text-center text-background">
          Terug naar home
        </Link>
      </div>
    </div>
  )
}
