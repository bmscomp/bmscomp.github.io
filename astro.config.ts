import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { satteri } from '@astrojs/markdown-satteri';
import expressiveCode from 'astro-expressive-code';
import { defineConfig } from 'astro/config';
import { katexPlugin } from './src/lib/katex';

export default defineConfig({
  site: 'https://bmscomp.github.io',
  integrations: [
    expressiveCode({
      themes: ['github-light', 'github-dark'],
      styleOverrides: { borderRadius: '0.5rem', codeFontSize: '0.875rem' },
    }),
    sitemap(),
  ],
  markdown: {
    processor: satteri({
      features: { math: true },
      mdastPlugins: [katexPlugin],
    }),
  },
  vite: { plugins: [tailwindcss()] },
});
