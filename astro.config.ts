import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { satteri } from '@astrojs/markdown-satteri';
import expressiveCode from 'astro-expressive-code';
import { defineConfig } from 'astro/config';
import { features, hastPlugins, mdastPlugins } from './src/lib/markdown/index.ts';

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
        // W5.3: with the frame aligned to the double rule, 1.25rem padding leaves 82 columns at ≥1024px.
        codePaddingInline: '1.25rem',
        uiFontFamily: 'var(--font-mono)',
        uiFontSize: '0.85rem',
        frames: { frameBoxShadowCssValue: 'none' },
      },
    }),
    // Test fixtures (/dev/) are built only with FIXTURES=1 and never belong in the sitemap.
    sitemap({ filter: (page) => !page.includes('/dev/') }),
  ],
  markdown: {
    // Features and native plugins live in src/lib/markdown/ (tested with `pnpm test`).
    processor: satteri({ features, mdastPlugins, hastPlugins }),
  },
  vite: { plugins: [tailwindcss()] },
});
