import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const variants = {
  primary: 'bg-gradient-to-r from-cyan to-violet text-ink shadow-glow hover:-translate-y-0.5',
  secondary: 'border border-white/15 bg-white/10 text-white hover:border-cyan/60 hover:bg-white/15',
  ghost: 'text-slate-200 hover:bg-white/10'
};

export default function Button({ children, to, href, variant = 'primary', className = '', icon = true, ...props }) {
  const classes = `focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight size={17} />}
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
