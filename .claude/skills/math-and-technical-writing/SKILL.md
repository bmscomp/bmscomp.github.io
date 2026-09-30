---
name: math-and-technical-writing
description: House style and workflow for writing on this site. Use when writing, revising or reviewing a mathematics article (src/content/mathematics/), a blog post (src/content/posts/) or a lab note (src/content/lab/). Covers the voice, checking every reference and historical claim, the frontmatter, the Markdown the site renders (theorems, proofs, numbered equations, tables, references), math that fits on phones, and the checks to run before calling an article done.
---

# Mathematical and technical writing for this site

Posts and mathematics articles are set as papers, in the manner of LaTeX's article class; lab notes
keep a notebook letterhead. `README.md` ("Write a post or a mathematics article", "Write a lab note",
"Writing features") is the full reference for what renders. This skill is the house style on top of it.
The two Basel articles in `src/content/mathematics/` are the model to imitate.

## Before writing: facts first

An article that is elegant and wrong is worse than no article. Every factual claim must be traceable.

1. **Collect the sources before drafting.** For each reference, confirm the author, title, venue,
   volume, year and pages from the publisher, the journal's own page, zbMATH Open, MathSciNet, the Euler
   Archive, Numdam or a library catalogue. Open every DOI and check that it resolves to that work.
2. **Tie each historical claim to a cited source**: who proved what, when, and in which work. If a
   claim can't be traced, soften it to what the sources support, or cut it. Claims cut or corrected in
   the Basel articles for this reason:
   - that Mengoli connected the problem to the triangular numbers;
   - that *Proofs from THE BOOK* collects exactly three proofs;
   - that Wallis "first evaluated" the sum;
   - "two and a half centuries", which the dates showed to be almost three.
3. **Compute every number you quote** (partial sums, errors, decimals) and keep the code. A short
   "Try it" listing lets readers reproduce the numbers and keeps you honest.
4. **Use real MSC 2020 codes**, the main one first, two or three in all. Check each at msc2020.org or
   zbMATH Open. For example: 11M06 (ζ(s) and L(s, χ)), 40A05 (convergence and divergence of series),
   01A50 (history of mathematics, 18th century).
5. When unsure whether something is true, say so in the text ("it is not known whether…"), or leave it
   out. Open problems are worth stating plainly.

## Voice

Write as a mathematician explaining to a curious, capable reader: someone who will follow an argument
line by line, but who wasn't in the room.

- **Open with why the question matters**, not with definitions. The first paragraph of the Basel
  problem says why a one-line question resisted for almost ninety years.
- **Explain before you formalise.** Say what an argument will do, do it, then say what it bought.
  "Notice what the proof did not need" is the kind of sentence that makes a proof memorable.
- **Use "we"** for the reader and author working together ("we follow Euler's argument"). Use "I" only
  for genuine personal asides.
- **Name things at first use**, then keep the name. Define every symbol before or right after it
  appears ("Write ζ(s) = ∑ 1/nˢ, the function Riemann later made famous").
- **Be honest about rigour.** If a historical argument wasn't yet a proof, say what it lacked, then
  give one that is.
- **Keep paragraphs to one idea**, in plain words, with no hype ("stunning", "mind-blowing") and no
  filler ("it is interesting to note that"). Credit people by name and date.
- **Name the article's plan** in its introduction; in a series, link the other part in the text.
- For the sentences themselves (words and shapes that sound generated, and a revision pass), follow
  the `human-writing` skill.

## Frontmatter

Mathematics articles and posts share one schema (`src/content.config.ts`, `paperSchema`):

```md
---
title: The Basel problem — why the squares sum to π²/6
description: One line for lists, feeds and the social card.
abstract: |
  One paragraph of about 100–150 words, in "we": what the article explains, follows and proves.
  A blank line starts a second paragraph.
pubDate: 2026-09-30
updatedDate: 2026-10-15          # only for a real revision
tags: [mathematics, series]      # the paper's keywords; reuse existing tags (see /tags/)
msc: [11M06, 40A05, 01A50]
series: The Basel problem        # optional; parts share the name
seriesPart: 1
relatedMath: [basel-problem-solved]   # optional, articles to list as related; a wrong id fails the build
---
```

- The title, description and abstract are **plain text**: `$…$` is not rendered there. Write Unicode
  instead: π²/6, 1 + 1/4 + 1/9 + ⋯, ζ(3).
- The title and description are drawn on the social card (`/og/mathematics/<id>.png`). Its fonts
  (`src/assets/fonts/eb-garamond/og/`) cover Latin, Greek, superscript digits (², ³) and the common
  operators ∑ ∏ ∫ √ ∞ ≤ ≥ ≠ ≈ ⋯, but not every math symbol: ∈ and ∀, for example, are missing. A π once
  came out as a blank box there. After a build, open `dist/og/mathematics/<id>.png` and check every
  symbol in the title and description.
- `draft: true` keeps the article visible only in `pnpm dev`.

## Structure of a paper

