import Image from 'next/image'

export const ParallaxHero = () => {
  //   const { scrollYProgress } = useScroll()
  //   const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    // <motion.div style={{ y }} className="absolute -z-20 max-h-svh w-screen">
    <Image
      fill
      quality={100}
      priority
      loading="eager"
      src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_1920,f_auto,q_100/v1707551624/wedding/pmvcmrvzxknaypvjvl7y.jpg"
      // src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_1920,f_auto,q_auto/v1705758405/Michelle.Cole.Wedding-0248_gzyi2d.jpg"
      alt="nigel-and-shinta-g"
      className="absolute -z-20 max-h-svh w-screen object-cover object-bottom"
    />
    // </motion.div>
  )
}
