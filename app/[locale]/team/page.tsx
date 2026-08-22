import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/request';
import { getAlternates } from '@/lib/seo';
import { founder } from '@/content/founder';
import { teamRoles } from '@/content/team';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { PageHeaderBackground } from '@/components/ui/PageHeaderBackground';
import { TeamGrid } from '@/components/team/TeamGrid';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'team' });
  return {
    title: t('title'),
    description: t('teamSubtitle'),
    alternates: getAlternates('/team', locale),
  };
}

export default async function TeamPage({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('team');

  return (
    <div className="relative isolate overflow-hidden">
      <PageHeaderBackground />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />

      <AnimatedSection className="mt-16">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
          {t('founderTitle')}
        </span>
        <div className="mt-4 rounded-3xl bg-gradient-to-br from-slate-900 to-brand-950 p-8 text-white sm:p-12">
          <div className="flex flex-col items-start gap-8 sm:flex-row">
            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full ring-4 ring-white/10">
              <Image src="/images/founder.jpg" alt={founder.name[locale]} fill sizes="160px" className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">{founder.name[locale]}</h2>
              <p className="mt-1 font-medium text-brand-300">{t('founderRole')}</p>
              <p className="mt-1 text-sm text-slate-300">{founder.credentials[locale]}</p>
              <div className="mt-6 space-y-4">
                {founder.bioParagraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed text-slate-200">
                    {p[locale]}
                  </p>
                ))}
              </div>
              <p className="mt-6 border-s-4 border-brand-400 ps-4 italic text-brand-100">
                {founder.closingQuote[locale]}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <div className="mt-20">
        <SectionHeading title={t('teamTitle')} subtitle={t('teamSubtitle')} align="start" />
        <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
          {t('teamIncludes')}
        </p>
        <div className="mt-6">
          <TeamGrid roles={teamRoles} locale={locale} />
        </div>
      </div>
      </div>
    </div>
  );
}
