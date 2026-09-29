import type { CollectionEntry } from 'astro:content';

export { typeset } from './typeset';

export type Resume = CollectionEntry<'cv'>['data'];
export type Job = Resume['work'][number];
export type Project = Resume['projects'][number];

/** Roles that started before this year are listed compactly under "Earlier experience". */
export const EARLIER_BEFORE = 2015;

/** Project types rendered under "Talks & workshops" rather than "Open source". */
const TALK_TYPES = new Set(['talk', 'workshop', 'presentation', 'conference']);

const COUNTRY_NAMES: Record<string, string> = { FR: 'France' };

/** "2021-03" → "Mar 2021", "2019" → "2019", undefined → "Present". */
export function formatMonth(value?: string) {
  if (!value) return 'Present';
  const [year, month] = value.split('-');
  if (!month) return year;
  return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

/** "2021-03" → "2021". */
export function formatYear(value?: string) {
  return value ? value.slice(0, 4) : 'Present';
}

/** Talks and workshops, newest first; undated entries last. */
export function byDateDesc(a: Project, b: Project) {
  return (b.startDate ?? '').localeCompare(a.startDate ?? '');
}

/** "2026-09-29" → "September 2026". */
export function formatLongMonth(value: string) {
  const [year, month] = value.split('-');
  return new Date(Number(year), Number(month ?? 1) - 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export function formatLocation(location: Resume['basics']['location']) {
  if (!location) return undefined;
  const country = COUNTRY_NAMES[location.countryCode] ?? location.countryCode;
  return [location.city, location.region, country].filter(Boolean).join(', ');
}

export function isEarlier(job: Job) {
  return job.endDate !== undefined && Number(job.startDate.slice(0, 4)) < EARLIER_BEFORE;
}

export function isTalk(project: Project) {
  return project.type !== undefined && TALK_TYPES.has(project.type);
}

/** "Charles Sabourdin" → "C. Sabourdin". */
export function abbreviateName(name: string) {
  const [first, ...rest] = name.split(/\s+/);
  return `${first[0]}.\u00a0${rest.join(' ')}`;
}

/** ["A", "B", "C"] → "A, B, and C". */
export function listNames(names: string[]) {
  return names.length < 3 ? names.join(' and ') : `${names.slice(0, -1).join(', ')}, and ${names.at(-1)}`;
}

/** 2026 → "MMXXVI". */
export function toRoman(value: number) {
  const numerals: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'],
    [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ];
  let rest = value;
  let out = '';
  for (const [n, s] of numerals) {
    while (rest >= n) {
      out += s;
      rest -= n;
    }
  }
  return out;
}

/** schema.org ProfilePage/Person structured data built from the resume. */
export function toJsonLd(resume: Resume, pageUrl: string) {
  const { basics, work, education, skills, languages, interests } = resume;
  const current = work.find((job) => !job.endDate);
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: pageUrl,
    dateModified: resume.meta?.lastModified,
    mainEntity: {
      '@type': 'Person',
      name: basics.name,
      jobTitle: basics.label,
      description: basics.summary,
      url: basics.url,
      address: basics.location && {
        '@type': 'PostalAddress',
        addressLocality: basics.location.city,
        addressRegion: basics.location.region,
        addressCountry: basics.location.countryCode,
      },
      sameAs: basics.profiles.map((p) => p.url),
      worksFor: current && { '@type': 'Organization', name: current.name },
      alumniOf: education.map((e) => ({ '@type': 'CollegeOrUniversity', name: e.institution })),
      hasCredential: education.map((e) => ({
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: `${e.studyType} in ${e.area}${e.specialization ? `, specialization in ${e.specialization}` : ''}`,
        recognizedBy: { '@type': 'CollegeOrUniversity', name: e.institution },
      })),
      knowsAbout: [...interests.map((i) => i.name), ...skills.flatMap((s) => s.keywords)],
      knowsLanguage: languages.map((l) => ({ '@type': 'Language', name: l.language })),
    },
  };
}
