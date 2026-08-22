import { locales, type Locale } from '@/i18n/request';

export const siteUrl = 'https://carematelb.com';

export function getAlternates(route: string, locale: Locale) {
  return {
    canonical: `${siteUrl}/${locale}${route}`,
    languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}${route}`])),
  };
}
