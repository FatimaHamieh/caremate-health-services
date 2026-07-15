import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Stethoscope, Sparkles } from 'lucide-react';
import type { Locale } from '@/i18n/request';
import { nursingServices, wellnessServices } from '@/content/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceGrid } from '@/components/services/ServiceGrid';

export default async function ServicesPage({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('services');

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

      <div className="mt-20">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
            <Stethoscope className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('nursingTitle')}</h2>
        </div>
        <ServiceGrid services={nursingServices} locale={locale} ctaLabel={t('bookThisService')} />
      </div>

      <div className="mt-20">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-coral-600 text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('wellnessTitle')}</h2>
        </div>
        <ServiceGrid services={wellnessServices} locale={locale} ctaLabel={t('bookThisService')} />
      </div>
    </div>
  );
}
