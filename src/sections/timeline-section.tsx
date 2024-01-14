import { Line } from '@/app/_components/ui/line'
import Typography from '@/app/_components/ui/typography'

export function TimelineSection() {
  return (
    <div id="timeline" className="flex h-dvh w-screen flex-col items-center gap-10 px-10 py-10 text-center">
      <Typography as="h3" className="text-3xl font-semibold">
        Tijdlijn
      </Typography>
      <Typography as="p" className="max-w-[62ch]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam praesentium assumenda autem vero soluta totam
        quibusdam sunt et minima. Deleniti veniam eum tempora quibusdam ipsa expedita corporis officiis enim est.
      </Typography>
      <div className="relative flex min-h-96 flex-col gap-16">
        <Line />
        <div className="grid grid-cols-2 gap-20">
          <Typography as="h3" className="text-right text-3xl font-semibold">
            Logo
          </Typography>
          <Typography as="p" className="flex flex-col text-left italic">
            14:30
            <span className="uppercase">Ontvangst</span>
          </Typography>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <Typography as="p" className="flex flex-col text-right italic">
            15:00
            <span className="uppercase">Ceremonie</span>
          </Typography>
          <Typography as="h3" className="text-left text-3xl font-semibold">
            Logo
          </Typography>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <Typography as="h3" className="text-right text-3xl font-semibold">
            Logo
          </Typography>
          <Typography as="p" className="flex flex-col text-left italic">
            16:00
            <span className="uppercase">Taart & Toast</span>
          </Typography>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <Typography as="p" className="flex flex-col text-right italic">
            16:30
            <span className="uppercase">Borrel</span>
          </Typography>
          <Typography as="h3" className="text-left text-3xl font-semibold">
            Logo
          </Typography>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <Typography as="h3" className="text-right text-3xl font-semibold">
            Logo
          </Typography>
          <Typography as="p" className="flex flex-col text-left italic">
            18:00
            <span className="uppercase">Diner</span>
          </Typography>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <Typography as="p" className="flex flex-col text-right italic">
            21:00
            <span className="font-normal">Dansen</span>
          </Typography>
          <Typography as="h3" className="text-left text-3xl font-semibold">
            Logo
          </Typography>
        </div>
      </div>
    </div>
  )
}
