import { CheckCircle2 } from 'lucide-react';
import { diferenciais } from '@/lib/content';
import Section from './ui/Section';
import Reveal from './ui/Reveal';

export default function WhyUs() {
  return (
    <Section eyebrow="Por que a Plaquinhas NFC" title={<>Simples de usar. <span className="font-serif font-normal italic">Pensada</span> para durar.</>}>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-3">
        {diferenciais.map((d, i) => (
          <Reveal key={d.titulo} delay={i * 0.05} className="h-full">
            <div className="group h-full bg-ink-900 p-4 transition sm:p-6 hover:bg-ink-800">
              <CheckCircle2 className="h-5 w-5 text-brand-green transition group-hover:scale-110" strokeWidth={1.8} />
              <h3 className="mt-3 text-sm font-semibold sm:text-base">{d.titulo}</h3>
              <p className="mt-1 text-xs text-mute sm:text-sm">{d.texto}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
