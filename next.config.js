/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
    // Uncomment to enable Edge Runtime for server rendering
    // https://nextjs.org/docs/api-reference/edge-runtime
    /* experimental: {
      runtime: "experimental-edge",
  }, */
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: false,
    },
};

module.exports = withBundleAnalyzer(nextConfig);
