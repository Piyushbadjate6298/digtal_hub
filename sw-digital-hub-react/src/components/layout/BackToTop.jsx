import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  return (
    <button className="fixed bottom-6 right-5 z-50 grid size-12 place-items-center rounded-full border border-white/10 bg-white/10 text-cyan shadow-panel backdrop-blur transition hover:-translate-y-1" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
      <ArrowUp />
    </button>
  );
}
