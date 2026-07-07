import Card from '../common/Card';
import Button from '../common/Button';
import { services } from '../../data/siteData';

export default function ServiceGrid({ limit }) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map(({ icon: Icon, title, desc, image, slug }) => (
        <Card key={title} className="overflow-hidden">
          <img src={image} alt={title} className="h-44 w-full object-cover" />
          <div className="p-5">
            <div className="mb-4 grid size-12 place-items-center rounded-xl bg-cyan/10 text-cyan"><Icon /></div>
            <h3 className="text-xl font-black text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{desc}</p>
            <Button to={`/services/${slug}`} variant="secondary" className="mt-5 w-full" icon={false}>View Details</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
