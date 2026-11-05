import { contato } from './content';

export function linkWhatsApp(mensagem: string = contato.mensagemPadrao) {
  return `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
