import Image from 'next/image'

type Params = {
  params: { id: string }
}

const PhotoPage = ({ params: { id } }: Params) => {
  return (
    <Image
      fill
      quality={100}
      src={`https://res.cloudinary.com/dmdewqwqf/image/upload/f_auto,q_auto,w_auto/v1707564556/wedding/${id}.png`}
      alt="nigel-and-shinta-g"
      className="h-dvh w-screen object-cover object-top"
    />
  )
}

export default PhotoPage
