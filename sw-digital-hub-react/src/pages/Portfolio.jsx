import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import { projects } from '../data/siteData';

export default function Portfolio() {
  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Selected digital work across websites, campaigns, dashboards, and brand systems." text="Explore polished frontend experiences designed for modern businesses that need clear messaging and strong visual presence." image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80" />
      <section className="container-pad section-space">
        <SectionTitle eyebrow="Featured Portfolio" title="Clean UI, strong messaging, and practical system thinking." />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan">{project.type}</span>
                <h3 className="mt-2 text-2xl font-black text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{project.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
