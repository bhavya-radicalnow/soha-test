/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  experimental: {
    outputFileTracingRoot: './', 
  },
  /* config options here */
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
