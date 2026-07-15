'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Heart, Stethoscope, ShieldCheck, Activity } from 'lucide-react';
import Link from 'next/link';
import type { Locale } from '@/i18n/request';

const floatingChips = [
  { icon: Heart, className: 'top-16 start-[8%] sm:start-[14%]', anim: 'animate-float' },
  { icon: Stethoscope, className: 'top-40 end-[6%] sm:end-[12%]', anim: 'animate-float-delayed' },
  { icon: ShieldCheck, className: 'bottom-10 start-[10%] sm:start-[20%]', anim: 'animate-float-slow' },
  { icon: Activity, className: 'bottom-24 end-[10%] sm:end-[22%]', anim: 'animate-float' },
];

export function Hero({
  eyebrow,
  tagline,
  heroCta,
  viewServices,
  whatsappHref,
  locale,
}: {
  eyebrow: string;
  tagline: string;
  heroCta: string;
  viewServices: string;
  whatsappHref: string;
  locale: Locale;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pb-44 pt-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 start-[-6rem] h-96 w-96 rounded-full bg-brand-300/40 blur-3xl animate-blob dark:bg-brand-700/20" />
        <div className="absolute top-40 end-[-8rem] h-[26rem] w-[26rem] rounded-full bg-coral-300/30 blur-3xl animate-blob [animation-delay:4s] dark:bg-coral-700/20" />
        <div className="absolute bottom-[-6rem] start-1/3 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl animate-blob [animation-delay:8s] dark:bg-brand-800/20" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 hidden sm:block">
        {floatingChips.map((chip, i) => (
          <div
            key={i}
            className={`absolute ${chip.className} ${chip.anim} flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 shadow-lg shadow-slate-900/5 ring-1 ring-white/60 backdrop-blur-sm dark:bg-slate-800/60 dark:ring-slate-700/60`}
          >
            <chip.icon className="h-6 w-6 text-brand-600 dark:text-brand-300" />
          </div>
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-200 dark:bg-slate-900/80 dark:text-brand-300 dark:ring-brand-800"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 bg-gradient-to-br from-slate-900 via-brand-700 to-brand-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent dark:from-white dark:via-brand-200 dark:to-brand-400 sm:text-6xl"
        >
          {tagline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
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
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-7 py-3.5 font-semibold text-slate-800 backdrop-blur transition-transform hover:scale-105 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
          >
            {viewServices}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
