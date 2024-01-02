import { Input } from '@/app/_components/ui/input'
import Typography from '@/app/_components/ui/typography'

export const dynamic = 'force-static'

const RSVP = () => {
  return (
    <div className="mt-16 px-3">
      <Typography className="hidden text-7xl md:block" as="h1">
        RSVP
      </Typography>
      <Typography className="text-3xl md:hidden" as="h1">
        Dance with us, baby
      </Typography>
      {/* <div className="min-h-80 bg-[url('/images/background-photo.png')] bg-cover bg-bottom bg-no-repeat" /> */}
      <Typography as="p" className="text-balance">
        We cannot wait to celebrate our wedding day with you. But, we need to know if you have got the moves. Please
        RSVP using the form below in order to make sure you will have a first row seat, delicious food and a spot on the
        dancefloor!
      </Typography>
      <form action="" className="min-h-80 bg-[#E7E2D4] p-4">
        <Input />
      </form>
    </div>
  )
}

export default RSVP
