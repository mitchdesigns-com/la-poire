
const withNextIntl = require('next-intl/plugin')('./i18n.ts');

module.exports = withNextIntl({
  trailingSlash: true,
  experimental: {
    esmExternals: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_IMAGES_DOMAIN,
      },
    ],
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/:all*(svg|jpg|png|webp)",
  //       locale: false,
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=9999999999, stale-while-revalidate",
  //         }
  //       ],
  //     },
  //   ];
  // },
});
