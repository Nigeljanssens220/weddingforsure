import { cn } from '@/lib/utils'
import Image from 'next/image'
import champagne from '../../../public/icons/Champagne.svg'
import diner from '../../../public/icons/Diner.svg'
import discobal from '../../../public/icons/Discobal.svg'
import moon from '../../../public/icons/Moon.svg'
import ringen from '../../../public/icons/Ringen.svg'
import ontvangst from '../../../public/icons/Rout.svg'

export const TimelineIcon = ({
  name,
  width,
  alignRight,
  alignLeft,
}: {
  name: 'ontvangst' | 'ceremonie' | 'borrel' | 'diner' | 'party' | 'goodnight'
  width?: number
  alignRight?: boolean
  alignLeft?: boolean
}) => {
  return (
    <Image
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      src={getIcon(name)}
      alt={name}
      width={width}
      className={cn('object-cover', {
        'justify-self-end': alignRight,
        'justify-self-start': alignLeft,
      })}
    />
  )
}

const getIcon = (name: string) => {
  switch (name) {
    case 'ontvangst':
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return ontvangst
    case 'ceremonie':
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return ringen
    case 'borrel':
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return champagne
    case 'diner':
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return diner
    case 'party':
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return discobal
    case 'goodnight':
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return moon
  }
}
