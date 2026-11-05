import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, intro, children, className = '' }: Props) {
  return (
    <section id={id} className={`relative scroll-mt-20 px-4 py-14 sm:px-6 md:py-20 ${className}`}>
      <div className="mx-auto max-w-page">
        {(eyebrow || title) && (
          <Reveal className="mb-8 max-w-2xl md:mb-12">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {title && <h2 className="h2">{title}</h2>}
            {intro && <p className="mt-4 text-base text-mute md:text-lg">{intro}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
