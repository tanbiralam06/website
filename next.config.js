/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeholdercdn.io', 'randomuser.me'],

  },
  experimental: {
    mdxRs: true,
  },
};

module.exports = nextConfig; 