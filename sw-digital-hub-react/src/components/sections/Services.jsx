import SectionTitle from '../common/SectionTitle';
import ServiceGrid from '../services/ServiceGrid';
import Button from '../common/Button';

export default function Services() {
  return (
    <section className="container-pad section-space">
      <SectionTitle eyebrow="Our Services" title="Full-stack style frontend services for business growth." text="From website development to SEO and business software UI, each service is built around clarity and conversion." />
      <ServiceGrid limit={4} />
      <Button to="/services" variant="secondary" className="mt-8">Explore All Services</Button>
    </section>
  );
}
