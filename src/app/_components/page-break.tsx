import Image from 'next/image'

export function PageBreakMobile({ ids }: { ids: string[] }) {
  return (
    <div className="flex h-full max-h-40 w-full px-0 md:hidden">
      <Image
        width={200}
        height={130}
        src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_200,f_auto,q_auto/v1707551624/wedding/xa8lqif4hmqhqzmzsfkd.jpg"
        alt="staring-lovely-couple"
        className="object-cover object-bottom"
      />
      <Image
        width={200}
        height={130}
        src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_200,f_auto,q_auto/v1707551624/wedding/qz3t7hdi1s8hrl5oh2zy.jpg"
        alt="staring-lovely-couple"
        className="object-cover object-top"
      />
      <Image
        width={200}
        height={130}
        src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_200,f_auto,q_auto/v1707551624/wedding/wclpxo5wpdhpfcymijj7.jpg"
        alt="staring-lovely-couple"
        className="object-cover object-bottom"
      />
    </div>
  )
}

;['xa8lqif4hmqhqzmzsfkd', 'qz3t7hdi1s8hrl5oh2zy', 'wclpxo5wpdhpfcymijj7']
