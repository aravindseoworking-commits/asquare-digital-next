import SeoJsonLd from '@/components/SeoJsonLd';

export const metadata = {
  title: "Services | A Square Digital Marketing",
  description: "SEO, PPC, Lead Generation and Performance Marketing services."
};

const services = [
  {
    title: 'Search Engine Optimization (SEO)',
    bullets: ['On-page SEO', 'Technical SEO', 'Link building', 'Local SEO']
  },
  {
    title: 'Google Ads & PPC',
    bullets: ['Search & Display', 'Remarketing', 'Shopping Ads', 'Conversion tracking']
  },
  {
    title: 'Lead Generation',
    bullets: ['Funnel design', 'Landing page CRO', 'Email automation', 'Qualified prospects']
  },
  {
    title: 'Performance Marketing',
    bullets: ['Full-funnel strategy', 'ROAS optimisation', 'Creative testing', 'Attribution']
  }
];

export default function Services() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Marketing",
    "provider": { "@type": "Organization", "name": "A Square Digital Marketing" }
  };

  return (
    <>
      <SeoJsonLd data={serviceSchema} />
      <div className="container py-14">
        <h1 className="text-4xl font-bold text-[#0A66FF]">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {services.map(s => (
            <div key={s.title} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <ul className="mt-3 text-gray-600 list-disc ml-5">
                {s.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
