# Instructions for Claude

## Publishing changes
- The owner wants every website change committed and pushed **directly to `main`**.
  Do not open pull requests and do not wait for a merge.
- Netlify deploys `main` automatically (site: adgaerospace.netlify.app), so a push to
  `main` goes live within about a minute.
- Before pushing, run `npm run build` and make sure it passes.

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
