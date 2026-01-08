import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable SCSS support (automatic with sass package)
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  // Optimize images
  images: {
    remotePatterns: [],
  },
  // Experimental features
  experimental: {
    // Enable server actions
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
