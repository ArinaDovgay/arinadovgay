/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "", 
  },
  swcMinify: true,
  basePath: "/",
  assetPrefix: "/arinadovgay",
}

module.exports = nextConfig
