/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for development and production
  swcMinify: true,
  compress: true,
  // Configure static export
  output: 'export',
  distDir: 'dist',
  // Ensure proper asset handling
  assetPrefix: '',
  // Enable static optimization
  optimizeFonts: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  // Development configuration
  reactStrictMode: true,
  basePath: '',
  // Disable server-specific features
  trailingSlash: true,
}

module.exports = nextConfig 