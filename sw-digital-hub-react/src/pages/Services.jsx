import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import ServiceGrid from '../components/services/ServiceGrid';
import Card from '../components/common/Card';
import { serviceDetails } from '../data/siteData';

export default function Services() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Digital services for brands that want speed, trust, and measurable growth." text="Choose from web development, app UI, branding, SEO, marketing, and business software solutions." image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80" />
      <section className="container-pad section-space">
        <SectionTitle eyebrow="What We Build" title="Service cards for every major digital need." />
        <ServiceGrid />
      </section>
      <section className="container-pad section-space pt-0">
        <SectionTitle eyebrow="Service Details" title="A clear delivery process from strategy to launch." text="Every service is built around a practical workflow so your website, campaign, or software UI has structure before visuals." />
        <div className="grid gap-5 md:grid-cols-3">
          {serviceDetails.map((detail, index) => (
            <Card key={detail.title} className="p-6">
              <span className="mb-5 grid size-12 place-items-center rounded-2xl bg-cyan/10 text-lg font-black text-cyan">0{index + 1}</span>
              <h3 className="text-xl font-black text-white">{detail.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{detail.desc}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
