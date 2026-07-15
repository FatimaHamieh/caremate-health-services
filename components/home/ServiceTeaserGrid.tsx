'use client';

import { motion } from 'framer-motion';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { staggerContainer, staggerItem } from '@/components/ui/AnimatedSection';
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
          className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
            <DynamicIcon name={service.icon} className="h-6 w-6" />
          </div>
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            {service.title[locale]}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
