# Instructions for Claude

## Publishing changes (bundle to save Netlify credits)
- Netlify's free plan has 300 credits/month and **every production deploy of `main`
  costs 15 credits**. So changes are **bundled**:
  - Commit every change to the **`develop`** branch (create it from `main` if it doesn't
    exist) and push `develop`. Do **not** push to `main` yet.
  - Only when the owner says "publish" / "publiceer" / "zet het live": fast-forward `main`
    to `develop` in **one** push. That costs one deploy for all pending changes.
  - Tell the owner how many changes are waiting to be published.
- Commits that don't change the website (e.g. this file, README) may go straight to
  `main` with `[skip netlify]` in the commit message so Netlify doesn't build.
- Do not open pull requests.
- Before pushing, run `npm run build` and make sure it passes.
- Netlify deploys `main` automatically (site: adg-aerospace.com / adgaerospace.netlify.app).
- Plan: the owner intends to move to another host (e.g. Cloudflare Pages or GitHub
  Pages) over time. The contact form currently relies on Netlify Forms.

## Communication
- The owner may write in Dutch or English; reply in the language they use.
- Keep explanations simple and non-technical.

## Where content lives
- `src/data/site.ts` — company name, tagline, email, location, founding year
- `src/data/research.ts` — R&D programmes (stage index: 0 Concept … 4 Complete) and progress log
- `src/data/services.ts` — consultancy services, products, process steps
- `src/data/history.ts` — company history timeline on the About page
- `src/pages/about.astro` — team members
- `src/styles/global.css` — colours
- `public/logo.png`, `public/favicon.png`, `public/apple-touch-icon.png` — logo and icons
