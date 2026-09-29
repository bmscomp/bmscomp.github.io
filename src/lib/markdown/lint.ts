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
  position?: { start: { line: number; column: number } };
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

export function lint(tree: Node): Problem[] {
  const problems: Problem[] = [];
  const report = (node: Node, severity: Problem['severity'], message: string, offset = 0) =>
    problems.push({ line: (node.position?.start.line ?? 0) + offset, severity, message });
  let previous = 0;
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
      case 'html':
        if (/<img\b/i.test(node.value ?? '')) report(node, 'error', 'raw <img>: use ![alt](./file.png) so the image is optimized');
        break;
      case 'code':
        (node.value ?? '').split('\n').forEach((line, i) => {
          if (line.length > MAX_CODE_LINE) {
            report(node, 'warning', `code line of ${line.length} characters (over ${MAX_CODE_LINE}) wraps on every screen`, i + 1);
          }
        });
        break;
      case 'inlineMath':
        // "$5 and $6" parses as math: a digit first and a space last is a price, not a formula.
        if (/^\d/.test(node.value ?? '') && /\s$/.test(node.value ?? '')) {
          report(node, 'warning', `"$${node.value}$" reads as math; write \\$ for a dollar sign`);
        }
        break;
    }
  }
  return problems;
}
