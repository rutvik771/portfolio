/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const nextConfigPWA = withPWA({
  reactStrictMode: false,
  pwa: {
    dest: 'public',
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:"
          },
        ],
      },
    ]
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
