import { NavLink, Outlet } from 'react-router-dom';
import { BarChart3, BookOpen, ClipboardList, Home, LogOut, Users } from 'lucide-react';

const links = [
  { label: 'Overview', path: '', icon: BarChart3 },
  { label: 'Students', path: '', icon: Users },
  { label: 'Courses', path: '', icon: BookOpen },
  { label: 'Tasks', path: '', icon: ClipboardList }
];

export default function DashboardLayout({ role }) {
  return (
    <div className="page-shell min-h-screen lg:grid lg:grid-cols-[280px_1fr]">
      <aside className="border-b border-white/10 bg-navy/90 p-5 lg:min-h-screen lg:border-b-0 lg:border-r">
        <NavLink to="/" className="mb-8 flex items-center gap-3 font-black text-white">
          <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan to-violet text-ink">SW</span>
          {role === 'admin' ? 'Admin Console' : 'Student Portal'}
        </NavLink>
        <nav className="grid gap-2">
          {links.map(({ label, icon: Icon }) => (
            <span key={label} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-white/10">
              <Icon size={18} className="text-cyan" /> {label}
            </span>
          ))}
          <NavLink to="/" className="mt-4 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-white/10">
            <Home size={18} className="text-cyan" /> Website
          </NavLink>
          <NavLink to="/login" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-white/10">
            <LogOut size={18} className="text-cyan" /> Logout
          </NavLink>
        </nav>
      </aside>
      <main className="p-5 sm:p-7 lg:p-10">
        <Outlet />
      </main>
    </div>
  );
}
