import Card from '../common/Card';
import Button from '../common/Button';
import { courses } from '../../data/siteData';

export default function CourseGrid({ limit }) {
  const items = limit ? courses.slice(0, limit) : courses;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map(({ icon: Icon, title, level, weeks, desc }) => (
        <Card key={title} className="p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan"><Icon /></div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-200">{weeks}</span>
          </div>
          <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan">{level}</span>
          <h3 className="mt-2 text-xl font-black text-white">{title}</h3>
          <p className="mt-3 min-h-20 text-sm leading-7 text-slate-300">{desc}</p>
          <Button to="/contact" variant="secondary" className="mt-5 w-full" icon={false}>Enquire Now</Button>
        </Card>
      ))}
    </div>
  );
}
