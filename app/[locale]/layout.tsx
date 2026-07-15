import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/request';
import { siteConfig } from '@/content/site-config';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFAB } from '@/components/layout/WhatsAppFAB';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const cairo = Cairo({ subsets: ['arabic', 'latin'], variable: '--font-cairo', display: 'swap' });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: `${siteConfig.brandName} — ${siteConfig.tagline.en}`,
  description: siteConfig.tagline.en,
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();
  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body className={`${inter.variable} ${cairo.variable} ${locale === 'ar' ? 'font-arabic' : 'font-sans'} bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppFAB />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
