'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { DynamicIcon } from './DynamicIcon';
import { staggerItem } from './AnimatedSection';

export function ServiceCard({
  icon,
  title,
  description,
  ctaLabel,
  onBook,
}: {
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  onBook: () => string;
}) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-2xl hover:shadow-brand-600/10 dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-coral-500 transition-transform duration-300 group-hover:scale-x-100" />
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-600/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <DynamicIcon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {description}
      </p>
      <a
        href={onBook()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800 dark:text-brand-300 dark:hover:text-brand-200"
      >
        <MessageCircle className="h-4 w-4" />
        {ctaLabel}
      </a>
    </motion.div>
  );
}
