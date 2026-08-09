'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { DynamicIcon } from './DynamicIcon';
import { staggerItem } from './AnimatedSection';
import { ShineSweep } from './ShineSweep';

export function ServiceCard({
  icon,
  title,
  description,
  ctaLabel,
  onBook,
  comingSoon = false,
  comingSoonLabel,
  image,
}: {
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  onBook: () => string;
  comingSoon?: boolean;
  comingSoonLabel?: string;
  image?: string;
}) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-2xl hover:shadow-brand-600/10 dark:border-slate-800 dark:bg-slate-900 ${comingSoon ? 'opacity-80' : ''} ${image ? '' : 'p-6'}`}
    >
      <ShineSweep />
      {!image && (
        <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-coral-500 transition-transform duration-300 group-hover:scale-x-100" />
      )}

      {image ? (
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
          <div className="absolute bottom-3 start-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-black/20">
            <DynamicIcon name={icon} className="h-5 w-5" />
          </div>
          {comingSoon && (
            <span className="absolute end-3 top-3 rounded-full bg-coral-100 px-3 py-1 text-xs font-semibold text-coral-700 shadow-sm dark:bg-coral-900/70 dark:text-coral-200">
              {comingSoonLabel}
            </span>
          )}
        </div>
      ) : null}

      <div className={`flex flex-1 flex-col ${image ? 'p-6' : ''}`}>
        {!image && (
          <div className="flex items-start justify-between gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-600/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <DynamicIcon name={icon} className="h-6 w-6" />
            </div>
            {comingSoon && (
              <span className="rounded-full bg-coral-100 px-3 py-1 text-xs font-semibold text-coral-700 dark:bg-coral-900/30 dark:text-coral-300">
                {comingSoonLabel}
              </span>
            )}
          </div>
        )}
        <h3 className={`text-lg font-semibold text-slate-900 dark:text-white ${image ? '' : 'mt-4'}`}>{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
        {!comingSoon && (
          <a
            href={onBook()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800 dark:text-brand-300 dark:hover:text-brand-200"
          >
            <MessageCircle className="h-4 w-4" />
            {ctaLabel}
          </a>
        )}
      </div>
    </motion.div>
  );
}
