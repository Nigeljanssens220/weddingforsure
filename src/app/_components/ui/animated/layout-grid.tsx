'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'

type Card = {
  id: number
  content: JSX.Element | React.ReactNode | string
  className: string
  thumbnail: string
}

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null)
  const [lastSelected, setLastSelected] = useState<Card | null>(null)

  const handleClick = (card: Card) => {
    setLastSelected(selected)
    setSelected(card)
  }

  const handleOutsideClick = async () => {
    setLastSelected(selected)
    setSelected(null)

    await new Promise(() => setTimeout(() => setLastSelected(null), 300))
  }

  return (
    <div className="mx-auto grid h-svh w-full max-w-7xl grid-cols-1 gap-4 p-10 md:grid-cols-3">
      {cards.map((card, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <div key={i} className={cn(card.className, '')}>
          <AnimatePresence mode="wait">
            <motion.div
              onClick={() => handleClick(card)}
              className={cn(
                card.className,
                'relative overflow-hidden',
                selected?.id === card.id
                  ? 'absolute z-50 m-auto flex h-[60svh] max-w-[295px] cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg md:w-1/3 md:max-w-none'
                  : lastSelected?.id === card.id
                    ? 'z-40 h-full w-full rounded-xl bg-white'
                    : 'h-full w-full rounded-xl bg-white',
              )}
              layout
            >
              {selected?.id === card.id && <SelectedCard selected={selected} />}
              <BlurImage card={card} />
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          'absolute left-0 top-0 z-10 h-full w-full bg-black opacity-0',
          selected?.id ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        animate={{ opacity: selected?.id ? 0.5 : 0 }}
      />
    </div>
  )
}

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <Image
      fill
      src={card.thumbnail}
      onLoad={() => setLoaded(true)}
      className={cn(
        'absolute inset-0 h-full w-full object-cover object-top transition duration-200',
        loaded ? 'blur-none' : 'blur-md',
      )}
      alt="thumbnail"
    />
  )
}

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="relative z-[60] flex h-full min-w-[300px] flex-col justify-end rounded-lg bg-transparent shadow-2xl">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 z-10 h-full w-full bg-black opacity-60"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="relative z-[70] px-8 pb-4"
      >
        {selected?.content}
      </motion.div>
    </div>
  )
}

// export function LayoutGridDemo() {
//   return (
//     <div className="h-svh w-full">
//       <LayoutGrid cards={cards} />
//     </div>
//   )
// }

// const SkeletonOne = () => {
//   return (
//     <Typography as="p" variant="xl/semibold" className="text-balance text-background">
//       House in the woods House in the woods House in the woods
//     </Typography>
//   )
// }

// const SkeletonTwo = () => {
//   return (
//     <div>
//       <p className="text-4xl font-bold text-white">House above the clouds</p>
//       <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
//         Perched high above the world, this house offers breathtaking views and a unique living experience. It&apos;s a
//         place where the sky meets home, and tranquility is a way of life.
//       </p>
//     </div>
//   )
// }
// const SkeletonThree = () => {
//   return (
//     <div>
//       <p className="text-4xl font-bold text-white">Greens all over</p>
//       <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
//         A house surrounded by greenery and nature&apos;s beauty. It&apos;s the perfect place to relax, unwind, and enjoy
//         life.
//       </p>
//     </div>
//   )
// }
// const SkeletonFour = () => {
//   return (
//     <div>
//       <p className="text-4xl font-bold text-white">Rivers are serene</p>
//       <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
//         A house by the river is a place of peace and tranquility. It&apos;s the perfect place to relax, unwind, and
//         enjoy life.
//       </p>
//     </div>
//   )
// }

// const cards = [
//   {
//     id: 1,
//     content: <SkeletonOne />,
//     className: 'md:col-span-2',
//     thumbnail:
//       'https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 2,
//     content: <SkeletonTwo />,
//     className: 'col-span-1',
//     thumbnail:
//       'https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 3,
//     content: <SkeletonThree />,
//     className: 'col-span-1',
//     thumbnail:
//       'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 4,
//     content: <SkeletonFour />,
//     className: 'md:col-span-2',
//     thumbnail:
//       'https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
// ]
