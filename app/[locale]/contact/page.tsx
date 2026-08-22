import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { MessageCircle } from 'lucide-react';
import type { Locale } from '@/i18n/request';
import { siteConfig } from '@/content/site-config';
import { getAlternates } from '@/lib/seo';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { getServerOrigin } from '@/lib/site-url';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { PageHeaderBackground } from '@/components/ui/PageHeaderBackground';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'contact' });
  return {
    title: t('title'),
    description: t('subtitle'),
    alternates: getAlternates('/contact', locale),
  };
}

export default async function ContactPage({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('contact');
  const common = await getTranslations('common');
  const pageUrl = `${getServerOrigin()}/${locale}/contact`;
  const whatsappHref = buildWhatsAppLink(siteConfig.whatsappDefaultMessage[locale], pageUrl);

  return (
    <div className="relative isolate overflow-hidden">
      <PageHeaderBackground />
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
      </div>
    </div>
  );
}
