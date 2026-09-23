import type { Locale } from '../i18n/ui';

interface Localized {
  sq: string;
  en: string;
  de: string;
}

export interface Protest {
  number: number;
  date: Localized;
  location: Localized;
  href: string;
  major?: boolean;
}

const instagramProfile = 'https://www.instagram.com/flamingosofberlin/';

// #16 is the latest protest and is also reused as the first archive entry,
// keeping its date, location and Instagram link consistent in both places.
export const latestProtest: Protest = {
  number: 16,
  date: { sq: '20 shtator 2026', en: '20 September 2026', de: '20. September 2026' },
  location: {
    sq: 'Përballë Rotes Rathaus, Rathausstraße 15, Berlin · ora 16:00',
    en: 'Opposite Rotes Rathaus, Rathausstraße 15, Berlin · 16:00',
    de: 'Gegenüber dem Roten Rathaus, Rathausstraße 15, Berlin · 16:00 Uhr',
  },
  href: instagramProfile,
};

export const protestArchive: Protest[] = [
  latestProtest,
  {
    number: 15,
    date: { sq: '13 shtator 2026', en: '13 September 2026', de: '13. September 2026' },
    location: { sq: 'Berlin', en: 'Berlin', de: 'Berlin' },
    href: instagramProfile,
  },
  {
    number: 14,
    date: { sq: '6 shtator 2026', en: '6 September 2026', de: '6. September 2026' },
    location: { sq: 'Berlin', en: 'Berlin', de: 'Berlin' },
    href: instagramProfile,
  },
  {
    number: 13,
    date: { sq: '30 gusht 2026', en: '30 August 2026', de: '30. August 2026' },
    location: { sq: 'Berlin', en: 'Berlin', de: 'Berlin' },
    href: instagramProfile,
  },
  {
    number: 12,
    date: { sq: '23 gusht 2026', en: '23 August 2026', de: '23. August 2026' },
    location: { sq: 'Berlin', en: 'Berlin', de: 'Berlin' },
    href: instagramProfile,
  },
  {
    number: 11,
    date: { sq: '16 gusht 2026', en: '16 August 2026', de: '16. August 2026' },
    location: { sq: 'Berlin', en: 'Berlin', de: 'Berlin' },
    href: instagramProfile,
  },
  {
    number: 10,
    date: { sq: '9 gusht 2026', en: '9 August 2026', de: '9. August 2026' },
    location: {
      sq: 'Besselpark, Friedrichstraße 24 · ora 18:00',
      en: 'Besselpark, Friedrichstraße 24 · 18:00',
      de: 'Besselpark, Friedrichstraße 24 · 18:00 Uhr',
    },
    href: instagramProfile,
  },
  {
    number: 9,
    date: { sq: '2 gusht 2026', en: '2 August 2026', de: '2. August 2026' },
    location: { sq: 'Berlin', en: 'Berlin', de: 'Berlin' },
    href: instagramProfile,
  },
  {
    number: 8,
    date: { sq: '26 korrik 2026', en: '26 July 2026', de: '26. Juli 2026' },
    location: { sq: 'Berlin', en: 'Berlin', de: 'Berlin' },
    href: instagramProfile,
  },
  {
    number: 7,
    date: { sq: '19 korrik 2026', en: '19 July 2026', de: '19. Juli 2026' },
    location: { sq: 'Berlin', en: 'Berlin', de: 'Berlin' },
    href: instagramProfile,
  },
  {
    number: 6,
    date: { sq: '12 korrik 2026', en: '12 July 2026', de: '12. Juli 2026' },
    location: { sq: 'Berlin', en: 'Berlin', de: 'Berlin' },
    href: instagramProfile,
  },
  {
    number: 5,
    date: { sq: '28 qershor 2026', en: '28 June 2026', de: '28. Juni 2026' },
    location: { sq: 'Berlin', en: 'Berlin', de: 'Berlin' },
    href: instagramProfile,
  },
  {
    number: 4,
    date: { sq: '21 qershor 2026', en: '21 June 2026', de: '21. Juni 2026' },
    location: { sq: 'Berlin', en: 'Berlin', de: 'Berlin' },
    href: instagramProfile,
  },
  {
    number: 3,
    date: { sq: '16 qershor 2026', en: '16 June 2026', de: '16. Juni 2026' },
    location: {
      sq: 'Gjatë vizitës së Edi Ramës',
      en: "During Edi Rama's visit",
      de: 'Während des Besuchs von Edi Rama',
    },
    href: instagramProfile,
  },
  {
    number: 2,
    date: { sq: '14 qershor 2026', en: '14 June 2026', de: '14. Juni 2026' },
    location: { sq: 'Berlin', en: 'Berlin', de: 'Berlin' },
    href: instagramProfile,
  },
  {
    number: 1,
    date: { sq: '5 qershor 2026', en: '5 June 2026', de: '5. Juni 2026' },
    location: {
      sq: 'Protesta pranë Ambasadës Shqiptare',
      en: 'Protest near the Albanian Embassy',
      de: 'Protest nahe der albanischen Botschaft',
    },
    href: instagramProfile,
    major: true,
  },
];

