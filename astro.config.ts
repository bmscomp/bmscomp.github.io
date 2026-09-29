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
      // W3.2: every line visible. Long lines wrap with a hanging indent; copying returns the original.
      // Shell output keeps its own indentation instead of the code's.
      defaultProps: {
        wrap: true,
        preserveIndent: true,
        hangingIndent: 2,
        overridesByLang: { 'bash,sh,shell,zsh': { preserveIndent: false } },
      },
      // Quiet frames that sit on the paper: hairline border, no drop shadow.
      // W3.3: one monospace face for inline code, blocks and frame titles.
      styleOverrides: {
        borderRadius: '0.35rem',
        borderColor: 'var(--rule)',
        codeFontFamily: 'var(--font-mono)',
        codeFontSize: 'var(--code-size)',
        uiFontFamily: 'var(--font-mono)',
        uiFontSize: '0.85rem',
        frames: { frameBoxShadowCssValue: 'none' },
      },
    }),
    // Test fixtures (/dev/) are built only with FIXTURES=1 and never belong in the sitemap.
    sitemap({ filter: (page) => !page.includes('/dev/') }),
  ],
  markdown: {
    processor: satteri({
      features: { math: true, smartPunctuation: true },
      mdastPlugins: [katexPlugin],
    }),
  },
  vite: { plugins: [tailwindcss()] },
});
