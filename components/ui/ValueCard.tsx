'use client';

import { motion } from 'framer-motion';
import { DynamicIcon } from './DynamicIcon';
import { staggerItem } from './AnimatedSection';
import { ShineSweep } from './ShineSweep';

export function ValueCard({ icon, title }: { icon: string; title: string }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ scale: 1.03, y: -2 }}
      className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-brand-50 to-white p-5 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:from-slate-800 dark:to-slate-900"
    >
      <ShineSweep />
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-600/20 transition-transform duration-300 group-hover:rotate-6">
        <DynamicIcon name={icon} className="h-5 w-5" />
      </div>
      <span className="relative font-semibold text-slate-800 dark:text-slate-100">{title}</span>
    </motion.div>
  );
}
