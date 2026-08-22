import type { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/i18n/request';

const baseUrl = 'https://carematelb.com';

const routes = ['', '/about', '/services', '/team', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}/${defaultLocale}${route}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `${baseUrl}/${locale}${route}`])
      ),
    },
  }));
}
