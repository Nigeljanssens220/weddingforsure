import { env } from '@/env.mjs'
import cloudinary from '@/lib/cloudinary'
import { unstable_cache } from 'next/cache'

export const getCachedImages = () =>
  unstable_cache(
    async () =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      await cloudinary.v2.search
        .expression(`folder:${env.CLOUDINARY_FOLDER}`)
        .sort_by('public_id', 'desc')
        .max_results(400)
        .execute(),
    ['images'],
    { revalidate: 60 * 60 * 60 }, // 60 days
  )
