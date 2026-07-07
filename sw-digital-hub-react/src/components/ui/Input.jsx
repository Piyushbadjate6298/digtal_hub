export default function Input({ className = '', ...props }) {
  return <input className={`focus-ring rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 ${className}`} {...props} />;
}
