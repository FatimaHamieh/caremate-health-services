import { WaveDivider } from './WaveDivider';

export function PageHeaderBackground() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950" />
      <div className="absolute -top-24 start-[-6rem] h-72 w-72 rounded-full bg-brand-300/30 blur-3xl animate-blob dark:bg-brand-700/20" />
      <div className="absolute top-10 end-[-6rem] h-80 w-80 rounded-full bg-coral-300/25 blur-3xl animate-blob [animation-delay:4s] dark:bg-coral-700/20" />
      <div className="absolute bottom-0 start-1/3 h-56 w-56 rounded-full bg-brand-200/25 blur-3xl animate-blob [animation-delay:8s] dark:bg-brand-800/20" />
      <WaveDivider />
    </div>
  );
}
