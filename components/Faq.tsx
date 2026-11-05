'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { faq } from '@/lib/content';
import Section from './ui/Section';

export default function Faq() {
  const [aberta, setAberta] = useState<number | null>(0);
  return (
    <Section id="faq" eyebrow="Dúvidas" title="Perguntas frequentes">
      <div className="mx-auto max-w-3xl divide-y divide-white/10 border-y border-white/10">
        {faq.map((f, i) => {
          const on = aberta === i;
          return (
            <div key={f.p}>
              <button
                className="flex min-h-14 w-full items-center justify-between gap-6 py-5 text-left font-medium transition hover:text-paper"
                aria-expanded={on}
                aria-controls={`faq-${i}`}
                onClick={() => setAberta(on ? null : i)}
              >
                {f.p}
                <motion.span animate={{ rotate: on ? 45 : 0 }} className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/5">
                  <Plus className="h-4 w-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {on && (
                  <motion.div
                    id={`faq-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 pr-12 text-mute">{f.r}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
