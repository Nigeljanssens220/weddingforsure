'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {
  label: string
  href: string
}

const mobileLinkAnimation = {
  initial: {
    y: '30vh',
    transition: {
      duration: 2.5,
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 2.7,
    },
  },
}

export default function MobileNavLink({ href, label }: Props) {
  return (
    <div className="overflow-hidden">
      <motion.div
        variants={mobileLinkAnimation}
        initial="initial"
        animate="open"
        className="text-5xl uppercase text-primary"
      >
        <Link href={href}>{label}</Link>
      </motion.div>
    </div>
  )
}
