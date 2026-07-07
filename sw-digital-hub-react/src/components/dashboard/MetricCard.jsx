export default function MetricCard({ label, value, trend }) {
  return (
    <article className="glass rounded-2xl p-5">
      <span className="text-sm text-slate-400">{label}</span>
      <div className="mt-3 flex items-end justify-between gap-4">
        <strong className="text-3xl font-black text-white">{value}</strong>
        <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-black text-cyan">{trend}</span>
      </div>
    </article>
  );
}
