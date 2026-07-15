import type { ComponentType } from 'react';
import * as Icons from 'lucide-react';
import { HeartPulse, type LucideProps } from 'lucide-react';

type IconMap = typeof Icons;

export function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const IconComponent = (Icons as unknown as Record<keyof IconMap, ComponentType<LucideProps>>)[
    name as keyof IconMap
  ];

  if (!IconComponent) return <HeartPulse {...props} />;
  return <IconComponent {...props} />;
}
