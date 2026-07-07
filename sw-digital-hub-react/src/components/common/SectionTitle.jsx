import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../../utils/animation';

export default function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <motion.div
      className={`mb-10 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ duration: 0.55 }}
    >
      {eyebrow && <span className="mb-3 inline-flex text-xs font-black uppercase tracking-[0.22em] text-cyan">{eyebrow}</span>}
      <h2 className="text-3xl font-black leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{text}</p>}
    </motion.div>
  );
}
