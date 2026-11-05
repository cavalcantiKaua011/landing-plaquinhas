'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { ctaFinal, plates } from '@/lib/content';
import { linkWhatsApp } from '@/lib/whatsapp';
import Reveal from './ui/Reveal';
import Button from './ui/Button';

/** O pedido de orçamento monta a mensagem e abre o WhatsApp. Nenhum dado é guardado pela página. */
export default function FinalCta() {
  const [erro, setErro] = useState('');

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const nome = String(d.get('nome') || '').trim();
    const empresa = String(d.get('empresa') || '').trim();
    if (!nome || !empresa) {
      setErro('Preencha seu nome e o nome da empresa.');
      return;
    }
    setErro('');
    const modelos = d.getAll('modelo').map(String);
    const msg = [
      'Oi! Quero um orçamento das Plaquinhas NFC.',
      `Nome: ${nome}`,
      `Empresa: ${empresa}`,
      `Modelos: ${modelos.length ? modelos.join(', ') : 'ainda não sei'}`,
      `Quantidade: ${d.get('quantidade') || 'a definir'}`,
    ].join('\n');
    window.open(linkWhatsApp(msg), '_blank', 'noopener,noreferrer');
  }

  const campo = 'min-h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-paper placeholder:text-mute/70 outline-none transition focus:border-brand-blue focus:bg-white/[0.07]';

  return (
    <section id="orcamento" className="relative scroll-mt-20 overflow-hidden px-4 py-14 sm:px-6 md:py-20">
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(117,167,255,.2),rgba(225,48,108,.08),transparent)]" />
      <div className="relative mx-auto grid max-w-page items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            {ctaFinal.titulo.replace('avaliações.', '')}
            <span className="font-serif font-normal italic">avaliações.</span>
          </h2>
          <p className="mt-5 text-lg text-mute">{ctaFinal.texto}</p>
          <div className="mt-8">
            <Button href={linkWhatsApp()} variant="whatsapp" external>
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={enviar} noValidate className="glass space-y-4 rounded-3xl p-6 md:p-8">
            <p className="text-lg font-semibold">Solicitar orçamento</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1.5 text-xs text-mute">
                Seu nome
                <input name="nome" autoComplete="name" required className={campo} placeholder="Como podemos te chamar" />
              </label>
              <label className="space-y-1.5 text-xs text-mute">
                Empresa
                <input name="empresa" autoComplete="organization" required className={campo} placeholder="Nome do negócio" />
              </label>
            </div>
            <fieldset>
              <legend className="mb-2 text-xs text-mute">Modelos de interesse</legend>
              <div className="flex flex-wrap gap-2">
                {plates.map((p) => (
                  <label key={p.id} className="cursor-pointer">
                    <input type="checkbox" name="modelo" value={p.nome} className="peer sr-only" />
                    <span className="inline-flex min-h-9 items-center rounded-full border border-white/10 px-3 text-xs text-mute transition peer-checked:border-brand-blue peer-checked:bg-brand-blue/15 peer-checked:text-paper peer-focus-visible:ring-2 peer-focus-visible:ring-brand-blue">
                      {p.nome}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="block space-y-1.5 text-xs text-mute">
              Quantidade
              <select name="quantidade" className={campo} defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>
                <option>1 unidade</option>
                <option>2 a 5 unidades</option>
                <option>6 a 20 unidades</option>
                <option>Mais de 20 unidades</option>
              </select>
            </label>
            {erro && (
              <p role="alert" className="text-sm text-brand-coral">
                {erro}
              </p>
            )}
            <button type="submit" className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-paper text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-[0_14px_50px_-8px_rgba(117,167,255,.8)] active:scale-[0.98]">
              Solicitar orçamento <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <p className="text-center text-[11px] text-mute">Abre o WhatsApp com a mensagem pronta. Nada é salvo nesta página.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
