export const locales = ['sq', 'en', 'de'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'sq';

export const localeNames: Record<Locale, string> = {
  sq: 'Shqip',
  en: 'English',
  de: 'Deutsch',
};

export const localeFlags: Record<Locale, string> = {
  sq: '🇦🇱',
  en: '🇬🇧',
  de: '🇩🇪',
};

// UI chrome strings — page body copy lives alongside each page instead, since it
// isn't reused and reads better kept next to its markup.
export const ui = {
  sq: {
    'nav.protestat': 'Protestat',
    'nav.motivimi': 'Motivimi',
    'nav.vepro': 'Vepro',
    'nav.rrethNesh': 'Rreth nesh',
    'footer.explore': 'Eksploro',
    'footer.connect': 'Na ndiqni',
    'footer.tagline': 'Protesta, informacion dhe veprim qytetar për natyrën, demokracinë dhe interesin publik në Shqipëri.',
    'footer.rights': 'Nismë qytetare e diasporës shqiptare në Berlin',
  },
  en: {
    'nav.protestat': 'Protests',
    'nav.motivimi': 'Motivation',
    'nav.vepro': 'Take action',
    'nav.rrethNesh': 'About us',
    'footer.explore': 'Explore',
    'footer.connect': 'Follow us',
    'footer.tagline': 'Protest, information and civic action for nature, democracy and the public interest in Albania.',
    'footer.rights': 'A civic initiative of the Albanian diaspora in Berlin',
  },
  de: {
    'nav.protestat': 'Proteste',
    'nav.motivimi': 'Motivation',
    'nav.vepro': 'Aktiv werden',
    'nav.rrethNesh': 'Über uns',
    'footer.explore': 'Entdecken',
    'footer.connect': 'Folge uns',
    'footer.tagline': 'Protest, Information und zivilgesellschaftliches Engagement für Natur, Demokratie und das Gemeinwohl in Albanien.',
    'footer.rights': 'Eine zivilgesellschaftliche Initiative der albanischen Diaspora in Berlin',
  },
} as const satisfies Record<Locale, Record<string, string>>;
