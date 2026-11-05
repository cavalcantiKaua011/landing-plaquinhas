'use client';

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import type { PointerEvent } from 'react';
import { hero, plates } from '@/lib/content';
import Button from './ui/Button';
import PlateImage from './PlateImage';

// Posição (%), tamanho (% da largura), profundidade e giro de cada placa na composição.
const layout = [
  { x: 36, y: 22, w: 34, z: 1.0, r: -6 },
  { x: 2, y: 8, w: 26, z: 0.6, r: -14 },
  { x: 70, y: 4, w: 27, z: 0.7, r: 10 },
  { x: 4, y: 56, w: 27, z: 0.75, r: 8 },
  { x: 70, y: 52, w: 28, z: 0.8, r: -9 },
  { x: 38, y: 72, w: 22, z: 0.45, r: 4 },
];

function FloatingPlate({ i, mx, my }: { i: number; mx: MotionValue<number>; my: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const l = layout[i];
  const p = plates[i];
  const s = { stiffness: 60, damping: 16 };
  const x = useSpring(useTransform(mx, [-1, 1], [-26 * l.z, 26 * l.z]), s);
  const y = useSpring(useTransform(my, [-1, 1], [-20 * l.z, 20 * l.z]), s);
  const rotY = useSpring(useTransform(mx, [-1, 1], [-14, 14]), s);
  const rotX = useSpring(useTransform(my, [-1, 1], [12, -12]), s);

  return (
    <motion.div
      className="absolute"
      style={{ left: `${l.x}%`, top: `${l.y}%`, width: `${l.w}%`, x, y, zIndex: Math.round(l.z * 10), filter: l.z < 0.6 ? 'blur(1px)' : undefined }}
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.25 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -10 - 6 * l.z, 0] }}
        transition={{ duration: 5 + i * 0.7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ rotateX: rotX, rotateY: rotY, rotate: l.r, transformPerspective: 1000 }}
        className="relative"
      >
        <span aria-hidden className="absolute -inset-4 -z-10 rounded-[36px] opacity-40 blur-2xl" style={{ background: p.cor }} />
        <PlateImage plate={p} sizes="(max-width: 768px) 40vw, 260px" priority={i < 3} />
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[22px] bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60" />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  function move(e: PointerEvent<HTMLElement>) {
    if (e.pointerType === 'touch') return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  }

  return (
    <section id="topo" onPointerMove={move} className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-36">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div aria-hidden className="absolute left-1/2 top-[-10%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(117,167,255,.25),transparent)]" />
      <div aria-hidden className="absolute bottom-0 right-[-10%] h-[420px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(255,122,82,.18),transparent)]" />

      <div className="relative mx-auto grid max-w-page items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-mute">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
            </span>
            {hero.selo}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.2rem]"
          >
            {hero.titulo.replace('avaliações reais.', '')}
            <span className="font-serif font-normal italic tracking-normal bg-gradient-to-r from-[#75A7FF] via-[#E1306C] to-[#FF7A52] bg-clip-text pr-1 text-transparent">avaliações reais.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-6 max-w-xl text-lg text-mute">
            {hero.subtitulo}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#orcamento">
              Solicitar orçamento <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Button>
            <Button href="#demonstracao" variant="ghost">
              <Play className="h-4 w-4" /> Ver demonstração
            </Button>
          </motion.div>
          <p className="mt-6 text-xs text-mute">Sem aplicativo. Funciona com NFC ou câmera.</p>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[560px]" aria-label="As seis artes das Plaquinhas NFC" role="img">
          {plates.map((_, i) => (
            <FloatingPlate key={plates[i].id} i={i} mx={mx} my={my} />
          ))}
        </div>
      </div>
    </section>
  );
}
