export default function Toast({ message = 'Saved successfully' }) {
  return <div className="fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 rounded-full bg-cyan px-5 py-3 text-sm font-black text-ink shadow-glow">{message}</div>;
}
