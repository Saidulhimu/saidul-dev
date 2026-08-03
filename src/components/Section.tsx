import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 ${className}`}>
      <div className="reveal mb-12 max-w-2xl" data-reveal="up">
        <span className="section-eyebrow">
          <span className="h-px w-6 bg-sky-500/60 dark:bg-accent-500/60" />
          {eyebrow}
        </span>
        <h2 className="section-title mt-4">{title}</h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-400">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}