- Sections start at `##`. There is no h1 in the body, and heading levels never skip; the lint fails
  the build otherwise. Sections are numbered automatically, except "References".
- A typical arc:
  1. an introduction (no heading) with the question, its history and the plan;
  2. the problem made precise;
  3. why it is hard;
  4. the main argument;
  5. a complete proof;
  6. what lies beyond;
  7. "Try it";
  8. References.
- Four or more sections on a long page get a contents list; `toc: true` or `toc: false` overrides it.

## Mathematics in Markdown

KaTeX renders math at build time; see `src/lib/markdown/katex.ts` and `callouts.ts`.

- **Inline** `$…$`, **display** with `$$` on lines of their own.
- **Numbered equations:** put `\label{eq:name}` inside a display (not inline math), and refer to it with
  `$\eqref{eq:name}$` alone between dollars, which becomes a link "(1)". An unknown key prints (??)
  and the lint warns. Number only the equations you refer to.
- **Environments**, written as quotations whose first line is a marker:

  ```md
  > [!THEOREM] Euler, 1735
  > $$
  > \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}.
  > $$

  > [!PROOF] of Theorem 2
  > For $0 < x < \pi/2$ we have …
  ```

  `THEOREM`, `LEMMA`, `PROPOSITION`, `COROLLARY`, `DEFINITION` and `EXAMPLE` share one numbered
  sequence (Theorem 1, Lemma 2, …); `REMARK` and `PROOF` are unnumbered, and a proof ends with □. Every
  line of the block, blank ones included, starts with `>`. Refer to results by number in the text
  ("By Lemma 3").
- **Fit phones (375 px).** Keep each display narrow. Split a long one over lines with `aligned` (at `&`)
  or `gathered`, one relation per line. A display that scrolls sideways fails the accessibility check.
- **Dollar amounts:** write `\$5`, or two of them in a paragraph read as math.
- Prefer `\frac12` inline to a tall fraction when it keeps the line spacing even; use `\,` for thin
  spaces in products and differentials (`\,dx`).

## Tables, figures, references and notes

- **Tables** are booktabs-style. Right-align numbers with `--:`. Every header cell needs words, not
  only math: "Terms $N$", not "$N$", or the accessibility check fails on an empty header. A caption goes
  in a `Table: …` paragraph right after the table; cite it in the text as "(Table 1)".
- **Figures:** `![Alt text](./file.png "Caption")`, alone in its paragraph. The alt text is required
  and describes the content.
- **References:** end with `## References` and a numbered list. Cite in the text with `[1]` or `[1, 3]`.
  Use the Basel articles' format:

  ```md
  3. L. Euler, “De summis serierum reciprocarum,” _Commentarii academiae scientiarum Petropolitanae_ 7
     (1740), 123–134. Eneström index E41; facsimile in the
     [Euler Archive](https://scholarlycommons.pacific.edu/euler-works/41/).
  4. R. Ayoub, “Euler and the zeta function,” _The American Mathematical Monthly_ 81 (1974),
     1067–1086. [doi:10.1080/00029890.1974.11993738](https://doi.org/10.1080/00029890.1974.11993738)
  ```

  That is initials and surname, the article title in curly quotes, the journal or book in italics,
  then volume, year, pages and a DOI link when one exists. For books, add the publisher or city and
  the edition. Every entry is cited at least once, and every citation has an entry.
- **Notes:** use a footnote (`[^name]`) for an aside that would break the argument's flow; it appears
  under "Notes".
- **Code:** use a fenced listing with a file title, as in ```` ```ts title="basel.ts" ````, and keep
  lines under the lint's limit. Show command output in ```` ```text frame="terminal" title="Output" ````.

## Lab notes

Lab notes (`src/content/lab/`) are shorter and practical. Their frontmatter is `category`, `status`
(`testing`, `adopted` or `dropped`), `tools` with versions, `platform`, `verdict` and `repo`.

- Say what was installed, on what, and how.
- Show what happened, with the exact command output in terminal frames.
- End on the verdict.
- Keep `status`, `verdict` and `updatedDate` current as the test goes on.
- Versions and error messages are facts too: copy them, don't recall them.

## Before calling it done

1. `npx -y pnpm@12.6.0 lint:content`: no errors, and no `\eqref` or code-line warnings left.
2. Add the article's URL:
   - to `MATH` (or `LAB_NOTES`) in `tests/readability.spec.ts`;
   - to `PAGES` and `ARTICLES` in `tests/lib/measure.ts`,

   so the readability tests measure it.
3. Build and test:

   ```bash
   FIXTURES=1 npx -y pnpm@12.6.0 exec astro build
   npx -y pnpm@12.6.0 exec playwright test --project=light --project=dark
   ```

   After changing a Markdown plugin or the config, clear the cache first with
   `rm -rf node_modules/.astro .astro`.
4. Look at the page at 375 px and 1280 px, in light and dark mode: no display or table scrolls
   sideways, and theorem and proof blocks read well. Check the social card.
5. Re-read the references once more: numbering, links, and that every `[n]` points to the right work.
6. Adding an article must not change the CV (`/cv/`).
