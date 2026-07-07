import { useState } from 'react';

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-2">
        {tabs.map((tab, index) => (
          <button key={tab.label} className={`rounded-full px-4 py-2 text-sm font-bold ${active === index ? 'bg-cyan text-ink' : 'bg-white/10 text-slate-200'}`} onClick={() => setActive(index)}>{tab.label}</button>
        ))}
      </div>
      <div className="glass rounded-2xl p-6 text-slate-300">{tabs[active]?.content}</div>
    </div>
  );
}
