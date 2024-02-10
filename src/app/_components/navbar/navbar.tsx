'use client'

import { routes } from '@/lib/routes'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import Typography from '../ui/typography'

export default function Navbar() {
  const [hidden, setHidden] = useState(false)

  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      className="fixed top-0 z-10 flex w-screen justify-end px-2 py-6 md:justify-start"
    >
      <nav className="hidden md:block">
        <ul className="flex items-center gap-4">
          {routes.map(({ href, label }) => (
            <li key={label}>
              <Link href={href}>
                <Typography as="span" className="p-2">
                  {label}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
