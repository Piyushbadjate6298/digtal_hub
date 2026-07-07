import { motion } from 'framer-motion';
import { internshipSteps } from '../../data/siteData';
import { fadeUp, staggerContainer, viewport } from '../../utils/animation';

export default function InternshipTimeline() {
  return (
    <motion.div className="grid gap-5 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
      {internshipSteps.map(({ icon: Icon, title, desc, image }, index) => (
        <motion.article key={title} variants={fadeUp} className="glass overflow-hidden rounded-2xl">
          <div className="relative">
            <img src={image} alt={title} className="h-48 w-full object-cover" />
            <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-black text-cyan">Step {index + 1}</span>
          </div>
          <div className="p-5">
            <div className="mb-4 grid size-12 place-items-center rounded-xl bg-cyan/10 text-cyan"><Icon /></div>
            <h3 className="text-xl font-black text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{desc}</p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
