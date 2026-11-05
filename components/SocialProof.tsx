import { Quote } from 'lucide-react';
import { provaSocial } from '@/lib/content';
import Reveal from './ui/Reveal';

/** Sem números nem clientes inventados. Os depoimentos aparecem quando forem preenchidos em content.ts. */
export default function SocialProof() {
  const { depoimentos } = provaSocial;
  return (
    <section className="px-4 py-8 sm:px-6 md:py-12">
      <div className="mx-auto max-w-page">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-8 text-center md:p-12">
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(117,167,255,.15),transparent_60%)]" />
            <Quote className="relative mx-auto h-8 w-8 text-brand-blue" />
            <p className="relative mx-auto mt-5 max-w-2xl text-xl font-medium leading-snug md:text-2xl">{provaSocial.texto}</p>
          </div>
        </Reveal>
        {depoimentos.length > 0 && (
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {depoimentos.map((d) => (
              <Reveal key={d.nome}>
                <figure className="glass h-full rounded-2xl p-6">
                  <blockquote className="text-sm text-paper/90">“{d.texto}”</blockquote>
                  <figcaption className="mt-4 text-xs text-mute">
                    {d.nome}, {d.empresa}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
