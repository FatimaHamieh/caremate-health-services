import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Heart } from 'lucide-react';
import { siteConfig } from '@/content/site-config';
import type { Locale } from '@/i18n/request';

const links = [
  { key: 'home', href: '' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'team', href: '/team' },
  { key: 'contact', href: '/contact' },
] as const;

export function Footer() {
  const locale = useLocale() as Locale;
  const t = useTranslations('nav');
  const tf = useTranslations('footer');

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Heart className="h-5 w-5" fill="currentColor" />
              </span>
              <span>{siteConfig.brandName}</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              {siteConfig.tagline[locale]}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {tf('quickLinks')}
            </h4>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.key}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {tf('getInTouch')}
            </h4>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              {locale === 'ar' ? 'لبنان' : 'Lebanon'}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          © {new Date().getFullYear()} {siteConfig.brandName}. {tf('rights')}
        </div>
      </div>
    </footer>
  );
}
