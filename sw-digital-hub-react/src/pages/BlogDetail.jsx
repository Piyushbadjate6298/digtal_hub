import { useParams } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import Button from '../components/common/Button';
import NewsletterForm from '../components/forms/NewsletterForm';
import { blogPosts } from '../data/siteData';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="container-pad section-space">
        <h1 className="text-4xl font-black text-white">Blog post not found</h1>
        <Button to="/blog" className="mt-6">Back To Blog</Button>
      </section>
    );
  }

  return (
    <>
      <PageHeader eyebrow={post.category} title={post.title} text={post.excerpt} image={post.image} />
      <article className="container-pad section-space">
        <div className="mx-auto max-w-3xl">
          <span className="text-sm font-bold text-cyan">{post.date}</span>
          <p className="mt-5 text-lg leading-9 text-slate-300">{post.body}</p>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.06] p-6">
            <h2 className="mb-4 text-2xl font-black text-white">Get more digital growth notes</h2>
            <NewsletterForm />
          </div>
        </div>
      </article>
    </>
  );
}
