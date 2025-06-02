import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
        protocol: 'https',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
