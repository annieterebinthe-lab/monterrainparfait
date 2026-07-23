import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://monterrainparfait.fr",
  integrations: [sitemap()],

  vite: {
    plugins: [tailwind()],
  },

  adapter: cloudflare(),
});