import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Eye, Target } from 'lucide-react';
import type { Locale } from '@/i18n/request';
import { aboutParagraphs, vision, mission } from '@/content/about';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ValuesGrid } from '@/components/about/ValuesGrid';

export default async function AboutPage({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('about');

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />

      <AnimatedSection className="mx-auto mt-10 max-w-3xl space-y-5">
        {aboutParagraphs.map((p, i) => (
          <p key={i} className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {p[locale]}
          </p>
        ))}
      </AnimatedSection>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        <AnimatedSection className="rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-8 text-white shadow-xl">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
            <Eye className="h-5 w-5" />
          </div>
          <h3 className="mt-4 text-xl font-bold">{t('visionTitle')}</h3>
          <p className="mt-3 leading-relaxed text-brand-50">{vision[locale]}</p>
        </AnimatedSection>
        <AnimatedSection
          delay={0.1}
          className="rounded-3xl bg-gradient-to-br from-coral-500 to-coral-700 p-8 text-white shadow-xl"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
            <Target className="h-5 w-5" />
          </div>
          <h3 className="mt-4 text-xl font-bold">{t('missionTitle')}</h3>
          <p className="mt-3 leading-relaxed text-coral-50">{mission[locale]}</p>
        </AnimatedSection>
      </div>

      <div className="mt-20">
        <SectionHeading title={t('valuesTitle')} subtitle={t('valuesSubtitle')} />
        <ValuesGrid locale={locale} />
      </div>
    </div>
  );
}
