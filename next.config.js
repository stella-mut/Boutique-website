/** @type {import('next').NextConfig} */
module.exports = nextConfig;
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' },
    { protocol: 'https', hostname: 'picsum.photos' },
  ],
}
