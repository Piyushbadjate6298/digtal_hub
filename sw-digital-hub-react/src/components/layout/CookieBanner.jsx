import { useState } from 'react';
import Button from '../common/Button';

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => localStorage.getItem('sw-cookie-ok') !== 'yes');
  if (!visible) return null;

  return (
    <div className="fixed inset-x-5 bottom-20 z-50 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-navy/95 p-4 shadow-panel backdrop-blur">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-300">We use basic cookies to improve site experience and understand digital audit interest.</p>
        <Button icon={false} onClick={() => { localStorage.setItem('sw-cookie-ok', 'yes'); setVisible(false); }}>Accept</Button>
      </div>
    </div>
  );
}
