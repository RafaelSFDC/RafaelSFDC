import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';

const srcDir = fileURLToPath(new URL('./src', import.meta.url));

// https://astro.build/config
// Portfolio Rafael SFDC — Site 100% Estático (SSG)
export default defineConfig({
  site: process.env.PUBLIC_APP_URL || 'https://rafaelsfcarvalho.com',
  output: 'static',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': srcDir,
      },
    },
  },
});
