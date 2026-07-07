import { faqs } from '../../data/siteData';
import SectionTitle from '../common/SectionTitle';
import Accordion from '../ui/Accordion';

export default function FAQ() {
  return (
    <section className="container-pad section-space">
      <SectionTitle eyebrow="FAQ" title="Questions businesses usually ask before starting." />
      <Accordion items={faqs} />
    </section>
  );
}
