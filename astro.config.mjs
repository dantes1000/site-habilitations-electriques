// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  server: {
    host: true
  },
  vite: {
    server: {
      allowedHosts: ['sclerotomic-unwidowed-corey.ngrok-free.dev']
    }
  }
});