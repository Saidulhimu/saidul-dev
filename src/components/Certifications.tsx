import { BadgeCheck, ShieldCheck } from 'lucide-react';
import { Section } from '@/components/Section';
import { certifications } from '@/data/portfolio';

const issuerIcon = (issuer: string) => {
  if (issuer.includes('Forage') || issuer.includes('EY')) return ShieldCheck;
  return BadgeCheck;
};

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Verified credentials"
      description="Coursework and virtual experience programs completed across machine learning and technology risk."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
        {certifications.map((cert, i) => {
          const Icon = issuerIcon(cert.issuer);
          return (
            <div
              key={cert.title}
              className="glass-card reveal group p-6"
              data-reveal="scale"
              data-reveal-delay={String(i * 100)}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-sky-500/30 bg-gradient-to-br from-sky-500/15 to-cyan-500/10 text-sky-600 transition-all duration-300 group-hover:scale-110 group-hover:animate-wiggle dark:border-accent-500/30 dark:from-accent-500/15 dark:to-cyan-glow/10 dark:text-accent-400">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-semibold leading-snug text-slate-900 dark:text-white">{cert.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-700 dark:text-slate-400">{cert.issuer}</p>
                  {cert.year && (
                    <span className="mt-3 inline-block font-mono text-xs uppercase tracking-wider text-sky-600 dark:text-accent-400">
                      {cert.year}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
