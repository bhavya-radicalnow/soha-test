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

  // ✅ moved outside experimental
  outputFileTracingRoot: "/Users/radicalnow/Downloads/Dr.Chaitra",

  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;