import RsvpForm from '@/app/_components/rsvp-form'
import Typography from '@/app/_components/ui/typography'

export const dynamic = 'force-static'

const RSVP = () => {
  return (
    <div className="mt-20 flex min-h-dvh w-full flex-col items-center px-3 selection:bg-black selection:text-[#C78686] md:mt-32">
      <div className="flex flex-col gap-4">
        <Typography className="max-w-lg text-balance text-4xl md:text-7xl" as="h1">
          Come dance with us, baby!
        </Typography>
        <RsvpForm />
      </div>
    </div>
  )
}

export default RSVP
