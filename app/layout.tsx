import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });

export const metadata: Metadata = {
  title: 'Plaquinhas NFC | Avaliações com um toque',
  description: 'Placas com NFC e QR Code que levam o cliente direto para avaliar sua empresa no Google, seguir no Instagram ou falar no WhatsApp.',
  openGraph: {
    title: 'Plaquinhas NFC',
    description: 'Transforme atendimentos em avaliações com um simples toque.',
    images: ['/plaquinhas/google-azul.webp'],
    locale: 'pt_BR',
    type: 'website',
  },
};

export const viewport: Viewport = { themeColor: '#0A0B0F', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${serif.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
