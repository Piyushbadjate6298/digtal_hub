import PageHeader from '../components/common/PageHeader';

export default function Terms() {
  return (
    <>
      <PageHeader eyebrow="Terms" title="Website terms for SW Digital Hub visitors." text="These terms describe general use of this frontend website and enquiry experience." />
      <section className="container-pad section-space">
        <div className="glass mx-auto max-w-3xl rounded-2xl p-6 leading-8 text-slate-300">
          <p>Content on this website is provided for business information and enquiry purposes. Project scope, pricing, delivery timelines, and responsibilities should be confirmed in a separate written proposal before work begins.</p>
        </div>
      </section>
    </>
  );
}
