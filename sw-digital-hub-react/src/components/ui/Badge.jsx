export default function Badge({ children, className = '' }) {
  return <span className={`inline-flex rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan ${className}`}>{children}</span>;
}
