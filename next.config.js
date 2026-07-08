/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    domains: ["cdns.iconmonstr.com"],
  },
};

module.exports = nextConfig;
