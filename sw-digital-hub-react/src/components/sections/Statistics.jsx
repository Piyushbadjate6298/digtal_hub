import { stats } from '../../data/siteData';

export default function Statistics() {
  return (
    <section className="container-pad section-space py-12">
      <div className="glass grid gap-4 rounded-2xl p-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl bg-white/[0.05] p-5 text-center">
            <strong className="block text-3xl font-black text-cyan">{stat.value}</strong>
            <span className="mt-1 block text-sm text-slate-300">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
