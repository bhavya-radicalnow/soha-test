/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingRoot: './', 
  },
  /* config options here */
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
