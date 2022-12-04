/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{ appDir: true },
  reactStrictMode: false,
  env: {
    customKey: 'my-value',
    // Now you can access process.env.customKey in your code. For example:
  },
  basePath: '/',
  // change if in subpath, for linking the basePath will be automatically applied (next/link and next/router)
  // For images you need to add the basePath manually
}

module.exports = nextConfig
