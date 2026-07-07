import Button from '../common/Button';
import AuditForm from '../forms/AuditForm';
import SectionTitle from '../common/SectionTitle';

export default function CTA() {
  return (
    <section className="container-pad section-space">
      <div className="glass grid gap-8 rounded-2xl p-7 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:p-10">
        <div>
          <SectionTitle eyebrow="Free Digital Audit CTA" title="Get a quick audit of your website, brand, or digital funnel." text="Share your URL and goals. We will identify clarity, design, content, and conversion opportunities." />
          <Button to="/free-audit" variant="secondary">Open Audit Page</Button>
        </div>
        <AuditForm />
      </div>
    </section>
  );
}
