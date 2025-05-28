import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
