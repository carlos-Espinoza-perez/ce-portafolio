import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      watch: {
        usePolling: true,
        persistent: true,
      },
      hmr: {
        overlay: true,
        clientPort: 4321,
      },
    },
  },
  integrations: [tailwind()],
});