export function localize(entry: Protest, lang: Locale) {
  return { number: entry.number, date: entry.date[lang], location: entry.location[lang], href: entry.href, major: entry.major };
}

// Protests happen every Sunday; the exact time and meeting point are
// announced on Instagram closer to the date, so this only pins the day.
export function nextSunday(from: Date = new Date()): Date {
  const d = new Date(Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate()));
  const day = d.getUTCDay();
  if (day !== 0) d.setUTCDate(d.getUTCDate() + (7 - day));
  return d;
}

export function toICSDate(d: Date): string {
  return d.toISOString().slice(0, 10).replace(/-/g, '');
}

export const protestPhotos = [
  { file: '20260802_173857.webp', alt: { sq: 'Pjesëmarrës në protestën e Flamingo Berlin më 2 gusht 2026', en: 'Participants at the Flamingo Berlin protest on 2 August 2026', de: 'Teilnehmende beim Protest von Flamingo Berlin am 2. August 2026' } },
  { file: '20260802_173910.webp', alt: { sq: 'Protestues të mbledhur në Berlin më 2 gusht 2026', en: 'Protesters gathered in Berlin on 2 August 2026', de: 'Demonstrierende in Berlin am 2. August 2026' } },
  { file: '20260802_180112.webp', alt: { sq: 'Momente nga protesta paqësore e Flamingo Berlin', en: 'A moment from a peaceful Flamingo Berlin protest', de: 'Moment eines friedlichen Protests von Flamingo Berlin' } },
  { file: '20260802_184231.webp', alt: { sq: 'Aktivistë të Flamingo Berlin gjatë protestës', en: 'Flamingo Berlin activists during a protest', de: 'Aktive von Flamingo Berlin während eines Protests' } },
  { file: 'IMG-20260802-WA0016.webp', alt: { sq: 'Pjesëmarrës dhe pankarta në protestën e Flamingo Berlin', en: 'Participants and signs at a Flamingo Berlin protest', de: 'Teilnehmende und Plakate bei einem Protest von Flamingo Berlin' } },
  { file: '20260719_180414.webp', alt: { sq: 'Protesta e Flamingo Berlin më 19 korrik 2026', en: 'Flamingo Berlin protest on 19 July 2026', de: 'Protest von Flamingo Berlin am 19. Juli 2026' } },
  { file: '20260712_113954.webp', alt: { sq: 'Tubimi i Flamingo Berlin më 12 korrik 2026', en: 'Flamingo Berlin gathering on 12 July 2026', de: 'Versammlung von Flamingo Berlin am 12. Juli 2026' } },
  { file: '20260712_120209.webp', alt: { sq: 'Aktivistë gjatë tubimit të 12 korrikut 2026', en: 'Activists at the gathering on 12 July 2026', de: 'Aktive bei der Versammlung am 12. Juli 2026' } },
  { file: '20260712_132516.webp', alt: { sq: 'Momente nga protesta e 12 korrikut 2026 në Berlin', en: 'A moment from the 12 July 2026 protest in Berlin', de: 'Moment des Protests am 12. Juli 2026 in Berlin' } },
  { file: 'IMG_6495.JPG.webp', alt: { sq: 'Aktivitet i komunitetit Flamingo Berlin', en: 'A Flamingo Berlin community activity', de: 'Gemeinschaftsaktivität von Flamingo Berlin' } },
] as const;
