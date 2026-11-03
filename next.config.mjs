import createMDX from "@next/mdx";

// GitHub Pages serves project sites under /<repo-name>. The deploy workflow sets
// NEXT_PUBLIC_BASE_PATH; locally it is empty so `npm run dev` works at "/".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const withMDX = createMDX({
  options: { remarkPlugins: ["remark-gfm"] },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
