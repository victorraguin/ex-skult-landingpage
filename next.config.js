/* eslint-disable unicorn/prefer-module */
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    // API_BASE_URL: 'https://api.skult.gg/api/v1',
    CDN_BASE_URL: 'https://cdn.skult.gg',
    PREVIEW_BASE_URL: 'https://preview.skult.gg/preview',
    GOOGLE_MAP_API_KEY: 'AIzaSyCfG4zP41Nu0vAf6xRZnRXvyG1bfMpusx0',
    GOOGLE_RECAPTCHA_KEY: '6LfcYuMeAAAAANWQzlGxXm5GJjDRG9cQwlJeTy3k',
    ACCESS_KEY: 'AKIAR4DVKSXIOIV3RPHQ',
    SECRET_KEY: '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',
    REGION: 'us-east-1',
    BUCKET_NAME: 'nonfungible-preview',
  },
  images: {
    domains: ['cdn.skult.gg'],
  },
};
