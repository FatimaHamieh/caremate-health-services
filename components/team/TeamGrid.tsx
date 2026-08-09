'use client';

import { motion } from 'framer-motion';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { staggerContainer, staggerItem } from '@/components/ui/AnimatedSection';
import { ShineSweep } from '@/components/ui/ShineSweep';
import type { TeamRole } from '@/content/team';
import type { Locale } from '@/i18n/request';

export function TeamGrid({ roles, locale }: { roles: TeamRole[]; locale: Locale }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
    >
      {roles.map((role, i) => (
        <motion.div
          key={i}
          variants={staggerItem}
          whileHover={{ y: -4 }}
          className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-brand-600/10 dark:border-slate-800 dark:bg-slate-900"
        >
          <ShineSweep />
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-600/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <DynamicIcon name={role.icon} className="h-6 w-6" />
          </div>
          <div className="relative">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{role.title[locale]}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {role.description[locale]}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
