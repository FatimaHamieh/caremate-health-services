import { siteConfig } from '@/content/site-config';
import type { Locale } from '@/i18n/request';

export function buildWhatsAppLink(message?: string, pageUrl?: string): string {
  const text = message ?? siteConfig.whatsappDefaultMessage.en;
  const fullText = pageUrl ? `${text}\n${pageUrl}` : text;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(fullText)}`;
}

export function buildServiceWhatsAppLink(serviceName: string, locale: Locale, pageUrl?: string): string {
  const messages: Record<Locale, string> = {
    ar: `مرحباً CareMate، أرغب في حجز خدمة: ${serviceName}`,
    fr: `Bonjour CareMate, je souhaiterais réserver : ${serviceName}`,
    en: `Hi CareMate, I'd like to book: ${serviceName}`,
  };
  return buildWhatsAppLink(messages[locale], pageUrl);
}
