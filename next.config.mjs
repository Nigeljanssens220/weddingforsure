/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// await import('./src/env.mjs')

/** @type {import("next").NextConfig} */
const config = {
  poweredByHeader: false,
  images: {
    domains: ['res.cloudinary.com'],
    // formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: 'dmdewqwqf',
      },
    ],
  },
  experimental: {
    ppr: true
  }
}

export default config
