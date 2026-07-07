import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Testimonials from '../components/home/Testimonials';
import { blogPosts } from '../data/siteData';

export default function Blog() {
  return (
    <>
      <PageHeader eyebrow="Blog" title="Insights for startups, service businesses, and digital-first brands." text="Practical articles on websites, service pages, digital marketing, UI structure, and business growth systems." image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80" />
      <section className="container-pad section-space">
        <SectionTitle eyebrow="Blog Details" title="Useful reads for building stronger digital experiences." />
        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title} className="overflow-hidden">
              <img src={post.image} alt={post.title} className="h-52 w-full object-cover" />
              <div className="p-5">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan">{post.category}</span>
                <h3 className="mt-3 text-xl font-black text-white">{post.title}</h3>
                <p className="mt-3 text-sm text-slate-400">{post.date}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{post.excerpt}</p>
                <Button to={`/blog/${post.slug}`} variant="secondary" className="mt-5" icon={false}>Read Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <Testimonials />
    </>
  );
}
