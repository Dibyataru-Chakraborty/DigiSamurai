/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
      },
    ],
    domains: ['images.ctfassets.net'],
    unoptimized: true
  },
  output: 'export',
};

export default nextConfig;