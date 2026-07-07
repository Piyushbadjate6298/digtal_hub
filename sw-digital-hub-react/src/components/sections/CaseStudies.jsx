import { caseStudies } from '../../data/siteData';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

export default function CaseStudies() {
  return (
    <section className="container-pad section-space">
      <SectionTitle eyebrow="Case Studies" title="Focused improvements across websites, campaigns, and internal tools." />
      <div className="grid gap-5 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <Card key={study.title} className="overflow-hidden">
            <img src={study.image} alt={study.title} className="h-48 w-full object-cover" />
            <div className="p-5">
              <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-black text-cyan">{study.metric}</span>
              <h3 className="mt-4 text-xl font-black text-white">{study.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{study.outcome}</p>
            </div>
          </Card>
        ))}
      </div>
      <Button to="/case-studies" variant="secondary" className="mt-8">View Case Studies</Button>
    </section>
  );
}
