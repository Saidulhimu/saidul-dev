import { ArrowUpRight, type LucideIcon } from 'lucide-react';
import { Section } from '@/components/Section';
import { skillCategories, techLogos } from '@/data/portfolio';

const marqueeItems = [...techLogos, ...techLogos];

const cardAccents = [
  {
    bar: 'from-sky-500 to-cyan-400',
    iconBg: 'bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400',
    iconBorder: 'group-hover:border-sky-500/50',
    chipHover: 'hover:border-sky-500/40 hover:bg-sky-100 hover:text-sky-700 dark:hover:border-sky-500/40 dark:hover:bg-sky-500/10 dark:hover:text-sky-300',
    glow: 'from-sky-500/15',
    numText: 'text-sky-600 dark:text-sky-400',
  },
  {
    bar: 'from-cyan-500 to-sky-400',
    iconBg: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400',
    iconBorder: 'group-hover:border-cyan-500/50',
    chipHover: 'hover:border-cyan-500/40 hover:bg-cyan-100 hover:text-cyan-700 dark:hover:border-cyan-500/40 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300',
    glow: 'from-cyan-500/15',
    numText: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    bar: 'from-blue-500 to-sky-400',
    iconBg: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
    iconBorder: 'group-hover:border-blue-500/50',
    chipHover: 'hover:border-blue-500/40 hover:bg-blue-100 hover:text-blue-700 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-300',
    glow: 'from-blue-500/15',
    numText: 'text-blue-600 dark:text-blue-400',
  },
  {
    bar: 'from-indigo-400 to-sky-500',
    iconBg: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400',
    iconBorder: 'group-hover:border-indigo-500/50',
    chipHover: 'hover:border-indigo-500/40 hover:bg-indigo-100 hover:text-indigo-700 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300',
    glow: 'from-indigo-500/15',
    numText: 'text-indigo-600 dark:text-indigo-400',
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="CORE SKILLS"
      title="A toolkit for building & understanding intelligent systems"
      description="From responsive front-end interfaces to interpretable machine learning pipelines — here's what I work with day to day."
    >
      {/* Tech stack marquee */}
      <div className="reveal marquee-mask mb-12 overflow-hidden" data-reveal="blur">
        <div className="marquee-track gap-4">
          {marqueeItems.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="group flex flex-shrink-0 items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-accent-500/40 dark:hover:bg-slate-900/60"
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${tech.gradient} font-mono text-sm font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
              >
                {tech.glyph}
              </span>
              <span className="text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Skill category cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
        {skillCategories.map((cat, i) => {
          const Icon: LucideIcon = cat.icon;
          const accent = cardAccents[i % cardAccents.length];
          return (
            <div
              key={cat.title}
              className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-slate-300 bg-slate-50 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800/70 dark:bg-slate-900/40 dark:shadow-none dark:hover:shadow-2xl"
              data-reveal="flip"
              data-reveal-delay={String(i * 100)}
            >
              {/* Top accent bar — always visible, widens on hover */}
              <span className={`absolute left-0 top-0 h-1 w-2/3 rounded-t-2xl bg-gradient-to-r ${accent.bar} transition-all duration-500 group-hover:w-full`} />

              {/* Shimmer sweep */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-sky-500/[0.05] to-transparent transition-transform duration-1000 group-hover:translate-x-full dark:via-white/[0.05]" />

              {/* Glow blob */}
              <div className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${accent.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:opacity-20`} />

              <div className="relative p-6">
                {/* Header row: number + icon */}
                <div className="mb-5 flex items-center justify-between">
                  <span className={`font-mono text-3xl font-bold opacity-20 transition-opacity duration-300 group-hover:opacity-40 ${accent.numText}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 ${accent.iconBg} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${accent.iconBorder} dark:border-slate-800`}>
                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:animate-wiggle" strokeWidth={1.75} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-1 text-base font-semibold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-sky-600 dark:text-white dark:group-hover:text-accent-300">
                  {cat.title}
                </h3>

                {/* Divider line */}
                <div className="mb-4 h-px w-full bg-gradient-to-r from-slate-300 via-slate-200 to-transparent transition-all duration-500 group-hover:from-sky-500/50 group-hover:via-sky-400/30 dark:from-slate-800 dark:via-slate-800 dark:group-hover:from-accent-500/50 dark:group-hover:via-accent-500/30" />

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <span
                      key={skill}
                      className={`chip ${accent.chipHover}`}
                      style={{ transitionDelay: `${si * 40}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom arrow indicator */}
              <div className="mt-auto flex items-center justify-between border-t border-slate-200 px-6 py-3 transition-colors duration-300 group-hover:border-sky-500/30 dark:border-slate-800/70 dark:group-hover:border-accent-500/30">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400 transition-colors duration-300 group-hover:text-sky-500 dark:text-slate-600 dark:group-hover:text-accent-400">
                  {cat.skills.length} skills
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-500 group-hover:opacity-100 dark:text-slate-600 dark:group-hover:text-accent-400" />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
