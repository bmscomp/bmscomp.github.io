#!/usr/bin/env node
// Validates src/content/cv/resume.json against the official JSON Resume v1.0.0 schema
// (vendored from https://github.com/jsonresume/resume-schema so builds don't need the network).
import { readFile } from 'node:fs/promises';
import Ajv from 'ajv-draft-04';
import addFormats from 'ajv-formats';

const [schema, resume] = await Promise.all(
  ['scripts/schemas/jsonresume-v1.0.0.json', 'src/content/cv/resume.json'].map(async (f) =>
    JSON.parse(await readFile(f, 'utf8')),
  ),
);

// strict: false — the official schema has redundant keywords (e.g. additionalItems) that strict mode rejects.
const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);
const validate = ajv.compile(schema);

if (!validate(resume)) {
  console.error('resume.json does not conform to JSON Resume v1.0.0:');
  for (const error of validate.errors) console.error(`  ${error.instancePath || '/'} ${error.message}`);
  process.exit(1);
}
console.log('resume.json conforms to JSON Resume v1.0.0');
