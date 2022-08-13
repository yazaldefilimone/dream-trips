/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const isProd = process.env.NODE === 'production';
const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    disable: isProd
  },
  images: {
    domains: ['media.graphassets.com']
  }
});

module.exports = nextConfig;
