import Button from '../common/Button';
import Badge from '../ui/Badge';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid bg-[length:46px_46px] opacity-20" />
      <div className="container-pad relative grid gap-10 py-20 lg:grid-cols-[1fr_.85fr] lg:items-center">
        <div>
          <Badge>Premium Digital Growth Partner</Badge>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-none tracking-normal text-white sm:text-6xl lg:text-7xl">Build a sharper digital presence with SW Digital Hub.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">We design websites, campaigns, dashboards, and brand systems that help service businesses look trusted, explain value, and convert better.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/free-audit">Get Free Audit</Button>
            <Button to="/portfolio" variant="secondary">View Portfolio</Button>
          </div>
        </div>
        <div className="glass rounded-2xl p-3">
          <img className="h-[460px] w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80" alt="Digital team building website strategy" />
        </div>
      </div>
    </section>
  );
}
