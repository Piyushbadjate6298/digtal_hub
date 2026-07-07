import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { navLinks } from '../../data/siteData';
import { brand } from '../../assets/brand';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="container-pad grid gap-10 py-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <Link to="/" className="mb-5 flex items-center gap-3 font-black text-white">
            <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan to-violet text-ink">SW</span>
            SW Digital Hub
          </Link>
          <p className="max-w-md leading-7 text-slate-300">Premium websites, branding, marketing assets, portfolio systems, and business software interfaces for growing companies.</p>
        </div>
        <div>
          <h3 className="mb-4 text-base font-black text-white">Explore</h3>
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
            {navLinks.map((link) => <Link key={link.path} to={link.path} className="hover:text-cyan">{link.label}</Link>)}
            <Link to="/free-audit" className="hover:text-cyan">Free Audit</Link>
            <Link to="/privacy-policy" className="hover:text-cyan">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cyan">Terms</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-base font-black text-white">Contact</h3>
          <div className="grid gap-3 text-sm text-slate-300">
            <span className="flex gap-3"><Mail size={18} className="text-cyan" /> {brand.email}</span>
            <span className="flex gap-3"><Phone size={18} className="text-cyan" /> {brand.phone}</span>
            <span className="flex gap-3"><MapPin size={18} className="text-cyan" /> {brand.location}</span>
          </div>
          <div className="mt-5 flex gap-3">
            {[FaLinkedinIn, FaInstagram, FaFacebookF].map((Icon, index) => (
              <span key={index} className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/10 text-cyan">
                <Icon />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="container-pad border-t border-white/10 py-5 text-sm text-slate-400">© 2026 SW Digital Hub. All rights reserved.</div>
    </footer>
  );
}
