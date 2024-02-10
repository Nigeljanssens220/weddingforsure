import { TimelineIcon } from '@/app/_components/timeline-icon'
import ScrollReveal from '@/app/_components/ui/animated/scroll-reveal'
import { Line } from '@/app/_components/ui/line'
import Typography from '@/app/_components/ui/typography'

export function TimelineSection() {
  return (
    <div
      id="timeline"
      className="flex w-screen max-w-screen-md flex-col items-center gap-10 px-10 py-[120px] text-center"
    >
      <div className="space-y-4">
        <Typography as="h3" className="text-3xl font-semibold">
          Tijdlijn
        </Typography>
        <Typography as="p" className="max-w-[62ch]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam praesentium assumenda autem vero soluta totam
          quibusdam sunt et minima. Deleniti veniam eum tempora quibusdam ipsa expedita corporis officiis enim est.
        </Typography>
      </div>
      <div className="relative flex min-h-96 flex-col gap-16">
        <Line />
        <ScrollReveal className="grid grid-cols-2 items-center gap-16">
          {/* <Typography as="h3" className="text-right text-3xl font-semibold">
            Logo
          </Typography> */}
          <TimelineIcon name="ontvangst" width={120} alignRight />
          <Typography as="p" className="flex flex-col text-left">
            14:30
            <span>Ontvangst</span>
          </Typography>
        </ScrollReveal>
        <ScrollReveal className="grid grid-cols-2 items-center gap-16">
          <Typography as="p" className="flex flex-col text-right">
            15:00
            <span>Ceremonie</span>
          </Typography>
          <TimelineIcon name="ceremonie" width={100} alignLeft />
        </ScrollReveal>
        <ScrollReveal className="grid grid-cols-2 items-center gap-16">
          <TimelineIcon name="borrel" alignRight width={80} />
          <Typography as="p" className="flex flex-col text-left">
            16:00
            <span>Borrel</span>
          </Typography>
        </ScrollReveal>
        <ScrollReveal className="grid grid-cols-2 items-center gap-16">
          <Typography as="p" className="flex flex-col text-right">
            18:30
            <span>Diner</span>
          </Typography>
          <TimelineIcon name="diner" alignLeft width={120} />
        </ScrollReveal>
        <ScrollReveal className="grid grid-cols-2 items-center gap-16">
          <TimelineIcon name="party" alignRight width={80} />
          <Typography as="p" className="flex flex-col text-left">
            21:00
            <span>Dansen</span>
          </Typography>
        </ScrollReveal>
        <ScrollReveal className="grid grid-cols-2 items-center gap-16">
          <Typography as="p" className="flex flex-col text-right">
            00:30
            <span className="font-normal">Goodnight</span>
          </Typography>
          <TimelineIcon name="goodnight" alignLeft width={90} />
        </ScrollReveal>
      </div>
    </div>
  )
}
