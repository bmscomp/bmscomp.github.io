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
      // Quiet frames that sit on the paper: hairline border, no drop shadow, serif UI text.
      styleOverrides: {
        borderRadius: '0.35rem',
        borderColor: 'var(--rule)',
        codeFontSize: '0.82rem',
        uiFontFamily: 'var(--font-serif)',
        frames: { frameBoxShadowCssValue: 'none' },
      },
    }),
    sitemap(),
  ],
  markdown: {
    processor: satteri({
      features: { math: true, smartPunctuation: true },
      mdastPlugins: [katexPlugin],
    }),
  },
  vite: { plugins: [tailwindcss()] },
});
