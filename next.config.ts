import type { NextConfig } from "next";

const pagesExport = process.env.PAGES_EXPORT === "1";
const config: NextConfig = {
  poweredByHeader: false,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  ...(pagesExport && {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default config;
