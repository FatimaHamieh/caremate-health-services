import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Stethoscope, Sparkles } from 'lucide-react';
import type { Locale } from '@/i18n/request';
import { nursingServices, wellnessServices } from '@/content/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHeaderBackground } from '@/components/ui/PageHeaderBackground';
import { ServiceGrid } from '@/components/services/ServiceGrid';

export default async function ServicesPage({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('services');

  return (
    <div className="relative isolate overflow-hidden">
      <PageHeaderBackground />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-600/20">
              <Stethoscope className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('nursingTitle')}</h2>
          </div>
          <ServiceGrid
            services={nursingServices}
            locale={locale}
            ctaLabel={t('bookThisService')}
            comingSoonLabel={t('comingSoon')}
          />
        </div>

        <div className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-coral-500 to-coral-700 text-white shadow-md shadow-coral-600/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('wellnessTitle')}</h2>
          </div>
          <ServiceGrid
            services={wellnessServices}
            locale={locale}
            ctaLabel={t('bookThisService')}
            comingSoonLabel={t('comingSoon')}
          />
        </div>
      </div>
    </div>
  );
}
