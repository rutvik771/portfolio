/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const nextConfigPWA = withPWA({
  reactStrictMode: false,
  pwa: {
    dest: 'public',
  }
});
const nextConfig = bundleAnalyzer(nextConfigPWA);

module.exports = nextConfig
module.exports = {
  module:{
    rules :[
       {
         test: /\.scss$/,
         use: [
           'sass-loader'
         ],
       },
    ],
  },
};
