// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://murraygreig.github.io',
  base: process.env.ASTRO_BASE_PATH || '',
  integrations: [svelte()]
});