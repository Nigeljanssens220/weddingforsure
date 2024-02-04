'use client'

import { useSmoothScroll } from '@/hooks/smooth'

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useSmoothScroll()

  return children
}
