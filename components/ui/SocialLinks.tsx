import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { siteConfig } from '@/content/site-config';

const platforms = [
  { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin },
  { key: 'facebook', label: 'Facebook', Icon: Facebook },
  { key: 'instagram', label: 'Instagram', Icon: Instagram },
] as const;

const variants = {
  footer:
    'h-10 w-10 bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-brand-600 hover:text-white hover:ring-brand-600 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-800 dark:hover:bg-brand-500 dark:hover:text-white',
  large:
    'h-14 w-14 bg-brand-50 text-brand-700 shadow-sm ring-1 ring-brand-100 hover:scale-110 hover:bg-brand-600 hover:text-white dark:bg-slate-800 dark:text-brand-300 dark:ring-slate-700 dark:hover:bg-brand-500 dark:hover:text-white',
};

export function SocialLinks({ variant = 'footer', className = '' }: { variant?: keyof typeof variants; className?: string }) {
  const iconSize = variant === 'large' ? 'h-6 w-6' : 'h-5 w-5';

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {platforms.map(({ key, label, Icon }) => (
        <li key={key}>
          <a
            href={siteConfig.socialLinks[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={`flex items-center justify-center rounded-full transition-all ${variants[variant]}`}
          >
            <Icon className={iconSize} />
          </a>
        </li>
      ))}
    </ul>
  );
}
