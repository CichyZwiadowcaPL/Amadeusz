import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adg-aerospace.com',
  redirects: {
    '/projects': '/research',
  },
});
