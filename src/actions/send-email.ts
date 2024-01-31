'use server'

import { env } from '@/env.mjs'
import { Resend } from 'resend'

const resend = new Resend(env.RESEND_API_KEY)

export const sendEmail = async ({ username, email }: { username: string[]; email: string[] }) => {
  console.log('ACTION STARING MF')
  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev"',
      to: 'janssensnigel@gmail.com',
      subject: 'Hello world',
      // react: RSVPSuccess({ username }),
      text: 'hellow orld',
    })
    console.log('RESULT', result)

    console.log('WE HAVE AN ERROR FUCK', result.error)
    return { success: true }
  } catch (error) {
    console.error('ACTION FAILED YO MAMA', error)
    return { success: false, error: 'fucker' }
  }
}
