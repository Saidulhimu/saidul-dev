import { useEffect, useRef, useState } from 'react';

type CountUpProps = {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export function CountUp({ end, duration = 1600, decimals = 0, prefix = '', suffix = '', className }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(end * eased);
              if (progress < 1) requestAnimationFrame(tick);
              else setCount(end);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
}
