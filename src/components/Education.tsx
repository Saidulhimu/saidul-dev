import { GraduationCap, Award, Users } from 'lucide-react';
import { Section } from '@/components/Section';
import { education, achievements } from '@/data/portfolio';

export function Education() {
  return (
    <Section
      id="about"
      eyebrow="Education & Achievements"
      title="Background & milestones"
      description="Academic foundations in Computer Science & Engineering, plus the communities and recognitions along the way."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* Education timeline */}
        <div className="lg:col-span-3">
          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-sky-500/50 via-slate-300 to-transparent dark:via-slate-800" />
            <div className="space-y-5" data-reveal-stagger>
              {education.map((edu, i) => (
                <div
                  key={edu.degree}
                  className="reveal relative pl-14"
                  data-reveal="left"
                  data-reveal-delay={String(i * 100)}
                >
                  <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-xl border border-sky-500/40 bg-slate-50 text-sky-600 transition-all duration-300 hover:scale-110 hover:rotate-6 dark:bg-slate-900 dark:text-accent-400">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <div className="glass-card group p-5">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">{edu.degree}</h3>
                      {edu.period && (
                        <span className="font-mono text-xs uppercase tracking-wider text-sky-600 dark:text-accent-400">{edu.period}</span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">{edu.institution}</p>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-3 py-1.5 transition-all duration-300 group-hover:scale-105 group-hover:border-sky-500/40 dark:border-slate-700 dark:bg-slate-800/60">
                      <span className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500">{edu.gradeLabel}</span>
                      <span className="font-mono text-sm font-semibold text-sky-600 dark:text-accent-300">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards + Extracurricular */}
        <div className="space-y-5 lg:col-span-2" data-reveal-stagger>
          <div className="glass-card reveal group p-6" data-reveal="right" data-reveal-delay="120">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-600 transition-transform duration-300 group-hover:scale-110 group-hover:animate-wiggle dark:text-accent-400">
                <Award className="h-4 w-4" />
              </span>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Honors & Awards</h3>
            </div>
            <ul className="space-y-3">
              {achievements.awards.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500 transition-transform duration-300 hover:scale-150 dark:bg-accent-400" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card reveal group p-6" data-reveal="right" data-reveal-delay="220">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 transition-transform duration-300 group-hover:scale-110 group-hover:animate-wiggle dark:border-cyan-glow/30 dark:bg-cyan-glow/10 dark:text-cyan-glow">
                <Users className="h-4 w-4" />
              </span>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Extracurricular</h3>
            </div>
            <ul className="space-y-3">
              {achievements.extracurricular.map((e) => (
                <li key={e} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500 transition-transform duration-300 hover:scale-150 dark:bg-cyan-glow" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
