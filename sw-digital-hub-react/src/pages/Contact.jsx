import ContactSection from '../components/sections/ContactSection';
import PageHeader from '../components/common/PageHeader';

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Start a digital project with SW Digital Hub." text="Send your requirement for website development, marketing, branding, SEO, or business software UI." image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80" />
      <ContactSection />
    </>
  );
}
