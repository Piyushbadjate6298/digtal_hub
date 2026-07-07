import Blog from '../components/sections/Blog';
import CaseStudies from '../components/sections/CaseStudies';
import Clients from '../components/sections/Clients';
import ContactSection from '../components/sections/ContactSection';
import CTA from '../components/sections/CTA';
import FAQ from '../components/sections/FAQ';
import Hero from '../components/sections/Hero';
import Portfolio from '../components/sections/Portfolio';
import Process from '../components/sections/Process';
import Services from '../components/sections/Services';
import Statistics from '../components/sections/Statistics';
import Testimonials from '../components/home/Testimonials';
import WhyChoose from '../components/sections/WhyChoose';

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <WhyChoose />
      <Process />
      <Statistics />
      <Portfolio />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <CTA />
      <Blog />
      <ContactSection />
    </>
  );
}
