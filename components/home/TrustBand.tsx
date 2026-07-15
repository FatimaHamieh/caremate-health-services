'use client';

import { motion } from 'framer-motion';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { staggerContainer, staggerItem } from '@/components/ui/AnimatedSection';

export type TrustStat = {
  icon: string;
  value: string;
  label: string;
  sub: string;
};

export function TrustBand({ stats }: { stats: TrustStat[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
      className="relative rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/90 sm:p-10"
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={staggerItem}
            className={`flex items-start gap-4 px-2 sm:flex-col sm:items-center sm:px-4 sm:text-center ${
              i > 0 ? 'sm:border-s sm:border-slate-200 sm:dark:border-slate-800' : ''
            }`}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/20 sm:h-14 sm:w-14">
              <DynamicIcon name={stat.icon} className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <div className="text-2xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 font-semibold text-slate-700 dark:text-slate-200">{stat.label}</div>
              <p className="mt-1 text-sm leading-snug text-slate-500 dark:text-slate-400">{stat.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
