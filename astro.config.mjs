import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const cloudflare = process.env.CF_PAGES === "1";

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL || (cloudflare
    ? process.env.CF_PAGES_URL
    : "https://dayanidhi1.github.io"),
  base: process.env.SITE_BASE ?? (cloudflare ? "/" : "/dayanidhi-portfolio"),
  trailingSlash: "always",
  vite: { plugins: [tailwindcss()] }
});
