'use client';

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import type { ReactNode, PointerEvent } from 'react';

type Props = {
  children: ReactNode;
  glow?: string;
  max?: number;
  className?: string;
  onClick?: () => void;
  label?: string;
};

/** Cartão com inclinação 3D, reflexo e brilho que seguem o ponteiro. */
export default function TiltCard({ children, glow = '#75A7FF', max = 14, className = '', onClick, label }: Props) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 180, damping: 18, mass: 0.4 };
  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,.35), transparent 55%)`;

  function move(e: PointerEvent<HTMLElement>) {
    if (reduce || e.pointerType === 'touch') return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }
  function leave() {
    px.set(0.5);
    py.set(0.5);
  }

  const Tag = onClick ? motion.button : motion.div;

  return (
    <Tag
      type={onClick ? 'button' : undefined}
      aria-label={label}
      onClick={onClick}
      onPointerMove={move}
      onPointerLeave={leave}
      whileHover={reduce ? undefined : { scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900, transformStyle: 'preserve-3d' }}
      className={`group relative block w-full cursor-pointer rounded-[22px] text-left outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${className}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] opacity-0 blur-3xl transition duration-500 group-hover:opacity-60"
        style={{ background: glow }}
      />
      {children}
      <motion.span aria-hidden className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100" style={{ background: glare }} />
    </Tag>
  );
}
