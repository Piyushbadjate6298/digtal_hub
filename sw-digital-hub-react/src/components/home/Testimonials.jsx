import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Star } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { testimonials } from '../../data/siteData';

export default function Testimonials() {
  return (
    <section className="container-pad section-space">
      <SectionTitle center eyebrow="Student Success" title="Trusted by learners, clients, and project builders." text="Real outcomes come from guided practice, clear delivery systems, and consistent support." />
      <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 3500 }} spaceBetween={22} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
        {testimonials.map((item) => (
          <SwiperSlide key={item.name} className="pb-12">
            <article className="glass min-h-64 rounded-2xl p-6">
              <div className="mb-5 flex gap-1 text-cyan">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill="currentColor" />)}</div>
              <p className="leading-7 text-slate-200">"{item.quote}"</p>
              <div className="mt-6">
                <strong className="block text-white">{item.name}</strong>
                <span className="text-sm text-slate-400">{item.role}</span>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
