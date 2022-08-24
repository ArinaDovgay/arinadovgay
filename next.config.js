/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "", 
  },
  swcMinify: true,
  basePath: "/arinadovgay",
  assetPrefix: "/bulshit",
}

module.exports = nextConfig
