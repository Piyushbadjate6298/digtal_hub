import { Mail, Phone } from 'lucide-react';
import { brand } from '../../assets/brand';

export default function TopBar() {
  return (
    <div className="border-b border-white/10 bg-navy/90">
      <div className="container-pad flex flex-wrap items-center justify-between gap-3 py-2 text-xs font-semibold text-slate-300">
        <span>Free digital audit available for growing businesses</span>
        <div className="flex flex-wrap gap-4">
          <span className="flex items-center gap-2"><Mail size={14} className="text-cyan" /> {brand.email}</span>
          <span className="flex items-center gap-2"><Phone size={14} className="text-cyan" /> {brand.phone}</span>
        </div>
      </div>
    </div>
  );
}
