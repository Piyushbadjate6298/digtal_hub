import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumb() {
  const { pathname } = useLocation();
  if (pathname === '/') return null;
  const label = pathname.split('/').filter(Boolean).map((part) => part.replaceAll('-', ' ')).join(' / ');

  return (
    <div className="container-pad pt-6 text-sm capitalize text-slate-400">
      <Link to="/" className="hover:text-cyan">Home</Link>
      <span className="mx-2">/</span>
      <span className="text-slate-200">{label}</span>
    </div>
  );
}
