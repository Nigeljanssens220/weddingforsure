import OpacityReveal from '@/app/_components/ui/animated/opacity-reveal'
import ScrollReveal from '@/app/_components/ui/animated/scroll-reveal'
import Image from 'next/image'
import { LoginForm } from '../../_components/login-form'
import Hero from '../../_components/ui/hero'
import Typography from '../../_components/ui/typography'

export const dynamic = 'force-static'

export default function Login() {
  return (
    <main className="relative flex h-dvh flex-col items-center justify-start overflow-x-hidden p-0 selection:bg-black selection:text-beige">
      <OpacityReveal>
        <Image
          fill
          priority
          loading="eager"
          quality={100}
          src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_1920,f_auto,q_100/v1707551624/wedding/zi3qjawgkyzwyjoto7hy.jpg"
          alt="nigel-and-shinta"
          className="absolute -z-20 object-cover object-bottom"
        />
      </OpacityReveal>
      <div className="absolute top-0 -z-10 h-dvh w-screen" />
      <div className="flex flex-col items-center gap-10 pt-20 text-center">
        <ScrollReveal delay={1}>
          <Typography as="p" variant="md/regular" className="max-w-[20ch] font-eaves uppercase text-[#464646]">
            Je bent uitgenodigd voor de bruiloft van
          </Typography>
        </ScrollReveal>
        <ScrollReveal delay={1.2}>
          <div className="flex flex-col gap-2 text-start">
            <Hero variant="light" className="-ml-4 font-sloop text-[#464646]">
              Shinta
            </Hero>
            <Typography variant="xl/regular" className="-mt-2 self-center font-eaves uppercase text-[#464646]">
              EN
            </Typography>
            <Hero variant="light" className="-ml-4 font-sloop text-[#464646]">
              Nigel
            </Hero>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={1.4}>
          <LoginForm />
        </ScrollReveal>
      </div>
    </main>
  )
}
