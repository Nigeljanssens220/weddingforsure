import Image from 'next/image'
import { LoginForm } from '../../_components/login-form'
import Hero from '../../_components/ui/hero'
import Typography from '../../_components/ui/typography'

export const dynamic = 'force-static'

export default function Login() {
  return (
    <main className="relative flex h-svh flex-col items-center justify-center overflow-x-hidden p-0">
      <Image
        fill
        priority
        loading="eager"
        quality={100}
        src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_1920,f_auto,q_100/v1705758405/Michelle.Cole.Wedding-0248_gzyi2d.jpg"
        alt="nigel-and-shinta-g"
        className="absolute -z-20 object-cover object-top"
      />
      <div className="absolute top-0 -z-10 h-svh w-screen bg-black bg-opacity-40" />
      <div className="flex flex-col items-center gap-20 text-center text-background">
        <div className="flex flex-col gap-4 text-start font-slight">
          <Hero variant="light">Shinta</Hero>
          <Typography variant="xl/regular" className="self-center uppercase text-white">
            &amp;
          </Typography>
          <Hero variant="light">Nigel</Hero>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
