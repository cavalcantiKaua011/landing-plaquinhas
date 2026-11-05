'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { linkWhatsApp } from '@/lib/whatsapp';

export default function WhatsAppFloat() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, 'change', (v) => setShow(v > 600));

  return (
    <motion.a
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={false}
      animate={{ scale: show ? 1 : 0, opacity: show ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-brand-green text-ink shadow-[0_10px_40px_-8px_rgba(37,211,102,.8)]"
      style={{ pointerEvents: show ? 'auto' : 'none' }}
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}
