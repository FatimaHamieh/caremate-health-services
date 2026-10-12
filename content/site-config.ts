import type { LocalizedText } from './types';

/**
 * Single source of truth for brand-level config.
 * Swap the WhatsApp number here once real details are available.
 */
export const siteConfig = {
  brandName: 'CareMate Health Services',
  tagline: {
    en: 'Bringing Healthcare to Your Doorstep',
    ar: 'نجلب الرعاية الصحية إلى باب منزلك',
    fr: 'Les soins de santé livrés à votre porte',
  } satisfies LocalizedText,
  email: 'info@carematelb.com',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/caremate-health-services/',
    facebook: 'https://www.facebook.com/share/1MGcCh3sc9/',
    instagram: 'https://www.instagram.com/carematelb/',
  },
  whatsappNumber: '96171524786',
  whatsappDefaultMessage: {
    en: "Hi CareMate, I'd like to book a home healthcare visit.",
    ar: 'مرحباً CareMate، أرغب في حجز زيارة رعاية صحية منزلية.',
    fr: "Bonjour CareMate, je souhaiterais réserver une visite de soins de santé à domicile.",
  } satisfies LocalizedText,
};
