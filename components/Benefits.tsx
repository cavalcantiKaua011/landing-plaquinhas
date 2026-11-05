'use client';

import { motion } from 'framer-motion';
import { beneficios } from '@/lib/content';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icon';

const cores = ['#F4B400', '#75A7FF', '#25D366', '#E1306C', '#FF7A52', '#A78BFA'];

export default function Benefits() {
  return (
    <Section eyebrow="Resultado" title={<>O que muda no seu <span className="font-serif font-normal italic">balcão.</span></>}>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {beneficios.map((b, i) => (
          <Reveal key={b.titulo} delay={i * 0.05}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glass group relative h-full overflow-hidden rounded-2xl p-4 sm:p-6"
            >
              <span aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-50" style={{ background: cores[i] }} />
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5" style={{ color: cores[i] }}>
                <Icon name={b.icone} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold sm:text-lg">{b.titulo}</h3>
              <p className="mt-1 text-xs text-mute sm:text-sm">{b.texto}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
