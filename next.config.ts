import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typedRoutes: true,
  images: {
    dangerouslyAllowSVG: true,
    formats: ['image/webp']
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       fs: false
  //     }
  //   }
  //   return config
  // }
};

export default nextConfig;
