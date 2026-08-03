import { useEffect } from 'react';

/**
 * Multi-variant scroll reveal.
 *
 * Add `data-reveal="up|left|right|scale|blur|flip"` to any element.
 * Defaults to "up" when no attribute is present.
 * Use `data-reveal-delay="120"` for staggered entrances.
 * Use `data-reveal-stagger` on a parent to auto-stagger its `data-reveal` children.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal], .reveal'));

    // If a parent has data-reveal-stagger, assign incremental delays to children
    document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((parent) => {
      const children = Array.from(parent.querySelectorAll<HTMLElement>('[data-reveal], .reveal'));
      children.forEach((child, i) => {
        if (!child.dataset.revealDelay) child.dataset.revealDelay = String(i * 90);
      });
    });

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay ?? '0';
            el.style.transitionDelay = `${delay}ms`;
            el.style.animationDelay = `${delay}ms`;
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
