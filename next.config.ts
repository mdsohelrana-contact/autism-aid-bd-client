import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Fast minification
  images: {
    domains: [
      "images.unsplash.com", // Allow Unsplash images
      "via.placeholder.com", // Optional fallback placeholder images
    ],
    formats: ["image/avif", "image/webp"], // Modern formats for performance
  },
  eslint: {
    ignoreDuringBuilds: true, // Prevent build fail on linting errors
  },
  typescript: {
    ignoreBuildErrors: false, // Prevent production build if type errors exist
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all routes
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
  compiler: {
    styledComponents: true, // if using styled-components
  },
};

export default nextConfig;
