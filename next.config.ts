import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'xihsvy-nc.myshopify.com', 'i.imgur.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
