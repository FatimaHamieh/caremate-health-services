export function WaveDivider({
  className = '',
  color = 'text-white dark:text-slate-950',
  flip = false,
}: {
  className?: string;
  color?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 ${flip ? 'top-0 rotate-180' : 'bottom-0'} ${className} ${color}`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-16 w-full sm:h-24"
      >
        <path
          d="M0,64 C240,110 480,10 720,40 C960,70 1200,110 1440,56 L1440,120 L0,120 Z"
          fill="currentColor"
          opacity="0.55"
          className="animate-sway"
        />
        <path
          d="M0,80 C220,40 460,100 720,80 C980,60 1240,20 1440,72 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
