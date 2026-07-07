import { stats } from '../../data/siteData';

export default function StatsStrip() {
  return (
    <section className="container-pad -mt-5 relative z-10">
      <div className="glass grid gap-3 rounded-2xl p-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-xl bg-white/[0.04] p-5 text-center">
            <strong className="block text-3xl font-black text-cyan">{item.value}</strong>
            <span className="mt-1 block text-sm text-slate-300">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
