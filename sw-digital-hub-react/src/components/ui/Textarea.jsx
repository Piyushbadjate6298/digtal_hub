export default function Textarea({ className = '', ...props }) {
  return <textarea className={`focus-ring min-h-32 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 ${className}`} {...props} />;
}
