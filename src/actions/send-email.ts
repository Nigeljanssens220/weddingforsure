'use server'

import { env } from '@/env.mjs'
import RSVPSuccess from 'emails/rsvp-success'
import { Resend } from 'resend'

const resend = new Resend(env.RESEND_API_KEY)

export const sendEmail = async ({ username, email }: { username: string[]; email: string[] }) => {
  try {
    const result = await resend.emails.send({
      from: 'The Nishi Wedding <info@nigeljanssens.com>',
      to: email,
      subject: 'We hebben je RSVP ontvangen!',
      react: RSVPSuccess({ username }),
    })
    return { success: true, data: result.data }
  } catch (error) {
    console.error('SEND RSVP SUCCESS FAILED YO MAMA', error)
    return { success: false, error: 'fucker' }
  }
}
