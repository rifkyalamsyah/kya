// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://kya.pages.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
  image: {
    responsiveStyles: true,
    layout: 'constrained',
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Outfit',
        cssVariable: '--font-outfit',
        weights: [
          '100',
          '200',
          '300',
          '400',
          '500',
          '600',
          '700',
          '800',
          '900',
        ],
        styles: ['normal'],
      },
    ],
  },
});
