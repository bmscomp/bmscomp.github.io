import type { CollectionEntry } from 'astro:content';

export type Resume = CollectionEntry<'cv'>['data'];
export type Job = Resume['work'][number];

/** Roles that started before this year are listed compactly under "Earlier experience". */
export const EARLIER_BEFORE = 2015;

const COUNTRY_NAMES: Record<string, string> = { FR: 'France' };

/** "2021-03" → "Mar 2021", "2019" → "2019", undefined → "Present". */
export function formatMonth(value?: string) {
  if (!value) return 'Present';
  const [year, month] = value.split('-');
  if (!month) return year;
  return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function formatLocation(location: Resume['basics']['location']) {
  if (!location) return undefined;
  const country = COUNTRY_NAMES[location.countryCode] ?? location.countryCode;
  return [location.city, location.region, country].filter(Boolean).join(', ');
}

export function isEarlier(job: Job) {
  return job.endDate !== undefined && Number(job.startDate.slice(0, 4)) < EARLIER_BEFORE;
}

/** schema.org ProfilePage/Person structured data built from the resume. */
export function toJsonLd(resume: Resume, pageUrl: string) {
  const { basics, work, education, skills, languages } = resume;
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
      knowsAbout: skills.flatMap((s) => s.keywords),
      knowsLanguage: languages.map((l) => ({ '@type': 'Language', name: l.language })),
    },
  };
}
