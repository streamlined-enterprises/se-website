import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://streamline.it.com',
  build: {
    format: 'directory'
  },
  vite: {
    // Explicitly declare PostCSS so Tailwind v3 runs in production builds.
    // postcss.config.mjs (tailwindcss + autoprefixer) lives at project root.
    css: {
      postcss: './postcss.config.mjs'
    }
  }
});
