import '@/styles/globals.css'

import { siteConfig } from '@/config/site'
import { TRPCReactProvider } from '@/trpc/react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistSans } from 'geist/font/sans'
import localFont from 'next/font/local'
import { headers } from 'next/headers'
import { Toaster } from './_components/ui/sonner'

export const metadata = {
  ...siteConfig,
}

// Font files can be colocated inside of `app`
const SLIGHT = localFont({
  src: './Slight-Regular.ttf',
  display: 'swap',
  variable: '--font-slight',
})

const SLOOP = localFont({
  src: './SloopScriptMediumOne.otf',
  display: 'swap',
  variable: '--font-sloop',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${SLIGHT.variable} ${GeistSans.className} ${SLOOP.variable}`}>
      <body>
        <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  )
}
