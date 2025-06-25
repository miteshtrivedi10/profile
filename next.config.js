/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for development and production
  swcMinify: true,
  compress: true,
  // Ensure proper asset handling
  assetPrefix: '/',
  // Enable static optimization
  optimizeFonts: true,
  poweredByHeader: false,
  // Configure output based on environment
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  // Development configuration
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  basePath: '',
}

module.exports = nextConfig 