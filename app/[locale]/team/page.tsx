import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/request';
import { founder } from '@/content/founder';
import { teamRoles } from '@/content/team';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { TeamGrid } from '@/components/team/TeamGrid';

export default async function TeamPage({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('team');

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />

      <AnimatedSection className="mt-16">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
          {t('founderTitle')}
        </span>
        <div className="mt-4 rounded-3xl bg-gradient-to-br from-slate-900 to-brand-950 p-8 text-white sm:p-12">
          <div className="flex flex-col items-start gap-8 sm:flex-row">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-brand-500 text-3xl font-bold">
              {founder.name.split(' ').map((n) => n[0]).join('')}
            </div>
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">{founder.name}</h2>
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
        <div className="mt-10">
          <TeamGrid roles={teamRoles} locale={locale} />
        </div>
      </div>
    </div>
  );
}
