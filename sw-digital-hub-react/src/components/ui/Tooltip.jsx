export default function Tooltip({ label, children }) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1 text-xs font-bold text-ink group-hover:block">{label}</span>
    </span>
  );
}
