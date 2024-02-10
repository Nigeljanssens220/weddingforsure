import { CMSection } from '@/sections/cm-section'
import { HomeSection } from '@/sections/home-section'
import { LocationSection } from '@/sections/location-section'
import { RSVPSection } from '@/sections/rsvp-section'
import { SleepSection } from '@/sections/sleep-section'
import { ThemeSection } from '@/sections/theme-section'
import { TimelineSection } from '@/sections/timeline-section'
import { PageBreak } from '../_components/page-break'
import { SmoothScroll } from '../_components/smooth-scroll-wrapper'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <>
      <main className="no-scrollbar relative flex flex-col items-center justify-start overflow-hidden p-0 selection:bg-black selection:text-beige">
        <SmoothScroll>
          <HomeSection />
          <RSVPSection />
          <PageBreak />
          <TimelineSection />
          <PageBreak />
          <LocationSection />
          <PageBreak />
          <ThemeSection />
          <PageBreak />
          <SleepSection />
          <CMSection />
        </SmoothScroll>
      </main>
    </>
  )
}
