import { blogPosts } from '../../data/siteData';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

export default function Blog() {
  return (
    <section className="container-pad section-space">
      <SectionTitle eyebrow="Blog" title="Digital growth notes for service businesses." />
      <div className="grid gap-5 md:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="overflow-hidden">
            <img src={post.image} alt={post.title} className="h-44 w-full object-cover" />
            <div className="p-5">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan">{post.category}</span>
              <h3 className="mt-3 text-xl font-black text-white">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{post.excerpt}</p>
              <Button to={`/blog/${post.slug}`} variant="secondary" className="mt-5" icon={false}>Read More</Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
