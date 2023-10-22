'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

const LOGIN_ERRORS_MAP = {
  CredentialsSignin: 'Wachtwoord is onjuist',
} as const

const loginSchema = z.object({
  password: z.string({ required_error: 'Wachtwoord is verplicht' }),
})

type LoginSchema = z.infer<typeof loginSchema>

export function LoginForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') ?? '/'
  const error = searchParams.get('error')

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const handleLogin = async ({ password }: LoginSchema) => {
    await signIn('credentials', { callbackUrl, password })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-8">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wachtwoord</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
              {!!error && (
                <p className={'text-sm font-medium text-destructive'}>
                  {LOGIN_ERRORS_MAP[error as keyof typeof LOGIN_ERRORS_MAP]}
                </p>
              )}
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  )
}
