import { teamMembers } from '../../data/siteData';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';

export default function Team() {
  return (
    <section className="container-pad section-space">
      <SectionTitle eyebrow="Team" title="Specialists for strategy, design, and growth execution." />
      <div className="grid gap-5 md:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.name} className="overflow-hidden">
            <img src={member.image} alt={member.name} className="h-64 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-black text-white">{member.name}</h3>
              <p className="mt-1 text-cyan">{member.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
