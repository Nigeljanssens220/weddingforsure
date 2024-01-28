import '@/styles/globals.css'

import { siteConfig } from '@/config/site'
import { TRPCReactProvider } from '@/trpc/react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistSans } from 'geist/font/sans'
import { Cormorant_Garamond } from 'next/font/google'
import { headers } from 'next/headers'
export const metadata = {
  ...siteConfig,
}

import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
const SLIGHT = localFont({
  src: './Slight-Regular.ttf',
  display: 'swap',
  variable: '--font-slight',
})

const GARAMOND = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700'],
  variable: '--font-garamond',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${SLIGHT.variable} ${GARAMOND.className} ${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
