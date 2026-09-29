import resume from '../content/cv/resume.json';

/** The CV in JSON Resume format, as committed (validated against the official schema at build time). */
export function GET() {
  return new Response(`${JSON.stringify(resume, null, 2)}\n`, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
