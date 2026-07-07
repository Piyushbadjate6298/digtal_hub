import { Mail, MapPin, Phone } from 'lucide-react';
import { brand } from '../../assets/brand';
import ContactForm from '../forms/ContactForm';
import SectionTitle from '../common/SectionTitle';

export default function ContactSection() {
  return (
    <section className="container-pad section-space">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionTitle eyebrow="Contact Section" title="Ready to improve your digital presence?" text="Talk to SW Digital Hub about your website, services, campaign, dashboard, or brand system." />
          <div className="grid gap-3 text-slate-300">
            <span className="flex gap-3"><Mail className="text-cyan" /> {brand.email}</span>
            <span className="flex gap-3"><Phone className="text-cyan" /> {brand.phone}</span>
            <span className="flex gap-3"><MapPin className="text-cyan" /> {brand.location}</span>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
