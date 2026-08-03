import { ArrowUpRight, FlaskConical, Github, ExternalLink, Star, ShoppingBag } from 'lucide-react';
import { Section } from '@/components/Section';
import { projects, type Project } from '@/data/portfolio';

type CardProps = {
  project: Project;
  index: number;
  variant: 'left' | 'right' | 'wide';
  categoryLabel?: string;
  CategoryIcon?: typeof FlaskConical;
};

function ProjectCard({ project, index, variant, categoryLabel, CategoryIcon }: CardProps) {
  const isLink = Boolean(project.liveUrl);
  const delay = String(index * 120);

  const Wrapper = isLink ? 'a' : 'article';
  const wrapperProps = isLink
    ? {
        href: project.liveUrl,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  const statusIcon = project.statusType === 'research' ? FlaskConical : Star;

  return (
    <Wrapper
      {...wrapperProps}
      className={`glass-card reveal group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:focus-visible:ring-accent-500 ${
        variant === 'wide' ? 'lg:flex-row' : ''
      }`}
      data-reveal={variant === 'right' ? 'right' : variant === 'wide' ? 'scale' : 'left'}
      data-reveal-delay={delay}
    >
      {/* Image area */}
      <div className={`relative overflow-hidden bg-slate-200 dark:bg-slate-800/60 ${variant === 'wide' ? 'lg:w-[55%]' : ''}`}>
        <img
          src={project.image}
          alt={project.title}
          className={`w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06] ${variant === 'wide' ? 'h-56 lg:h-full' : 'h-56 sm:h-64'}`}
        />
        {/* Hover overlay (only for link cards) */}
        {isLink && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 dark:bg-slate-950/60">
            <span className="flex items-center gap-2 rounded-xl border border-sky-500/60 bg-sky-500/20 px-5 py-2.5 text-sm font-semibold text-sky-700 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 dark:border-accent-500/60 dark:bg-accent-500/20 dark:text-accent-300">
              <ExternalLink className="h-4 w-4" />
              Visit Live Project
            </span>
          </div>
        )}
        {/* Status badges */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/50 bg-slate-50/80 px-3 py-1 text-xs font-mono uppercase tracking-wider text-sky-700 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 dark:bg-slate-950/80 dark:text-accent-300">
            {(() => {
              const Icon = statusIcon;
              return <Icon className="h-3 w-3" />;
            })()}
            {project.status}
          </span>
          {categoryLabel && CategoryIcon && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/50 bg-slate-50/80 px-3 py-1 text-xs font-mono uppercase tracking-wider text-cyan-700 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 dark:border-cyan-glow/50 dark:bg-slate-950/80 dark:text-cyan-glow">
              <CategoryIcon className="h-3 w-3" />
              {categoryLabel}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className={`flex flex-1 flex-col p-6 ${variant === 'wide' ? 'lg:p-8' : ''}`}>
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className={`flex-1 font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-sky-600 dark:text-white dark:group-hover:text-accent-300 ${variant === 'wide' ? 'text-xl sm:text-2xl' : 'text-lg'}`}>
            {project.title}
          </h3>
          <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-500 dark:text-slate-600 dark:group-hover:text-accent-400" />
        </div>
        <p className={`flex-1 leading-relaxed text-slate-700 dark:text-slate-400 ${variant === 'wide' ? 'text-base' : 'text-sm'}`}>
          {project.description}
        </p>

        {/* Link row */}
        {project.liveUrl && (
          <div className="mt-5 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700 transition-all duration-200 group-hover:scale-105 group-hover:bg-sky-100 dark:border-accent-500/40 dark:bg-accent-500/10 dark:text-accent-300">
              <ExternalLink className="h-3.5 w-3.5" />
              {project.liveUrl.replace('https://', '').replace(/\/$/, '')}
            </span>
            {project.githubUrl && (
              <span
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-all duration-200 hover:scale-105 hover:border-sky-500/40 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:border-accent-500/40 dark:hover:text-accent-300"
              >
                <Github className="h-3.5 w-3.5" />
                Source Code
              </span>
            )}
          </div>
        )}

        {/* Caption strip (research only) */}
        {project.imageCaption && (
          <div className="mt-4 border-t border-slate-300 pt-3 dark:border-slate-800">
            <p className="font-mono text-xs text-slate-500 dark:text-slate-500">{project.imageCaption}</p>
          </div>
        )}

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, ti) => (
            <span
              key={tag}
              className="chip"
              style={{ transitionDelay: `${ti * 50}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export function Projects() {
  const research = projects.find((p) => p.featured);
  const ecommerce = projects.find((p) => p.liveUrl && p.statusType === 'featured' && p.title.includes('Tech Store'));
  const nextKit = projects.find((p) => p.title.includes('NextKit'));

  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Projects & research"
      description="Applied NLP research and full-stack production software — from Bengali text classification to AI-powered e-commerce."
    >
      {/* Top row: 2 cards side by side */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {research && (
          <ProjectCard
            project={research}
            index={0}
            variant="left"
            categoryLabel="Machine Learning & NLP"
            CategoryIcon={FlaskConical}
          />
        )}
        {ecommerce && (
          <ProjectCard
            project={ecommerce}
            index={1}
            variant="right"
            categoryLabel="Full-Stack & AI"
            CategoryIcon={ShoppingBag}
          />
        )}
      </div>

      {/* Bottom: NextKit full-width featured card */}
      {nextKit && (
        <div className="mt-6">
          <ProjectCard
            project={nextKit}
            index={2}
            variant="wide"
            categoryLabel="E-Commerce"
            CategoryIcon={ShoppingBag}
          />
        </div>
      )}
    </Section>
  );
}
