'use client';

import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { plates } from '@/lib/content';
import Section from './ui/Section';

// 0: celular longe | 1: aproxima | 2: leitura NFC | 3: tela de avaliação
const etapas = ['Cliente pega o celular', 'Aproxima da placa', 'Leitura NFC', 'Avaliação aberta'];
const duracao = [1300, 1100, 1100, 2600];

export default function Demo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-100px' });
  const reduce = useReducedMotion();
  const [etapa, setEtapa] = useState(reduce ? 3 : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const t = setTimeout(() => setEtapa((e) => (e + 1) % 4), duracao[etapa]);
    return () => clearTimeout(t);
  }, [etapa, inView, reduce]);

  const perto = etapa >= 1;
  const plate = plates[0];

  return (
    <Section id="demonstracao" eyebrow="Demonstração" title={<>Veja o <span className="font-serif font-normal italic">toque</span> acontecer.</>} intro="Sem aplicativo, sem busca. O celular lê a placa e abre a avaliação.">
      <div ref={ref} className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10">
        <div aria-hidden className="grid-bg absolute inset-0 opacity-60" />
        <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div className="relative mx-auto flex h-[300px] w-full max-w-[520px] items-center justify-center sm:h-[420px]">
            {/* Placa */}
            <div className="absolute left-0 top-1/2 w-[46%] -translate-y-1/2 sm:w-[44%]">
              <div className="relative">
                <span aria-hidden className="absolute -inset-6 -z-10 rounded-[40px] opacity-40 blur-3xl" style={{ background: plate.cor }} />
                <div className="relative aspect-square overflow-hidden rounded-[20px] shadow-2xl ring-1 ring-white/10">
                  <Image src={plate.src} alt="Plaquinha Google Azul" fill sizes="240px" className="object-cover" />
                </div>
                {/* Ondas NFC sobre o ícone da placa */}
                {etapa === 2 && (
                  <span aria-hidden className="absolute left-[19%] top-[73%] h-16 w-16 -translate-x-1/2 -translate-y-1/2">
                    {[0, 0.35, 0.7].map((d) => (
                      <span key={d} className="absolute inset-0 animate-pulseRing rounded-full border-2 border-brand-blue" style={{ animationDelay: `${d}s` }} />
                    ))}
                  </span>
                )}
              </div>
            </div>

            {/* Celular */}
            <motion.div
              className="absolute top-1/2 w-[34%] max-w-[180px]"
              animate={{ left: perto ? '27%' : '60%', y: '-50%', rotate: perto ? -8 : 4, scale: perto ? 0.96 : 1 }}
              transition={{ type: 'spring', stiffness: 70, damping: 16 }}
            >
              <div className="relative aspect-[9/19] rounded-[34px] border border-white/20 bg-ink-900 p-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,.9)]">
                <div className="absolute left-1/2 top-3 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
                <div className="relative h-full overflow-hidden rounded-[26px] bg-gradient-to-b from-ink-700 to-ink-900">
                  <AnimatePresence mode="wait">
                    {etapa < 3 ? (
                      <motion.div key="lock" className="flex h-full flex-col items-center justify-center gap-2 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <p className="text-3xl font-semibold">19:30</p>
                        <p className="text-[10px] text-mute">{etapa === 2 ? 'Lendo NFC...' : 'Aproxime da placa'}</p>
                      </motion.div>
                    ) : (
                      <motion.div key="review" className="flex h-full flex-col bg-white p-3 text-ink" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <p className="text-[11px] font-semibold">Avaliar empresa</p>
                        <p className="text-[9px] text-neutral-500">Publicar no Google</p>
                        <div className="mt-6 flex justify-center gap-1">
                          {[0, 1, 2, 3, 4].map((s) => (
                            <motion.span key={s} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 + s * 0.12, type: 'spring', stiffness: 400 }}>
                              <Star className="h-5 w-5 fill-[#F4B400] text-[#F4B400]" />
                            </motion.span>
                          ))}
                        </div>
                        <div className="mt-5 space-y-1.5">
                          <div className="h-2 w-full rounded bg-neutral-200" />
                          <div className="h-2 w-4/5 rounded bg-neutral-200" />
                          <div className="h-2 w-3/5 rounded bg-neutral-200" />
                        </div>
                        <div className="mt-auto rounded-full bg-[#1A73E8] py-2 text-center text-[10px] font-semibold text-white">Publicar</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Etapas */}
          <ol className="flex gap-2 md:flex-col md:gap-3" aria-live="polite">
            {etapas.map((e, i) => (
              <li key={e} className={`flex flex-1 items-center gap-3 rounded-xl px-3 py-2 text-xs transition md:text-sm ${i === etapa ? 'bg-white/10 text-paper' : 'text-mute'}`}>
                <span className={`h-2 w-2 shrink-0 rounded-full transition ${i <= etapa ? 'bg-brand-blue' : 'bg-white/20'}`} />
                <span className="hidden sm:inline">{e}</span>
              </li>
            ))}
          </ol>
        </div>
        <p className="relative mt-6 text-center text-xs text-mute md:text-left">Sem NFC no celular? A câmera lê o QR Code da mesma placa.</p>
      </div>
    </Section>
  );
}
