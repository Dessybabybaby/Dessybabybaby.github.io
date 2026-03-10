import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  //
  site: 'https://Dessybabybaby.github.io',
  compressHTML: true,
  integrations: [sitemap()]
});