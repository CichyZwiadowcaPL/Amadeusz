# Vector Aerospace

A small multi-page website for an aerospace founding team, built with [Astro](https://astro.build).

## Pages

- `/` — Home
- `/about` — About the team
- `/projects` — Projects
- `/contact` — Contact

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

## Customizing

- Brand name, colors, and copy: `src/components/Nav.astro`, `src/components/Footer.astro`, `src/styles/global.css`
- Team members: `src/pages/about.astro`
- Projects: `src/pages/projects.astro`
- Contact email: `src/pages/contact.astro`
