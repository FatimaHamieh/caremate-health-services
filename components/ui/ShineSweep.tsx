export function ShineSweep() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <div className="absolute inset-y-0 -left-1/3 w-1/3 -translate-x-[200%] -skew-x-12 bg-gradient-to-r from-white/0 via-white/50 to-white/0 transition-transform duration-700 ease-out group-hover:translate-x-[500%] dark:via-white/15" />
    </div>
  );
}
