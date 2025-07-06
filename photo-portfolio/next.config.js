module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-source.com', 'via.placeholder.com', 'picsum.photos'], // Replace with your image source domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};