import Image from 'next/image'
import nigelAndShintaG from '../../../../public/images/background-photo.png'
import { LoginForm } from '../../_components/login-form'
import Hero from '../../_components/ui/hero'
import Typography from '../../_components/ui/typography'

export const dynamic = 'force-static'

export default function Login() {
  return (
    <main className="relative m-0 flex h-screen w-screen flex-col items-center justify-start gap-20 overflow-hidden p-0">
      <Image
        quality={100}
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={nigelAndShintaG}
        alt="nigel-and-shinta-g"
        className="absolute -z-10 bg-white bg-opacity-10 object-cover object-bottom text-transparent"
      />
      <div className="mt-20 flex flex-col text-center">
        <Typography variant="xl/regular" className="text-balance uppercase">
          you&apos;re invited to the wedding of
        </Typography>
        <div className="flex flex-col text-center">
          <Hero variant="light">Shinta</Hero>
          <Typography variant="xl/regular" className="uppercase">
            and
          </Typography>
          <Hero variant="light">Nigel</Hero>
        </div>
      </div>
      <LoginForm />
    </main>
  )
}
