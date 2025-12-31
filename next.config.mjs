/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  reactCompiler: {
    concurrentFeatures: true,
    serverComponents: true,
  },
};

export default nextConfig;
