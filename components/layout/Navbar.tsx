'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/content/site-config';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import type { Locale } from '@/i18n/request';

const navItems = [
  { key: 'home', href: '' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'team', href: '/team' },
  { key: 'contact', href: '/contact' },
] as const;

const darkModeLabel: Record<Locale, string> = {
  en: 'Dark Mode',
  ar: 'الوضع الداكن',
  fr: 'Mode sombre',
};

const languageLabel: Record<Locale, string> = {
  en: 'Language',
  ar: 'اللغة',
  fr: 'Langue',
};

export function Navbar() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 12));

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? 'border-slate-200/70 bg-white/95 shadow-md shadow-slate-900/5 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/95'
          : 'border-transparent bg-white/80 backdrop-blur-md dark:bg-slate-950/80'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <Link href={`/${locale}`} className="group flex items-center gap-2 font-bold text-slate-900 dark:text-white">
          <motion.span
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300, damping: 12 }}
            className="flex h-9 w-9 shrink-0 items-center justify-center"
          >
            <Image src="/images/logo-icon.png" alt={siteConfig.brandName} width={36} height={36} className="h-full w-full object-contain" priority />
          </motion.span>
          <span className="text-lg">{siteConfig.brandName}</span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const href = `/${locale}${item.href}`;
            const isActive = pathname === href || (item.href === '' && pathname === `/${locale}`);
            return (
              <Link
                key={item.key}
                href={href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand-700 dark:text-brand-300'
                    : 'text-slate-700 hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400'
                }`}
              >
                {t(item.key)}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-50 dark:bg-brand-900/30"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden sm:block" />

          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 dark:text-slate-200 md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-50 dark:text-slate-200 dark:hover:bg-slate-900"
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="mt-2 flex items-center justify-between rounded-lg px-3 py-2.5">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {darkModeLabel[locale]}
                </span>
                <ThemeToggle />
              </div>

              <div className="mt-2 flex items-center justify-between rounded-lg px-3 py-2.5">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {languageLabel[locale]}
                </span>
                <LanguageSwitcher variant="inline" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
