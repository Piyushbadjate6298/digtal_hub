import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animation';

export default function PageHeader({ eyebrow, title, text, image }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-tech-grid bg-[length:44px_44px] opacity-25" />
      <div className="container-pad relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_.75fr] lg:items-center lg:py-24">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.6 }}>
          <span className="mb-3 inline-flex text-xs font-black uppercase tracking-[0.22em] text-cyan">{eyebrow}</span>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{text}</p>
        </motion.div>
        {image && (
          <motion.img
            src={image}
            alt=""
            className="h-72 w-full rounded-2xl object-cover shadow-panel"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          />
        )}
      </div>
    </section>
  );
}
