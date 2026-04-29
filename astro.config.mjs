import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://streamline.it.com',
  build: {
    format: 'directory'
  }
});
