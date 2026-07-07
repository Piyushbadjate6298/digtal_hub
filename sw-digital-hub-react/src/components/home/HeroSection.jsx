import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';
import DigitalGlobe from '../animations/DigitalGlobe';

const points = ['Digital services', 'IT training', 'Internships', 'Placement support'];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid bg-[length:48px_48px] opacity-20" />
      <div className="container-pad relative grid min-h-[calc(100vh-80px)] gap-10 py-12 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="mb-4 inline-flex rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan">Premium Tech Startup Experience</span>
          <h1 className="max-w-4xl text-5xl font-black leading-none tracking-normal text-white sm:text-6xl lg:text-7xl">SW Digital Hub builds skills, software, and business growth.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">A modern digital services and training ecosystem for websites, apps, marketing, internships, student projects, and placement-ready career support.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/courses">Explore Courses</Button>
            <Button to="/services" variant="secondary">View Services</Button>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <span key={point} className="flex items-center gap-2 text-sm font-semibold text-slate-300"><CheckCircle2 size={18} className="text-cyan" /> {point}</span>
            ))}
          </div>
        </motion.div>
        <motion.div className="relative" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="glass rounded-2xl p-3">
            <DigitalGlobe />
          </div>
          <div className="glass absolute bottom-5 left-5 max-w-52 rounded-2xl p-4">
            <strong className="text-2xl text-cyan">360°</strong>
            <p className="mt-1 text-sm text-slate-300">Digital growth, training, and project support.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
