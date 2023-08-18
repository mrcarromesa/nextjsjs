/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate-plugin')

const nextConfig = {
  experimental: {
    serverActions: true,
  },
}

module.exports = nextTranslate(nextConfig)
