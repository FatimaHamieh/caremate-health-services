import type { LocalizedText } from './types';

/**
 * Single source of truth for brand-level config.
 * Swap the WhatsApp number here once real details are available.
 */
export const siteConfig = {
  brandName: 'CareMate Mobile Healthcare',
  tagline: {
    en: 'Bringing Healthcare to Your Doorstep',
    ar: 'نجلب الرعاية الصحية إلى باب منزلك',
  } satisfies LocalizedText,
  // TODO: replace with the real WhatsApp business number (include country code, digits only).
  whatsappNumber: '96100000000',
  whatsappDefaultMessage: {
    en: "Hi CareMate, I'd like to book a home healthcare visit.",
    ar: 'مرحباً كير ميت، أرغب في حجز زيارة رعاية صحية منزلية.',
  } satisfies LocalizedText,
};
