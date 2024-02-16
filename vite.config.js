import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { remarkCodeHike } from "@code-hike/mdx";

export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup");
  return {
    // eslint-disable-next-line no-undef
    base: process.env.NODE_ENV === "production" ? "/validation-slides" : "/",
    optimizeDeps: {
      include: ["react/jsx-runtime"],
    },
    plugins: [
      react(),
      mdx.default({
        remarkPlugins: [
          [remarkCodeHike, { theme: "light-plus", lineNumbers: true }],
        ],
      }),
    ],
  };
});
