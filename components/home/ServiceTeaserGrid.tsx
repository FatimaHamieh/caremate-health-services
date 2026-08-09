'use client';

import { motion } from 'framer-motion';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { staggerContainer, staggerItem } from '@/components/ui/AnimatedSection';
import { ShineSweep } from '@/components/ui/ShineSweep';
import type { Service } from '@/content/services';
import type { Locale } from '@/i18n/request';

export function ServiceTeaserGrid({ services, locale }: { services: Service[]; locale: Locale }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
      className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
    >
      {services.map((service, i) => (
        <motion.div
          key={i}
          variants={staggerItem}
          whileHover={{ y: -4 }}
          className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
        >
          <ShineSweep />
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-600/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <DynamicIcon name={service.icon} className="h-6 w-6" />
          </div>
          <span className="relative text-sm font-semibold text-slate-800 dark:text-slate-100">
            {service.title[locale]}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
