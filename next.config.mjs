/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

export default nextConfig
