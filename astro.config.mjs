import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://christopherglood.vercel.app',
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()],
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
    },
  },
});