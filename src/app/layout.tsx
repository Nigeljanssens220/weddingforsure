import '@/styles/globals.css'

import { Analytics } from '@vercel/analytics/react'
import { GeistSans } from 'geist/font/sans'
import { headers } from 'next/headers'

import { TRPCReactProvider } from '@/trpc/react'

export const metadata = {
  title: 'Create T3 App',
  description: 'Generated by create-t3-app',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
        <Analytics />
      </body>
    </html>
  )
}
