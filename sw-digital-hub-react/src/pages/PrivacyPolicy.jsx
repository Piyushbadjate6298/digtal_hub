import PageHeader from '../components/common/PageHeader';

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeader eyebrow="Privacy Policy" title="How SW Digital Hub handles submitted information." text="This frontend policy page explains the intended handling of form and enquiry data once backend services are connected." />
      <section className="container-pad section-space">
        <div className="glass mx-auto max-w-3xl rounded-2xl p-6 leading-8 text-slate-300">
          <p>We collect only the information users voluntarily submit through contact, newsletter, and audit forms. Future backend integrations should store this data securely and use it only for responding to enquiries, audits, and requested communication.</p>
        </div>
      </section>
    </>
  );
}
