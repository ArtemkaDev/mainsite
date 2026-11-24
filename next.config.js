const createNextIntlPlugin = require("next-intl/plugin");
const basePath = process.env.PAGES_BASE_PATH || "";

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: { root: __dirname },
};

module.exports = createNextIntlPlugin("./src/i18n.ts")(nextConfig);
