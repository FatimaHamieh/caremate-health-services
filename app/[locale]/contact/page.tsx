import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { MessageCircle, MapPin, Clock } from 'lucide-react';
import type { Locale } from '@/i18n/request';
import { siteConfig } from '@/content/site-config';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export default async function ContactPage({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('contact');
  const common = await getTranslations('common');
  const whatsappHref = buildWhatsAppLink(siteConfig.whatsappDefaultMessage[locale]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

      <AnimatedSection className="mt-14">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#25D366] to-brand-700 p-10 text-center text-white shadow-xl">
          <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
            <MessageCircle className="h-8 w-8" />
          </div>
          <h2 className="mt-5 text-2xl font-bold sm:text-3xl">{t('whatsappTitle')}</h2>
          <p className="mt-2 text-white/90">{t('whatsappSubtitle')}</p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-brand-700 shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            {common('bookWhatsApp')}
          </a>
        </div>
      </AnimatedSection>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <AnimatedSection className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
            <MapPin className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{t('areaTitle')}</h3>
          <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">{t('areaText')}</p>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-coral-100 text-coral-700 dark:bg-coral-900/40 dark:text-coral-300">
            <Clock className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{t('hoursTitle')}</h3>
          <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">{t('hoursText')}</p>
        </AnimatedSection>
      </div>
    </div>
  );
}
