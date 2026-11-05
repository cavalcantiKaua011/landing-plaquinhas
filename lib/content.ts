/**
 * Todo o texto e os dados da página ficam aqui.
 * Itens marcados com CONFIRMAR dependem de informação real antes de ir ao ar.
 */

export const contato = {
  // Número usado no perfil @cavalcanti.dev
  whatsapp: '5511966245235',
  mensagemPadrao: 'Oi! Vi a página das Plaquinhas NFC e quero saber mais.',
};

export type Plate = {
  id: string;
  nome: string;
  destino: 'Google' | 'Instagram' | 'WhatsApp';
  estilo: string;
  src: string;
  cor: string; // brilho da vitrine
  uso: string;
};

export const plates: Plate[] = [
  { id: 'google-azul', nome: 'Google Azul', destino: 'Google', estilo: 'Azul', src: '/plaquinhas/google-azul.webp', cor: '#4C8DFF', uso: 'Abre direto a página de avaliação da sua empresa no Google.' },
  { id: 'google-preta', nome: 'Google Preto', destino: 'Google', estilo: 'Preto', src: '/plaquinhas/google-preta.webp', cor: '#F4B400', uso: 'A mesma função, com acabamento escuro para balcões sóbrios.' },
  { id: 'instagram-gradiente', nome: 'Instagram Colorido', destino: 'Instagram', estilo: 'Colorido', src: '/plaquinhas/instagram-gradiente.webp', cor: '#E1306C', uso: 'Leva ao perfil da empresa para o cliente seguir na hora.' },
  { id: 'instagram-preta', nome: 'Instagram Preto', destino: 'Instagram', estilo: 'Preto', src: '/plaquinhas/instagram-preta.webp', cor: '#C13584', uso: 'Versão escura, com o mesmo atalho para o perfil.' },
  { id: 'whatsapp-verde', nome: 'WhatsApp Verde', destino: 'WhatsApp', estilo: 'Verde', src: '/plaquinhas/whatsapp-verde.webp', cor: '#25D366', uso: 'Abre uma conversa com a empresa, sem salvar número.' },
  { id: 'whatsapp-preta', nome: 'WhatsApp Preto', destino: 'WhatsApp', estilo: 'Preto', src: '/plaquinhas/whatsapp-preta.webp', cor: '#25D366', uso: 'Versão escura para o atendimento pelo WhatsApp.' },
];

export const hero = {
  selo: 'NFC + QR Code na mesma placa',
  // CONFIRMAR: o Google proíbe pedir avaliação só para clientes satisfeitos.
  // A frase fala de satisfeitos como público natural, não como filtro. Alternativa segura:
  // 'Transforme atendimentos em avaliações reais.'
  titulo: 'Transforme clientes satisfeitos em avaliações reais.',
  subtitulo: 'Mais avaliações no Google. Mais confiança. Mais clientes. Tudo com um simples toque.',
};

export const passos = [
  { titulo: 'Atendimento termina', texto: 'O cliente está satisfeito, no balcão.' },
  { titulo: 'Toque ou QR', texto: 'Encosta o celular ou aponta a câmera.' },
  { titulo: 'Avaliação aberta', texto: 'Cai direto na tela de avaliar. Sem busca.' },
  { titulo: 'Mais avaliações', texto: 'Menos atrito, mais gente avaliando.' },
];

export const beneficios = [
  { icone: 'star', titulo: 'Mais avaliações', texto: 'Pedir fica a um toque. Quem gostou avalia na hora.' },
  { icone: 'award', titulo: 'Mais credibilidade', texto: 'Avaliações recentes pesam na escolha de quem pesquisa.' },
  { icone: 'trending', titulo: 'Mais conversões', texto: 'Quem encontra boas avaliações chega mais decidido.' },
  { icone: 'message', titulo: 'Mais interação', texto: 'Instagram e WhatsApp a um toque do cliente.' },
  { icone: 'zap', titulo: 'Mais praticidade', texto: 'Sem aplicativo, sem link para digitar.' },
  { icone: 'target', titulo: 'Mais resultado', texto: 'O momento certo vira ação, ainda no balcão.' },
];

// CONFIRMAR: materiais e acabamento informados pelo time.
export const qualidade = [
  { titulo: 'Acabamento premium', texto: 'Acrílico com acabamento limpo, que fica bem no balcão.' },
  { titulo: 'Impressão HD UV', texto: 'Cores vivas e nítidas, que não desbotam com facilidade.' },
  { titulo: 'QR Code permanente', texto: 'Funciona em qualquer celular com câmera.' },
  { titulo: 'Chip NFC integrado', texto: 'Embutido na placa, sem nada para conectar.' },
  { titulo: 'Feita para o dia a dia', texto: 'Resiste a toques, limpeza e uso constante.' },
];

export const comparativo = [
  { item: 'Chega à tela de avaliação', placa: 'Em 1 toque', verbal: 'Precisa buscar a empresa' },
  { item: 'Depende de lembrar depois', placa: 'Não', verbal: 'Sim' },
  { item: 'Funciona sem a equipe pedir', placa: 'Sim, fica no balcão', verbal: 'Não' },
  { item: 'Mesma experiência sempre', placa: 'Sim', verbal: 'Depende de quem atende' },
];

export const diferenciais = [
  { titulo: 'URL permanente', texto: 'A placa aponta para um endereço que não muda.' },
  { titulo: 'Atualização sem reimpressão', texto: 'Mudou o destino? Ajustamos sem trocar a placa.' },
  { titulo: 'QR + NFC na mesma placa', texto: 'Quem não tem NFC usa a câmera.' },
  { titulo: 'Design profissional', texto: 'Seis artes prontas, pensadas para o balcão.' },
  { titulo: 'Configuração simples', texto: 'Você recebe a placa pronta para usar.' },
  { titulo: 'Suporte rápido', texto: 'Atendimento direto pelo WhatsApp.' },
];

export const provaSocial = {
  // Sem números nem clientes inventados. Quando houver autorização, preencha `depoimentos`.
  // CONFIRMAR antes de trocar o texto para "Primeiras empresas já estão utilizando...": isso precisa ser verdade.
  texto: 'Estamos abrindo as primeiras parcerias. Quer ser uma das primeiras empresas a transformar atendimento em avaliações?',
  depoimentos: [] as { nome: string; empresa: string; texto: string }[],
};

export const faq = [
  { p: 'O cliente precisa instalar aplicativo?', r: 'Não. O NFC abre o link direto no navegador, e o QR Code funciona pela câmera do celular.' },
  { p: 'Funciona em iPhone?', r: 'Sim. iPhones a partir do XR leem NFC sem precisar abrir nada. Em qualquer iPhone, o QR Code funciona pela câmera.' },
  { p: 'Funciona em Android?', r: 'Sim, nos aparelhos com NFC ativado. Se o NFC estiver desligado ou não existir, o QR Code resolve.' },
  { p: 'Posso alterar o destino depois?', r: 'Sim. A placa usa um endereço permanente, e o destino pode ser ajustado sem reimprimir.' },
  { p: 'Posso usar Google ou Instagram?', r: 'Sim. Há artes para Google, Instagram e WhatsApp, cada uma em versão colorida e preta.' },
  // CONFIRMAR: troque pelo prazo real quando estiver definido.
  { p: 'Quanto tempo leva para produzir?', r: 'O prazo é informado no orçamento, de acordo com a quantidade e a personalização.' },
];

export const ctaFinal = {
  titulo: 'Comece a transformar atendimentos em avaliações.',
  texto: 'Conte o que você precisa. A resposta vem pelo WhatsApp.',
};
