import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { ArrowRight, MessageCircle } from 'lucide-react';
import type { Locale } from '@/i18n/request';
import { siteConfig } from '@/content/site-config';
import { aboutParagraphs } from '@/content/about';
import { whyChooseUs } from '@/content/whyChooseUs';
import { nursingServices, wellnessServices } from '@/content/services';
import { founder } from '@/content/founder';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { getServerOrigin } from '@/lib/site-url';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Hero } from '@/components/home/Hero';
import { ServiceTeaserGrid } from '@/components/home/ServiceTeaserGrid';
import { WhyChooseGrid } from '@/components/home/WhyChooseGrid';

export default async function HomePage({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('home');
  const common = await getTranslations('common');
  const teaserServices = [...nursingServices.slice(0, 2), ...wellnessServices.slice(0, 2)];
  const pageUrl = `${getServerOrigin()}/${locale}`;
  const whatsappHref = buildWhatsAppLink(siteConfig.whatsappDefaultMessage[locale], pageUrl);

  return (
    <div>
      <Hero
        tagline={siteConfig.tagline[locale]}
        heroCta={t('heroCta')}
        viewServices={common('viewAllServices')}
        whatsappHref={whatsappHref}
        locale={locale}
      />

      {/* About teaser */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <AnimatedSection>
            <span className="inline-block rounded-full bg-coral-100 px-4 py-1 text-sm font-semibold text-coral-700 dark:bg-coral-900/30 dark:text-coral-300">
              {t('aboutEyebrow')}
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              CareMate
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {aboutParagraphs[0][locale]}
            </p>
            <Link
              href={`/${locale}/about`}
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-800 dark:text-brand-300"
            >
              {t('aboutCta')}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/about-us.jpg"
                alt={t('aboutEyebrow')}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services teaser */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-brand-100 px-4 py-1 text-sm font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
              {t('servicesEyebrow')}
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {t('servicesTitle')}
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{t('servicesSubtitle')}</p>
          </AnimatedSection>

          <ServiceTeaserGrid services={teaserServices} locale={locale} />

          <div className="mt-10 text-center">
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-600/30 transition-transform hover:scale-105"
            >
              {common('viewAllServices')}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-coral-100 px-4 py-1 text-sm font-semibold text-coral-700 dark:bg-coral-900/30 dark:text-coral-300">
              {t('whyChooseEyebrow')}
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {t('whyChooseTitle')}
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{t('whyChooseSubtitle')}</p>
          </AnimatedSection>

          <WhyChooseGrid
            items={whyChooseUs.map((item) => ({
              icon: item.icon,
              title: item.title[locale],
              description: item.description[locale],
            }))}
          />
        </div>
      </section>

      {/* Founder teaser */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <AnimatedSection className="relative grid items-center gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-brand-950 p-10 text-white sm:grid-cols-[auto,1fr] sm:p-14">
          <div className="pointer-events-none absolute -top-16 -start-16 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -end-10 h-72 w-72 rounded-full bg-coral-500/10 blur-3xl" />
          <div className="relative mx-auto h-48 w-48 shrink-0 overflow-hidden rounded-full shadow-lg shadow-brand-900/40 ring-4 ring-white/10 sm:mx-0">
            <Image src="/images/founder.jpg" alt={founder.name[locale]} fill sizes="192px" className="object-cover" />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-300">
              {t('founderEyebrow')}
            </span>
            <h3 className="mt-2 text-2xl font-bold sm:text-3xl">{founder.name[locale]}</h3>
            <p className="mt-1 text-brand-200">{founder.role[locale]}</p>
            <p className="mt-4 max-w-2xl text-slate-200">{founder.closingQuote[locale]}</p>
            <Link
              href={`/${locale}/team`}
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-white hover:text-brand-200"
            >
              {t('founderCta')}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-brand-600 py-20 text-white">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-coral-400/20 blur-3xl" />
        <AnimatedSection className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">{t('ctaTitle')}</h2>
          <p className="mt-4 text-lg text-brand-100">{t('ctaSubtitle')}</p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-brand-700 shadow-xl transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            {common('bookWhatsApp')}
          </a>
        </AnimatedSection>
      </section>
    </div>
  );
}
