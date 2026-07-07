export default function Select({ children, className = '', ...props }) {
  return <select className={`focus-ring rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white ${className}`} {...props}>{children}</select>;
}
