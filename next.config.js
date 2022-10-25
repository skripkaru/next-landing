/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    BASE_PATH: process.env.BASE_PATH,
    PUBLIC_URL: process.env.PUBLIC_URL
  },
  basePath: isProd ? process.env.BASE_PATH : '',
  assetPrefix: isProd ? process.env.PUBLIC_URL : '',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
