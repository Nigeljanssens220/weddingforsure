import Image from 'next/image'

export const ParallaxHero = () => {
  //   const { scrollYProgress } = useScroll()
  //   const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    // <motion.div style={{ y }} className="absolute -z-20 max-h-svh w-screen">
    <Image
      fill
      priority
      loading="eager"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_1920,f_auto,q_auto/v1705758405/Michelle.Cole.Wedding-0248_gzyi2d.jpg"
      alt="nigel-and-shinta-g"
      className="absolute -z-20 max-h-svh w-screen object-cover object-top"
    />
    // </motion.div>
  )
}
