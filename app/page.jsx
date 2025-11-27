import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import TestimonialCard from '@/components/TestimonialCard';
import SeoJsonLd from '@/components/SeoJsonLd';

const services = [
  { title: 'Search Engine Optimization (SEO)', img: '/icons/seo.svg', desc: 'Rank higher & grow organic leads.' },
  { title: 'Google Ads & PPC', img: '/icons/ads.svg', desc: 'High-converting PPC campaigns.' },
  { title: 'Lead Generation', img: '/icons/leads.svg', desc: 'Qualified leads with proven funnels.' },
  { title: 'Performance Marketing', img: '/icons/performance.svg', desc: 'ROI-focused campaigns.' },
  { title: 'Social Media Marketing', img: '/icons/social.svg', desc: 'Brand growth across platforms.' },
  { title: 'Website Development', img: '/icons/web.svg', desc: 'Fast, SEO-optimized sites.' },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "A Square Digital Marketing",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/logo.png",
  "sameAs": []
};

export default function Home() {
  return (
    <>
      <SeoJsonLd data={organizationSchema} />
      <Hero />
      <section className="container mt-14">
        <h2 className="text-3xl font-bold text-[#0A66FF]">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {services.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </section>

      <section className="container mt-14">
        <h2 className="text-3xl font-bold text-[#0A66FF]">Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <CaseStudyCard title="E-Commerce SEO Boost" summary="+180% organic traffic in 6 months." img="/banner.webp" slug="ecom-seo" />
          <CaseStudyCard title="PPC Lead Gen" summary="CPL reduced by 45%." img="/banner.webp" slug="ppc-leads" />
          <CaseStudyCard title="Full Funnel Performance" summary="3x ROAS in 90 days." img="/banner.webp" slug="performance-funnel" />
        </div>
      </section>

      <section className="container mt-14">
        <h2 className="text-3xl font-bold text-[#0A66FF]">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <TestimonialCard name="Rahul Kumar" role="Founder, BrandX" text="Great results in a short time — highly recommend." />
          <TestimonialCard name="Sangeetha" role="Marketing Head, RetailCo" text="Professional, fast and attentive." />
          <TestimonialCard name="Mark" role="CEO, ShopNow" text="Our lead quality improved drastically." />
        </div>
      </section>
    </>
  );
}
