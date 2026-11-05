import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'whatsapp';
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

const base =
  'group relative inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:scale-[0.98]';

const variants = {
  primary: 'bg-paper text-ink shadow-[0_0_0_1px_rgba(255,255,255,.1),0_10px_40px_-10px_rgba(117,167,255,.6)] hover:shadow-[0_0_0_1px_rgba(255,255,255,.2),0_14px_50px_-8px_rgba(117,167,255,.8)] hover:-translate-y-0.5',
  ghost: 'glass text-paper hover:bg-white/[0.08] hover:-translate-y-0.5',
  whatsapp: 'bg-brand-green text-ink shadow-[0_10px_40px_-12px_rgba(37,211,102,.7)] hover:-translate-y-0.5',
};

export default function Button({ href, children, variant = 'primary', external, className = '', onClick }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}
