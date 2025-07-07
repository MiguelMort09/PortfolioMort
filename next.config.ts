import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    compress: true,
    productionBrowserSourceMaps: false,
    output: "standalone",
};

export default nextConfig;
