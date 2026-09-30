// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',

  // Every page is a few KB of static HTML, so prefetching on hover makes
  // navigation feel instant. Nav links opt up to 'viewport' in Layout.astro.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});