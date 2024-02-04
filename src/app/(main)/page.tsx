import { HomeSection } from '@/sections/home-section'
import { LocationSection } from '@/sections/location-section'
import { RSVPSection } from '@/sections/rsvp-section'
import { SleepSection } from '@/sections/sleep-section'
import { ThemeSection } from '@/sections/theme-section'
import { TimelineSection } from '@/sections/timeline-section'
import Link from 'next/link'
import { PageBreak } from '../_components/page-break'
import { SmoothScroll } from '../_components/smooth-scroll-wrapper'
import { InfiniteMovingCardsDemo } from '../_components/ui/animated/moving-cards'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <>
      <main className="relative flex flex-col items-center justify-start overflow-x-hidden p-0">
        <SmoothScroll>
          <HomeSection />
          {/* <ImageDialog publicId="" /> */}
          <Link href={'/photos/bledder'} scroll={false}>
            modal me
          </Link>
          <InfiniteMovingCardsDemo />
          <RSVPSection />
          <PageBreak />
          <TimelineSection />
          <PageBreak />
          <LocationSection />
          <PageBreak />
          <ThemeSection />
          <PageBreak />
          <SleepSection />
        </SmoothScroll>
      </main>
    </>
  )
}
