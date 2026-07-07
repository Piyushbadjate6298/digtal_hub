import { processSteps } from '../../data/siteData';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';

export default function Process() {
  return (
    <section className="container-pad section-space">
      <SectionTitle eyebrow="Our Process" title="A practical path from digital audit to launch-ready execution." />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {processSteps.map(({ icon: Icon, title, desc }, index) => (
          <Card key={title} className="p-6">
            <span className="text-sm font-black text-cyan">0{index + 1}</span>
            <Icon className="my-5 text-cyan" size={34} />
            <h3 className="text-xl font-black text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
