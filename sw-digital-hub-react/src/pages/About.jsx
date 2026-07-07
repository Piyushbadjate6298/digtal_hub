import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import FloatingTechCards from '../components/animations/FloatingTechCards';
import Team from '../components/sections/Team';
import { featureChecks } from '../data/siteData';

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About SW Digital Hub" title="A premium digital studio for websites, branding, marketing, and business software." text="SW Digital Hub helps businesses present themselves with confidence through clean design, strong service storytelling, conversion-focused pages, and scalable frontend systems." image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80" />
      <section className="container-pad section-space grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
        <div>
          <SectionTitle eyebrow="Our Mission" title="Build digital experiences that feel premium, load fast, and help businesses grow." text="We design service pages, product sections, campaign assets, and frontend interfaces that make it easier for visitors to understand value and take action." />
          <div className="grid gap-3 sm:grid-cols-2">
            {featureChecks.map((item) => <span key={item} className="rounded-xl bg-white/[0.06] px-4 py-3 text-sm text-slate-200">{item}</span>)}
          </div>
        </div>
        <FloatingTechCards />
      </section>
      <Team />
    </>
  );
}
