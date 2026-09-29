// Lint every Markdown file under src/content/ with the rules in src/lib/markdown/lint.ts.
// Prints path:line for each problem; exits 1 on any error (warnings pass).
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { markdownToMdast } from 'satteri';
import { features } from '../src/lib/markdown/index.ts';
import { lint } from '../src/lib/markdown/lint.ts';

const root = new URL('../src/content/', import.meta.url).pathname;
const files = readdirSync(root, { recursive: true, withFileTypes: true })
  .filter((entry) => entry.isFile() && /\.mdx?$/.test(entry.name))
  .map((entry) => join(entry.parentPath, entry.name))
  .sort();

let errors = 0;
let warnings = 0;
for (const file of files) {
  const tree = markdownToMdast(readFileSync(file, 'utf8'), { features });
  for (const { line, severity, message } of lint(tree)) {
    if (severity === 'error') errors++;
    else warnings++;
    console.log(`${relative(process.cwd(), file)}:${line}  ${severity}  ${message}`);
  }
}
console.log(`lint:content — ${files.length} files, ${errors} errors, ${warnings} warnings`);
process.exit(errors > 0 ? 1 : 0);
