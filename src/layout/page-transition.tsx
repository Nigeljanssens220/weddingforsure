'use client'

import { motion } from 'framer-motion'

export const PageTransition = ({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) => (
  <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: 'tween',
        duration: 0.2,
        delay: 0.6,
      }}
    >
      {children}
    </motion.div>
    {modal}
  </>
)
