# Portfolio

This static Astro and Tailwind site needs Node.js 22.12 or later.

## Update the site

1. Edit `src/data.ts` to update the profile, consulting services, work, blog entries, experience, or contact links.
2. Replace `public/photo.jpg` if you want to use a portrait.
3. Run `npm ci` and `npm run build` to check the changes. Use `npm run dev` for local editing.
4. Commit your changes and push to `main` to trigger GitHub Pages deployment.

Each blog entry needs a unique URL-friendly slug. Astro builds a page for each entry using its title, date, and excerpt.

## GitHub Pages

In the repository, open **Settings → Pages** and select **GitHub Actions** as the source. The workflow builds and deploys on pushes to `main`. You can also run it manually from the **Actions** tab.

The project path in `astro.config.mjs` keeps routes and assets working under the repository's Pages URL. If you change hosts or add a custom domain, set `SITE_URL` to the origin and `SITE_BASE` to the path prefix, or `/` for a root deployment.

## Cloudflare Pages

Connect the GitHub repository in Cloudflare Pages and select `main` as the production branch. Use `npm run build` as the build command and `dist` as the output directory. Set `NODE_VERSION` to `22` and `SITE_URL` to your production origin so canonical links also point to the production site on preview builds. The build uses root-relative paths on Cloudflare Pages.
