// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGES_DOMAIN],
  },
};

module.exports = nextConfig;
