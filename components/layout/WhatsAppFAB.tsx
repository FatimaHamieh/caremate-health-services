'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { siteConfig } from '@/content/site-config';
import type { Locale } from '@/i18n/request';

export function WhatsAppFAB() {
  const locale = useLocale() as Locale;
  const t = useTranslations('fab');
  const href = buildWhatsAppLink(siteConfig.whatsappDefaultMessage[locale]);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('label')}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 end-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-white shadow-lg shadow-[#25D366]/30"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] animate-pulse-slow" />
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-semibold sm:inline">{t('label')}</span>
    </motion.a>
  );
}
