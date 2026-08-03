/**
 * Lightweight full-page animated background.
 * Three drifting radial glow orbs + a subtle grid overlay.
 * Purely decorative (pointer-events: none) and GPU-friendly (transform/opacity only).
 */
export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base wash */}
      <div className="absolute inset-0 bg-slate-200 transition-colors duration-300 dark:bg-slate-950" />

      {/* Drifting glow orbs */}
      <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-sky-500/15 blur-[120px] animate-drift-1 dark:bg-accent-500/15" />
      <div className="absolute right-0 top-1/4 h-[26rem] w-[26rem] rounded-full bg-cyan-500/12 blur-[120px] animate-drift-2 dark:bg-cyan-glow/12" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-sky-400/10 blur-[120px] animate-drift-3 dark:bg-accent-500/10" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Vignette to keep edges clean */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-300/40 dark:to-slate-950/40" />
    </div>
  );
}
