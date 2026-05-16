import { Hero } from '@/components/Hero';
import { MenuSection } from '@/components/MenuSection';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { Reservation } from '@/components/Reservation';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <MenuSection />
      <Testimonials />
      <Gallery />
      <Reservation />
      <Footer />
    </>
  );
}
