/**
 * Content lint: rules for the Markdown in src/content/, run on the mdast Sätteri parses. Each rule
 * returns problems with the line they start on; `scripts/lint-content.mjs` prints them as
 * `path:line` and fails the build on any error.
 */

export interface Node {
  type: string;
  depth?: number;
  alt?: string | null;
  value?: string;
  children?: Node[];
  position?: { start: { line: number; column: number; offset?: number }; end?: { offset?: number } };
}

export interface Problem {
  line: number;
  severity: 'error' | 'warning';
  message: string;
}

const MAX_CODE_LINE = 110;

function* walk(node: Node): Generator<Node> {
  yield node;
  for (const child of node.children ?? []) yield* walk(child);
}

/** `source` (the file as parsed) sharpens two checks: indented code lines and dollar amounts. */
export function lint(tree: Node, source = ''): Problem[] {
  const problems: Problem[] = [];
  const report = (node: Node, severity: Problem['severity'], message: string, offset = 0) =>
    problems.push({ line: (node.position?.start.line ?? 0) + offset, severity, message });
  let previous = 0;
  // Equation labels, for checking \eqref (katex.ts numbers only labelled displays).
  const labels = new Set<string>();
  for (const node of walk(tree)) {
    const key = node.type === 'math' ? node.value?.match(/\\label\{([^}]+)\}/)?.[1] : undefined;
    if (key) labels.add(key.trim());
  }
  const checkRefs = (node: Node) => {
    for (const [, key] of (node.value ?? '').matchAll(/\\eqref\{([^}]+)\}/g)) {
      if (!labels.has(key.trim())) report(node, 'warning', `\\eqref{${key}} has no matching \\label; it prints (??)`);
    }
  };
  for (const node of walk(tree)) {
    switch (node.type) {
      case 'heading': {
        const depth = node.depth ?? 0;
        if (depth === 1) report(node, 'error', 'h1 in the body: the title is the only h1; start sections at ##');
        else if (previous === 0 && depth !== 2) report(node, 'error', `the first heading is h${depth}; start at ##`);
        else if (previous > 0 && depth > previous + 1) report(node, 'error', `heading jumps from h${previous} to h${depth}`);
        previous = depth;
        break;
      }
      case 'image':
        if (!node.alt?.trim()) report(node, 'error', 'image without alt text: describe it, e.g. ![A diagram of …](./file.png)');
        break;
      case 'imageReference':
        // Astro optimizes only inline images; a reference-style one ships as-is, often with a broken path.
        report(node, 'error', 'reference-style image: write it inline, ![A diagram of …](./file.png)');
        break;
      case 'html':
        if (/<img\b/i.test(node.value ?? '')) report(node, 'error', 'raw <img>: use ![alt](./file.png) so the image is optimized');
        break;
      case 'code': {
        // A fenced block starts on its fence line; an indented one on its first line of code.
        const start = node.position?.start.offset;
        const fenced = start === undefined || /^[ \t]*(`{3,}|~{3,})/.test(source.slice(start, start + 64)) || !source;
        (node.value ?? '').split(/\r?\n/).forEach((line, i) => {
          if (line.length > MAX_CODE_LINE) {
            report(node, 'warning', `code line of ${line.length} characters (over ${MAX_CODE_LINE}) wraps on every screen`, i + (fenced ? 1 : 0));
          }
        });
        break;
      }
      case 'math':
        checkRefs(node);
        break;
      case 'inlineMath': {
        checkRefs(node);
        if (/\\label\{/.test(node.value ?? '')) {
          report(node, 'warning', '\\label in inline math numbers nothing: put the formula between $$ lines of its own');
        }
        // "$5 and $6" or "$5-$10" parse as math: a digit first, then a space before the closing $ or a
        // digit right after it, is a price, not a formula (the Pandoc rule).
        const value = node.value ?? '';
        const end = node.position?.end?.offset;
        const digitAfter = end !== undefined && /\d/.test(source.charAt(end));
        if (/^\d/.test(value) && (/\s$/.test(value) || digitAfter)) {
          report(node, 'warning', `"$${value}$" reads as math; write \\$ for a dollar sign`);
        }
        break;
      }
    }
  }
  return problems;
}
