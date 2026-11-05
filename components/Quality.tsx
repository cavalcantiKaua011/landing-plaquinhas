'use client';

import { motion } from 'framer-motion';
import { Check, Gem, Nfc, Printer, QrCode, ShieldCheck, X } from 'lucide-react';
import Image from 'next/image';
import { comparativo, plates, qualidade } from '@/lib/content';
import Section from './ui/Section';
import Reveal from './ui/Reveal';

const icones = [Gem, Printer, QrCode, Nfc, ShieldCheck];

export default function Quality() {
  return (
    <Section eyebrow="Qualidade" title={<>Feita para durar no <span className="font-serif font-normal italic">balcão.</span></>}>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[440px]">
            <motion.div
              className="absolute inset-[12%] overflow-hidden rounded-[28px] shadow-[0_50px_100px_-30px_rgba(0,0,0,.9)] ring-1 ring-white/10"
              animate={{ rotateY: [-12, 12, -12], rotateX: [6, -4, 6] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformPerspective: 1000 }}
            >
              <Image src={plates[1].src} alt="Plaquinha Google Preto em detalhe" fill sizes="440px" className="object-cover" />
              <motion.span
                aria-hidden
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-120%', '320%'] }}
                transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
              />
            </motion.div>
            <span aria-hidden className="absolute inset-[20%] -z-10 rounded-full bg-[#F4B400]/20 blur-3xl" />
          </div>
        </Reveal>

        <ul className="grid gap-3">
          {qualidade.map((q, i) => {
            const I = icones[i];
            return (
              <Reveal key={q.titulo} delay={i * 0.06}>
                <li className="glass flex items-start gap-4 rounded-2xl p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-brand-blue">
                    <I className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="font-semibold">{q.titulo}</p>
                    <p className="text-sm text-mute">{q.texto}</p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>

      <Reveal className="mt-10 md:mt-14">
        <div className="glass overflow-hidden rounded-3xl">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-white/10 text-xs font-semibold sm:text-sm">
            <div className="p-4 text-mute sm:p-5">Comparativo</div>
            <div className="bg-brand-blue/10 p-4 text-paper sm:p-5">Plaquinha NFC</div>
            <div className="p-4 text-mute sm:p-5">Pedido verbal</div>
          </div>
          {comparativo.map((c) => (
            <div key={c.item} className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-white/5 text-xs last:border-0 sm:text-sm">
              <div className="p-4 text-paper/90 sm:p-5">{c.item}</div>
              <div className="flex items-start gap-2 bg-brand-blue/[0.06] p-4 text-paper sm:p-5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" /> {c.placa}
              </div>
              <div className="flex items-start gap-2 p-4 text-mute sm:p-5">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-brand-coral" /> {c.verbal}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
