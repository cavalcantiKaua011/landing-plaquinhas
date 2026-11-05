'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Smartphone, Star, Store, TrendingUp } from 'lucide-react';
import { useRef } from 'react';
import { passos } from '@/lib/content';
import Section from './ui/Section';

const icones = [Store, Smartphone, Star, TrendingUp];

export default function HowItWorks() {
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });
  const reduce = useReducedMotion();

  return (
    <Section id="como-funciona" eyebrow="Como funciona" title={<>Do balcão à avaliação em <span className="font-serif font-normal italic">segundos.</span></>}>
      <ol ref={ref} className="relative grid gap-4 md:grid-cols-4 md:gap-6">
        {/* Linha que se preenche entre os passos */}
        <div aria-hidden className="absolute left-7 top-7 h-[calc(100%-56px)] w-px bg-white/10 md:hidden" />
        <div aria-hidden className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-white/10 md:block" />
        <motion.div
          aria-hidden
          className="absolute left-7 top-7 h-[calc(100%-56px)] w-px origin-top bg-gradient-to-b from-brand-blue to-brand-green md:hidden"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: reduce ? 0 : 2.2, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute left-[12%] right-[12%] top-7 hidden h-px origin-left bg-gradient-to-r from-brand-blue to-brand-green md:block"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: reduce ? 0 : 2.2, ease: 'easeInOut' }}
        />
        {passos.map((p, i) => {
          const I = icones[i];
          return (
            <motion.li
              key={p.titulo}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.5 }}
              className="relative flex gap-4 md:flex-col md:items-center md:text-center"
            >
              <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-ink-800 shadow-[0_0_30px_-5px_rgba(117,167,255,.4)]">
                <I className="h-6 w-6 text-paper" strokeWidth={1.7} />
                <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-paper text-[10px] font-bold text-ink">{i + 1}</span>
              </span>
              <div className="pt-1 md:pt-4">
                <h3 className="font-semibold text-paper">{p.titulo}</h3>
                <p className="mt-1 text-sm text-mute">{p.texto}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
