import Button from '../common/Button';

export default function Modal({ open, title, children, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-ink/80 p-5 backdrop-blur">
      <div className="glass w-full max-w-lg rounded-2xl p-6">
        <h2 className="text-2xl font-black text-white">{title}</h2>
        <div className="mt-4 text-slate-300">{children}</div>
        <Button className="mt-6" variant="secondary" icon={false} onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}
