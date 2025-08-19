import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '', // اگه روی پورت دیگه‌ای هستی اینو تغییر بده
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  sassOptions: {
    additionalData: `@use "styles/variables" as *;`,
    includePaths: ['./src'],
  },
};

export default nextConfig;
