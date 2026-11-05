'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import Button from './ui/Button';

const links = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#modelos', label: 'Modelos' },
  { href: '#demonstracao', label: 'Demonstração' },
  { href: '#faq', label: 'Dúvidas' },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  useMotionValueEvent(scrollY, 'change', (v) => setSolid(v > 24));

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid ? 'border-b border-white/10 bg-ink/70 backdrop-blur-xl' : 'border-b border-transparent'}`}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-4 sm:px-6">
        <a href="#topo" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="relative grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-coral">
            <span className="h-2 w-2 rounded-full bg-ink" />
          </span>
          Plaquinhas NFC
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Seções">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-mute transition hover:text-paper">
              {l.label}
            </a>
          ))}
        </nav>
        <Button href="#orcamento" className="!min-h-10 !px-4 text-xs sm:text-sm">
          Solicitar orçamento
        </Button>
      </div>
    </motion.header>
  );
}
