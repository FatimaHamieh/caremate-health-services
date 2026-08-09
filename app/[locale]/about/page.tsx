import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/request';
import { aboutParagraphs } from '@/content/about';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { PageHeaderBackground } from '@/components/ui/PageHeaderBackground';
import { ValuesGrid } from '@/components/about/ValuesGrid';

export default async function AboutPage({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('about');

  return (
    <div className="relative isolate overflow-hidden">
      <PageHeaderBackground />
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />

        <AnimatedSection className="mx-auto mt-10 max-w-3xl space-y-5">
          {aboutParagraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {p[locale]}
            </p>
          ))}
        </AnimatedSection>

        <div className="mt-20">
          <SectionHeading title={t('valuesTitle')} subtitle={t('valuesSubtitle')} />
          <ValuesGrid locale={locale} />
        </div>
      </div>
    </div>
  );
}
