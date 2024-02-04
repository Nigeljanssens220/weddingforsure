'use server'

import { env } from '@/env.mjs'
import { Resend } from 'resend'

const resend = new Resend(env.RESEND_API_KEY)

export const sendEmail = async ({ username, email }: { username: string[]; email: string[] }) => {
  console.log('starting')
  try {
    const { data, error } = await resend.emails.send({
      from: 'info@thenishiwedding.com',
      to: 'janssensnigel@gmail.com',
      subject: 'Hello world',
      // react: RSVPSuccess({ username }),
      text: 'hellow orld',
    })

    console.log('result', data)
    console.log('result', error)

    return { success: true, data, error }
  } catch (error) {
    return { success: false, error }
  }
}
