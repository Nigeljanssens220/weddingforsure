import { CMSection } from '@/sections/cm-section'
import { HomeSection } from '@/sections/home-section'
import { LocationSection } from '@/sections/location-section'
import { RSVPSection } from '@/sections/rsvp-section'
import { SleepSection } from '@/sections/sleep-section'
import { ThemeSection } from '@/sections/theme-section'
import { TimelineSection } from '@/sections/timeline-section'
import Image from 'next/image'
import { SmoothScroll } from '../_components/smooth-scroll-wrapper'
import Typography from '../_components/ui/typography'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <>
      <main className="no-scrollbar relative flex flex-col items-center justify-start overflow-hidden p-0 selection:bg-black selection:text-beige">
        <SmoothScroll>
          <HomeSection />
          <RSVPSection />
          <div className="flex h-full max-h-40 w-full px-0 md:max-h-96">
            <Image
              quality={100}
              width={640}
              height={130}
              src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_100/v1707551624/wedding/xa8lqif4hmqhqzmzsfkd.jpg"
              alt="staring-lovely-couple"
              className="w-1/3 object-cover object-bottom "
            />
            <Image
              quality={100}
              width={640}
              height={130}
              src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_100/v1707551624/wedding/qz3t7hdi1s8hrl5oh2zy.jpg"
              alt="smooth-couple"
              className="w-1/3 object-cover object-top"
            />
            <Image
              quality={100}
              width={640}
              height={130}
              src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_100/v1707551624/wedding/wclpxo5wpdhpfcymijj7.jpg"
              alt="cool-couple"
              className="w-1/3 object-cover object-bottom"
            />
          </div>
          <TimelineSection />
          <div className="flex h-full max-h-40 w-full px-0 md:max-h-96">
            <Image
              quality={100}
              width={640}
              height={130}
              src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_100/v1707551624/wedding/gex5ihply3dfcjkeca8d.jpg"
              alt="staring-lovely-couple"
              className="w-1/3 object-cover object-bottom "
            />
            <Image
              quality={100}
              width={640}
              height={130}
              src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_100/v1707551624/wedding/mt2vyu2hby6iqbragwyo.jpg"
              alt="smooth-couple"
              className="w-1/3 object-cover object-top"
            />
            <Image
              quality={100}
              width={640}
              height={130}
              src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_100/v1707551624/wedding/npoiv6eshi3oehkfybr1.jpg"
              alt="cool-couple"
              className="w-1/3 object-cover object-bottom"
            />
          </div>
          <LocationSection />
          <div className="flex h-full max-h-40 w-full px-0 md:max-h-96">
            <Image
              quality={100}
              width={640}
              height={130}
              src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_100/v1707551624/wedding/qzukpaleufnvwdx1gsx4.jpg"
              alt="staring-lovely-couple"
              className="w-1/3 object-cover object-top"
            />
            <Image
              quality={100}
              width={640}
              height={130}
              src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_100/v1707551624/wedding/c4bhjvoihgju5gvrngn6.jpg"
              alt="smooth-couple"
              className="w-1/3 object-cover object-top"
            />
            <Image
              quality={100}
              width={640}
              height={130}
              src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_100/v1707551624/wedding/f4owadaewvqkt2cq74lu.jpg"
              alt="cool-couple"
              className="w-1/3 object-cover object-top"
            />
          </div>
          <ThemeSection />
          <div className="flex h-full max-h-40 w-full px-0 md:max-h-96">
            <Image
              quality={100}
              width={640}
              height={130}
              src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_100/v1707551624/wedding/qrbk4cg2c1ahkvbgdgef.jpg"
              alt="staring-lovely-couple"
              className="w-1/3 object-cover object-top"
            />
            <Image
              quality={100}
              width={640}
              height={130}
              src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_100/v1707551624/wedding/lg7cmtakgwjxwapyrskj.jpg"
              alt="smooth-couple"
              className="w-1/3 object-cover object-top"
            />
            <Image
              quality={100}
              width={640}
              height={130}
              src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_100/v1707551624/wedding/ygzgvxjde3d5cokw4np2.jpg"
              alt="cool-couple"
              className="w-1/3 object-cover object-top"
            />
          </div>
          <SleepSection />
          <div className="flex h-full max-h-40 w-full px-0 md:max-h-96">
            <Image
              quality={100}
              width={640}
              height={130}
              src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_100/v1707551624/wedding/cvh801gfzqaralet6lmq.jpg"
              alt="staring-lovely-couple"
              className="w-1/3 object-cover"
            />
            <Image
              quality={100}
              width={640}
              height={130}
              src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_100/v1707551624/wedding/lwypbvlykd1jnjpjzdww.jpg"
              alt="smooth-couple"
              className="w-1/3 object-cover object-top"
            />
            <Image
              quality={100}
              width={640}
              height={130}
              src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_auto,f_auto,q_100/v1707551624/wedding/ngl4srcrbfzhwfwn2jlq.jpg"
              alt="cool-couple"
              className="w-1/3 object-cover object-bottom"
            />
          </div>
          <CMSection />
        </SmoothScroll>
        <div className="flex h-40 w-screen items-center justify-center bg-[#ABB58E]">
          <Typography as="h3" variant="xl/regular" className="font-sloop text-7xl text-beige">
            See you there!
          </Typography>
        </div>
        <footer className="flex w-screen items-center justify-between bg-[#F9F6F0] px-20 py-4">
          <Typography as="p" variant="lg/regular" className="font-eaves">
            Buitenplaats Sparrendaal
          </Typography>
          <Typography as="p" variant="lg/regular" className="font-eaves">
            07.08.2024
          </Typography>
        </footer>
      </main>
    </>
  )
}
