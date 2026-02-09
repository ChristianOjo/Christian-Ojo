import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudy from '@/components/CaseStudy';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <CaseStudy />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
