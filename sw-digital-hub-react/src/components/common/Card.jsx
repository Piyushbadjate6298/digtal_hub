import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../../utils/animation';

export default function Card({ children, className = '', hover = true }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ duration: 0.55 }}
      className={`glass rounded-2xl ${hover ? 'transition duration-300 hover:-translate-y-2 hover:border-cyan/40 hover:bg-white/[0.1]' : ''} ${className}`}
    >
      {children}
    </motion.article>
  );
}
