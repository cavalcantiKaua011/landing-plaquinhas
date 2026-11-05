'use client';

import { useState } from 'react';
import { plates, type Plate } from '@/lib/content';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import TiltCard from './TiltCard';
import PlateImage from './PlateImage';
import PlateModal from './PlateModal';

const filtros = ['Todas', 'Google', 'Instagram', 'WhatsApp'] as const;

export default function Showcase() {
  const [filtro, setFiltro] = useState<(typeof filtros)[number]>('Todas');
  const [aberta, setAberta] = useState<Plate | null>(null);
  const lista = plates.filter((p) => filtro === 'Todas' || p.destino === filtro);

  return (
    <Section id="modelos" eyebrow="Vitrine" title={<>Seis artes. Um <span className="font-serif font-normal italic">toque.</span></>} intro="Escolha o destino: avaliação no Google, perfil no Instagram ou conversa no WhatsApp.">
      <div aria-hidden className="absolute inset-x-0 top-1/3 -z-10 mx-auto h-[500px] max-w-3xl rounded-full bg-[radial-gradient(closest-side,rgba(225,48,108,.15),transparent)]" />
      <div role="tablist" aria-label="Filtrar modelos" className="glass mb-8 inline-flex gap-0.5 rounded-full p-1">
        {filtros.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filtro === f}
            onClick={() => setFiltro(f)}
            className={`min-h-9 rounded-full px-3 text-xs sm:px-4 sm:text-sm transition ${filtro === f ? 'bg-paper text-ink' : 'text-mute hover:text-paper'}`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:gap-7 lg:grid-cols-3">
        {lista.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.06}>
            <TiltCard glow={p.cor} onClick={() => setAberta(p)} label={`Ampliar ${p.nome}`}>
              <PlateImage plate={p} sizes="(max-width: 1024px) 45vw, 360px" />
            </TiltCard>
            <div className="mt-3 flex items-baseline justify-between gap-2 px-1 text-sm">
              <p className="font-medium text-paper">{p.nome}</p>
              <p className="hidden text-xs text-mute sm:block">{p.destino}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <PlateModal plate={aberta} onClose={() => setAberta(null)} />
    </Section>
  );
}
