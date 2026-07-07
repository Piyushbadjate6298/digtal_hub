import { clients } from '../../data/siteData';
import SectionTitle from '../common/SectionTitle';

export default function Clients() {
  return (
    <section className="container-pad section-space py-12">
      <SectionTitle center eyebrow="Trusted By Clients" title="Digital teams and growing brands choose SW Digital Hub." />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {clients.map((client) => <div key={client} className="glass rounded-2xl p-5 text-center text-sm font-black text-slate-200">{client}</div>)}
      </div>
    </section>
  );
}
