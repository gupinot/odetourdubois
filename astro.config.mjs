// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://gupinot.github.io',
  base: process.env.CI ? '/odetourdubois' : '/',
});
