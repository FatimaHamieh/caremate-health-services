'use client';

import { motion } from 'framer-motion';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { staggerContainer, staggerItem } from '@/components/ui/AnimatedSection';
import { ShineSweep } from '@/components/ui/ShineSweep';

export type WhyChooseItem = { icon: string; title: string; description: string };

const accents = [
  'from-brand-500 to-brand-700',
  'from-coral-500 to-coral-700',
  'from-brand-400 to-brand-600',
  'from-coral-400 to-coral-600',
  'from-brand-500 to-brand-700',
  'from-coral-500 to-coral-700',
  'from-brand-400 to-brand-600',
];

export function WhyChooseGrid({ items }: { items: WhyChooseItem[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
      className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((item, i) => {
        const accent = accents[i % accents.length];
        return (
          <motion.div
            key={i}
            variants={staggerItem}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            <ShineSweep />
            <div
              className={`pointer-events-none absolute -top-10 -end-10 h-28 w-28 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-25`}
            />
            <div className="relative flex items-center gap-4">
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg shadow-brand-900/10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
              >
                <DynamicIcon name={item.icon} className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
            </div>
            <p className="relative mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {item.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
