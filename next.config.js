/* eslint-disable unicorn/prefer-module */
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.skult.gg'],
    
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
