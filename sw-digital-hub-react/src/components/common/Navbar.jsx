import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/siteData';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-2xl">
      <div className="container-pad flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 font-black text-white" aria-label="SW Digital Hub home">
          <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan to-violet text-base font-black text-ink shadow-glow">SW</span>
          <span className="hidden text-lg sm:inline">SW Digital Hub</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-white/10 text-cyan' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button className="focus-ring inline-flex rounded-xl p-2 text-white lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="container-pad pb-5 lg:hidden">
          <nav className="glass grid gap-2 rounded-2xl p-3">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10">
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
