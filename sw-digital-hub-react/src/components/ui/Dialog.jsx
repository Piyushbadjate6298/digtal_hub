export default function Dialog({ title, children }) {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-xl font-black text-white">{title}</h3>
      <div className="mt-3 leading-7 text-slate-300">{children}</div>
    </div>
  );
}
