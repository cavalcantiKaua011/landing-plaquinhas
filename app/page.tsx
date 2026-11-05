import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Showcase from '@/components/Showcase';
import Benefits from '@/components/Benefits';
import Demo from '@/components/Demo';
import Quality from '@/components/Quality';
import WhyUs from '@/components/WhyUs';
import SocialProof from '@/components/SocialProof';
import Faq from '@/components/Faq';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <HowItWorks />
        <Showcase />
        <Benefits />
        <Demo />
        <Quality />
        <WhyUs />
        <SocialProof />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
