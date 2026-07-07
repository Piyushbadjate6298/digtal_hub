import { motion } from 'framer-motion';
import { Code2, GraduationCap, LineChart, Sparkles } from 'lucide-react';

const cards = [
  { icon: Code2, title: 'Web Apps', text: 'React + Vite' },
  { icon: GraduationCap, title: 'Training', text: 'Career tracks' },
  { icon: LineChart, title: 'Growth', text: 'Lead funnels' },
  { icon: Sparkles, title: 'Brand UI', text: 'Premium systems' }
];

export default function FloatingTechCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map(({ icon: Icon, title, text }, index) => (
        <motion.div
          key={title}
          className="glass rounded-2xl p-5"
          animate={{ y: [0, index % 2 ? 14 : -14, 0] }}
          transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon className="mb-4 text-cyan" />
          <h3 className="font-black text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-300">{text}</p>
        </motion.div>
      ))}
    </div>
  );
}
