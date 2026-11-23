import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  site: 'https://dayanidhinaidu.com',
  base: '/',
  trailingSlash: "always",
  vite: { plugins: [tailwindcss()] }
});
