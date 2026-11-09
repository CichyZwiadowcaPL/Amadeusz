import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  redirects: {
    '/projects': '/research',
  },
});
