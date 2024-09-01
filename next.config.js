/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' }
    };
  }
}

module.exports = nextConfig