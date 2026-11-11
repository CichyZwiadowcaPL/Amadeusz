# Aerospace Development Group

Website for the ADG engineering bureau — R&D progress, engineering consultancy and products — built with [Astro](https://astro.build).

## Pages

- `/` — Home
- `/research` — R&D progress (programme stages + progress log)
- `/services` — Engineering consultancy services and products
- `/about` — About the bureau and team
- `/contact` — Contact / enquiry form (Netlify Forms)

## Development

```sh
npm install
npm run dev
```

The site will be available at `http://localhost:4321`.

## Build

```sh
npm run build
npm run preview
```

## Updating content

Most content lives in plain data files — no page code needs to change:

- `src/data/site.ts` — company name, tagline, email, location
- `src/data/research.ts` — R&D programmes (and their stage) and the progress log.
  Add a new entry to the top of `updates` whenever something happens.
- `src/data/services.ts` — consultancy services, products and the "how it works" steps
- `src/pages/about.astro` — team members
- Colours: `src/styles/global.css`
- Logo and icons: `public/logo.png`, `public/favicon.png`, `public/apple-touch-icon.png`
