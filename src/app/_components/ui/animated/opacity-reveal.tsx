'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function OpacityReveal({ children, delay, className }: Props) {
  const ref = useRef(null)
  const isInview = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInview) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      controls.start('visible')
    }
  }, [controls, isInview])

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{
        type: 'tween',
        duration: 0.75,
        delay: delay ? delay : 0.2,
      }}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  )
}
