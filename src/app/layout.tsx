import '@/styles/globals.css'

import { siteConfig } from '@/config/site'
import { TRPCReactProvider } from '@/trpc/react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import localFont from 'next/font/local'
import { headers } from 'next/headers'
import { Toaster } from './_components/ui/sonner'

export const metadata = {
  ...siteConfig,
}

const SLOOP = localFont({
  src: './SloopScriptMediumOne.otf',
  display: 'swap',
  variable: '--font-sloop',
})

const FUTURA = localFont({
  src: './FuturaCyrillicMedium.ttf',
  display: 'swap',
  variable: '--font-futura',
})

const MR_EAVES = localFont({
  src: './MrEavesOT.otf',
  display: 'swap',
  variable: '--font-eaves',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${SLOOP.variable} ${FUTURA.className} ${MR_EAVES.variable}`}>
      <body>
        <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  )
}
