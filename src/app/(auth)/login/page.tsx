import Image from 'next/image'
import { LoginForm } from '../../_components/login-form'
import Hero from '../../_components/ui/hero'
import Typography from '../../_components/ui/typography'

export const dynamic = 'force-static'

export default function Login() {
  return (
    <main className="selection:text-beige relative flex h-dvh flex-col items-center justify-start overflow-x-hidden p-0 selection:bg-black">
      <Image
        fill
        priority
        loading="eager"
        quality={100}
        src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_1920,f_auto,q_100/v1707551624/wedding/pmvcmrvzxknaypvjvl7y.jpg"
        alt="nigel-and-shinta"
        className="absolute -z-20 object-cover object-bottom opacity-80 blur-[4px] saturate-0"
      />
      <div className="absolute top-0 -z-10 h-dvh w-screen" />
      <div className="flex flex-col items-center gap-10 pt-20 text-center">
        <Typography as="p" variant="md/regular" className="max-w-[20ch] uppercase text-[#464646]">
          Je bent uitgenodigd voor de bruiloft van
        </Typography>
        <div className="flex flex-col gap-4 text-start">
          <Hero variant="light" className="font-sloop -ml-4">
            Shinta
          </Hero>
          <Typography variant="xl/regular" className="self-center uppercase text-[#464646]">
            EN
          </Typography>
          <Hero variant="light" className="font-sloop -ml-4">
            Nigel
          </Hero>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
