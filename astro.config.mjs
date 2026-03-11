import { defineConfig } from 'astro/config'; 
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://desmond-achusi.vercel.app', // your live Vercel URL
  compressHTML: true,
  integrations: [sitemap()],
  build: {
    outDir: 'dist',   // Vercel will deploy from here
  },
  base: '/',           // ensures links work correctly
});