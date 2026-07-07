import AuditForm from '../components/forms/AuditForm';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';

export default function FreeAudit() {
  return (
    <>
      <PageHeader eyebrow="Free Audit" title="Get a free digital audit for your website or online presence." text="We will review clarity, visuals, service structure, CTA flow, and conversion opportunities." image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80" />
      <section className="container-pad section-space grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <SectionTitle eyebrow="Audit Request" title="Share your current digital presence and goals." text="This is a frontend-only form UI ready to connect with a backend later." />
        <AuditForm />
      </section>
    </>
  );
}
