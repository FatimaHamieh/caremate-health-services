'use client';

import { motion } from 'framer-motion';
import { ValueCard } from '@/components/ui/ValueCard';
import { staggerContainer } from '@/components/ui/AnimatedSection';
import { values } from '@/content/about';
import type { Locale } from '@/i18n/request';

export function ValuesGrid({ locale }: { locale: Locale }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
      className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {values.map((value, i) => (
        <ValueCard key={i} icon={value.icon} title={value.title[locale]} />
      ))}
    </motion.div>
  );
}
