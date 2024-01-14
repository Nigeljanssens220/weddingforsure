import { HomeSection } from '@/pages/home-section'
import { LocationSection } from '@/pages/location-section'
import { PlaylistSection } from '@/pages/playlist-section'
import { RSVPSection } from '@/pages/rsvp-section'
import { SleepSection } from '@/pages/sleep-section'
import { ThemeSection } from '@/pages/theme-section'
import { TimelineSection } from '@/pages/timeline-section'
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
