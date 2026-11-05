'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { Plate } from '@/lib/content';
import { linkWhatsApp } from '@/lib/whatsapp';
import Button from './ui/Button';
import PlateImage from './PlateImage';
import TiltCard from './TiltCard';

export default function PlateModal({ plate, onClose }: { plate: Plate | null; onClose: () => void }) {
  const fechar = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!plate) return;
    const anterior = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    fechar.current?.focus();
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', esc);
      anterior?.focus();
    };
  }, [plate, onClose]);

  return (
    <AnimatePresence>
      {plate && (
        <motion.div className="fixed inset-0 z-[60] grid place-items-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button aria-label="Fechar" className="absolute inset-0 bg-ink/80 backdrop-blur-md" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-titulo"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="glass relative grid max-h-[92vh] w-full max-w-3xl gap-8 overflow-y-auto rounded-3xl bg-ink-800/80 p-6 md:grid-cols-[1.1fr_1fr] md:p-8"
          >
            <button ref={fechar} onClick={onClose} aria-label="Fechar" className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20">
              <X className="h-5 w-5" />
            </button>
            <TiltCard glow={plate.cor} max={10}>
              <PlateImage plate={plate} sizes="(max-width: 768px) 90vw, 420px" priority />
            </TiltCard>
            <div className="flex flex-col justify-center">
              <p className="eyebrow">{plate.destino}</p>
              <h3 id="modal-titulo" className="mt-2 text-3xl font-semibold tracking-tight">{plate.nome}</h3>
              <p className="mt-3 text-mute">{plate.uso}</p>
              <ul className="mt-6 space-y-2 text-sm text-paper/90">
                <li>• NFC e QR Code na mesma placa</li>
                <li>• Funciona sem aplicativo</li>
                <li>• Destino ajustável sem reimprimir</li>
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <Button href="#orcamento" className="w-full" onClick={onClose}>
                  Quero esta placa
                </Button>
                <Button href={linkWhatsApp(`Oi! Tenho interesse na plaquinha ${plate.nome}.`)} variant="ghost" external className="w-full">
                  Perguntar no WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
