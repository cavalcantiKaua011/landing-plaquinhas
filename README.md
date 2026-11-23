# Landing · Plaquinhas NFC

Página de venda das **Plaquinhas NFC** da KR Code Soluções: o cliente do balcão aproxima o celular (ou lê o QR Code) e cai direto na avaliação do Google, no Instagram ou no WhatsApp do negócio.

**No ar:** [landing-plaquinhas.vercel.app](https://landing-plaquinhas.vercel.app) · **Sistema de gestão:** [placas-NFC](https://github.com/cavalcantiKaua011/placas-NFC)

## O que tem aqui
- Apresentação do produto, modelos de arte e como funciona a aproximação.
- Orçamento que monta a mensagem e abre o WhatsApp. Nenhum dado é salvo.
- Conteúdo inteiro em um arquivo (`lib/content.ts`), para trocar texto sem mexer em componente.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Vercel. Página estática, sem backend.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Onde mexer
- Todo o texto, as artes e o WhatsApp ficam em `lib/content.ts`.
- As artes ficam em `public/plaquinhas/` (webp, 800 px). Os originais continuam em `instagram/producao/ativos/plaquinhas/`.
- O formulário de orçamento só monta a mensagem e abre o WhatsApp (`lib/whatsapp.ts`). Nada é salvo.
- Para adicionar depoimentos reais (com autorização), preencha `provaSocial.depoimentos` em `content.ts`. O bloco aparece sozinho.

## Confirmar antes de publicar (busque por CONFIRMAR em content.ts)
1. ~~Material~~ confirmado em 5/11: PS de 2 mm, impressão HD UV, recorte.
2. ~~Prazo~~ resolvido: "informado depois da aprovação da arte".
3. ~~Troca de destino~~ confirmada: o sistema placas-NFC redireciona por /r/CODIGO.
4. Prova social: hoje diz "Estamos abrindo as primeiras parcerias". Só troque para "Primeiras empresas já estão utilizando" se for verdade.
5. Título com "clientes satisfeitos": o Google proíbe pedir avaliação só para quem gostou. Alternativa: "Transforme atendimentos em avaliações reais."
6. A venda das placas ainda não foi confirmada como disponível.
7. Domínio: defina `metadataBase` em `app/layout.tsx` ao publicar.

Sem números de vendas, clientes ou resultados. Não há dados para isso.
