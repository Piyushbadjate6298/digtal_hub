import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => (
        <div key={item.question || item.title} className="glass rounded-2xl">
          <button className="flex w-full items-center justify-between gap-4 p-5 text-left font-black text-white" onClick={() => setActive(active === index ? -1 : index)}>
            {item.question || item.title}
            <ChevronDown className={`text-cyan transition ${active === index ? 'rotate-180' : ''}`} />
          </button>
          {active === index && <p className="px-5 pb-5 leading-7 text-slate-300">{item.answer || item.desc}</p>}
        </div>
      ))}
    </div>
  );
}
