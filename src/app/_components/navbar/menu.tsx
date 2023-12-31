'use client'

import { routes } from '@/lib/ routes'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { MenuIcon, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import nigelAndShintaG from '../../../../public/images/cocktail.svg'
import Typography from '../ui/typography'

const menuAnimation = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const mobileLinkAnimation = {
  initial: {
    y: '30vh',
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
}

const linksAnimation = {
  initial: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.06,
      staggerDirection: 1,
    },
  },
}

const footerAnimation = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  open: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.4,
    },
  },
}

export function Menu({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={cn('relative self-end bg-pink-500', className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 z-50 h-screen w-full origin-top bg-[#C6C4A4] p-4 text-[#5D5C4E]"
          >
            <div className="relative flex h-full flex-col justify-center">
              <header className="fixed left-0 top-0 flex w-full justify-end p-4">
                <button type="button" className="px-4 py-2" onClick={() => setOpen(false)}>
                  <X className="h-6 w-6 text-[#5D5C4E]" />
                </button>
              </header>
              <div className="flex flex-col items-center gap-10">
                <motion.div variants={footerAnimation} initial="initial" animate="open" exit="initial">
                  <Image
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={nigelAndShintaG as string}
                    alt="nigel-and-shinta-g"
                  />
                </motion.div>

                <nav>
                  <motion.ul
                    variants={linksAnimation}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col items-center justify-center gap-4"
                  >
                    {routes.map(({ href, label }, idx) => (
                      <li key={`item-${idx}`} className="overflow-hidden">
                        <motion.div
                          variants={mobileLinkAnimation}
                          className="text-lg uppercase text-[#5D5C4E] sm:text-xl lg:text-2xl"
                        >
                          <Link href={href}>{label}</Link>
                        </motion.div>
                      </li>
                    ))}
                  </motion.ul>
                </nav>
              </div>
              <motion.footer
                variants={footerAnimation}
                initial="initial"
                animate="open"
                exit="initial"
                className="fixed bottom-0 left-0 flex w-full justify-center gap-6 p-4 text-center text-sm uppercase"
              >
                <Typography as="span" className="text-xs" variant="xs/regular">
                  Buitenplaats Vaeshartelt
                </Typography>
                <Typography as="span" className="text-xs" variant="xs/regular">
                  •
                </Typography>
                <Typography as="span" className="text-xs" variant="xs/regular">
                  03-08-2024
                </Typography>
              </motion.footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button type="button" className="px-4 py-2" onClick={() => setOpen(true)}>
        <MenuIcon className="h-6 w-6 text-[#5D5C4E]" />
      </button>
    </div>
  )
}