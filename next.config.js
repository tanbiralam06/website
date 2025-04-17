/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeholdercdn.io'],
  },
  experimental: {
    mdxRs: true,
  },
};

module.exports = nextConfig; 