/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for development and production
  swcMinify: true,
  compress: true,
  // Ensure proper asset handling
  assetPrefix: '',
  // Enable static optimization
  optimizeFonts: true,
  poweredByHeader: false,
  // Configure output based on environment
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    images: {
      unoptimized: true,
    },
  } : {
    // Development configuration
    reactStrictMode: true,
    images: {
      domains: ['localhost'],
    },
  }),
}

module.exports = nextConfig 