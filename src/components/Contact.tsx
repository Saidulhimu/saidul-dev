import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight, UserCheck, Send } from 'lucide-react';
import { profile, reference } from '@/data/portfolio';

export function Contact() {
  const contacts = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phoneTel}` },
    { icon: Github, label: 'GitHub', value: 'github.com/Saidulhimu', href: profile.github },
    { icon: Linkedin, label: 'LinkedIn', value: 'in/md-saidul-islam-a6a942414', href: profile.linkedin },
    { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px] animate-pulse-glow dark:bg-accent-500/10" />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="reveal glass-card overflow-hidden p-8 sm:p-12" data-reveal="scale">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Left: CTA */}
            <div data-reveal-stagger>
              <span className="section-eyebrow reveal" data-reveal="up" data-reveal-delay="0">
                <span className="h-px w-6 bg-sky-500/60 dark:bg-accent-500/60" />
                Contact
              </span>
              <h2 className="reveal mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl dark:text-white" data-reveal="up" data-reveal-delay="80">
                Let's Build Something <span className="text-gradient">Great</span> Together!
              </h2>
              <p className="reveal mt-4 max-w-md text-base leading-relaxed text-slate-700 dark:text-slate-400" data-reveal="up" data-reveal-delay="160">
                Open to full-stack development work, applied ML consulting, and research collaborations. Reach out and let's talk.
              </p>

              <div className="reveal mt-8 flex flex-wrap gap-3" data-reveal="up" data-reveal-delay="240">
                <a href={`mailto:${profile.email}`} className="btn-accent group">
                  <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  Email Me
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost group">
                  <Github className="h-4 w-4 transition-transform duration-300 group-hover:animate-wiggle" />
                  GitHub
                </a>
              </div>

              {/* Social row */}
              <div className="reveal mt-8 flex items-center gap-3" data-reveal="up" data-reveal-delay="320">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-slate-100 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:text-sky-600 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:border-accent-500/40 dark:hover:text-accent-300">
                  <Github className="h-5 w-5 transition-transform duration-300 hover:animate-wiggle" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-slate-100 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:text-sky-600 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:border-accent-500/40 dark:hover:text-accent-300">
                  <Linkedin className="h-5 w-5 transition-transform duration-300 hover:animate-wiggle" />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-slate-100 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:text-sky-600 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:border-accent-500/40 dark:hover:text-accent-300">
                  <Mail className="h-5 w-5 transition-transform duration-300 hover:animate-wiggle" />
                </a>
              </div>
            </div>

            {/* Right: contact rows + reference */}
            <div className="space-y-3" data-reveal-stagger>
              {contacts.map((c, ci) => {
                const Icon = c.icon;
                const inner = (
                  <div className="flex items-center gap-4 rounded-xl border border-slate-300 bg-slate-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-50 hover:shadow-lg group dark:border-slate-700 dark:bg-slate-800/40 dark:hover:border-accent-500/30 dark:hover:bg-slate-800/70">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-600 transition-transform duration-300 group-hover:scale-110 group-hover:animate-wiggle dark:border-accent-500/30 dark:bg-accent-500/10 dark:text-accent-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500">{c.label}</p>
                      <p className="truncate text-sm font-medium text-slate-800 dark:text-slate-200">{c.value}</p>
                    </div>
                    {c.href && (
                      <ArrowUpRight className="ml-auto h-4 w-4 flex-shrink-0 text-slate-400 transition-all duration-300 group-hover:text-sky-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-slate-600 dark:group-hover:text-accent-400" />
                    )}
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="reveal block" data-reveal="right" data-reveal-delay={String(ci * 80)}>
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} className="reveal" data-reveal="right" data-reveal-delay={String(ci * 80)}>
                    {inner}
                  </div>
                );
              })}

              {/* Reference */}
              <div className="reveal mt-4 flex items-start gap-4 rounded-xl border border-slate-300 bg-slate-100 p-4 dark:border-slate-700 dark:bg-slate-800/30" data-reveal="right" data-reveal-delay="400">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 transition-transform duration-300 hover:scale-110 hover:animate-wiggle dark:border-cyan-glow/30 dark:bg-cyan-glow/10 dark:text-cyan-glow">
                  <UserCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500">Reference</p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{reference.name}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-500">{reference.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="reveal relative border-t border-slate-300 bg-slate-300/60 dark:border-slate-800 dark:bg-slate-950/60" data-reveal="up">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-slate-600 dark:text-slate-500">
              © 2026 {profile.name}. All Rights Reserved.
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-500 dark:hover:text-accent-400">
              <Github className="h-4 w-4 transition-transform duration-300 hover:scale-110" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-500 dark:hover:text-accent-400">
              <Linkedin className="h-4 w-4 transition-transform duration-300 hover:scale-110" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-500 dark:hover:text-accent-400">
              <Mail className="h-4 w-4 transition-transform duration-300 hover:scale-110" />
            </a>
            <span className="hidden items-center gap-2 text-sm text-slate-600 dark:text-slate-500 sm:flex">
              <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse-glow dark:bg-accent-400" />
              Built with React & Tailwind CSS
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}
