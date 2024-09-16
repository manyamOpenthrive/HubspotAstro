import { defineConfig } from 'astro/config';
import sanity from 'astro-sanity';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: "u2l3n3wg",
    dataset: 'production',
    apiVersion: 'v2022-03-07',
    useCdn: true,
    studioBasePath: './studio',
  }),
  tailwind(),]
});