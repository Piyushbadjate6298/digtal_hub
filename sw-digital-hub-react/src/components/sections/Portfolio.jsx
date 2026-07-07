import { projects } from '../../data/siteData';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

export default function Portfolio() {
  return (
    <section className="container-pad section-space">
      <SectionTitle eyebrow="Portfolio" title="Featured website, marketing, and dashboard work." />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.slice(0, 2).map((project) => (
          <Card key={project.title} className="overflow-hidden">
            <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
            <div className="p-6">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan">{project.type}</span>
              <h3 className="mt-2 text-2xl font-black text-white">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{project.desc}</p>
            </div>
          </Card>
        ))}
      </div>
      <Button to="/portfolio" variant="secondary" className="mt-8">View Full Portfolio</Button>
    </section>
  );
}
