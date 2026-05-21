import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
