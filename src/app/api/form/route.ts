import { resend } from '@/lib/resend'

export async function GET() {
  try {
    // const result = await resend.emails.send({
    //   from: 'onboarding@resend.dev"',
    //   to: ['info@nigeljanssens.com'],
    //   subject: 'Hello world',
    //   // react: RSVPSuccess({ username }),
    //   text: 'hellow orld',
    // })
    const result = await resend.apiKeys.list()
    // const result = await fetch('https://eu-api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: {
    //     from: 'Acme <onboarding@resend.dev>',
    //     to: ['janssensnigel@gmail.com'],
    //     subject: 'hello world',
    //     text: 'it works!',
    //     headers: {
    //       'X-Entity-Ref-ID': '123',
    //     },
    //   },
    // })
    // const data = await fetch('https://github.com/nigeljanssens220')
    console.log('RESULT', result)

    // return { success: true }
  } catch (error) {
    console.error('ACTION FAILED YO MAMA', error)
    // return { success: false, error: 'fucker' }
  }

  return Response.json('WE HERE')
}
