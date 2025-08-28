// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://murraygreig78.github.io',
  base: process.env.ASTRO_BASE_PATH || '/skapari',
  integrations: [svelte()]
});
