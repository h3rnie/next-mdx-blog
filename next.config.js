/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
    devIndicators: {
        buildActivity: true,
        buildActivityPosition: "bottom-left",
    },
    env: {},
    reactStrictMode: true,
    // Uncomment to enable Edge Runtime for server rendering
    // https://nextjs.org/docs/api-reference/edge-runtime
    /* experimental: {
        runtime: "experimental-edge",
    }; */
};

module.exports = withBundleAnalyzer(nextConfig);
