import { siteConfig } from '@/content/site-config';
import type { Locale } from '@/i18n/request';

export function buildWhatsAppLink(message?: string): string {
  const text = message ?? siteConfig.whatsappDefaultMessage.en;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function buildServiceWhatsAppLink(serviceName: string, locale: Locale): string {
  const message =
    locale === 'ar'
      ? `مرحباً كير ميت، أرغب في حجز خدمة: ${serviceName}`
      : `Hi CareMate, I'd like to book: ${serviceName}`;
  return buildWhatsAppLink(message);
}
