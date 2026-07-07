export default function Pagination({ pages = 3, active = 1 }) {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: pages }).map((_, index) => (
        <button key={index} className={`grid size-10 place-items-center rounded-xl text-sm font-black ${active === index + 1 ? 'bg-cyan text-ink' : 'bg-white/10 text-slate-200'}`}>{index + 1}</button>
      ))}
    </div>
  );
}
