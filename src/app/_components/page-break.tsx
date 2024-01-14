import Image from 'next/image'
import rect15 from '../../../public/images/rectangle-15.png'

export function PageBreak() {
  return (
    <div className="flex h-full max-h-40 w-full px-0">
      <Image src={rect15} sizes="33vw" quality={100} alt="kissie" className="object-cover" />
      <Image src={rect15} quality={100} alt="kissie" className="object-cover" />
      <Image src={rect15} quality={100} alt="kissie" className="object-cover" />
    </div>
  )
}
