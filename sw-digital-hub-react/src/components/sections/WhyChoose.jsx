import { whyChoose } from '../../data/siteData';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';

export default function WhyChoose() {
  return (
    <section className="container-pad section-space">
      <SectionTitle center eyebrow="Why Choose SW Digital Hub" title="Strategy, design, and delivery under one focused digital system." />
      <div className="grid gap-5 md:grid-cols-3">
        {whyChoose.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="p-6">
            <Icon className="mb-5 text-cyan" size={34} />
            <h3 className="text-xl font-black text-white">{title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
