/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
      },
    ],
  },
};

import nextPWA from 'next-pwa';

const withPWA = nextPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // disable in dev mode
  register: true,
  skipWaiting: true,
});

export default withPWA({
  ...nextConfig,
  reactStrictMode: true,
});

// export default nextConfig;