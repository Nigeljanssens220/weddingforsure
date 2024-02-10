'use client'

import { Dialog, DialogContent } from '@/app/_components/ui/dialog'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type Params = {
  params: { id: string }
}

const PhotoInterceptor = ({ params: { id } }: Params) => {
  const router = useRouter()

  return (
    <Dialog defaultOpen onOpenChange={(open) => open === false && router.back()}>
      <DialogContent className="overflow-hidden">
        <Image
          quality={100}
          width={1920}
          height={1080}
          src={`https://res.cloudinary.com/dmdewqwqf/image/upload/f_auto,q_auto,w_auto/v1707564556/wedding/${id}.png`}
          alt="nigel-and-shinta-g"
          className="h-dvh w-screen object-cover object-top"
        />
      </DialogContent>
    </Dialog>
  )
}

export default PhotoInterceptor
