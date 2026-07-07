import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import { caseStudies } from '../data/siteData';

export default function CaseStudies() {
  return (
    <>
      <PageHeader eyebrow="Case Studies" title="Realistic digital growth stories with clear challenges, execution, and outcomes." text="A focused look at how SW Digital Hub approaches websites, campaigns, and business software interfaces for measurable improvement." image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80" />
      <section className="container-pad section-space">
        <SectionTitle eyebrow="Results" title="Case studies designed around business clarity and conversion." />
        <div className="grid gap-6">
          {caseStudies.map((study) => (
            <Card key={study.title} className="grid overflow-hidden lg:grid-cols-[.95fr_1.05fr]">
              <img src={study.image} alt={study.title} className="h-72 w-full object-cover lg:h-full" />
              <div className="p-6 lg:p-8">
                <span className="rounded-full bg-cyan/10 px-4 py-2 text-sm font-black text-cyan">{study.metric}</span>
                <h3 className="mt-5 text-2xl font-black text-white">{study.title}</h3>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-white/[0.06] p-5">
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan">Challenge</span>
                    <p className="mt-3 leading-7 text-slate-300">{study.challenge}</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.06] p-5">
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan">Outcome</span>
                    <p className="mt-3 leading-7 text-slate-300">{study.outcome}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
