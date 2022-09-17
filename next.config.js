const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...nextTranslate(),
};

module.exports = nextConfig;
