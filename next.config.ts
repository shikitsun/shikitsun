import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: process.env.BASE_URL,
  output: "export",
};

export default nextConfig;
