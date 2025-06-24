/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Optimize for Vercel deployment
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // Enable static exports if needed
  output: 'standalone',
  // Optimize performance
  swcMinify: true,
  // Configure redirects and rewrites if needed
  async redirects() {
    return [];
  },
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
