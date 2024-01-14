import { HomeSection } from '@/sections/home-section'
import { LocationSection } from '@/sections/location-section'
import { PlaylistSection } from '@/sections/playlist-section'
import { RSVPSection } from '@/sections/rsvp-section'
import { SleepSection } from '@/sections/sleep-section'
import { ThemeSection } from '@/sections/theme-section'
import { TimelineSection } from '@/sections/timeline-section'
import { PageBreak } from '../_components/page-break'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <>
      <main className="container relative flex min-h-dvh w-screen max-w-screen-2xl flex-col items-center justify-start overflow-x-hidden p-0">
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
        <PageBreak />
        <PlaylistSection />
      </main>
    </>
  )
}
