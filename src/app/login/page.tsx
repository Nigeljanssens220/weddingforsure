import Image from 'next/image'
import { LoginForm } from '../_components/login-form'
import { Card, CardContent, CardHeader, CardTitle } from '../_components/ui/card'

export default function Login() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <Image
        src="/login-photo.jpeg"
        alt="nigel-and-shinta-g"
        width={3840}
        height={2160}
        className="absolute -z-10 h-screen w-screen bg-white bg-opacity-10 object-cover text-transparent blur-sm brightness-75"
      />
      <Card className="w-[380px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  )
}
