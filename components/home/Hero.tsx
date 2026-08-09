'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Locale } from '@/i18n/request';
import { WaveDivider } from '@/components/ui/WaveDivider';

export function Hero({
  tagline,
  heroCta,
  viewServices,
  whatsappHref,
  locale,
}: {
  tagline: string;
  heroCta: string;
  viewServices: string;
  whatsappHref: string;
  locale: Locale;
}) {
  return (
    <section className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-gradient-to-br from-brand-300 to-brand-400 pb-10 pt-10 dark:from-brand-900 dark:to-slate-950 sm:min-h-[460px] sm:pb-14 sm:pt-16 lg:min-h-[500px]">
      <div
        className="pointer-events-none absolute inset-0 -z-20 hidden bg-cover bg-left lg:block"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/0 dark:bg-slate-950/50" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="text-center lg:ml-[380px] lg:text-start">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="whitespace-normal bg-[length:200%_auto] bg-gradient-to-br from-slate-900 via-brand-800 to-brand-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent animate-gradient-x dark:from-white dark:via-brand-100 dark:to-brand-300 sm:text-3xl md:text-4xl lg:whitespace-nowrap lg:text-2xl xl:text-4xl 2xl:text-5xl"
          >
            {tagline}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/30 transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              {heroCta}
            </a>
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 rounded-full border border-brand-700/30 bg-white/70 px-7 py-3.5 font-semibold text-brand-800 backdrop-blur transition-transform hover:scale-105 hover:bg-white dark:border-white/20 dark:bg-slate-900/60 dark:text-white dark:hover:bg-slate-900/80"
            >
              {viewServices}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </motion.div>
        </div>
      </div>

      <WaveDivider />
    </section>
  );
}
