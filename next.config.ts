import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typedRoutes: true,
  images: {
    dangerouslyAllowSVG: true,
    formats: ['image/webp']
  }
};

export default nextConfig;
