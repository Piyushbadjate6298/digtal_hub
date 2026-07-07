import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { serviceDetails, services } from '../data/siteData';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="container-pad section-space">
        <h1 className="text-4xl font-black text-white">Service not found</h1>
        <Button to="/services" className="mt-6">Back To Services</Button>
      </section>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <PageHeader eyebrow="Service Detail" title={service.title} text={service.detail} image={service.image} />
      <section className="container-pad section-space grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <Card className="p-6">
          <Icon className="mb-5 text-cyan" size={42} />
          <h2 className="text-2xl font-black text-white">{service.title}</h2>
          <p className="mt-4 leading-8 text-slate-300">{service.desc}</p>
          <Link to="/free-audit" className="mt-6 inline-flex font-black text-cyan">Request a free audit</Link>
        </Card>
        <div>
          <SectionTitle eyebrow="Delivery Flow" title="What happens inside this service." />
          <div className="grid gap-4">
            {serviceDetails.map((detail) => (
              <Card key={detail.title} className="p-5">
                <h3 className="font-black text-white">{detail.title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{detail.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
