'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import PuffLoader from 'react-spinners/PuffLoader'
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'

const LOGIN_ERRORS_MAP = {
  CredentialsSignin: 'Verkeerd wachtwoord, probeer het nog eens!',
} as const

const loginSchema = z.object({
  password: z.string({
    required_error: 'Je moet wel een wachtwoord invullen, hè!',
  }),
})

type LoginSchema = z.infer<typeof loginSchema>

export function LoginForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get('callbackUrl') ?? '/'
  const error = searchParams?.get('error')

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const handleLogin = async ({ password }: LoginSchema) => {
    await signIn('credentials', { callbackUrl, password })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleLogin)} className="flex w-full max-w-xs items-center space-y-8">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <div className="flex bg-white pl-4 shadow-100">
                <FormControl>
                  <input
                    type="password"
                    {...field}
                    autoComplete="current-password"
                    placeholder="Ons geheime wachtwoord"
                    className="focus w-full bg-transparent text-black placeholder:text-sm placeholder:text-muted-foreground focus-visible:outline-none"
                  />
                </FormControl>
                <button type="submit" className="bg-black px-6 py-4">
                  <span className="sr-only">Inloggen</span>
                  {form.formState.isSubmitting ? (
                    <PuffLoader color="#FFFFFF" size={16} />
                  ) : (
                    <ArrowRight className="size-4 text-white" />
                  )}
                </button>
              </div>
              <FormMessage className="text-background" />
              {!!error && (
                <p className={'text-sm font-medium text-background'}>
                  {LOGIN_ERRORS_MAP[error as keyof typeof LOGIN_ERRORS_MAP]}
                </p>
              )}
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
