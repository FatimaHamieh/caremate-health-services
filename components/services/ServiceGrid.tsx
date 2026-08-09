'use client';

import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { staggerContainer } from '@/components/ui/AnimatedSection';
import { buildServiceWhatsAppLink } from '@/lib/whatsapp';
import type { Service } from '@/content/services';
import type { Locale } from '@/i18n/request';

export function ServiceGrid({
  services,
  locale,
  ctaLabel,
  comingSoonLabel,
}: {
  services: Service[];
  locale: Locale;
  ctaLabel: string;
  comingSoonLabel?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service, i) => (
        <ServiceCard
          key={i}
          icon={service.icon}
          title={service.title[locale]}
          description={service.description[locale]}
          ctaLabel={ctaLabel}
          onBook={() =>
            buildServiceWhatsAppLink(
              service.title[locale],
              locale,
              typeof window !== 'undefined' ? window.location.href : undefined
            )
          }
          comingSoon={service.comingSoon}
          comingSoonLabel={comingSoonLabel}
          image={service.image}
        />
      ))}
    </motion.div>
  );
}
