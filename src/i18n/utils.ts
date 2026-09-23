import { defaultLocale, ui, type Locale } from './ui';

export function useTranslations(lang: Locale) {
  return function t(key: keyof (typeof ui)[typeof defaultLocale]): string {
    return ui[lang][key] ?? ui[defaultLocale][key];
  };
}

// URL slugs stay the same across languages (mirrors the old mkdocs i18n setup);
// only the default locale (sq) is unprefixed.
export function localePath(lang: Locale, path: string): string {
  const clean = path.replace(/^\/+/, '');
  return lang === defaultLocale ? `/${clean}` : `/${lang}/${clean}`;
}
