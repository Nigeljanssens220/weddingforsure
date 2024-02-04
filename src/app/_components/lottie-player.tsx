'use client'

import { useLottie } from 'lottie-react'
import celebrations from '../../../public/celebration.json'

export const LottiePlayer = () => {
  const { View, setSpeed } = useLottie({
    loop: true,
    autoplay: true,
    animationData: celebrations,
    initialSegment: [60, 180],
  })

  setSpeed(0.5)

  return <div className="absolute -z-10 max-h-dvh overflow-hidden">{View}</div>
}
