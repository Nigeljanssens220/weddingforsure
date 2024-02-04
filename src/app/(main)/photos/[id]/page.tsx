import Image from 'next/image'

type Params = {
  params: { id: string }
}

const PhotoPage = ({ params: { id } }: Params) => {
  return (
    <Image
      fill
      quality={100}
      src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_1920,f_auto,q_auto/v1705758405/Michelle.Cole.Wedding-0248_gzyi2d.jpg"
      alt="nigel-and-shinta-g"
      className="h-dvh w-screen object-cover object-top"
    />
  )
}

export default PhotoPage
