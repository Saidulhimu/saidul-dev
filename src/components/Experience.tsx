import { Briefcase, Check } from 'lucide-react';
import { Section } from '@/components/Section';
import { experiences } from '@/data/portfolio';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Work & consulting"
      description="Hands-on work shipping full-stack products and applied machine learning systems."
    >
      <div className="relative">
        {/* Timeline accent line */}
        <div className="absolute left-4 top-2 bottom-2 w-px origin-top scale-y-0 bg-gradient-to-b from-sky-500/50 via-slate-300 to-transparent dark:via-slate-800 sm:left-5" />

        <div className="space-y-6" data-reveal-stagger>
          {experiences.map((exp, i) => (
            <div
              key={exp.role}
              className="reveal relative pl-14 sm:pl-16"
              data-reveal="left"
              data-reveal-delay={String(i * 120)}
            >
              {/* Node */}
              <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-xl border border-sky-500/40 bg-slate-50 text-sky-600 transition-all duration-300 hover:scale-110 hover:rotate-6 sm:h-10 sm:w-10 dark:bg-slate-900 dark:text-accent-400">
                <Briefcase className="h-4 w-4" />
              </span>

              <div className="glass-card group p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{exp.role}</h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-sky-600 dark:text-accent-400">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">{exp.org}</p>

                <ul className="mt-5 space-y-3">
                  {exp.highlights.map((h, hi) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500 transition-transform duration-300 group-hover:scale-110 dark:text-accent-400" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
